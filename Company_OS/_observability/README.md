# Observability — does the agent actually run the way the files configure it?

This folder answers one question: **config == actual?** It records what really happened during a run and lets `/trace-view` replay it as an in-chat flowchart + verdict.

## How it works
1. **Hooks** in `.claude/settings.json` fire on every session/tool event and call `log.sh`.
2. **`log.sh`** parses the hook's JSON event and appends one normalized line to `trace-YYYYMMDD.jsonl`:
   `{ts, event, tool, target, cwd, gate}`. It computes `gate` (`blocked` / `allowed-exec` / `n/a`) by the **same rule** as the approval gate, so a blocked live-write shows up in the trace.
3. **`expected.json`** is the configured contract (right launch dir, per-lane read-order, draft target, "mutations must be blocked").
4. **`/trace-view`** reads the latest trace + `expected.json`, diffs them, and renders the flowchart + a 5-point verdict checklist in chat.

## The 5 verdict checks
- **Booted from right trailhead** — cwd basename is `Claude Team`, boot marker found.
- **Read the map first, in order** — read-order matched for the active lane.
- **Stayed read-only** — no `allowed-exec` mutation outside `/execute-approved`.
- **Gate held** — every mutation attempt logged `gate=blocked` (unless `NG_EXECUTE=1`).
- **Drafted to queue** — a Write/Edit targeted `APPROVALS_QUEUE.md`.

## Files
- `log.sh` — the logger (committed). Keep its mutation regex in sync with the gate in `.claude/settings.json`.
- `expected.json` — the contract (committed).
- `trace-*.jsonl` — raw event traces (**gitignored**, ephemeral; safe to delete).

## Gate fire-drill
To prove the lock physically fires (not just that it wasn't tested), have an agent attempt one harmless live-write (e.g. a no-op `update-product`). The `PreToolUse` gate blocks it before execution and the trace records `gate=blocked` → `/trace-view` lights the "Gate held" node red→🔒.
