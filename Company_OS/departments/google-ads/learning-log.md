# Google Ads — Learning Log

> The Monday full-audit appends here; `/standup` reads here. **Never delete an entry — supersede it.** The point of this file is that we never retry a dead end.

## HOW TO LOG

```
DATE | INITIATIVE | HYPOTHESIS | RESULT (confirmed/rejected/inconclusive) | LEARNING CARRIED FORWARD
```

## CONFIRMED PATTERNS (institutional truths)

0c. **🚨 NEW 2026-07-16 — a tracker status of "SHIPPED" is not evidence of execution. Always spend-check before trusting it.** Three items marked "✅ SHIPPED 2026-07-14" (99 negatives GA-009/010, tablet exclusion P1-1, SafeBuds Ivory exclusion P1-2) show **zero change in live spend** two days later: `open ear earbuds` (a GA-010 negative target) still spent ₹643.15/30d at 0 conversions; SafeBuds Ivory still spent ₹751.20/30d at 11.24× ROAS; tablet still spent ₹345.32/30d total across campaigns. queue-inbox.md had already flagged GA-009/010 as "BLOCKED: Windsor write actions disabled" — the tracker's status update was written without checking whether the block had cleared. **Institutional rule: a "SHIPPED" or "EXECUTED" status must be corroborated by a subsequent spend pull before it is trusted or built upon.** **Reconfirmed 2026-08-03: GA-020's batch (₹18,253.45/30d, drafted 07-27) shows a nearly identical waste total a week later (₹17,629.87/30d, same top terms) — still no evidence of execution, 4th consecutive cycle this pattern holds.** **Reconfirmed a 9th straight cycle 2026-08-17: GA-035's batch (₹14,593.55/30d) shows ₹12,441.81/30d on a fresh, equally-unfiltered pull one cycle later — down modestly, still not the collapse-toward-₹0 that would indicate execution. Refreshed as GA-040.** **Reconfirmed a 10th straight cycle 2026-08-20: GA-040's batch (₹12,441.81/906 terms) shows ₹14,325.29/972 terms on a fresh, equally-unfiltered pull one cycle later — the total GREW back, reversing 3 cycles of decline. Nine straight approval cycles now show no confirmed execution of any zero-conv batch. Refreshed as GA-045.** **Reconfirmed an 11th straight cycle 2026-08-27: GA-050's batch (₹13,399.93/906 terms, 2026-08-24) shows ₹13,202.21/881 terms one cycle later — essentially flat, still not the collapse-toward-₹0 execution would produce. Refreshed as GA-058.** **The one exception this run of cycles: GA-031 (Comm 2.0 feed-title consolidation) DID execute — confirmed 2026-08-27 (see finding 71) — proving the write-path CAN work for at least some action types (feed/Merchant-Center edits), which sharpens the question of why the negative-keyword batches specifically remain stuck.**

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

   **Reconfirmed again 2026-07-16:** SKU and device pulls, taken unfiltered, reconciled exactly to their parent campaign totals (0 variance on all three campaigns) on a fresh window (16 Jun–15 Jul). **Reconfirmed a 3rd time 2026-07-27 on the direct API (not Windsor):** SKU sum ₹45,693.68 vs campaign ₹45,693.68 (0 variance); device sum ₹8,922.91/₹45,693.68 vs campaign totals (0 variance). **Reconfirmed a 4th time 2026-08-03:** SKU sum ₹41,792.26 vs `SC - All Range` ₹41,792.26 (0 variance); device sum ₹51,536.38 vs 30d account total ₹51,536.38 (0 variance). **Reconfirmed a 5th time 2026-08-10:** SKU sum ₹36,823.10 vs `SC - All Range` ₹36,823.10 (0 variance). A NEW variant of this same discipline caught a **self-inflicted** bug this cycle, not an API/connector one: the device pull (pull 6) has no `segments.date` selected (it is already a window aggregate), and a first-draft re-filter-by-a-then-absent-date field silently zeroed the entire device breakdown. The reconciliation assert (device sum vs account total) failed loudly, was caught in-session, and the bug was fixed before anything was reported — the same discipline that catches API filter bugs also catches code bugs, which is exactly why it's a standing rule and not a one-time check. **Reconfirmed a 6th time 2026-08-13:** SKU sum ₹34,407.99 vs `SC - All Range` ₹34,407.99 (0 variance); device sum ₹46,397.35 vs 30d account total ₹46,397.35 (0 variance). **Reconfirmed a 7th time 2026-08-17:** SKU sum ₹30,032.44 vs `SC - All Range` ₹30,032.44 (0 variance); device sum ₹42,525.80 vs 30d account total ₹42,525.80 (0 variance). **Reconfirmed an 8th time 2026-08-20:** SKU sum ₹32,393.98 vs `SC - All Range` ₹32,393.98 (0 variance); device sum ₹47,538.48 vs 30d account total ₹47,538.48 (0 variance). **Reconfirmed a 9th time 2026-08-27 (direct-API, 28 Jul–26 Aug window):** SKU sum ₹28,743.84 vs `SC - All Range` ₹28,743.84 (0 variance); device sum reconciled per-campaign for all 3 live campaigns (0 variance each); GA4 `len(rows)==rowCount` (75==75).

   **🚨 NEW 2026-07-27 addendum, reconfirmed 2026-08-27: never trust the direction of a ratio without a red-flag check either.** This cycle's first-draft TRUE ROAS computation divided spend by revenue instead of revenue by spend, producing an anchor reading of 0.11× instead of ~9.4×. Caught in-session by institutional rule (finding 22: any TRUE ROAS under ~2× is a red flag) before publishing. **The same discipline that catches filter bugs and reconciliation bugs also catches direction-of-division bugs — it is a general "does this number pass the smell test" habit, not three separate rules.**

0. **🚨 NEVER FILTER ON `conversions == 0`. IT NEARLY DESTROYED THE ACCOUNT (2026-07-13).** Windsor returns a search term as *several* rows, segmented by dimensions you did not request. Filtering `conversions == 0` keeps only the **non-converting slices** and hides the converting ones — so a term that earned ₹42,589 comes back looking like a zero.

   A `conversions == 0` filter produced the "34 zero-conversion search terms" list (GA-002, ₹2,709 of claimed waste). It contained **`ng earsafe` (₹42,589 / 17.6 conv), `ngearsafe` (₹19,420), `bone conduction headphones` (₹24,703), `wehear earbuds` (₹7,757), `open ear headphones` (₹5,332)** — the brand, the best conquest term, and the top category term. **Executing it would have negatived 41 conversions and ₹1,13,234 — 25% of all Google-paid revenue.** Meet asked for it to be executed. It was caught in pre-flight, minutes before the write.

   **The only safe method:** pull every row with **no conversions filter**, aggregate per search term in code, then select terms whose **TOTAL** 30-day conversions == 0. Nine terms clear that bar (~₹1,154) — not thirty-four (₹2,709).

   **And a hard rule on top of the method: never negative a brand term. Ever.** If brand looks like a zero, the pull is wrong, not the brand.

   **🚨 2026-07-27 addendum: the same discipline caught a second, subtler failure mode this cycle.** `ear safe headphones` was correctly zero-conversion when GA-015 was drafted (2026-07-23, ₹302.04). By 2026-07-27 it shows **0.20 conversions** in a fresh aggregate — it converted *after* the batch was drafted but *before* it was ever executed (execution is still unconfirmed / blocked). **A negative-keyword batch is not "safe forever" just because it was safe when drafted — re-verify against a fresh aggregate immediately before every execution, not just at draft time.** GA-020 supersedes GA-015 for this reason. **Reconfirmed 2026-08-03: `ear safe headphones` was correctly re-excluded again this cycle (still converting, 0.20+ conv carried over) — GA-023 re-verified against the fresh 4 Jul–2 Aug aggregate before drafting, per this rule.** **Reconfirmed again 2026-08-10: the bare term `ear safe` (distinct from `ear safe headphones`) shows 3 conversions/₹144.40 this window and is correctly excluded from GA-033.** **Reconfirmed a further time 2026-08-13: bare `ear safe` now shows 3 conversions/₹6,647.10 this window (up sharply) — still correctly excluded.** **🚨 NEW variant caught 2026-08-17: the same discipline this cycle flagged `safe buds` (₹79.89, 0 conv) — technically clears the zero-conv bar, but it's a bare-name query for our own WeHear SafeBuds product line, not a generic category term. Held out of GA-040 on the same caution as brand-adjacent terms, even without a proven conversion history yet — the rule generalizes beyond "has this literally converted before" to "could this plausibly be a branded/product query."** **Reconfirmed 2026-08-20: `safe buds` still held out (₹78.64, 0 conv this cycle) from GA-045, same judgment class. And a NEW, more consequential variant surfaced this cycle on a different dimension — see finding 65: a device slice (tablet, not a search term) that had read zero-conv for 2 straight cycles converted this cycle. The "don't cut something that's converted even once" rule turns out to apply beyond search terms — to devices, SKUs, and any other cut candidate.** **Reconfirmed 2026-08-27: the full `safe buds` family (`safe buds`, `ai safe buds`, `ear safe buds`, `safe buds price`, `safebuds` — ₹99.30 combined) again correctly held out of GA-058.**

1. **The platform overclaims by ~49%.** 30d to 2026-07-12: Google claims **13.93×** / 231.7 conversions; GA4 `google/cpc` credits **9.38×** / 133 transactions. Every scale decision is made on the GA4 number. *(Consistent with `GoogleAds_Measurement_Incrementality_Plan.md`: Google + Meta together claim ~102% of all revenue.)* **Reconfirmed 2026-07-16** on an overlapping 30d window (16 Jun–15 Jul): TRUE ROAS 9.44×, platform 13.73×, overclaim 45.5% — directionally consistent. **Reconfirmed again 2026-07-27 (first fully direct-API sanity anchor re-run, 13 Jun–12 Jul): TRUE ROAS 9.3787× — exact match to the published 9.38× anchor — overclaim 54.2%, still in-band.** **Reconfirmed a 3rd time 2026-08-03, same anchor window, same pipeline: TRUE ROAS 9.3787×, overclaim 54.2% — bit-for-bit identical to the 07-27 read.** **Reconfirmed a 4th time 2026-08-10, same anchor window: TRUE ROAS 9.3787× again, 6th consecutive reproduction.** **Reconfirmed a 5th time 2026-08-13, same anchor window: TRUE ROAS 9.3787× again, 7th consecutive reproduction.** **Reconfirmed an 8th consecutive time 2026-08-17, same anchor window: TRUE ROAS 9.3787× exactly, overclaim 54.2% — the pipeline is unambiguously sound. This cycle's own live windows read materially worse than the anchor: 30d (18 Jul–16 Aug) TRUE ROAS 7.73×/overclaim 77.2%; last-7d (10–16 Aug, a genuinely stable, non-transition window) TRUE ROAS 7.31×/overclaim 79.3% — the highest *stable-window* overclaim reading on record, above the 65% band ceiling, on the exact day (17 Aug) the account needed it fixed.** **Reconfirmed a 9th consecutive time 2026-08-20, same anchor window: TRUE ROAS 9.3787× exactly, overclaim 54.2% — pipeline sound, 3 days past the 17 Aug deadline. This cycle's live windows read worse again, not better: 30d (21 Jul–19 Aug) TRUE ROAS 7.34×/overclaim 80.9%; last-7d (13–19 Aug, stable window) TRUE ROAS 6.94×/overclaim 77.3% — the lowest last-7d TRUE ROAS on record, and P0-1 remains not started.** **Reconfirmed a 10th consecutive time 2026-08-27, same anchor window: TRUE ROAS 9.3787× exactly, overclaim 54.2% — pipeline sound, 10 days past the deadline. This cycle's live windows: 30d clean (27 Jul–25 Aug) TRUE ROAS 6.88×/overclaim 104.0%; last-7d clean (19–25 Aug) TRUE ROAS 6.22×/overclaim 94.7% — overclaim eased slightly from last cycle's 30d 108.7% but remains far outside the 35–65% band, and TRUE ROAS clean-7d continues a 3rd straight cycle of decline (6.94×→6.56×→6.22×), now only 0.22× above the 6.0 floor.**

1b. **🚨 NEW 2026-07-16 — the overclaim ratio itself can signal a data-integrity break, not an attribution improvement.** The last-7d window (09–15 Jul) showed overclaim collapsing to 6.6% (platform 6.68× vs TRUE 6.26×) — wildly outside the normal 35–65% band. This is **not** evidence of better measurement; that window contains the known missing-spend-day gap (no Google Ads row for 07-09, ₹1.29 for 07-10), which understates spend on both sides of the ratio unevenly. **A missing-data gap can produce an overclaim reading that looks like a fix but is actually contamination.** Always check for known gaps before reading an out-of-band overclaim as a signal. **Reconfirmed a 2nd time 2026-07-27, a 3rd time 2026-08-03 (07-26 backfill), a 4th time 2026-08-10 (pause), a 5th time 2026-08-13 (reactivation phase).** **🚨 A 6th instance, 2026-08-17: the prior-7d window (03–09 Aug) reads 237.6% overclaim — wildly out-of-band — because it straddles the exact pause transition (Search-26 paused 08-04, SC-All Range went dark 08-05 mid-window). The last-7d window (10–16 Aug), by contrast, is now genuinely stable (no status change after day 1) and its 79.3% overclaim is NOT explained by this pattern — it is a real, elevated reading that needs to be read as a live measurement problem, not dismissed as transition noise.** **🚨 A 7th instance, 2026-08-20: the prior-7d window (6–12 Aug) reads 162.3% overclaim, again straddling the `SC - All Range` reactivation.** **🚨 An 8th instance, 2026-08-24: same-day GA4 processing lag on 2026-08-23 (a Sunday) made raw last-7d (17–23 Aug) look like a 5.30× floor breach; the clean window (16–22 Aug) read 6.56×. Escalated as GA-056, not actioned.** **🚨 A 9th instance, 2026-08-27: 2026-08-23 has since fully backfilled (₹16,124.15 revenue/6 txn), confirming GA-056's diagnosis and closing it as CONFIRMED processing lag, not a real breach — see finding 69. But a NEW, near-identical gap appeared on the newest pulled day, 2026-08-26 (a Wednesday, not a Sunday) — see finding 70/GA-063, which reframes the "Sunday" theory as a probable pull-cycle-timing confound instead of a real weekday effect.**

2. **Doubling the budget produced negative marginal return.** 11–12 Jul 2026: ₹1,801/day → ₹3,589/day. TRUE ROAS **11.50× → 6.20×**. The incremental **+₹1,788/day of spend bought +₹1,543/day of revenue — marginal ROAS 0.86×.** Sessions rose **+23%** (397 → 488/day) while revenue per session collapsed. **We bought traffic, not customers.**

3. **…and that move also triggered a learning phase, which is the deeper lesson.** Guide Ch 10: a budget change **>20% in either direction** resets Smart Bidding into a 1–2 week learning phase, during which volatility is *expected*. We changed by ~100%. So the 6.20× is **contaminated**. **This is exactly why the ≤20% ratchet exists.** **2026-08-17 update: `SC - All Range`'s reactivation completed its first full 7-day window (10–16 Aug) — see finding 55/GA-041, CONFIRMED.** **2026-08-27 note: no new status-transition window this cycle — all three live campaigns held steady status throughout (SC-All Range ENABLED, Search-26 PAUSED, SafeBuds-Search ENABLED), so this cycle's windows are clean of transition contamination for this specific reason (see finding 1b for the *different* contamination this cycle carries — the same-day GA4 processing lag, not a status change).**

4. **₹1,800/day is the proven operating point.** wk2 ₹1,701/day → 11.22×; wk3 ₹1,801/day → 11.50×. **2026-08-20: blended account spend across the clean last-7d window (13–19 Aug) is ₹2,262.55/day — ABOVE the historical ₹1,800/day operating point, driven by `SC - All Range`'s continued ramp post-reactivation, still with `Search-26` fully dark.** **2026-08-27: blended spend across the clean last-7d window (19–25 Aug) is ₹1,628.23/day (₹11,397.59/7) — back BELOW the ₹1,800/day point, and prior-7d (12–18 Aug) was ₹2,151.68/day — spend is now falling week over week even as `Search-26` remains dark, not simply holding at the reactivation-driven high. This coincides with — and likely at least partly explains — the TRUE ROAS clean-7d decline in finding 1 (less spend concentrated toward the account's highest-intent traffic, all else equal, would not by itself explain a *falling* ROAS, so this needs to be watched, not assumed benign).**

5. **Lost impression share is RANK, not budget — but this needs re-confirming per campaign every cycle, not assumed.** **2026-08-20: `SC - All Range` 75.3% Budget-lost / 8.6% Rank-lost (consistent, still the most Budget-limited). `Search-26` (still paused) 77.0% Budget-lost, informational only. `SafeBuds-Search` 55.3% Budget-lost / 35.9% Rank-lost — Rank-lost share climbed again as the campaign continues to scale.** **2026-08-27: `SC - All Range` 80.6% Budget-lost / 6.4% Rank-lost (still the most Budget-limited, consistent). `Search-26` (still paused) 83.3% Budget-lost, informational only. `SafeBuds-Search` 61.7% Budget-lost / 31.3% Rank-lost — Rank-lost share eased slightly from 35.9% but remains the most Rank-lost-leaning of the three live campaigns.**

6. **High CTR with zero conversions is a landing-page problem.** `Search | SafeBuds | OWS + Conquest`: ₹1,011 spent, **12.57% CTR**, **0 conversions.** Never answer this with a bid change. **🚨 Confirmed and fully diagnosed 2026-08-04 (GA-029)** — the live successor's BROAD-match mistake is independently reconfirmed AGAIN 2026-08-27 at fresh keyword-level granularity: still 55/84 BROAD, now 71.0% of keyword spend (₹9,799.69/₹13,795.20) — see finding 68/GA-059, superseding GA-047/GA-052.

7. **A missing date in a connector pull is not a zero.** Google Ads returned **no row at all** for 2026-07-09 and **₹1.29** for 2026-07-10. **Reconfirmed 11 times through 2026-08-24.** **2026-08-27 update: no new missing-Ads-row day this cycle. The live gap this cycle is on the GA4 side, not the Ads side — see finding 1b's 9th instance (2026-08-26 same-day processing lag).**

## NEW FINDINGS — 2026-08-27 (Thursday follow-up, window 28 Jul–26 Aug, direct-API — 11th direct-API cycle)

68. **`SafeBuds-Search-28th July'26`'s BROAD-match problem re-verified at keyword level a 6th time — structure unchanged, still the account's largest starved-conquest problem.** 55/84 keywords still BROAD, now carrying ₹9,799.69 (71.0%) of the campaign's ₹13,795.20 keyword-level spend and 61.52 of its conversions. EXACT (its own best-performing tier) holds only 13.8% of spend. The fix has now gone unexecuted for 23+ days across 6 escalation cycles (GA-029→GA-039→GA-042→GA-047→GA-052→**GA-059**).

69. **GA-056 CLOSED as CONFIRMED processing lag, not a real floor breach.** 2026-08-23 (previously reading ₹0 GA4 revenue on real ₹1,367.01 spend, 309 sessions) has fully backfilled to **₹16,124.15 revenue / 6 transactions**. This validates last cycle's diagnosis and the discipline of re-pulling within 24–48h rather than actioning a rollback on a single contaminated reading.

70. **🚨 A near-identical gap appeared on this cycle's own newest day — but on a Wednesday, not a Sunday — reframing SH-GA-25.** 2026-08-26 shows ₹1,561.77 real spend, 160 real sessions, and **₹0 GA4 attributed revenue** — the same shape as the three prior "Sunday" incidents (08-02, 08-16, 08-23). Because every Monday-teardown's "yesterday" is *necessarily* a Sunday, and this Thursday-teardown's "yesterday" (Wednesday) shows the identical artifact, **the simpler explanation — the most-recently-pulled calendar day is often provisionally under-attributed in GA4, regardless of weekday — now has direct disconfirming evidence against the day-of-week-specific theory.** Filed as GA-063, refining SH-GA-25. Not yet closed; needs one more cycle's confirmation that 08-26 backfills the same way 08-23 did.

71. **GA-031 (Comm 2.0 Shopping feed-title consolidation) CONFIRMED EXECUTED after 9+ cycles unresolved.** The SKU pull now returns exactly 3 rows for `SC - All Range` — SafeBuds Black, a single Comm 2.0 title, and EarSafe Lite — reconciling exactly to the campaign's ₹28,743.84 30d spend. The long-standing 2-variant split is gone. This is the first confirmed execution of any queued Google Ads fix since tracking began, and it proves the write-path is not universally broken — sharpening finding 0c's open question about why the negative-keyword batches specifically remain stuck.

72. **The zero-conversion search-term waste batch held essentially flat this cycle, still no confirmed execution.** GA-050's ₹13,399.93/906 terms (2026-08-24) refreshed to **₹13,202.21/881 terms** on an equally-unfiltered pull — a ~1.5% decline, not the collapse-toward-₹0 execution would produce. Refreshed as **GA-058**, 11th cycle straight with no confirmed execution.

73. **AI Max's zero-conversion tail reversed direction for the first time in 4 cycles.** ₹773.12→₹836.26→₹1,186.08 (3 straight rises) → **₹720.22** this cycle, even as term count rose (25→35). GA-013 (approved 2026-08-04) remains unexecuted; refreshed as **GA-065**.

74. **SH-GA-24 (tablet volatility) and SH-GA-20 (`open ear headphones` recovery) both remain stable on their 3rd/4th confirming read, both closed, no new action.** SafeBuds-Search tablet: 2 conv/₹5,085.41 — identical figure to the 2026-08-24 read, suggesting the same underlying conversions are still inside the rolling 30-day window rather than fresh weekly activity; still correctly NOT excluded. `open ear headphones`: 2.5 conv/₹6,327.60 — also identical to 2026-08-24's figure, same caveat. Neither finding is weakened by the repeat, but neither is it fresh independent evidence — worth a genuinely non-overlapping window check in a future cycle.

75. **TRUE ROAS clean-trend is now the closest to the 6.0 floor since direct-API tracking began, though still comfortably above it.** Clean last-7d: 6.94× (13–19 Aug) → 6.56× (16–22 Aug) → **6.22× (19–25 Aug, this cycle)** — a 3rd straight cycle of decline, only 0.22× above the floor. No rollback is warranted (the floor has not been breached, and the raw reading that *would* suggest a breach is contaminated by the same known processing-lag artifact as GA-056). Filed as **GA-064** — reaffirm the hold, watch the trend, escalate immediately if the next clean read drops below 6.0×.

## DEEP-DIVE FINDINGS — 2026-07-13 (first expert teardown, 30d to 12 Jul)

> These came from the keyword/search-term/SKU/device/IS pulls, not the campaign roll-up. **They are the reason the agent is an operator, not a reporter** — none of this is visible at campaign level.
> ⚠️ All sub-account ROAS below is **platform-claimed** (inflated ~49–104% depending on cycle). Use it to **rank**, never as an absolute.

8. **🚨 RETRACTED — "The Quality Score scandal" was FALSE. It was a data artifact.** Real QS is 7–8, not summed values in the hundreds. **Reconfirmed a 10th consecutive time 2026-08-27 (1,797 keyword rows, 28 Jul–26 Aug): max QS observed = 10 (0 rows >10, bug check passed). Spot-check: `ng earsafe`=10, `bone conduction headphones`=6, `open ear headphones`=7, `open ear wireless headphones`=8 — all good to excellent. Only two keywords carry spend at QS≤4, both on `SafeBuds-Search` (`open earbuds` QS4 ₹116.90, `earbuds with ear hooks` QS1 ₹12.90), plus one new tiny one on the newly-discovered `Pulse Search Campaign` (`fitness tracker` QS4, ₹1.74) — still not a QS "scandal," bundled into the BROAD-match structural fix (GA-059).**

9. **⭐ AI Max is ALREADY ON** (`Search-26 May 25`). It is matching junk. The job is to rein it in, not "enable" it. **See finding 73 for the current-cycle update — the zero-conv tail reversed direction for the first time in 4 cycles (₹1,186.08→₹720.22), but is still nonzero and GA-013 is still unexecuted.**

10. **🚨 RETRACTED — "Shopping SKU mix is upside-down" was FALSE.** Third Windsor filter artifact of the day, caught by Meet not the agent. The mix has since rotated through **every** best/worst position across many consecutive cycles — see finding 60. **Do not resurrect any Pro- or Comm-2.0-focused framing in either direction.** **2026-08-27 note: the SKU count itself changed this cycle (finding 71) — Comm 2.0's title split is now consolidated — so any future mix-share comparison should treat this cycle as a structural break, not directly comparable to prior cycles' Comm 2.0 shares.**

11. **Tablet is a free kill — but narrowed, per-campaign, not a blanket truth.** `SC - All Range` tablet: ₹139.59, 0 conv this cycle (small, historically volatile — never treat a single zero-conv cycle as proof). `Search-26` tablet still dead (₹33.09, 0 conv, campaign paused anyway). `SafeBuds-Search` tablet **converts, 3rd straight cycle now** (2 conv/₹5,085.41, same figure as last cycle) — confirmed NOT a stable zero, do not exclude (GA-053/finding 74). **As of 2026-08-27, there is no campaign left in the account where tablet is currently a clean, uncontested free kill with live spend.**

12. **We bid against ourselves on brand — CLOSED PERMANENTLY 2026-07-23 as GA-018/SH-GA-10.** Stays closed through 2026-08-27. Brand spend this cycle confirmed present and converting well (`ng earsafe`: ₹763.07/29.46conv; `ng earsafe pro`: ₹1,071.27/10.73conv; `earsafe`: ₹1,069.53/7.25conv) — informational only, not re-opened.

13. **Conquest works and is starved.** `wehear` family and `poly voyager`/`shokz` continue to show strong returns on trivial spend (this cycle: `wehear` ₹357.32/5.00conv, `wehear earbuds` ₹179.64/1.00conv, `ng x wehear` ₹147.04/1.09conv). Still wildcard-protected, still never negatived, still deferred (P2-1, blocked by `Search-26` remaining paused).

14. **Zero-conversion category search-term waste — current live figure.** GA-012 (₹4,040.48) → GA-015 (₹17,784.14) → GA-020 (₹18,253.45) → GA-023 (₹17,629.87) → GA-030 (₹16,708.95) → GA-033 (₹15,610.70) → GA-035 (₹14,593.55) → GA-040 (₹12,441.81) → GA-045 (₹14,325.29) → GA-050 (₹13,399.93) → now **GA-058 (₹13,202.21, 2026-08-27)** — see finding 0c/72. The total has drifted within a ₹12,400–18,250 band for 11 cycles; it has never collapsed toward ₹0, which is what execution would look like.

15. **Windsor field constraint:** `quality_score` **cannot** be queried together with impression-share fields (Google API restriction). Confirmed still true on the direct Google Ads API every cycle since 2026-07-27, including 2026-08-27.

16. **⭐ Word-boundary regex is mandatory for any brand/negative-keyword filter, never plain substring `in`.** Applied again 2026-08-27 for GA-058 — same regex, same clean release of generic terms, same clean capture of the full brand family as brand-protected, the full `safe buds` product-line family (5 variants, ₹99.30 combined) again manually held out on judgment grounds.

## NEW FINDINGS — 2026-07-16 (Thursday follow-up, window 16 Jun–15 Jul)

17. See item 11 above (tablet narrowed).

18. **Marginal ROAS on the 11–12 Jul budget spike — CLOSED 2026-07-23 at −3.64× (fully matured 10-day read).** Reaffirmed every cycle since, including 2026-08-27: no new valid natural spend variation (this cycle's naive last7-vs-prior7 delta, 12.9×, is not valid evidence — both spend and revenue *fell*, not a deliberate spend-increase test). Gate stays CLOSED on the standing −3.64× finding.

19. **`SC - All Range` remains Lost-Budget, not Lost-Rank — reconfirmed every cycle, including 2026-08-27 (80.6% Budget-lost vs 6.4% Rank-lost).** `Search-26` (still paused) reads 83.3% Budget-lost, informational only. `SafeBuds-Search` reads 61.7% Budget-lost / 31.3% Rank-lost. No new action — the marginal-ROAS gate still governs, and it's closed.

20. See item 12 above (brand comparison).

## NEW FINDINGS — 2026-07-23 (Thursday follow-up, window 23 Jun–22 Jul, direct-API pulls — Windsor fully retired)

21. **⭐ Migration to direct Google Ads + GA4 APIs complete and validated.** Sanity anchor reproduced **exactly 9.3787×** every cycle since, **10 consecutive reproductions through 2026-08-27.**

22. **🚨 The ROAS-direction bug — caught in-session, before publishing.** TRUE ROAS = revenue ÷ spend, never the reverse. **Institutional rule: any TRUE ROAS reading under ~2× on this account is itself a red flag — check the division direction before trusting it. Reapplied and caught again 2026-08-27 — see finding 0b.**

23. **⭐ P0-3 / SH-GA-7 (marginal ROAS re-read) is now CLOSED on a fully-matured read: −3.64×.** Reaffirmed every cycle since 2026-07-23 through 2026-08-27 — no genuine natural spend variation has occurred.

24. **🚨 GA-011's execution-failure finding — RESOLVED (as moot) 2026-08-03.** The write-path question now rides on whether the zero-conv batch shows any spend reduction on the next read — still unresolved as of 2026-08-27, now 11 cycles running with no evidence of execution on that specific action type (though GA-031's feed-title fix DID execute — see finding 71 — proving the write path is not universally blocked).

25. **Zero-spend/anomaly day history — see finding 7 for the full, updated history.** No new missing-Ads-row day this cycle; the live gap is GA4-side same-day processing lag (finding 1b, 9th instance).

26. **SH-GA-10 (brand cannibalization) — REJECTED, CLOSED PERMANENTLY 2026-07-23 as GA-018.** Not re-examined since; stays closed through 2026-08-27.

27. **Search-term-view does not fully cover Shopping campaign spend — a real, disclosed, structural limitation.** This cycle (28 Jul–26 Aug): ₹31,066.74 of ₹45,090.67 (₹14,023.93/31.1% gap) — consistent with the standing ~28–31% structural gap.

28. **The true scale of zero-conversion search-term waste is ~3.5–4.4× larger than the original naive estimate once genuinely unfiltered** — see finding 14 for the current, 11th-cycle figure.

## NEW FINDINGS — 2026-07-27 (Monday teardown, window 27 Jun–26 Jul, direct-API — first fully curl-based Ads client)

29. **Shopping SKU mix has flipped repeatedly** — see finding 10/60 for the full multi-cycle history. Do not resurrect any Pro- or Comm-2.0-focused framing.

30. **AI Max leakage grew, then reversed, then rose again, then reversed again — see finding 9/73 for the full history.**

31. **A drafted-but-unexecuted negative-keyword batch is not "safe forever" — it must be re-verified immediately before push, not just at draft time.** Re-applied every cycle since, including 2026-08-27 for GA-058 (full `safe buds` product-family re-verified and correctly held out again; no new brand/conquest term slipped through).

32. **The GA-016 write-path-failure test has a blind spot: single-click terms can't distinguish "broken" from "no new activity." RESOLVED as moot 2026-08-03.**

## NEW FINDINGS — 2026-08-03 (Monday teardown, window 4 Jul–2 Aug, direct-API — 4th direct-API cycle)

33. **A new, previously-unlogged campaign is live: `SafeBuds-Search-28th July'26` (24068804553).** See finding 40 for its confirmed, sustained clearance of the ROAS floor through 2026-08-27, now consistently 18%+ of account spend. **2026-08-27: history repeated — ANOTHER new, previously-unlogged campaign appeared this cycle, `Pulse Search Campaign | 24 Aug 26` (24169334838), `ENABLED`, 3 days old. See finding 76/GA-060 — held to the same "too young for a verdict" discipline this campaign itself once needed.**

34. **All three active campaigns were Budget-impression-share-limited as of 2026-08-03 — a genuine structural shift, not a green light.** See institutional pattern 5's full update through 2026-08-27.

35. **The zero-conversion search-term waste total stopped growing and started holding steady, then drifting down, then grew back, then flattened — see finding 14 for the now 11-cycle-long update.**

## AD-HOC FINDINGS — 2026-08-04 (Slack request: audit `Search | SafeBuds | OWS + Conquest`, keywords to add)

36. **⭐ P0-4 fully diagnosed. There is no keyword to add — every search term the campaign ever captured converted at zero.** **The live successor's BROAD-match leak (SH-GA-18) is reconfirmed at fresh keyword-level granularity a 6th time 2026-08-27 — see finding 68/GA-059, superseding GA-029/GA-039/GA-042/GA-047/GA-052.**

## NEW FINDINGS — 2026-08-06 (Thursday follow-up, window 7 Jul–5 Aug, direct-API — 5th direct-API cycle)

37. **GA-023 still not executed — refreshed repeatedly, now GA-058 (2026-08-27).**

38. **`open ear headphones` reads 0 conversions despite a strong history and QS 7 — CLOSED 2026-08-24 as CONFIRMED recovered (GA-054/SH-GA-20). Reconfirmed stable again 2026-08-27 (2.5 conv/₹6,327.60, identical figure) — see finding 74.**

39. **The AI Max "total volume" figure (GA-025) does not reproduce on an identical re-pull — CLOSED 2026-08-13 as an aggregation-grain mismatch, not a live bug. Stays closed.**

40. **SH-GA-17 (new `SafeBuds-Search-28th July'26` campaign) CONFIRMED on its first fully-matured read, and reconfirmed every cycle since through 2026-08-27 (15.31× platform, 2026-08-27, consistently 18%+ of account spend).**

41. **SH-GA-18 (BROAD→PHRASE/EXACT fix on the same campaign) confirmed NOT executed — reconfirmed at fresh keyword-level granularity a 6th time 2026-08-27, re-escalated as GA-059.**

42. **Comm 2.0's Shopping feed title split into two variants — CLOSED 2026-08-27 as CONFIRMED EXECUTED. See finding 71/GA-031/GA-055/GA-062.**

43. **2026-08-02 remains a confirmed standing zero-activity day; 08-05 remains the confirmed GA-034 pause day — both stable, non-mysterious. 2026-08-23's gap is now also confirmed and closed (finding 69). 2026-08-26 is a new, still-open instance of the same processing-lag shape (finding 70).**

## AD-HOC FINDING — 2026-08-17 (SH-GA-21 read-plan maturation)

44. **See finding 55 — SH-GA-21 CONFIRMED on its exact scheduled read date.** This is the first hypothesis in the backlog to go from "open" to "confirmed" purely by the calendar catching up to a read plan set two cycles earlier, without any new action being taken in between.

## NEW FINDINGS — 2026-08-17 (Monday teardown, window 18 Jul–16 Aug, direct-API — 8th direct-API cycle)

55. **🚨 THE HEADLINE — SH-GA-21 CONFIRMED, exactly on its own read-plan date.** `SC - All Range`'s reactivation (2026-08-10, a ₹0-ratchet status toggle) completed its first full, clean 7-day window this cycle (10–16 Aug). Account GA4 google/cpc revenue/day averaged **₹11,772.36** vs the ₹14,300.85 pre-pause baseline — **82.3% of baseline**. Filed as **GA-041** (informational close-out). GA-034's separate question — *why* was either campaign's status changed in the first place — remains open through 2026-08-27.

56. **The overclaim reading history — see finding 1 for the full, current update through 2026-08-27.**

57. **`SafeBuds-Search-28th July'26`'s BROAD-match problem — see finding 68 for the 2026-08-27 update.**

58. **`open ear headphones` — see finding 74 for the 2026-08-27 update (still stable, closed).**

59. **AI Max's zero-conversion tail — see finding 73 for the 2026-08-27 update (reversed direction for the first time in 4 cycles).**

60. **Shopping SKU mix rotated an 8th time — same lesson, same non-action, until this cycle.** **2026-08-27: the SKU count itself changed — Comm 2.0's split consolidated to a single title (finding 71) — the first structural (not just share-rotation) change to this breakdown since tracking began.** SC-All-Range 30d: SafeBuds Black ₹9,477.59 (33.0%, 16.84×), Comm 2.0 (single title) ₹13,962.72 (48.6%, 11.89×), EarSafe Lite ₹5,303.53 (18.4%, 13.20×). Reconciled exactly to ₹28,743.84.

## REJECTED / DEAD ENDS

- **Candidate for rejection, pending the 19 Jul read:** *"Google Ads has headroom at ₹3,600/day."* **CLOSED PERMANENTLY 2026-07-23 at −3.64× (GA-019). Reaffirmed every cycle since through 2026-08-27.**
- *"Tablet is a blanket free kill, all campaigns."* **Superseded 2026-07-16 — narrowed, per-campaign.** As of 2026-08-27: no campaign has a clean, live, uncontested tablet free kill (`SafeBuds-Search` now confirms converting 3 straight cycles).
- **GA-005 / SH-GA-10 — "Brand de-duplication has a stable, actionable gap."** **REJECTED, closed permanently 2026-07-23.** Stays closed through 2026-08-27.
- **"Google Ads has headroom above ~₹1,800/day."** **REJECTED, closed 2026-07-23.** Stays closed through 2026-08-27 — no genuine natural variation has occurred; this cycle's spend actually *fell* week over week (finding 4).
- **"Shopping SKU mix is upside-down, Pro is the problem."** *(old GA-004)* **Stays retracted/superseded — see finding 60.** Do not resurrect any Pro- or Comm-2.0-focused framing in either direction.
- **"`Search \| SafeBuds \| OWS + Conquest` needs more/better keywords."** *(P0-4)* **REJECTED — see finding 36/GA-029.** Unchanged 2026-08-27.
- **"`open ear headphones`'s zero-conversion reading proves demand has collapsed."** **REJECTED/CLOSED 2026-08-24 as GA-054 — confirmed recovered.** Stable through 2026-08-27.
- **"`SafeBuds-Search`'s TABLET slice is a stable, safe-to-cut zero."** **REJECTED, CLOSED 2026-08-24 as GA-053 — confirmed NOT a stable zero.** Stable through 2026-08-27 (3rd straight converting cycle).
- **🆕 "The 08-02/08-16/08-23 anomaly is specifically a Sunday effect."** *(implicit in GA-057/SH-GA-25)* **WEAKENED 2026-08-27, not yet fully rejected** — 2026-08-26 (a Wednesday) shows the identical shape, suggesting a pull-cycle-timing confound (most-recent-day-is-often-incomplete) rather than a genuine day-of-week effect. See GA-063. One more confirming cycle needed before fully superseding SH-GA-25.

## SCALE HYPOTHESIS BACKLOG (per COMPANY_STATE §5.5 — test → validate → scale)

| # | Hypothesis (metric + threshold) | Test (smallest move) | Status | Linked queue |
|---|---|---|---|---|
| **SH-GA-13** | Cutting zero-return spend at flat budget lifts TRUE ROAS toward the 9–11× band within one attribution window | Claimed shipped 2026-07-14. | 🔴 **BLOCKED — confirm execution first.** Superseded in scale by every batch since, now GA-058. | GA-011 |
| **SH-GA-14** | A `Search-26`-only tablet exclusion recovers spend without forfeiting `SC - All Range`'s tablet revenue | One device bid modifier, Search-26 only | 🟡 **OPEN, moot while `Search-26` stays PAUSED as of 2026-08-27 (23+ days dark).** | GA-014, GA-024 |
| **SH-GA-1** | Fixing the duplicate conversion action closes the overclaim to **<20%** | P0-1 — deduplicate, put the Shopify-pixel action in the bidding goal | ⬜ **OPEN — still not started as of 2026-08-27, 10 days past the 17 Aug deadline. Overclaim eased slightly this cycle (108.7%→~104% 30d) but remains far above the 54.2% anchor and the 65% band ceiling.** | — |
| **SH-GA-2** | With corrected values, a tROAS re-baselined to ~7.0–8.0 holds TRUE ROAS ≥ 9.0 *and* survives the 17 Aug change | P0-2 — walk the target in ≤15%/week steps | ⬜ BLOCKED by SH-GA-1 — the bidding change is live, unresolved. | — |
| **SH-GA-3** | **AI Max** delivers the guide's **+34% CVR** on `Search-26 May 25` | P2-1 — one-click experiment | ⬜ BLOCKED by SH-GA-1, and `Search-26` remains PAUSED | — |
| **SH-GA-4** | Raising Ad Strength to Excellent recovers Lost-IS-Rank **without** extra budget | P1-2 — 8–10 headlines / 3–4 descriptions per ad group | ⬜ OPEN — QS is already 6–10 on the tracked terms (reconfirmed 2026-08-27, 10th cycle); Rank-lost remains secondary to Budget-lost on `SC - All Range`, still meaningful on `SafeBuds-Search` (31.3%) | — |
| **SH-GA-5** | Rewriting Shopping feed titles to `[Brand]+[Type]+[Feature]+[Variant]` lifts `SC - All Range` TRUE ROAS above 11.5× | P1-3 — Merchant Center feed-rule A/B | 🟢 **Comm 2.0's title fix (SH-GA-16) EXECUTED 2026-08-27 (finding 71) — read its ROAS impact over the next 2–3 cycles before declaring this hypothesis validated or not.** | — |
| **SH-GA-6** | **Enhanced Conversions** recovers a measurable share of the platform-vs-GA4 gap | P1-1 — enable; impact visible ~30 days after | ⬜ OPEN | — |
| **SH-GA-7** | The account has **any** budget headroom above ₹1,800/day at marginal ROAS ≥ 6.0 | +20% step, held 7 days, then read marginal | 🔴 **CLOSED — REJECTED 2026-07-23**, reaffirmed every cycle since through 2026-08-27. | GA-019 |
| **SH-GA-9** | Shopping is Lost-Budget not Lost-Rank — next budget dollar, once gates clear, should target Shopping specifically | Confirm on next IS pull; hold until marginal ROAS ≥ 6.0 | 🟢 **Reconfirmed 2026-08-27 (80.6% Budget-lost) — the marginal-ROAS gate still governs, and it's closed.** | — |
| **SH-GA-10** | A fixed brand-term whitelist shows a stable, actionable ROAS gap between Shopping and Search-26 brand traffic | Re-pull with same whitelist each cycle | 🔴 **CLOSED — REJECTED 2026-07-23.** Stays closed through 2026-08-27. | GA-018 |
| **SH-GA-15** | Three approved negative-keyword batches show zero execution after 10+ days — the block is structural (write path), not a stale read | Pilot: push ONE verified zero-conv, non-brand term as an EXACT negative | 🟡 **OPEN — 11 cycles running with no confirmed execution of any negative-keyword batch. NOTE 2026-08-27: GA-031 (a feed-title edit) DID execute this cycle, so the write path is not universally blocked — the question is now specifically about the negative-keyword action type.** | GA-015, GA-016, GA-023, GA-030, GA-033, GA-035, GA-040, GA-045, GA-050, GA-058 |
| **SH-GA-16** | Rewriting Comm 2.0's Shopping feed title lifts its platform ROAS toward Black's | One Merchant Center feed-rule edit, one SKU, ₹0 spend impact | ✅ **EXECUTED 2026-08-27 — see finding 71/GA-062. Read plan: track Comm 2.0's platform ROAS (11.89× this cycle) over the next 2–3 cycles to see if it moves toward Black's (16.84×).** | GA-020, GA-023, GA-031, GA-062 |
| **SH-GA-17** | The `SafeBuds-Search-28th July'26` campaign sustains platform ROAS ≥ 6.0× | Observe only, no budget/bid change | ✅ **CONFIRMED, reconfirmed every cycle through 2026-08-27 (15.31× platform, consistently 18%+ of account spend).** | GA-026 |
| **SH-GA-18** | Converting the successor campaign's BROAD keywords to PHRASE/EXACT + adding brand negatives frees its starved conquest EXACT keywords | One keyword-level match-type edit + campaign-level brand negatives | 🟡 **OPEN — still NOT executed as of 2026-08-27. Re-escalated a 6th time as GA-059 (55/84 BROAD, 71.0% of keyword spend).** | GA-029, GA-039, GA-042, GA-047, GA-052, GA-059 |
| **SH-GA-19** | The AI Max total-volume metric is internally consistent once re-derived step-by-step from raw rows | ₹0 methodology audit | ✅ **CLOSED 2026-08-13. Stays closed.** | GA-032, GA-038 |
| **SH-GA-20** | `open ear headphones`'s 0-conversion reading is a conversion-lag/tracking artifact, not a real demand drop | ₹0, observation only | ✅ **CLOSED 2026-08-24 as CONFIRMED recovered (GA-054). Reconfirmed stable 2026-08-27 (2.5 conv/₹6,327.60, identical figure — likely the same underlying conversions still inside the rolling window).** | GA-030, GA-033, GA-035, GA-036, GA-054 |
| **SH-GA-21** | If the `SC - All Range`/`Search-26` pause is confirmed accidental, reactivating both at their existing budgets restores GA4 revenue/day to within 20% of the pre-pause baseline within one 7-day window, with no marginal-ROAS penalty | Resume both campaigns, change nothing else (₹0 ratchet step) | ✅ **CONFIRMED 2026-08-17 — `SC - All Range` alone (Search-26 still paused) restored revenue/day to 82.3% of baseline.** Stays closed. | GA-034, GA-041 |
| **SH-GA-22** | Excluding `SafeBuds-Search-28th July'26`'s TABLET slice at zero learning-phase cost will not measurably change the campaign's platform ROAS | One device-bid exclusion, ~₹9/day at risk | 🔴 **REJECTED 2026-08-20 — the premise (tablet is a stable zero) was false.** Superseded by SH-GA-24's two-cycle confirmation rule, which itself is now closed (see SH-GA-24 row). | GA-037, GA-046 |
| **SH-GA-23** | Once the Search-26 pause cause is confirmed benign, reactivating it (status toggle, ₹0 ratchet cost) lifts account GA4 revenue/day further toward the full 3-campaign pre-pause baseline within 7 days, without marginal ROAS falling below 6.0× | Status toggle only, no budget/bid edit — contingent on Meet confirming cause first | 🟡 **OPEN, gated on GA-043 (cause confirmation), not on any ratchet.** Unchanged 2026-08-27 — `Search-26` still PAUSED, 23 days dark. | GA-043, GA-044 |
| **SH-GA-24** | Tablet performance on `SafeBuds-Search-28th July'26` is genuinely volatile; one non-zero conversion cycle is not enough to declare it "converting for good" | ₹0, observation only — require 2 consecutive same-direction reads before any exclusion is (re-)drafted | ✅ **CLOSED 2026-08-24 as GA-053 — CONFIRMED NOT a stable zero (2 consecutive non-zero reads). Reconfirmed a 3rd straight cycle 2026-08-27 (identical 2 conv/₹5,085.41 figure).** | GA-046, GA-048, GA-053 |
| **SH-GA-25** | 🆕 2026-08-24 — Three of the account's recurring "unexplained" anomaly days (08-02, 08-16, 08-23) are all Sundays — a possible structural weekly pattern, not random noise | Observation only, next 3 Monday teardowns | 🟡 **WEAKENED, not yet closed. 2026-08-27: a 4th, near-identical gap (08-26) fell on a Wednesday, not a Sunday — see finding 70/GA-063, which reframes this as a probable pull-cycle-timing confound (Monday cycles' "yesterday" is always Sunday) rather than a genuine day-of-week effect.** Read plan: 2026-08-31. | GA-057, GA-063 |

## CYCLE LOG (most recent first)

### 2026-08-27 — Thursday follow-up: TRUE ROAS clean-trend closest to the floor yet (still above it), GA-056 closed as confirmed processing lag, a NEW near-identical gap reframes the "Sunday" hypothesis, Comm 2.0's feed-title fix confirmed executed, waste batch flat an 11th cycle, a second unlogged campaign discovered

**Initiative:** Eleventh direct-API cycle. One Python pass (2 OAuth exchanges — curl for Ads, `requests` for GA4 — 6 GAQL queries + 1 GA4 `runReport`), TRUE ROAS + marginal ROAS recomputed from scratch over a single wide 75-day campaign×day/GA4×day pull (13 Jun–26 Aug, sliced in code into the anchor, 30d clean/raw, last-7d clean/raw, and prior-7d windows), cross-checked against the sanity anchor and every reconciliation assert (SKU sum, device sum per campaign, GA4 rowCount). **Caught and fixed an in-session bug before publishing: the first-draft TRUE ROAS computation divided spend by revenue (inverted) — instantly visible because the anchor read 0.11× instead of ~9.4×, triggering the standing "any TRUE ROAS under 2× is a red flag" rule.**

**Hypotheses tested:**
1. *"The direct-API pipeline still reproduces the sanity anchor."* → **CONFIRMED**, exact match a 10th cycle running: 9.3787× vs the 9.38× anchor, after the direction bug was caught and fixed.
2. *"GA-056's apparent floor breach was a processing-lag artifact, not real."* → **CONFIRMED.** 2026-08-23 has fully backfilled to ₹16,124.15 revenue/6 txn. No rollback was or is warranted. Closed as GA-061.
3. *"The 08-02/08-16/08-23 pattern is a genuine Sunday effect."* → **WEAKENED, not rejected outright.** This cycle's own newest day, 2026-08-26 (a Wednesday), shows the identical shape — real spend, real sessions, ₹0 attributed revenue — suggesting the pattern is a pull-cycle-timing confound (Monday cycles' "yesterday" is always Sunday) rather than a real weekday effect. One more confirming cycle needed. Filed as GA-063.
4. *"The marginal-ROAS gate stays closed with no new valid evidence."* → **CONFIRMED.** This cycle's naive last7-vs-prior7 delta (12.9×) is not valid evidence — both spend and revenue *fell*, which is not a deliberate spend-increase test. −3.64× stands.
5. *"The zero-conv search-term batch has executed since last cycle."* → **REJECTED.** Essentially flat: ₹13,399.93/906 terms → ₹13,202.21/881 terms, an 11th straight cycle short of the collapse-toward-₹0 that execution would show. Refreshed as GA-058.
6. *"GA-031's feed-title fix has finally executed."* → **CONFIRMED.** SKU pull shows a single consolidated Comm 2.0 title, reconciling exactly to campaign spend. This is the first confirmed execution of any queued fix since tracking began.
7. *"AI Max's zero-conv tail continues its 3-cycle rise."* → **REJECTED.** It reversed for the first time in 4 cycles (₹1,186.08→₹720.22), though term count rose (25→35) and GA-013 remains unexecuted.
8. *"`SafeBuds-Search`'s BROAD-match structure and tablet performance are both unchanged from last cycle."* → **CONFIRMED on both counts.** BROAD-match: still 55/84, now 71.0% of keyword spend. Tablet: 2 conv/₹5,085.41, identical figure to last cycle — 3rd straight converting cycle, stays NOT excluded.
9. *"No new unlogged campaign has appeared since `SafeBuds-Search` was first caught this way."* → **REJECTED.** A second one has: `Pulse Search Campaign | 24 Aug 26`, `ENABLED`, 3 days old, ₹342.75/12 clicks/0 conv. Too young for a verdict — flagged for audit next cycle (GA-060).

**Learning carried forward:**
- **The same "smell test" discipline that catches filter bugs and reconciliation failures also catches direction-of-division bugs.** A TRUE ROAS reading of 0.11× was implausible on its face and caught before publishing — the institutional rule existed specifically for this.
- **A "day of week" pattern observed only from Monday-cycle data is confounded with cycle timing, not necessarily a real weekday effect.** Every Monday teardown's "yesterday" is a Sunday; only a Thursday cycle's data can actually test whether the pattern is Sunday-specific or just "the newest pulled day is often incomplete." This cycle's Wednesday instance is exactly that disconfirming test.
- **The write path is not universally blocked — one specific action type (feed/Merchant-Center edits) executed this cycle while another (negative keywords) has not in 11 cycles.** This narrows, rather than closes, the standing SH-GA-15 investigation.

**Next-sprint changes triggered:**
- **GA-058** queued — refreshed 881-term zero-conv negative batch (₹13,202.21/30d), supersedes GA-050.
- **GA-059** queued — re-escalate BROAD→PHRASE/EXACT fix on `SafeBuds-Search` a 6th time, supersedes GA-052.
- **GA-060** queued — flag new unlogged campaign `Pulse Search Campaign`, observation only, too young for a verdict.
- **GA-061** queued — close GA-056 as CONFIRMED processing lag.
- **GA-062** queued — close GA-031/GA-055 as CONFIRMED executed.
- **GA-063** queued — new/refining TEST hypothesis reframing SH-GA-25.
- **GA-064** queued — reaffirm budget hold, flag the TRUE ROAS clean-trend decline for close watching.
- **GA-065** queued — refresh AI Max zero-conv evidence behind still-unexecuted GA-013.
- Budget: **hold, reaffirmed** — no new valid natural spend variation; no budget draft of any kind this cycle.

> Cycles prior to 2026-08-27 (2026-08-24 and earlier) retained in full in git history — see `queue-inbox.md` and `tracker.md` for the 2026-08-24 cycle's GA-050 through GA-057 detail, which this cycle's findings directly build on and supersede where noted above.

### 2026-08-20 — Thursday follow-up: waste batch grows back after 3 cycles of decline, overclaim still climbing 3 days past the 17 Aug deadline, a near-miss cut retracted (tablet converted), BROAD-match fix re-escalated a 3rd time

**Initiative:** Ninth direct-API cycle. One Python pass (2 OAuth exchanges — curl for Ads, `requests` for GA4 — 6 GAQL queries + 1 GA4 `runReport`), TRUE ROAS + marginal ROAS recomputed from scratch over a single wide 68-day campaign×day/GA4×day pull (13 Jun–19 Aug, sliced in code into the anchor, 30d, last-7d and prior-7d windows), cross-checked against the sanity anchor and every reconciliation assert (SKU sum, device sum, GA4 rowCount).

**Hypotheses tested:**
1. *"The direct-API pipeline still reproduces the sanity anchor."* → **CONFIRMED**, exact match a 9th cycle running: 9.3787× vs the 9.38× anchor.
2. *"The marginal-ROAS gate stays closed with no new valid evidence."* → **CONFIRMED.** This cycle's raw last7-vs-prior7 delta (9.15× naive) is again a status-transition artifact. −3.64× stands.
3. *"GA-040's negative batch has executed since last cycle."* → **REJECTED — the batch grew.** Refreshed as GA-045. Nine straight cycles now show no confirmed execution of any batch.
4. *"GA-040's own falsifier (30d TRUE ROAS < 7.0×) has tripped."* → **REJECTED.** 30d TRUE ROAS read 7.34×, comfortably above 7.0×.
5. *"The overclaim is improving now that the 17 Aug deadline has passed."* → **REJECTED.** 30d overclaim worsened (77.2%→80.9%); the stable last-7d window is essentially flat (79.3%→77.3%).
6. *"AI Max's zero-conv tail reversed its rise from last cycle."* → **REJECTED.** It rose a 2nd straight cycle (₹773.12→₹836.26).
7. *"`open ear headphones` is confirmed recovered."* → **INCONCLUSIVE, leaning confirmed.** 2nd consecutive non-zero read.
8. *"`SafeBuds-Search`'s BROAD-match structure and tablet performance are both unchanged from last cycle."* → **PARTIALLY REJECTED.** BROAD-match unchanged; tablet converted for the first time — GA-037 retracted as GA-046.

**Learning carried forward:**
- **The "never cut something that converted even once" rule isn't limited to search terms — it applies to any cut candidate, including device slices.**
- **A status-transition contaminates the window on both sides of the boundary, for more than one cycle.**
- **A batch's own pre-set falsifier is worth checking explicitly, not just its headline number.**

**Next-sprint changes triggered:** GA-045, GA-046, GA-047, GA-048, GA-049 queued. Budget: hold, reaffirmed.

> Cycles prior to 2026-08-20 retained verbatim below — see git history for the full, unabridged log back to department creation (2026-07-13).

### 2026-08-17 — Monday teardown: the 17 Aug deadline arrives with P0-1 still unfixed and the overclaim at its worst stable-window reading yet; SH-GA-21 confirms the reactivation lever worked; zero-conv batch refreshed an 8th time; SafeBuds-Search's BROAD-match problem reconfirmed at keyword level

**Initiative:** Eighth direct-API cycle. Cross-checked against the sanity anchor and every reconciliation assert.

**Hypotheses tested:** anchor reproduced (CONFIRMED); marginal gate closed (CONFIRMED); SH-GA-21 matured and CONFIRMED (headline); GA-035 batch not executed (STILL NOT CONFIRMED, refreshed as GA-040); overclaim worsened even in a clean window (REJECTED "transition artifact" explanation); AI Max tail rose (REJECTED decline); `open ear headphones` streak broke (REJECTED "still a problem", held open one more cycle); BROAD-match structure unchanged (REJECTED "has it changed").

**Learning carried forward:** setting a specific future read date turned SH-GA-21 into a clean confirmation; "transition contamination" must be checked against whether the window actually contains a transition, not applied by default; word-boundary regex is necessary but not sufficient for negative-keyword safety.

**Next-sprint changes triggered:** GA-040, GA-041, GA-042, GA-043, GA-044 queued. Budget: hold, reaffirmed.

> Cycles prior to 2026-08-17 retained verbatim below — see git history for the full, unabridged log back to department creation (2026-07-13).

### 2026-08-13 — Thursday follow-up: GA-034 half-resolved (SC-All Range reactivated, Search-26 still paused), waste holds steady a 7th cycle, GA-032 closed as explained, open-ear-headphones escalated to investigation

**Initiative:** Seventh direct-API cycle. Corrected an in-session bug: the initial 30d TRUE ROAS computation only summed dates present in the Google Ads pull, silently dropping 2026-07-18's real GA4 revenue — caught before publishing, fixed by summing over the full calendar range instead.

**Hypotheses tested:** anchor reproduced (CONFIRMED); marginal gate closed (CONFIRMED); GA-034 partially confirmed (SC-All Range reactivated, Search-26 still paused); GA-033 batch not executed (STILL NOT CONFIRMED, refreshed as GA-035); AI Max tail declining (CONFIRMED 3rd straight cycle); GA-032 explained (CONFIRMED, root cause found); SKU mix rejected again (6th time); `open ear headphones` escalated to active investigation (REJECTED passive monitoring as sufficient).

**Learning carried forward:** a campaign-status transition (pause OR reactivation) deserves the same "wait 7 days, no verdict" discipline as a budget jump; a missing-Ads-row day is not a zero on the GA4 side, checked in code not just asserted.

**Next-sprint changes triggered:** GA-035, GA-036, GA-037, GA-038, GA-039, GA-034 updated, SH-GA-22 added. Budget: hold, reaffirmed.

> Cycles prior to 2026-08-13 (2026-08-10 and earlier) retained verbatim below — see git history for the full, unabridged log back to department creation (2026-07-13).
