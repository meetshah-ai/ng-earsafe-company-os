# Google Ads — Live Task Tracker

> Read at the start of every Google Ads session, after `constitution.md`. Archive completed sprints to `learning-log.md` every 30 days.
>
> Last updated: **2026-07-13, 22:26 IST** — third Monday-read pass this calendar day (report: `Company_OS/google-ads/2026-07-12.md`). Re-verifies both earlier passes; sanity anchor reproduced bit-for-bit a third time. New this pass: GA-008 drafted (QS/RSA fix — P0-6/P1-2 finally has a live draft), and a Budget-vs-Rank nuance found — `SC - All Range` is Budget-lost (49.0%), not Rank-lost, unlike `Search-26 May 25` which is genuinely Rank-lost (60.4%). Sprint 1 seeded from the live account audit (30d window 13 Jun – 12 Jul 2026) + the Google Ads Mastery Guide 2026.

## PRIORITY SYSTEM
- **P0** — this week. Blocks everything else, or is time-boxed by an external deadline.
- **P1** — this sprint. The real scale levers.
- **P2** — next sprint. Blocked on a P0.
- **P3** — experiments / backlog.

## ⏳ THE COUNTDOWN — 17 AUG 2026 (35 days from 2026-07-13)

Google's Smart Bidding change: **budget-limited tROAS campaigns will be pulled DOWN toward their target instead of letting them overperform.** Our tROAS is **9.0**, set against the *inflated* conversion value; TRUE delivery is 9.38× (GA4) but platform-claimed is 13.93×. **Correction, 2026-07-13 22:26 IST:** only `Search-26 May 25` is genuinely Lost-IS-**Rank** limited (60.4% lost-rank); `SC - All Range` (79% of spend) is actually Lost-IS-**Budget** limited (49.0% lost-budget, only 7.4% lost-rank) — see P1-2 note below. **On 17 Aug, Google will spend harder to drag us toward a target that was never calibrated to reality.**

**P0-1 → P0-2 must both land before 17 Aug.** This is the single hard deadline the department owns.

## CURRENT SPRINT — Sprint 1, seeded 2026-07-13

| # | Task | Target | Expected impact | Status | Result |
|---|---|---|---|---|---|
| **P0-1** | **Fix the duplicate purchase conversion action.** Two actions fire on the same orders; the higher-coverage Shopify-pixel `Purchase (1)` (489 orders / ₹14.5L) is **excluded from bidding** while the lower-coverage GA4 import counts. Ref `GoogleAds_Conversion_Tracking_Task.md`. | One purchase action, correct coverage, in the bidding goal | Closes the **49% overclaim**. Smart Bidding starts optimizing toward a real number. **Unblocks P0-2 and P2-1.** | 🔴 Not started | — |
| **P0-2** | **Re-baseline tROAS** against the corrected conversion value. Walk in **≤15%/week** steps (guide Ch 10). | tROAS set from actual trailing-30d, ~10–20% above the 6.0 floor → **≈7.0–8.0** on corrected values | Removes the 17 Aug landmine. Google stops being able to "drag us down" to a target that no longer under-states reality. | ⬜ Blocked by P0-1 | — |
| **P0-3** | **Revise GA-001 before approving.** The queued draft cuts ₹3,589/day → ₹1,800–2,000/day: a **~50% cut**, which triggers **another** learning phase on campaigns **already mid-learning** from the 11–12 Jul doubling. See the decision box below. | A stepped rollback (≤20%/step), or a hold-and-re-read on 19 Jul | Avoids paying the learning-phase tax twice in two weeks | 🟡 Pending in queue — **needs revision; reaffirmed hold three times on 2026-07-13 (07:30, 22:02, 22:26 IST), see run log below** | — |
| **P0-4** | **Diagnose `Search \| SafeBuds \| OWS + Conquest`.** ₹1,011 spent, **12.57% CTR**, **0 conversions, ₹0 revenue**. High CTR + zero conversion = landing-page/intent mismatch (Ch 32/35), **not** a bidding problem. Check whether it points at the redirected legacy SafeBuds PDP (archived → `/products/ngwehear`, 2026-07-12). | Root cause named; fix or cut | Stops ₹1,011/mo of clicks that never buy | 🔴 Not started — **note: campaign spend has been at ₹0 since ~2026-06-22, so it is already dormant; formal pause drafted as GA-007 (pending); diagnosis still open before any reactivation** | — |
| **P1-1** | **Enhanced Conversions.** SHA-256 first-party data at conversion time (Ch 1). Impact visible ~30 days after enabling. | Enabled + verified | Directly attacks the platform-vs-GA4 gap. Candidate co-cause alongside P0-1. | 🔴 Not started | — |
| **P1-2** | **Search IS-Rank recovery** via Quality Score + assets, **not budget**. `Search-26 May 25` Lost IS (Rank) **60.4%** (confirmed 2026-07-13 22:26 IST; `SC - All Range` is Lost-Budget 49.0% instead — see countdown note above, they are different problems). Excellent Ad Strength ≈ **+45% CTR** vs Poor (Ch 11). | Ad Strength → Good/Excellent on all ad groups; 8–10 headlines, 3–4 descriptions | Free impression share on Search. Higher QS lowers CPC *and* raises Ad Rank. | 🟡 **Draft queued — GA-008** (RSA rewrite + landing-page message match, 2026-07-13) | — |
| **P1-3** | **Shopping feed titles** — `SC - All Range` is **79% of spend** and feed-targeted; feed quality *is* the targeting (Ch 8). Title formula `[Brand] + [Product Type] + [Key Feature] + [Variant]`, front-load first 70 chars. | Titles rewritten + A/B tested via Merchant Center feed rules | The highest-leverage lever on 79% of spend | 🔴 Not started | — |
| **P1-4** | **Negative-keyword prune.** Broad match + Smart Bidding + strong negatives is the 2026 posture (Ch 5). Search-terms review weekly. Source: `google_ads_exact_negatives.csv`. | Negatives applied; weekly search-terms review standing | Cuts waste; raises QS via relevance | 🟡 **Draft queued — GA-002** (34 zero-conv terms, ₹2,708.99, 2026-07-13) | — |
| **P0-5** | **`outside ear earbuds` — QS 0.0, ₹958 burned, ₹0 revenue.** The single worst keyword in the account. Kill or rebuild. | Killed, or QS ≥ 6 | Stops ₹958/30d of pure waste | 🟡 **Covered by GA-007** (formal campaign pause, pending) | — |
| **P0-6** | **⭐ Quality Score on the open-ear category.** NG has QS 9.0 on brand + bone-conduction, but **4.2 / 4.2 / 0.8 / 0.0** on its own open-ear terms. Expected CTR is the heaviest QS component; Ad Rank = Bid × QS × assets — **this is the Rank problem, and it is Search-26's problem specifically (see countdown note).** Fix RSAs (8–10 headlines, 3–4 descriptions, Excellent Ad Strength ≈ +45% CTR) + landing-page message match. | QS ≥ 8 on `open ear headphones` cluster | **The biggest free lever in the account.** Lower CPC *and* higher Ad Rank — impression share bought with relevance, not budget. | 🟡 **Draft queued — GA-008, 2026-07-13 22:26 IST** | — |
| **P1-5** | **Rein in AI Max** (it is **already ON** on `Search-26` — see learning-log #9). Matching `truth hear`, `tecno earbuds`, `finger earphone` — ~₹270/30d, 0 conversions. Add brand exclusions + negatives + text guidelines, or prove it pays. | AI_MAX terms converting, or excluded | Stops junk matching; makes AI Max an asset not a leak | 🟡 **Covered by GA-002** (AI Max junk terms included in the negative-keyword draft) | — |
| **P1-6** | **Kill tablet.** ₹363/30d, **0 conversions, ₹0 revenue**, every campaign. Device bid adjustment −100%. | Tablet excluded | Free ₹363/30d. No learning-phase cost. | 🟡 **Draft queued — GA-003** | — |
| **P1-7** | **Shopping SKU mix is upside-down.** Pro takes **50% of Shopping spend at the worst ROAS (11.33×)**; SafeBuds gets 18% at the **best (15.27×, CPA ₹140)**. Rebalance via campaign priority / feed labels. | Mix follows return | Higher blended Shopping ROAS at flat spend | 🟡 **Draft queued — GA-004** | — |
| **P1-8** | **Stop bidding against ourselves on brand.** `Search-26` and Shopping both buy `ng earsafe` — Search ~16–22×, Shopping ~13–19× on the *same query* (range depends on brand-term-set width used per pull). ~₹1,500–2,400/30d split. | One campaign owns brand | Cheaper brand clicks; cleaner attribution | 🟡 **Draft queued — GA-005** | — |
| **P1-9** | **Expand conquest — it's the best return in the account and it's starved.** `wehear earbuds` 45.7×, `wehear safe buds` 53.9×, `poly voyager free 60` 55.2× — on ₹50–100 each. | Conquest cluster built + funded | Highest-ROAS lever available; small, testable spend | 🟡 **Draft queued — GA-006** | — |
| **P1-10** | **⭐ NEW, 2026-07-13 22:26 IST — Shopping is Budget-lost, not Rank-lost.** `SC - All Range` Lost-Budget 49.0% vs Lost-Rank 7.4% (IS 42.7%). This means, once the marginal-ROAS gate clears, the next budget increment should target Shopping specifically, not the account broadly. | Confirm on next IS pull; hold as SH-GA-9 until gates clear | Correct lever gets the future budget dollar first | ⬜ Backlog — **double-gated behind 19 Jul re-read + ~26 Jul no-touch expiry** | — |
| **P2-1** | **Conversion-tracking fix unblocks the tROAS re-baseline** (P0-1 → P0-2). Note: **AI Max is already live**, so it is NOT the blocked-behind-P0-1 scale lever it was seeded as — see P1-5. | — | — | ⬜ Superseded by P1-5 | — |
| **P3-1** | **Geo/holdout incrementality test** — `GoogleAds_Measurement_Incrementality_Plan.md`. Measures total Shopify revenue, not platform claims. | Causal read on true incrementality | Would settle the overclaim question for good | ⬜ Backlog | — |
| **P3-2** | **⭐ NEW, 2026-07-13 22:26 IST — reconcile the 17–23 Jun best-week anomaly.** Rolling-7d scan found TRUE ROAS 16.35× at ~₹1,285/day (2026-06-17→06-23) — beats the logged "best week" of 11.50× at ₹1,801/day. Not yet explained. | Day-level pull for 17–23 Jun; check for a demand event vs a genuine low-spend efficiency point | Could revise the "₹1,800/day is optimal" pattern (learning-log #4) | ⬜ Backlog | — |

### ⚠️ P0-3 — the GA-001 decision (needs Meet)

**The problem:** GA-001 as queued rolls ₹3,589/day → ₹1,800–2,000/day in one move. That is a **~50% cut**. Per guide Ch 10, a budget change **>20% in either direction triggers a new learning phase** — and these campaigns are *already inside* the 1–2 week learning phase triggered by the 11–12 Jul doubling. Approving it as written means **two learning resets in two weeks**, and destroys our ability to read whether the first one was recovering.

**Option (a) — stepped rollback:** ₹3,589 → ~₹2,900 → ~₹2,300 → ~₹1,850 over three weeks. Each step ≤20%. Slower, but never resets learning.

**Option (b) — hold and re-read:** hold current spend through the no-touch window, **re-read on 19 Jul** once the 7-day attribution has matured, then step down. TRUE ROAS on 11–12 Jul was **6.20×** — *just above* the 6.0 floor, and it is a learning-phase number that may partially recover.

**Recommendation: (b), then (a).** The floor has not actually broken (6.20 > 6.0), the number we are reacting to is contaminated by a learning phase we caused, and the 7-day attribution window means we genuinely do not know yet. Re-read 19 Jul; if TRUE ROAS is still <9.0, begin the stepped rollback.

**Run log — 2026-07-13 (Monday read):** fresh 30d pull reconfirms the sanity anchor (9.38× TRUE / 48.5% overclaim). Last-7d TRUE ROAS 8.19× — still above the 6.0 floor but noisy (contains the 07-09 data blackout, the near-dark 07-10, and the 11-12 Jul spike in the same window). Marginal ROAS on the spike recomputed at **1.15×** from this pull (vs 0.86× previously logged against a different baseline week) — same conclusion, still sub-floor, still only 2 days of post-change data. **Held. No new draft.** Re-read stays gated to 2026-07-19.

**Run log — 2026-07-13, 22:02 IST (second pass, same day):** re-triggered decode, independent Windsor pull, same 30d window (unchanged since it ends "yesterday" = 12 Jul either way). Every figure reproduced bit-for-bit against the morning pass: spend ₹48,964.91, GA4 rev ₹4,59,163.75, TRUE ROAS 9.3774×, overclaim 48.5%, marginal ROAS 1.15×. No new information, no threshold moved. **Held again. No new draft.** Re-read still gated to 2026-07-19 — do not re-run this decode again before then unless a threshold is suspected of tripping intraday.

**Run log — 2026-07-13, 22:26 IST (third pass, same day):** third independent Windsor pull, sanity anchor reproduced bit-for-bit again (9.3774× / 48.5% / 133 txns). Marginal ROAS recomputed with a **clean** pre-spike baseline (06-29→07-05, avoiding the 07-09/07-10 blackout) at **1.43×** — a naive blackout-contaminated baseline (07-04→07-10) was tried first and gave a false 4.75×, discarded as corrupted. Three independent marginal-ROAS reads this week (0.86× / 1.15× / 1.43×) all land well under the 6.0 gate. **Held again. No budget draft.** New non-budget work this pass: **GA-008 drafted** (QS/RSA fix, P0-6/P1-2's first live draft) and the Shopping-is-Budget-lost nuance logged (P1-10, SH-GA-9). Re-read stays gated to 2026-07-19.

## PERFORMANCE TARGETS

| Metric | Current (30d, 13 Jun–12 Jul) | Floor | 30-day target | 90-day target |
|---|---|---|---|---|
| **TRUE ROAS** (GA Ads spend ÷ GA4 google/cpc rev) | **9.38×** | **6.0×** | ≥ 9.0× | 9–11× band held while spend compounds |
| Best-week TRUE ROAS | 11.50× (wk3, ₹1,801/day) — **note: a rolling scan found 16.35× at 17–23 Jun, ~₹1,285/day; not yet reconciled, see P3-2** | — | Re-achieve | Beat, at higher spend |
| Marginal ROAS (last increment) | **0.86× / 1.15× / 1.43×** (11–12 Jul, three independent computations, all consistent, all sub-floor) | **6.0×** | ≥ 6.0 before any scale | ≥ 6.0 sustained |
| Platform overclaim | **48.5%** (30d) | 35–65% band | **< 20%** (after P0-1) | < 15% |
| Spend | ₹48,965 (₹1,632/day) | — | Hold ~₹1,800/day | Compound via +20%/wk ratchet **only** when marginal ≥ 6.0 |
| GA4 google-paid revenue | ₹4,59,164 | — | ≥ ₹4.6L | Up with spend at held ROAS |
| Lost IS (Rank) — `Search-26 May 25` | 60.4% (confirmed 2026-07-13 22:26 IST) | — | Down via QS (GA-008), not budget | < 40% |
| Lost IS (Budget) — `SC - All Range` | 49.0% (confirmed 2026-07-13 22:26 IST) | — | Hold — budget move gated until marginal ROAS clears | < 30% |

## STANDING TASKS

| Cadence | Task |
|---|---|
| **Daily (Tue–Sun, 07:30 IST)** | Guard run — TRUE ROAS 7d, floor check, pacing check, no-touch check. **Silence if nothing trips.** |
| **Monday (07:30 IST)** | Full audit — campaigns, IS/Rank, feed, assets, thresholds, learning-phase state → drafts + learning-log entry |
| Weekly | Search-terms report review → negatives |
| Monthly | Asset performance review; replace "Low" assets (>5,000 impressions) |

## DATA PULL SCHEDULE
- **Windsor `google_ads`** acct `508-958-3796` — `date, campaign, spend, clicks, impressions, conversions, conversions_value`
- **Windsor `googleanalytics4`** property `299565498` — `date, source, medium, sessions, totalrevenue, transactions`, filtered `medium = cpc` (keeps the pull small; avoids the truncation trap)
- Both: 30-day window, pulled every run.

## DEPENDENCIES / BLOCKERS
- **P0-2, P2-1 are blocked by P0-1.** The conversion fix is the keystone — measurement must be right before bidding or AI Max can be trusted.
- **P0-3 needs a human decision** (see box above) and is inside a no-touch window until ~19 Jul (re-read) / ~26 Jul (no-touch expiry from the 11–12 Jul spike).
- P1-3 (feed titles) may need Merchant Center access beyond the Windsor read connector.
- **P1-10 / SH-GA-9 is double-gated**: needs both the 19 Jul account-level marginal-ROAS re-read to clear 6.0, and the ~26 Jul no-touch expiry, before any Shopping-specific budget test can run.
