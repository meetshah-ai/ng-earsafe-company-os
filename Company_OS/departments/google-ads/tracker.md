# Google Ads — Live Task Tracker

> Read at the start of every session, after `constitution.md`. Archive completed sprints to `learning-log.md` every 30 days.
>
> **Last updated: 2026-07-16 (Thursday follow-up).** ⚠️ **The 2026-07-14 "SHIPPED" row below is UNCONFIRMED.** A fresh 07-16 pull shows all three items (99 negatives, tablet exclusion, SafeBuds Ivory exclusion) still spending at essentially unchanged rates. queue-inbox.md already flagged GA-009/010 as blocked by disabled Windsor write actions — the SHIPPED status was never corroborated by a spend check. **Do not build on ₹4,978/30d of "already-cut" waste until execution is confirmed.** New drafts GA-011 (escalation), GA-012 (fresh negative batch, ₹4,040.48/30d), GA-013 (AI Max, ₹624.35/30d), GA-014 (tablet rescope — Shopping's tablet slice converted this window, ₹3,049.10 rev, 11.08× — do not blanket-exclude).

## PRIORITY SYSTEM
- **P0** — this week. Blocks everything else, or is time-boxed by an external deadline.
- **P1** — this sprint. The real levers.
- **P2** — next sprint / blocked.
- **P3** — backlog.

---

## ⏳ THE COUNTDOWN — 17 AUG 2026 (32 days as of 2026-07-16)

Google's Smart Bidding change: **budget-limited tROAS campaigns get pulled DOWN toward their target instead of overperforming it.** Both our campaigns are constrained.

**⚠️ There are TWO targets, and they are different:**

| Campaign | tROAS | Set at |
|---|---|---|
| `SC - All Range` (`23278488657`) | **8.0** | campaign level |
| `Search-26 May 25` (`22601036342`) | **9.0** | **ad-group** level (`178785500303`) |

Both were set against the **inflated** conversion value. On 17 Aug, Google will spend harder to drag each toward a target that was never calibrated to reality. **P0-1 → P0-2 must both land first. This is the department's only hard deadline. P0-1 is still 🔴 not started as of 2026-07-16.**

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
| **P0-3** | **Re-read the budget question.** GA-001 (₹3,589 → ₹1,800 rollback) was **rejected** — a ~50% cut trips a *second* learning phase. | Re-pull **2026-07-19**, once 7-day attribution has matured on the 11–12 Jul spike. Then step down **inside the 20% band** if TRUE ROAS is still < 9.0. | Marginal ROAS reads have trended 0.86× → 1.15× → 1.43× → 1.43× → **3.94× (2026-07-16 interim)**, all still below the 6.0 gate but rising as attribution matures. Still younger than 7 days — not yet conclusive. | 🟡 Gated to 19 Jul |
| **P0-4** | **Diagnose `Search \| SafeBuds \| OWS + Conquest`** (`23905187273`). ₹1,011 spent, **12.57% CTR, 0 conversions**. High CTR + zero conversion = **landing-page / intent mismatch**, not a bidding problem. | Root cause named; fix or leave dark | Campaign is **already PAUSED** and dark since ~22 Jun — no urgency, but resolve before any relaunch. | 🔴 Not started |
| **P1-1** | **Rein in AI Max** — already ON on `Search-26` (`search_term_match_type = AI_MAX`), matching junk. Brand exclusions + text guidelines, or prove it pays. | AI_MAX terms converting, or excluded | **Never draft "enable AI Max". It is on.** Reconfirmed 2026-07-16: 17 distinct AI_MAX queries, ₹624.35/30d, still zero conversions. Filed as **GA-013**. | 🔴 Not started |
| **P1-1b** | **NEW 2026-07-16 — Confirm execution of GA-009/010/tablet/SafeBuds-Ivory.** | Spend check confirms ₹0 on all previously-approved cuts, or root-cause the block | Nothing else this department ships matters if "SHIPPED" doesn't mean shipped. | 🔴 **Not started — filed as GA-011** |
| **P1-1c** | **NEW 2026-07-16 — Rescope tablet exclusion to `Search-26` only, not blanket.** | Search-26 tablet (₹70.18, 0 conv) excluded; `SC - All Range` tablet (₹275.14, 1 conv, ₹3,049.10 rev, 11.08×) left alone | Blanket cut would forfeit real Shopping tablet revenue. | 🔴 **Not started — filed as GA-014, SH-GA-14, read 23 Jul** |
| **P1-2** | **Shopping feed titles.** `SC - All Range` is **79% of spend** (currently ~80% this window too) and is feed-targeted — feed quality *is* the targeting. Title = `[Brand] + [Product Type] + [Key Feature] + [Variant]`, front-load first 70 chars. | Titles rewritten, A/B'd via Merchant Center feed rules | **Probably the largest un-pulled lever in the account.** Completely untouched. | 🔴 Not started |
| **P1-3** | **Enhanced Conversions.** SHA-256 first-party data at conversion time. Impact visible ~30d after enabling. | Enabled + verified | Attacks the platform-vs-GA4 gap from the other side, alongside P0-1. | 🔴 Not started |
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
| **"Tablet is a blanket free kill across every campaign"** *(old finding, P1-1)* | **NARROWED 2026-07-16.** True for Search-26 (₹70.18, 0 conv). False for `SC - All Range` this window — it converted (₹3,049.10 rev, 11.08×). See GA-014. |

**Also: do not "build a SafeBuds Shopping campaign."** One already exists — `Shopping | SafeBuds | 7th May'26` (`23830060744`), **PAUSED**, tROAS 10.0. So does `SC - All Range #2` (`23891088227`), PAUSED, tROAS 8.0.

---

## PERFORMANCE TARGETS

| Metric | Current (last live pull, 16 Jun–15 Jul) | Floor | 30-day target | 90-day |
|---|---|---|---|---|
| **TRUE ROAS** (Google Ads spend ÷ GA4 `google/cpc` revenue) | **9.44×** (30d); **6.26×** last-7d (⚠️ contaminated by missing-day gap, treat as PARTIAL) | **6.0×** | ≥ 9.0× | 9–11× band held while spend compounds |
| Marginal ROAS (last increment) | **3.94×** interim (2026-07-16, still <7d matured) | **6.0×** | ≥ 6.0 before any scale | ≥ 6.0 sustained |
| Platform overclaim | **45.5%** (30d, in-band); **6.6%** last-7d (⚠️ out-of-band, data-gap artifact, not a real fix) | 35–65% band | **< 20%** (after P0-1) | < 15% |
| Spend | ₹50,559.48/30d (~₹1,685/day) | — | Hold ~₹1,800/day | Compound via +20%/wk **only** when marginal ≥ 6.0 |
| Zero-conversion waste | **~₹4,040/30d newly found** (GA-012) — the 2026-07-14 cuts do not appear to have landed | — | Keep at ~₹0 via weekly prune, **once execution is confirmed** | — |
| Lost IS (Rank) — `Search-26` | **55.3%** | — | Down via assets, **not budget** | < 40% |
| Lost IS (Budget) — `SC - All Range` | **42.5%** (reconfirmed, SH-GA-9) | — | Next budget dollar targets Shopping, once gate clears | — |

---

## DATA PULL SCHEDULE — 7 pulls, **NO metric filters, ever** (except the standard `spend>20` on the search-term pull, per spec — aggregate before selecting, never trust a single row)

| # | Connector | What | Notes |
|---|---|---|---|
| 1 | `google_ads` | campaign × day | |
| 2 | `googleanalytics4` (`299565498`) | `google/cpc` × day | `medium = cpc` is **the one legal dimension filter**. Without it GA4 truncates. |
| 3 | `google_ads` | keyword × Quality Score | **MUST include `date`.** QS is **summed** across rows. **Any QS > 10 is a sum — re-pull.** |
| 4 | `google_ads` | search terms | Aggregate in code before selecting zero-conversion terms — never trust a single segmented row. |
| 5 | `google_ads` | Shopping SKU | **FOUR SKUs.** Assert they sum to campaign spend. |
| 6 | `google_ads` | device | Assert sums to campaign spend. Cuts must be scoped **per campaign** — see GA-014. |
| 7 | `google_ads` | impression share | Cannot be queried alongside `quality_score` (Google API restriction) |

> 🚨 **Never put `conversions` or `impressions` in a `filters` argument.** Windsor filters at the **segmented-row** grain and silently drops rows — no error, just a smaller, plausible, wrong answer. Pull everything, filter in code, and **assert every breakdown sums to its parent total.**
> 🚨 **NEW 2026-07-16 — never trust a "SHIPPED" status without a spend check.** Re-verify claimed executions against a live pull before building the next cycle's read on them.

---

## DEPENDENCIES / BLOCKERS

- **P0-2 is blocked by P0-1.** The conversion fix is the keystone — measurement must be right before bidding can be trusted.
- **P0-3 is gated to 19 Jul** (7-day attribution on the 11–12 Jul spike). Interim marginal-ROAS reads trending up (0.86× → 3.94×) but not yet conclusive.
- **⚠️ 2026-07-16: The 2026-07-14 "shipped" waste cuts (₹4,978/30d) are UNCONFIRMED — blocked pending GA-011 execution check.** The 21-Jul falsifier read on SH-GA-13 is moot until this resolves.
- **GA-014 (tablet rescope) is gated to a 2026-07-23 read** (SH-GA-14).
- **P2-1 (conquest campaign) is deferred past 17 Aug** — a new campaign starts a fresh learning phase, and P0-1/P0-2 need clean water to land in.
