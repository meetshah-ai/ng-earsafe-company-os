# SEO & AEO — Live Task Tracker

> Read at the start of every SEO session to resume instantly. After a task: update status + result. Each 30-day cycle: archive completed into `learning-log.md` and reset.
> Last updated: 2026-09-14 (weekly managed-agent cycle — SEO-020..035 synced to Resolved per this file's own 09-09/09-11 notes; 4 new drafts SEO-036..039; both headline metrics beat target)
>
> **2026-08-24 (queue-inbox.md cycle — not previously reflected here):** SEO-013 (Pro Swimming CTR-FIX) D+30 MISS (CTR 0.838% vs 3% target) — closed. SEO-015 (Shokz Alternatives) D+30 MISS on clicks (0 clicks across 5 weeks) — closed. SEO-034 (CTR-FIX, are-noise-cancelling-headphones-safe) and SEO-035 (WRITE, OpenWire wired-mic-type-c cluster) drafted new. This cycle's report/queue-inbox never made it into this file's CURRENT SPRINT table or learning-log.md's CYCLE LOG until today (2026-09-14) — a cross-file sync gap, same root cause as the 07-27 postmortem, in a milder shape.
>
> **2026-09-09 (/approvals decisions):** SEO-028/029/032/034 (retitles), SEO-030/033/035 (new articles), SEO-031 (FAQ expansion), SEO-009 (UTM investigation), SEO-010 (writer reassignment) all APPROVED — awaiting `/execute-approved`. Note: SEO-020..027 remain approved-but-unexecuted from prior cycles (20+ days) — that's an `/execute-approved` gap, not a new decision.
>
> **2026-09-11 (/execute-approved — LIVE writes to Shopify):** SEO-020, SEO-027, SEO-028, SEO-029, SEO-030 (scope changed — updated existing video-conferencing article instead of publishing a near-duplicate), SEO-031, SEO-032, SEO-033, SEO-034, SEO-035 all EXECUTED — see `DECISION_LOG.md` for exact article/collection IDs and what changed on each. SEO-010 turned out to be a stale finding (the pillar article had already published 2026-07-31) — no action taken, closed. SEO-009 (UTM investigation) and SEO-011 (halted, premise disproven) remain unexecuted — not agent-executable / not safely re-executable respectively. SEO-020..035 are now all resolved one way or another; only SEO-005 (earplug redirect, its own execution-spec gate) and SEO-009 remain genuinely open from this backlog.
>
> **⚙️ Managed-agent cadence (since 2026-07-17):** the `seo-aeo` managed agent runs every **Monday
> 08:00 IST**, reads this file + `learning-log.md`, and drafts `SEO-###` rows to `queue-inbox.md`
> (this department's private inbox — the agent never touches `APPROVALS_QUEUE.md`). **New IDs
> continue from SEO-040** (SEO-001…039 + OW-001 are taken as of this cycle — verified against
> `queue-inbox.md`'s own header note, not assumed from a stale number here).

## LIVE STATUS SNAPSHOT (2026-09-14)
- **Real cross-file sync gap found and reconciled this cycle (not a repeat of the 07-27 incident,
  but the same root cause):** `queue-inbox.md` had run an 2026-08-24 cycle (SEO-034/035 drafted,
  SEO-013/015 D+30 verdicts closed) that never reached this file's CURRENT SPRINT table or
  `learning-log.md`'s CYCLE LOG — both had stalled at 2026-08-17. Separately, this file's own
  2026-09-09/09-11 blockquotes recorded real approvals+executions that `queue-inbox.md`'s row
  bodies hadn't caught up to. Reconciled this session: `queue-inbox.md` now shows SEO-020..035 in
  Resolved (compact); this file's CURRENT SPRINT table below is rebuilt to match. Flagged as the
  top "do this first" item in this cycle's report — a session that runs `/execute-approved` must
  push all three files (tracker/queue-inbox/learning-log) together, every time, or this recurs.
- **SEO-020 through SEO-035 (16 rows) are now all resolved** per this file's own 09-09/09-11
  blockquotes — 10 explicitly EXECUTED 2026-09-11, the rest covered by the same blanket statement
  (SEO-023 independently EXECUTED 2026-08-04). Not re-derived individually this cycle; trusted per
  standing instruction.
- **Both headline targets cleared for the first time this cycle:** overall CTR 1.70% (30d target
  1.6%); "open ear headphones" position 4.73, beating its **90-day** target (5.0) six weeks early,
  with CTR improving alongside it (1.1990%→1.5241%, non-contiguous vs the 08-17 read). Continues
  to support a reversal of the old "rank gains don't convert" pattern — not yet formally credited
  as a clean multi-cycle confirmation given the gap.
- **SEO-023 (SafeBuds CTR-FIX) — D+30+ verdict: PLATEAUED, not improved.** CTR sits at exactly
  1.24%, identical to its pre-fix baseline, after a full D+30+ window. The generic title/meta swap
  never targeted the page's single worst-converting query ("wehear," 43% of the PDP's impressions,
  0.17% CTR) — escalated with a query-specific fix as **SEO-036**.
- **NEW — ES Lite PDP position fell hard, first time in the disease band:** 3.36 (last logged
  cycle) → 6.12 this cycle, the sharpest move of any tracked PDP. Not a named target of the 09-11
  execute-approved batch — a template-regression check is the first lever. Drafted as **SEO-037**.
- **NEW — WRITE gap: "best headphones for teaching online"** — an existing, near-invisible page
  (1,898 impr/30d, 0.11% CTR, pos 10.25) distinct from the WFH/office-worker cluster, targeting the
  teacher persona. Drafted as **SEO-038**.
- **NEW — AEO escalation: "bone conduction headphones side effects"** continues its multi-cycle
  climb in the web_search sweep (~8th → ~5th → **~4th of 10** this cycle) — the best reading of any
  monitored query, and ahead of SEO-031 (executed 09-11) having had time to show an effect.
  Escalated past it with a Shokz-UK-style "Myths vs Facts" structure as **SEO-039**.
- SEO-005 (earplug consolidation) — still PENDING founder decision. This cycle: 15,108 impr, 52
  clicks, 0.3442% CTR, pos 10.69 (17 pages) — roughly unchanged.
- SEO-009 (GA4 revenue vs GSC clicks mismatch) — this cycle both moved up together (GA4 organic
  revenue ₹3,69,508.15, +1.3%; GSC clicks 2,726, +0.6%) — a good sign, not resolving, still not
  this agent's call.
- Non-branded CTR this cycle: 0.7412% (30d, 2026-08-15→09-13) — up from 0.6178% last logged cycle
  (08-17, non-contiguous window). Organic clicks 2,726/30d, essentially flat vs 2,710 last logged.

## PRIORITY SYSTEM
- **P0** — this week (no new content until P0s clear). **P1** — this month. **P2** — 30–60 days. **P3** — 60–90 days / new clusters.

## STANDING TASKS
| Task | Cadence | Output |
|---|---|---|
| Rank & gap audit (NG positions + CTR vs competitor SERP) | 30 days | rewrite + gap-content drafts |
| AEO citation check (5 queries across ChatGPT/Perplexity/Google AIO) | 14 days | citation log + AEO fix drafts |
| Q3 content calendar status progression | weekly | next article through its pipeline |
| **PDP cluster pull** (added 2026-07-22, SEO-019) — OpenWire, Comm 2.0, SafeBuds, ES Lite PDPs against their own keyword sets (constitution.md §3a) | weekly (same GSC pull, extra aggregation pass) | PDP CLUSTER TRACKER section in the weekly report |

## PDP CLUSTER BASELINES (2026-09-14 pull — window 2026-08-15→09-13, vs last logged cycle 08-17, non-contiguous ~4-week gap)
| Product | PDP | Impr | Clicks | CTR | Pos | vs last logged cycle |
|---|---|---|---|---|---|---|
| OpenWire (₹799) | `/products/open-ear-headphones-wired-ng-earsafe` (incl. variant rows) | 1,612 | 47 | 2.92% | 5.50 | Impr −41% (2,747→1,612); **CTR up hard** (2.15%→2.92%, now clear of the disease band); pos worse (4.19→5.50). Named query "open ear wired earphones" improved sharply (pos 7.86→5.13, clicks 3→28) — page average dragged down by weaker adjacent queries. |
| Comm 2.0 (₹3,499) | `/products/noise-cancelling-open-ear-headphones-with-mic-ng-ear-safe-comm-2-0` (incl. variant rows) | 1,383 | 45 | 3.25% | 3.19 | Impr +11%; clicks +73% (26→45); CTR up (2.09%→3.25%); pos improved (3.49→3.19). Strongest PDP this cycle. |
| SafeBuds (₹2,999) | `/products/ngwehear` (incl. variant rows) | 4,123 | 51 | 1.24% | 5.95 | Impr −12%; CTR **flat** (1.24%→1.24%) despite SEO-023's D+30+ window closing — the generic fix plateaued (grounds SEO-036); pos improved (6.40→5.95). Still in the disease band. |
| ES Lite (₹1,799) | `/products/open-ear-wireless-headphones-ng-ear-safe-lite` (incl. variant rows) | 1,399 | 28 | 2.00% | 6.12 | Impr −38%; CTR up (0.98%→2.00%) but **pos fell hard** (3.36→6.12), moving it into the disease band for the first time — grounds SEO-037. |

> All 4 PDP totals combine each product's base GSC URL with its `?variant=...` UTM-parameterized
> rows (same canonical page). Window is non-contiguous vs the last logged cycle (~4-week gap) —
> flagged, not treated as a clean week-on-week signal.

## CURRENT SPRINT — SEPTEMBER 2026
| # | Task | Target | Expected impact | Status | Result |
|---|---|---|---|---|---|
| P0-36 | CTR-FIX: SafeBuds PDP — lead title/meta with "WeHear" brand + FAQ on official-product confirmation | "wehear" query: 1,768 impr/30d, 0.17% CTR, pos 7.98 — 43% of PDP impressions | ~+32 clicks/mo on this query alone | QUEUED (SEO-036) | 2026-09-14: drafted this cycle — SEO-023's generic fix plateaued at D+30+, this targets the specific mismatch. |
| P0-37 | RANK/GAP: verify no template regression on ES Lite PDP; reinforce title/meta/schema | pos fell 3.36→6.12, impr −38%, first time in the disease band | recover to pos ≤4.0 within 30 days | QUEUED (SEO-037) | 2026-09-14: drafted this cycle — sharpest PDP move this cycle, not a named 09-11 execution target. |
| P1-38 | WRITE: rewrite/expand "best headphones for teaching online" for the teacher persona | 1,898 impr/30d, 0.11% CTR, pos 10.25 | ₹3,000–9,000/mo at ramp (Comm 2.0 CTA) | QUEUED (SEO-038) | 2026-09-14: drafted this cycle — distinct persona from the already-fixed WFH page. |
| P0-39 | AEO: escalate bone-conduction-headphones-side-effects past SEO-031 with a Myths-vs-Facts table + Speakable schema | web_search sweep now ~4th of 10, best reading of any monitored query | AI-answer consideration within 14 days (2026-09-28) | QUEUED (SEO-039) | 2026-09-14: drafted this cycle — ahead of SEO-031 (executed 09-11) having time to show effect. |
| — | CTR-FIX/RANK/WRITE/AEO: SEO-020 through SEO-035 (16 rows) | various | various | **RESOLVED** (10 explicitly EXECUTED 2026-09-11; rest covered by the same blanket statement per this file's 09-09/09-11 notes) | 2026-09-14: moved to Resolved (compact) in queue-inbox.md this cycle. Not individually re-verified against DECISION_LOG.md. |
| P0-8 | Earplug content decision: noindex vs one comparison page | 17 pages, 15,108 impr, 0.3442% CTR (this cycle) | authority cleanup | PENDING USER | 2026-09-14: cluster roughly unchanged, still pending founder decision. |
| P1-11 | SafeBuds-only Product JSON-LD (re-queue of SEO-011, narrowed) | `/products/ngwehear` lacks Product schema; review-rating source unresolved | rich snippets → CTR, once rating source is decided | BLOCKED — founder call on rating source | Unchanged this cycle; per this file's 09-11 note, SEO-011 is "halted, premise disproven" — not re-opened. |
| Q3 | Progress locked 13-article + 6-upgrade calendar (Jul 1–Sep 30) | +₹1.88L/mo organic by Sep 30 | revenue | IN PROGRESS (status not re-verified this cycle — out of budget) | 2026-07-03: Article 1 deadline risk flagged; still not re-verified across several cycles. |

## UPCOMING (next 7 days — pending approval/execution of queue items)
| Action | Queue ID | Depends on |
|---|---|---|
| CTR-FIX: SafeBuds PDP "wehear" query-specific rewrite | SEO-036 | approval |
| RANK/GAP: ES Lite PDP template check + reinforcement rewrite | SEO-037 | approval |
| WRITE: "best headphones for teaching online" rewrite/expand | SEO-038 | approval |
| AEO: bone-conduction-headphones-side-effects Myths-vs-Facts escalation | SEO-039 | approval |
| Earplug consolidation decision | SEO-005 | founder decision |
| GA4 organic revenue vs GSC click-volume mismatch — data-integrity cross-check | SEO-009 | CFO/CRO review |
| SafeBuds-only Product JSON-LD — blocked on review-rating source decision | (re-queue of SEO-011) | founder decision |

## PERFORMANCE TARGETS (baseline Jun 1 2026)
| Metric | Baseline | 30-day | 60-day | 90-day | This cycle (30d, 08-15→09-13) |
|---|---|---|---|---|---|
| Overall CTR | 1.19% | 1.6% | 2.0% | 2.5% | **1.70% — first cycle to clear the 30-day target** |
| Non-branded CTR | 0.48% | 0.8% | 1.2% | 1.5% | 0.7412% — up from 0.6178% last logged cycle |
| Organic clicks/month | ~1,963 | 2,600 | 3,500 | 5,000 | 2,726 — flat vs 2,710 last logged, still above the 30-day target |
| Blog page CVR | ~0% | 0.5% | 1.0% | 1.5% | **0.12%** (2 txn/1,708 sessions) — first non-zero reading ever logged |
| "open ear headphones" position | 12.0 | 9.0 | 7.0 | 5.0 | **4.73 — beats the 90-day target (5.0) six weeks early**, CTR also up (1.1990%→1.5241%) |
| Monthly organic revenue (GA4) | ~₹7.5L | ₹9.5L | ₹12L | ₹15L | ₹3,69,508.15 (+1.3% vs last logged cycle) |

*Non-branded CTR uses the same broader branded-classification method as prior cycles (query
contains "earsafe"/"ear safe" or starts with "ng ") — directly comparable across cycles. "wehear"
queries are kept in the non-branded/PDP-cluster bucket, not filtered as branded, per the
constitution's correction (WeHear is an owned co-brand partner).

## DATA PULL SCHEDULE
- Every 30 days: Search Console keywords + pages (direct Google API, inside the Phase 3 script), GA4 organic landing data (direct Google Analytics Data API, inside the Phase 3 script — no Windsor dependency).
- Every 14 days: AEO check on the 5 monitoring queries. Next due: ~2026-09-25 (SEO-020/026's D+14 reads) and 2026-09-28 (SEO-039's D+14 read).
- Every 7 days: Rich Results Test on last-modified pages (carried forward again — not run this cycle, out of budget).

## DEPENDENCIES / BLOCKERS
- **Earplug decision** blocks topical-authority cleanup (awaiting founder).
- **Stock-before-demand:** buyer-intent pages for out-of-stock SKUs held; informational/category content continues.
- Shares converting-query themes with **instagram-content** (content gaps) and **cro** (landing-page intent).
- **No keyword-volume connector** available this cycle — WRITE brief search-volume figures must be flagged as unmeasured, not estimated, until one is connected.
- **Process fix (2026-07-27, holding):** any `/execute-approved` run touching seo-aeo must commit+push tracker.md/queue-inbox.md/learning-log.md in the same session. **Violation detected this cycle (2026-09-14):** an 2026-08-24 queue-inbox.md cycle never reached this file or learning-log.md until reconciled today — see LIVE STATUS SNAPSHOT above. Flag "did I push all three files?" explicitly on every future `/execute-approved` and every managed-agent run.
- **Process gap #2 (fixed 2026-07-27, reconfirmed clean 08-03/08-10/08-17, gap recurred in a milder shape 09-14):** the managed agent itself must read the ⚠️ SYNC CORRECTION / LIVE STATUS SNAPSHOT sections in full, every run, before drafting anything. This cycle's version of the correction was two dated blockquotes rather than a labeled section — read and trusted in full regardless.
