# Meta Ads — Learning Log Archive

> **The managed agent does not read this file.** It exists only so the full cycle-by-cycle narrative
> is never lost — compressed learnings, confirmed patterns, and open hypotheses live in the live
> `learning-log.md` (CONFIRMED PATTERNS / REJECTED-DEAD-ENDS / CREATIVE-FORMAT TEST ENGINE / SCALE
> HYPOTHESIS BACKLOG). This file is the pre-2026-07-14 raw cycle log, moved here 2026-08-10 to keep
> the live file cheap to re-read every weekly run (was 517 lines / ~73KB, all read on Phase 1 of
> every cycle regardless of relevance). Nothing here was deleted — every learning that still matters
> was already folded into the live file's compact sections before this cut. If a future cycle needs
> the full original reasoning behind an old MA-### or CF-#/SH-MA-# entry, it's below, in date order
> (oldest first).

---

### Apr–May 2026 — ROAS decay (historical, carried in)
**Initiative:** Held hero creative on LAL 1% without rotation.
**Hypothesis:** (implicit) winner keeps winning.
**Result:** Rejected — CPP degraded ₹163 (W2) → ₹674 (W9); audience saturation at 2.43× frequency.
**Learning carried forward:** Rotate before 2.5× frequency; expand LAL 1%→3–5%; new creative every 4–6 weeks.
**Next-sprint change triggered:** tracker P0-2 (rotate hero), P1-2 (rotation pipeline).
**Skill signal:** `roas-decay-watch`, `creative-rotation` confirmed essential 🟢.

---

### 2026-06-27 — Morning loop cycle 1 (first live teardown + performance read)

**Initiative:** First live competitor teardown + NG ad-level performance review.

**Hypotheses tested:**

1. Named competitors (Shokz, boAt, Noise, wecool, Mojawe, Oladence) are running active India open-ear Meta ads.
   **Result: Largely rejected.** Only Grodd India (bone conduction D2C, not in NG's named set) is actively running India-targeted open-ear paid ads. Named competitors are absent or undetectable. This is a meaningful gap — NG is essentially alone in paying to educate the India open-ear category on Meta right now.

2. SafeBuds Unboxing Reel and Comm Unboxing Reel would be at safe frequency levels.
   **Result: Rejected.** Both are in breach: SafeBuds Unboxing freq 3.85×, Comm Unboxing freq 3.63×. Both past the 2.5× gate. Kill drafts queued (MA-001, MA-002).

3. Techopedia SafeBuds Reel remains best-in-portfolio for SafeBuds.
   **Result: Confirmed.** CPP ₹235, ROAS 12.62×, 112 purchases in 30d, freq 2.00× — the strongest active SafeBuds creative. Scale candidate (MA-004).

4. ES Comm 2 campaign ROAS matches the Gadgetbhai_Comm 2.0 historic 11.4× benchmark.
   **Result: Rejected.** ES Comm 2 campaign at ROAS 7.08×; key ad "Custom Reel - 23 May 26" at ROAS 6.82×. Meaningful gap vs. 11.4× hero. Creative swap flagged (MA-003).

**Learning carried forward:**
- Open-ear Meta India competitive landscape is effectively uncontested by the named category peers. Grodd India (not in NG's constitution competitor set) is the only active paid competitor. NG's review/education angle has no paid-media counter-pressure right now. This is a window — not permanent.
- The MOFU campaign "MOFU_GadgetbhaiReel_Comm_26May26" is spending ₹13,498 on landing page views at ₹0.37 CPR but ROAS 1.35× — it is a traffic/warm-up play, not a direct-revenue driver. Worth reviewing whether it is warming audiences that then convert via the Retargeting campaign (which shows ROAS 10.27×). **Cycle 5 (2026-07-14) update: this ad has now shown ZERO purchases for 14 straight days pulled — the "warm-up play" defense has not been re-validated in over a month and a half; CUT drafted (MA-027).**
- Two creative frequency breaches (Unboxing Reels for both SKUs) need immediate human decision. These should not have been left running at 3.6–3.8× freq.
- Awareness TOFU campaign "Kannada office reel_Safebuds_Live translation" is generating enormous reach (3.42M) at ₹0.025/thruplay — strong awareness efficiency. No direct purchase signal but feeding the retargeting pool.

**Next-sprint change triggered:** MA-001 (kill SafeBuds Unboxing), MA-002 (kill Comm Unboxing), MA-003 (creative swap ES Comm 2), MA-004 (scale Techopedia SafeBuds), MA-005 (commission SafeBuds review brief), MA-006 (commission Comm 2.0 review brief). Tracker P0-1 marked complete; P0-2 status updated; P1-1/P1-2 advanced.

---

### 2026-06-27 — Morning loop cycle 2 (second data pull — 7d vs 30d comparison + new campaign surfaced)

**Initiative:** Weekly data refresh — 7-day ad-level pull to detect within-week trend changes vs the 30-day baseline logged in cycle 1. Competitor teardown second pass (all named competitors + bone conduction category).

**Hypotheses tested:**

1. MA-001 / MA-002 kill rationale (unboxing reels) — do the 7d numbers change the case?
   **Result: Kill rationale confirmed (do not reverse).** SafeBuds Unboxing 7d: CPP ₹368, ROAS 14.96×, but reach collapsed to only 1,626 in 7 days (vs 5,101 over 30d) — the audience pool is exhausted. The 30d CPP of ₹845 and freq 3.85× remain the governing numbers. Comm Unboxing 7d shows CPP ₹228, ROAS 25.33× — this is a small-audience artifact (reach 3,228 in 7d, freq 2.17×). The 30d freq 3.63× breach still holds. Both kills remain valid.

2. Techopedia SafeBuds scaling (MA-004) — is ROAS holding week-on-week?
   **Result: Confirmed.** 7d ROAS 12.20×, CPP ₹332, freq 1.56× — well within gates. Scale candidate rationale is intact. Note: 30d CPP is ₹378 vs 7d ₹332 — the creative is running efficiently this week. Window before freq hits 2.5× (at 30d freq 2.00×): approximately 2 more weeks at current pace.

3. Retargeting campaign CPP — was ₹303 in prior memory; is it holding?
   **Result: Rejected — significant degradation.** 30d CPP is ₹691 (up 128% from ₹303 baseline), freq 4.29×. The retargeting pool is exhausted. New kill draft queued (MA-007) and audience-refresh draft (MA-008). This is the most urgent financial decision in today's loop — ₹8,796 spent at ₹691 CPP vs ₹303 target = ~29 purchases where 29 should have cost ~₹8,800 but cost ₹8,796 at that old rate; at ₹691 that's only ~13 purchases from the same spend. Rough bleed: ~₹5,000 of ₹8,796 spend wasted vs the prior CPP.

4. Are any named competitors (Shokz, boAt, Noise, wecool, Mojawe, Oladence) now running India open-ear Meta ads?
   **Result: ONE new entrant — boAt (CEO-corrected).** Shokz: zero. Noise: zero. wecool: zero. Mojawe: zero. Oladance: zero. boAt returned one verified ad — "boAt Airdopes Loop" (INR currency, page boAt) — **CEO clarified this is a clip-type OWS / open-ear form factor, i.e. relevant open-ear competition** (initially misclassified as TWS/closed-ear). The open-ear Meta India category is therefore NO LONGER fully uncontested in paid: boAt is in, leading on lifestyle/feature (not ear-health). NG's health/education hook remains the differentiator. Grodd India activity not re-checked this cycle (no change expected in 48hrs).

5. Is there an undiscovered campaign spending Comm 2.0 budget without tracker visibility?
   **Result: Confirmed — new campaign found.** "ES Comm 2 – LAL - Max Conv Bidding - 5Jun 26" (id 52576570206220) not in prior tracker. 30d: CPP ₹201, ROAS 8.08×, freq 1.56×, spend ₹10,246. This outperforms the ES Comm 2 hero on CPP (₹201 vs ₹253) but is gated by Comm 2.0 supply constraint. Flagged as MA-009.

6. Is ES Pro ("3D All Feature-Pro") running despite being listed as deferred?
   **Result: Confirmed — deferred SKU is spending.** 30d spend ₹9,488 at freq 2.43× (nearly at the 2.5× gate). ES Pro is ⬛ Deferred in COMPANY_STATE §2. This is an EBITDA discipline issue — spend on a deferred SKU at freq 2.43× with no active commercial intent is unaligned. Flagged as MA-010.

**Learning carried forward:**
- Retargeting pool exhaustion is faster than anticipated — at current audience sizes (India D2C), a 30d PDP/90d ATC retargeting window maxes out in ~6–8 weeks. Move to 90d PDP + 180d video view 75% proactively, not reactively.
- 7-day CPP/ROAS data can be misleading for high-frequency ads — the "good" 7d numbers for the unboxing reels reflect a dwindling micro-pool, not genuine creative recovery. Always cross-reference reach collapse to confirm.
- The ES Pro deferred SKU is the most surprising finding — ₹9,488 spent in 30 days on a non-active product. This needs a governance check: who is running this campaign and why?
- New campaign "ES Comm 2 – LAL Max Conv Bidding" is outperforming the standing Comm 2 campaign on CPP. Worth examining its creative composition when stock gate clears.

**Next-sprint changes triggered:** MA-007 (retargeting kill), MA-008 (retargeting audience refresh), MA-009 (Comm 2 new campaign stock gate), MA-010 (ES Pro deferred spend flag), MA-011 (Creative Reel ROAS decline confirmation).

---

### 2026-06-27 — Morning loop cycle 3 (weekly re-analysis + LAL teardown + mandate encoding)

**Initiative:** Weekly re-analysis (week-over-week Jun 20–26 vs prior), deep LAL 1% creative teardown, test matrix seeded for 3-month ₹5L / ROAS 5–6× KPI.

**Hypotheses tested:**

1. **MA-001 / MA-002 kill rationale — does the weekly trend change the case?**
   - SafeBuds Unboxing 7d: CPP ₹368, ROAS 14.96×, reach 1,626. The ROAS looks good but the reach (1,626 in a week) confirms pool near-total exhaustion. Kill remains correct — the 30d CPP ₹845 and 30d freq 3.85× are the governing data; the 7d numbers are a statistical artifact of an almost-empty pool converting at a high rate by chance.
   - Comm Unboxing 7d: CPP ₹228, ROAS 25.33×, reach 3,228, freq 2.17×. Same dynamic — artificially good 7d metrics from a tiny remaining pool. 30d freq 3.63× is still in breach. Kill still warranted.
   **VERDICT: Kill rationale confirmed unchanged. Do not reverse MA-001 or MA-002.**

2. **MA-007 retargeting kill — does weekly data change the case?**
   - 7d: CPP ₹318, ROAS 20.12×, freq 2.50× (exactly at the gate), reach 4,317. The CPP improved materially from the 30d ₹691 — frequency has not climbed further in this 7d window. HOWEVER: freq is now exactly 2.50× — at the gate — and reach is only 4,317 people. The pool is not recovering; it is contracting. One more week at this pace will push freq to 3.0+.
   **VERDICT: Kill rationale confirmed. The 7d CPP improvement is the last gasp of a shrinking pool, not a recovery. MA-007 pause still correct; MA-008 audience refresh still required after the pool rests for 30 days.**

3. **MA-010 ES Pro recheck — has spend actually stopped?**
   - Campaign id 6991972011216 (ES Pro – Max Conv Test): status = PAUSED on the 7d pull. Spend of ₹1,732 in the 7d window reflects delivery that occurred before the pause took effect within that 7-day window. The 7d data runs Jun 20–26; the CEO pause decision was made on 2026-06-27 (end of the window). In subsequent weeks this should read zero spend.
   **VERDICT: Spend is trending to zero. CEO-confirmed pause is working. Recheck next weekly cycle — if spend is non-zero then, escalate as a governance issue.**

4. **MA-004 Techopedia SafeBuds scale — is ROAS still holding week-on-week?**
   - 7d: ROAS 12.19×, CPP ₹333, freq 1.56×. Note: the 7d CPP (₹333) is slightly higher than the 30d CPP from the last_month pull (₹293). This could reflect the campaign spending more of its budget later in the day or audience composition shift. ROAS 12.19× is still comfortably above the 8× scale bar and 3× kill floor.
   - Freq 1.56× gives approximately 3–4 weeks of runway before the 2.5× gate.
   **VERDICT: Scale candidate rationale confirmed. MA-004 (+20% budget step) remains valid. Monitor CPP trend closely — if CPP rises above ₹380 in next week, pause the scale and diagnose.**

5. **MA-009 (LAL 1% campaign 52576570206220) — deep creative teardown + performance diagnosis:**
   - **Status:** Campaign is PAUSED at campaign level. Effective status of all ads = CAMPAIGN_PAUSED or PAUSED.
   - **The 4 active ads in the LAL set (during the 30d window when it was running):**
     - Custom Reel - 23 May 26 Comm (52576570206020): CPP ₹174, ROAS 5.82×, reach 25,932. This was the primary spend-driver.
     - Influencer_Gadgetbhai_13 Nov Comm (52576570207020): CPP ₹179, ROAS 9.85×, reach 30,214.
     - Influencer_Merged_13Nov Comm (52576570207820): CPP ₹96, ROAS 19.75×, reach 1,753.
     - Influencer_Technoexplorer_13Nov (52576570207620): CPP ₹203, ROAS N/A, reach 763. Limited data.
   - **Creative analysis — what angle/content type each ad uses:**
     - All 4 active ads share the same creative headline/title: "Engineered for Clear and Comfortable Calls." Body copy: either "Testing NG EarSafe Comm 2.0 — calling quality is wild." (Custom Reel + Merged variants) or the more feature-led "Watch this: adjustable boom mic + 17-hr playtime + open-ear comfort. 10 mins = hours of power." (Technoexplorer variant). Format: all VIDEO. CTA: SHOP_NOW.
     - The title "Engineered for Clear and Comfortable Calls" is a FEATURE/SPEC claim, not a review or explainer hook. It announces what the product does rather than opening a problem-solution narrative.
     - "Testing NG EarSafe Comm 2.0 — calling quality is wild" is a terse social-style caption — this is closer to a UGC/influencer caption format than a Gadgetbhai/Techopedia review structure.
     - The highest-ROAS ad in the set (Influencer_Gadgetbhai, ROAS 9.85×) uses the Gadgetbhai video itself — a proper review format — which is WHY it outperformed the others. The worst performer (Custom Reel, ROAS 5.82×) uses the non-review custom Reel format. This split is the diagnostic signal.
   - **Performance split within the LAL set:**
     - Review-format ad (Gadgetbhai): CPP ₹179, ROAS 9.85× — ABOVE the 8× scale bar.
     - Custom Reel (non-review): CPP ₹174, ROAS 5.82× — BELOW the 8× scale bar.
     - The ROAS spread between the best and worst creative in this one campaign is 9.85× vs 5.82× — a 69% gap. The campaign-level ROAS of 8.08× was the average, but the Custom Reel dragged it below the bar and was receiving most of the spend (spend ₹4,523 for Custom Reel vs ₹5,400 for Gadgetbhai in 30d — nearly equal, but Custom Reel had lower ROAS).
   - **Is underperformance an AUDIENCE problem or a CREATIVE problem?**
     - **VERDICT: PRIMARILY A CREATIVE PROBLEM.**
     - Evidence: The Gadgetbhai creative (review-format) in the SAME adset with the SAME LAL 1% audience ran at ROAS 9.85× — clearing the 8× bar comfortably. The Custom Reel (feature/caption-format, not a true review structure) in the same adset ran at 5.82×. Same audience, same bidding, same time period — the only variable is the creative. The 69% ROAS gap across creatives in a single adset is a clean A/B signal: review format wins, feature/caption format underperforms.
     - Secondary audience consideration: LAL 1% in India at this account scale (~₹10K/month) is a reasonable audience. The Gadgetbhai creative had no trouble spending ₹5,400 across 30,214 reach — the audience is not too narrow to deliver. Expanding to LAL 3–5% is worth testing (EXP-002/004) but is not the root cause.
     - The CEO's read that "the LAL 1% active ad isn't seeming to perform" is directionally correct but the precise diagnosis is: the wrong creative (Custom Reel, ROAS 5.82×) was allocated too much budget in the LAL set. The ad named "ES Comm 2 – LAL Max Conv Bidding" was actually running multiple creatives, and the one receiving the most algorithmic confidence (Custom Reel) was the weaker one by format.
   - **Action:** Re-launch the LAL campaign only after replacing the Custom Reel with a proper review/explainer format (EXP-001 brief = MA-006 + MA-012). Keep the Gadgetbhai creative in the set as the control — it is already above bar. Kill the Custom Reel and Technoexplorer variants; keep Gadgetbhai + Merged.

   **LEARNING CARRIED FORWARD — LAL teardown:**
   - "LAL 1% performing poorly" is often a creative mix problem, not an audience problem. Always disaggregate performance by creative within the LAL adset before changing the audience.
   - The Influencer_Merged creative at ROAS 19.75× / CPP ₹96 is a micro-signal: this merged influencer format (combining two influencer angles) has the highest ROAS in the entire account this cycle. The reach is tiny (1,753) but the efficiency is extraordinary. This format should be scaled as a standalone test (EXP-001 variant: merged review angle).
   - Review-format creative (Gadgetbhai) out-performs non-review creative in the same LAL at ROAS 9.85× vs 5.82× — confirms institutional truth §4.1 holds at the LAL audience layer, not just cold interest audiences.

6. **Test matrix validation — are the 5 EXP hypotheses grounded in the data?**
   - EXP-001 (review-format in LAL): directly supported by the Gadgetbhai vs Custom Reel split above.
   - EXP-002 (broad audience test): supported by the Meta Andromeda 2026 research — broad with winning creative is now competitive with LAL in accounts with sufficient signal. NG has enough purchase history (112+ SafeBuds purchases in 30d via Techopedia) to test this.
   - EXP-003 (ES Lite): ES Lite stock cleared. 3D Feature-Lite historically ROAS 10.7× / CPP ₹265. Direct test candidate.
   - EXP-004 (LAL 3–5% expansion with health hook): grounded in Techopedia SafeBuds data — the health/education angle is differentiated from all category competitors (boAt, Grodd lead on feature/comfort/price).
   - EXP-005 (UGC-style scripted testimonial): this is a genuine hypothesis — it breaks the institutional truth "UGC = dead" by testing a scripted-review hybrid. Risk is real; 7-day read with ₹8K cap is the right structure.

**Decisions triggered by this cycle:**
- MA-001/002/007: Kill rationale confirmed — expedite approval.
- MA-004: Scale rationale confirmed — expedite approval.
- MA-010: Spend stopping — monitor next week, escalate if non-zero.
- MA-012 (new): Re-launch LAL with Gadgetbhai creative only (kill Custom Reel + Technoexplorer in the LAL set) + produce EXP-001 brief creative.
- MA-013 (new): EXP-002 broad audience test.
- MA-014 (new): EXP-003 ES Lite brief.
- MA-015 (new): EXP-004 SafeBuds LAL 3–5% + health hook.
- MA-016 (new): EXP-005 UGC-style scripted testimonial.

**Learning carried forward:**
- Weekly pull reveals faster signal than 30d: the Custom Reel ROAS decline (6.82× → 4.95×) was only visible in the 7d cut. 30d average was masking it.
- Pool exhaustion is the dominant risk at NG's current audience scale. Any retargeting window under 90d will exhaust in 6–8 weeks at current impression rates.
- The test matrix is the mechanism to reach the ₹5L / ROAS 5–6× KPI — validated experiments stack; unvalidated formats burn spend. Never scale a format the data hasn't confirmed.

---

### 2026-07-03 — Morning loop cycle 4 (weekly WoW read: 7d Jun26-Jul2 vs 7d Jun19-25 + accountability check on 2026-06-30 decisions)

**Initiative:** First clean week-over-week read since the 2026-06-30 approvals (MA-004 scale, MA-009 scale) and the founder's manual live actions (2 remarketing carousels launched 2026-07-02, MA-001/002/007 kills "held" rather than executed). Competitor teardown refresh (3rd consecutive week, see ledger in the live learning log).

**Hypotheses tested / accountability checks:**

1. **MA-004 (Techopedia SafeBuds scale to ₹2,500/day) — did the scale hold ROAS?**
   **Result: CONFIRMED WORKING — cleanly.** 7d spend rose ₹9,308→₹12,546 (+35%), and instead of degrading, CPP *improved* ₹343→₹210 (-39%) and ROAS rose 12.40×→14.32×. Frequency actually fell 1.56×→1.33× (more runway before the 2.5× gate, not less). This is the cleanest scale-at-constant-or-improving-ROAS result logged yet. **Do not stack another budget step this week** — CSO-003 (2026-07-02) already called for a full 7-day read through ~2026-07-07 before the next step; today's read supports holding that line, not accelerating it.

2. **MA-009 (Comm 2.0 LAL campaign 52576570206220 scaled to ₹750/day + audience change) — is it running?**
   **Result: BROKEN / NOT RUNNING.** Campaign-level pull today shows this campaign as **PAUSED** with zero 7d spend or delivery data. The decision log marks MA-009 "DONE — executed manually 2026-06-30," but one week later the campaign is dark. Either it was paused again after the scale, or the audience change caused a delivery failure. This is the single most important accountability gap this cycle — an approved, supposedly-executed scale action produced zero measurable spend in the following week. Flagged for founder clarification (MA-018), no further action possible until we know what happened.

3. **MA-010 (ES Pro pause) — is spend still trending to zero?**
   **Result: CONFIRMED — nearly at zero.** 7d spend on "3D All Feature-Pro" is ₹318 (down from ₹1,732 last week, down from ₹9,488/30d before the pause). Trend is clean: 9,488 → 1,732 → 318. One more week should read ₹0. **However:** a *different*, previously-unflagged ES Pro campaign — "Test – ES Pro OutDoor Audience" (id 6980755504416) — is showing **ACTIVE** status. It had zero delivery in the 7d window (not in the top-24 spending ads), so no immediate financial exposure, but an active campaign on a ⬛ Deferred SKU is a stock-before-demand gate violation waiting to happen if it starts delivering. Flagged (MA-019).

4. **MA-001/MA-002/MA-007 (kill recommendations for Unboxing reels + Retargeting) — founder held all three ("pause none for now," 2026-06-30). Did holding change the picture?**
   - SafeBuds Unboxing Reel and Comm Unboxing Reel: live status now shows **ADSET_PAUSED / PAUSED** respectively, with only residual spend (₹1,072 and ₹530 in 7d, both declining from the prior week). Functionally these are no longer bleeding meaningfully — whether this happened via a manual founder action outside `/execute-approved` or the adsets naturally exhausted their budget/schedule, the outcome the kill recommendation wanted has occurred. Not re-flagging.
   - **Retargeting campaign (52563334980220): the picture got WORSE, not better.** Frequency climbed from 2.50× (last week, "at the gate") to **2.89× this week** — now clearly past the 2.5× rotation gate. Reach grew only marginally (4,317→5,278) while frequency rose sharply — classic pool-exhaustion signature: the same small audience is being hit more, not a bigger audience being reached. **Two new remarketing carousel ads were added to this exact campaign on 2026-07-01/07-02** ("Comm_Customer Review_Carousel_1 Jul 26", "Safebuds_Review Carousel_2 Jul 26") — these are the founder's manually-launched carousels from the tracker's LIVE REMARKETING block. Important structural finding: **these are new ADS inside the existing, already-fatigued Retargeting campaign — not new standalone campaigns as the tracker assumed.** New creative does not reset audience-level frequency; only a wider/fresh audience does. Re-flagged with fresh WoW evidence (MA-017).

5. **Competitor teardown (3rd consecutive week) — has the category picture changed?**
   **Result: No structural change, pattern now confirmed stable across 3 weeks.** boAt remains the only named competitor active in India open-ear paid (clip-on format, comfort/lifestyle framing, freshest ad ~Jun 30). Grodd India (non-named but category-adjacent) unchanged: price/discount + comfort, zero education. Shokz/Noise/wecool/Mojawe/Oladence: zero India open-ear paid presence, 3rd week running. NG's health/education angle remains completely unclaimed.

6. **"Custom Reel - 23 May 26 Comm" (52561764556620) — last cycle flagged this as urgently decaying (ROAS 6.82×→4.95× WoW) and queued a swap (MA-003/MA-006, both rejected 2026-06-30 for being too basic). Did it keep decaying?**
   **Result: REJECTED reversal — it recovered.** 7d ROAS is now **10.50×** (up from 4.95× the prior week), CPP improved ₹213→₹173, frequency eased 1.77×→1.58×. This is now comfortably above the 8× scale bar. **Learning: single-week ROAS dips on modest spend (~₹2,300/week) are noisy and can self-correct; the founder's rejection of the rushed swap brief was the right call in hindsight** — an urgent creative swap would have interrupted a creative that was about to recover on its own. Do not re-open MA-003/MA-006 this cycle; watch one more week before concluding anything. **Cycle 5 (2026-07-14) update: it decayed again — CPP ₹437, ROAS 7.56× this week, weakest in its adset. Two data points of decay-then-partial-recovery-then-decay-again on this creative suggests it is genuinely the weaker format (per the cycle-3 LAL teardown), not just noise — MA-030 drafts a rotation this time rather than waiting again.**

**Blended Meta ROAS check (Windsor, `facebook` connector, daily Jun26-Jul2):** total 7d spend ≈ ₹30,892, 100 purchases, weighted blended ROAS ≈ **9.81×** — comfortably above the 5–6× KPI floor (COMPANY_STATE §5.6). Daily spend trend: ₹3,606→₹4,498, no clean linear ramp day-to-day but the week average is roughly flat vs. CSO-003's ₹30,237/week reading from last check — pace is still modestly under the ~₹38,500/week needed to hit ₹5L in 3 months, though MA-004's clean scale result argues for the next scale step once the 7-day read completes (~2026-07-07), not before.

**Learning carried forward:**
- **Governance gap confirmed twice this cycle:** the remarketing carousels (2026-07-02) and the SafeBuds rotation creative (2026-06-30) both went live without a queue draft or `/execute-approved` run. This isn't a spend-safety problem this week (both are performing fine or too-new-to-read) but it breaks the read plan — the agent cannot verify budgets, exact launch times, or targeting definitions for either without the founder confirming details. Continue flagging this pattern; do not treat "it's live and it's fine" as equivalent to "it went through the gate."
- **Frequency is a pool-level, not a creative-level, metric.** Adding new creative to the Retargeting campaign did not and will not fix its 2.89× frequency — this needs either a genuine pause-and-rest or a wider/fresher audience definition (90d PDP + 180d video view, previously proposed as MA-008 and rejected for insufficient analysis). This cycle's MA-017 re-raises the kill with the sharper WoW evidence.
- **Single-week ROAS swings on sub-₹3K/week ad spend are not reliable kill/swap signals on their own** — the Custom Reel reversal is the clearest example logged to date. Two consecutive weeks of decline, not one, should be the practical bar before recommending a swap for lightly-spent creative (heavier-spend creative like Techopedia, at ₹12K+/week, is more statistically reliable on a single week).

**Next-sprint changes triggered:** MA-017 (re-flag Retargeting pause with fresh freq 2.89× evidence), MA-018 (flag MA-009 campaign-dark contradiction), MA-019 (flag new ES Pro "OutDoor Audience" test campaign), MA-020 (flag + read-plan for the already-live SafeBuds rotation creative), MA-021 (full-standard ES Lite creative brief, EXP-003, built to the 2026-06-30 BRIEF & TEST STANDARD).

---

### 2026-07-09 — Founder hypothesis check: "50% of day revenue lands by 11 AM — is ad spend also front-loading, wasting the evening conversion window?"

**Initiative:** Founder observed 3 straight days of ~50% of total-day revenue clocked by 11 AM and asked whether Meta + Google budgets are also spending ~50% overnight/pre-11AM (which would mean starving high-converting evenings). Checked with hourly pulls: Shopify sales by hour (IST), Meta hourly_stats_aggregated_by_advertiser_time_zone (Windsor), Google Ads hour_of_day (Windsor), Jul 6–9.

**Result: HYPOTHESIS REJECTED on the spend side; the revenue premise itself only held 2 of 4 days.**

1. **Spend is not front-loading.** Meta pre-11AM share of daily spend: Jul 6 = 27%, Jul 7 = 31%, Jul 8 = 35%. Overnight (12–6 AM) is only ~10–16%. Meta's *heaviest* delivery hours are 8–11 PM (₹300–500/hr vs ₹25–150/hr overnight) — its pacing already back-loads into the evening. Google (small: ₹1.3–1.9K/day vs Meta ~₹6K/day): 28% / 37% pre-11AM on the two complete days.
2. **The revenue premise is shakier than it looked.** Shopify pre-11AM share of website day revenue: Jul 6 = 33%, Jul 7 = 11%, Jul 8 = 51%, Jul 9 = 100%-so-far (day incomplete at pull time — that's what a mid-morning dashboard glance always shows). Only Jul 8 truly hit ~50%.
3. **No stable hour-of-day conversion edge.** Meta ROAS pre/post 11 AM: Jul 6 = 9.7×/7.6×, Jul 7 = 2.3×/8.0×, Jul 8 = 8.5×/4.9× — flips daily. At 10–15 website orders/day, hour-level shares are noise; 3 days cannot support a dayparting decision.

**Learning:** Evenings are not being starved — they already get the most budget. Dayparting on Meta would require switching to lifetime budgets (structural change, against DNB Performance-5 account simplification) to chase a pattern that isn't there. Standing rule: any time-of-day argument needs a 14–30 day hourly aggregate, not a 3-day read; and "revenue by 11 AM" checks must exclude the current (incomplete) day.

**Action:** None drafted. Re-open only if a 14–30 day hourly aggregate shows a persistent pre-11AM revenue share ≥45% with evening ROAS materially above morning.

---

### 2026-07-09 (second entry) — ES Lite relaunch: lifetime ad-level pull + campaign structure draft (MA-022)

**Initiative:** Founder confirmed ES Lite back in stock and asked to check past-performing Meta ads and restart on the updated LAL audience. Pulled full lifetime (Jan-25 → Jul-26) ad-level data for every ES Lite ad from Windsor (`facebook` connector, filtered `ad_name`/`campaign` contains "Lite"), and checked Meta Ads Manager directly for current LAL audiences.

**Lifetime ES Lite ad performance (all-time through 2026-07-09):**

| Ad | Adset/pool | Spend | Purchases | Revenue | CPP | ROAS |
|---|---|---|---|---|---|---|
| 3D All Feature-Lite | Lite-LAL (Nov-25 seed) | ₹7,797 | 30 | ₹79,450 | ₹260 | **10.19×** |
| Reel_Lite_Merged | Lite-LAL (Nov-25 seed) | ₹2,992 | 8 | ₹18,522 | ₹374 | 6.19× |
| Review Img Lite 3D (warm) | Warm Retargeting | ₹13,189 | 40 | ₹78,810 | ₹330 | 5.98× |
| Reel_Lite_Mr Lazy | Lite-LAL (Nov-25 seed) | ₹80,951 | 183 | ₹339,968 | ₹442 | 4.20× |
| Lifestyle Image -Lite -1 | Lite-LAL (Nov-25 seed) | ₹7,375 | 15 | ₹25,235 | ₹492 | 3.42× |
| Reel_TVC | Lite-LAL (Nov-25 seed) | ₹1,062 | 2 | ₹3,478 | ₹531 | 3.27× |
| Reel_Lite_Whysotechie | Lite-LAL (Nov-25 seed) | ₹18,556 | 25 | ₹52,008 | ₹742 | 2.80× |
| Carousel_Lite_Features | Lite-LAL (Nov-25 seed) | ₹1,003 | 0 | ₹0 | — | 0× |
| Review Img_Lite (warm) | Warm Retargeting | ₹567 | 1 | ₹3,329 | ₹567 | 5.87× |

Blended lifetime: ~₹1.33L spend, 304 purchases, ~₹6.0L revenue across all Lite ads/pools.

**Key finding — old campaign ran on a stale audience seed.** The historic "ES Lite" campaign's adset "Lite-LAL Audience 1%-18 Nov 25" was built on a Nov-2025 purchaser export (`litecust.csv`, LAL id 6968303479216, still ACTIVE, 5.2–6.1M size). A newer LAL exists: **"Lookalike (1%) -Lite 23 May 26" (id 52561691496220, ACTIVE)** — built from a more recent purchaser list, but Meta reports its size as only 1,000–1,000 (placeholder/unpopulated bounds, vs. millions on the Nov seed). **Flagged as a pre-launch risk in MA-022 — must verify this audience is actually populated in Ads Manager before spend starts, or rebuild the 1% LAL from the latest Lite purchaser export.**

**Creative selection logic for relaunch:** 3D Feature-Lite (10.19× lifetime, matches the constitution's ₹265/10.7× benchmark almost exactly) and Reel_Lite_Merged (6.19×, but only ₹3K lifetime spend — under-tested, deserves a clean read) are the anchor + challenger. Mr Lazy is the account's single biggest ES Lite spender ever (₹80,951, 183 purchases) but its lifetime ROAS (4.20×) sits below the 5× SafeBuds/Lite floor — most of that spend likely happened after audience saturation. Gave it one fresh-pool shot with a hard day-3 kill line rather than excluding it outright, since 183 real purchases is too much signal to discard. Whysotechie, Lifestyle Image, Carousel, and TVC are all below the 3.5× line lifetime — excluded from relaunch, logged as the "already tested and weak" set (not re-added to REJECTED/DEAD ENDS since they were never killed for cause, just outperformed).

**Action:** MA-022 drafted to `APPROVALS_QUEUE.md` — new campaign "ES Lite Relaunch – LAL – Jul 26", ₹1,000/day (₹7K/7-day test), 3 ads on the updated LAL, day-3 and day-7 read plan. Complementary to MA-021 (pending, net-new review-creative test on fresh Interest audience) — different audience, no overlap, both can run in parallel once approved.

**Learning carried forward:** Whenever a SKU restarts after a stock gap, check LAL audience freshness first — an old campaign structure will silently keep pointing at a stale purchaser-seed LAL unless explicitly rebuilt, even if a newer LAL exists in the account. This is now a standing pre-launch checklist item for any relaunch.

---

### 2026-07-09 (third entry) — LAL audit: the "updated" ES Lite audience was a false positive (MA-023)

**Initiative:** Founder asked directly to build the 1% LAL audience for ES Lite using the Meta + Shopify connectors. Before building a duplicate, checked what the existing "Lookalike (1%) -Lite 23 May 26" (id 52561691496220) audience actually is.

**Finding: the audience name is misleading.** Pulling its `lookalike_spec` shows `origin_fbid: 6968302625016` — that traces to Custom Audience **"litecust.csv"**, created 2025-11-18. The May 23 date is only a re-derivation timestamp (Meta refreshed the LAL from the same underlying file); no new customer list was ever uploaded. This directly contradicts the assumption made two cycles ago in MA-022, which treated "23 May 26" as a legitimately newer seed and only flagged its odd 1,000/1,000 size as a possible display quirk. It wasn't a display quirk — it's a genuinely stale seed with a confusing name.

**Scale of the gap:** Shopify pull (365d, 2026-07-09): 1,247 unique ES Lite customers purchased in the last year. Of those, **966 purchased after 2025-11-18** — the date the seed file was frozen. The existing LAL is built from a source that excludes roughly three-quarters of the last year's actual buyers, including everyone who came in through the recent restock.

**Action:** MA-023 drafted — export a fresh 365-day ES Lite purchaser list from Shopify (1,247 customers), upload as a new Meta Custom Audience, derive a new 1% LAL from it once populated. MA-022 (ES Lite relaunch campaign, still pending) is now marked BLOCKED on this — it should not launch against the old audience id.

**Learning carried forward:** An LAL's `time_updated` / display name is not proof of a fresh seed — always trace `lookalike_spec.origin_fbid` back to the source Custom Audience's `time_created` before trusting a "refreshed" audience. Add this as a standing check for every future relaunch, not just this one. Also: PII/customer-list data must never be written into `APPROVALS_QUEUE.md` or the learning log — only aggregate counts and the connector-to-connector process description. The actual list moves directly between Shopify and Meta at `/execute-approved` time.

**Cycle 5 (2026-07-14) follow-up:** ES Lite is now live and performing well (Reel_Lite_Mr Lazy 13.89× 7d ROAS on the fresh pool, vs. 4.20× lifetime before the relaunch) — consistent with, but not an independent re-verification of, the new LAL actually being populated correctly. Worth a direct audience-ID check in a future cycle if ES Lite performance ever regresses.

---

### 2026-07-03 through 2026-06-27 — Competitor Intel Ledger (older rows)

> The live learning log keeps only the most recent row per competitor plus the rollup finding. Full week-by-week history:

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

---

> Cycles 7, 8, 9 (2026-08-06/08-13) — moved from `learning-log.md` on 2026-08-25 during a
> `/approvals` maintenance pass. The managed agent never reads this file.

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


