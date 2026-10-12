# Google Ads — Live Task Tracker

> Read at the start of every session, after `constitution.md`. Archive completed sprints to `learning-log.md` every 30 days.
>
> **🚨 Last updated: 2026-10-12 (Monday teardown, window 12 Sep–11 Oct). TRUE ROAS floor breach RECONFIRMED for a 2nd straight logged cycle — 30d 4.47× (vs 4.38× last cycle), live-day-only 4.22× (vs 4.23×) — essentially unchanged and still below the 6.0 floor. Sanity anchor still reproduces exactly (9.3787×/54.2% overclaim, 12th consecutive reproduction) — pipeline sound.** **🚨 THE GA-068 BLACKOUT IS NOT FIXED — IT HAS WORSENED.** The 08–11 Sep streak escalated last cycle (2026-10-07) has rolled OUT of the 30d window, but a **NEW, unbroken 08–11 Oct streak (4 days)** has rolled IN, extending through **yesterday** — the most recent day in this pull. The account may still be dark today. Re-escalated urgently as **GA-074**, with a new TEST (**GA-075**) reading 2026-10-15 to determine whether spend has resumed. **Last-7d (7.17×) and prior-7d (3.42×) readings are BOTH contaminated this cycle (4 and 2 dark days respectively) and are explicitly NOT treated as clean reads** — only the 30d and live-day-only figures are trustworthy. Zero-conversion search-term waste refreshed a 9th straight cycle, essentially flat: **₹11,846.01/30d, 743 terms (GA-073)**, supersedes GA-066. AI Max zero-conv tail is bit-for-bit identical to last cycle (**₹452.02/21 terms, GA-078**) — GA-013 remains unexecuted, now 2+ months. Shopping SKU mix: EarSafe Lite's lead over the other two SKUs has WIDENED (**12.74× platform**, up from 10.56×) — feed-priority reallocation refreshed as **GA-076**. **Budget verdict: HOLD, unchanged — the stepped rollback (GA-070, −20% on `SC - All Range`) remains the right call on the data but stays BLOCKED pending (a) Meet's confirmation of no-touch-window status and (b) GA-074's blackout question resolving — executing a budget cut into an active, unexplained blackout would confound the two effects.** Full detail: `Company_OS/google-ads/2026-10-11.md` and `learning-log.md` findings 85–92.
>
> **2026-10-07 (Thursday follow-up — gap cycle, 42 days / ~8 cycles since the last logged entry on 2026-08-27). STOP-LOSS TRIGGERED — TRUE ROAS has read below the 6.0 floor on three independent windows this cycle (30d 4.38×, last-7d 4.85×, prior-7d 3.80×), confirmed on a live-day-only basis (4.23×, excluding 9 dark days) — this is NOT a single contaminated reading. This is the first confirmed floor breach since direct-API tracking began; it supersedes every "closest to the floor yet" note below.** Sanity anchor still reproduces exactly (9.3787×/54.2% overclaim, 11th consecutive reproduction) — the pipeline is sound, the numbers are real. **A recurring, account-wide, multi-day spend blackout pattern was discovered: 9 of the last 30 days (30%) read ~₹0 spend across BOTH live campaigns simultaneously (08–11 Sep, 19–20 Sep, 30 Sep–01 Oct), with no precedent before September — estimated ~₹53,742/30d in foregone GA4 revenue. Escalated as GA-068, urgent.** **The live campaign roster has shrunk to 2:** `Search-26 May 25` is now fully dark (₹0 in-window, 2+ months paused) and `Pulse Search Campaign | 24 Aug 26` (flagged too-young on 08-27) is now also PAUSED — no verdict was ever reached on it, GA-060 closes as moot. AI Max has migrated to `SafeBuds-Search-28th July'26` since `Search-26` went dark — GA-013's original scope is stale (refreshed as GA-067). `SafeBuds-Search`'s BROAD-match fix (GA-059, approved by Meet 2026-09-09) is **still not executed**, now 72.7% of keyword spend (GA-069 refresh). Zero-conv search-term waste refreshed to a new baseline, ₹11,233.13/738 terms on the shrunk 2-campaign roster (GA-066) — not comparable to prior cycles' totals. Shopping SKU mix: Comm 2.0 (the feed-title fix from 08-27) is now the WORST-returning SKU (5.12×), not the best — EarSafe Lite (10.56×) is the standout; a feed-priority reallocation is recommended (GA-071), not budget-gated. **Budget verdict: do not scale — and go further, a stepped rollback (−20% on `SC - All Range`) is drafted as GA-070, pending Meet's confirmation of no-touch-window status (not checked this session).** Full detail: `Company_OS/google-ads/2026-10-07.md` and `learning-log.md` findings 76–84.
>
> **2026-09-09 (/approvals decisions): GA-028 approved (fund "wired open ear" ad group), GA-058 approved (881-term zero-conv negative batch, ~₹13,202.21/30d), GA-059 approved (BROAD→PHRASE/EXACT fix on SafeBuds-Search-28th July'26) — all three awaiting `/execute-approved`, STILL UNEXECUTED as of 2026-10-12. GA-034 RESOLVED — Meet confirmed the `SC - All Range`/`Search-26` pause was deliberate (product/inventory issue, not a performance problem); stop re-escalating this specific pause. GA-013 remains approved-but-unexecuted (unchanged).**
>
> **Cycles prior to 2026-09-09 (2026-08-27 and earlier) — unchanged, retained in full in git history (see `learning-log.md` for the institutional-truth summaries that carry forward).**

## PRIORITY SYSTEM
- **P0** — this week. Blocks everything else, or is time-boxed by an external deadline.
- **P1** — this sprint. The real levers.
- **P2** — next sprint / blocked.
- **P3** — backlog.

---

## 🚨 CAMPAIGN STATUS — UPDATED 2026-10-12 (2 live campaigns, unchanged roster from 2026-10-07; see note below for history)

**2026-10-12: roster unchanged at 2 live campaigns, but a fresh spend blackout is active.** `Search-26 May 25` remains fully dark (₹0 spend in-window). `Pulse Search Campaign | 24 Aug 26` remains PAUSED. `SC - All Range` ENABLED, ₹23,107.39/30d (77.8% of spend). `SafeBuds-Search-28th July'26` ENABLED, ₹6,601.63/30d (22.2%). **New this cycle: a 4-day near-zero-spend streak (08–11 Oct) runs through yesterday, the most recent day of data — both live campaigns read ~₹0 simultaneously on each of those 4 days.** See GA-074/GA-075.

---

## 🚨 CAMPAIGN STATUS (as of 2026-08-27 — retained for history)

**`SC - All Range` remains `status = ENABLED`** since its 2026-08-10 reactivation. **`Search-26 May 25` remains `status = PAUSED`.** `SafeBuds-Search-28th July'26` (`status = ENABLED`) continued spending throughout. A previously-unlogged 4th live campaign, `Pulse Search Campaign | 24 Aug 26`, appeared this cycle — later PAUSED before any verdict (see 2026-10-07 note).

**GA-034 (pause/reactivation cause) RESOLVED 2026-09-09** — Meet confirmed it was a deliberate product/inventory decision, not a performance problem. No longer an open item.

---

## ⏳ THE COUNTDOWN — 17 AUG 2026 HAS PASSED, LIVE EXPOSURE CONTINUES

**2026-10-12: now 56 days past the deadline.** P0-1 status remains UNCONFIRMED — this cycle's 30d overclaim (96.3%, clean) is far outside the 35–65% band, consistent with still-unresolved. The account is in its 2nd consecutive confirmed TRUE ROAS floor breach, and a fresh, unresolved account-wide spend blackout is layered on top (GA-074) — three compounding problems (measurement, demand/floor, and now a possible account-health/billing issue), not one.

Google's Smart Bidding change (budget-limited tROAS campaigns get pulled DOWN toward target instead of letting them overperform) took effect **2026-08-17.** Both live campaigns' tROAS targets were set against the inflated conversion value, and P0-1 remains unfixed. The exposure is live on every enabled campaign.

| Campaign | tROAS | Set at | Status (2026-10-12) |
|---|---|---|---|
| `SC - All Range` (`23278488657`) | **8.0** | campaign level | **ENABLED — live exposure to the 17 Aug bidding change on an uncorrected target, ongoing. 77.8% of account spend.** |
| `SafeBuds-Search-28th July'26` (`24068804553`) | unconfirmed — not yet audited | — | **ENABLED — 22.2% of account spend, exposure unquantified.** |
| `Search-26 May 25` (`22601036342`) | **9.0** | ad-group level (`178785500303`) | **PAUSED** — not exposed while dark, 2+ months now |
| `Pulse Search Campaign \| 24 Aug 26` | unconfirmed | — | **PAUSED — no verdict was ever reached (GA-060 closed as moot).** |

---

## ✅ SHIPPED — ⚠️ MOSTLY UNCONFIRMED, one confirmed execution (GA-031) since tracking began

| What | Result (as claimed) | Date | Latest verification (2026-10-12) |
|---|---|---|---|
| **GA-009 + GA-010 — 99 zero-conversion negative keywords (EXACT), campaign-level.** | **₹3,659/30d of waste removed** (claimed). | 2026-07-14 | ⚠️ **STILL NOT CONFIRMED** — superseded in scale by GA-073 regardless. |
| **P1-1 — Tablet excluded (−100% device bid), all campaigns.** | **₹363/30d recovered** (claimed). | 2026-07-14 | ⚠️ **STILL NOT CONFIRMED as a blanket cut** — and tablet converts on `SC - All Range` (28.93× platform), so a blanket exclusion would be actively wrong there. |
| **P1-2 — SafeBuds Ivory excluded** (`…51380726530327`) from `SC - All Range`. | **₹956/30d reallocated** (claimed). | 2026-07-14 | ⚠️ **UNCONFIRMED, moot** — Ivory no longer appears in the SKU pull at all (3 SKUs this cycle). |
| **GA-031 — Comm 2.0 Shopping feed title consolidated to a single string.** | ~₹1,300–1,800/30d estimated recovery (never the real reason to do it — feed consistency was). | drafted 2026-08-06 | ✅ **CONFIRMED EXECUTED 2026-08-27 — first confirmed execution of any queued Google Ads fix since tracking began. 2026-10-12: Comm 2.0 reads 6.24× platform (up from 5.12×), but EarSafe Lite (12.74×, widening lead) remains the true standout — see GA-076.** |

### 💰 Total claimed-shipped: ₹4,978/30d unconfirmed + GA-031 (confirmed) — **the negative-keyword batches (GA-058/066/073 lineage, ₹11,846.01/30d current) remain the account's largest unresolved write-path question, now 2+ months old.**

---

## CURRENT SPRINT

| # | Task | Target | Why it matters | Status |
|---|---|---|---|---|
| **P0-1** | **Fix the duplicate purchase conversion action.** | One purchase action, correct coverage, in the bidding goal | **56 days past the 17 Aug deadline with this unfixed.** 30d overclaim 96.3% (clean), far outside 35–65% band. | 🔴 **NOT STARTED/UNCONFIRMED — deadline missed, exposure live and ongoing.** |
| **P0-2** | **Re-baseline tROAS targets** against the corrected value, in ≤15%/week steps. | Each active campaign gets its own corrected target | Removes the live bidding-change exposure. | ⬜ Blocked by P0-1, now doubly moot given the floor breach |
| **P0-3** | **CLOSED 2026-07-23, reaffirmed every cycle since including 2026-10-12.** Marginal ROAS stands at −3.64×. | No re-read scheduled — wait for a natural spend variation. | Gate stays closed; no budget move. This cycle's naive last7-vs-prior7 delta (−1.86×) is not valid evidence — both windows are blackout-contaminated. | 🔴 **REJECTED — no budget headroom. Gate stays closed.** |
| **P0-8** | **NEW — Confirm whether the account is currently spending (GA-074/GA-075).** | Full-calendar-day spend check 12–15 Oct | A fresh, unbroken 4-day blackout (08–11 Oct) runs through yesterday — the account may still be dark today. Outranks every optimization on this page until resolved. | 🚨 **URGENT, NEW — read plan 2026-10-15.** |
| **P0-9** | **NEW — Confirm the root cause of the recurring account-wide blackouts (GA-068/074).** | Billing/payment/policy-center investigation | Now TWO separate confirmed multi-day streaks (Sept, Oct) — a genuinely recurring pattern, not a one-off. | 🚨 **STILL OPEN, ESCALATED — urgent.** |
| **P0-5** | **Audit the `SafeBuds-Search-28th July'26` campaign.** | Confirm bidding strategy/target, landing page, BROAD-match fix | Continues to clear the 6.0 floor decisively (11.41× platform, 2026-10-12). BROAD→PHRASE/EXACT fix (GA-059/069) still not executed, last confirmed 72.7% of keyword spend (not re-pulled this cycle). | 🟡 **Floor-clearing CONFIRMED repeatedly; BROAD-match fix still pending — GA-059/069.** |
| **P1-1** | **Rein in AI Max** — already ON, now on `SafeBuds-Search`, matching junk. | AI_MAX terms converting, or excluded | Zero-conv tail unchanged this cycle (₹452.02/21 terms, identical to last cycle) — GA-013 still unexecuted, refreshed as GA-078. | 🟡 GA-013 approved 2026-08-04, still awaiting `/execute-approved` — 2+ months. |
| **P1-2** | **Shopping feed titles / priority.** `SC - All Range` is the largest campaign by spend and is feed-targeted. | Titles rewritten/A-B'd via Merchant Center feed rules; feed priority reallocated toward the best SKU | **GA-031 (Comm 2.0) CONFIRMED EXECUTED — but did not become the best-returning SKU.** EarSafe Lite is, and its lead has widened (12.74× vs 10.56× last cycle). Feed-priority reallocation refreshed as GA-076. | 🟡 **Monitor Comm 2.0's fix; execute the EarSafe Lite reallocation (GA-076), not budget-gated.** |
| **P1-3** | **Enhanced Conversions.** | Enabled + verified | Attacks the platform-vs-GA4 gap from the other side, alongside P0-1. | 🔴 Not started |
| **P1-4** | **Execute GA-073 (refreshed 743-term zero-conv negative batch, ₹11,846.01/30d) once the write path can be confirmed to actually execute anything.** Supersedes GA-066, GA-058, and the full lineage back to GA-012. | 743 terms negatived, spend falls toward ~₹0 within one attribution window on covered spend | 13 straight cycles of prior batches show no confirmed execution — though GA-031 (a different action type) DID execute, narrowing the question to specifically negative-keyword pushes. | 🔴 **Blocked by unresolved write-path status.** |
| **P2-1** | **Build a conquest Search campaign** (SH-GA-11). | Dedicated Search campaign, conquest keywords | Best return in the account, still starved. Deferred past 17 Aug and past GA-034's resolution. | ⬜ Deferred |
| **P3-1** | **Geo/holdout incrementality test.** | Causal read on true incrementality | Would settle the overclaim question for good. | ⬜ Backlog |

---

## ❌ RETRACTED — do not resurrect

| Was | Why it's dead |
|---|---|
| **"The Quality Score scandal"** *(old P0-5/P0-6, GA-008)* | **FALSE.** Real daily QS reconfirmed a 12th time 2026-10-12 (1,795 keyword rows): max QS seen = 10, only one keyword at QS≤4 carries any (tiny) spend. **There is no QS problem.** |
| **"Shopping SKU mix is upside-down, Pro is the problem"** *(old P1-7, GA-004)* | **FALSE, repeatedly, in BOTH directions.** Do not resurrect any Pro- or Comm-2.0-focused framing. |
| **"Raise conquest keyword bids"** *(GA-006)* | **IMPOSSIBLE.** Shopping campaign, no keywords exist. Superseded by P2-1. |
| **"Pause the dormant SafeBuds campaign"** *(GA-007)* | **NO-OP.** Already `PAUSED`. |
| **"Roll the budget back to ₹1,800/day"** *(GA-001)* | **REJECTED.** Superseded by P0-3 (closed 2026-07-23, reaffirmed through 2026-10-12). |
| **"Tablet is a blanket free kill across every campaign"** *(old finding, P1-1)* | **NARROWED FURTHER** — no campaign currently has a clean, live, uncontested tablet free kill (tablet converts on `SC - All Range`, 28.93× platform, unchanged 2026-10-12). |
| **"Brand de-duplication (GA-005) has a stable, actionable ROAS gap"** *(GA-005, SH-GA-10)* | **CLOSED PERMANENTLY 2026-07-23 — GA-018. Stays closed through 2026-10-12.** |
| **"Google Ads has budget headroom above ~₹1,800/day"** *(GA-001, SH-GA-7)* | **CLOSED 2026-07-23 — GA-019. Reaffirmed through 2026-10-12** — the account is now in a confirmed, persistent floor breach, the opposite of headroom. |
| **"`Search \| SafeBuds \| OWS + Conquest` just needs more/better keywords"** *(P0-4, resolved 2026-08-04)* | **FALSE.** Every search term in the campaign's history shows zero conversions. Also wrong for the live successor. |
| **"`open ear headphones`'s zero-conversion reading proves demand collapsed"** | **REJECTED, CLOSED 2026-08-24 as GA-054.** No live spend since (home campaign dark). |
| **"`SafeBuds-Search`'s TABLET slice is a stable, safe-to-cut zero"** *(GA-024/GA-037)* | **REJECTED, CLOSED 2026-08-24 as GA-053.** Tablet still converts 2026-10-12. |
| **"The 08-02/08-16/08-23 anomaly is specifically a Sunday effect"** *(GA-057/SH-GA-25)* | **SUPERSEDED 2026-10-07** — folded into the larger multi-day blackout pattern (GA-068/074). |
| **🆕 "The GA-068 blackout was a one-off, now resolved"** | **REJECTED 2026-10-12.** A fresh, unbroken 08–11 Oct streak replaced the Sept streak that rolled out of the window. The cause is still unfixed. |

**Also: do not "build a SafeBuds Shopping campaign."** One already exists (`Shopping | SafeBuds | 7th May'26`, PAUSED, tROAS 10.0), as does `SC - All Range #2` (PAUSED, tROAS 8.0).

---

## PERFORMANCE TARGETS

| Metric | Current (last live pull, 12 Sep–11 Oct, direct API) | Floor | 30-day target | 90-day |
|---|---|---|---|---|
| **TRUE ROAS** | 🚨 **2026-10-12: 4.47× (30d); 4.22× live-day-only (excl. 8 dark days) — BELOW THE 6.0 FLOOR, reconfirmed for a 2nd straight logged cycle. Last-7d (7.17×) and prior-7d (3.42×) BOTH blackout-contaminated this cycle, not treated as clean reads.** *(2026-10-07: 4.38×/4.23× — essentially unchanged.)* | **6.0× — BREACHED, 2nd cycle running** | ≥ 9.0× (suspended pending floor recovery) | 9–11× band held while spend compounds |
| Marginal ROAS (11–12 Jul spike, fully matured) | **−3.64×** (unchanged since 2026-07-23, reaffirmed through 2026-10-12 — no new natural variation; this cycle's naive last7-vs-prior7 delta, −1.86×, is not usable evidence — both windows blackout-contaminated) — **gate CLOSED, rejected** | **6.0×** | N/A until re-opened by a genuine natural spend variation | ≥ 6.0 sustained |
| Platform overclaim | 🚨 **2026-10-12: 96.3% (30d, clean) — far outside the 35–65% band.** Last-7d (21.6%) and prior-7d (115.5%) both blackout-contaminated, not treated as signal. *(2026-10-07: 83.6% 30d.)* | 35–65% band | **< 20%** (after P0-1) | < 15% |
| Spend | 🚨 **2026-10-12: ₹29,709.02/30d (₹990.30/day blended, or ₹1,350.41/day on the 22 live days). NEW: 8 of 30 days near-zero spend, including a fresh unbroken 4-day streak (08–11 Oct) through yesterday.** *(2026-10-07: 9 of 30 days dark.)* | — | **HOLD — the stepped rollback (GA-070) remains appropriate on the data but stays blocked pending the no-touch-window check and GA-074's resolution.** | Compound via +20%/wk **only** when marginal ≥ 6.0 **and** TRUE ROAS clears the floor |
| Zero-conversion waste | **₹11,846.01/30d** (GA-073, 743 terms, cost≥₹5 floor — 9th consecutive refresh, essentially flat vs GA-066's ₹11,233.13/738 terms) | — | Keep at ~₹0 via weekly prune, once execution can be confirmed | — |
| Lost IS (Budget) — `SC - All Range` | **71.0% Budget-lost** (15.0% Rank-lost) — 2026-10-12, essentially unchanged | — | Next budget dollar targets Shopping first, once BOTH the marginal gate AND the floor breach clear — still CLOSED | < 40% |
| Lost IS — `SafeBuds-Search` | **89.9% Budget-lost** / 9.4% Rank-lost — 2026-10-12, essentially unchanged, highest reading on record | — | No budget move until gate clears | — |

---

## DATA PULL SCHEDULE — 7 pulls, **direct Google Ads + GA4 APIs (Windsor fully retired), NO metric filters, ever.** Aggregate before selecting, never trust a single row.

| # | Connector | What | Notes |
|---|---|---|---|
| 1 | Google Ads API (direct, via `curl`) | campaign × day | Pull a WIDE date range once, slice in code into anchor/30d/7d/prior-7d/live-day-only windows — avoids a separate anchor query. Use full-calendar-day summation when computing TRUE ROAS, not just dates with an Ads row. |
| 2 | GA4 Data API (direct, via `requests`) | `google/cpc` × day | `sessionMedium = cpc` (EXACT) is **the one legal dimension filter**. Assert `len(rows)==rowCount` every pull. **The most recent 1–2 calendar days can read ₹0 revenue on real spend/sessions — a processing lag, not a demand signal — but 2026-10-12 shows this can ALSO be a multi-day account-wide spend blackout on the Ads side itself, not just a GA4-side lag. Check both.** |
| 3 | Google Ads API | keyword × Quality Score | **MUST NOT include `date`** in GAQL. **Any QS > 10 is a bug — re-pull.** |
| 4 | Google Ads API | search terms | Aggregate in code before selecting zero-conversion terms. A word-boundary brand/conquest regex is necessary but NOT sufficient — product-line-adjacent terms need a manual judgment hold-out too. Search-term-view covers ~69% of account spend (structural Shopping reporting gap). |
| 5 | Google Ads API | Shopping SKU | Assert sums to campaign spend. **3 rows this cycle** (Comm 2.0, SafeBuds Black, EarSafe Lite — Ivory remains absent). |
| 6 | Google Ads API | device | Assert sums to campaign spend. Cuts must be scoped **per campaign**. **Never trust a prior cycle's "dead" verdict without re-checking fresh, every cycle.** |
| 7 | Google Ads API | impression share | Cannot be queried alongside `quality_score` (Google API restriction). Filter to the live campaigns by current 30d spend before reporting. |

> 🚨 **The `requests` Python HTTP client gets a `503 "DNS resolution failure"` from `googleads.googleapis.com:searchStream` in some environments — use `curl` for all Ads calls, `requests` is fine for GA4.**
> 🚨 **Never put `conversions` or `impressions` in a `filters` argument. Pull everything, filter in code, and assert every breakdown sums to its parent total.**
> 🚨 **Never trust a "SHIPPED" status without a spend check** — and **check `campaign.status` before crediting or blaming any batch for a spend change.**
> 🚨 **NEW 2026-10-12: a blackout window clearing in one cycle's pull does NOT mean the underlying cause is fixed.** The 08–11 Sep streak (escalated 2026-10-07) simply rolled out of the 30d window one cycle later — it was immediately replaced by a fresh 08–11 Oct streak of the identical shape. Treat "no blackout visible this cycle" as a snapshot, not a resolution, until a dedicated multi-cycle clean-streak check (GA-072/SH-GA-26) confirms it.
> 🚨 **NEW 2026-10-12: when a 7-day window is more than half composed of near-zero-spend days, discard it entirely rather than reporting the raw ratio** — it is not merely imprecise, it is not even directionally trustworthy (this cycle's raw last-7d read 7.17×, driven by 3 live days carrying the whole window).
> 🚨 **A missing-Ads-row day is not a zero on the GA4 side — verify this in code (full-calendar-day summation), not just by rule.**
> 🚨 **Always sanity-check the DIRECTION of a ratio, not just its filter/reconciliation correctness.** TRUE ROAS = revenue ÷ spend. Any reading under ~2× is a red flag.
> 🚨 **Check for entirely new, previously-unlogged campaigns every cycle, not just changes to known ones.**

---

## DEPENDENCIES / BLOCKERS

- **NEW 2026-10-12: P0-8 (confirm the account is currently spending) is now the single highest-priority open item** — a fresh, unbroken 4-day blackout (08–11 Oct) runs through yesterday, the most recent day of data available. Read plan: 2026-10-15 (GA-075).
- **GA-068/GA-074 (recurring account-wide blackouts) remain the top escalation** — now confirmed across TWO separate multi-day streaks (Sept and Oct), not a one-off. Urgent billing/account-health investigation needed.
- **GA-070 (stepped rollback) remains drafted but NOT executable** — blocked on (a) Meet confirming the current no-touch-window status and (b) GA-074's blackout question resolving first, so a budget cut isn't confounded with an active outage.
- **GA-072/SH-GA-26 (does the blackout suppress TRUE ROAS via Smart Bidding disruption) — read date pushed further out.** The 14-consecutive-clean-day clock cannot start until GA-068/074's root cause is actually fixed, which it is not as of 2026-10-12.
- **P0-1 (conversion-action fix) still gates P0-2 (tROAS re-baseline)** — status unconfirmed, 56 days past the 17 Aug deadline.
- **P0-3 is CLOSED as of 2026-07-23, reaffirmed through 2026-10-12** — marginal ROAS −3.64×, no new valid natural spend variation (this cycle's reading is blackout-contaminated, not usable).
- **GA-059/069 (SafeBuds-Search BROAD-match fix) remains APPROVED (2026-09-09) and unexecuted**, 7+ escalation cycles, 2+ months. Not re-pulled 2026-10-12 to conserve tool budget — carried forward from the 2026-10-07 figure (72.7% of keyword spend).
- **SH-GA-15 (negative-keyword write-path investigation) — 13 straight cycles with no confirmed execution** of this specific action type, even though GA-031 (feed-title edit) DID execute.
- **GA-076 (Shopping feed-priority reallocation toward EarSafe Lite) is NOT budget-gated** — refreshed this cycle with a widened performance gap (12.74× vs 5.59–6.24×), ready for execution independent of every budget-side blocker above.
