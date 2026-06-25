# APPROVALS QUEUE — pending human sign-off

> Every drafted action from any agent lands here. **Nothing in this queue has touched a live system.** Meet reviews with `/approvals`, marks each row `approved` or `rejected`. Approved rows move to `DECISION_LOG.md`; only `/execute-approved` then performs the live write.
>
> Append-only. Agents add rows at the bottom. Do not edit `status` unless you are the human reviewing, or the `/approvals` command acting on a human decision.

**Status values:** `pending` → `approved` / `rejected` → (on move) archived to `DECISION_LOG.md`.
**Risk:** `low` (reversible, no spend) · `med` (reversible, public/customer-facing) · `high` (spend or hard-to-reverse).

| id | date | dept | action | rationale | data-basis | risk | reversible? | status |
|---|---|---|---|---|---|---|---|---|
| _example_ | 2026-06-25 | content-growth | Draft + schedule Reel "8 calls, no ear pain" (Comm 2.0, Tribe A) | Top-converting angle; fills Tue slot in posting skeleton | Saves-to-reach baseline from `[[ng-earsafe-performance-data]]` | low | yes | pending |

<!-- New rows below. Schema: | id | date | dept | action | rationale | data-basis | risk | reversible? | status | -->
| IC-001 | 2026-06-25 | instagram-content | [REACTIVE OPPORTUNITY — 48hr window] Draft Reel: "The 2am alarm is set. Your ears are still open." — FIFA World Cup 2026 sleep-deprivation angle. Category-awareness post for open-ear. Tribe B + D. Friday 7pm slot. Full brief in daily trend test output (2026-06-25). Higgsfield prompt + caption included. No product hard-sell — Stage 1. | FIFA WC 2026 is the single biggest social moment in India right now (100M+ Zee viewers, Deccan Chronicle "alarm bells" coverage, widespread 2am/4am match-watch culture trending across IG). The sleep-deprivation angle is universally relatable to Indian fans and maps directly to the open-ear category truth: your canal is still open when the world matters. This is a category-awareness ride, not a product push — brand safety is high. Window closes ~48hrs as the initial wave of sleep-deprivation content saturates. | FIFA WC 2026 India viewership: Zee 100M+ (ZeeBiz Jun 2026); "alarm bells" Deccan Chronicle; Buffer trending audio confirms "Game Time" Future x Tyla is top-6 IG audio this week; ReelStars India fan content report Jun 2026. Posted-log check: no FIFA/sports angle attempted in Sprint 1. | low | yes | pending |
