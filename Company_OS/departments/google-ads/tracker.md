# Google Ads — Live Task Tracker

> Read at the start of every session, after `constitution.md`. Archive completed sprints to `learning-log.md` every 30 days.
>
> **Last updated: 2026-07-27 (Monday teardown — first full audit on the direct-API pipeline, curl workaround for the Ads client).** ⚠️ **GA-009/010/012/013/015 are STILL UNCONFIRMED as executed.** `tecno earbuds` (₹90.21) and `truth hear` (₹77.67) show **rupee-for-rupee identical spend** to the 2026-07-16 AND 2026-07-23 pulls — a 3rd straight cycle — but both terms have exactly 1 click, ever, so this specific test can't distinguish "broken write path" from "no new activity." Refined as **GA-021**. **GA-015 itself is now stale**: its #1 item, `ear safe headphones`, shows 0.20 conversions this cycle and must be dropped before any execution — **GA-020** supersedes GA-012 and GA-015 with a freshly re-verified 1,174-term batch (₹18,253.45/30d). **P0-3/SH-GA-7 (budget headroom) stays CLOSED — reaffirmed, no new natural spend variation.** SH-GA-14 (tablet rescope, GA-014) reconfirmed a 3rd time — still pending execution. **New this cycle: the Shopping SKU mix has flipped again — Comm 2.0, not Pro, is now the worst-returning material SKU (9.76×), while Pro's share has fallen to 23.9%.** Filed as SH-GA-16 (Comm 2.0 feed-title test). AI Max leakage has more than doubled since 07-16 (₹624.35 → ₹1,440.60/30d). A new GA4 revenue-lag anomaly appeared on 2026-07-26 (spend with ₹0 recorded revenue) — filed as GA-022.

## PRIORITY SYSTEM
- **P0** — this week. Blocks everything else, or is time-boxed by an external deadline.
- **P1** — this sprint. The real levers.
- **P2** — next sprint / blocked.
- **P3** — backlog.

---

## ⏳ THE COUNTDOWN — 17 AUG 2026 (21 days as of 2026-07-27)

Google's Smart Bidding change: **budget-limited tROAS campaigns get pulled DOWN toward their target instead of overperforming it.** Both our campaigns are constrained.

**⚠️ There are TWO targets, and they are different:**

| Campaign | tROAS | Set at |
|---|---|---|
| `SC - All Range` (`23278488657`) | **8.0** | campaign level |
| `Search-26 May 25` (`22601036342`) | **9.0** | **ad-group** level (`178785500303`) |

Both were set against the **inflated** conversion value. On 17 Aug, Google will spend harder to drag each toward a target that was never calibrated to reality. **P0-1 → P0-2 must both land first. This is the department's only hard deadline. P0-1 is still 🔴 not started as of 2026-07-27 — 21 days left, and closing fast.**

---

## ✅ SHIPPED — ⚠️ UNCONFIRMED, see 2026-07-16/23/27 notes above

| What | Result (as claimed 2026-07-14) | Date | Latest verification (2026-07-27) |
|---|---|---|---|
| **GA-009 + GA-010 — 99 zero-conversion negative keywords (EXACT), campaign-level.** | **₹3,659/30d of waste removed** (claimed). | 2026-07-14 | ⚠️ **STILL NOT CONFIRMED.** `open ear earbuds` has since converted (1.00 conv) so it's a moot test; `tecno earbuds`/`truth hear` (GA-013 family) show identical spend for a 3rd cycle, but see GA-021 — the test itself may not be able to prove execution either way for single-click terms. |
| **P1-1 — Tablet excluded (−100% device bid), all campaigns.** | **₹363/30d recovered** (claimed). | 2026-07-14 | ⚠️ **STILL NOT CONFIRMED as a blanket cut — and shouldn't be, per GA-014.** SC-All Range tablet still converts (₹254.61, 2 conv, 23.36× platform this window) — a blanket cut would still be the wrong call. Search-26 tablet (₹50.97, 0 conv) remains the correct, still-unexecuted, scoped cut. |
| **P1-2 — SafeBuds Ivory excluded** (`…51380726530327`) from `SC - All Range`. | **₹956/30d reallocated** (claimed). | 2026-07-14 | ⚠️ **STILL NOT CONFIRMED**, though now immaterial — Ivory is down to ₹380.11/30d (0.8% of Shopping spend), still the worst-ROAS SKU (8.98×) but too small to matter much either way. |

### 💰 Total claimed-shipped: ₹4,978/30d — **status remains unconfirmed. GA-020 (₹18,253.45/30d) is the current, freshly-verified live waste figure regardless of what did or didn't execute from the 07-14 batch.**

**📅 THE READ — 2026-07-21 (7 days, one full attribution window) — superseded; execution still unconfirmed, so this specific read is moot. The department is now tracking GA-020's 2026-07-30 read plan instead.**

⚠️ **Do not run a falsifier check against changes that never demonstrably happened.** Until GA-021 or a direct write-path test resolves execution status, treat every "cut" as still-live spend and keep re-verifying the current aggregate (which is what GA-020 does).

---

## CURRENT SPRINT

| # | Task | Target | Why it matters | Status |
|---|---|---|---|---|
| **P0-1** | **Fix the duplicate purchase conversion action.** Two actions fire on the same orders; the higher-coverage Shopify-pixel `Purchase (1)` (489 orders / ₹14.5L) is **excluded from bidding** while the lower-coverage GA4 import counts. (`GoogleAds_Conversion_Tracking_Task.md`) | One purchase action, correct coverage, in the bidding goal | **Closes the ~40–54% overclaim. Unblocks P0-2 and everything downstream.** Smart Bidding cannot optimise toward a number that is materially wrong. | 🔴 Not started (confirmed still not started 2026-07-27 — 21 days to 17 Aug) |
| **P0-2** | **Re-baseline BOTH tROAS targets** against the corrected value. Walk each in **≤15%/week** steps. | Shopping and Search each get their *own* corrected target | Removes the 17 Aug landmine. | ⬜ Blocked by P0-1 |
| **P0-3** | **CLOSED 2026-07-23, reaffirmed 2026-07-27.** GA-001 (₹3,589 → ₹1,800 rollback) was **rejected** — a ~50% cut trips a *second* learning phase. | No re-read scheduled — wait for a natural spend variation. | Marginal ROAS reads trended 0.86× → 1.15× → 1.43× → 3.94× → **−3.64× (2026-07-23)**, unchanged 2026-07-27 (no new variation to test). | 🔴 **REJECTED — no budget headroom. Do not step up. Gate stays closed.** |
| **P0-4** | **Diagnose `Search \| SafeBuds \| OWS + Conquest`** (`23905187273`). ₹1,011 spent, **12.57% CTR, 0 conversions**. High CTR + zero conversion = **landing-page / intent mismatch**, not a bidding problem. | Root cause named; fix or leave dark | Campaign is **already PAUSED** and dark since ~22 Jun — no urgency, but resolve before any relaunch. | 🔴 Not started |
| **P1-1** | **Rein in AI Max** — already ON on `Search-26` (`search_term_match_type = AI_MAX`), matching junk. Brand exclusions + text guidelines, or prove it pays. | AI_MAX terms converting, or excluded | **Never draft "enable AI Max". It is on.** ⚠️ **Worsening 2026-07-27: 56 distinct AI_MAX queries (up from 17), ₹1,440.60/30d (up from ₹624.35), still 52 zero-conversion.** Filed as GA-013, still unexecuted — escalate priority. | 🔴 Not started, and the problem is growing |
| **P1-1b** | **Confirm execution of GA-009/010/tablet/SafeBuds-Ivory.** Escalated a 2nd time 2026-07-23; test methodology refined 2026-07-27. | Spend check confirms ₹0 on all previously-approved cuts, or root-cause the block | Nothing else this department ships matters if "SHIPPED" doesn't mean shipped. **2026-07-27: the standard exact-rupee test on `tecno earbuds`/`truth hear` can't actually discriminate broken-vs-idle for single-click terms — see GA-021.** | 🔴 **Still not started — GA-021 needs a `segments.date`-scoped pull or a higher-volume term next cycle, not another identical aggregate re-read.** |
| **P1-1c** | **Rescope tablet exclusion to `Search-26` only, not blanket.** SH-GA-14 read completed 2026-07-23, reconfirmed a 3rd time 2026-07-27. | Search-26 tablet (₹50.97, 0 conv) excluded; `SC - All Range` tablet (₹254.61, 2 conv, ₹23.36× platform) left alone | Blanket cut would forfeit real Shopping tablet revenue — a second conversion now carries the verdict, still thin but consistent across 3 pulls. | 🟡 **Confirmed, ready to execute — GA-014. This is a device modifier, not budget/bid — not gated by any no-touch window.** |
| **P1-2** | **Shopping feed titles.** `SC - All Range` is now **84% of spend** and is feed-targeted — feed quality *is* the targeting. Title = `[Brand] + [Product Type] + [Key Feature] + [Variant]`, front-load first 70 chars. | Titles rewritten, A/B'd via Merchant Center feed rules | **Probably the largest un-pulled lever in the account.** Completely untouched. **Narrowed 2026-07-27 to a first concrete target: Comm 2.0 specifically (worst-returning material SKU, 9.76×) — see SH-GA-16.** | 🔴 Not started |
| **P1-3** | **Enhanced Conversions.** SHA-256 first-party data at conversion time. Impact visible ~30d after enabling. | Enabled + verified | Attacks the platform-vs-GA4 gap from the other side, alongside P0-1. | 🔴 Not started |
| **P1-4** | **NEW 2026-07-27 — Execute GA-020 (refreshed 1,174-term zero-conv negative batch, ₹18,253.45/30d) once the write path can be confirmed to actually execute anything (see GA-021).** Supersedes GA-012 and GA-015 (GA-015 went stale — see below). | 1,174 terms negatived, spend falls toward ~₹0 within one attribution window on covered spend | This is now the single largest identified CUT — but three straight cycles of prior batches show no confirmed execution. | 🔴 **Blocked by unresolved write-path status (GA-021)** |
| **P1-5** | **NEW 2026-07-27 — Shopping SKU mix has reversed a 2nd time; investigate Comm 2.0 specifically.** Pro's share has fallen from 47.0% → 40.7% → **23.9%** across three cycles with zero executed action. SafeBuds Black is now largest by spend (38.6%, 12.78×); Comm 2.0 is second (36.7%) at the **worst** ROAS of the three material SKUs (9.76×). | Feed-title rewrite for Comm 2.0, read 2026-08-10 (SH-GA-16) | The old "Pro is the problem" framing (GA-004, retracted) is now doubly wrong — Pro has already self-corrected. Don't resurrect it; the current drag is Comm 2.0. | 🟡 **New — SH-GA-16 open, read 2026-08-10** |
| **P1-6** | **NEW 2026-07-27 — name the 2026-07-26 GA4 revenue-lag anomaly (GA-022).** ₹1,745.80 Ads spend, ₹0.00 GA4 revenue that date — the reverse of the three known "went dark" days. Read as processing lag (institutional pattern 1b), not a new class of fault — pending a re-check. | Re-verify 07-26 revenue on next pull; if still ₹0, escalate as a 4th standing gap. | Compresses last-7d's overclaim ratio to an out-of-band 12.0% this cycle — must not be misread as an attribution fix. | 🟡 **New — informational, re-check next cycle** |
| **P2-1** | **Build a conquest Search campaign** (SH-GA-11). `wehear earbuds` 20.16–57.8× · `wehear safe buds` 26.66–28.66× · `poly voyager free 60` 55.2× — on ₹50–385 each. | Dedicated Search campaign, conquest keywords | **Best return in the account, and starved.** These terms currently land in **Shopping — which has no keywords**, so there is no bid to raise. A new campaign is the *only* lever. Costs a fresh learning phase → **do it after 17 Aug.** | ⬜ Deferred |
| **P3-1** | **Geo/holdout incrementality test.** | Causal read on true incrementality | Would settle the overclaim question for good. | ⬜ Backlog |

---

## ❌ RETRACTED — do not resurrect

| Was | Why it's dead |
|---|---|
| **"The Quality Score scandal"** *(old P0-5/P0-6, GA-008)* | **FALSE.** Windsor **sums** `quality_score` across rows. Real daily QS reconfirmed 2026-07-27 (direct API, 1,700 keyword rows): max QS seen = 10, no keyword at QS≤4 carried any spend. **There is no QS problem — confirmed a further time.** |
| **"Shopping SKU mix is upside-down, Pro is the problem"** *(old P1-7, GA-004)* | **FALSE, and now doubly so.** Pro's share has fallen on its own from 47.0% (07-13) → 40.7% (07-16) → **23.9%** (07-27), entirely without any executed mix-shift action. **The current SKU to watch is Comm 2.0** (9.76×, now the worst of the three material SKUs) — see SH-GA-16. Do not resurrect the Pro-focused framing. |
| **"Raise conquest keyword bids"** *(GA-006)* | **IMPOSSIBLE.** The terms sit in a **Shopping** campaign — no keywords exist. Superseded by P2-1. |
| **"Pause the dormant SafeBuds campaign"** *(GA-007)* | **NO-OP.** It is already `PAUSED`. |
| **"Roll the budget back to ₹1,800/day"** *(GA-001)* | **REJECTED.** ~50% cut trips a second learning phase. Superseded by P0-3 (closed 2026-07-23, reaffirmed 2026-07-27). |
| **"Tablet is a blanket free kill across every campaign"** *(old finding, P1-1)* | **NARROWED, reconfirmed a 3rd time 2026-07-27.** True for Search-26 (₹50.97, 0 conv this pull). False for `SC - All Range` — it continues to convert (₹254.61, 2 conv, 23.36× this pull). See GA-014. |
| **"Brand de-duplication (GA-005) has a stable, actionable ROAS gap"** *(GA-005, SH-GA-10)* | **CLOSED PERMANENTLY 2026-07-23 — GA-018. Stays closed 2026-07-27** (gap 30.46× vs 33.79×, close again, consistent with instability — not re-opened). |
| **"Google Ads has budget headroom above ~₹1,800/day"** *(GA-001, SH-GA-7)* | **CLOSED 2026-07-23 — GA-019. Reaffirmed 2026-07-27** — no natural spend variation occurred to re-test. |
| **"tecno earbuds / truth hear identical spend proves the write path is broken"** *(part of GA-016)* | **Refined, not retracted, 2026-07-27.** Both terms have exactly 1 click, ever — this test can't distinguish "broken" from "idle." See GA-021 for the corrected test design. |

**Also: do not "build a SafeBuds Shopping campaign."** One already exists — `Shopping | SafeBuds | 7th May'26` (`23830060744`), **PAUSED**, tROAS 10.0. So does `SC - All Range #2` (`23891088227`), PAUSED, tROAS 8.0.

---

## PERFORMANCE TARGETS

| Metric | Current (last live pull, 27 Jun–26 Jul, direct API via curl) | Floor | 30-day target | 90-day |
|---|---|---|---|---|
| **TRUE ROAS** (GA4 `google/cpc` revenue ÷ Google Ads spend) | **8.57×** (30d); **8.46×** last-7d (⚠️ PARTIAL — 26 Jul shows spend with ₹0 recorded GA4 revenue, a processing-lag artifact); **6.90×** prior-7d (fully matured, trustworthy) | **6.0×** | ≥ 9.0× | 9–11× band held while spend compounds |
| Marginal ROAS (11–12 Jul spike, fully matured) | **−3.64×** (2026-07-23, unchanged 2026-07-27 — no new natural variation) — **gate CLOSED, rejected** | **6.0×** | N/A until re-opened by a natural spend variation | ≥ 6.0 sustained |
| Platform overclaim | **38.8%** (30d, in-band); **12.0%** last-7d (⚠️ out-of-band, contaminated by the 07-26 anomaly); **42.3%** prior-7d (in-band, contains the known 07-18 dark day) | 35–65% band | **< 20%** (after P0-1) | < 15% |
| Spend | ₹54,616.59/30d (~₹1,821/day) | — | Hold at current level — no headroom (P0-3/GA-019 closed) | Compound via +20%/wk **only** when marginal ≥ 6.0 |
| Zero-conversion waste | **₹18,253.45/30d** (GA-020, cost≥₹5 floor, fully unfiltered, re-verified against a fresh aggregate — supersedes GA-012 and the now-stale GA-015) | — | Keep at ~₹0 via weekly prune, **once execution can be confirmed (GA-021)** | — |
| Lost IS (Rank) — `Search-26` | **29.2%** (down from 37.5%) — but lost-Budget (59.7%) is now HIGHER, a flip from history, single-cycle read | — | Down via assets, **not budget**; reconfirm the Budget/Rank flip next cycle before acting | < 40% |
| Lost IS (Budget) — `SC - All Range` | **63.8%** (reconfirmed a 3rd time, SH-GA-9) | — | Next budget dollar targets Shopping, once gate clears (currently CLOSED — no budget move) | — |

---

## DATA PULL SCHEDULE — 7 pulls, **direct Google Ads + GA4 APIs (Windsor fully retired), NO metric filters, ever — not even a `spend>20` row filter.** Aggregate before selecting, never trust a single row.

| # | Connector | What | Notes |
|---|---|---|---|
| 1 | Google Ads API (direct, via `curl`) | campaign × day | |
| 2 | GA4 Data API (direct, via `requests`) | `google/cpc` × day | `sessionMedium = cpc` (EXACT) is **the one legal dimension filter**. Without it GA4 returns the full unfiltered set. |
| 3 | Google Ads API | keyword × Quality Score | **MUST NOT include `date`** in GAQL — `quality_score` is a current attribute, not a summable metric, on the direct API. **Any QS > 10 is a bug — re-pull.** |
| 4 | Google Ads API | search terms | Aggregate in code before selecting zero-conversion terms — never trust a single row. Search-term-view covers ~72% of account spend (Shopping reporting gap, structural). |
| 5 | Google Ads API | Shopping SKU | **FOUR SKUs.** Assert they sum to campaign spend. |
| 6 | Google Ads API | device | Assert sums to campaign spend. Cuts must be scoped **per campaign** — see GA-014. |
| 7 | Google Ads API | impression share | Cannot be queried alongside `quality_score` (Google API restriction) |

> 🚨 **NEW 2026-07-27 — the `requests` Python HTTP client gets a `503 "DNS resolution failure"` specifically from `googleads.googleapis.com:searchStream`, on every attempt, with valid credentials.** DNS resolves fine (confirmed via `getent`/`curl`); `curl` with identical Bearer + developer-token headers succeeds immediately (200/401 as expected). This looks like a client-specific (likely TLS-fingerprint-based) edge-routing quirk unrelated to credentials. **Workaround: issue Ads GAQL calls via `curl` subprocess, not the `requests` library.** GA4's `runReport` continues to work fine through `requests`. Re-test with `requests` on the next cycle in case it self-resolves; don't assume the workaround is needed forever.
> 🚨 **Never put `conversions` or `impressions` in a `filters` argument (GAQL `WHERE` clause).** Pull everything, filter in code, and **assert every breakdown sums to its parent total.**
> 🚨 **Never trust a "SHIPPED" status without a spend check** — and as of 2026-07-27, never trust an "unchanged spend" finding as proof of non-execution either, without checking the term's click history first (see GA-021). Both directions of this check need scrutiny.
> 🚨 **A drafted negative-keyword batch is not safe indefinitely — re-verify immediately before push, not just at draft time.** GA-015's #1 item converted between drafting (07-23) and this cycle (07-27) while still unexecuted. GA-020 supersedes it with a freshly re-verified list.

---

## DEPENDENCIES / BLOCKERS

- **P0-2 is blocked by P0-1.** The conversion fix is the keystone — measurement must be right before bidding can be trusted.
- **P0-3 is CLOSED as of 2026-07-23, reaffirmed 2026-07-27** — marginal ROAS −3.64×, no new natural spend variation to re-test. No budget move until one occurs, or P0-1/P0-2 land.
- **⚠️ The 2026-07-14 "shipped" waste cuts (₹4,978/30d) remain UNCONFIRMED as of 2026-07-27** — and the standard test for confirming/denying execution (exact-rupee-identical spend) has itself been shown to be inconclusive for low-volume terms. **GA-021 queued to design a better test** (segments.date-scoped pull, or a higher-volume candidate term).
- **GA-014 (tablet rescope) — reconfirmed a 3rd time 2026-07-27.** Ready to execute; it is a device modifier, not gated by budget no-touch.
- **GA-020 (refreshed negative batch, ₹18,253.45/30d) is blocked by the same unresolved write-path question as GA-015/016 before it** — no point drafting a bigger batch if the write path that would execute it can't be confirmed either way.
- **GA-005/SH-GA-10 (brand de-duplication) is CLOSED PERMANENTLY as of 2026-07-23, reaffirmed 2026-07-27** — see GA-018.
- **P2-1 (conquest campaign) is deferred past 17 Aug** — a new campaign starts a fresh learning phase, and P0-1/P0-2 need clean water to land in.
- **NEW 2026-07-27 — SH-GA-16 (Comm 2.0 feed-title test) is open, read scheduled 2026-08-10.** No blocker; can proceed independently of the budget/write-path questions above.
