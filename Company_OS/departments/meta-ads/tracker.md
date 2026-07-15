# Meta Ads — Live Task Tracker

> **This file + `learning-log.md` are the two live files the Meta Ads Operator reads at runtime**
> (`Company_OS/agents/meta-ads.agent.yaml`; the managed agent runs **twice a week, Mon + Thu 08:00
> IST**, and drafts to `queue-inbox.md`). Keep it current: after a task, update status + result; each
> cycle, archive completed items into `learning-log.md`.
> Last updated: 2026-07-14 (cycle 5 — Monday teardown, run one day late on Tue: trailing-7d TRUE ROAS
> read for the first time this cadence at 5.43× — AT/BELOW the 6.0 floor, likely 5.8–6.1× once the
> 2026-07-13 GA4 tagging break is excluded; NO budget moves this cycle. MOFU/TOFU zero-purchase spend
> flagged (MA-027/028); Custom Reel Comm nearing kill line (MA-030); GA4 tagging break escalated
> (MA-029). Regional-language tests (MA-024 Gujarati SafeBuds, MA-025 Telugu Comm 2.0) launched on
> schedule 2026-07-13 — day-1 only, too early to read.)

## PRIORITY SYSTEM
- **P0** — this week. **P1** — this month. **P2** — 30–60 days. **P3** — experiments.

## ANALYSIS CADENCE (Meet, 2026-07-14)
**Twice-weekly (Mon + Thu 08:00 IST).** Monday = full teardown of the completed week; Thursday =
follow-up on Monday's calls. TRUE ROAS is read on the **trailing 7d**; 30-day is context only.
Kill/scale/rotate on the weekly trend, not the 30-day average.

## STANDING WEEKLY TASKS
| Task | Cadence | Output |
|---|---|---|
| **Weekly ad-level pull** — week-over-week CPP/ROAS/frequency/CTR/reach by creative, classify each by content type + angle | Weekly (every Mon/Tue) | weekly-analysis verdict table in `learning-log.md` |
| **Competitor ad teardown** (Shokz, boAt, Noise, wecool + Mojawe/Oladence via Meta Ad Library) → classify content/caption/format/hook → NG action drafts | On-demand (teardown subagent) | counter-brief drafts in `queue-inbox.md` |
| **Test matrix review** — which experiments are open/confirmed/rejected this week; what's next up | Weekly | update TEST MATRIX table below + `learning-log.md` OPEN hypotheses |

---

## CYCLE 5 — 2026-07-14 (Monday teardown, TRUE-ROAS-gated) — NEW

**First cycle run under the TRUE-ROAS-vs-GA4 protocol (fixed by Meet 2026-07-14).** Three Windsor
pulls: Meta campaign×day (30d, 2026-06-14→07-13), Meta ad×day (14d, 2026-06-30→07-13), GA4 7d
(2026-07-07→07-13, single window, truncation guard passed: 225 rows, 7 dates, ≥12 rows/day).

**The headline number:** trailing-7d TRUE ROAS (Meta spend ÷ GA4 Meta-paid revenue, `classify()`
verbatim) = **₹46,909.58 ÷ ₹2,54,818.85 = 5.43×** — **below the 6.0 floor.** Platform-claimed ROAS
9.45× (73.9% overclaim — inside the normal 40–120% band, so attribution is not structurally broken).
**But:** 2026-07-13 (the last day in the window) had a GA4 tagging break — 70.3% of that day's revenue
landed as `(not set)/(not set)` (same bug the 13 Jul daily brief already flagged, still unresolved a
day later). Excluding 07-13: 6-day TRUE ROAS = ₹39,313.85 spend ÷ ₹2,38,803.85 GA4 Meta-paid = **6.07×**
— at/above floor. Imputing 07-13's Meta-paid share from the 6 clean days' average (48.7% of that day's
total revenue) gives an all-7-day estimate of ≈**5.82×**. **Read: the account is sitting right on the
6.0 knife-edge, not decisively above or below it — the reported 5.43× is a real number but is being
dragged down by a data-quality bug, not a performance collapse.** No budget moves this cycle on either
side of that ambiguity (see RATCHET — floor discipline cuts both ways: don't scale on doubt, don't
panic-cut on a tagging bug either).

**Zero-purchase spend found (14 consecutive days, ad-level pull):** MOFU_GadgetbhaiReel_Comm_26May26
(₹3,520.12/7d, ₹507–₹577/day, 0 purchases every single day 06-30→07-13) and the TOFU Kannada office
reel (₹4,823.46/7d, 0 purchases every day in the same window, but institutionally understood as an
awareness/retargeting-pool-feed play, not a direct-response one). Combined ₹8,565/week (18.3% of Meta
spend) with zero platform-attributed purchases. MOFU one is a clean cut (MA-027); TOFU one needs an
actual pause-and-measure test given its defended pool-feed role (MA-028), not a blind kill.

**ES Comm 2 adset creative mix:** Custom Reel - 23 May 26 Comm is the weakest creative in its own
adset — CPP ₹437 (7d), ROAS 7.56× — nearing but not past the ₹450/5× Comm 2.0 kill line, and well
below its adset-mates Influencer_Gadgetbhai (CPP ₹300, ROAS 11.20×) and Influencer_Merged (CPP ₹342,
ROAS 12.95×) on the *same* audience. Institutional truth (cycle-3 LAL teardown) already established
review-format beats Custom Reel's feature/caption format on identical audiences — recommend
deprioritizing it in favor of the review creatives already live in the set (MA-030, bundled with a
small full-kill on Comm_Closeup Feature Carousel_28 May 26, Retargeting, 1 purchase in 14 days).

**Ad-level frequency:** all ads in the 14d pull show max frequency 1.00–1.64× — well under the 2.5×
gate. **Data gap:** this cycle's campaign pull did not include a campaign-level `frequency` field, so
the Retargeting campaign's pooled frequency (last read 2.89× on 2026-07-03, past the gate) was not
re-verified this cycle — ad-level frequency understates pool-level fatigue because it doesn't dedupe
reach across ads in the same adset. **Next pull should add `frequency` to the campaign-grain call.**

**Regional-language tests (MA-024 SafeBuds Gujarati, MA-025 Comm 2.0 Telugu) — launched on schedule
2026-07-13.** Day 1 only: Gujarati SafeBuds reel (`Tech in Gujarati_Safebuds Reel_13 Jul 26`) — ₹745.07
spend, 4 purchases, ₹11,416 platform revenue, 15.32× platform ROAS, freq 1.25×. Telugu Comm 2.0
(`Influencer_Telugu Comm_13 Jul 26`) — ₹36.90 spend, 0 purchases. Both **far too early to call** — hold
to the already-set 2026-07-20 read date (SH-MA-7/SH-MA-8). Not re-drafting.

**Actions this cycle:** MA-027 (cut MOFU zero-purchase ad), MA-028 (test: pause TOFU Kannada reel,
measure retargeting-pool + blended-ROAS impact over 7d, no budget added elsewhere), MA-029 (escalate
GA4 tagging break — not a Meta spend/bid action), MA-030 (non-budget creative-mix rotation in ES Comm 2
+ small carousel kill in Retargeting).

---

## CURRENT SPRINT — Sprint 2, seeded 2026-06-27 (mandate update cycle) — updated 2026-07-03 cycle 4

| # | Task | Target | Expected impact | Status | Result |
|---|---|---|---|---|---|
| P0-1 | MA-001/002 (Unboxing reel kills) — founder "held — pause none for now" 2026-06-30, i.e. not executed via approval | — | Stop spend on pool-exhausted creative | RESOLVED BY OTHER MEANS | 7d pull shows both ads now ADSET_PAUSED/PAUSED with only residual spend (₹1,072 / ₹530, both declining). Outcome achieved without a logged approval — governance gap, not a spend risk. Not re-flagging. |
| P0-2 | (merged into P0-1) | — | — | — | — |
| P0-3 | MA-007 (kill Retargeting campaign) — held 2026-06-30 | Pending human decision | Stop CPP bleed / frequency breach | **RE-FLAGGED — WORSE, not better (MA-017)** | 7d freq climbed 2.50×→**2.89×** (past gate). Reach barely grew (4,317→5,278) while freq rose — pool exhaustion, not recovery. 2 new remarketing carousel ads were added into THIS SAME campaign 2026-07-01/02 — does not reset frequency (audience-level metric). **Cycle 5: campaign-level frequency not re-pulled this cycle — data gap, see CYCLE 5 note above. Ad-level max freq in the campaign is only 1.42× (Safebuds_Unboxing Reel) but that does not dedupe pooled reach.** |
| P0-4 | MA-010 recheck — ES Pro "3D All Feature-Pro" spend after CEO-confirmed pause | Verify zero spend in 7d | Confirm EBITDA discipline restored | TRENDING TO ZERO — confirm next cycle | 7d spend ₹318 (down from ₹1,732 prior week, ₹9,488/30d before pause). Clean decay: 9,488→1,732→318. **Cycle 5: ES Pro campaign does not appear at all in the 06-14→07-13 campaign pull after 06-27 — spend has reached zero. CONFIRMED CLOSED.** |
| P0-5 | MA-009 recheck — Comm LAL (id 52576570206220), approved+"executed" 2026-06-30 (₹750/day + audience change) | Confirm scale is running | Volume at CPP ≤₹201, ROAS ≥8× | **BROKEN — campaign is PAUSED, zero 7d delivery (MA-018)** | Decision log says DONE/executed 2026-06-30. One week later: campaign-level pull shows PAUSED, no spend/reach data. Contradiction — needs founder clarification on what happened. **Cycle 5: still absent from the 30d campaign pull (06-14→07-13) — still dark.** |
| P0-6 | MA-004 scale (Techopedia SafeBuds, ₹2,500/day) — approved+executed 2026-06-30 | Hold ROAS while scaling | +volume at CPP ≤₹380 | **CONFIRMED WORKING — clean win, holding** | 7d spend ₹9,308→₹12,546 (+35%); CPP ₹343→₹210 (-39%); ROAS 12.40×→14.32×; freq eased 1.56×→1.33×. **Cycle 5 (7d 07-07→07-13): spend ₹16,509.29, CPP ₹295, platform ROAS 9.70×, ad-level max freq 1.14× — still comfortably inside all gates. No further budget step this cycle (account-wide budget hold, see CYCLE 5).** |
| P0-7 | Comm 2.0 rotation creative (EXP-001 / MA-006) — brief rejected 2026-06-30 for being too basic | — | Creative swap if Custom Reel keeps decaying | **RE-OPENED cycle 5 — Custom Reel nearing kill line again** | 7d ROAS 4.95×→10.50× (cycle 4). **Cycle 5 (7d 07-07→07-13): CPP ₹437, ROAS 7.56× — weakest creative in the ES Comm 2 adset again, nearing the ₹450/5× Comm 2.0 kill line. Non-budget rotation drafted (MA-030) — deprioritize in favor of Gadgetbhai/Merged review creatives already in-set.** |
| P0-8 | ES Lite relaunch — proven creatives × updated LAL (MA-022, drafted 2026-07-09) | ₹1,000/day, 7-day read | CPP ≤ ₹265, ROAS ≥ 8× | **LIVE AND WORKING** | Lifetime pull: 3D Feature-Lite 10.19× ROAS is the anchor. **Cycle 5: ES Lite campaign is live and spending (₹4,221.95/7d). Reel_Lite_Mr Lazy_18 Nov 25 — the ad whose *lifetime* ROAS (4.20×) was the weakest concern in the relaunch brief — is now running at 13.89× (7d, CPP ₹142) on the fresh pool. Reel_Lite_Merged: CPP ₹409, ROAS 6.39× — inside floor but watch, CPP close to the ₹450 kill line.** |
| P0-9 | Rebuild ES Lite 1% LAL from fresh 365d purchaser list (MA-023, drafted 2026-07-09, founder-initiated) | 2 sequential Meta writes via /execute-approved | New LAL populated + delivering | **Presumed executed — ES Lite now delivering well (see P0-8)** | New seed + new LAL required — ES Lite's strong cycle-5 performance is consistent with a working audience; not independently re-verified at the audience-ID level this cycle (out of this cycle's pull scope). |
| P0-10 | Regional-language reel tests (founder-initiated 2026-07-13): SafeBuds Gujarati reel + Comm 2.0 Telugu reel — MA-024, MA-025 (+ MA-026 structural flag) | ₹800/day (SafeBuds, ₹5,600/7d) + ₹600/day (Comm 2.0, ₹4,200/7d) | SafeBuds ad: CPP ≤₹258, ROAS ≥8×; Comm 2.0 ad: CPP ≤₹242, ROAS ≥8×, both within 7-day read | **LIVE — day 1 only, too early to call** | Both launched on schedule 2026-07-13. Gujarati SafeBuds: ₹745.07 spend, 4 purchases, ₹11,416 rev, 15.32× platform ROAS, freq 1.25× (day 1). Telugu Comm 2.0 (`Influencer_Telugu Comm_13 Jul 26`): ₹36.90 spend, 0 purchases (day 1). Decision date remains 2026-07-20 — do not conclude on n=1 day. |

---

## LIVE — REMARKETING CAROUSELS (launched live by founder 2026-07-02, NOT via /execute-approved)

> Two 3-slide review-style carousels went live directly. Slide 1 = review wall, Slide 2 = trust badges (No Cost EMI / 7-Day Replacement / 1-Year Warranty), Slide 3 = brand credibility (since 2020, 1L+ customers, India's only open-ear D2C). These are now spending real money — log, monitor, and reconcile against the read plan below.
>
> **STRUCTURE CORRECTION (2026-07-03 pull):** these are NOT standalone campaigns as originally logged — they are two new ADS inside the existing Retargeting campaign (id 52563334980220): "Comm_Customer Review_Carousel_1 Jul 26" (id 52608762416620, launched Jul 1) and "Safebuds_Review Carousel_2 Jul 26" (id 52609007190020, launched Jul 2). This matters: they share the same audience pool as the already-fatigued Retargeting campaign (freq 2.89× this week, see MA-017) — they do not get a fresh pool of their own.

| Ad (id) | Product | Campaign | 7d spend (cycle 5, 07-07→07-13) | 7d purchases | 7d platform rev | Notes |
|---|---|---|---|---|---|---|
| Comm_Customer Review_Carousel_1 Jul 26 (52608762416620) | Comm 2.0 | Retargeting (52563334980220) | ₹931.73 | 5 | ₹18,504.10 (19.86× platform) | Cleared the scale line (ROAS ≥8×, CPP ₹186 ≤₹250) — no longer "too new to read." Hold, no budget step this cycle (account-wide hold). |
| Safebuds_Review Carousel_2 Jul 26 (52609007190020) | SafeBuds | Retargeting (52563334980220) | ₹23.34 | 0 | ₹0 | Still minimal spend/delivery — inconclusive. |

**Read plan (unchanged):** Scale line CPP ≤₹300 (SafeBuds)/≤₹250 (Comm 2.0) AND ROAS ≥8× → step budget +20% (blocked this cycle by account-wide floor hold). Kill line: ROAS <5× OR freq ≥2.5× by day 7 (ad-level freq for both ads is 1.2–1.3×, well clear).

---

## WEEKLY AD-LEVEL STATUS TABLE (cycle 5, 7d = 2026-07-07→07-13, prior 7d = 2026-06-30→07-06; platform-claimed ROAS — ranking only, not absolute)

| Ad (campaign) | 7d spend | 7d purchases | 7d CPP | 7d platform ROAS | Max ad-level freq (14d) | Verdict |
|---|---|---|---|---|---|---|
| Techopedia Safebuds Reel_17May 26 (safebuds_20Apr 26) | ₹16,509.29 | 56 | ₹295 | 9.70× | 1.14× | HOLD — hero, clean, plenty of freq runway. No budget step this cycle (floor hold). |
| Influencer_Gadgetbhai_13 Nov Comm (ES Comm 2) | ₹5,097.74 | 17 | ₹300 | 11.20× | 1.25× | HOLD — strongest ad in the ES Comm 2 adset. |
| Kannada office reel_Safebuds_Live translation (TOFU_Awareness) | ₹4,823.46 | 0 | — | 0 | 1.06× | **ZERO purchases 14 straight days — TEST pause (MA-028).** |
| Nobody Tech Safebuds Reel_30Jun26 (safebuds_20Apr 26) | ₹3,844.92 | 22 | ₹175 | 17.80× | 1.21× | Rotation creative confirmed working, clearing 8× easily. |
| MOFU_GadgetbhaiReel_Comm_26May26 (MOFU_PDP & Video) | ₹3,433.94 | 0 | — | 0 | 1.12× | **ZERO purchases 14 straight days — CUT (MA-027).** |
| Influencer_Merged_13Nov Comm (ES Comm 2) | ₹3,420.11 | 10 | ₹342 | 12.95× | 1.12× | HOLD — strong. |
| Reel_Lite_Mr Lazy_18 Nov 25 (ES Lite) | ₹3,410.07 | 24 | ₹142 | 13.89× | 1.20× | Turnaround confirmed — lifetime laggard (4.20×) now the ES Lite workhorse on the fresh pool. |
| Custom Reel - 23 May 26 Comm (ES Comm 2) | ₹1,310.15 | 3 | ₹437 | 7.56× | 1.44× | **Nearing the ₹450/5× Comm 2.0 kill line, weakest in its adset — rotate (MA-030).** |
| Safebuds_Unboxing Reel_28 May 26 (Retargeting) | ₹988.57 | 5 | ₹198 | 13.88× | 1.42× | Small residual spend, performing fine. |
| Comm_Customer Review_Carousel_1 Jul 26 (Retargeting) | ₹931.73 | 5 | ₹186 | 19.86× | 1.30× | Cleared scale line — see LIVE REMARKETING CAROUSELS above. |
| Comm_Closeup Feature Carousel_28 May 26 (Retargeting) | ₹912.64 | 0 | — | 0 | 1.30× | **1 purchase in 14 days — small kill (MA-030).** |
| Reel_Lite_Merged (ES Lite) | ₹818.73 | 2 | ₹409 | 6.39× | 1.19× | Inside floor, CPP watch. |
| Tech in Gujarati_Safebuds Reel_13 Jul 26 (safebuds_20Apr 26) — NEW | ₹745.07 | 4 | ₹186 | 15.32× | 1.25× | Day 1 only (launched 07-13) — too early to call, hold to 2026-07-20 (MA-024). |

**Blended Meta 7d spend (Windsor, `facebook` connector):** ₹46,909.58, 150 purchases, platform-claimed
ROAS 9.45× (73.9% overclaim vs TRUE). **TRUE ROAS (GA4-based) = 5.43× — AT/BELOW the 6.0 floor** (see
CYCLE 5 above for the GA4-tagging-adjusted 5.82–6.07× range). No budget increases this cycle.

---

## PERFORMANCE TARGETS (updated weekly)
| Metric | Current (7d 2026-07-07→07-13) | Weekly target | 30-day target | 90-day target (KPI) |
|---|---|---|---|---|
| SafeBuds hero CPP | ₹295 (Techopedia, 7d) | hold <₹380 | hold <₹350 | hold <₹300 |
| Comm 2.0 best CPP | ₹300 (Gadgetbhai, ROAS 11.20×) — Custom Reel ₹437 nearing kill line | <₹250 after creative rotation (MA-030) | <₹250 | <₹291 |
| ES Lite best CPP | ₹142 (Reel_Lite_Mr Lazy, ROAS 13.89×) | hold <₹265 | hold <₹265 | hold <₹265 |
| Retargeting CPP | ₹264 (7d, campaign-level freq not re-pulled this cycle — data gap) | Re-verify pooled freq next cycle | <₹400 | <₹303 (baseline) |
| Total weekly active spend | ₹46,909.58 (7d) | — | — | ~₹38,500/week to hit ₹5L in 3 months — cleared |
| **TRUE ROAS (GA4-based, account-level)** | **5.43× (5.82–6.07× ex-tagging-bug)** | **≥6.0 (floor)** | **≥6.0** | **≥6.0 (KPI, per Meet 2026-07-14)** |
| Active converting creatives | 6+ clearing 7×+ platform ROAS | 3 after kills + creative swap | 4 | 5–6 (test matrix live) |
| Worst creative frequency (ad-level, 14d) | 1.64× (Safebuds_Unboxing Reel, one-day peak) | <2.0× across all | <2.0× | <2.0× |

---

## 3-MONTH TEST MATRIX (toward ₹5L / TRUE ROAS ≥6.0 floor — seeded 2026-06-27, floor redefined 2026-07-14)

> Each experiment is one falsifiable hypothesis. Must clear ROAS ≥ 8× CPP ≤ floor on a 7-day read to earn scale. Spend allocation is indicative; each experiment gets ₹5,000–₹15,000 for the test window before scale decision.

| Exp # | Content type | Ad structure | Audience mix | Hypothesis (metric + threshold) | Test spend | Status | Queue id |
|---|---|---|---|---|---|---|---|
| **EXP-001** | Review/explainer Reel — Gadgetbhai-style WFH hook | 0–3s pain hook → product demo → stat proof → CTA. | Comm 2.0 LAL 1% | Replacing Custom Reel with a proper review-format creative lifts ROAS from 5.82× to ≥8× within 7 days at CPP ≤₹250 | ₹10,000 test | **RE-ACTIVE cycle 5** — Custom Reel back near the kill line (₹437 CPP, 7.56×); non-budget rotation drafted (MA-030) ahead of a full creative swap. | MA-006, MA-012, MA-030 |
| **EXP-002** | Same Gadgetbhai/Techopedia winning creative | Broad — interest = "open ear headphones" + "work from home" | Broad India (no LAL constraint) | Meta Andromeda signal: broad targeting with winning review creative achieves CPP ≤₹291 and ROAS ≥8× within 7 days | ₹10,000 test | OPEN — pending EXP-001 creative production | MA-013 |
| **EXP-003** | Review/explainer Reel — ES Lite angle | Price anchor (₹1,999). | ES Lite Interest audience (fresh) | ES Lite review Reel at CPP ≤₹265 and ROAS ≥8× within 7 days at ₹10K test spend. | ₹10,000 test | **SUPERSEDED BY EVENTS** — ES Lite relaunch (MA-022) already clearing 6.39–13.89× on the existing creative set; no separate net-new brief needed this cycle. | MA-014 |
| **EXP-004** | Health/hearing-education explainer | Problem-agitation → open canal demo → NG product → CTA. 25–30s. | SafeBuds LAL 3–5% (scale out from 1%) | Expanding SafeBuds LAL 1% to 3–5% while running health/education creative hook maintains ROAS ≥10× at CPP ≤₹350 within 7 days | ₹12,000 test | OPEN — not sequenced this cycle (account-wide budget/audience-expansion hold while TRUE ROAS sits at the floor). | MA-015 |
| **EXP-005** | UGC-style testimonial with scripted review structure | Native, talking-head. 20–25s. | SafeBuds Interest + Broad (no seed) | Lo-fi scripted-review hybrid reduces CPM 15–20% and holds ROAS ≥8×. | ₹8,000 test | OPEN — creative brief needed (MA-016) | MA-016 |
| **EXP-006** | Regional-language review Reel — Gujarati voiceover | Added as a 3rd ad inside the existing SafeBuds LAL 1% ad set | SafeBuds LAL 1% (52536580555620) | Gujarati-voiceover reel matches/beats ad set blended CPP ₹258.08 and clears ROAS ≥8× within 7 days at ₹800/day | ₹5,600 test | **LIVE — day 1 (07-13): ₹745.07 spend, 4 purchases, 15.32× platform ROAS.** Hold to 2026-07-20 read. | MA-024 |
| **EXP-007** | Regional-language review Reel — Telugu voiceover | Added as a 5th ad inside the existing Comm 2.0 LAL 1% ad set | Comm LAL 1% (6966216690816) | Telugu-voiceover reel matches/beats ad set blended CPP ₹242.21 and clears ROAS ≥8× within 7 days at ₹600/day | ₹4,200 test | **LIVE — day 1 (07-13): ₹36.90 spend, 0 purchases.** Too small to read yet. Hold to 2026-07-20. | MA-025 |
| **EXP-008 (NEW, cycle 5)** | No new creative — spend-quality test | Pause TOFU Kannada office reel (zero-purchase 14d, ₹4,823/7d) for 7 days; do not reallocate its budget anywhere (net spend reduction, not a shift) | TOFU_Awareness_Audience_23 May 26 | Pausing the zero-direct-purchase TOFU reel does NOT measurably shrink Retargeting-campaign reach/pool health over the following 7–14 days, and blended TRUE ROAS improves (narrows the gap to 6.0) by at least the removed spend's full weight | ₹4,823 (spend avoided, not redeployed) | **NEW — drafted 2026-07-14** | MA-028 |

**Spend allocation guide (₹5L over 3 months):** unchanged from 2026-06-27 seed — Month 1 (Jul) actuals
are ahead of pace (7d spend ₹46,909.58 vs the ~₹38,500/week target). Floor discipline (TRUE ROAS ≥6.0)
now gates all further budget scaling per Meet's 2026-07-14 mandate — spend pace alone is no longer the
success metric.

---

## DATA PULL SCHEDULE
- Weekly (Mon): Meta ad-level pull — 7d vs prior 7d comparison (CPP/ROAS/freq/CTR/reach by ad).
- Weekly (Mon): Windsor.ai GA4 7d pull — TRUE ROAS (Meta spend ÷ GA4 Meta-paid revenue).
- Weekly (Mon): Competitor ad teardown — Meta Ad Library (boAt Airdopes Loop longevity + new entrants).
- Monthly: 30-day archive into `learning-log.md`.
- **NEW (cycle 5): add campaign-grain `frequency` to the next Meta campaign pull — this cycle's pull
  omitted it, leaving the Retargeting campaign's pooled-frequency fatigue (last read 2.89× on
  2026-07-03) unverified.**

---

## DEPENDENCIES / BLOCKERS
- **Creative production:** EXP-002, EXP-004, EXP-005 gated on instagram-content / Higgsfield producing review-format Reels.
- **Approval queue:** MA-024/025/027/028/029/030 all pending human sign-off in `queue-inbox.md` (never `APPROVALS_QUEUE.md` directly).
- **GA4 tagging break (2026-07-13):** 70.3% of that day's session revenue landed as `(not set)/(not set)` — same bug the 13 Jul daily brief flagged, still unresolved. This is masking the true account ROAS reading (reported 5.43× vs an estimated 5.82–6.07× range). Escalated as MA-029 — not a Meta lever, needs analytics/eng owner.
- Stock gates: all three main SKUs cleared as of 2026-06-27.
