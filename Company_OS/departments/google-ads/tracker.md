# Google Ads — Live Task Tracker

> Read at the start of every session, after `constitution.md`. Archive completed sprints to `learning-log.md` every 30 days.
>
> **Last updated: 2026-08-13 (Thursday follow-up — 7th direct-API cycle).** 🚨 **GA-034 is HALF-RESOLVED: `SC - All Range` reactivated (`status = ENABLED`) on 2026-08-10, spending ₹1,150–1,340/day again, close to its pre-pause rate. `Search-26 May 25` remains `PAUSED`, zero spend since 08-04. Neither the original pause nor this partial reactivation has a confirmed cause from Meet — still the top open item.** **P0-1 (conversion fix) is STILL not started — 4 days to 17 Aug, down from 7 last cycle.** **The zero-conversion search-term waste batch refreshed again: ₹14,593.55/1,016 terms (GA-035, supersedes GA-033) — down only ~6.5% from last cycle, still not the collapse-toward-₹0 that would indicate execution, 7th consecutive cycle this exact finding repeats.** **AI Max's zero-conv tail fell a 3rd straight cycle (₹692.22→₹576.80/30d) — and GA-032 (the "total volume doesn't reconcile" flag) is now CLOSED: re-derived this cycle, the discrepancy was an apples-to-oranges aggregation-grain comparison, not a data bug.** **Shopping SKU mix flipped a 6th time: Pro's share is down to 1.5% but it's BACK to being the BEST-returning SKU (23.08×) — a full reversal from worst last cycle — reinforcing that this metric cannot support any structural decision.** **Comm 2.0's feed-title split (GA-031) remains unresolved, 6th cycle running.** **NEW this cycle: `SafeBuds-Search-28th July'26`'s TABLET slice is now dead weight at material spend (₹257.61/30d, 0 conv) — filed as GA-037. `open ear headphones` has now read zero conversions for 5 straight cycles — escalated from passive monitoring to an active landing-page/tracking investigation (GA-036).**
>
> **2026-08-10 (Monday teardown — 6th direct-API cycle).** 🚨 **`SC - All Range` and `Search-26 May 25` — 91.7% of 30d spend — were `status = PAUSED`, unlogged, dark since ~2026-08-05. `SafeBuds-Search-28th July'26` was the account's ONLY active campaign, carrying 100% of live spend. Escalated as GA-034 — confirmed cause still pending; this was not an unpause recommendation.** **P0-1 (conversion fix) is STILL not started — 7 days to 17 Aug, down from 11 last cycle.** **The zero-conversion search-term waste batch refreshed again: ₹15,610.70/1,057 terms (GA-033, supersedes GA-030) — but the write-path question could no longer be cleanly read this cycle, since 2 of the 3 targeted campaigns were paused.** **AI Max's zero-conv tail continued its decline a 2nd straight cycle (₹730.39→₹692.22/30d) — the separate "total volume" reconciliation flag (GA-032) remained open, 2 cycles overdue on its own read plan.** **Shopping SKU mix flipped a 5th time: Pro's share had collapsed to 7.9% and it was, for the first time, the WORST-returning SKU (9.66×) rather than the best — the ranking has now visited every position across five cycles.** **Comm 2.0's feed-title split (GA-031) remained unresolved, 4th cycle running.**
>
> **2026-08-06 (Thursday follow-up — 5th direct-API cycle).** **GA-023 (approved by Meet 08-04) still shows no evidence of execution 2 days later** — fresh, equally-unfiltered pull finds ₹17,370.17/1,114 terms, essentially the same magnitude; refreshed as **GA-030** (₹16,708.95/1,113 terms), with `ear safe` correctly dropped (now converting) and `open ear headphones` (₹661.22, the single largest zero-conv line item, a proven historical converter) deliberately held out pending investigation (**SH-GA-20**). **P0-1 is STILL not started — 11 days to 17 Aug, down from 14. Inside the 14-day trigger — this is the headline.** **AI Max zero-conv leakage fell sharply (₹1,556→₹730/30d) but the escalation it sat inside (GA-025's ₹6,534.18 "total AI_MAX volume") could NOT be reproduced on an identical re-pull of the same window (₹774.18, an 8.4× gap) — flagged as a data-integrity issue (GA-032), do not trust either figure until reconciled — NOW CLOSED as of 2026-08-13, see below.** **SH-GA-17 CONFIRMED — the new `SafeBuds-Search-28th July'26` campaign clears the 6.0 ROAS floor decisively (platform-claimed 25.68×) on its first fully-matured (9-day) read.** **SH-GA-18 (BROAD→PHRASE/EXACT fix on the same campaign) confirmed STILL NOT executed** — unchanged from GA-029's 08-04 diagnosis. **NEW: Comm 2.0's Shopping feed title has quietly split into two variants mid-window, unlogged — the newer one is backwards (brand-last) from the department's own guidance and returns 18.5% worse (10.13× vs 12.43×)** — filed as **GA-031**. **2026-08-02 graduates from a suspected lag day to a confirmed 5th standing zero-activity day** (both Ads and GA4 show a real ₹0 four days after first flagged) — 08-01 backfilled as predicted, confirming the lag pattern still holds for that day. **Marginal-ROAS gate stays CLOSED at −3.64×, reaffirmed — no new natural spend variation.** 30d TRUE ROAS this cycle: **7.69×** (last-7d 5.96× marked PARTIAL/contaminated by the 08-02 gap, not a genuine floor breach).
>
> **Cycles prior to 2026-08-06 (2026-08-03, 2026-07-27 and earlier) — unchanged, retained in full in git history (see `learning-log.md` for the institutional-truth summaries that carry forward).**
>
> **2026-08-04 /approvals update:** GA-013 (AI Max negatives) and GA-023 (superseded batch) **APPROVED, awaiting `/execute-approved`** — ⚠️ **2026-08-13: GA-013 still not executed; the batch itself is now GA-035.** GA-014, GA-017/GA-027, and GA-024/GA-025 **REJECTED by Meet** — do not re-draft on the same evidence (GA-024's tablet finding has since been refreshed with genuinely new evidence as GA-037). GA-011 reviewed and closed (informational). Full detail in `queue-inbox.md`.
> **⚠️ Ad-hoc 2026-08-04 (Slack request) — P0-4 diagnosis complete AND its live successor caught repeating the mistake, see GA-029/GA-039.** `Search | SafeBuds | OWS + Conquest` (dead, PAUSED since ~22 Jun) root cause: broad-match leakage + a single-SKU landing page that never converted. **The live successor `SafeBuds-Search-28th July'26` is still repeating the identical structural mistake as of 2026-08-13** (55/84 keywords still BROAD) — and it is now the account's **2nd-largest live spender**, making the fix materially more urgent. Re-escalated as **GA-039**.

## PRIORITY SYSTEM
- **P0** — this week. Blocks everything else, or is time-boxed by an external deadline.
- **P1** — this sprint. The real levers.
- **P2** — next sprint / blocked.
- **P3** — backlog.

---

## 🚨 CAMPAIGN STATUS — UPDATED 2026-08-13 (HALF-RESOLVED)

**`SC - All Range` reactivated (`status = ENABLED`) on 2026-08-10** — daily spend resumed at ₹1,336.22 / ₹1,148.72 / ₹1,143.26 on 08-10/11/12, close to its pre-pause blended rate (₹1,591.35/day, 21 Jul–02 Aug). **`Search-26 May 25` remains `status = PAUSED`** — confirmed zero spend every day since 2026-08-04. `SafeBuds-Search-28th July'26` (`status = ENABLED`) continued spending throughout, now the account's 2nd-largest live campaign by 30d spend.

**Nobody has confirmed the cause of either the original pause or this partial reactivation.** Filed as an update to **GA-034** — still an open escalation, not a closed item. See `queue-inbox.md` and `learning-log.md` finding 49 / SH-GA-21.

**SH-GA-21's read plan (reactivation restores GA4 revenue/day to within 20% of the ~₹14,300/day pre-pause baseline) is too young to call** — only 3 days old as of this cycle (need 7). Preliminary, unreliable signal: ~₹6,922/day average on 08-10/08-11 (excluding 08-12's likely-GA4-lag ₹0), still well below baseline but not yet a real read. **Due 2026-08-17 — the same day as the 17 Aug bidding-change deadline.**

---

## ⏳ THE COUNTDOWN — 17 AUG 2026 (4 days as of 2026-08-13)

Google's Smart Bidding change: **budget-limited tROAS campaigns get pulled DOWN toward their target instead of overperforming it.** `SC - All Range` (tROAS 8.0, campaign-level) is reactivated and live again; `Search-26 May 25` (tROAS 9.0, ad-group-level) remains paused; `SafeBuds-Search-28th July'26`'s own bidding strategy/target remains unaudited. **Both known targets were set against the inflated conversion value. P0-1 → P0-2 must both land before 17 Aug, or the exposure resumes the moment any paused campaign reactivates or the deadline hits with a live campaign still on an uncorrected target. P0-1 is still 🔴 not started as of 2026-08-13 — 4 days left.**

| Campaign | tROAS | Set at | Status (2026-08-13) |
|---|---|---|---|
| `SC - All Range` (`23278488657`) | **8.0** | campaign level | **ENABLED — reactivated 2026-08-10** |
| `Search-26 May 25` (`22601036342`) | **9.0** | ad-group level (`178785500303`) | **PAUSED** |
| `SafeBuds-Search-28th July'26` (`24068804553`) | unconfirmed — not yet audited | — | **ENABLED — 2nd-largest live spender** |

---

## ✅ SHIPPED — ⚠️ UNCONFIRMED, see cycle notes above

| What | Result (as claimed 2026-07-14) | Date | Latest verification (2026-08-13) |
|---|---|---|---|
| **GA-009 + GA-010 — 99 zero-conversion negative keywords (EXACT), campaign-level.** | **₹3,659/30d of waste removed** (claimed). | 2026-07-14 | ⚠️ **STILL NOT CONFIRMED** — `SC - All Range` (one of the two target campaigns) has since reactivated, but no fresh spend-check on these specific 99 terms has been run this cycle; superseded in scale by GA-035 regardless. |
| **P1-1 — Tablet excluded (−100% device bid), all campaigns.** | **₹363/30d recovered** (claimed). | 2026-07-14 | ⚠️ **STILL NOT CONFIRMED as a blanket cut, and shouldn't be** — device-level cuts are per-campaign (GA-014/GA-024/GA-037). |
| **P1-2 — SafeBuds Ivory excluded** (`…51380726530327`) from `SC - All Range`. | **₹956/30d reallocated** (claimed). | 2026-07-14 | ⚠️ **UNCONFIRMED.** SafeBuds Ivory has shown no row for 4+ straight cycles now (including 2026-08-13) — cause still unconfirmed, still too immaterial to chase hard. |

### 💰 Total claimed-shipped: ₹4,978/30d — **status remains unconfirmed. GA-035 (₹14,593.55/30d) is the current, freshly-verified live waste figure regardless of what did or didn't execute from the 07-14 batch.**

---

## CURRENT SPRINT

| # | Task | Target | Why it matters | Status |
|---|---|---|---|---|
| **P0-0** | Confirm cause of the `SC - All Range` / `Search-26` pause AND the partial reactivation. | Cause confirmed within 24–48h | **Still the single highest-value open item** — one campaign came back with no explanation, the other is still off with no explanation. | 🚨 **STILL OPEN — see GA-034 update.** |
| **P0-1** | **Fix the duplicate purchase conversion action.** | One purchase action, correct coverage, in the bidding goal | **Closes the ~49–69% overclaim. Unblocks P0-2 and everything downstream. 4 days to 17 Aug.** | 🔴 Not started (confirmed still not started 2026-08-13) |
| **P0-2** | **Re-baseline tROAS targets** against the corrected value, in ≤15%/week steps. | Each active campaign gets its own corrected target | Removes the 17 Aug landmine. | ⬜ Blocked by P0-1 |
| **P0-3** | **CLOSED 2026-07-23, reaffirmed every cycle since including 2026-08-13.** Marginal ROAS stands at −3.64×. | No re-read scheduled — wait for a natural spend variation (a reactivation is a status toggle, not one). | Gate stays closed; no budget move. | 🔴 **REJECTED — no budget headroom. Gate stays closed.** |
| **P0-4** | **Diagnose `Search \| SafeBuds \| OWS + Conquest`.** | Root cause named; fix or leave dark | **DIAGNOSED 2026-08-04 — see GA-029.** Its live successor's BROAD-match mistake is still unfixed as of 2026-08-13, now re-escalated (GA-039) as that successor is the account's 2nd-largest live spender. | 🟢 **DIAGNOSED — successor fix still pending, priority raised.** |
| **P0-5** | **Audit the `SafeBuds-Search-28th July'26` campaign.** | Confirm bidding strategy/target, landing page, BROAD-match fix | Continues to clear the 6.0 floor decisively (17.62× platform, 2026-08-13) — now the account's 2nd-largest live spender. BROAD→PHRASE/EXACT fix (SH-GA-18) still not executed. | 🟡 **Floor-clearing CONFIRMED repeatedly; BROAD-match fix still pending — GA-039.** |
| **P0-6** | Do not reactivate the remaining paused campaign (`Search-26`) blindly. | Confirm cause (P0-0) first | `SC - All Range` already came back with no confirmed cause — don't repeat that for `Search-26`. | 🚨 **STILL OPEN.** |
| **P1-1** | **Rein in AI Max** — already ON on `Search-26`, matching junk. | AI_MAX terms converting, or excluded | Zero-conv tail fell a 3rd straight cycle (₹1,556.14→₹730.39→₹692.22→₹576.80). GA-032's "total volume" flag is now CLOSED (explained as an aggregation-grain mismatch, not a bug) — see GA-038. | 🟡 GA-013 approved 2026-08-04, still awaiting `/execute-approved` as of 2026-08-13; GA-032 closed. |
| **P1-1b** | **Confirm execution of GA-009/010/tablet/SafeBuds-Ivory.** | Spend check confirms ₹0 on all previously-approved cuts, or root-cause the block | With `SC - All Range` reactivated, a cleaner spend-check on these old batches is possible again — not yet run this cycle. | 🔴 **Still not started — worth a dedicated check next cycle now that the campaign is live again.** |
| **P1-1c** | **Rescope tablet exclusion — now THREE campaigns need per-campaign scoping, not blanket.** | `Search-26` tablet (₹58.55, 0 conv, paused anyway) + `SafeBuds-Search` tablet (₹257.61, 0 conv, NEW — GA-037) excluded; `SC - All Range` tablet (₹203.34, 2 conv, 29.25× platform) left alone | Blanket cut would forfeit real Shopping tablet revenue — consistent across 6+ pulls now. | 🟡 **GA-037 drafted 2026-08-13 for SafeBuds-Search specifically.** `Search-26`'s exclusion (GA-014) stays rejected/moot while paused. |
| **P1-2** | **Shopping feed titles.** `SC - All Range` is the largest campaign by spend and is feed-targeted. | Titles rewritten, A/B'd via Merchant Center feed rules | **Probably the largest un-pulled lever in the account** — the campaign is live again as of 08-10. Comm 2.0's title split (GA-031) is STILL unresolved, 6th cycle running 2026-08-13. | 🔴 Mostly not started; GA-031 is the ready-to-execute fix, still not run |
| **P1-3** | **Enhanced Conversions.** | Enabled + verified | Attacks the platform-vs-GA4 gap from the other side, alongside P0-1. | 🔴 Not started |
| **P1-4** | **Execute GA-035 (refreshed 1,016-term zero-conv negative batch, ₹14,593.55/30d) once the write path can be confirmed to actually execute anything.** Supersedes GA-033, GA-030, GA-023, GA-020, GA-015, GA-012. | 1,016 terms negatived, spend falls toward ~₹0 within one attribution window on covered spend | Seven straight cycles of prior batches show no confirmed execution; this cycle's total is in the same range as prior cycles', down only modestly. | 🔴 **Blocked by unresolved write-path status — read plan is GA-035's own 2026-08-17 check.** |
| **P1-5** | **Shopping SKU mix has flipped a 6th time; stop treating any single cycle's "worst/best SKU" as an action trigger.** | Keep SH-GA-16 as a scheduled monitor but do not treat any single cycle's ranking as new information requiring action | **2026-08-13: Pro is now the smallest share (1.5%) AND the best-returning SKU (23.08×) — a full reversal from worst last cycle.** The instability, not the direction, remains the finding. | 🟡 **Monitor-only — see SH-GA-16, unchanged this cycle** |
| **P1-6** | **GA4 lag-day pattern — CLOSED/explained for every known gap.** | — | 07-18 and 08-02 remain present and unexplained (5+ cycles old); 08-05 remains explained by GA-034. | 🟢 **Mostly resolved; 07-18/08-02 still worth a platform-side check if they persist further.** |
| **P2-1** | **Build a conquest Search campaign** (SH-GA-11). | Dedicated Search campaign, conquest keywords | Best return in the account, still starved. Deferred past 17 Aug and past GA-034's full resolution. | ⬜ Deferred |
| **P3-1** | **Geo/holdout incrementality test.** | Causal read on true incrementality | Would settle the overclaim question for good. | ⬜ Backlog |

---

## ❌ RETRACTED — do not resurrect

| Was | Why it's dead |
|---|---|
| **"The Quality Score scandal"** *(old P0-5/P0-6, GA-008)* | **FALSE.** Real daily QS reconfirmed a 7th time 2026-08-13 (direct API, 1,782 keyword rows): max QS seen = 10, no keyword at QS≤4 carried any spend. **There is no QS problem.** |
| **"Shopping SKU mix is upside-down, Pro is the problem"** *(old P1-7, GA-004)* | **FALSE, now six times over, in BOTH directions.** Pro's share has fallen from 47% to 1.5% across six cycles and has cycled worst→best→worst→best without any executed mix-shift action. **Do not resurrect any Pro- or Comm-2.0-focused framing.** |
| **"Raise conquest keyword bids"** *(GA-006)* | **IMPOSSIBLE.** Shopping campaign, no keywords exist. Superseded by P2-1. |
| **"Pause the dormant SafeBuds campaign"** *(GA-007)* | **NO-OP.** Already `PAUSED`. |
| **"Roll the budget back to ₹1,800/day"** *(GA-001)* | **REJECTED.** Superseded by P0-3 (closed 2026-07-23, reaffirmed through 2026-08-13). |
| **"Tablet is a blanket free kill across every campaign"** *(old finding, P1-1)* | **NARROWED, now with a THIRD campaign confirmed to need scoping** — `SC - All Range` converts on tablet, `Search-26`/`SafeBuds-Search` do not (GA-037 new this cycle). |
| **"Brand de-duplication (GA-005) has a stable, actionable ROAS gap"** *(GA-005, SH-GA-10)* | **CLOSED PERMANENTLY 2026-07-23 — GA-018. Stays closed through 2026-08-13.** |
| **"Google Ads has budget headroom above ~₹1,800/day"** *(GA-001, SH-GA-7)* | **CLOSED 2026-07-23 — GA-019. Reaffirmed through 2026-08-13** — no genuine natural spend variation (the 08-10 reactivation is a status toggle, and too young regardless). |
| **"`Search \| SafeBuds \| OWS + Conquest` just needs more/better keywords"** *(P0-4, resolved 2026-08-04)* | **FALSE.** Every search term in the campaign's history shows zero conversions. **Also wrong for the live successor**, still true 2026-08-13 — the fix is removing BROAD match, not adding keywords. |
| **"GA-025's ₹6,534.18 AI Max total-volume figure is a real, growing leak"** *(GA-025, 2026-08-06)* | **CLOSED 2026-08-13 as EXPLAINED, not retracted as false** — see GA-038/learning-log finding 52. The figure was a match-type-scoped total; a different, term-scoped-across-all-match-types total (₹7,673.29 this cycle) will always be larger for the same terms. Not a data bug. |

**Also: do not "build a SafeBuds Shopping campaign."** One already exists (`Shopping | SafeBuds | 7th May'26`, PAUSED, tROAS 10.0), as does `SC - All Range #2` (PAUSED, tROAS 8.0). `SafeBuds-Search-28th July'26` remains the only genuinely new, live campaign of its kind.

---

## PERFORMANCE TARGETS

| Metric | Current (last live pull, 13 Jul–12 Aug, direct API) | Floor | 30-day target | 90-day |
|---|---|---|---|---|
| **TRUE ROAS** | **7.22×** (30d); **5.96×** prior-7d ⚠️PARTIAL (contaminated by pause/reactivation transition); **3.24×** last-7d ⚠️PARTIAL (same cause — do not read as a floor breach, overclaim ratios on both short windows are wildly out-of-band) | **6.0×** | ≥ 9.0× | 9–11× band held while spend compounds |
| Marginal ROAS (11–12 Jul spike, fully matured) | **−3.64×** (unchanged since 2026-07-23, reaffirmed through 2026-08-13 — no new natural variation; the 08-10 reactivation is a status toggle, not budget, and too young anyway) — **gate CLOSED, rejected** | **6.0×** | N/A until re-opened by a genuine natural spend variation | ≥ 6.0 sustained |
| Platform overclaim | **68.8%** (30d, upper edge of band); **155.9%** last-7d / **110.7%** prior-7d (⚠️ both wildly out-of-band — pause/reactivation transition contamination, not real) | 35–65% band | **< 20%** (after P0-1) | < 15% |
| Spend | ₹46,397.35/30d (~₹1,547/day blended; last 3 days ~₹1,762/day post-reactivation) | — | Hold at current level — no headroom (P0-3/GA-019 closed); GA-034's reactivation still maturing | Compound via +20%/wk **only** when marginal ≥ 6.0 |
| Zero-conversion waste | **₹14,593.55/30d** (GA-035, cost≥₹5 floor, excludes `open ear headphones` held for investigation a 5th cycle — now escalated, GA-036) | — | Keep at ~₹0 via weekly prune, once execution can be confirmed | — |
| Lost IS (Budget) — `SC - All Range` | **71.7% Budget-lost** (live again as of 08-10) | — | Next budget dollar targets Shopping first, once gate clears — still CLOSED | < 40% |
| Lost IS (Budget) — `Search-26` | 77.1% Budget-lost, but campaign is PAUSED — informational only | — | N/A while paused | — |
| Lost IS — `SafeBuds-Search` | 51.8% Budget-lost / 39.3% Rank-lost — leaning Budget-lost as it scales | — | No budget move until gate clears | — |

---

## DATA PULL SCHEDULE — 7 pulls, **direct Google Ads + GA4 APIs (Windsor fully retired), NO metric filters, ever.** Aggregate before selecting, never trust a single row.

| # | Connector | What | Notes |
|---|---|---|---|
| 1 | Google Ads API (direct, via `curl`) | campaign × day | Use full-calendar-day summation when computing TRUE ROAS, not just dates with an Ads row — 2026-08-13 caught a bug where 07-18's real GA4 revenue was silently dropped this way. |
| 2 | GA4 Data API (direct, via `requests`) | `google/cpc` × day | `sessionMedium = cpc` (EXACT) is **the one legal dimension filter**. |
| 3 | Google Ads API | keyword × Quality Score | **MUST NOT include `date`** in GAQL. **Any QS > 10 is a bug — re-pull.** |
| 4 | Google Ads API | search terms | Aggregate in code before selecting zero-conversion terms. Search-term-view covers ~71–72% of account spend (structural Shopping reporting gap). |
| 5 | Google Ads API | Shopping SKU | Assert sums to campaign spend. 4 rows this cycle (SafeBuds Ivory absent 4th+ straight cycle; Comm 2.0 still split across TWO product_title strings — GA-031, 6th cycle unresolved). |
| 6 | Google Ads API | device | Assert sums to campaign spend. Cuts must be scoped **per campaign** — see GA-014/GA-024/GA-037. |
| 7 | Google Ads API | impression share | Cannot be queried alongside `quality_score` (Google API restriction) |
| 8 | Google Ads API (ad-hoc, as needed) | date-scoped search terms (no match-type dim) | Used 2026-08-13 to reconcile the AI Max "total volume" flag by comparing aggregation grains — see GA-038. |

> 🚨 **The `requests` Python HTTP client gets a `503 "DNS resolution failure"` from `googleads.googleapis.com:searchStream` — confirmed again 2026-08-13, a 7th cycle running the curl workaround.**
> 🚨 **Never put `conversions` or `impressions` in a `filters` argument. Pull everything, filter in code, and assert every breakdown sums to its parent total.**
> 🚨 **Never trust a "SHIPPED" status without a spend check** — and **check `campaign.status` (paused/enabled) before crediting or blaming any batch for a spend change, in either direction** (a reactivation looks like new spend the same way a pause looks like a cut).
> 🚨 **A "total X doesn't reconcile" flag should be investigated by asking what dimension each reading was scoped to, before assuming a connector fault** — see GA-032/GA-038, closed 2026-08-13 as an aggregation-grain mismatch, not a bug.
> 🚨 **A missing-Ads-row day is not a zero on the GA4 side — verify this in code (full-calendar-day summation), not just by rule.** Caught and fixed in-session 2026-08-13.

---

## DEPENDENCIES / BLOCKERS

- **P0-0 (confirm pause/reactivation cause) still gates the cleanest read on almost everything** — though `SC - All Range` being live again means several old questions (P1-1b spend-check, feed-title fix execution) can be re-tested more cleanly than last cycle.
- **P0-2 is blocked by P0-1.** **4 days to 17 Aug.**
- **P0-3 is CLOSED as of 2026-07-23, reaffirmed through 2026-08-13** — marginal ROAS −3.64×, no new natural spend variation.
- **P0-4 diagnosed — P0-5/SH-GA-18 (successor's BROAD-match fix) is the open item, now more urgent since the successor is the account's 2nd-largest live spender.**
- **GA-035 (refreshed negative batch, ₹14,593.55/30d) read plan is 2026-08-17.**
- **GA-032 CLOSED 2026-08-13 — no longer a blocker or open question.**
- **P2-1 (conquest campaign) deferred past 17 Aug and past GA-034's full resolution.**
- **GA-034/SH-GA-21 — reactivation read matures 2026-08-17, same day as the bidding-change deadline. This is the department's single most important date to watch next cycle.**
