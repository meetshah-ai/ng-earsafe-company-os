# Google Ads — Learning Log

> The Monday full-audit appends here; `/standup` reads here. **Never delete an entry — supersede it.** The point of this file is that we never retry a dead end.

## HOW TO LOG

```
DATE | INITIATIVE | HYPOTHESIS | RESULT (confirmed/rejected/inconclusive) | LEARNING CARRIED FORWARD
```

## CONFIRMED PATTERNS (institutional truths)

0c. **🚨 NEW 2026-07-16 — a tracker status of "SHIPPED" is not evidence of execution. Always spend-check before trusting it.** Three items marked "✅ SHIPPED 2026-07-14" (99 negatives GA-009/010, tablet exclusion P1-1, SafeBuds Ivory exclusion P1-2) show **zero change in live spend** two days later: `open ear earbuds` (a GA-010 negative target) still spent ₹643.15/30d at 0 conversions; SafeBuds Ivory still spent ₹751.20/30d at 11.24× ROAS; tablet still spent ₹345.32/30d total across campaigns. queue-inbox.md had already flagged GA-009/010 as "BLOCKED: Windsor write actions disabled" — the tracker's status update was written without checking whether the block had cleared. **Institutional rule: a "SHIPPED" or "EXECUTED" status must be corroborated by a subsequent spend pull before it is trusted or built upon.**

0b. **🚨 NEVER PUT A METRIC IN A WINDSOR `filters` ARGUMENT. Pull everything; filter in code.** Windsor applies filters at the **segmented row** grain, not the aggregate grain — so any metric filter silently drops rows, and every total computed from the survivors is wrong. It never errors. **Three separate findings were corrupted this way in a single day (2026-07-13/14):**

   | Filter | Produced | Damage |
   |---|---|---|
   | `conversions == 0` | "34 zero-conversion search terms" | Contained the **brand**. Would have negatived **₹1,13,234 — 25% of Google revenue.** |
   | *(no `date`)* on `quality_score` | "QS 4.2 / 0.8 / 0.0" | A **fabricated** QS crisis. Real QS is 7–8. Emailed to Meet before anyone checked. |
   | `spend > 200` on Shopping SKUs | "Pro takes 50.5%, 3 SKUs" | **Missed an entire SKU.** Inverted the conclusion. **Meet caught it; the agent did not.** |

   **And always reconcile.** Every breakdown must be asserted, in code, to sum to its parent total:
   ```python
   assert abs(sum(r["spend"] for r in sku_rows) - campaign_spend) < 1.0
   ```
   A breakdown that doesn't reconcile to its parent is not a breakdown — it is a subset wearing a breakdown's clothes.

   **Reconfirmed again 2026-07-16:** SKU and device pulls, taken unfiltered, reconciled exactly to their parent campaign totals (0 variance on all three campaigns) on a fresh window (16 Jun–15 Jul).


0. **🚨 NEVER FILTER ON `conversions == 0`. IT NEARLY DESTROYED THE ACCOUNT (2026-07-13).** Windsor returns a search term as *several* rows, segmented by dimensions you did not request. Filtering `conversions == 0` keeps only the **non-converting slices** and hides the converting ones — so a term that earned ₹42,589 comes back looking like a zero.

   A `conversions == 0` filter produced the "34 zero-conversion search terms" list (GA-002, ₹2,709 of claimed waste). It contained **`ng earsafe` (₹42,589 / 17.6 conv), `ngearsafe` (₹19,420), `bone conduction headphones` (₹24,703), `wehear earbuds` (₹7,757), `open ear headphones` (₹5,332)** — the brand, the best conquest term, and the top category term. **Executing it would have negatived 41 conversions and ₹1,13,234 — 25% of all Google-paid revenue.** Meet asked for it to be executed. It was caught in pre-flight, minutes before the write.

   **The only safe method:** pull every row with **no conversions filter**, aggregate per search term in code, then select terms whose **TOTAL** 30-day conversions == 0. Nine terms clear that bar (~₹1,154) — not thirty-four (₹2,709).

   **And a hard rule on top of the method: never negative a brand term. Ever.** If brand looks like a zero, the pull is wrong, not the brand.


1. **The platform overclaims by ~49%.** 30d to 2026-07-12: Google claims **13.93×** / 231.7 conversions; GA4 `google/cpc` credits **9.38×** / 133 transactions. Every scale decision is made on the GA4 number. *(Consistent with `GoogleAds_Measurement_Incrementality_Plan.md`: Google + Meta together claim ~102% of all revenue.)* **Reconfirmed 2026-07-16** on an overlapping 30d window (16 Jun–15 Jul): TRUE ROAS 9.44×, platform 13.73×, overclaim 45.5% — directionally consistent.

1b. **🚨 NEW 2026-07-16 — the overclaim ratio itself can signal a data-integrity break, not an attribution improvement.** The last-7d window (09–15 Jul) showed overclaim collapsing to 6.6% (platform 6.68× vs TRUE 6.26×) — wildly outside the normal 35–65% band. This is **not** evidence of better measurement; that window contains the known missing-spend-day gap (no Google Ads row for 07-09, ₹1.29 for 07-10), which understates spend on both sides of the ratio unevenly (GA4 revenue for 07-09 is complete; Google Ads' own value for that day is folded into the missing spend). **A missing-data gap can produce an overclaim reading that looks like a fix but is actually contamination.** Always check for known gaps before reading an out-of-band overclaim as a signal.

2. **Doubling the budget produced negative marginal return.** 11–12 Jul 2026: ₹1,801/day → ₹3,589/day. TRUE ROAS **11.50× → 6.20×**. The incremental **+₹1,788/day of spend bought +₹1,543/day of revenue — marginal ROAS 0.86×.** Sessions rose **+23%** (397 → 488/day) while revenue per session collapsed. **We bought traffic, not customers.**

3. **…and that move also triggered a learning phase, which is the deeper lesson.** Guide Ch 10: a budget change **>20% in either direction** resets Smart Bidding into a 1–2 week learning phase, during which volatility is *expected*. We changed by ~100%. So the 6.20× is **contaminated** — it is partly diminishing returns and partly self-inflicted recalibration, and we cannot separate them. **This is exactly why the ≤20% ratchet exists.** Never again read a post-jump number as a clean verdict.

4. **₹1,800/day is the proven operating point.** wk2 ₹1,701/day → 11.22×; wk3 ₹1,801/day → 11.50×. Every window at or below ~₹1,800/day cleared the 9–11× band. The single window above it did not.

5. **Lost impression share is RANK, not budget.** 76% / 47% on the two search campaigns. Ad Rank = Bid × QS × asset impact (Ch 2). **Budget cannot buy an impression you are losing on Rank.** The levers are Quality Score and Ad Strength.

6. **High CTR with zero conversions is a landing-page problem.** `Search | SafeBuds | OWS + Conquest`: ₹1,011 spent, **12.57% CTR** (vs the 3–5% Search average), **0 conversions**. The ad is working; the page is not. Never answer this with a bid change.

7. **A missing date in a connector pull is not a zero.** Google Ads returned **no row at all** for 2026-07-09 and **₹1.29** for 2026-07-10 (the account went dark). Silently zeroing a missing day corrupts every window that contains it. **Reconfirmed 2026-07-13, 4th pass: same gap, same two dates, still present — this is a persistent connector/account fact, not a one-off glitch. Reconfirmed a 5th time 2026-07-16 — still present, unchanged.**

8. **GA4 has no campaign dimension in the standard pull.** `date,source,medium,sessions,totalrevenue,transactions` gives account-level TRUE ROAS only. Per-campaign "ROAS" without a campaign-level GA4 pull is platform-claimed and diagnostic only — label it as such, every time.

## DEEP-DIVE FINDINGS — 2026-07-13 (first expert teardown, 30d to 12 Jul)

> These came from the keyword/search-term/SKU/device/IS pulls, not the campaign roll-up. **They are the reason the agent is an operator, not a reporter** — none of this is visible at campaign level.
> ⚠️ All sub-account ROAS below is **platform-claimed** (inflated ~49%). Use it to **rank**, never as an absolute.

8. **🚨 RETRACTED — "The Quality Score scandal" was FALSE. It was a data artifact.** *(Raised and withdrawn 2026-07-13.)*

   **The claim:** NG had QS 9.0 on brand but **4.2 / 0.8 / 0.0** on its own open-ear terms — "India's open-ear brand cannot win the open-ear auction." It was published to Meet, drafted as GA-008, and written into P0-5/P0-6.

   **The truth:** **Windsor SUMS `quality_score` across rows — it is not an average.** A 30-day pull without `date` returns the *sum of daily QS values*, so the figure is a function of **how many days the keyword ran**, not of its quality. Pulling QS *with* `date` gives the real, stable daily values:

   | Keyword | REAL QS (daily) | What the summed pull showed |
   |---|---|---|
   | `ng earsafe` | **10** | 280 / 20 |
   | `open ear headphones` | **7** | 168 / 42 |
   | `open ear wireless headphones` | **8** | 160 / 8 |
   | `open ear bluetooth headphones` | **7** | 168 |

   **NG's open-ear Quality Scores are 7–8. Good. There was never a scandal.** The one genuine QS 0 is `outside ear earbuds` (₹975, 0 conversions) — but it sits in a campaign that is **already PAUSED**, so it is not spending. **Reconfirmed 2026-07-13, 4th pass, latest-day (2026-07-12) values: `open ear headphones`=7, `open ear wireless headphones`=8, `ng earsafe`=10, `earsafe headphones`=10 — stable. Reconfirmed again 2026-07-16, latest-day (2026-07-15): `ng earsafe`=10, `ng earsafe pro`=10, `open ear headphones`=7, `open ear bluetooth headphones`=7, `open ear wireless headphones`=8, `bone conduction headphones`=5 — still stable, no scandal.**

   **The lesson, and it is the important one: an aggregation that looks like a metric is not a metric.** Any QS reading above 10 is a sum — stop and re-pull with `date`. This finding was asserted confidently, emailed, and queued as work before anyone checked whether the number could even *be* a Quality Score. Nothing in the loop caught it, because everything downstream trusted the first number.

9. **⭐ AI Max is ALREADY ON** (`Search-26 May 25` — `search_term_match_type = AI_MAX`). **This corrects the 2026-07-13 department-creation entry, which assumed it was off and made it the headline scale lever (P2-1).** It is on, and it is matching junk: `truth hear`, `tecno earbuds`, `finger earphone`, `wehear` — ~₹270/30d, **zero conversions**. The job is to **rein it in** (brand exclusions, negatives, text guidelines) or prove it earns its keep — **not to "enable" it.** **Reconfirmed 2026-07-16 on a fresh window: 17 distinct AI_MAX queries, ₹624.35/30d, still zero conversions.** Filed as GA-013.

10. **🚨 RETRACTED — "Shopping SKU mix is upside-down" was FALSE. Third Windsor filter artifact of the day.** *(Raised 2026-07-13, withdrawn 2026-07-14 — **caught by Meet, not by the agent**.)*

    **The claim:** Pro takes 50.5% of Shopping spend at the worst ROAS; SafeBuds gets 18.1% at the best. "The mix is upside-down."

    **The cause:** the SKU pull used `filters=[["spend","gt",200]]`. Windsor applies filters at the *segmented row* grain, so the filter **silently dropped rows** — including an entire SKU.

    **The truth** (unfiltered pull, sums **exactly** to the campaign's ₹38,528.55):

    | SKU | Spend | Share | ROAS | CPA |
    |---|---|---|---|---|
    | NG EarSafe Pro | ₹18,115 | **47.0%** | 11.31× | ₹316 |
    | EarSafe Comm 2.0 | ₹11,419 | 29.6% | 14.92× | ₹218 |
    | **SafeBuds — Black** | ₹8,039 | 20.9% | **15.84×** | **₹137** |
    | **SafeBuds — Ivory** | ₹956 | 2.5% | **9.05×** ← *worst in the campaign* | **₹332** |

    **There are FOUR SKUs, not three** — SafeBuds ships in Black *and* Ivory, and Ivory was invisible to the filtered pull. **SafeBuds + Comm 2.0 already take 53.0% of Shopping spend.** The mix is **not** upside-down; the best SKUs are already the majority. The real gap is Pro 11.31× vs core 15.01× — **1.33×, real but modest** — not the dramatic inversion that was reported.

    **Consequence: GA-004's premise collapses.** Shifting Pro 47% → 35% moves ~₹4,600/30d, against a partial re-learn and two weeks of unreadable data. That trade is no longer obviously worth it. The sharper, cheaper move is to exclude **SafeBuds Ivory** — one product-group exclusion, no restructure, no learning phase.

    **Reconfirmed 2026-07-16 on a fresh window (16 Jun–15 Jul), reconciled exactly to campaign spend (₹40,438.55):** Pro ₹16,465.40/40.7%/11.74×, Comm 2.0 ₹12,527.04/31.0%/14.26×, SafeBuds Black ₹10,694.91/26.4%/13.63×, SafeBuds Ivory ₹751.20/1.9%/11.24×. Mix has shifted (Pro's share down from 47% to 40.7%, Black's up from 20.9% to 26.4%) but the four-SKU structure and the general shape (Ivory smallest, worst-or-near-worst ROAS) both hold. **SafeBuds Ivory's approved exclusion (P1-2) still shows this SKU spending at essentially unchanged levels — see finding 0c: the exclusion never actually executed.**

11. **Tablet is a free kill.** ₹363 spent across every campaign, **0 conversions, ₹0 revenue**. Mobile 14.16×, Desktop 13.82×, Tablet 0×.

    **🚨 SUPERSEDED 2026-07-16 — narrowed, not a blanket truth.** On the 16 Jun–15 Jul window, `SC - All Range` TABLET converted: 1 conversion, ₹3,049.10 revenue, ₹275.14 spend, **11.08× ROAS** — better than the account's blended average. Only `Search-26` TABLET remains dead weight (₹70.18, 0 conversions). **A device-level cut should be scoped per campaign, not applied account-wide from one aggregate read — volumes are thin enough that a single conversion flips the verdict.** Filed as GA-014, tested as SH-GA-14 (read 2026-07-23).

12. **We bid against ourselves on brand — but WHICH campaign is "better" depends entirely on which brand-term list you use.** Both `Search-26` and the Shopping campaign buy `ng earsafe`-family queries. A 6-term whitelist (GA-005's basis) shows Search-26 ahead (16.98× vs 12.60×); a wider word-boundary match across all `earsafe`/`ng ear safe` search terms (2026-07-13, 4th pass) shows the **opposite** — SC-All Range 20.33× vs Search-26 13.66×. **Neither computation is wrong; the term set is undefined.** See item 16 below and SH-GA-10 — GA-005 is on hold pending a fixed whitelist. **Reconfirmed 2026-07-16, directionally, on a fresh window: SC-All Range brand platform-ROAS 20.56× vs Search-26's 13.92× — the gap widened, not narrowed. GA-005 stays held pending SH-GA-10's dedicated re-pull.**

13. **Conquest works and is starved.** `wehear earbuds` **45.7–57.8×** (grows with a fuller aggregate) · `wehear safe buds` **26.7–53.9×** · `poly voyager free 60 true wireless earbuds` **55.2×** — on ₹50–135 each. The best return in the account, on trivial spend. Meanwhile `shokz openrun pro 2` (₹127) returns 0×. **Never negative bare `wehear` or reordered forms (`safe buds wehear`) — wildcard-protected even when a specific pull shows them at 0 conversions, since the family as a whole converts strongly.** **Reconfirmed 2026-07-16:** `wehear earbuds` 57.84×, `wehear safe buds` 26.66×, `poly voyager free 60` 55.20× — still starved, still strong. `shokz` bare term and several shokz variants show 0 conversions this window too — left untouched per the same wildcard-protection logic (the family converts even when a specific slice doesn't).

14. **~₹1,168/30d of zero-conversion category search terms** (original narrow list): `open ear earbuds` (₹338), `bone conduction earphones` (₹229), `open ear headphones` (₹186 across both campaigns), `bone headphones`, `running earphones`, `best open ear earbuds`, `open ear tws`, `bone conduction earbuds`, `ear conduction headphones`, `earphones with mic and noise cancellation`. **Superseded in scope by item 16 / GA-010 (86 terms, ₹2,637.18) — this was always an undercount because the original scan used a higher spend-filter and a narrower manual list.** **Superseded again 2026-07-16 — GA-010 apparently never executed (see finding 0c); a fresh 106-term aggregate on the newer window totals ₹4,040.48, still led by `open ear earbuds` at ₹643.15. Filed as GA-012.**

15. **Windsor field constraint:** `quality_score` **cannot** be queried together with impression-share fields (Google API restriction). They must be separate pulls. Attempting to merge them errors out.

16. **⭐ NEW 2026-07-13, 4th pass — naive substring brand-matching produces false positives; always use word-boundary regex.** Checking `'ng headphones' in term` or `'ng earphone' in term` as a brand filter wrongly flags fully generic terms: `swimming headphones` (contains "...mi**ng headphones**"), `running earphones` (contains "runni**ng earphone**s"), `running headphones wireless`, `swimming earphones`, `wired noise cancelling earphones with mic`. A word-boundary regex (`\bng\s+headphones\b`, `\bng\s+earphones?\b`, etc.) correctly releases these while still catching genuine brand variants. **Any future brand/negative-keyword filter must use word-boundary matching, never plain substring `in`.** This is also why GA-005's brand-vs-Shopping comparison and this pass's wider one disagree (item 12) — different, undocumented term sets, not different underlying reality. **Applied again 2026-07-16 for the GA-012 negative batch — word-boundary regex correctly released `swimming headphones`, `running earphones`, etc. from the cut list.**

## NEW FINDINGS — 2026-07-16 (Thursday follow-up, window 16 Jun–15 Jul)

17. See item 11 above (tablet narrowed) — cross-referenced here for visibility. GA-014, SH-GA-14.

18. **Marginal ROAS on the 11–12 Jul budget spike is trending up sharply as attribution matures, but is still sub-gate and still not old enough to call.** Recomputed with 4–5 days more maturity (vs the 1–2 days available on 2026-07-13): **3.94×**, up from the four same-day-13-Jul reads of 0.86×/1.15×/1.43×/1.43×. Still below the 6.0 scale gate. The scheduled 19-Jul read (P0-3) remains the authoritative one — do not treat this interim number as a verdict, but it is worth watching: if the trend continues, 19 Jul could plausibly clear 6.0.

19. **SC-All Range remains Lost-Budget (42.5%), not Lost-Rank (9.9%) — SH-GA-9 reconfirmed a second time on a fresh window.** Search-26 remains Lost-Rank (55.3%). No new action — budget is still gated — but this strengthens the case that *when* the gate clears, the dollar should go to Shopping specifically, not be split evenly.

20. See item 12 above (brand comparison widened) — cross-referenced here for visibility.

## NEW FINDINGS — 2026-07-23 (Thursday follow-up, window 23 Jun–22 Jul, direct-API pulls — Windsor fully retired)

21. **⭐ Migration to direct Google Ads + GA4 APIs complete and validated.** Both pulls now bypass Windsor entirely (two OAuth token exchanges, six GAQL `searchStream` queries, one GA4 `runReport` call). Sanity anchor (13 Jun–12 Jul) reproduced **TRUE ROAS 9.3787×** against the published 9.38× anchor — exact match — confirming the new pipeline is sound. QS sanity held too: max QS seen across 1,700 keyword-view rows was 10, no summed/impossible values.

22. **🚨 The ROAS-direction bug — caught in-session, before publishing.** A first-draft computation read literally as "spend ÷ revenue" produced TRUE ROAS readings under 1.0 (e.g. 0.12×), which is nonsensical against every historical anchor (9.38×, 11.50×, the 6.0 floor, the 9–11× band). Corrected to **revenue ÷ spend** and re-validated against the sanity anchor before anything was written down. **Institutional rule added: any TRUE ROAS reading under ~2× on this account is itself a red flag — check the division direction before trusting it.**

23. **⭐ P0-3 / SH-GA-7 (marginal ROAS re-read) is now CLOSED on a fully-matured read: −3.64×.** Pre-spike baseline (23 Jun–10 Jul, 18 days) averaged ₹1,542.42/day spend → ₹14,735.52/day GA4 revenue. Post-spike (13–22 Jul, 10 days, spike days themselves excluded) averaged ₹1,826.71/day spend → **₹13,702.02/day revenue — down, not up, at higher spend.** This is the first read with genuinely mature (10-day, past the 7-day attribution window) data, and it goes negative — consistent in direction with every interim read since 13 Jul (0.86× → 1.15× → 1.43× → 3.94× → now −3.64×). **No budget headroom exists right now. Close the gate; do not manufacture another spike to re-test — wait for natural variation.**

24. **🚨 GA-011's execution-failure finding is now DOUBLE-confirmed with an exact-rupee test.** `tecno earbuds` (₹90.21) and `truth hear` (₹77.67) — two zero-conversion terms flagged in GA-013 on 2026-07-16 — show **identical spend to the rupee** on this pull, a full week later. This is the strongest possible signal that zero writes have landed against any of GA-009/010/012/013 in the intervening week. **Escalated a second time as GA-016.** `open ear earbuds`, by contrast, moved (₹643.15/0conv → ₹561.52/1conv) — inconclusive, so it was correctly NOT re-added to this cycle's cut list (a term that has converted even once in the aggregate must never be negatived — institutional rule holds).

25. **A third zero-spend day has appeared: 2026-07-18** (₹0 Ads spend, ₹3,658.00 GA4 cpc revenue that date). This is now confirmed on THREE separate dates (07-09, 07-10, 07-18) across different pull windows — no longer a one-off, this is a standing account/connector fact. Filed as GA-017.

26. **SH-GA-10 (brand cannibalization) is REJECTED — not for a direction, but for instability.** Four independent pulls of the same underlying comparison have produced four materially different answers: 16.98×/12.60× → 20.33×/13.66× → 20.56×/13.92× → **33.71×/35.24× (this pull, nearly tied, ~4.5% gap).** The magnitude has swung by more than 2× and the direction has flipped. **The metric itself is too unstable at this spend volume to found a structural change on. GA-005 is closed permanently (GA-018) — do not schedule another re-read; there is no version of "one more clean pull" that will fix an unstable estimator.**

27. **Search-term-view does not fully cover Shopping campaign spend — a real, disclosed limitation, not a bug.** Pull 4 (search terms) totals ₹38,059.00 across all terms vs. the account's actual 30d spend of ₹53,202.16 (₹15,143.16 / 28.5% gap) reconciled against pull 1. Standard Shopping/product-targeted auctions do not expose search-term-level reporting the way Search campaigns do. **This is now named explicitly rather than silently treated as a full breakdown — the zero-conversion waste total (₹17,784.14) is scoped to what search-term-view actually covers, not the whole account.**

28. **The true scale of zero-conversion search-term waste is ~4.4× larger than last cycle's estimate once genuinely unfiltered.** GA-012 (2026-07-16) reported ₹4,040.48 using a pull that (per the tracker's own note) applied a `spend>20`-per-row filter. This cycle's fully unfiltered pull (per current spec — no metric filter, ever) finds **₹17,784.14** (99 terms, cost≥₹5 each, zero conversions on the full aggregate, non-brand/non-conquest). **Reconfirms the department's oldest lesson: any filter, even one framed as "standard," undercounts. Aggregate everything, filter in code, always.**

## REJECTED / DEAD ENDS

- **Candidate for rejection, pending the 19 Jul read:** *"Google Ads has headroom at ₹3,600/day."* Provisionally **rejected** on the 11–12 Jul evidence (marginal ROAS 0.86×), reconfirmed directionally on 2026-07-13 (recomputed at 1.15× from a fresh pull, same sub-floor conclusion), reconfirmed a third time bit-for-bit on the 22:02 IST same-day re-pull (1.15×), reconfirmed a **fourth** time on a clean-baseline recomputation at **1.43×** (23:xx IST pass), and now a **fifth** interim read at **3.94×** (2026-07-16) — trending toward the gate but still under it and still not old enough to call. **Re-read 2026-07-19 before writing this down as final.**
- *"Tablet is a blanket free kill, all campaigns."* **Superseded 2026-07-16** — see finding 11/17. The category-level claim (Search-26 tablet is dead weight) still holds; the account-wide extrapolation does not.
- **GA-005 / SH-GA-10 — "Brand de-duplication has a stable, actionable gap."** **REJECTED, closed permanently 2026-07-23.** Four pulls, four different (and once-inverted) answers. Do not re-open without a fundamentally different methodology (e.g. a geo/holdout split), not just another aggregate re-pull.
- **"Google Ads has headroom above ~₹1,800/day."** **REJECTED, closed 2026-07-23** on the first fully-matured (10-day) read: marginal ROAS −3.64×. Every read since 13 Jul agrees in direction. Re-open only after a natural (not manufactured) spend increase, or after P0-1/P0-2 land and tROAS is corrected.

## SCALE HYPOTHESIS BACKLOG (per COMPANY_STATE §5.5 — test → validate → scale)

| # | Hypothesis (metric + threshold) | Test (smallest move) | Status | Linked queue |
|---|---|---|---|---|
| **SH-GA-13** | Cutting ₹4,978/30d of zero-return spend at flat budget lifts TRUE ROAS from 9.38× toward the 9–11× band within one attribution window | Claimed shipped 2026-07-14 (99 negatives + tablet + SafeBuds Ivory). **Falsifier: TRUE ROAS < 9.0 on 21 Jul → something cut was load-bearing → REVERSE, don't cut deeper.** **2026-07-16 update: none of it shows evidence of having actually executed (finding 0c) — the 21-Jul falsifier read is moot until execution is confirmed.** | 🔴 **BLOCKED — confirm execution first** | GA-011 |
| **SH-GA-14** | 🆕 A `Search-26`-only tablet exclusion (not blanket) recovers ₹70/30d without forfeiting `SC - All Range`'s ₹3,049/30d tablet revenue | One device bid modifier, Search-26 only, zero spend change | 🟡 **OPEN — read 2026-07-23** | GA-014 |
| **SH-GA-1** | Fixing the duplicate conversion action closes the 49% overclaim to **<20%** | P0-1 — deduplicate, put the Shopify-pixel action in the bidding goal | ⬜ OPEN — still not started | — |
| **SH-GA-2** | With corrected values, a tROAS re-baselined to **~7.0–8.0** holds TRUE ROAS ≥ 9.0 *and* survives the 17 Aug change | P0-2 — walk the target in ≤15%/week steps | ⬜ BLOCKED by SH-GA-1 | — |
| **SH-GA-3** | **AI Max** delivers the guide's **+34% CVR** on `Search-26 May 25` | P2-1 — one-click experiment, 50/50, 2-week read | ⬜ BLOCKED by SH-GA-1 | — |
| **SH-GA-4** | Raising Ad Strength to Excellent recovers Lost-IS-Rank **without** extra budget (guide: +45% CTR vs Poor) | P1-2 — 8–10 headlines / 3–4 descriptions per ad group | ⬜ OPEN — **note 2026-07-13 4th pass: QS is already 7–10 on open-ear terms, so Ad Strength/bid is the remaining Rank lever, not QS** | — |
| **SH-GA-5** | Rewriting Shopping feed titles to `[Brand]+[Type]+[Feature]+[Variant]` lifts `SC - All Range` TRUE ROAS above 11.5× | P1-3 — Merchant Center feed-rule A/B on the top 20% of SKUs by spend | ⬜ OPEN | — |
| **SH-GA-6** | **Enhanced Conversions** recovers a measurable share of the platform-vs-GA4 gap | P1-1 — enable; impact visible ~30 days after | ⬜ OPEN | — |
| **SH-GA-7** | The account has **any** budget headroom above ₹1,800/day at marginal ROAS ≥ 6.0 | +20% step (₹1,800 → ₹2,160), held 7 days, then read marginal | ⬜ OPEN — **gated behind the 19 Jul re-read**; interim reads trending up (0.86× → 3.94×) but not conclusive | — |
| **SH-GA-9** | Shopping is Lost-Budget (49.0%) not Lost-Rank (7.4%) — next budget dollar, once gates clear, should target Shopping specifically | Confirm on next IS pull; hold until marginal ROAS ≥ 6.0 | 🟢 **RECONFIRMED a second time 2026-07-16** (42.5% budget-lost vs 9.9% rank-lost) — still double-gated (19 Jul re-read + no-touch expiry) | — |
| **SH-GA-10** | ⭐ A fixed, word-boundary-safe brand-term whitelist (documented once, reused every pull) will show SC-All Range's blended brand platform ROAS exceeding Search-26's by >20%, reversing GA-005's premise | Re-pull search-terms 2026-07-20 with the same fixed whitelist used in the 4th pass's appendix; compare ₹2,338.94/20.33× (Shopping) vs ₹2,308.13/13.66× (Search). No new spend — measurement-consistency test that gates GA-005. | ⬜ OPEN — **directionally reconfirmed 2026-07-16** (20.56× vs 13.92×, a wider gap on a fresh window) — GA-005 held pending the dedicated 20-Jul re-pull | GA-005 |
| **SH-GA-15** | 🆕 Three approved negative-keyword batches show zero execution after 10+ days — the block is structural (write path), not a stale read | Pilot: push ONE verified zero-conv, non-brand term (`ear safe headphones`, ₹302.04/30d) as an EXACT negative via whatever write path Meet has; read the term's spend on 2026-07-30 | 🟡 **OPEN — read 2026-07-30** | GA-015, GA-016 |
| SH-GA-7 | The account has any budget headroom above ~₹1,800/day at marginal ROAS ≥ 6.0 | +20% step, held 7 days, read marginal | 🔴 **CLOSED — REJECTED 2026-07-23.** Marginal ROAS −3.64× on a fully-matured 10-day read. Re-open only after a natural spend variation or after P0-1/P0-2 land. | GA-019 |
| SH-GA-10 | A fixed brand-term whitelist shows a stable, actionable ROAS gap between Shopping and Search-26 brand traffic | Re-pull with same whitelist each cycle | 🔴 **CLOSED — REJECTED 2026-07-23.** Four pulls, four different (once-inverted) answers; the estimator is too unstable to act on. | GA-018 |

## CYCLE LOG (most recent first)

### 2026-07-23 — Thursday follow-up: direct-API migration validated; marginal ROAS gate closes negative; execution failure escalated a 2nd time

**Initiative:** First fully direct-API cycle (Google Ads + GA4, Windsor retired for both). One Python pass: two OAuth exchanges, six GAQL queries, one GA4 report, TRUE ROAS + marginal ROAS computed from scratch, cross-checked against the sanity anchor and every reconciliation assert.

**Hypotheses tested:**
1. *"The direct-API pipeline reproduces the sanity anchor."* → **CONFIRMED**, exact match: 9.3787× vs anchor's 9.38×.
2. *"The 11–12 Jul marginal-ROAS collapse is still sub-floor with fully-matured (10-day) attribution."* → **CONFIRMED, decisively.** −3.64×, the most negative read yet, closing the P0-3/SH-GA-7 gate.
3. *"GA-009/010/012/013 are still not executing."* → **CONFIRMED, more strongly than before.** Two zero-conv terms show exact-rupee-identical spend to a week-old pull — the write path is provably not landing anything.
4. *"SH-GA-10's brand-vs-Shopping gap is real and actionable."* → **REJECTED, and closed permanently.** Four pulls, four different answers (once-inverted); the metric is too unstable to found a change on.
5. *"The 30-day zero-conversion search-term waste is ~₹4,040 (GA-012's estimate)."* → **REJECTED — undercount.** A genuinely unfiltered pull (no `spend>20` row filter, per current spec) finds ₹17,784.14 — 4.4× larger.

**Learning carried forward:**
- **A ROAS reading under ~2× on this account is itself a red flag** — check spend/revenue division direction before trusting it. Caught in-session before publishing; added as a standing sanity check.
- **An unstable estimator (SH-GA-10) doesn't get fixed by re-pulling it a fifth time.** Four honest attempts producing four different, sometimes inverted, answers means the measurement itself can't support the decision — close it, don't schedule another read.
- **Exact-rupee-identical spend across a week is the cleanest possible evidence that a "pending" change never executed.** Use this test going forward whenever a SHIPPED/approved status needs verifying.
- **Search-term-view's Shopping coverage gap (₹38,059 of ₹53,202) is a structural, disclosed limitation** — name it in every report that uses this pull, don't let a partial breakdown pass as a full one.

**Next-sprint changes triggered:**
- **GA-015** queued — expanded (99-term, ₹17,784.14) zero-conv negative batch, supersedes GA-012.
- **GA-016** queued — 2nd escalation of the negative-keyword execution failure.
- **GA-017** queued — new zero-spend day (07-18) named.
- **GA-018** queued — GA-005/SH-GA-10 closed permanently.
- **GA-019** logged — explicit budget hold, P0-3/SH-GA-7 gate closed.
- Budget: **hold, decisively** — first fully-matured negative marginal-ROAS read.

### 2026-07-16 — Thursday follow-up: the cuts never landed; a nuance found in the tablet call

**Initiative:** Twice-weekly follow-up decode. Fresh 7-pull Windsor snapshot (16 Jun–15 Jul, plus last7/prior7 splits), TRUE ROAS + marginal ROAS recomputed from scratch in one Python pass, cross-checked against reconciliation asserts (device and SKU pulls both sum to parent campaign totals with zero variance) and the sanity anchor.

**Hypotheses tested:**
1. *"Monday's approved-and-'shipped' cuts (GA-009/010 negatives, tablet, SafeBuds Ivory) are live."* → **REJECTED.** None show any change in spend two days after being marked "SHIPPED." Filed as finding 0c and GA-011.
2. *"Tablet is a free kill across every campaign."* → **REJECTED as stated; narrowed.** True for Search-26 (₹70.18, 0 conv). False for Shopping this window (₹275.14, 1 conv, ₹3,049.10 rev, 11.08×). Filed as finding 17, GA-014, SH-GA-14.
3. *"The 30d sanity anchor still holds."* → **PARTIAL CONFIRM.** Could not re-pull the exact 13-Jun–12-Jul window this session; the overlapping 16-Jun–15-Jul window gives 9.44×/45.5% overclaim, directionally consistent with the 9.38×/49% anchor.
4. *"The 11–12 Jul marginal-ROAS collapse is still sub-floor with fresher attribution."* → **CONFIRMED directionally, still inconclusive.** 3.94× this pass, up from 0.86–1.43× on 13 Jul, still below the 6.0 gate and still short of a full 7-day maturity. 19-Jul read (P0-3) stands as the authoritative one.
5. *"Last-7d TRUE ROAS breaching the floor is a real signal."* → **REJECTED — data-integrity artifact.** 6.26× reading is contaminated by the known missing-spend-day gap (07-09/07-10); the overclaim ratio for that same window (6.6%, vs a normal 45–49%) is itself the tell. Marked PARTIAL in the report, not acted on.

**Learning carried forward:**
- **A written "SHIPPED" status is a claim, not a fact — verify with a spend pull before building on it.** This is now institutional pattern 0c and should be checked at the start of every future cycle before assuming any queued item actually landed.
- **Device- and SKU-level cuts decided on a single aggregate read can be wrong at small volumes.** One Shopping tablet conversion (₹3,049) flipped the tablet verdict for that campaign. Scope cuts per-campaign, not account-wide, when the base rate is this thin.
- **An overclaim ratio outside the normal band is itself a diagnostic** — it doesn't have to mean "attribution improved," it can mean "the window is contaminated by a known gap." Check known gaps before reading a surprising overclaim number as good news.

**Next-sprint changes triggered:**
- **GA-011** queued — escalate execution-status confirmation for GA-009/010, P1-1, P1-2.
- **GA-012** queued — fresh 106-term zero-conversion negative batch (~₹4,040/30d), non-brand/non-conquest, aggregated (not filtered on conversions).
- **GA-013** queued — AI Max leakage negatives (₹624.35/30d, 17 zero-conv queries).
- **GA-014** queued — rescope tablet exclusion to Search-26 only; SH-GA-14 opened, read 2026-07-23.
- Budget: no draft. Gate not cleared; P0-3's 19-Jul read stands.

### 2026-07-14 — Waste cut complete: ₹4,978/30d, all reversible, zero learning-phase cost

**Initiative:** Ship every free lever — cuts that reset no learning phase, need no no-touch window, and cost no incremental spend.

**SHIPPED (per tracker.md at the time — see 2026-07-16 entry above: execution now disputed, none of the three show up in live spend data two days later):**
| Action | Saved | How |
|---|---|---|
| 99 zero-conversion negative keywords (EXACT) | **₹3,659/30d** | Windsor `push_negative_keywords`, campaign-level. 30 on `Search-26`, 69 on `SC - All Range`. |
| Tablet excluded (−100% device bid) | **₹363/30d** | Manual (no Windsor action exists). 0 conversions, ₹0 revenue, every campaign, every day. |
| SafeBuds Ivory excluded from Shopping | **₹956/30d** | Manual product-group exclusion. 9.05×, CPA ₹332 — the campaign's worst SKU, worse than Pro. |
| **TOTAL** | **₹4,978/30d** | At **flat spend**. All reversible. |

**Hypothesis (SH-GA-13, now BLOCKED per 2026-07-16 finding):** cutting ₹4,978/30d of zero-return spend, at flat budget, raises TRUE ROAS from **9.38×** toward the **9–11× operating band** within one attribution window — because the same money now flows to traffic that converts. **Read 2026-07-21 — now moot until execution is confirmed.**

**The falsification condition, stated up front:** if **TRUE ROAS falls below 9.0×** on the 21 Jul read, then something we cut was load-bearing — carrying assisted conversions invisible in a last-click search-term view. **The response is to REVERSE, not to cut deeper.** Negatives, device bids and product-group exclusions are all one-click reversible; that is precisely why they were chosen to go first.

**Learning carried forward:**
- **The free levers went first, deliberately.** Every one of these resets no learning phase, needs no no-touch window, and moves no budget — so they could all ship *during* an active learning phase, which the budget levers could not. **Sequencing by learning-phase cost, not by size of prize, is what let ₹4,978 move while the account was frozen.**
- **Cheap and reversible beats big and sticky when your measurement is 49% wrong.** Until P0-1 lands, every "big" decision rests on a number we know to be inflated. Cuts that can be undone in one click are the only honest moves available.
- **2026-07-16 addendum: "reversible in one click" only matters if it was ever clicked.** See finding 0c — none of these apparently executed.


### 2026-07-14 — GA-009/GA-010 EXECUTED · two structural discoveries

**Initiative:** Execute the approved negative-keyword prune; scope the Shopping SKU mix shift.

**EXECUTED (live writes, Windsor `push_negative_keywords`) — per tracker.md at the time; see 2026-07-16 entry above, execution now disputed:**
- `Search-26 May 25` (22601036342) — **30 EXACT negatives added** ✅
- `SC - All Range` (23278488657) — **69 EXACT negatives added** ✅
- **99 total · ₹3,659/30d of zero-conversion waste removed.** Zero converting terms, zero brand tokens, zero conquest terms in the list — verified against an unfiltered aggregate before the push. `open ear headphones` deliberately KEPT (converts: ₹5,331) per Meet.
- Full list: `execute/GA-009_GA-010_negatives.json`. Negatives are removable if any of these turn out to matter.

**⭐ DISCOVERY 1 — a dedicated SafeBuds Shopping campaign already exists, PAUSED.**
`Shopping | SafeBuds | 7th May'26` (campaign_id **23830060744**), status **PAUSED**, tROAS **10.0**, lifetime ₹943 spend → ₹28,997 value. Also `SC - All Range #2` (23891088227), PAUSED, tROAS 8.0. **Nobody needs to build a SafeBuds Shopping campaign — one is already sitting there.** (Lifetime ROAS figures are contaminated by the pre-W22 duplicate conversion actions — do not quote them as clean.)

**⭐ DISCOVERY 2 — CORRECTION: Shopping tROAS is 8.0, not 9.0.**
`SC - All Range` runs `campaign_target_roas = 8`. The **9.0** figure is the *Search-26* **ad-group** target (`ad_group_target_roas = 9`). The department docs asserted 9.0 for both. **Corrected 2026-07-14.** This matters for the 17 Aug re-baseline — the two campaigns need *different* corrected targets, not one.

**⭐ DISCOVERY 3 — product-group bids are NOT editable on a Smart Bidding Shopping campaign.**
`SC - All Range` uses Target ROAS, so the product-group bid column is greyed out — Google bids at auction time. At product-group level you can only **include/exclude**. **The SKU-mix lever is therefore the AD GROUP, not the product group** (give each ad group its own tROAS target). Search-26 already runs ad-group-level tROAS, so the pattern is proven in-account. Guide: `execute/GA-004_mix_shift_guide.md`.

**Also learned:** Merchant Center **custom labels are feed attributes, not a UI field** — you set them in the data source / feed rules / Shopify's Google channel, which is why they can't be found in the Merchant Center product view. **They are not needed:** Google Ads can subdivide product groups by **Item ID** directly.

**Learning carried forward:** *Read the account's actual configuration before designing a change for it.* Three separate plans (custom labels, product-group bids, "build a SafeBuds campaign") were all invalidated by a single config pull that took thirty seconds. The bidding strategy determines which levers even exist.


### 2026-07-13, 23:xx IST — Fourth Monday-read pass, same day: two new findings, budget hold reconfirmed a fourth time

**Initiative:** Fourth independent decode this calendar day (07:30, 22:02, 22:26, now 23:xx IST). Fresh Windsor pull (all 7 pulls per spec, `medium=cpc` GA4 filter applied, keyword QS pulled WITH `date`), TRUE ROAS + marginal ROAS recomputed from scratch in one Python pass, cross-checked against the sanity anchor and all three earlier passes.

**Hypotheses tested:**
1. *"The 30d sanity anchor still holds."* → **CONFIRMED**, bit-for-bit: 9.3774× TRUE ROAS, 48.5% overclaim, 133 GA4 txns, ₹48,964.91 spend. Fourth consecutive reproduction today.
2. *"Marginal ROAS on the 11-12 Jul spike is still sub-floor using a clean pre-blackout baseline."* → **CONFIRMED**: 1.43×, matching the third pass's own clean-baseline computation exactly. Four independent reads today (0.86×/1.15×/1.43×/1.43×) all land under 6.0.
3. *"A broader, word-boundary-safe zero-conversion search-term sweep finds materially more waste than the two already-queued drafts (GA-002-withdrawn, GA-009)."* → **CONFIRMED**. 129 terms aggregate to TOTAL conversions==0 (₹6,099.54); after removing the 9 already in GA-009 and the wildcard-protected `wehear`/`safe buds wehear`, **86 new terms clear the bar at ₹2,637.18**. Drafted as **GA-010**.
4. *"GA-005's brand-consolidation direction is robust to which brand-term list is used."* → **REJECTED**. A wider aggregation reverses GA-005's own ranking (SC-All Range 20.33× vs Search-26 13.66×, vs GA-005's stated 16.98× Search-26 / 12.60% Shopping). Flagged in queue-inbox; GA-005 held pending **SH-GA-10**.

**Learning carried forward:**
- Naive substring brand-matching (`'ng headphones' in term`) produces false positives on fully generic terms (`swimming headphones`, `running earphones`); always use word-boundary regex. Logged as new institutional pattern #16.
- A department-standard, versioned brand-term whitelist is now a real gap — two honest analyses of the same window can disagree because nobody pinned the term list. This is the same *shape* of failure as the QS-summing scandal (an unstated methodological choice silently changing the answer), just with lower stakes this time because it was caught before execution, not after.
- The 2026-07-09 (no row) / 2026-07-10 (₹1.29) gap is now confirmed present on a fourth independent pull — treat it as a standing account fact to name every time, not a one-off connector hiccup.

**Next-sprint changes triggered:**
- **GA-010 drafted** (86 zero-conv search-term negatives, ₹2,637.18) — queued, non-budget, zero learning-phase cost.
- **GA-005 held** — do not approve until SH-GA-10 resolves the brand-term-whitelist question.
- GA-001 (budget rollback decision) unchanged — still P0-3, still needs Meet, still gated to 19 Jul.
- No budget draft this pass either — fourth consecutive hold on the same evidence.

### 2026-07-13, 22:26 IST (third pass) — see prior entry, unchanged, retained for history
### 2026-07-13, 22:02 IST — Second Monday-read pass, same day: confirmed, no drift, hold unchanged

**Initiative:** Department was re-triggered a second time on the same calendar day (07:30 IST run already completed; this pass at 22:02 IST). Independent fresh Windsor pull (Google Ads + GA4, `medium=cpc` filter applied), TRUE ROAS + marginal ROAS recomputed in code from scratch, cross-checked against both the sanity anchor and the morning pass's own numbers.

**Hypotheses tested:**
1. *"The 30d sanity anchor still holds."* → **CONFIRMED.** Reproduces 9.3774× TRUE ROAS / 48.5% overclaim, bit-for-bit identical to the morning pass and the published anchor.
2. *"A same-day re-pull of a completed window returns identical figures (no intraday drift in Windsor/GA4/Google Ads for closed days)."* → **CONFIRMED.** Every number — spend, GA4 revenue, transactions, marginal ROAS (1.15×) — matched the morning run exactly. This is itself a useful confirmation: once a day is closed, Windsor's numbers for it are stable within the same day.
3. *"Anything has changed since the morning read that would justify a different recommendation."* → **REJECTED.** No new data landed; hold stands unchanged.

**Learning carried forward:**
- Re-running the same-day, same-window decode a second time is a stability check, not a new read — it should not be treated as a fresh 7-day attribution window maturing faster. The 19 Jul re-read gate is unaffected by how many times the pre-19th data is re-pulled.
- Continue naming, not zeroing, the 2026-07-09 (no row) and 2026-07-10 (₹1.29) gaps every time this window is re-read until they roll out of the 30d/7d frames.

**Next-sprint changes triggered:** none. GA-001 stays as-is (needs revision, per P0-3). No new GA-### queued — nothing cleared a gate on either pass today.

### 2026-07-13 — Monday read: hold reaffirmed, no threshold trips

**Initiative:** First live twice-weekly decode since department stand-up. Fresh 30d Windsor pull (Google Ads + GA4, `medium=cpc` filter applied), TRUE ROAS + marginal ROAS recomputed in code, cross-checked against the sanity anchor.

**Hypotheses tested:**
1. *"The 30d sanity anchor still holds."* → **CONFIRMED.** Fresh pull reproduces 9.38× TRUE ROAS / 48.5% overclaim against the published 9.38× / 49% anchor.
2. *"The 11-12 Jul spike's marginal ROAS is still sub-floor."* → **INCONCLUSIVE, directionally confirmed.** Recomputed at 1.15× (vs 0.86× logged previously, different baseline week) — same qualitative finding, but only 2 of the required 7 post-change days exist. Not written down as final; re-read stays gated to 2026-07-19.
3. *"SafeBuds needs a pause recommendation today."* → **REJECTED.** Campaign has been at ₹0 spend since ~2026-06-22 — already dormant. Nothing live to change; only the landing-page root-cause diagnosis (P0-4) remains open.
4. *"The last-7d overclaim drop to 28.3% signals a new attribution break."* → **REJECTED, provisionally.** Isolated to the 11-12 Jul days specifically (platform 6.13× vs TRUE 6.20× — platform briefly *under*-claims); read as Google Ads conversion-lag on the freshest days, not a break, since the 30d anchor (the authoritative check) passes clean at 48.5%.

**Learning carried forward:**
- Two independently-computed marginal-ROAS figures (0.86× and 1.15×) from two different baseline definitions land in the same place — well below the 6.0 gate. The exact number matters less than the fact that both clear the floor upward-average / fail the margin, which is the department's whole thesis.
- Named, not zeroed: 2026-07-09 (no row) and 2026-07-10 (₹1.29) both fall inside the last-7d window used in this report — flagged in the report body, not smoothed into the average.
- GA4's `source/medium` pull has no campaign dimension — per-campaign TRUE ROAS is structurally unavailable without a separate campaign-level GA4 pull; keep labelling per-campaign figures as platform-diagnostic.

**Next-sprint changes triggered:** none. GA-001 stays as-is (needs revision, per P0-3). No new GA-### queued — nothing cleared a gate this run.

### 2026-07-13 — Department created (Sprint 1 seeded)

**Initiative:** Stand up the Google Ads department — constitution, tracker, learning log, Managed Agent — after the 11–12 Jul budget move damaged returns with no agent watching.

**Hypotheses tested (against the live 30d account pull, 13 Jun – 12 Jul):**
1. *"Google Ads is performing at ~14× ROAS."* → **REJECTED.** That is the platform's claim. On GA4 google-paid revenue the account runs at **9.38×**. The platform overstates by 49%.
2. *"A ROAS floor of 5–6 protects the account."* → **REJECTED as sufficient.** On 11–12 Jul the *average* stayed at 6.20× — above the floor — while the *marginal* return had already collapsed to 0.86×. **An average-ROAS floor is a lagging guardrail.** The department governs marginal ROAS and uses the average only as a stop-loss.
3. *"The 11–12 Jul collapse was diminishing returns."* → **INCONCLUSIVE, and the ambiguity is the finding.** The guide (Ch 10) shows a >20% budget change resets Smart Bidding into a 1–2 week learning phase. We changed ~100%. The number is contaminated. **Re-read 2026-07-19.**
4. *"More budget is how Google Ads scales."* → **REJECTED.** The account is Lost-IS-**Rank** limited. Scale comes from measurement → AI Max → Quality Score → feed → *then* budget.

**Learning carried forward:**
- **Marginal, not average.** The whole design of this department follows from hypothesis 2.
- **The ≤20% ratchet is not caution, it is mechanics.** Google's own documentation says a bigger step resets learning. Our own data shows what that costs.
- **Never read a window younger than 7 days.** The attribution window is 7 days; a 2-day read is not a read.

**Next-sprint changes triggered:**
- P0-1 (conversion fix) and P0-2 (tROAS re-baseline) are now on a **hard 17 Aug deadline** — Google will begin pulling budget-limited tROAS campaigns *down toward their target*, and our target was set against an inflated value.
- **GA-001 must be revised before approval** — as queued, it is a ~50% cut that would trigger a *second* learning phase inside two weeks. See `tracker.md` P0-3.
- The Managed Agent (`../../agents/google-ads.agent.yaml`) now runs the guard daily and the full audit on Mondays, so no budget move goes unwatched again.
