# Google Ads — Live Task Tracker

> Read at the start of every session, after `constitution.md`. Archive completed sprints to `learning-log.md` every 30 days.
>
> **Last updated: 2026-07-14** — Sprint rebuilt after **three findings were retracted as Windsor filter artifacts**. **₹4,978/30d of waste shipped: 99 negatives + tablet + SafeBuds Ivory.** Every number below comes from an **unfiltered** pull, reconciled to its parent total.

## PRIORITY SYSTEM
- **P0** — this week. Blocks everything else, or is time-boxed by an external deadline.
- **P1** — this sprint. The real levers.
- **P2** — next sprint / blocked.
- **P3** — backlog.

---

## ⏳ THE COUNTDOWN — 17 AUG 2026 (34 days)

Google's Smart Bidding change: **budget-limited tROAS campaigns get pulled DOWN toward their target instead of overperforming it.** Both our campaigns are constrained.

**⚠️ There are TWO targets, and they are different:**

| Campaign | tROAS | Set at |
|---|---|---|
| `SC - All Range` (`23278488657`) | **8.0** | campaign level |
| `Search-26 May 25` (`22601036342`) | **9.0** | **ad-group** level (`178785500303`) |

Both were set against the **inflated** conversion value. On 17 Aug, Google will spend harder to drag each toward a target that was never calibrated to reality. **P0-1 → P0-2 must both land first. This is the department's only hard deadline.**

*(Until 2026-07-14 the docs said "tROAS 9.0" for both. Wrong. They need separate corrected targets.)*

---

## ✅ SHIPPED

| What | Result | Date |
|---|---|---|
| **GA-009 + GA-010 — 99 zero-conversion negative keywords (EXACT), campaign-level.** 30 on `Search-26`, 69 on `SC - All Range`. | **₹3,659/30d of waste removed.** Zero converting terms, zero brand, zero conquest — verified against an unfiltered aggregate *before* the push. `open ear headphones` deliberately **kept** (it converts: ₹5,331). List: `execute/GA-009_GA-010_negatives.json`. **Reversible.** | 2026-07-14 |
| **P1-1 — Tablet excluded (−100% device bid), all campaigns.** | **₹363/30d recovered.** Tablet had **0 conversions, ₹0 revenue** across every campaign, every day of the 30d window. No learning-phase cost. **Reversible.** | 2026-07-14 |
| **P1-2 — SafeBuds Ivory excluded** (`…51380726530327`) from `SC - All Range`. | **₹956/30d reallocated** away from the campaign's worst SKU (**9.05×, CPA ₹332** — worse than Pro). Its budget now flows to the three remaining SKUs, which average **13.5×**. Product-group exclusion, no learning-phase cost. **Reversible.** | 2026-07-14 |

### 💰 Total shipped: **₹4,978/30d** of waste cut or reallocated — at flat spend, zero learning-phase cost, all reversible.

**📅 THE READ — 2026-07-21 (7 days, one full attribution window).** Pull unfiltered, reconcile to parent, and check all four:

| Check | Expect | Fail signal |
|---|---|---|
| Spend on the 99 negatived terms | **~₹0** | Any of them still spending → the negative didn't match; check match type |
| Conversions lost to the negatives | **ZERO** | Any conversion appearing on a negatived term → **remove that negative immediately** |
| Tablet spend | **₹0** | Non-zero → the bid adjustment didn't apply |
| SafeBuds Ivory spend | **₹0** | Non-zero → the product-group exclusion didn't take |
| **TRUE ROAS (7d)** | **≥ 9.4×, ideally rising** | **< 9.0× → something we cut was load-bearing. Investigate before cutting anything else.** |

⚠️ **The TRUE ROAS row is the one that matters.** All four cuts *look* free. If TRUE ROAS falls anyway, one of them was carrying assisted conversions we couldn't see, and the answer is to reverse — not to cut deeper.

---

## CURRENT SPRINT

| # | Task | Target | Why it matters | Status |
|---|---|---|---|---|
| **P0-1** | **Fix the duplicate purchase conversion action.** Two actions fire on the same orders; the higher-coverage Shopify-pixel `Purchase (1)` (489 orders / ₹14.5L) is **excluded from bidding** while the lower-coverage GA4 import counts. (`GoogleAds_Conversion_Tracking_Task.md`) | One purchase action, correct coverage, in the bidding goal | **Closes the 49% overclaim. Unblocks P0-2 and everything downstream.** Smart Bidding cannot optimise toward a number that is 49% wrong. | 🔴 Not started |
| **P0-2** | **Re-baseline BOTH tROAS targets** against the corrected value. Walk each in **≤15%/week** steps. | Shopping and Search each get their *own* corrected target | Removes the 17 Aug landmine. | ⬜ Blocked by P0-1 |
| **P0-3** | **Re-read the budget question.** GA-001 (₹3,589 → ₹1,800 rollback) was **rejected** — a ~50% cut trips a *second* learning phase. | Re-pull **2026-07-19**, once 7-day attribution has matured on the 11–12 Jul spike. Then step down **inside the 20% band** if TRUE ROAS is still < 9.0. | Marginal ROAS on the spike read 0.86× / 1.15× / 1.43× across three passes — all far below the 6.0 gate, but **all on a window younger than 7 days**. Not yet conclusive. | 🟡 Gated to 19 Jul |
| **P0-4** | **Diagnose `Search \| SafeBuds \| OWS + Conquest`** (`23905187273`). ₹1,011 spent, **12.57% CTR, 0 conversions**. High CTR + zero conversion = **landing-page / intent mismatch**, not a bidding problem (Ch 32/35). Check whether it points at the legacy SafeBuds PDP, archived → `/products/ngwehear` on 2026-07-12. | Root cause named; fix or leave dark | Campaign is **already PAUSED** and dark since ~22 Jun — no urgency, but resolve before any relaunch. | 🔴 Not started |
| **P1-1** | **Rein in AI Max** — already ON on `Search-26` (`search_term_match_type = AI_MAX`), matching `truth hear`, `tecno earbuds`, `finger earphone`. Brand exclusions + text guidelines, or prove it pays. | AI_MAX terms converting, or excluded | **Never draft "enable AI Max". It is on.** The 99 negatives already trimmed its junk — re-read 21 Jul for leakage. | 🔴 Not started |
| **P1-2** | **Shopping feed titles.** `SC - All Range` is **79% of spend** and is feed-targeted — feed quality *is* the targeting (Ch 8). Title = `[Brand] + [Product Type] + [Key Feature] + [Variant]`, front-load first 70 chars. | Titles rewritten, A/B'd via Merchant Center feed rules | **Probably the largest un-pulled lever in the account.** Completely untouched. | 🔴 Not started |
| **P1-3** | **Enhanced Conversions.** SHA-256 first-party data at conversion time (Ch 1). Impact visible ~30d after enabling. | Enabled + verified | Attacks the platform-vs-GA4 gap from the other side, alongside P0-1. | 🔴 Not started |
| **P2-1** | **Build a conquest Search campaign** (SH-GA-11). `wehear earbuds` 45.7× · `wehear safe buds` 53.9× · `poly voyager free 60` 55.2× — on ₹50–130 each. | Dedicated Search campaign, conquest keywords | **Best return in the account, and starved.** ⚠️ These terms currently land in **Shopping — which has no keywords**, so there is no bid to raise. A new campaign is the *only* lever. Costs a fresh learning phase → **do it after 17 Aug.** | ⬜ Deferred |
| **P3-1** | **Geo/holdout incrementality test** (`GoogleAds_Measurement_Incrementality_Plan.md`). | Causal read on true incrementality | Would settle the overclaim question for good. | ⬜ Backlog |

---

## ❌ RETRACTED — do not resurrect

| Was | Why it's dead |
|---|---|
| **"The Quality Score scandal"** *(old P0-5/P0-6, GA-008)* | **FALSE.** Windsor **sums** `quality_score` across rows — a 30d pull without `date` returns a sum, not a score. Real daily QS: `ng earsafe` **10**, `open ear wireless headphones` **8**, `open ear headphones` **7**. **There is no QS problem.** |
| **"Shopping SKU mix is upside-down"** *(old P1-7, GA-004)* | **FALSE.** A `spend > 200` filter dropped rows and an entire SKU. Truth: **four** SKUs; Pro is **47.0%** not 50.5%; **SafeBuds + Comm 2.0 already hold 53.0%** of Shopping spend. Gap is real but modest (Pro 11.31× vs core 15.01× = **1.33×**) — **not worth a re-learn.** Excluding SafeBuds Ivory (P1-2) is the sharp version. |
| **"Raise conquest keyword bids"** *(GA-006)* | **IMPOSSIBLE.** The terms sit in a **Shopping** campaign — no keywords exist. Superseded by P2-1. |
| **"Pause the dormant SafeBuds campaign"** *(GA-007)* | **NO-OP.** It is already `PAUSED`. |
| **"Roll the budget back to ₹1,800/day"** *(GA-001)* | **REJECTED.** ~50% cut trips a second learning phase. Superseded by P0-3 (stepped, gated to 19 Jul). |

**Also: do not "build a SafeBuds Shopping campaign."** One already exists — `Shopping | SafeBuds | 7th May'26` (`23830060744`), **PAUSED**, tROAS 10.0. So does `SC - All Range #2` (`23891088227`), PAUSED, tROAS 8.0.

---

## PERFORMANCE TARGETS

| Metric | Current (30d, 13 Jun–12 Jul) | Floor | 30-day target | 90-day |
|---|---|---|---|---|
| **TRUE ROAS** (Google Ads spend ÷ GA4 `google/cpc` revenue) | **9.38×** | **6.0×** | ≥ 9.0× | 9–11× band held while spend compounds |
| Best-week TRUE ROAS | 11.50× (wk3, ₹1,801/day) | — | Re-achieve | Beat, at higher spend |
| Marginal ROAS (last increment) | **0.86–1.43×** (11–12 Jul, 3 reads) | **6.0×** | ≥ 6.0 before any scale | ≥ 6.0 sustained |
| Platform overclaim | **49%** | 35–65% band | **< 20%** (after P0-1) | < 15% |
| Spend | ₹48,965 (₹1,632/day) | — | Hold ~₹1,800/day | Compound via +20%/wk **only** when marginal ≥ 6.0 |
| Zero-conversion waste | **~₹0** ✅ (99 negatives shipped) | — | Keep at ~₹0 via weekly prune | — |
| Lost IS (Rank) — `Search-26` | **60.4%** (worsening from 47%) | — | Down via assets, **not budget** | < 40% |

---

## DATA PULL SCHEDULE — 7 pulls, **NO metric filters, ever**

| # | Connector | What | Notes |
|---|---|---|---|
| 1 | `google_ads` | campaign × day | |
| 2 | `googleanalytics4` (`299565498`) | `google/cpc` × day | `medium = cpc` is **the one legal filter** — a *dimension*, not a metric. Without it GA4 truncates. |
| 3 | `google_ads` | keyword × Quality Score | **MUST include `date`.** QS is **summed** across rows. **Any QS > 10 is a sum — re-pull.** |
| 4 | `google_ads` | search terms | |
| 5 | `google_ads` | Shopping SKU | **FOUR SKUs.** Assert they sum to campaign spend. |
| 6 | `google_ads` | device | |
| 7 | `google_ads` | impression share | Cannot be queried alongside `quality_score` (Google API restriction) |

> 🚨 **Never put `spend`, `conversions`, `impressions` or `clicks` in a `filters` argument.** Windsor filters at the **segmented-row** grain and silently drops rows — no error, just a smaller, plausible, wrong answer. **Three findings were corrupted this way on 13–14 Jul.** Pull everything, filter in code, and **assert every breakdown sums to its parent total.**

---

## DEPENDENCIES / BLOCKERS

- **P0-2 is blocked by P0-1.** The conversion fix is the keystone — measurement must be right before bidding can be trusted.
- **P0-3 is gated to 19 Jul** (7-day attribution on the 11–12 Jul spike).
- **✅ Tablet and SafeBuds Ivory both shipped 2026-07-14.** ₹4,978/30d cut in total, at flat spend. **Read on 21 Jul — TRUE ROAS must hold ≥ 9.4×.**
- **P2-1 (conquest campaign) is deferred past 17 Aug** — a new campaign starts a fresh learning phase, and P0-1/P0-2 need clean water to land in.
