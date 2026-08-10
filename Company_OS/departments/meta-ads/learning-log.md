# Meta Ads — Learning Log

> Institutional memory. `/deep-loop` appends weekly; `/standup` reads here. Never delete — supersede.
> Seeded from `[[ng-meta-ads-performance]]`, `[[ng-paid-marketing-performance-jan-may26]]`.
>
> **Trimmed 2026-08-10** (was 517 lines / ~73KB, all read by the managed agent every single scheduled
> run regardless of relevance). Full cycle-by-cycle history through 2026-07-09 moved to
> `learning-log-archive.md` — nothing lost, every learning that still matters was already folded into
> the compact sections below (CONFIRMED PATTERNS / REJECTED-DEAD-ENDS / CREATIVE-FORMAT TEST ENGINE /
> SCALE HYPOTHESIS BACKLOG) before the cut. **The managed agent does not need to read the archive** —
> if you're the agent and a cycle log entry below references something you can't find, it's compact
> for a reason: work from the compact sections, not from reconstructed history.

## HOW TO LOG
```
DATE | INITIATIVE | HYPOTHESIS | RESULT (confirmed/rejected/inconclusive) | LEARNING CARRIED FORWARD
```

## CONFIRMED PATTERNS (institutional truths)
- ~87.6% of buyers decide same-day — ad must carry "what is open ear + why this one" in 30s.
- Proven winners: Gadgetbhai_Comm 2.0 (CPP ₹291, ROAS 11.4×), 3D Feature-Lite (₹265, 10.7×), Techopedia_SafeBuds (₹329, 9.2×).

## COMPETITOR INTEL LEDGER (most recent read per competitor — full week-by-week history in `learning-log-archive.md`)
| Date | Competitor | Latest read | NG counter-action |
|---|---|---|---|
| 2026-07-03 | boAt (page id 786827864757998) | Full-account pull (106 ads): mixed catalog push + **"All-Day Comfort That Clips On Easy"** (clip-on open-ear, active, fresh). Comfort/lifestyle framing, no health/education angle. | 3rd consecutive week confirming: boAt owns lifestyle/comfort on clip-on open-ear; NG's health/education hook (WHO stat) remains unclaimed. |
| 2026-07-03 | Grodd India (page id 115364328166381) | 9 active/recent ads, unchanged two-cluster structure (discount/urgency + comfort pain-point) since March 2026. | No format evolution in 3+ months — differentiated angle confirmed still open. |
| 2026-07-03 | Shokz / Noise / wecool / Mojawe / Oladance | Zero India/INR-currency open-ear ads detected, 3rd consecutive weekly check. | **Confirmed 3-week stable pattern — the open-ear Meta India category is a 2-player paid field (NG vs. boAt+Grodd). Re-verify monthly, not weekly**, per the cycle-4 (2026-07-03) learning. |

## REFERENCE: META DNB GUIDEBOOK 2025 (Early-Stage lens)
> Source: Meta "Guidebook for Digital Native Brands 2025" (with Fireside Ventures, Sauce.vc, DSG, Huddle, Titan Capital, Whiteboard). Filtered for NG's stage: **Early Stage (<50Cr ARR)**, India-only, D2C+Amazon, self-funded (₹65L MRR / 5–6% EBITDA north star). This is a standing reference — re-read whenever ideating or analyzing any Meta task. Full detail in memory `[[ng-meta-dnb-guidebook]]`.

**Where we sit in the guidebook's growth-stage framework:** Early Stage → PMF/category-creation focus, D2C+marketplace+messaging distribution, fence-sitter acquisition (not saturation/retention plays), tight CX feedback loop. Confirms: our whole job right now is category education (open-ear) + efficient fence-sitter conversion — NOT scale-at-all-costs.

**Performance 5 (foundations that unlock AI) — mapped to our gaps:**
1. Account Simplification — proof: 19% lower CPA when ad sets exit learning phase. **NG gap: 7 fragmented campaigns / overlapping LAL audiences (constitution + performance memory) repeatedly re-enter learning phase.** Action lens: consolidate before adding new campaigns; batch-edit, don't drip-edit.
2. Automation (ASC) — proof: +32% ROAS. **NG has never run Advantage+ Shopping.** Net-new lever to test, not yet evidenced for us.
3. Creative Diversification — proof: +32% efficiency when creatives are visually distinct (only +2% if too similar); +9% incremental reach. **Directly validates our institutional truth: review/explainer beats feature/UGC because it's a genuinely different route (educational, not showcase) — not just a different edit of the same idea.** Also flags a NEW risk: our current 2 winners (Gadgetbhai, Techopedia) may look too similar to each other (both reviewer-POV) — diversify the *routes*, not just produce more of the same reviewer format.
4. Data Quality (CAPI + Pixel, high-match params, dedupe) — proof: 13% cost-per-result improvement. **NG has a confirmed, quantified problem here: 138x Meta/GA4 discrepancy from broken UTM tags (`ng-product-page-cro`), and Meta-claimed ROAS 9.1x vs GA4 last-click 1.6x vs true estimate ~4.5-5.5x (`ng-paid-marketing-performance-jan-may26`). This is the single highest-leverage, most evidenced fix in the whole guidebook for us.** **Cycle 5 (2026-07-14) update: this exact failure mode recurred — 2026-07-13 GA4 traffic had 70.3% of session revenue land as `(not set)/(not set)`, the same tagging-break pattern, now affecting the live TRUE ROAS floor read directly (see cycle 5 entry below). This is no longer a historical data-quality note — it is actively distorting the account's most important number in real time.**
5. Results Validation (A/B, lift, MMM) — proof: orgs investing in measurement 44% more likely to exceed revenue goals. **NG has zero formal lift/MMM testing — the 3-month test matrix (EXP-001–008) is directionally this, but reads are CPP/ROAS trend, not incrementality.**

**Reels Creative Essentials:**
- 9:16 + sound-on + safe zone (bottom 35%, top ~14%, side 6% clear) = 34.5% lower CPA than image, 15% lower than non-optimized video, 2x delivery, +39% CTR vs safe-zone violators. **Action lens: audit whether Gadgetbhai/Techopedia/EXP-001-005 creative briefs specify safe-zone framing explicitly — currently our brief template (§5c) does not.**
- Partnership/creator ads as always-on: -19% CPA, +53% CTR. **We already lean on named reviewers (Gadgetbhai, Techopedia) — this is validation to formalize them as an "always-on partnership" line, not one-off Reels.**

**Business Messaging / WhatsApp — highest-relevance chapter for NG right now:**
- 86% of Indian online adults message a business weekly; WhatsApp full-funnel (CTWA discovery → guided shopping → reminders → utility purchase msgs → personalized re-engagement) shows +61% avg ROAS in Meta cases.
- **NG's own data already proves this channel: WhatsApp/Bitespeed CVR is 4.93% — the single best-converting channel on the entire account, beating Meta paid social, Google, even organic search** (`ng-paid-marketing-performance-jan-may26`). And there are 1,111 unworked abandoned checkouts (₹36.8L) with zero retargeting follow-up for most of the period.
- **This is the guidebook chapter with the clearest, most evidenced NG action: build CTWA ads that route cold/warm Meta traffic into WhatsApp instead of (or alongside) the website, and pair with a WhatsApp abandoned-checkout recovery sequence.** This was flagged as Top-7 Problem #2 in the paid-performance memory and has not yet been executed as a Meta creative/campaign structure.

**Full-Funnel:**
- Blending upper+mid+lower funnel: +70% ROI (adding upper to mid), Reach-alongside-DR: +2x reach / +31% incremental sales at +25% spend. **NG currently has almost no TOFU layer.** One awareness exception — "Kannada office reel_Safebuds_Live translation" at 3.42M reach, ₹0.025/thruplay — is working as an unintentional TOFU test.
- **Caution for our stage:** full-funnel is a saturation-relief play for accounts that have run out of room in performance-only buying. NG is not yet saturated at the account level (LAL 1% pools of 25-30K, not exhausted at scale) — the honest read is our TOFU gap is really a retargeting-pool-refill problem (pools exhausting in 6-8 weeks) more than a "we've maxed performance, time to go upper-funnel" problem. Treat full-funnel as Month 2-3 lever once Performance 5 fixes (account simplification + data quality) are done, not a first move.
- **Cycle 5 (2026-07-14) tension flagged:** the Kannada TOFU reel has now shown 0 platform-attributed purchases for 14 straight consecutive days (₹4,823.46/7d) — the "unintentional TOFU test" framing above has never been validated against an actual pool-health metric. MA-028 (queue-inbox) is a direct falsifiable test of this exact open question: pause it, watch Retargeting reach/frequency for 7-14 days, see if it actually matters.

**Explicitly DEFERRED for NG's stage (do not action, re-evaluate only when triggers hit):**
- Cross-border chapter (Bid Multiplier, Multi-Language Ads, Web2App, Dynamic Ads by country/language) — only relevant once the UAE demand test (`ng-uae-market-context`) passes pass/fail thresholds. Until then, India-only.
- Hyper-Growth/Expansion chapter tactics (offline, app-retention, saturation-scale plays) — NG is Early Stage, not Growth/Hyper-Growth; these assume PMF is done and category is established. Ours is still being created.
- Blind ASC/Advantage+ full account migration — the guidebook's automation proof (+32% ROAS) is real, but do not hand full budget/targeting control to Advantage+ before the account's own data-quality problem (CAPI/UTM) is fixed — automation on bad signal amplifies the bad signal.

**Standing rule:** every future Meta ideation/analysis session should check new creative briefs and audience/spend tests against this Performance-5 + Reels + WhatsApp + Full-Funnel lens before drafting, and flag explicitly which guidebook proof-stat motivates the test (or note NET-NEW if none applies).

## REJECTED / DEAD ENDS
- Non-Techopedia SafeBuds creatives — ₹4,075 spent, ROAS <3× or zero. Do not retry feature/UGC/static for SafeBuds.
- Dayparting / time-based budget redistribution (founder hypothesis, Jul-9-2026) — rejected on hourly data. Spend is NOT front-loading before 11 AM (Meta 27–35%, Google 28–37% of daily spend pre-11AM; Meta's heaviest hours are 8–11 PM). Pre/post-11AM ROAS flips daily on 10–15 orders/day — no stable hour-of-day edge to exploit. Full data in archive. Re-open only with a 14–30 day hourly aggregate showing a persistent gap.

---

## CYCLE LOG (most recent first — cycles through 2026-07-09 archived in `learning-log-archive.md`)

### 2026-07-15 — PDP-CVR-by-campaign teardown (ad-hoc, CEO-run): the ThruPlay traffic flood
**Initiative:** manual GA4-via-Windsor teardown of Comm 2.0 + SafeBuds PDP conversion by source/medium and by campaign, last 3M (15 Apr–14 Jul 2026). Validated the process now compiled into the weekly Thursday loop (per-campaign CVR, week/week, MTD).
**Hypothesis:** the Comm 2.0 PDP blended CVR collapsing (April ~1.9% → July ~0.24%) is a page/creative problem.
**Result: REJECTED — it's a traffic-mix problem, one objective-mismatched campaign cluster.**
- Comm 2.0 PDP (`/products/…-comm-2-0`): 95,748 sessions → 425 orders → ₹14.3L, blended CVR **0.44%**. But two **"MOFU_PDP & Video Thruplay _24 May 26"** campaigns (+ "TOFU_Awareness_23 May 26" + the ThruPlay test-copy), all launched 23–24 May, ran **~75,700 sessions = 72% of all Meta paid traffic for ~7 orders (~0.01% CVR)** — exactly when blended CVR fell off the cliff. Root cause: **ThruPlay / video-view optimization buys the cheapest eyeballs, not buyers.**
- Strip those 4 campaigns and **real Meta paid converts at ~2.1%** (28,713 sessions → 613 orders → ₹19.3L). The page isn't broken.
- Proof that the fix is the objective, not the tag: **"ES Comm 2 – Max Conv Bidding" (2.29% CVR) beats standard "ES Comm 2" (1.90%)** on the same product/audience.
- **safebuds_20Apr 26 is the engine** (272 orders, ₹8.0L, 2.62% CVR = 44% of all Meta paid revenue). Under-scaled winners: **Reel_Lite_Mr Lazy (6.43% CVR)**, 3D Video Comm (3.51%) — tiny session counts, worth deliberate budget tests.
- SafeBuds PDP (`/products/ngwehear`): 20,379 sessions → 116 orders, CVR **0.57%**; NOT the same flood (ThruPlay only 17% of its traffic). Its June collapse (8,603 sessions → 14 orders) has a **stockout signature** (3–11 Jun: ~2,500 sessions, 0 orders) — availability, not marketing. Its Meta paid CVR (0.49%) is ~4× worse than Comm 2.0's clean Meta (1.88%) — a separate CRO/creative gap.
**Learning carried forward:** (1) judge campaigns on CVR, not session volume — a cheap high-volume campaign can be pure waste and can bury a healthy page's blended CVR; (2) GA4 exposes `campaign` + `page_path`, so per-campaign CVR is computable (normalise names: fb/ig split + `+`-encoded spaces); (3) the ThruPlay cluster is being optimized already — this is a session finding, kept here, NOT written into the constitution. Method now lives as the weekly Thursday teardown steps.

---

### 2026-07-14 — Cycle 5 (Monday teardown, run one day late on Tue; first cycle under the fixed TRUE-ROAS-vs-GA4 protocol set by Meet 2026-07-14)

**Initiative:** First full teardown under the new mandate: TRUE ROAS = Meta spend ÷ GA4 Meta-paid
revenue (7d, `classify()` verbatim), floor = 6.0, marginal-ROAS-gated scaling. Three Windsor pulls:
Meta campaign×day (30d, 2026-06-14→07-13, 182 rows), Meta ad×day (14d, 2026-06-30→07-13, 249 rows),
GA4 (7d, 2026-07-07→07-13, 225 rows, truncation guard passed — 7 dates, ≥12 rows/day). Reconciled
ad-level spend to campaign-level spend per campaign for the last-7d window (5 of 6 campaigns matched
within ₹0.02–₹6.85, consistent with placement-level rounding in Windsor's `facebook` connector, not a
missing-row signal); reconciled GA4 raw revenue sum to the grouped-by-channel sum exactly (diff
0.0000).

**Hypotheses tested / findings:**

1. **What is the account's trailing-7d TRUE ROAS, and does it clear the new 6.0 floor?**
   **Result: 5.43× reported — below floor, but confounded by a live data-quality break.** Spend
   ₹46,909.58, GA4 Meta-paid revenue ₹2,54,818.85 (classify() verbatim; platform claims ₹4,43,166.60 /
   9.45× — a 73.9% overclaim, inside the normal 40–120% band, so attribution is not structurally
   broken account-wide). But 2026-07-13 — the last day in the window — had 70.3% of its GA4 session
   revenue land as `(not set)/(not set)` (₹49,577.45 of ₹70,509.55), the same anomaly the 2026-07-13
   daily brief already flagged as unresolved a day earlier. Excluding that one day: 6-day TRUE ROAS =
   ₹39,313.85 spend ÷ ₹2,38,803.85 GA4 Meta-paid = **6.07×** — at/above floor. Imputing 07-13's likely
   Meta-paid share from the other 6 days' average revenue-share (48.7%) gives an all-7-day estimate of
   **≈5.82×**. **Verdict: the account is sitting essentially ON the 6.0 line, not decisively below it
   — the reported miss is at least partly a measurement artifact, not a confirmed performance
   collapse.** Per the mandate, ambiguity here still means no budget increase this cycle (can't scale
   on doubt), but it also means no panic-cut of otherwise-healthy campaigns based on the headline
   number alone.

2. **Is any SKU/creative breaching the hard CPP/ROAS kill floors (SafeBuds >₹700/<3×; Comm 2.0 & ES
   Lite >₹450/<5×)?**
   **Result: no hard breach, but one close call.** All SafeBuds ads are far inside the floor (CPP
   ₹142–₹295, ROAS 9.70×–17.80× last 7d). Comm 2.0/ES Lite: Custom Reel - 23 May 26 Comm is at CPP ₹437
   / ROAS 7.56× — inside the floor (>5×) but the weakest ad in its own adset by a wide margin
   (Gadgetbhai 11.20×, Merged 12.95× on the identical audience) and closing in on the ₹450 line. This
   is the same creative the cycle-3 LAL teardown already diagnosed as a format problem (feature/caption
   Reel vs. the review-format winners) — MA-030 drafts a non-budget rotation, not a full kill, since it
   hasn't actually breached the floor.

3. **Is any spend converting at zero — a clean CUT?**
   **Result: yes, two ads, both zero-purchase for all 14 days pulled.** MOFU_GadgetbhaiReel_Comm_26May26
   (₹3,433.94 last 7d, ~₹500/day, landing-page-view objective, never once converted in the pull) — a
   clean cut with no institutional ambiguity (MA-027). The TOFU Kannada office reel (₹4,823.46 last 7d,
   also 0 purchases every day) is institutionally defended as a pool-feed/awareness play that has never
   actually been validated against a pool-health metric — this is a genuine open question, not a
   settled one, so it gets a proper pause-and-measure TEST (MA-028) instead of a blind kill.

4. **Frequency check — any creative past the 2.5× rotation gate?**
   **Result: none, at the ad level — but this cycle can't see the pool-level number that matters most.**
   Max ad-level frequency across the entire 14d pull is 1.64× (a one-day peak on Safebuds_Unboxing
   Reel). The last confirmed pool-level (campaign-level) frequency read was Retargeting at 2.89× on
   2026-07-03 — past the gate — and this cycle's campaign pull did not request a `frequency` field, so
   that number was not re-verified. **Data-gap logged: add campaign-grain frequency to the next pull.**
   Ad-level frequency structurally understates pool fatigue because it doesn't dedupe reach across the
   multiple ads sharing one adset/audience.

5. **Regional-language tests (MA-024 SafeBuds Gujarati, MA-025 Comm 2.0 Telugu) — did they launch, and
   is there anything to read yet?**
   **Result: launched on schedule 2026-07-13; day-1 only, deliberately not concluding.** Gujarati
   SafeBuds reel: ₹745.07 spend, 4 purchases, ₹11,416 platform revenue, 15.32× platform ROAS, freq
   1.25× — directionally encouraging but n=1 day. Telugu Comm 2.0 ad: ₹36.90 spend, 0 purchases — too
   small to read at all. Both hold to the pre-set 2026-07-20 decision date (SH-MA-7/SH-MA-8); no new
   draft needed.

6. **Marginal ROAS — is there a recent budget step to test the margin against?**
   **Result: no clean single-variable step in the last 14 days to test.** The last approved budget
   change (MA-004, Techopedia SafeBuds to ₹2,500/day) landed 2026-06-30, over two weeks ago, and has
   long since been absorbed into a stable run-rate (7d spend ₹16,509.29, ROAS 9.70×, still clean). A
   naive half-week-vs-half-week split of the last 7 days shows revenue *falling* as spend rose
   (implying a negative marginal ROAS), but this is fully explained by the 2026-07-13 tagging break
   landing in the second half — **not a real signal, discarded rather than reported as a finding.**
   Genuine marginal-ROAS reads require both a real budget step AND clean attribution around it; neither
   condition is currently met. No budget step is being proposed this cycle regardless (floor
   ambiguity already rules it out).

**Actions this cycle:** MA-027 (CUT — pause zero-purchase MOFU ad), MA-028 (TEST — pause TOFU Kannada
reel for 7-14d, measure Retargeting pool health + blended TRUE ROAS, do not redeploy the freed spend),
MA-029 (FIX/escalation — GA4 tagging break, no Meta-side change), MA-030 (non-budget creative-mix
rotation in ES Comm 2 + small kill of a dead Retargeting carousel ad).

**Learning carried forward:**
- The TRUE-ROAS floor is a knife-edge metric at NG's current data quality — a single day's tagging
  break can swing the trailing-7d read by ~0.6× (5.43× vs the corrected ~5.8–6.1× range). Before
  treating any single trailing-7d TRUE ROAS reading as a hard verdict, sanity-check the daily GA4
  `(not set)` share for every day in the window; a spike in any one day should trigger the
  ex-that-day recompute shown here, not an automatic floor-breach conclusion.
- Zero-purchase-for-14-days is a strong, clean CUT signal for a directly-conversion-optimized ad
  (MOFU_GadgetbhaiReel) but the same signal on a TOFU/awareness-labeled ad (Kannada reel) is not
  automatically a cut — it needs its own falsifiable test given institutional history explicitly
  defends it as a pool-feeder. Don't apply one rule to both without checking the ad's stated
  objective/role first.
- Ad-level frequency and campaign(pool)-level frequency are different numbers that can diverge
  sharply — always confirm which grain a frequency figure is measured at before using it for a
  rotation/kill decision; this cycle's pull only had the (structurally lower) ad-level number.

---

## CREATIVE-FORMAT TEST ENGINE — the format library (always 2–3 trials live)

> **Purpose:** review/explainer is a *confirmed* winner and our anchor — but not the only format that can convert. This engine keeps hunting for **additional** winning formats so we can scale further, tap fresh audiences, and de-risk single-format dependency. **This is an OPEN, living library, not a fixed list** — Block A is the founder's seed references, Block B is expert-added D2C direct-response formats, and **every cycle the agent appends ≥1 net-new format idea** (the "one new falsifiable bet" TEST verdict). The catalog grows; it is never "finished." Never delete a row — supersede it.
>
> **Engine rules (every weekly run):**
> 1. **Keep 2–3 formats `IN TEST` at all times.** If fewer are live, rotate the next `UNTESTED` format(s) in as a TEST verdict; append any new format idea to the bottom of the table.
> 2. **Each trial = a challenger ad inside an existing winning ad set** (the SH-MA-7/8 mechanism — an extra ad at small daily spend, read at ad level vs. the ad set's live controls), executed in NG's converting voice, **against a review-format control**. ~₹5,000 / 7-day read.
> 3. **Funded by reallocation off the weekly CUT list — NEVER net-new budget while TRUE ROAS < 6.0 floor.** Always-on testing must stay floor-safe.
> 4. **Lifecycle:** `UNTESTED → IN TEST → VALIDATED` (clears the control / scale bar: ROAS ≥ control-or-8×, CPP ≤ SKU floor, freq < 2.5× on ≥7-day read → promote to the winner rotation **and** log a new `SH-MA-#` scale bet in the backlog below) `→ REJECTED` (log to REJECTED / DEAD ENDS above with the number; never blindly retry).
> 5. A format is only ever a **controlled challenger** until it earns primary status by clearing the bar — an unvalidated format is never made the primary converter.

**Block A — founder seed references.**

| # | Format | Angle / psych lever | Status | Best ROAS seen | Verdict / notes | Linked EXP/MA |
|---|---|---|---|---|---|---|
| CF-1 | One problem, one ad | Whole ad about a single painful problem | UNTESTED | — | — | — |
| CF-2 | Buying-mistake warning | "Before you buy, here's the common mistake to avoid" | UNTESTED | — | — | — |
| CF-3 | What no one tells you | Expose an uncomfortable category truth | UNTESTED | — | — | — |
| CF-4 | Cost breakdown | Show where the money actually goes | UNTESTED | — | — | — |
| CF-5 | Who this is NOT for | Disqualify aggressively to build trust | UNTESTED | — | — | — |
| CF-6 | Day in the life | Product fitting naturally into a real day | UNTESTED | — | — | — |
| CF-7 | Wrong way vs right way | Contrast the common mistake with our solution | UNTESTED | — | — | — |
| CF-8 | Ingredient / material deep-dive | Why one component truly matters | UNTESTED | — | — | — |
| CF-9 | Customer objection | Address the #1 hesitation head-on | UNTESTED | — | — | — |
| CF-10 | The moment of switch | Why users left the alternative | UNTESTED | — | — | — |
| CF-11 | Why we didn't make it cheaper | Why quality couldn't be compromised | UNTESTED | — | — | — |
| CF-12 | Founder mistake story | A lesson learned the hard way | UNTESTED | — | — | — |
| CF-13 | How long this actually lasts | Honest on durability / results | UNTESTED | — | — | — |
| CF-14 | Unboxing with context | Why every element exists | UNTESTED | — | — | — |
| CF-15 | "If you care about ___, watch this" | Anchor to a strong value | UNTESTED | — | — | — |
| CF-16 | We almost didn't launch | What nearly stopped the brand | UNTESTED | — | — | — |
| CF-17 | Comparison without naming competitors | Differentiate without calling names | UNTESTED | — | — | — |
| CF-18 | First-time user POV | Genuine unscripted reactions | UNTESTED | — | — | — |
| CF-19 | Results timeline | Set expectations for day 1 / 7 / 30 | UNTESTED | — | — | — |
| CF-20 | Why we exist | The brand's reason for being | UNTESTED | — | — | — |
| CF-21 | Expectation reset | Clearly state what the product will NOT do | UNTESTED | — | — | — |
| CF-22 | One customer, one story | Deep-dive a single customer journey | UNTESTED | — | — | — |
| CF-23 | Why it costs this much | Pricing explained simply | UNTESTED | — | — | — |
| CF-24 | Old way vs new way | How the category has evolved | UNTESTED | — | — | — |
| CF-25 | The silent upgrade | Benefits people feel over time | UNTESTED | — | — | — |
| CF-26 | What we removed | What we intentionally excluded | UNTESTED | — | — | — |
| CF-27 | The first ten customers | How early buyers shaped the product | UNTESTED | — | — | — |
| CF-28 | Behind the test results | Demystify quality / safety testing | UNTESTED | — | — | — |
| CF-29 | This shouldn't be normal | Call out broken category norms | UNTESTED | — | — | — |
| CF-30 | Long-term cost | How cheap options cost more over time | UNTESTED | — | — | — |

**Block B — expert-added D2C direct-response formats** (proven patterns, tuned to NG's open-ear hearing-health angle; grouped by the psychological lever they pull).

| # | Format | Angle / psych lever | Status | Best ROAS seen | Verdict / notes | Linked EXP/MA |
|---|---|---|---|---|---|---|
| CF-31 | Expert / audiologist explainer | Authority — ENT/audiologist on "the science of open-ear" (strongest fit for NG's hearing-health moat) | UNTESTED | — | — | — |
| CF-32 | Data / number hero | Authority — specificity heuristic ("94% stopped removing an earbud to hear traffic") | UNTESTED | — | — | — |
| CF-33 | Demonstration / "watch it work" | Authority — show-don't-tell the open-ear mechanism | UNTESTED | — | — | — |
| CF-34 | Review-wall montage | Social proof — rapid real-review screenshots | UNTESTED | — | — | — |
| CF-35 | "X,000 Indians switched" | Social proof — bandwagon / safety-in-numbers | UNTESTED | — | — | — |
| CF-36 | Skeptic-to-believer | Social proof — "I was sure open-ear was a gimmick…" | UNTESTED | — | — | — |
| CF-37 | Fear-of-loss health hook | Loss aversion — "what sealed earbuds are doing to your hearing" (WHO-stat, on-brand) | UNTESTED | — | — | — |
| CF-38 | Guarantee / risk-reversal | Loss aversion — money-back, "try it risk-free" | UNTESTED | — | — | — |
| CF-39 | Open-loop hook | Curiosity — Zeigarnik ("the reason your ears ache by 4pm…") | UNTESTED | — | — | — |
| CF-40 | Myth vs fact | Curiosity — correct a false category belief | UNTESTED | — | — | — |
| CF-41 | Anti-ad / "this isn't an ad" | Pattern interrupt — novelty | UNTESTED | — | — | — |
| CF-42 | Problem-Agitate-Solve (PAS) | DR framework — classic direct-response structure | UNTESTED | — | — | — |
| CF-43 | 3-reasons listicle | DR framework — cognitive chunking | UNTESTED | — | — | — |
| CF-44 | Before / after transformation | DR framework — contrast effect, visual proof | UNTESTED | — | — | — |
| CF-45 | POV trend format | Native — relatable, platform-native | UNTESTED | — | — | — |
| CF-46 | Green-screen creator reaction / stitch | Native — commentary on a claim | UNTESTED | — | — | — |
| CF-47 | "Stop scrolling if you…" qualifier hook | Native — self-selection | UNTESTED | — | — | — |
| CF-48 | "We spent 2 years tuning this driver" | Effort justification — labor-illusion | UNTESTED | — | — | — |
| CF-49 | Founder reads a 1-star review | Objection / trust — vulnerability → reactance reversal | UNTESTED | — | — | — |
| CF-50 | FAQ "you asked, we answered" | Objection handling — objections at scale | UNTESTED | — | — | — |

*(Block B is a starting expansion, not exhaustive — append `CF-51+` as new formats are conceived each cycle.)*

---

## SCALE HYPOTHESIS BACKLOG (per COMPANY_STATE §5.5 — test → validate → scale at constant ROAS)

> Standing list of falsifiable scaling bets. Each must clear the Meta scale bar (ROAS ≥ 8×, CPP ≤ SKU floor, freq < 2.5×) on a small test before earning scale budget; each scaled lever gets a standing ROAS watch and reverts here on decay.

| # | Hypothesis (metric + threshold) | Test (smallest move) | Status | Linked queue |
|---|---|---|---|---|
| SH-MA-1 | LAL campaign (52576570206220) re-launch with Gadgetbhai creative only. | Removed from active pursuit — MA-012 rejected 2026-06-30. **Cycle 4 update:** the campaign is now PAUSED with zero delivery regardless of creative mix (see MA-018) — the creative-mix question is moot until the campaign is confirmed running again. | STALLED — campaign dark, not a creative-mix problem right now. Still dark as of cycle 5 (2026-07-14). | MA-012, MA-018 |
| SH-MA-2 | A new review/explainer Comm 2.0 creative beats the Custom Reel's ROAS and clears the 8× bar. | **Cycle 4 update: hypothesis partially overtaken by events.** Custom Reel itself recovered to 10.50× ROAS this week (from 4.95× the prior week) without any creative swap — it now clears the 8× bar on its own. Hold off shipping a replacement creative until a second consecutive weak week confirms real decay. **Cycle 5 update: decayed again (CPP ₹437, ROAS 7.56×, weakest in its adset) — now RE-OPENED, non-budget rotation drafted (MA-030).** | RE-OPEN — rotating this cycle, not just watching. | MA-003, MA-006, MA-012, MA-030 |
| SH-MA-3 | boAt clip-on open-ear ads on Meta India do NOT erode NG SafeBuds CPP over 4 weeks — health/education hook stays differentiated from boAt's lifestyle/feature framing. | Watch SafeBuds CPP/ROAS week-on-week alongside boAt ad longevity check. | CONFIRMED so far — 3+ consecutive weeks, SafeBuds CPP has IMPROVED (₹343→₹210→₹295 cycle 5, still well inside the ₹380 hold line) not degraded while boAt stayed active with fresh comfort-angle creative. Keep watching. | MA-004 |
| SH-MA-4 | Broad audience (no LAL constraint) with Techopedia SafeBuds review creative achieves CPP ≤ ₹291 and ROAS ≥ 8× within 7 days (EXP-002). Meta Andromeda 2026 signal: creative IS the targeting. | ₹10K test, 7-day read, broad India interest layer only. | OPEN — MA-013 rejected 2026-06-30 for insufficient analysis; needs re-brief to the BRIEF & TEST STANDARD before re-queuing. Not sequenced this cycle either (account-wide floor hold on new spend). | MA-013 |
| SH-MA-5 | ES Lite review Reel (EXP-003) achieves CPP ≤ ₹265 and ROAS ≥ 8× within 7 days on fresh interest audience. Unlocks a third revenue line now stock is cleared. | ₹10K test, 7-day read, ES Lite interest audience. | **SUPERSEDED BY EVENTS (cycle 5)** — ES Lite relaunch (MA-022) already clearing CPP ₹142–₹409 / ROAS 6.39×–13.89× on the existing creative set; a separate net-new interest-audience brief is not the next priority. | MA-014, MA-021, MA-022 |
| SH-MA-6 | SafeBuds LAL 3–5% expansion with health/education hook (EXP-004) holds ROAS ≥ 10× and CPP ≤ ₹350 within 7 days — validating both the audience expansion AND the health-hook creative together. | ₹12K test, 7-day read, LAL 3–5% + new health-hook creative. | OPEN — MA-015 rejected 2026-06-30 for insufficient analysis; needs re-brief. Not re-queued this cycle — account-wide floor hold on new spend takes priority over sequencing a new audience-expansion test. | MA-015 |
| SH-MA-7 | (EXP-006) Gujarati-voiceover SafeBuds review Reel, added as a 3rd ad inside the existing SafeBuds LAL 1% ad set (no new ad set, no geo constraint), matches/beats the ad set's blended CPP ₹258.08 and clears ROAS ≥8× within 7 days at ₹800/day. NET-NEW BET — no prior Purchase-optimized regional-language creative; only adjacent, non-predictive signal is the Kannada awareness reel (THRUPLAY, no purchase data). | ₹5,600 test (₹800/day × 7d), read at ad level vs. the two live SafeBuds controls. | LIVE — launched 2026-07-13. Day 1: ₹745.07 spend, 4 purchases, ₹11,416 rev, 15.32× platform ROAS, freq 1.25×. **Must be read independently of SH-MA-8 — do not pool into one "regional language" conclusion (product + language both differ between the two tests).** Decision date 2026-07-20. | MA-024 |
| SH-MA-8 | (EXP-007) Telugu-voiceover Comm 2.0 review Reel, added as a 5th ad inside the existing Comm 2.0 LAL 1% ad set (no new ad set, no geo constraint), matches/beats the ad set's blended CPP ₹242.21 and clears ROAS ≥8× within 7 days at ₹600/day. PURE NET-NEW BET — Comm 2.0 has zero prior regional-language creative of any kind (not even an awareness precedent). | ₹4,200 test (₹600/day × 7d), read at ad level vs. the three live Comm 2.0 controls. | LIVE — launched 2026-07-13. Day 1: ₹36.90 spend, 0 purchases — too small to read yet. Decision date 2026-07-20. Confound: Comm 2.0 PDP's documented 1.8% ATC leak (0.38% CVR per the 2026-07-13 daily brief) may drag the ROAS read independent of creative quality — check ViewContent→ATC rate for this ad specifically before concluding language didn't work. | MA-025 |
| SH-MA-9 (NEW, cycle 5) | Pausing the TOFU Kannada office reel (zero platform-attributed purchases, 14 consecutive days, ₹4,823.46/7d) does not measurably shrink the Retargeting campaign's reach/pool health, and blended TRUE ROAS improves by narrowing the gap to the 6.0 floor — testing whether the institutionally-assumed "TOFU feeds the retargeting pool" role is actually true or just an untested assumption carried since cycle 1 (2026-06-27). | Pause the single ad for 7–14 days; no budget redeployed elsewhere. Re-read Retargeting reach/frequency (needs a campaign-grain frequency pull — gap flagged this cycle) and blended TRUE ROAS at D+7 and D+14. | **NEW — drafted 2026-07-14.** | MA-028 |
