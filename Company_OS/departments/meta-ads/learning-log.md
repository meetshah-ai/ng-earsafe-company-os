# Meta Ads — Learning Log

> Institutional memory. `/deep-loop` appends weekly; `/standup` reads here. Never delete — supersede.
> Seeded from `[[ng-meta-ads-performance]]`, `[[ng-paid-marketing-performance-jan-may26]]`.

## HOW TO LOG
```
DATE | INITIATIVE | HYPOTHESIS | RESULT (confirmed/rejected/inconclusive) | LEARNING CARRIED FORWARD
```

## CONFIRMED PATTERNS (institutional truths)
- ~87.6% of buyers decide same-day — ad must carry "what is open ear + why this one" in 30s.
- Proven winners: Gadgetbhai_Comm 2.0 (CPP ₹291, ROAS 11.4×), 3D Feature-Lite (₹265, 10.7×), Techopedia_SafeBuds (₹329, 9.2×).
- **NEW (2026-08-06, cycle 8/correction):** broad-audience targeting with a winning review-format
  creative (no LAL constraint) reliably clears the 8× scale bar once given a real week of organic
  delivery — GA4-directional ROAS on "Broad Interest Based-24 Jul 26" hit 8.97× this week, up from
  6.84× the week before, as spend grew 65.7%. This validates EXP-002/SH-MA-4, open since 2026-06-30.
- **NEW (2026-08-13, cycle 9):** a single hero creative can be carrying the large majority of an
  adset's spend (Techopedia Safebuds Reel_17May 26 at 88% of safebuds_20Apr's cur7d spend) with CPP
  climbing steadily (+32.6% over 4 cycles) while ad-level frequency stays nowhere near the 2.5% gate —
  confirming that CPP creep from over-concentration can precede a frequency-visible fatigue signal by
  weeks. Don't wait for frequency to hit 2.5× before treating rising CPP on a dominant creative as a
  mix problem worth fixing.
- **NEW (2026-08-13, cycle 10):** ad-level hook/retention diagnostics (`video_p25_watched_actions` vs
  impressions, and vs `video_p75_watched_actions`) expose a 4× spread in hook-landing rate across live
  ads (3.07%–12.7% of impressions) with no format-level explanation tested yet — and the account's
  best hook this cycle (Openwire's hero ad) also has among the weakest mid-video retention (only 24.0%
  of p25-reaching viewers continue to p75). Hook quality and body-retention are independent problems;
  diagnose and fix them separately (re-edit the body vs. re-shoot the open), don't treat a video ad's
  underperformance as one undifferentiated "bad creative" verdict.
- **NEW (2026-08-20, cycle 11):** platform-claimed ROAS can look healthy on a campaign whose
  GA4-directional ROAS has already fallen below the 6.0 floor — this cycle safebuds_20Apr (the
  account's largest campaign, 48.6% of spend) read 8.15× platform vs 5.89× GA4-directional, and
  Openwire read 6.35× platform vs 5.42× GA4-directional. Never clear a campaign as "fine" on its
  platform number alone; the GA4-directional cross-check is what catches this, same as the cycle-8
  Retargeting precedent.
- **NEW (2026-08-20, cycle 11):** a placement-exclusion CUT's basis can flip within a single week —
  safebuds_20Apr's Instagram Feed placement (flagged as the worst placement last cycle, MA-064) had
  recovered to a CPP *better* than its adset blend by this cycle, while a different placement in a
  different campaign (Broad Interest's Instagram Reels) had become the real problem. Placement
  performance needs re-verification every cycle before executing an exclusion, exactly like the
  zero-purchase-cut staleness lesson from MA-054. **2026-09-03 update: confirmed a 3rd time —
  Broad Interest's Instagram Reels itself flipped back to healthy this cycle (CPP ₹285.35, better
  than blend), and the account's real worst placement moved to a THIRD location (safebuds_20Apr's
  Facebook Reels). Placement exclusions need re-verification at every DEEP_WEEK, not just once.**
- **NEW (2026-08-20, cycle 11):** checkout→purchase conversion can collapse simultaneously across
  multiple unrelated campaigns while session→ATC and ATC→checkout hold steady in all of them — a
  pattern that points at a shared checkout-stage cause (payment/trust/technical) rather than a
  per-campaign landing-page or creative problem. When funnel diagnostics show this shape (upstream
  stages flat, only the final stage moving, across ≥2 campaigns), escalate as a technical/UX checkout
  audit, not a Meta creative/targeting lever. **2026-09-03 update: this exact pattern RECOVERED in
  both original campaigns (Broad Interest, Openwire) this cycle, confirming the shared-cause read —
  but a near-identical, isolated version of the same failure mode then appeared on a THIRD campaign
  (safebuds_20Apr) that wasn't part of the original pair. A recovered shared-checkout finding doesn't
  mean the failure mode itself is retired — keep checking C2P by campaign every DEEP_WEEK even after
  one instance resolves.**
- **NEW (2026-08-27, cycle 12):** GA4 campaign-tag mismatches are a structural, account-wide pattern,
  not isolated bugs — three separate campaigns now confirmed affected (ES Comm 2/MA-037 since
  2026-07-16; Openwire, newly found this cycle, MA-076; Broad Interest, newly found this cycle and
  worse — a 3-way merged tag shared with ES Comm 2 and safebuds, MA-077, unresolvable by combining).
  Never trust an exact Meta-campaign-name-to-GA4-campaign match without first checking for a
  differently-named or merged tag capturing the real revenue — this cycle it flipped "Openwire
  collapsed to near-zero" into "Openwire is declining but not collapsed" once combined, and made
  Broad Interest's apparent +43% organic growth unverifiable rather than a confirmed scale signal.
  Recommend a full account-wide UTM-taxonomy audit rather than continuing to patch one campaign's tag
  at a time. **2026-09-03 update: still unresolved on all 3 campaigns — Openwire's combined-tag ROAS
  moved from below-floor to above-floor (5.81×→6.09×) this cycle purely from the tag being combined
  correctly, no underlying change; Broad Interest's merged tag persists unchanged and is still
  unverifiable. A UTM fix would materially change what this account can confidently act on.**
- **NEW (2026-09-03, cycle 13):** the account's own validated, longest-standing hero creative
  (Techopedia Safebuds Reel_17May 26 — the same ad behind the ₹329/9.2× institutional reference) can
  decay all the way through its own SKU kill floor (CPP ₹1,026.02 / ROAS 2.62× this cycle, vs the
  ₹700/3× SafeBuds line) while carrying a large, unmonitored share of adset spend — and this is
  exactly the mechanism that dragged the ACCOUNT-LEVEL TRUE ROAS below its own 6.0 floor for the first
  time on both the raw AND matured reads. A single decayed hero ad in the account's largest campaign
  is enough to flip the whole account's floor status — hero creatives need the same weekly floor
  check as every other ad, not an exemption because they were once validated.
- **NEW (2026-09-03, cycle 13):** marginal ROAS can go sharply negative even when weekly spend is
  essentially flat (+0.1%/day this cycle) — this isn't only a scale-test-miss signal, it means rupees
  that were converting are actively breaking (revenue -12.6%/day on flat spend). Treat a negative
  marginal ROAS on flat spend as an efficiency-collapse alarm distinct from "we scaled too far,"
  and go straight to per-campaign/per-ad diagnostics rather than assuming a budget-side cause.
- **NEW (2026-09-10, cycle 14):** a campaign can go from "efficiency decline" to "fully dark" within a
  single week, and the two look very different in the raw pull — a day with spend ₹0.00 is not the
  same signal as a day the campaign is entirely absent from the API response. This cycle
  safebuds_20Apr went from a ₹5,130/week hero-ad floor breach (cycle 13) to zero spend on 4 days and
  literal absence from the pull on 2 more — a materially more urgent finding than an efficiency
  problem, and one that a "spend fell X%" framing alone would have understated. Always check for
  "days entirely absent from the pull" as its own signal, distinct from "days present at ₹0," on every
  live campaign each cycle.
- **NEW (2026-09-10, cycle 14):** when one campaign is cut/paused/decays away, the account's remaining
  spend can concentrate hard into whichever campaign is still healthy — this cycle Broad Interest went
  to 79% of the account's live spend purely because safebuds_20Apr and ES Comm 2 both went dark, not
  because Broad Interest itself scaled. A campaign-level concentration risk can emerge passively, the
  same way the safebuds hero-ad's ad-level concentration risk did in cycle 9 — watch the account's
  spend distribution across campaigns every cycle, not just each campaign's own trend.

## COMPETITOR INTEL LEDGER (build from each weekly teardown)
| Date | Competitor | Ad type / format | Hook | Apparent longevity | NG counter-action |
|---|---|---|---|---|---|
| _seed_ | — | — | — | — | start logging from first teardown |
| 2026-07-03 | boAt (page id 786827864757998, verified) | Full-account pull (106 total ads): mixed catalog push (multi-product carousel: Stone 350 speaker, Rockerz 330, Wave Fury, Airdopes Ace etc.), a new speaker push ("Stone 900 — Groove Anywhere", ~Jul 1-2), AND — most relevant — **"All-Day Comfort That Clips On Easy"** (created ~Jun 30, still active), a clip-on open-ear form-factor ad (successor/companion to the previously-flagged Airdopes Loop). | Comfort/lifestyle claim — "clips on easy," all-day wear. No health/education framing, no stat/proof structure. | Active and fresh (1-3 days old at pull time) — boAt is still investing paid budget in the clip-on open-ear format, not a one-off test. | Confirms cycle-2 finding: boAt owns lifestyle/comfort framing on clip-on open-ear. NG's health/education hook ("what sealed earbuds do to your ears," WHO stat) remains the unclaimed differentiator — boAt has had 5+ days to pivot to an education angle and hasn't. Direct search for "boAt Airdopes Loop" now returns 0 results — the SKU/campaign name likely changed to the newer "All-Day Comfort" creative; page-id search is the reliable method going forward, not product-name search. |
| 2026-07-03 | Grodd India (page id 115364328166381) | 9 active/recent ads, same two-cluster structure as cycle 2: ~7 "Use Code BONE10 & Get 10% OFF Today!" (discount/urgency, INR) + 2 "Say Goodbye to Uncomfortable Earbuds" (comfort pain-point, INR). Newest ad ~Jun 30, still active. | (A) urgency discount; (B) comfort pain-point | Long-running, unchanged strategy since March 2026 — no format evolution in over 3 months. | No change to prior read: Grodd is anchored on price + comfort, zero health/education. NG's differentiated angle is confirmed still open after a full week of no competitor movement. |
| 2026-07-03 | Shokz / Noise / wecool / Mojawe / Oladance | Shokz: search returns only global (USD/EUR/JPY) Shokz ads — zero India/INR-currency results. Noise "open ear": 0 India results. wecool "open ear": 0 results. Mojawe: search returns unrelated spam/novel-app ads (234K+ estimated, brand name not matching anything real) — undetectable via keyword search, as in prior cycles. Oladance "open ear": 0 results. | — | Unchanged — none of these four are running India open-ear Meta ads, 3rd consecutive weekly check. | The open-ear category on Meta India remains a 2-player paid field: NG (health/education) vs. boAt+Grodd (comfort/price/lifestyle). This is now a confirmed 3-week pattern, not a one-off — treat as a stable structural read, re-verify monthly rather than assume it could flip week to week. |
| 2026-06-27 | Grodd India (bone conduction D2C) | Offer/discount Reel + static. Two distinct creative clusters: (A) "Say Goodbye to Uncomfortable Earbuds" — lifestyle/pain-point hook, INR; (B) "Use Code BONE10 — 10% OFF Today!" — pure price hook, INR. 8 active or recent ads, all INR-currency, India-targeted. | (A) pain-point/comfort angle; (B) urgency discount | Long-running — earliest ad from ~Mar 2026, still active Jun 2026. Multiple parallel variants of the BONE10 offer suggest A/B volume testing on the same hook. | NG counter: own the health/education angle they leave unoccupied. Grodd is anchored on "comfort" and "discount"; NG should be anchored on "hearing health" and "what is open ear" — a defensible position they cannot copy without undermining their price-led identity. |
| 2026-06-27 | Shokz | Zero paid ads found in Meta Ad Library for India (searched "Shokz OpenRun OpenFit India", "Shokz bone conduction headphones"). No active INR-currency ads detected. | — | Not running or not India-targeted | Gap: Shokz is absent from Meta India. NG can occupy premium open-ear territory without competing in-auction. |
| 2026-06-27 | boAt | Keyword "boAt open ear" returns 2,651 estimated ads but all visible results are spam/dropship pages (USD currency, no real boAt page). No verified boAt branded open-ear ad found in India search. | — | Cannot confirm | boAt's open-ear push on Meta India is either not happening or not discoverable via keyword. Monitor via page ID when available. |
| 2026-06-27 | Noise | No India-targeted Noise open-ear ads found. Single result was a third-party aggregator combo offer (₹ INR, unrelated). | — | Not running | Same gap as Shokz — Noise is absent from open-ear paid search on Meta India. |
| 2026-06-27 | wecool | Zero results for "wecool open ear neckband earphones" India. | — | Not running | Not active in Meta paid for open-ear. |
| 2026-06-27 | Mojawe | Zero results. | — | Not running | Not detectable on Meta India. |
| 2026-06-27 | Oladence | Zero results. | — | Not running | Not detectable on Meta India. |
| 2026-06-27 (cycle 2) | boAt (CEO-corrected) | "boAt Airdopes Loop" — INR currency, verified boAt page (id 786827864757998). **Clip-type OWS / open-ear form factor — RELEVANT open-ear competition** (corrected by CEO 2026-06-27; earlier misclassified as TWS/closed-ear). One active ad found. | Product lifestyle/feature — not a health or education hook. | Active — and material: boAt is the first named competitor putting paid spend behind an open-ear/OWS form factor on Meta India. | boAt has ENTERED the open-ear category on Meta India with the Airdopes Loop clip-OWS. The "category uncontested in paid" assumption is now PARTIALLY FALSE. Action: monitor this ad's longevity + creative angle; NG's health/education hook is still differentiated (boAt is leading on lifestyle/feature, not ear-health). Treat as the trigger to keep the creative-rotation pipeline (MA-005/006) warm. |

## REFERENCE: META DNB GUIDEBOOK 2025 (Early-Stage lens)
> Source: Meta "Guidebook for Digital Native Brands 2025" (with Fireside Ventures, Sauce.vc, DSG, Huddle, Titan Capital, Whiteboard). Filtered for NG's stage: **Early Stage (<50Cr ARR)**, India-only, D2C+Amazon, self-funded (₹65L MRR / 5–6% EBITDA north star). This is a standing reference — re-read whenever ideating or analyzing any Meta task. Full detail in memory `[[ng-meta-dnb-guidebook]]`.

**Where we sit in the guidebook's growth-stage framework:** Early Stage → PMF/category-creation focus, D2C+marketplace+messaging distribution, fence-sitter acquisition (not saturation/retention plays), tight CX feedback loop. Confirms: our whole job right now is category education (open-ear) + efficient fence-sitter conversion — NOT scale-at-all-costs.

**Performance 5 (foundations that unlock AI) — mapped to our gaps:**
1. Account Simplification — proof: 19% lower CPA when ad sets exit learning phase. **NG gap: 7 fragmented campaigns / overlapping LAL audiences (constitution + performance memory) repeatedly re-enter learning phase.** Action lens: consolidate before adding new campaigns; batch-edit, don't drip-edit.
2. Automation (ASC) — proof: +32% ROAS. **NG has never run Advantage+ Shopping.** Net-new lever to test, not yet evidenced for us.
3. Creative Diversification — proof: +32% efficiency when creatives are visually distinct (only +2% if too similar); +9% incremental reach. **Directly validates our institutional truth: review/explainer beats feature/UGC because it's a genuinely different route (educational, not showcase) — not just a different edit of the same idea.** Also flags a NEW risk: our current 2 winners (Gadgetbhai, Techopedia) may look too similar to each other (both reviewer-POV) — diversify the *routes*, not just produce more of the same reviewer format.
4. Data Quality (CAPI + Pixel, high-match params, dedupe) — proof: 13% cost-per-result improvement. **NG has a confirmed, quantified problem here: 138x Meta/GA4 discrepancy from broken UTM tags (`ng-product-page-cro`), and Meta-claimed ROAS 9.1x vs GA4 last-click 1.6x vs true estimate ~4.5-5.5x (`ng-paid-marketing-performance-jan-may26`). This is the single highest-leverage, most evidenced fix in the whole guidebook for us.** **Cycle 5 (2026-07-14) update: this exact failure mode recurred — 2026-07-13 GA4 traffic had 70.3% of session revenue land as `(not set)/(not set)`, the same tagging-break pattern, now affecting the live TRUE ROAS floor read directly (see cycle 5 entry below). This is no longer a historical data-quality note — it is actively distorting the account's most important number in real time.** **Cycle 6 (2026-07-16) update: recurred a THIRD time — 2026-07-15 landed 60.3% of that day's session revenue as `(not set)/(not set)` (₹32,878 of ₹54,520). This week's TRUE ROAS verdict (6.65×) already clears the floor including the bad day, so it didn't flip a decision this time, but the pattern is now recurring roughly weekly — MA-029's escalation stands, unresolved.** **Cycle 7 (2026-08-06, morning) update: escalated further still — the GA4 connector itself was fully disconnected in Windsor (zero configured accounts, not a tagging break), blocking every GA4-based number that cycle entirely. See MA-039.** **Cycle 8 (2026-08-06, same-day correction) update: RESOLVED architecturally — GA4 access moved to a direct Analytics Data API call, bypassing Windsor entirely. All 4 GA4 pulls this cycle succeeded, truncation guards passed, reconciliations matched exactly. The specific ES Comm 2 UTM-tag mismatch (MA-037) is, however, still unresolved — prior-week revenue is still landing under the stale "Comm LAL 1% 13 Nov 25" tag, confirmed directly via the new direct-API pull.** **Cycle 9 (2026-08-13) update: MA-037's mismatch is STILL unresolved — this cycle's GA4 pull again shows the bulk of ES Comm 2's real revenue landing under the "Comm LAL 1% 13 Nov 25" tag. Separately, a NEW tagging bug found this cycle: `{{campaign.name}}`/`{{ad.name}}` unresolved dynamic-UTM template variables are losing real Meta revenue (₹7,058 cur7d, ₹5,798+₹1,829 prior7d) to an unattributable bucket — distinct from the known ES Comm 2 and ES Lite (ad-name-as-campaign) tagging bugs. Also confirmed the GA4 attribution-maturity lag (~D+2, already known from the daily brief's "matured D−2" framing) materially affects the newest day in any trailing-7d GA4 window — 2026-08-12 carried 55.1% (not set)/(not set) share vs <5% every other day pulled, dragging the naive marginal-ROAS calc to a misleading 1.56× vs a matured 7.04×. Recommend the compute script always report both the headline and a matured (excl. last day) recompute going forward.** **Cycle 10 (2026-08-13, same day, live re-pull) update: this session's own live pull shows NO material `(not set)` spike anywhere in the 14-day window (max 3.5% on 08-04, 08-12 itself at 0.0%) — a materially cleaner read than cycle 9's logged 55.1% figure for the same calendar day. Both cycle 9's and this cycle's numbers are independently sourced from live pulls at different times of day; treat the discrepancy as evidence the `(not set)` share on a given day can itself keep resolving/maturing intraday (attribution catching up), not as a contradiction to flag as broken — re-affirms why the matured recompute convention should stay standard practice.** **Cycle 11 (2026-08-20) update: recurred again, larger — 19 Aug (the newest day in this cycle's trailing-7d window) carried 74.6% of that day's GA4 session revenue as `(not set)/(not set)`, vs ≤2.5% every other day in the 14-day pull. Same structural D+2 pattern, not new — the matured 6-day recompute (7.58× TRUE ROAS) was used as the reliable read instead of the raw headline (6.48×), consistent with the cycle 9/10 convention.** **Cycle 12 (2026-08-27) update: recurred again — 26 Aug (newest day) carried 64.6% `(not set)` share vs ≤3.3% every other day; matured 6d TRUE ROAS 6.63× used as the reliable read (vs raw 5.90×), same convention. Separately, this cycle found the campaign-tag mismatch problem (distinct from the `(not set)` maturity issue) has spread beyond ES Comm 2 to Openwire and Broad Interest — see the new CONFIRMED PATTERN entry above and MA-076/077.** **Cycle 13 (2026-09-03) update: recurred yet again — 2 Sep (newest day) carried 46.3% `(not set)` share vs ≤3.3% every other day in the 14-day window; matured 6d TRUE ROAS used as the reliable read (5.76×, vs raw 5.32×) per convention. For the first time, the matured read itself is BELOW the 6.0 floor — this is not a maturity artifact masking a healthy account, the underlying efficiency problem is real (see the new CONFIRMED PATTERN entries on the safebuds hero-ad decay and negative marginal ROAS).** **Cycle 14 (2026-09-10) update: recurred yet again — 9 Sep (newest day) carried 59.9% `(not set)` share vs ≤3.0% every other day; matured 6d TRUE ROAS 5.65× used as the reliable read (vs raw 5.69×) — still below floor and slightly worse than cycle 13's matured 5.76×, the 4th consecutive cycle below floor.**
5. Results Validation (A/B, lift, MMM) — proof: orgs investing in measurement 44% more likely to exceed revenue goals. **NG has zero formal lift/MMM testing — the 3-month test matrix (EXP-001–008) is directionally this, but reads are CPP/ROAS trend, not incrementality.**

**Reels Creative Essentials:**
- 9:16 + sound-on + safe zone (bottom 35%, top ~14%, side 6% clear) = 34.5% lower CPA than image, 15% lower than non-optimized video, 2x delivery, +39% CTR vs safe-zone violators. **Action lens: audit whether Gadgetbhai/Techopedia/EXP-001-005 creative briefs specify safe-zone framing explicitly — currently our brief template (§5c) does not.**
- Partnership/creator ads as always-on: -19% CPA, +53% CTR. **We already lean on named reviewers (Gadgetbhai, Techopedia) — this is validation to formalize them as an "always-on partnership" line, not one-off Reels.**

**Business Messaging / WhatsApp — highest-relevance chapter for NG right now:**
- 86% of Indian online adults message a business weekly; WhatsApp full-funnel (CTWA discovery → guided shopping → reminders → utility purchase msgs → personalized re-engagement) shows +61% avg ROAS in Meta cases.
- **NG's own data already proves this channel: WhatsApp/Bitespeed CVR is 4.93% — the single best-converting channel on the entire account, beating Meta paid social, Google, even organic search** (`ng-paid-marketing-performance-jan-may26`). And there are 1,111 unworked abandoned checkouts (₹36.8L) with zero retargeting follow-up for most of the period.
- **This is the guidebook chapter with the clearest, most evidenced NG action: build CTWA ads that route cold/warm Meta traffic into WhatsApp instead of (or alongside) the website, and pair with a WhatsApp abandoned-checkout recovery sequence.** This was flagged as Top-7 Problem #2 in the paid-performance memory and has not yet been executed as a Meta creative/campaign structure. **Cycle 13 (2026-09-03) update: for the first time, two "WA Review Ad" creatives (WhatsApp-routed) appeared organically this week, unbriefed by this lane — formalized a read-plan (MA-087) rather than let them run untracked. Still not a deliberate, planned CTWA build-out, but the first concrete live signal in this direction.** **Cycle 14 (2026-09-10) update: MA-087's read-plan hit its D+7 decision date with 0 purchases on trivial spend (₹295.59/21d) — extended rather than rejected, since WhatsApp-routed conversions may not attribute as a Meta purchase at all; the next check should look at WhatsApp/Bitespeed conversation counts directly, not Meta purchase data.**

**Full-Funnel:**
- Blending upper+mid+lower funnel: +70% ROI (adding upper to mid), Reach-alongside-DR: +2x reach / +31% incremental sales at +25% spend. **NG currently has almost no TOFU layer** (learning-log cycle 1: "No TOFU layer... all campaigns are conversion objective on cold/warm LAL"). One awareness exception — "Kannada office reel_Safebuds_Live translation" at 3.42M reach, ₹0.025/thruplay — is working as an unintentional TOFU test.
- **Caution for our stage:** full-funnel is a saturation-relief play for accounts that have run out of room in performance-only buying. NG is not yet saturated at the account level (LAL 1% pools of 25-30K, not exhausted at scale) — the honest read is our TOFU gap is really a retargeting-pool-refill problem (pools exhausting in 6-8 weeks per learning-log) more than a "we've maxed performance, time to go upper-funnel" problem. Treat full-funnel as Month 2-3 lever once Performance 5 fixes (account simplification + data quality) are done, not a first move.
- **Cycle 5 (2026-07-14) tension flagged:** the Kannada TOFU reel has now shown 0 platform-attributed purchases for 14 straight consecutive days (₹4,823.46/7d) — the "unintentional TOFU test" framing above has never been validated against an actual pool-health metric. MA-028 (queue-inbox) is a direct falsifiable test of this exact open question: pause it, watch Retargeting reach/frequency for 7-14 days, see if it actually matters.
- **Cycle 6 (2026-07-16) update:** still 0 purchases (₹4,765.73 this week) — MA-028 remains pending human sign-off; not re-drafted, tracked only.
- **Cycle 7/8 (2026-08-06) update:** the Kannada reel no longer appears at all in the 21-day ad×day pull (last spend 2026-07-17) — appears to have gone fully dark, consistent with MA-028's pause holding. GA4 (now restored via direct API) shows no material change to Retargeting's pool health beyond what's separately flagged in MA-050 (its directional ROAS softening) — nothing ties that softening specifically to the Kannada reel's absence; treated as unrelated.
- **Cycle 9 (2026-08-13) update:** Retargeting itself has now collapsed (see MA-055) — the Kannada-reel question is fully moot until the host campaign's own status is confirmed.
- **Cycle 10 (2026-08-13, same day) update:** Retargeting remains collapsed (₹185.95/7d, 0 purchases, 12 GA4 sessions) — no change, MA-055 still the live escalation.
- **Cycle 11 (2026-08-20) update:** Retargeting still effectively collapsed relative to its historical baseline (₹905.70/7d off a tiny base, 57 GA4 sessions, ₹0 GA4-tagged revenue) — MA-055 still unresolved, now a 3rd consecutive cycle with no cause logged.
- **Cycle 12 (2026-08-27) update:** Retargeting is now fully dark — ₹0.00 spend cur7d, a 4th consecutive cycle with no cause logged. MA-055 still unresolved.
- **Cycle 13 (2026-09-03) update:** Retargeting_26May 26_PDP View,ATC,30D does not appear at all in this cycle's live campaign pull (35d window) — still fully dark or dropped out entirely. MA-055 still unresolved, now a 5th+ consecutive cycle.
- **Cycle 14 (2026-09-10) update:** closed via `/approvals` 2026-09-09 (MA-055) — Meet acknowledged, investigating directly, not agent-actionable; not re-escalated this cycle.

**Explicitly DEFERRED for NG's stage (do not action, re-evaluate only when triggers hit):**
- Cross-border chapter (Bid Multiplier, Multi-Language Ads, Web2App, Dynamic Ads by country/language) — only relevant once the UAE demand test (`ng-uae-market-context`) passes pass/fail thresholds. Until then, India-only.
- Hyper-Growth/Expansion chapter tactics (offline, app-retention, saturation-scale plays) — NG is Early Stage, not Growth/Hyper-Growth; these assume PMF is done and category is established. Ours is still being created.
- Blind ASC/Advantage+ full account migration — the guidebook's automation proof (+32% ROAS) is real, but do not hand full budget/targeting control to Advantage+ before the account's own data-quality problem (CAPI/UTM) is fixed — automation on bad signal amplifies the bad signal.

**Standing rule:** every future Meta ideation/analysis session should check new creative briefs and audience/spend tests against this Performance-5 + Reels + WhatsApp + Full-Funnel lens before drafting, and flag explicitly which guidebook proof-stat motivates the test (or note NET-NEW if none applies).

## REJECTED / DEAD ENDS
- Non-Techopedia SafeBuds creatives — ₹4,075 spent, ROAS <3× or zero. Do not retry feature/UGC/static for SafeBuds.
- Dayparting / time-based budget redistribution (founder hypothesis, Jul-9-2026) — rejected on hourly data. Spend is NOT front-loading before 11 AM (Meta 27–35%, Google 28–37% of daily spend pre-11AM; Meta's heaviest hours are 8–11 PM). Pre/post-11AM ROAS flips daily on 10–15 orders/day — no stable hour-of-day edge to exploit. See 2026-07-09 cycle entry. Re-open only with a 14–30 day hourly aggregate showing a persistent gap.
- Broad Sales Campaign A+ Catalogue | 2 Sep 26 — closed 2026-09-10 (MA-091) as REJECTED-on-non-delivery, not performance — 0 purchases across its entire ~6-day lifetime, dark since 09-04. If retried, needs a deliberate relaunch, not a reopening of this campaign.
- Revive Massager | 28 Aug 26 — closed 2026-09-10 (MA-092) as REJECTED-on-non-delivery, not performance — only ever ran 2 days total, ₹50.71 lifetime spend. If this SKU is meant to launch, it needs a fresh, deliberate relaunch.

---

## CYCLE LOG (most recent first)

> Cycles 7, 8, and 9 (2026-08-06/08-13) moved to `learning-log-archive.md` on 2026-08-25 during a
> `/approvals` maintenance pass (this file is re-read in full every scheduled run). Every learning
> that still matters is already carried forward in the standing sections above (CONFIRMED PATTERNS,
> COMPETITOR INTEL LEDGER, REJECTED/DEAD ENDS) and below (CREATIVE-FORMAT TEST ENGINE, SCALE
> HYPOTHESIS BACKLOG). The managed agent never reads the archive file.

### 2026-09-10 — Cycle 14 (Thursday teardown, off-week — core loop only, ISO week 37 is odd): account still below the 6.0 floor for a 4th consecutive cycle; safebuds_20Apr found fully dark 6 consecutive days

**Initiative:** Weekly campaign-level teardown per the standing Thursday cadence. `DEEP_WEEK` computed
first (ISO week 37, odd → core-loop-only cycle) — pulls 7/8 (auction-quality/hook-retention,
placement) and the GA4 `addToCarts`/`checkouts` funnel metrics were correctly NOT requested this
cycle. Pulls, all direct HTTPS inside one COMPUTE script (0 Windsor/MCP calls, run twice locally while
building — once to fix a GA4 date-key format mismatch, `20260909` vs `2026-09-09`, that was silently
zeroing the account-level revenue join): Meta campaign×day 35d (2026-08-06→2026-09-09, 153 rows, 1
page), Meta ad×day 21d (2026-08-20→2026-09-09, 317 rows, 1 page), GA4 account src/medium×day 14d
(2026-08-27→2026-09-09, 435 rows, rowCount 435, PASS), GA4 campaign×src/medium cur7d (2026-09-03→
2026-09-09, 95 rows, rowCount 95, PASS) and prior7d (2026-08-27→2026-09-02, 127 rows, rowCount 127,
PASS), GA4 account src/medium MTD (2026-09-01→2026-09-09, 57 rows, rowCount 57, PASS). Purchase
action-type sanity check: `omni_purchase`, `offsite_conversion.fb_pixel_purchase`,
`web_in_store_purchase` all summed to an identical 956.00 on the 35d campaign pull — no divergence.
Ad-level 21d spend reconciled to campaign-level 21d spend within ₹0.20 (rounding). GA4 campaign
sessions reconciled exactly both weeks (cur7d 10,768.00 = 10,768.00; prior7d 13,412.00 = 13,412.00).

**Hypotheses tested / findings:**

1. **Does the account clear the 6.0 floor and marginal-ROAS gate this week?**
   **Result: NO — still below floor, 4th consecutive cycle, margin worse than last cycle.** Raw cur7d
   (03–09 Sep): spend ₹32,504.07, GA4 Meta-paid revenue ₹1,84,954.20 → TRUE ROAS **5.69×**. 09 Sep
   (newest day) carried a 59.9% `(not set)` share vs ≤3.0% every other day — matured 6d (03–08 Sep):
   spend ₹28,019.55, revenue ₹1,58,412.10 → TRUE ROAS **5.65×** (prior matured, cycle 13: 5.76×) —
   still below floor and slightly worse. Marginal ROAS (matured-vs-matured): Δspend/day −₹2,897.87
   (−38.3%), Δrevenue/day −₹17,198.45 (−39.4%) → 5.93×/incremental-rupee, but this reflects a spend
   CONTRACTION, not a scale test — the rupees that left were converting near the account average
   (itself under floor). MTD (1–9 Sep): spend ₹48,485.79, revenue ₹3,10,254.60, TRUE ROAS 6.40× —
   above floor only because early-September days pulled the average up before this week's
   contraction. Platform overclaim 74.6% cur7d — within the normal 40–120% band, no attribution break.
2. **What's driving the contraction — is it market-wide or concentrated?**
   **Result: concentrated in two campaigns, safebuds_20Apr (near-total stoppage) and ES Comm 2
   (continuing collapse); Broad Interest and Pulse both held or improved.** Broad Interest is flat WoW
   (+0.1%) at ₹25,686.66, now 79% of the account's live spend — the sole real floor-clearer (platform
   10.46×, GA4-dir 6.32×). Pulse Fitness Band's economics improved further (CPP ₹212.82, platform
   16.25×, GA4-dir 11.65×) though its own spend fell -37.5%.
3. **New this cycle — does the account have a campaign that's gone from "declining" to "dark"?**
   **Result: yes — safebuds_20Apr 26 has gone fully dark for 6 consecutive days.** Spend ₹929.95 on
   09-03, then ₹0.00 on 09-04 through 09-07, then **entirely absent from the Meta Marketing API**
   (not a zero row — no row at all) on 09-08 and 09-09. This predates and is independent of MA-080
   (hero-ad pause) and MA-081 (Facebook Reels exclusion), both approved 2026-09-09 but still awaiting
   `/execute-approved` — the stoppage is not those drafts taking effect. Escalated as **MA-089** (high
   risk, top priority). Every safebuds-specific open item from cycle 13 (MA-058, MA-070, MA-072,
   MA-075, MA-084, MA-088) is now MOOT/OVERTAKEN until the campaign resumes — marked inline on each.
4. **ES Comm 2 — still unstable?**
   **Result: yes, a 5th consecutive collapse.** Spend -44.3% (₹753.98→₹419.76), 0 purchases, GA4-dir
   ROAS 0.00×. MA-085's dated creative-retirement correlation (~22-23 Aug) is still unconfirmed by
   Meet — re-escalated with no new facts this cycle.
5. **Openwire — has the UTM-tag mismatch (MA-076/077) resolved, and where does it read now?**
   **Result: still below floor, fix still not shipped.** Own-tag GA4-dir ROAS 4.99× this week (spend
   -64.4%, platform ROAS 6.06×) — last cycle's combined-tag read was 6.09× (above floor); the
   MA-077 UTM fix is approved but still awaiting `/execute-approved`, so this week's own-tag number
   may still be an undercount rather than a genuine re-reversal.
6. **New-campaign read-plans (MA-086) — did either clear its decision date?**
   **Result: both missed on zero real delivery, not a thin-sample miss.** Broad Sales Campaign A+
   Catalogue: 0 purchases across its entire ~6-day lifetime (₹2,570 total spend), dark since 09-04 —
   closed as REJECTED-on-non-delivery (**MA-091**). Revive Massager: only ever ran 2 days total
   (₹50.71 lifetime spend), dark since 08-29 — closed as REJECTED-on-non-delivery (**MA-092**).
7. **Zero-purchase check (21d ad pull) — anything new?**
   **Result: 5 new zero-purchase ads, ₹1,598.01/21d combined.** Gadgetbhai Comm reel_Broad_2 Sep 26
   (₹983.53, Broad Sales Campaign), Techopedia Safebuds Reel_24 Jul 26 – SME Owner Aud (₹279.57, Broad
   Interest), Influencer_Shahroz_13 Aug_Comm (₹188.20, ES Comm 2), Comm_ASMR Reel_Unboxing_12 Aug 26 –
   Copy (₹86.32, ES Comm 2), Influencer_IND Unboxer_Comm_Problem Hook (₹60.33, ES Comm 2). CUT drafted
   (**MA-090**).
8. **MA-087's WhatsApp/CTWA read-plan — hit its D+7 decision date, what's the verdict?**
   **Result: extend, don't reject.** "WA Review Ad | Safebuds LAL | 2 Sep 26" still shows ₹295.59/21d,
   0 purchases — but WhatsApp-routed conversions may not land as a Meta-attributed purchase at all;
   recommend checking WhatsApp/Bitespeed conversation counts directly next cycle instead of relying on
   Meta purchase attribution.
9. **Format engine — any change?** **Result: no, still the standing 6 (CF-31/37/51/54/55/56) IN TEST,
   not delivering** — closed to a standing Meet agenda item via `/approvals` (MA-059), not re-drafted
   weekly. Appended net-new format **CF-59 "Silent Subtitle Testimonial"** (MA-093), motivated by
   Broad Interest now being the only campaign with enough real volume to safely host a new challenger
   test.

**Actions this cycle:** MA-089 (FIX, safebuds_20Apr fully dark 6 days — top priority, high risk);
MA-090 (CUT, 5 zero-purchase ads, ₹1,598.01/21d); MA-091 (KILL, close Broad Sales Campaign A+
Catalogue on non-delivery); MA-092 (KILL, close Revive Massager on non-delivery); MA-093 (TEST, append
CF-59); D+7 status updates on MA-076 (Openwire, still below floor), MA-078 (Pulse, re-confirmed
VALIDATED), MA-080/081/082 (approved, still awaiting execute), MA-083 (HOLD re-confirmed, 4th cycle
below floor), MA-085 (ES Comm 2, still unconfirmed, collapsed further), MA-087 (extend); MA-058/070/
072/075/084/088 all marked MOOT/OVERTAKEN pending MA-089's resolution.

**Learning carried forward:**
- **"Absent from the pull" and "present at ₹0" are different signals, and only one of them was being
  checked closely before this cycle.** safebuds_20Apr's stoppage would have looked like "just another
  spend decline" if only the ₹0.00 days had been counted — the campaign's total absence from the API
  on 09-08/09-09 is a materially more urgent finding (likely a policy, payment, or platform-side block,
  not a soft efficiency problem) and deserves its own explicit check every cycle on every live
  campaign, not just a spend-percentage-change framing.
- **Account-level spend concentration can emerge passively, the same way ad-level concentration did.**
  Broad Interest reaching 79% of the account's live spend wasn't a deliberate scale decision — it's
  what's left once safebuds_20Apr and ES Comm 2 both went dark. Watch the account's spend distribution
  across campaigns every cycle as its own signal, the same way MA-058 flagged ad-level concentration
  inside a single adset back in cycle 9.
- **A read-plan hitting its decision date on thin volume with the "wrong" attribution mechanism (e.g.
  a WhatsApp-routed ad judged only on Meta purchase data) needs a channel-appropriate extension, not a
  same-metric REJECTED verdict** — MA-087's WA Review Ad test is the first time this lane has drafted
  a Meta ad whose real conversion event likely happens off-platform; the standard CPP/ROAS read-plan
  mechanism may simply be the wrong instrument for it.

---

### 2026-09-03 — Cycle 13 (Thursday teardown, DEEP_WEEK — biweekly deep-diagnostics): account TRUE ROAS falls below the 6.0 floor on both raw and matured reads for the first time, safebuds_20Apr's decayed hero ad + bad placement + checkout collapse identified as the proximate cause

**Initiative:** Weekly campaign-level teardown per the standing Thursday cadence. `DEEP_WEEK` computed
first (ISO week 36, even → deep-dive cycle). Pulls, all direct HTTPS inside one COMPUTE script (0
Windsor/MCP calls, run 3× locally — 1 bug-fix rerun for a GA4 date-key format mismatch that had
silently zeroed the account-level revenue sums, 1 supplemental pass for combined-tag ROAS + an
ad-impressions cross-check needed for the hook-rate diagnostic): Meta campaign×day 35d
(2026-07-29→09-02, 156 rows), Meta ad×day 21d (2026-08-12→09-02, 317 rows), Meta ad-diagnostics cur7d
agg (34 rows, DEEP_WEEK), Meta campaign×placement cur7d agg (88 rows, DEEP_WEEK), GA4 account
src/medium×day 14d with `addToCarts`/`checkouts` (468 rows, rowCount 468, PASS), GA4 campaign×src/medium
cur7d (134 rows, PASS) and prior7d (103 rows, PASS) with funnel metrics, GA4 account src/medium MTD (44
rows, PASS). Purchase action-type sanity check: `omni_purchase`, `offsite_conversion.fb_pixel_purchase`,
`web_in_store_purchase` all summed to an identical 1,015.00 — no divergence. Ad-level 21d spend
reconciled exactly to campaign-level spend (₹1,86,950.04 both sides). GA4 campaign sessions cur7d
reconciled exactly (15,289.00 both sides). MTD Meta-paid revenue cross-checked two independent ways
(daily aggregation vs no-date aggregation): both ₹91,383.40, exact match.

**Hypotheses tested / findings:**

1. **Does the account clear the 6.0 floor and marginal-ROAS gate this week?**
   **Result: NO — for the first time, it fails on BOTH the raw and the matured read.** Raw cur7d
   (27 Aug–2 Sep): spend ₹55,241.95, GA4 Meta-paid revenue ₹2,93,640.00 → TRUE ROAS **5.32×**. 2 Sep
   (newest day) carried 46.3% `(not set)` share vs ≤3.3% every other day — matured 6d (27 Aug–1 Sep):
   spend ₹45,405.96, revenue ₹2,61,602.80 → TRUE ROAS **5.76×** — still below floor (prior matured 6d,
   20–25 Aug: 6.63×). Marginal ROAS (matured-vs-matured): Δspend/day +₹48.24 (+0.1%, essentially flat)
   but Δrevenue/day **−₹6,270.30** (-12.6%) — a deeply negative marginal read on flat spend, meaning
   this week's revenue fell hard without a corresponding spend change — an efficiency collapse, not a
   scale-test miss. MTD (1–2 Sep, thin 2-day window): spend ₹15,940.38, revenue ₹91,383.40, TRUE ROAS
   5.73× — agrees directionally but too short to be decisive on its own.
2. **What's driving the floor breach — is it market-wide or concentrated?**
   **Result: concentrated almost entirely in safebuds_20Apr.** Two other campaigns cleared their own
   floors this same week — Pulse Fitness Band (GA4-dir ROAS 10.26× cur7d, VALIDATED against its
   read-plan) and Openwire on a combined-tag basis (6.09×, back above floor). safebuds_20Apr's
   GA4-directional ROAS is 4.82× cur7d (prior 5.58×) — its 4th+ consecutive cycle below floor. Three
   compounding, fixable problems were isolated on this one campaign this cycle (see 3–5 below), not a
   diffuse account-wide slump.
3. **Ad-level SKU-floor check (new this cycle) — any real-spend ad breaching its kill line?**
   **Result: yes — the account's original, longest-validated hero ad.** "Techopedia Safebuds
   Reel_17May 26" — the same creative behind the institutional ₹329 CPP/9.2× ROAS reference — now
   reads CPP ₹1,026.02 (>₹700 SafeBuds floor) and platform ROAS 2.62× (<3× floor) on ₹5,130.08 cur7d
   spend/5 purchases, breaching BOTH kill conditions simultaneously. Also found: "Before After Static
   Ad_Comm_21 Aug 26 – Copy" (ES Comm 2) breaches the Comm 2.0 floor (CPP ₹586.46>₹450, ROAS
   4.94×<5×) on ₹586.46 spend. CUT drafted for both (MA-080, MA-082).
4. **Placement diagnostic (DEEP_WEEK) — same finding as last cycle, or a new flip?**
   **Result: another flip, 3rd cycle running.** Broad Interest's Instagram Reels (flagged as the worst
   placement last cycle, MA-069) recovered to CPP ₹285.35, now better than its own campaign blend
   (₹333.11) — mark MA-069 DO NOT EXECUTE a 2nd time. The real problem this cycle: safebuds_20Apr's
   Facebook Reels placement — ₹7,972.86 (46.9% of campaign spend) at CPP ₹1,138.98, +101% worse than
   the campaign blend (₹566.49) — the single largest placement inefficiency on the account this cycle,
   ~₹4,008/week excess vs blend. New placement CUT drafted (MA-081).
5. **Funnel diagnostic (DEEP_WEEK) — any specific broken stage, and does MA-071's prior finding hold?**
   **Result: MA-071 (Broad Interest + Openwire shared checkout collapse) RECOVERED; a new, isolated
   collapse appeared on safebuds_20Apr instead.** Broad Interest C2P 24.5%→42.3% (now above its 41.8%
   pre-collapse baseline), Openwire C2P 20.5%→22.8% (trending back toward 27.1%) — confirms the
   original shared-cause hypothesis (SH-MA-18). **New: safebuds_20Apr's own C2P collapsed 32.0%→15.4%**
   (more than halved) while S2A actually improved (11.2%→16.8%) and A2C only softened (57.9%→51.3%) —
   the leak is specifically the final purchase step, likely compounded by (not separate from) the
   hero-ad and placement problems above. FIX drafted (MA-084), escalating MA-070/075.
6. **ES Comm 2 — still unstable, and is there finally a dated cause?**
   **Result: unstable a 4th time, but for the first time there's a concrete, dated correlation to
   investigate.** Spend collapsed -73.3% (₹2,823.33→₹753.22), combined-tag GA4-dir ROAS fell
   5.00×→3.85×. Its two legacy winning creatives (Influencer_Merged_13Nov, Influencer_Gadgetbhai_13Nov)
   stopped delivering entirely around 2026-08-22/23 — days before the collapse. FIX drafted (MA-085)
   asking Meet to confirm whether this was an intentional retirement.
7. **New-campaign check — anything launched with no read-plan?**
   **Result: two.** "Broad Sales Campaign A+ Catalogue | 2 Sep 26" (1 day old, ₹561.02, 0 purchases)
   and "Revive Massager | 28 Aug 26" (new SKU, 6 days old, ₹50.71, 0 purchases) — both too new to
   judge, formal read-plans set (MA-086).
8. **Zero-purchase / MA-074 confirmation check.**
   **Result: MA-074's 5-ad CUT list (drafted last cycle) is confirmed executing** — all 5 ads' spend
   fell to near-zero or dropped out of the live pull. Two new small zero-purchase finds bundled into
   MA-082 (Before After Comparision Safebuds Static-Copy, Kannada dub — the latter ties to MA-072's
   non-delivery finding, differentiated from Tamil which recovered real signal this cycle).
9. **New, organic (unbriefed) creative activity — anything worth formalizing?**
   **Result: two things.** (a) Two "WA Review Ad" (WhatsApp-routed) creatives appeared with no logged
   brief — directly matches the standing, evidenced WhatsApp/CTWA guidebook opportunity this lane has
   never formally tested as a Meta ad structure; formalized a read-plan (MA-087). (b) A new "ASMR
   Unboxing Vid | Safebuds" ad shows the account's best hook (17.45% of impressions) AND best retention
   (46.3% p75/p25) this cycle — a second, independent data point for the ASMR-unboxing lever (CF-57's
   original motivating ad was for Comm) — appended CF-58 (MA-088).
10. **Format engine — any change?** **Result: no, still 0/6 delivering, 9th straight cycle.** No
    CF-31/37/51/54/55/56 ad names anywhere in the live 21-day ad list — re-confirmed MA-059 without a
    new draft.

**Actions this cycle:** MA-080 (CUT, safebuds hero-ad floor breach); MA-081 (CUT, placement exclusion,
safebuds Facebook Reels); MA-082 (CUT, Comm 2.0 floor breach + 2 zero-purchase ads); MA-083 (FIX,
account-level floor breach — HOLD all budget); MA-084 (FIX, safebuds checkout→purchase collapse); MA-085
(FIX, ES Comm 2 instability now dated to a creative retirement); MA-086 (TEST, 2 new-campaign
read-plans); MA-087 (TEST, formalize WhatsApp-routed WA Review Ad creatives); MA-088 (TEST, append
CF-58); MA-069 marked DO NOT EXECUTE (stale 2nd time, superseded by MA-081); MA-071 marked RECOVERED;
MA-072 differentiated (Tamil extend, Kannada close via MA-082); MA-075/070 status updated with the new
proximate-cause evidence; MA-076/077 status updated (Openwire improved, Broad Interest unchanged);
MA-078 marked VALIDATED (budget step gated behind MA-083); MA-074 marked confirmed executing.

**Learning carried forward:**
- **A validated hero creative is not exempt from the weekly floor check.** The account's single most
  institutionally-trusted ad (the ₹329/9.2× reference) decayed all the way through its own kill line
  while carrying a large, unmonitored share of adset spend, and that alone was enough to flip the
  ACCOUNT's floor status for the first time in this reporting history. Treat "proven winner" status as
  a starting point, not a standing exemption from the same CPP/ROAS checks every other ad gets.
- **A negative marginal ROAS on flat spend is a distinct alarm from a negative marginal ROAS on rising
  spend.** This cycle's spend barely moved (+0.1%/day) while revenue fell hard (-12.6%/day) — that's
  existing spend breaking, not a failed scale test. Route straight to per-campaign/per-ad diagnostics
  rather than assuming a budget-side cause when this shape appears.
- **A recovered shared-cause funnel finding doesn't retire the failure mode itself** — the exact
  checkout-collapse pattern that resolved in Broad Interest and Openwire this cycle re-appeared,
  isolated, on a third campaign (safebuds_20Apr) that wasn't part of the original pair. Keep checking
  C2P by campaign every DEEP_WEEK even after one instance resolves.
- **Combining a known-mismatched GA4 tag correctly can flip a campaign's floor status on its own**,
  with zero underlying change — Openwire's combined-tag ROAS crossed from below-floor to above-floor
  this cycle purely because the tag combination was applied consistently. This is a strong argument for
  shipping the UTM fix rather than continuing to patch the read every cycle.

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
>
> **Cycle 14 (2026-09-10) note:** CF-31/37/51/54/55/56 confirmed still 0/6 delivering — this item is now
> a standing Meet agenda item (MA-059, closed via `/approvals` 2026-09-09), not re-drafted weekly.
> Appended net-new format **CF-59 "Silent Subtitle Testimonial"** (MA-093) — a muted-autoplay-safe
> lever, motivated by Broad Interest now carrying 79% of the account's live spend and being the only
> safe host for a new challenger test this cycle.
>
> **Cycle 13 (2026-09-03) note:** CF-31/37/51/54/55/56 confirmed still 0/6 delivering — 9th straight
> cycle. Appended net-new format **CF-58 "ASMR Unboxing — SafeBuds"** (MA-088) — a second, independent
> ASMR-unboxing data point (this time for SafeBuds, best hook+retention on the account this cycle),
> reinforcing CF-57's case; recommend CF-57/58 jump the queue ahead of the older, still-blocked/unproduced
> CF-31/37/51 once a slot frees.
>
> **Cycle 12 (2026-08-27) note:** CF-31/37/51/54/55/56 confirmed still 0/6 delivering — 8th straight
> cycle, no matching ad names anywhere in the live 21-day ad list. Appended net-new format **CF-57
> "Ambient ASMR Unboxing"** (MA-079) — a sound-only sensory lever, motivated by an ad-hoc ad this cycle
> ("Unboxing ASMR Vid | Comm | 25 Aug 26") already reading an 18.00× platform ROAS on a thin sample.
>
> **Cycle 11 (2026-08-20) note:** CF-31/37/51/54/55 confirmed still 0/5 delivering — 7th straight
> cycle, no matching ad names anywhere in the live 21-day ad list. Recommended this become a standing
> Meet agenda item rather than a weekly repeat draft. Appended net-new format **CF-56 "Checkout-Trust
> Overlay"** (MA-073) — a trust/guarantee-card lever timed at the exact checkout→purchase stage this
> cycle's funnel diagnostic showed leaking in two campaigns (MA-071).
>
> **Cycle 10 (2026-08-13, live re-run) note:** CF-31/37/51/54 confirmed still 0/4 delivering — no
> matching ad names anywhere in this cycle's live 21-day ad list, 6th straight cycle. Appended net-new
> format **CF-55 "Silent Scroll-Stopper"** (MA-067) — a pattern-interrupt/non-verbal-hook lever, directly
> motivated by this cycle's own ad-diagnostics finding of a 4× hook-landing spread (3.07%–12.7% of
> impressions) across live ads with no format-level lever yet isolating hook-craft from language/dub.
>
> **Cycle 9 (2026-08-13) note:** CF-31, CF-37, and CF-51 remain at **zero impressions** for a 5th
> straight cycle — still a production/compliance pipeline issue, not a per-format one (MA-059).
> Appended net-new format **CF-54 "Rapid-Fire Speed Review"** (MA-060) — a pacing/density lever, the
> first in the register to test compression to ≤15s rather than a new psychological angle.
>
> **Cycle 8 (2026-08-06, correction) note:** CF-31, CF-37, **and now CF-51** show **zero impressions**
> in the 21-day ad×day pull — a 4th straight cycle where the register's "2–3 IN TEST" status doesn't
> match reality. CF-31 remains blocked on Meet's compliance call. CF-37's host adset (ES Comm 2) is
> still fully dark. CF-51's brief is still pending production, with no stated blocker. **This is now a
> production-pipeline issue, not a per-format issue (MA-052).** Appended net-new format **CF-53 "Live
> A/B Mirror"** (MA-053) — a dual-presenter visual comparison lever, the first of its kind in the
> register.

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
| CF-31 | Expert / audiologist explainer | Authority — ENT/audiologist on "the science of open-ear" (strongest fit for NG's hearing-health moat) | **IN TEST (since cycle 6) — NOT DELIVERING, 10 straight cycles (0 impressions)** | — | Blocked on Meet's compliance call re: presenter-credential framing, unresolved 8+ weeks. Standing Meet agenda item (MA-059), not re-drafted weekly. | MA-034, MA-046, MA-052, MA-059 |
| CF-32 | Data / number hero | Authority — specificity heuristic ("94% stopped removing an earbud to hear traffic") | UNTESTED | — | — | — |
| CF-33 | Demonstration / "watch it work" | Authority — show-don't-tell the open-ear mechanism | UNTESTED | — | — | — |
| CF-34 | Review-wall montage | Social proof — rapid real-review screenshots | UNTESTED | — | — | — |
| CF-35 | "X,000 Indians switched" | Social proof — bandwagon / safety-in-numbers | UNTESTED | — | — | — |
| CF-36 | Skeptic-to-believer | Social proof — "I was sure open-ear was a gimmick…" | UNTESTED | — | — | — |
| CF-37 | Fear-of-loss health hook | Loss aversion — "what sealed earbuds are doing to your hearing" (WHO-stat, on-brand) | **IN TEST (since cycle 6) — NOT DELIVERING, 10 straight cycles (0 impressions); host adset ES Comm 2 has now collapsed a 5th consecutive cycle** | — | No stated production blocker, host adset instability may be a factor. Standing Meet agenda item (MA-059). | MA-035, MA-046, MA-052, MA-059 |
| CF-38 | Guarantee / risk-reversal | Loss aversion — money-back, "try it risk-free" | UNTESTED | — | — | — |
| CF-39 | Open-loop hook | Curiosity — Zeigarnik ("the reason your ears ache by 4pm…") | UNTESTED | — | — | — |
| CF-40 | Myth vs fact | Curiosity — correct a false category belief | UNTESTED | — | — | — |
| CF-41 | Anti-ad / "this isn't an ad" | Pattern interrupt — novelty | UNTESTED | — | — | — |
| CF-42 | Problem-Agitate-Solve (PAS) | DR framework — classic direct-response structure | UNTESTED | — | — | — |
| CF-43 | 3-reasons listicle | DR framework — cognitive chunking | UNTESTED | — | — | — |
| CF-44 | Before / after transformation | DR framework — contrast effect, visual proof | UNTESTED | — | — | Ad-hoc org ads "Before After Static Ad_Comm_21 Aug 26" (Broad Interest) and its variants already live — one breached the Comm 2.0 floor (MA-082), a mixed early signal for this angle even though CF-44 itself is still UNTESTED as a controlled trial. |
| CF-45 | POV trend format | Native — relatable, platform-native | UNTESTED | — | — | — |
| CF-46 | Green-screen creator reaction / stitch | Native — commentary on a claim | UNTESTED | — | — | — |
| CF-47 | "Stop scrolling if you…" qualifier hook | Native — self-selection | UNTESTED | — | — | — |
| CF-48 | "We spent 2 years tuning this driver" | Effort justification — labor-illusion | UNTESTED | — | — | — |
| CF-49 | Founder reads a 1-star review | Objection / trust — vulnerability → reactance reversal | UNTESTED | — | — | — |
| CF-50 | FAQ "you asked, we answered" | Objection handling — objections at scale | UNTESTED | — | — | — |
| CF-51 | Silent Sensory Demo (cycle 6) | Demonstration route, no voiceover — captions + ambient sound close-up of the open-ear driver/mechanism; answers the DNB-guidebook risk that NG's two winners (Gadgetbhai, Techopedia) are both reviewer-POV and may look visually too similar to each other | **IN TEST (rotated in cycle 7, 2026-08-06) — NOT DELIVERING, 10 straight cycles (0 impressions, brief still pending production); host adset (safebuds_20Apr) has since gone fully dark (MA-089)** | — | Was rotated in specifically because CF-31/CF-37 weren't delivering; it also isn't delivering, and its host is now dark. See MA-059/MA-089. | MA-045, MA-052, MA-059 |
| CF-52 | Commute Noise-Test (cycle 7) | Demonstration lever — presenter walks through a loud outdoor environment (traffic/metro) showing open-ear lets you hear surroundings while sealed buds don't; visually distinct outdoor setting from Gadgetbhai/Techopedia's indoor tech-review setting and from CF-31's clinical setting | UNTESTED | — | Appended 2026-08-06 (cycle 7); next in line once a slot frees. | — |
| CF-53 | Live A/B Mirror (cycle 8) | Comparison/contrast lever — two presenters side-by-side, one wearing sealed earbuds, one wearing SafeBuds, both react in real time to the same ambient cue (doorbell/car horn/name-call); the first dual-presenter/split-screen format in the register, demonstrating the benefit instantly without narration-heavy setup | UNTESTED | — | Appended 2026-08-06 (cycle 8); next in line once a slot frees. | MA-053 |
| CF-54 | Rapid-Fire Speed Review (cycle 9) | Pacing/density lever — compress problem-hook + demo + proof + CTA into ≤15 seconds total via 4–5 rapid micro-cuts, roughly half the runtime of every existing format's 20–32s structure; tests whether NG's own "~87.6% same-day decider" institutional truth means a much denser/faster cut converts better, motivated directly by SafeBuds PDP's persistently low CVR (0.26–0.75% in recent daily briefs) despite running the account's most-validated review format | UNTESTED | — | Appended 2026-08-13 (cycle 9); next in line once a slot frees. | MA-060 |
| CF-55 | Silent Scroll-Stopper (cycle 10) | Pattern-interrupt lever — a 0–2s non-verbal, motion-graphics visual disruption (no voiceover, no captions) immediately preceding the standard review-format body; isolates "hook craft" as its own testable variable, independent of language/presenter/dub, distinct from every existing register entry | UNTESTED | — | Appended 2026-08-13 (cycle 10), motivated directly by that cycle's ad-diagnostics finding of a 4× hook-landing spread (p25/impressions 3.07%–12.7%) across live ads with no format-level lever yet tested for it; next in line once a slot frees. | MA-067 |
| CF-56 | Checkout-Trust Overlay (cycle 11) | Trust/guarantee lever — a specific proof card (COD availability, return-window length, warranty terms) shown immediately before the CTA in the final 3–5 seconds, distinct from CF-38's broader/earlier-placed risk-reversal messaging by targeting the exact funnel stage this cycle's data shows leaking | UNTESTED | — | Appended 2026-08-20 (cycle 11), motivated directly by that cycle's funnel diagnostic finding a checkout→purchase collapse shared across Broad Interest and Openwire (MA-071); that original collapse has since RECOVERED (cycle 13) but the format idea itself remains valid — checkout-stage trust reinforcement is a generally useful lever, not tied to one incident. Next in line once a slot frees. | MA-073 |
| CF-57 | Ambient ASMR Unboxing (cycle 12) | Sensory/ASMR lever — product-sound-only unboxing (rustling packaging, driver click, case snap) with no voiceover or music, distinct from CF-51's silent visual demo by leaning on audio texture/ASMR rather than a silent visual close-up of the mechanism | UNTESTED | — | Appended 2026-08-27 (cycle 12), motivated by an ad-hoc, un-registered ad ("Unboxing ASMR Vid | Comm | 25 Aug 26") already reading an 18.00× platform ROAS on a thin ₹196.11/21d, 1-purchase sample. Cycle 13: a second, independent instance (SafeBuds) shows the account's best hook (17.45% of impressions) AND best retention (46.3% p75/p25) — see CF-58. Recommend CF-57/58 jump the rotation queue ahead of the older, still-blocked CF-31/37/51. | MA-079 |
| CF-58 | ASMR Unboxing — SafeBuds (cycle 13) | Same sensory/ASMR-unboxing lever as CF-57, built natively for SafeBuds rather than Comm — a second, independent SKU application of the same format idea | UNTESTED | — | Appended 2026-09-03 (cycle 13), motivated by "ASMR Unboxing Vid | Safebuds | 31 Aug 26" — best hook (17.45% of impressions) AND best retention (46.3% p75/p25) of any ad diagnosed this cycle, on a thin ₹1,191.56/21d, 2-purchase sample. **Cycle 14 update: this motivating ad's host campaign (safebuds_20Apr) has since gone fully dark (MA-089) — the ad no longer appears in the live pull. CF-58 stays UNTESTED in the register regardless.** | MA-088 |
| CF-59 | Silent Subtitle Testimonial (NEW, cycle 14) | A muted-autoplay-safe lever — bold on-screen captioned testimonial (real customer language, no voiceover reliance, no ASMR/sound-texture dependence), distinct from CF-51 (silent product demo, not a testimonial) and CF-57/58 (sound-reliant ASMR-unboxing) | UNTESTED | — | Appended 2026-09-10 (cycle 14), motivated by Broad Interest now carrying 79% of the account's live spend — the only campaign with enough real volume to safely host a new challenger test this cycle. Next in line once a slot frees. | MA-093 |

*(Block B is a starting expansion, not exhaustive — append `CF-60+` as new formats are conceived each cycle.)*

---

## SCALE HYPOTHESIS BACKLOG (per COMPANY_STATE §5.5 — test → validate → scale at constant ROAS)

> Standing list of falsifiable scaling bets. Each must clear the Meta scale bar (ROAS ≥ 8×, CPP ≤ SKU floor, freq < 2.5×) on a small test before earning scale budget; each scaled lever gets a standing ROAS watch and reverts here on decay.

| # | Hypothesis (metric + threshold) | Test (smallest move) | Status | Linked queue |
|---|---|---|---|---|
| SH-MA-1 | LAL campaign (52576570206220) re-launch with Gadgetbhai creative only. | Removed from active pursuit — MA-012 rejected 2026-06-30. **Cycle 4 update:** the campaign is now PAUSED with zero delivery regardless of creative mix (see MA-018) — the creative-mix question is moot until the campaign is confirmed running again. | STALLED — campaign dark, not a creative-mix problem right now. Still dark as of cycle 14. | MA-012, MA-018 |
| SH-MA-2 | A new review/explainer Comm 2.0 creative beats the Custom Reel's ROAS and clears the 8× bar. | **Cycle 4 update: hypothesis partially overtaken by events.** Custom Reel itself recovered to 10.50× ROAS this week (from 4.95× the prior week) without any creative swap — it now clears the 8× bar on its own. Hold off shipping a replacement creative until a second consecutive weak week confirms real decay (see cycle-4 learning: single-week dips on <₹3K/week spend are noisy). **Cycle 5 update: decayed again (CPP ₹437, ROAS 7.56×, weakest in its adset) — RE-OPENED, non-budget rotation drafted (MA-030). Cycle 6 update: recovered again (CPP ₹352, ROAS 9.38×) — third decay/recovery cycle logged, MA-030 stays queued but not urgent.** | WATCHING — ES Comm 2 has now collapsed a 5th consecutive cycle; Custom Reel doesn't reappear distinctly in cycle 14's ad-level data. Re-assess creative mix once the campaign's instability is resolved. | MA-003, MA-006, MA-012, MA-030 |
| SH-MA-3 | boAt clip-on open-ear ads on Meta India do NOT erode NG SafeBuds CPP over 4 weeks — health/education hook stays differentiated from boAt's lifestyle/feature framing. | Watch SafeBuds CPP/ROAS week-on-week alongside boAt ad longevity check. | CONFIRMED so far — 10+ consecutive weeks; the safebuds_20Apr campaign's current problem is a self-inflicted stoppage (MA-089), not a boAt-driven CPP shift. Keep watching once the campaign resumes. | MA-004 |
| SH-MA-4 | Broad audience (no LAL constraint) with Techopedia SafeBuds review creative achieves CPP ≤ ₹291 and ROAS ≥ 8× within 7 days (EXP-002). Meta Andromeda 2026 signal: creative IS the targeting. | ₹10K test, 7-day read, broad India interest layer only. | **VALIDATED (cycle 8). Cycle 14: Broad Interest is now 79% of the account's live spend, platform ROAS 10.46×, own-tag GA4-dir ROAS 6.32× (above floor) — the account's sole reliable floor-clearer this week. The MA-077 UTM fix (3-way merged tag) is approved but still not shipped — this own-tag read is encouraging but not yet independently fully verified.** | MA-013, MA-048 |
| SH-MA-5 | ES Lite review Reel (EXP-003) achieves CPP ≤ ₹265 and ROAS ≥ 8× within 7 days on fresh interest audience. Unlocks a third revenue line now stock is cleared. | ₹10K test, 7-day read, ES Lite interest audience. | **CLOSED via /approvals 2026-09-09 (MA-056) — Meet investigating directly, not agent-actionable.** | MA-014, MA-021, MA-022, MA-041, MA-056 |
| SH-MA-6 | SafeBuds LAL 3–5% expansion with health/education hook (EXP-004) holds ROAS ≥ 10× and CPP ≤ ₹350 within 7 days — validating both the audience expansion AND the health-hook creative together. | ₹12K test, 7-day read, LAL 3–5% + new health-hook creative. | OPEN — not re-queued; safebuds_20Apr 26 has a bigger, more urgent problem this cycle — it's gone fully dark (MA-089) — audience expansion is not the right lever until the campaign resumes and the account itself re-clears 6.0. | MA-015 |
| SH-MA-7 | (EXP-006) Gujarati-voiceover SafeBuds review Reel, added as a 3rd ad inside the existing SafeBuds LAL 1% ad set (no new ad set, no geo constraint), matches/beats the ad set's blended CPP ₹258.08 and clears ROAS ≥8× within 7 days at ₹800/day. NET-NEW BET — no prior Purchase-optimized regional-language creative; only adjacent, non-predictive signal is the Kannada awareness reel (THRUPLAY, no purchase data). | ₹5,600 test (₹800/day × 7d), read at ad level vs. the two live SafeBuds controls. | **MOOT — host campaign (safebuds_20Apr) fully dark (MA-089).** | MA-024, MA-033, MA-058 |
| SH-MA-8 | (EXP-007) Telugu-voiceover Comm 2.0 review Reel, added as a 5th ad inside the existing Comm 2.0 LAL 1% ad set (no new ad set, no geo constraint), matches/beats the ad set's blended CPP ₹242.21 and clears ROAS ≥8× within 7 days at ₹600/day. PURE NET-NEW BET — Comm 2.0 has zero prior regional-language creative of any kind (not even an awareness precedent). | ₹4,200 test (₹600/day × 7d), read at ad level vs. the three live Comm 2.0 controls. | **Host campaign (ES Comm 2) collapsed a 5th consecutive cycle (MA-085). Re-assess once the host campaign stabilizes.** | MA-025, MA-032, MA-057 |
| SH-MA-9 | Pausing the TOFU Kannada office reel (zero platform-attributed purchases, now several consecutive weeks) does not measurably shrink the Retargeting campaign's reach/pool health, and blended TRUE ROAS improves by narrowing the gap to the 6.0 floor — testing whether the institutionally-assumed "TOFU feeds the retargeting pool" role is actually true or just an untested assumption carried since cycle 1 (2026-06-27). | Pause the single ad for 7–14 days; no budget redeployed elsewhere. Re-read Retargeting reach/frequency and blended TRUE ROAS at D+7 and D+14. | **CLOSED via /approvals 2026-09-09 (MA-055) — Meet investigating directly, not agent-actionable.** | MA-028, MA-055 |
| SH-MA-10 | MOFU_PDP & Video Thruplay _24 May 26 campaign, once fully paused, frees ₹3,492.64/week with zero measurable loss to any converting funnel stage (it has driven 0 purchases 2 straight weeks) — the freed spend funds SH-MA-7 reallocation + the CF-31/CF-37 format tests without needing net-new budget. | Pause the full campaign (MA-031); confirm at D+7 spend→₹0 and no revenue/CVR impact elsewhere. | **CONFIRMED HELD** — the campaign no longer appears at all in the 35-day campaign pull, re-confirmed again this cycle (cycle 14). | MA-031 |
| SH-MA-11 | CF-31 "Expert/audiologist explainer" challenger ad inside the safebuds_20Apr 26 LAL adset clears the review-format control (CPP ≤ ₹380, ROAS ≥ 8×, freq < 2.5×) within a 7-day read at ~₹5,000 spend. | ₹5,000 test, 7-day read, funded by MOFU-cut reallocation (MA-031). | **STALLED 10 cycles running — blocked on Meet's compliance call, 0 impressions delivered. Standing Meet agenda item (MA-059).** | MA-034, MA-046, MA-052, MA-059 |
| SH-MA-12 | CF-37 "Fear-of-loss health hook" challenger ad inside the ES Comm 2 adset clears the review-format control (CPP ≤ ₹450, ROAS ≥ 8×, freq < 2.5×) within a 7-day read at ~₹5,000 spend. | ₹5,000 test, 7-day read, funded by MOFU-cut reallocation (MA-031). | **STALLED — 0 impressions delivered; host adset (ES Comm 2) has now collapsed a 5th consecutive cycle.** | MA-035, MA-046, MA-052, MA-059 |
| SH-MA-13 | CF-51 "Silent Sensory Demo" challenger ad inside the safebuds_20Apr 26 hero adset clears the review-format control (CPP ≤ ₹380, ROAS ≥ 8×, freq < 2.5×) within a 7-day read at ~₹5,000 spend. | ₹5,000 test, 7-day read, funded by MA-042/043 reallocation (~₹1,036/14d) — no net-new spend. | **STALLED — brief still not produced, 10 cycles after being rotated in; host adset now fully dark (MA-089).** | MA-045, MA-052, MA-059 |
| SH-MA-14 | Openwire (Type-C wired) campaign clears CPP ≤ ₹350 and platform ROAS ≥ 8× by 2026-08-12 (7-day read from its 2026-08-05 launch), consistent with the 2026-08-05 daily brief's 5.17% PDP CVR signal (vs SafeBuds' 0.75%). | No change — campaign already live at its current small spend; this is a read-plan/threshold only. | **Cycle 14 update: own-tag GA4-dir ROAS reads 4.99× this week (below floor, spend -64.4%) — the UTM fix (MA-077) is approved but still not shipped, so this may still be an undercount.** | MA-047, MA-062, MA-076 |
| SH-MA-15 | "Broad Interest Based-24 Jul 26" campaign's +20% budget step (MA-048) holds GA4-directional ROAS ≥8× and platform CPP ≤₹380 within a 7-day read, confirming the organic-growth signal was real and not a one-week artifact. | +20% budget step, ~₹1,515/day → ~₹1,818/day, 7-day read. | **Cycle 14 update: this campaign is now 79% of the account's live spend, own-tag GA4-dir ROAS 6.32× (above floor) — the account's sole reliable floor-clearer. Still gated behind the MA-077 UTM fix for full independent verification, and behind MA-083's account-wide budget HOLD for any step.** | MA-048 |
| SH-MA-16 | Openwire_5 Aug 26's first-ever +20% budget step (MA-062, ~₹1,057.58/day → ~₹1,269/day) holds CPP ≤₹350, platform ROAS ≥8×, and GA4-directional ROAS ≥6× within a 7-day read, confirming the SKU's organic-growth signal survives an actual budget increase. | +20% budget step, 7-day read. | **STILL ON HOLD, cycle 14 — own-tag GA4-dir ROAS fell back to 4.99× this week — do not re-open a budget step regardless (account-wide budget HOLD, MA-083).** | MA-062, MA-076 |
| SH-MA-17 | Re-editing the 8–20s body of "Tech in Gujarati Reel_Openwire Hindi Dub_5 Aug" (leaving the 0–2s hook untouched) raises its video_p75/p25 watch-through ratio from 24.0% to ≥40% while holding CPP ≤₹120 and platform ROAS ≥8× within a 7-day read — isolating body-retention as a fixable, separate problem from the ad's already-strong hook. | ~₹3,000 test spend, 7-day read, funded by CUT-list reallocation (MA-063/064), no net-new budget. | **STILL NOT PRODUCED — no DEEP_WEEK diagnostic this cycle (off-week); last read (cycle 13) p75/p25 20.9%, 3rd consecutive declining read. Next diagnostic due 2026-09-17.** | MA-066 |
| SH-MA-18 | A checkout-flow technical/UX fix (once diagnosed per MA-071) recovers checkout→purchase conversion in Broad Interest and Openwire back toward their pre-collapse levels within 7 days of the fix landing, confirming a shared technical cause rather than two coincidental campaign-level declines. | No spend — diagnostic + technical fix, re-read via GA4 funnel metrics at D+7. | **✅ CONFIRMED, cycle 13 — C2P recovered in both campaigns. No fresh funnel read this cycle (off-week); next DEEP_WEEK 2026-09-17.** | MA-071 |
| SH-MA-19 | New campaign "Pulse Fitness Band \| 24 Aug 26" clears CPP ≤₹450 and GA4-directional ROAS ≥8× by D+7 (2026-08-31), consistent with its early read (CPP ₹408.53, GA4-dir ROAS 8.64× on ₹1,225.59 spend, CVR 0.82% — own-tag GA4 match confirmed direct and reliable). | No change — campaign already live at its current small spend; this is a read-plan/threshold only. | **✅ VALIDATED, re-confirmed cycle 14 — CPP ₹212.82, platform ROAS 16.25×, GA4-dir ROAS 11.65× — best unit economics on the account. Budget-step candidate queued, still gated behind the account-wide TRUE ROAS floor clearing (MA-083).** | MA-078 |
| SH-MA-20 | A checkout-flow/offer audit specific to safebuds_20Apr's PDP and creative mix (motivated by MA-084) recovers its checkout→purchase rate from 15.4% back toward its pre-collapse baseline (32.0%) within 7 days of MA-080/081 (hero-ad pause + placement exclusion) executing, confirming the leak was creative/placement-driven rather than a separate checkout-technical issue. | No spend — diagnostic + creative/placement fix (MA-080/081), re-read via GA4 funnel metrics at the next DEEP_WEEK (2026-09-17). | **OVERTAKEN — campaign now fully dark (MA-089), no cur7d funnel to read. Re-diagnose at the next DEEP_WEEK if/when it resumes.** | MA-084 |
| SH-MA-21 | Excluding safebuds_20Apr's Facebook Reels placement (CPP ₹1,138.98 vs blend ₹566.49) improves the campaign's blended CPP toward ₹566 or better within a 7-day read, recovering roughly ₹4,008/week in excess spend. | No spend change — placement exclusion only. | **MOOT — campaign fully dark (MA-089), no placement is spending at all to exclude from.** | MA-081 |
| SH-MA-22 | Pausing/deprioritizing "Techopedia Safebuds Reel_17May 26" (CPP ₹1,026.02, ROAS 2.62×) and reallocating priority to "Nobody Tech Safebuds Reel_30Jun26" + the two new SafeBuds ads lifts safebuds_20Apr's blended CPP/GA4-directional ROAS back toward or above the 6.0 floor within a 7-day read, with no net-new spend. | Pause/deprioritize one ad, reallocate priority within the existing adset — no budget change. | **MOOT — the ad itself stopped delivering 2026-08-31 and the whole host campaign has since gone fully dark (MA-089).** | MA-080 |
| SH-MA-23 (NEW, cycle 14) | Confirming and resolving the cause of safebuds_20Apr's 6-consecutive-day full stoppage (MA-089) restores the campaign to real delivery within 3 days of Meet's investigation, at which point MA-080/081's already-approved fixes can execute meaningfully. | No spend — diagnostic escalation only; re-read at D+3 (2026-09-13). | **NEW — drafted 2026-09-10 (cycle 14), see MA-089.** | MA-089 |
