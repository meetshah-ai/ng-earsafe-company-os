# AMAZON — Live Task Tracker

> Read at the start of every session in this lane to resume context instantly. After a task: update status + add the result observed. Each 30-day cycle: archive completed tasks into `learning-log.md` and reset.
>
> Last updated: 2026-08-10

## PRIORITY SYSTEM
- **P0** — this week. No new work starts until P0s clear.
- **P1** — this month. High-impact, quick.
- **P2** — 30–60 days.
- **P3** — 60–90 days / new bets.

## CURRENT SPRINT — 2026-07-08 → 2026-08-07
| # | Task | Target | Expected impact | Status | Result |
|---|---|---|---|---|---|
| P0-0 | **NEW 2026-08-10** — Fix Amazon Ads API authentication: LWA token exchange succeeds (200) but every resource call (`/v2/profiles`, `/reporting/reports`) 401s with `"clientId does not match token"` — reproduced on EU + NA hosts, with/without scope header, same-command mint-and-use. See AZ-005. | Restore read access before anything else in this lane can move | Unblocks P0-1 refresh, P0-4, P1-1, and every future cycle | **BLOCKING — needs Meet/IT** | 0/6 diagnostic calls succeeded 2026-08-10. Token endpoint fine; Ads API resource servers reject the client/token pairing. |
| P0-1 | First full Amazon Ads audit once Windsor `amazon_ads` sync completes: per-campaign spend/sales/ACOS across SP/SB/SD, both accounts, 30-day window | Baseline every campaign vs blended-ROAS-15 bar | The map everything else depends on | DONE 2026-07-08 (campaign-level; targeting/SD tables still backfilling). **Refresh attempted 2026-08-10 — blocked by P0-0.** | 30d SP: ₹35.2K spend → ₹1.10L attributed (4.5× matured). ONE working campaign (Comm Generic). SB + NG AMS acct 100% dark. AZ-001..004 drafted. No newer number exists as of 2026-08-10. |
| P0-2 | Establish the true blended ROAS baseline: (SC+VC revenue) ÷ ad spend, weekly, trailing 8 weeks | Know where we stand vs the 15 bar | Sets scale-vs-fix posture | DONE 2026-07-08 (initial; refine weekly — **refresh blocked by P0-0 as of 2026-08-10**) | Blended ≈ **21** (≈₹7.5L/mo SC+VC rev ÷ ≈₹35K/mo spend) — ABOVE the 15 bar → explicit headroom to buy growth. Spend ceiling at bar: ₹50K/mo today, ₹2.33L/mo at ₹35L rev. Note: this is the department's P&L bar, not this agent's 6.0 ad-attributed floor — never conflate the two. |
| P0-3 | Campaign scale-test classification (SCALE/HOLD/FIX-KILL) per [[ng-budget-allocation-logic]] + first budget drafts to queue | Every campaign classified with evidence | First ₹ of disciplined scale toward ₹35L | DONE 2026-07-08 | SCALE: Comm Generic (AZ-003) — **read overdue since ~2026-07-19, see AZ-007, 22 days late as of 2026-08-10.** RELAUNCH: SafeBuds 5th May (AZ-002). KILL: SafeBuds 3rd June Manual (AZ-001, matured zeros wks 2–3) — **still PENDING USER, 5 weeks, see AZ-006.** INVESTIGATE: NG AMS + all SB dark (AZ-004). |
| P0-4 | Follow up AZ-001..004 through /approvals + /execute-approved; log reads on their stated dates | 4 drafts decided | Unblocks the first disciplined ₹ | **STILL PENDING USER as of 2026-08-10 — 5 weeks stalled.** | AZ-003's stated read date (~2026-07-19) has passed with no logged read (AZ-007). AZ-001's kill evidence is unchanged and undecided (AZ-006). |
| P1-1 | Search-term harvest + negative prune across SP campaigns | Kill non-converting spend; promote winners to exact | ROAS defense while scaling | **BLOCKED — 2 consecutive cycles, 2 different causes.** Cycle 1: Windsor table-sync. Cycle 2 (2026-08-10): Ads API auth failure (P0-0/AZ-005). | Hypothesis queued as AZ-008 for the first successful pull. |
| P1-2 | SKU × campaign coverage map: which SKUs have no/thin ad coverage vs their sales velocity | Find unbought demand (SafeBuds accelerating +77% WoW as of last read) | Growth headroom | TODO (blocked on P0-0 for fresh data) | |
| P1-3 | Organic rank baseline on money keywords (Porter amazon_ranked_keywords) | Rank tracking from day 1 | Measures the ads→rank flywheel | TODO | |
| P1-4 | SC vs VC strategy read: margin per basis, which SKUs belong where, VC PO cadence | Channel-within-channel clarity | Protects margin at scale | TODO | |
| P2-1 | Listing/A+ audit for top SKUs (title keywords, images, reviews velocity) | CVR lift compounding every ad rupee | CVR is the cheapest ROAS lever | TODO | |
| P2-2 | Deal/coupon calendar proposal (Lightning Deals, coupons) timed to rank pushes | Velocity spikes for rank | Flywheel acceleration | TODO | |

## PERFORMANCE TARGETS
| Metric | Baseline (2026-07-08) | 30-day | 60-day | 90-day |
|---|---|---|---|---|
| Amazon sales (SC+VC, monthly run-rate) | ~₹7.5L/mo (wk 24–30 Jun ₹1.74L; wk 1–7 Jul ₹2.36L partial, accelerating) | ₹12L | ₹20L | **₹35L** |
| Blended Amazon Ads ROAS (SC+VC rev ÷ spend) — **department's ≥15 bar, not this agent's floor** | **≈21** (verified 2026-07-08: ₹35.2K/30d spend vs ≈₹7.5L/mo rev) | ≥15 | ≥15 | **≥15** |
| Ad spend (weekly) | ≈₹8.2K/wk (Windsor-verified; settlement-implied ₹9.5K/wk cross-checks ✓) | scale within ROAS bar | — | ~₹55K/wk implied at ₹8.1L/wk sales if blended ROAS = 15 |
| **Ad-attributed ROAS (matured windows) — this agent's own 6.0 floor** | 4.3–4.5 (wk1 4.29; Comm Generic 30d 4.5) — **stale as of 2026-08-10, refresh blocked by P0-0** | ≥6.0 | ≥6.0 | ≥6.0 |
| Organic rank, top-5 money keywords | TBD (P1-3) | top 10 | top 5 | top 3 |

> Note: ₹35L/mo at blended ROAS 15 implies ad spend up to ~₹2.3L/mo. The path is spend scaling ~10× from today — which is exactly why every step must pass the campaign scale test.
> **Correction (2026-08-10):** the earlier "≥4.5" ad-attributed ROAS target in this table was set before this agent's constitution fixed the floor at **6.0** — the 30-day/60-day/90-day columns are corrected to 6.0 above. The 4.3–4.5 baseline reading is now BELOW the actual floor and would itself be a FIX/CUT trigger once re-verified — but it cannot be re-verified until P0-0 is resolved.

## DATA PULL SCHEDULE
- **Weekly (direct Amazon Ads API, no Windsor as of 2026-08-10):** exchange refresh token → pull SP/SB/SD campaign reports (async `/reporting/reports`) both profiles, mind 14-day attribution — matured-window reads for kill/scale only.
- **Daily (via /cos-daily-brief):** SC+VC revenue + ads spend fold into the commercial brief once connector is stable.
- **Every 14 days:** Porter organic rank pull on money keywords.

## DEPENDENCIES / BLOCKERS
- **NEW 2026-08-10 — Amazon Ads API authentication broken.** LWA `/auth/o2/token` succeeds (200, valid access_token) but every Ads API resource call — `/v2/profiles`, `/reporting/reports`, both EU (`advertising-api-eu.amazon.com`) and NA (`advertising-api.amazon.com`) hosts, with/without the `Amazon-Advertising-API-Scope` header — returns HTTP 401. The reporting endpoint's specific message: `"clientId does not match token"`. Ruled out: host/region routing (both hosts tested identically), profile scope (tested with and without), token staleness (same-command mint-and-use test still failed). This is a credential-pairing issue between `AMZADS_CLIENT_ID` and the app that actually owns `AMZADS_REFRESH_TOKEN`/`AMZADS_CLIENT_SECRET` — needs Meet/IT to re-verify or regenerate against the correct LWA Security Profile. See AZ-005. **Every other item in this tracker that needs fresh Amazon Ads data is blocked behind this.**
- Windsor `amazon_ads` is no longer the pull path (superseded by direct API access per 2026-08-10 mandate) — the above blocker is now the only live one.
- Inventory cover per SKU (supply state in `COMPANY_STATE.md` §3) gates every scale draft — reconfirm before each budget step, once data access is restored.

<!-- The deep-loop updates this file weekly; the standup reads it daily. -->
