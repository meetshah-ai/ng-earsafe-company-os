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

4. **₹1,800/day is the proven operating point** — *provisionally, see finding #16 below, which found an even better window and has not yet been reconciled with this pattern.* wk2 ₹1,701/day → 11.22×; wk3 ₹1,801/day → 11.50×. Every window at or below ~₹1,800/day cleared the 9–11× band. The single window above it did not.

5. **Lost impression share is RANK, not budget — but only for Search.** 76% / 47% cited historically for the two search campaigns. **Correction, 2026-07-13 22:26 IST pass:** this does not hold campaign-by-campaign. Fresh impression-share pull shows `SC - All Range` (79% of spend) is actually **Budget**-lost (49.0% lost-budget vs 7.4% lost-rank, IS 42.7%) while `Search-26 May 25` is genuinely **Rank**-lost (60.4% lost-rank vs 26.6% lost-budget, IS 12.4%). **Budget cannot buy an impression lost on Rank (Search's problem). But budget genuinely could buy impression share on Shopping — once the marginal-ROAS gate clears.** See SH-GA-9.

6. **High CTR with zero conversions is a landing-page problem.** `Search | SafeBuds | OWS + Conquest`: ₹1,011 spent, **12.57% CTR** (vs the 3–5% Search average), **0 conversions**. The ad is working; the page is not. Never answer this with a bid change.

7. **A missing date in a connector pull is not a zero.** Google Ads returned **no row at all** for 2026-07-09 and **₹1.29** for 2026-07-10 (the account went dark). Silently zeroing a missing day corrupts every window that contains it. **Reconfirmed 2026-07-13 22:26 IST: a naive marginal-ROAS baseline spanning 07-04→07-10 (which contains this blackout) produced a false 4.75× — thrown out in favour of a clean pre-spike baseline (06-29→07-05) giving 1.43×. Never build a marginal-ROAS baseline across a known blackout window.**

8. **GA4 has no campaign dimension in the standard pull.** `date,source,medium,sessions,totalrevenue,transactions` gives account-level TRUE ROAS only. Per-campaign "ROAS" without a campaign-level GA4 pull is platform-claimed and diagnostic only — label it as such, every time.

## DEEP-DIVE FINDINGS — 2026-07-13 (first expert teardown, 30d to 12 Jul)

> These came from the keyword/search-term/SKU/device/IS pulls, not the campaign roll-up. **They are the reason the agent is an operator, not a reporter** — none of this is visible at campaign level.
> ⚠️ All sub-account ROAS below is **platform-claimed** (inflated ~49%). Use it to **rank**, never as an absolute.

8. **⭐ The Quality Score scandal — NG has its worst QS on its own category.** Windsor reports QS ×10 (`90` = 9.0).

   | Keyword | QS | 30d spend | ROAS (platform) |
   |---|---|---|---|
   | `ng earsafe` (brand) | **9.0** | ₹818 | 29.3× |
   | `bone conduction headphones` | **9.0** | ₹628 | 11.8× |
   | `open ear headphones` | **4.2** | ₹317 | 3.1× |
   | `open ear bluetooth headphones` | **4.2** | ₹118 | **0×** |
   | `open ear wireless headphones` | **0.8** | ₹7 | **0×** |
   | `outside ear earbuds` | **0.0** | **₹958** | **0×** |

   QS 9.0 on brand and on the *bone-conduction* framing; **QS ≤ 4.2 on every *open-ear* term.** Expected CTR is the most heavily weighted QS component and Ad Rank = Bid × QS × assets — so this is *simultaneously* why Search loses IS to **Rank** and why open-ear terms cost more and convert less. India's open-ear brand cannot win the open-ear auction. **`outside ear earbuds` alone burned ₹958 at QS 0.0 for ₹0.** **2026-07-13 22:26 IST: reconfirmed bit-for-bit a third time; FIX drafted this pass as GA-008 (RSA rewrite + landing-page message match, no budget/bid change).**

9. **⭐ AI Max is ALREADY ON** (`Search-26 May 25` — `search_term_match_type = AI_MAX`). **This corrects the 2026-07-13 department-creation entry, which assumed it was off and made it the headline scale lever (P2-1).** It is on, and it is matching junk: `truth hear`, `tecno earbuds`, `finger earphone`, `wehear` — ~₹270/30d, **zero conversions**. The job is to **rein it in** (brand exclusions, negatives, text guidelines) or prove it earns its keep — **not to "enable" it.**

10. **Shopping SKU mix is upside-down.** The highest-spending SKU has the worst return; the best-returning SKU gets the least budget.

    | SKU | 30d spend | share | ROAS | CPA |
    |---|---|---|---|---|
    | NG EarSafe **Pro** | ₹18,088 | **50%** | **11.33×** ← worst | ₹315 |
    | EarSafe **Comm 2.0** | ₹11,245 | 31% | 15.10× | ₹215 |
    | NG x WeHear **SafeBuds** | ₹6,488 | 18% | **15.27×** ← best | **₹140** |

11. **Tablet is a free kill.** ₹363 spent across every campaign, **0 conversions, ₹0 revenue**. Mobile 14.16×, Desktop 13.82×, Tablet 0×.

12. **We bid against ourselves on brand.** Both `Search-26` and the Shopping campaign buy `ng earsafe`. Search returns 22.0×, Shopping 8.8× **on the same query** (2026-07-13 22:26 IST reconfirmation, wider brand-term set: Search 16.25×, Shopping 13.12×). Plus `ngearsafe`, `earsafe ng`, `ngsafe`, `ng earphone`, `earsafe bluetooth` — ~₹1,500–2,400/30d of brand spend split across two campaigns depending on term-set width.

13. **Conquest works and is starved.** `wehear earbuds` **45.7×** · `wehear safe buds` **53.9×** · `poly voyager free 60` **55.2×** — on ₹50–100 each. The best return in the account, on trivial spend. Meanwhile `shokz openrun pro 2` (₹48) returns 0×.

14. **~₹1,168–2,709/30d of zero-conversion category search terms** (range depends on the spend-filter threshold used per pull): `open ear earbuds` (₹338), `bone conduction earphones` (₹229), `open ear headphones` (₹186 across both campaigns), `bone headphones`, `running earphones`, `best open ear earbuds`, `open ear tws`, `bone conduction earbuds`, `ear conduction headphones`, `earphones with mic and noise cancellation`, plus 4 AI Max junk terms (₹270).

15. **Windsor field constraint:** `quality_score` **cannot** be queried together with impression-share fields (Google API restriction). They must be separate pulls. Attempting to merge them errors out.

16. **⭐ NEW, 2026-07-13 22:26 IST — the account's true best-week may not be the one on record.** A full rolling-7-day TRUE-ROAS scan across the 30d window found **2026-06-17→06-23 at 16.35×** (spend ₹8,996.28, ~₹1,285/day) — higher than the tracker's logged best-week figure (11.50×, wk3, ~₹1,801/day). **Not yet reconciled** with finding #4 ("₹1,800/day is the proven operating point") — could mean the true efficient operating point is *lower* spend than currently assumed, or that window contains an idiosyncratic demand spike unrelated to spend level. **Flagged, not actioned. Next run: pull day-level detail for 17–23 Jun and check whether it's a demand event (e.g. a marketing push, PR mention) or a genuine low-spend efficiency point.**

17. **⭐ NEW, 2026-07-13 22:26 IST — Shopping is Budget-lost, Search is Rank-lost; they are not the same problem.** See CONFIRMED PATTERNS #5 above. `SC - All Range` Lost-Budget 49.0% / Lost-Rank 7.4%. `Search-26 May 25` Lost-Rank 60.4% / Lost-Budget 26.6%. This means the QS/Ad-Strength fix (GA-008) is Search's lever; a future budget increase (once gated marginal ROAS clears) is Shopping's lever. Conflating the two campaigns under one "Rank-limited" label was imprecise. Logged as hypothesis **SH-GA-9**.

## REJECTED / DEAD ENDS

- **Rejected, three times over, still not final until the 7-day read lands:** *"Google Ads has headroom at ₹3,600/day."* Marginal ROAS computed three separate times this week from three different (defensible) baseline choices: 0.86× (initial), 1.15× (22:02 IST re-pull, different baseline), **1.43× (this pass, clean pre-spike baseline, throwing out a corrupted-baseline 4.75× computation)**. All three land well under the 6.0 gate. The read is still younger than the 7-day attribution period (2 of 7 post-change days exist). **Re-read 2026-07-19 before writing this down as final.**
- **Rejected, 2026-07-13 22:26 IST:** *"A naive marginal-ROAS baseline spanning 2026-07-04→07-10 is usable."* It contains the 07-09 blackout and 07-10 near-dark day, deflating the pre-period average and producing a false 4.75× marginal ROAS. **Dead end — never build a marginal-ROAS baseline across a known data gap.**

## SCALE HYPOTHESIS BACKLOG (per COMPANY_STATE §5.5 — test → validate → scale)

| # | Hypothesis (metric + threshold) | Test (smallest move) | Status | Linked queue |
|---|---|---|---|---|
| **SH-GA-1** | Fixing the duplicate conversion action closes the 49% overclaim to **<20%** | P0-1 — deduplicate, put the Shopify-pixel action in the bidding goal | ⬜ OPEN | — |
| **SH-GA-2** | With corrected values, a tROAS re-baselined to **~7.0–8.0** holds TRUE ROAS ≥ 9.0 *and* survives the 17 Aug change | P0-2 — walk the target in ≤15%/week steps | ⬜ BLOCKED by SH-GA-1 | — |
| **SH-GA-3** | **AI Max** delivers the guide's **+34% CVR** on `Search-26 May 25` | P2-1 — one-click experiment, 50/50, 2-week read | ⬜ BLOCKED by SH-GA-1 | — |
| **SH-GA-4** | Raising Ad Strength to Excellent recovers Lost-IS-Rank **without** extra budget (guide: +45% CTR vs Poor) | P1-2 — 8–10 headlines / 3–4 descriptions per ad group | 🟡 DRAFTED — GA-008 | GA-008 |
| **SH-GA-5** | Rewriting Shopping feed titles to `[Brand]+[Type]+[Feature]+[Variant]` lifts `SC - All Range` TRUE ROAS above 11.5× | P1-3 — Merchant Center feed-rule A/B on the top 20% of SKUs by spend | ⬜ OPEN | — |
| **SH-GA-6** | **Enhanced Conversions** recovers a measurable share of the platform-vs-GA4 gap | P1-1 — enable; impact visible ~30 days after | ⬜ OPEN | — |
| **SH-GA-7** | The account has **any** budget headroom above ₹1,800/day at marginal ROAS ≥ 6.0 | +20% step (₹1,800 → ₹2,160), held 7 days, then read marginal | ⬜ OPEN — **gated behind the 19 Jul re-read** | — |
| **SH-GA-8** | Conquest terms (`wehear earbuds`, `wehear safe buds`, `poly voyager free 60`) hold platform ROAS ≥20× at 30–50% higher max-CPC | Bid increase, funded by GA-002 cut, flat net spend | 🟡 DRAFTED — GA-006 | GA-006 |
| **SH-GA-9** | `SC - All Range`'s IS ceiling is Budget (49.0% lost-budget), not Rank — so a Shopping-specific budget step clears marginal ROAS ≥6.0 where an account-wide step didn't | +15% on SC-All Range only (~₹193/day), 7-day read, **gated behind both the 19 Jul account-level re-read AND the ~26 Jul no-touch expiry** | ⬜ OPEN — double-gated | — |

## CYCLE LOG (most recent first)

### 2026-07-13, 22:26 IST — Third pass, same day: GA-008 drafted, Shopping budget-vs-rank nuance found, hold reaffirmed

**Initiative:** User-triggered full decode, third pass of the calendar day (07:30 IST and 22:02 IST runs already completed). Independent fresh Windsor pull across all seven tables, TRUE ROAS + marginal ROAS recomputed in code from scratch, cross-checked against the sanity anchor and against the two earlier passes today.

**Hypotheses tested:**
1. *"The 30d sanity anchor still holds."* → **CONFIRMED.** 9.3774× TRUE ROAS / 48.5% overclaim / 133 GA4 transactions — bit-for-bit identical to both earlier passes today.
2. *"A clean pre-spike baseline gives a materially different marginal-ROAS read than a blackout-contaminated one."* → **CONFIRMED.** Naive baseline (07-04→07-10, contains the blackout) → false 4.75×. Clean baseline (06-29→07-05) → 1.43×, consistent with the week's prior 0.86×/1.15× reads. The naive number was discarded, not reported. Logged as a new dead end (never build a marginal-ROAS baseline across a known gap).
3. *"Lost impression share is uniformly a Rank problem across the account."* → **REJECTED, refined.** Fresh IS pull shows `SC - All Range` is Budget-lost (49.0%) while `Search-26 May 25` is Rank-lost (60.4%) — two different constraints, two different levers. New hypothesis SH-GA-9 opened to test this once gates allow.
4. *"Nothing new is actionable today beyond what's already queued."* → **REJECTED.** The QS/Ad-Strength fix (P0-6/P1-2) had no live draft despite being the tracker's own headline lever — drafted this pass as **GA-008** (RSA rewrite + landing-page message match, zero budget/bid cost, not gated by the no-touch window).

**Learning carried forward:**
- Optimization (FIX/CUT/TEST) is never fully "done" just because prior passes queued cuts — a Monday teardown should keep checking whether every open tracker lever has a live draft, not just restate old ones.
- Never build a marginal-ROAS baseline window that contains a known data blackout; the delta will be corrupted even though each side's arithmetic is individually correct.
- A full rolling-window scan (not just the headline 7d/30d cuts) can surface findings the fixed windows hide — see finding #16 (17–23 Jun best-week anomaly).

**Next-sprint changes triggered:**
- **GA-008 queued** — RSA/landing-page fix for the open-ear cluster, no budget/bid cost, addresses tracker P0-6/P1-2 directly.
- **SH-GA-9 opened** — Shopping-specific budget test, double-gated (19 Jul account-level re-read, then ~26 Jul no-touch expiry).
- Finding #16 (best-week anomaly) flagged for a follow-up day-level pull; not actioned this run.
- GA-001 still stays as-is pending Meet's P0-3 decision. No budget draft filed.

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
