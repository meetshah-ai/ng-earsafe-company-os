# Google Ads — Live Task Tracker

> Read at the start of every session, after `constitution.md`. Archive completed sprints to `learning-log.md` every 30 days.
>
> **Last updated: 2026-08-03 (Monday teardown — 4th direct-API cycle).** ⚠️ **The GA-020 negative batch (₹18,253.45/30d) shows NO evidence of execution a week later — this cycle's fresh, equally-unfiltered pull finds an almost identical ₹17,629.87/1,155 terms. Refreshed as GA-023 — supersedes GA-020.** **P0-1 (conversion fix) is STILL not started — 14 days to 17 Aug, down from 21 last cycle. This is the headline.** **AI Max zero-conv leakage has grown a 3rd straight cycle: ₹624→₹1,441→₹1,556/30d; total AI_MAX volume (incl. converting) ballooned 4.5× to ₹6,534.18 — escalated as GA-025 with a settings-level recommendation, not just more negatives.** **NEW: all three active campaigns are now Budget-impression-share-limited** — `Search-26` flipped for a 2nd straight cycle (68.5% budget-lost), `SC - All Range` stays budget-lost (67.7%, 4th+ cycle), and a brand-new, previously-unlogged campaign (`SafeBuds-Search-28th July'26`, live since 07-28) is also budget-lost (57.8%) from its first read — see GA-026, too young (5 days) to judge yet. **Shopping SKU mix flipped a 4th time**: Pro's share now 14.2% (best ROAS, 12.48×), Comm 2.0 improved to 11.53× (clearing SH-GA-16's own target threshold before the fix was ever built), SafeBuds Black is now worst (10.83×); SafeBuds Ivory dropped out of the pull entirely (cause unconfirmed). **GA-021's write-path test terms (`tecno earbuds`/`truth hear`) aged out of the 30-day window entirely — resolved as moot, not confirmed or rejected.** **GA-022 CONFIRMED as processing lag** (07-26 backfilled to ₹12,755.10/5 txns) — same shape reappeared on 08-01, filed as GA-027, plus a new 08-02 no-Ads-row gap. **Marginal-ROAS gate (P0-3/SH-GA-7) stays CLOSED at −3.64×, reaffirmed — no new natural spend variation on the two existing campaigns.**
>
> **⚠️ Ad-hoc 2026-08-04 (Slack request) — P0-4 diagnosis complete AND its live successor caught repeating the mistake, see GA-029.** `Search | SafeBuds | OWS + Conquest` (dead, PAUSED since ~22 Jun) root cause: ₹1,373.45 lifetime spend, 12.11% CTR, **zero conversions**; 80.6% of spend sat on one PHRASE keyword, `outside ear earbuds`, at 0 conversions; broad-match keywords leaked into brand/SKU-variant queries that convert 20–29× elsewhere but converted 0× here; its own intended conquest keywords got ZERO impressions — the campaign never actually tested its own hypothesis. **Confirmed independently this cycle: the live successor `SafeBuds-Search-28th July'26` is repeating the identical structural mistake right now** — 55 of its 84 keywords are still BROAD match, its biggest spender (`true wireless earphones`, ₹421.48) is generic/non-brand/non-conquest BROAD traffic, and the real conquest exact-keywords (`wehear`, `ng x wehear safebuds`) sit starved at single-digit clicks. Same landing page, same AVERAGE ad strength. **Recommendation: no keywords to add anywhere — convert the successor's BROAD keywords to PHRASE/EXACT, add campaign-level brand negatives, and let the actual conquest keywords finally get tested. No budget/bid change, no learning-phase cost.**

## PRIORITY SYSTEM
- **P0** — this week. Blocks everything else, or is time-boxed by an external deadline.
- **P1** — this sprint. The real levers.
- **P2** — next sprint / blocked.
- **P3** — backlog.

---

## ⏳ THE COUNTDOWN — 17 AUG 2026 (14 days as of 2026-08-03)

Google's Smart Bidding change: **budget-limited tROAS campaigns get pulled DOWN toward their target instead of overperforming it.** All three active campaigns are now confirmed Budget-impression-share-limited (see below) — this deadline matters more than ever, not less.

**⚠️ There are (at least) TWO targets, and they are different:**

| Campaign | tROAS | Set at |
|---|---|---|
| `SC - All Range` (`23278488657`) | **8.0** | campaign level |
| `Search-26 May 25` (`22601036342`) | **9.0** | **ad-group** level (`178785500303`) |
| `SafeBuds-Search-28th July'26` (`24068804553`) | **unconfirmed — new campaign, not yet audited for its bidding strategy/target** | — |

Both known targets were set against the **inflated** conversion value. On 17 Aug, Google will spend harder to drag each toward a target that was never calibrated to reality. **P0-1 → P0-2 must both land first. This is the department's only hard deadline. P0-1 is still 🔴 not started as of 2026-08-03 — 14 days left, and closing fast.**

---

## ✅ SHIPPED — ⚠️ UNCONFIRMED, see 2026-07-16/23/27/08-03 notes above

| What | Result (as claimed 2026-07-14) | Date | Latest verification (2026-08-03) |
|---|---|---|---|
| **GA-009 + GA-010 — 99 zero-conversion negative keywords (EXACT), campaign-level.** | **₹3,659/30d of waste removed** (claimed). | 2026-07-14 | ⚠️ **STILL NOT CONFIRMED.** The two exact-rupee test terms (`tecno earbuds`/`truth hear`) have aged out of the window entirely with no new click ever recorded — the test is now moot, not proof either way. See GA-021's resolution. |
| **P1-1 — Tablet excluded (−100% device bid), all campaigns.** | **₹363/30d recovered** (claimed). | 2026-07-14 | ⚠️ **STILL NOT CONFIRMED as a blanket cut — and shouldn't be, per GA-014/GA-024.** SC-All Range tablet still converts (₹223.21, 2 conv, 26.65× platform this window) — a blanket cut would still be the wrong call. Search-26 tablet (₹76.66, 0 conv) and the new SafeBuds-Search campaign's tablet (₹25.21, 0 conv) remain the correct, still-unexecuted, scoped cut. |
| **P1-2 — SafeBuds Ivory excluded** (`…51380726530327`) from `SC - All Range`. | **₹956/30d reallocated** (claimed). | 2026-07-14 | ⚠️ **UNCONFIRMED, and now un-testable this cycle** — SafeBuds Ivory shows no row at all in this cycle's SKU pull (last seen ₹380.11/30d, 0.8% share). Either the exclusion finally landed, the SKU is out of stock, or it simply had zero impressions this window — cause not established. |

### 💰 Total claimed-shipped: ₹4,978/30d — **status remains unconfirmed. GA-023 (₹17,629.87/30d) is the current, freshly-verified live waste figure regardless of what did or didn't execute from the 07-14 batch.**

**📅 THE READ — 2026-07-21 (7 days, one full attribution window) — superseded; execution still unconfirmed, so this specific read is moot. The department is now tracking GA-023's 2026-08-06 read plan instead.**

⚠️ **Do not run a falsifier check against changes that never demonstrably happened.** Until GA-023's execution can be confirmed (or the write-path question resolved another way), treat every "cut" as still-live spend and keep re-verifying the current aggregate (which is what GA-023 does, for the 4th cycle running).

---

## CURRENT SPRINT

| # | Task | Target | Why it matters | Status |
|---|---|---|---|---|
| **P0-1** | **Fix the duplicate purchase conversion action.** Two actions fire on the same orders; the higher-coverage Shopify-pixel `Purchase (1)` (489 orders / ₹14.5L) is **excluded from bidding** while the lower-coverage GA4 import counts. (`GoogleAds_Conversion_Tracking_Task.md`) | One purchase action, correct coverage, in the bidding goal | **Closes the ~45–54% overclaim. Unblocks P0-2 and everything downstream.** Smart Bidding cannot optimise toward a number that is materially wrong. **Now more urgent still: all 3 campaigns are Budget-limited, so 17 Aug will hit harder.** | 🔴 Not started (confirmed still not started 2026-08-03 — **14 days to 17 Aug**) |
| **P0-2** | **Re-baseline BOTH (now possibly three) tROAS targets** against the corrected value. Walk each in **≤15%/week** steps. | Shopping, Search and (once audited) the new SafeBuds-Search campaign each get their *own* corrected target | Removes the 17 Aug landmine. | ⬜ Blocked by P0-1 |
| **P0-3** | **CLOSED 2026-07-23, reaffirmed 2026-07-27 and 2026-08-03.** GA-001 (₹3,589 → ₹1,800 rollback) was **rejected** — a ~50% cut trips a *second* learning phase. | No re-read scheduled — wait for a natural spend variation. | Marginal ROAS reads trended 0.86× → 1.15× → 1.43× → 3.94× → **−3.64× (2026-07-23)**, unchanged 2026-07-27 and 2026-08-03 (no new variation to test on the two existing campaigns). | 🔴 **REJECTED — no budget headroom. Do not step up. Gate stays closed.** |
| **P0-4** | **Diagnose `Search \| SafeBuds \| OWS + Conquest`** (`23905187273`). ₹1,011 spent, **12.57% CTR, 0 conversions**. High CTR + zero conversion = **landing-page / intent mismatch**, not a bidding problem. | Root cause named; fix or leave dark | Campaign is **already PAUSED** and dark since ~22 Jun — no urgency, but note: a NEW campaign (`SafeBuds-Search-28th July'26`) launched 07-28, possibly a relaunch attempt superseding this diagnosis. Resolve P0-4's root cause before assuming the new campaign avoids the same mistake. | 🟢 **DIAGNOSED 2026-08-04 (ad-hoc, Slack request) — see GA-029.** Root cause on the dead campaign: (1) one PHRASE keyword `outside ear earbuds` = 80.6% of lifetime spend (₹1,107.74/828 impr/104 clicks), 0 conv; (2) BROAD-match keywords leaked spend onto brand/SKU-variant queries (`ng earsafe pro`, `ng earsafe comm 2.0`, etc.) that convert 20–29× elsewhere but converted 0× here, while the campaign's own intended conquest keywords (`shokz openfit alternative`, `soundcore v20i alternative`) got ZERO impressions — it never actually tested its hypothesis; (3) single-SKU landing page (`ngearsafe.com/products/ngwehear`) under a comparison-shopping ad never converted on any term. **No keywords worth adding to the dead campaign** — every search term in its history shows 0 conversions. **The live successor (P0-5) is independently confirmed to be repeating the same BROAD-match mistake right now** — verified via direct pull: 55 of 84 keywords still BROAD match, biggest spender `true wireless earphones` (₹421.48, generic, BROAD) while exact conquest keywords (`wehear`, `ng x wehear safebuds`) sit starved. |
| **P0-5** | **NEW 2026-08-03 — audit the newly-discovered `SafeBuds-Search-28th July'26` campaign (24068804553).** No GA-### preceded its launch. 5 days old, ~₹264/day, platform ROAS 6.22×. | Confirm its bidding strategy/target, landing page, and whether it duplicates P0-4's unresolved OWS+Conquest campaign | A live, spending campaign should not exist outside the department's visibility. First legitimate performance read 2026-08-06 (GA-026/SH-GA-17). **P0-4's diagnosis is now confirmed to apply here too — see GA-029.** | 🟡 **Landing-page/broad-match cross-check against P0-4 CONFIRMED 2026-08-04 (own independent pull, 84 keyword rows): 55 BROAD / 15 PHRASE / 14 EXACT, same landing page, same AVERAGE ad strength. GA-029 recommends converting BROAD→PHRASE/EXACT + campaign-level brand negatives before its 2026-08-06 performance read; budget/bid still untouched, no learning-phase cost.** |
| **P1-1** | **Rein in AI Max** — already ON on `Search-26` (`search_term_match_type = AI_MAX`), matching junk. Brand exclusions + text guidelines, or prove it pays. | AI_MAX terms converting, or excluded | **Never draft "enable AI Max". It is on.** ⚠️ **Worsening a 3rd straight cycle 2026-08-03: 58 distinct AI_MAX queries (up from 56), ₹1,556.14/30d zero-conv (up from ₹1,440.60), 49 still zero-conversion. Total AI_MAX volume (incl. converting) now ₹6,534.18 — 4.5× last cycle.** Filed as GA-025, escalating GA-013 — negatives alone haven't worked in 3 cycles; recommend a settings-level review. | 🔴 Not started, and the problem is growing for a 3rd straight cycle |
| **P1-1b** | **Confirm execution of GA-009/010/tablet/SafeBuds-Ivory.** Escalated repeatedly; test methodology refined 2026-07-27, resolved as moot 2026-08-03 (test terms aged out of window). | Spend check confirms ₹0 on all previously-approved cuts, or root-cause the block | Nothing else this department ships matters if "SHIPPED" doesn't mean shipped. **2026-08-03: the original two-term test can no longer be run (both terms aged out of the window) — the write-path question now rides on whether GA-023's fresh batch shows any spend reduction on the 2026-08-06 read.** | 🔴 **Still not started — first real test of the write path is GA-023's 2026-08-06 read.** |
| **P1-1c** | **Rescope tablet exclusion to `Search-26` AND the new `SafeBuds-Search` campaign, not blanket.** SH-GA-14 reconfirmed a 4th time 2026-08-03, now expanded. | Search-26 tablet (₹76.66, 0 conv) + SafeBuds-Search tablet (₹25.21, 0 conv) excluded; `SC - All Range` tablet (₹223.21, 2 conv, 26.65× platform) left alone | Blanket cut would forfeit real Shopping tablet revenue — consistent across 4 pulls now. | 🟡 **Confirmed, ready to execute — GA-024 (extends GA-014). This is a device modifier, not budget/bid — not gated by any no-touch window.** |
| **P1-2** | **Shopping feed titles.** `SC - All Range` is **81% of spend** (₹41,792/₹51,536) and is feed-targeted — feed quality *is* the targeting. Title = `[Brand] + [Product Type] + [Key Feature] + [Variant]`, front-load first 70 chars. | Titles rewritten, A/B'd via Merchant Center feed rules | **Probably the largest un-pulled lever in the account.** Completely untouched. **Narrowed target (Comm 2.0, SH-GA-16) has already cleared its own target ROAS (11.53× vs ≥11.0×) WITHOUT the fix being built — treat as more evidence of SKU instability, not confirmation. Do not build the feed-title fix around whichever SKU looks "worst" this week; the ranking has rotated through all three material SKUs across four cycles.** | 🔴 Not started |
| **P1-3** | **Enhanced Conversions.** SHA-256 first-party data at conversion time. Impact visible ~30d after enabling. | Enabled + verified | Attacks the platform-vs-GA4 gap from the other side, alongside P0-1. | 🔴 Not started |
| **P1-4** | **Execute GA-023 (refreshed 1,155-term zero-conv negative batch, ₹17,629.87/30d) once the write path can be confirmed to actually execute anything.** Supersedes GA-020, GA-012, GA-015. | 1,155 terms negatived, spend falls toward ~₹0 within one attribution window on covered spend | This remains the single largest identified CUT — four straight cycles of prior batches show no confirmed execution, and this cycle's total (₹17,629.87) is nearly identical to last cycle's (₹18,253.45), which is itself now evidence of non-execution. | 🔴 **Blocked by unresolved write-path status — read plan is now GA-023's own 2026-08-06 check** |
| **P1-5** | **Shopping SKU mix has now flipped a 4th time; stop treating any single cycle's "worst SKU" as an action trigger.** Pro's share: 47.0% → 40.7% → 23.9% → **14.2%**, and it is now the BEST-returning SKU (12.48×), not the worst. Comm 2.0 (last cycle's "worst" at 9.76×) improved to 11.53× before any fix landed. SafeBuds Black (last cycle's "best" at 12.78×) is now the worst (10.83×). | Keep SH-GA-16 as a scheduled monitor (read 2026-08-10) but do not treat this cycle's ranking as new information requiring action | Four consecutive "the mix has moved again" findings is itself the finding: **this metric does not hold still long enough to found a structural SKU-mix decision on.** | 🟡 **Downgraded from action-track to monitor-only — see SH-GA-16** |
| **P1-6** | **GA4 lag-day pattern (GA-022) CONFIRMED as processing lag, not a gap — closed.** 07-26 backfilled to ₹12,755.10/5 txns exactly as predicted. New: 08-01 shows the identical shape (₹1,261.84 spend/₹0 revenue) and 08-02 has no Ads row at all — filed as GA-027, expect both to resolve by 2026-08-06. | Re-verify 08-01/08-02 on next pull; if either is still anomalous, escalate as a genuine 5th standing gap. | Prevents last-7d/30d TRUE ROAS from being misread as weaker than it is — this cycle's report marks both windows PARTIAL for exactly this reason. | 🟢 **GA-022 resolved/closed. GA-027 open, re-check 2026-08-06.** |
| **P2-1** | **Build a conquest Search campaign** (SH-GA-11). `wehear earbuds` 20.16–57.8× · `wehear safe buds` 26.66–28.66× · `poly voyager free 60` 55.2× — on ₹50–385 each. | Dedicated Search campaign, conquest keywords | **Best return in the account, and starved.** These terms currently land in **Shopping — which has no keywords**, so there is no bid to raise. A new campaign is the *only* lever. Costs a fresh learning phase → **do it after 17 Aug.** **Note: a different new SafeBuds campaign appeared unbidden 07-28 (P0-5) — this is not P2-1, it's an OWS/relaunch attempt, and P2-1 remains undone.** | ⬜ Deferred |
| **P3-1** | **Geo/holdout incrementality test.** | Causal read on true incrementality | Would settle the overclaim question for good. | ⬜ Backlog |

---

## ❌ RETRACTED — do not resurrect

| Was | Why it's dead |
|---|---|
| **"The Quality Score scandal"** *(old P0-5/P0-6, GA-008)* | **FALSE.** Windsor **sums** `quality_score` across rows. Real daily QS reconfirmed a 5th time 2026-08-03 (direct API, 1,784 keyword rows): max QS seen = 10, no keyword at QS≤4 carried any spend. **There is no QS problem — confirmed yet again.** |
| **"Shopping SKU mix is upside-down, Pro is the problem"** *(old P1-7, GA-004)* | **FALSE, and now four times over.** Pro's share has fallen on its own from 47.0% → 40.7% → 23.9% → **14.2%**, entirely without any executed mix-shift action, and is now the BEST-returning SKU (12.48×). **Nor is Comm 2.0 "the problem" any more** — it improved to 11.53× before any fix landed. Do not resurrect any Pro- or Comm-2.0-focused framing; see P1-5. |
| **"Raise conquest keyword bids"** *(GA-006)* | **IMPOSSIBLE.** The terms sit in a **Shopping** campaign — no keywords exist. Superseded by P2-1. |
| **"Pause the dormant SafeBuds campaign"** *(GA-007)* | **NO-OP.** It is already `PAUSED`. |
| **"Roll the budget back to ₹1,800/day"** *(GA-001)* | **REJECTED.** ~50% cut trips a second learning phase. Superseded by P0-3 (closed 2026-07-23, reaffirmed 2026-07-27 and 2026-08-03). |
| **"Tablet is a blanket free kill across every campaign"** *(old finding, P1-1)* | **NARROWED, reconfirmed a 4th time 2026-08-03.** True for Search-26 and the new SafeBuds-Search campaign this pull. False for `SC - All Range` — it continues to convert (₹223.21, 2 conv, 26.65× this pull). See GA-024. |
| **"Brand de-duplication (GA-005) has a stable, actionable ROAS gap"** *(GA-005, SH-GA-10)* | **CLOSED PERMANENTLY 2026-07-23 — GA-018. Stays closed 2026-07-27 and 2026-08-03** (not re-examined this cycle). |
| **"Google Ads has budget headroom above ~₹1,800/day"** *(GA-001, SH-GA-7)* | **CLOSED 2026-07-23 — GA-019. Reaffirmed 2026-07-27 and 2026-08-03** — no natural spend variation occurred on the two existing campaigns to re-test. |
| **"tecno earbuds / truth hear identical spend proves the write path is broken"** *(part of GA-016)* | **RESOLVED AS MOOT 2026-08-03.** Both terms have aged entirely out of the 30-day search-term pull with no new click ever recorded — the test never got a fair chance to discriminate broken-vs-idle. The write-path question now rests on GA-023's fresh batch instead. |
| **"Search \| SafeBuds \| OWS + Conquest just needs more/better keywords"** *(P0-4, resolved 2026-08-04)* | **FALSE.** Every one of 39 distinct search terms in the campaign's entire active history (03–22 Jun) shows zero conversions — there is no converting term to expand from. The problem is broad-match brand leakage plus a single-SKU landing page, not keyword coverage. See GA-029. |

**Also: do not "build a SafeBuds Shopping campaign."** One already exists — `Shopping | SafeBuds | 7th May'26` (`23830060744`), **PAUSED**, tROAS 10.0. So does `SC - All Range #2` (`23891088227`), PAUSED, tROAS 8.0. **A THIRD, `SafeBuds-Search-28th July'26` (`24068804553`), is now LIVE (not paused) since 07-28 — see P0-5, too young to judge yet.**

---

## PERFORMANCE TARGETS

| Metric | Current (last live pull, 4 Jul–2 Aug, direct API via curl) | Floor | 30-day target | 90-day |
|---|---|---|---|---|
| **TRUE ROAS** (GA4 `google/cpc` revenue ÷ Google Ads spend) | **7.89×** (30d, ⚠️PARTIAL — no Ads row 08-02, ₹0 GA4 revenue lag 08-01); **7.43×** last-7d (⚠️PARTIAL, same gaps); **9.42×** prior-7d (fully matured, trustworthy) | **6.0×** | ≥ 9.0× | 9–11× band held while spend compounds |
| Marginal ROAS (11–12 Jul spike, fully matured) | **−3.64×** (unchanged since 2026-07-23, reaffirmed 2026-07-27 and 2026-08-03 — no new natural variation) — **gate CLOSED, rejected** | **6.0×** | N/A until re-opened by a natural spend variation | ≥ 6.0 sustained |
| Platform overclaim | **46.7%** (30d, in-band); **43.1%** last-7d (in-band); **47.2%** prior-7d (in-band, fully mature) | 35–65% band | **< 20%** (after P0-1) | < 15% |
| Spend | ₹51,536.38/30d (~₹1,718/day) | — | Hold at current level — no headroom (P0-3/GA-019 closed) | Compound via +20%/wk **only** when marginal ≥ 6.0 |
| Zero-conversion waste | **₹17,629.87/30d** (GA-023, cost≥₹5 floor, fully unfiltered — nearly identical to GA-020's ₹18,253.45, itself evidence of non-execution) | — | Keep at ~₹0 via weekly prune, **once execution can be confirmed** | — |
| Lost IS (Rank) — `Search-26` | 21.0% — **now smaller than Lost-Budget (68.5%), 2nd straight cycle** | — | No longer the binding constraint on this campaign — see below | < 40% |
| Lost IS (Budget) — `SC - All Range` | **67.7%** (reconfirmed a 4th+ time, SH-GA-9) | — | Next budget dollar targets Shopping first, once gate clears (currently CLOSED — no budget move). **Now ALL THREE campaigns read Budget-lost — see tracker note above.** | — |

---

## DATA PULL SCHEDULE — 7 pulls, **direct Google Ads + GA4 APIs (Windsor fully retired), NO metric filters, ever — not even a `spend>20` row filter.** Aggregate before selecting, never trust a single row.

| # | Connector | What | Notes |
|---|---|---|---|
| 1 | Google Ads API (direct, via `curl`) | campaign × day | |
| 2 | GA4 Data API (direct, via `requests`) | `google/cpc` × day | `sessionMedium = cpc` (EXACT) is **the one legal dimension filter**. Without it GA4 returns the full unfiltered set. |
| 3 | Google Ads API | keyword × Quality Score | **MUST NOT include `date`** in GAQL — `quality_score` is a current attribute, not a summable metric, on the direct API. **Any QS > 10 is a bug — re-pull.** |
| 4 | Google Ads API | search terms | Aggregate in code before selecting zero-conversion terms — never trust a single row. Search-term-view covers ~72% of account spend (Shopping reporting gap, structural — 71.5% this cycle). |
| 5 | Google Ads API | Shopping SKU | Assert sums to campaign spend. **Only 3 of the historical 4 SKUs returned a row this cycle** (SafeBuds Ivory absent — cause unconfirmed). |
| 6 | Google Ads API | device | Assert sums to campaign spend. Cuts must be scoped **per campaign** — see GA-014/GA-024. |
| 7 | Google Ads API | impression share | Cannot be queried alongside `quality_score` (Google API restriction) |

> 🚨 **The `requests` Python HTTP client gets a `503 "DNS resolution failure"` specifically from `googleads.googleapis.com:searchStream`, on every attempt, with valid credentials — confirmed again 2026-08-03, a 3rd cycle running the curl workaround.** `curl` with identical Bearer + developer-token headers succeeds immediately. **Workaround: issue Ads GAQL calls via `curl` subprocess, not the `requests` library.** GA4's `runReport` continues to work fine through `requests`.
> 🚨 **Never put `conversions` or `impressions` in a `filters` argument (GAQL `WHERE` clause).** Pull everything, filter in code, and **assert every breakdown sums to its parent total.**
> 🚨 **Never trust a "SHIPPED" status without a spend check** — and never trust an "unchanged spend" finding as proof of non-execution either, without checking the term's click history first (a test can go moot if the term ages out of the window — see GA-021's 2026-08-03 resolution).
> 🚨 **A drafted negative-keyword batch is not safe indefinitely — re-verify immediately before push, not just at draft time.** Re-applied cleanly again 2026-08-03 for GA-023 (`ear safe headphones` correctly re-excluded).
> 🚨 **NEW 2026-08-03 — a SKU/campaign hitting a hypothesis's target threshold on its own, before the proposed fix is built, is not confirmation.** It's further evidence the metric is too unstable to found a structural decision on (see SH-GA-16, Comm 2.0 hitting 11.53× with no feed-title change made).

---

## DEPENDENCIES / BLOCKERS

- **P0-2 is blocked by P0-1.** The conversion fix is the keystone — measurement must be right before bidding can be trusted. **14 days to 17 Aug.**
- **P0-3 is CLOSED as of 2026-07-23, reaffirmed 2026-07-27 and 2026-08-03** — marginal ROAS −3.64×, no new natural spend variation to re-test on the two existing campaigns. No budget move until one occurs, or P0-1/P0-2 land.
- **P0-4 diagnosed 2026-08-04 (ad-hoc) — see GA-029.** No blocker remains; the open item is confirming P0-5's new campaign doesn't repeat the same landing-page/broad-match pattern.
- **P0-5 (new) — the unlogged `SafeBuds-Search-28th July'26` campaign needs auditing** (bidding strategy, target, landing page) before its 2026-08-06 first read. **Now has a concrete checklist from P0-4's diagnosis.**
- **⚠️ The 2026-07-14 "shipped" waste cuts (₹4,978/30d) remain UNCONFIRMED as of 2026-08-03** — the original test terms have aged out of the measurement window entirely (moot, not proof). **GA-023's 2026-08-06 read is now the department's best remaining shot at confirming/denying the write path.**
- **GA-024 (tablet rescope, extends GA-014) — reconfirmed a 4th time 2026-08-03, now covering a 2nd campaign.** Ready to execute; it is a device modifier, not gated by budget no-touch.
- **GA-023 (refreshed negative batch, ₹17,629.87/30d) is blocked by the same unresolved write-path question as every batch before it** — no point drafting more if the write path that would execute it can't be confirmed either way.
- **GA-005/SH-GA-10 (brand de-duplication) is CLOSED PERMANENTLY as of 2026-07-23**, not re-examined 2026-07-27 or 2026-08-03.
- **P2-1 (conquest campaign) is deferred past 17 Aug** — a new campaign starts a fresh learning phase, and P0-1/P0-2 need clean water to land in.
- **SH-GA-16 (Comm 2.0 feed-title test) downgraded to monitor-only 2026-08-03** — the SKU ranking has moved too many times to trust a single cycle's "worst SKU" as an action trigger. Read stays scheduled 2026-08-10.
- **NEW 2026-08-03 — SH-GA-17 (new campaign ROAS-floor test) open, read scheduled 2026-08-06.** No blocker; observation only.
