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
  climbing steadily (+32.6% over 4 cycles) while ad-level frequency stays nowhere near the 2.5× gate —
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
  zero-purchase-cut staleness lesson from MA-054.
- **NEW (2026-08-20, cycle 11):** checkout→purchase conversion can collapse simultaneously across
  multiple unrelated campaigns while session→ATC and ATC→checkout hold steady in all of them — a
  pattern that points at a shared checkout-stage cause (payment/trust/technical) rather than a
  per-campaign landing-page or creative problem. When funnel diagnostics show this shape (upstream
  stages flat, only the final stage moving, across ≥2 campaigns), escalate as a technical/UX checkout
  audit, not a Meta creative/targeting lever.

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
4. Data Quality (CAPI + Pixel, high-match params, dedupe) — proof: 13% cost-per-result improvement. **NG has a confirmed, quantified problem here: 138x Meta/GA4 discrepancy from broken UTM tags (`ng-product-page-cro`), and Meta-claimed ROAS 9.1x vs GA4 last-click 1.6x vs true estimate ~4.5-5.5x (`ng-paid-marketing-performance-jan-may26`). This is the single highest-leverage, most evidenced fix in the whole guidebook for us.** **Cycle 5 (2026-07-14) update: this exact failure mode recurred — 2026-07-13 GA4 traffic had 70.3% of session revenue land as `(not set)/(not set)`, the same tagging-break pattern, now affecting the live TRUE ROAS floor read directly (see cycle 5 entry below). This is no longer a historical data-quality note — it is actively distorting the account's most important number in real time.** **Cycle 6 (2026-07-16) update: recurred a THIRD time — 2026-07-15 landed 60.3% of that day's session revenue as `(not set)/(not set)` (₹32,878 of ₹54,520). This week's TRUE ROAS verdict (6.65×) already clears the floor including the bad day, so it didn't flip a decision this time, but the pattern is now recurring roughly weekly — MA-029's escalation stands, unresolved.** **Cycle 7 (2026-08-06, morning) update: escalated further still — the GA4 connector itself was fully disconnected in Windsor (zero configured accounts, not a tagging break), blocking every GA4-based number that cycle entirely. See MA-039.** **Cycle 8 (2026-08-06, same-day correction) update: RESOLVED architecturally — GA4 access moved to a direct Analytics Data API call, bypassing Windsor entirely. All 4 GA4 pulls this cycle succeeded, truncation guards passed, reconciliations matched exactly. The specific ES Comm 2 UTM-tag mismatch (MA-037) is, however, still unresolved — prior-week revenue is still landing under the stale "Comm LAL 1% 13 Nov 25" tag, confirmed directly via the new direct-API pull.** **Cycle 9 (2026-08-13) update: MA-037's mismatch is STILL unresolved — this cycle's GA4 pull again shows the bulk of ES Comm 2's real revenue landing under the "Comm LAL 1% 13 Nov 25" tag. Separately, a NEW tagging bug found this cycle: `{{campaign.name}}`/`{{ad.name}}` unresolved dynamic-UTM template variables are losing real Meta revenue (₹7,058 cur7d, ₹5,798+₹1,829 prior7d) to an unattributable bucket — distinct from the known ES Comm 2 and ES Lite (ad-name-as-campaign) tagging bugs. Also confirmed the GA4 attribution-maturity lag (~D+2, already known from the daily brief's "matured D−2" framing) materially affects the newest day in any trailing-7d GA4 window — 2026-08-12 carried 55.1% (not set)/(not set) share vs <5% every other day pulled, dragging the naive marginal-ROAS calc to a misleading 1.56× vs a matured 7.04×. Recommend the compute script always report both the headline and a matured (excl. last day) recompute going forward.** **Cycle 10 (2026-08-13, same day, live re-pull) update: this session's own live pull shows NO material `(not set)` spike anywhere in the 14-day window (max 3.5% on 08-04, 08-12 itself at 0.0%) — a materially cleaner read than cycle 9's logged 55.1% figure for the same calendar day. Both cycle 9's and this cycle's numbers are independently sourced from live pulls at different times of day; treat the discrepancy as evidence the `(not set)` share on a given day can itself keep resolving/maturing intraday (attribution catching up), not as a contradiction to flag as broken — re-affirms why the matured recompute convention should stay standard practice.** **Cycle 11 (2026-08-20) update: recurred again, larger — 19 Aug (the newest day in this cycle's trailing-7d window) carried 74.6% of that day's GA4 session revenue as `(not set)/(not set)`, vs ≤2.5% every other day in the 14-day pull. Same structural D+2 pattern, not new — the matured 6-day recompute (7.58× TRUE ROAS) was used as the reliable read instead of the raw headline (6.48×), consistent with the cycle 9/10 convention.**
5. Results Validation (A/B, lift, MMM) — proof: orgs investing in measurement 44% more likely to exceed revenue goals. **NG has zero formal lift/MMM testing — the 3-month test matrix (EXP-001–008) is directionally this, but reads are CPP/ROAS trend, not incrementality.**

**Reels Creative Essentials:**
- 9:16 + sound-on + safe zone (bottom 35%, top ~14%, side 6% clear) = 34.5% lower CPA than image, 15% lower than non-optimized video, 2x delivery, +39% CTR vs safe-zone violators. **Action lens: audit whether Gadgetbhai/Techopedia/EXP-001-005 creative briefs specify safe-zone framing explicitly — currently our brief template (§5c) does not.**
- Partnership/creator ads as always-on: -19% CPA, +53% CTR. **We already lean on named reviewers (Gadgetbhai, Techopedia) — this is validation to formalize them as an "always-on partnership" line, not one-off Reels.**

**Business Messaging / WhatsApp — highest-relevance chapter for NG right now:**
- 86% of Indian online adults message a business weekly; WhatsApp full-funnel (CTWA discovery → guided shopping → reminders → utility purchase msgs → personalized re-engagement) shows +61% avg ROAS in Meta cases.
- **NG's own data already proves this channel: WhatsApp/Bitespeed CVR is 4.93% — the single best-converting channel on the entire account, beating Meta paid social, Google, even organic search** (`ng-paid-marketing-performance-jan-may26`). And there are 1,111 unworked abandoned checkouts (₹36.8L) with zero retargeting follow-up for most of the period.
- **This is the guidebook chapter with the clearest, most evidenced NG action: build CTWA ads that route cold/warm Meta traffic into WhatsApp instead of (or alongside) the website, and pair with a WhatsApp abandoned-checkout recovery sequence.** This was flagged as Top-7 Problem #2 in the paid-performance memory and has not yet been executed as a Meta creative/campaign structure.

**Full-Funnel:**
- Blending upper+mid+lower funnel: +70% ROI (adding upper to mid), Reach-alongside-DR: +2x reach / +31% incremental sales at +25% spend. **NG currently has almost no TOFU layer** (learning-log cycle 1: "No TOFU layer... all campaigns are conversion objective on cold/warm LAL"). One awareness exception — "Kannada office reel_Safebuds_Live translation" at 3.42M reach, ₹0.025/thruplay — is working as an unintentional TOFU test.
- **Caution for our stage:** full-funnel is a saturation-relief play for accounts that have run out of room in performance-only buying. NG is not yet saturated at the account level (LAL 1% pools of 25-30K, not exhausted at scale) — the honest read is our TOFU gap is really a retargeting-pool-refill problem (pools exhausting in 6-8 weeks per learning-log) more than a "we've maxed performance, time to go upper-funnel" problem. Treat full-funnel as Month 2-3 lever once Performance 5 fixes (account simplification + data quality) are done, not a first move.
- **Cycle 5 (2026-07-14) tension flagged:** the Kannada TOFU reel has now shown 0 platform-attributed purchases for 14 straight consecutive days (₹4,823.46/7d) — the "unintentional TOFU test" framing above has never been validated against an actual pool-health metric. MA-028 (queue-inbox) is a direct falsifiable test of this exact open question: pause it, watch Retargeting reach/frequency for 7-14 days, see if it actually matters.
- **Cycle 6 (2026-07-16) update:** still 0 purchases (₹4,765.73 this week) — MA-028 remains pending human sign-off; not re-drafted, tracked only.
- **Cycle 7/8 (2026-08-06) update:** the Kannada reel no longer appears at all in the 21-day ad×day pull (last spend 2026-07-17) — appears to have gone fully dark, consistent with MA-028's pause holding. GA4 (now restored via direct API) shows no material change to Retargeting's pool health beyond what's separately flagged in MA-050 (its directional ROAS softening) — nothing ties that softening specifically to the Kannada reel's absence; treated as unrelated.
- **Cycle 9 (2026-08-13) update:** Retargeting itself has now collapsed (see MA-055) — the Kannada-reel question is fully moot until the host campaign's own status is confirmed.
- **Cycle 10 (2026-08-13, same day) update:** Retargeting remains collapsed (₹185.95/7d, 0 purchases, 12 GA4 sessions) — no change, MA-055 still the live escalation.
- **Cycle 11 (2026-08-20) update:** Retargeting still effectively collapsed relative to its historical baseline (₹905.70/7d off a tiny base, 57 GA4 sessions, ₹0 GA4-tagged revenue) — MA-055 still unresolved, now a 3rd consecutive cycle with no cause logged.

**Explicitly DEFERRED for NG's stage (do not action, re-evaluate only when triggers hit):**
- Cross-border chapter (Bid Multiplier, Multi-Language Ads, Web2App, Dynamic Ads by country/language) — only relevant once the UAE demand test (`ng-uae-market-context`) passes pass/fail thresholds. Until then, India-only.
- Hyper-Growth/Expansion chapter tactics (offline, app-retention, saturation-scale plays) — NG is Early Stage, not Growth/Hyper-Growth; these assume PMF is done and category is established. Ours is still being created.
- Blind ASC/Advantage+ full account migration — the guidebook's automation proof (+32% ROAS) is real, but do not hand full budget/targeting control to Advantage+ before the account's own data-quality problem (CAPI/UTM) is fixed — automation on bad signal amplifies the bad signal.

**Standing rule:** every future Meta ideation/analysis session should check new creative briefs and audience/spend tests against this Performance-5 + Reels + WhatsApp + Full-Funnel lens before drafting, and flag explicitly which guidebook proof-stat motivates the test (or note NET-NEW if none applies).

## REJECTED / DEAD ENDS
- Non-Techopedia SafeBuds creatives — ₹4,075 spent, ROAS <3× or zero. Do not retry feature/UGC/static for SafeBuds.
- Dayparting / time-based budget redistribution (founder hypothesis, Jul-9-2026) — rejected on hourly data. Spend is NOT front-loading before 11 AM (Meta 27–35%, Google 28–37% of daily spend pre-11AM; Meta's heaviest hours are 8–11 PM). Pre/post-11AM ROAS flips daily on 10–15 orders/day — no stable hour-of-day edge to exploit. See 2026-07-09 cycle entry. Re-open only with a 14–30 day hourly aggregate showing a persistent gap.

---

## CYCLE LOG (most recent first)

### 2026-08-20 — Cycle 11 (Thursday teardown, DEEP_WEEK — biweekly deep-diagnostics): margin narrows, two campaigns fall under the floor directionally, checkout collapse shared across campaigns

**Initiative:** Weekly campaign-level teardown per the standing Thursday cadence. `DEEP_WEEK` computed
first (ISO week 34, even → deep-dive cycle). Pulls, all direct HTTPS inside one COMPUTE script (0
Windsor/MCP calls): Meta campaign×day 35d (2026-07-16→08-19, 155 rows), Meta ad×day 21d (2026-07-30→
08-19, 247 rows), Meta ad-diagnostics cur7d agg (15 rows, DEEP_WEEK), Meta campaign×placement cur7d agg
(66 rows, DEEP_WEEK), GA4 account src/medium×day 14d with `addToCarts`/`checkouts` (413 rows, rowCount
413, PASS), GA4 campaign×src/medium cur7d (101 rows, PASS) and prior7d (91 rows, PASS) with funnel
metrics, GA4 account src/medium MTD (83 rows, PASS). Purchase action-type sanity check: `omni_purchase`,
`offsite_conversion.fb_pixel_purchase`, `web_in_store_purchase` all summed to an identical 951.00 on the
campaign pull — no divergence. Campaign-level spend reconciled exactly to account spend; placement-sum
reconciled to campaign spend within ₹0.10 (rounding) on all 5 live campaigns.

**Hypotheses tested / findings:**

1. **Does the account clear the 6.0 floor and marginal-ROAS gate this week?**
   **Result: yes on the reliable read, with a narrower margin.** Raw cur7d (13–19 Aug): spend
   ₹67,189.36, GA4 Meta-paid revenue ₹4,35,310.75 → TRUE ROAS **6.48×** (prior7d 7.80×). 19 Aug (newest
   day) carried 74.6% of its GA4 session revenue as `(not set)/(not set)` vs ≤2.5% every other day —
   the same recurring D+2 maturity spike. Matured 6d (13–18 Aug): spend ₹56,557.78, revenue ₹4,28,683.75
   → TRUE ROAS **7.58×**, the basis for every call this cycle. Marginal ROAS: naive raw-window figure is
   a nonsensical −3.54× (same maturity artifact); matured-vs-matured (6-day clean windows both sides):
   Δspend/day ₹1,452.75, Δrevenue/day ₹10,711.02 → **7.37×**, clears the gate. MTD (1–19 Aug): spend
   ₹1,58,772.61, revenue ₹11,50,664.05, TRUE ROAS **7.25×** — on pace for the month.
2. **Are all campaigns still clearing 6.0 on a GA4-directional basis, or is platform ROAS hiding a
   breach?** **Result: no — two are not, for the first time.** safebuds_20Apr 26 (48.6% of cur7d Meta
   spend, the account's largest campaign) reads platform ROAS 8.15× but GA4-directional ROAS **5.89×**
   (prior 6.38×) — below the floor. Openwire_5 Aug 26 reads platform ROAS 6.35× but GA4-directional
   **5.42×** (prior 8.78×, a hard reversal from last cycle's scale-ready read) — also below the floor.
   Both platform numbers looked fine; only the GA4-directional cross-check caught the breach — the
   exact blind spot cycle 8's Retargeting finding first warned about. Escalated as MA-070 (safebuds) and
   downgraded MA-062 to HOLD (Openwire).
3. **What changed to cause Openwire's reversal, and did the account scale into it?**
   **Result: nothing was scaled — the pending budget step never executed, and that discipline paid
   off.** MA-062's +20% step (drafted cycle 9/10, "strongly recommend executing") sat pending. This
   week Openwire's CPP worsened +30.9% (₹96.17→₹125.89), platform ROAS fell 8.72×→6.35×, GA4-directional
   fell 8.78×→5.42×. Had the step executed, the account would have scaled budget directly into this
   decline. Downgraded MA-062 to HOLD; do not scale until 7 clean days re-clear the floor directionally.
4. **Broad Interest's 2-week no-touch window (from MA-048) expired today (2026-08-20) — does the
   account step again?** **Result: no — HOLD.** GA4-directional ROAS kept falling (10.00×→7.75×,
   still >6.0) and CPP rose +19.0%. A no-touch window expiring is not itself a reason to step; the
   week's own read has to justify it, and this week's doesn't.
5. **New diagnostic pulls (ad-diagnostics + campaign×placement, both DEEP_WEEK) — what did they find,
   and does last cycle's MA-064 placement finding still hold?**
   **Result: MA-064's basis flipped — a different placement is this week's real problem.**
   safebuds_20Apr's Instagram Feed (flagged as the worst placement last cycle, CPP ₹536.41, MA-064
   drafted to exclude it, never executed) recovered to CPP ₹301.92 this week — *better* than the
   adset's own blend (₹340.39). Marked MA-064 DO NOT EXECUTE. The real placement problem this week:
   **Broad Interest's Instagram Reels** — ₹7,384.56 (46.6% of campaign spend) at CPP ₹410.25, 29.4%
   worse than the campaign's blend (₹317.20). New placement CUT drafted (MA-069). **Auction quality:
   clean**, no `BELOW_AVERAGE` ranking on any of the 9 ads spending ≥₹500 this week. **Hook retention:**
   Openwire's hero ad still has a strong hook (p25 = 10.1% of impressions) but its body-retention
   slipped further (p75/p25 now 21.5%, down from 24.0% last cycle) — MA-066's re-edit test remains
   unproduced and is now more urgent given the ad's broader reversal.
6. **Funnel diagnostic (funnel metrics, DEEP_WEEK) — any specific broken stage?**
   **Result: two distinct leaks.** (a) safebuds_20Apr's own funnel keeps softening at the top —
   session→ATC 10.8%→10.1%, ATC→checkout 51.4%→49.7% (checkout→purchase actually improved,
   41.2%→42.6%) — restates and escalates MA-065 with this cycle's floor-breach evidence (MA-070). (b)
   **New finding: checkout→purchase collapsed simultaneously in Broad Interest (41.8%→31.9%) and
   Openwire (27.1%→19.3%)** while both campaigns' upstream funnel stages (session→ATC, ATC→checkout)
   held or improved — pointing at a shared checkout-stage problem (payment/trust/technical), not a
   landing-page mismatch. Escalated as a checkout-flow technical/UX audit request (MA-071).
7. **MA-061's Tamil/Kannada SafeBuds read-plan hit its 2026-08-19 decision date — VALIDATED or
   REJECTED?** **Result: neither — uninterpretable.** Delivery collapsed this week to ₹196.27 (Tamil,
   1 purchase) and ₹42.97 (Kannada, 0 purchases), both far below their spend 1–2 weeks prior — the same
   under-delivery failure mode already correctly diagnosed for Telugu Comm (MA-032). Extended the
   read-plan and requested a delivery diagnostic (MA-072) rather than closing on a thin sample.
8. **Zero-purchase check (21d ad pull) — anything new, and does the standing backlog still hold?**
   **Result: two new trivial finds, backlog re-confirmed.** New: "Tech in Gujarati_Safebuds Reel_13
   Jul 26 – SME Owner campaign" (₹3.76/21d) and "Reel_TVC" (₹1.46/21d), both 0 purchases (MA-068). The
   MA-042/043/051/063 cluster all re-confirm zero purchases again (₹691.56/₹90.87/₹33.56/₹22.17),
   combined named waste this cycle ₹843.38/21d (~₹281/week) — now sitting unexecuted for 2 to 7+ cycles.
9. **MA-058's hero-adset rebalance — did it work?** **Result: partial.** Techopedia_17May26's
   concentration improved 88.3%→71.6%, Nobody Tech's share grew 7.3%→27.6% — a genuine positive move.
   But "Tech in Gujarati_Safebuds Reel_13 Jul 26," which delivered ₹5,812.28/18 purchases/8.19× ROAS
   over the prior ~2 weeks per the 21d pull, is dark again THIS week specifically (₹0 cur7d) — an
   intermittent on/off delivery pattern, not a clean fix. Kept the delivery-diagnostic ask open.
10. **Format engine — any change?** **Result: no, worse — now 0/5, 7th straight cycle.** CF-31, CF-37,
    CF-51, CF-54, CF-55 all show zero impressions again. Re-confirmed MA-059, recommended it become a
    standing Meet agenda item rather than a weekly repeat draft. Appended net-new format **CF-56
    "Checkout-Trust Overlay"** (MA-073), directly motivated by this cycle's own checkout→purchase
    collapse finding (MA-071) — a specific trust/guarantee card timed at the exact leaking funnel stage.

**Actions this cycle:** MA-068 (CUT, 2 new trivial zero-purchase ads), MA-069 (CUT, Broad Interest IG
Reels placement exclusion), MA-070 (FIX, safebuds_20Apr floor breach, escalates MA-065), MA-071 (FIX,
shared checkout→purchase collapse), MA-072 (FIX/TEST, extend MA-061's read-plan), MA-073 (TEST, append
CF-56); MA-062 downgraded to HOLD (Openwire reversal); MA-064 marked DO NOT EXECUTE (stale basis);
MA-042/043/051/054/055/056/057/058/059/061/065/066 all re-confirmed/updated inline with fresh numbers.

**Learning carried forward:**
- **Platform ROAS masking a GA4-directional floor breach isn't limited to small/declining campaigns —
  it hit the account's single LARGEST campaign this cycle** (safebuds_20Apr, 48.6% of spend). Always
  run the GA4-directional check on every live campaign every cycle, not just ones that already look
  weak on platform numbers.
- **A pending, unexecuted budget-step draft is not neutral — it's a hedge.** Openwire's MA-062 step
  would have added budget directly into a week where the campaign's own margin collapsed below the
  floor. The ratchet discipline (never scale on a stale read, always re-verify before executing) is
  what prevented that this cycle, not luck.
- **Placement-exclusion and zero-purchase-cut staleness are the same failure mode** — re-verify both
  fresh every cycle before executing; a "worst placement" or "confirmed cut" from one cycle can flip
  or resolve within a single week.
- **A funnel-diagnostic signature (upstream stages flat/improving, only the final stage moving) shared
  across multiple otherwise-unrelated campaigns is a strong signal of a shared, non-creative root
  cause** — worth escalating as a technical audit rather than diagnosing each campaign separately.

---

### 2026-08-13 — Cycle 10 (Thursday teardown, live independent re-run): floor + margin clear on fresh pull, Openwire re-validated, IG Feed placement + funnel + hook-retention diagnostics

**Initiative:** Weekly campaign-level teardown per the standing Thursday cadence, re-run live and
independently this session: Meta campaign×day (35d, 2026-07-08→08-12, 168 rows, direct Marketing API —
`access_token` as a query param 400'd with "Malformed access token," switched to `Authorization: Bearer`
header, which worked), Meta ad×day (21d, 2026-07-22→08-12, 282 rows), Meta ad-diagnostics cur7d agg (14
rows, new this cycle), Meta campaign×placement cur7d agg (61 rows, new this cycle), GA4 direct-API
account src/medium×day 14d (417 rows, rowCount 417, truncation guard passed; `addToCarts`/`checkouts`
funnel metrics confirmed live, no 400), GA4 campaign×src/medium cur7d (91 rows) and prior7d (104 rows),
GA4 account src/medium MTD (72 rows). Two transient Meta 503s mid-run, resolved with a 4-attempt
backoff. Reconciled exactly: GA4 14d raw sessions 25,843.00=25,843.00, revenue ₹12,96,699.80=
₹12,96,699.80; MTD raw sessions 22,127.00=22,127.00, revenue ₹11,18,595.05=₹11,18,595.05; ad-spend to
campaign-spend and placement-spend to campaign-spend both exact (₹0.00 diff) on every live campaign.

**Hypotheses tested / findings:**

1. **Does the account clear the 6.0 TRUE-ROAS floor and the marginal-ROAS gate on this fresh, live pull?**
   **Result: yes, cleanly, no maturity artifact this time.** Cur7d (2026-08-06→08-12): spend
   ₹59,362.02, GA4 Meta-paid revenue ₹4,62,950.05 → **TRUE ROAS 7.80×**. Prior7d: spend ₹47,145.16,
   revenue ₹3,64,126.65 → **7.72×**. Platform claims 8.76× — a 12.3% overclaim, tighter than the usual
   40–120% band seen in past cycles (good attribution match, not a flag). Unlike cycle 9's logged
   55.1% `(not set)` spike on 08-12, this live pull shows max 3.5% (08-04) — no maturity distortion this
   run (see the Performance-5 note above on why that's not a contradiction). Matured 6d recompute
   (excl. 08-12): 7.62×. **Marginal ROAS:** naive 8.09×, matured 7.04× — both clear the 6.0 gate; the
   naive figure isn't a false positive here since there's no maturity artifact to correct for.
2. **Did MA-062's Openwire threshold hold on re-check?**
   **Result: yes, and improved.** Cur7d: CPP ₹96.16 (≤₹350), platform ROAS 8.72× (≥8×), GA4-directional
   ROAS 8.78× (up from the last read's 7.80×), freq 1.26×. **MA-062's pending +20% step should be
   executed without further delay** — every week it sits undone at this margin is floor-clearing
   volume left unscaled. **Cycle 11 update: reversed hard — see cycle 11 above, MA-062 downgraded to HOLD.**
3. **Did MA-048's Broad Interest step hold on a fuller week?**
   **Result: recovered above its own 8× bar.** GA4-directional ROAS is now 10.00× this fully-matured
   week (vs the 7.11× D+7 read logged in cycle 9, which looks like it caught a transitional dip) —
   reassuring, but the campaign remains in its 2-week no-touch window until 2026-08-20 regardless, so
   no action is possible or needed either way. **Cycle 11 update: softened again to 7.75× once the
   no-touch window expired — HOLD, no further step.**
4. **Zero-purchase check (21d ad pull) — anything new, and does the standing backlog still hold?**
   **Result: two small new zero-purchase ads, and one correction.** New: "Influencer_Gadgetbhai_24 Jul
   26 Comm - IT Job Aud" (₹32.81/21d) and "Deer tiger reel_Comm_29 Jul 26" (₹31.25/21d), both Broad
   Interest, 0 purchases (**MA-063**). The MA-042/043/051 cluster (₹731.55 + ₹184.26 + ₹132.32) all
   re-confirm zero purchases, still unexecuted. **Correction:** "Influencer_IND Unboxer_Comm_Problem
   Hook_21 Jul 2" (cut as MA-054 last cycle on a ₹238.62/0-purchase read) now shows **1 purchase /
   ₹544.34** over the same 21-day window on this live pull — the original zero-purchase basis no
   longer holds. Downgraded to WATCH, not re-executed; MA-054 marked SUPERSEDED. **Learning: a
   "zero-purchase" cut basis should be re-verified on every re-pull before treating an old cut as still
   valid — attribution can land a delayed purchase against an ad after the drafting cycle closed.**
5. **New diagnostic pulls (ad-diagnostics + campaign×placement, both added this cycle) — what did they find?**
   **Placement:** Instagram Feed inside safebuds_20Apr's adset burns ₹6,436.90 (18.6% of adset spend)
   at CPP ₹536.41 — 47% worse than the adset blend (₹364.07) and worse than both Reels placements
   (₹366.34, ₹417.54). **Placement-exclusion CUT drafted (MA-064)**, non-budget, not gated. **Cycle 11
   update: this basis flipped — IG Feed recovered to CPP ₹301.92, better than blend. MA-064 marked DO
   NOT EXECUTE.**
   **Auction quality:** no `BELOW_AVERAGE` ranking on any real-spend ad — clean; several
   high-spend ads (incl. the ₹30K/wk Techopedia hero) return `UNKNOWN` even at that spend, correctly
   treated as insufficient data, not a signal.
   **Hook retention:** Openwire's hero ad has the account's strongest hook (p25 = 12.7% of impressions)
   but only 24.0% of p25-viewers reach p75 — hook lands, body loses them. Tamil dub has the account's
   weakest hook (p25 = 3.07%), consistent with its already-flagged underperformance (MA-061).
   **Re-edit TEST drafted for the Openwire ad (MA-066)**; new format **CF-55 "Silent Scroll-Stopper"**
   appended to isolate hook-craft as its own testable lever (**MA-067**).
6. **Funnel diagnostic (new `addToCarts`/`checkouts` GA4 metrics, first live use this cycle) — any
   specific broken stage?**
   **Result: yes — safebuds_20Apr's own funnel, not the account's.** Session→ATC fell 12.1%→11.2% and
   ATC→checkout fell 64.4%→61.1% this week vs prior, on 3,702 GA4-tagged sessions, while
   checkout→purchase held/improved (32.7%→34.3%) — the leak is top-of-funnel/landing-page-match, not
   checkout friction. Consistent with the same adset's hero-ad concentration finding (MA-058, still
   unexecuted) and platform ROAS softening (9.69×→7.89×). **FIX drafted (MA-065).** The
   `addToCarts`/`checkouts` field names worked on the first live call — no fallback needed, unlike the
   cautious "verify on first use" framing in the standing instructions.

**Actions this cycle:** MA-063 (CUT — 2 new zero-purchase ads), MA-064 (CUT — Instagram Feed placement
exclusion, safebuds_20Apr), MA-065 (FIX — safebuds_20Apr funnel softening at S2A/A2C), MA-066 (TEST —
Openwire hero-ad body re-edit), MA-067 (TEST — append CF-55 "Silent Scroll-Stopper"); MA-054 marked
SUPERSEDED (no longer a valid zero-purchase cut); MA-055/056/057/058/059/061/062 all re-confirmed with
fresh cycle-10 numbers inline in queue-inbox, none newly resolved.

**Learning carried forward:**
- **Re-verify a "zero-purchase" cut basis on every re-pull, not just on the cycle it was drafted** —
  MA-054's basis (0 purchases/₹238.62) silently became stale (1 purchase/₹544.34 on the identical
  21-day window) between cycles, most likely a delayed-attribution purchase landing after the draft.
  An unexecuted CUT draft isn't guaranteed to still be valid just because it sits pending.
- **Query-param Meta auth (`?access_token=`) can fail differently from header auth in this environment**
  — the exact same token 400'd as "Malformed access token" via query param but worked immediately via
  `Authorization: Bearer`. Use the header form by default; don't assume a 400 on one auth style means
  the credential itself is bad before trying the other.
- **Hook-landing rate (p25/impressions) and body-retention (p75/p25) are separate diagnostics** — the
  account's best hook this cycle (Openwire, 12.7%) also has among the weakest retention (24.0%), and
  the account's worst hook (Tamil, 3.07%) is a different, upstream problem from retention. Route each
  to a different fix: re-edit the body for the former, treat the hook itself as suspect for the latter.
- **A given day's GA4 `(not set)` share is not a fixed number once logged** — cycle 9 recorded 55.1%
  `(not set)` share for 2026-08-12; this cycle's own live re-pull of the same calendar day shows 0.0%.
  Attribution keeps resolving after the fact; don't treat two different pulls' readings of the same
  historical day as evidence one of them is wrong — the matured-recompute convention exists precisely
  so a verdict never has to hinge on which snapshot you happened to pull.

---

### 2026-08-13 — Cycle 9 (Thursday teardown): floor clears on the matured read, Openwire validated, three unexplained dark/collapsed structures

**Initiative:** Weekly campaign-level teardown per the standing Thursday cadence. Pulls: Meta
campaign×day (Windsor `facebook`, 35d, 2026-07-09→2026-08-12, 186 rows), Meta ad×day (Windsor
`facebook`, 21d, 2026-07-23→2026-08-12, 301 rows), GA4 direct-API account source/medium×day 14d (414
rows, rowCount 414, truncation guard passed), GA4 campaign×source/medium cur7d (100 rows, passed) and
prior7d (104 rows, passed), GA4 account source/medium MTD (73 rows, passed). Reconciled 14d raw
sessions 27,547.00=27,547.00 and revenue ₹12,70,539.50=₹12,70,539.50 exactly; MTD raw revenue
₹10,92,434.75=₹10,92,434.75 exactly. Ad-level spend reconciled to campaign-level spend on every live
campaign within ₹0.08–₹4.73 (placement rounding, not a missing-row signal).

**Hypotheses tested / findings:**

1. **Does the account clear the 6.0 TRUE-ROAS floor this week?**
   **Result: yes, but with an attribution-maturity caveat worth naming.** Headline cur7d
   (2026-08-06→08-12): spend ₹59,324.37, GA4 Meta-paid revenue ₹3,83,119.75 → **TRUE ROAS 6.46×**.
   Prior7d: spend ₹47,145.16, revenue ₹3,64,126.65 → **7.72×**. But 2026-08-12 (the newest day in the
   window) carries 55.1% of its GA4 session revenue as `(not set)/(not set)` vs <5% every other day
   pulled — the same ~D+2 attribution-maturity lag the daily brief already documents structurally
   ("matured D−2"), not a new tagging break. Recomputed on the 6 fully-matured days (08-06→08-11):
   spend ₹47,836.20, revenue ₹3,64,417.65 → **TRUE ROAS 7.62×**. Both readings clear the floor — no
   verdict hinges on which one is used — but the matured figure is the more honest trend read and is
   what this cycle's SCALE decision is based on. **Recommend the compute script report both numbers
   every cycle going forward**, not just the raw trailing-7d headline.
2. **Is the account's marginal rupee still clearing 6.0?**
   **Result: yes, once corrected for the same maturity artifact — the naive number is a false
   negative.** Naive Δ(mean daily GA4 Meta rev)/Δ(mean daily spend) over the raw cur7d/prior7d windows
   = **1.56×** — alarmingly low. But this is entirely explained by 08-12's immature revenue dragging
   the cur7d mean down. Recomputed matured-vs-prior7 (08-06→08-11 vs 30 Jul–05 Aug): Δspend/day
   ₹1,237.68, Δrevenue/day ₹8,718.18 → **marginal ROAS = 7.04×** — clears the 6.0 gate cleanly. This is
   the basis for this cycle's one budget move (below). **Learning: never report a marginal-ROAS number
   computed across a window that includes the newest, attribution-immature day without also computing
   the matured version — the naive number can look like a floor breach when it isn't one.**
3. **Did MA-047's Openwire read-plan (CPP≤₹350, platform ROAS≥8× by 2026-08-12) clear?**
   **Result: yes, decisively — VALIDATED.** cur7d: spend ₹7,403.05, 77 purchases, CPP ₹96.14, platform
   ROAS 8.72×, GA4-directional ROAS 7.80× (CVR 4.27%, the best on the account this week). Ad-level
   frequency only 1.41×. First-ever budget touch proposed this cycle (MA-062, +20% to ~₹1,269/day).
4. **Did MA-048's Broad Interest +20% step (landed 08-06) hold its own re-scale bar (GA4-directional
   ROAS ≥8×, platform CPP ≤₹380) on the pre-set 08-13 D+7 read?**
   **Result: mixed — clears the floor, fails its own tighter bar.** Spend rose only +10.3%
   (₹1,516.72/day→₹1,673.43/day mean — still ramping; the last day alone was +63% vs the pre-step
   baseline), platform CPP improved ₹353.90→₹266.23, but GA4-directional ROAS softened 8.96×→7.11×.
   That's still >6.0 (no revert triggered) but under the 8× line MA-048 itself set for stepping again.
   **VERDICT: HOLD**, no further step — also moot since the campaign is in a 2-week no-touch window
   until 2026-08-20 regardless.
5. **Are there any newly-dark or collapsed structures this week, beyond the standing ES Lite/ES Comm 2
   watch items?**
   **Result: yes — three, and this is now a recurring pattern, not isolated incidents.**
   - **Retargeting collapsed 94.6%** (₹3,446.71 prior7d → ₹185.57 cur7d), 0 purchases, GA4-directional
     ROAS 0× — a much bigger break than MA-050's "softening, watch it" framing from last cycle. No
     spend at all 08-07 through 08-11. **Escalated MA-055.**
   - **ES Lite remains fully dark**, now 10th+ consecutive day (last real spend 2026-08-01). **Restated
     MA-056** — 3rd straight cycle this exact ask has gone unanswered.
   - **ES Comm 2 resumed spending 2026-08-10** after 9 straight dark days (08-01→08-09) — partially
     resolving MA-040's underlying fact, but with zero logged cause for either the outage or the
     restart, and only 3 days of live data (directional ROAS 5.80×, too thin to call). **Restated
     MA-057.**
   Three unexplained campaign-level stoppages/restarts inside three cycles (ES Comm 2 and ES Lite in
   cycles 7–8, now Retargeting and ES Comm 2's restart in cycle 9) is a structural governance gap, not
   three unrelated incidents — repeating the cycle-7 recommendation that Meet add a standing D+2
   spend-confirmation check to `/execute-approved`/`/approvals`.
6. **Is any single creative over-concentrated inside a healthy-looking campaign average?**
   **Result: yes — the safebuds_20Apr hero adset.** "Techopedia Safebuds Reel_17May 26" now carries
   88% of the adset's cur7d spend (₹30,531.75 of ₹34,570.11) at a CPP that has climbed from ₹280.64
   (cycle 7/8) to ₹372.34 — a +32.6% rise over 4 cycles — while "Nobody Tech Safebuds Reel_30Jun26"
   (healthier, 8.97× ROAS, ₹278.85 CPP) receives only 7.3% of spend, and "Tech in Gujarati_Safebuds
   Reel_13 Jul 26" — which was clearing 7.74× directional ROAS on ₹5,811.76 spend as recently as
   cycle 8 — has fallen to ~₹0 with no logged cause. Ad-level frequency (1.14–1.43×) is nowhere near the
   2.5× gate, so this is a mix/concentration risk preceding a fatigue signal, not fatigue itself.
   **Non-budget creative-priority fix drafted (MA-058).**
7. **Zero-purchase check (21d ad pull) — anything new to cut, and are the standing CUT drafts still
   unexecuted?**
   **Result: one new finding, and yes — the backlog is growing stale.** New: "Influencer_IND
   Unboxer_Comm_Problem Hook_21 Jul 2" (ES Comm 2), ₹238.62/21d, 0 purchases (**MA-054**). MA-042/043
   (drafted cycle 8, 2026-08-06) and MA-051 (also cycle 8) are STILL unexecuted — identical spend/
   0-purchase figures re-confirmed a 3rd (MA-042/043) and 2nd (MA-051) straight cycle. Combined named
   waste this cycle: ~₹1,589.05/21d (~₹530/week).
8. **Format-engine health check — any change from the 4-cycle 0/3-delivering finding?**
   **Result: no change — now a 5th straight cycle.** CF-31, CF-37, CF-51 all show zero impressions
   again. **Re-escalated MA-059.** Appended net-new format **CF-54 "Rapid-Fire Speed Review"**
   (pacing/density lever — compress the whole structure into ≤15s vs every existing format's 20–32s,
   motivated directly by SafeBuds PDP's persistently low CVR, 0.26–0.75% in recent daily briefs, despite
   running the account's most-validated review format) — queued UNTESTED (**MA-060**).
9. **Any new creative/campaign needing a formal read-plan?**
   **Result: yes — two regional SafeBuds dubs launched 08-05 with no threshold set.** "Techopedia
   Safebuds Reel_Tamil_5 Aug 26" (CPP ₹498.79, ROAS 3.54×, n=2 purchases) and "…Kannada_5 Aug 26" (CPP
   ₹535.86, ROAS 5.65×, n=1) — both below the SafeBuds hold line but too thin a sample to call yet.
   **Read-plan drafted, threshold CPP≤₹380/ROAS≥8× by 2026-08-19 (MA-061).**

**Actions this cycle:** MA-054 (CUT — new zero-purchase ad), MA-055 (FIX — Retargeting collapse,
new), MA-056 (FIX — ES Lite restated, 3rd cycle), MA-057 (FIX — ES Comm 2 restart, unexplained),
MA-058 (FIX, non-budget — safebuds hero over-concentration + Gujarati creative dark), MA-059 (TEST —
format-engine 5th-cycle re-escalation), MA-060 (TEST — append CF-54), MA-061 (TEST — Tamil/Kannada
read-plan), MA-062 (SCALE, budget +20% — Openwire, first-ever budget touch, validated by MA-047's
cleared threshold and the account's matured floor/marginal reads).

**Learning carried forward:**
- **GA4's newest day in any trailing window is structurally attribution-immature (~D+2 lag) — always
  compute a matured (excl. last day) recompute alongside the headline, especially for marginal ROAS,
  which is far more sensitive to a single bad/immature day than the account-average TRUE ROAS is.**
  This cycle the naive marginal ROAS (1.56×) would have wrongly triggered a full budget freeze; the
  matured figure (7.04×) correctly showed the margin still clearing 6.0.
- **Campaign-name normalisation in GA4 needs substring matching, not prefix matching** — "Broad
  Interest Based-24 Jul 26" traffic lands under "ES Comm, Safebuds - Broad Interest Based- 24 Jul 26"
  (a combined-audience UTM string) and "Openwire_5 Aug 26" lands under "Openwire LAL 1%_5 Aug 26." An
  early pass of this cycle's compute script used `.startswith()` and silently mis-priced Broad Interest's
  directional ROAS at 0.26× before being caught mid-run. Future cycles: always substring-
  match on the campaign's distinguishing keyword, never assume the GA4 tag is the literal campaign name.
- **Unexplained campaign stoppages are now a recurring pattern across 3 cycles** (ES Comm 2 + ES Lite
  in cycles 7–8; Retargeting + ES Comm 2's restart in cycle 9) — worth treating as a standing agenda
  item for Meet, not a fresh discovery each week.
- **CPP creep on a dominant creative can precede a frequency-visible fatigue signal by weeks** —
  Techopedia Safebuds Reel_17May 26's CPP climbed +32.6% over 4 cycles while its frequency stayed at
  1.14–1.43×, nowhere near the 2.5× gate. Treat spend-concentration + CPP creep as its own leading
  indicator, don't wait for frequency to confirm it.

---

### 2026-08-06 — Cycle 8 (same-day correction of cycle 7): GA4 restored via direct API, TRUE ROAS 7.73×, Broad Interest validated as a scale case

**Initiative:** Cycle 7 (earlier this same Thursday) reported PARTIAL because the Windsor
`googleanalytics4` connector was fully disconnected. Per Meet's 2026-08-06 architecture change, GA4
now goes through **direct Analytics Data API calls, bypassing Windsor entirely**. This cycle re-ran
the full teardown with that new path: Meta campaign×day (35d, unchanged from cycle 7 — 171 rows),
Meta ad×day (21d, unchanged — 301 rows), plus 4 GA4 direct-API requests (account source/medium×day
14d — 480 rows, truncation guard passed; campaign×source/medium cur7d — 104 rows, passed; prior7d —
118 rows, passed; account source/medium MTD — 52 rows, passed). All reconciled exactly (14d raw
sessions 25,491.00=25,491.00, revenue ₹13,24,987.35=₹13,24,987.35).

**Consequence:** every GA4-dependent number cycle 7 could not report is now available and load-bearing
this cycle: TRUE ROAS, marginal ROAS, per-campaign directional CVR/ROAS, and MTD revenue. This report
supersedes cycle 7's report at the same file path (`Company_OS/meta-ads/2026-08-05.md`) — same day,
corrected numbers, not a new week.

**Hypotheses tested / findings:**

1. **Does the account clear the 6.0 TRUE-ROAS floor, now that GA4 is verifiable again?**
   **Result: yes, decisively, both weeks.** Cur7d (30 Jul–5 Aug): Meta spend ₹47,128, GA4 Meta-paid
   revenue ₹3,64,127 → **TRUE ROAS 7.73×**. Prior7d (23–29 Jul): spend ₹55,231, revenue ₹3,67,537 →
   **6.65×**. Platform claims 9.09×/8.90× — a 17.6% overclaim cur7d, comfortably inside the normal
   40–120%-of-TRUE band; attribution is not broken. Notably, TRUE ROAS **rose** week-on-week even as
   spend fell 14.7% — because the rupees that stopped flowing were mostly going to ES Comm 2 and ES
   Lite, this week's two lowest-marginal-value campaigns (both dark, see below).
2. **Is there a real, evidence-backed SCALE case now that the floor is verifiable?**
   **Result: yes — Broad Interest Based-24 Jul 26.** Its GA4-directional ROAS (Meta spend ÷
   campaign-tagged GA4 revenue) improved 6.84×→8.97× as spend grew organically 65.7% this week —
   clearing the 8× scale bar outright and validating the long-open EXP-002/SH-MA-4 broad-audience
   hypothesis (open since 2026-06-30, previously only "partially overtaken by events"). Its own
   directional marginal ROAS this week is 12.20× (organic growth, not a controlled test — flagged
   explicitly). No no-touch window in force (budget never touched on this campaign since its 07-24
   launch). **+20% budget step drafted (MA-048).** By contrast, safebuds_20Apr 26's own
   GA4-directional ROAS softened 8.91×→7.93× even as its platform average stayed healthy — **held**,
   no budget step there this cycle, since averaging well ≠ the margin still clearing 6.0.
3. **Is ES Comm 2 still dark, and does GA4 change the read on it?**
   **Result: still dark (6th straight day), and GA4 adds a nuance.** Confirmed ₹0 spend every day
   2026-08-01→08-05 (unchanged from cycle 7). GA4 direct-API pull further confirms the known UTM
   mismatch (MA-037) is still unresolved — prior week's real revenue (₹54,604, 16 purchases) is still
   landing under the stale "Comm LAL 1% 13 Nov 25" tag, not "ES Comm 2." Its own last-live-week
   directional ROAS was borderline (~6.03×) — meaning restoring it isn't urgent for the account floor
   (which clears comfortably without it), but the governance question of why an executed budget step
   landed on a dark campaign is still completely open. MA-040 restated, unresolved.
4. **Is ES Lite still dark, and does GA4 change the read?**
   **Result: still dark/intermittent, and a second problem surfaced.** ₹0 on 08-02/08-03, absent
   entirely 08-04/08-05 (unchanged from cycle 7). New finding: ES Lite's GA4 campaign dimension
   carries **ad names**, not the campaign name, for its traffic — there is no reliable campaign-level
   GA4 tag for ES Lite at all, a separate tagging problem from the spend collapse itself. MA-041
   restated with this addition.
5. **Is Retargeting's real return actually healthy, or is the platform number hiding something?**
   **Result: it's hiding something.** Platform ROAS fell 10.72×→5.50× WoW, which already looked like
   softening — but GA4-directional ROAS shows Retargeting was **already under the 6.0 floor last
   week too** (5.17× prior7d, 5.08× cur7d), something the platform-only read never surfaced. The
   weakest ad ("Comm_Unboxing Reel_28 May 26") decayed 7.13×→3.48× platform WoW, but on only
   ₹1–3K/week spend — per the 2026-07-03 institutional learning, too small a sample for a confident
   one-week kill call. **Logged as a watch item, not a cut (MA-050)** — escalate to a formal CUT only
   after a second consecutive weak read.
6. **Zero-purchase check, ad-grain (14d) — anything new to cut beyond the still-unexecuted MA-042/043?**
   **Result: yes, two more small ones.** "Reel_Lite_Whysotechie" (ES Lite, ₹131.70/14d, 0 purchases)
   and "Safebuds_Review Carousel_2 Jul 26" (Retargeting, ₹50.62/14d, 0 purchases) — same clean pattern
   as MA-027/028/031/042/043. **Cut both (MA-051)** — combined with MA-042/043 (still not executed),
   total named waste this cycle is ~₹1,219/14d.
7. **Format-engine health check — any change from cycle 7's 0/3-delivering finding?**
   **Result: worse — now 0/3 including the format rotated in to fix it.** CF-31 and CF-37 remain
   undelivered (unchanged, 4th straight cycle). CF-51 "Silent Sensory Demo," rotated in cycle 7 as the
   "practical" 3rd trial specifically because the other two weren't delivering, **also does not
   appear anywhere in this cycle's ad pull** — its brief is still pending production. **Re-escalated
   as a structural production-pipeline issue, not a per-format issue (MA-052).** Appended net-new
   format **CF-53 "Live A/B Mirror"** (dual-presenter visual comparison lever — no split-screen/
   comparison format exists anywhere in the 52-row register) — queued UNTESTED (MA-053).

**Actions this cycle:** MA-039 status closed (RESOLVED — architecture fix, not a Windsor reconnect),
MA-040/041 restated unresolved with GA4-informed nuance, MA-042/043 restated unexecuted, MA-044
restated unexecuted, MA-045/046 restated (CF-51 also now stalled), MA-047 restated (still day-1-only),
MA-048 (SCALE — Broad Interest +20% budget step, first budget move since the floor was verified),
MA-050 (FIX/watch — Retargeting under floor both weeks via GA4-directional read), MA-051 (CUT — 2 more
small zero-purchase ads), MA-052 (TEST re-escalation — 0/3 format-engine slots actually delivering,
now a pipeline issue), MA-053 (TEST — append CF-53 to the register).

**Learning carried forward:**
- **Platform-claimed ROAS can mask a real floor breach that GA4-directional ROAS catches.**
  Retargeting looked like a "softening but still fine" campaign on platform numbers (10.72×→5.50×);
  the GA4-directional read showed it was under 6.0 both weeks. Whenever platform ROAS drops
  materially WoW, pull the GA4-directional cross-check before deciding it's still "fine."
- **An account can clear its TRUE-ROAS floor on average while a specific campaign's own margin is
  flat-to-negative** — safebuds_20Apr 26 is the clean example this cycle (healthy platform average,
  softening GA4-directional trend). Scale decisions need the campaign's own directional read, not
  just the account-level average.
- **A format "rotated in" to fix a stalled test slot can itself stall** — CF-51 was cycle 7's answer
  to CF-31/CF-37 not delivering, and it hasn't delivered either. The register's IN-TEST status needs
  checking against actual ad-level spend every single cycle, not assumed fixed once a new format is
  logged as rotated in.
- **A GA4 architecture fix (Windsor→direct API) is a different kind of fix from a tagging-pipeline
  fix** — always distinguish "the connector is broken" (config/auth, fixed by re-authorizing or
  changing the access path) from "the data is wrong" (UTM/tagging, fixed by correcting the source
  tags). This cycle needed the former; MA-037's ES Comm 2 UTM mismatch is still the latter, unresolved.

---

### 2026-08-06 — Cycle 7 (Thursday teardown) — GA4 connector fully down, Meta-only analysis, two dark campaigns found

**Initiative:** Weekly campaign-level teardown per the standing Thursday cadence. Pulls attempted: Meta
campaign×day (35d, 2026-07-02→2026-08-05, succeeded, 100 rows), Meta ad×day (21d, 2026-07-16→2026-08-05,
succeeded, 258 rows), GA4 account source/medium×day (14d), GA4 campaign×source/medium aggregated (cur7d
+ prior7d), GA4 account source/medium MTD — **all 4 GA4 pulls failed**:
`Account 299565498 is not available. No googleanalytics4 accounts are configured.` Confirmed via
`get_connectors(include_not_yet_connected=false)`: only `facebook` is currently connected in this
Windsor workspace — a full config/auth disconnect, not a data-quality tagging break like MA-029/cycle
5-6. Did not attempt to route around it (no substitute pull, no fabricated GA4 numbers, no reuse of a
prior cycle's stale TRUE ROAS). Report marked PARTIAL; escalated as MA-039.

> **Superseded same-day by Cycle 8 above** — Meet moved GA4 access to a direct API call, and the full
> corrected numbers (TRUE ROAS 7.73×/6.65×, etc.) are now available. This entry is kept for the
> historical record of what was found Meta-only before the fix landed; do not treat its Meta-only
> findings (ES Comm 2/ES Lite dark, MA-042/043 cuts, CF-31/37 stall) as superseded — those all held
> and were independently re-confirmed in Cycle 8.

**Consequence for this cycle's numbers:** TRUE ROAS, marginal ROAS, GA4 session/CVR, and GA4 MTD
revenue are all **UNAVAILABLE** — not computed, not estimated. Every ROAS/revenue figure in this
cycle's report is Meta platform-claimed, explicitly labelled diagnostic-only, never the floor. Budget
verdicts are held for exactly this reason (can't verify the 6.0 floor without GA4), independent of how
healthy the platform-claimed numbers look.

**Hypotheses tested / findings (Meta-only):**

1. **Did MA-036's approved ES Comm 2 +20% budget step (marked EXECUTED 2026-08-04) actually take effect?**
   **Result: no evidence it did — the campaign has been at ₹0 spend since 2026-07-31**, i.e. dark both
   before and after the execution date. Prior 7d (23–29 Jul) spend was ₹9,049.41 with 19 purchases;
   current 7d (30 Jul–5 Aug) is ₹0.00. This is the same "approved action, dark campaign" governance
   contradiction seen historically with MA-009 (2026-06-30 scale, found PAUSED a week later) and MA-018.
   MA-037 (UTM fix) and MA-038 (creative-priority rebalance) — both also marked EXECUTED 2026-08-04 —
   are moot until the campaign is confirmed alive again. **Escalated as MA-040**, requesting Meet's
   direct confirmation of campaign status and cause.
2. **Is anything else unexpectedly dark this week?**
   **Result: yes — ES Lite, independently.** Spend fell from ₹1,157.74/day (prior 7d avg) to
   ₹267.58/day (current 7d avg, −76.9%), with the daily detail showing ₹0.00 spend on 2026-08-02 and
   2026-08-03 and no rows at all on 2026-08-04 or 2026-08-05. No corresponding pause/cut draft exists
   anywhere in the queue or tracker for ES Lite. **Escalated as MA-041** — same ask, direct confirmation
   needed.
3. **Is any spend still converting at zero — a clean CUT, independent of GA4?**
   **Result: yes, two small ads.** "Tech in Gujarati_Safebuds Reel_13 Jul 26 – Headphone Interest"
   (Broad Interest campaign): ₹731.55/14d, 0 purchases. "Comm_Customer Review_Carousel_1 Jul 26"
   (Retargeting): ₹304.89/14d, 0 purchases — notable because this exact ad cleared the scale line as
   recently as cycle 5 (19.86× ROAS) before MA-033 shifted priority away from it toward the Gujarati
   SafeBuds reel; it has since gone fully dead rather than just de-emphasized. **Cut both (MA-042,
   MA-043)** — combined ~₹1,036/14d, the same zero-purchase-while-everything-around-it-converts
   pattern already validated as clean (MA-027/028/031).
4. **Is there a spend/efficiency mismatch inside any adset, independent of GA4 (platform ROAS is enough to see this)?**
   **Result: yes, inside Broad Interest** — the same pattern MA-038 already fixed once inside ES Comm 2.
   "Techopedia Safebuds Reel_24 Jul 26 – Headphone interest" absorbed almost all of this campaign's
   organic spend growth (₹54.97 prior7d → ₹7,447.86 cur7d) while running the weakest platform ROAS in
   its adset (6.25×); "Influencer_Gadgetbhai_24 Jul 26 Comm - SME Owner Aud" is running 19.29× ROAS on
   a *falling* spend share (₹5,745.76 → ₹2,274.40). **Non-budget creative-priority reallocation drafted
   (MA-044)** — no adset/campaign budget change, so not floor-gated.
5. **Frequency check — any creative past the 2.5× rotation gate?**
   **Result: none.** Campaign-grain max freq (35d pull) tops out at 1.58× (Retargeting). Ad-grain max
   freq (21d pull) tops out at 1.64× (Tech in Gujarati_Safebuds Reel), excluding one clearly-anomalous
   single-day "Reel_TVC" reading of 2.00× on ₹1.46 spend / 2 impressions (noise, flagged not acted on).
6. **Format-engine health check — how many catalog entries are actually delivering?**
   **Result: 0/3, despite the register showing CF-31 and CF-37 both "IN TEST" since cycle 6
   (2026-07-16, three weeks ago).** Neither format's ad name appears anywhere in this cycle's 258-row
   ad×day pull — neither has actually launched. CF-31 is known-blocked on Meet's compliance call
   (presenter-credential framing, tracker still shows MA-034 pending as of 2026-08-04). CF-37 has no
   stated blocker but also shows zero spend, and its intended host adset (ES Comm 2) has since gone
   completely dark (see finding 1) — even if produced, it has nowhere live to run right now.
   **Re-escalated both (MA-046).** Rotated **CF-51 "Silent Sensory Demo"** in as the practical 3rd live
   trial (MA-045), funded by MA-042/043's freed ~₹1,036/14d — no net-new spend. **Appended net-new
   format CF-52 "Commute Noise-Test"** (outdoor demonstration format, visually distinct from both the
   indoor tech-reviewer setting and CF-31's clinical setting) to the register, queued UNTESTED.
7. **New SKU — is there a read plan for the just-launched Openwire campaign?**
   **Result: no, until now.** "Openwire_5 Aug 26" launched 2026-08-05 with a single ad
   ("Tech in Gujarati Reel_Openwire Hindi Dub_5 Aug", ₹306.24 day-1 spend, 1 purchase, too early to
   call) and no prior MA-### draft. The 2026-08-05 daily D2C brief already showed OpenWire's PDP
   converting at 5.17% CVR vs SafeBuds' 0.75% — a real pre-existing signal worth a formal threshold.
   **Drafted MA-047** (read-plan only, no change): CPP ≤₹350, ROAS ≥8× by 2026-08-12.

**Actions this cycle:** MA-039 (FIX — GA4 connector fully disconnected, escalate for re-auth), MA-040
(FIX — ES Comm 2 dark despite executed budget step), MA-041 (FIX — ES Lite dark, no logged cause),
MA-042/MA-043 (CUT — two dead ads, ~₹1,036/14d combined), MA-044 (non-budget reallocation, Broad
Interest adset), MA-045 (TEST — rotate CF-51 in), MA-046 (TEST — re-escalate CF-31/CF-37 stall),
MA-047 (TEST — Openwire read-plan, no change).

**Learning carried forward:**
- A GA4 connector can go from "tagging break on individual days" (MA-029, recurring ~weekly per cycles
  5/6) to "fully disconnected, zero accounts configured" (this cycle) without warning — the truncation
  guard and `(not set)` share checks only catch the first failure mode. Always run `get_connectors`
  as a first-line check when any GA4 pull errors, before assuming it's just another tagging blip.
- The "approved action, dark campaign" contradiction (MA-009/018 in June/July) has now recurred a
  second time, at larger scale (MA-036/037/038, all marked EXECUTED, three linked drafts) — this is a
  structural execution-tracking gap, not a one-off. Worth recommending Meet add a standing D+2
  spend-confirmation check to the `/execute-approved` or `/approvals` flow itself, not just catching
  it a week later in the next teardown.
- A format can sit "IN TEST" in the register for three consecutive cycles while never actually
  delivering a single impression — the register's status field needs to be checked against actual
  ad-level spend every cycle, not trusted at face value; "marked IN TEST" and "actually running" are
  different claims.

---

> **Trimmed 2026-08-13** (cycle-log was 972 lines / ~120KB, all read by the managed agent every
> single scheduled run regardless of relevance). Full cycle-by-cycle history through 2026-07-13
> moved to `learning-log-archive.md` — nothing lost, every learning that still matters was already
> folded into the compact sections above (CONFIRMED PATTERNS / REJECTED-DEAD-ENDS /
> CREATIVE-FORMAT TEST ENGINE / SCALE HYPOTHESIS BACKLOG) before the cut. **The managed agent does
> not need to read the archive** — if a cycle entry below references something you can't find, work
> from the compact sections, not from reconstructed history.


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
| CF-31 | Expert / audiologist explainer | Authority — ENT/audiologist on "the science of open-ear" (strongest fit for NG's hearing-health moat) | **IN TEST (since cycle 6) — NOT DELIVERING, 7 straight cycles (0 impressions)** | — | Blocked on Meet's compliance call re: presenter-credential framing, unresolved 7+ weeks. | MA-034, MA-046, MA-052, MA-059 |
| CF-32 | Data / number hero | Authority — specificity heuristic ("94% stopped removing an earbud to hear traffic") | UNTESTED | — | — | — |
| CF-33 | Demonstration / "watch it work" | Authority — show-don't-tell the open-ear mechanism | UNTESTED | — | — | — |
| CF-34 | Review-wall montage | Social proof — rapid real-review screenshots | UNTESTED | — | — | — |
| CF-35 | "X,000 Indians switched" | Social proof — bandwagon / safety-in-numbers | UNTESTED | — | — | — |
| CF-36 | Skeptic-to-believer | Social proof — "I was sure open-ear was a gimmick…" | UNTESTED | — | — | — |
| CF-37 | Fear-of-loss health hook | Loss aversion — "what sealed earbuds are doing to your hearing" (WHO-stat, on-brand) | **IN TEST (since cycle 6) — NOT DELIVERING, 7 straight cycles (0 impressions); host adset ES Comm 2 dark much of that time, resumed 08-10** | — | No stated production blocker, host adset only recently resumed. | MA-035, MA-046, MA-052, MA-059 |
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
| CF-51 | Silent Sensory Demo (cycle 6) | Demonstration route, no voiceover — captions + ambient sound close-up of the open-ear driver/mechanism; answers the DNB-guidebook risk that NG's two winners (Gadgetbhai, Techopedia) are both reviewer-POV and may look visually too similar to each other | **IN TEST (rotated in cycle 7, 2026-08-06) — NOT DELIVERING, 7 straight cycles (0 impressions, brief still pending production)** | — | Was rotated in specifically because CF-31/CF-37 weren't delivering; it also isn't delivering. See MA-059. | MA-045, MA-052, MA-059 |
| CF-52 | Commute Noise-Test (cycle 7) | Demonstration lever — presenter walks through a loud outdoor environment (traffic/metro) showing open-ear lets you hear surroundings while sealed buds don't; visually distinct outdoor setting from Gadgetbhai/Techopedia's indoor tech-review setting and from CF-31's clinical setting | UNTESTED | — | Appended 2026-08-06 (cycle 7); next in line once a slot frees. | — |
| CF-53 | Live A/B Mirror (cycle 8) | Comparison/contrast lever — two presenters side-by-side, one wearing sealed earbuds, one wearing SafeBuds, both react in real time to the same ambient cue (doorbell/car horn/name-call); the first dual-presenter/split-screen format in the register, demonstrating the benefit instantly without narration-heavy setup | UNTESTED | — | Appended 2026-08-06 (cycle 8); next in line once a slot frees. | MA-053 |
| CF-54 | Rapid-Fire Speed Review (cycle 9) | Pacing/density lever — compress problem-hook + demo + proof + CTA into ≤15 seconds total via 4–5 rapid micro-cuts, roughly half the runtime of every existing format's 20–32s structure; tests whether NG's own "~87.6% same-day decider" institutional truth means a much denser/faster cut converts better, motivated directly by SafeBuds PDP's persistently low CVR (0.26–0.75% in recent daily briefs) despite running the account's most-validated review format | UNTESTED | — | Appended 2026-08-13 (cycle 9); next in line once a slot frees. | MA-060 |
| CF-55 | Silent Scroll-Stopper (cycle 10) | Pattern-interrupt lever — a 0–2s non-verbal, motion-graphics visual disruption (no voiceover, no captions) immediately preceding the standard review-format body; isolates "hook craft" as its own testable variable, independent of language/presenter/dub, distinct from every existing register entry | UNTESTED | — | Appended 2026-08-13 (cycle 10), motivated directly by that cycle's ad-diagnostics finding of a 4× hook-landing spread (p25/impressions 3.07%–12.7%) across live ads with no format-level lever yet tested for it; next in line once a slot frees. | MA-067 |
| CF-56 | Checkout-Trust Overlay (NEW, cycle 11) | Trust/guarantee lever — a specific proof card (COD availability, return-window length, warranty terms) shown immediately before the CTA in the final 3–5 seconds, distinct from CF-38's broader/earlier-placed risk-reversal messaging by targeting the exact funnel stage this cycle's data shows leaking | UNTESTED | — | Appended 2026-08-20 (cycle 11), motivated directly by this cycle's funnel diagnostic finding a checkout→purchase collapse shared across Broad Interest and Openwire (MA-071); next in line once a slot frees. | MA-073 |

*(Block B is a starting expansion, not exhaustive — append `CF-57+` as new formats are conceived each cycle.)*

---

## SCALE HYPOTHESIS BACKLOG (per COMPANY_STATE §5.5 — test → validate → scale at constant ROAS)

> Standing list of falsifiable scaling bets. Each must clear the Meta scale bar (ROAS ≥ 8×, CPP ≤ SKU floor, freq < 2.5×) on a small test before earning scale budget; each scaled lever gets a standing ROAS watch and reverts here on decay.

| # | Hypothesis (metric + threshold) | Test (smallest move) | Status | Linked queue |
|---|---|---|---|---|
| SH-MA-1 | LAL campaign (52576570206220) re-launch with Gadgetbhai creative only. | Removed from active pursuit — MA-012 rejected 2026-06-30. **Cycle 4 update:** the campaign is now PAUSED with zero delivery regardless of creative mix (see MA-018) — the creative-mix question is moot until the campaign is confirmed running again. | STALLED — campaign dark, not a creative-mix problem right now. Still dark as of cycle 11. | MA-012, MA-018 |
| SH-MA-2 | A new review/explainer Comm 2.0 creative beats the Custom Reel's ROAS and clears the 8× bar. | **Cycle 4 update: hypothesis partially overtaken by events.** Custom Reel itself recovered to 10.50× ROAS this week (from 4.95× the prior week) without any creative swap — it now clears the 8× bar on its own. Hold off shipping a replacement creative until a second consecutive weak week confirms real decay (see cycle-4 learning: single-week dips on <₹3K/week spend are noisy). **Cycle 5 update: decayed again (CPP ₹437, ROAS 7.56×, weakest in its adset) — RE-OPENED, non-budget rotation drafted (MA-030). Cycle 6 update: recovered again (CPP ₹352, ROAS 9.38×) — third decay/recovery cycle logged, MA-030 stays queued but not urgent.** | WATCHING — ES Comm 2 now has a first near-full clean week post-restart (cur7d spend ₹10,444.39, 30 purchases, GA4-dir ROAS 6.88×, softening from 9.66× prior week); Custom Reel itself doesn't reappear distinctly in cycle 11's ad-level data. Re-assess creative mix once the campaign's restart fully stabilizes. | MA-003, MA-006, MA-012, MA-030 |
| SH-MA-3 | boAt clip-on open-ear ads on Meta India do NOT erode NG SafeBuds CPP over 4 weeks — health/education hook stays differentiated from boAt's lifestyle/feature framing. | Watch SafeBuds CPP/ROAS week-on-week alongside boAt ad longevity check. | CONFIRMED so far — 8+ consecutive weeks; SafeBuds CPP this cycle is ₹340.39 (cur7d campaign-level), down from ₹372.48 two cycles ago — improving, not eroding. No boAt-specific signal detected. Keep watching. | MA-004 |
| SH-MA-4 | Broad audience (no LAL constraint) with Techopedia SafeBuds review creative achieves CPP ≤ ₹291 and ROAS ≥ 8× within 7 days (EXP-002). Meta Andromeda 2026 signal: creative IS the targeting. | ₹10K test, 7-day read, broad India interest layer only. | **VALIDATED (cycle 8); recovered to 10.00× GA4-dir ROAS on a fuller week (cycle 10). Cycle 11 update: softened again to 7.75× once the 2-week no-touch window expired — still >6.0 floor but under its own 8× re-scale bar. HOLD, no further step.** | MA-013, MA-048 |
| SH-MA-5 | ES Lite review Reel (EXP-003) achieves CPP ≤ ₹265 and ROAS ≥ 8× within 7 days on fresh interest audience. Unlocks a third revenue line now stock is cleared. | ₹10K test, 7-day read, ES Lite interest audience. | **STILL STALLED, cycle 11 — ₹0.00 spend both cur7d and prior7d, now well past 2 weeks fully dark, 4th consecutive cycle this ask has gone unanswered.** No reliable GA4 campaign-level tag exists for ES Lite either (separate tagging issue). | MA-014, MA-021, MA-022, MA-041, MA-056 |
| SH-MA-6 | SafeBuds LAL 3–5% expansion with health/education hook (EXP-004) holds ROAS ≥ 10× and CPP ≤ ₹350 within 7 days — validating both the audience expansion AND the health-hook creative together. | ₹12K test, 7-day read, LAL 3–5% + new health-hook creative. | OPEN — not re-queued; safebuds_20Apr 26 now has a bigger, more urgent problem — GA4-directional ROAS below the 6.0 floor this cycle (MA-070) — audience expansion is not the right lever until that's resolved. | MA-015 |
| SH-MA-7 | (EXP-006) Gujarati-voiceover SafeBuds review Reel, added as a 3rd ad inside the existing SafeBuds LAL 1% ad set (no new ad set, no geo constraint), matches/beats the ad set's blended CPP ₹258.08 and clears ROAS ≥8× within 7 days at ₹800/day. NET-NEW BET — no prior Purchase-optimized regional-language creative; only adjacent, non-predictive signal is the Kannada awareness reel (THRUPLAY, no purchase data). | ₹5,600 test (₹800/day × 7d), read at ad level vs. the two live SafeBuds controls. | **INTERMITTENT, cycle 11 — delivered ₹5,812.28/18 purchases/8.19× ROAS over the prior ~2 weeks (21d pull) but dark again (₹0) THIS week specifically — an on/off delivery pattern, not a clean fix. See MA-058.** | MA-024, MA-033, MA-058 |
| SH-MA-8 | (EXP-007) Telugu-voiceover Comm 2.0 review Reel, added as a 5th ad inside the existing Comm 2.0 LAL 1% ad set (no new ad set, no geo constraint), matches/beats the ad set's blended CPP ₹242.21 and clears ROAS ≥8× within 7 days at ₹600/day. PURE NET-NEW BET — Comm 2.0 has zero prior regional-language creative of any kind (not even an awareness precedent). | ₹4,200 test (₹600/day × 7d), read at ad level vs. the three live Comm 2.0 controls. | **Host campaign (ES Comm 2) now has a first near-full clean week (cur7d spend ₹10,444.39) but the Telugu ad itself still doesn't distinctly appear in cur7d data. Re-assess once the restart fully stabilizes.** | MA-025, MA-032, MA-057 |
| SH-MA-9 | Pausing the TOFU Kannada office reel (zero platform-attributed purchases, now several consecutive weeks) does not measurably shrink the Retargeting campaign's reach/pool health, and blended TRUE ROAS improves by narrowing the gap to the 6.0 floor — testing whether the institutionally-assumed "TOFU feeds the retargeting pool" role is actually true or just an untested assumption carried since cycle 1 (2026-06-27). | Pause the single ad for 7–14 days; no budget redeployed elsewhere. Re-read Retargeting reach/frequency and blended TRUE ROAS at D+7 and D+14. | **MOOT — Retargeting remains effectively collapsed relative to its historical baseline (₹905.70/7d off a tiny base, 0 GA4-tagged revenue, cycle 11); cannot isolate the Kannada-reel question from the campaign's own status.** | MA-028, MA-055 |
| SH-MA-10 | MOFU_PDP & Video Thruplay _24 May 26 campaign, once fully paused, frees ₹3,492.64/week with zero measurable loss to any converting funnel stage (it has driven 0 purchases 2 straight weeks) — the freed spend funds SH-MA-7 reallocation + the CF-31/CF-37 format tests without needing net-new budget. | Pause the full campaign (MA-031); confirm at D+7 spend→₹0 and no revenue/CVR impact elsewhere. | **CONFIRMED HELD** — the campaign no longer appears at all in the 35-day campaign pull, re-confirmed again this cycle (cycle 11). | MA-031 |
| SH-MA-11 | CF-31 "Expert/audiologist explainer" challenger ad inside the safebuds_20Apr 26 LAL adset clears the review-format control (CPP ≤ ₹380, ROAS ≥ 8×, freq < 2.5×) within a 7-day read at ~₹5,000 spend. | ₹5,000 test, 7-day read, funded by MOFU-cut reallocation (MA-031). | **STALLED 7 cycles running — blocked on Meet's compliance call, 0 impressions delivered.** Re-confirmed cycle 11 (MA-059). | MA-034, MA-046, MA-052, MA-059 |
| SH-MA-12 | CF-37 "Fear-of-loss health hook" challenger ad inside the ES Comm 2 adset clears the review-format control (CPP ≤ ₹450, ROAS ≥ 8×, freq < 2.5×) within a 7-day read at ~₹5,000 spend. | ₹5,000 test, 7-day read, funded by MOFU-cut reallocation (MA-031). | **STALLED — 0 impressions delivered; host adset (ES Comm 2) now has a first near-full clean week but no CF-37 ad name appears in the data.** Re-confirmed cycle 11 (MA-059). | MA-035, MA-046, MA-052, MA-059 |
| SH-MA-13 | CF-51 "Silent Sensory Demo" challenger ad inside the safebuds_20Apr 26 hero adset clears the review-format control (CPP ≤ ₹380, ROAS ≥ 8×, freq < 2.5×) within a 7-day read at ~₹5,000 spend. | ₹5,000 test, 7-day read, funded by MA-042/043 reallocation (~₹1,036/14d) — no net-new spend. | **STALLED — brief still not produced, 7 cycles after being rotated in.** Re-confirmed cycle 11 as part of MA-059's broader pipeline flag. | MA-045, MA-052, MA-059 |
| SH-MA-14 | Openwire (Type-C wired) campaign clears CPP ≤ ₹350 and platform ROAS ≥ 8× by 2026-08-12 (7-day read from its 2026-08-05 launch), consistent with the 2026-08-05 daily brief's 5.17% PDP CVR signal (vs SafeBuds' 0.75%). | No change — campaign already live at its current small spend; this is a read-plan/threshold only. | **VALIDATED cycle 10 (CPP ₹96.16, ROAS 8.72×/8.78×). REVERSED cycle 11 — CPP ₹125.89 (+30.9%), platform ROAS 6.35×, GA4-directional ROAS 5.42× (below floor). MA-062's budget step downgraded to HOLD; do not scale.** | MA-047, MA-062 |
| SH-MA-15 | "Broad Interest Based-24 Jul 26" campaign's +20% budget step (MA-048) holds GA4-directional ROAS ≥8× and platform CPP ≤₹380 within a 7-day read, confirming the organic-growth signal was real and not a one-week artifact. | +20% budget step, ~₹1,515/day → ~₹1,818/day, 7-day read. | **RECOVERED cycle 10 (10.00× GA4-dir ROAS). Cycle 11 update: softened again to 7.75× once the 2-week no-touch window expired (2026-08-20) — still >6.0 floor, fails the 8× re-scale bar. HOLD, no further step.** | MA-048 |
| SH-MA-16 | Openwire_5 Aug 26's first-ever +20% budget step (MA-062, ~₹1,057.58/day → ~₹1,269/day) holds CPP ≤₹350, platform ROAS ≥8×, and GA4-directional ROAS ≥6× within a 7-day read, confirming the SKU's organic-growth signal survives an actual budget increase. | +20% budget step, 7-day read. | **DOWNGRADED TO HOLD, cycle 11 — never executed, and the campaign's own read reversed hard the same week it would have scaled (see SH-MA-14). Do not re-open until 7 clean days re-clear the floor directionally.** | MA-062 |
| SH-MA-17 | Re-editing the 8–20s body of "Tech in Gujarati Reel_Openwire Hindi Dub_5 Aug" (leaving the 0–2s hook untouched) raises its video_p75/p25 watch-through ratio from 24.0% to ≥40% while holding CPP ≤₹120 and platform ROAS ≥8× within a 7-day read — isolating body-retention as a fixable, separate problem from the ad's already-strong hook (p25 = 12.7% of impressions, the best on the account). | ~₹3,000 test spend, 7-day read, funded by CUT-list reallocation (MA-063/064), no net-new budget. | **STILL NOT PRODUCED, cycle 11 — and more urgent: p75/p25 slipped further to 21.5% this week while the ad's overall ROAS reversed hard (see SH-MA-14/16).** | MA-066 |
| SH-MA-18 (NEW, cycle 11) | A checkout-flow technical/UX fix (once diagnosed per MA-071) recovers checkout→purchase conversion in Broad Interest and Openwire back toward their pre-collapse levels (Broad Interest 41.8%, Openwire 27.1%) within 7 days of the fix landing, confirming a shared technical cause rather than two coincidental campaign-level declines. | No spend — diagnostic + technical fix, re-read via GA4 funnel metrics at D+7. | **NEW — drafted 2026-08-20 (cycle 11), see MA-071.** | MA-071 |
