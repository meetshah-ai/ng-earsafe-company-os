# Meta Ads — Live Task Tracker

> **This file + `learning-log.md` are the two live files the Meta Ads Operator reads at runtime**
> (`Company_OS/agents/meta-ads.agent.yaml`; the managed agent runs **twice a week, Mon + Thu 08:00
> IST**, and drafts to `queue-inbox.md`). Keep it current: after a task, update status + result; each
> cycle, archive completed items into `learning-log.md`.
> Last updated: 2026-08-06 (cycle 7 — Thursday teardown. **GA4 connector fully disconnected in Windsor
> this cycle** — `get_connectors` shows zero configured `googleanalytics4` accounts, all 4 GA4 pulls
> failed on a config/auth error, not a tagging break. TRUE ROAS, marginal ROAS, per-campaign CVR, and
> GA4 MTD revenue are all UNAVAILABLE this cycle — escalated as MA-039. Meta-only analysis found **two
> campaigns dark with no logged cause**: ES Comm 2 at ₹0 spend since 2026-07-31 despite MA-036's +20%
> budget step marked EXECUTED 2026-08-04 (MA-040), and ES Lite collapsed to ₹0/day since 2026-08-02
> (MA-041) — both escalated for Meet's direct confirmation. Two small CUT drafts (MA-042/043, ~₹1,036/
> 14d combined), one non-budget reallocation inside Broad Interest (MA-044), format-engine re-escalation
> (MA-046, CF-31/CF-37 still not delivering after 3 cycles) + CF-51 rotated in (MA-045) + CF-52 appended,
> and a formal read-plan for the newly-launched Openwire SKU campaign (MA-047). NO budget moves this
> cycle — floor cannot be verified without GA4.)

## 2026-08-04 /approvals UPDATE
MA-031, MA-032, MA-033, MA-036, MA-037, MA-038 (the MOFU campaign pause, Telugu delivery diagnostic, Gujarati creative-priority shift, ES Comm 2 +20% budget step, the UTM tag-mismatch fix, and the Gadgetbhai/Merged rebalance) **marked EXECUTED (per Meet)**. MA-034 (CF-31 audiologist-explainer test) is **still pending — blocked on Meet's compliance call** on the presenter-credential framing (see the row's own COMPLIANCE FLAG). MA-035 not yet decided. **Cycle 7 (2026-08-06) update: MA-036/037/038's "EXECUTED" status is now in question — the ES Comm 2 campaign they targeted has been at ₹0 spend since 2026-07-31, both before and after the 08-04 execution date (MA-040, escalated). MA-034/MA-035 remain undelivered 3 cycles after drafting (MA-046).**

## PRIORITY SYSTEM
- **P0** — this week. **P1** — this month. **P2** — 30–60 days. **P3** — experiments.

## ANALYSIS CADENCE (Meet, 2026-07-14)
**Weekly (Thursday 08:00 IST).** TRUE ROAS is read on the **trailing 7d**; 30-day is context only.
Kill/scale/rotate on the weekly trend, not the 30-day average. **Cycle 7 caveat: this week's TRUE ROAS
could not be read at all — GA4 connector down. Budget verdicts held account-wide until GA4 is restored.**

## STANDING WEEKLY TASKS
| Task | Cadence | Output |
|---|---|---|
| **Weekly ad-level pull** — week-over-week CPP/ROAS/frequency/CTR/reach by creative, classify each by content type + angle | Weekly (Thu) | weekly-analysis verdict table in `learning-log.md` |
| **Competitor ad teardown** (Shokz, boAt, Noise, wecool + Mojawe/Oladence via Meta Ad Library) → classify content/caption/format/hook → NG action drafts | On-demand (teardown subagent) | counter-brief drafts in `queue-inbox.md` |
| **Test matrix review** — which experiments are open/confirmed/rejected this week; what's next up | Weekly | update TEST MATRIX table below + `learning-log.md` OPEN hypotheses |

---

## CYCLE 7 — 2026-08-06 (Thursday teardown) — GA4 CONNECTOR FULLY DOWN, TWO DARK CAMPAIGNS FOUND — NEW

**GA4 fully disconnected in Windsor this cycle.** `get_connectors(include_not_yet_connected=false)`
returns only `facebook` — zero `googleanalytics4` accounts configured. All 4 scheduled GA4 pulls
(account source/medium×day 14d, campaign×source/medium aggregated ×2 windows, account source/medium
MTD) failed with the same error: `Account 299565498 is not available.` This is a config/auth fault, not
the recurring `(not set)/(not set)` tagging break seen in cycles 5–6 — confirmed via `get_connectors`
before concluding anything, per the "broken environment" protocol. **TRUE ROAS, marginal ROAS, GA4
session/CVR, and GA4 MTD revenue are all UNAVAILABLE this cycle** — report marked PARTIAL, escalated as
**MA-039**. No budget moves this cycle account-wide (can't verify the 6.0 floor).

**Two campaigns found dark with no logged cause, independent of the GA4 outage (Meta-only data):**
- **ES Comm 2**: ₹0 spend every day 2026-08-01→08-05, and ₹0 on 07-31 too (with one delayed-attribution
  purchase that day) — prior 7d (23–29 Jul) was ₹9,049.41/19 purchases. This is despite **MA-036 (+20%
  budget step), MA-037 (UTM fix), and MA-038 (creative-priority rebalance) all being marked "EXECUTED
  (per Meet), 2026-08-04"** in the queue. The campaign has been dark both before and after that
  execution date — the same "approved action, dark campaign" contradiction as MA-009/018 (June/July).
  **Escalated as MA-040**, requesting Meet's direct confirmation of status + cause.
- **ES Lite**: spend fell from ₹1,157.74/day (prior 7d avg) to ₹267.58/day (current 7d avg, −76.9%),
  hitting ₹0.00 on 2026-08-02/03 and simply absent from the pull on 08-04/05. No corresponding
  pause/cut draft exists anywhere. **Escalated as MA-041** — same ask.

**Other findings (Meta-only, platform-claimed, diagnostic):**
- Two small zero-purchase-for-14d ads found and cut: "Tech in Gujarati_Safebuds Reel_13 Jul 26 –
  Headphone Interest" (Broad Interest, ₹731.55/14d) and "Comm_Customer Review_Carousel_1 Jul 26"
  (Retargeting, ₹304.89/14d, notable because it cleared the scale line as recently as cycle 5). **CUT:
  MA-042, MA-043** — combined ~₹1,036/14d freed.
- Spend/efficiency mismatch inside the Broad Interest adset (same pattern as MA-038's original ES Comm 2
  fix): "Techopedia Safebuds Reel_24 Jul 26 – Headphone interest" absorbed most of the campaign's
  organic growth (₹7,447.86 cur7d) at the weakest in-adset ROAS (6.25×), while "Influencer_Gadgetbhai_24
  Jul 26 Comm - SME Owner Aud" runs 19.29× on a falling spend share. **Non-budget reallocation: MA-044.**
- Format-engine health check: **CF-31 and CF-37, both marked "IN TEST" since cycle 6 (three weeks
  ago), have delivered zero impressions** — checked directly against the ad×day pull, not just the
  register's status field. CF-31 blocked on Meet's compliance call (still unresolved); CF-37 has no
  stated blocker but its host adset (ES Comm 2) is now dark anyway. **Re-escalated: MA-046.** Rotated
  **CF-51 "Silent Sensory Demo"** in as the practical 3rd live trial (**MA-045**, funded by MA-042/043's
  freed spend, no net-new budget) and appended net-new format **CF-52 "Commute Noise-Test"** to the
  register (UNTESTED).
- New SKU "Openwire_5 Aug 26" (Type-C wired) launched 2026-08-05 with no prior read plan — the
  2026-08-05 daily brief already showed its PDP converting at 5.17% CVR vs SafeBuds' 0.75%. Formal
  threshold set: CPP ≤₹350, ROAS ≥8× by 2026-08-12 (**MA-047**, no change proposed, campaign already live).

**Actions this cycle:** MA-039 (FIX/escalation — GA4 fully down), MA-040 (FIX — ES Comm 2 dark despite
executed budget step), MA-041 (FIX — ES Lite dark, no logged cause), MA-042/MA-043 (CUT, two dead ads),
MA-044 (non-budget reallocation, Broad Interest), MA-045 (TEST — rotate CF-51 in), MA-046 (TEST —
re-escalate CF-31/CF-37 stall), MA-047 (TEST — Openwire read-plan, no change).

---

## CURRENT SPRINT — Sprint 2, seeded 2026-06-27 (mandate update cycle) — updated 2026-08-06 cycle 7

| # | Task | Target | Expected impact | Status | Result |
|---|---|---|---|---|---|
| P0-1 | MA-001/002 (Unboxing reel kills) — founder "held — pause none for now" 2026-06-30, i.e. not executed via approval | — | Stop spend on pool-exhausted creative | RESOLVED BY OTHER MEANS | Both ADSET_PAUSED/PAUSED with only residual spend, long since declining to near-zero. Not re-flagging. |
| P0-2 | (merged into P0-1) | — | — | — | — |
| P0-3 | MA-007 (kill Retargeting campaign) — held 2026-06-30 | Pending human decision | Stop CPP bleed / frequency breach | **STILL LIVE, watch-listed cycle 7** | Cycle 7 (30 Jul–5 Aug): Retargeting spend ₹3,445.18 (−14.0% WoW), platform CPP ₹492 (up from ₹267 prior week, +84%), platform ROAS 5.50× (down from 10.72×). Campaign-grain max freq 1.58× (35d pull) — still well under the 2.5× gate, so this looks like a CPP/ROAS trend issue, not fatigue. Cannot confirm against GA4 this cycle (down) — flagged as a FIX watch-item, not re-killed on platform data alone. |
| P0-4 | MA-010 recheck — ES Pro "3D All Feature-Pro" spend after CEO-confirmed pause | Verify zero spend in 7d | Confirm EBITDA discipline restored | **CONFIRMED CLOSED (long-standing)** | Does not appear anywhere in the 35d campaign pull (2026-07-02→08-05) — spend has been at zero for many cycles running. |
| P0-5 | MA-009 recheck — Comm LAL (id 52576570206220), approved+"executed" 2026-06-30 | Confirm scale is running | Volume at CPP ≤₹201, ROAS ≥8× | **STILL DARK, now compounded by a second dark-campaign contradiction (P0-3a below)** | Absent from the 35d campaign pull entirely — still dark, unchanged from prior cycles. |
| P0-3a (NEW cycle 7) | MA-036/037/038 (ES Comm 2 +20% budget, UTM fix, creative rebalance) — all marked EXECUTED 2026-08-04 | Confirm the campaign is actually running post-execution | Hold ROAS while scaling +20% | **BROKEN — campaign at ₹0 spend since 2026-07-31, before AND after the execution date** | Same governance pattern as MA-009/018 (June/July): an approved, marked-executed action produced zero measurable spend. Escalated MA-040, needs Meet's direct confirmation. |
| P0-6 | MA-004 scale (Techopedia SafeBuds, ₹2,500/day) — approved+executed 2026-06-30 | Hold ROAS while scaling | +volume at CPP ≤₹380 | **CONFIRMED WORKING — still holding, cycle 7** | Cur7d (30 Jul–5 Aug): spend ₹19,083.34 (ad-level), CPP ₹280.64, platform ROAS 10.24×, max ad-level freq well under gate. Still comfortably inside all thresholds. No budget step this cycle (account-wide GA4-down hold). |
| P0-7 | Comm 2.0 rotation creative (EXP-001 / MA-006) — Custom Reel decay/recovery cycle | — | Creative swap if Custom Reel keeps decaying | **MOOT — ES Comm 2 campaign entirely dark (see P0-3a)** | Cannot assess this cycle; the whole adset has zero spend. Revisit once campaign status is confirmed by Meet. |
| P0-8 | ES Lite relaunch — proven creatives × updated LAL (MA-022) | ₹1,000/day, 7-day read | CPP ≤ ₹265, ROAS ≥ 8× | **BROKEN — spend collapsed to ₹0/day since 2026-08-02, no logged cause** | Two full cycles of confirmed strong performance (cycles 5–6) followed by an unexplained stoppage. Escalated MA-041, needs Meet's direct confirmation. |
| P0-9 | Rebuild ES Lite 1% LAL from fresh 365d purchaser list (MA-023) | 2 sequential Meta writes via /execute-approved | New LAL populated + delivering | **Cannot verify — campaign itself is dark (see P0-8)** | — |
| P0-10 | Regional-language reel tests: SafeBuds Gujarati (MA-024/SH-MA-7), Comm 2.0 Telugu (MA-025/SH-MA-8) | SafeBuds: CPP≤₹380/ROAS≥8×; Comm: CPP≤₹450/ROAS≥8× | Both within 7-day read | **DIVERGED — Gujarati SafeBuds still live and holding; Telugu Comm stalled (host campaign dark)** | Gujarati SafeBuds (cur7d): ₹5,811.76 spend, 17 purchases, CPP ₹341.87, platform ROAS 7.74× — inside the hold line but softer than cycle 6's 10.52×. Telugu Comm: its host campaign (ES Comm 2) is dark — cannot assess. |
| P0-11 (NEW cycle 7) | Format-engine health — CF-31 (MA-034) and CF-37 (MA-035), both marked IN TEST since cycle 6 | 2–3 formats delivering | New format-test learnings flowing | **BROKEN — 0/2 delivering after 3 cycles** | CF-31 blocked on Meet's compliance call (unresolved 3 weeks). CF-37 has no stated blocker but its host adset is dark. Re-escalated MA-046; rotated CF-51 in as the practical 3rd trial (MA-045) since neither of the other two is producing data. |
| P0-12 (NEW cycle 7) | New SKU: Openwire (Type-C wired) campaign launched 2026-08-05, no prior read plan | CPP ≤₹350, ROAS ≥8× by 2026-08-12 | Formal threshold set, no change proposed | **NEW — day 1 only, too early to call** | Day-1: ₹306.24 spend, 1 purchase, platform ROAS 2.61×. 2026-08-05 daily brief already showed OpenWire PDP CVR 5.17% vs SafeBuds' 0.75% — real pre-existing signal. Read plan set (MA-047). |

---

## LIVE — REMARKETING CAROUSELS (launched live by founder 2026-07-02, NOT via /execute-approved)

> Two 3-slide review-style carousels went live directly inside the Retargeting campaign. **Cycle 7
> update:** "Comm_Customer Review_Carousel_1 Jul 26" — once a scale-line clearer (cycle 5: 19.86×
> platform ROAS) — has now gone fully dead: ₹304.89/14d, 0 purchases, cut this cycle (MA-043).
> "Safebuds_Review Carousel_2 Jul 26" continues at minimal spend/delivery, inconclusive.

---

## WEEKLY AD-LEVEL STATUS TABLE (cycle 7, 7d = 2026-07-30→08-05, prior 7d = 2026-07-23→07-29; platform-claimed ROAS — ranking only, GA4 down so no TRUE-ROAS cross-check possible this cycle)

| Ad (campaign) | 7d spend | 7d purchases | 7d CPP | 7d platform ROAS | Verdict |
|---|---|---|---|---|---|
| Techopedia Safebuds Reel_17May 26 (safebuds_20Apr 26) | ₹19,083.34 | 68 | ₹280.64 | 10.24× | HOLD — hero, clean, still comfortably inside gates. |
| Techopedia Safebuds Reel_24 Jul 26 – Headphone interest (Broad Interest) | ₹7,447.86 | 16 | ₹465.49 | 6.25× | Weakest in its adset on far more spend than its adset-mate — reallocation drafted (MA-044). |
| Nobody Tech Safebuds Reel_30Jun26 (safebuds_20Apr 26) | ₹5,863.16 | 20 | ₹293.16 | 10.06× | HOLD — clean rotation creative. |
| Tech in Gujarati_Safebuds Reel_13 Jul 26 (safebuds_20Apr 26) | ₹5,811.76 | 17 | ₹341.87 | 7.74× | Inside hold line but softer than cycle 6 — watch (SH-MA-7). |
| Influencer_Gadgetbhai_24 Jul 26 Comm - SME Owner Aud (Broad Interest) | ₹2,274.40 | 13 | ₹174.95 | 19.29× | Under-funded relative to efficiency — reallocation target (MA-044). |
| Reel_Lite_Mr Lazy_18 Nov 25 (ES Lite) | ₹1,838.03 | 7 | ₹262.58 | 6.66× | Campaign has since gone fully dark (MA-041) — this is the last live read before the collapse. |
| Safebuds_Unboxing Reel_28 May 26 (Retargeting) | ₹1,742.07 | 5 | ₹348.41 | 7.19× | Small residual spend, holding. |
| Comm_Unboxing Reel_28 May 26 (Retargeting) | ₹1,014.08 | 1 | ₹1,014.08 | 3.48× | Weak — watch, small spend. |
| Tech in Gujarati_Safebuds Reel_13 Jul 26 – Headphone Interest (Broad Interest) | ₹731.55 | 0 | — | 0× | **CUT (MA-042)** — 0 purchases/14d. |
| Comm_Customer Review_Carousel_1 Jul 26 (Retargeting) | ₹304.89 (14d) | 0 | — | 0× | **CUT (MA-043)** — dead after being a top performer in cycle 5. |
| Tech in Gujarati Reel_Openwire Hindi Dub_5 Aug (Openwire, NEW) | ₹306.24 (day 1) | 1 | ₹306.24 | 2.61× | Too early to call — read plan set (MA-047). |

**Blended Meta 7d spend (Windsor, `facebook` connector):** ₹47,134.07, 151 purchases, platform-claimed
ROAS 9.09× (diagnostic only — **TRUE ROAS UNAVAILABLE this cycle, GA4 down**). No budget increases
this cycle (floor cannot be verified).

---

## PERFORMANCE TARGETS (updated weekly)
| Metric | Current (7d 2026-07-30→08-05) | Weekly target | 30-day target | 90-day target (KPI) |
|---|---|---|---|---|
| SafeBuds hero CPP | ₹280.64 (Techopedia, 7d) | hold <₹380 | hold <₹350 | hold <₹300 |
| Comm 2.0 | n/a — campaign dark (see P0-3a) | — | — | — |
| ES Lite | n/a — campaign dark (see P0-8) | — | — | — |
| Retargeting CPP | ₹492 (7d, platform, up from ₹267 prior week) | Re-verify once GA4 restored | <₹400 | <₹303 (baseline) |
| Total weekly active spend | ₹47,134.07 (7d) | — | — | ~₹38,500/week to hit ₹5L in 3 months — cleared on spend, but two campaigns going dark this week pulls the account average down materially |
| **TRUE ROAS (GA4-based, account-level)** | **UNAVAILABLE — GA4 connector down** | **≥6.0 (floor)** | **≥6.0** | **≥6.0 (KPI, per Meet 2026-07-14)** |
| Active converting creatives | 8 clearing platform ROAS ≥6× this cycle | 3 after kills + creative swap | 4 | 5–6 (test matrix live) |
| Worst creative frequency (ad-level) | 1.64× max (Tech in Gujarati_Safebuds Reel), excl. one anomalous single-day 2.00× read | <2.0× across all | <2.0× | <2.0× |

---

## 3-MONTH TEST MATRIX (toward ₹5L / TRUE ROAS ≥6.0 floor — seeded 2026-06-27, floor redefined 2026-07-14)

> Each experiment is one falsifiable hypothesis. Must clear ROAS ≥ 8× CPP ≤ floor on a 7-day read to earn scale. Spend allocation is indicative; each experiment gets ₹5,000–₹15,000 for the test window before scale decision.
>
> **Format source:** the EXP `Content type` values are drawn from the **`## CREATIVE-FORMAT TEST ENGINE` register (CF-# rows) in `learning-log.md`** — the master format library. This matrix tracks the *currently-live* experiments; the register holds the full open catalog + each format's tested/validated/rejected status. Keep 2–3 format trials live at all times (see constitution §5d). **Cycle 7: only CF-51 is actually delivering — CF-31/CF-37 remain undelivered despite being marked IN TEST, see MA-046.**

| Exp # | Content type | Ad structure | Audience mix | Hypothesis (metric + threshold) | Test spend | Status | Queue id |
|---|---|---|---|---|---|---|---|
| **EXP-001** | Review/explainer Reel — Gadgetbhai-style WFH hook | 0–3s pain hook → product demo → stat proof → CTA. | Comm 2.0 LAL 1% | Replacing Custom Reel with a proper review-format creative lifts ROAS from 5.82× to ≥8× within 7 days at CPP ≤₹250 | ₹10,000 test | **MOOT — ES Comm 2 campaign entirely dark this cycle (MA-040)** | MA-006, MA-012, MA-030 |
| **EXP-002** | Same Gadgetbhai/Techopedia winning creative | Broad — interest = "open ear headphones" + "work from home" | Broad India (no LAL constraint) | Meta Andromeda signal: broad targeting with winning review creative achieves CPP ≤₹291 and ROAS ≥8× within 7 days | ₹10,000 test | **Partially overtaken by events** — "Broad Interest Based-24 Jul 26" campaign is live and growing organically (+65.8% spend, platform ROAS 8.81×), closely resembling this hypothesis. Reconcile formally once GA4 is back. | MA-013 |
| **EXP-003** | Review/explainer Reel — ES Lite angle | Price anchor (₹1,999). | ES Lite Interest audience (fresh) | ES Lite review Reel at CPP ≤₹265 and ROAS ≥8× within 7 days at ₹10K test spend. | ₹10,000 test | **STALLED — ES Lite campaign entirely dark this cycle (MA-041)** | MA-014 |
| **EXP-004** | Health/hearing-education explainer | Problem-agitation → open canal demo → NG product → CTA. 25–30s. | SafeBuds LAL 3–5% (scale out from 1%) | Expanding SafeBuds LAL 1% to 3–5% while running health/education creative hook maintains ROAS ≥10× at CPP ≤₹350 within 7 days | ₹12,000 test | OPEN — not sequenced (GA4 down, no floor confirmation possible for an audience-expansion test). | MA-015 |
| **EXP-005** | UGC-style testimonial with scripted review structure | Native, talking-head. 20–25s. | SafeBuds Interest + Broad (no seed) | Lo-fi scripted-review hybrid reduces CPM 15–20% and holds ROAS ≥8×. | ₹8,000 test | OPEN — creative brief needed (MA-016) | MA-016 |
| **EXP-006** | Regional-language review Reel — Gujarati voiceover | Added as a 3rd ad inside the existing SafeBuds LAL 1% ad set | SafeBuds LAL 1% (52536580555620) | Gujarati-voiceover reel matches/beats ad set blended CPP ₹258.08 and clears ROAS ≥8× within 7 days at ₹800/day | ₹5,600 test | **STILL LIVE, softening** — cur7d: ₹5,811.76 spend, 17 purchases, CPP ₹341.87, platform ROAS 7.74× (down from cycle 6's 10.52×) — inside hold line, watch. | MA-024, MA-033 |
| **EXP-007** | Regional-language review Reel — Telugu voiceover | Added as a 5th ad inside the existing Comm 2.0 LAL 1% ad set | Comm LAL 1% (6966216690816) | Telugu-voiceover reel matches/beats ad set blended CPP ₹242.21 and clears ROAS ≥8× within 7 days at ₹600/day | ₹4,200 test | **STALLED — host campaign (ES Comm 2) entirely dark (MA-040)** | MA-025, MA-032 |
| **EXP-008** | No new creative — spend-quality test | Pause TOFU Kannada office reel | TOFU_Awareness_Audience_23 May 26 | Pausing the zero-direct-purchase TOFU reel does NOT measurably shrink Retargeting-campaign reach/pool health | ₹4,823 (spend avoided) | **Appears held** — Kannada reel absent from the 21d ad pull entirely (last spend 07-17); GA4 down so the blended-ROAS half can't be confirmed yet. | MA-028 |
| **EXP-009 (NEW, cycle 7)** | Demonstration route, no voiceover — CF-51 "Silent Sensory Demo" | Challenger ad inside the safebuds_20Apr 26 hero adset | safebuds_20Apr 26 LAL | Clears the review-format control (CPP≤₹380, ROAS≥8×, freq<2.5×) within a 7-day read at ~₹5,000 spend | ₹5,000 test, funded by MA-042/043 reallocation | **NEW — drafted 2026-08-06, brief pending production.** | MA-045 |
| **EXP-010 (NEW, cycle 7)** | New SKU — Openwire (Type-C wired), Hindi-dub Reel | Standalone new campaign, day 1 | Openwire_5 Aug 26 | CPP ≤₹350, platform ROAS ≥8× by 2026-08-12 (7-day read), motivated by the 08-05 daily brief's 5.17% PDP CVR signal | Already live at current small spend, no change proposed | **NEW — day 1 only (₹306.24 spend, 1 purchase), too early to call.** | MA-047 |

**Spend allocation guide (₹5L over 3 months):** Month 1 (Jul) actuals were ahead of pace. Floor
discipline (TRUE ROAS ≥6.0) gates all further budget scaling per Meet's 2026-07-14 mandate — **but this
cycle the floor itself cannot be measured (GA4 down)**, so the entire scaling question is on hold, not
just individual campaigns.

---

## DATA PULL SCHEDULE
- Weekly (Thu): Meta ad-level pull — 7d vs prior 7d comparison (CPP/ROAS/freq/CTR/reach by ad).
- Weekly (Thu): Windsor.ai GA4 7d pull — TRUE ROAS (Meta spend ÷ GA4 Meta-paid revenue). **Cycle 7:
  GA4 connector fully disconnected — re-authorization needed before this can run again (MA-039).**
- Weekly (Thu, on-demand): Competitor ad teardown — Meta Ad Library (boAt Airdopes Loop longevity + new entrants).
- Monthly: 30-day archive into `learning-log.md`.

---

## DEPENDENCIES / BLOCKERS
- **GA4 connector fully disconnected in Windsor (NEW, cycle 7):** `get_connectors` shows zero
  configured `googleanalytics4` accounts — blocks TRUE ROAS, marginal ROAS, per-campaign CVR, and GA4
  MTD revenue entirely. Escalated as MA-039. This is a bigger break than the recurring `(not set)`
  tagging issue (MA-029) — it needs re-authorization, not a tagging-pipeline fix.
- **Two dark campaigns with no logged cause (NEW, cycle 7):** ES Comm 2 (₹0 spend since 2026-07-31,
  despite MA-036/037/038 marked EXECUTED 2026-08-04 — MA-040) and ES Lite (₹0/day since 2026-08-02 —
  MA-041). Both need Meet's direct confirmation before next cycle.
- **Format-engine stall (NEW, cycle 7):** CF-31 (MA-034) and CF-37 (MA-035) have delivered zero
  impressions in the 3 cycles since being marked IN TEST. CF-31 blocked on Meet's compliance call
  (presenter-credential framing); CF-37's host adset is now dark. Re-escalated MA-046.
- **Creative production:** EXP-004, EXP-005 gated on instagram-content / Higgsfield producing
  review-format Reels.
- **Approval queue:** MA-039 through MA-047 (this cycle's drafts) all pending human sign-off in
  `queue-inbox.md` (never `APPROVALS_QUEUE.md` directly).
- Stock gates: all three main SKUs cleared as of 2026-06-27.
