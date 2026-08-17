# Google Ads — Learning Log

> The Monday full-audit appends here; `/standup` reads here. **Never delete an entry — supersede it.** The point of this file is that we never retry a dead end.

## HOW TO LOG

```
DATE | INITIATIVE | HYPOTHESIS | RESULT (confirmed/rejected/inconclusive) | LEARNING CARRIED FORWARD
```

## CONFIRMED PATTERNS (institutional truths)

0c. **🚨 NEW 2026-07-16 — a tracker status of "SHIPPED" is not evidence of execution. Always spend-check before trusting it.** Three items marked "✅ SHIPPED 2026-07-14" (99 negatives GA-009/010, tablet exclusion P1-1, SafeBuds Ivory exclusion P1-2) show **zero change in live spend** two days later: `open ear earbuds` (a GA-010 negative target) still spent ₹643.15/30d at 0 conversions; SafeBuds Ivory still spent ₹751.20/30d at 11.24× ROAS; tablet still spent ₹345.32/30d total across campaigns. queue-inbox.md had already flagged GA-009/010 as "BLOCKED: Windsor write actions disabled" — the tracker's status update was written without checking whether the block had cleared. **Institutional rule: a "SHIPPED" or "EXECUTED" status must be corroborated by a subsequent spend pull before it is trusted or built upon.** **Reconfirmed 2026-08-03: GA-020's batch (₹18,253.45/30d, drafted 07-27) shows a nearly identical waste total a week later (₹17,629.87/30d, same top terms) — still no evidence of execution, 4th consecutive cycle this pattern holds.** **Reconfirmed a 9th straight cycle 2026-08-17: GA-035's batch (₹14,593.55/30d) shows ₹12,441.81/30d on a fresh, equally-unfiltered pull one cycle later — down modestly, still not the collapse-toward-₹0 that would indicate execution. Refreshed as GA-040.**

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

   **Reconfirmed again 2026-07-16:** SKU and device pulls, taken unfiltered, reconciled exactly to their parent campaign totals (0 variance on all three campaigns) on a fresh window (16 Jun–15 Jul). **Reconfirmed a 3rd time 2026-07-27 on the direct API (not Windsor):** SKU sum ₹45,693.68 vs campaign ₹45,693.68 (0 variance); device sum ₹8,922.91/₹45,693.68 vs campaign totals (0 variance). **Reconfirmed a 4th time 2026-08-03:** SKU sum ₹41,792.26 vs `SC - All Range` ₹41,792.26 (0 variance); device sum ₹51,536.38 vs 30d account total ₹51,536.38 (0 variance). **Reconfirmed a 5th time 2026-08-10:** SKU sum ₹36,823.10 vs `SC - All Range` ₹36,823.10 (0 variance). A NEW variant of this same discipline caught a **self-inflicted** bug this cycle, not an API/connector one: the device pull (pull 6) has no `segments.date` selected (it is already a window aggregate), and a first-draft re-filter-by-a-then-absent-date field silently zeroed the entire device breakdown. The reconciliation assert (device sum vs account total) failed loudly, was caught in-session, and the bug was fixed before anything was reported — the same discipline that catches API filter bugs also catches code bugs, which is exactly why it's a standing rule and not a one-time check. **Reconfirmed a 6th time 2026-08-13:** SKU sum ₹34,407.99 vs `SC - All Range` ₹34,407.99 (0 variance); device sum ₹46,397.35 vs 30d account total ₹46,397.35 (0 variance). **Reconfirmed a 7th time 2026-08-17:** SKU sum ₹30,032.44 vs `SC - All Range` ₹30,032.44 (0 variance); device sum ₹42,525.80 vs 30d account total ₹42,525.80 (0 variance).


0. **🚨 NEVER FILTER ON `conversions == 0`. IT NEARLY DESTROYED THE ACCOUNT (2026-07-13).** Windsor returns a search term as *several* rows, segmented by dimensions you did not request. Filtering `conversions == 0` keeps only the **non-converting slices** and hides the converting ones — so a term that earned ₹42,589 comes back looking like a zero.

   A `conversions == 0` filter produced the "34 zero-conversion search terms" list (GA-002, ₹2,709 of claimed waste). It contained **`ng earsafe` (₹42,589 / 17.6 conv), `ngearsafe` (₹19,420), `bone conduction headphones` (₹24,703), `wehear earbuds` (₹7,757), `open ear headphones` (₹5,332)** — the brand, the best conquest term, and the top category term. **Executing it would have negatived 41 conversions and ₹1,13,234 — 25% of all Google-paid revenue.** Meet asked for it to be executed. It was caught in pre-flight, minutes before the write.

   **The only safe method:** pull every row with **no conversions filter**, aggregate per search term in code, then select terms whose **TOTAL** 30-day conversions == 0. Nine terms clear that bar (~₹1,154) — not thirty-four (₹2,709).

   **And a hard rule on top of the method: never negative a brand term. Ever.** If brand looks like a zero, the pull is wrong, not the brand.

   **🚨 2026-07-27 addendum: the same discipline caught a second, subtler failure mode this cycle.** `ear safe headphones` was correctly zero-conversion when GA-015 was drafted (2026-07-23, ₹302.04). By 2026-07-27 it shows **0.20 conversions** in a fresh aggregate — it converted *after* the batch was drafted but *before* it was ever executed (execution is still unconfirmed / blocked). **A negative-keyword batch is not "safe forever" just because it was safe when drafted — re-verify against a fresh aggregate immediately before every execution, not just at draft time.** GA-020 supersedes GA-015 for this reason. **Reconfirmed 2026-08-03: `ear safe headphones` was correctly re-excluded again this cycle (still converting, 0.20+ conv carried over) — GA-023 re-verified against the fresh 4 Jul–2 Aug aggregate before drafting, per this rule.** **Reconfirmed again 2026-08-10: the bare term `ear safe` (distinct from `ear safe headphones`) shows 3 conversions/₹144.40 this window and is correctly excluded from GA-033.** **Reconfirmed a further time 2026-08-13: bare `ear safe` now shows 3 conversions/₹6,647.10 this window (up sharply) — still correctly excluded.** **🚨 NEW variant caught 2026-08-17: the same discipline this cycle flagged `safe buds` (₹79.89, 0 conv) — technically clears the zero-conv bar, but it's a bare-name query for our own WeHear SafeBuds product line, not a generic category term. Held out of GA-040 on the same caution as brand-adjacent terms, even without a proven conversion history yet — the rule generalizes beyond "has this literally converted before" to "could this plausibly be a branded/product query."**


1. **The platform overclaims by ~49%.** 30d to 2026-07-12: Google claims **13.93×** / 231.7 conversions; GA4 `google/cpc` credits **9.38×** / 133 transactions. Every scale decision is made on the GA4 number. *(Consistent with `GoogleAds_Measurement_Incrementality_Plan.md`: Google + Meta together claim ~102% of all revenue.)* **Reconfirmed 2026-07-16** on an overlapping 30d window (16 Jun–15 Jul): TRUE ROAS 9.44×, platform 13.73×, overclaim 45.5% — directionally consistent. **Reconfirmed again 2026-07-27 (first fully direct-API sanity anchor re-run, 13 Jun–12 Jul): TRUE ROAS 9.3787× — exact match to the published 9.38× anchor — overclaim 54.2%, still in-band.** **Reconfirmed a 3rd time 2026-08-03, same anchor window, same pipeline: TRUE ROAS 9.3787×, overclaim 54.2% — bit-for-bit identical to the 07-27 read.** **Reconfirmed a 4th time 2026-08-10, same anchor window: TRUE ROAS 9.3787× again, 6th consecutive reproduction.** **Reconfirmed a 5th time 2026-08-13, same anchor window: TRUE ROAS 9.3787× again, 7th consecutive reproduction.** **Reconfirmed an 8th consecutive time 2026-08-17, same anchor window: TRUE ROAS 9.3787× exactly, overclaim 54.2% — the pipeline is unambiguously sound. This cycle's own live windows read materially worse than the anchor: 30d (18 Jul–16 Aug) TRUE ROAS 7.73×/overclaim 77.2%; last-7d (10–16 Aug, a genuinely stable, non-transition window) TRUE ROAS 7.31×/overclaim 79.3% — the highest *stable-window* overclaim reading on record, above the 65% band ceiling, on the exact day (17 Aug) the account needed it fixed.**

1b. **🚨 NEW 2026-07-16 — the overclaim ratio itself can signal a data-integrity break, not an attribution improvement.** The last-7d window (09–15 Jul) showed overclaim collapsing to 6.6% (platform 6.68× vs TRUE 6.26×) — wildly outside the normal 35–65% band. This is **not** evidence of better measurement; that window contains the known missing-spend-day gap (no Google Ads row for 07-09, ₹1.29 for 07-10), which understates spend on both sides of the ratio unevenly. **A missing-data gap can produce an overclaim reading that looks like a fix but is actually contamination.** Always check for known gaps before reading an out-of-band overclaim as a signal. **Reconfirmed a 2nd time 2026-07-27, a 3rd time 2026-08-03 (07-26 backfill), a 4th time 2026-08-10 (pause), a 5th time 2026-08-13 (reactivation phase).** **🚨 A 6th instance, 2026-08-17: the prior-7d window (03–09 Aug) reads 237.6% overclaim — wildly out-of-band — because it straddles the exact pause transition (Search-26 paused 08-04, SC-All Range went dark 08-05 mid-window). The last-7d window (10–16 Aug), by contrast, is now genuinely stable (no status change after day 1) and its 79.3% overclaim is NOT explained by this pattern — it is a real, elevated reading that needs to be read as a live measurement problem, not dismissed as transition noise. Distinguishing "transition-contaminated" from "genuinely elevated" now matters more than ever, and the discipline is: check whether campaign status was constant for the whole window, not just whether the number looks unusual.**

2. **Doubling the budget produced negative marginal return.** 11–12 Jul 2026: ₹1,801/day → ₹3,589/day. TRUE ROAS **11.50× → 6.20×**. The incremental **+₹1,788/day of spend bought +₹1,543/day of revenue — marginal ROAS 0.86×.** Sessions rose **+23%** (397 → 488/day) while revenue per session collapsed. **We bought traffic, not customers.**

3. **…and that move also triggered a learning phase, which is the deeper lesson.** Guide Ch 10: a budget change **>20% in either direction** resets Smart Bidding into a 1–2 week learning phase, during which volatility is *expected*. We changed by ~100%. So the 6.20× is **contaminated**. **This is exactly why the ≤20% ratchet exists.** **2026-08-10 note: a full campaign PAUSE is the inverse extreme of this lesson.** **2026-08-13 note: a REACTIVATION is the same lesson running forward — treat its first 7 days with the same discipline as a budget-jump's first 7 days: no verdict, wait for the window to mature.** **2026-08-17 update: that maturation has now happened — `SC - All Range`'s reactivation completed its first full 7-day window (10–16 Aug) this cycle, and the read is now trustworthy. See finding 55/GA-041/SH-GA-21 — CONFIRMED. The discipline of waiting exactly 7 days before reading a status-change window paid off with a clean, actionable answer instead of noise.**

4. **₹1,800/day is the proven operating point.** wk2 ₹1,701/day → 11.22×; wk3 ₹1,801/day → 11.50×. **2026-08-13: with `SC - All Range` reactivated, blended spend across the last 3 days was ~₹1,762/day — within the proven range but too young to credit.** **2026-08-17: now with a full mature week, blended account spend across 10–16 Aug is ₹1,609.77/day (₹11,268.42/7) — still below the ₹1,800/day historical operating point, consistent with Search-26 remaining paused (≈11% of historical spend share still missing), not with any change in per-campaign spending discipline.**

5. **Lost impression share is RANK, not budget — but this needs re-confirming per campaign every cycle, not assumed.** **🚨 CONFIRMED, no longer a single-cycle read, 2026-08-03: `Search-26` Budget-lost 68.5% vs Rank-lost 21.0%. `SC - All Range` Budget-lost 67.7%. `SafeBuds-Search-28th July'26` Budget-lost 57.8% from its first read. All three active campaigns are Budget-impression-share-limited.** **2026-08-13: `SC - All Range` (reactivated) 71.7% Budget-lost / 10.6% Rank-lost. `Search-26` (paused) 77.1% Budget-lost, informational only. `SafeBuds-Search` 39.3% Rank-lost / 51.8% Budget-lost.** **2026-08-17: `SC - All Range` 73.1% Budget-lost / 10.2% Rank-lost (consistent). `Search-26` (still paused) 77.4% Budget-lost, informational only. `SafeBuds-Search` 59.9% Budget-lost / 31.2% Rank-lost — more Budget-lost-leaning than last cycle's 51.8%/39.3% split, but still the most Rank-lost of the three live campaigns as it continues to scale.**

6. **High CTR with zero conversions is a landing-page problem.** `Search | SafeBuds | OWS + Conquest`: ₹1,011 spent, **12.57% CTR**, **0 conversions.** Never answer this with a bid change. **🚨 Confirmed and fully diagnosed 2026-08-04 (GA-029)** — the live successor's BROAD-match mistake is independently reconfirmed AGAIN 2026-08-17 at fresh keyword-level granularity (55/84 keywords still BROAD, 70.8% of the campaign's keyword spend, 71.5% of its conversions) — see finding 56/GA-042, superseding GA-029/GA-039.

7. **A missing date in a connector pull is not a zero.** Google Ads returned **no row at all** for 2026-07-09 and **₹1.29** for 2026-07-10. **Reconfirmed 9 times through 2026-08-13.** **Reconfirmed a 10th time 2026-08-17, on a wide 65-day pull (13 Jun–16 Aug):** 07-09 still present. 07-18 and 08-02 are STILL present, now 6+ cycles old. **07-18's shape has hardened further this cycle: it carries REAL, non-trivial GA4 google/cpc revenue with ZERO matched Ads spend that day** — this is no longer just "unexplained," it is now confirmed to be actively distorting the 30-day TRUE ROAS figure upward (free revenue, no cost), and is called out explicitly in this cycle's published report rather than silently absorbed. 08-05 remains the confirmed GA-034 pause day (genuine ₹0 both sides). 08-02 remains the confirmed standing zero-activity day (genuine ₹0 both sides).

## NEW FINDINGS — 2026-08-17 (Monday teardown, window 18 Jul–16 Aug, direct-API — 8th direct-API cycle)

55. **🚨 THE HEADLINE — SH-GA-21 CONFIRMED, exactly on its own read-plan date.** `SC - All Range`'s reactivation (2026-08-10, a ₹0-ratchet status toggle) completed its first full, clean 7-day window this cycle (10–16 Aug). Account GA4 google/cpc revenue/day averaged **₹11,772.36** vs the ₹14,300.85 pre-pause baseline — **82.3% of baseline**, inside the 20%-band success criterion the hypothesis set. This is the first genuinely new, decisive, non-contaminated result of the cycle: the account's biggest single lever this month wasn't a bid or budget change, it was un-breaking an accidental pause. Filed as **GA-041** (informational close-out). GA-034's separate question — *why* was either campaign's status changed in the first place — remains open; SH-GA-21 answers "does reactivating help," not "what caused this."

56. **The overclaim is now reading worse in a window that can no longer be blamed on transition contamination.** Last-7d (10–16 Aug) is the first fully mature post-reactivation week — Search-26 stably paused the whole window, SC-All Range stably enabled after day 1 — and its overclaim reads **79.3%**, the highest *stable-window* reading yet, well above the 65% band ceiling and up from the 54.2% anchor. Because this window has no mid-window status flip, the standard "it's contamination" explanation (finding 1b) does not apply here the way it did to 08-10's and 08-13's short-window readings. This is either the duplicate-conversion-tracking problem worsening, or a genuine mix effect from Search-26 (the lowest-platform-inflation campaign, 10.20×) being fully out of the mix while SafeBuds-Search (18.35×, the most inflated) grows. Either way, it lands on the exact day P0-1 was supposed to have been fixed — it hasn't been, and the number just got worse, not better.

57. **`SafeBuds-Search-28th July'26`'s BROAD-match problem re-verified at keyword level for the first time since diagnosis, and it is unchanged in structure, worse in scale.** 55/84 keywords are still BROAD, carrying ₹5,271.83 (70.8%) of the campaign's ₹7,441.73 keyword-level spend and 71.5% of its conversions — the same shape as 2026-08-04's original diagnosis, now on a campaign that has grown to 18.0% of account spend (up from ~12% at diagnosis). The fix (BROAD→PHRASE/EXACT + brand negatives) has never been executed. Filed as **GA-042**, superseding GA-029/GA-039 with fresh, not merely re-asserted, evidence.

58. **`open ear headphones` broke its zero-conversion streak — one data point, not yet a close-out.** After 6 consecutive cycles at exactly zero conversions (escalated to an active investigation as GA-036 last cycle), this cycle's fresh pull shows **1.5 conversions / ₹3,278.50 value**. This is consistent with the investigation's working hypothesis (a tracking/lag artifact, not real demand collapse) but is only one data point — the standing discipline (finding "5 cycles is long enough to stop assuming lag") cuts both ways: one good cycle isn't enough to declare the investigation closed either. Held open for one more confirming read.

59. **AI Max's zero-conversion tail rose this cycle, reversing three straight cycles of decline.** ₹576.80 (08-13) → **₹773.12** (08-17), 46 zero-conv terms (up from 40). GA-013 (approved 2026-08-04) remains unexecuted; this reversal makes execution more urgent, not less — the trend this batch was riding down has stopped.

60. **Shopping SKU mix rotated an 8th time — same lesson, same non-action.** Reconciled exactly to `SC - All Range`'s ₹30,032.44: Comm 2.0 (brand-first title) ₹14,589.77 (48.6%, 11.50×); SafeBuds Black ₹12,559.77 (41.8%, 14.93×); Comm 2.0 (backwards title, GA-031) ₹2,376.89 (7.9%, 8.27× — 28% worse than its brand-first sibling, the widest gap yet recorded for this split); EarSafe Lite (the ex-"Pro" SKU) ₹506.01 (1.7%, 35.94× — best-returning again, smallest share again). Do not act on any single cycle's ranking.

## DEEP-DIVE FINDINGS — 2026-07-13 (first expert teardown, 30d to 12 Jul)

> These came from the keyword/search-term/SKU/device/IS pulls, not the campaign roll-up. **They are the reason the agent is an operator, not a reporter** — none of this is visible at campaign level.
> ⚠️ All sub-account ROAS below is **platform-claimed** (inflated ~49–79% depending on cycle). Use it to **rank**, never as an absolute.

8. **🚨 RETRACTED — "The Quality Score scandal" was FALSE. It was a data artifact.** Real QS is 7–8, not summed values in the hundreds. **Reconfirmed an 8th consecutive time 2026-08-17 (1,782 keyword rows, 18 Jul–16 Aug): max QS observed = 10, exactly one keyword (`open earbuds`, QS 4, `SafeBuds-Search`) carried any spend at QS≤4 — ₹75.82, 0 conv. The scandal stays dead; this is now a routine, tiny, isolated finding, not a pattern.**

9. **⭐ AI Max is ALREADY ON** (`Search-26 May 25`). It is matching junk. The job is to rein it in, not "enable" it. **See finding 59 for the current-cycle update — the zero-conv tail rose this cycle (₹576.80→₹773.12), reversing a 3-cycle decline.**

10. **🚨 RETRACTED — "Shopping SKU mix is upside-down" was FALSE.** Third Windsor filter artifact of the day, caught by Meet not the agent. The mix has since rotated through **every** best/worst position across **eight consecutive cycles** — see finding 60. **Do not resurrect any Pro- or Comm-2.0-focused framing in either direction.**

11. **Tablet is a free kill — but narrowed, per-campaign, not a blanket truth.** `SC - All Range` tablet still converts (₹183.23, 1 conv, 15.82× this cycle) — never cut. `Search-26` tablet still dead (₹58.55, 0 conv, campaign paused anyway). `SafeBuds-Search` tablet still dead weight and growing (₹271.89, 0 conv, up from ₹257.61 last cycle) — GA-037, still pending execution.

12. **We bid against ourselves on brand — CLOSED PERMANENTLY 2026-07-23 as GA-018/SH-GA-10.** Stays closed through 2026-08-17. Brand spend this cycle confirmed present on all three live campaigns (Search-26 ₹1,307.83/28.77×, SC-All Range ₹3,395.37/42.04×, SafeBuds-Search ₹2,909.40/17.16×) — informational only, not re-opened.

13. **Conquest works and is starved.** `wehear earbuds`, `wehear safe buds`, `poly voyager free 60 true wireless earbuds` and family continue to show extreme returns on trivial spend. Still wildcard-protected, still never negatived, still deferred (P2-1).

14. **Zero-conversion category search-term waste — current live figure.** GA-012 (₹4,040.48) → GA-015 (₹17,784.14) → GA-020 (₹18,253.45) → GA-023 (₹17,629.87) → GA-030 (₹16,708.95) → GA-033 (₹15,610.70) → GA-035 (₹14,593.55) → now **GA-040 (₹12,441.81, 2026-08-17)** — see finding 0c. The total is drifting down modestly cycle over cycle but has never collapsed toward ₹0, which is what execution would look like.

15. **Windsor field constraint:** `quality_score` **cannot** be queried together with impression-share fields (Google API restriction). Confirmed still true on the direct Google Ads API every cycle since 2026-07-27, including 2026-08-17.

16. **⭐ Word-boundary regex is mandatory for any brand/negative-keyword filter, never plain substring `in`.** Applied again 2026-08-17 for GA-040 — same regex, same clean release of generic terms, same clean capture of the full brand family as brand-protected. **This cycle additionally required judgment beyond the regex** — `safe buds` cleared the regex (no brand/conquest token matched) but was still manually held out as a product-adjacent query. The regex is necessary but not sufficient; a human-judgment pass for product-line-adjacent terms is now part of the standing method.

## NEW FINDINGS — 2026-07-16 (Thursday follow-up, window 16 Jun–15 Jul)

17. See item 11 above (tablet narrowed).

18. **Marginal ROAS on the 11–12 Jul budget spike — CLOSED 2026-07-23 at −3.64× (fully matured 10-day read).** Reaffirmed every cycle since, including 2026-08-17: no new valid natural spend variation (the raw last7-vs-prior7 delta this cycle, 9.28×, is a campaign-status-transition artifact, not deliberate budget evidence — see finding 1b/56). Gate stays CLOSED on the standing −3.64× finding.

19. **`SC - All Range` remains Lost-Budget, not Lost-Rank — reconfirmed every cycle, including 2026-08-17 (73.1% Budget-lost vs 10.2% Rank-lost).** `Search-26` (still paused) reads 77.4% Budget-lost, informational only. `SafeBuds-Search` reads 59.9% Budget-lost / 31.2% Rank-lost. No new action — the marginal-ROAS gate still governs, and it's closed.

20. See item 12 above (brand comparison).

## NEW FINDINGS — 2026-07-23 (Thursday follow-up, window 23 Jun–22 Jul, direct-API pulls — Windsor fully retired)

21. **⭐ Migration to direct Google Ads + GA4 APIs complete and validated.** Sanity anchor reproduced **exactly 9.3787×** every cycle since, **8 consecutive reproductions through 2026-08-17.**

22. **🚨 The ROAS-direction bug — caught in-session, before publishing.** TRUE ROAS = revenue ÷ spend, never the reverse. **Institutional rule: any TRUE ROAS reading under ~2× on this account is itself a red flag — check the division direction before trusting it.**

23. **⭐ P0-3 / SH-GA-7 (marginal ROAS re-read) is now CLOSED on a fully-matured read: −3.64×.** Reaffirmed every cycle since 2026-07-23 through 2026-08-17 — no genuine natural spend variation has occurred.

24. **🚨 GA-011's execution-failure finding — RESOLVED (as moot) 2026-08-03.** The write-path question now rides on whether GA-040's fresh batch shows any spend reduction on the 2026-08-20 read — still unresolved as of 2026-08-17.

25. **Zero-spend/anomaly day history — see finding 7 for the full, updated history through 2026-08-17.** 07-18 and 08-02 remain present and unexplained, now 6+ cycles old; 07-18's distorting effect on TRUE ROAS is now explicitly quantified-as-a-risk (not just noted) in this cycle's published report.

26. **SH-GA-10 (brand cannibalization) — REJECTED, CLOSED PERMANENTLY 2026-07-23 as GA-018.** Not re-examined since; stays closed through 2026-08-17.

27. **Search-term-view does not fully cover Shopping campaign spend — a real, disclosed, structural limitation.** This cycle (18 Jul–16 Aug): ₹29,554.61 of ₹42,525.80 (₹12,971.19/30.5% gap) — consistent with the standing ~28–31% structural gap.

28. **The true scale of zero-conversion search-term waste is ~4.4× larger than the original naive estimate once genuinely unfiltered** — see finding 14 for the current, 8th-cycle figure.

## NEW FINDINGS — 2026-07-27 (Monday teardown, window 27 Jun–26 Jul, direct-API — first fully curl-based Ads client)

29. **Shopping SKU mix has flipped repeatedly** — see finding 10/60 for the full eight-cycle history. Do not resurrect any Pro- or Comm-2.0-focused framing.

30. **AI Max leakage grew, then reversed, then rose again — see finding 9/59 for the full history.**

31. **A drafted-but-unexecuted negative-keyword batch is not "safe forever" — it must be re-verified immediately before push, not just at draft time.** Re-applied every cycle since, including 2026-08-17 for GA-040 (bare `ear safe` and `ear safe headphones` re-verified converting and correctly excluded again; `safe buds` newly held out on judgment grounds — see finding 16).

32. **The GA-016 write-path-failure test has a blind spot: single-click terms can't distinguish "broken" from "no new activity." RESOLVED as moot 2026-08-03.**

## NEW FINDINGS — 2026-08-03 (Monday teardown, window 4 Jul–2 Aug, direct-API — 4th direct-API cycle)

33. **A new, previously-unlogged campaign is live: `SafeBuds-Search-28th July'26` (24068804553).** See finding 57 for its confirmed, sustained clearance of the ROAS floor through 2026-08-17, now the account's 2nd-largest live spender (18.0% of account spend).

34. **All three active campaigns were Budget-impression-share-limited as of 2026-08-03 — a genuine structural shift, not a green light.** See institutional pattern 5's full update through 2026-08-17.

35. **The zero-conversion search-term waste total stopped growing and started holding steady, then drifting down modestly — see finding 14 for the now 8-cycle-long update.**

## AD-HOC FINDINGS — 2026-08-04 (Slack request: audit `Search | SafeBuds | OWS + Conquest`, keywords to add)

36. **⭐ P0-4 fully diagnosed. There is no keyword to add — every search term the campaign ever captured converted at zero.** **The live successor's BROAD-match leak (SH-GA-18) is reconfirmed at fresh keyword-level granularity 2026-08-17 — see finding 57/GA-042, superseding GA-029/GA-039.**

## NEW FINDINGS — 2026-08-06 (Thursday follow-up, window 7 Jul–5 Aug, direct-API — 5th direct-API cycle)

37. **GA-023 still not executed — refreshed as GA-030.** Superseded since by GA-033, GA-035, now GA-040.

38. **`open ear headphones` reads 0 conversions despite a strong history and QS 7 — see finding 58 for the 2026-08-17 update: the streak broke this cycle (1.5 conv), one data point, investigation held open one more cycle.**

39. **The AI Max "total volume" figure (GA-025) does not reproduce on an identical re-pull — CLOSED 2026-08-13 as an aggregation-grain mismatch, not a live bug. Stays closed.**

40. **SH-GA-17 (new `SafeBuds-Search-28th July'26` campaign) CONFIRMED on its first fully-matured read, and reconfirmed every cycle since through 2026-08-17 (18.35× platform, now 18.0% of account spend).**

41. **SH-GA-18 (BROAD→PHRASE/EXACT fix on the same campaign) confirmed NOT executed — reconfirmed at fresh keyword-level granularity 2026-08-17, re-escalated as GA-042.**

42. **Comm 2.0's Shopping feed title split into two variants, unlogged, backwards from guidance — GA-031, still unresolved as of 2026-08-17 (8th cycle), gap now the widest yet recorded (28% worse).**

43. **2026-08-02 remains a confirmed standing zero-activity day; 08-05 remains the confirmed GA-034 pause day — both stable, non-mysterious as of 2026-08-17. 07-18 remains genuinely unexplained and is now confirmed to be actively distorting the 30d TRUE ROAS figure.**

## AD-HOC FINDING — 2026-08-17 (SH-GA-21 read-plan maturation)

44. **See finding 55 — SH-GA-21 CONFIRMED on its exact scheduled read date.** This is the first hypothesis in the backlog to go from "open" to "confirmed" purely by the calendar catching up to a read plan set two cycles earlier, without any new action being taken in between. The discipline of setting a specific future read date, rather than "wait and see," is what made this a clean, actionable confirmation instead of another ambiguous short-window reading.

## REJECTED / DEAD ENDS

- **Candidate for rejection, pending the 19 Jul read:** *"Google Ads has headroom at ₹3,600/day."* **CLOSED PERMANENTLY 2026-07-23 at −3.64× (GA-019). Reaffirmed every cycle since through 2026-08-17.**
- *"Tablet is a blanket free kill, all campaigns."* **Superseded 2026-07-16 — narrowed, per-campaign.** As of 2026-08-17: `SC - All Range` still converts on tablet; `Search-26`/`SafeBuds-Search` tablet still dead (GA-037 still pending).
- **GA-005 / SH-GA-10 — "Brand de-duplication has a stable, actionable gap."** **REJECTED, closed permanently 2026-07-23.** Stays closed through 2026-08-17.
- **"Google Ads has headroom above ~₹1,800/day."** **REJECTED, closed 2026-07-23.** Stays closed through 2026-08-17 — no genuine natural variation has occurred.
- **"Shopping SKU mix is upside-down, Pro is the problem."** *(old GA-004)* **Stays retracted/superseded — see finding 60.** The mix has now rotated through every best/worst position eight times; do not resurrect any Pro- or Comm-2.0-focused framing in either direction.
- **"`Search \| SafeBuds \| OWS + Conquest` needs more/better keywords."** *(P0-4)* **REJECTED — see finding 36/GA-029.** Unchanged 2026-08-17.
- **"GA-032's AI Max total-volume figure is a real, unresolved data-integrity issue."** **CLOSED 2026-08-13 as EXPLAINED, not retracted as false.** Stays closed.
- **"`open ear headphones`'s zero-conversion reading proves demand has collapsed."** *(implicit in 6 cycles of zero-conv reads)* **NOT SUPPORTED as of 2026-08-17** — the streak broke this cycle (1.5 conv). Don't treat either one zero streak or one recovery as conclusive; the investigation (GA-036) stays open one more cycle.

## SCALE HYPOTHESIS BACKLOG (per COMPANY_STATE §5.5 — test → validate → scale)

| # | Hypothesis (metric + threshold) | Test (smallest move) | Status | Linked queue |
|---|---|---|---|---|
| **SH-GA-13** | Cutting zero-return spend at flat budget lifts TRUE ROAS toward the 9–11× band within one attribution window | Claimed shipped 2026-07-14. | 🔴 **BLOCKED — confirm execution first.** Superseded in scale by every batch since, now GA-040. | GA-011 |
| **SH-GA-14** | A `Search-26`-only tablet exclusion recovers spend without forfeiting `SC - All Range`'s tablet revenue | One device bid modifier, Search-26 only | 🟡 **OPEN, moot while `Search-26` stays PAUSED as of 2026-08-17.** | GA-014, GA-024 |
| **SH-GA-1** | Fixing the duplicate conversion action closes the overclaim to **<20%** | P0-1 — deduplicate, put the Shopify-pixel action in the bidding goal | ⬜ **OPEN — still not started as of 2026-08-17, the exact 17 Aug deadline day. Overclaim reading has WORSENED (54.2%→77–79%) since this was first identified, not improved.** | — |
| **SH-GA-2** | With corrected values, a tROAS re-baselined to ~7.0–8.0 holds TRUE ROAS ≥ 9.0 *and* survives the 17 Aug change | P0-2 — walk the target in ≤15%/week steps | ⬜ BLOCKED by SH-GA-1 — **17 Aug has now arrived with this blocker still unresolved.** | — |
| **SH-GA-3** | **AI Max** delivers the guide's **+34% CVR** on `Search-26 May 25` | P2-1 — one-click experiment | ⬜ BLOCKED by SH-GA-1, and `Search-26` remains PAUSED | — |
| **SH-GA-4** | Raising Ad Strength to Excellent recovers Lost-IS-Rank **without** extra budget | P1-2 — 8–10 headlines / 3–4 descriptions per ad group | ⬜ OPEN — QS is already 7–10 on open-ear terms (reconfirmed 2026-08-17, 8th cycle); Rank-lost remains secondary to Budget-lost | — |
| **SH-GA-5** | Rewriting Shopping feed titles to `[Brand]+[Type]+[Feature]+[Variant]` lifts `SC - All Range` TRUE ROAS above 11.5× | P1-3 — Merchant Center feed-rule A/B | ⬜ OPEN — narrowed to Comm 2.0, see SH-GA-16/GA-031, still unresolved 8th cycle as of 2026-08-17, gap now widest yet (28%). | — |
| **SH-GA-6** | **Enhanced Conversions** recovers a measurable share of the platform-vs-GA4 gap | P1-1 — enable; impact visible ~30 days after | ⬜ OPEN | — |
| **SH-GA-7** | The account has **any** budget headroom above ₹1,800/day at marginal ROAS ≥ 6.0 | +20% step, held 7 days, then read marginal | 🔴 **CLOSED — REJECTED 2026-07-23**, reaffirmed every cycle since through 2026-08-17. | GA-019 |
| **SH-GA-9** | Shopping is Lost-Budget not Lost-Rank — next budget dollar, once gates clear, should target Shopping specifically | Confirm on next IS pull; hold until marginal ROAS ≥ 6.0 | 🟢 **Reconfirmed 2026-08-17 (73.1% Budget-lost) — the marginal-ROAS gate still governs, and it's closed.** | — |
| **SH-GA-10** | A fixed brand-term whitelist shows a stable, actionable ROAS gap between Shopping and Search-26 brand traffic | Re-pull with same whitelist each cycle | 🔴 **CLOSED — REJECTED 2026-07-23.** Stays closed through 2026-08-17. | GA-018 |
| **SH-GA-15** | Three approved negative-keyword batches show zero execution after 10+ days — the block is structural (write path), not a stale read | Pilot: push ONE verified zero-conv, non-brand term as an EXACT negative | 🟡 **OPEN — the write-path question now rides on GA-040's 2026-08-20 read plan.** | GA-015, GA-016, GA-023, GA-030, GA-033, GA-035, GA-040 |
| **SH-GA-16** | Rewriting Comm 2.0's Shopping feed title lifts its platform ROAS toward Black's | One Merchant Center feed-rule edit, one SKU, ₹0 spend impact | 🟡 **OPEN, monitor-only — the split (GA-031) is still unresolved 8th cycle as of 2026-08-17, gap now 28% (widest yet).** | GA-020, GA-023, GA-031 |
| **SH-GA-17** | The `SafeBuds-Search-28th July'26` campaign sustains platform ROAS ≥ 6.0× | Observe only, no budget/bid change | ✅ **CONFIRMED, reconfirmed every cycle through 2026-08-17 (18.35× platform, now 18.0% of account spend).** | GA-026 |
| **SH-GA-18** | Converting the successor campaign's BROAD keywords to PHRASE/EXACT + adding brand negatives frees its starved conquest EXACT keywords | One keyword-level match-type edit + campaign-level brand negatives | 🟡 **OPEN — still NOT executed as of 2026-08-17. Re-escalated as GA-042 with fresh keyword-level evidence (55/84 BROAD, 70.8% of spend).** | GA-029, GA-039, GA-042 |
| **SH-GA-19** | The AI Max total-volume metric is internally consistent once re-derived step-by-step from raw rows | ₹0 methodology audit | ✅ **CLOSED 2026-08-13. Stays closed.** | GA-032, GA-038 |
| **SH-GA-20** | `open ear headphones`'s 0-conversion reading is a conversion-lag/tracking artifact, not a real demand drop | ₹0, observation only | 🟡 **PARTIALLY SUPPORTED 2026-08-17 — streak broke (1.5 conv this cycle) after 6 cycles at zero. One data point; hold one more cycle before closing.** | GA-030, GA-033, GA-035, GA-036 |
| **SH-GA-21** | If the `SC - All Range`/`Search-26` pause is confirmed accidental, reactivating both at their existing budgets restores GA4 revenue/day to within 20% of the pre-pause baseline within one 7-day window, with no marginal-ROAS penalty | Resume both campaigns, change nothing else (₹0 ratchet step) | ✅ **CONFIRMED 2026-08-17 — `SC - All Range` alone (Search-26 still paused) restored revenue/day to 82.3% of baseline (₹11,772.36 vs ₹14,300.85) over its first mature 7-day window. See finding 55/GA-041.** | GA-034, GA-041 |
| **SH-GA-22** | Excluding `SafeBuds-Search-28th July'26`'s TABLET slice at zero learning-phase cost will not measurably change the campaign's platform ROAS | One device-bid exclusion, ~₹9/day at risk | 🟡 **OPEN — still pending execution as of 2026-08-17. Tablet spend now ₹271.89/30d (up from ₹257.61), still 0 conv.** Read: 2026-08-27. | GA-037 |
| **SH-GA-23** | 🆕 2026-08-17 — Once the Search-26 pause cause is confirmed benign, reactivating it (status toggle, ₹0 ratchet cost) lifts account GA4 revenue/day further toward the full 3-campaign pre-pause baseline within 7 days, without marginal ROAS falling below 6.0× | Status toggle only, no budget/bid edit — contingent on Meet confirming cause first | 🟡 **NEW — OPEN, gated on GA-043 (cause confirmation), not on any ratchet.** Falsifier: if revenue/day doesn't move materially within 7 days of reactivation, Search-26 wasn't the missing piece. Read: 7 days after reactivation. | GA-043, GA-044 |

## CYCLE LOG (most recent first)

### 2026-08-17 — Monday teardown: the 17 Aug deadline arrives with P0-1 still unfixed and the overclaim at its worst stable-window reading yet; SH-GA-21 confirms the reactivation lever worked; zero-conv batch refreshed an 8th time; SafeBuds-Search's BROAD-match problem reconfirmed at keyword level

**Initiative:** Eighth direct-API cycle. One Python pass (2 OAuth exchanges — curl for Ads, `requests` for GA4 — 6 GAQL queries + 1 GA4 `runReport`), TRUE ROAS + marginal ROAS recomputed from scratch over a single wide 65-day campaign×day/GA4×day pull (sliced in code into the anchor, 30d, last-7d and prior-7d windows — no separate anchor query needed), cross-checked against the sanity anchor and every reconciliation assert (SKU sum, device sum, GA4 rowCount).

**Hypotheses tested:**
1. *"The direct-API pipeline still reproduces the sanity anchor."* → **CONFIRMED**, exact match an 8th cycle running: 9.3787× vs the 9.38× anchor.
2. *"The marginal-ROAS gate stays closed with no new valid evidence."* → **CONFIRMED.** This cycle's raw last7-vs-prior7 delta (9.28×) is a campaign-status-transition artifact (SC-All Range reactivating mid-comparison), not valid budget-ratchet evidence. −3.64× stands.
3. *"SH-GA-21's reactivation hypothesis can be read cleanly now that 7 days have matured."* → **CONFIRMED, decisively — the cycle's headline.** GA4 revenue/day (10–16 Aug) averaged 82.3% of the pre-pause baseline. Filed as GA-041.
4. *"GA-035's negative batch has executed since last cycle."* → **STILL NOT CONFIRMED.** A fresh, equally-unfiltered aggregate finds ₹12,441.81/906 terms — down modestly from GA-035's ₹14,593.55, not the collapse-toward-₹0 that would indicate execution. Refreshed as GA-040.
5. *"The overclaim is a transition artifact that will resolve once the account stabilizes."* → **REJECTED for the last-7d window specifically.** That window is now genuinely stable (no mid-window status change past day 1) and still reads 79.3% overclaim — the highest stable-window reading yet. This is either a worsening measurement problem or a genuine mix effect from Search-26's absence; either way it is real, not noise.
6. *"AI Max's zero-conv tail continues its decline."* → **REJECTED.** It rose this cycle (₹576.80→₹773.12), reversing 3 straight cycles of decline.
7. *"`open ear headphones` is still a real, ongoing zero-conversion problem."* → **REJECTED, but not yet fully resolved either.** The streak broke this cycle (1.5 conv) — one data point, investigation held open one more cycle rather than closed outright.
8. *"`SafeBuds-Search-28th July'26`'s BROAD-match structure has changed since the 08-04 diagnosis."* → **REJECTED.** Freshly re-checked at keyword level (not just re-asserted): still 55/84 BROAD, now carrying a larger absolute and proportional share of a bigger campaign.

**Learning carried forward:**
- **Setting a specific future read date, rather than "wait and see," is what turned SH-GA-21 into a clean confirmation instead of another ambiguous short-window reading.** The hypothesis was proposed 2026-08-10, given an explicit 7-day maturation date, and this cycle simply arrived on that date and read it — no new judgment calls needed at read time, because the discipline was applied at draft time.
- **"Transition contamination" is not a blanket excuse for every out-of-band overclaim reading — it has to be checked against whether the window in question actually contains a status transition.** This cycle's prior-7d (contaminated, 237.6%) and last-7d (not contaminated, 79.3% but genuinely elevated) sit side by side and require different verdicts. Applying the same excuse to both would have hidden a real, worsening problem behind a legitimate-sounding data-quality caveat.
- **A word-boundary brand/conquest regex is necessary but not sufficient for negative-keyword safety.** `safe buds` passed the regex cleanly but still needed a manual hold-out as a product-line-adjacent query. Automated filters catch known patterns; judgment is still required for product names that don't fit the brand-token list.

**Next-sprint changes triggered:**
- **GA-040** queued — refreshed 906-term zero-conv negative batch (₹12,441.81/30d), supersedes GA-035.
- **GA-041** queued — close SH-GA-21 as CONFIRMED (informational).
- **GA-042** queued — re-escalate the BROAD-match fix on `SafeBuds-Search`, superseding GA-029/GA-039, with fresh keyword-level evidence.
- **GA-043** queued — informational hold: do not reactivate `Search-26` until its pause cause is confirmed.
- **GA-044** queued — new TEST hypothesis (SH-GA-23), contingent on GA-043.
- **GA-037** re-flagged, still pending, refreshed evidence (₹271.89/30d).
- **GA-036** re-flagged, updated with the conversion-streak break, held open one more cycle.
- Budget: **hold, reaffirmed** — no new valid natural spend variation; no budget draft of any kind this cycle.

> Cycles prior to 2026-08-17 retained verbatim below — see git history for the full, unabridged log back to department creation (2026-07-13).

### 2026-08-13 — Thursday follow-up: GA-034 half-resolved (SC-All Range reactivated, Search-26 still paused), waste holds steady a 7th cycle, GA-032 closed as explained, open-ear-headphones escalated to investigation

**Initiative:** Seventh direct-API cycle. One Python pass (2 OAuth exchanges, curl-for-Ads/requests-for-GA4, 6 GAQL queries + 1 dedicated AI-Max reconciliation query + 1 anchor-window query pair), TRUE ROAS + marginal ROAS recomputed from scratch, cross-checked against the sanity anchor and every reconciliation assert. Corrected an in-session bug: the initial 30d TRUE ROAS computation only summed dates present in the Google Ads pull, silently dropping 2026-07-18's real GA4 revenue (₹3,658) because Ads had no row that day — caught before publishing, fixed by summing over the full calendar range instead.

**Hypotheses tested:**
1. *"The direct-API pipeline still reproduces the sanity anchor."* → **CONFIRMED**, exact match a 7th cycle running: 9.3787× vs the 9.38× anchor.
2. *"The marginal-ROAS gate stays closed with no new valid evidence."* → **CONFIRMED.** `SC - All Range`'s reactivation is a status toggle, not a budget change, and is only 3 days old regardless — not valid gate evidence either way. −3.64× stands.
3. *"GA-034's pause has been resolved."* → **PARTIALLY CONFIRMED.** `SC - All Range` reactivated 2026-08-10; `Search-26` remains PAUSED. Neither the original pause nor this partial reactivation has a confirmed cause from Meet.
4. *"GA-033's negative batch has executed since last cycle."* → **STILL NOT CONFIRMED.** A fresh, equally-unfiltered aggregate finds ₹14,593.55/1,016 terms, down only ~6.5% from GA-033's ₹15,610.70. Refreshed as GA-035.
5. *"AI Max's zero-conv tail continues its decline."* → **CONFIRMED, 3rd straight cycle: ₹730.39→₹692.22→₹576.80.**
6. *"GA-032's AI Max total-volume figure can be reconciled by re-deriving it from raw rows, scoped correctly."* → **CONFIRMED — root cause found.** Closed as EXPLAINED, not as a live bug.
7. *"The Shopping SKU mix has stabilized."* → **REJECTED again, a 6th time.** Pro's share fell to 1.5% but it is now the BEST-returning SKU (23.08×) — a full reversal from last cycle's "worst."
8. *"`open ear headphones`'s zero-conversion reading is still just a lag/observation, not worth investigating yet."* → **REJECTED.** 5 consecutive cycles at zero is long enough that passive monitoring is no longer the responsible default. Escalated to an active investigation.

**Learning carried forward:**
- **A campaign-status transition (pause OR reactivation) deserves the same "wait for 7 days, no verdict" discipline as a budget jump.**
- **A "total volume doesn't reconcile" flag should be investigated by asking what dimension each of the two readings was scoped to, before concluding either the connector or the reproducibility is broken.**
- **A missing-Ads-row day is not a zero on the GA4 side — this needs to be checked in code, not just asserted as a rule.**
- **Five cycles is the line past which "probably a data lag" stops being a responsible default and becomes an excuse not to look.** `open ear headphones` crossed that line this cycle.

**Next-sprint changes triggered:**
- **GA-035** queued, **GA-036** queued, **GA-037** queued, **GA-038** queued, **GA-039** queued, **GA-034** updated, **SH-GA-22** added.
- Budget: **hold, reaffirmed** — no new valid natural spend variation; no budget draft of any kind this cycle.

> Cycles prior to 2026-08-13 (2026-08-10 and earlier) retained verbatim below — see git history for the full, unabridged log back to department creation (2026-07-13).
