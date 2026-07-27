# SEO & AEO — Live Task Tracker

> Read at the start of every SEO session to resume instantly. After a task: update status + result. Each 30-day cycle: archive completed into `learning-log.md` and reset.
> Last updated: 2026-07-27 (corrected same-day cycle — PDP first pull + SEO-021..024 drafted; supersedes both the managed agent's original 07-27 snapshot AND the earlier same-day sync-correction-only pass)
>
> **⚙️ Managed-agent cadence (since 2026-07-17):** the `seo-aeo` managed agent runs every **Monday
> 08:00 IST**, reads this file + `learning-log.md`, and drafts `SEO-###` rows to `queue-inbox.md`
> (this department's private inbox — the agent never touches `APPROVALS_QUEUE.md`). **New IDs
> continue from SEO-025** (SEO-001…024 + OW-001 are taken as of this cycle — see the ⚠️ SYNC
> CORRECTION below for how 017-020 got double-booked, and the LIVE STATUS SNAPSHOT for what
> SEO-021..024 are).

## ⚠️ SYNC CORRECTION (2026-07-27) — read this before trusting anything below

`/execute-approved` sessions between 2026-07-20 and 2026-07-22 executed SEO-013 through SEO-019 live
(Shopify writes + one structural doc change), but the resulting status updates to this file,
`queue-inbox.md`, `APPROVALS_QUEUE.md`, and `DECISION_LOG.md` were made **locally and never
committed/pushed to GitHub**. The managed agent reads only this file + `learning-log.md` from
GitHub — it had no way to know any of that work happened. Its first 2026-07-27 run, working from a
tracker that still said "start at SEO-013," drafted **new** content and mislabeled it SEO-017
through SEO-020 — but 017/018/019 were already taken by real, executed work. Three of those four
07-27 drafts proposed re-doing (or worse, duplicating) fixes that were already live:

- **SEO-017 (07-27 draft, "CTR-FIX escalates SEO-013")** — VOID. SEO-013's title+meta rewrite is
  already live. The draft's second ask — "ship the still-missing Product JSON-LD" — is actively
  wrong: the page already carries live Product JSON-LD; executing this draft would create a
  **duplicate, conflicting Product schema block**. Do not approve this row if it surfaces in
  `APPROVALS_QUEUE.md`.
- **SEO-018 (07-27 draft, "RANK/GAP escalates SEO-014")** — VOID. SEO-014's H1/FAQ harmonization is
  already live. The continued position decline this draft cited (4.06→5.36→6.31→8.34) is real —
  it's evidence the harmonization alone hasn't been enough, not evidence it was never done. **This
  gap now has a real draft: SEO-021** (the WFH content↔promise comparison section), not a repeat
  of the H1 edit.
- **SEO-019 (07-27 draft, "WRITE — Shokz Alternatives")** — VOID, and collided with a DIFFERENT,
  already-executed SEO-019 (the PDP Cluster Tracker structural change). The Shokz Alternatives
  article this draft proposed is already live (published 2026-07-21). Zero GSC presence at the
  time was expected indexing lag, not "unwritten."
- **SEO-020 (07-27 draft, AEO gap on "are open ear headphones safe")** — real, not a collision.
  Reconfirmed again on this corrected run's fresh pull. Still awaiting approval.

**This corrected same-day run (later on 2026-07-27) then:** re-pulled GSC+GA4 fresh, verified
against this corrected snapshot before drafting anything, and drafted **four new, non-colliding**
items: **SEO-021** (WFH comparison-content fix — the real lever SEO-018's VOID draft was reaching
for), **SEO-022** (CTR-FIX, `/collections/open-ear-headphones`), **SEO-023** (CTR-FIX, SafeBuds
PDP — surfaced by the first-ever PDP cluster pull), **SEO-024** (WRITE, running-headphones
cluster). See `queue-inbox.md` and the 2026-07-27.md weekly report for full detail.

**Process fix, not just a data fix:** after any `/execute-approved` run, the resulting
tracker.md/queue-inbox.md/learning-log.md updates must be committed and pushed in the same
session — not left staged locally until the next unrelated cleanup finds them. See the learning-log
entry dated 2026-07-27 ("Sync-gap") for the full postmortem. **Second learning added this cycle:**
always read this SYNC CORRECTION section and the LIVE STATUS SNAPSHOT in full before drafting
anything, every single run — not just after a known incident. The first 07-27 run skipped this and
produced the three VOID rows above; the corrected run did it and produced zero collisions.

## LIVE STATUS SNAPSHOT (2026-07-27, corrected same-day run)
- **SEO-013/017 (Pro Swimming PDP CTR-FIX) — EXECUTED 2026-07-21.** Inside its D+30 read window
  (2026-08-19). Not re-surfaced this cycle. 07-27 pull: 50,904 impr, 0.96% CTR, pos 4.19 — still
  the largest page in the CTR-disease band, still too early to read.
- **SEO-014/018 (WFH page H1/FAQ harmonization) — EXECUTED 2026-07-21.** Position has now declined
  a 4th straight cycle post-fix (4.06→5.36→6.31→8.34). The harmonization shipped; it wasn't enough.
  **The real lever — a genuine comparison section — is now drafted as SEO-021** (this cycle), not
  re-queued as another H1 edit. First valid D+30 read on SEO-014 itself: 2026-08-19.
- **SEO-015/019 (Shokz Alternatives article) — PUBLISHED LIVE 2026-07-21.** `/blogs/open-ear-
  headphones/shokz-alternatives-india`. Still near-zero GSC presence (5 rows/0 clicks/6 impr) —
  expected indexing lag on a page with only internal links (SEO-017), no external backlinks yet.
  D+14 index check due 2026-08-04; D+30 read 2026-08-19.
- **SEO-016 (vertigo blog AEO FAQ expansion) — EXECUTED 2026-07-21.** D+14 AEO citation read due
  2026-08-03/04, not yet. Shokz's footprint on "earphones hurting ears" remains at 2 articles.
- **SEO-017 (internal links into the Shokz article) — EXECUTED 2026-07-21.** All 3 links live.
- **SEO-018 (OpenWire PDP title/meta swap) — EXECUTED 2026-07-22.** Closes the last open piece of
  OW-001. D+30 CTR/position read on "open ear wired earphones" pending.
- **SEO-019 (PDP Cluster Tracker, structural) — EXECUTED 2026-07-22, and its first real pull has
  now happened (this cycle, 2026-07-27 corrected run).** See PDP CLUSTER BASELINES below — no
  longer TBD. SafeBuds is the one of the four tracked PDPs sitting in the CTR-disease band →
  **SEO-023**.
- **SEO-020 (AEO gap, "are open ear headphones safe") — genuinely open, real, reconfirmed this
  cycle.** NG completely absent while Shokz + Soundcore (2 articles) + Baseus + King Lucky are
  cited. Still queued, still needs approval. Not re-drafted.
- **SEO-021 (NEW, RANK/GAP — WFH page comparison section) — drafted this cycle.** The content↔
  promise mismatch flagged during SEO-014's execution (07-21) finally has a real fix drafted:
  named-competitor comparison (NG Comm 2.0 vs Shokz OpenComm vs sealed-ANC), India pricing,
  per-use-case pick table. Read plan: D+30 = 2026-08-26.
- **SEO-022 (NEW, CTR-FIX — `/collections/open-ear-headphones`) — drafted this cycle.** 8,235
  impr/30d, 0.89% CTR, pos 5.90 — 3rd-largest untouched page in the disease band. Read plan: D+30
  = 2026-08-26.
- **SEO-023 (NEW, CTR-FIX — SafeBuds PDP `/products/ngwehear`) — drafted this cycle.** 4,726
  impr/30d, 0.91% CTR, pos 5.10 — surfaced by the first PDP-cluster pull. Title/meta only;
  explicitly does not touch the Product-schema/rating-source question (still blocked, see SEO-011
  below). Read plan: D+30 = 2026-08-26.
- **SEO-024 (NEW, WRITE — running-headphones cluster) — drafted this cycle.** "best running
  headphones india" = 0 rows; existing page `best-out-of-ear-headphones-for-running` is thin
  (24 impr/30d, 0 clicks, pos 12.83). Rewrite/expand the existing URL, not a new one. Read plan:
  D+30 = 2026-08-26 (position), D+60 for ranking traction.
- SEO-005 (earplug consolidation) — still PENDING founder decision. Cluster this cycle: 16 pages,
  17,083 impr, 44 clicks, 0.258% CTR — roughly unchanged drag, still below site avg.
- SEO-009 (GA4 revenue vs GSC clicks mismatch) — persists. This cycle's fresh pull: GA4 organic
  30d revenue ₹3,67,834.65 (156 txn/7,059 sessions) vs GSC clicks 2,449/30d — both essentially flat
  vs the prior read of the same window. GA4 revenue still well under the ₹9.5L target. Still
  unreconciled, still not this agent's call.
- SEO-001, SEO-002, SEO-003, SEO-007, SEO-008 — **EXECUTED 2026-07-01**, still PENDING-READ.
  **First valid 30-day read: 2026-07-31 (4 days out).** Not credited or rejected this cycle either.
- SEO-011 (product schema, SafeBuds only) — **HALTED at /execute-approved 2026-07-21, premise
  partly disproven; still blocked on the review-rating source decision (Judge.me 4.67★/3 vs
  Audien 4.9★/17 vs Ryviu).** SEO-023 (this cycle) deliberately avoids this territory — title/meta
  only, no schema/rating touch.
- **"open ear vs in ear headphones" AEO organic-presence regression — now 2 consecutive cycles.**
  NG's page didn't surface in this cycle's top-10 web_search check for a 2nd straight time. GSC
  page position (6.28) hasn't collapsed, so still read as SERP-snapshot volatility — escalate if a
  3rd cycle (2026-08-03) repeats it.
- Non-branded CTR this cycle: 0.6865% (30d, 2026-06-27→07-26) — same window/method as the earlier
  same-day pull, confirms the read rather than adding new signal (0.04pp down from the 07-20
  cycle's 0.73%). Organic clicks 2,449/30d, unchanged from the earlier same-day pull (−151 vs the
  2,600 30-day target).

## PRIORITY SYSTEM
- **P0** — this week (no new content until P0s clear). **P1** — this month. **P2** — 30–60 days. **P3** — 60–90 days / new clusters.

## STANDING TASKS
| Task | Cadence | Output |
|---|---|---|
| Rank & gap audit (NG positions + CTR vs competitor SERP) | 30 days | rewrite + gap-content drafts |
| AEO citation check (5 queries across ChatGPT/Perplexity/Google AIO) | 14 days | citation log + AEO fix drafts |
| Q3 content calendar status progression | weekly | next article through its pipeline |
| **PDP cluster pull** (added 2026-07-22, SEO-019; first real pull executed 2026-07-27) — OpenWire, Comm 2.0, SafeBuds, ES Lite PDPs against their own keyword sets (constitution.md §3a) | weekly (same GSC pull, extra aggregation pass) | PDP CLUSTER TRACKER section in the weekly report |

## PDP CLUSTER BASELINES (first real pull EXECUTED 2026-07-27, corrected run — window 06-27→07-26)
| Product | PDP | Impr | Clicks | CTR | Pos | GA4 sessions/revenue/txn |
|---|---|---|---|---|---|---|
| OpenWire (₹799) | `/products/open-ear-headphones-wired-ng-earsafe` | 1,394 | 83 | 5.95% | 6.38 | 253 / ₹13,563.25 / 17 |
| Comm 2.0 (₹3,499) | `/products/noise-cancelling-open-ear-headphones-with-mic-ng-ear-safe-comm-2-0` | 1,783 | 43 | 2.41% | 2.74 | 156 / ₹6,797.20 / 3 |
| SafeBuds (₹2,999) | `/products/ngwehear` | 4,726 | 43 | 0.91% | 5.10 | 321 / ₹31,219.40 / 10 |
| ES Lite (₹1,799) | `/products/open-ear-wireless-headphones-ng-ear-safe-lite` | 1,509 | 24 | 1.59% | 3.65 | 105 / ₹9,514.05 / 6 |

> All 4 rows are now real, reconciled first reads (GSC pull 2026-06-27→07-26, 15,424 rows). SafeBuds
> is the only one crossing the CTR-disease gate (pos 4–10 & CTR<2%) → SEO-023. **Do not compare
> OpenWire's 1,394 impr/30d against the old "648 clicks/90d" figure** — that was the collection
> page over a 90-day window, a different metric entirely; this row is the PDP's own 30d numbers.
> Next pull: 2026-08-03, watch for week-on-week movement now that a real baseline exists.

## CURRENT SPRINT — JULY 2026
| # | Task | Target | Expected impact | Status | Result |
|---|---|---|---|---|---|
| P1-20 | AEO: direct-answer + FAQPage rewrite of are-bone-conduction-headphones-safe page for "are open ear headphones safe" | pos 43.70, 183 impr, 0 clicks — effectively unranked; Shokz+Soundcore own the AI answer | AI-answer consideration within 14 days + real shot at ranking | QUEUED (SEO-020) | 2026-07-27 (corrected run): reconfirmed via fresh web_search + GSC pull, unchanged. Not yet approved. |
| P1-21 | RANK/GAP: WFH page genuine comparison section (NG vs Shokz OpenComm vs sealed-ANC, India pricing, per-use-case pick) — the content↔promise mismatch flagged during SEO-014 | pos 8.34, worsening a 4th straight cycle even after the H1 fix | arrest the slide with the *actual* relevance gap, not a repeat H1 edit | QUEUED (SEO-021) | 2026-07-27 (corrected run): drafted — this was the highest-priority undrafted item carried for 2 cycles. |
| P1-22 | CTR-FIX: `/collections/open-ear-headphones` title/meta rewrite | 8,235 impr/30d, 0.89% CTR, pos 5.90 | +174 clicks/mo ≈ ₹14,483/mo | QUEUED (SEO-022) | 2026-07-27 (corrected run): 3rd-largest untouched CTR-disease page. |
| P1-23 | CTR-FIX: SafeBuds PDP (`/products/ngwehear`) title/meta rewrite, no schema touch | 4,726 impr/30d, 0.91% CTR, pos 5.10 | +99 clicks/mo ≈ ₹9,740/mo | QUEUED (SEO-023) | 2026-07-27 (corrected run): surfaced by the first PDP-cluster pull. |
| P2-24 | WRITE: rewrite/expand `best-out-of-ear-headphones-for-running` for the running-headphones cluster | "best running headphones india" = 0 rows; existing page thin (24 impr, pos 12.83) | ~₹15,600–20,800/mo at ramp | QUEUED (SEO-024) | 2026-07-27 (corrected run): new WRITE gap, confirmed via GSC + web_search. |
| P0-4 | Validate FAQPage schema on all blog posts (Rich Results Test) | top 5 blog URLs | AEO eligibility | IN PROGRESS (carried, not run this cycle — budget) | 2026-06-27: open-ear-vs-in-ear = NO schema (confirmed). bone-conduction-side-effects = FAQPage present but only 3 Q&As. Still needs a real Rich Results Test, not just WebFetch (which false-negatives on all script tags — see learning-log). |
| P0-8 | Earplug content decision: noindex vs one comparison page | 16 pages, 17,083 impr, 0.26% CTR (this cycle) | authority cleanup | PENDING USER | 2026-07-27: cluster roughly unchanged, still below site-avg CTR. Decision required from founder before any redirect/noindex action. |
| P1-11 | SafeBuds-only Product JSON-LD (re-queue of SEO-011, narrowed) | `/products/ngwehear` lacks Product schema; review-rating source unresolved (Judge.me 4.67★/3, Audien metafield 4.9★/17, Ryviu another figure) | rich snippets → CTR, once rating source is decided | BLOCKED — founder call on rating source | 2026-07-21: 3 of 4 original SKUs already had live schema (WebFetch false negative). Only SafeBuds needs it, and needs a decision first. SEO-023 (this cycle) deliberately does not touch this. |
| Q3 | Progress locked 13-article + 6-upgrade calendar (Jul 1–Sep 30) | +₹1.88L/mo organic by Sep 30 | revenue | IN PROGRESS (status not re-verified this cycle — out of budget) | 2026-07-03: Article 1 (SEO-006/SEO-010) deadline risk was flagged; re-verify next cycle. |

## UPCOMING (next 7 days — pending approval of queue items)
| Action | Queue ID | Depends on |
|---|---|---|
| AEO: direct-answer + FAQPage rewrite for "are open ear headphones safe" | SEO-020 | approval |
| RANK/GAP: WFH page genuine comparison section | SEO-021 | approval |
| CTR-FIX: `/collections/open-ear-headphones` title/meta | SEO-022 | approval |
| CTR-FIX: SafeBuds PDP title/meta (no schema touch) | SEO-023 | approval |
| WRITE: running-headphones cluster rewrite/expand | SEO-024 | approval |
| Earplug consolidation decision | SEO-005 | founder decision |
| GA4 organic revenue vs GSC click-volume mismatch — data-integrity cross-check | SEO-009 | CFO/CRO review |
| SafeBuds-only Product JSON-LD — blocked on review-rating source decision | (re-queue of SEO-011) | founder decision |
| Rewrite title/meta: open-ear-vs-in-ear blog (still early, too early to read) | SEO-001 | approval (executed, PENDING-READ) |
| Rewrite title/meta + expand FAQSchema: bone-conduction-side-effects | SEO-002 | approval (executed, PENDING-READ) |
| Add 8-Q FAQSchema to open-ear-vs-in-ear blog | SEO-003 | approval (executed, PENDING-READ) |
| Rewrite title/meta + add FAQSchema: can-headphones-cause-vertigo | SEO-007 | approval (executed, PENDING-READ) |
| Rewrite title/meta: side-effects-of-headphones-on-brain | SEO-008 | approval (executed, PENDING-READ) |

## PERFORMANCE TARGETS (baseline Jun 1 2026)
| Metric | Baseline | 30-day | 60-day | 90-day | This cycle (30d, 06-27→07-26) |
|---|---|---|---|---|---|
| Overall CTR | 1.19% | 1.6% | 2.0% | 2.5% | 1.325% |
| Non-branded CTR | 0.48% | 0.8% | 1.2% | 1.5% | 0.6865%* |
| Organic clicks/month | ~1,963 | 2,600 | 3,500 | 5,000 | 2,449 |
| Blog page CVR | ~0% | 0.5% | 1.0% | 1.5% | 0% (1,854 GA4 organic blog sessions, 0 txn) |
| "open ear headphones" position | 12.0 | 9.0 | 7.0 | 5.0 | **8.59 (beats 30-day target)** |
| Monthly organic revenue (GA4) | ~₹7.5L | ₹9.5L | ₹12L | ₹15L | ₹3,67,834.65 |

*Non-branded CTR uses the same broader branded-classification method as the 07-20 cycle (query
contains "earsafe"/"ear safe" or starts with "ng ") — this cycle's 0.6865% is directly comparable
to the 0.73% anchor and represents a real ~0.04pp week-on-week decline.

## DATA PULL SCHEDULE
- Every 30 days: Search Console keywords + pages (direct Google API, inside the Phase 3 script), GA4 organic landing data (direct Google Analytics Data API, inside the Phase 3 script — confirmed live since 2026-07-22, no Windsor dependency).
- Every 14 days: AEO check on the 5 monitoring queries. Next due: 2026-08-03 (re-check "open ear vs in ear headphones" organic-presence regression — now 2 cycles running — + "earphones hurting ears" Shokz footprint growth + SEO-016's D+14 citation read).
- Every 7 days: Rich Results Test on last-modified pages (carried forward again — not run 2026-07-27, out of budget).

## DEPENDENCIES / BLOCKERS
- **Earplug decision** blocks topical-authority cleanup (awaiting founder).
- **Stock-before-demand:** buyer-intent pages for out-of-stock SKUs held; informational/category content continues.
- Shares converting-query themes with **instagram-content** (content gaps) and **cro** (landing-page intent).
- **No keyword-volume connector** available this cycle — WRITE brief search-volume figures must be flagged as unmeasured, not estimated, until one is connected.
- **Process gap (fixed 2026-07-27):** any future `/execute-approved` run touching seo-aeo must commit+push tracker.md/queue-inbox.md/learning-log.md in the same session, or the managed agent will re-drift from reality within one cycle.
- **Process gap #2 (fixed 2026-07-27, corrected run):** the managed agent itself must read the ⚠️ SYNC CORRECTION / LIVE STATUS SNAPSHOT sections in full, every run, before drafting anything — not treat them as one-time-incident reading. Skipping this on the first same-day run is what produced SEO-017/018/019 as VOID duplicates.
