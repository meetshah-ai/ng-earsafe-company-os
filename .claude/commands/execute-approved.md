---
description: The ONLY place live writes happen. Reads approved+unexecuted decisions and executes them. Human-initiated.
---

⚠️ **This is the only command permitted to mutate live systems** (Shopify, Meta Ads, Gmail, Canva, IG). It runs with `NG_EXECUTE=1`, which the approval-gate hook checks. Do not run it casually.

1. **Confirm intent.** State plainly that you are about to perform live writes and list exactly which `DECISION_LOG.md` rows you will execute (where `decision = approved` and `executed = no`). Wait for the human's explicit "go". If $ARGUMENTS names specific ids, only those.
2. **Set the gate flag for this session only.** Live writes require the environment to carry `NG_EXECUTE=1`. If it is not set, stop and tell the human to re-run with the execute environment (the gate will otherwise deny every mutation). Never set it for a standup/deep-loop session.
3. **Execute each approved row** using the appropriate MCP write tool (Shopify `graphql_mutation` / Meta create/update / Gmail send / Canva publish / IG post). For each: perform the write, capture the result/ID/permalink.
4. **Record the result.** Update that `DECISION_LOG.md` row to `executed = yes` (or `failed` with the error). Never silently succeed or fail.
5. **Report** a summary: what went live, with links/IDs, and anything that failed.

Rules:
- Execute **only** rows that are `approved` and `not yet executed`. Never execute a `pending` or `rejected` row.
- One row = one logged result. Keep the audit trail complete.
- If a write would contradict a `COMPANY_STATE.md` §5 gate that changed since approval (e.g. the SKU went out of stock), **halt that row** and re-queue it for re-approval.
