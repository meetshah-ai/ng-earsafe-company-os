#!/usr/bin/env python3
"""NG EarSafe approval gate (PreToolUse).

Denies every live-mutation tool unless NG_EXECUTE=1 (set ONLY by
/execute-approved). This is the secondary net behind each agent's read-only
tool allowlist.

ONE deliberate exception: Porter routes a read-only analytics call —
`query_data` — through the Porter__execute *dispatcher* (because a first-touch
query can trigger Porter-internal ingestion). That call only READS data; it
never writes to any live system (IG, Shopify, Meta, ...). So we let exactly
those read tool_ids through. This is what lets the department agents pull deep
analytics in their scheduled runs while remaining unable to mutate anything.
Every real Porter mutation (blend / schedule / ad / audience / catalog writes)
still hits the block below.

Contract: exit 0 = allow, exit 2 = block (stderr shown to the model).
Fail-safe: anything we cannot parse is blocked.
"""
import json
import os
import sys

# /execute-approved sets this — the one sanctioned path for live writes.
if os.environ.get("NG_EXECUTE") == "1":
    sys.exit(0)

# Porter dispatcher tool_ids that only READ (no upstream side effects), yet are
# routed through Porter__execute by the portal. Keep this set MINIMAL — every
# id here is a hole in the gate, so only add a Porter read that is provably
# side-effect-free and genuinely misrouted through execute.
PORTER_READ_ONLY = {
    "tool:porter-reporting:query_data",
}

try:
    data = json.load(sys.stdin)
except Exception:
    sys.stderr.write(
        "BLOCKED by NG EarSafe approval gate: unreadable tool payload.\n"
    )
    sys.exit(2)

tool_name = data.get("tool_name", "")
tool_input = data.get("tool_input") or {}
porter_tool_id = tool_input.get("tool_id", "")

if tool_name == "mcp__claude_ai_Porter__execute" and porter_tool_id in PORTER_READ_ONLY:
    sys.exit(0)

sys.stderr.write(
    "BLOCKED by NG EarSafe approval gate: live mutations only run via "
    "/execute-approved (NG_EXECUTE=1). Draft this action to "
    "Company_OS/APPROVALS_QUEUE.md instead, then have a human approve it.\n"
)
sys.exit(2)
