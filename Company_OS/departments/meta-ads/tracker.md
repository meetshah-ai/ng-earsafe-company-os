# Meta Ads — Live Task Tracker

> **This file + `learning-log.md` are the two live files the Meta Ads Operator reads at runtime**
> (`Company_OS/agents/meta-ads.agent.yaml`; the managed agent runs **twice a week, Mon + Thu 08:00
> IST**, and drafts to `queue-inbox.md`). Keep it current: after a task, update status + result; each
> cycle, archive completed items into `learning-log.md`.
>
> **2026-08-27 cycle 12 update (Thursday teardown, off-week — ISO week 35 is odd, core-loop only):**
> Account clears the 6.0 TRUE-ROAS floor on the matured read (6.63× cur6d matured, 7.58× prior6d
> matured) — margin narrowing a second cycle running. Raw headline 5.90× (below floor), depressed by a
> 64.6% `(not set)` spike on the newest day, the same recurring D+2 pattern. This week was a spend
> **contraction**, not a scale test — both spend (-20.2% matured) and revenue (-30.2% matured) fell
> WoW, concentrated in safebuds_20Apr (-40.7%) and ES Comm 2 (-73.0%), neither with a logged
> budget-step draft. MTD (1–27 Aug): TRUE ROAS 7.28×. **safebuds_20Apr's floor breach (flagged cycle
> 11) got WORSE, not better** — GA4-directional ROAS fell 5.89×→4.12× while spend was cut -40.7% with
> no logged reason; escalated further as MA-075. **NEW, structural: the GA4 campaign-tag mismatch
> problem (previously isolated to ES Comm 2, MA-037) has spread** — Openwire's real revenue sits on a
> differently-named tag (`Openwire LAL 1%_5 Aug 26`, MA-076), and Broad Interest's sits inside an
> unresolvable 3-way merged tag shared with ES Comm 2 and safebuds (MA-077) — Broad Interest's apparent
> +43% organic spend growth this week cannot currently be verified as a real scale signal. ES Comm 2
> collapsed a 3rd time (-73.0% spend, MA-057 restated) and Retargeting is now fully dark (₹0, MA-055
> restated, 4th cycle unresolved). **The entire standing CUT backlog (MA-042/043/051/063/068)
> self-resolved** — none of those ads appear in the live 21-day pull anymore; recommending they be
> closed rather than re-drafted. New CUT drafted for 5 fresh zero-purchase ads (₹587.83/21d, MA-074).
> New SKU "Pulse Fitness Band | 24 Aug 26" launched with no prior read-plan — threshold set (MA-078).
> Format engine still 0/6 delivering, 8th straight cycle (MA-059 re-confirmed) — appended CF-57
> (MA-079). This cycle's two DEEP_WEEK-only diagnostics (placement re-read for MA-069, funnel re-read
> for MA-071) were correctly NOT re-pulled this off-week; both deferred to the next DEEP_WEEK,
> 2026-09-03. No budget moves this cycle — every candidate campaign was either below floor, dark, or
> GA4-directionally unverifiable.
> Last updated: 2026-08-20 (cycle 11 — Thursday teardown, DEEP_WEEK/biweekly deep-diagnostics. Account
> clears the 6.0 TRUE-ROAS floor on the reliable matured read (7.58× cur6d matured, 7.80× prior7d;
> raw headline 6.48× depressed by a 74.6% `(not set)` spike on the newest day, same recurring D+2
> pattern). Marginal ROAS 7.37× matured-vs-matured — clears the gate. MTD (1–19 Aug): TRUE ROAS 7.25×.
> **For the first time, two campaigns fell BELOW the 6.0 floor on a GA4-directional basis while their
> platform numbers still looked healthy** — safebuds_20Apr 26 (48.6% of spend, the account's largest
> campaign, 8.15× platform vs 5.89× GA4-directional) and Openwire (6.35× platform vs 5.42×
> GA4-directional, a hard reversal from last cycle's scale-ready read). **Openwire's pending +20%
> budget step (MA-062) was downgraded to HOLD** — it never executed, which is exactly why the account
> didn't scale budget into this week's decline. Broad Interest's 2-week no-touch window expired today
> but its own read is also declining (10.00×→7.75× GA4-dir) — HOLD, no further step. **New DEEP_WEEK
> diagnostics:** MA-064's placement-exclusion basis (safebuds' Instagram Feed) flipped stale — that
> placement recovered; the real placement problem this week is Broad Interest's Instagram Reels
> (MA-069). Checkout→purchase conversion collapsed simultaneously in Broad Interest and Openwire while
> upstream funnel stages held — a shared checkout-stage technical/UX issue, escalated (MA-071). MA-061's
> Tamil/Kannada read-plan hit its decision date on an uninterpretable, under-delivered sample —
> extended (MA-072). Format engine still 0/5 delivering, 7th straight cycle (MA-059) — appended CF-56
> (MA-073). Two new trivial zero-purchase ads found (MA-068); the standing CUT backlog (MA-042/043/051/
> 063) re-confirmed still unexecuted. MA-058's hero-adset rebalance shows partial progress (concentration
> 88.3%→71.6%) but the Gujarati creative is intermittently dark again this week specifically.)
> Cycle 10 summary (2026-08-13, retained below for continuity): Account clears the 6.0 TRUE-ROAS floor
> and the marginal-ROAS gate cleanly on a fresh direct-API pull — TRUE ROAS 7.80× cur7d / 7.72× prior7d
> (7.62× matured 6d), marginal ROAS 7.04× matured / 8.09× naive, no maturity distortion this run.
> **Openwire's threshold re-confirmed and improved** (CPP ₹96.16, platform ROAS 8.72×, GA4-dir ROAS
> 8.78×) — MA-062's pending +20% step was strongly recommended but not executed (later shown to be the
> correct call, see cycle 11). **Broad Interest recovered** to 10.00× GA4-directional ROAS on a fuller
> week. New diagnostics this cycle (ad-level auction-quality/hook-retention + campaign×placement
> pulls): Instagram Feed inside safebuds_20Apr's adset burns ₹6,437/week at a CPP 47% worse than its own
> Reels placements (MA-064, placement exclusion — later found stale, see cycle 11); safebuds_20Apr's
> own funnel is softening at session→ATC and ATC→checkout (MA-065); Openwire's hero ad has the
> account's strongest hook but weak mid-video retention (MA-066 re-edit test); Tamil dub has the
> account's weakest hook, consistent with its existing under-floor read (MA-061). Format engine still
> 0/4 delivering, 6th straight cycle (MA-059) — appended CF-55 (MA-067). Two new small zero-purchase ads
> found (MA-063); the standing CUT backlog (MA-042/043/051) re-confirmed still unexecuted; MA-054
> downgraded to WATCH/SUPERSEDED after a delayed purchase landed against it since it was drafted.)
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
MA-031, MA-032, MA-033, MA-036, MA-037, MA-038 (the MOFU campaign pause, Telugu delivery diagnostic, Gujarati creative-priority shift, ES Comm 2 +20% budget step, the UTM tag-mismatch fix, and the Gadgetbhai/Merged rebalance) **marked EXECUTED (per Meet)**. MA-034 (CF-31 audiologist-explainer test) is **still pending — blocked on Meet's compliance call** on the presenter-credential framing (see the row's own COMPLIANCE FLAG), now 8+ weeks unresolved as of cycle 12. MA-035 not yet decided. **Cycle 7 update: MA-036/037/038's "EXECUTED" status came into question — the ES Comm 2 campaign they targeted was dark from 2026-07-31 through 2026-08-09. Cycle 9 update: the campaign resumed spending 2026-08-10 — the underlying fact is now partially resolved, but neither the outage's nor the restart's cause has ever been logged (MA-057). Cycle 10 update: still unresolved — ES Comm 2 now has a fuller live week (cur7d spend ₹10,444.39) but the cause question stands. Cycle 11 update: campaign now has its first near-full clean week post-restart (cur7d spend ₹10,444.39, GA4-dir ROAS 6.88×, softening from 9.66× prior week) — still >6.0 floor, cause of the original outage/restart still unlogged. Cycle 12 update: collapsed a 3rd time (-73.0% spend to ₹2,823.33/7d, combined-tag GA4-dir ROAS fell to 5.00×, below floor) — the "one more clean week before any budget conversation" never arrived; cause of the recurring instability still unlogged.**

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
**Cycle 11 addition (2026-08-13 constitution change): deep diagnostics (auction-quality/hook-retention,
placement, GA4 funnel metrics) now run on a biweekly `DEEP_WEEK` cadence (even ISO weeks only) rather
than every cycle, to control token cost. This cycle (ISO week 34) was a DEEP_WEEK — full diagnostics
ran and surfaced the placement-staleness and shared-checkout-collapse findings below. Off-weeks report
one line in that section and skip pulls 7/8 + the funnel metrics entirely.**
**Cycle 12 addition (2026-08-27): confirmed the biweekly cadence working as designed — ISO week 35
(odd) correctly ran core-loop only, skipping pulls 7/8 and the funnel metrics. Also surfaced that GA4
campaign-tag mismatches (previously thought isolated to ES Comm 2) are a structural, spreading problem
— now confirmed on 3 campaigns (ES Comm 2, Openwire, Broad Interest). Recommend a full UTM-taxonomy
audit rather than continued per-campaign patching (see MA-037/076/077).**

## STANDING WEEKLY TASKS
| Task | Cadence | Output |
|---|---|---|
| **Weekly ad-level pull** — week-over-week CPP/ROAS/frequency/CTR/reach by creative, classify each by content type + angle | Weekly (Thu) | weekly-analysis verdict table in `learning-log.md` |
| **Competitor ad teardown** (Shokz, boAt, Noise, wecool + Mojawe/Oladence via Meta Ad Library) → classify content/caption/format/hook → NG action drafts | On-demand (teardown subagent) | counter-brief drafts in `queue-inbox.md` |
| **Test matrix review** — which experiments are open/confirmed/rejected this week; what's next up | Weekly | update TEST MATRIX table below + `learning-log.md` OPEN hypotheses |

---

## CYCLE 12 — 2026-08-27 (Thursday teardown, off-week — ISO week 35 is odd, core-loop only) — MARGIN NARROWS FURTHER, SPEND CONTRACTS UNEXPLAINED, GA4 TAGGING PROBLEM CONFIRMED STRUCTURAL

**Account-level:** TRUE ROAS 5.90× cur7d raw (2026-08-20→08-26), 7.65× prior7d — 26 Aug (newest day)
carried a 64.6% `(not set)/(not set)` GA4 attribution spike (vs ≤3.3% every other day), the same
recurring D+2 maturity pattern. **Matured 6d (20–25 Aug): TRUE ROAS 6.63×** (prior matured 7.58×) —
the reliable read this cycle, clearing the floor but with the margin narrowing a second cycle running.
Marginal ROAS: mechanically 11.31× matured-vs-matured, but this reflects a **spend contraction**
(-20.2% matured spend, -30.2% matured revenue), not a scale test — the rupees removed were converting
well above 6.0, meaning the pullback cut into above-floor spend. MTD (1–27 Aug): spend ₹2,11,730,
GA4 Meta-paid revenue ₹15,41,797, TRUE ROAS **7.28×** — on pace for the month.

**safebuds_20Apr's floor breach (first flagged cycle 11) got WORSE, not better.** GA4-directional ROAS
fell 6.84×(2 cycles ago)→5.89×(last cycle)→**4.12×** this cycle, while spend to the campaign was cut
-40.7% (₹32,690.89→₹19,382.42) with no logged reason and CVR fell 2.32%→1.57%. The landing-page/
creative-interest audit MA-065/070 requested has still never happened. Escalated further as **MA-075**.

**NEW, structural: the GA4 campaign-tag mismatch problem (previously isolated to ES Comm 2, MA-037)
has spread to two more campaigns.** Openwire's real GA4 revenue lands on a *differently-named* tag
(`Openwire LAL 1%_5 Aug 26`) — own-tag matching read a false "near-zero, collapsed" signal (2
sessions/₹0) when the combined-tag reality is 1,651 sessions/₹37,924 revenue, GA4-dir ROAS 5.56× (prior
6.31×) — still below floor but a controlled decline, not a collapse (**MA-076**, revises last cycle's
"reversed to near-zero" read). Worse: Broad Interest's real conversion signal (₹1,76,959 cur7d revenue)
sits inside a **3-way merged tag** shared with ES Comm 2 and safebuds — unlike the other two, this
one can't be cleanly split back to one campaign. Broad Interest's apparent +43% organic spend growth
this week with an 11.57× platform ROAS **cannot currently be verified as a real scale opportunity**
(**MA-077**). Recommending a full account-wide UTM-taxonomy audit rather than continued per-campaign
patching.

**ES Comm 2 collapsed a 3rd time:** spend fell -73.0% (₹10,447.71→₹2,823.33) right after last cycle's
"first near-full clean week," combined-tag GA4-directional ROAS fell 8.23×→5.00× (below floor). The
"one more clean week before any budget conversation" (MA-057) never arrived.

**Retargeting is now fully dark:** ₹0.00 spend cur7d (from ₹905.70 last cycle), a 4th consecutive cycle
with no cause logged (MA-055).

**The entire standing CUT backlog self-resolved:** MA-042, MA-043, MA-051, MA-063, and MA-068 — carried
2 to 7+ cycles as "still not executed" — no longer appear anywhere in this cycle's live 21-day ad pull
at all. Recommending these be closed rather than re-drafted. New CUT drafted for 5 fresh zero-purchase
ads found this cycle (₹587.83/21d, **MA-074**).

**New campaign, no prior read-plan:** "Pulse Fitness Band | 24 Aug 26" launched ~24 Aug. Early read:
CPP ₹408.53, GA4-dir ROAS 8.64× (own-tag, exact match, reliable) on ₹1,225.59 spend. Threshold set —
CPP ≤₹450, ROAS ≥8× by D+7 (31 Aug) — **MA-078**.

**Format engine:** CF-31/37/51/54/55/56 confirmed still 0/6 delivering, 8th straight cycle. Re-confirmed
MA-059 without a new draft. Appended net-new format **CF-57 "Ambient ASMR Unboxing"** (**MA-079**),
motivated by an ad-hoc "Unboxing ASMR Vid | Comm | 25 Aug 26" already reading an 18.00× platform ROAS
on a thin sample.

**DEEP_WEEK-only diagnostics (placement re-read for MA-069, funnel re-read for MA-071) correctly NOT
re-pulled this off-week** (ISO week 35 is odd) — both deferred to the next DEEP_WEEK, 2026-09-03.

**Actions this cycle:** MA-074 (CUT, 5 zero-purchase ads, ₹587.83/21d), MA-075 (FIX, escalates MA-070
with worse safebuds_20Apr evidence), MA-076 (FIX, new Openwire tag mismatch), MA-077 (FIX, new,
structural — Broad Interest's 3-way merged tag), MA-078 (TEST, new-SKU read-plan — Pulse Fitness Band),
MA-079 (TEST, append CF-57); MA-042/043/051/063/068 marked self-resolved; MA-044 marked resolved. No
budget moves — every candidate campaign was either below floor, dark, or GA4-directionally
unverifiable this cycle.

---

## CYCLE 11 — 2026-08-20 (Thursday teardown, DEEP_WEEK — biweekly deep-diagnostics) — MARGIN NARROWS, TWO CAMPAIGNS FALL UNDER THE FLOOR DIRECTIONALLY, CHECKOUT COLLAPSE SHARED ACROSS CAMPAIGNS

**Account-level:** TRUE ROAS 6.48× cur7d raw (2026-08-13→08-19), 7.80× prior7d — but 19 Aug (newest
day) carried a 74.6% `(not set)/(not set)` GA4 attribution spike (vs ≤2.5% every other day), the same
recurring D+2 maturity pattern. **Matured 6d (13–18 Aug): TRUE ROAS 7.58×** — the reliable read this
cycle is based on. Marginal ROAS: naive raw-window figure is a nonsensical −3.54× (same artifact);
**matured-vs-matured (6-day clean windows both sides): 7.37×** — clears the 6.0 gate. MTD (1–19 Aug):
spend ₹1,58,772.61, GA4 Meta-paid revenue ₹11,50,664.05, TRUE ROAS **7.25×** — on pace for the month.

**For the first time, two campaigns are running BELOW the 6.0 floor on a GA4-directional basis while
their platform numbers still look fine:** **safebuds_20Apr 26** — the account's single largest
campaign (48.6% of cur7d spend) — reads platform ROAS 8.15× but GA4-directional ROAS **5.89×**
(prior 6.38×). **Openwire_5 Aug 26** reads platform ROAS 6.35× but GA4-directional **5.42×** (prior
8.78×) — a hard reversal from last cycle's scale-ready read. Escalated safebuds as **MA-070**
(restates/escalates MA-065 with floor-breach evidence) and downgraded Openwire's pending **MA-062**
budget step to HOLD.

**Governance win:** MA-062's +20% Openwire budget step sat unexecuted since cycle 9/10 despite being
"strongly recommended." Because it was never actually executed, the account did NOT scale budget
directly into this week's reversal (CPP +30.9%, platform ROAS 8.72×→6.35×, GA4-dir 8.78×→5.42×). The
ratchet discipline of re-verifying before executing — not luck — is what prevented that.

**Broad Interest's 2-week no-touch window expired today (2026-08-20)** but its own read is declining
(GA4-dir ROAS 10.00×→7.75×, CPP +19.0%) — **HOLD**, a no-touch window expiring is not itself a reason
to step again.

**DEEP_WEEK diagnostics this cycle (auction-quality/hook-retention + campaign×placement + GA4 funnel
metrics, all biweekly per the 2026-08-13 cadence change):**
- **Placement CUT basis flipped:** safebuds_20Apr's Instagram Feed (flagged worst placement last
  cycle, MA-064, never executed) recovered to CPP ₹301.92 — *better* than its adset blend (₹340.39).
  **MA-064 marked DO NOT EXECUTE.** The real placement problem this week: **Broad Interest's Instagram
  Reels** — ₹7,384.56 (46.6% of campaign spend) at CPP ₹410.25, 29.4% worse than the campaign's blend.
  New placement CUT drafted (**MA-069**).
- **Funnel — two distinct leaks:** safebuds_20Apr's own funnel keeps softening at the top
  (session→ATC 10.8%→10.1%, ATC→checkout 51.4%→49.7%) — escalates MA-065 with this cycle's
  floor-breach evidence (MA-070). **New: checkout→purchase collapsed simultaneously in Broad Interest
  (41.8%→31.9%) and Openwire (27.1%→19.3%)** while upstream funnel stages held or improved in both —
  points at a shared checkout-stage technical/UX problem, not a landing-page mismatch. Escalated
  (**MA-071**).
- **Auction quality: clean** — no `BELOW_AVERAGE` ranking on any of the 9 ads spending ≥₹500 this week.
- **Hook retention:** Openwire's hero ad still has a strong hook (p25 = 10.1% of impressions) but its
  body-retention slipped further (p75/p25 now 21.5%, down from 24.0% last cycle) — MA-066's re-edit
  test remains unproduced and is now more urgent given the ad's broader reversal.

**MA-061's Tamil/Kannada read-plan hit its 2026-08-19 decision date on an uninterpretable sample:**
delivery collapsed to ₹196.27 (Tamil, 1 purchase) and ₹42.97 (Kannada, 0 purchases) this week — the
same under-delivery failure mode as the historical Telugu Comm precedent. Extended the read-plan,
requested a delivery diagnostic (**MA-072**).

**Zero-purchase check (21d ad pull):** two new trivial zero-purchase ads (**MA-068**, ₹5.22/21d
combined); the standing MA-042/043/051/063 cluster re-confirmed still unexecuted (₹838.16/21d).
**MA-058's hero-adset rebalance shows partial progress:** Techopedia_17May26's concentration improved
88.3%→71.6%, Nobody Tech's share grew 7.3%→27.6% — but the Gujarati creative (8.19× ROAS over the
prior ~2 weeks) is dark again THIS week specifically (₹0 cur7d) — intermittent, not resolved.

**Format engine:** CF-31/37/51/54/55 confirmed still 0/5 delivering, 7th straight cycle. Recommended
this become a standing Meet agenda item rather than a weekly repeat draft. Appended CF-56
"Checkout-Trust Overlay" (**MA-073**), motivated directly by this cycle's checkout-collapse finding.

**Actions this cycle:** MA-068 (CUT, 2 new trivial zero-purchase ads), MA-069 (CUT, Broad Interest IG
Reels placement exclusion), MA-070 (FIX, safebuds_20Apr floor breach), MA-071 (FIX, shared
checkout→purchase collapse), MA-072 (FIX/TEST, extend MA-061's read-plan), MA-073 (TEST, append
CF-56); MA-062 downgraded to HOLD; MA-064 marked DO NOT EXECUTE; MA-042/043/051/054/055/056/057/058/
059/061/065/066 all re-confirmed/updated with fresh cycle-11 numbers.

---

## CYCLE 10 — 2026-08-13 (Thursday teardown, live independent re-run) — FLOOR + MARGIN CLEAR CLEANLY, OPENWIRE RE-VALIDATED, NEW PLACEMENT/FUNNEL/HOOK DIAGNOSTICS

**Account-level:** TRUE ROAS 7.80× cur7d (2026-08-06→08-12), 7.72× prior7d, 7.62× matured 6d — no
`(not set)` maturity spike this run (max 3.5%, vs cycle 9's logged 55.1% on the same calendar day; both
readings are legitimate, attribution keeps resolving intraday). Marginal ROAS 7.04× matured / 8.09×
naive — both clear the 6.0 gate. MTD (1–12 Aug): spend ₹91,568.14, GA4 Meta-paid revenue ₹7,15,353.30,
TRUE ROAS **7.81×**.

**Openwire re-confirmed and improved:** cur7d CPP ₹96.16 (≤₹350), platform ROAS 8.72× (≥8×),
GA4-directional ROAS 8.78× (up from 7.80×), freq 1.26×. **MA-062's pending +20% step should be executed
now** — every week it sits undone at this margin is floor-clearing volume left unscaled. **Cycle 11
update: this step was never executed, and the campaign reversed hard the following week (below the
floor directionally) — not executing turned out to be the correct call. Downgraded to HOLD.**

**Broad Interest recovered:** GA4-directional ROAS now 10.00× on a fuller week (vs the 7.11× D+7 read
logged in cycle 9, which looks like a transitional dip) — clears its own 8× bar again. Still in 2-week
no-touch until 2026-08-20 regardless; no action possible or needed. **Cycle 11 update: softened again
to 7.75× once the no-touch window expired — HOLD, no further step.**

**New diagnostic pulls this cycle (ad-level auction-quality/hook-retention + campaign×placement):**
- **Placement CUT:** Instagram Feed inside safebuds_20Apr's adset burns ₹6,436.90/week (18.6% of adset
  spend) at CPP ₹536.41 — 47% worse than the adset blend and worse than both Reels placements.
  **MA-064**, non-budget placement exclusion. **Cycle 11 update: this basis flipped stale — IG Feed
  recovered to CPP ₹301.92, better than blend. Marked DO NOT EXECUTE; see MA-069 for the live finding.**
- **Funnel FIX:** safebuds_20Apr's own funnel is softening at the top — session→ATC 12.1%→11.2%,
  ATC→checkout 64.4%→61.1% — while checkout→purchase held. **MA-065.** **Cycle 11 update: still
  softening (10.8%→10.1%, 51.4%→49.7%), now compounded by a full floor-breach finding (MA-070).**
- **Hook-retention TEST:** Openwire's hero ad has the account's strongest hook (p25 = 12.7% of
  impressions) but only 24.0% of p25-viewers reach p75 — re-edit the body, not the hook. **MA-066.**
  Tamil dub has the account's weakest hook (p25 = 3.07%), consistent with its already-flagged
  underperformance (MA-061). New format **CF-55 "Silent Scroll-Stopper"** appended to isolate
  hook-craft as its own live trial (**MA-067**).
- **Auction quality:** no `BELOW_AVERAGE` ranking on any real-spend ad this week — clean.

**Zero-purchase check (21d ad pull):** two new small zero-purchase ads (**MA-063**, ₹64.06/21d
combined); the standing MA-042/043/051 cluster re-confirmed still unexecuted (₹1,048.13/21d). **MA-054
downgraded to WATCH/SUPERSEDED** — the ad it cut now shows 1 purchase/₹544.34 over the identical
21-day window (a delayed-attribution purchase landed against it since drafting); don't re-execute a
stale cut basis without re-verifying.

**Format engine:** CF-31/37/51/54 confirmed still 0/4 delivering, 6th straight cycle. Appended CF-55
(MA-067, above).

**Actions this cycle:** MA-063 (CUT, 2 new zero-purchase ads), MA-064 (CUT, IG Feed placement
exclusion — later found stale), MA-065 (FIX, safebuds_20Apr funnel), MA-066 (TEST, Openwire body
re-edit), MA-067 (TEST, append CF-55); MA-054 downgraded to WATCH/SUPERSEDED; MA-055/056/057/058/059/
061/062 all re-confirmed with fresh cycle-10 numbers, none newly resolved.

---

## CYCLE 9 — 2026-08-13 (Thursday teardown) — FLOOR CLEARS ON MATURED READ, OPENWIRE VALIDATED, THREE UNEXPLAINED DARK/COLLAPSED STRUCTURES

**Account-level:** TRUE ROAS clears the 6.0 floor both weeks — headline 6.46× cur7d (2026-08-06→08-12),
7.72× prior7d; matured (excl. 08-12's attribution-immature data, 55.1% GA4 `(not set)` share vs <5% every
other day) 7.62× cur6d. Marginal ROAS: naive 1.56× (misleading, same maturity artifact) vs matured
**7.04×** — clears the scale gate. MTD (1–12 Aug): spend ₹91,530.49, GA4 Meta-paid revenue ₹6,35,523.00,
TRUE ROAS **6.94×**.

**Openwire_5 Aug 26 (MA-047's pre-set 08-12 read-plan) VALIDATED decisively:** cur7d CPP ₹96.14
(≤₹350 threshold), platform ROAS 8.72× (≥8× threshold), GA4-directional ROAS 7.80× (CVR 4.27%, best on
the account). **First-ever budget step drafted: MA-062, +20%.**

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
carries 88% of the adset's cur7d spend at a CPP that's climbed +32.6% over 4 cycles while its Gujarati-
creative support went dark (~₹0). Ad-level frequency (1.14–1.43×) nowhere near the 2.5× gate — a
mix/concentration risk preceding fatigue, not fatigue itself. **MA-058.**

**Format engine:** CF-31/CF-37/CF-51 still 0/3 delivering, 5th straight cycle. Appended net-new format
CF-54 "Rapid-Fire Speed Review" (MA-060).

**New read-plan:** Tamil/Kannada SafeBuds regional dubs (launched 08-05, no prior threshold) — CPP≤₹380/
ROAS≥8× by 2026-08-19 (**MA-061**). **Cycle 11 update: decision date hit, but delivery collapsed to an
uninterpretable sample — extended (MA-072).**

**CUT backlog going stale:** MA-042/043/051 (drafted cycle 8) still unexecuted 2–3 cycles running; one
new zero-purchase ad found (Influencer_IND Unboxer_Comm_Problem Hook, ₹238.62/21d — **MA-054**, later
SUPERSEDED cycle 10).

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
> real data. See cycle 8 below and the learning-log for the corrected report. **Every cycle since (7→12)
> has held on this direct-API path, no further Windsor GA4 issues.**

**Two campaigns found dark with no logged cause, independent of the GA4 outage (Meta-only data):**
- **ES Comm 2**: ₹0 spend every day 2026-08-01→08-05, and ₹0 on 07-31 too (with one delayed-attribution
  purchase that day) — prior 7d (23–29 Jul) was ₹9,049.41/19 purchases. This is despite **MA-036 (+20%
  budget step), MA-037 (UTM fix), and MA-038 (creative-priority rebalance) all being marked "EXECUTED
  (per Meet), 2026-08-04"** in the queue. The campaign has been dark both before and after that
  execution date — the same "approved action, dark campaign" contradiction as MA-009/018 (June/July).
  **Escalated as MA-040**, requesting Meet's direct confirmation of status + cause. **Cycle 9 update:
  campaign resumed spending 2026-08-10 — see MA-057. Cycle 11 update: first near-full clean week now
  available (cur7d spend ₹10,444.39, 30 purchases, GA4-dir ROAS 6.88×) — cause of the original outage
  still unlogged. Cycle 12 update: collapsed a 3rd time (-73.0% spend, GA4-dir ROAS 5.00×) — the
  recurring instability pattern continues, cause never logged.**
- **ES Lite**: spend fell from ₹1,157.74/day (prior 7d avg) to ₹267.58/day (current 7d avg, −76.9%),
  hitting ₹0.00 on 2026-08-02/03 and simply absent from the pull on 08-04/05. No corresponding
  pause/cut draft exists anywhere. **Escalated as MA-041** — same ask. **Cycle 9 update: still fully
  dark, 10th+ consecutive day — see MA-056. Cycle 11 update: still fully dark, ₹0.00 both cur7d and
  prior7d — now well past 2 weeks, 4th consecutive cycle this ask has gone unanswered. Cycle 12
  update: absent entirely from the 35-day campaign pull — 5th consecutive cycle unanswered.**

**Other findings (Meta-only, platform-claimed, diagnostic):**
- Two small zero-purchase-for-14d ads found and cut: "Tech in Gujarati_Safebuds Reel_13 Jul 26 –
  Headphone Interest" (Broad Interest, ₹731.55/14d) and "Comm_Customer Review_Carousel_1 Jul 26"
  (Retargeting, ₹304.89/14d, notable because it cleared the scale line as recently as cycle 5). **CUT:
  MA-042, MA-043** — combined ~₹1,036/14d freed. **Cycle 11 update: still not executed, 7th+ cycle
  running, re-confirmed on this cycle's live pull. Cycle 12 update: SELF-RESOLVED — both ads no longer
  appear in the live 21-day pull.**
- Spend/efficiency mismatch inside the Broad Interest adset (same pattern as MA-038's original ES Comm 2
  fix): "Techopedia Safebuds Reel_24 Jul 26 – Headphone interest" absorbed most of the campaign's
  organic growth (₹7,447.86 cur7d) at the weakest in-adset ROAS (6.25×), while "Influencer_Gadgetbhai_24
  Jul 26 Comm - SME Owner Aud" runs 19.29× on a falling spend share. **Non-budget reallocation: MA-044.**
  **Cycle 9 update: D+7 read shows both ads now clearing (Headphone interest 10.07×, SME Owner Aud
  12.43×) — appears to have worked, keep watching. Cycle 12 update: SME Owner Aud is now the adset's
  dominant, top-performing ad (₹16,729/wk, ROAS 12.30×) — treat as resolved.**
- Format-engine health check: **CF-31 and CF-37, both marked "IN TEST" since cycle 6 (three weeks
  ago), have delivered zero impressions** — checked directly against the ad×day pull, not just the
  register's status field. CF-31 blocked on Meet's compliance call (still unresolved); CF-37 has no
  stated blocker but its host adset (ES Comm 2) is now dark anyway. **Re-escalated: MA-046.** Rotated
  **CF-51 "Silent Sensory Demo"** in as the practical 3rd live trial (**MA-045**, funded by MA-042/043's
  freed spend, no net-new budget) and appended net-new format **CF-52 "Commute Noise-Test"** to the
  register (UNTESTED). **Cycle 12 update: CF-31/37/51/54/55/56 still 0/6 delivering, 8th straight
  cycle — MA-059, appended CF-57 (MA-079).**
- New SKU "Openwire_5 Aug 26" (Type-C wired) launched 2026-08-05 with no prior read plan — the
  2026-08-05 daily brief already showed its PDP converting at 5.17% CVR vs SafeBuds' 0.75%. Formal
  threshold set: CPP ≤₹350, ROAS ≥8× by 2026-08-12 (**MA-047**, no change proposed, campaign already
  live). **Cycle 9 update: VALIDATED decisively. Cycle 10 update: re-confirmed and improved. Cycle 11
  update: REVERSED — CPP ₹125.89 (+30.9%), platform ROAS 6.35×, GA4-directional ROAS 5.42× (below
  floor). MA-062's budget step downgraded to HOLD; do not scale until it re-clears the floor for 7
  clean days. Cycle 12 update: the "reversal" was partly a tagging artifact — Openwire's real GA4 tag
  is `Openwire LAL 1%_5 Aug 26` (MA-076); combined-tag GA4-dir ROAS is 5.56×, a controlled decline not
  a collapse — still below floor, MA-062 stays HOLD.**

**Actions this cycle:** MA-039 (FIX/escalation — GA4 fully down), MA-040 (FIX — ES Comm 2 dark despite
executed budget step), MA-041 (FIX — ES Lite dark, no logged cause), MA-042/MA-043 (CUT, two dead ads),
MA-044 (non-budget reallocation, Broad Interest), MA-045 (TEST — rotate CF-51 in), MA-046 (TEST —
re-escalate CF-31/CF-37 stall), MA-047 (TEST — Openwire read-plan, no change).

---

## CURRENT SPRINT — Sprint 2, seeded 2026-06-27 (mandate update cycle) — updated 2026-08-27 cycle 12

| # | Task | Target | Expected impact | Status | Result |
|---|---|---|---|---|---|
| P0-1 | MA-001/002 (Unboxing reel kills) — founder "held — pause none for now" 2026-06-30, i.e. not executed via approval | — | Stop spend on pool-exhausted creative | RESOLVED BY OTHER MEANS | Both ADSET_PAUSED/PAUSED with only residual spend, long since declining to near-zero. Not re-flagging. |
| P0-2 | (merged into P0-1) | — | — | — | — |
| P0-3 | MA-007 (kill Retargeting campaign) — held 2026-06-30 | Pending human decision | Stop CPP bleed / frequency breach | **ESCALATED FURTHER — campaign now fully dark** | Cycle 12 (20–26 Aug, live pull): ₹0.00 spend, fully dark, 4th consecutive cycle with no cause logged (MA-055). |
| P0-4 | MA-010 recheck — ES Pro "3D All Feature-Pro" spend after CEO-confirmed pause | Verify zero spend in 7d | Confirm EBITDA discipline restored | **CONFIRMED CLOSED (long-standing)** | Does not appear anywhere in the 35d campaign pull — spend has been at zero for many cycles running. |
| P0-5 | MA-009 recheck — Comm LAL (id 52576570206220), approved+"executed" 2026-06-30 | Confirm scale is running | Volume at CPP ≤₹201, ROAS ≥8× | **STILL DARK** | Absent from the 35d campaign pull entirely — still dark, unchanged from prior cycles. |
| P0-3a | MA-036/037/038 (ES Comm 2 +20% budget, UTM fix, creative rebalance) — all marked EXECUTED 2026-08-04 | Confirm the campaign is actually running post-execution | Hold ROAS while scaling +20% | **COLLAPSED A 3RD TIME** | ES Comm 2 cur7d (cycle 12 live pull): spend ₹2,823.33 (-73.0% WoW), combined-tag GA4-dir ROAS 5.00× (below floor, down from 8.23×). Cause of neither the original outage nor the recurring instability is logged — MA-057 restates the governance ask. |
| P0-6 | MA-004 scale (Techopedia SafeBuds, ₹2,500/day) — approved+executed 2026-06-30 | Hold ROAS while scaling | +volume at CPP ≤₹380 | **STABLE, ADSET GA4-DIRECTIONAL ROAS WORSENING** | Cur7d (cycle 12 live pull): ad-level spend ₹14,486.11, CPP ₹371.44, roughly stable — but the host adset's overall GA4-directional ROAS fell to 4.12× (MA-075), a bigger concern than the hero ad's own CPP. |
| P0-7 | Comm 2.0 rotation creative (EXP-001 / MA-006) — Custom Reel decay/recovery cycle | — | Creative swap if Custom Reel keeps decaying | **MOOT — host campaign unstable** | Custom Reel doesn't distinctly appear in this cycle's ad-level cur7d data; ES Comm 2 collapsed again this cycle (MA-057) — re-assess once stabilized. |
| P0-8 | ES Lite relaunch — proven creatives × updated LAL (MA-022) | ₹1,000/day, 7-day read | CPP ≤ ₹265, ROAS ≥ 8× | **STILL BROKEN — now 5th consecutive cycle unanswered** | Absent entirely from the 35-day campaign pull, re-confirmed on this cycle's live pull. MA-056. |
| P0-9 | Rebuild ES Lite 1% LAL from fresh 365d purchaser list (MA-023) | 2 sequential Meta writes via /execute-approved | New LAL populated + delivering | **Cannot verify — campaign itself is dark (see P0-8)** | — |
| P0-10 | Regional-language reel tests: SafeBuds Gujarati (MA-024/SH-MA-7), Comm 2.0 Telugu (MA-025/SH-MA-8) | SafeBuds: CPP≤₹380/ROAS≥8×; Comm: CPP≤₹450/ROAS≥8× | Both within 7-day read | **INTERMITTENT/STALLED — Gujarati absent from live ad list 2 cycles running; Telugu Comm's host campaign now unstable** | Gujarati SafeBuds reel not distinctly present in this cycle's data. Telugu Comm: host campaign (ES Comm 2) collapsed again this cycle (-73.0% spend) — re-assess once stabilized. |
| P0-11 | Format-engine health — CF-31 (MA-034), CF-37 (MA-035), CF-51 (MA-045), CF-54 (MA-060), CF-55 (MA-067), CF-56 (MA-073), all marked IN TEST/queued | 2–3 formats delivering | New format-test learnings flowing | **BROKEN — 0/6 delivering, 8th straight cycle** | Re-confirmed MA-059. CF-31 still blocked on Meet's compliance call (8+ weeks). Recommend this become a standing Meet agenda item rather than a recurring queue row. Appended CF-57 (MA-079) per the standing "append ≥1 net-new format" rule. |
| P0-12 | New SKU: Openwire (Type-C wired) campaign launched 2026-08-05 | CPP ≤₹350, ROAS ≥8× by 2026-08-12 | Formal threshold set, no change proposed | **BELOW FLOOR, BUT TAGGING-CORRECTED READ LESS SEVERE THAN LAST CYCLE** | Cur7d (cycle 12 live pull): own-tag CPP ₹131.06, own-tag GA4-dir ROAS reads a false 0.00× — combined-tag (correct) GA4-dir ROAS 5.56× (prior 6.31×), still below the 6.0 floor but a controlled decline, not a collapse. See MA-076. MA-062's budget step stays on HOLD. |
| P0-13 | safebuds_20Apr hero-ad concentration + CPP creep | Rebalance priority toward Nobody Tech; investigate Gujarati creative's dark status | Blended adset ROAS holds/improves without net-new spend | **CONCENTRATION STABLE, BUT CAMPAIGN'S OWN FLOOR BREACH IS THE BIGGER ISSUE NOW** | Techopedia_17May26 CPP ₹371.44 (21d), broadly stable. Gujarati creative still absent from the live ad list. The campaign's GA4-directional ROAS falling to 4.12× (MA-075) is now the dominant concern, ahead of concentration mix. |
| P0-14 | Instagram Feed placement inside safebuds_20Apr's adset burning spend at a materially worse CPP than its own Reels placements | Exclude the placement; reallocate toward the adset's proven Reels placements/Nobody Tech creative | ~₹6,437/week reallocated at a better blended CPP | **STALE — DO NOT EXECUTE AS DRAFTED (unchanged since cycle 11)** | Superseded by MA-069 (Broad Interest's Instagram Reels is the live placement finding, last verified DEEP_WEEK cycle 11) — no fresh placement pull this off-week (cycle 12); re-verify at the next DEEP_WEEK, 2026-09-03. |
| P0-15 | safebuds_20Apr's own GA4 funnel softening at session→ATC and ATC→checkout | Landing-page/creative-interest-match audit on SafeBuds PDP | Funnel rates recover toward prior-week levels | **ESCALATED FURTHER — floor breach now compounding, no fresh funnel pull this off-week** | GA4-dir ROAS fell to 4.12× this cycle (MA-075) — the funnel diagnostic itself is DEEP_WEEK-only and wasn't re-pulled this cycle; the landing-page audit request is now urgent regardless of the funnel-stage detail. |
| P0-16 | Openwire hero ad: strong hook, weak mid-video retention | Re-edit the ad's 8–20s body, leave the hook untouched | p75/p25 ratio rises to ≥40% while CPP/ROAS hold | **STILL NOT PRODUCED — no fresh hook-retention pull this off-week** | Last read (cycle 11): p75/p25 21.5% (from 24.0%). DEEP_WEEK-only diagnostic — next read due 2026-09-03. MA-066 unchanged, still urgent given the campaign's ongoing below-floor read. |
| P0-17 | Broad Interest's Instagram Reels placement burning 46.6% of campaign spend at a materially worse CPP than the campaign's other placements | Exclude/de-prioritize the placement | Campaign blended CPP improves as spend redistributes | **D+7 READ DEFERRED — DEEP_WEEK-only diagnostic, this cycle is an off-week** | MA-069's D+7 read was due 2026-08-27 but this cycle correctly skipped pulls 7/8 (off week) — re-read deferred to 2026-09-03. |
| P0-18 | Checkout→purchase conversion collapsed simultaneously in Broad Interest and Openwire while upstream funnel stages held | Checkout-flow technical/UX audit (payment friction, page load, trust signals) | C2P recovers toward pre-collapse levels in both campaigns | **D+7 READ DEFERRED — DEEP_WEEK-only diagnostic, this cycle is an off-week** | MA-071's D+7 read was due 2026-08-27 but this cycle correctly skipped the GA4 funnel-metrics pull (off week) — re-read deferred to 2026-09-03. |
| P0-19 | safebuds_20Apr's own GA4-directional ROAS fell below the 6.0 floor (5.89×) while platform ROAS reads 8.15× | Landing-page/creative-interest audit; do not scale under any circumstance until it re-clears 6.0 | GA4-directional ROAS recovers above 6.0 | **WORSE — fell further to 4.12×, spend cut -40.7% unexplained** | GA4-dir ROAS 4.12× cur7d (prior 5.89×, before that 6.84×) vs Meta spend cut -40.7% with no logged reason — the account's largest campaign keeps deteriorating. Escalated as MA-075. |
| P0-20 (NEW cycle 12) | GA4 campaign-tag mismatches confirmed on 3 campaigns (ES Comm 2, Openwire, Broad Interest) — a structural, spreading data-quality problem, not isolated bugs | Full account-wide UTM-taxonomy audit | Every campaign's directional ROAS becomes independently verifiable again | **NEW — escalated (MA-076 Openwire, MA-077 Broad Interest), restates/elevates the standing MA-037 (ES Comm 2) ask to a structural priority** | Openwire's real tag is `Openwire LAL 1%_5 Aug 26` (not the campaign name); Broad Interest's real signal sits in a 3-way merged tag shared with ES Comm 2 and safebuds, unresolvable by combining. |
| P0-21 (NEW cycle 12) | New campaign "Pulse Fitness Band \| 24 Aug 26" launched with no prior read-plan | Set formal threshold, no change proposed | Confirmed floor-clearing signal or diagnosed early | **NEW — read-plan drafted (MA-078)** | Early read: CPP ₹408.53, GA4-dir ROAS 8.64× (reliable own-tag match) on ₹1,225.59 spend — promising but thin; decision date 2026-08-31. |

---

## LIVE — REMARKETING CAROUSELS (launched live by founder 2026-07-02, NOT via /execute-approved)

> Two 3-slide review-style carousels went live directly inside the Retargeting campaign. **Cycle 9
> update:** the entire host campaign collapsed to ₹185.57/week — both carousels are effectively moot
> until Retargeting's own status is confirmed (see MA-055). **Cycle 10 update: still collapsed
> (₹185.95/7d, 0 purchases), re-confirmed on this cycle's live pull — no change. Cycle 11 update: still
> effectively collapsed (₹905.70/7d off a tiny base), re-confirmed — no change, 3rd consecutive cycle
> unresolved. Cycle 12 update: campaign is now fully dark (₹0.00/7d) — 4th consecutive cycle
> unresolved, both carousels moot until Meet confirms the campaign's status.**

---

## WEEKLY AD-LEVEL STATUS TABLE (cycle 12, cur7d = 2026-08-20→08-26, prior7d = 2026-08-13→08-19; platform-claimed ROAS — ranking only; GA4-directional ROAS given where a reliable/combined campaign tag exists)

| Ad (campaign) | 7d spend | 7d platform CPP/ROAS | Verdict |
|---|---|---|---|
| Influencer_Gadgetbhai_24 Jul 26 Comm - SME Owner Aud (Broad Interest) | ₹16,729.28 | CPP ₹278.82 / ROAS 12.30× | Now the adset's dominant top ad — MA-044's reallocation appears to have fully taken hold. |
| Techopedia Safebuds Reel_17May 26 (safebuds_20Apr 26) | ₹14,486.11 | CPP ₹371.44 / ROAS 7.54× | Stable at the ad level — but the host campaign's GA4-directional ROAS (4.12×) is the bigger concern (MA-075). |
| Tech in Gujarati Reel_Openwire Hindi Dub_5 Aug (Openwire) | ₹6,806.72 | CPP ₹130.90 / ROAS 6.57× | Own-tag GA4-dir reads false-near-zero; combined-tag (MA-076) is 5.56×, a controlled decline. Re-edit test (MA-066) still not produced. |
| Nobody Tech Safebuds Reel_30Jun26 (safebuds_20Apr 26) | ₹4,219.97 | CPP ₹351.66 / ROAS 7.83× | Healthy, continues to earn its rebalanced share (MA-058). |
| Before After Static Ad_Comm_21 Aug 26 (Broad Interest) | ₹3,719.58 | CPP ₹218.80 / ROAS 11.81× | Standout new ad (launched 21 Aug) — strong early performer, worth prioritizing further. |
| Techopedia Safebuds Reel_24 Jul 26 – Headphone interest (Broad Interest) | ₹2,038.40 | CPP ₹509.60 / ROAS 4.49× | Weakest ad in the adset this week — within SafeBuds floor (₹700/3×) but worth watching. |
| Influencer_Merged_13Nov Comm (ES Comm 2) | ₹1,315.17 | CPP ₹438.39 / ROAS 7.08× | Within Comm 2.0 floor; host campaign unstable (MA-057). |
| Influencer_Gadgetbhai_13 Nov Comm (ES Comm 2) | ₹1,146.02 | CPP ₹1,146.02 / ROAS 3.08× | Breaches the Comm 2.0 floor THIS week specifically on a thin sample (1 purchase) — but its 21d cumulative (CPP ₹380/29 purchases) is strong; treat as noise, not a kill, and re-verify next cycle. |
| Before After Static Ad_Comm_21 Aug 26 – Copy (ES Comm 2) | ₹253.77 | 0 purchases | **CUT (MA-074).** |
| Safebuds_Unboxing Reel_28 May 26 (Retargeting) | ₹189.38 | 0 purchases | **CUT (MA-074)** — already retired from delivery 17 Aug. |
| Techopedia Safebuds Reel_24 Jul 26 – SME Owner Aud (Broad Interest) | ₹128.78 | 0 purchases | **CUT (MA-074).** |
| Unboxing ASMR Vid \| Comm \| 25 Aug 26 (Broad Interest) | ₹196.11 | CPP ₹196.11 / ROAS 18.00× | New ad-hoc format, thin sample (1 purchase) — motivated CF-57 append (MA-079). |
| Before After Static \| Openwire \| 26 Aug 26 + 3499 thats it \| Pulse... | ₹15.90 combined | 0 purchases | **CUT (MA-074)**, trivial. |

**Blended Meta cur7d spend (Meta Marketing API, direct):** ₹52,933.16, platform-claimed ROAS 9.04×
(TRUE ROAS 5.90× raw / 6.63× matured — see cycle 12 summary above). Standing zero-purchase CUT backlog
(MA-042/043/051/063/068) is no longer present in the live pull — self-resolved.

---

## PERFORMANCE TARGETS (updated weekly)
| Metric | Current (cur7d 2026-08-20→08-26) | Weekly target | 30-day target | 90-day target (KPI) |
|---|---|---|---|---|
| SafeBuds hero CPP | ₹371.44 (Techopedia, 21d ad-level) | hold <₹380 | hold <₹350 | hold <₹300 |
| safebuds_20Apr GA4-directional ROAS | **4.12× — BELOW the 6.0 floor, worse than last cycle (5.89×)** | Recover above 6.0 — see MA-075 | — | — |
| ES Comm 2 | cur7d spend ₹2,823.33 (-73.0% WoW), combined-tag GA4-dir ROAS 5.00× (below floor) | Confirm cause of recurring instability (MA-057) before any budget conversation | — | — |
| ES Lite | Absent from 35d pull — fully dark, well past 2 weeks | Needs Meet's confirmation (MA-056), 5th cycle unanswered | — | — |
| Retargeting | ₹0.00 — fully dark | Needs Meet's confirmation (MA-055), 4th cycle unanswered | <₹400 CPP once restored | <₹303 (baseline) |
| Openwire | **Combined-tag GA4-dir ROAS 5.56× (below floor, controlled decline) — see MA-076** | HOLD, do not scale — MA-062 stays HOLD | — | — |
| Broad Interest | Platform ROAS 11.57×, spend +43% organically — **directional ROAS unverifiable, 3-way merged UTM tag (MA-077)** | Resolve tagging issue before crediting as a scale signal | — | — |
| Pulse Fitness Band (NEW) | CPP ₹408.53, GA4-dir ROAS 8.64× on ₹1,225.59 spend | Read-plan set — MA-078, decision 2026-08-31 | — | — |
| Total weekly active spend | ₹52,933.16 (cur7d) — down -21.2% WoW, a contraction not a cut | — | — | ~₹38,500/week baseline long since cleared |
| **TRUE ROAS (GA4-based, account-level)** | **5.90× raw / 6.63× matured; 7.65× prior7d** | **≥6.0 (floor) — cleared on matured read, margin narrowing 2 cycles running** | **≥6.0** | **≥6.0 (KPI, per Meet 2026-07-14)** |
| **Marginal ROAS** | **11.31× matured-vs-matured — but reflects a spend contraction, not a scale test (see cycle 12 summary)** | **N/A this cycle — no scale test occurred** | — | — |
| Active converting creatives | ~6-7 clearing platform ROAS ≥6× this cycle | 3 after kills + creative swap | 4 | 5–6 (test matrix live) |
| Worst creative frequency (ad-level) | 1.70× max (Broad Interest top ad) | <2.0× across all | <2.0× | <2.0× |

---

## 3-MONTH TEST MATRIX (toward ₹5L / TRUE ROAS ≥6.0 floor — seeded 2026-06-27, floor redefined 2026-07-14)

> Each experiment is one falsifiable hypothesis. Must clear ROAS ≥ 8× CPP ≤ floor on a 7-day read to earn scale. Spend allocation is indicative; each experiment gets ₹5,000–₹15,000 for the test window before scale decision.
>
> **Format source:** the EXP `Content type` values are drawn from the **`## CREATIVE-FORMAT TEST ENGINE` register (CF-# rows) in `learning-log.md`** — the master format library. This matrix tracks the *currently-live* experiments; the register holds the full open catalog + each format's tested/validated/rejected status. Keep 2–3 format trials live at all times (see constitution §5d). **Cycle 12: still only 0/6 (CF-31/37/51/54/55/56) actually delivering — see MA-059. Recommend this become a standing Meet agenda item.**

| Exp # | Content type | Ad structure | Audience mix | Hypothesis (metric + threshold) | Test spend | Status | Queue id |
|---|---|---|---|---|---|---|---|
| **EXP-001** | Review/explainer Reel — Gadgetbhai-style WFH hook | 0–3s pain hook → product demo → stat proof → CTA. | Comm 2.0 LAL 1% | Replacing Custom Reel with a proper review-format creative lifts ROAS from 5.82× to ≥8× within 7 days at CPP ≤₹250 | ₹10,000 test | **MOOT — host campaign (ES Comm 2) unstable, collapsed again this cycle.** | MA-006, MA-012, MA-030 |
| **EXP-002** | Same Gadgetbhai/Techopedia winning creative | Broad — interest = "open ear headphones" + "work from home" | Broad India (no LAL constraint) | Meta Andromeda signal: broad targeting with winning review creative achieves CPP ≤₹291 and ROAS ≥8× within 7 days | ₹10,000 test | **VALIDATED (cycle 8); directional ROAS now UNVERIFIABLE — 3-way merged UTM tag (MA-077). Platform ROAS 11.57× this week but cannot be credited as a confirmed scale signal.** | MA-013, MA-048 |
| **EXP-003** | Review/explainer Reel — ES Lite angle | Price anchor (₹1,999). | ES Lite Interest audience (fresh) | ES Lite review Reel at CPP ≤ ₹265 and ROAS ≥8× within 7 days at ₹10K test spend. | ₹10,000 test | **STILL STALLED — ES Lite campaign fully dark, 5th consecutive cycle unanswered (MA-056).** | MA-014 |
| **EXP-004** | Health/hearing-education explainer | Problem-agitation → open canal demo → NG product → CTA. 25–30s. | SafeBuds LAL 3–5% (scale out from 1%) | Expanding SafeBuds LAL 1% to 3–5% while running health/education creative hook maintains ROAS ≥10× at CPP ≤₹350 within 7 days | ₹12,000 test | OPEN — not sequenced; safebuds_20Apr's floor breach (MA-075) is far more urgent than audience expansion right now. | MA-015 |
| **EXP-005** | UGC-style testimonial with scripted review structure | Native, talking-head. 20–25s. | SafeBuds Interest + Broad (no seed) | Lo-fi scripted-review hybrid reduces CPM 15–20% and holds ROAS ≥8×. | ₹8,000 test | OPEN — creative brief needed (MA-016) | MA-016 |
| **EXP-006** | Regional-language review Reel — Gujarati voiceover | Added as a 3rd ad inside the existing SafeBuds LAL 1% ad set | SafeBuds LAL 1% (52536580555620) | Gujarati-voiceover reel matches/beats ad set blended CPP ₹258.08 and clears ROAS ≥8× within 7 days at ₹800/day | ₹5,600 test | **INTERMITTENT — absent from the live ad list 2 consecutive cycles now, part of MA-058.** | MA-024, MA-033, MA-058 |
| **EXP-007** | Regional-language review Reel — Telugu voiceover | Added as a 5th ad inside the existing Comm 2.0 LAL 1% ad set | Comm LAL 1% (6966216690816) | Telugu-voiceover reel matches/beats ad set blended CPP ₹242.21 and clears ROAS ≥8× within 7 days at ₹600/day | ₹4,200 test | **Host campaign (ES Comm 2) unstable — collapsed again this cycle (-73.0% spend). Re-assess once stabilized.** | MA-025, MA-032, MA-057 |
| **EXP-008** | No new creative — spend-quality test | Pause TOFU Kannada office reel | TOFU_Awareness_Audience_23 May 26 | Pausing the zero-direct-purchase TOFU reel does NOT measurably shrink Retargeting-campaign reach/pool health | ₹4,823 (spend avoided) | **MOOT — Retargeting now fully dark, re-confirmed cycle 12 (MA-055).** | MA-028, MA-055 |
| **EXP-009** | Demonstration route, no voiceover — CF-51 "Silent Sensory Demo" | Challenger ad inside the safebuds_20Apr 26 hero adset | safebuds_20Apr 26 LAL | Clears the review-format control (CPP≤₹380, ROAS≥8×, freq<2.5×) within a 7-day read at ~₹5,000 spend | ₹5,000 test, funded by MA-042/043 reallocation | **STALLED 8+ cycles running — brief still not produced (MA-059).** | MA-045, MA-059 |
| **EXP-010** | New SKU — Openwire (Type-C wired), Hindi-dub Reel | Standalone new campaign | Openwire_5 Aug 26 | CPP ≤₹350, platform ROAS ≥8× by 2026-08-12 (7-day read from 08-05), motivated by the 08-05 daily brief's 5.17% PDP CVR signal | Already live at current small spend, no change proposed | **VALIDATED cycles 9/10 — REVERSED cycle 11 (naive read). Cycle 12: partly a tagging artifact — combined-tag GA4-dir ROAS 5.56×, controlled decline not collapse. MA-062 stays HOLD.** | MA-047, MA-062, MA-076 |
| **EXP-011** | Regional-language review Reel — Tamil & Kannada voiceover | Added as new ads inside the existing SafeBuds hero adset | safebuds_20Apr 26 | Both should match/beat the SafeBuds hold line (CPP≤₹380/ROAS≥8×) within a 7-day clean read | Already live at small spend | **Both ads now completely absent from the live pull — delivery has stopped, not just under-throttled. Recommend Meet decide REJECTED-on-non-delivery vs extension (MA-072).** | MA-061, MA-072 |
| **EXP-012** | Placement exclusion — Instagram Feed, safebuds_20Apr adset | Exclude one placement from an existing adset's delivery | safebuds_20Apr 26 | Excluding the underperforming Instagram Feed placement improves the adset's blended CPP within a 7-day read | No spend change — placement exclusion only | **STALE, DO NOT EXECUTE — superseded by MA-069 (unchanged since cycle 11, no fresh placement pull this off-week).** | MA-064 |
| **EXP-013** | Re-edit — Openwire hero ad's 8–20s body | Same ad, body re-cut, hook untouched | Openwire_5 Aug 26 | Re-editing the body raises the p75/p25 watch-through ratio from 24.0% to ≥40% while holding CPP ≤₹120 and ROAS ≥8× | ~₹3,000 test, funded by CUT-list reallocation | **STILL NOT PRODUCED — DEEP_WEEK-only diagnostic, no fresh read this off-week. Next read due 2026-09-03.** | MA-066 |
| **EXP-014** | Placement exclusion — Instagram Reels, Broad Interest campaign | Exclude/de-prioritize one placement from an existing campaign's delivery | Broad Interest Based-24 Jul 26 | Excluding/de-prioritizing Instagram Reels (CPP ₹410.25, 29.4% worse than campaign blend) improves the campaign's blended CPP within a 7-day read | No spend change — placement exclusion only | **D+7 READ DEFERRED — DEEP_WEEK-only diagnostic, this cycle is an off-week. Next read due 2026-09-03.** | MA-069 |
| **EXP-015** | Checkout-flow technical/UX audit | Diagnostic, not a creative/targeting change | Broad Interest + Openwire (shared) | A checkout-flow fix recovers checkout→purchase conversion in both campaigns toward pre-collapse levels within 7 days, confirming a shared technical cause | No spend — diagnostic + fix | **D+7 READ DEFERRED — DEEP_WEEK-only diagnostic, this cycle is an off-week. Next read due 2026-09-03.** | MA-071 |
| **EXP-016 (NEW, cycle 12)** | UTM-taxonomy audit — account-wide | Diagnostic, not a creative/targeting change | ES Comm 2 + Openwire + Broad Interest (shared) | A full UTM audit resolves the campaign-tag mismatches on all 3 affected campaigns, making their GA4-directional ROAS independently verifiable again within one cycle of the fix landing | No spend — diagnostic + tagging fix | **NEW — drafted (MA-076, MA-077), restates/elevates the standing MA-037 ask.** | MA-037, MA-076, MA-077 |
| **EXP-017 (NEW, cycle 12)** | New SKU — Pulse Fitness Band, no prior read-plan | Standalone new campaign | Pulse Fitness Band \| 24 Aug 26 | CPP ≤₹450, GA4-directional ROAS ≥8× by 2026-08-31 (7-day read from ~08-24 launch), motivated by early GA4-dir ROAS 8.64× on ₹1,225.59 spend | Already live at current small spend, no change proposed | **NEW — drafted (MA-078).** | MA-078 |

**Spend allocation guide (₹5L over 3 months):** account has structurally scaled well past the original
₹38,500/week baseline, though this cycle's spend (₹52,933.16 cur7d) is a genuine -21.2% WoW contraction,
not a deliberate scale-down. Floor discipline (TRUE ROAS ≥6.0) continues to gate all further budget
scaling per Meet's 2026-07-14 mandate — this cycle the account-level floor is verified on the matured
read (6.63×/margin narrowing), but **safebuds_20Apr, Openwire, and now ES Comm 2 are all below the
floor directionally**, Broad Interest's directional read is unverifiable (tagging issue), and
Retargeting/ES Lite remain fully dark. This cycle's discipline is entirely HOLD on budget, REALLOCATE
on everything else, and FIX on the newly-confirmed structural UTM-tagging problem.

---

## DATA PULL SCHEDULE
- Weekly (Thu): Meta campaign×day (35d) + ad×day (21d) pulls — direct Marketing API
  (`Authorization: Bearer` header — query-param auth 400's, see cycle 10 learning).
- Weekly (Thu): GA4 direct Analytics Data API pull (4 requests, 0 Windsor calls) — TRUE ROAS (Meta
  spend ÷ GA4 Meta-paid revenue), always with a matured (excl. newest day) recompute alongside the
  headline.
- **Biweekly (even ISO weeks only, `DEEP_WEEK`), per the 2026-08-13 cost-control change:** two extra
  Meta pulls (ad-level auction-quality/hook-retention diagnostics; campaign×placement) + GA4
  `addToCarts`/`checkouts` funnel metrics added to the campaign×source/medium pulls. Cycle 11 (ISO week
  34) was a DEEP_WEEK — ran the full diagnostics and surfaced the placement-staleness + shared-checkout
  findings. Cycle 12 (ISO week 35) was correctly an off-week — pulls 7/8 and the funnel metrics were
  NOT requested, confirming the biweekly gate is working as designed. Next DEEP_WEEK: 2026-09-03 (ISO
  week 36, even).
- Weekly (Thu, on-demand): Competitor ad teardown — Meta Ad Library (boAt Airdopes Loop longevity + new entrants).
- Monthly: 30-day archive into `learning-log.md`.

---

## DEPENDENCIES / BLOCKERS
- **NEW (cycle 12): GA4 campaign-tag mismatches confirmed structural, not isolated** — 3 campaigns now
  affected (ES Comm 2/MA-037, Openwire/MA-076, Broad Interest/MA-077, the last unresolvable by
  combining tags). Recommend a full account-wide UTM-taxonomy audit as a priority item, not continued
  per-campaign patching.
- **NEW (cycle 12): safebuds_20Apr's floor breach is widening, not healing** — GA4-directional ROAS
  6.84×→5.89×→4.12× over 3 cycles while spend was cut -40.7% this week with no logged reason. The
  landing-page/creative-interest audit has now been requested 3 cycles running with no action.
- **NEW (cycle 12): ES Comm 2 instability is now a 3rd occurrence** (dark→restart→"first clean
  week"→collapse again) — recommend treating as a standing structural-instability item rather than a
  recurring weekly escalation.
- **NEW (cycle 12): Retargeting is now fully dark** (₹0.00, from a near-zero base last cycle) — 4th
  consecutive cycle with no cause logged, recommend elevating priority.
- **Two DEEP_WEEK-only diagnostics have pending D+7 reads that were correctly deferred this off-week:**
  MA-069 (Broad Interest placement exclusion) and MA-071 (shared checkout→purchase collapse) — both
  re-read at the next DEEP_WEEK, 2026-09-03.
- **The entire standing CUT backlog self-resolved this cycle** (MA-042/043/051/063/068) — none appear
  in the live 21-day pull anymore. Recommend closing these rather than continuing to re-confirm them
  weekly; a new, smaller CUT list (MA-074, ₹587.83/21d) has been drafted this cycle.
- **Format-engine stall:** CF-31 (MA-034), CF-37 (MA-035), CF-51 (MA-045), CF-54 (MA-060), CF-55
  (MA-067), CF-56 (MA-073) all 0/6 delivering, 8th straight cycle. CF-31 blocked on Meet's compliance
  call (8+ weeks unresolved). Recommend Meet review the production/compliance pipeline itself as a
  standing agenda item rather than a recurring weekly draft. CF-57 appended (MA-079).
- **Creative production:** EXP-004, EXP-005 gated on instagram-content / Higgsfield producing
  review-format Reels.
- **Approval queue:** MA-074 through MA-079 (this cycle's new drafts) all pending human sign-off in
  `queue-inbox.md` (never `APPROVALS_QUEUE.md` directly), alongside the still-unexecuted
  MA-034/035/037/045/058/069/070/071/072 and the newly self-resolved MA-042/043/044/051/063/068.
- Stock gates: all three main SKUs cleared as of 2026-06-27.
