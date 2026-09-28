# SEO & AEO — Live Task Tracker

> Read at the start of every SEO session to resume instantly. After a task: update status + result. Each 30-day cycle: archive completed into `learning-log.md` and reset.
> Last updated: 2026-09-28 (weekly managed-agent cycle — SEO-036..039 still pending approval, unchanged since 09-14; 4 new drafts SEO-040..043; two prior "resolved" fixes (SEO-021, SEO-028) found to have regressed further post-execution)
>
> **2026-09-28 (this cycle) — ⚠️ two "resolved" fixes got measurably worse, not better, after their
> reported 2026-09-11 execution:** `best-noise-canceling-headset-for-working-from-home` (SEO-021's
> target) fell from pos 11.28 to **21.91** (its named query now pos 47.53, effectively off the
> SERP), and `can-bluetooth-earphones-cause-a-blast` (SEO-028's target) had its CTR fall from ~0.15%
> to **0.018%** even as impressions nearly tripled (its top query, 13,018 impr, still gets 0
> clicks). Neither is being read as proof the content strategy failed — both are escalated
> (SEO-041, SEO-040) with an explicit "verify the live title/meta/canonical actually match the
> spec" step first, since a page getting *worse* right after a fix is more consistent with a
> technical delivery problem than a content one. Also corrected a standing data error carried since
> at least 2026-07-27: the WFH page's real GSC/live slug is `-for-working-from-home`, not `-for-wfh`
> (which was never a real URL) — used going forward.
>
> **2026-09-14 (prior cycle — unchanged, reproduced for continuity):** SEO-020..035 synced to
> Resolved per this file's own 09-09/09-11 notes; SEO-036..039 drafted new. Both headline metrics
> beat target that cycle (overall CTR 1.70% vs 1.6% target; "open ear headphones" pos 4.73 vs 5.0
> 90-day target).
>
> **2026-08-24 (queue-inbox.md cycle — historical, unchanged):** SEO-013 (Pro Swimming CTR-FIX)
> D+30 MISS. SEO-015 (Shokz Alternatives) D+30 MISS on clicks — both since showing positive
> secondary signals in later cycles, not re-opened.
>
> **⚙️ Managed-agent cadence (since 2026-07-17):** the `seo-aeo` managed agent runs every **Monday
> 08:00 IST**, reads this file + `learning-log.md`, and drafts `SEO-###` rows to `queue-inbox.md`
> (this department's private inbox — the agent never touches `APPROVALS_QUEUE.md`). **New IDs
> continue from SEO-044** (SEO-001…043 + OW-001 are taken as of this cycle — verified against
> `queue-inbox.md`'s own header note, not assumed from a stale number here).

## LIVE STATUS SNAPSHOT (2026-09-28)
- **Two fixes reportedly executed 2026-09-11 regressed further, not improved, this cycle — the
  single most important finding this run.** `best-noise-canceling-headset-for-working-from-home`
  (SEO-021 target): position 11.28→**21.91**, its named query "best noise cancelling headset with
  mic for working from home" now pos 47.53. `can-bluetooth-earphones-cause-a-blast` (SEO-028
  target): CTR ~0.15%→**0.018%**, its top query (13,018 impr, 80% of the page) still 0 clicks.
  Escalated as SEO-041 and SEO-040 respectively, both leading with a technical-verification step
  (confirm live title/meta/canonical match the spec) before any further content work — a page
  getting *worse* immediately after its own fix is a stronger signal of a delivery/technical
  problem than a content-strategy failure.
- **SEO-036 through SEO-039 (drafted 09-14) remain pending approval, unchanged, a full 2 weekly
  cycles later.** The approval-latency pattern first flagged 2026-08-10 is repeating on this newer
  batch. None were re-drafted (per standing instruction — never re-derive/duplicate what's already
  correctly queued and unchanged).
- **"open ear headphones" position/CTR pattern-break reverted this cycle:** position improved
  further (4.73→4.48, best on record, still beating the 90-day target) but CTR fell (1.5241%→
  1.4500%) — the first divergence since 2026-08-03's pattern break began. Both metrics still
  comfortably beat their targets; read as inconclusive on the reversal question, not a new decline.
- **Overall CTR (1.66%) held just above its 30-day target (1.6%) but essentially plateaued vs last
  cycle (1.70%).** Non-branded CTR continued climbing (0.7412%→0.7668%), now within 0.03pp of its
  own 30-day target (0.8%) — the healthier of the two headline signals this cycle.
- **`open-ear-vs-in-ear-vs-over-ear-headphones` hit new lows on both signals it's tracked on:**
  organic CTR fell to a new low (0.0868%, impr down 43% to 5,761) and its AEO query ("open ear vs
  in ear headphones") logged its 6th+ consecutive cycle of full absence from the web_search sweep,
  with SEO-026's own D+14 checkpoint (~09-25) now clearly passed as a MISS. Two prior drafts
  (SEO-025 CTR-FIX, SEO-026 AEO, both executed 09-11) show no measured improvement on either
  signal — escalated as **SEO-043** with a structural format change (comparison table + FAQ above
  the fold) rather than another incremental edit.
- **`best-out-of-ear-headphones-for-running` remains genuinely near-invisible** (154 impr/30d, 0
  clicks, pos 13.38) and "best running headphones india" still returns 0 GSC rows despite SEO-024
  reportedly executing on this same page 2026-09-11 — escalated as **SEO-042** with a fuller
  rewrite spec.
- SEO-005 (earplug consolidation) — still PENDING founder decision. This cycle: 15,006 impr, 59
  clicks, 0.3932% CTR, pos 9.76 (20 pages) — CTR/position both slightly improved, still unresolved.
- SEO-009 (GA4 revenue vs GSC clicks mismatch) — not independently re-derived this cycle (out of
  Phase-1 scope); GA4 organic revenue this cycle is ₹4,00,161.55 (+8.3% vs last logged cycle),
  organic clicks 2,757 (+1.1%) — both up together again, still not this agent's call.
- Non-branded CTR this cycle: 0.7668% (30d, 2026-08-29→09-27) — up from 0.7412% last logged cycle
  (09-14). Organic clicks 2,757/30d, up from 2,726 last logged.

## PRIORITY SYSTEM
- **P0** — this week (no new content until P0s clear). **P1** — this month. **P2** — 30–60 days. **P3** — 60–90 days / new clusters.

## STANDING TASKS
| Task | Cadence | Output |
|---|---|---|
| Rank & gap audit (NG positions + CTR vs competitor SERP) | 30 days | rewrite + gap-content drafts |
| AEO citation check (5 queries across ChatGPT/Perplexity/Google AIO) | 14 days | citation log + AEO fix drafts |
| Q3 content calendar status progression | weekly | next article through its pipeline |
| **PDP cluster pull** (added 2026-07-22, SEO-019) — OpenWire, Comm 2.0, SafeBuds, ES Lite PDPs against their own keyword sets (constitution.md §3a) | weekly (same GSC pull, extra aggregation pass) | PDP CLUSTER TRACKER section in the weekly report |

## PDP CLUSTER BASELINES (2026-09-28 pull — window 2026-08-29→09-27, vs prior cycle 09-14)
| Product | PDP | Impr | Clicks | CTR | Pos | vs prior cycle |
|---|---|---|---|---|---|---|
| OpenWire (₹799) | `/products/open-ear-headphones-wired-ng-earsafe` (incl. variant rows) | 1,568 | 56 | 3.57% | 5.23 | Impr −3% (1,612→1,568); **CTR up further** (2.92%→3.57%, comfortably clear of the disease band); pos improved (5.50→5.23). |
| Comm 2.0 (₹3,499) | `/products/noise-cancelling-open-ear-headphones-with-mic-ng-ear-safe-comm-2-0` (incl. variant rows) | 1,401 | 53 | 3.78% | 2.44 | Impr flat; clicks +18% (45→53); CTR up (3.25%→3.78%); pos improved (3.19→2.44) — **strongest PDP again**, 2nd straight cycle. |
| SafeBuds (₹2,999) | `/products/ngwehear` (incl. variant rows) | 3,499 | 49 | 1.40% | 6.08 | Impr −15% (4,123→3,499); CTR up slightly (1.24%→1.40%) but still in the disease band; pos worse (5.95→6.08). "wehear" query (39% of impr) still converts at 0.15% CTR — SEO-036's query-specific fix remains pending approval. |
| ES Lite (₹1,799) | `/products/open-ear-wireless-headphones-ng-ear-safe-lite` (incl. variant rows) | 1,496 | 32 | 2.14% | 6.01 | Impr +7% (1,399→1,496); CTR up (2.00%→2.14%); pos stabilized (6.12→6.01) — no further decline while SEO-037's template check sits pending approval. |

> All 4 PDP totals combine each product's base GSC URL with its `?variant=...` UTM-parameterized
> rows (same canonical page). Window vs prior cycle is contiguous this time (08-15→09-13 →
> 08-29→09-27) — a clean two-week-on-week comparison, not a gapped one.

## CURRENT SPRINT — SEPTEMBER 2026
| # | Task | Target | Expected impact | Status | Result |
|---|---|---|---|---|---|
| P0-40 | CTR-FIX: verify + re-fix `can-bluetooth-earphones-cause-a-blast` title/meta around its real top query ("bluetooth headphones overheating fix") | page CTR 0.018%→1.5%+ on 16,312 impr/30d | ~+240 clicks/mo, the single biggest number on the board | QUEUED (SEO-040) | 2026-09-28: drafted this cycle — SEO-028 reportedly executed 09-11 but CTR fell further; verify delivery first. |
| P0-41 | RANK/GAP: technical-regression check on `best-noise-canceling-headset-for-working-from-home` (WFH page) | pos fell 11.28→21.91, named query now pos 47.53, effectively off the SERP | recover toward single digits within 30 days once any technical issue is ruled out/fixed | QUEUED (SEO-041) | 2026-09-28: drafted this cycle — 8th straight cycle of decline, sharpest yet, coincides with SEO-021's reported execution. |
| P1-42 | WRITE: full rewrite/expansion of `best-out-of-ear-headphones-for-running` (Running/Safety cluster) | 154 impr/30d, 0 clicks, pos 13.38; "best running headphones india" still 0 GSC rows | ₹150–750/mo at ramp, primarily closes a zero-presence gap | QUEUED (SEO-042) | 2026-09-28: drafted this cycle — escalates SEO-024, which reportedly executed 09-11 with no measured effect. |
| P0-43 | AEO/CTR-FIX: structural escalation of `open-ear-vs-in-ear-vs-over-ear-headphones` (comparison table + FAQ above the fold) | CTR new low 0.0868%, AEO query 6th+ consecutive cycle fully absent | AI-answer consideration within 14 days (2026-10-12); CTR recovery within 30 days (2026-10-28) | QUEUED (SEO-043) | 2026-09-28: drafted this cycle — 3rd drafted fix on this page/query combo; prior two (SEO-025/026) show no measured effect. |
| — | CTR-FIX/RANK/WRITE/AEO: SEO-036 through SEO-039 (4 rows) | various | various | **PENDING APPROVAL, unchanged 2 full cycles** | 2026-09-28: still awaiting `/execute-approved`; the approval-latency pattern from 08-10 is repeating. Not re-drafted. |
| — | CTR-FIX/RANK/WRITE/AEO: SEO-020 through SEO-035 (16 rows) | various | various | **RESOLVED** (per 09-09/09-11 notes; 2 of these — SEO-021, SEO-028 — found to have regressed further this cycle, escalated as SEO-041/040) | 2026-09-28: re-surfaced 2 rows for escalation; rest not re-derived (per standing instruction). |
| P0-8 | Earplug content decision: noindex vs one comparison page | 20 pages, 15,006 impr, 0.3932% CTR (this cycle) | authority cleanup | PENDING USER | 2026-09-28: CTR/position both slightly improved (0.3442%→0.3932%, pos 10.69→9.76), still pending founder decision. |
| P1-11 | SafeBuds-only Product JSON-LD (re-queue of SEO-011, narrowed) | `/products/ngwehear` lacks Product schema; review-rating source unresolved | rich snippets → CTR, once rating source is decided | BLOCKED — founder call on rating source | Unchanged this cycle; per this file's 09-11 note, SEO-011 is "halted, premise disproven" — not re-opened. |
| Q3 | Progress locked 13-article + 6-upgrade calendar (Jul 1–Sep 30) | +₹1.88L/mo organic by Sep 30 | revenue | IN PROGRESS (status not re-verified this cycle — out of budget) | 2026-07-03: Article 1 deadline risk flagged; still not re-verified across several cycles. |

## UPCOMING (next 7 days — pending approval/execution of queue items)
| Action | Queue ID | Depends on |
|---|---|---|
| CTR-FIX: verify+re-fix `can-bluetooth-earphones-cause-a-blast` | SEO-040 | approval |
| RANK/GAP: WFH page technical-regression check | SEO-041 | approval |
| WRITE: Running/Safety cluster full rewrite | SEO-042 | approval |
| AEO/CTR-FIX: open-ear-vs-in-ear structural escalation | SEO-043 | approval |
| CTR-FIX: SafeBuds PDP "wehear" query-specific rewrite | SEO-036 | approval (pending 2 cycles) |
| RANK/GAP: ES Lite PDP template check + reinforcement rewrite | SEO-037 | approval (pending 2 cycles) |
| WRITE: "best headphones for teaching online" rewrite/expand | SEO-038 | approval (pending 2 cycles) |
| AEO: bone-conduction-headphones-side-effects Myths-vs-Facts escalation | SEO-039 | approval (pending 2 cycles; own D+14 checkpoint is today) |
| Earplug consolidation decision | SEO-005 | founder decision |
| GA4 organic revenue vs GSC click-volume mismatch — data-integrity cross-check | SEO-009 | CFO/CRO review |
| SafeBuds-only Product JSON-LD — blocked on review-rating source decision | (re-queue of SEO-011) | founder decision |

## PERFORMANCE TARGETS (baseline Jun 1 2026)
| Metric | Baseline | 30-day | 60-day | 90-day | This cycle (30d, 08-29→09-27) |
|---|---|---|---|---|---|
| Overall CTR | 1.19% | 1.6% | 2.0% | 2.5% | **1.66% — 2nd straight cycle clearing the 30-day target**, essentially flat vs 1.70% last cycle |
| Non-branded CTR | 0.48% | 0.8% | 1.2% | 1.5% | 0.7668% — up from 0.7412% last logged cycle, within 0.03pp of the 30-day target |
| Organic clicks/month | ~1,963 | 2,600 | 3,500 | 5,000 | 2,757 — up from 2,710 last logged, still above the 30-day target |
| Blog page CVR | ~0% | 0.5% | 1.0% | 1.5% | **0.1072%** (2 txn/1,865 sessions) — roughly flat vs 0.12% last cycle, the ~0% streak stays broken |
| "open ear headphones" position | 12.0 | 9.0 | 7.0 | 5.0 | **4.48 — best on record**, beats the 90-day target (5.0) further; CTR fell this cycle (1.5241%→1.4500%), breaking the 3–4 cycle joint-improvement streak |
| Monthly organic revenue (GA4) | ~₹7.5L | ₹9.5L | ₹12L | ₹15L | ₹4,00,161.55 (+8.3% vs last logged cycle) |

*Non-branded CTR uses the same broader branded-classification method as prior cycles (query
contains "earsafe"/"ear safe" or starts with "ng ") — directly comparable across cycles. "wehear"
queries are kept in the non-branded/PDP-cluster bucket, not filtered as branded, per the
constitution's correction (WeHear is an owned co-brand partner).

## DATA PULL SCHEDULE
- Every 30 days: Search Console keywords + pages (direct Google API, inside the Phase 3 script), GA4 organic landing data (direct Google Analytics Data API, inside the Phase 3 script — no Windsor dependency).
- Every 14 days: AEO check on the 5 monitoring queries. Next due: SEO-020/026's D+14 checkpoints have now passed (~09-25, both MISS — see queue-inbox.md), SEO-039's D+14 read is due today (2026-09-28, still unshipped so moot until it executes).
- Every 7 days: Rich Results Test on last-modified pages (carried forward again — not run this cycle, out of budget).

## DEPENDENCIES / BLOCKERS
- **Earplug decision** blocks topical-authority cleanup (awaiting founder).
- **Stock-before-demand:** buyer-intent pages for out-of-stock SKUs held; informational/category content continues.
- Shares converting-query themes with **instagram-content** (content gaps) and **cro** (landing-page intent).
- **No keyword-volume connector** available this cycle — WRITE brief search-volume figures must be flagged as unmeasured, not estimated, until one is connected.
- **Process fix (2026-07-27, holding):** any `/execute-approved` run touching seo-aeo must commit+push tracker.md/queue-inbox.md/learning-log.md in the same session. Reconfirmed clean 2026-09-28 — no new cross-file sync gap found this cycle (SEO-036..039 correctly shown pending in both files before drafting SEO-040..043).
- **Process gap #2 (fixed 2026-07-27, reconfirmed clean 08-03/08-10/08-17/09-14/09-28):** the managed agent itself must read the ⚠️ SYNC CORRECTION / LIVE STATUS SNAPSHOT sections in full, every run, before drafting anything. Reconfirmed again this cycle.
- **NEW (2026-09-28): approval latency has recurred on the SEO-036..039 batch** — drafted 09-14,
  still pending 2 full weekly cycles later. Distinct from, but compounding, the newer finding that
  fixes which *do* execute (SEO-021, SEO-028) can regress the page further if delivered
  incorrectly — both are now standing watch items for every future cycle.
