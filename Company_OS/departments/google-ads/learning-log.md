# Google Ads — Learning Log

> The Monday full-audit appends here; `/standup` reads here. **Never delete an entry — supersede it.** The point of this file is that we never retry a dead end.

## HOW TO LOG

```
DATE | INITIATIVE | HYPOTHESIS | RESULT (confirmed/rejected/inconclusive) | LEARNING CARRIED FORWARD
```

## CONFIRMED PATTERNS (institutional truths)

0. **🚨 NEVER FILTER ON `conversions == 0`. IT NEARLY DESTROYED THE ACCOUNT (2026-07-13).** Windsor returns a search term as *several* rows, segmented by dimensions you did not request. Filtering `conversions == 0` keeps only the **non-converting slices** and hides the converting ones — so a term that earned ₹42,589 comes back looking like a zero.

   A `conversions == 0` filter produced the "34 zero-conversion search terms" list (GA-002, ₹2,709 of claimed waste). It contained **`ng earsafe` (₹42,589 / 17.6 conv), `ngearsafe` (₹19,420), `bone conduction headphones` (₹24,703), `wehear earbuds` (₹7,757), `open ear headphones` (₹5,332)** — the brand, the best conquest term, and the top category term. **Executing it would have negatived 41 conversions and ₹1,13,234 — 25% of all Google-paid revenue.** Meet asked for it to be executed. It was caught in pre-flight, minutes before the write.

   **The only safe method:** pull every row with **no conversions filter**, aggregate per search term in code, then select terms whose **TOTAL** 30-day conversions == 0. Nine terms clear that bar (~₹1,154) — not thirty-four (₹2,709).

   **And a hard rule on top of the method: never negative a brand term. Ever.** If brand looks like a zero, the pull is wrong, not the brand.


1. **The platform overclaims by ~49%.** 30d to 2026-07-12: Google claims **13.93×** / 231.7 conversions; GA4 `google/cpc` credits **9.38×** / 133 transactions. Every scale decision is made on the GA4 number. *(Consistent with `GoogleAds_Measurement_Incrementality_Plan.md`: Google + Meta together claim ~102% of all revenue.)*

2. **Doubling the budget produced negative marginal return.** 11–12 Jul 2026: ₹1,801/day → ₹3,589/day. TRUE ROAS **11.50× → 6.20×**. The incremental **+₹1,788/day of spend bought +₹1,543/day of revenue — marginal ROAS 0.86×.** Sessions rose **+23%** (397 → 488/day) while revenue per session collapsed. **We bought traffic, not customers.**

3. **…and that move also triggered a learning phase, which is the deeper lesson.** Guide Ch 10: a budget change **>20% in either direction** resets Smart Bidding into a 1–2 week learning phase, during which volatility is *expected*. We changed by ~100%. So the 6.20× is **contaminated** — it is partly diminishing returns and partly self-inflicted recalibration, and we cannot separate them. **This is exactly why the ≤20% ratchet exists.** Never again read a post-jump number as a clean verdict.

4. **₹1,800/day is the proven operating point.** wk2 ₹1,701/day → 11.22×; wk3 ₹1,801/day → 11.50×. Every window at or below ~₹1,800/day cleared the 9–11× band. The single window above it did not.

5. **Lost impression share is RANK, not budget.** 76% / 47% on the two search campaigns. Ad Rank = Bid × QS × asset impact (Ch 2). **Budget cannot buy an impression you are losing on Rank.** The levers are Quality Score and Ad Strength.

6. **High CTR with zero conversions is a landing-page problem.** `Search | SafeBuds | OWS + Conquest`: ₹1,011 spent, **12.57% CTR** (vs the 3–5% Search average), **0 conversions**. The ad is working; the page is not. Never answer this with a bid change.

7. **A missing date in a connector pull is not a zero.** Google Ads returned **no row at all** for 2026-07-09 and **₹1.29** for 2026-07-10 (the account went dark). Silently zeroing a missing day corrupts every window that contains it. **Reconfirmed 2026-07-13, 4th pass: same gap, same two dates, still present — this is a persistent connector/account fact, not a one-off glitch.**

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

   **NG's open-ear Quality Scores are 7–8. Good. There was never a scandal.** The one genuine QS 0 is `outside ear earbuds` (₹975, 0 conversions) — but it sits in a campaign that is **already PAUSED**, so it is not spending. **Reconfirmed 2026-07-13, 4th pass, latest-day (2026-07-12) values: `open ear headphones`=7, `open ear wireless headphones`=8, `ng earsafe`=10, `earsafe headphones`=10 — stable.**

   **The lesson, and it is the important one: an aggregation that looks like a metric is not a metric.** Any QS reading above 10 is a sum — stop and re-pull with `date`. This finding was asserted confidently, emailed, and queued as work before anyone checked whether the number could even *be* a Quality Score. Nothing in the loop caught it, because everything downstream trusted the first number.

9. **⭐ AI Max is ALREADY ON** (`Search-26 May 25` — `search_term_match_type = AI_MAX`). **This corrects the 2026-07-13 department-creation entry, which assumed it was off and made it the headline scale lever (P2-1).** It is on, and it is matching junk: `truth hear`, `tecno earbuds`, `finger earphone`, `wehear` — ~₹270/30d, **zero conversions**. The job is to **rein it in** (brand exclusions, negatives, text guidelines) or prove it earns its keep — **not to "enable" it.**

10. **Shopping SKU mix is upside-down.** The highest-spending SKU has the worst return; the best-returning SKU gets the least budget.

    | SKU | 30d spend | share | ROAS | CPA |
    |---|---|---|---|---|
    | NG EarSafe **Pro** | ₹18,088 | **50%** | **11.33×** ← worst | ₹315 |
    | EarSafe **Comm 2.0** | ₹11,245 | 31% | 15.10× | ₹215 |
    | NG x WeHear **SafeBuds** | ₹6,488 | 18% | **15.27×** ← best | **₹140** |

11. **Tablet is a free kill.** ₹363 spent across every campaign, **0 conversions, ₹0 revenue**. Mobile 14.16×, Desktop 13.82×, Tablet 0×.

12. **We bid against ourselves on brand — but WHICH campaign is "better" depends entirely on which brand-term list you use.** Both `Search-26` and the Shopping campaign buy `ng earsafe`-family queries. A 6-term whitelist (GA-005's basis) shows Search-26 ahead (16.98× vs 12.60×); a wider word-boundary match across all `earsafe`/`ng ear safe` search terms (2026-07-13, 4th pass) shows the **opposite** — SC-All Range 20.33× vs Search-26 13.66×. **Neither computation is wrong; the term set is undefined.** See item 16 below and SH-GA-10 — GA-005 is on hold pending a fixed whitelist.

13. **Conquest works and is starved.** `wehear earbuds` **45.7–57.8×** (grows with a fuller aggregate) · `wehear safe buds` **26.7–53.9×** · `poly voyager free 60 true wireless earbuds` **55.2×** — on ₹50–135 each. The best return in the account, on trivial spend. Meanwhile `shokz openrun pro 2` (₹127) returns 0×. **Never negative bare `wehear` or reordered forms (`safe buds wehear`) — wildcard-protected even when a specific pull shows them at 0 conversions, since the family as a whole converts strongly.**

14. **~₹1,168/30d of zero-conversion category search terms** (original narrow list): `open ear earbuds` (₹338), `bone conduction earphones` (₹229), `open ear headphones` (₹186 across both campaigns), `bone headphones`, `running earphones`, `best open ear earbuds`, `open ear tws`, `bone conduction earbuds`, `ear conduction headphones`, `earphones with mic and noise cancellation`. **Superseded in scope by item 16 / GA-010 (86 terms, ₹2,637.18) — this was always an undercount because the original scan used a higher spend-filter and a narrower manual list.**

15. **Windsor field constraint:** `quality_score` **cannot** be queried together with impression-share fields (Google API restriction). They must be separate pulls. Attempting to merge them errors out.

16. **⭐ NEW 2026-07-13, 4th pass — naive substring brand-matching produces false positives; always use word-boundary regex.** Checking `'ng headphones' in term` or `'ng earphone' in term` as a brand filter wrongly flags fully generic terms: `swimming headphones` (contains "...mi**ng headphones**"), `running earphones` (contains "runni**ng earphone**s"), `running headphones wireless`, `swimming earphones`, `wired noise cancelling earphones with mic`. A word-boundary regex (`\bng\s+headphones\b`, `\bng\s+earphones?\b`, etc.) correctly releases these while still catching genuine brand variants. **Any future brand/negative-keyword filter must use word-boundary matching, never plain substring `in`.** This is also why GA-005's brand-vs-Shopping comparison and this pass's wider one disagree (item 12) — different, undocumented term sets, not different underlying reality.

## REJECTED / DEAD ENDS

- **Candidate for rejection, pending the 19 Jul read:** *"Google Ads has headroom at ₹3,600/day."* Provisionally **rejected** on the 11–12 Jul evidence (marginal ROAS 0.86×), reconfirmed directionally on 2026-07-13 (recomputed at 1.15× from a fresh pull, same sub-floor conclusion), reconfirmed a third time bit-for-bit on the 22:02 IST same-day re-pull (1.15×), and reconfirmed a **fourth** time on a clean-baseline recomputation at **1.43×** (23:xx IST pass). All four independent reads land well under the 6.0 gate. The read is still contaminated by the learning phase and still younger than the 7-day attribution period. **Re-read 2026-07-19 before writing this down as final.**

## SCALE HYPOTHESIS BACKLOG (per COMPANY_STATE §5.5 — test → validate → scale)

| # | Hypothesis (metric + threshold) | Test (smallest move) | Status | Linked queue |
|---|---|---|---|---|
| **SH-GA-1** | Fixing the duplicate conversion action closes the 49% overclaim to **<20%** | P0-1 — deduplicate, put the Shopify-pixel action in the bidding goal | ⬜ OPEN | — |
| **SH-GA-2** | With corrected values, a tROAS re-baselined to **~7.0–8.0** holds TRUE ROAS ≥ 9.0 *and* survives the 17 Aug change | P0-2 — walk the target in ≤15%/week steps | ⬜ BLOCKED by SH-GA-1 | — |
| **SH-GA-3** | **AI Max** delivers the guide's **+34% CVR** on `Search-26 May 25` | P2-1 — one-click experiment, 50/50, 2-week read | ⬜ BLOCKED by SH-GA-1 | — |
| **SH-GA-4** | Raising Ad Strength to Excellent recovers Lost-IS-Rank **without** extra budget (guide: +45% CTR vs Poor) | P1-2 — 8–10 headlines / 3–4 descriptions per ad group | ⬜ OPEN — **note 2026-07-13 4th pass: QS is already 7–10 on open-ear terms, so Ad Strength/bid is the remaining Rank lever, not QS** | — |
| **SH-GA-5** | Rewriting Shopping feed titles to `[Brand]+[Type]+[Feature]+[Variant]` lifts `SC - All Range` TRUE ROAS above 11.5× | P1-3 — Merchant Center feed-rule A/B on the top 20% of SKUs by spend | ⬜ OPEN | — |
| **SH-GA-6** | **Enhanced Conversions** recovers a measurable share of the platform-vs-GA4 gap | P1-1 — enable; impact visible ~30 days after | ⬜ OPEN | — |
| **SH-GA-7** | The account has **any** budget headroom above ₹1,800/day at marginal ROAS ≥ 6.0 | +20% step (₹1,800 → ₹2,160), held 7 days, then read marginal | ⬜ OPEN — **gated behind the 19 Jul re-read** | — |
| **SH-GA-9** | Shopping is Lost-Budget (49.0%) not Lost-Rank (7.4%) — next budget dollar, once gates clear, should target Shopping specifically | Confirm on next IS pull; hold until marginal ROAS ≥ 6.0 | ⬜ OPEN — double-gated (19 Jul re-read + ~26 Jul no-touch expiry) | — |
| **SH-GA-10** | ⭐ NEW 2026-07-13 4th pass — A fixed, word-boundary-safe brand-term whitelist (documented once, reused every pull) will show SC-All Range's blended brand platform ROAS exceeding Search-26's by >20%, reversing GA-005's premise | Re-pull search-terms 2026-07-20 with the same fixed whitelist used in this pass's appendix; compare ₹2,338.94/20.33× (Shopping) vs ₹2,308.13/13.66× (Search). No new spend — measurement-consistency test that gates GA-005. | ⬜ OPEN — **GA-005 held pending this** | GA-005 |

## CYCLE LOG (most recent first)

### 2026-07-13, 23:xx IST — Fourth Monday-read pass, same day: two new findings, budget hold reconfirmed a fourth time

**Initiative:** Fourth independent decode this calendar day (07:30, 22:02, 22:26, now 23:xx IST). Fresh Windsor pull (all 7 pulls per spec, `medium=cpc` GA4 filter applied, keyword QS pulled WITH `date`), TRUE ROAS + marginal ROAS recomputed from scratch in one Python pass, cross-checked against the sanity anchor and all three earlier passes.

**Hypotheses tested:**
1. *"The 30d sanity anchor still holds."* → **CONFIRMED**, bit-for-bit: 9.3774× TRUE ROAS, 48.5% overclaim, 133 GA4 txns, ₹48,964.91 spend. Fourth consecutive reproduction today.
2. *"Marginal ROAS on the 11-12 Jul spike is still sub-floor using a clean pre-blackout baseline."* → **CONFIRMED**: 1.43×, matching the third pass's own clean-baseline computation exactly. Four independent reads today (0.86×/1.15×/1.43×/1.43×) all land under 6.0.
3. *"A broader, word-boundary-safe zero-conversion search-term sweep finds materially more waste than the two already-queued drafts (GA-002-withdrawn, GA-009)."* → **CONFIRMED**. 129 terms aggregate to TOTAL conversions==0 (₹6,099.54); after removing the 9 already in GA-009 and the wildcard-protected `wehear`/`safe buds wehear`, **86 new terms clear the bar at ₹2,637.18**. Drafted as **GA-010**.
4. *"GA-005's brand-consolidation direction is robust to which brand-term list is used."* → **REJECTED**. A wider aggregation reverses GA-005's own ranking (SC-All Range 20.33× vs Search-26 13.66×, vs GA-005's stated 16.98× Search-26 / 12.60× Shopping). Flagged in queue-inbox; GA-005 held pending **SH-GA-10**.

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
