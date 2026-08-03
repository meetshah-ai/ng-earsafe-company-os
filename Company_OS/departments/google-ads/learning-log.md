# Google Ads — Learning Log

> The Monday full-audit appends here; `/standup` reads here. **Never delete an entry — supersede it.** The point of this file is that we never retry a dead end.

## HOW TO LOG

```
DATE | INITIATIVE | HYPOTHESIS | RESULT (confirmed/rejected/inconclusive) | LEARNING CARRIED FORWARD
```

## CONFIRMED PATTERNS (institutional truths)

0c. **🚨 NEW 2026-07-16 — a tracker status of "SHIPPED" is not evidence of execution. Always spend-check before trusting it.** Three items marked "✅ SHIPPED 2026-07-14" (99 negatives GA-009/010, tablet exclusion P1-1, SafeBuds Ivory exclusion P1-2) show **zero change in live spend** two days later: `open ear earbuds` (a GA-010 negative target) still spent ₹643.15/30d at 0 conversions; SafeBuds Ivory still spent ₹751.20/30d at 11.24× ROAS; tablet still spent ₹345.32/30d total across campaigns. queue-inbox.md had already flagged GA-009/010 as "BLOCKED: Windsor write actions disabled" — the tracker's status update was written without checking whether the block had cleared. **Institutional rule: a "SHIPPED" or "EXECUTED" status must be corroborated by a subsequent spend pull before it is trusted or built upon.** **Reconfirmed 2026-08-03: GA-020's batch (₹18,253.45/30d, drafted 07-27) shows a nearly identical waste total a week later (₹17,629.87/30d, same top terms) — still no evidence of execution, 4th consecutive cycle this pattern holds.**

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

   **Reconfirmed again 2026-07-16:** SKU and device pulls, taken unfiltered, reconciled exactly to their parent campaign totals (0 variance on all three campaigns) on a fresh window (16 Jun–15 Jul). **Reconfirmed a 3rd time 2026-07-27 on the direct API (not Windsor):** SKU sum ₹45,693.68 vs campaign ₹45,693.68 (0 variance); device sum ₹8,922.91/₹45,693.68 vs campaign totals (0 variance). **Reconfirmed a 4th time 2026-08-03:** SKU sum ₹41,792.26 vs `SC - All Range` ₹41,792.26 (0 variance); device sum ₹51,536.38 vs 30d account total ₹51,536.38 (0 variance).


0. **🚨 NEVER FILTER ON `conversions == 0`. IT NEARLY DESTROYED THE ACCOUNT (2026-07-13).** Windsor returns a search term as *several* rows, segmented by dimensions you did not request. Filtering `conversions == 0` keeps only the **non-converting slices** and hides the converting ones — so a term that earned ₹42,589 comes back looking like a zero.

   A `conversions == 0` filter produced the "34 zero-conversion search terms" list (GA-002, ₹2,709 of claimed waste). It contained **`ng earsafe` (₹42,589 / 17.6 conv), `ngearsafe` (₹19,420), `bone conduction headphones` (₹24,703), `wehear earbuds` (₹7,757), `open ear headphones` (₹5,332)** — the brand, the best conquest term, and the top category term. **Executing it would have negatived 41 conversions and ₹1,13,234 — 25% of all Google-paid revenue.** Meet asked for it to be executed. It was caught in pre-flight, minutes before the write.

   **The only safe method:** pull every row with **no conversions filter**, aggregate per search term in code, then select terms whose **TOTAL** 30-day conversions == 0. Nine terms clear that bar (~₹1,154) — not thirty-four (₹2,709).

   **And a hard rule on top of the method: never negative a brand term. Ever.** If brand looks like a zero, the pull is wrong, not the brand.

   **🚨 2026-07-27 addendum: the same discipline caught a second, subtler failure mode this cycle.** `ear safe headphones` was correctly zero-conversion when GA-015 was drafted (2026-07-23, ₹302.04). By 2026-07-27 it shows **0.20 conversions** in a fresh aggregate — it converted *after* the batch was drafted but *before* it was ever executed (execution is still unconfirmed / blocked). **A negative-keyword batch is not "safe forever" just because it was safe when drafted — re-verify against a fresh aggregate immediately before every execution, not just at draft time.** GA-020 supersedes GA-015 for this reason. **Reconfirmed 2026-08-03: `ear safe headphones` was correctly re-excluded again this cycle (still converting, 0.20+ conv carried over) — GA-023 re-verified against the fresh 4 Jul–2 Aug aggregate before drafting, per this rule.**


1. **The platform overclaims by ~49%.** 30d to 2026-07-12: Google claims **13.93×** / 231.7 conversions; GA4 `google/cpc` credits **9.38×** / 133 transactions. Every scale decision is made on the GA4 number. *(Consistent with `GoogleAds_Measurement_Incrementality_Plan.md`: Google + Meta together claim ~102% of all revenue.)* **Reconfirmed 2026-07-16** on an overlapping 30d window (16 Jun–15 Jul): TRUE ROAS 9.44×, platform 13.73×, overclaim 45.5% — directionally consistent. **Reconfirmed again 2026-07-27 (first fully direct-API sanity anchor re-run, 13 Jun–12 Jul): TRUE ROAS 9.3787× — exact match to the published 9.38× anchor — overclaim 54.2%, still in-band.** **Reconfirmed a 3rd time 2026-08-03, same anchor window, same pipeline: TRUE ROAS 9.3787×, overclaim 54.2% — bit-for-bit identical to the 07-27 read. The mature prior-7d window (20–26 Jul) reads 9.42×/47.2% overclaim, also in-band.**

1b. **🚨 NEW 2026-07-16 — the overclaim ratio itself can signal a data-integrity break, not an attribution improvement.** The last-7d window (09–15 Jul) showed overclaim collapsing to 6.6% (platform 6.68× vs TRUE 6.26×) — wildly outside the normal 35–65% band. This is **not** evidence of better measurement; that window contains the known missing-spend-day gap (no Google Ads row for 07-09, ₹1.29 for 07-10), which understates spend on both sides of the ratio unevenly (GA4 revenue for 07-09 is complete; Google Ads' own value for that day is folded into the missing spend). **A missing-data gap can produce an overclaim reading that looks like a fix but is actually contamination.** Always check for known gaps before reading an out-of-band overclaim as a signal. **Reconfirmed a 2nd time 2026-07-27:** last-7d (20–26 Jul) overclaim reads 12.0% (out-of-band). This time the contaminating day is 2026-07-26 itself — ₹1,745.80 Ads spend against ₹0.00 recorded GA4 revenue, most likely GA4 same-day processing lag rather than a genuine zero. Filed as GA-022. **🚨 CONFIRMED a 3rd time 2026-08-03 — this time as a direct verification, not just a hypothesis: 2026-07-26 has backfilled to ₹12,755.10 GA4 revenue / 5 txns, exactly the pattern predicted. GA-022 closed. The identical shape reappeared on the new freshest day, 2026-08-01 (₹1,261.84 spend / ₹0.00 revenue) — filed as GA-027, expected to backfill the same way by 2026-08-06.**

2. **Doubling the budget produced negative marginal return.** 11–12 Jul 2026: ₹1,801/day → ₹3,589/day. TRUE ROAS **11.50× → 6.20×**. The incremental **+₹1,788/day of spend bought +₹1,543/day of revenue — marginal ROAS 0.86×.** Sessions rose **+23%** (397 → 488/day) while revenue per session collapsed. **We bought traffic, not customers.**

3. **…and that move also triggered a learning phase, which is the deeper lesson.** Guide Ch 10: a budget change **>20% in either direction** resets Smart Bidding into a 1–2 week learning phase, during which volatility is *expected*. We changed by ~100%. So the 6.20× is **contaminated** — it is partly diminishing returns and partly self-inflicted recalibration, and we cannot separate them. **This is exactly why the ≤20% ratchet exists.** Never again read a post-jump number as a clean verdict.

4. **₹1,800/day is the proven operating point.** wk2 ₹1,701/day → 11.22×; wk3 ₹1,801/day → 11.50×. Every window at or below ~₹1,800/day cleared the 9–11× band. The single window above it did not.

5. **Lost impression share is RANK, not budget — but this needs re-confirming per campaign every cycle, not assumed.** Historically 76%/47% Rank-lost on the two search campaigns. **2026-07-27 update: `Search-26 May 25` now reads lost-Budget (59.7%) HIGHER than lost-Rank (29.2%)** — a flip from the 07-16/07-23 "Search-26 is Rank-limited" narrative. Not yet acted on (single-cycle read, needs reconfirmation), but the account-level story ("budget can't buy what Rank is losing") no longer applies cleanly to Search-26 specifically. `SC - All Range` remains Budget-lost (63.8%), consistent with history. **🚨 CONFIRMED, no longer a single-cycle read, 2026-08-03: `Search-26` Budget-lost 68.5% vs Rank-lost 21.0% — a 2nd straight cycle in this direction. `SC - All Range` Budget-lost 67.7% (4th+ consistent cycle). The new `SafeBuds-Search-28th July'26` campaign is ALSO Budget-lost (57.8%) from its first read. All three active campaigns are now Budget-impression-share-limited — the account's founding "Rank-limited" thesis no longer holds anywhere. This is a genuine structural shift, but it is a ceiling diagnostic, not permission to raise budget — the marginal-ROAS scale gate (finding 23) still governs that decision and remains closed.**

6. **High CTR with zero conversions is a landing-page problem.** `Search | SafeBuds | OWS + Conquest`: ₹1,011 spent, **12.57% CTR** (vs the 3–5% Search average), **0 conversions**. The ad is working; the page is not. Never answer this with a bid change.

7. **A missing date in a connector pull is not a zero.** Google Ads returned **no row at all** for 2026-07-09 and **₹1.29** for 2026-07-10 (the account went dark). Silently zeroing a missing day corrupts every window that contains it. **Reconfirmed 2026-07-13, 4th pass; reconfirmed 2026-07-16, 5th pass; reconfirmed 2026-07-23; reconfirmed a 6th time 2026-07-27 — 07-09/07-10 still present in the wider window.** A distinct 3rd date (07-18) joined 2026-07-23 (GA-017) and is still present 2026-07-27. **A 4th, reverse-shape anomaly (07-26: spend with $0 GA4 revenue) appeared 2026-07-27 — see finding 1b/GA-022, since CONFIRMED as processing lag, not a gap.** **Reconfirmed a 7th time 2026-08-03: 07-09/07-18 still present. A NEW, 5th anomaly appeared: 2026-08-02 (the freshest day) has NO Google Ads row at all — most likely a landing-lag artifact of running the pull at 07:30 IST the very next morning, but named per standing rule regardless. Filed as GA-027 alongside the 08-01 lag-shape day.**

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

   **NG's open-ear Quality Scores are 7–8. Good. There was never a scandal.** The one genuine QS 0 is `outside ear earbuds` (₹975, 0 conversions) — but it sits in a campaign that is **already PAUSED**, so it is not spending. **Reconfirmed 2026-07-13, 4th pass, latest-day (2026-07-12) values: `open ear headphones`=7, `open ear wireless headphones`=8, `ng earsafe`=10, `earsafe headphones`=10 — stable. Reconfirmed again 2026-07-16, latest-day (2026-07-15): `ng earsafe`=10, `ng earsafe pro`=10, `open ear headphones`=7, `open ear bluetooth headphones`=7, `open ear wireless headphones`=8, `bone conduction headphones`=5 — still stable, no scandal. Reconfirmed a further time 2026-07-27 (direct API, 1,700 keyword rows, 27 Jun–26 Jul): max QS observed = 10 (no impossible/summed values), and no keyword at QS≤4 carried any spend this cycle — the scandal stays dead.** **Reconfirmed a 5th time 2026-08-03 (1,784 keyword rows, 4 Jul–2 Aug): max QS observed = 10, 0 keywords at QS≤4 carried any spend. `outside ear earbuds` itself now shows only ₹3.24/30d (still 0 conv, immaterial) — the scandal stays permanently dead.**

   **The lesson, and it is the important one: an aggregation that looks like a metric is not a metric.** Any QS reading above 10 is a sum — stop and re-pull with `date`. This finding was asserted confidently, emailed, and queued as work before anyone checked whether the number could even *be* a Quality Score. Nothing in the loop caught it, because everything downstream trusted the first number.

9. **⭐ AI Max is ALREADY ON** (`Search-26 May 25` — `search_term_match_type = AI_MAX`). **This corrects the 2026-07-13 department-creation entry, which assumed it was off and made it the headline scale lever (P2-1).** It is on, and it is matching junk: `truth hear`, `tecno earbuds`, `finger earphone`, `wehear` — ~₹270/30d, **zero conversions**. The job is to **rein it in** (brand exclusions, negatives, text guidelines) or prove it earns its keep — **not to "enable" it.** **Reconfirmed 2026-07-16 on a fresh window: 17 distinct AI_MAX queries, ₹624.35/30d, still zero conversions.** Filed as GA-013. **🚨 Reconfirmed and WORSENING 2026-07-27: 56 distinct AI_MAX queries, 52 still zero-conversion, ₹1,440.60/30d — more than double the 07-16 figure. AI Max leakage is growing faster than it's being reined in; GA-013 is still unexecuted.** **🚨 WORSENING a 3rd straight cycle, 2026-08-03: 58 distinct AI_MAX queries, 49 zero-conversion, ₹1,556.14/30d zero-conv spend. Critically, TOTAL AI_MAX volume (including converting brand matches like `ng earsafe` ₹1,715.09/43.89conv, `ngearsafe` ₹954.01/14.33conv) has ballooned to ₹6,534.18 — 4.5× the 07-27 figure. AI Max is capturing far more traffic overall (much of it fine, brand-driven), but the zero-conv tail keeps growing in lockstep. Filed as GA-025 — negatives alone haven't worked in 3 cycles; recommend a settings-level review (text guidelines/exclusions), not just another negative list.**

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

    **🚨 SUPERSEDED 2026-07-27 — the mix has moved again, and the ranking of "worst SKU" has flipped.** Direct-API pull, 27 Jun–26 Jul, reconciled exactly to ₹45,693.68: **SafeBuds — Black ₹17,635.96/38.6%/12.78×; Comm 2.0 ₹16,782.09/36.7%/9.76× ← now the worst-returning of the three material SKUs; Pro ₹10,895.52/23.9%/11.26×; SafeBuds — Ivory ₹380.11/0.8%/8.98× (still worst overall but now immaterial spend).** Pro's share has fallen from 47%→40.7%→**23.9%** across three cycles — it self-corrected without any executed action. **Comm 2.0, not Pro, is now the SKU to investigate.** Do not resurrect GA-004's Pro-focused framing. Filed as a new TEST hypothesis, SH-GA-16 (feed-title rewrite for Comm 2.0 specifically).

    **🚨 SUPERSEDED AGAIN 2026-08-03 — the mix has moved a 4th time, and "worst SKU" has rotated to a 3rd different SKU.** Direct-API pull, 4 Jul–2 Aug, reconciled exactly to ₹41,792.26 — but **only THREE SKUs returned a row this cycle**: Comm 2.0 ₹18,156.33/43.4%/**11.53×** (up sharply from 9.76× — improved *before* its SH-GA-16 feed-title fix was ever built), SafeBuds Black ₹17,694.46/42.3%/**10.83× ← now the worst of the three**, Pro ₹5,941.47/14.2%/**12.48× ← now the best**, down from 47.0%→40.7%→23.9%→**14.2%** share across four cycles. **SafeBuds Ivory (₹380.11 last cycle) shows NO ROW this cycle — either finally excluded, out of stock, or simply zero impressions; cause unconfirmed, worth a one-line check next cycle but too immaterial to chase hard.** The "worst SKU" label has now rotated Pro → Comm 2.0 → SafeBuds Black across four cycles, each one self-correcting before any structural fix landed. **Reinforces, more strongly than ever: do not chase this week's laggard SKU with a mix-shift action. SH-GA-16's read stays scheduled 2026-08-10 as a monitor, not a trigger for new action.**

11. **Tablet is a free kill.** ₹363 spent across every campaign, **0 conversions, ₹0 revenue.** Mobile 14.16×, Desktop 13.82×, Tablet 0×.

    **🚨 SUPERSEDED 2026-07-16 — narrowed, not a blanket truth.** On the 16 Jun–15 Jul window, `SC - All Range` TABLET converted: 1 conversion, ₹3,049.10 revenue, ₹275.14 spend, **11.08× ROAS** — better than the account's blended average. Only `Search-26` TABLET remains dead weight (₹70.18, 0 conversions). **A device-level cut should be scoped per campaign, not applied account-wide from one aggregate read — volumes are thin enough that a single conversion flips the verdict.** Filed as GA-014, tested as SH-GA-14 (read 2026-07-23). **Reconfirmed a further time 2026-07-27:** Search-26 tablet ₹50.97/30d, 0 conv (still pure waste); SC-All Range tablet ₹254.61/30d, 2 conv, 23.36× platform ROAS (still converts — still not to be cut). GA-014 remains correctly scoped and still pending execution. **Reconfirmed a 3rd time 2026-08-03, and extended to a new campaign:** Search-26 tablet ₹76.66/30d, 0 conv (still waste). New `SafeBuds-Search-28th July'26` tablet ₹25.21/30d, 0 conv (same shape, new campaign). `SC - All Range` tablet ₹223.21/30d, 2 conv, ₹5,948.10 rev, **26.65× ROAS** — still the account's best-converting device slice, still explicitly excluded from any cut. Filed as GA-024, extending GA-014.

12. **We bid against ourselves on brand — but WHICH campaign is "better" depends entirely on which brand-term list you use.** Both `Search-26` and the Shopping campaign buy `ng earsafe`-family queries. A 6-term whitelist (GA-005's basis) shows Search-26 ahead (16.98× vs 12.60×); a wider word-boundary match across all `earsafe`/`ng ear safe` search terms (2026-07-13, 4th pass) shows the **opposite** — SC-All Range 20.33× vs Search-26 13.66×. **Neither computation is wrong; the term set is undefined.** See item 16 below and SH-GA-10 — GA-005 is on hold pending a fixed whitelist. **Reconfirmed 2026-07-16, directionally, on a fresh window: SC-All Range brand platform-ROAS 20.56× vs Search-26's 13.92× — the gap widened, not narrowed.** **CLOSED PERMANENTLY 2026-07-23 as GA-018/SH-GA-10** — four pulls, four different (once-inverted) answers, the estimator is too unstable to act on. **2026-07-27 snapshot for the record only (not re-opening):** Search-26 ₹2,952.95/37.39conv/30.46× vs SC-All Range ₹4,610.98/56.03conv/33.79× — close again (~11% gap), consistent with the closure decision. **Not re-examined 2026-08-03 — stays closed per standing decision; no new evidence sought.**

13. **Conquest works and is starved.** `wehear earbuds` **45.7–57.8×** (grows with a fuller aggregate) · `wehear safe buds` **26.7–53.9×** · `poly voyager free 60 true wireless earbuds` **55.2×** — on ₹50–135 each. The best return in the account, on trivial spend. Meanwhile `shokz openrun pro 2` (₹127) returns 0×. **Never negative bare `wehear` or reordered forms (`safe buds wehear`) — wildcard-protected even when a specific pull shows them at 0 conversions, since the family as a whole converts strongly.** **Reconfirmed 2026-07-16:** `wehear earbuds` 57.84×, `wehear safe buds` 26.66×, `poly voyager free 60` 55.20× — still starved, still strong. **Reconfirmed 2026-07-27 (27 Jun–26 Jul):** `wehear earbuds` ₹384.75/20.16×, `wehear safe buds` ₹209.31/28.66×, `poly voyager free 60` ₹52.52/55.20× — still starved, still strong, still untouched by P2-1 (deferred past 17 Aug). **2026-08-03 note: this cycle's specific slice shows `wehear earbuds` (₹309.55) and bare `wehear` (₹302.57) at 0 conversions individually, and `poly voyager free 60 true wireless earbuds` at ₹52.52/1conv/55.20× — consistent with the standing rule that individual-slice zeros within a strong-converting family are not evidence against the family; still wildcard-protected, still never negatived. Other conquest terms in the family (`ngx wehear` 702.78×, `ng x wehear` 214.09×, `wehear buds` 222.21×) continue to show extreme returns on trivial spend.**

14. **~₹1,168/30d of zero-conversion category search terms** (original narrow list): `open ear earbuds` (₹338), `bone conduction earphones` (₹229), `open ear headphones` (₹186 across both campaigns), `bone headphones`, `running earphones`, `best open ear earbuds`, `open ear tws`, `bone conduction earbuds`, `ear conduction headphones`, `earphones with mic and noise cancellation`. **Superseded in scope by item 16 / GA-010 (86 terms, ₹2,637.18) — this was always an undercount because the original scan used a higher spend-filter and a narrower manual list.** **Superseded again 2026-07-16 — GA-010 apparently never executed (see finding 0c); a fresh 106-term aggregate on the newer window totals ₹4,040.48, still led by `open ear earbuds` at ₹643.15. Filed as GA-012.** **Superseded again 2026-07-23 — genuinely unfiltered (no `spend>20` row filter): ₹17,784.14/99 terms. Filed as GA-015.** **Superseded again 2026-07-27 — direct-API pull, cost≥₹5 floor: 1,174 terms, ₹18,253.45. Filed as GA-020. Critically, GA-015's own #1 item (`ear safe headphones`, ₹302.04) has since shown 0.20 conversions and is excluded from GA-020 — see finding 0 addendum.** **Superseded again 2026-08-03 — direct-API pull, 4 Jul–2 Aug, cost≥₹5 floor: 1,155 terms, ₹17,629.87. Filed as GA-023. The total is nearly identical to GA-020's ₹18,253.45 a week earlier — the persistence of the figure, term for term, is itself the strongest evidence yet that GA-020 never executed.**

15. **Windsor field constraint:** `quality_score` **cannot** be queried together with impression-share fields (Google API restriction). They must be separate pulls. Attempting to merge them errors out. **Confirmed still true on the direct Google Ads API 2026-07-27** — pulls 3 and 7 were kept separate per spec. **Confirmed again 2026-08-03.**

16. **⭐ NEW 2026-07-13, 4th pass — naive substring brand-matching produces false positives; always use word-boundary regex.** Checking `'ng headphones' in term` or `'ng earphone' in term` as a brand filter wrongly flags fully generic terms: `swimming headphones` (contains "...mi**ng headphones**"), `running earphones` (contains "runni**ng earphone**s"), `running headphones wireless`, `swimming earphones`, `wired noise cancelling earphones with mic`. A word-boundary regex (`\bng\s+headphones\b`, `\bng\s+earphones?\b`, etc.) correctly releases these while still catching genuine brand variants. **Any future brand/negative-keyword filter must use word-boundary matching, never plain substring `in`.** This is also why GA-005's brand-vs-Shopping comparison and this pass's wider one disagree (item 12) — different, undocumented term sets, not different underlying reality. **Applied again 2026-07-16 for the GA-012 negative batch — word-boundary regex correctly released `swimming headphones`, `running earphones`, etc. from the cut list. Applied again 2026-07-27 for GA-020. Applied again 2026-08-03 for GA-023 — same regex, same clean release of generic terms.**

## NEW FINDINGS — 2026-07-16 (Thursday follow-up, window 16 Jun–15 Jul)

17. See item 11 above (tablet narrowed) — cross-referenced here for visibility. GA-014, SH-GA-14.

18. **Marginal ROAS on the 11–12 Jul budget spike is trending up sharply as attribution matures, but is still sub-gate and still not old enough to call.** Recomputed with 4–5 days more maturity (vs the 1–2 days available on 2026-07-13): **3.94×**, up from the four same-day-13-Jul reads of 0.86×/1.15×/1.43×/1.43×. Still below the 6.0 scale gate. The scheduled 19-Jul read (P0-3) remains the authoritative one — do not treat this interim number as a verdict, but it is worth watching: if the trend continues, 19 Jul could plausibly clear 6.0. **CLOSED 2026-07-23 at −3.64× (fully matured 10-day read) — see finding 23. Reaffirmed 2026-07-27: no new natural spend variation to re-test; gate stays closed.** **Reaffirmed again 2026-08-03: still −3.64×, no new natural spend variation on the two existing campaigns (daily total spend 2026-07-04→08-01 held ₹1,192–2,747, within normal band). Gate stays CLOSED.**

19. **SC-All Range remains Lost-Budget (42.5%), not Lost-Rank (9.9%) — SH-GA-9 reconfirmed a second time on a fresh window.** Search-26 remains Lost-Rank (55.3%). No new action — budget is still gated — but this strengthens the case that *when* the gate clears, the dollar should go to Shopping specifically, not be split evenly. **🚨 2026-07-27: SC-All Range still Budget-lost (63.8%, reconfirmed a 3rd time), but Search-26 has flipped to ALSO Budget-lost (59.7% vs 29.2% Rank-lost) — see institutional pattern 5. Single-cycle read; needs reconfirmation before acting, but the old "Search-26 is purely Rank-limited" framing no longer holds cleanly.** **🚨 CONFIRMED, no longer single-cycle, 2026-08-03: Search-26 Budget-lost 68.5% (2nd straight cycle in this direction), SC-All Range Budget-lost 67.7% (4th+ cycle), and the new SafeBuds-Search campaign is ALSO Budget-lost (57.8%) from its first read. All three campaigns are now Budget-limited — see institutional pattern 5 for the full update.**

20. See item 12 above (brand comparison widened) — cross-referenced here for visibility.

## NEW FINDINGS — 2026-07-23 (Thursday follow-up, window 23 Jun–22 Jul, direct-API pulls — Windsor fully retired)

21. **⭐ Migration to direct Google Ads + GA4 APIs complete and validated.** Both pulls now bypass Windsor entirely (two OAuth token exchanges, six GAQL `searchStream` queries, one GA4 `runReport` call). Sanity anchor (13 Jun–12 Jul) reproduced **TRUE ROAS 9.3787×** against the published 9.38× anchor — exact match — confirming the new pipeline is sound. QS sanity held too: max QS seen across 1,700 keyword-view rows was 10, no summed/impossible values. **Reconfirmed 2026-07-27, including one new operational wrinkle: the `requests` Python HTTP client gets a `503 DNS resolution failure` specifically from `googleads.googleapis.com:searchStream` (DNS itself resolves fine; `curl` with identical credentials succeeds) — a client-specific edge-routing quirk, not a credential problem. Fixed by issuing the Ads GAQL calls via `curl` subprocess instead; GA4 continues to work fine through `requests`.** **Reconfirmed a 3rd time 2026-08-03 — pipeline unchanged, sanity anchor reproduces the exact same 9.3787× a 3rd cycle running, curl-for-Ads/requests-for-GA4 split still required.**

22. **🚨 The ROAS-direction bug — caught in-session, before publishing.** A first-draft computation read literally as "spend ÷ revenue" produced TRUE ROAS readings under 1.0 (e.g. 0.12×), which is nonsensical against every historical anchor (9.38×, 11.50×, the 6.0 floor, the 9–11× band). Corrected to **revenue ÷ spend** and re-validated against the sanity anchor before anything was written down. **Institutional rule added: any TRUE ROAS reading under ~2× on this account is itself a red flag — check the division direction before trusting it.**

23. **⭐ P0-3 / SH-GA-7 (marginal ROAS re-read) is now CLOSED on a fully-matured read: −3.64×.** Pre-spike baseline (23 Jun–10 Jul, 18 days) averaged ₹1,542.42/day spend → ₹14,735.52/day GA4 revenue. Post-spike (13–22 Jul, 10 days, spike days themselves excluded) averaged ₹1,826.71/day spend → **₹13,702.02/day revenue — down, not up, at higher spend.** This is the first read with genuinely mature (10-day, past the 7-day attribution window) data, and it goes negative — consistent in direction with every interim read since 13 Jul (0.86× → 1.15× → 1.43× → 3.94× → now −3.64×). **No budget headroom exists right now. Close the gate; do not manufacture another spike to re-test — wait for natural variation.** **Reaffirmed 2026-07-27 — no natural spend variation occurred in the intervening week (daily spend stayed ₹1,340–2,750 outside two anomalous days); nothing new to re-measure.** **Reaffirmed again 2026-08-03 — daily spend 2026-07-04→08-01 stayed ₹1,192–2,747, still no natural variation on the two existing campaigns. A genuinely new, net-new spend source appeared this cycle (the `SafeBuds-Search-28th July'26` campaign, ~₹264/day since 07-28) but it is a new-campaign addition, not a budget change on an existing one, and is under 7 days old — excluded from this gate's verdict; see GA-026 for its own dedicated read plan.**

24. **🚨 GA-011's execution-failure finding is now DOUBLE-confirmed with an exact-rupee test.** `tecno earbuds` (₹90.21) and `truth hear` (₹77.67) — two zero-conversion terms flagged in GA-013 on 2026-07-16 — show **identical spend to the rupee** on this pull, a full week later. This is the strongest possible signal that zero writes have landed against any of GA-009/010/012/013 in the intervening week. **Escalated a second time as GA-016.** `open ear earbuds`, by contrast, moved (₹643.15/0conv → ₹561.52/1conv) — inconclusive, so it was correctly NOT re-added to this cycle's cut list (a term that has converted even once in the aggregate must never be negatived — institutional rule holds). **🚨 2026-07-27 nuance, important: both `tecno earbuds` and `truth hear` show exactly 1 click, total, in every one of the three pulls (07-16/07-23/07-27). A single historical click sitting inside a rolling 30-day window would look rupee-identical across cycles whether or not a negative ever executed — because no new matching query has arrived to test the block either way. GA-016's conclusion (write path may be broken) is not necessarily wrong, but this specific test cannot prove it. Filed as GA-021: the next verification needs a `segments.date`-scoped pull on these two terms (to date the click) or a higher-volume term, not a third identical aggregate re-read.** **🚨 RESOLVED (as moot) 2026-08-03: neither term appears in this cycle's search-term pull at all — their one historical click each has finally aged past the rolling 30-day window, with no new click ever recorded in over a month. This is more consistent with "extremely low-volume long-tail query" than a provable broken write path either way. GA-021's proposed date-scoped test no longer has anything to test on these two specific terms; the write-path question now rides on whether GA-023's fresh batch shows any spend reduction on the 2026-08-06 read.**

25. **A third zero-spend day has appeared: 2026-07-18** (₹0 Ads spend, ₹3,658.00 GA4 cpc revenue that date). This is now confirmed on THREE separate dates (07-09, 07-10, 07-18) across different pull windows — no longer a one-off, this is a standing account/connector fact. Filed as GA-017. **🚨 2026-07-27: a FOURTH, reverse-shape date appeared — 2026-07-26 (₹1,745.80 Ads spend, ₹0.00 GA4 revenue — spend with no matched revenue, the opposite pattern from the other three). Read as GA4 processing lag on the freshest day (institutional pattern 1b), not necessarily a new class of fault, but must be re-checked next cycle — if 07-26 is still ₹0 GA4 revenue a week from now, it graduates to a genuine gap. Filed as GA-022.** **🚨 2026-08-03: GA-022 CONFIRMED as processing lag — 07-26 backfilled to ₹12,755.10/5 txns. 07-09/07-18 still present (recurring, standing facts). A FIFTH anomaly appeared: 2026-08-02 has NO Google Ads row at all (most likely simply not yet landed at 07:30 IST pull time), and 2026-08-01 shows the same spend-with-no-revenue shape as 07-26 did last cycle (₹1,261.84 spend / ₹0.00 GA4 revenue) — filed as GA-027, expected to backfill by 2026-08-06 the same way 07-26 did.**

26. **SH-GA-10 (brand cannibalization) is REJECTED — not for a direction, but for instability.** Four independent pulls of the same underlying comparison have produced four materially different answers: 16.98×/12.60× → 20.33×/13.66× → 20.56×/13.92× → **33.71×/35.24× (this pull, nearly tied, ~4.5% gap).** The magnitude has swung by more than 2× and the direction has flipped. **The metric itself is too unstable at this spend volume to found a structural change on. GA-005 is closed permanently (GA-018) — do not schedule another re-read; there is no version of "one more clean pull" that will fix an unstable estimator.** **2026-07-27 snapshot for the record only (per finding 12): 30.46× vs 33.79×, still close — not re-opened.** **Not re-examined 2026-08-03 — stays closed, no new evidence sought this cycle.**

27. **Search-term-view does not fully cover Shopping campaign spend — a real, disclosed limitation, not a bug.** Pull 4 (search terms) totals ₹38,059.00 across all terms vs. the account's actual 30d spend of ₹53,202.16 (₹15,143.16 / 28.5% gap) reconciled against pull 1. Standard Shopping/product-targeted auctions do not expose search-term-level reporting the way Search campaigns do. **This is now named explicitly rather than silently treated as a full breakdown — the zero-conversion waste total (₹17,784.14) is scoped to what search-term-view actually covers, not the whole account.** **Reconfirmed 2026-07-27, same shape: ₹39,157.22 of ₹54,616.59 (₹15,459.37/28.3% gap).** Stable, structural, not worsening. **Reconfirmed a 3rd time 2026-08-03: ₹36,865.04 of ₹51,536.38 (₹14,671.34/28.5% gap) — same shape, same magnitude, structural and stable across three direct-API cycles.**

28. **The true scale of zero-conversion search-term waste is ~4.4× larger than last cycle's estimate once genuinely unfiltered.** GA-012 (2026-07-16) reported ₹4,040.48 using a pull that (per the tracker's own note) applied a `spend>20`-per-row filter. This cycle's fully unfiltered pull (per current spec — no metric filter, ever) finds **₹17,784.14** (99 terms, cost≥₹5 each, zero conversions on the full aggregate, non-brand/non-conquest). **Reconfirms the department's oldest lesson: any filter, even one framed as "standard," undercounts. Aggregate everything, filter in code, always.**

## NEW FINDINGS — 2026-07-27 (Monday teardown, window 27 Jun–26 Jul, direct-API — first fully curl-based Ads client)

29. **Shopping SKU mix has flipped again — Comm 2.0, not Pro, is now the worst-returning material SKU.** See finding 10 (superseded). Pro's share: 47.0% → 40.7% → **23.9%** across three cycles, entirely without any executed mix-shift action. SafeBuds Black is now the largest SKU by spend (38.6%) at the best ROAS among the big three (12.78×); Comm 2.0 is second-largest (36.7%) at the worst (9.76×). Filed as SH-GA-16 (feed-title test targeting Comm 2.0 specifically). **See finding 10's 2026-08-03 update: the mix moved a 4th time — Comm 2.0 improved to 11.53× before any fix landed, SafeBuds Black is now worst (10.83×), Pro is now best (12.48×) at only 14.2% share.**

30. **AI Max leakage more than doubled since 07-16: ₹624.35 → ₹1,440.60/30d (17 → 56 distinct queries, 52 still zero-conversion).** GA-013 (rein in AI Max via negatives + text guidelines) remains unexecuted. The lever hasn't been pulled and the leak is growing, not shrinking. **2026-08-03: growing a 3rd straight cycle, ₹1,556.14/30d, 49 zero-conv queries — see finding 9's update and GA-025.**

31. **A drafted-but-unexecuted negative batch is not "safe forever" — it must be re-verified immediately before push, not just at draft time.** GA-015's #1 item by spend, `ear safe headphones` (₹302.04 on 2026-07-23), shows **0.20 conversions** in this cycle's aggregate — it converted sometime in the last 4 days. Because GA-015 has never actually executed (still blocked/unconfirmed), this was caught before any damage — but it demonstrates that the "never negative a converting term" rule must be checked at execution time, not trusted from a stale draft. GA-020 supersedes GA-012 and GA-015 with a freshly re-verified list. **Re-applied 2026-08-03 for GA-023 — `ear safe headphones` re-checked and correctly kept off the batch again.**

32. **The GA-016 write-path-failure test has a blind spot: single-click terms can't distinguish "broken" from "no new activity."** `tecno earbuds` and `truth hear` have shown bit-for-bit identical spend across three cycles (07-16/07-23/07-27) — the evidence for GA-016's escalation. Both have exactly 1 click, ever, in every pull. A rolling-30-day-window artifact from one old click would look identical regardless of execution status. Filed as GA-021 — the next test needs a `segments.date`-scoped pull or a higher-volume candidate term. **RESOLVED as moot 2026-08-03 — see finding 24's update: both terms have now aged out of the window entirely.**

## NEW FINDINGS — 2026-08-03 (Monday teardown, window 4 Jul–2 Aug, direct-API — 4th direct-API cycle)

33. **A new, previously-unlogged campaign is live: `SafeBuds-Search-28th July'26` (24068804553).** First seen this cycle, spending since 2026-07-28 (5 days old at pull time), ~₹264/day, platform ROAS 6.22× on ₹1,320.75/4.63conv/₹8,216.61 value — right at the account's 6.0 floor but far too young to call under the 7-day rule. No GA-### preceded its launch; it appears to be a human action outside this department's draft flow (plausibly a relaunch attempt superseding the still-open P0-4 diagnosis of the old, dark `Search | SafeBuds | OWS + Conquest` campaign). **Filed as GA-026 — pure observation, no change, first legitimate read 2026-08-06 when it turns 9 days old.**

34. **All three active campaigns are now Budget-impression-share-limited — a genuine structural shift, but not a green light.** See institutional pattern 5's full update. `Search-26` Budget-lost 68.5% (2nd straight cycle), `SC - All Range` Budget-lost 67.7% (4th+ cycle), new `SafeBuds-Search` Budget-lost 57.8% (first read). The account's founding "Lost-IS-Rank-limited, not budget-limited" thesis (department's core priority-ordering argument) no longer holds anywhere in the account. **This does NOT reopen the scale gate** — marginal ROAS on the last tested spend increase remains −3.64×, closed, unchallenged this cycle. The lesson: a Budget-lost impression-share reading describes the ceiling, not permission to raise it. The gate is the only thing that grants that permission, and it hasn't cleared.

35. **The zero-conversion search-term waste total has stopped growing and started holding steady — itself informative.** GA-020 (07-27): ₹18,253.45/1,174 terms. GA-023 (08-03, this cycle): ₹17,629.87/1,155 terms — essentially the same figure, term-for-term, a week later. Unlike the earlier escalating sequence (₹1,168 → ₹2,637 → ₹4,040 → ₹17,784 → ₹18,253, each jump explained by progressively less-filtered pulls), this is the first cycle where the *methodology* was already fully unfiltered on both reads — so a stable total, rather than growth, is now the signal that matters, and it means the batch still has not executed. **If GA-023 executes and the 2026-08-06 read shows this figure collapsing toward ₹0, that will be the first positive confirmation of a working write path since the department stood up.**

## REJECTED / DEAD ENDS

- **Candidate for rejection, pending the 19 Jul read:** *"Google Ads has headroom at ₹3,600/day."* Provisionally **rejected** on the 11–12 Jul evidence (marginal ROAS 0.86×), reconfirmed directionally on 2026-07-13 (recomputed at 1.15× from a fresh pull, same sub-floor conclusion), reconfirmed a third time bit-for-bit on the 22:02 IST same-day re-pull (1.15×), reconfirmed a **fourth** time on a clean-baseline recomputation at **1.43×** (23:xx IST pass), and now a **fifth** interim read at **3.94×** (2026-07-16) — trending toward the gate but still under it and still not old enough to call. **CLOSED PERMANENTLY 2026-07-23 at −3.64× (GA-019). Reaffirmed 2026-07-27 — no new evidence, no new natural spend variation. Reaffirmed again 2026-08-03 — still no new natural spend variation on the two existing campaigns.**
- *"Tablet is a blanket free kill, all campaigns."* **Superseded 2026-07-16** — see finding 11/17. The category-level claim (Search-26 tablet is dead weight) still holds; the account-wide extrapolation does not. **Reconfirmed narrowed a further time 2026-07-27, and again 2026-08-03 (now extended to the new SafeBuds-Search campaign, `SC - All Range` tablet still explicitly protected).**
- **GA-005 / SH-GA-10 — "Brand de-duplication has a stable, actionable gap."** **REJECTED, closed permanently 2026-07-23.** Four pulls, four different (and once-inverted) answers. Do not re-open without a fundamentally different methodology (e.g. a geo/holdout split), not just another aggregate re-pull. **Stays closed 2026-07-27 — the gap is close again this cycle (30.46× vs 33.79×), consistent with instability, not re-opened. Not re-examined 2026-08-03 — stays closed.**
- **"Google Ads has headroom above ~₹1,800/day."** **REJECTED, closed 2026-07-23** on the first fully-matured (10-day) read: marginal ROAS −3.64×. Every read since 13 Jul agrees in direction. Re-open only after a natural (not manufactured) spend increase, or after P0-1/P0-2 land and tROAS is corrected. **Stays closed 2026-07-27. Stays closed 2026-08-03 — no natural variation occurred.**
- **"Shopping SKU mix is upside-down, Pro is the problem."** *(old GA-004)* **Stays retracted/superseded — see finding 29.** The mix has continued moving on its own (Pro's share now 14.2%, and now the BEST-returning SKU at 12.48×); do not resurrect the Pro-focused framing, nor any Comm-2.0-focused framing either (finding 10's 2026-08-03 update) — the "worst SKU" label has rotated through all three material SKUs across four cycles.

## SCALE HYPOTHESIS BACKLOG (per COMPANY_STATE §5.5 — test → validate → scale)

| # | Hypothesis (metric + threshold) | Test (smallest move) | Status | Linked queue |
|---|---|---|---|---|
| **SH-GA-13** | Cutting ₹4,978/30d of zero-return spend at flat budget lifts TRUE ROAS from 9.38× toward the 9–11× band within one attribution window | Claimed shipped 2026-07-14 (99 negatives + tablet + SafeBuds Ivory). **Falsifier: TRUE ROAS < 9.0 on 21 Jul → something cut was load-bearing → REVERSE, don't cut deeper.** | 🔴 **BLOCKED — confirm execution first.** 2026-08-03: superseded in scale by GA-023 (₹17,629.87), same execution question. | GA-011 |
| **SH-GA-14** | A `Search-26`-only tablet exclusion (not blanket) recovers ₹70/30d without forfeiting `SC - All Range`'s tablet revenue | One device bid modifier, Search-26 only, zero spend change | 🟡 **OPEN — reconfirmed a 4th time 2026-08-03**, now expanded to include the new `SafeBuds-Search` campaign (GA-024) | GA-014, GA-024 |
| **SH-GA-1** | Fixing the duplicate conversion action closes the 49% overclaim to **<20%** | P0-1 — deduplicate, put the Shopify-pixel action in the bidding goal | ⬜ OPEN — still not started as of 2026-08-03. **14 days to 17 Aug.** | — |
| **SH-GA-2** | With corrected values, a tROAS re-baselined to **~7.0–8.0** holds TRUE ROAS ≥ 9.0 *and* survives the 17 Aug change | P0-2 — walk the target in ≤15%/week steps | ⬜ BLOCKED by SH-GA-1 | — |
| **SH-GA-3** | **AI Max** delivers the guide's **+34% CVR** on `Search-26 May 25` | P2-1 — one-click experiment, 50/50, 2-week read | ⬜ BLOCKED by SH-GA-1 | — |
| **SH-GA-4** | Raising Ad Strength to Excellent recovers Lost-IS-Rank **without** extra budget (guide: +45% CTR vs Poor) | P1-2 — 8–10 headlines / 3–4 descriptions per ad group | ⬜ OPEN — QS is already 7–10 on open-ear terms (reconfirmed 2026-08-03, no QS≤4 keyword carries spend); **note: Rank-lost has fallen further out of the picture this cycle since all campaigns are now Budget-lost dominant — this lever's urgency should be reweighed against the budget-limited finding (34)** | — |
| **SH-GA-5** | Rewriting Shopping feed titles to `[Brand]+[Type]+[Feature]+[Variant]` lifts `SC - All Range` TRUE ROAS above 11.5× | P1-3 — Merchant Center feed-rule A/B on the top 20% of SKUs by spend | ⬜ OPEN — narrowed to Comm 2.0, see SH-GA-16 | — |
| **SH-GA-6** | **Enhanced Conversions** recovers a measurable share of the platform-vs-GA4 gap | P1-1 — enable; impact visible ~30 days after | ⬜ OPEN | — |
| **SH-GA-7** | The account has **any** budget headroom above ₹1,800/day at marginal ROAS ≥ 6.0 | +20% step, held 7 days, then read marginal | 🔴 **CLOSED — REJECTED 2026-07-23**, reaffirmed 2026-07-27 and again 2026-08-03. Marginal ROAS −3.64× on a fully-matured 10-day read, unchanged. Re-open only after a natural spend variation or after P0-1/P0-2 land. | GA-019 |
| **SH-GA-9** | Shopping is Lost-Budget not Lost-Rank — next budget dollar, once gates clear, should target Shopping specifically | Confirm on next IS pull; hold until marginal ROAS ≥ 6.0 | 🟢 **RECONFIRMED a 4th time 2026-08-03** (SC-All Range 67.7% budget-lost) — **and now Search-26 (68.5%) and the new SafeBuds-Search campaign (57.8%) are ALSO budget-lost, a 2nd consecutive cycle for Search-26. The "Shopping only" framing is now outdated — all three campaigns qualify. See finding 34.** | — |
| **SH-GA-10** | A fixed brand-term whitelist shows a stable, actionable ROAS gap between Shopping and Search-26 brand traffic | Re-pull with same whitelist each cycle | 🔴 **CLOSED — REJECTED 2026-07-23.** Four pulls, four different (once-inverted) answers; the estimator is too unstable to act on. Stays closed 2026-07-27 and 2026-08-03. | GA-018 |
| **SH-GA-15** | Three approved negative-keyword batches show zero execution after 10+ days — the block is structural (write path), not a stale read | Pilot: push ONE verified zero-conv, non-brand term as an EXACT negative via whatever write path Meet has; read the term's spend 2026-07-30 | 🟡 **OPEN — the original pilot terms (`tecno earbuds`/`truth hear`) aged out of the window 2026-08-03 without ever being testable; the question now rides on GA-023's fresh batch instead.** | GA-015, GA-016, GA-023 |
| **SH-GA-16** | Rewriting Comm 2.0's Shopping feed title (`[Brand]+[Type]+[Feature]+[Variant]`, front-loaded) lifts its platform ROAS from 9.76× toward Black's 12.78× (threshold ≥11.0×) within two attribution windows | One Merchant Center feed-rule edit, one SKU, ₹0 spend impact, no learning-phase cost | 🟡 **OPEN — read 2026-08-10. 2026-08-03 note: Comm 2.0's ROAS has already moved to 11.53× — clearing the ≥11.0× threshold — WITHOUT the feed-title fix ever being built. Treat this as further evidence of SKU-ranking instability (finding 10), not as a false-positive confirmation of the hypothesis; the feed-title change still hasn't happened, so nothing has actually been validated yet.** | GA-020, GA-023 |
| **SH-GA-17** | 🆕 The new `SafeBuds-Search-28th July'26` campaign sustains platform ROAS ≥ 6.0× over its first fully-matured 7-day window | Observe only, no budget/bid change on a <7-day-old campaign | 🟡 **OPEN — read 2026-08-06** | GA-026 |

## CYCLE LOG (most recent first)

### 2026-08-03 — Monday teardown: waste total holds steady (not executed), AI Max leakage 3rd-cycle growth, all campaigns flip Budget-limited, new unlogged campaign found

**Initiative:** Fourth fully direct-API Monday teardown. One Python pass (2 OAuth exchanges, 6 GAQL queries via `curl`, 1 GA4 `runReport`), TRUE ROAS + marginal ROAS recomputed from scratch, cross-checked against the sanity anchor and every reconciliation assert.

**Hypotheses tested:**
1. *"The direct-API pipeline still reproduces the sanity anchor."* → **CONFIRMED**, exact match a 3rd cycle running: 9.3787× vs the 9.38× anchor.
2. *"The marginal-ROAS gate stays closed with no new evidence."* → **CONFIRMED.** No natural spend variation on the two existing campaigns (daily spend held ₹1,192–2,747); −3.64× stands.
3. *"GA-020's negative batch has executed since last cycle."* → **REJECTED — no evidence of execution.** This cycle's fresh, equally-unfiltered aggregate finds ₹17,629.87/1,155 terms, essentially the same figure as GA-020's ₹18,253.45/1,174 terms a week earlier. Refreshed as GA-023.
4. *"AI Max leakage has stopped growing."* → **REJECTED.** Zero-conv AI_MAX spend grew a 3rd straight cycle (₹624→₹1,441→₹1,556); total AI_MAX volume (incl. converting) grew 4.5× to ₹6,534.18. Escalated as GA-025 with a settings-level recommendation, not just more negatives.
5. *"Search-26's flip to Budget-lost (07-27) was a single-cycle anomaly."* → **REJECTED — confirmed a 2nd straight cycle** (68.5% budget-lost this cycle). Combined with SC-All Range (67.7%, 4th+ cycle) and the new SafeBuds-Search campaign (57.8%, first read), **all three active campaigns are now Budget-impression-share-limited.**
6. *"The Shopping SKU mix has stabilized."* → **REJECTED — moved a 4th time.** "Worst SKU" has now rotated Pro→Comm 2.0→SafeBuds Black across four cycles; Comm 2.0 improved past SH-GA-16's own target threshold (11.53× vs ≥11.0×) before the feed-title fix was ever built.
7. *"GA-021's write-path test terms (`tecno earbuds`/`truth hear`) will finally show new activity."* → **MOOT — both terms aged out of the 30-day window entirely**, with no new click ever recorded. Resolved as inconclusive-by-attrition rather than confirmed or rejected; the write-path question moves to GA-023.

**Learning carried forward:**
- **A stable (not growing) waste total, once the pull methodology is already fully unfiltered on both reads, is itself the "not executed" signal** — the earlier escalating sequence of waste estimates was explained by progressively less-filtered pulls; now that both reads use the same unfiltered method, persistence at the same magnitude means nothing was cut.
- **A SKU clearing a hypothesis's target threshold before the proposed fix is ever built is not confirmation — it's more evidence the metric is too unstable to act on.** Applies the same caution as SH-GA-10's closure to SH-GA-16; keep it a monitor, not a trigger.
- **"All campaigns are budget-limited" is a ceiling diagnostic, not scale permission.** The department's own priority list ranks budget last for a reason — impression-share loss to Budget describes where the account WOULD grow if the gate opened, not whether it should be opened now.
- **A test whose subject ages out of the measurement window before it can be evaluated should be marked moot, not re-escalated.** GA-021's two pilot terms never got a fair test; don't count that as either a win or a loss for the write-path hypothesis.

**Next-sprint changes triggered:**
- **GA-023** queued — refreshed 1,155-term zero-conv negative batch (₹17,629.87/30d), supersedes GA-020.
- **GA-024** queued — expand tablet exclusion to the new SafeBuds-Search campaign, extends GA-014.
- **GA-025** queued — 3rd escalation of AI Max leakage, recommend settings-level review.
- **GA-026** queued — monitor the new, previously-unlogged SafeBuds-Search campaign; read 2026-08-06.
- **GA-027** queued — confirm GA-022 resolved as processing lag; flag 08-01/08-02 showing the same shape.
- **SH-GA-17** added to backlog — new campaign ROAS-floor test, read 2026-08-06.
- Budget: **hold, reaffirmed** — no new evidence, gate stays closed.

### 2026-07-27 — Monday teardown: SKU mix flip confirmed (Comm 2.0 now worst), a drafted batch caught going stale, AI Max leakage doubling, write-path test refined

**Initiative:** First full Monday teardown since the direct-API migration matured. Same one-Python-pass approach (2 OAuth exchanges, 6 GAQL queries via `curl` after `requests` proved unreliable against `searchStream`, 1 GA4 report), TRUE ROAS + marginal ROAS recomputed from scratch, cross-checked against the sanity anchor and every reconciliation assert.

**Hypotheses tested:**
1. *"The direct-API pipeline (now via curl for Ads) still reproduces the sanity anchor."* → **CONFIRMED**, exact match: 9.3787× vs the 9.38× anchor.
2. *"The 11–12 Jul marginal-ROAS gate stays closed with no new evidence."* → **CONFIRMED.** No natural spend variation occurred this cycle; GA-019's −3.64× stands unchallenged.
3. *"GA-015 (pending, unexecuted) is still safe to push as originally drafted."* → **REJECTED.** Its #1 item, `ear safe headphones`, now shows 0.20 conversions — it must be refreshed before any execution. GA-020 supersedes it.
4. *"The GA-016 write-path-failure evidence (identical spend on two terms) proves the write path is broken."* → **INCONCLUSIVE — the test itself is flawed.** Both terms have exactly 1 click, ever; a rolling-window artifact would look identical regardless of execution status. Refined as GA-021.
5. *"The Shopping SKU mix inversion (Pro worst) still holds."* → **REJECTED — it has moved again.** Pro's share has fallen to 23.9% (from 47.0% → 40.7%); Comm 2.0 (36.7% share) is now the worst-returning material SKU at 9.76×.
6. *"Search-26 is purely Rank-limited, as previously established."* → **REJECTED this cycle, single read.** Search-26 now reads lost-Budget (59.7%) higher than lost-Rank (29.2%) — needs reconfirmation before acting, but the old framing no longer holds cleanly.

**Learning carried forward:**
- **A drafted negative-keyword batch needs re-verification immediately before execution, not just at draft time.** A term can convert in the days between drafting and (still-pending) execution. This is the same discipline as "never trust SHIPPED without a spend check," applied one step earlier in the pipeline.
- **An exact-rupee "unchanged spend" test is not proof of a broken write path if the term has only ever had one click.** Test design matters as much as the underlying question — a test that can't discriminate between two hypotheses isn't evidence for either.
- **SKU/device/impression-share rankings are not stable "set and forget" facts — they must be re-pulled and re-verified every cycle**, even when the account narrative feels settled (Pro was "the problem" for two straight cycles; it no longer is).
- **HTTP client choice can matter as much as the API itself** — `requests` failed against one specific Google Ads endpoint for reasons unrelated to credentials or DNS; `curl` succeeded immediately with identical auth. Worth remembering if a "DNS resolution failure" appears again — check the client, not just the network.

**Next-sprint changes triggered:**
- **GA-020** queued — refreshed 1,174-term zero-conversion negative batch (₹18,253.45/30d), supersedes GA-012 and GA-015.
- **GA-021** queued — refine the write-path execution test (GA-016) with a `segments.date`-scoped pull or higher-volume term.
- **GA-022** queued — name the new 2026-07-26 zero-GA4-revenue anomaly.
- **SH-GA-16** added to backlog — Comm 2.0 feed-title test, read 2026-08-10.
- Budget: **hold, reaffirmed** — no new evidence, gate stays closed.

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
4. *"More budget is how Google Ads scales."* → **REJECTED.** The account is Lost-IS-**Rank** limited. Scale comes from measurement → AI Max → Quality Score → feed → *then* budget. **See finding 34 (2026-08-03): this thesis has since flipped — all three campaigns are now Budget-limited. Priority order still holds (cut waste before budget), but the Rank-limited framing itself is now outdated.**

**Learning carried forward:**
- **Marginal, not average.** The whole design of this department follows from hypothesis 2.
- **The ≤20% ratchet is not caution, it is mechanics.** Google's own documentation says a bigger step resets learning. Our own data shows what that costs.
- **Never read a window younger than 7 days.** The attribution window is 7 days; a 2-day read is not a read.

**Next-sprint changes triggered:**
- P0-1 (conversion fix) and P0-2 (tROAS re-baseline) are now on a **hard 17 Aug deadline** — Google will begin pulling budget-limited tROAS campaigns *down toward their target*, and our target was set against an inflated value.
- **GA-001 must be revised before approval** — as queued, it is a ~50% cut that would trigger a *second* learning phase inside two weeks. See `tracker.md` P0-3.
- The Managed Agent (`../../agents/google-ads.agent.yaml`) now runs the guard daily and the full audit on Mondays, so no budget move goes unwatched again.
