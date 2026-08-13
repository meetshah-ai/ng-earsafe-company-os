# AMAZON — Live Task Tracker

> Read at the start of every session in this lane to resume context instantly. After a task: update status + add the result observed. Each 30-day cycle: archive completed tasks into `learning-log.md` and reset.
>
> Last updated: 2026-08-13 (cycle #5, 2nd same-day pull — WoW keyword/search-term layer added, one SCALE call rescinded on fresh matured data)
> **Queue-inbox note:** `queue-inbox.md` holds rows AZ-001..AZ-042 — **next free ID is AZ-043.**

## PRIORITY SYSTEM
- **P0** — this week. No new work starts until P0s clear.
- **P1** — this month. High-impact, quick.
- **P2** — 30–60 days.
- **P3** — 60–90 days / new bets.

## CURRENT SPRINT — 2026-08-13 → 2026-09-12 (reset: auth restored, account fully re-baselined; this cycle adds the mandatory WoW + keyword/search-term layer)
| # | Task | Target | Expected impact | Status | Result |
|---|---|---|---|---|---|
| P0-0 | Fix Amazon Ads API authentication | Restore read access | Unblocks everything | **RESOLVED (cycle #4), confirmed stable again (cycle #5).** | 2nd same-day pull: LWA mint → 200, canary → 200, 5/5 report requests → 200 across a fresh batch (SP/SB/SD/spSearchTerm/spTargeting). Auth is no longer in question — close AZ-005/009/013 for good. |
| P0-1 | Full Amazon Ads audit on the restored connection, WITH a keyword/search-term layer under every campaign | Fresh baseline + one layer below every campaign total | The map everything else depends on | **DONE 2026-08-13 (cycle #5), supersedes cycle #4's version.** | 21 SP + 6 SB + 7 SD campaigns (unchanged count from cycle #4 — no restructuring same-day). Matured (Wk2 07-23→29 → Wk1 07-30→08-05) account ROAS **10.68× → 8.54× (−20% WoW)**, but **marginal ROAS on the WoW spend increment is only 2.46×** — well under the 6.0 floor, hidden by the still-healthy blended number. Full detail in `Company_OS/amazon-ads/2026-08-13.md`. |
| P0-2 | Re-establish the true blended ROAS baseline (SC+VC revenue ÷ ad spend) | Know where we stand vs the 15 bar | Sets scale-vs-fix posture | **NOT done this cycle — out of this agent's scope** (owned by `Company_OS/departments/amazon/constitution.md` / the blended-ROAS agent). Do not conflate: this agent's floor is 6.0 ad-attributed, matured, per-campaign. | Last known blended figure (≈21, 2026-07-08) is 36+ days stale and not this agent's to refresh. |
| P0-3 | Campaign scale-test classification, one layer below campaign totals every time | Every live campaign classified with evidence, keyword/search-term drivers identified for every SCALE/CUT/FIX call | Disciplined ₹ of scale, caught a bad one before it executed | **DONE 2026-08-13 (cycle #5).** | **SCALE graduated fresh:** `ALL ASIN \| SP \| Self \| PT` (7.00×→9.99×, AZ-031), `Bone Conduction Headphone \| SP \| GKW \| Phrase` (8.34×→8.05×, AZ-032). **SCALE reaffirmed:** SafeBuds Competitor PT (AZ-033), Open Ear BKW Phrase (AZ-034). **SCALE RESCINDED:** `Comm \| Generic \| 16th July'26 \| SP` (AZ-020) — collapsed 31.88×→2.48× on +226% spend the very next matured week; root-caused to 2 keyword-level dead additions + 2 winners inverting/vanishing (AZ-036). **CUT:** `SD \| Remarketing \| Freedom Sale` (AZ-030, campaign), `keyword-group="category"` auto-target (AZ-028, keyword-level), `headphones` broad search term (AZ-029, search-term-level, 3rd-cycle repeat). **FIX:** bid-rebalance inside ALL ASIN Self PT (AZ-037), bid/placement mismatch on a SafeBuds target (AZ-038), harvest-to-exact on 2 terms (AZ-039), AZ-017 still dark 21 days (AZ-040 escalation). **SCALE keyword bid-up (never gated):** 5 under-bid winners, ROAS 37×–95×, <0.3% CTR (AZ-035). |
| P0-4 | Close out AZ-001..027 against fresh data | Keep the approvals queue current | Clean queue for the human `/approvals` step | **DONE 2026-08-13 (cycle #5).** | Statuses updated in `queue-inbox.md` on AZ-017 (still dark, unresolved 2nd cycle), AZ-018/019 (reaffirmed), AZ-020 (RESCINDED — see above), AZ-021 (unchanged), AZ-022 (updated, worse), AZ-023/024 (still unresolved 2nd cycle, updated figures), AZ-025 (CONFIRMED on first matured week), AZ-026/027 (unchanged). AZ-028..042 added new. |
| P1-1 | Search-term harvest + negative prune across SP campaigns | Kill non-converting spend; promote winners to exact | ROAS defense while scaling | **Re-run 2026-08-13 (cycle #5), now WITH a per-day date field** (cycle #4 believed this report had no date breakdown — it does, when requested with `timeUnit: DAILY`). | Negative candidates at the stricter matured (Wk1+Wk2, ≥₹150) bar: 7 terms, ₹1,891 combined. Full zero-purchase pool (30d, matured+immature): 1,681 rows, ₹39,026 — same order of magnitude as cycle #4's ₹43,011, meaning the prune still hasn't been executed. Harvest: `ng ear safe headphones` is now the biggest miss measured to date (₹1,756→₹72,906 sales, 30 purchases, still PHRASE-only) — bigger than the previously-flagged `bone conduction earphones`. |
| P1-2 | SKU × campaign coverage map: which SKUs have no/thin ad coverage vs their sales velocity | Find unbought demand | Growth headroom | TODO — needs SC/VC sales-velocity data this agent doesn't pull; hand to the amazon department for the SKU side, this agent supplies the ad-coverage side once asked. | |
| P1-3 | Organic rank baseline on money keywords (Porter amazon_ranked_keywords) | Rank tracking from day 1 | Measures the ads→rank flywheel | TODO | |
| P1-4 | SC vs VC strategy read: margin per basis, which SKUs belong where, VC PO cadence | Channel-within-channel clarity | Protects margin at scale | TODO | |
| P2-1 | Listing/A+ audit for top SKUs (title keywords, images, reviews velocity) | CVR lift compounding every ad rupee | CVR is the cheapest ROAS lever | TODO — **new lead this cycle:** `Comm \| Generic \| 16th July'26 \| SP`'s `open ear earbuds` EXACT keyword inverted from 16.6× to 0.00× at similar spend with no bid change — smells like a listing/price/stock issue on the served ASIN, worth checking first. | |
| P2-2 | Deal/coupon calendar proposal (Lightning Deals, coupons) timed to rank pushes | Velocity spikes for rank | Flywheel acceleration | TODO | |

## PERFORMANCE TARGETS
| Metric | Baseline (2026-08-13, cycle #5 — supersedes cycle #4's same-day figures) | 30-day | 60-day | 90-day |
|---|---|---|---|---|
| **Ad-attributed ROAS (matured, Wk1 vs Wk2) — this agent's own 6.0 floor** | **Account blended: 10.68× (Wk2) → 8.54× (Wk1), −20% WoW. Marginal ROAS on the WoW spend increment: 2.46× — below floor.** SP 10.81×→9.23×; SD/SB negligible matured spend. | Hold marginal ROAS ≥6.0 on every incremental rupee, not just the blended level — this is the new bar this cycle's AZ-020 finding sets | ≥6.0 | ≥6.0 |
| Blended Amazon Ads ROAS (SC+VC rev ÷ spend) — **department's ≥15 bar, owned elsewhere, not refreshed this cycle** | Last known ≈21 (2026-07-08, now 36+ days stale) | — | — | — |
| Ad spend (30-day, this pull) | Matured Wk1+Wk2 combined: ₹44,636 → ₹4,22,026 sales. Full 30d incl. immature: ₹1,60,469 SP+SB+SD. | Scale within the 6.0 floor AND the marginal-ROAS test, ≤20% steps, re-read the very next matured window before calling any SCALE durable | — | — |
| Organic rank, top-5 money keywords | TBD (P1-3) | top 10 | top 5 | top 3 |

> Note: cycle #4's same-day figures (8.57 account ROAS on a single 16-day matured window) are superseded by this cycle's WoW pair (10.68×→8.54×) — not a contradiction, a finer-grained read of the same underlying account using two consecutive 7-day matured windows instead of one 16-day window, per this agent's standing WoW mandate.

## DATA PULL SCHEDULE
- **Weekly (direct Amazon Ads API, no Windsor):** exchange refresh token → `GET /v2/profiles` canary → pull SP/SB/SD campaign reports + SP search-term + SP targeting reports (async `/reporting/reports`), **all `timeUnit: DAILY`**, NG AMS only. Bucket into 7-day weeks; Wk1 vs Wk2 is the primary matured WoW comparison, Wk0 is immature/directional only. Go one layer below every campaign total — keyword/target and search-term — every cycle, not just when something looks off.
- **NEW (2026-08-13, cycle #5): re-read every SCALE draft on its very next matured window before treating it as durable.** A single 2-week matured comparison is not sufficient evidence on its own — AZ-020 cleared the gate cleanly one cycle and collapsed the next. Standing addition to this schedule: any campaign carried into a SCALE draft gets an automatic re-check next cycle, not just a "reaffirm if convenient."
- **After any outage/blocked-cycle stretch:** diff the full live campaign list against the last-known list before trusting any campaign-specific carry-forward draft (added 2026-08-13 cycle #4, after discovering AZ-001/002/003's campaigns no longer existed).
- **Daily (via /cos-daily-brief):** SC+VC revenue + ads spend fold into the commercial brief once connector is stable.
- **Every 14 days:** Porter organic rank pull on money keywords.

## DEPENDENCIES / BLOCKERS
- **None live as of 2026-08-13 (cycle #5).** Auth confirmed stable across two independent same-day pulls (4 report requests earlier, 5 more this cycle, all 200).
- Inventory cover per SKU (supply state in `COMPANY_STATE.md` §3) gates every scale draft (AZ-031/032/033/034) — **not checked this cycle** (out of this department's read scope by design); flagged explicitly in each SCALE draft for the amazon department / Meet to confirm ≥3 weeks cover before executing.
- Windsor `amazon_ads` remains superseded by direct API access (2026-08-10 mandate) — no longer a dependency, just a historical note.

<!-- The deep-loop updates this file weekly; the standup reads it daily. -->
