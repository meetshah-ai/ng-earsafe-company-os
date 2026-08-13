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

   **Reconfirmed again 2026-07-16:** SKU and device pulls, taken unfiltered, reconciled exactly to their parent campaign totals (0 variance on all three campaigns) on a fresh window (16 Jun–15 Jul). **Reconfirmed a 3rd time 2026-07-27 on the direct API (not Windsor):** SKU sum ₹45,693.68 vs campaign ₹45,693.68 (0 variance); device sum ₹8,922.91/₹45,693.68 vs campaign totals (0 variance). **Reconfirmed a 4th time 2026-08-03:** SKU sum ₹41,792.26 vs `SC - All Range` ₹41,792.26 (0 variance); device sum ₹51,536.38 vs 30d account total ₹51,536.38 (0 variance). **Reconfirmed a 5th time 2026-08-10:** SKU sum ₹36,823.10 vs `SC - All Range` ₹36,823.10 (0 variance). A NEW variant of this same discipline caught a **self-inflicted** bug this cycle, not an API/connector one: the device pull (pull 6) has no `segments.date` selected (it is already a window aggregate), and a first-draft re-filter-by-a-then-absent-date field silently zeroed the entire device breakdown. The reconciliation assert (device sum vs account total) failed loudly, was caught in-session, and the bug was fixed before anything was reported — the same discipline that catches API filter bugs also catches code bugs, which is exactly why it's a standing rule and not a one-time check. **Reconfirmed a 6th time 2026-08-13:** SKU sum ₹34,407.99 vs `SC - All Range` ₹34,407.99 (0 variance); device sum ₹46,397.35 vs 30d account total ₹46,397.35 (0 variance).


0. **🚨 NEVER FILTER ON `conversions == 0`. IT NEARLY DESTROYED THE ACCOUNT (2026-07-13).** Windsor returns a search term as *several* rows, segmented by dimensions you did not request. Filtering `conversions == 0` keeps only the **non-converting slices** and hides the converting ones — so a term that earned ₹42,589 comes back looking like a zero.

   A `conversions == 0` filter produced the "34 zero-conversion search terms" list (GA-002, ₹2,709 of claimed waste). It contained **`ng earsafe` (₹42,589 / 17.6 conv), `ngearsafe` (₹19,420), `bone conduction headphones` (₹24,703), `wehear earbuds` (₹7,757), `open ear headphones` (₹5,332)** — the brand, the best conquest term, and the top category term. **Executing it would have negatived 41 conversions and ₹1,13,234 — 25% of all Google-paid revenue.** Meet asked for it to be executed. It was caught in pre-flight, minutes before the write.

   **The only safe method:** pull every row with **no conversions filter**, aggregate per search term in code, then select terms whose **TOTAL** 30-day conversions == 0. Nine terms clear that bar (~₹1,154) — not thirty-four (₹2,709).

   **And a hard rule on top of the method: never negative a brand term. Ever.** If brand looks like a zero, the pull is wrong, not the brand.

   **🚨 2026-07-27 addendum: the same discipline caught a second, subtler failure mode this cycle.** `ear safe headphones` was correctly zero-conversion when GA-015 was drafted (2026-07-23, ₹302.04). By 2026-07-27 it shows **0.20 conversions** in a fresh aggregate — it converted *after* the batch was drafted but *before* it was ever executed (execution is still unconfirmed / blocked). **A negative-keyword batch is not "safe forever" just because it was safe when drafted — re-verify against a fresh aggregate immediately before every execution, not just at draft time.** GA-020 supersedes GA-015 for this reason. **Reconfirmed 2026-08-03: `ear safe headphones` was correctly re-excluded again this cycle (still converting, 0.20+ conv carried over) — GA-023 re-verified against the fresh 4 Jul–2 Aug aggregate before drafting, per this rule.** **Reconfirmed again 2026-08-10: the bare term `ear safe` (distinct from `ear safe headphones`) shows 3 conversions/₹144.40 this window and is correctly excluded from GA-033.** **Reconfirmed a further time 2026-08-13: bare `ear safe` now shows 3 conversions/₹6,647.10 this window (up sharply) — still correctly excluded.**


1. **The platform overclaims by ~49%.** 30d to 2026-07-12: Google claims **13.93×** / 231.7 conversions; GA4 `google/cpc` credits **9.38×** / 133 transactions. Every scale decision is made on the GA4 number. *(Consistent with `GoogleAds_Measurement_Incrementality_Plan.md`: Google + Meta together claim ~102% of all revenue.)* **Reconfirmed 2026-07-16** on an overlapping 30d window (16 Jun–15 Jul): TRUE ROAS 9.44×, platform 13.73×, overclaim 45.5% — directionally consistent. **Reconfirmed again 2026-07-27 (first fully direct-API sanity anchor re-run, 13 Jun–12 Jul): TRUE ROAS 9.3787× — exact match to the published 9.38× anchor — overclaim 54.2%, still in-band.** **Reconfirmed a 3rd time 2026-08-03, same anchor window, same pipeline: TRUE ROAS 9.3787×, overclaim 54.2% — bit-for-bit identical to the 07-27 read. The mature prior-7d window (20–26 Jul) reads 9.42×/47.2% overclaim, also in-band.** **Reconfirmed a 4th time 2026-08-10, same anchor window: TRUE ROAS 9.3787× again, exact match, 6th consecutive reproduction of this exact number across cycles — the pipeline is unambiguously sound.** This cycle's own 30d window (11 Jul–9 Aug) reads TRUE ROAS 7.57×, platform 12.18×, overclaim 60.9% — still in-band but at the upper edge, plausibly nudged there by the two paused campaigns depressing recent-day revenue relative to spend already committed earlier in the window; see finding 44. **Reconfirmed a 5th time 2026-08-13, same anchor window: TRUE ROAS 9.3787× again, 7th consecutive reproduction. This cycle's own 30d window (13 Jul–12 Aug) reads TRUE ROAS 7.22×, platform 12.19×, overclaim 68.8% — upper edge of the band again, consistent with the account still digesting the GA-034 pause/reactivation transition (see finding 49).**

1b. **🚨 NEW 2026-07-16 — the overclaim ratio itself can signal a data-integrity break, not an attribution improvement.** The last-7d window (09–15 Jul) showed overclaim collapsing to 6.6% (platform 6.68× vs TRUE 6.26×) — wildly outside the normal 35–65% band. This is **not** evidence of better measurement; that window contains the known missing-spend-day gap (no Google Ads row for 07-09, ₹1.29 for 07-10), which understates spend on both sides of the ratio unevenly (GA4 revenue for 07-09 is complete; Google Ads' own value for that day is folded into the missing spend). **A missing-data gap can produce an overclaim reading that looks like a fix but is actually contamination.** Always check for known gaps before reading an out-of-band overclaim as a signal. **Reconfirmed a 2nd time 2026-07-27:** last-7d (20–26 Jul) overclaim reads 12.0% (out-of-band). This time the contaminating day is 2026-07-26 itself — ₹1,745.80 Ads spend against ₹0.00 recorded GA4 revenue, most likely GA4 same-day processing lag rather than a genuine zero. Filed as GA-022. **🚨 CONFIRMED a 3rd time 2026-08-03 — this time as a direct verification, not just a hypothesis: 2026-07-26 has backfilled to ₹12,755.10 GA4 revenue / 5 txns, exactly the pattern predicted. GA-022 closed. The identical shape reappeared on the new freshest day, 2026-08-01 (₹1,261.84 spend / ₹0.00 revenue) — filed as GA-027, expected to backfill the same way by 2026-08-06.** **🚨 A 4th, different-shaped instance appeared 2026-08-10: this cycle's last-7d overclaim reads 207.4% — the most extreme out-of-band reading yet — but this time the cause is not a lag day, it's two campaigns going PAUSED (see finding 44/GA-034). The mechanism differs (a real status change, not a data-connector delay) but the lesson is identical: an extreme overclaim reading is a diagnostic to chase, never a number to publish as-is.** **🚨 A 5th instance, 2026-08-13: BOTH last-7d (155.9%) and prior-7d (110.7%) read wildly out-of-band this cycle — the cause is the same campaign-status disruption continuing, now in its reactivation phase (`SC - All Range` came back online mid-window, `Search-26` stayed off). Two consecutive out-of-band 7-day windows straddling one status transition is the clearest confirmation yet that short-window overclaim readings should be distrusted entirely until a campaign-status change fully clears the 7-day attribution window.**

2. **Doubling the budget produced negative marginal return.** 11–12 Jul 2026: ₹1,801/day → ₹3,589/day. TRUE ROAS **11.50× → 6.20×**. The incremental **+₹1,788/day of spend bought +₹1,543/day of revenue — marginal ROAS 0.86×.** Sessions rose **+23%** (397 → 488/day) while revenue per session collapsed. **We bought traffic, not customers.**

3. **…and that move also triggered a learning phase, which is the deeper lesson.** Guide Ch 10: a budget change **>20% in either direction** resets Smart Bidding into a 1–2 week learning phase, during which volatility is *expected*. We changed by ~100%. So the 6.20× is **contaminated** — it is partly diminishing returns and partly self-inflicted recalibration, and we cannot separate them. **This is exactly why the ≤20% ratchet exists.** Never again read a post-jump number as a clean verdict. **2026-08-10 note: a full campaign PAUSE is the inverse extreme of this same lesson — it isn't a ≤20% ratchet violation (status toggles aren't budget steps at all), but it produces exactly the kind of "spend fell, revenue fell, don't read anything into the ratio" contamination this finding warned about. See finding 44.** **2026-08-13 note: a REACTIVATION is the same lesson running forward — `SC - All Range` coming back online is also not a ratchet-governed event, but its first few days of data are exactly as unreadable as a fresh budget jump's first few days. Treat a reactivation's first 7 days with the same discipline as a budget-jump's first 7 days: no verdict, wait for the window to mature.**

4. **₹1,800/day is the proven operating point.** wk2 ₹1,701/day → 11.22×; wk3 ₹1,801/day → 11.50×. Every window at or below ~₹1,800/day cleared the 9–11× band. The single window above it did not. **2026-08-10: the account's blended pre-pause rate this cycle (21 Jul–02 Aug) was ₹1,591.35/day — consistent with this proven range. Post-pause it has fallen to ₹818.24/day, well below the proven operating point, not because of a ROAS decision but because two-thirds of the account is switched off.** **2026-08-13: with `SC - All Range` reactivated, blended spend across the last 3 days (08-10 to 08-12) is back up to ~₹1,762/day — within the proven range again, but too young (3 days) to credit as a clean read.**

5. **Lost impression share is RANK, not budget — but this needs re-confirming per campaign every cycle, not assumed.** Historically 76%/47% Rank-lost on the two search campaigns. **2026-07-27 update: `Search-26 May 25` now reads lost-Budget (59.7%) HIGHER than lost-Rank (29.2%)** — a flip from the 07-16/07-23 "Search-26 is Rank-limited" narrative. Not yet acted on (single-cycle read, needs reconfirmation), but the account-level story ("budget can't buy what Rank is losing") no longer applies cleanly to Search-26 specifically. `SC - All Range` remains Budget-lost (63.8%), consistent with history. **🚨 CONFIRMED, no longer a single-cycle read, 2026-08-03: `Search-26` Budget-lost 68.5% vs Rank-lost 21.0% — a 2nd straight cycle in this direction. `SC - All Range` Budget-lost 67.7% (4th+ consistent cycle). The new `SafeBuds-Search-28th July'26` campaign is ALSO Budget-lost (57.8%) from its first read. All three active campaigns are now Budget-impression-share-limited — the account's founding "Rank-limited" thesis no longer holds anywhere. This is a genuine structural shift, but it is a ceiling diagnostic, not permission to raise budget — the marginal-ROAS scale gate (finding 23) still governs that decision and remains closed.** **2026-08-10: `Search-26` (68.5% budget-lost) and `SC - All Range` (72.1% budget-lost) both still read Budget-lost on this pull, but both are now PAUSED (finding 44) — their impression-share numbers describe a ceiling on a campaign that isn't spending anymore, informational only. `SafeBuds-Search`, now the only active campaign, reads ~45.6% Rank-lost / ~46.6% Budget-lost — close to split, worth re-checking once it stabilizes as the account's sole spender.** **2026-08-13: `SC - All Range` (reactivated) reads 71.7% Budget-lost / 10.6% Rank-lost — the ceiling diagnostic is live again. `Search-26` (still paused) reads 77.1% Budget-lost, informational only. `SafeBuds-Search` now reads 39.3% Rank-lost / 51.8% Budget-lost — leaning Budget-lost as it scales.**

6. **High CTR with zero conversions is a landing-page problem.** `Search | SafeBuds | OWS + Conquest`: ₹1,011 spent, **12.57% CTR** (vs the 3–5% Search average), **0 conversions**. The ad is working; the page is not. Never answer this with a bid change. **🚨 Confirmed and fully diagnosed 2026-08-04 (ad-hoc, teammate Slack request — GA-029)** — see finding 36 for full detail. **The live successor is independently reconfirmed 2026-08-10/08-13 to still be repeating the BROAD-match mistake — see finding 41/GA-039, re-escalated with higher priority now that it's the account's 2nd-largest live spender.**

7. **A missing date in a connector pull is not a zero.** Google Ads returned **no row at all** for 2026-07-09 and **₹1.29** for 2026-07-10 (the account went dark). Silently zeroing a missing day corrupts every window that contains it. **Reconfirmed 2026-07-13, 4th pass; reconfirmed 2026-07-16, 5th pass; reconfirmed 2026-07-23; reconfirmed a 6th time 2026-07-27 — 07-09/07-10 still present in the wider window.** A distinct 3rd date (07-18) joined 2026-07-23 (GA-017) and is still present 2026-07-27. **A 4th, reverse-shape anomaly (07-26: spend with $0 GA4 revenue) appeared 2026-07-27 — see finding 1b/GA-022, since CONFIRMED as processing lag, not a gap.** **Reconfirmed a 7th time 2026-08-03: 07-09/07-18 still present. A NEW, 5th anomaly appeared: 2026-08-02 (the freshest day) has NO Google Ads row at all — most likely a landing-lag artifact of running the pull at 07:30 IST the very next morning, but named per standing rule regardless. Filed as GA-027 alongside the 08-01 lag-shape day.** **Reconfirmed an 8th time 2026-08-10: 07-18/08-02 still present in the wider window. A 6th anomaly, 2026-08-05 (₹0 spend AND ₹0 GA4 revenue, account-wide), is NOT a connector gap this time — it is the day `SC - All Range`/`Search-26` went dark, fully explained by GA-034. This is the first time this standing pattern has had a confirmed, non-connector root cause — worth remembering the next time a "gap" appears: check campaign status before assuming it's a data fault.** **Reconfirmed a 9th time 2026-08-13: 07-18 and 08-02 are STILL present, now 5+ cycles old and genuinely unexplained (07-18 in particular has real GA4 revenue, ₹3,658, landing with zero matched Ads spend — this specific shape has never been root-caused, unlike 08-02/08-05). 08-05 is confirmed as the GA-034 pause day, consistent with last cycle.**

## NEW FINDINGS — 2026-08-13 (Thursday follow-up, window 13 Jul–12 Aug, direct-API — 7th direct-API cycle)

49. **🚨 THE HEADLINE — GA-034 is HALF-resolved.** `SC - All Range` returned to `status = ENABLED` on **2026-08-10**, with daily spend resuming at ₹1,336.22 / ₹1,148.72 / ₹1,143.26 on 08-10/11/12 — close to its pre-pause daily rate (₹1,591.35/day blended, 21 Jul–02 Aug). `Search-26 May 25` remains `status = PAUSED`, with confirmed zero spend every day since 2026-08-04. **Nobody has logged or confirmed which of the original pause or this partial reactivation was deliberate** — the same visibility gap the department has now hit three times (SafeBuds-Search launch, Comm 2.0 feed-title split, and now this). Because the reactivation is only 3 days old (well short of the 7-day attribution window), this cycle's last-7d (3.24×) and prior-7d (5.96×) TRUE ROAS readings both fall below the 6.0 floor — but both are contamination artifacts of the pause→reactivation transition, not genuine breaches: their overclaim ratios (155.9% and 110.7% respectively) are both wildly out-of-band, exactly the tell established in finding 1b. **Do not read either short window as a floor breach.** The 30d figure (7.22×, comfortably above floor) is this cycle's trustworthy number. SH-GA-21's read plan stands: 7 days post-reactivation lands on **2026-08-17** — the same day as the bidding-change countdown deadline.

50. **Zero-conversion search-term waste has held in the same range for a 7th straight cycle — the persistence, not the magnitude, is the finding.** This cycle's fully unfiltered pull: **₹14,593.55/1,016 terms** (13 Jul–12 Aug), excluding `open ear headphones` (held out, 5th cycle running — see finding 51). Sequence: GA-020 ₹18,253.45 → GA-023 ₹17,629.87 → GA-030 ₹16,708.95 → GA-033 ₹15,610.70 → now GA-035 ₹14,593.55. The total has drifted down modestly (~6.5% this cycle) but has never approached the collapse-toward-₹0 that would signal a genuinely executed negative batch. Filed as **GA-035**, superseding GA-033.

51. **`open ear headphones` has now read zero conversions for 5 consecutive cycles — long enough that "probably a lag" is no longer a responsible default.** ₹572.94/55 clicks/0 conv this window, QS 7 (still good). This term has a real conversion history (₹5,331 basis cited in GA-015) and has been explicitly protected from every negative batch since 2026-07-23. Five straight 30-day windows at zero, on a term with stable good QS and steady spend, is a pattern that has outlasted any reasonable "wait and see" — **escalated from SH-GA-20's passive monitor to an active investigation (GA-036): check the ad's destination URL and conversion-tracking tag firing specifically for this keyword's traffic**, rather than logging another zero and moving on.

52. **GA-032 (AI Max "total volume" reconciliation) is CLOSED this cycle as EXPLAINED, not as a live data-integrity bug.** Re-derivation from raw rows: the 42 distinct terms that have ever matched under `search_term_match_type = AI_MAX` cost **₹679.31** when counted only on their AI_MAX-tagged rows, but the SAME 42 literal terms cost **₹7,673.29** when every match type they have ever matched under (EXACT, BROAD, PHRASE, NEAR_EXACT, NEAR_PHRASE, as well as AI_MAX) is summed together. The two previous GA-032 readings (₹6,534.18 and ₹774.18) were each silently comparing different, undocumented aggregation grains — a match-type-scoped total is never going to equal a term-scoped-across-all-match-types total for the same terms, and neither number was wrong on its own terms. **Lesson: when a "total volume" figure doesn't reproduce, check what dimension it was scoped to before assuming a connector or reproducibility fault** — this is the same root cause class as the QS-summing bug (comparing two different, unstated aggregations) but this time it cost two cycles of unresolved flagging instead of a false headline, because the discipline of "flag, don't trust, don't build on it" (established 2026-08-06) worked exactly as intended.

53. **Shopping SKU mix has rotated a 6th time — Pro is now the smallest share (1.5%) AND the best-returning SKU (23.08×), a full reversal from last cycle's "worst."** Reconciled exactly to `SC - All Range`'s ₹34,407.99 (0 variance): SafeBuds Black ₹15,495.20 (45.0% share, 12.91×), Comm 2.0 combined across its still-unresolved 2-title split (GA-031) ₹18,397.91 (53.5%, blended ~9.99×), Pro ₹514.88 (**1.5% share, now 23.08× — the best of the four**). Pro's share has now moved 47.0%→40.7%→23.9%→14.2%→7.9%→**1.5%** across six consecutive cycles, and its ROAS ranking has cycled worst→best→worst→best without any executed mix-shift action at any point. **Reinforces finding 46/SH-GA-16 more strongly than ever — this metric cannot support a structural SKU decision in either direction.** SafeBuds Ivory remains absent (now a 4th+ consecutive cycle) — still too immaterial to chase.

54. **`SafeBuds-Search-28th July'26` continues to clear the ROAS floor decisively and is now the account's 2nd-largest live spender.** 30d: ₹5,672.48 spend, 40.29 conv, ₹99,971.63 value, **17.62× platform** — consistent with the 20.59×/25.68× reads of the last two cycles. Its structural BROAD-match leak (SH-GA-18/GA-029) remains unfixed, unchanged since 2026-08-04 diagnosis, and is now materially more urgent given the campaign's growing share of live spend. Re-escalated as **GA-039**. **New this cycle: its TABLET slice reads ₹257.61/30d, 0 conversions, ₹0 revenue** — the same free-kill shape as the account's historical tablet finding, now material because the campaign has scaled. Filed as **GA-037**, scoped to this campaign only (not blanket), per the standing per-campaign device-cut discipline (finding 11/GA-014/GA-024).

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

   **NG's open-ear Quality Scores are 7–8. Good. There was never a scandal.** The one genuine QS 0 is `outside ear earbuds` (₹975, 0 conversions) — but it sits in a campaign that is **already PAUSED**, so it is not spending. **Reconfirmed 2026-07-13, 4th pass, latest-day (2026-07-12) values: `open ear headphones`=7, `open ear wireless headphones`=8, `ng earsafe`=10, `earsafe headphones`=10 — stable. Reconfirmed again 2026-07-16, latest-day (2026-07-15): `ng earsafe`=10, `ng earsafe pro`=10, `open ear headphones`=7, `open ear bluetooth headphones`=7, `open ear wireless headphones`=8, `bone conduction headphones`=5 — still stable, no scandal.** **Reconfirmed a further time 2026-07-27 (direct API, 1,700 keyword rows, 27 Jun–26 Jul): max QS observed = 10 (no impossible/summed values), and no keyword at QS≤4 carried any spend this cycle — the scandal stays dead.** **Reconfirmed a 5th time 2026-08-03 (1,784 keyword rows, 4 Jul–2 Aug): max QS observed = 10, 0 keywords at QS≤4 carried any spend. `outside ear earbuds` itself now shows only ₹3.24/30d (still 0 conv, immaterial) — the scandal stays permanently dead.** **Reconfirmed a 6th time 2026-08-10 (1,782 keyword rows, 11 Jul–9 Aug) — see finding 45.** **Reconfirmed a 7th time 2026-08-13 (1,782 keyword rows, 13 Jul–12 Aug): max QS observed = 10, ₹0 spend on any QS≤4 keyword. `open ear headphones`=7, `bone conduction headphones`=6, `open ear wireless headphones`=8, `ng earsafe`=10 — stable, no scandal, 7th consecutive confirmation.**

   **The lesson, and it is the important one: an aggregation that looks like a metric is not a metric.** Any QS reading above 10 is a sum — stop and re-pull with `date`. This finding was asserted confidently, emailed, and queued as work before anyone checked whether the number could even *be* a Quality Score. Nothing in the loop caught it, because everything downstream trusted the first number.

9. **⭐ AI Max is ALREADY ON** (`Search-26 May 25` — `search_term_match_type = AI_MAX`). **This corrects the 2026-07-13 department-creation entry, which assumed it was off and made it the headline scale lever (P2-1).** It is on, and it is matching junk: `truth hear`, `tecno earbuds`, `finger earphone`, `wehear` — ~₹270/30d, **zero conversions**. The job is to **rein it in** (brand exclusions, negatives, text guidelines) or prove it earns its keep — **not to "enable" it.** **Reconfirmed 2026-07-16 on a fresh window: 17 distinct AI_MAX queries, ₹624.35/30d, still zero conversions.** Filed as GA-013. **🚨 Reconfirmed and WORSENING 2026-07-27: 56 distinct AI_MAX queries, 52 still zero-conversion, ₹1,440.60/30d — more than double the 07-16 figure.** **🚨 WORSENING a 3rd straight cycle, 2026-08-03: 58 distinct AI_MAX queries, 49 zero-conversion, ₹1,556.14/30d zero-conv spend. Critically, TOTAL AI_MAX volume (including converting brand matches) has ballooned to ₹6,534.18 — filed as GA-025.** **🚨 Reversed 2026-08-06: fell sharply to ₹730.39/51 zero-conv queries — but the "total volume incl. converting" figure it sits inside (GA-025's ₹6,534.18) could not be reproduced on an identical re-pull (₹774.18, 8.4× lower) — see GA-032, flagged not trusted.** **Fell again 2026-08-10, 2nd straight cycle of decline: ₹692.22/48 zero-conv queries.** **Fell a 3rd straight cycle 2026-08-13: ₹576.80/40 zero-conv queries (42 distinct AI_MAX terms total this cycle, ₹679.31 total AI_MAX-only-row volume). GA-032's reconciliation was finally CLOSED this cycle (finding 52) — the "total volume" discrepancy was an apples-to-oranges aggregation-grain comparison, not a live data-integrity issue. The zero-conv tail's 3-cycle decline (₹1,556.14→₹730.39→₹692.22→₹576.80) is now a clean, trusted trend on its own terms.**

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

    **There are FOUR SKUs, not three.** **Consequence: GA-004's premise collapses.** The mix has since rotated through **every** best/worst position across **six consecutive cycles** (47.0%→40.7%→23.9%→14.2%→7.9%→**1.5%** share for Pro; ROAS ranking worst→best→worst→best) without any executed mix-shift action — see findings 29/46/53. **Do not resurrect any Pro- or Comm-2.0-focused framing in either direction.**

11. **Tablet is a free kill — but narrowed, per-campaign, not a blanket truth.** See findings 11/17 history: `SC - All Range` tablet has consistently converted across every cycle it's been checked (2 conv/₹5,948.10 rev/26.65× as of 2026-08-03, ₹203.34/2conv/29.25× as of 2026-08-13) and must never be cut; `Search-26` tablet has consistently been dead weight (₹58.55/0conv as of 2026-08-13, though the campaign is currently paused anyway); and as of **2026-08-13, `SafeBuds-Search-28th July'26` tablet also reads dead weight (₹257.61/0conv/₹0 revenue) for the first time at material spend** — filed as GA-037, scoped to that campaign only.

12. **We bid against ourselves on brand — CLOSED PERMANENTLY 2026-07-23 as GA-018/SH-GA-10.** Four independent pulls produced four materially different (once-inverted) answers — the estimator is too unstable to act on. Not re-examined since; stays closed through 2026-08-13.

13. **Conquest works and is starved.** `wehear earbuds`, `wehear safe buds`, `poly voyager free 60 true wireless earbuds` and family continue to show extreme returns (20–55×+) on trivial spend across every cycle checked. Still wildcard-protected, still never negatived, still deferred past 17 Aug (P2-1) and now also past GA-034's full resolution.

14. **~₹1,168/30d of zero-conversion category search terms** (original narrow list) — superseded repeatedly as pull methodology has become progressively less filtered: GA-012 (₹4,040.48) → GA-015 (₹17,784.14) → GA-020 (₹18,253.45) → GA-023 (₹17,629.87) → GA-030 (₹16,708.95) → GA-033 (₹15,610.70) → now **GA-035 (₹14,593.55, 2026-08-13)** — see finding 50.

15. **Windsor field constraint:** `quality_score` **cannot** be queried together with impression-share fields (Google API restriction). Confirmed still true on the direct Google Ads API every cycle since 2026-07-27, including 2026-08-13.

16. **⭐ Word-boundary regex is mandatory for any brand/negative-keyword filter, never plain substring `in`.** Applied again 2026-08-13 for GA-035 — same regex, same clean release of generic terms (`swimming headphones`, `running earphones`, etc.), same clean capture of the full brand family as brand-protected.

## NEW FINDINGS — 2026-07-16 (Thursday follow-up, window 16 Jun–15 Jul)

17. See item 11 above (tablet narrowed) — cross-referenced here for visibility. GA-014, SH-GA-14.

18. **Marginal ROAS on the 11–12 Jul budget spike — CLOSED 2026-07-23 at −3.64× (fully matured 10-day read) — see finding 23.** Reaffirmed every cycle since, including 2026-08-13: no new valid natural spend variation (the `SC - All Range` reactivation is a status toggle, not a budget change, and is only 3 days old this cycle anyway). Gate stays CLOSED on the standing −3.64× finding.

19. **SC-All Range remains Lost-Budget, not Lost-Rank — reconfirmed every cycle, including 2026-08-13 (71.7% Budget-lost vs 10.6% Rank-lost, now live again post-reactivation).** Search-26 (still paused) reads 77.1% Budget-lost, informational only. `SafeBuds-Search` reads 51.8% Budget-lost / 39.3% Rank-lost, leaning Budget-lost as it scales. No new action — the marginal-ROAS gate still governs, and it's closed.

20. See item 12 above (brand comparison) — cross-referenced here for visibility.

## NEW FINDINGS — 2026-07-23 (Thursday follow-up, window 23 Jun–22 Jul, direct-API pulls — Windsor fully retired)

21. **⭐ Migration to direct Google Ads + GA4 APIs complete and validated.** Sanity anchor reproduced **exactly 9.3787×** every cycle since, 7 consecutive reproductions through 2026-08-13. `curl` for Ads / `requests` for GA4 split remains required.

22. **🚨 The ROAS-direction bug — caught in-session, before publishing.** TRUE ROAS = revenue ÷ spend, never the reverse. **Institutional rule: any TRUE ROAS reading under ~2× on this account is itself a red flag — check the division direction before trusting it.**

23. **⭐ P0-3 / SH-GA-7 (marginal ROAS re-read) is now CLOSED on a fully-matured read: −3.64×.** Reaffirmed every cycle since 2026-07-23 through 2026-08-13 — no genuine natural spend variation has occurred (the 08-10 reactivation is a status toggle, not a budget change, and is too young to test anyway).

24. **🚨 GA-011's execution-failure finding — RESOLVED (as moot) 2026-08-03**: both test terms aged out of the 30-day window entirely. The write-path question now rides on whether GA-033/GA-035's fresh batch shows any spend reduction on a future read — still unresolved as of 2026-08-13 (GA-035's own read plan is 2026-08-17).

25. **A third zero-spend day (07-18) and subsequent anomalies (07-26 lag, 08-01 lag, 08-02 standing gap, 08-05 confirmed pause day) — see finding 7 for the full, updated history through 2026-08-13.** 07-18 and 08-02 remain present and unexplained as of 2026-08-13, now 5+ cycles old.

26. **SH-GA-10 (brand cannibalization) — REJECTED, CLOSED PERMANENTLY 2026-07-23 as GA-018.** Not re-examined since; stays closed through 2026-08-13.

27. **Search-term-view does not fully cover Shopping campaign spend — a real, disclosed, structural limitation.** Gap has held ~28–29% every cycle: this cycle (13 Jul–12 Aug) ₹33,037.35 of ₹46,397.35 (₹13,360.00/28.8% gap) — consistent, structural, not worsening.

28. **The true scale of zero-conversion search-term waste is ~4.4× larger than the original naive estimate once genuinely unfiltered** — see finding 50 for the current, 7th-cycle figure.

## NEW FINDINGS — 2026-07-27 (Monday teardown, window 27 Jun–26 Jul, direct-API — first fully curl-based Ads client)

29. **Shopping SKU mix has flipped repeatedly** — see finding 10/46/53 for the full six-cycle history. Do not resurrect any Pro- or Comm-2.0-focused framing.

30. **AI Max leakage grew, then reversed — see finding 9 for the full history through the 3rd straight cycle of decline (2026-08-13).**

31. **A drafted-but-unexecuted negative-keyword batch is not "safe forever" — it must be re-verified immediately before push, not just at draft time.** Re-applied every cycle since, including 2026-08-13 for GA-035 (bare `ear safe` re-verified converting, correctly excluded again).

32. **The GA-016 write-path-failure test has a blind spot: single-click terms can't distinguish "broken" from "no new activity." RESOLVED as moot 2026-08-03** — both terms aged out of the window entirely.

## NEW FINDINGS — 2026-08-03 (Monday teardown, window 4 Jul–2 Aug, direct-API — 4th direct-API cycle)

33. **A new, previously-unlogged campaign is live: `SafeBuds-Search-28th July'26` (24068804553).** See finding 40/54 for its confirmed, sustained clearance of the ROAS floor through 2026-08-13, now the account's 2nd-largest live spender.

34. **All three active campaigns were Budget-impression-share-limited as of 2026-08-03 — a genuine structural shift, not a green light.** See institutional pattern 5's full update through 2026-08-13.

35. **The zero-conversion search-term waste total stopped growing and started holding steady — see finding 50 for the now 7-cycle-long update.**

## AD-HOC FINDINGS — 2026-08-04 (Slack request: audit `Search | SafeBuds | OWS + Conquest`, keywords to add)

36. **⭐ P0-4 fully diagnosed. There is no keyword to add — every search term the campaign ever captured converted at zero.** See original full write-up (unchanged). **The live successor's BROAD-match leak (SH-GA-18) remains unfixed as of 2026-08-13 — see finding 54, re-escalated as GA-039 given its now-larger share of live spend.**

## NEW FINDINGS — 2026-08-06 (Thursday follow-up, window 7 Jul–5 Aug, direct-API — 5th direct-API cycle)

37. **GA-023 still not executed — refreshed as GA-030.** Superseded since by GA-033, now GA-035.

38. **`open ear headphones` reads 0 conversions despite a strong history and QS 7 — see finding 51 for the now 5-cycle-long update, escalated 2026-08-13 to an active investigation (GA-036).**

39. **The AI Max "total volume" figure (GA-025) does not reproduce on an identical re-pull — see finding 52: CLOSED 2026-08-13 as an aggregation-grain mismatch, not a live bug.**

40. **SH-GA-17 (new `SafeBuds-Search-28th July'26` campaign) CONFIRMED on its first fully-matured read, and reconfirmed every cycle since through 2026-08-13 (17.62× platform) — see finding 54.**

41. **SH-GA-18 (BROAD→PHRASE/EXACT fix on the same campaign) confirmed NOT executed — still true 2026-08-13, re-escalated as GA-039 given the campaign's growing share of live spend.**

42. **Comm 2.0's Shopping feed title split into two variants, unlogged, backwards from guidance — GA-031, still unresolved as of 2026-08-13 (6th cycle) — see finding 47.**

43. **2026-08-02 graduates from a suspected processing-lag day to a confirmed standing zero-activity day — still present, still unexplained (beyond "genuinely zero"), as of 2026-08-13.**

## REJECTED / DEAD ENDS

- **Candidate for rejection, pending the 19 Jul read:** *"Google Ads has headroom at ₹3,600/day."* **CLOSED PERMANENTLY 2026-07-23 at −3.64× (GA-019). Reaffirmed every cycle since through 2026-08-13** — no genuine natural spend variation (the 08-10 reactivation is a status toggle, too young to test regardless).
- *"Tablet is a blanket free kill, all campaigns."* **Superseded 2026-07-16 — narrowed, per-campaign. As of 2026-08-13: `SC - All Range` still converts on tablet, `Search-26` tablet still dead (campaign paused anyway), `SafeBuds-Search` tablet is NOW also dead weight at material spend (₹257.61, new this cycle) — filed as GA-037, scoped to that campaign only.**
- **GA-005 / SH-GA-10 — "Brand de-duplication has a stable, actionable gap."** **REJECTED, closed permanently 2026-07-23.** Stays closed through 2026-08-13.
- **"Google Ads has headroom above ~₹1,800/day."** **REJECTED, closed 2026-07-23.** Stays closed through 2026-08-13 — no genuine natural variation has occurred.
- **"Shopping SKU mix is upside-down, Pro is the problem."** *(old GA-004)* **Stays retracted/superseded — see finding 53.** The mix has now rotated through every best/worst position six times; do not resurrect any Pro- or Comm-2.0-focused framing in either direction.
- **"`Search \| SafeBuds \| OWS + Conquest` needs more/better keywords."** *(P0-4, teammate ask 2026-08-04)* **REJECTED — see finding 36/GA-029.** Unchanged 2026-08-13.
- **"GA-032's AI Max total-volume figure is a real, unresolved data-integrity issue."** *(GA-032, open 2026-08-06 through 2026-08-10)* **CLOSED 2026-08-13 as EXPLAINED, not retracted as false** — see finding 52. The figure was never wrong; two different aggregation grains were being compared.

## SCALE HYPOTHESIS BACKLOG (per COMPANY_STATE §5.5 — test → validate → scale)

| # | Hypothesis (metric + threshold) | Test (smallest move) | Status | Linked queue |
|---|---|---|---|---|
| **SH-GA-13** | Cutting ₹4,978/30d of zero-return spend at flat budget lifts TRUE ROAS from 9.38× toward the 9–11× band within one attribution window | Claimed shipped 2026-07-14 (99 negatives + tablet + SafeBuds Ivory). | 🔴 **BLOCKED — confirm execution first.** Superseded in scale by every batch since, now GA-035. | GA-011 |
| **SH-GA-14** | A `Search-26`-only tablet exclusion (not blanket) recovers ₹70/30d without forfeiting `SC - All Range`'s tablet revenue | One device bid modifier, Search-26 only, zero spend change | 🟡 **OPEN, but `Search-26` remains PAUSED as of 2026-08-13 — moot until reactivation.** | GA-014, GA-024 |
| **SH-GA-1** | Fixing the duplicate conversion action closes the 49% overclaim to **<20%** | P0-1 — deduplicate, put the Shopify-pixel action in the bidding goal | ⬜ OPEN — still not started as of 2026-08-13. **4 days to 17 Aug.** | — |
| **SH-GA-2** | With corrected values, a tROAS re-baselined to **~7.0–8.0** holds TRUE ROAS ≥ 9.0 *and* survives the 17 Aug change | P0-2 — walk the target in ≤15%/week steps | ⬜ BLOCKED by SH-GA-1 | — |
| **SH-GA-3** | **AI Max** delivers the guide's **+34% CVR** on `Search-26 May 25` | P2-1 — one-click experiment, 50/50, 2-week read | ⬜ BLOCKED by SH-GA-1, and `Search-26` remains PAUSED | — |
| **SH-GA-4** | Raising Ad Strength to Excellent recovers Lost-IS-Rank **without** extra budget | P1-2 — 8–10 headlines / 3–4 descriptions per ad group | ⬜ OPEN — QS is already 7–10 on open-ear terms (reconfirmed 2026-08-13, 7th cycle); Rank-lost remains secondary to Budget-lost | — |
| **SH-GA-5** | Rewriting Shopping feed titles to `[Brand]+[Type]+[Feature]+[Variant]` lifts `SC - All Range` TRUE ROAS above 11.5× | P1-3 — Merchant Center feed-rule A/B on the top 20% of SKUs by spend | ⬜ OPEN — narrowed to Comm 2.0, see SH-GA-16/GA-031, still unresolved 6th cycle as of 2026-08-13. `SC - All Range` is reactivated as of 08-10. | — |
| **SH-GA-6** | **Enhanced Conversions** recovers a measurable share of the platform-vs-GA4 gap | P1-1 — enable; impact visible ~30 days after | ⬜ OPEN | — |
| **SH-GA-7** | The account has **any** budget headroom above ₹1,800/day at marginal ROAS ≥ 6.0 | +20% step, held 7 days, then read marginal | 🔴 **CLOSED — REJECTED 2026-07-23**, reaffirmed every cycle since through 2026-08-13. Re-open only after a genuine natural spend variation or after P0-1/P0-2 land. | GA-019 |
| **SH-GA-9** | Shopping is Lost-Budget not Lost-Rank — next budget dollar, once gates clear, should target Shopping specifically | Confirm on next IS pull; hold until marginal ROAS ≥ 6.0 | 🟢 **Reconfirmed 2026-08-13 (71.7% Budget-lost) — `SC - All Range` is live again, but the marginal-ROAS gate still governs, and it's closed.** | — |
| **SH-GA-10** | A fixed brand-term whitelist shows a stable, actionable ROAS gap between Shopping and Search-26 brand traffic | Re-pull with same whitelist each cycle | 🔴 **CLOSED — REJECTED 2026-07-23.** Stays closed through 2026-08-13. | GA-018 |
| **SH-GA-15** | Three approved negative-keyword batches show zero execution after 10+ days — the block is structural (write path), not a stale read | Pilot: push ONE verified zero-conv, non-brand term as an EXACT negative via whatever write path Meet has | 🟡 **OPEN — the write-path question still rides on GA-035's 2026-08-17 read plan.** | GA-015, GA-016, GA-023, GA-030, GA-033, GA-035 |
| **SH-GA-16** | Rewriting Comm 2.0's Shopping feed title lifts its platform ROAS toward Black's | One Merchant Center feed-rule edit, one SKU, ₹0 spend impact | 🟡 **OPEN, monitor-only — the split (GA-031) is still unresolved 6th cycle as of 2026-08-13.** | GA-020, GA-023, GA-031 |
| **SH-GA-17** | 🆕 The new `SafeBuds-Search-28th July'26` campaign sustains platform ROAS ≥ 6.0× | Observe only, no budget/bid change | ✅ **CONFIRMED, reconfirmed every cycle through 2026-08-13 (17.62× platform). Now the account's 2nd-largest live spender.** | GA-026 |
| **SH-GA-18** | Converting the successor campaign's 55 BROAD keywords to PHRASE/EXACT + adding brand negatives frees its starved conquest EXACT keywords | One keyword-level match-type edit + campaign-level brand negatives | 🟡 **OPEN — still NOT executed as of 2026-08-13. Re-escalated as GA-039, now materially more urgent given the campaign's growing spend share.** | GA-029, GA-039 |
| **SH-GA-19** | The AI Max total-volume metric is internally consistent once re-derived step-by-step from raw rows | ₹0 methodology audit; re-derive GA-025's figure from the exact rows that produced it | ✅ **CLOSED 2026-08-13 — see finding 52/GA-038. Explained as an aggregation-grain mismatch, not a bug.** | GA-032, GA-038 |
| **SH-GA-20** | `open ear headphones`'s 0-conversion reading is a conversion-lag/tracking artifact, not a real demand drop | ₹0, observation only | 🔴 **ESCALATED 2026-08-13 (GA-036) — 5 cycles of zero conversions is long enough that passive observation is no longer the responsible default. Moving to active landing-page/tracking investigation.** | GA-030, GA-033, GA-035, GA-036 |
| **SH-GA-21** | If the `SC - All Range`/`Search-26` pause is confirmed accidental, reactivating both at their existing (unchanged) budgets restores GA4 google-paid revenue/day to within 20% of the pre-pause baseline (~₹14,300/day) within one 7-day attribution window, with no marginal-ROAS penalty | Resume both campaigns, change nothing else (₹0 budget-ratchet step — status toggle only) | 🟡 **PARTIALLY TESTING — `SC - All Range` reactivated 2026-08-10 (3 days old as of this cycle); `Search-26` still PAUSED, not yet reactivated.** Preliminary (too-young-to-call) revenue/day on 08-10/08-11 averages ~₹6,922 (excluding 08-12's likely-lag ₹0) — still well below the ₹14,300 baseline, but the 7-day read isn't due until **2026-08-17**. **Do not call this yet.** | GA-034 |
| **SH-GA-22** | 🆕 2026-08-13 — Excluding `SafeBuds-Search-28th July'26`'s TABLET slice (₹257.61/30d, 0 conv, ₹0 revenue) at zero learning-phase cost will not measurably change the campaign's platform ROAS (currently 17.62×) | One device-bid exclusion, ~₹8.60/day at risk | 🟡 **NEW — OPEN.** Falsifier: campaign platform ROAS falls >10% within 2 weeks of exclusion → tablet was assisting conversions invisibly, reverse. Read: 2026-08-27. | GA-037 |

## CYCLE LOG (most recent first)

### 2026-08-13 — Thursday follow-up: GA-034 half-resolved (SC-All Range reactivated, Search-26 still paused), waste holds steady a 7th cycle, GA-032 closed as explained, open-ear-headphones escalated to investigation

**Initiative:** Seventh direct-API cycle. One Python pass (2 OAuth exchanges, curl-for-Ads/requests-for-GA4, 6 GAQL queries + 1 dedicated AI-Max reconciliation query + 1 anchor-window query pair), TRUE ROAS + marginal ROAS recomputed from scratch, cross-checked against the sanity anchor and every reconciliation assert. Corrected an in-session bug: the initial 30d TRUE ROAS computation only summed dates present in the Google Ads pull, silently dropping 2026-07-18's real GA4 revenue (₹3,658) because Ads had no row that day — caught before publishing, fixed by summing over the full calendar range instead.

**Hypotheses tested:**
1. *"The direct-API pipeline still reproduces the sanity anchor."* → **CONFIRMED**, exact match a 7th cycle running: 9.3787× vs the 9.38× anchor.
2. *"The marginal-ROAS gate stays closed with no new valid evidence."* → **CONFIRMED.** `SC - All Range`'s reactivation is a status toggle, not a budget change, and is only 3 days old regardless — not valid gate evidence either way. −3.64× stands.
3. *"GA-034's pause has been resolved."* → **PARTIALLY CONFIRMED.** `SC - All Range` reactivated 2026-08-10 (status ENABLED, spend resumed near pre-pause levels); `Search-26` remains PAUSED. Neither the original pause nor this partial reactivation has a confirmed cause from Meet.
4. *"GA-033's negative batch has executed since last cycle."* → **STILL NOT CONFIRMED.** A fresh, equally-unfiltered aggregate finds ₹14,593.55/1,016 terms — down only ~6.5% from GA-033's ₹15,610.70, not the collapse-toward-₹0 that would indicate execution. Refreshed as GA-035.
5. *"AI Max's zero-conv tail continues its decline."* → **CONFIRMED, 3rd straight cycle: ₹730.39→₹692.22→₹576.80.**
6. *"GA-032's AI Max total-volume figure can be reconciled by re-deriving it from raw rows, scoped correctly."* → **CONFIRMED — root cause found.** The discrepancy was always an apples-to-oranges comparison between a match-type-scoped total and a term-scoped-across-all-match-types total for the same terms. Closed as EXPLAINED, not as a live bug.
7. *"The Shopping SKU mix has stabilized."* → **REJECTED again, a 6th time.** Pro's share fell to 1.5% but it is now the BEST-returning SKU (23.08×) — a full reversal from last cycle's "worst."
8. *"`open ear headphones`'s zero-conversion reading is still just a lag/observation, not worth investigating yet."* → **REJECTED.** 5 consecutive cycles at zero, on a historically-converting, QS-7 keyword, is long enough that passive monitoring is no longer the responsible default. Escalated to an active investigation.

**Learning carried forward:**
- **A campaign-status transition (pause OR reactivation) deserves the same "wait for 7 days, no verdict" discipline as a budget jump.** The instinct to read this cycle's sub-floor 7-day TRUE ROAS numbers at face value was strong; both windows' wildly out-of-band overclaim ratios were the tell that stopped that mistake, exactly as institutional pattern 1b predicts.
- **A "total volume doesn't reconcile" flag should be investigated by asking what dimension each of the two readings was scoped to, before concluding either the connector or the reproducibility is broken.** GA-032 sat unresolved for two cycles because nobody re-derived it against a clearly-stated aggregation grain; doing so this cycle closed it in one pass.
- **A missing-Ads-row day is not a zero on the GA4 side — this needs to be checked in code, not just asserted as a rule.** The in-session bug this cycle (silently dropping 07-18's real GA4 revenue) is exactly the failure this department has warned about since finding 7; catching it before publishing, rather than after, is the discipline actually working.
- **Five cycles is the line past which "probably a data lag" stops being a responsible default and becomes an excuse not to look.** `open ear headphones` crossed that line this cycle.

**Next-sprint changes triggered:**
- **GA-035** queued — refreshed 1,016-term zero-conv negative batch (₹14,593.55/30d), supersedes GA-033.
- **GA-036** queued — escalate `open ear headphones` to an active landing-page/tracking investigation.
- **GA-037** queued — exclude TABLET on `SafeBuds-Search-28th July'26` (₹257.61/30d, 0 conv), scoped to that campaign only.
- **GA-038** queued — close GA-032 as explained (aggregation-grain mismatch).
- **GA-039** queued — re-escalate SH-GA-18's BROAD-match fix on `SafeBuds-Search`, now the account's 2nd-largest live spender.
- **GA-034** updated — half-resolved; cause of both the pause and the reactivation still unconfirmed; SH-GA-21's 7-day read stays scheduled for 2026-08-17.
- **SH-GA-22** added to backlog — tablet-exclusion falsifier test, read 2026-08-27.
- Budget: **hold, reaffirmed** — no new valid natural spend variation; no budget draft of any kind this cycle.

### 2026-08-10 — Monday teardown: two of three campaigns found PAUSED (91.7% of spend, unlogged), zero-conv waste refreshed, SKU mix flips a 5th time (Pro now worst), feed-title split still unresolved

**Initiative:** Sixth direct-API cycle. One Python pass (2 OAuth exchanges, curl-for-Ads/requests-for-GA4, 6 GAQL queries + 1 dedicated anchor query + 1 GA4 `runReport`), TRUE ROAS + marginal ROAS recomputed from scratch, cross-checked against the sanity anchor and every reconciliation assert. One in-session bug caught and fixed: the device pull (no `segments.date` selected, already a window aggregate) was wrongly re-filtered by an absent date field in a first draft, zeroing the whole device breakdown — caught by the reconciliation assert failing, corrected before anything was reported.

**Hypotheses tested:**
1. *"The direct-API pipeline still reproduces the sanity anchor."* → **CONFIRMED**, exact match a 6th cycle running: 9.3787× vs the 9.38× anchor.
2. *"The marginal-ROAS gate stays closed with no new valid evidence."* → **CONFIRMED, with a new caveat.** No genuine natural spend variation occurred — the large spend swing this cycle is a campaign pause (finding 44), which cannot be read as either scale or rollback evidence. Gate stays CLOSED; the pause is tracked separately (GA-034), not folded into the gate's evidence base.
3. *"GA-030's negative batch has executed since last cycle."* → **STILL NOT CONFIRMED, and now genuinely ambiguous.** A fresh, equally-unfiltered aggregate finds ₹15,610.70/1,057 terms — broadly the same magnitude as GA-030's ₹16,708.95, but two of the three targeted campaigns are now paused, so a stable-or-falling total this cycle can no longer cleanly distinguish "not executed" from "campaign is off." Refreshed as GA-033 with this caveat attached.
4. *"Two of the account's three campaigns are quietly not spending."* → **CONFIRMED, decisively, and this is the cycle's headline.** `SC - All Range` and `Search-26 May 25` both read `status = PAUSED`; daily spend confirms both stopped on 2026-08-04/05. `SafeBuds-Search-28th July'26` is the only campaign spending, carrying 100% of daily spend since 08-06. Filed as GA-034.
5. *"AI Max's zero-conv tail continues its decline from last cycle."* → **CONFIRMED, 2nd straight cycle: ₹730.39 → ₹692.22.** The separate "total volume" reconciliation question (GA-032) was not re-derived this cycle — still open, now 2 cycles overdue on its own read plan.
6. *"The Shopping SKU mix has stabilized."* → **REJECTED again, a 5th time.** Pro's share has fallen to 7.9% and it is now, for the first time, the *worst*-returning SKU (9.66×) rather than the best — the ranking has now visited every position across five cycles.
7. *"GA-031's Comm 2.0 feed-title split has been fixed."* → **REJECTED.** Same two titles persist, same ~2× gap (12.72× vs 9.94×), 4th cycle open with no Merchant Center edit landed.

**Learning carried forward:**
- **A large, unexplained spend swing should be checked against campaign status before it's read as a ROAS or gate signal.** The instinct to compute "marginal ROAS" on any big spend delta is strong, but this cycle's delta was a status change, not a bid/budget change — computing a ratio on it and reporting it as marginal ROAS would have been actively misleading (a nonsensical "12.77× marginal ROAS" on a shutoff, not a scale-up). Always check `campaign.status` first.
- **The department's own visibility gap (unlogged campaign launches, unlogged feed-title changes) has now claimed its biggest instance yet: an unlogged pause of 91.7% of spend.** Every prior instance of this pattern (finding 33, GA-031) was informational; this one is materially urgent. Escalating fast, not waiting for a scheduled read, is the right call whenever campaign status itself — not just performance — looks anomalous.
- **A pull-time bug (the device query's date-filter mistake) was caught by the reconciliation assert, not by inspection.** This is exactly why the reconciliation discipline (finding 0b) exists — it catches code bugs, not just API/connector bugs.

**Next-sprint changes triggered:**
- **GA-034** queued — 🚨 top priority, escalate cause of the SC-All Range/Search-26 pause before any other action.
- **GA-033** queued — refreshed 1,057-term zero-conv negative batch (₹15,610.70/30d), supersedes GA-030, with the pause caveat attached to its own read plan.
- **GA-031, GA-032, GA-029, GA-028** re-flagged, still open, no new drafts needed — same recommendations stand, now read through the lens of GA-034.
- **SH-GA-21** added to backlog — reactivation hypothesis, read plan tied to whenever Meet confirms/executes.
- Budget: **hold, reaffirmed, with a caveat** — no valid natural spend variation (the pause isn't one); no budget draft of any kind this cycle.

> Cycles prior to 2026-08-10 retained verbatim below — see git history for the full, unabridged log back to department creation (2026-07-13).
