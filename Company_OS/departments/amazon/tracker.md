# AMAZON — Live Task Tracker

> Read at the start of every session in this lane to resume context instantly. After a task: update status + add the result observed. Each 30-day cycle: archive completed tasks into `learning-log.md` and reset.
>
> Last updated: 2026-08-13 (cycle #4, later same day — auth restored)
> **Queue-inbox note:** `queue-inbox.md` holds rows AZ-001..AZ-027 — **next free ID is AZ-028.**

## PRIORITY SYSTEM
- **P0** — this week. No new work starts until P0s clear.
- **P1** — this month. High-impact, quick.
- **P2** — 30–60 days.
- **P3** — 60–90 days / new bets.

## CURRENT SPRINT — 2026-08-13 → 2026-09-12 (reset: auth restored, account fully re-baselined)
| # | Task | Target | Expected impact | Status | Result |
|---|---|---|---|---|---|
| P0-0 | Fix Amazon Ads API authentication: LWA token exchange succeeds (200) but every resource call (`/v2/profiles`, `/reporting/reports`) 401s with `"clientId does not match token"` | Restore read access before anything else in this lane can move | Unblocks everything | **RESOLVED 2026-08-13 (cycle #4).** | `GET /v2/profiles` → 200 (4 profiles, NG AMS live). 4/4 report POSTs → 200. All 4 completed and downloaded. No further action — close AZ-005/009/013. |
| P0-1 | Full Amazon Ads audit on the restored connection: per-campaign spend/sales/ACOS across SP/SB/SD, NG AMS only, 30-day window, matured cutoff | Fresh baseline — the 2026-07-08 baseline is void, the account was fully restructured | The map everything else depends on | **DONE 2026-08-13 (cycle #4).** | 21 SP + 6 SB + 7 SD campaigns live (was 1 working SP campaign + all-dark SB/NG-AMS on 2026-07-08 — that picture is gone). Matured (07-14→07-29) account ROAS **8.57** (SP 8.99, SD 4.67, SB untestable — real spend all immature). Full detail in `Company_OS/amazon-ads/2026-08-13.md`. |
| P0-2 | Re-establish the true blended ROAS baseline (SC+VC revenue ÷ ad spend) | Know where we stand vs the 15 bar | Sets scale-vs-fix posture | **NOT done this cycle — out of this agent's scope** (owned by `Company_OS/departments/amazon/constitution.md` / the blended-ROAS agent, not this ad-attributed-ROAS agent). Do not conflate: this agent's floor is 6.0 ad-attributed, matured, per-campaign. | Last known blended figure (≈21, 2026-07-08) is 36+ days stale and not this agent's to refresh. |
| P0-3 | Campaign scale-test classification (SCALE/HOLD/FIX-KILL) on the fresh data | Every live campaign classified with evidence | First disciplined ₹ of scale on real data | **DONE 2026-08-13 (cycle #4) for campaigns with ≥2 matured weeks of history.** | SCALE (AZ-018/019/020): SafeBuds Competitor PT (12.02×→9.32×, +31% spend), Open Ear BKW Phrase (27.43×→32.65×, +25%), Comm Generic 16th July (14.71×→31.88×, +108%, small base). CUT (AZ-021/022): SD Purchase Remarketing AI (0.25×, self-stopped), OpenWire Competition + Auto (2.22× blended, degrading). FIX (AZ-017): SD Views Remarketing_VCPM — 44.1× matured winner gone 100% dark 20 days, investigate. HOLD (watch, not yet 2-week-clean): Bone Conduction GKW Phrase, ALL ASIN Self PT. 11 campaigns too new for any matured read yet. |
| P0-4 | Close out AZ-001..016 against the restructured account | Stop the approvals queue from carrying dead campaign references | Clean queue for the human `/approvals` step | **DONE 2026-08-13 (cycle #4).** | AZ-001/002/003 OBSOLETE (campaigns no longer exist), AZ-004 ANSWERED (NG AMS not dark), AZ-005/009/013 RESOLVED (auth fixed), AZ-008 DONE (search-term pull finally landed), AZ-006/007/010/011/014/015 OBSOLETE (re-flags of now-dead campaigns), AZ-012 CONFIRMED (canary rule proven on both branches), AZ-016 IN PROGRESS (partially confirmed, partially carried forward as AZ-025). Logged as AZ-026/027 in `queue-inbox.md`. |
| P1-1 | Search-term harvest + negative prune across SP campaigns | Kill non-converting spend; promote winners to exact | ROAS defense while scaling | **First real run DONE 2026-08-13 (cycle #4), after 4 missed attempts.** Re-pull every cycle — the report has no per-term date breakdown, so freshness matters more than usual. | 1,928 zero-sales search terms/targets, ₹43,011 combined spend (30d window, matured+immature mixed — caveat noted), 5,682 clicks, 0 purchases. Worst single: "headphones" broad auto-target, ₹2,556/95 clicks/0 sales. Harvest candidates: "bone conduction earphones" (₹4,647→₹43,721 sales, 21 purch), "ng earsafe" family of branded phrase terms. Drafted as AZ-023 (negatives) / AZ-024 (harvest). |
| P1-2 | SKU × campaign coverage map: which SKUs have no/thin ad coverage vs their sales velocity | Find unbought demand | Growth headroom | TODO — needs SC/VC sales-velocity data this agent doesn't pull; hand to the amazon department for the SKU side, this agent supplies the ad-coverage side once asked. | |
| P1-3 | Organic rank baseline on money keywords (Porter amazon_ranked_keywords) | Rank tracking from day 1 | Measures the ads→rank flywheel | TODO | |
| P1-4 | SC vs VC strategy read: margin per basis, which SKUs belong where, VC PO cadence | Channel-within-channel clarity | Protects margin at scale | TODO | |
| P2-1 | Listing/A+ audit for top SKUs (title keywords, images, reviews velocity) | CVR lift compounding every ad rupee | CVR is the cheapest ROAS lever | TODO | |
| P2-2 | Deal/coupon calendar proposal (Lightning Deals, coupons) timed to rank pushes | Velocity spikes for rank | Flywheel acceleration | TODO | |

## PERFORMANCE TARGETS
| Metric | Baseline (2026-08-13, cycle #4 — supersedes the 2026-07-08 baseline, which referenced campaigns that no longer exist) | 30-day | 60-day | 90-day |
|---|---|---|---|---|
| **Ad-attributed ROAS (matured windows) — this agent's own 6.0 floor** | **8.57 account-level** (SP 8.99 ✅, SD 4.67 ❌, SB untestable — spend all immature). Matured window 2026-07-14→07-29. | ≥6.0 held at higher volume (3 SCALE drafts pending: AZ-018/019/020) | ≥6.0 | ≥6.0 |
| Blended Amazon Ads ROAS (SC+VC rev ÷ spend) — **department's ≥15 bar, owned elsewhere, not refreshed this cycle** | Last known ≈21 (2026-07-08, now 36+ days stale) | — | — | — |
| Ad spend (30-day, this pull) | ₹1,36,843 total (₹44,401 matured + ₹92,442 immature) across SP+SB+SD, NG AMS only | scale within the 6.0 floor, ≤20% steps | — | — |
| Organic rank, top-5 money keywords | TBD (P1-3) | top 10 | top 5 | top 3 |

> Note: the previous table's "4.3–4.5" and "36-day-stale" figures are retired — they described campaigns that no longer exist. This is a clean restart of the performance-tracking table, not a continuation.

## DATA PULL SCHEDULE
- **Weekly (direct Amazon Ads API, no Windsor):** exchange refresh token → `GET /v2/profiles` canary → pull SP/SB/SD campaign reports + SP search-term report (async `/reporting/reports`), NG AMS only, mind 14-day attribution — matured-window reads for kill/scale only. **After any outage/blocked-cycle stretch: diff the full live campaign list against the last-known list before trusting any campaign-specific carry-forward draft** (added 2026-08-13 cycle #4, after discovering AZ-001/002/003's campaigns no longer existed).
- **Daily (via /cos-daily-brief):** SC+VC revenue + ads spend fold into the commercial brief once connector is stable.
- **Every 14 days:** Porter organic rank pull on money keywords.

## DEPENDENCIES / BLOCKERS
- **None live as of 2026-08-13 (cycle #4).** The Amazon Ads API authentication blocker (AZ-005/009/013) that stalled 3 consecutive cycles is resolved — confirmed via a clean `GET /v2/profiles` 200 and 4/4 successful report pulls this cycle.
- Inventory cover per SKU (supply state in `COMPANY_STATE.md` §3) gates every scale draft (AZ-018/019/020) — **not checked this cycle** (out of this department's read scope by design); flagged explicitly in each SCALE draft for the amazon department / Meet to confirm ≥3 weeks cover before executing.
- Windsor `amazon_ads` remains superseded by direct API access (2026-08-10 mandate) — no longer a dependency, just a historical note.

<!-- The deep-loop updates this file weekly; the standup reads it daily. -->
