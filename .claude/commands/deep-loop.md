---
description: Weekly per-department learning loop — LEARN→PLAN→DRAFT→REVIEW, log learnings, draft next sprint.
---

Run the NG EarSafe weekly deep-loop.

For each scaffolded department (or the one named in $ARGUMENTS):

1. **LEARN** — dispatch the department's subagent (or the `chief-of-staff` if none yet). Pull this cycle's data read-only. Read its `tracker.md` + `learning-log.md`.
2. **PLAN** — propose the next 14-day sprint for the lane, tied to `COMPANY_STATE.md` north star and the department's `tracker.md` priorities.
3. **DRAFT** — append the sprint's proposed actions to `Company_OS/APPROVALS_QUEUE.md` (draft only).
4. **REVIEW** — append a `hypothesis → result → learning` entry to the department's `learning-log.md`; update `tracker.md` status/priorities; if a skill earned its keep or underperformed, draft a `SKILLS_MATRIX.md` status change to the queue.

Then have the **chief-of-staff** roll up learnings across departments and note any cross-pollination (e.g. a Content insight that should inform Meta, an SEO finding that should inform CRO) in the standup brief.

**Read + draft only. No live writes.** $ARGUMENTS = optional department slug; empty = all scaffolded departments.
