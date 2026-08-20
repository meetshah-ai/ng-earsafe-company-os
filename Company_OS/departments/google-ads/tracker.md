# Google Ads — Live Task Tracker

> Read at the start of every session, after `constitution.md`. Archive completed sprints to `learning-log.md` every 30 days.
>
> **Last updated: 2026-08-20 (Thursday follow-up — 9th direct-API cycle). The 17 Aug bidding-change deadline is now 3 days in the past, live, unaddressed. P0-1 (conversion fix) is STILL NOT STARTED.** The overclaim did not improve — 30d read 80.9%, worse than last cycle's 77.2%; the clean, stable last-7d window reads 77.3% (essentially flat vs 79.3% last cycle), still well above the 65% band ceiling. **Last-7d TRUE ROAS (6.94×) is the lowest last-7d reading on record — still above the 6.0 floor, but the closest it has ever come.** **The zero-conversion search-term waste batch GREW BACK this cycle after 3 straight cycles of decline: ₹14,325.29/972 terms (GA-045, supersedes GA-040) — the write-path execution question is now 9 cycles old with zero evidence of resolution.** **AI Max's zero-conv tail rose a 2nd straight cycle (₹773.12→₹836.26/43 terms) — GA-013 (approved 08-04) still not executed, refreshed as GA-049.** **A near-miss: `SafeBuds-Search-28th July'26`'s queued TABLET exclusion (GA-037) has been RETRACTED — the slice converted for the first time this cycle (1 conv/₹3,386.41/11.25× platform ROAS). Do not execute GA-037.** **`SafeBuds-Search-28th July'26`'s BROAD-match problem (55/84 keywords) re-verified at keyword level a 3rd time — unchanged in structure, now 71.1% of the campaign's keyword spend. Re-escalated a 3rd time as GA-047.** **`open ear headphones` posted a 2nd consecutive non-zero read (1.5 conv/₹3,278.50, same figures as last cycle) — leaning toward recovered, GA-036 investigation held open one more cycle.** **Comm 2.0's feed-title split (GA-031) remains unresolved, 9th cycle running — this cycle the ROAS direction flipped, further undermining any performance-based case for the fix (still worth doing for feed consistency).**
>
> **2026-08-17 (Monday teardown — 8th direct-API cycle).** 🚨 **TODAY IS THE 17 AUG BIDDING-CHANGE DEADLINE. P0-1 (conversion fix) is STILL NOT STARTED — the exposure window is now closed, not just counting down.** The overclaim did not improve going into that day — it got worse: 77.2% (30d) / 79.3% (last-7d, a genuinely stable, non-transition window) vs the 54.2% anchor, both above the 35–65% band. **The one confirmed win: SH-GA-21 matured its first clean 7-day read exactly on schedule — `SC - All Range`'s reactivation (a ₹0-ratchet status toggle) restored account GA4 revenue/day to 82.3% of the ₹14,300.85 pre-pause baseline (₹11,772.36). GA-034 stayed half-resolved: the reactivation's OUTCOME was confirmed good, its CAUSE (and `Search-26`'s continued pause) remains unconfirmed as of 2026-08-20.** **The zero-conversion search-term waste batch refreshed an 8th time: ₹12,441.81/906 terms (GA-040, supersedes GA-035) — since GREW BACK to GA-045 (₹14,325.29/972 terms) on 2026-08-20.** **AI Max's zero-conv tail rose this cycle (₹576.80→₹773.12/46 terms), and rose again 2026-08-20 (→₹836.26/43 terms) — GA-013 (approved 08-04) still not executed.** **`SafeBuds-Search-28th July'26`'s BROAD-match problem (55/84 keywords) was re-checked at keyword level, still unchanged 2026-08-20 (71.1% of keyword spend). Re-escalated as GA-042, then GA-047.** **`open ear headphones` broke its 6-cycle zero-conversion streak (1.5 conv) — 2nd consecutive non-zero read confirmed 2026-08-20, leaning toward recovery.** **Comm 2.0's feed-title split (GA-031) remained unresolved, now 9th cycle running.**
>
> **Cycles prior to 2026-08-17 (2026-08-13, 2026-08-10 and earlier) — unchanged, retained in full in git history (see `learning-log.md` for the institutional-truth summaries that carry forward).**
>
> **2026-08-04 /approvals update:** GA-013 (AI Max negatives) and GA-023 (superseded batch) **APPROVED, awaiting `/execute-approved`** — ⚠️ **2026-08-20: GA-013 STILL not executed, and its underlying zero-conv tail has now risen 2 straight cycles — the batch itself is now GA-049 (evidence refresh), execution still rides on GA-013.** GA-014, GA-017/GA-027, and GA-024/GA-025 **REJECTED by Meet** — do not re-draft on the same evidence (GA-024's tablet finding was refreshed as GA-037, which is now itself RETRACTED as GA-046 — see below). GA-011 reviewed and closed (informational). Full detail in `queue-inbox.md`.
> **⚠️ Ad-hoc 2026-08-04 (Slack request) — P0-4 diagnosis complete AND its live successor caught repeating the mistake, see GA-029/GA-039/GA-042, now GA-047.** `Search | SafeBuds | OWS + Conquest` (dead, PAUSED since ~22 Jun) root cause: broad-match leakage + a single-SKU landing page that never converted. **The live successor `SafeBuds-Search-28th July'26` is STILL repeating the identical structural mistake as of 2026-08-20** (55/84 keywords still BROAD, freshly re-verified at keyword level a 3rd time, now carrying 71.1% of the campaign's keyword spend) — and it is now consistently 18%+ of account spend. Re-escalated as **GA-047**.

## PRIORITY SYSTEM
- **P0** — this week. Blocks everything else, or is time-boxed by an external deadline.
- **P1** — this sprint. The real levers.
- **P2** — next sprint / blocked.
- **P3** — backlog.

---

## 🚨 CAMPAIGN STATUS — UPDATED 2026-08-20

**`SC - All Range` remains `status = ENABLED`** since its 2026-08-10 reactivation — 30d spend ₹32,393.98, last-7d (13–19 Aug, clean stable window) ₹10,343.83 (~₹1,477.69/day), continuing to ramp above its pre-pause blended rate. **`Search-26 May 25` remains `status = PAUSED`** — confirmed zero spend every day since 2026-08-04, now **16+ days dark**. `SafeBuds-Search-28th July'26` (`status = ENABLED`) continued spending throughout and remains the account's 2nd-largest live campaign by 30d spend (₹11,166.46, consistently 18%+ of account spend).

**Nobody has confirmed the cause of either the original pause or the reactivation — still the top open item (GA-034), unchanged for a 3rd cycle running.** What IS confirmed: the reactivation's *effect* — GA4 revenue/day recovered to 82.3% of the pre-pause baseline over its first mature 7-day window (SH-GA-21, CONFIRMED, GA-041, 2026-08-17). Confirming cause and confirming outcome are two separate questions; only the second is answered.

---

## ⏳ THE COUNTDOWN — 17 AUG 2026 HAS PASSED, LIVE EXPOSURE CONTINUES

Google's Smart Bidding change (budget-limited tROAS campaigns get pulled DOWN toward target instead of letting them overperform) took effect **2026-08-17, now 3 days ago.** `SC - All Range` (tROAS 8.0, campaign-level) is reactivated and live; `Search-26 May 25` (tROAS 9.0, ad-group-level) remains paused; `SafeBuds-Search-28th July'26`'s own bidding strategy/target remains unaudited. **Both known targets were set against the inflated conversion value, and P0-1 was never fixed before 17 Aug and remains unfixed today.** The exposure is live on every enabled campaign with a tROAS target calibrated against a number now confirmed to be 77–81% inflated (worse than the 77.2%/79.3% reading on the deadline day itself).

| Campaign | tROAS | Set at | Status (2026-08-20) |
|---|---|---|---|
| `SC - All Range` (`23278488657`) | **8.0** | campaign level | **ENABLED — reactivated 2026-08-10, live exposure to the 17 Aug bidding change on an uncorrected target, ongoing.** |
| `Search-26 May 25` (`22601036342`) | **9.0** | ad-group level (`178785500303`) | **PAUSED** — not exposed while dark, 16+ days now |
| `SafeBuds-Search-28th July'26` (`24068804553`) | unconfirmed — not yet audited | — | **ENABLED — 2nd-largest live spender, consistently 18%+ of account, exposure unquantified** |

---

## ✅ SHIPPED — ⚠️ UNCONFIRMED, see cycle notes above

| What | Result (as claimed 2026-07-14) | Date | Latest verification (2026-08-20) |
|---|---|---|---|
| **GA-009 + GA-010 — 99 zero-conversion negative keywords (EXACT), campaign-level.** | **₹3,659/30d of waste removed** (claimed). | 2026-07-14 | ⚠️ **STILL NOT CONFIRMED** — superseded in scale by GA-045 regardless. |
| **P1-1 — Tablet excluded (−100% device bid), all campaigns.** | **₹363/30d recovered** (claimed). | 2026-07-14 | ⚠️ **STILL NOT CONFIRMED as a blanket cut — and now further complicated:** `SafeBuds-Search` tablet converted this cycle for the first time (see GA-046) — a blanket exclusion would have been actively wrong there. |
| **P1-2 — SafeBuds Ivory excluded** (`…51380726530327`) from `SC - All Range`. | **₹956/30d reallocated** (claimed). | 2026-07-14 | ⚠️ **UNCONFIRMED.** SafeBuds Ivory shows no row for a 9th+ straight cycle now (including 2026-08-20) — still too immaterial to chase hard. |

### 💰 Total claimed-shipped: ₹4,978/30d — **status remains unconfirmed. GA-045 (₹14,325.29/30d) is the current, freshly-verified live waste figure regardless of what did or didn't execute from the 07-14 batch.**

---

## CURRENT SPRINT

| # | Task | Target | Why it matters | Status |
|---|---|---|---|---|
| **P0-0** | Confirm cause of the `SC - All Range` / `Search-26` pause AND the partial reactivation. | Cause confirmed within 24–48h | **Still the single highest-value open item** — outcome of the reactivation is confirmed good (SH-GA-21), but the cause of either event is still unknown, 3 cycles running. | 🚨 **STILL OPEN.** |
| **P0-1** | **Fix the duplicate purchase conversion action.** | One purchase action, correct coverage, in the bidding goal | **The 17 Aug deadline is 3 days past with this unfixed. Overclaim reading is now WORSE (80.9% 30d) than at the deadline itself (77.2%).** | 🔴 **NOT STARTED — deadline missed, exposure live and ongoing, getting worse not better.** |
| **P0-2** | **Re-baseline tROAS targets** against the corrected value, in ≤15%/week steps. | Each active campaign gets its own corrected target | Removes the live bidding-change exposure. | ⬜ Blocked by P0-1 |
| **P0-3** | **CLOSED 2026-07-23, reaffirmed every cycle since including 2026-08-20.** Marginal ROAS stands at −3.64×. | No re-read scheduled — wait for a natural spend variation. | Gate stays closed; no budget move. This cycle's naive last7-vs-prior7 delta (9.15×) is again transition-contaminated, not evidence. | 🔴 **REJECTED — no budget headroom. Gate stays closed.** |
| **P0-4** | **Diagnose `Search \| SafeBuds \| OWS + Conquest`.** | Root cause named; fix or leave dark | **DIAGNOSED 2026-08-04.** Its live successor's BROAD-match mistake reconfirmed at keyword level a 3rd time 2026-08-20 — see GA-047. | 🟢 **DIAGNOSED — successor fix still pending, now with 3x-fresh keyword-level evidence.** |
| **P0-5** | **Audit the `SafeBuds-Search-28th July'26` campaign.** | Confirm bidding strategy/target, landing page, BROAD-match fix | Continues to clear the 6.0 floor decisively (15.64× platform, 2026-08-20) — consistently 18%+ of account spend. BROAD→PHRASE/EXACT fix (SH-GA-18) still not executed, freshly reconfirmed a 3rd time. Its tablet slice converted for the first time this cycle (GA-046) — audit finding, not yet acted on structurally. | 🟡 **Floor-clearing CONFIRMED repeatedly; BROAD-match fix still pending — GA-047.** |
| **P0-6** | Do not reactivate the remaining paused campaign (`Search-26`) blindly. | Confirm cause (P0-0) first | `SC - All Range` already came back with no confirmed cause and its outcome happened to be good (SH-GA-21) — that's not proof reactivating `Search-26` blind would also be safe. | 🚨 **STILL OPEN — see GA-043, unchanged.** |
| **P1-1** | **Rein in AI Max** — already ON on `Search-26`, matching junk. | AI_MAX terms converting, or excluded | Zero-conv tail rose a 2nd straight cycle (₹773.12→₹836.26). | 🟡 GA-013 approved 2026-08-04, still awaiting `/execute-approved` as of 2026-08-20 — refreshed as GA-049, now more urgent. |
| **P1-1b** | **Confirm execution of GA-009/010/tablet/SafeBuds-Ivory.** | Spend check confirms ₹0 on all previously-approved cuts, or root-cause the block | Not run this cycle — still worth a dedicated check. | 🔴 **Still not started.** |
| **P1-1c** | **Rescope tablet exclusion — now only ONE campaign has a clean case, and even that's under a 2-cycle confirmation hold.** | `Search-26` tablet (₹52.25, 0 conv, paused anyway, informational only); `SafeBuds-Search` tablet — **exclusion RETRACTED this cycle (GA-046), converted for the first time (1 conv/₹3,386.41/11.25× platform ROAS)**; `SC - All Range` tablet (₹184.80, 1 conv, converts) left alone | Structurally changed this cycle — see GA-046/SH-GA-24. | 🟡 **GA-037 RETRACTED. New 2-cycle confirmation rule (SH-GA-24) governs any future tablet exclusion on `SafeBuds-Search`.** |
| **P1-2** | **Shopping feed titles.** `SC - All Range` is the largest campaign by spend and is feed-targeted. | Titles rewritten, A/B'd via Merchant Center feed rules | **Probably the largest un-pulled lever in the account.** Comm 2.0's title split (GA-031) is STILL unresolved, 9th cycle running 2026-08-20 — this cycle's ROAS direction FLIPPED, weakening any performance case; fix for feed consistency instead. | 🔴 Mostly not started; GA-031 is the ready-to-execute fix, still not run |
| **P1-3** | **Enhanced Conversions.** | Enabled + verified | Attacks the platform-vs-GA4 gap from the other side, alongside P0-1. | 🔴 Not started |
| **P1-4** | **Execute GA-045 (refreshed 972-term zero-conv negative batch, ₹14,325.29/30d) once the write path can be confirmed to actually execute anything.** Supersedes GA-040, GA-035, GA-033, GA-030, GA-023, GA-020, GA-015, GA-012. | 972 terms negatived, spend falls toward ~₹0 within one attribution window on covered spend | Nine straight cycles of prior batches show no confirmed execution; this cycle the total GREW BACK after 3 cycles of decline. | 🔴 **Blocked by unresolved write-path status — read plan is GA-045's own 2026-08-24 check.** |
| **P1-5** | **Shopping SKU mix has flipped repeatedly; stop treating any single cycle's "worst/best SKU" as an action trigger.** | Keep SH-GA-16 as a scheduled monitor but do not treat any single cycle's ranking as new information requiring action | **2026-08-20: Comm 2.0's backwards-titled variant (GA-031) reads BEST this cycle (17.71×) on tiny spend share (1.4%) — direction flipped from last cycle.** | 🟡 **Monitor-only — see SH-GA-16, unchanged this cycle** |
| **P1-6** | **GA4 lag-day pattern — mostly resolved/explained.** | — | 08-02 remains present and unexplained; 07-18 has rolled out of the live 30d window this cycle (its distorting effect is gone for now, not fixed — will need re-checking if a similarly-shaped gap recurs). | 🟢 **Mostly resolved; no new anomaly this cycle.** |
| **P2-1** | **Build a conquest Search campaign** (SH-GA-11). | Dedicated Search campaign, conquest keywords | Best return in the account, still starved. Deferred past 17 Aug (arrived and passed) and past GA-034's full resolution. | ⬜ Deferred |
| **P3-1** | **Geo/holdout incrementality test.** | Causal read on true incrementality | Would settle the overclaim question for good. | ⬜ Backlog |

---

## ❌ RETRACTED — do not resurrect

| Was | Why it's dead |
|---|---|
| **"The Quality Score scandal"** *(old P0-5/P0-6, GA-008)* | **FALSE.** Real daily QS reconfirmed a 9th time 2026-08-20 (direct API, 1,782 keyword rows): max QS seen = 10, only two keywords at QS≤4 carried any spend (both tiny, both on `SafeBuds-Search`, bundled into GA-047). **There is no QS problem.** |
| **"Shopping SKU mix is upside-down, Pro is the problem"** *(old P1-7, GA-004)* | **FALSE, repeatedly, in BOTH directions.** The ex-Pro SKU (now "EarSafe Lite") has cycled through every share/ROAS position across many cycles without any executed mix-shift action. **Do not resurrect any Pro- or Comm-2.0-focused framing.** |
| **"Raise conquest keyword bids"** *(GA-006)* | **IMPOSSIBLE.** Shopping campaign, no keywords exist. Superseded by P2-1. |
| **"Pause the dormant SafeBuds campaign"** *(GA-007)* | **NO-OP.** Already `PAUSED`. |
| **"Roll the budget back to ₹1,800/day"** *(GA-001)* | **REJECTED.** Superseded by P0-3 (closed 2026-07-23, reaffirmed through 2026-08-20). |
| **"Tablet is a blanket free kill across every campaign"** *(old finding, P1-1)* | **NARROWED FURTHER 2026-08-20** — `SC - All Range` converts on tablet; `Search-26` tablet dead but campaign paused; `SafeBuds-Search` tablet **converted for the first time this cycle** — no campaign currently has a clean, live, uncontested tablet free kill. See GA-046/SH-GA-24. |
| **"Brand de-duplication (GA-005) has a stable, actionable ROAS gap"** *(GA-005, SH-GA-10)* | **CLOSED PERMANENTLY 2026-07-23 — GA-018. Stays closed through 2026-08-20.** |
| **"Google Ads has budget headroom above ~₹1,800/day"** *(GA-001, SH-GA-7)* | **CLOSED 2026-07-23 — GA-019. Reaffirmed through 2026-08-20** — no genuine natural spend variation (this cycle's organic rise above ₹1,800/day, driven by the reactivation ramp, is not deliberate budget evidence). |
| **"`Search \| SafeBuds \| OWS + Conquest` just needs more/better keywords"** *(P0-4, resolved 2026-08-04)* | **FALSE.** Every search term in the campaign's history shows zero conversions. **Also wrong for the live successor**, still true 2026-08-20 at keyword-level granularity, 3rd re-check. |
| **"GA-025's ₹6,534.18 AI Max total-volume figure is a real, growing leak"** *(GA-025, 2026-08-06)* | **CLOSED 2026-08-13 as EXPLAINED, not retracted as false.** Stays closed. |
| **"`open ear headphones`'s zero-conversion reading proves demand collapsed"** | **NOT SUPPORTED as of 2026-08-20** — 2nd consecutive non-zero read, leaning toward recovery. Investigation (GA-036) held open one more cycle. |
| **🆕 "`SafeBuds-Search`'s TABLET slice is a stable, safe-to-cut zero"** *(GA-024/GA-037)* | **REJECTED 2026-08-20** — converted this cycle for the first time. GA-037 retracted as GA-046; do not re-draft without 2 consecutive confirming zero-conv reads (SH-GA-24). |

**Also: do not "build a SafeBuds Shopping campaign."** One already exists (`Shopping | SafeBuds | 7th May'26`, PAUSED, tROAS 10.0), as does `SC - All Range #2` (PAUSED, tROAS 8.0). `SafeBuds-Search-28th July'26` remains the only genuinely new, live campaign of its kind.

---

## PERFORMANCE TARGETS

| Metric | Current (last live pull, 21 Jul–19 Aug, direct API) | Floor | 30-day target | 90-day |
|---|---|---|---|---|
| **TRUE ROAS** | **7.34×** (30d); **6.94×** last-7d (clean, stable window, LOWEST last-7d reading on record) — 0.94× above the 6.0 floor; **4.37×** prior-7d ⚠️PARTIAL (contaminated by the reactivation-ramp transition, not a real floor breach — overclaim 162.3%, wildly out-of-band, the standard tell) | **6.0×** | ≥ 9.0× | 9–11× band held while spend compounds |
| Marginal ROAS (11–12 Jul spike, fully matured) | **−3.64×** (unchanged since 2026-07-23, reaffirmed through 2026-08-20 — no new natural variation; this cycle's raw 9.15× last7-vs-prior7 delta is a status-transition artifact, not valid evidence) — **gate CLOSED, rejected** | **6.0×** | N/A until re-opened by a genuine natural spend variation | ≥ 6.0 sustained |
| Platform overclaim | **80.9%** (30d, above band, worse than last cycle's 77.2%); **77.3%** last-7d (⚠️ stable window, essentially flat vs 79.3% last cycle, still above the 65% band ceiling) / **162.3%** prior-7d (⚠️ wildly out-of-band — reactivation-ramp transition contamination, not real) | 35–65% band | **< 20%** (after P0-1) | < 15% |
| Spend | ₹47,538.48/30d (~₹1,584.62/day blended; last 7 days ~₹2,262.55/day — now ABOVE the ₹1,800/day historical operating point, driven by `SC - All Range`'s post-reactivation ramp, still with `Search-26` fully dark) | — | Hold at current level — no headroom (P0-3/GA-019 closed) | Compound via +20%/wk **only** when marginal ≥ 6.0 |
| Zero-conversion waste | **₹14,325.29/30d** (GA-045, cost≥₹5 floor, `safe buds` held out on judgment grounds) — GREW BACK after 3 cycles of decline | — | Keep at ~₹0 via weekly prune, once execution can be confirmed | — |
| Lost IS (Budget) — `SC - All Range` | **75.3% Budget-lost** (8.6% Rank-lost) | — | Next budget dollar targets Shopping first, once gate clears — still CLOSED | < 40% |
| Lost IS (Budget) — `Search-26` | 77.0% Budget-lost, but campaign is PAUSED — informational only | — | N/A while paused | — |
| Lost IS — `SafeBuds-Search` | 55.3% Budget-lost / 35.9% Rank-lost — Rank-lost share climbing as campaign scales | — | No budget move until gate clears | — |

---

## DATA PULL SCHEDULE — 7 pulls, **direct Google Ads + GA4 APIs (Windsor fully retired), NO metric filters, ever.** Aggregate before selecting, never trust a single row.

| # | Connector | What | Notes |
|---|---|---|---|
| 1 | Google Ads API (direct, via `curl`) | campaign × day | Pull a WIDE date range (this cycle: 68 days) once, slice in code into anchor/30d/7d/prior-7d windows — avoids a separate anchor query. Use full-calendar-day summation when computing TRUE ROAS, not just dates with an Ads row. |
| 2 | GA4 Data API (direct, via `requests`) | `google/cpc` × day | `sessionMedium = cpc` (EXACT) is **the one legal dimension filter**. Assert `len(rows)==rowCount` every pull. |
| 3 | Google Ads API | keyword × Quality Score | **MUST NOT include `date`** in GAQL. **Any QS > 10 is a bug — re-pull.** Reuse these rows for any same-cycle keyword-level ad-hoc checks (e.g. match-type breakdowns) instead of re-querying. |
| 4 | Google Ads API | search terms | Aggregate in code before selecting zero-conversion terms. A word-boundary brand/conquest regex is necessary but NOT sufficient — product-line-adjacent terms (e.g. `safe buds`) need a manual judgment hold-out too. Search-term-view covers ~69% of account spend (structural Shopping reporting gap). |
| 5 | Google Ads API | Shopping SKU | Assert sums to campaign spend. 4 rows this cycle (SafeBuds Ivory absent 9th+ straight cycle; Comm 2.0 still split across TWO product_title strings — GA-031, 9th cycle unresolved, ROAS direction flipped this cycle). |
| 6 | Google Ads API | device | Assert sums to campaign spend. Cuts must be scoped **per campaign** — see GA-014/GA-024/GA-046. **This cycle caught a near-miss: a device slice previously read as a stable zero converted — never trust a prior cycle's "dead" verdict without re-checking.** |
| 7 | Google Ads API | impression share | Cannot be queried alongside `quality_score` (Google API restriction) |

> 🚨 **The `requests` Python HTTP client gets a `503 "DNS resolution failure"` from `googleads.googleapis.com:searchStream` in some environments — use `curl` for all Ads calls, `requests` is fine for GA4.**
> 🚨 **Never put `conversions` or `impressions` in a `filters` argument. Pull everything, filter in code, and assert every breakdown sums to its parent total.**
> 🚨 **Never trust a "SHIPPED" status without a spend check** — and **check `campaign.status` (paused/enabled) before crediting or blaming any batch for a spend change, in either direction.**
> 🚨 **NEW 2026-08-20: never trust a PRIOR cycle's "this slice is a stable zero" verdict without re-checking it fresh, either.** `SafeBuds-Search`'s tablet slice read 0 conversions for 2 straight cycles, then converted on the 3rd. The rule "never cut something that converted even once" applies going forward from every fresh pull, not just at the moment a cut is first drafted.
> 🚨 **A "total X doesn't reconcile" flag should be investigated by asking what dimension each reading was scoped to, before assuming a connector fault.**
> 🚨 **A missing-Ads-row day is not a zero on the GA4 side — verify this in code (full-calendar-day summation), not just by rule. And check whether the missing day is a KNOWN, already-explained gap vs. an unexplained one that might be actively distorting a ratio.**
> 🚨 **An out-of-band overclaim reading is "transition contamination" only if the window in question actually contains a mid-window campaign-status change. Check this explicitly — don't apply the excuse to every unusual reading by default. NEW 2026-08-20: a status-transition can contaminate a window for MORE THAN ONE cycle after the change — check freshly each time, don't assume a window is "past" the contamination just because the transition itself is over.**

---

## DEPENDENCIES / BLOCKERS

- **P0-0 (confirm pause/reactivation cause) still gates the cleanest read on almost everything** — though SH-GA-21's confirmed-good outcome means the department can stop worrying about whether reactivating was *harmful*; it still doesn't know *why* it happened. Unchanged for a 3rd cycle.
- **P0-2 is blocked by P0-1.** **The 17 Aug deadline is 3 days past with P0-1 unfixed — live exposure, ongoing, worsening (overclaim up not down).**
- **P0-3 is CLOSED as of 2026-07-23, reaffirmed through 2026-08-20** — marginal ROAS −3.64×, no new natural spend variation.
- **P0-4 diagnosed — P0-5/SH-GA-18 (successor's BROAD-match fix) is the open item, reconfirmed at keyword level a 3rd time 2026-08-20, now GA-047.**
- **GA-045 (refreshed negative batch, ₹14,325.29/30d) read plan is 2026-08-24.**
- **GA-046 (tablet retraction) — new 2-cycle confirmation rule (SH-GA-24) governs any future re-draft; read plan 2026-08-24.**
- **GA-032 CLOSED 2026-08-13 — no longer a blocker or open question.**
- **SH-GA-21 CLOSED 2026-08-17 as CONFIRMED — no longer a blocker or open question. GA-034's cause-confirmation question remains open separately, unchanged 2026-08-20.**
- **P2-1 (conquest campaign) deferred past 17 Aug (arrived and passed) and past GA-034's full resolution.**
- **GA-043/SH-GA-23 — Search-26 reactivation remains a proposed TEST, contingent on Meet confirming the pause cause first. Unchanged 2026-08-20.**
