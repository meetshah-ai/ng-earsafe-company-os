# SEO & AEO — Live Task Tracker

> Read at the start of every SEO session to resume instantly. After a task: update status + result. Each 30-day cycle: archive completed into `learning-log.md` and reset.
> Last updated: 2026-07-27 (sync correction — see ⚠️ note below; supersedes the managed agent's own 07-27 snapshot)
>
> **⚙️ Managed-agent cadence (since 2026-07-17):** the `seo-aeo` managed agent runs every **Monday
> 08:00 IST**, reads this file + `learning-log.md`, and drafts `SEO-###` rows to `queue-inbox.md`
> (this department's private inbox — the agent never touches `APPROVALS_QUEUE.md`). New IDs continue
> from **SEO-021** (SEO-001…020 + OW-001 are taken — see the ⚠️ SYNC CORRECTION below for how 017-020
> got double-booked).

## ⚠️ SYNC CORRECTION (2026-07-27) — read this before trusting anything below

`/execute-approved` sessions between 2026-07-20 and 2026-07-22 executed SEO-013 through SEO-019 live
(Shopify writes + one structural doc change), but the resulting status updates to this file,
`queue-inbox.md`, `APPROVALS_QUEUE.md`, and `DECISION_LOG.md` were made **locally and never
committed/pushed to GitHub**. The managed agent reads only this file + `learning-log.md` from
GitHub — it had no way to know any of that work happened. Its 2026-07-27 run, working from a
tracker that still said "start at SEO-013," drafted **new** content and mislabeled it SEO-017
through SEO-020 — but 017/018/019 were already taken by real, executed work. Three of those four
07-27 drafts propose re-doing (or worse, duplicating) fixes that are already live:

- **SEO-017 (07-27 draft, "CTR-FIX escalates SEO-013")** — VOID. SEO-013's title+meta rewrite is
  already live (verified 2026-07-27 via WebFetch + `DECISION_LOG.md`). The draft's second ask —
  "ship the still-missing Product JSON-LD" — is actively wrong and dangerous: `DECISION_LOG.md`
  confirms the page already carries live Product JSON-LD; executing this draft would create a
  **duplicate, conflicting Product schema block**. Do not approve this row if it surfaces in
  `APPROVALS_QUEUE.md`.
- **SEO-018 (07-27 draft, "RANK/GAP escalates SEO-014")** — VOID. SEO-014's H1/FAQ harmonization is
  already live (verified via WebFetch: H1, title_tag, and all 6 FAQ questions render exactly as
  spec'd). The continued position decline this draft cites (4.06→5.36→6.31→8.34) is real and worth
  tracking, but it's evidence the harmonization alone hasn't been enough — not evidence it was
  never done. The real open item is the content↔promise mismatch flagged during SEO-014's
  execution (see OPEN ITEMS below), which needs its own fix, not a repeat of the same H1 edit.
- **SEO-019 (07-27 draft, "WRITE — Shokz Alternatives")** — VOID, and collides with a DIFFERENT,
  already-executed SEO-019 (the PDP Cluster Tracker structural change, approved+executed
  2026-07-22 — see `DECISION_LOG.md`). The Shokz Alternatives article this draft proposes writing
  is already live (published 2026-07-21, Article 753805951255, ~2,500 words, comparison table, 7
  FAQs — verified via WebFetch). Zero GSC presence 6 days post-publish with no external backlinks
  is expected indexing lag, not "unwritten" — re-check at the D+14 index check (2026-08-04) before
  concluding anything.
- **SEO-020 (07-27 draft, AEO gap on "are open ear headphones safe")** — this one is real and
  does NOT collide with anything. Kept as-is below.

**Process fix, not just a data fix:** after any `/execute-approved` run, the resulting
tracker.md/queue-inbox.md/learning-log.md updates must be committed and pushed in the same
session — not left staged locally until the next unrelated cleanup finds them. See the learning-log
entry dated 2026-07-27 ("Sync-gap") for the full postmortem.

## LIVE STATUS SNAPSHOT (2026-07-27, corrected)
- **SEO-013 (Pro Swimming PDP title+meta) — EXECUTED 2026-07-21.** Product JSON-LD half was
  correctly *not* added — the page already had it (SEO-011 finding). Post-execution numbers this
  cycle: 50,904 impr/30d, 0.96% CTR, pos 4.19 — impressions +64.6% w/w, CTR still falling. This is
  6 days post-execution; **too early to read** (first valid read = D+30 = 2026-08-19, same as the
  other July rewrites). Do not re-draft this fix again before then.
- **SEO-014 (WFH page H1/FAQ harmonization) — EXECUTED 2026-07-21.** Verified live (WebFetch
  2026-07-27): H1, title_tag, and 6 FAQ questions all render exactly as spec'd. Position has still
  declined for a 4th straight cycle post-fix: 4.06 (06-27) → 5.36 (07-03) → 6.31 (07-20, pre-fix) →
  8.34 (07-27, post-fix). **This is a real, live problem** — the H1 harmonization alone hasn't
  arrested the slide — but the fix already shipped; re-drafting the same H1/FAQ change is not the
  next move. The real lever is the OPEN FLAG below (content↔promise mismatch). First valid D+30
  read: 2026-08-19.
- **SEO-015 (Shokz Alternatives article) — PUBLISHED LIVE 2026-07-21.** Article 753805951255,
  `/blogs/open-ear-headphones/shokz-alternatives-india`. Verified live 2026-07-27 (WebFetch):
  ~2,500 words, comparison table, 7 FAQs. Zero GSC presence this cycle (0 rows, 6 days post-publish)
  is expected — brand-new URL, only 3 internal links (added via SEO-017), no external backlinks yet.
  D+14 index check due 2026-08-04; D+30 read 2026-08-19.
- **SEO-016 (vertigo blog AEO FAQ expansion) — EXECUTED 2026-07-21.** Article 751492890903, merged
  into the existing FAQPage block (6→10 questions), not appended as a second block. Shokz's
  footprint on "earphones hurting ears" grew to 2 articles this cycle — worth re-checking at the
  next AEO cycle (2026-08-03) now that NG's own fix is live, not re-drafting the fix itself.
- **SEO-017 (internal links into the Shokz article) — EXECUTED 2026-07-21.** All 3 links live
  (bone-conduction collection, Pro PDP, vertigo blog). D+14 index check due 2026-08-04.
- **SEO-018 (OpenWire PDP title/meta swap to the OW-001 spec) — EXECUTED 2026-07-22.** Verified
  live 2026-07-27 (WebFetch): title tag = "Open Ear Wired Earphones with Mic (Type-C) | NG EarSafe
  OpenWire", matching spec exactly. Closes the last open piece of OW-001.
- **SEO-019 (PDP Cluster Tracker, structural) — EXECUTED 2026-07-22.** `constitution.md` §3a,
  this file's PDP baseline table below, and the agent's OUTPUT template all updated. First real
  per-PDP GSC pull is due this coming cycle (see PDP CLUSTER BASELINES below — still pending, the
  07-27 managed-agent run didn't have the updated spec yet).
- **SEO-020 (AEO gap, "are open ear headphones safe") — genuinely open, real.** NG completely
  absent while Shokz (dedicated article) + Soundcore (2 articles) + Baseus + King Lucky are cited.
  `are-bone-conduction-headphones-safe` is effectively unranked (pos 43.70, 183 impr, 0 clicks) —
  the best host for a direct-answer + FAQPage rewrite. Still queued, still needs approval.
- **OPEN FLAG (unassigned ID) — WFH page content↔promise mismatch.** Raised during SEO-014's
  execution: the meta promises "an honest comparison... with a clear pick for every use case," but
  the body names no competitor, shows no pricing, has no use-case matrix. Plausibly a **larger**
  relevance drag than the H1 mismatch SEO-014 fixed, which would explain why the position kept
  falling post-fix. Needs its own row: a genuine NG-vs-Shokz-OpenComm-vs-sealed-ANC comparison
  section with India pricing. Founder/content decision, not yet drafted.
- SEO-005 (earplug consolidation) — still PENDING founder decision. Cluster this cycle: 16 pages,
  17,083 impr, 44 clicks, 0.26% CTR — roughly unchanged drag, still below site avg (1.33%).
- SEO-009 (GA4 revenue vs GSC clicks mismatch) — persists but gap narrower this cycle. GA4 organic
  30d revenue ₹3,66,136 (154 txn/7,017 sessions, +3.6% w/w) vs GSC clicks 2,449/30d (+3.0% w/w) —
  moved in tandem this time, but GA4 revenue still well under the ₹9.5L target. Still unreconciled,
  still not this agent's call.
- SEO-001, SEO-002, SEO-003, SEO-007, SEO-008 — **EXECUTED 2026-07-01**, still PENDING-READ.
  **First valid 30-day read: 2026-07-31 (4 days out).** Not credited or rejected this cycle either.
- SEO-011 (product schema, Comm 2.0/SafeBuds/Pro/ES Lite) — **HALTED at /execute-approved
  2026-07-21, premise disproven.** 3 of 4 SKUs already had live Product JSON-LD (WebFetch false
  negative — it strips `<script>` tags, see the execution learning in learning-log.md). Only
  SafeBuds genuinely lacks it, blocked on an unresolved review-rating source. Re-queue as a
  SafeBuds-only row once that's decided — not re-drafted as-is.
- **NEW SIGNAL — "open ear vs in ear headphones" AEO organic-presence regressed:** NG's page
  surfaced in the 07-20 web_search check but did not appear in this cycle's top-10 (GSC page
  position 6.28 unchanged — likely SERP-snapshot volatility, re-check 2026-08-03).
- Non-branded CTR this cycle: 0.69% (30d, 2026-06-27→07-26; same broader branded-classification
  method as the 07-20 cycle's 0.73% figure — a real 0.04pp week-on-week decline). Organic clicks
  2,449/30d (+3.0% vs prior cycle, −151 vs the 2,600 30-day target).

## PRIORITY SYSTEM
- **P0** — this week (no new content until P0s clear). **P1** — this month. **P2** — 30–60 days. **P3** — 60–90 days / new clusters.

## STANDING TASKS
| Task | Cadence | Output |
|---|---|---|
| Rank & gap audit (NG positions + CTR vs competitor SERP) | 30 days | rewrite + gap-content drafts |
| AEO citation check (5 queries across ChatGPT/Perplexity/Google AIO) | 14 days | citation log + AEO fix drafts |
| Q3 content calendar status progression | weekly | next article through its pipeline |
| **PDP cluster pull** (added 2026-07-22, SEO-019) — OpenWire, Comm 2.0, SafeBuds, ES Lite PDPs against their own keyword sets (constitution.md §3a) | weekly (same GSC pull, extra aggregation pass) | PDP CLUSTER TRACKER section in the weekly report |

## PDP CLUSTER BASELINES (still pending first real pull — the 07-27 agent run predates the spec update)
| Product | PDP | Keywords | Impr | Clicks | CTR | Pos |
|---|---|---|---|---|---|---|
| OpenWire (₹799) | `/products/open-ear-headphones-wired-ng-earsafe` | "open ear wired earphones" + cluster | — | 648 (90d, collection page) | TBD — first pull | 3.2 (collection page, on "open ear wired earphones") |
| Comm 2.0 (₹3,499) | `/products/noise-cancelling-open-ear-headphones-with-mic-ng-ear-safe-comm-2-0` | "open ear headphones with mic india" + cluster | TBD | TBD | TBD | TBD |
| SafeBuds (₹2,999) | `/products/ngwehear` | "open ear wireless earbuds india", "wehear" (own co-brand, not competitor) + cluster | TBD | TBD | TBD | TBD |
| ES Lite (₹1,799) | `/products/open-ear-wireless-headphones-ng-ear-safe-lite` | "open ear wireless headphones india" + cluster | TBD | TBD | TBD | TBD |

> All "TBD" cells are genuinely unmeasured — do not fill with a guess or the OpenWire baseline. First real pull: next managed-agent cycle (2026-08-03), now that the agent spec carries the PDP section.

## CURRENT SPRINT — JULY 2026
| # | Task | Target | Expected impact | Status | Result |
|---|---|---|---|---|---|
| P1-20 | AEO: direct-answer + FAQPage rewrite of are-bone-conduction-headphones-safe page for "are open ear headphones safe" | pos 43.70, 183 impr, 0 clicks — effectively unranked; Shokz+Soundcore own the AI answer | AI-answer consideration within 14 days + real shot at ranking | QUEUED (SEO-020) | 2026-07-27: new AEO gap confirmed via web_search; best host page identified (thin, unranked, on-topic). Not yet approved. |
| (unassigned) | WFH page genuine comparison section (NG vs Shokz OpenComm vs sealed-ANC, India pricing, per-use-case pick) — the content↔promise mismatch flagged during SEO-014 | pos 8.34, worsening even after H1 fix | arrest the slide with the *actual* relevance gap, not a repeat H1 edit | NOT YET DRAFTED | 2026-07-27: identified as the more likely cause of continued decline than the H1 mismatch SEO-014 already fixed. |
| P0-4 | Validate FAQPage schema on all blog posts (Rich Results Test) | top 5 blog URLs | AEO eligibility | IN PROGRESS (carried, not run this cycle — budget) | 2026-06-27: open-ear-vs-in-ear = NO schema (confirmed). bone-conduction-side-effects = FAQPage present but only 3 Q&As. Still needs a real Rich Results Test, not just WebFetch (which false-negatives on all script tags — see learning-log). |
| P0-8 | Earplug content decision: noindex vs one comparison page | 16 pages, 17,083 impr, 0.26% CTR (this cycle) | authority cleanup | PENDING USER | 2026-07-27: cluster roughly unchanged, still below site-avg CTR. Decision required from founder before any redirect/noindex action. |
| P1-11 | SafeBuds-only Product JSON-LD (re-queue of SEO-011, narrowed) | `/products/ngwehear` lacks Product schema; review-rating source unresolved (Judge.me 4.67★/3, Audien metafield 4.9★/17, Ryviu another figure) | rich snippets → CTR, once rating source is decided | BLOCKED — founder call on rating source | 2026-07-21: 3 of 4 original SKUs already had live schema (WebFetch false negative). Only SafeBuds needs it, and needs a decision first. |
| Q3 | Progress locked 13-article + 6-upgrade calendar (Jul 1–Sep 30) | +₹1.88L/mo organic by Sep 30 | revenue | IN PROGRESS (status not re-verified this cycle — out of budget) | 2026-07-03: Article 1 (SEO-006/SEO-010) deadline risk was flagged; re-verify next cycle. |

## UPCOMING (next 7 days — pending approval of queue items)
| Action | Queue ID | Depends on |
|---|---|---|
| AEO: direct-answer + FAQPage rewrite for "are open ear headphones safe" | SEO-020 | approval |
| Earplug consolidation decision | SEO-005 | founder decision |
| GA4 organic revenue vs GSC click-volume mismatch — data-integrity cross-check | SEO-009 | CFO/CRO review |
| SafeBuds-only Product JSON-LD — blocked on review-rating source decision | (re-queue of SEO-011) | founder decision |
| WFH page genuine comparison section (content↔promise mismatch) | (unassigned, needs drafting) | drafting, then approval |
| Rewrite title/meta: open-ear-vs-in-ear blog (still early, too early to read) | SEO-001 | approval (executed, PENDING-READ) |
| Rewrite title/meta + expand FAQSchema: bone-conduction-side-effects | SEO-002 | approval (executed, PENDING-READ) |
| Add 8-Q FAQSchema to open-ear-vs-in-ear blog | SEO-003 | approval (executed, PENDING-READ) |
| Rewrite title/meta + add FAQSchema: can-headphones-cause-vertigo | SEO-007 | approval (executed, PENDING-READ) |
| Rewrite title/meta: side-effects-of-headphones-on-brain | SEO-008 | approval (executed, PENDING-READ) |

## PERFORMANCE TARGETS (baseline Jun 1 2026)
| Metric | Baseline | 30-day | 60-day | 90-day | This cycle (30d, 06-27→07-26) |
|---|---|---|---|---|---|
| Overall CTR | 1.19% | 1.6% | 2.0% | 2.5% | 1.33% |
| Non-branded CTR | 0.48% | 0.8% | 1.2% | 1.5% | 0.69%* |
| Organic clicks/month | ~1,963 | 2,600 | 3,500 | 5,000 | 2,449 |
| Blog page CVR | ~0% | 0.5% | 1.0% | 1.5% | 0% (1,841 GA4 organic blog sessions, 0 txn) |
| "open ear headphones" position | 12.0 | 9.0 | 7.0 | 5.0 | **8.59 (beats 30-day target)** |
| Monthly organic revenue (GA4) | ~₹7.5L | ₹9.5L | ₹12L | ₹15L | ₹3,66,136 |

*Non-branded CTR uses the same broader branded-classification method as the 07-20 cycle (query
contains "earsafe"/"ear safe" or starts with "ng ") — this cycle's 0.69% is directly comparable to
the 0.73% anchor and represents a real 0.04pp week-on-week decline.

## DATA PULL SCHEDULE
- Every 30 days: Search Console keywords + pages (direct Google API, inside the Phase 3 script), GA4 organic landing data (direct Google Analytics Data API, inside the Phase 3 script — confirmed live since 2026-07-22, no Windsor dependency).
- Every 14 days: AEO check on the 5 monitoring queries. Next due: 2026-08-03 (re-check "open ear vs in ear headphones" organic-presence regression + "earphones hurting ears" Shokz footprint growth).
- Every 7 days: Rich Results Test on last-modified pages (carried forward again — not run 2026-07-27, out of budget).

## DEPENDENCIES / BLOCKERS
- **Earplug decision** blocks topical-authority cleanup (awaiting founder).
- **Stock-before-demand:** buyer-intent pages for out-of-stock SKUs held; informational/category content continues.
- Shares converting-query themes with **instagram-content** (content gaps) and **cro** (landing-page intent).
- **No keyword-volume connector** available this cycle — WRITE brief search-volume figures must be flagged as unmeasured, not estimated, until one is connected.
- **Process gap (fixed 2026-07-27):** any future `/execute-approved` run touching seo-aeo must commit+push tracker.md/queue-inbox.md/learning-log.md in the same session, or the managed agent will re-drift from reality within one cycle.
