# Google Ads — Learning Log

> The Monday full-audit appends here; `/standup` reads here. **Never delete an entry — supersede it.** The point of this file is that we never retry a dead end.

## HOW TO LOG

```
DATE | INITIATIVE | HYPOTHESIS | RESULT (confirmed/rejected/inconclusive) | LEARNING CARRIED FORWARD
```

## CONFIRMED PATTERNS (institutional truths)

1. **The platform overclaims by ~49%.** 30d to 2026-07-12: Google claims **13.93×** / 231.7 conversions; GA4 `google/cpc` credits **9.38×** / 133 transactions. Every scale decision is made on the GA4 number. *(Consistent with `GoogleAds_Measurement_Incrementality_Plan.md`: Google + Meta together claim ~102% of all revenue.)*

2. **Doubling the budget produced negative marginal return.** 11–12 Jul 2026: ₹1,801/day → ₹3,589/day. TRUE ROAS **11.50× → 6.20×**. The incremental **+₹1,788/day of spend bought +₹1,543/day of revenue — marginal ROAS 0.86×.** Sessions rose **+23%** (397 → 488/day) while revenue per session collapsed. **We bought traffic, not customers.**

3. **…and that move also triggered a learning phase, which is the deeper lesson.** Guide Ch 10: a budget change **>20% in either direction** resets Smart Bidding into a 1–2 week learning phase, during which volatility is *expected*. We changed by ~100%. So the 6.20× is **contaminated** — it is partly diminishing returns and partly self-inflicted recalibration, and we cannot separate them. **This is exactly why the ≤20% ratchet exists.** Never again read a post-jump number as a clean verdict.

4. **₹1,800/day is the proven operating point.** wk2 ₹1,701/day → 11.22×; wk3 ₹1,801/day → 11.50×. Every window at or below ~₹1,800/day cleared the 9–11× band. The single window above it did not.

5. **Lost impression share is RANK, not budget.** 76% / 47% on the two search campaigns. Ad Rank = Bid × QS × asset impact (Ch 2). **Budget cannot buy an impression you are losing on Rank.** The levers are Quality Score and Ad Strength.

6. **High CTR with zero conversions is a landing-page problem.** `Search | SafeBuds | OWS + Conquest`: ₹1,011 spent, **12.57% CTR** (vs the 3–5% Search average), **0 conversions**. The ad is working; the page is not. Never answer this with a bid change.

7. **A missing date in a connector pull is not a zero.** Google Ads returned **no row at all** for 2026-07-09 and **₹1.29** for 2026-07-10 (the account went dark). Silently zeroing a missing day corrupts every window that contains it.

## REJECTED / DEAD ENDS

*(Nothing yet — the department is one day old. Log every rejected hypothesis here so it is never retried.)*

- **Candidate for rejection, pending the 19 Jul read:** *"Google Ads has headroom at ₹3,600/day."* Provisionally **rejected** on the 11–12 Jul evidence (marginal ROAS 0.86×), but the read is contaminated by the learning phase and the window is younger than the 7-day attribution period. **Re-read 2026-07-19 before writing this down as final.**

## SCALE HYPOTHESIS BACKLOG (per COMPANY_STATE §5.5 — test → validate → scale)

| # | Hypothesis (metric + threshold) | Test (smallest move) | Status | Linked queue |
|---|---|---|---|---|
| **SH-GA-1** | Fixing the duplicate conversion action closes the 49% overclaim to **<20%** | P0-1 — deduplicate, put the Shopify-pixel action in the bidding goal | ⬜ OPEN | — |
| **SH-GA-2** | With corrected values, a tROAS re-baselined to **~7.0–8.0** holds TRUE ROAS ≥ 9.0 *and* survives the 17 Aug change | P0-2 — walk the target in ≤15%/week steps | ⬜ BLOCKED by SH-GA-1 | — |
| **SH-GA-3** | **AI Max** delivers the guide's **+34% CVR** on `Search-26 May 25` | P2-1 — one-click experiment, 50/50, 2-week read | ⬜ BLOCKED by SH-GA-1 | — |
| **SH-GA-4** | Raising Ad Strength to Excellent recovers Lost-IS-Rank **without** extra budget (guide: +45% CTR vs Poor) | P1-2 — 8–10 headlines / 3–4 descriptions per ad group | ⬜ OPEN | — |
| **SH-GA-5** | Rewriting Shopping feed titles to `[Brand]+[Type]+[Feature]+[Variant]` lifts `SC - All Range` TRUE ROAS above 11.5× | P1-3 — Merchant Center feed-rule A/B on the top 20% of SKUs by spend | ⬜ OPEN | — |
| **SH-GA-6** | **Enhanced Conversions** recovers a measurable share of the platform-vs-GA4 gap | P1-1 — enable; impact visible ~30 days after | ⬜ OPEN | — |
| **SH-GA-7** | The account has **any** budget headroom above ₹1,800/day at marginal ROAS ≥ 6.0 | +20% step (₹1,800 → ₹2,160), held 7 days, then read marginal | ⬜ OPEN — **gated behind the 19 Jul re-read** | — |

## CYCLE LOG (most recent first)

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
