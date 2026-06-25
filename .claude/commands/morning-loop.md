---
description: Autonomous per-department morning research loop — research, review hypotheses, check performance of past changes, recommend. Draft-only. Runs on a schedule.
---

Run the autonomous morning research loop for the NG EarSafe department named in $ARGUMENTS (e.g. `instagram-content`, `meta-ads`, `seo-aeo`). If no slug is given, run it for every 🟢 live department in `COMPANY_STATE.md` §6.

Dispatch that department's subagent. It performs these five steps, **read + draft only** (no live writes — the `NG_EXECUTE` gate blocks them):

1. **RESEARCH** — pull this department's live data (its §8 read-only connectors): for `instagram-content` the daily trend test + Porter IG signals; for `meta-ads` the competitor Ad Library teardown + NG campaign insights; for `seo-aeo` the rank/CTR + competitor SERP + AEO citation checks. Ground every observation in a real number or source.
2. **REVIEW HYPOTHESES** — read the department's `learning-log.md` open hypotheses and `tracker.md` in-flight tasks. State which are confirmed / rejected / still pending against today's data.
3. **CHECK PERFORMANCE OF PAST CHANGES** — read `Company_OS/DECISION_LOG.md` for this department's `executed = yes` rows. For each, compare the metric it was meant to move (then vs now). Mark each past change **working / not working / too-early-to-tell**, with the number. This is the accountability step — closing the loop on what we already shipped.
4. **SUGGEST CHANGES** — based on 1–3, propose specific next actions (creative briefs, rotations, rewrites, new content, kills/scales). Each must pass the department's gates (§7) and the `COMPANY_STATE.md` §5 cross-department gates (esp. stock-before-demand).
5. **RECOMMEND** — append each proposal to `Company_OS/APPROVALS_QUEUE.md` (rationale, data-basis, risk, reversibility), append the cycle's `hypothesis → result → learning` to the department's `learning-log.md`, and update `tracker.md` status. Then write a short morning brief: *what's working, what's not, what changed, what needs a decision (queue ids)*.

Rules:
- **Draft only.** Never call a mutation tool. Everything actionable becomes a queued draft for the human to approve via `/approvals` → `/execute-approved`.
- Be honest about stale or missing data — say so and flag it rather than guessing.
- North-star test every recommendation against ₹65L MRR (50/50 D2C/Amazon) at 5–6% EBITDA.
- Keep the brief tight and scannable — this is read over morning coffee.
