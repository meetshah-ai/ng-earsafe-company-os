# AMAZON — Live Task Tracker

> Read at the start of every session in this lane to resume context instantly. After a task: update status + add the result observed. Each 30-day cycle: archive completed tasks into `learning-log.md` and reset.
>
> Last updated: 2026-07-08

## PRIORITY SYSTEM
- **P0** — this week. No new work starts until P0s clear.
- **P1** — this month. High-impact, quick.
- **P2** — 30–60 days.
- **P3** — 60–90 days / new bets.

## CURRENT SPRINT — 2026-07-08 → 2026-08-07
| # | Task | Target | Expected impact | Status | Result |
|---|---|---|---|---|---|
| P0-0 | Stand up the **Amazon Ads Operator** managed agent (`Company_OS/agents/amazon-ads.agent.yaml`) | Weekly, direct-API SP/SB/SD performance decode holding a 6.0 ad-attributed-ROAS floor, taking over campaign-level scale/kill from this subagent | Frees this subagent to focus on P&L (SC+VC, inventory, listings) while Ads gets a dedicated weekly operator, mirroring Google Ads / Meta Ads | **DONE 2026-08-10** — `agent_018SLSmqeSjmt4Z9wtKMq6XK` / `depl_015owH8KhHtxLayo6uRYM4r4`, weekly Wednesday 07:30 IST, first run 2026-08-12 | Pivoted off the stuck Amazon Ads MCP beta onto direct API (LWA app, refresh token, both profile IDs verified live same day). Client ID `amzn1.application-oa2-client.8f08f0a0327f4e5cafc1352eba291842`; profiles: NG Corporation (SC) `1452172411967063`, NG AMS (VC) `1498424255518113`. **Reporting API call shape untested until the 2026-08-12 first run** — read that report for a correction note before trusting later runs blindly. |
| P0-0b | Reminder: renew the Amazon Ads refresh token (redo the browser consent step, then update the `AMZADS_REFRESH_TOKEN` vault credential) before **2027-08-10** | Keep the Amazon Ads Operator running | Refresh tokens issued on/after 2026-07-30 expire after 365 days — this one has a hard deadline, unlike the old non-expiring style | TODO (calendar/reminder, not a code task) | |
| P0-0c | Check the 2026-08-12 first Amazon Ads Operator report for a Reporting API correction note; if the guessed `reportTypeId`/column shape was wrong, update `Company_OS/agents/amazon-ads.agent.yaml`'s "HOW TO REACH THE AMAZON ADS API" section with what actually worked, then re-push (`ant beta:agents update` + re-pin the deployment) | A verified, no-longer-guessed system prompt | The shape in the spec was a documented best-guess, explicitly flagged as unverified at deploy time | TODO — check after 2026-08-12 07:30 IST | |
| P0-1 | First full Amazon Ads audit once Windsor `amazon_ads` sync completes: per-campaign spend/sales/ACOS across SP/SB/SD, both accounts, 30-day window | Baseline every campaign vs blended-ROAS-15 bar | The map everything else depends on | DONE 2026-07-08 (campaign-level; targeting/SD tables still backfilling) | 30d SP: ₹35.2K spend → ₹1.10L attributed (4.5× matured). ONE working campaign (Comm Generic). SB + NG AMS acct 100% dark. AZ-001..004 drafted. |
| P0-2 | Establish the true blended ROAS baseline: (SC+VC revenue) ÷ ad spend, weekly, trailing 8 weeks | Know where we stand vs the 15 bar | Sets scale-vs-fix posture | DONE 2026-07-08 (initial; refine weekly) | Blended ≈ **21** (≈₹7.5L/mo SC+VC rev ÷ ≈₹35K/mo spend) — ABOVE the 15 bar → explicit headroom to buy growth. Spend ceiling at bar: ₹50K/mo today, ₹2.33L/mo at ₹35L rev. |
| P0-3 | Campaign scale-test classification (SCALE/HOLD/FIX-KILL) per [[ng-budget-allocation-logic]] + first budget drafts to queue | Every campaign classified with evidence | First ₹ of disciplined scale toward ₹35L | DONE 2026-07-08 | SCALE: Comm Generic (AZ-003). RELAUNCH: SafeBuds 5th May (AZ-002). KILL: SafeBuds 3rd June Manual (AZ-001, matured zeros wks 2–3). INVESTIGATE: NG AMS + all SB dark (AZ-004). |
| P0-4 | Follow up AZ-001..004 through /approvals + /execute-approved; log reads on their stated dates | 4 drafts decided | Unblocks the first disciplined ₹ | PENDING USER | |
| P1-1 | Search-term harvest + negative prune across SP campaigns (blocked: Windsor `sponsored_products_targeting` table still syncing 2026-07-08 — retry) | Kill non-converting spend; promote winners to exact | ROAS defense while scaling | TODO | |
| P1-2 | SKU × campaign coverage map: which SKUs have no/thin ad coverage vs their sales velocity | Find unbought demand (SafeBuds accelerating +77% WoW) | Growth headroom | TODO | |
| P1-3 | Organic rank baseline on money keywords (Porter amazon_ranked_keywords) | Rank tracking from day 1 | Measures the ads→rank flywheel | TODO | |
| P1-4 | SC vs VC strategy read: margin per basis, which SKUs belong where, VC PO cadence | Channel-within-channel clarity | Protects margin at scale | TODO | |
| P2-1 | Listing/A+ audit for top SKUs (title keywords, images, reviews velocity) | CVR lift compounding every ad rupee | CVR is the cheapest ROAS lever | TODO | |
| P2-2 | Deal/coupon calendar proposal (Lightning Deals, coupons) timed to rank pushes | Velocity spikes for rank | Flywheel acceleration | TODO | |

## PERFORMANCE TARGETS
| Metric | Baseline (2026-07-08) | 30-day | 60-day | 90-day |
|---|---|---|---|---|
| Amazon sales (SC+VC, monthly run-rate) | ~₹7.5L/mo (wk 24–30 Jun ₹1.74L; wk 1–7 Jul ₹2.36L partial, accelerating) | ₹12L | ₹20L | **₹35L** |
| Blended Amazon Ads ROAS (SC+VC rev ÷ spend) | **≈21** (verified 2026-07-08: ₹35.2K/30d spend vs ≈₹7.5L/mo rev) | ≥15 | ≥15 | **≥15** |
| Ad spend (weekly) | ≈₹8.2K/wk (Windsor-verified; settlement-implied ₹9.5K/wk cross-checks ✓) | scale within ROAS bar | — | ~₹55K/wk implied at ₹8.1L/wk sales if blended ROAS = 15 |
| Ad-attributed ROAS (matured windows) | 4.3–4.5 (wk1 4.29; Comm Generic 30d 4.5) | ≥4.5 | ≥4.5 | ≥4.5 |
| Organic rank, top-5 money keywords | TBD (P1-3) | top 10 | top 5 | top 3 |

> Note: ₹35L/mo at blended ROAS 15 implies ad spend up to ~₹2.3L/mo. The path is spend scaling ~10× from today — which is exactly why every step must pass the campaign scale test.

## DATA PULL SCHEDULE
- **Weekly (with /deep-loop):** Windsor `amazon_ads` campaign daily (mind 14-day attribution — matured-window reads for kill/scale), `amazon_sp` sales_and_traffic, `amazon_vendor` vendor_sales.
- **Daily (via /cos-daily-brief):** SC+VC revenue + ads spend fold into the commercial brief once connector is stable.
- **Every 14 days:** Porter organic rank pull on money keywords.

## DEPENDENCIES / BLOCKERS
- **Windsor `amazon_ads` initial sync in progress (2026-07-08)** — all ads queries time out until backfill completes. P0-1/2/3 blocked on it.
- Inventory cover per SKU (supply state in `COMPANY_STATE.md` §3) gates every scale draft — reconfirm before each budget step.

<!-- The deep-loop updates this file weekly; the standup reads it daily. -->
