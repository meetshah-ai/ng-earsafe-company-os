# Google Ads — Live Task Tracker

> Read at the start of every session, after `constitution.md`. Archive completed sprints to `learning-log.md` every 30 days.
>
> **Last updated: 2026-07-23 (Thursday follow-up — first fully direct-API cycle, Windsor retired for both Ads and GA4).** ⚠️ **GA-009/010/012/013 are STILL UNCONFIRMED, now more strongly disconfirmed.** `tecno earbuds` (₹90.21) and `truth hear` (₹77.67) show **rupee-for-rupee identical spend** to the 2026-07-16 pull — a full week with zero writes landing. Escalated a 2nd time as **GA-016**. **P0-3/SH-GA-7 (budget headroom) is now CLOSED — marginal ROAS −3.64× on a fully-matured 10-day read.** SH-GA-14 (tablet rescope) reconfirmed a 2nd time — ready to execute (GA-014, non-budget). SH-GA-10/GA-005 (brand de-dup) closed permanently as GA-018 — four pulls, four different unstable answers. New drafts this cycle: **GA-015** (expanded 99-term negative batch, ₹17,784.14/30d — 4.4× the previous undercounted estimate), **GA-016** (2nd execution escalation), **GA-017** (new zero-spend day 2026-07-18), **GA-018** (close GA-005), **GA-019** (explicit budget hold).

## PRIORITY SYSTEM
- **P0** — this week. Blocks everything else, or is time-boxed by an external deadline.
- **P1** — this sprint. The real levers.
- **P2** — next sprint / blocked.
- **P3** — backlog.

---

## ⏳ THE COUNTDOWN — 17 AUG 2026 (25 days as of 2026-07-23)

Google's Smart Bidding change: **budget-limited tROAS campaigns get pulled DOWN toward their target instead of overperforming it.** Both our campaigns are constrained.

**⚠️ There are TWO targets, and they are different:**

| Campaign | tROAS | Set at |
|---|---|---|
| `SC - All Range` (`23278488657`) | **8.0** | campaign level |
| `Search-26 May 25` (`22601036342`) | **9.0** | **ad-group** level (`178785500303`) |

Both were set against the **inflated** conversion value. On 17 Aug, Google will spend harder to drag each toward a target that was never calibrated to reality. **P0-1 → P0-2 must both land first. This is the department's only hard deadline. P0-1 is still 🔴 not started as of 2026-07-23 — 25 days left.**

---

## ✅ SHIPPED — ⚠️ UNCONFIRMED, see 2026-07-16 note above

| What | Result (as claimed 2026-07-14) | Date | 2026-07-16 verification |
|---|---|---|---|
| **GA-009 + GA-010 — 99 zero-conversion negative keywords (EXACT), campaign-level.** | **₹3,659/30d of waste removed** (claimed). | 2026-07-14 | ⚠️ **NOT CONFIRMED.** `open ear earbuds` (a GA-010 target) still spending ₹643.15/30d at 0 conversions on the 07-16 pull. |
| **P1-1 — Tablet excluded (−100% device bid), all campaigns.** | **₹363/30d recovered** (claimed). | 2026-07-14 | ⚠️ **NOT CONFIRMED.** Tablet still spending ₹345.32/30d total across campaigns on the 07-16 pull — and Shopping's tablet slice actually converted this window (₹3,049.10 revenue, 11.08× ROAS), so a blanket cut would have been the wrong call anyway. See GA-014. |
| **P1-2 — SafeBuds Ivory excluded** (`…51380726530327`) from `SC - All Range`. | **₹956/30d reallocated** (claimed). | 2026-07-14 | ⚠️ **NOT CONFIRMED.** Still spending ₹751.20/30d, 2.81 conv, 11.24× ROAS on the 07-16 pull. |

### 💰 Total claimed-shipped: ₹4,978/30d — **status downgraded to unconfirmed pending an execution check (GA-011).**

**📅 THE READ — 2026-07-21 (7 days, one full attribution window) — now gated behind execution confirmation, not just the calendar date.**

| Check | Expect | 2026-07-16 status |
|---|---|---|
| Spend on the 99 negatived terms | **~₹0** | ❌ Still spending (e.g. `open ear earbuds` ₹643.15) |
| Conversions lost to the negatives | **ZERO** | n/a — negatives don't appear to have been pushed |
| Tablet spend | **₹0** | ❌ ₹345.32/30d total |
| SafeBuds Ivory spend | **₹0** | ❌ ₹751.20/30d |
| **TRUE ROAS (7d)** | **≥ 9.4×, ideally rising** | Last-7d (09–15 Jul) reads 6.26× but is contaminated by the known missing-spend-day gap — PARTIAL, not a clean read |

⚠️ **Do not run the 21-Jul falsifier check until GA-011 confirms whether these cuts ever actually executed.** A falsifier check against changes that never happened is meaningless.

---

## CURRENT SPRINT

| # | Task | Target | Why it matters | Status |
|---|---|---|---|---|
| **P0-1** | **Fix the duplicate purchase conversion action.** Two actions fire on the same orders; the higher-coverage Shopify-pixel `Purchase (1)` (489 orders / ₹14.5L) is **excluded from bidding** while the lower-coverage GA4 import counts. (`GoogleAds_Conversion_Tracking_Task.md`) | One purchase action, correct coverage, in the bidding goal | **Closes the 49% overclaim. Unblocks P0-2 and everything downstream.** Smart Bidding cannot optimise toward a number that is 49% wrong. | 🔴 Not started (confirmed still not started 2026-07-16) |
| **P0-2** | **Re-baseline BOTH tROAS targets** against the corrected value. Walk each in **≤15%/week** steps. | Shopping and Search each get their *own* corrected target | Removes the 17 Aug landmine. | ⬜ Blocked by P0-1 |
| **P0-3** | **CLOSED 2026-07-23.** Re-read the budget question. GA-001 (₹3,589 → ₹1,800 rollback) was **rejected** — a ~50% cut trips a *second* learning phase. | Re-pull **2026-07-19** (executed 2026-07-23, first fully-matured read). Hold at current spend; do not manufacture a spend variation to re-test. | Marginal ROAS reads trended 0.86× → 1.15× → 1.43× → 3.94× → **−3.64× (2026-07-23, fully matured 10-day read)**. Every read has stayed under the 6.0 gate; the mature one goes negative. **SH-GA-7 closed, GA-019 logged.** | 🔴 **REJECTED — no budget headroom. Do not step up.** |
| **P0-4** | **Diagnose `Search \| SafeBuds \| OWS + Conquest`** (`23905187273`). ₹1,011 spent, **12.57% CTR, 0 conversions**. High CTR + zero conversion = **landing-page / intent mismatch**, not a bidding problem. | Root cause named; fix or leave dark | Campaign is **already PAUSED** and dark since ~22 Jun — no urgency, but resolve before any relaunch. | 🔴 Not started |
| **P1-1** | **Rein in AI Max** — already ON on `Search-26` (`search_term_match_type = AI_MAX`), matching junk. Brand exclusions + text guidelines, or prove it pays. | AI_MAX terms converting, or excluded | **Never draft "enable AI Max". It is on.** Reconfirmed 2026-07-16: 17 distinct AI_MAX queries, ₹624.35/30d, still zero conversions. Filed as **GA-013**. | 🔴 Not started |
| **P1-1b** | **Confirm execution of GA-009/010/tablet/SafeBuds-Ivory.** Escalated a 2nd time 2026-07-23. | Spend check confirms ₹0 on all previously-approved cuts, or root-cause the block | Nothing else this department ships matters if "SHIPPED" doesn't mean shipped. Exact-rupee-identical spend on two independent terms (`tecno earbuds`, `truth hear`) across a full week is now the strongest evidence yet that the write path is structurally broken. | 🔴 **Still not started — GA-011 escalated again as GA-016. Needs a human console entry, not another automated retry.** |
| **P1-1c** | **Rescope tablet exclusion to `Search-26` only, not blanket.** SH-GA-14 read completed 2026-07-23 — reconfirmed a 2nd time. | Search-26 tablet (₹50.97, 0 conv) excluded; `SC - All Range` tablet (₹219.10, 1 conv, ₹3,049.10 rev, 13.92×) left alone | Blanket cut would forfeit real Shopping tablet revenue — same single conversion still carrying the whole verdict across three pulls now. | 🟡 **Confirmed, ready to execute — GA-014. This is a device modifier, not budget/bid — not gated by any no-touch window.** |
| **P1-2** | **Shopping feed titles.** `SC - All Range` is **79% of spend** (currently ~80% this window too) and is feed-targeted — feed quality *is* the targeting. Title = `[Brand] + [Product Type] + [Key Feature] + [Variant]`, front-load first 70 chars. | Titles rewritten, A/B'd via Merchant Center feed rules | **Probably the largest un-pulled lever in the account.** Completely untouched. | 🔴 Not started |
| **P1-3** | **Enhanced Conversions.** SHA-256 first-party data at conversion time. Impact visible ~30d after enabling. | Enabled + verified | Attacks the platform-vs-GA4 gap from the other side, alongside P0-1. | 🔴 Not started |
| **P1-4** | **NEW 2026-07-23 — Execute GA-015 (expanded 99-term zero-conv negative batch, ₹17,784.14/30d) once GA-016's write-path escalation resolves.** | 99 terms negatived, spend falls to ~₹0 within one attribution window | This is now the single largest identified CUT (4.4× the previous estimate) — but is worthless until GA-016 confirms a working write path. | 🔴 **Blocked by GA-016 (write-path escalation)** |
| **P1-5** | **NEW 2026-07-23 — Close GA-005/SH-GA-10 (brand de-duplication) permanently.** | No further action; stop re-testing | Four pulls, four different (once-inverted) brand-vs-Shopping ROAS gaps (16.98/12.60 → 20.33/13.66 → 20.56/13.92 → 33.71/35.24, nearly tied). The estimator is too unstable to found a change on. | ✅ **Closed 2026-07-23 — filed GA-018** |
| **P2-1** | **Build a conquest Search campaign** (SH-GA-11). `wehear earbuds` 26.7–57.8× · `wehear safe buds` 26.7–53.9× · `poly voyager free 60` 55.2× — on ₹50–135 each. | Dedicated Search campaign, conquest keywords | **Best return in the account, and starved.** These terms currently land in **Shopping — which has no keywords**, so there is no bid to raise. A new campaign is the *only* lever. Costs a fresh learning phase → **do it after 17 Aug.** | ⬜ Deferred |
| **P3-1** | **Geo/holdout incrementality test.** | Causal read on true incrementality | Would settle the overclaim question for good. | ⬜ Backlog |

---

## ❌ RETRACTED — do not resurrect

| Was | Why it's dead |
|---|---|
| **"The Quality Score scandal"** *(old P0-5/P0-6, GA-008)* | **FALSE.** Windsor **sums** `quality_score` across rows. Real daily QS reconfirmed 2026-07-16: `ng earsafe`=10, `ng earsafe pro`=10, `open ear headphones`=7, `open ear bluetooth headphones`=7, `open ear wireless headphones`=8, `bone conduction headphones`=5. **There is no QS problem.** |
| **"Shopping SKU mix is upside-down"** *(old P1-7, GA-004)* | **FALSE.** Truth (reconfirmed 2026-07-16, reconciled exactly to ₹40,438.55): **four** SKUs — Pro 40.7%/11.74×, Comm 2.0 31.0%/14.26×, SafeBuds Black 26.4%/13.63×, SafeBuds Ivory 1.9%/11.24×. Gap is real but modest — not worth a re-learn. Excluding SafeBuds Ivory (P1-2, status unconfirmed) is the sharp version. |
| **"Raise conquest keyword bids"** *(GA-006)* | **IMPOSSIBLE.** The terms sit in a **Shopping** campaign — no keywords exist. Superseded by P2-1. |
| **"Pause the dormant SafeBuds campaign"** *(GA-007)* | **NO-OP.** It is already `PAUSED`. |
| **"Roll the budget back to ₹1,800/day"** *(GA-001)* | **REJECTED.** ~50% cut trips a second learning phase. Superseded by P0-3 (stepped, gated to 19 Jul). |
| **"Tablet is a blanket free kill across every campaign"** *(old finding, P1-1)* | **NARROWED 2026-07-16, RECONFIRMED narrowed 2026-07-23.** True for Search-26 (₹50.97, 0 conv this pull). False for `SC - All Range` — it continues to convert (₹3,049.10 rev, 13.92× this pull, same single conversion carrying the verdict three pulls running). See GA-014. |
| **"Brand de-duplication (GA-005) has a stable, actionable ROAS gap"** *(GA-005, SH-GA-10)* | **CLOSED PERMANENTLY 2026-07-23 — GA-018.** Four independent pulls produced four different, once-inverted answers (16.98/12.60× → 20.33/13.66× → 20.56/13.92× → 33.71/35.24×, now nearly tied). The instability is the finding — do not re-test with "one more clean pull." |
| **"Google Ads has budget headroom above ~₹1,800/day"** *(GA-001, SH-GA-7)* | **CLOSED 2026-07-23 — GA-019.** Marginal ROAS −3.64× on the first fully-matured (10-day) post-spike read. Every interim read since 13 Jul agreed in direction. Re-open only after a natural spend variation, or after P0-1/P0-2 land. |

**Also: do not "build a SafeBuds Shopping campaign."** One already exists — `Shopping | SafeBuds | 7th May'26` (`23830060744`), **PAUSED**, tROAS 10.0. So does `SC - All Range #2` (`23891088227`), PAUSED, tROAS 8.0.

---

## PERFORMANCE TARGETS

| Metric | Current (last live pull, 23 Jun–22 Jul, direct API) | Floor | 30-day target | 90-day |
|---|---|---|---|---|
| **TRUE ROAS** (GA4 `google/cpc` revenue ÷ Google Ads spend) | **8.40×** (30d); **7.36×** last-7d; **7.18×** prior-7d (⚠️ both windows contain a zero-spend day — PARTIAL) | **6.0×** | ≥ 9.0× | 9–11× band held while spend compounds |
| Marginal ROAS (11–12 Jul spike, fully matured) | **−3.64×** (2026-07-23, 10-day post-spike read) — **gate CLOSED, rejected** | **6.0×** | N/A until re-opened by a natural spend variation | ≥ 6.0 sustained |
| Platform overclaim | **53.4%** (30d, in-band); **39.4%** last-7d (in-band); **22.3%** prior-7d (⚠️ out-of-band, contaminated by the 07-09 zero-spend day) | 35–65% band | **< 20%** (after P0-1) | < 15% |
| Spend | ₹53,202.16/30d (~₹1,773/day) | — | Hold at current level — no headroom (P0-3/GA-019 closed) | Compound via +20%/wk **only** when marginal ≥ 6.0 |
| Zero-conversion waste | **₹17,784.14/30d** (GA-015, fully unfiltered — 4.4× the previous GA-012 estimate which used a row-level spend filter) | — | Keep at ~₹0 via weekly prune, **once execution is confirmed (GA-016)** | — |
| Lost IS (Rank) — `Search-26` | **37.5%** | — | Down via assets, **not budget** | < 40% |
| Lost IS (Budget) — `SC - All Range` | **62.4%** (reconfirmed, SH-GA-9) | — | Next budget dollar targets Shopping, once gate clears (currently CLOSED — no budget move) | — |

---

## DATA PULL SCHEDULE — 7 pulls, **direct Google Ads + GA4 APIs (Windsor fully retired as of 2026-07-22), NO metric filters, ever — not even a `spend>20` row filter.** Aggregate before selecting, never trust a single row.

| # | Connector | What | Notes |
|---|---|---|---|
| 1 | `google_ads` | campaign × day | |
| 2 | `googleanalytics4` (`299565498`) | `google/cpc` × day | `medium = cpc` is **the one legal dimension filter**. Without it GA4 truncates. |
| 3 | `google_ads` | keyword × Quality Score | **MUST include `date`.** QS is **summed** across rows. **Any QS > 10 is a sum — re-pull.** |
| 4 | `google_ads` | search terms | Aggregate in code before selecting zero-conversion terms — never trust a single segmented row. |
| 5 | `google_ads` | Shopping SKU | **FOUR SKUs.** Assert they sum to campaign spend. |
| 6 | `google_ads` | device | Assert sums to campaign spend. Cuts must be scoped **per campaign** — see GA-014. |
| 7 | `google_ads` | impression share | Cannot be queried alongside `quality_score` (Google API restriction) |

> 🚨 **Never put `conversions` or `impressions` in a `filters` argument (GAQL `WHERE` clause).** Pull everything, filter in code, and **assert every breakdown sums to its parent total.**
> 🚨 **Never trust a "SHIPPED" status without a spend check.** Re-verify claimed executions against a live pull before building the next cycle's read on them. Reconfirmed 2026-07-23: exact-rupee-identical spend on two independent terms is the cleanest test that a change never landed.
> 🚨 **NEW 2026-07-23 — search-term-view (pull 4) does not fully cover Shopping campaign spend.** This pull totalled ₹38,059.00 vs the account's actual 30d spend of ₹53,202.16 (₹15,143.16 gap) — a real, disclosed Google/GAQL limitation (standard Shopping auctions don't fully expose search-term-level reporting), not a filter bug. Scope any zero-conversion waste total to what this pull actually covers.
> 🚨 **NEW 2026-07-23 — the previous GA-012 estimate (₹4,040.48) was itself an undercount.** It used a `spend>20`-per-row filter "per standard spec" — but that IS a metric filter and undercounts exactly like every other filtered pull in this account's history. A genuinely unfiltered pull this cycle found ₹17,784.14 — 4.4× larger. **There is no such thing as a "standard" exception to the no-metric-filter rule.**

---

## DEPENDENCIES / BLOCKERS

- **P0-2 is blocked by P0-1.** The conversion fix is the keystone — measurement must be right before bidding can be trusted.
- **P0-3 is CLOSED as of 2026-07-23** — marginal ROAS −3.64× on a fully-matured 10-day read. No budget move until a natural (not manufactured) spend variation occurs, or P0-1/P0-2 land.
- **⚠️ The 2026-07-14 "shipped" waste cuts (₹4,978/30d) remain UNCONFIRMED, now more strongly disconfirmed (2026-07-23)** — two independent zero-conv terms show exact-rupee-identical spend across a full week. **Escalated a 2nd time as GA-016 — this is now the department's single most urgent structural problem:** nothing else this department finds matters if it never executes.
- **GA-014 (tablet rescope) — SH-GA-14 read completed 2026-07-23, reconfirmed a 2nd time.** Ready to execute; it is a device modifier, not gated by budget no-touch.
- **GA-015 (expanded negative batch, ₹17,784.14/30d) is blocked by GA-016** — no point drafting a bigger batch if the write path that would execute it is broken.
- **GA-005/SH-GA-10 (brand de-duplication) is CLOSED PERMANENTLY as of 2026-07-23** — see GA-018. Do not re-open without a fundamentally different methodology.
- **P2-1 (conquest campaign) is deferred past 17 Aug** — a new campaign starts a fresh learning phase, and P0-1/P0-2 need clean water to land in.
