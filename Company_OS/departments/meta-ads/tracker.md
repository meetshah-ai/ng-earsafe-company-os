# Meta Ads — Live Task Tracker

> **This file + `learning-log.md` are the two live files the Meta Ads Operator reads at runtime**
> (`Company_OS/agents/meta-ads.agent.yaml`; the managed agent runs **twice a week, Mon + Thu 08:00
> IST**, and drafts to `queue-inbox.md`). Keep it current: after a task, update status + result; each
> cycle, archive completed items into `learning-log.md`.
>
> **2026-09-17 cycle 15 update (Thursday teardown, DEEP_WEEK — ISO week 38 is even):**
> Account TRUE ROAS is STILL below the 6.0 floor — raw cur7d 4.87× (prior7d 6.82×), matured 6d 5.69×
> (prior matured 5.65×, essentially flat). Last cycle's "first clean week above floor" (raw 6.40×,
> matured 7.45×, logged 2026-09-16) did NOT hold once the trailing-7d window rolled forward one more
> day — a single clean week is a data point, not a trend. Marginal ROAS (matured-vs-matured) reads
> 6.50×/incremental-rupee but reflects thin organic drift (+4.5%/+5.2%), not a deliberate scale step —
> not a basis to add budget. MTD (1–16 Sep) TRUE ROAS 6.18× — above floor, propped up by early
> September. **Biggest new findings: safebuds_20Apr RESUMED spending 09-16 after ~12 consecutive dark
> days** (still unconfirmed cause — FIX drafted, MA-098, requesting a 3-7 day re-verification window
> before re-executing MA-080/081); **Openwire's combined-tag GA4-dir ROAS COLLAPSED from 6.09× to
> 0.48×** while spend fell -38.6% — the account's most severe single-campaign reversal this cycle,
> escalated for diagnosis (MA-099); **ES Comm 2 went from a severe partial collapse to ₹0.00 spend
> every single day of the trailing week** — a formal keep/kill decision requested (MA-100) rather than
> a 6th data-only re-escalation. ES Lite relaunched with 1 new ad, 1 thin day of data — fresh read-plan
> set (MA-101). Broad Interest's DEEP_WEEK diagnostics re-confirmed yesterday's (2026-09-16) ad-hoc
> findings: Facebook Feed still the worst placement (MA-095, recommend executing), checkout→purchase
> leak deepened further (44.2%→24.4% combined-tag, MA-103, now the single most overdue format-engine
> test given CF-56's direct relevance), hero-ad retention still weak (24.2%, MA-097). One new
> zero-purchase sibling ad found (MA-102, ₹183.20/21d). Format engine: standing register still not
> delivering (MA-059) — appended CF-60 "Employee Product Review" (MA-104).
> **Budget: HOLD stays in force account-wide (MA-083)** — floor still breached, no exceptions.
>
> **2026-09-10 cycle 14 update (Thursday teardown, off-week — ISO week 37 is odd, core-loop only):**
> Account TRUE ROAS is STILL below the 6.0 floor, a 4th consecutive cycle — raw cur7d 5.69× (prior7d
> 5.93×), matured 6d 5.65× (prior matured 5.76×) — the margin got slightly worse, not better, since
> MA-083's HOLD went into effect. Marginal ROAS reads 5.93×/incremental-rupee but reflects a spend
> CONTRACTION (both spend and revenue fell ~38–39%/day matured-vs-matured), not a scale test. MTD
> (1–9 Sep) TRUE ROAS 6.40× — above floor only because early-September days pulled the average up.
> **Biggest new finding: safebuds_20Apr 26 — once the account's largest campaign (48–79% of spend in
> past cycles) — has gone FULLY DARK for 6 consecutive days** (₹929.95 on 09-03, then ₹0.00 through
> 09-07, then entirely absent from the Meta API on 09-08/09-09). This predates and is independent of
> MA-080 (hero-ad pause) and MA-081 (Facebook Reels exclusion), both still "awaiting `/execute-approved`"
> as of this cycle — the stoppage is not those drafts taking effect, it's new and unexplained.
> Escalated as **MA-089** (high risk, top priority for Meet). ES Comm 2 (now "ES Comm 2 LAL" in the
> live pull) collapsed a 5th consecutive cycle (-44.3% spend, 0 purchases) — MA-085's creative-
> retirement question is still unconfirmed by Meet, re-escalated. Openwire's own-tag GA4-directional
> ROAS reads 4.99× (below floor) — the MA-076/077 UTM-tagging fix is approved but still not shipped,
> so this reading may still be an undercount. Broad Interest is now carrying **79% of the account's
> live spend** (flat WoW, platform ROAS 10.46×, GA4-dir 6.32×) — the account's sole real floor-clearer
> this week, a concentration risk worth watching. Pulse Fitness Band's excellent unit economics
> re-confirmed (CPP ₹212.82, platform 16.25×, GA4-dir 11.65×) but its own spend fell -37.5% on its
> own — remains first in line for a budget step once MA-083's account-wide HOLD lifts. Two
> new-campaign read-plans (MA-086) both missed their decision dates on zero real delivery — Broad
> Sales Campaign A+ Catalogue (0 purchases, ₹2,570 lifetime, dark since 09-04) and Revive Massager
> (0 purchases, only 2 days ever live) — both closed as REJECTED-on-non-delivery (**MA-091, MA-092**).
> Five new zero-purchase ads found (₹1,598.01/21d combined) — CUT drafted (**MA-090**). MA-087's
> WhatsApp/CTWA "WA Review Ad" test hit its D+7 decision date on 0 purchases but trivial volume —
> extended, since WhatsApp-side conversions may not attribute as a Meta purchase at all. Format
> engine: still the standing 6 (CF-31/37/51/54/55/56) IN TEST, not delivering — closed to a standing
> Meet agenda item via `/approvals` (MA-059), not re-drafted; appended net-new **CF-59 "Silent
> Subtitle Testimonial"** (**MA-093**), motivated by Broad Interest now being the only safe host for a
> new challenger test. No DEEP_WEEK diagnostics this cycle (odd ISO week) — next DEEP_WEEK 2026-09-17.
> Budget: **HOLD stays in force account-wide (MA-083)** — floor still breached, no exceptions, nothing
> to report on SCALE besides "still gated."
>
> **2026-09-09 (/approvals decisions):** MA-080/081/082 (cuts), MA-083 (account-wide budget hold), MA-087 (WhatsApp/CTWA formalize), MA-077 (UTM fix) all APPROVED — awaiting `/execute-approved` (still not executed as of cycle 15, 2026-09-17). MA-055/056/057/059 ACKNOWLEDGED/CLOSED — Meet investigating the unexplained spend stoppages and creative-approval bottleneck directly, not agent-actionable; stop re-escalating these specific items. MA-034/035 FLAGGED — collision vs APPROVALS_QUEUE's MA-042/043 (marked EXECUTED); Meet is verifying whether CF-31/CF-37 actually delivered before this is decided — do not touch MA-03x numbering.
>
> **2026-09-03 cycle 13 update (Thursday teardown, DEEP_WEEK — ISO week 36 is even):**
> Account's TRUE ROAS falls below the 6.0 floor for the FIRST TIME on both the raw (5.32×) and the
> matured (5.76×) read — the margin-narrowing trend flagged in cycles 11/12 has become an outright
> breach. Marginal ROAS is deeply negative (-129.98× matured-vs-matured — spend flat +0.1%/day,
> revenue -12.6%/day), meaning existing spend is actively breaking, not a failed scale test. The
> proximate cause is concentrated almost entirely in **safebuds_20Apr**, not the account broadly:
> its original hero ad ("Techopedia Safebuds Reel_17May 26," the same creative behind the ₹329/9.2×
> institutional reference) has decayed straight through the SafeBuds kill line (CPP ₹1,026.02, ROAS
> 2.62×) — **CUT drafted (MA-080)**; its Facebook Reels placement is burning ₹7,972.86/week (46.9% of
> campaign spend) at CPP ₹1,138.98, +101% worse than blend — **placement CUT drafted (MA-081)**; and
> its checkout→purchase rate collapsed 32.0%→15.4% this week while upstream funnel stages *improved* —
> **FIX drafted (MA-084)**. Two other campaigns cleared their own floors this same week — Pulse
> Fitness Band (**VALIDATED**, GA4-dir ROAS 10.26×, MA-078) and Openwire on a combined-tag basis
> (6.09×, MA-076) — confirming this is NOT a market-wide slump. **Budget: HOLD account-wide, no
> exceptions** (MA-083), including Pulse's own excellent unit economics — floor discipline applies
> account-first. ES Comm 2 collapsed a 4th time (-73.3% spend) but for the first time has a dated,
> investigable cause: two legacy winning creatives stopped delivering ~22-23 Aug, days before the
> collapse (MA-085). The prior DEEP_WEEK's shared checkout-collapse finding (MA-071, Broad
> Interest+Openwire) **RECOVERED** in both campaigns, confirming SH-MA-18 — but a near-identical,
> isolated collapse then appeared on safebuds_20Apr instead (a different campaign, not a re-opening).
> Broad Interest's Instagram Reels placement (MA-069) flipped stale a 2nd time (now healthy again,
> CPP ₹285.35 < blend) — marked DO NOT EXECUTE, superseded by MA-081. Openwire's and ES Comm2's known
> GA4 tag mismatches (MA-076/037) still unresolved but Openwire's combined-tag ROAS improved this
> cycle purely from correct tag combination (5.81×→6.09×); Broad Interest's 3-way merged tag (MA-077)
> remains unresolved, still unverifiable. New: 2 new campaigns with no read-plan (Broad Sales
> Catalogue, Revive Massager — MA-086); 2 organic WhatsApp-routed "WA Review Ad" creatives formalized
> into a read-plan (MA-087, ties to the standing CTWA opportunity); CF-58 "ASMR Unboxing — SafeBuds"
> appended (MA-088), reinforcing CF-57 with a second, independent best-hook/best-retention data point.
> Format engine still 0/6 delivering, 9th straight cycle (MA-059 re-confirmed). MA-074's prior 5-ad
> CUT list confirmed executing.
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
> 2026-09-03 (now closed out in cycle 13, see above). No budget moves this cycle — every candidate
> campaign was either below floor, dark, or GA4-directionally unverifiable.
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
MA-031, MA-032, MA-033, MA-036, MA-037, MA-038 (the MOFU campaign pause, Telugu delivery diagnostic, Gujarati creative-priority shift, ES Comm 2 +20% budget step, the UTM tag-mismatch fix, and the Gadgetbhai/Merged rebalance) **marked EXECUTED (per Meet)**. MA-034 (CF-31 audiologist-explainer test) is **still pending — blocked on Meet's compliance call** on the presenter-credential framing (see the row's own COMPLIANCE FLAG), now 8+ weeks unresolved as of cycle 13. MA-035 not yet decided. **Cycle 7 update: MA-036/037/038's "EXECUTED" status came into question — the ES Comm 2 campaign they targeted was dark from 2026-07-31 through 2026-08-09. Cycle 9 update: the campaign resumed spending 2026-08-10 — the underlying fact is now partially resolved, but neither the outage's nor the restart's cause has ever been logged (MA-057). Cycle 10 update: still unresolved — ES Comm 2 now has a fuller live week (cur7d spend ₹10,444.39) but the cause question stands. Cycle 11 update: campaign now has its first near-full clean week post-restart (cur7d spend ₹10,444.39, GA4-dir ROAS 6.88×, softening from 9.66× prior week) — still >6.0 floor, cause of the original outage/restart still unlogged. Cycle 12 update: collapsed a 3rd time (-73.0% spend to ₹2,823.33/7d, combined-tag GA4-dir ROAS fell to 5.00×, below floor) — the "one more clean week before any budget conversation" never arrived; cause of the recurring instability still unlogged. Cycle 13 update: collapsed a 4th time (-73.3% spend to ₹753.22/7d, combined-tag GA4-dir ROAS 3.85×) — but for the first time there's a concrete, dated correlation: its two legacy winning creatives stopped delivering ~22-23 Aug, days before the collapse (MA-085, requesting Meet confirm whether this was an intentional retirement). Cycle 14 update: collapsed a 5th time (-44.3% spend to ₹419.76/7d, 0 purchases) — still unconfirmed by Meet whether the creative retirement was intentional. Cycle 15 update: the campaign is now FULLY dark, ₹0.00 spend every day of the trailing week — recommend a formal keep/kill decision (MA-100) rather than a 6th unresolved re-escalation.**

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
**Cycle 13 addition (2026-09-03): confirmed the biweekly cadence again — ISO week 36 (even) correctly
ran the full DEEP_WEEK diagnostics. IMPORTANT: for the first time, even the matured 6d recompute fell
below the 6.0 floor (5.76×) — the matured convention corrects for the D+2 maturity artifact, it does
NOT mean "always above floor." Never assume the matured read will clear the floor just because it
usually has in past cycles; always compute and report it honestly.**
**Cycle 14 addition (2026-09-10): confirmed the biweekly cadence again — ISO week 37 (odd) correctly
ran core-loop only. Matured read got WORSE than the prior cycle's already-below-floor matured read
(5.76×→5.65×) — the account has now been below floor for 4 consecutive cycles. A dark-campaign check
(comparing a campaign's most recent day of spend against "absent from the pull entirely," not just
"₹0.00 row") caught safebuds_20Apr going fully dark for 6 days — a materially different, more urgent
finding than a mere efficiency decline. Recommend future cycles explicitly check for "absent from pull
vs zero row" on every live campaign, not just falling spend.**
**Cycle 15 addition (2026-09-17): confirmed the biweekly cadence again — ISO week 38 (even) correctly
ran the full DEEP_WEEK diagnostics. IMPORTANT: last cycle's ad-hoc read (2026-09-16, outside the
standing Thursday cadence) found a "first clean week above floor" (matured 7.45×) that did NOT hold
once this cycle's own trailing-7d window rolled forward one more day (matured back to 5.69×) — never
treat a single clean matured read, however encouraging, as grounds to recommend lifting an
account-wide HOLD; require at least two consecutive clean rolling windows.**

## STANDING WEEKLY TASKS
| Task | Cadence | Output |
|---|---|---|
| **Weekly ad-level pull** — week-over-week CPP/ROAS/frequency/CTR/reach by creative, classify each by content type + angle | Weekly (Thu) | weekly-analysis verdict table in `learning-log.md` |
| **Competitor ad teardown** (Shokz, boAt, Noise, wecool + Mojawe/Oladence via Meta Ad Library) → classify content/caption/format/hook → NG action drafts | On-demand (teardown subagent) | counter-brief drafts in `queue-inbox.md` |
| **Test matrix review** — which experiments are open/confirmed/rejected this week; what's next up | Weekly | update TEST MATRIX table below + `learning-log.md` OPEN hypotheses |

---

## CYCLE 15 — 2026-09-17 (Thursday teardown, DEEP_WEEK — ISO week 38 is even) — ACCOUNT STILL BELOW THE 6.0 FLOOR (LAST CYCLE'S "CLEAN WEEK" DID NOT HOLD); SAFEBUDS_20APR RESUMED AFTER 12 DARK DAYS; OPENWIRE COLLAPSED 6.09×→0.48×; ES COMM 2 FULLY DARK ALL 7 DAYS

**Account-level:** TRUE ROAS 4.87× cur7d raw (2026-09-10→09-16), 6.82× prior7d — 09-16 (newest day)
carried a 47.4% GA4 `(not set)/(not set)` spike vs 0% every other day, the same recurring D+2 pattern.
**Matured 6d (09-10→09-15): TRUE ROAS 5.69×** (prior matured 5.65×) — **still below the 6.0 floor,
essentially flat.** Last cycle's own ad-hoc read (2026-09-16, outside the standing cadence) found a
"first clean week above floor" (raw 6.40×, matured 7.45×) — that read did NOT survive the trailing-7d
window rolling forward one more day. Marginal ROAS (matured-vs-matured): Δspend/day +₹211.52 (+4.5%),
Δrevenue/day +₹1,375.53 (+5.2%) → 6.50×/incremental-rupee — technically clears the gate but reflects
thin organic drift, not a deliberate scale step; not a basis to add budget. MTD (1–16 Sep): spend
₹84,356.57, GA4 Meta-paid revenue ₹5,21,723.15, TRUE ROAS **6.18×** — above floor, propped up by early
September. Platform overclaim 94.7% (within the normal 40–120% band, no attribution break flagged).

**Biggest new finding #1: safebuds_20Apr 26 RESUMED spending on 09-16 after ~12 consecutive dark days**
(09-04 through 09-15, both ₹0.00 rows and outright absence from the Meta Marketing API). Cause of the
original stoppage still unconfirmed by Meet/Ads Manager. Too thin (1 day, 0 platform purchases, GA4-dir
ROAS 4.26×) to treat as resolved — FIX drafted (**MA-098**) requesting a 3–7 day re-verification window
before re-executing MA-080/081 (both still approved, awaiting `/execute-approved`).

**Biggest new finding #2: Openwire_5 Aug 26 LAL's combined-tag GA4-dir ROAS COLLAPSED from 6.09×
(two cycles ago) to 0.48× this cycle** while spend fell -38.6% (₹2,667.02→₹1,637.51) — the account's
most severe single-campaign reversal this cycle, and not explained by the standing UTM mismatch since
this is measured on the already-combined tag. Escalated for diagnosis (**MA-099**).

**Biggest new finding #3: ES Comm 2 LAL's collapse became total** — ₹0.00 spend across the entire cur7d
window (09-10→09-16), the 6th consecutive cycle of instability and the first with zero spend every
single day. Escalated as a formal keep/kill decision request (**MA-100**) rather than a 6th data-only
re-escalation of MA-085's still-unconfirmed creative-retirement correlation.

**ES Lite relaunched** with 1 new ad ("Arjun Influencer Reel_ES Lite_16 Sep"), 1 day of spend — CPP
₹192.49, platform ROAS 9.85×, GA4-dir ROAS 5.25×, encouraging but far too thin to judge. Fresh
read-plan set (**MA-101**, CPP≤₹400/GA4-dir ROAS≥8× by D+7 2026-09-23).

**Broad Interest DEEP_WEEK diagnostics** mostly re-confirmed yesterday's (2026-09-16) ad-hoc findings,
with the checkout leak worsening: Facebook Feed still the worst placement (CPP ₹1,316.54 vs blend
₹372.73, +253%, MA-095 re-verified — recommend executing now); checkout→purchase leak deepened further
(combined-tag 44.2%→24.4%, own-tag 32.8%→23.7% — escalated, **MA-103**, now the single most overdue
format-engine test given CF-56's direct relevance); hero-ad retention still weak (p75/p25 24.2%,
essentially unchanged — MA-097's re-edit test remains the right lever); auction quality clean, no
`BELOW_AVERAGE` rankings on any real-spend ad. Hero-ad concentration moderated slightly to 69.6% of
campaign spend (from 78% last cycle, MA-096), still elevated.

**Zero-purchase check (21d ad pull):** one new sibling ad found — "Before After Comparision | Safebuds
Static | 25 Aug 26" (non-Copy variant, distinct from the "–Copy" sibling in MA-082), ₹183.20/21d, 0
purchases — CUT drafted (**MA-102**). The standing MA-090/082 zero-purchase CUTs remain unexecuted,
re-confirmed with fresh numbers.

**Format engine:** the standing register (CF-31/37/51/54/55/56/59) remains not delivering, still a
standing Meet agenda item (MA-059). Appended net-new **CF-60 "Employee Product Review (Not a Paid
Actor)"** (**MA-104**) — motivated by Broad Interest's hero-ad concentration and weak retention needing
a visually distinct, non-reviewer-POV challenger.

**Budget: HOLD stays in force account-wide (MA-083)** — no exceptions; last cycle's brief clean week
did not hold, HOLD stays exactly where it was.

**Actions this cycle:** MA-098 (FIX, updates MA-089 — safebuds_20Apr resumed, re-verify before
re-executing MA-080/081), MA-099 (FIX, Openwire severe reversal, escalate for diagnosis), MA-100 (FIX,
ES Comm 2 fully dark all 7 days, formal keep/kill decision requested), MA-101 (TEST, ES Lite relaunch
read-plan), MA-102 (CUT, new sibling zero-purchase ad, ₹183.20/21d), MA-103 (FIX, escalates MA-094 —
Broad Interest's C2P leak deepening), MA-104 (TEST, append CF-60); D+7/re-verification status updates
on MA-048 (Broad Interest budget step, still HOLD), MA-077 (Broad Interest UTM fix, widest own/combined
gap yet, still unshipped), MA-078 (Pulse re-confirmed, spend tripled organically), MA-083 (HOLD
re-confirmed), MA-090/082 (zero-purchase cuts still unexecuted), MA-095/096/097 (re-verified this
DEEP_WEEK, all still valid).

---

## CYCLE 14 — 2026-09-10 (Thursday teardown, off-week — ISO week 37 is odd) — ACCOUNT STILL BELOW THE 6.0 FLOOR, 4TH CONSECUTIVE CYCLE; SAFEBUDS_20APR FOUND FULLY DARK 6 CONSECUTIVE DAYS

**Account-level:** TRUE ROAS 5.69× cur7d raw (2026-09-03→09-09), 5.93× prior7d — 09-09 (newest day)
carried a 59.9% GA4 `(not set)/(not set)` spike vs ≤3.0% every other day, the same recurring D+2
pattern. **Matured 6d (09-03→09-08): TRUE ROAS 5.65×** (prior matured 5.76×) — **still below the 6.0
floor, and worse than last cycle's already-below-floor matured read.** Marginal ROAS (matured-vs-
matured): Δspend/day −₹2,897.87 (−38.3%), Δrevenue/day −₹17,198.45 (−39.4%) → 5.93×/incremental-rupee,
but this reflects a **spend contraction**, not a scale test — the rupees that left were converting
near the account average (itself under floor). MTD (1–9 Sep): spend ₹48,485.79, GA4 Meta-paid revenue
₹3,10,254.60, TRUE ROAS **6.40×** — above floor only because early-September days pulled the average
up before this week's contraction. Platform overclaim 74.6% (within the normal 40–120% band, no
attribution break flagged).

**Biggest new finding: safebuds_20Apr 26 has gone FULLY DARK for 6 consecutive days.** The campaign
spent ₹929.95 on 09-03, then ₹0.00 on 09-04 through 09-07, and is **entirely absent from the Meta
Marketing API** (not even a zero-spend row) on 09-08 and 09-09. This predates and is independent of
MA-080 (hero-ad pause) and MA-081 (Facebook Reels placement exclusion) — both approved 2026-09-09 but
still "awaiting `/execute-approved`" — so the stoppage is not those drafts taking effect. Escalated as
**MA-089** (high risk). All of last cycle's safebuds-specific drafts (MA-058, MA-070, MA-072, MA-075,
MA-084, MA-088) are now moot/overtaken until the campaign resumes — noted inline on each row in the
queue. **Cycle 15 update: RESUMED 09-16 — see MA-098.**

**ES Comm 2** (now "ES Comm 2 LAL" in the live pull) collapsed a 5th consecutive cycle: spend fell
-44.3% (₹753.98→₹419.76), 0 purchases, GA4-dir ROAS 0.00×. MA-085's dated creative-retirement finding
(~22-23 Aug) is still unconfirmed by Meet — re-escalated. **Cycle 15 update: collapsed to total
non-delivery, ₹0 every day — see MA-100.**

**Openwire_5 Aug 26 LAL:** spend -64.4%, platform ROAS 6.06× (prior 6.58×), own-tag GA4-dir ROAS
4.99× — below floor. Last cycle's combined-tag read was 6.09× (above floor); the MA-076/077 UTM fix
is approved but still not shipped, so this week's own-tag number may still be an undercount rather
than a genuine re-reversal. **Cycle 15 update: combined-tag ROAS collapsed to 0.48× — see MA-099.**

**Broad Interest Based-24 Jul 26** is now carrying **79% of the account's live Meta spend** — flat WoW
(+0.1%), platform ROAS 10.46× (prior 9.43×), GA4-dir ROAS 6.32× — the account's sole real
floor-clearer this week at real volume. This concentration is itself a risk worth watching (echoes the
safebuds hero-ad over-concentration pattern from cycles 8–13, at the campaign level this time).

**Pulse Fitness Band** re-confirmed excellent unit economics (CPP ₹212.82, platform ROAS 16.25×,
GA4-dir ROAS 11.65× — the account's best this week) but its own spend fell -37.5% on its own. Remains
first in line for a budget step once MA-083's account-wide HOLD lifts — no action this cycle.

**Two new-campaign read-plans (MA-086) both hit their decision dates on zero real delivery.** Broad
Sales Campaign A+ Catalogue: 0 purchases across its entire ~6-day lifetime (₹2,570 total spend), dark
since 09-04 — closed as REJECTED-on-non-delivery (**MA-091**). Revive Massager: only ever ran 2 days
total (₹50.71 lifetime spend), dark since 08-29 — closed as REJECTED-on-non-delivery (**MA-092**).

**Zero-purchase check (21d ad pull):** 5 new zero-purchase ads found, ₹1,598.01/21d combined — CUT
drafted (**MA-090**): Gadgetbhai Comm reel_Broad_2 Sep 26 (₹983.53), Techopedia Safebuds Reel_24
Jul26–SME Owner Aud (₹279.57), Influencer_Shahroz_13Aug_Comm (₹188.20), Comm_ASMR Reel_Unboxing_12
Aug26–Copy (₹86.32), Influencer_IND Unboxer_Comm_Problem Hook (₹60.33).

**MA-087's WhatsApp/CTWA "WA Review Ad" test** hit its D+7 decision date with 0 purchases on trivial
spend (₹295.59/21d) — extended rather than rejected, since WhatsApp-routed conversions may not land as
a Meta-attributed purchase at all; recommend checking WhatsApp/Bitespeed conversation counts directly
next cycle instead of relying on Meta purchase attribution.

**Format engine:** the standing 6 (CF-31/37/51/54/55/56) remain IN TEST, not delivering — this item was
closed to a standing Meet agenda item via `/approvals` (MA-059) and is not being re-drafted weekly.
Appended net-new **CF-59 "Silent Subtitle Testimonial"** (**MA-093**) — a muted-autoplay-safe testimonial
lever, motivated by Broad Interest now being the only campaign with enough real volume to safely host a
new challenger test.

**Budget: HOLD stays in force account-wide (MA-083)** — no exceptions; floor still breached, 4th
consecutive cycle, margin got worse not better. No DEEP_WEEK diagnostics this cycle (ISO week 37 is
odd) — next DEEP_WEEK 2026-09-17.

**Actions this cycle:** MA-089 (FIX, safebuds_20Apr fully dark 6 days — top priority), MA-090 (CUT, 5
zero-purchase ads, ₹1,598.01/21d), MA-091 (KILL, close Broad Sales Campaign A+ Catalogue on
non-delivery), MA-092 (KILL, close Revive Massager on non-delivery), MA-093 (TEST, append CF-59); D+7
reads updated inline on MA-076 (Openwire tag, still below floor), MA-078 (Pulse re-confirmed
VALIDATED), MA-080/081/082 (approved, still awaiting execute — MA-080/081's host campaign now dark,
MA-082 partially unexecuted), MA-083 (HOLD re-confirmed, 4th cycle below floor), MA-085 (ES Comm 2
still unconfirmed, collapsed further), MA-087 (extend, thin volume); MA-058/070/072/075/084/088 all
marked MOOT/OVERTAKEN by safebuds_20Apr going dark (see MA-089).

---

## CYCLE 13 — 2026-09-03 (Thursday teardown, DEEP_WEEK — ISO week 36 is even) — ACCOUNT TRUE ROAS BREACHES THE 6.0 FLOOR FOR THE FIRST TIME ON BOTH RAW AND MATURED READS; SAFEBUDS HERO-AD DECAY + PLACEMENT + CHECKOUT COLLAPSE IDENTIFIED AS THE PROXIMATE, FIXABLE CAUSE

**Account-level:** TRUE ROAS 5.32× cur7d raw (2026-08-27→09-02), 7.00× prior7d — 2 Sep (newest day)
carried a 46.3% `(not set)/(not set)` GA4 attribution spike (vs ≤3.3% every other day), the same
recurring D+2 maturity pattern. **Matured 6d (27 Aug–1 Sep): TRUE ROAS 5.76×** (prior matured 6.63×) —
**still below the 6.0 floor.** This is the FIRST cycle in this reporting history where even the
matured, D+2-corrected read fails the floor — the margin-narrowing trend flagged cycles 11/12 has
become an outright breach. Marginal ROAS (matured-vs-matured): Δspend/day +₹48.24 (+0.1%, essentially
flat), Δrevenue/day **−₹6,270.30 (-12.6%)** — deeply negative on flat spend, meaning existing spend is
actively breaking, not a failed scale test. MTD (1–2 Sep, thin 2-day window): spend ₹15,940.38, GA4
Meta-paid revenue ₹91,383.40, TRUE ROAS **5.73×** — agrees directionally but too short to be decisive.

**The floor breach is concentrated almost entirely in safebuds_20Apr, not the account broadly.** Two
other campaigns cleared their own floors this same week: **Pulse Fitness Band VALIDATED** (GA4-dir
ROAS 10.26× cur7d / 8.63× prior7d, both ≥8× — MA-078/SH-MA-19) and **Openwire back above floor on a
combined-tag basis** (6.09× cur7d, MA-076). safebuds_20Apr's own GA4-directional ROAS is 4.82× cur7d
(prior 5.58×) — its 4th+ consecutive cycle below floor, and this cycle three compounding, NAMED,
FIXABLE problems were isolated on it:
1. **Its original hero ad has decayed straight through the SafeBuds kill line.** "Techopedia Safebuds
   Reel_17May 26" — the same creative behind the institutional ₹329 CPP/9.2× ROAS reference — now
   reads CPP ₹1,026.02 (>₹700 floor) and platform ROAS 2.62× (<3× floor) on ₹5,130.08 cur7d spend/5
   purchases, breaching BOTH kill conditions. **CUT drafted (MA-080).**
2. **Its Facebook Reels placement is burning ~₹4,008/week in excess spend.** ₹7,972.86 cur7d (46.9%
   of campaign spend) at CPP ₹1,138.98 — +101% worse than the campaign blend (₹566.49). **Placement
   CUT drafted (MA-081)**, superseding a now-stale MA-069 (Broad Interest's Instagram Reels flipped
   healthy again this cycle, CPP ₹285.35 < blend — DO NOT EXECUTE, 2nd time this basis has gone stale).
3. **Its checkout→purchase rate collapsed 32.0%→15.4%** (more than halved) while session→ATC actually
   IMPROVED (11.2%→16.8%) and ATC→checkout only softened modestly — the leak is specifically the
   final purchase step, likely compounded by (not separate from) problems 1–2. **FIX drafted (MA-084)**,
   escalating MA-070/075.

**Budget: HOLD account-wide, no exceptions this cycle** (MA-083) — including Pulse Fitness Band's own
excellent, validated unit economics (10.26× GA4-dir ROAS); the discipline is account-floor-first, even
a strong campaign's budget step waits until the account itself re-clears 6.0.

**ES Comm 2 collapsed a 4th time** (-73.3% spend, ₹2,823.33→₹753.22; combined-tag GA4-dir ROAS
5.00×→3.85×, below floor) — but for the first time there's a concrete, dated fact: its two legacy
winning creatives ("Influencer_Merged_13Nov Comm," "Influencer_Gadgetbhai_13 Nov Comm") stopped
delivering entirely ~22–23 Aug, days before the collapse. **FIX drafted (MA-085)**, asking Meet to
confirm whether this was an intentional retirement.

**MA-071's prior DEEP_WEEK finding (Broad Interest + Openwire shared checkout collapse) RECOVERED
this cycle** — Broad Interest C2P 24.5%→42.3% (now above its 41.8% pre-collapse baseline), Openwire
C2P 20.5%→22.8% (trending back toward 27.1%) — confirms SH-MA-18's shared-cause hypothesis. Notably,
a near-identical, isolated version of the same failure mode then appeared on safebuds_20Apr instead
(see finding 3 above) — a different campaign, not a re-opening of the original finding.

**GA4 tagging (MA-037/076/077) still unresolved on all 3 campaigns** — Openwire's combined-tag ROAS
improved to 6.09× (from 5.81×) purely from consistent tag combination, no underlying change; Broad
Interest's 3-way merged tag persists unchanged, still unverifiable.

**New this cycle:** two new campaigns with no prior read-plan — "Broad Sales Campaign A+ Catalogue"
(1 day old) and "Revive Massager" (new SKU, 6 days old) — thresholds set (MA-086). Two organic,
unbriefed "WA Review Ad" (WhatsApp-routed) creatives appeared — formalized a read-plan (MA-087),
directly tying to the standing, evidenced WhatsApp/CTWA guidebook opportunity. New ad "ASMR Unboxing
Vid | Safebuds | 31 Aug 26" shows the account's best hook (17.45% of impressions) AND best retention
(46.3% p75/p25) this cycle — a second, independent data point for the ASMR-unboxing format lever —
appended **CF-58** (MA-088).

**Format engine:** CF-31/37/51/54/55/56 confirmed still 0/6 delivering, 9th straight cycle — re-confirmed
MA-059 without a new draft.

**MA-074's prior 5-ad CUT list confirmed executing** — all 5 ads' spend fell to near-zero or dropped
out of the live pull entirely; no new draft needed.

**Tamil/Kannada (MA-072) differentiated:** Tamil recovered real signal this cycle (CPP ₹412.14, ROAS
7.24×, 3 purchases) — extend its read one more clean cycle. Kannada is still fully non-delivering
(₹75.24/21d residual, 0 purchases) — closed as REJECTED-on-non-delivery via MA-082.

**Actions this cycle:** MA-080 (CUT, safebuds hero-ad floor breach), MA-081 (CUT, placement exclusion —
safebuds Facebook Reels), MA-082 (CUT, Comm 2.0 floor breach + 2 zero-purchase ads), MA-083 (FIX,
account-level floor breach — HOLD all budget), MA-084 (FIX, safebuds checkout→purchase collapse),
MA-085 (FIX, ES Comm 2 instability now dated to a creative retirement), MA-086 (TEST, 2 new-campaign
read-plans), MA-087 (TEST, formalize WhatsApp-routed WA Review Ad creatives), MA-088 (TEST, append
CF-58); MA-069 marked DO NOT EXECUTE (stale 2nd time); MA-071 marked RECOVERED; MA-072 differentiated;
MA-075/070 status updated; MA-076/077 status updated; MA-078 marked VALIDATED (budget step gated);
MA-074 marked confirmed executing.

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
**Cycle 13 update: proximate cause identified — hero-ad floor breach (MA-080), placement problem
(MA-081), and checkout collapse (MA-084) — see cycle 13 above.**

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
patching. **Cycle 13 update: Openwire's combined-tag ROAS improved to 6.09× purely from consistent
tag combination; Broad Interest's merged tag persists unchanged, still unverifiable.**

**ES Comm 2 collapsed a 3rd time:** spend fell -73.0% (₹10,447.71→₹2,823.33) right after last cycle's
"first near-full clean week," combined-tag GA4-directional ROAS fell 8.23×→5.00× (below floor). The
"one more clean week before any budget conversation" (MA-057) never arrived. **Cycle 13 update:
collapsed a 4th time, but now with a dated cause to investigate (MA-085).**

**Retargeting is now fully dark:** ₹0.00 spend cur7d (from ₹905.70 last cycle), a 4th consecutive cycle
with no cause logged (MA-055). **Cycle 13 update: still absent entirely from the live pull, 5th+ cycle.**

**The entire standing CUT backlog self-resolved:** MA-042, MA-043, MA-051, MA-063, and MA-068 — carried
2 to 7+ cycles as "still not executed" — no longer appear anywhere in this cycle's live 21-day ad pull
at all. Recommending these be closed rather than re-drafted. New CUT drafted for 5 fresh zero-purchase
ads found this cycle (₹587.83/21d, **MA-074**). **Cycle 13 update: MA-074 confirmed executing.**

**New campaign, no prior read-plan:** "Pulse Fitness Band | 24 Aug 26" launched ~24 Aug. Early read:
CPP ₹408.53, GA4-dir ROAS 8.64× (own-tag, exact match, reliable) on ₹1,225.59 spend. Threshold set —
CPP ≤₹450, ROAS ≥8× by D+7 (31 Aug) — **MA-078**. **Cycle 13 update: VALIDATED — CPP ₹288.30, GA4-dir
ROAS 10.26×/8.63× both weeks. Budget-step candidate queued but gated behind account floor clearing.**

**Format engine:** CF-31/37/51/54/55/56 confirmed still 0/6 delivering, 8th straight cycle. Re-confirmed
MA-059 without a new draft. Appended net-new format **CF-57 "Ambient ASMR Unboxing"** (MA-079),
motivated by an ad-hoc "Unboxing ASMR Vid | Comm | 25 Aug 26" already reading an 18.00× platform ROAS
on a thin sample. **Cycle 13 update: still 0/6, 9th straight cycle; CF-58 appended, reinforcing CF-57.**

**DEEP_WEEK-only diagnostics (placement re-read for MA-069, funnel re-read for MA-071) correctly NOT
re-pulled this off-week** (ISO week 35 is odd) — both deferred to the next DEEP_WEEK, 2026-09-03
(now closed out in cycle 13 — MA-069 flipped stale again, MA-071 recovered).

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
8.78×, a hard reversal from last cycle's scale-ready read) — also below the floor. Escalated safebuds
as **MA-070** (restates/escalates MA-065 with floor-breach evidence) and downgraded Openwire's pending
**MA-062** budget step to HOLD.

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
  New placement CUT drafted (**MA-069**). **Cycle 13 update: MA-069 itself flipped stale — Instagram
  Reels recovered to CPP ₹285.35, better than blend; the real problem moved to safebuds_20Apr's
  Facebook Reels (MA-081).**
- **Funnel — two distinct leaks:** safebuds_20Apr's own funnel keeps softening at the top
  (session→ATC 10.8%→10.1%, ATC→checkout 51.4%→49.7%) — escalates MA-065 with this cycle's
  floor-breach evidence (MA-070). **New: checkout→purchase collapsed simultaneously in Broad Interest
  (41.8%→31.9%) and Openwire (27.1%→19.3%)** while upstream funnel stages held or improved in both —
  points at a shared checkout-stage technical/UX problem, not a landing-page mismatch. Escalated
  (**MA-071**). **Cycle 13 update: RECOVERED in both campaigns, confirming SH-MA-18 — but a similar,
  isolated collapse then appeared on safebuds_20Apr (MA-084).**
- **Auction quality: clean** — no `BELOW_AVERAGE` ranking on any of the 9 ads spending ≥₹500 this week.
- **Hook retention:** Openwire's hero ad still has a strong hook (p25 = 10.1% of impressions) but its
  body-retention slipped further (p75/p25 now 21.5%, down from 24.0% last cycle) — MA-066's re-edit
  test remains unproduced and is now more urgent given the ad's broader reversal. **Cycle 13 update:
  slipped further to 20.9%, 3rd consecutive declining read, still not produced.**

**MA-061's Tamil/Kannada read-plan hit its 2026-08-19 decision date on an uninterpretable sample:**
delivery collapsed to ₹196.27 (Tamil, 1 purchase) and ₹42.97 (Kannada, 0 purchases) this week — the
same under-delivery failure mode as the historical Telugu Comm precedent. Extended the read-plan,
requested a delivery diagnostic (**MA-072**). **Cycle 13 update: Tamil recovered real signal, extend;
Kannada still non-delivering, closed via MA-082.**

**Zero-purchase check (21d ad pull):** two new trivial zero-purchase ads (**MA-068**, ₹5.22/21d
combined); the standing MA-042/043/051/063 cluster re-confirmed still unexecuted (₹838.16/21d).
**MA-058's hero-adset rebalance shows partial progress:** Techopedia_17May26's concentration improved
88.3%→71.6%, Nobody Tech's share grew 7.3%→27.6% — but the Gujarati creative (8.19× ROAS over the
prior ~2 weeks) is dark again THIS week specifically (₹0 cur7d) — intermittent, not resolved.

**Format engine:** CF-31/37/51/54/55 confirmed still 0/5 delivering, 7th straight cycle. Recommended
this become a standing Meet agenda item rather than a weekly repeat draft. Appended CF-56
"Checkout-Trust Overlay" (**MA-073**), directly motivated by this cycle's own checkout→purchase
collapse finding (MA-071) — a specific trust/guarantee card timed at the exact leaking funnel stage.

**Actions this cycle:** MA-068 (CUT, 2 new trivial zero-purchase ads), MA-069 (CUT, Broad Interest IG
Reels placement exclusion), MA-070 (FIX, safebuds_20Apr floor breach), MA-071 (FIX, shared
checkout→purchase collapse), MA-072 (FIX/TEST, extend MA-061's read-plan), MA-073 (TEST, append
CF-56); MA-062 downgraded to HOLD; MA-064 marked DO NOT EXECUTE; MA-042/043/051/054/055/056/057/058/
059/061/065/066 all re-confirmed/updated with fresh cycle-11 numbers.

---

## CURRENT SPRINT — Sprint 2, seeded 2026-06-27 (mandate update cycle) — updated 2026-09-17 cycle 15

| # | Task | Target | Expected impact | Status | Result |
|---|---|---|---|---|---|
| P0-1 | MA-001/002 (Unboxing reel kills) — founder "held — pause none for now" 2026-06-30, i.e. not executed via approval | — | Stop spend on pool-exhausted creative | RESOLVED BY OTHER MEANS | Both ADSET_PAUSED/PAUSED with only residual spend, long since declining to near-zero. Not re-flagging. |
| P0-2 | (merged into P0-1) | — | — | — | — |
| P0-3 | MA-007 (kill Retargeting campaign) — held 2026-06-30 | Pending human decision | Stop CPP bleed / frequency breach | **CLOSED via /approvals 2026-09-09** | Meet acknowledged, investigating directly (MA-055) — not agent-actionable, stop re-escalating. |
| P0-4 | MA-010 recheck — ES Pro "3D All Feature-Pro" spend after CEO-confirmed pause | Verify zero spend in 7d | Confirm EBITDA discipline restored | **CONFIRMED CLOSED (long-standing)** | Does not appear anywhere in the 35d campaign pull — spend has been at zero for many cycles running. |
| P0-5 | MA-009 recheck — Comm LAL (id 52576570206220), approved+"executed" 2026-06-30 | Confirm scale is running | Volume at CPP ≤₹201, ROAS ≥8× | **STILL DARK** | Absent from the 35d campaign pull entirely — still dark, unchanged from prior cycles. |
| P0-3a | MA-036/037/038 (ES Comm 2 +20% budget, UTM fix, creative rebalance) — all marked EXECUTED 2026-08-04 | Confirm the campaign is actually running post-execution | Hold ROAS while scaling +20% | **NOW FULLY DARK — FORMAL KEEP/KILL DECISION REQUESTED** | ES Comm 2 LAL cur7d (cycle 15): ₹0.00 spend every single day, the 6th consecutive unstable cycle. MA-100 requests Meet decide keep vs kill rather than another data-only escalation. |
| P0-6 | MA-004 scale (Techopedia SafeBuds, ₹2,500/day) — approved+executed 2026-06-30 | Hold ROAS while scaling | +volume at CPP ≤₹380 | **HOST CAMPAIGN RESUMED, THIS AD STILL ABSENT** | The whole safebuds_20Apr campaign resumed 09-16 after ~12 dark days (MA-098) with a different ad live; this specific ad still doesn't reappear in the pull — execute MA-080's pause once/if it does. |
| P0-7 | Comm 2.0 rotation creative (EXP-001 / MA-006) — Custom Reel decay/recovery cycle | — | Creative swap if Custom Reel keeps decaying | **MOOT — host campaign fully dark, keep/kill pending** | Custom Reel doesn't reappear distinctly; ES Comm 2 is now fully dark all 7 days (MA-100) — re-assess only if/when Meet decides to relaunch. |
| P0-8 | ES Lite relaunch — proven creatives × updated LAL (MA-022) | ₹1,000/day, 7-day read | CPP ≤ ₹265, ROAS ≥ 8× | **RELAUNCHED 2026-09-16 WITH A NEW AD — FRESH READ-PLAN SET** | "Arjun Influencer Reel_ES Lite_16 Sep" — CPP ₹192.49, platform ROAS 9.85×, GA4-dir ROAS 5.25× on 1 thin day. Read-plan: CPP≤₹400/GA4-dir ROAS≥8× by D+7 2026-09-23 (MA-101). |
| P0-9 | Rebuild ES Lite 1% LAL from fresh 365d purchaser list (MA-023) | 2 sequential Meta writes via /execute-approved | New LAL populated + delivering | **Re-openable now that ES Lite has relaunched (P0-8) — no action taken yet** | — |
| P0-10 | Regional-language reel tests: SafeBuds Gujarati (MA-024/SH-MA-7), Comm 2.0 Telugu (MA-025/SH-MA-8) | SafeBuds: CPP≤₹380/ROAS≥8×; Comm: CPP≤₹450/ROAS≥8× | Both within 7-day read | **STILL MOOT/PENDING** | Gujarati SafeBuds reel doesn't reappear yet post-resumption; Telugu Comm's host campaign (ES Comm 2) fully dark, keep/kill pending (MA-100). |
| P0-11 | Format-engine health — CF-31 (MA-034), CF-37 (MA-035), CF-51 (MA-045), CF-54 (MA-060), CF-55 (MA-067), CF-56 (MA-073), CF-57 (MA-079), CF-58 (MA-088), CF-59 (MA-093), CF-60 (MA-104), all marked IN TEST/queued | 2–3 formats delivering | New format-test learnings flowing | **CLOSED to a standing Meet agenda item via /approvals (MA-059) — still not delivering** | CF-60 appended this cycle (MA-104) per the standing "append ≥1 net-new format" rule; not being re-drafted weekly per Meet's direction. CF-56 is now the single most overdue test given the deepening checkout leak (MA-103). |
| P0-12 | New SKU: Openwire (Type-C wired) campaign launched 2026-08-05 | CPP ≤₹350, ROAS ≥8× by 2026-08-12 | Formal threshold set, no change proposed | **SEVERE COLLAPSE — COMBINED-TAG ROAS 6.09×→0.48×** | Cur7d (cycle 15): combined-tag GA4-dir ROAS 0.48× (own-tag 0.00×), spend -38.6% — the account's most severe single-campaign reversal this cycle. Escalated for diagnosis (MA-099). |
| P0-13 | safebuds_20Apr hero-ad concentration + CPP creep | Rebalance priority toward Nobody Tech; investigate Gujarati creative's dark status | Blended adset ROAS holds/improves without net-new spend | **CAMPAIGN RESUMED, TOO THIN TO RE-ASSESS** | Campaign resumed 09-16 after ~12 dark days (MA-098) with 1 thin day of data — wait for a fuller resumed week before re-opening this rebalance question. |
| P0-14 | Instagram Feed/Reels placement inside safebuds_20Apr's or Broad Interest's adset burning spend at a materially worse CPP than other placements | Exclude the placement; reallocate toward proven placements | ~₹4,000+/week reallocated at a better blended CPP | **RE-VERIFIED THIS DEEP_WEEK — BROAD INTEREST'S FACEBOOK FEED STILL THE WORST, RECOMMEND EXECUTING** | MA-095 (Broad Interest Facebook Feed, CPP ₹1,316.54 vs blend ₹372.73) re-confirmed fresh this DEEP_WEEK, one cycle early — the first placement finding to hold true two consecutive checks. safebuds' own placement mix (MA-081) needs re-verification once its resumed delivery is fuller. |
| P0-15 | safebuds_20Apr's own GA4 funnel — now specifically the checkout→purchase stage | Checkout-flow/offer audit specific to safebuds' PDP and creative mix, paired with executing MA-080/081 | Checkout→purchase rate recovers toward pre-collapse levels (32.0%) | **CAMPAIGN RESUMED, TOO THIN TO RE-DIAGNOSE** | 1 day of resumed data only — re-diagnose at the next DEEP_WEEK once a fuller week of resumed delivery exists. Separately, the same checkout-stage failure mode is now confirmed recurring and deepening on Broad Interest (MA-094→MA-103). |
| P0-16 | Openwire hero ad: strong hook, weak mid-video retention | Re-edit the ad's 8–20s body, leave the hook untouched | p75/p25 ratio rises to ≥40% while CPP/ROAS hold | **SECONDARY — OPENWIRE ITSELF HAS COLLAPSED (P0-12)** | The re-edit test (MA-066) is now secondary to diagnosing Openwire's severe reversal (MA-099) first. A near-identical weak-retention pattern (24.2%) is also confirmed on Broad Interest's hero ad (MA-097). |
| P0-20 | GA4 campaign-tag mismatches confirmed on 3 campaigns (ES Comm 2, Openwire, Broad Interest) — a structural, spreading data-quality problem, not isolated bugs | Full account-wide UTM-taxonomy audit | Every campaign's directional ROAS becomes independently verifiable again | ✅ **APPROVED 2026-09-09 via /approvals (MA-077) — still awaiting `/execute-approved`, now materially overdue** | Widest own-tag/combined-tag gap yet this cycle (Broad Interest 1.07× vs 6.68×; Openwire 0.00× vs 0.48×) — the manual combination workaround is carrying real decision weight every cycle. |
| P0-21 | New campaign "Pulse Fitness Band \| 24 Aug 26" — read-plan set | Confirmed floor-clearing signal or diagnosed early | Decision at D+7 (2026-08-31) | **VALIDATED, re-confirmed cycle 15 — spend tripled organically (+192%), ROAS held/improved** | Platform 13.30×, GA4-dir 13.34× — still the account's best unit economics and clearest scale candidate. Budget-step candidate queued, gated behind MA-083's account-wide HOLD. |
| P0-22 | Account TRUE ROAS below the 6.0 floor on BOTH raw and matured reads | HOLD all budget account-wide, no exceptions | Account re-clears 6.0 on the matured read for a full clean week before any budget move | **STILL BELOW FLOOR — last cycle's brief "clean week" did NOT hold** | Cur7d raw 4.87×, matured 5.69× (essentially flat vs cycle 14's matured 5.65×). HOLD (MA-083) stays in force — require at least two consecutive clean rolling windows before considering lifting it. |
| P0-23 | Two new campaigns launched with no prior read-plan (Broad Sales Campaign A+ Catalogue, Revive Massager) | Set formal thresholds, no change proposed | Confirmed floor-clearing signal or diagnosed early | **CLOSED — both REJECTED-on-non-delivery, re-confirmed cycle 15** | Broad Sales Campaign: confirmed ₹0 spend the entire cur7d window this cycle. Revive Massager: still absent. |
| P0-24 | Two organic, unbriefed WhatsApp-routed "WA Review Ad" creatives appeared | Formalize a read-plan, tie to the standing CTWA/WhatsApp guidebook opportunity | Confirmed floor-clearing signal or diagnosed early | **EXTENDED FURTHER — ad no longer appears in this cycle's pull** | Host campaign (safebuds_20Apr) was dark most of the window; extend further once delivery stabilizes; still no direct WhatsApp/Bitespeed conversation-count check has been done. |
| P0-25 | safebuds_20Apr 26 had gone FULLY DARK for 6+ consecutive days, independent of and predating the already-approved MA-080/081 fixes | Confirm cause (policy, payment, manual pause, or platform delivery block) via Meet/Ads Manager | Campaign resumes delivery, or a clear reason is logged | **PARTIALLY RESOLVED — campaign RESUMED 2026-09-16 after ~12 total dark days, cause still unconfirmed** | See MA-098 — treat as a resumption, not a resolution; re-verify stability over 3-7 days before treating MA-080/081 as actionable again. |
| P0-26 | Broad Interest carrying a large share of the account's live spend — a concentration risk | Diversify volume once other campaigns recover (especially safebuds_20Apr and ES Comm 2) | Spend distributed across ≥2–3 real-volume campaigns again | **STILL A WATCH ITEM — hero-ad concentration inside Broad Interest itself also flagged (MA-096)** | Broad Interest's own hero ad now carries 69.6% of its spend (down slightly from 78%) — concentration risk exists at both the account level and the ad level inside this one campaign. |
| P0-27 (NEW cycle 15) | Openwire's combined-tag GA4-dir ROAS collapsed from 6.09× to 0.48× — the account's most severe single-campaign reversal this cycle | Diagnose cause (policy flag, audience-pool exhaustion, creative rotation) via Meet/Ads Manager | Re-clears 6.0 combined-tag or a clear diagnosis is logged | **NEW — escalated as MA-099, high risk** | Spend fell -38.6% while combined-tag revenue collapsed even harder — not explained by the standing UTM mismatch since this is the already-combined-tag read. |
| P0-28 (NEW cycle 15) | ES Comm 2's collapse became total — ₹0.00 spend every day of the trailing week, 6th consecutive unstable cycle | Formal keep-or-kill decision from Meet | Either a deliberate relaunch or a formal close, ending the re-escalation cycle | **NEW — escalated as MA-100, formal decision request, not another data-only escalation** | Re-escalating the same unconfirmed creative-retirement ask (MA-085) a 6th time is unlikely to change the outcome. |

---

## LIVE — REMARKETING CAROUSELS (launched live by founder 2026-07-02, NOT via /execute-approved)

> Two 3-slide review-style carousels went live directly inside the Retargeting campaign. **Cycle 9
> update:** the entire host campaign collapsed to ₹185.57/week — both carousels are effectively moot
> until Retargeting's own status is confirmed (see MA-055). **Cycle 10 update: still collapsed
> (₹185.95/7d, 0 purchases), re-confirmed on this cycle's live pull — no change. Cycle 11 update: still
> effectively collapsed (₹905.70/7d off a tiny base), re-confirmed — no change, 3rd consecutive cycle
> unresolved. Cycle 12 update: campaign is now fully dark (₹0.00/7d) — 4th consecutive cycle
> unresolved, both carousels moot until Meet confirms the campaign's status. Cycle 13 update: campaign
> absent entirely from the live 35-day pull — 5th+ consecutive cycle unresolved. Cycle 14 update:
> closed via /approvals 2026-09-09 (MA-055) — Meet investigating directly, not agent-actionable; both
> carousels remain moot regardless. Cycle 15 update: no change — still closed, not re-escalated.**

---

## WEEKLY AD-LEVEL STATUS TABLE (cycle 15, cur7d = 2026-09-10→09-16, prior7d = 2026-09-03→09-09; platform-claimed ROAS — ranking only; GA4-directional ROAS given where a reliable/combined campaign tag exists)

| Ad (campaign) | 7d spend | 7d platform CPP/ROAS | Verdict |
|---|---|---|---|
| Influencer_Gadgetbhai_24 Jul 26 Comm - SME Owner Aud (Broad Interest) | ₹18,156.60 (69.6% of campaign) | CPP ₹394.71 | Hero-ad concentration moderated slightly from 78% last cycle but still elevated; retention still weak (p75/p25 24.2%, MA-097). |
| safebuds_20Apr 26 — all ads | ₹703.64 total (1 day only) | 0 platform purchases, GA4-dir ROAS 4.26× | **Campaign resumed 09-16 after ~12 dark days — see MA-098.** Too thin for ad-level detail this cycle. |
| ES Comm 2 LAL — all ads | ₹0.00 total | 0 purchases | **Fully dark every day of the trailing week — 6th consecutive unstable cycle, formal keep/kill decision requested (MA-100).** |
| Openwire_5 Aug 26 LAL — all ads | ₹1,637.51 total | platform ROAS 3.50×, combined-tag GA4-dir 0.48× | Severe reversal from 6.09× two cycles ago — escalated for diagnosis (MA-099). |
| Pulse Fitness Band \| 24 Aug 26 — all ads | ₹6,841.58 total (+192% WoW) | platform ROAS 13.30×, GA4-dir 13.34× | Best unit economics on the account, spend nearly tripled organically, budget-step candidate gated behind MA-083. |
| ES Lite — all ads | ₹577.48 total (1 day only) | platform ROAS 9.85×, GA4-dir 5.25× | Relaunched with 1 new ad after being closed via /approvals — fresh read-plan set (MA-101). |

**Blended Meta cur7d spend (Meta Marketing API, direct):** ₹35,851.50, platform-claimed ROAS 9.48×
(TRUE ROAS 4.87× raw / 5.69× matured — BELOW FLOOR, last cycle's brief clean week did not hold, see
cycle 15 summary above).

---

## PERFORMANCE TARGETS (updated weekly)
| Metric | Current (cur7d 2026-09-10→09-16) | Weekly target | 30-day target | 90-day target (KPI) |
|---|---|---|---|---|
| SafeBuds hero CPP | **N/A — host campaign only just resumed 09-16 after 12 dark days (MA-098), 1 thin day of data** | hold <₹380 | hold <₹350 | hold <₹300 |
| safebuds_20Apr GA4-directional ROAS | **4.26× on trivial ₹703.64 resumed spend — too thin to judge** | Re-verify delivery stability 3-7 days (MA-098) before treating as recovered | — | — |
| ES Comm 2 | **₹0.00 spend every day of the trailing week — total collapse** | Formal keep/kill decision requested (MA-100) | — | — |
| ES Lite | **Relaunched 09-16 with 1 new ad — CPP ₹192.49, platform 9.85×, GA4-dir 5.25× on 1 thin day** | Read-plan: CPP≤₹400/GA4-dir ROAS≥8× by D+7 2026-09-23 (MA-101) | <₹400 CPP once restored | <₹303 (baseline) |
| Retargeting | Closed via /approvals — Meet investigating directly (MA-055) | — | <₹400 CPP once restored | <₹303 (baseline) |
| Openwire | **SEVERE COLLAPSE — combined-tag GA4-dir ROAS 0.48× (from 6.09× two cycles ago)** | Escalated for diagnosis (MA-099); do not scale regardless (account-wide HOLD, MA-083) | — | — |
| Broad Interest | **Combined-tag GA4-dir ROAS 6.68× (prior 9.32×) — still above floor but declining; hero-ad concentration 69.6%, checkout leak deepening (MA-103)** | HOLD on budget (MA-083); watch both concentration risks | — | — |
| Pulse Fitness Band | **VALIDATED, re-confirmed — spend tripled organically (+192%), platform ROAS 13.30×, GA4-dir ROAS 13.34×** | Budget-step candidate, gated behind account floor (MA-083) | — | — |
| Total weekly active spend | ₹35,851.50 (cur7d) — +10.2% WoW | — | — | ~₹38,500/week baseline — still below it, driven by ES Comm 2's total collapse and safebuds' thin resumption |
| **TRUE ROAS (GA4-based, account-level)** | **4.87× raw / 5.69× matured — BELOW FLOOR; last cycle's "clean week" (matured 7.45×) did NOT hold** | **≥6.0 (floor) — BREACHED, account-wide budget HOLD in effect (MA-083); require 2 consecutive clean windows before lifting** | **≥6.0** | **≥6.0 (KPI, per Meet 2026-07-14)** |
| **Marginal ROAS** | **6.50× matured-vs-matured, but reflects thin organic drift (+4.5%/+5.2%), not a deliberate scale step** | **N/A this cycle — no scale test occurred** | — | — |
| Active converting creatives | Effectively Broad Interest + Pulse this cycle (ES Comm2 fully dark, Openwire collapsed, safebuds/ES Lite too thin to count) | 3 after kills + creative swap | 4 | 5–6 (test matrix live) |
| Worst creative frequency (ad-level) | No fatigue-driven cut this cycle (all real-spend ads well under 2.5×) | <2.0× across all | <2.0× | <2.0× |

---

## 3-MONTH TEST MATRIX (toward ₹5L / TRUE ROAS ≥6.0 floor — seeded 2026-06-27, floor redefined 2026-07-14)

> Each experiment is one falsifiable hypothesis. Must clear ROAS ≥ 8× CPP ≤ floor on a 7-day read to earn scale. Spend allocation is indicative; each experiment gets ₹5,000–₹15,000 for the test window before scale decision.
>
> **Format source:** the EXP `Content type` values are drawn from the **`## CREATIVE-FORMAT TEST ENGINE` register (CF-# rows) in `learning-log.md`** — the master format library. This matrix tracks the *currently-live* experiments; the register holds the full open catalog + each format's tested/validated/rejected status. Keep 2–3 format trials live at all times (see constitution §5d). **Cycle 15: standing register (CF-31/37/51/54/55/56/59) still not delivering — closed to a standing Meet agenda item via /approvals (MA-059). CF-60 appended, reinforcing the standing "append ≥1 net-new format" rule. CF-56 "Checkout-Trust Overlay" is now the single most overdue test given the deepening C2P leak (MA-103).**

> **Note (cycle 15):** most of the safebuds_20Apr-specific experiments below (EXP-004, EXP-006,
> EXP-011, EXP-012, EXP-018 through EXP-020) remain thin/unverified pending a fuller resumed week of
> delivery — the host campaign only resumed 09-16 after ~12 dark days. Not re-tabulated row-by-row
> this cycle; see the queue-inbox rows (MA-058/070/072/075/084/098) for each one's individual status.
> Full matrix re-verification resumes once safebuds_20Apr holds a fuller clean week.

**Spend allocation guide (₹5L over 3 months):** the account's weekly active spend rose slightly to
₹35,851.50 this cycle (+10.2% WoW) but is still well below the ~₹38,500/week baseline — ES Comm 2's
collapse to total non-delivery and safebuds_20Apr's thin 1-day resumption both continue to depress the
account's real-volume base. Floor discipline (MA-083) still gates ALL budget scaling account-wide,
including Pulse Fitness Band's excellent, re-confirmed economics (spend tripled organically this cycle
regardless, +192%). The two highest-priority open questions are MA-099 (Openwire's severe collapse) and
MA-100 (ES Comm 2's keep/kill decision) — until those are resolved, discussing spend allocation beyond
"diagnose and stabilize" is premature. Broad Interest remains the account's real-volume anchor but is
itself showing early hero-ad concentration and checkout-leak warning signs (MA-096/103).

---

## DATA PULL SCHEDULE
- Weekly (Thu): Meta campaign×day (35d) + ad×day (21d) pulls — direct Marketing API
  (`Authorization: Bearer` header — query-param auth 400's, see cycle 10 learning).
- Weekly (Thu): GA4 direct Analytics Data API pull (4 requests, 0 Windsor calls) — TRUE ROAS (Meta
  spend ÷ GA4 Meta-paid revenue), always with a matured (excl. newest day) recompute alongside the
  headline. **Cycle 13 learning: the matured recompute is NOT guaranteed to clear the floor — it
  corrects for the D+2 maturity artifact only, it does not mean "always healthy." Cycle 15 learning:
  a single clean matured read is a data point, not a trend — require two consecutive clean rolling
  windows before treating a floor-clearing as a genuine recovery.**
- **Biweekly (even ISO weeks only, `DEEP_WEEK`), per the 2026-08-13 cost-control change:** two extra
  Meta pulls (ad-level auction-quality/hook-retention diagnostics; campaign×placement) + GA4
  `addToCarts`/`checkouts` funnel metrics added to the campaign×source/medium pulls. Cycle 13 (ISO week
  36) and cycle 15 (ISO week 38) were DEEP_WEEKs — both ran the full diagnostics. Cycle 14 (ISO week
  37) was correctly an off-week. Next DEEP_WEEK: **2026-10-01 (ISO week 40, even)**.
- Weekly (Thu, on-demand): Competitor ad teardown — Meta Ad Library (boAt Airdopes Loop longevity + new entrants).
- Monthly: 30-day archive into `learning-log.md`.

---

## DEPENDENCIES / BLOCKERS
- **TOP PRIORITY (cycle 15): Openwire's combined-tag GA4-dir ROAS collapsed from 6.09× to 0.48×** — the
  account's most severe single-campaign reversal this cycle, escalated as MA-099, needs Meet/Ads
  Manager diagnosis (policy flag, audience-pool exhaustion, or creative rotation).
- **ES Comm 2's collapse is now total (₹0.00 every day of the trailing week), 6th consecutive unstable
  cycle** — MA-100 requests a formal keep/kill decision from Meet rather than another re-escalation.
- **safebuds_20Apr resumed spending 09-16 after ~12 dark days, cause still unconfirmed** — MA-098
  requests a 3-7 day re-verification window before treating MA-080/081 as actionable again.
- **Account TRUE ROAS remains below the 6.0 floor** — last cycle's brief clean matured read (7.45×)
  did not hold once the window rolled forward; HOLD (MA-083) stays in force, no exceptions.
- **GA4 campaign-tag mismatches confirmed structural, approved fix (MA-077) still not shipped** — now
  materially overdue given the widest own-tag/combined-tag gaps seen yet this cycle (Broad Interest,
  Openwire).
- **ES Lite and Retargeting** — ES Lite relaunched 09-16 with a fresh read-plan (MA-101); Retargeting
  remains closed via `/approvals`, not agent-actionable.
- **Format-engine stall:** the standing register (CF-31/37/51/54/55/56/59) still not delivering — CF-60
  appended this cycle (MA-104). CF-56 "Checkout-Trust Overlay" is now the single most overdue individual
  test given Broad Interest's deepening checkout leak (MA-103).
- **Creative production:** EXP-004, EXP-005 gated on instagram-content / Higgsfield producing
  review-format Reels.
- **Approval queue:** MA-098 through MA-104 (this cycle's new drafts) pending human sign-off in
  `queue-inbox.md` (never `APPROVALS_QUEUE.md` directly), alongside the still-unexecuted
  MA-034/035/037/045/053/060/067/073/076/080/081/082/083/085/087/090/095/096/097.
- Stock gates: all three main SKUs cleared as of 2026-06-27.
