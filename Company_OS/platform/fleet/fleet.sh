#!/usr/bin/env bash
# NG EarSafe — Agent Fleet Dashboard
#
#   ./fleet.sh          launch the dashboard (tmux)
#   ./fleet.sh --once   print one snapshot to the terminal and exit (no tmux)
#
# Reads the Claude Developer Platform via `ant`. Read-only: this script never
# creates, updates, pauses or unpauses anything. It only looks.
#
# A background collector refreshes a JSON cache every REFRESH seconds; the four
# panes render from that cache. One set of API calls feeds all panes.

set -uo pipefail

SESSION="ngfleet"
CACHE="${TMPDIR:-/tmp}/ngfleet-cache"
REFRESH=60           # seconds between API refreshes
REPO="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
QUEUE="$REPO/Company_OS/APPROVALS_QUEUE.md"
SELF="$REPO/Company_OS/platform/fleet/fleet.sh"

# ── colours ───────────────────────────────────────────────────────────────────
B=$'\033[1m'; DIM=$'\033[2m'; R=$'\033[0m'
RED=$'\033[31m'; GRN=$'\033[32m'; YEL=$'\033[33m'; BLU=$'\033[34m'; CYA=$'\033[36m'; GRY=$'\033[90m'

# ── time helpers (BSD/macOS date) ─────────────────────────────────────────────
# ISO-8601 UTC -> epoch. Tolerates fractional seconds.
iso2epoch() {
  local s="${1%%.*}"; s="${s%Z}"
  date -j -u -f "%Y-%m-%dT%H:%M:%S" "$s" +%s 2>/dev/null || echo 0
}

# epoch -> "Tue 07:00 IST" in the founder's timezone
iso2ist() {
  local e; e="$(iso2epoch "$1")"; [ "$e" -eq 0 ] && { echo "—"; return; }
  TZ="Asia/Kolkata" date -r "$e" "+%a %H:%M IST" 2>/dev/null || echo "—"
}

# epoch -> "in 7h" / "3d ago"
human_delta() {
  local e; e="$(iso2epoch "$1")"; [ "$e" -eq 0 ] && { echo ""; return; }
  local now d; now="$(date +%s)"; d=$(( e - now ))
  local ahead="in " ; if [ "$d" -lt 0 ]; then ahead=""; d=$(( -d )); fi
  local suf=""; [ -z "$ahead" ] && suf=" ago"
  if   [ "$d" -lt 3600 ];  then echo "${ahead}$(( d / 60 ))m${suf}"
  elif [ "$d" -lt 86400 ]; then echo "${ahead}$(( d / 3600 ))h${suf}"
  else                          echo "${ahead}$(( d / 86400 ))d${suf}"; fi
}

# ── collector: one set of API calls -> JSON cache ─────────────────────────────
collect() {
  mkdir -p "$CACHE"
  while true; do
    # `ant … list` streams one JSON object per line; slurp into an array.
    ant beta:agents      list                 2>/dev/null | jq -s '.' > "$CACHE/agents.json.tmp"      && mv "$CACHE/agents.json.tmp"      "$CACHE/agents.json"
    ant beta:deployments list                 2>/dev/null | jq -s '.' > "$CACHE/deployments.json.tmp" && mv "$CACHE/deployments.json.tmp" "$CACHE/deployments.json"
    ant beta:deployment-runs list --max-items 15 2>/dev/null | jq -s '.' > "$CACHE/runs.json.tmp"     && mv "$CACHE/runs.json.tmp"        "$CACHE/runs.json"
    ant beta:sessions    list --limit 10      2>/dev/null | jq -s '.' > "$CACHE/sessions.json.tmp"    && mv "$CACHE/sessions.json.tmp"    "$CACHE/sessions.json"

    # Deployments only carry agent linkage on retrieve, not on list.
    # `ant` reads stdin, so it must be fed /dev/null — inside a pipeline it would
    # otherwise swallow the remaining ids and only the first deployment resolves.
    local ids; ids="$(jq -r '.[].id' "$CACHE/deployments.json" 2>/dev/null)"
    for d in $ids; do
      ant beta:deployments retrieve --deployment-id "$d" 2>/dev/null </dev/null
    done | jq -s '.' > "$CACHE/deployments_full.json.tmp" && mv "$CACHE/deployments_full.json.tmp" "$CACHE/deployments_full.json"

    date +%s > "$CACHE/updated_at"
    sleep "$REFRESH"
  done
}

cache_age() {
  [ -f "$CACHE/updated_at" ] || { echo "—"; return; }
  local u; u="$(cat "$CACHE/updated_at")"
  echo "$(( ( $(date +%s) - u ) / 1 ))s ago"
}

wait_for_cache() {
  local n=0
  while [ ! -f "$CACHE/deployments_full.json" ] && [ "$n" -lt 40 ]; do
    printf "\r  %sloading fleet…%s" "$DIM" "$R"; sleep 1; n=$(( n + 1 ))
  done
  printf "\r                    \r"
}

# Emits: agent_id \t name \t model \t depl_name \t status \t next_run_iso
# Agents with no deployment get status "none" — the silent-failure case.
fleet_rows() {
  jq -r --slurpfile depls "$CACHE/deployments_full.json" '
    ($depls[0] // []) as $d
    | .[]
    | select(.archived_at == null)
    | .id as $aid
    | ($d | map(select(.agent.id == $aid and .archived_at == null)) | first) as $dep
    | [ $aid,
        (.name | sub("^NG EarSafe — "; "")),
        (.model.id // "—"),
        ($dep.name // "—"),
        ($dep.status // "none"),
        ($dep.schedule.upcoming_runs_at[0] // "")
      ] | @tsv
  ' "$CACHE/agents.json" 2>/dev/null
}

# ── pane: FLEET ───────────────────────────────────────────────────────────────
pane_fleet() {
  printf "%s╭─ FLEET ─ agents & their schedules %s(refreshed %s)%s\n\n" "$B$CYA" "$GRY" "$(cache_age)" "$R"
  printf "    %-26s %-16s %-24s %s\n" "AGENT" "MODEL" "SCHEDULED AS" "NEXT RUN"
  printf "  %s%s%s\n" "$GRY" "──────────────────────────────────────────────────────────────────────────────────" "$R"

  fleet_rows | while IFS=$'\t' read -r aid name model dname dstatus next; do
    case "$dstatus" in
      active) glyph="${GRN}●${R}"; st="${GRN}active${R}" ;;
      paused) glyph="${YEL}⏸${R}"; st="${YEL}paused${R}" ;;
      *)      glyph="${RED}○${R}"; st="${RED}NO SCHEDULE${R}"; dname="—" ;;
    esac

    if [ "$dstatus" = "active" ] && [ -n "$next" ]; then
      when="$(iso2ist "$next")  ${GRY}$(human_delta "$next")${R}"
    elif [ "$dstatus" = "paused" ]; then
      when="${YEL}will not fire${R}"
    else
      when="${RED}never${R}"
    fi

    printf "  %b %-26s %s%-16s%s %-24s %b\n" "$glyph" "$name" "$GRY" "$model" "$R" "$dname" "$when"
    printf "    %s%-26s %s%s\n" "$GRY" "$aid" "$st" "$R"
  done
  echo
}

# ── pane: RUNS ────────────────────────────────────────────────────────────────
pane_runs() {
  printf "%s╭─ RUNS ─ what actually fired%s\n\n" "$B$CYA" "$R"

  # Every field gets a non-empty default: tab is IFS-whitespace, so an empty
  # field would be collapsed by `read` and shift every column after it.
  jq -r --slurpfile depls "$CACHE/deployments_full.json" '
    ($depls[0] // []) as $d
    | .[]
    | .deployment_id as $did
    | [ .created_at,
        (($d | map(select(.id == $did)) | first | .name) // ("(deleted) " + ($did | .[5:13]))),
        (if .error then "ERR" else "ok" end),
        (.trigger_context.type // "—"),
        (.error.type // "—")
      ] | @tsv
  ' "$CACHE/runs.json" 2>/dev/null \
  | while IFS=$'\t' read -r created dname state trig etype; do
      if [ "$state" = "ERR" ]; then
        printf "  %s✗%s %s%-11s%s %-24s %s%s%s\n" "$RED" "$R" "$GRY" "$(human_delta "$created")" "$R" "$dname" "$RED" "$etype" "$R"
      else
        printf "  %s✓%s %s%-11s%s %-24s %s%s%s\n" "$GRN" "$R" "$GRY" "$(human_delta "$created")" "$R" "$dname" "$GRY" "$trig" "$R"
      fi
    done
  echo
}

# ── pane: SESSIONS ────────────────────────────────────────────────────────────
pane_sessions() {
  printf "%s╭─ SESSIONS ─ live now%s\n\n" "$B$CYA" "$R"

  local running
  running="$(jq -r '[.[] | select(.status == "running")] | length' "$CACHE/sessions.json" 2>/dev/null)"
  if [ "${running:-0}" -gt 0 ]; then
    printf "  %s%s● %s working right now%s\n\n" "$B" "$GRN" "$running" "$R"
  else
    printf "  %sidle — nothing executing%s\n\n" "$GRY" "$R"
  fi

  jq -r '.[] | [.status, .created_at, .id] | @tsv' "$CACHE/sessions.json" 2>/dev/null | head -8 \
  | while IFS=$'\t' read -r status created id; do
      if [ "$status" = "running" ]; then
        printf "  %s●%s %-8s %s%-9s %s%s\n" "$GRN" "$R" "$status" "$GRY" "$(human_delta "$created")" "${id:0:18}" "$R"
      else
        printf "  %s○ %-8s %-9s %s%s\n" "$GRY" "$status" "$(human_delta "$created")" "${id:0:18}" "$R"
      fi
    done
  echo
}

# ── pane: ALERTS ──────────────────────────────────────────────────────────────
# The whole point of the dashboard: things that are quietly broken.
pane_alerts() {
  printf "%s╭─ ALERTS%s\n\n" "$B$CYA" "$R"
  local n=0

  # 1. Agent with no deployment — it will never run, and nothing tells you.
  while IFS=$'\t' read -r aid name model dname dstatus next; do
    [ "$dstatus" = "none" ] || continue
    printf "  %s%s✗ %s has no schedule%s\n" "$B" "$RED" "$name" "$R"
    printf "    %sIt exists but nothing will ever trigger it.%s\n\n" "$GRY" "$R"
    n=$(( n + 1 ))
  done < <(fleet_rows)

  # 2. Paused deployment — was scheduled, isn't running.
  while IFS=$'\t' read -r aid name model dname dstatus next; do
    [ "$dstatus" = "paused" ] || continue
    printf "  %s%s⏸ %s is paused%s\n" "$B" "$YEL" "$dname" "$R"
    printf "    %sAgent: %s — scheduled, but switched off.%s\n\n" "$GRY" "$name" "$R"
    n=$(( n + 1 ))
  done < <(fleet_rows)

  # 3. Failed runs.
  local errs
  errs="$(jq -r '[.[] | select(.error != null)] | length' "$CACHE/runs.json" 2>/dev/null)"
  if [ "${errs:-0}" -gt 0 ]; then
    printf "  %s%s✗ %s failed run(s) in recent history%s\n" "$B" "$RED" "$errs" "$R"
    jq -r '.[] | select(.error != null) | "    \(.error.message)"' "$CACHE/runs.json" 2>/dev/null | head -3
    echo
    n=$(( n + 1 ))
  fi

  # 4. Drafts waiting on Meet. Table rows ending in `pending |`, minus the schema example.
  if [ -f "$QUEUE" ]; then
    local pend
    pend="$(grep '| pending |$' "$QUEUE" 2>/dev/null | grep -vc '_example_' || echo 0)"
    if [ "$pend" -gt 0 ]; then
      printf "  %s%s◆ %s draft(s) awaiting your approval%s\n" "$B" "$BLU" "$pend" "$R"
      printf "    %sRun /approvals to review.%s\n\n" "$GRY" "$R"
      n=$(( n + 1 ))
    fi
  fi

  [ "$n" -eq 0 ] && printf "  %s✓ fleet healthy — nothing needs you%s\n" "$GRN" "$R"
  echo
}

# ── render loop ───────────────────────────────────────────────────────────────
loop() {
  local fn="$1"
  wait_for_cache
  while true; do
    clear
    "$fn"
    sleep 10
  done
}

snapshot() {
  wait_for_cache
  pane_fleet; pane_alerts; pane_runs; pane_sessions
}

# ── entrypoint ────────────────────────────────────────────────────────────────
case "${1:-}" in
  --collect)       collect ;;
  --pane)          loop "pane_$2" ;;
  --once)
    mkdir -p "$CACHE"
    ( collect ) & COLLECTOR=$!
    trap 'kill $COLLECTOR 2>/dev/null' EXIT
    snapshot
    ;;
  *)
    command -v tmux >/dev/null || { echo "tmux not installed"; exit 1; }
    command -v ant  >/dev/null || { echo "ant CLI not installed"; exit 1; }
    command -v jq   >/dev/null || { echo "jq not installed"; exit 1; }

    if tmux has-session -t "$SESSION" 2>/dev/null; then
      exec tmux attach -t "$SESSION"
    fi

    # Four panes side by side need room. A default 80-col Terminal wraps into mush,
    # so ask for a wider window rather than rendering something unreadable.
    cols="$(tput cols 2>/dev/null || echo 80)"
    if [ "$cols" -lt 150 ]; then
      printf "\n  %sYour Terminal window is too narrow%s (%s columns; needs 150+).\n" "$B$YEL" "$R" "$cols"
      printf "  Maximize this window — green button, top-left, or %s⌃⌘F%s for fullscreen —\n" "$B" "$R"
      printf "  then press %sEnter%s to launch. (Ctrl-C to cancel.)\n\n  " "$B" "$R"
      read -r _
    fi

    rm -rf "$CACHE"; mkdir -p "$CACHE"

    # Layout:  ┌─────────── collector (1 line) ───────────┐
    #          │  FLEET          │  ALERTS                │
    #          │  RUNS           │  SESSIONS              │
    # Split by pane *id* (%N), never index — tmux renumbers indices on every split.
    tmux new-session -d -s "$SESSION" -n fleet "bash '$SELF' --collect"

    local p_fleet p_alerts
    p_fleet="$(tmux  split-window -t "$SESSION:0" -v -P -F '#{pane_id}' "bash '$SELF' --pane fleet")"
    p_alerts="$(tmux split-window -t "$p_fleet"   -h -P -F '#{pane_id}' "bash '$SELF' --pane alerts")"
    tmux split-window -t "$p_fleet"  -v "bash '$SELF' --pane runs"
    tmux split-window -t "$p_alerts" -v "bash '$SELF' --pane sessions"

    # The collector is plumbing, not a view — squeeze it to a single line.
    tmux resize-pane -t "$SESSION:0.0" -y 1
    tmux select-pane -t "$p_alerts"

    tmux set -t "$SESSION" status-style "bg=colour234 fg=colour45"
    tmux set -t "$SESSION" status-left  " #[bold]NG EarSafe · Agent Fleet#[default] "
    tmux set -t "$SESSION" status-right "#[fg=colour244]q = quit · %H:%M "
    tmux set -t "$SESSION" status-left-length 40
    tmux bind-key -T root q kill-session

    exec tmux attach -t "$SESSION"
    ;;
esac
