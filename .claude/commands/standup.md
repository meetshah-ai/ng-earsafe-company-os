---
description: Daily cross-department standup — pull metrics (read-only), reconcile gates, draft actions to the approval queue.
---

Run the NG EarSafe daily standup by dispatching the `chief-of-staff` agent.

Steps:
1. Dispatch the **chief-of-staff** subagent.
2. It reads `Company_OS/COMPANY_STATE.md`, every scaffolded `Company_OS/departments/*/tracker.md` and `learning-log.md`, and the current `APPROVALS_QUEUE.md`.
3. It pulls live metrics **read-only** (Shopify revenue/orders/inventory, Windsor.ai Meta + Google Ads spend/ROAS, Porter IG signals, GSC organic). Prefer reading today's n8n 8 AM report output over re-pulling where possible.
4. It compares to north star + department targets, flags anomalies, and **reconciles cross-department gates** (`COMPANY_STATE.md` §5) — especially stock-before-demand and channel balance.
5. It writes a standup brief and appends every proposed action to `Company_OS/APPROVALS_QUEUE.md` with rationale, data-basis, risk, reversibility.

**This command must not touch any live system.** It is read + draft only. If any step would require a write/mutation tool, stop and queue it instead.

$ARGUMENTS can narrow scope to one department slug (e.g. `seo-aeo`). If empty, run all scaffolded departments.
