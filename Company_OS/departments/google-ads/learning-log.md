# Google Ads — Learning Log

> The Monday full-audit appends here; `/standup` reads here. **Never delete an entry — supersede it.** The point of this file is that we never retry a dead end.

## HOW TO LOG

```
DATE | INITIATIVE | HYPOTHESIS | RESULT (confirmed/rejected/inconclusive) | LEARNING CARRIED FORWARD
```

## CONFIRMED PATTERNS (institutional truths)

0c. **🚨 NEW 2026-07-16 — a tracker status of "SHIPPED" is not evidence of execution. Always spend-check before trusting it.** Three items marked "✅ SHIPPED 2026-07-14" (99 negatives GA-009/010, tablet exclusion P1-1, SafeBuds Ivory exclusion P1-2) show **zero change in live spend** two days later: `open ear earbuds` (a GA-010 negative target) still spent ₹643.15/30d at 0 conversions; SafeBuds Ivory still spent ₹751.20/30d at 11.24× ROAS; tablet still spent ₹345.32/30d total across campaigns. queue-inbox.md had already flagged GA-009/010 as "BLOCKED: Windsor write actions disabled" — the tracker's status update was written without checking whether the block had cleared. **Institutional rule: a "SHIPPED" or "EXECUTED" status must be corroborated by a subsequent spend pull before it is trusted or built upon.**

0b. **🚨 NEVER PUT A METRIC IN A WINDSOR `filters` ARGUMENT** (unchanged — see prior entries). Reconfirmed again 2026-07-16: SKU and device pulls, taken unfiltered, reconciled exactly to their parent campaign totals (0 variance on all three campaigns).

0. **🚨 NEVER FILTER ON `conversions == 0`.** (unchanged — see prior entries.)

1. **The platform overclaims ~45–49%,** reconfirmed 2026-07-16 on an overlapping 30d window (16 Jun–15 Jul): TRUE ROAS 9.44×, platform 13.73×, overclaim 45.5%. Consistent with the 9.38×/49% anchor.

1b. **🚨 NEW 2026-07-16 — the overclaim ratio itself can signal a data-integrity break, not an attribution improvement.** The last-7d window (09–15 Jul) showed overclaim collapsing to 6.6% (platform 6.68× vs TRUE 6.26×) — wildly outside the normal 35–65% band. This is **not** evidence of better measurement; that window contains the known missing-spend-day gap (no Google Ads row for 07-09, ₹1.29 for 07-10), which understates spend on both sides of the ratio unevenly (GA4 revenue for 07-09 is complete; Google Ads' own value for that day is folded into the missing spend). **A missing-data gap can produce an overclaim reading that looks like a fix but is actually contamination.** Always check for known gaps before reading an out-of-band overclaim as a signal.

2–8. (unchanged — see prior entries: budget learning-phase lesson, ₹1,800/day proven operating point, Lost-IS-is-Rank not budget, high-CTR-zero-conversion-is-landing-page, missing-day gap persistent, GA4 has no campaign dimension.)

## DEEP-DIVE FINDINGS — 2026-07-13 (unchanged, see prior entries: QS scandal retracted, AI Max already on, SKU mix retraction, tablet free-kill, brand cannibalization ambiguity, conquest starved, QS/IS field conflict, word-boundary brand matching.)

## NEW FINDINGS — 2026-07-16 (Thursday follow-up, window 16 Jun–15 Jul)

17. **🚨 The "tablet is a free kill" finding (item 11) was too broad — it is true for Search-26, false for Shopping this window.** `SC - All Range` TABLET converted: 1 conversion, ₹3,049.10 revenue, ₹275.14 spend, **11.08× ROAS** — better than the account's blended average. Only `Search-26` TABLET remains genuinely dead (₹70.18, 0 conversions). The previously-approved P1-1 ("−100% tablet, all campaigns") would have forfeited that ₹3,049 had it actually executed — which, per finding 0c, it apparently didn't. **Learning: a device-level cut should be scoped per-campaign, not applied account-wide from a single aggregate read; volumes are small enough that one conversion flips the verdict.** Filed as GA-014, tested as SH-GA-14.

18. **Marginal ROAS on the 11–12 Jul budget spike is trending up sharply as attribution matures, but is still sub-gate and still not old enough to call.** Recomputed with 4–5 days more maturity (vs the 1–2 days available on 2026-07-13): **3.94×**, up from the four same-day-13-Jul reads of 0.86×/1.15×/1.43×/1.43×. Still below the 6.0 scale gate. The scheduled 19-Jul read (P0-3) remains the authoritative one — do not treat this interim number as a verdict, but it is worth watching: if the trend continues, 19 Jul could plausibly clear 6.0.

19. **SC-All Range remains Lost-Budget (42.5%), not Lost-Rank (9.9%) — SH-GA-9 reconfirmed a second time on a fresh window.** Search-26 remains Lost-Rank (55.3%). No new action — budget is still gated — but this strengthens the case that *when* the gate clears, the dollar should go to Shopping specifically, not be split evenly.

20. **Shopping's brand platform-ROAS (20.56×) now exceeds Search-26's (13.92×) by an even wider margin than the 2026-07-13 4th-pass read (20.33× vs 13.66×).** Directionally consistent — reinforces holding GA-005 rather than resolving it in Search-26's favor. SH-GA-10's dedicated re-pull (gated to 20 Jul) is still the one that should settle this, not incidental re-reads.

## REJECTED / DEAD ENDS

- *"Google Ads has headroom at ₹3,600/day."* Still **provisionally rejected**, still gated to the 2026-07-19 read (P0-3). Not re-tested this run beyond the interim marginal-ROAS recompute in finding 18, which itself is explicitly non-conclusive.
- *"Tablet is a blanket free kill, all campaigns."* **Superseded 2026-07-16** — see finding 17. The category-level claim (Search-26 tablet is dead weight) still holds; the account-wide extrapolation does not.

## SCALE HYPOTHESIS BACKLOG (per COMPANY_STATE §5.5 — test → validate → scale)

| # | Hypothesis (metric + threshold) | Test (smallest move) | Status | Linked queue |
|---|---|---|---|---|
| **SH-GA-13** | Cutting ₹4,978/30d of zero-return spend at flat budget lifts TRUE ROAS from 9.38× toward the 9–11× band within one attribution window | Claimed shipped 2026-07-14 (99 negatives + tablet + SafeBuds Ivory) — **but 0c above shows none of it actually executed.** Falsifier condition unchanged, but the read is now moot until execution is confirmed. | 🔴 **BLOCKED — confirm execution before the 21-Jul read means anything** | GA-011 |
| **SH-GA-14** | 🆕 A `Search-26`-only tablet exclusion (not blanket) recovers ₹70/30d without forfeiting `SC - All Range`'s ₹3,049/30d tablet revenue | One device bid modifier, Search-26 only, zero spend change | 🟡 **OPEN — read 2026-07-23** | GA-014 |
| **SH-GA-1** | Fixing the duplicate conversion action closes the 49% overclaim to **<20%** | P0-1 — deduplicate, put the Shopify-pixel action in the bidding goal | ⬜ OPEN — still not started | — |
| **SH-GA-2** | With corrected values, a tROAS re-baselined to **~7.0–8.0** holds TRUE ROAS ≥ 9.0 *and* survives the 17 Aug change | P0-2 — walk the target in ≤15%/week steps | ⬜ BLOCKED by SH-GA-1 | — |
| **SH-GA-3** | **AI Max** delivers the guide's **+34% CVR** on `Search-26 May 25` | P2-1 — one-click experiment, 50/50, 2-week read | ⬜ BLOCKED by SH-GA-1 | — |
| **SH-GA-4** | Raising Ad Strength to Excellent recovers Lost-IS-Rank **without** extra budget | P1-2 — 8–10 headlines / 3–4 descriptions per ad group | ⬜ OPEN | — |
| **SH-GA-5** | Rewriting Shopping feed titles lifts `SC - All Range` TRUE ROAS above 11.5× | P1-3 — Merchant Center feed-rule A/B on the top 20% of SKUs by spend | ⬜ OPEN | — |
| **SH-GA-6** | **Enhanced Conversions** recovers a measurable share of the platform-vs-GA4 gap | P1-1 — enable; impact visible ~30 days after | ⬜ OPEN | — |
| **SH-GA-7** | The account has **any** budget headroom above ₹1,800/day at marginal ROAS ≥ 6.0 | +20% step, held 7 days, then read marginal | ⬜ OPEN — gated to 19 Jul; interim reads trending up (0.86→3.94×) but not conclusive | — |
| **SH-GA-9** | Shopping is Lost-Budget not Lost-Rank — next budget dollar should target Shopping specifically | Confirm on next IS pull; hold until marginal ROAS ≥ 6.0 | 🟢 **RECONFIRMED 2nd time 2026-07-16** (42.5% budget-lost vs 9.9% rank-lost) — still double-gated (19 Jul + no-touch expiry) | — |
| **SH-GA-10** | A fixed, word-boundary-safe brand-term whitelist will show SC-All Range's blended brand platform ROAS exceeding Search-26's by >20% | Re-pull search-terms 2026-07-20 with the fixed whitelist | ⬜ OPEN — **directionally reconfirmed 2026-07-16** (20.56× vs 13.92×, an even wider gap) — GA-005 held pending the dedicated re-pull | GA-005 |

## CYCLE LOG (most recent first)

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

### 2026-07-14 — Waste cut complete: ₹4,978/30d, all reversible, zero learning-phase cost — (see above; execution now disputed, see 2026-07-16 entry)
### 2026-07-14 — GA-009/GA-010 EXECUTED · two structural discoveries — (see above; execution now disputed, see 2026-07-16 entry)
### 2026-07-13, 23:xx IST — Fourth Monday-read pass, same day (unchanged, retained for history)
### 2026-07-13, 22:26 IST (third pass) — see prior entry, unchanged, retained for history
### 2026-07-13, 22:02 IST — Second Monday-read pass, same day (unchanged, retained for history)
### 2026-07-13 — Monday read: hold reaffirmed, no threshold trips (unchanged, retained for history)
### 2026-07-13 — Department created (Sprint 1 seeded) (unchanged, retained for history)
