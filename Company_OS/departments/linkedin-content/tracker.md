# LinkedIn Content — Live Task Tracker

> Read at the start of every LinkedIn session to resume context instantly. After a task: update status + add the result observed. Each 30-day cycle: archive completed tasks into `learning-log.md` and reset.
>
> Last updated: 2026-07-03

## PRIORITY SYSTEM
- **P0** — this week. No new work starts until P0s clear.
- **P1** — this month. High-impact, quick.
- **P2** — 30–60 days.
- **P3** — 60–90 days / new bets.

## ⚠️ STANDING BLOCKER (2026-07-03) — read before drafting more content
Zero posts have gone live since the department was founded 2026-06-30. Two full drafting rounds are sitting unpublished in `APPROVALS_QUEUE.md` (LI-001–008 batch, then LI-C1-COMPANY/FOUNDER rolling-cycle). The constraint is **not** content — it's that no publish pipeline is deployed (`linkedin_all_in_one_EXECUTION_TASK.md` fully unchecked, no owner) and the governance decision `LI-SMART-000` has sat pending since 07-01. See LI-009/LI-010 (2026-07-03) in the queue: flag + a manual-post-bridge recommendation. **Do not generate a third round of drafts until this clears — ship what already exists.**

## CURRENT SPRINT — 2026-06-30 → 2026-07-13 (department stand-up)
| # | Task | Target | Expected impact | Status | Result |
|---|---|---|---|---|---|
| P0-1 | Stand up the LinkedIn publishing pipeline. **Superseded design as of 2026-07-01: deploy `linkedin_all_in_one_n8n.json`** (consolidates the old twice-weekly cron + the smart-cycle intelligence loop into one workflow — see `Automations/linkedin_n8n_handoff.md`). | `linkedin_all_in_one_EXECUTION_TASK.md` all 11 steps checked + workflow Active | Cadence engine that fixes the #1 problem (4 posts / 180 days) — still unfixed 6 days into department life | **BLOCKED — 0 of 11 setup steps done, no owner assigned (§0 of the execution task is blank).** Re-flagged 2026-07-03 as LI-009 (urgent). | — |
| P0-3 | **Wire the Claude intelligence layer to actually run** (2026-07-01, per Meet): structured S1–S5 signal scan (hearing-health/category/D2C+Amazon/LinkedIn-trending/competitor) + creative-asset decision now in `content_intelligence_engine.md`; scheduled run spec + ingest webhook in `automation_intelligence_run.md`. **Human steps left:** register 2 cloud routines (Mon/Thu 19:00 IST), add ingest webhook + `opt*_signal`/`opt*_asset` columns, test. | Intelligence run lands a `proposed` row before each slot | Fixes "brain described but unplugged" — turns trend-scanning on | TODO — folded into the `linkedin_all_in_one` deploy above; same blocker | — |
| P0-4 | **NEW (2026-07-03) — manual-post bridge.** Post `LI-C1-COMPANY` Option B + `LI-C1-FOUNDER` by hand (Riya/Meet copy-paste) this week rather than wait for automation. | 2 live posts by 2026-07-10 | Breaks the "0 posts since founding" pattern; gives the next LEARN cycle its first real data point | Recommended — LI-010 in queue, awaiting Meet decision | — |
| P0-2 | Draft Week-1 posts: 1× P1/P3 authority (Tue) + 1× P2 Comm 2.0 B2B (Fri) | APPROVALS_QUEUE | First consistent week; test pillar mix vs 5% eng baseline | DONE 2026-07-01 — LI-001, LI-002 drafted (company page) | Drafted to queue, awaiting approval |
| P1-1 | Build a 4-week content buffer ahead of cadence (8 approved posts) | Buffer ≥ 4 weeks deep | Pipeline never starves; protects the cron | DONE 2026-07-01 — 2-week/8-post calendar drafted (LI-001..LI-008), covers BOTH company page and founder personal account | Awaiting approval; need 2 more weeks to hit full 4-week depth |
| P1-2 | Repurpose the "sold out / organic-only" register into a founder building-in-public series | 3-post P3 series | Reuse the account's highest-resonance story (6.58% eng) | IN PROGRESS — LI-007 reuses the register in founder voice (1 of 3); LI-003, LI-008 also P3 founder posts | Awaiting approval + Day-7 read |
| P2-1 | Comm 2.0 workplace-health POV → soft bulk-enquiry CTA (link in first comment) | B1 corporate segment | First B2B inbound attributable to LinkedIn | IN PROGRESS — LI-002 (soft CTA), LI-006 (harder bulk CTA, 2-week A/B) | Awaiting approval + inbound tracking |
| P1-3 | NEW — Founder personal account added to scope (2026-07-01, per request): ~2,800 followers, no Windsor connector exists (LinkedIn API doesn't expose personal-profile analytics). Recommend Meet self-report weekly impressions until resolved. | Weekly manual read from Meet | Closes the learning-loop gap on the larger of the two accounts | TODO | LI-DATA-001 flagged in queue |

## PERFORMANCE TARGETS
| Metric | Baseline (2026-06-30) | 30-day | 60-day | 90-day |
|---|---|---|---|---|
| Followers | 1,453 (flat 6 mo) | 1,550 | 1,700 | 1,900 |
| Posts / week | ~0.16 (4 / 180 days) | 2.0 held | 2.0 held | 2.0 held |
| Avg engagement rate | ~5.5% (POV posts) | ≥5% | ≥5.5% | ≥6% |
| Avg impressions / post | ~240 | 350 | 450 | 600 |
| B2B inbounds (bulk enquiry) | 0 | — | ≥1 | ≥2 |

## DATA PULL SCHEDULE
- Weekly: pull `linkedin_organic` (Windsor) — follower count, account engagement, per-post SHARE performance. Read Day-7 of each post.
- Monthly: cross-check `googleanalytics4` for LinkedIn-referred sessions/conversions.

## DEPENDENCIES / BLOCKERS
- n8n LinkedIn OAuth credential must be connected for the org page (`13379517`) before the pipeline can publish. (See `automation_twice_weekly_post.md` §Setup.)
- Stock-before-demand: any Comm 2.0 bulk CTA requires live inventory confirmation (✅ as of 2026-06-27).
- Founder-voice posts require Meet's approval on register, not just topic.

<!-- This tracker is owned by the linkedin-content lane. Read it every session in this lane. -->
