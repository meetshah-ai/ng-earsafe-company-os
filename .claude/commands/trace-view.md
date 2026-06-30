---
description: Observability — replay the latest run trace as an in-chat flowchart + verdict (config==actual). Read-only.
---

Render the NG EarSafe **agent observability view**: prove the last run behaved the way the files configure it.

## Steps
1. **Load** the most recent `Company_OS/_observability/trace-*.jsonl` (or the file named in $ARGUMENTS) and `Company_OS/_observability/expected.json`. If no trace exists, say so and stop (a run must happen first, with the logging hooks active).
2. **Parse** each trace line: `{ts, event, tool, target, cwd, gate}`. Identify the active lane from the read-order: the first `departments/<dept>/constitution.md` read tells you which lane's `expected.read_order` to diff against. If a subagent was dispatched, treat `SubagentStop` as the lane boundary.
3. **Classify** each tool event:
   - **read** (green): `Read`, `Glob`, `Grep`, and read-only MCP fetches (Porter `fetch`/`search`, Windsor `get_data`/`get_fields`, Shopify `graphql_query`/`run-analytics-query`/`get-*`/`list-*`/`search*`, Meta `*get*`/`*insights*`/`ads_library_search`, WebSearch, WebFetch).
   - **file-write** (blue): `Write`/`Edit`/`NotebookEdit` — note the `target`.
   - **mutation-attempt** (red): any line with `gate` = `blocked` or `allowed-exec`.

## Output (render in chat)

### 1) Flowchart
A compact top-to-bottom flow, e.g.:
```
SessionStart  ✓ cwd=…/Claude Team
   │
   ▼ READ-ORDER (lane: instagram-content)
   ├─ CLAUDE.md ............................. ✓
   ├─ COMPANY_STATE.md ...................... ✓
   ├─ constitution.md ...................... ✓
   ├─ tracker.md ........................... ✓
   └─ learning-log.md ...................... ✓ (in order)
   │
   ▼ WORK
   ├─ 🟢 read ×N  (Porter fetch, WebSearch …)
   ├─ 🔴 mutation-attempt → 🔒 GATE HELD (blocked)   ← fire-drill
   └─ 🔵 file-write → APPROVALS_QUEUE.md
   │
   ▼ Stop  ✓
```
Use 🟢 read / 🔵 file-write / 🔴 mutation, and 🔒 for a blocked gate. Collapse long runs of reads into a count.

### 2) Verdict checklist
For each of `expected.verdict_checks`, print ✅ / ⚠️ / ❌ with the one evidence line from the trace that proves it:
- **Booted from right trailhead** — `cwd` basename == `Claude Team` and the boot marker read appears.
- **Read the map first, in order** — the lane's `read_order` files appear, in order, before the first work tool.
- **Stayed read-only** — no `gate=allowed-exec` line (unless this was an `/execute-approved` session).
- **Gate held** — every `gate=blocked` line is reported; if the fire-drill ran, confirm it was blocked.
- **Drafted to queue** — a file-write `target` contained `APPROVALS_QUEUE.md`.

End with one line: **VERDICT: config == actual ✓** or a short list of the gaps found (e.g. "read-order skipped learning-log.md", "no draft written").

## Rules
- **Read-only.** This command never writes a live system and never edits the trace.
- Ground every check in actual trace lines — quote the `ts`/`tool`. If the trace is empty or the hooks didn't fire, say so plainly rather than inferring success.
- $ARGUMENTS = optional explicit trace filename or a lane slug to scope the read-order diff.
