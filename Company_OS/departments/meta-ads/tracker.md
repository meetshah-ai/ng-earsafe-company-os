# Meta Ads — Live Task Tracker

> **This file + `learning-log.md` are the two live files the Meta Ads Operator reads at runtime**
> (`Company_OS/agents/meta-ads.agent.yaml`; the managed agent runs **twice a week, Mon + Thu 08:00
> IST**, and drafts to `queue-inbox.md`). Keep it current: after a task, update status + result; each
> cycle, archive completed items into `learning-log.md`.
> Last updated: 2026-08-13 (cycle 10 — Thursday teardown, live independent re-run. Account clears the
> 6.0 TRUE-ROAS floor and the marginal-ROAS gate cleanly on a fresh direct-API pull — TRUE ROAS 7.80×
> cur7d / 7.72× prior7d (7.62× matured 6d), marginal ROAS 7.04× matured / 8.09× naive, no maturity
> distortion this run. **Openwire's threshold re-confirmed and improved** (CPP ₹96.16, platform ROAS
> 8.72×, GA4-dir ROAS 8.78×) — MA-062's pending +20% step should be executed without further delay.
> **Broad Interest recovered** to 10.00× GA4-directional ROAS on a fuller week (still in no-touch until
> 08-20). **New diagnostics this cycle** (ad-level auction-quality/hook-retention + campaign×placement
> pulls): Instagram Feed inside safebuds_20Apr's adset burns ₹6,437/week at a CPP 47% worse than its own
> Reels placements (MA-064, placement exclusion); safebuds_20Apr's own funnel is softening at
> session→ATC and ATC→checkout (MA-065); Openwire's hero ad has the account's strongest hook but weak
> mid-video retention (MA-066 re-edit test); Tamil dub has the account's weakest hook, consistent with
> its existing under-floor read (MA-061). Format engine still 0/4 delivering, 6th straight cycle
> (MA-059) — appended CF-55 (MA-067). Two new small zero-purchase ads found (MA-063); the standing CUT
> backlog (MA-042/043/051) re-confirmed still unexecuted; MA-054 downgraded to WATCH/SUPERSEDED after a
> delayed purchase landed against it since it was drafted.)
> Cycle 9 summary (2026-08-13, earlier same-day tracker state, retained below for continuity): Account
> cleared the 6.0 TRUE-ROAS floor both weeks — headline 6.46× cur7d / 7.72× prior7d, or 7.62×/7.72× on
> the maturity-corrected 6-day recompute (2026-08-12 carried 55.1% GA4 `(not set)` share vs <5% every
> other day — a D+2 attribution-lag artifact, not a new tagging break). Marginal ROAS cleared too once
> matured (7.04× vs a misleading naive 1.56×). **Openwire's MA-047 read-plan cleared decisively** (CPP
> ₹96.14, ROAS 8.72×/7.80× directional) — first-ever budget step drafted (MA-062, +20%). Broad
> Interest's MA-048 step **held the floor but missed its own re-scale bar** (dROAS 7.11× vs the 8× line)
> — HOLD, no further step, also in no-touch until 08-20. **Three unexplained dark/collapsed structures
> that cycle:** Retargeting collapsed −94.6% (MA-055), ES Lite still fully dark 10th+ day (MA-056), ES
> Comm 2 resumed spending 08-10 after 9 dark days with no logged cause either way (MA-057). New
> non-budget FIX: safebuds_20Apr's hero ad carrying 88% of adset spend at a CPP that's climbed +32.6%
> over 4 cycles while its Gujarati-creative support went dark (MA-058).

## 2026-08-04 /approvals UPDATE
MA-031, MA-032, MA-033, MA-036, MA-037, MA-038 (the MOFU campaign pause, Telugu delivery diagnostic, Gujarati creative-priority shift, ES Comm 2 +20% budget step, the UTM tag-mismatch fix, and the Gadgetbhai/Merged rebalance) **marked EXECUTED (per Meet)**. MA-034 (CF-31 audiologist-explainer test) is **still pending — blocked on Meet's compliance call** on the presenter-credential framing (see the row's own COMPLIANCE FLAG), now 6+ weeks unresolved as of cycle 10. MA-035 not yet decided. **Cycle 7 update: MA-036/037/038's "EXECUTED" status came into question — the ES Comm 2 campaign they targeted was dark from 2026-07-31 through 2026-08-09. Cycle 9 update: the campaign resumed spending 2026-08-10 — the underlying fact is now partially resolved, but neither the outage's nor the restart's cause has ever been logged (MA-057). Cycle 10 update: still unresolved — ES Comm 2 now has a fuller live week (cur7d spend ₹5,459.61) but the cause question stands.**

## PRIORITY SYSTEM
- **P0** — this week. **P1** — this month. **P2** — 30–60 days. **P3** — experiments.

## ANALYSIS CADENCE (Meet, 2026-07-14)
**Weekly (Thursday 08:00 IST).** TRUE ROAS is read on the **trailing 7d**; 30-day is context only.
Kill/scale/rotate on the weekly trend, not the 30-day average. **Cycle 9 addition: always compute a
matured (excl. the newest day) recompute alongside the raw trailing-7d headline — GA4 attribution has
a structural ~D+2 maturity lag that can make the newest day look like a floor breach when it isn't.**
**Cycle 10 addition: this session's live pull moved auth from Meta's `?access_token=` query param
(400'd as "Malformed access token") to an `Authorization: Bearer` header, which worked immediately —
future pulls should default to the header form.**

## STANDING WEEKLY TASKS
| Task | Cadence | Output |
|---|---|---|
| **Weekly ad-level pull** — week-over-week CPP/ROAS/frequency/CTR/reach by creative, classify each by content type + angle | Weekly (Thu) | weekly-analysis verdict table in `learning-log.md` |
| **Competitor ad teardown** (Shokz, boAt, Noise, wecool + Mojawe/Oladence via Meta Ad Library) → classify content/caption/format/hook → NG action drafts | On-demand (teardown subagent) | counter-brief drafts in `queue-inbox.md` |
| **Test matrix review** — which experiments are open/confirmed/rejected this week; what's next up | Weekly | update TEST MATRIX table below + `learning-log.md` OPEN hypotheses |

---

## CYCLE 10 — 2026-08-13 (Thursday teardown, live independent re-run) — FLOOR + MARGIN CLEAR CLEANLY, OPENWIRE RE-VALIDATED, NEW PLACEMENT/FUNNEL/HOOK DIAGNOSTICS — NEW

**Account-level:** TRUE ROAS 7.80× cur7d (2026-08-06→08-12), 7.72× prior7d, 7.62× matured 6d — no
`(not set)` maturity spike this run (max 3.5%, vs cycle 9's logged 55.1% on the same calendar day; both
readings are legitimate, attribution keeps resolving intraday). Marginal ROAS 7.04× matured / 8.09×
naive — both clear the 6.0 gate. MTD (1–12 Aug): spend ₹91,568.14, GA4 Meta-paid revenue ₹7,15,353.30,
TRUE ROAS **7.81×**.

**Openwire re-confirmed and improved:** cur7d CPP ₹96.16 (≤₹350), platform ROAS 8.72× (≥8×),
GA4-directional ROAS 8.78× (up from 7.80×), freq 1.26×. **MA-062's pending +20% step should be executed
now** — every week it sits undone at this margin is floor-clearing volume left unscaled.

**Broad Interest recovered:** GA4-directional ROAS now 10.00× on a fuller week (vs the 7.11× D+7 read
logged in cycle 9, which looks like a transitional dip) — clears its own 8× bar again. Still in 2-week
no-touch until 2026-08-20 regardless; no action possible or needed.

**New diagnostic pulls this cycle (ad-level auction-quality/hook-retention + campaign×placement):**
- **Placement CUT:** Instagram Feed inside safebuds_20Apr's adset burns ₹6,436.90/week (18.6% of adset
  spend) at CPP ₹536.41 — 47% worse than the adset blend and worse than both Reels placements.
  **MA-064**, non-budget placement exclusion.
- **Funnel FIX:** safebuds_20Apr's own funnel is softening at the top — session→ATC 12.1%→11.2%,
  ATC→checkout 64.4%→61.1% — while checkout→purchase held. **MA-065.**
- **Hook-retention TEST:** Openwire's hero ad has the account's strongest hook (p25 = 12.7% of
  impressions) but only 24.0% of p25-viewers reach p75 — re-edit the body, not the hook. **MA-066.**
  Tamil dub has the account's weakest hook (p25 = 3.07%), supporting its existing MA-061 kill-line
  watch. New format **CF-55 "Silent Scroll-Stopper"** appended to isolate hook-craft as its own lever
  (**MA-067**).
- **Auction quality:** no `BELOW_AVERAGE` ranking on any real-spend ad this week — clean.

**Zero-purchase check (21d ad pull):** two new small zero-purchase ads (**MA-063**, ₹64.06/21d
combined); the standing MA-042/043/051 cluster re-confirmed still unexecuted (₹1,048.13/21d). **MA-054
downgraded to WATCH/SUPERSEDED** — the ad it cut now shows 1 purchase/₹544.34 over the identical
21-day window (a delayed-attribution purchase landed against it since drafting); don't re-execute a
stale cut basis without re-verifying.

**Format engine:** CF-31/37/51/54 confirmed still 0/4 delivering, 6th straight cycle. Appended CF-55
(MA-067, above).

**Actions this cycle:** MA-063 (CUT, 2 new zero-purchase ads), MA-064 (CUT, IG Feed placement
exclusion), MA-065 (FIX, safebuds_20Apr funnel), MA-066 (TEST, Openwire body re-edit), MA-067 (TEST,
append CF-55); MA-054 downgraded to WATCH/SUPERSEDED; MA-055/056/057/058/059/061/062 all re-confirmed
with fresh cycle-10 numbers, none newly resolved.

---

## CYCLE 9 — 2026-08-13 (Thursday teardown) — FLOOR CLEARS ON MATURED READ, OPENWIRE VALIDATED, THREE UNEXPLAINED DARK/COLLAPSED STRUCTURES

**Account-level:** TRUE ROAS clears the 6.0 floor both weeks — headline 6.46× cur7d (2026-08-06→08-12),
7.72× prior7d; matured (excl. 08-12's attribution-immature data, 55.1% GA4 `(not set)` share vs <5% every
other day) 7.62× cur6d. Marginal ROAS: naive 1.56× (misleading, same maturity artifact) vs matured
**7.04×** — clears the scale gate. MTD (1–12 Aug): spend ₹91,530.49, GA4 Meta-paid revenue ₹6,35,523.00,
TRUE ROAS **6.94×**.

**Openwire_5 Aug 26 (MA-047's pre-set 08-12 read-plan) VALIDATED decisively:** cur7d CPP ₹96.14
(≤₹350 threshold), platform ROAS 8.72× (≥8× threshold), GA4-directional ROAS 7.80× (CVR 4.27%, best on
the account). **First-ever budget step drafted: MA-062, +20% to ~₹1,269/day.**

**Broad Interest's MA-048 +20% step (landed 08-06) — D+7 read HELD the floor, missed its own re-scale
bar:** platform CPP improved ₹353.90→₹266.23, but GA4-directional ROAS softened 8.96×→7.11× (still >6.0,
no revert triggered, but under the 8× line MA-048 itself set). **VERDICT: HOLD**, no further step — also
in 2-week no-touch until 2026-08-20 regardless.

**Three unexplained dark/collapsed structures, now a recurring governance pattern across 3 cycles:**
- **Retargeting collapsed −94.6%** (₹3,446.71 prior7d → ₹185.57 cur7d), 0 purchases, GA4-directional
  ROAS 0×. New, unexplained. **MA-055.**
- **ES Lite still fully dark**, 10th+ consecutive day, 3rd straight cycle this exact ask unanswered.
  **MA-056 (restates MA-041).**
- **ES Comm 2 resumed spending 2026-08-10** after 9 straight dark days — partially resolves MA-040's
  fact, cause of neither the outage nor the restart logged. **MA-057.**

**New non-budget FIX — safebuds_20Apr hero-ad concentration:** "Techopedia Safebuds Reel_17May 26" now
carries 88% of the adset's cur7d spend at a CPP that's climbed ₹280.64→₹372.34 (+32.6%) over 4 cycles,
while "Tech in Gujarati_Safebuds Reel_13 Jul 26" (7.74× directional ROAS as recently as cycle 8) has
gone dark (~₹0). Ad-level frequency (1.14–1.43×) nowhere near the 2.5× gate — a mix/concentration risk
preceding fatigue, not fatigue itself. **MA-058.**

**Format engine:** CF-31/CF-37/CF-51 still 0/3 delivering, 5th straight cycle. **Re-escalated MA-059.**
Appended net-new format **CF-54 "Rapid-Fire Speed Review"** (pacing/density lever, MA-060).

**New read-plan:** Tamil/Kannada SafeBuds regional dubs (launched 08-05, no prior threshold) — CPP≤₹380/
ROAS≥8× by 2026-08-19 (**MA-061**).

**CUT backlog going stale:** MA-042/043/051 (drafted cycle 8) still unexecuted 2–3 cycles running; one
new zero-purchase ad found (Influencer_IND Unboxer_Comm_Problem Hook, ₹238.62/21d — **MA-054**).
Combined named waste ~₹1,589.05/21d (~₹530/week).

**Actions this cycle:** MA-054 (CUT), MA-055 (FIX, new), MA-056 (FIX, restates MA-041), MA-057 (FIX,
restates MA-040), MA-058 (FIX, non-budget), MA-059 (TEST re-escalation), MA-060 (TEST — append CF-54),
MA-061 (TEST — read-plan), MA-062 (SCALE, budget +20% — Openwire).

---

## CYCLE 7 — 2026-08-06 (Thursday teardown) — GA4 CONNECTOR FULLY DOWN, TWO DARK CAMPAIGNS FOUND

**GA4 fully disconnected in Windsor this cycle.** `get_connectors(include_not_yet_connected=false)`
returns only `facebook` — zero `googleanalytics4` accounts configured. All 4 scheduled GA4 pulls
(account source/medium×day 14d, campaign×source/medium aggregated ×2 windows, account source/medium
MTD) failed with the same error: `Account 299565498 is not available.` This is a config/auth fault, not
the recurring `(not set)/(not set)` tagging break seen in cycles 5–6 — confirmed via `get_connectors`
before concluding anything, per the "broken environment" protocol. **TRUE ROAS, marginal ROAS, GA4
session/CVR, and GA4 MTD revenue are all UNAVAILABLE this cycle** — report marked PARTIAL, escalated as
**MA-039**. No budget moves this cycle account-wide (can't verify the 6.0 floor).

> **Same-day correction (cycle 8):** Meet moved GA4 access to a direct Analytics Data API call,
> bypassing Windsor entirely — all 4 GA4 pulls succeeded and every number below was recomputed with
> real data. See cycle 8 below and the learning-log for the corrected report. **Cycle 9 update: this
> direct-API path has now held for 3 straight cycles (7→9), no further Windsor GA4 issues. Cycle 10
> update: held again on this session's independent re-run (4th straight cycle).**

**Two campaigns found dark with no logged cause, independent of the GA4 outage (Meta-only data):**
- **ES Comm 2**: ₹0 spend every day 2026-08-01→08-05, and ₹0 on 07-31 too (with one delayed-attribution
  purchase that day) — prior 7d (23–29 Jul) was ₹9,049.41/19 purchases. This is despite **MA-036 (+20%
  budget step), MA-037 (UTM fix), and MA-038 (creative-priority rebalance) all being marked "EXECUTED
  (per Meet), 2026-08-04"** in the queue. The campaign has been dark both before and after that
  execution date — the same "approved action, dark campaign" contradiction as MA-009/018 (June/July).
  **Escalated as MA-040**, requesting Meet's direct confirmation of status + cause. **Cycle 9 update:
  campaign resumed spending 2026-08-10 — see MA-057.**
- **ES Lite**: spend fell from ₹1,157.74/day (prior 7d avg) to ₹267.58/day (current 7d avg, −76.9%),
  hitting ₹0.00 on 2026-08-02/03 and simply absent from the pull on 08-04/05. No corresponding
  pause/cut draft exists anywhere. **Escalated as MA-041** — same ask. **Cycle 9 update: still fully
  dark, 10th+ consecutive day — see MA-056. Cycle 10 update: still fully dark, now 12th+ day.**

**Other findings (Meta-only, platform-claimed, diagnostic):**
- Two small zero-purchase-for-14d ads found and cut: "Tech in Gujarati_Safebuds Reel_13 Jul 26 –
  Headphone Interest" (Broad Interest, ₹731.55/14d) and "Comm_Customer Review_Carousel_1 Jul 26"
  (Retargeting, ₹304.89/14d, notable because it cleared the scale line as recently as cycle 5). **CUT:
  MA-042, MA-043** — combined ~₹1,036/14d freed. **Cycle 9 update: still not executed, 3rd cycle
  running. Cycle 10 update: still not executed, re-confirmed on this cycle's live pull.**
- Spend/efficiency mismatch inside the Broad Interest adset (same pattern as MA-038's original ES Comm 2
  fix): "Techopedia Safebuds Reel_24 Jul 26 – Headphone interest" absorbed most of the campaign's
  organic growth (₹7,447.86 cur7d) at the weakest in-adset ROAS (6.25×), while "Influencer_Gadgetbhai_24
  Jul 26 Comm - SME Owner Aud" runs 19.29× on a falling spend share. **Non-budget reallocation: MA-044.**
  **Cycle 9 update: D+7 read shows both ads now clearing (Headphone interest 10.07×, SME Owner Aud
  12.43×) — appears to have worked, keep watching.**
- Format-engine health check: **CF-31 and CF-37, both marked "IN TEST" since cycle 6 (three weeks
  ago), have delivered zero impressions** — checked directly against the ad×day pull, not just the
  register's status field. CF-31 blocked on Meet's compliance call (still unresolved); CF-37 has no
  stated blocker but its host adset (ES Comm 2) is now dark anyway. **Re-escalated: MA-046.** Rotated
  **CF-51 "Silent Sensory Demo"** in as the practical 3rd live trial (**MA-045**, funded by MA-042/043's
  freed spend, no net-new budget) and appended net-new format **CF-52 "Commute Noise-Test"** to the
  register (UNTESTED). **Cycle 9 update: CF-31/37/51 still 0/3 delivering, 5th straight cycle — MA-059,
  appended CF-54 (MA-060). Cycle 10 update: still 0/4 (incl. CF-54), 6th straight cycle — CF-55 appended
  (MA-067).**
- New SKU "Openwire_5 Aug 26" (Type-C wired) launched 2026-08-05 with no prior read plan — the
  2026-08-05 daily brief already showed its PDP converting at 5.17% CVR vs SafeBuds' 0.75%. Formal
  threshold set: CPP ≤₹350, ROAS ≥8× by 2026-08-12 (**MA-047**, no change proposed, campaign already
  live). **Cycle 9 update: VALIDATED decisively — CPP ₹96.14, ROAS 8.72×/7.80× directional. First budget
  step drafted (MA-062). Cycle 10 update: threshold re-confirmed and improved (CPP ₹96.16, dir ROAS
  8.78×) — MA-062 should be executed now.**

**Actions this cycle:** MA-039 (FIX/escalation — GA4 fully down), MA-040 (FIX — ES Comm 2 dark despite
executed budget step), MA-041 (FIX — ES Lite dark, no logged cause), MA-042/MA-043 (CUT, two dead ads),
MA-044 (non-budget reallocation, Broad Interest), MA-045 (TEST — rotate CF-51 in), MA-046 (TEST —
re-escalate CF-31/CF-37 stall), MA-047 (TEST — Openwire read-plan, no change).

---

## CURRENT SPRINT — Sprint 2, seeded 2026-06-27 (mandate update cycle) — updated 2026-08-13 cycle 10

| # | Task | Target | Expected impact | Status | Result |
|---|---|---|---|---|---|
| P0-1 | MA-001/002 (Unboxing reel kills) — founder "held — pause none for now" 2026-06-30, i.e. not executed via approval | — | Stop spend on pool-exhausted creative | RESOLVED BY OTHER MEANS | Both ADSET_PAUSED/PAUSED with only residual spend, long since declining to near-zero. Not re-flagging. |
| P0-2 | (merged into P0-1) | — | — | — | — |
| P0-3 | MA-007 (kill Retargeting campaign) — held 2026-06-30 | Pending human decision | Stop CPP bleed / frequency breach | **ESCALATED FURTHER — campaign remains collapsed** | Cycle 10 (6–12 Aug, live re-pull): spend ₹185.95 (from ₹3,446.71 prior7d, −94.6%), 0 purchases, GA4-directional ROAS 0×. Re-confirmed, cause still unlogged — MA-055. |
| P0-4 | MA-010 recheck — ES Pro "3D All Feature-Pro" spend after CEO-confirmed pause | Verify zero spend in 7d | Confirm EBITDA discipline restored | **CONFIRMED CLOSED (long-standing)** | Does not appear anywhere in the 35d campaign pull — spend has been at zero for many cycles running. |
| P0-5 | MA-009 recheck — Comm LAL (id 52576570206220), approved+"executed" 2026-06-30 | Confirm scale is running | Volume at CPP ≤₹201, ROAS ≥8× | **STILL DARK** | Absent from the 35d campaign pull entirely — still dark, unchanged from prior cycles. |
| P0-3a | MA-036/037/038 (ES Comm 2 +20% budget, UTM fix, creative rebalance) — all marked EXECUTED 2026-08-04 | Confirm the campaign is actually running post-execution | Hold ROAS while scaling +20% | **PARTIALLY RESOLVED — campaign has a fuller live week now** | ES Comm 2 cur7d (this cycle's live pull): spend ₹5,459.61, 16 purchases, platform ROAS 10.31×, GA4-dir ROAS 9.67× (472 sessions) — resumed 08-10, still building toward a full clean week. Cause of neither the outage nor the restart is logged — MA-057 restates the governance ask. |
| P0-6 | MA-004 scale (Techopedia SafeBuds, ₹2,500/day) — approved+executed 2026-06-30 | Hold ROAS while scaling | +volume at CPP ≤₹380 | **CONCENTRATION RISK PERSISTS** | Cur7d (this cycle's live pull): ad-level spend ₹30,543.26, CPP ₹372.48 (up from ₹280.64 five cycles ago), platform ROAS 7.90×. Still inside the ₹380 hold line but climbing, and still carries 88.3% of its adset's spend. See MA-058, still unexecuted. |
| P0-7 | Comm 2.0 rotation creative (EXP-001 / MA-006) — Custom Reel decay/recovery cycle | — | Creative swap if Custom Reel keeps decaying | **MOOT — host campaign still building toward a clean week** | Custom Reel doesn't appear in this cycle's ad-level cur7d data at all. Re-assess once ES Comm 2 has a full clean week. |
| P0-8 | ES Lite relaunch — proven creatives × updated LAL (MA-022) | ₹1,000/day, 7-day read | CPP ≤ ₹265, ROAS ≥ 8× | **STILL BROKEN — now 12th+ consecutive dark day** | No spend at all since 2026-08-01, re-confirmed on this cycle's live pull. MA-056. |
| P0-9 | Rebuild ES Lite 1% LAL from fresh 365d purchaser list (MA-023) | 2 sequential Meta writes via /execute-approved | New LAL populated + delivering | **Cannot verify — campaign itself is dark (see P0-8)** | — |
| P0-10 | Regional-language reel tests: SafeBuds Gujarati (MA-024/SH-MA-7), Comm 2.0 Telugu (MA-025/SH-MA-8) | SafeBuds: CPP≤₹380/ROAS≥8×; Comm: CPP≤₹450/ROAS≥8× | Both within 7-day read | **STILL DIVERGED — Gujarati SafeBuds still dark; Telugu Comm's host campaign still building a clean week** | Gujarati SafeBuds reel: ₹0 cur7d spend, re-confirmed — no logged cause, part of MA-058's still-unexecuted concentration finding. Telugu Comm: host campaign (ES Comm 2) has a fuller week now but the Telugu ad itself still doesn't appear in cur7d data. |
| P0-11 | Format-engine health — CF-31 (MA-034), CF-37 (MA-035), CF-51 (MA-045), CF-54 (MA-060), all marked IN TEST/queued | 2–3 formats delivering | New format-test learnings flowing | **BROKEN — 0/4 delivering, 6th straight cycle** | Re-confirmed MA-059. CF-31 still blocked on Meet's compliance call (6+ weeks). CF-37's host adset still building a clean week. CF-51's brief still not produced. Appended CF-55 (MA-067) per the standing "append ≥1 net-new format" rule. |
| P0-12 | New SKU: Openwire (Type-C wired) campaign launched 2026-08-05 | CPP ≤₹350, ROAS ≥8× by 2026-08-12 | Formal threshold set, no change proposed | **VALIDATED, THRESHOLD RE-CONFIRMED AND IMPROVED — EXECUTE MA-062 NOW** | Cur7d (live pull): CPP ₹96.16, platform ROAS 8.72×, GA4-directional ROAS 8.78× (up from 7.80×, best CVR on the account). First budget step (MA-062, +20%) still pending — recommend executing without further delay. |
| P0-13 | safebuds_20Apr hero-ad concentration + CPP creep | Rebalance priority toward Nobody Tech; investigate Gujarati creative's dark status | Blended adset ROAS holds/improves without net-new spend | **STILL PENDING — non-budget FIX (MA-058) unexecuted** | Techopedia_17May26 still at 88.3% of adset spend, CPP ₹372.48; Nobody Tech (8.97× ROAS) still under-funded at 7.3%; Gujarati creative still dark. Re-confirmed this cycle. |
| P0-14 (NEW cycle 10) | Instagram Feed placement inside safebuds_20Apr's adset burning spend at a materially worse CPP than its own Reels placements | Exclude the placement; reallocate toward the adset's proven Reels placements/Nobody Tech creative | ~₹6,437/week reallocated at a better blended CPP | **NEW — placement-exclusion CUT drafted (MA-064)** | Instagram Feed: ₹6,436.90/7d (18.6% of adset spend), CPP ₹536.41 — 47% worse than the adset blend (₹364.07) and both Reels placements (₹366.34/₹417.54). |
| P0-15 (NEW cycle 10) | safebuds_20Apr's own GA4 funnel softening at session→ATC and ATC→checkout | Landing-page/creative-interest-match audit on SafeBuds PDP | Funnel rates recover toward prior-week levels | **NEW — FIX drafted (MA-065), no change proposed yet** | S2A 12.1%→11.2%, A2C 64.4%→61.1% this week vs prior, on 3,702 sessions; checkout→purchase held (32.7%→34.3%) — the leak is upstream of checkout. |
| P0-16 (NEW cycle 10) | Openwire hero ad: strong hook (p25 12.7% of impressions, best on account), weak mid-video retention (only 24.0% of p25-viewers reach p75) | Re-edit the ad's 8–20s body, leave the hook untouched | p75/p25 ratio rises to ≥40% while CPP/ROAS hold | **NEW — re-edit TEST drafted (MA-066), ~₹3,000 spend, funded by CUT-list reallocation** | See SH-MA-17 in learning-log.md. |

---

## LIVE — REMARKETING CAROUSELS (launched live by founder 2026-07-02, NOT via /execute-approved)

> Two 3-slide review-style carousels went live directly inside the Retargeting campaign. **Cycle 9
> update:** the entire host campaign collapsed to ₹185.57/week — both carousels are effectively moot
> until Retargeting's own status is confirmed (see MA-055). **Cycle 10 update: still collapsed
> (₹185.95/7d, 0 purchases), re-confirmed on this cycle's live pull — no change.**

---

## WEEKLY AD-LEVEL STATUS TABLE (cycle 10, cur7d = 2026-08-06→08-12, prior7d = 2026-07-30→08-05; platform-claimed ROAS — ranking only; GA4-directional ROAS given where a reliable campaign tag exists)

| Ad (campaign) | 7d spend | 7d purchases | 7d CPP | 7d platform ROAS | Verdict |
|---|---|---|---|---|---|
| Techopedia Safebuds Reel_17May 26 (safebuds_20Apr 26) | ₹30,543.26 | 82 | ₹372.48 | 7.90× | 88.3% of adset spend, CPP still climbing — concentration risk unresolved, see MA-058. |
| Techopedia Safebuds Reel_24 Jul 26 – Headphone interest (Broad Interest) | ₹7,619.47 | 30 | ₹253.98 | 10.07× | Healthy, holding post-MA-044 reallocation. |
| Tech in Gujarati Reel_Openwire Hindi Dub_5 Aug (Openwire) | ₹7,404.06 | 77 | ₹96.16 | 8.72× | VALIDATED, threshold improved — strongest hook on account (p25 12.7%) but weak body-retention (p75/p25 24.0%) — see MA-066. |
| Influencer_Gadgetbhai_13 Nov Comm (ES Comm 2) | ₹5,101.51 | 16 | ₹318.84 | 11.04× | Carrying nearly all of the campaign's revived spend. |
| Influencer_Gadgetbhai_24 Jul 26 Comm - SME Owner Aud (Broad Interest) | ₹3,983.55 | 14 | ₹284.54 | 12.40× | Healthy, holding. |
| Nobody Tech Safebuds Reel_30Jun26 (safebuds_20Apr 26) | ₹2,509.65 | 9 | ₹278.85 | 8.97× | Healthiest ad in its adset — still under-funded relative to efficiency, see MA-058. |
| Techopedia Safebuds Reel_Tamil_5 Aug 26 (safebuds_20Apr 26) | ₹997.58 | 2 | ₹498.79 | 3.54× | Below hold line; also has the account's weakest hook (p25 3.07% of impressions) — read-plan MA-061. |
| Techopedia Safebuds Reel_Kannada_5 Aug 26 (safebuds_20Apr 26) | ₹535.86 | 1 | ₹535.86 | 5.65× | Below hold line, n=1 — read-plan MA-061. |
| Influencer_Merged_13Nov Comm (ES Comm 2) | ₹332.76 | 0 | — | 0× | Still 0 purchases — watch. |
| Tech in Gujarati_Safebuds Reel_13 Jul 26 (safebuds_20Apr 26) | ₹0.00 | 0 | — | — | Still dark this cycle — no logged cause, part of MA-058. |
| Influencer_IND Unboxer_Comm_Problem Hook_21 Jul 2 (ES Comm 2) | ₹544.34 (21d) | 1 | ₹544.34 | — | **DOWNGRADED to WATCH — MA-054 SUPERSEDED**, a delayed purchase landed since the cut was drafted. |
| Tech in Gujarati_Safebuds Reel_13 Jul 26 – Headphone Interest (Broad Interest) | ₹731.55 (21d) | 0 | — | 0× | **CUT (MA-042, still not executed — 4th cycle)**. |
| Comm_Customer Review_Carousel_1 Jul 26 / Safebuds_Review Carousel_2 Jul 26 (Retargeting) | ₹184.26 (21d) | 0 | — | 0× | **CUT (MA-043/051, still not executed)**. |
| Reel_Lite_Whysotechie (ES Lite) | ₹132.32 (21d) | 0 | — | 0× | **CUT (MA-051, still not executed — 3rd cycle)**. |
| Influencer_Gadgetbhai_24 Jul 26 Comm - IT Job Aud + Deer tiger reel_Comm_29 Jul 26 (Broad Interest) | ₹32.81 + ₹31.25 (21d) | 0 | — | 0× | **NEW CUT (MA-063)**. |

**Blended Meta cur7d spend (Meta Marketing API, direct):** ₹59,362.02, ~220 purchases,
platform-claimed ROAS 8.76× (TRUE ROAS 7.80×/7.62× matured — see cycle 10 summary above).

---

## PERFORMANCE TARGETS (updated weekly)
| Metric | Current (cur7d 2026-08-06→08-12) | Weekly target | 30-day target | 90-day target (KPI) |
|---|---|---|---|---|
| SafeBuds hero CPP | ₹372.48 (Techopedia, ad-level, cur7d) | hold <₹380 | hold <₹350 | hold <₹300 |
| safebuds_20Apr adset concentration | 88.3% on one ad | diversify — see MA-058 | — | — |
| ES Comm 2 | cur7d spend ₹5,459.61, 16 purchases, platform ROAS 10.31× | Re-verify on a full clean week | — | — |
| ES Lite | ₹0.00 — fully dark, 12th+ day | Needs Meet's confirmation (MA-056) | — | — |
| Retargeting | ₹185.95 (cur7d, −94.6% WoW) | Needs Meet's confirmation (MA-055) | <₹400 CPP once restored | <₹303 (baseline) |
| Openwire | CPP ₹96.16, platform ROAS 8.72×/GA4-dir 8.78× | VALIDATED — execute MA-062 now | — | — |
| safebuds_20Apr Instagram Feed placement | CPP ₹536.41, 18.6% of adset spend | exclude — MA-064 | — | — |
| Total weekly active spend | ₹59,362.02 (cur7d) | — | — | ~₹38,500/week baseline long since cleared |
| **TRUE ROAS (GA4-based, account-level)** | **7.80× cur7d / 7.62× matured; 7.72× prior7d** | **≥6.0 (floor) — cleared both weeks** | **≥6.0** | **≥6.0 (KPI, per Meet 2026-07-14)** |
| **Marginal ROAS** | **7.04× matured / 8.09× naive — both clear** | **≥6.0 — cleared** | — | — |
| Active converting creatives | ~9 clearing platform ROAS ≥6× this cycle | 3 after kills + creative swap | 4 | 5–6 (test matrix live) |
| Worst creative frequency (ad-level) | 1.43× max (Techopedia Tamil) | <2.0× across all | <2.0× | <2.0× |

---

## 3-MONTH TEST MATRIX (toward ₹5L / TRUE ROAS ≥6.0 floor — seeded 2026-06-27, floor redefined 2026-07-14)

> Each experiment is one falsifiable hypothesis. Must clear ROAS ≥ 8× CPP ≤ floor on a 7-day read to earn scale. Spend allocation is indicative; each experiment gets ₹5,000–₹15,000 for the test window before scale decision.
>
> **Format source:** the EXP `Content type` values are drawn from the **`## CREATIVE-FORMAT TEST ENGINE` register (CF-# rows) in `learning-log.md`** — the master format library. This matrix tracks the *currently-live* experiments; the register holds the full open catalog + each format's tested/validated/rejected status. Keep 2–3 format trials live at all times (see constitution §5d). **Cycle 10: still only 0/4 (CF-31/37/51/54) actually delivering — see MA-059.**

| Exp # | Content type | Ad structure | Audience mix | Hypothesis (metric + threshold) | Test spend | Status | Queue id |
|---|---|---|---|---|---|---|---|
| **EXP-001** | Review/explainer Reel — Gadgetbhai-style WFH hook | 0–3s pain hook → product demo → stat proof → CTA. | Comm 2.0 LAL 1% | Replacing Custom Reel with a proper review-format creative lifts ROAS from 5.82× to ≥8× within 7 days at CPP ≤₹250 | ₹10,000 test | **MOOT — host campaign still building toward a clean week; Custom Reel absent from cur7d data.** | MA-006, MA-012, MA-030 |
| **EXP-002** | Same Gadgetbhai/Techopedia winning creative | Broad — interest = "open ear headphones" + "work from home" | Broad India (no LAL constraint) | Meta Andromeda signal: broad targeting with winning review creative achieves CPP ≤₹291 and ROAS ≥8× within 7 days | ₹10,000 test | **VALIDATED (cycle 8); recovered to 10.00× GA4-dir ROAS on a fuller week (cycle 10) — HOLD, in no-touch until 08-20, see MA-048/SH-MA-4/15.** | MA-013, MA-048 |
| **EXP-003** | Review/explainer Reel — ES Lite angle | Price anchor (₹1,999). | ES Lite Interest audience (fresh) | ES Lite review Reel at CPP ≤₹265 and ROAS ≥8× within 7 days at ₹10K test spend. | ₹10,000 test | **STILL STALLED — ES Lite campaign fully dark, 12th+ day (MA-056).** | MA-014 |
| **EXP-004** | Health/hearing-education explainer | Problem-agitation → open canal demo → NG product → CTA. 25–30s. | SafeBuds LAL 3–5% (scale out from 1%) | Expanding SafeBuds LAL 1% to 3–5% while running health/education creative hook maintains ROAS ≥10× at CPP ≤₹350 within 7 days | ₹12,000 test | OPEN — not sequenced; safebuds_20Apr's concentration/CPP-creep problem (MA-058) is the more urgent lever right now. | MA-015 |
| **EXP-005** | UGC-style testimonial with scripted review structure | Native, talking-head. 20–25s. | SafeBuds Interest + Broad (no seed) | Lo-fi scripted-review hybrid reduces CPM 15–20% and holds ROAS ≥8×. | ₹8,000 test | OPEN — creative brief needed (MA-016) | MA-016 |
| **EXP-006** | Regional-language review Reel — Gujarati voiceover | Added as a 3rd ad inside the existing SafeBuds LAL 1% ad set | SafeBuds LAL 1% (52536580555620) | Gujarati-voiceover reel matches/beats ad set blended CPP ₹258.08 and clears ROAS ≥8× within 7 days at ₹800/day | ₹5,600 test | **STILL DARK — ₹0 cur7d spend re-confirmed, no logged cause, part of MA-058.** | MA-024, MA-033, MA-058 |
| **EXP-007** | Regional-language review Reel — Telugu voiceover | Added as a 5th ad inside the existing Comm 2.0 LAL 1% ad set | Comm LAL 1% (6966216690816) | Telugu-voiceover reel matches/beats ad set blended CPP ₹242.21 and clears ROAS ≥8× within 7 days at ₹600/day | ₹4,200 test | **Host campaign has a fuller live week (cur7d ₹5,459.61) but Telugu ad itself still absent from cur7d data. Re-assess on a clean week.** | MA-025, MA-032, MA-057 |
| **EXP-008** | No new creative — spend-quality test | Pause TOFU Kannada office reel | TOFU_Awareness_Audience_23 May 26 | Pausing the zero-direct-purchase TOFU reel does NOT measurably shrink Retargeting-campaign reach/pool health | ₹4,823 (spend avoided) | **MOOT — Retargeting remains collapsed, re-confirmed cycle 10 (MA-055).** | MA-028, MA-055 |
| **EXP-009** | Demonstration route, no voiceover — CF-51 "Silent Sensory Demo" | Challenger ad inside the safebuds_20Apr 26 hero adset | safebuds_20Apr 26 LAL | Clears the review-format control (CPP≤₹380, ROAS≥8×, freq<2.5×) within a 7-day read at ~₹5,000 spend | ₹5,000 test, funded by MA-042/043 reallocation | **STALLED 6 cycles running — brief still not produced (MA-059).** | MA-045, MA-059 |
| **EXP-010** | New SKU — Openwire (Type-C wired), Hindi-dub Reel | Standalone new campaign | Openwire_5 Aug 26 | CPP ≤₹350, platform ROAS ≥8× by 2026-08-12 (7-day read from 08-05), motivated by the 08-05 daily brief's 5.17% PDP CVR signal | Already live at current small spend, no change proposed | **VALIDATED, threshold re-confirmed and improved cycle 10 — CPP ₹96.16, ROAS 8.72×/8.78× directional. Execute MA-062's budget step now.** | MA-047, MA-062 |
| **EXP-011** | Regional-language review Reel — Tamil & Kannada voiceover | Added as new ads inside the existing SafeBuds hero adset | safebuds_20Apr 26 | Both should match/beat the SafeBuds hold line (CPP≤₹380/ROAS≥8×) within a 7-day clean read; currently both below it (Tamil 3.54×/n=2, Kannada 5.65×/n=1) | Already live at small spend | **Tamil's weak hook (p25 3.07% of impressions, weakest on account) is likely the root cause — decision date 2026-08-19 (MA-061).** | MA-061 |
| **EXP-012 (NEW, cycle 10)** | Placement exclusion — Instagram Feed, safebuds_20Apr adset | Exclude one placement from an existing adset's delivery | safebuds_20Apr 26 | Excluding the underperforming Instagram Feed placement (CPP ₹536.41, 47% worse than adset blend) improves the adset's blended CPP within a 7-day read | No spend change — placement exclusion only | **NEW — drafted (MA-064).** | MA-064 |
| **EXP-013 (NEW, cycle 10)** | Re-edit — Openwire hero ad's 8–20s body | Same ad, body re-cut, hook untouched | Openwire_5 Aug 26 | Re-editing the body raises the p75/p25 watch-through ratio from 24.0% to ≥40% while holding CPP ≤₹120 and ROAS ≥8× | ~₹3,000 test, funded by CUT-list reallocation | **NEW — drafted (MA-066), see SH-MA-17.** | MA-066 |

**Spend allocation guide (₹5L over 3 months):** account has structurally scaled well past the original
₹38,500/week baseline (cur7d spend ₹59,362.02). Floor discipline (TRUE ROAS ≥6.0) continues to gate all
further budget scaling per Meet's 2026-07-14 mandate — this cycle the floor is comfortably verified
(7.80×/7.62× matured, no maturity artifact), so scaling is permitted where a campaign's own read clears
its threshold (Openwire, MA-062 — recommend executing now) but held everywhere else (Broad Interest in
no-touch despite recovering; safebuds_20Apr still concentrated; ES Comm 2/ES Lite/Retargeting all dark,
collapsed, or too-thin-to-read).

---

## DATA PULL SCHEDULE
- Weekly (Thu): Meta ad-level pull — 7d vs prior 7d comparison (CPP/ROAS/freq/CTR/reach by ad), direct
  Marketing API (`Authorization: Bearer` header — query-param auth 400's, see cycle 10 learning).
- Weekly (Thu): GA4 direct Analytics Data API pull (4+ requests, 0 Windsor calls) — TRUE ROAS (Meta
  spend ÷ GA4 Meta-paid revenue), always with a matured (excl. newest day) recompute alongside the
  headline. **Cycle 10 addition: two new diagnostic pulls (ad-level auction-quality/hook-retention,
  campaign×placement) and GA4 funnel metrics (`addToCarts`/`checkouts`) — both confirmed working live.**
- Weekly (Thu, on-demand): Competitor ad teardown — Meta Ad Library (boAt Airdopes Loop longevity + new entrants).
- Monthly: 30-day archive into `learning-log.md`.

---

## DEPENDENCIES / BLOCKERS
- **Three unexplained dark/collapsed structures (cycle 9, unresolved as of cycle 10):** Retargeting
  (−94.6% collapse, MA-055), ES Lite (fully dark, now 12th+ day, MA-056), ES Comm 2 (resumed 08-10,
  cause still unlogged, MA-057). Recurring pattern across 4 cycles now — recommend Meet add a standing
  D+2 spend-confirmation check to `/execute-approved`/`/approvals`.
- **safebuds_20Apr hero-ad concentration (cycle 9, unresolved as of cycle 10):** 88.3% of adset spend on
  one ad, CPP still climbing, support creative still dark — MA-058.
- **NEW (cycle 10): Instagram Feed placement inefficiency** inside safebuds_20Apr's adset — MA-064.
- **NEW (cycle 10): safebuds_20Apr funnel softening** at session→ATC/ATC→checkout — MA-065.
- **Format-engine stall:** CF-31 (MA-034), CF-37 (MA-035), CF-51 (MA-045), CF-54 (MA-060) all 0/4
  delivering, 6th straight cycle. CF-31 blocked on Meet's compliance call (6+ weeks unresolved); CF-37's
  host adset still building a clean week; CF-51's brief still not produced. CF-55 appended (MA-067).
- **CUT backlog growing stale:** MA-042, MA-043, MA-051 (drafted cycle 8) still unexecuted, now 3–4
  cycles running; MA-063 added this cycle (2 new small ads); MA-054 downgraded to WATCH/SUPERSEDED (its
  basis no longer holds — see cycle 10 learning on re-verifying zero-purchase cuts).
- **Creative production:** EXP-004, EXP-005 gated on instagram-content / Higgsfield producing
  review-format Reels.
- **Approval queue:** MA-063 through MA-067 (this cycle's new drafts) all pending human sign-off in
  `queue-inbox.md` (never `APPROVALS_QUEUE.md` directly), alongside the still-unexecuted
  MA-042/043/051/058 and the still-pending MA-062 (Openwire scale step — strongly recommend executing).
- Stock gates: all three main SKUs cleared as of 2026-06-27.
