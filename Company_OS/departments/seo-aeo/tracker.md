# SEO & AEO — Live Task Tracker

> Read at the start of every SEO session to resume instantly. After a task: update status + result. Each 30-day cycle: archive completed into `learning-log.md` and reset.
> Last updated: 2026-07-03 (morning loop cycle 3 — post-execution verification pull)

## LIVE STATUS SNAPSHOT (2026-07-03)
- SEO-001, SEO-002, SEO-003, SEO-007, SEO-008 — **EXECUTED 2026-07-01**, verified live on-site (title tags confirmed via direct WebFetch). Too early to read CTR/position impact (1-2 days old). **First valid 30-day read: 2026-07-31.**
- SEO-004 — still NOT executed (halted at /execute-approved — live title already independently changed). Position has WORSENED since (pos 4.06→5.36, dropped out of top-5). Re-queued as SEO-012 for a harmonization decision.
- SEO-005 (earplug consolidation) — still PENDING founder decision. "do earplugs work" still pos 2.46, 0 clicks — drag confirmed unchanged.
- SEO-006 (Article 1) — still `BRIEF_READY` in the Q3 calendar file, publish date 2026-07-07 is 4 days out, no writer progress visible. Flagged SEO-010.
- FAQPage schema on the 3 executed pages could not be independently confirmed by WebFetch (likely a script-tag/markdown-conversion limitation, not proof of absence) — needs a Rich Results Test next session.
- New: non-branded CTR direct-calculated at ~0.91% (28d, methodology differs slightly from the 0.48% baseline — new anchor point, not a confirmed 2x). GSC clicks up (~3,828/28d vs ~1,963/mo baseline) but GA4 organic revenue down (₹1.74L/28d vs ₹7.5L/mo baseline) — flagged as a likely attribution/data-integrity issue (SEO-009), not a real demand drop.

## PRIORITY SYSTEM
- **P0** — this week (no new content until P0s clear). **P1** — this month. **P2** — 30–60 days. **P3** — 60–90 days / new clusters.

## STANDING TASKS
| Task | Cadence | Output |
|---|---|---|
| Rank & gap audit (NG positions + CTR vs competitor SERP) | 30 days | rewrite + gap-content drafts |
| AEO citation check (5 queries across ChatGPT/Perplexity/Google AIO) | 14 days | citation log + AEO fix drafts |
| Q3 content calendar status progression | weekly | next article through its pipeline |

## CURRENT SPRINT — JUNE 2026 (carried from `[[ng-seo-aeo-task-tracker]]`)
| # | Task | Target | Expected impact | Status | Result |
|---|---|---|---|---|---|
| P0-4 | Validate FAQPage schema on all blog posts (Rich Results Test) | top 5 blog URLs | AEO eligibility | IN PROGRESS | 2026-06-27: open-ear-vs-in-ear page = NO schema (confirmed WebFetch). bone-conduction-side-effects = FAQPage present but only 3 Q&As — below 6-question minimum. Fixes queued as SEO-002 + SEO-003. Remaining pages to check: can-headphones-cause-vertigo, side-effects-of-headphones-on-brain, best-headphones-for-teaching-online. |
| P0-8 | Earplug content decision: noindex vs one comparison page | 236 kws, 47K impr, 0.26% CTR | authority cleanup | PENDING USER | 2026-06-27 GSC update: earplug pages now at 0.69% CTR (vs 0.26% baseline) but still below site avg 1.19%. "do earplugs work" = pos 2.6, 1,800 impr, 0 clicks — confirms authority drag. Recommendation: consolidate 3 low-traffic pages → one comparison page; keep top 2. Flagged SEO-005. Decision required from founder before any redirect/noindex action. |
| P1-2 | Rewrite title/meta for "bone conduction earphones" page | 6,109 impr, 0.97% CTR | +122 clicks/mo | IN PROGRESS | 2026-06-27: Live GSC shows "bone conduction headphones" = 10,522 impr, 0.99% CTR, pos 5.3. Primary ranking page is the Pro product page (pos 4.73, 30,374 impr) not a blog. Title rewrite for side-effects page (7,255 impr, 0.40% CTR, pos 10.67) queued as SEO-002 — more impactful. |
| P1-5 | Product schema (aggregateRating/offers/availability) on Comm 2.0, Lite, SafeBuds | product pages | rich snippets → CTR | TODO | 2026-06-27: Pro product page has 119 reviews showing in UI but formal aggregateRating JSON-LD not confirmed by WebFetch. Remains TODO — next after P0-4 clears. |
| Q3 | Progress locked 13-article + 6-upgrade calendar (Jul 1–Sep 30) | +₹1.88L/mo organic by Sep 30 | revenue | IN PROGRESS | 2026-06-27: A1–A13 all BRIEF_READY. Article 1 writer assignment queued as SEO-006 (publish Jul 7). U4 (bone-conduction collection upgrade) was IN PROGRESS as of Jun 16 — status to verify in next session. |

## UPCOMING (next 7 days — pending approval of queue items)
| Action | Queue ID | Depends on |
|---|---|---|
| Rewrite title/meta: open-ear-vs-in-ear blog (20K impressions, 0.08% CTR) | SEO-001 | approval |
| Rewrite title/meta + expand FAQSchema: bone-conduction-side-effects | SEO-002 | approval |
| Add 8-Q FAQSchema to open-ear-vs-in-ear blog | SEO-003 | approval |
| Rewrite title/meta: best-wfh-headset blog (pos 4.07, 0.18% CTR) | SEO-004 | approval |
| Earplug consolidation decision | SEO-005 | founder decision |
| Q3 Article 1 writer assignment (publish Jul 7) | SEO-006 | approval |
| Rewrite title/meta + add FAQSchema: can-headphones-cause-vertigo (21,869 impressions, 1.65% CTR, pos 5.59 — highest-click blog; CTR uplift to 3% = +290 clicks/mo) | SEO-007 | approval |
| Rewrite title/meta: side-effects-of-headphones-on-brain (13,124 impressions, 0.93% CTR, pos 6.27) | SEO-008 | approval |
| FLAG — GA4 organic revenue (₹1.74L/28d) vs GSC click volume (up) mismatch — data-integrity cross-check | SEO-009 | CFO/CRO review |
| FLAG — Article 1 still BRIEF_READY, publish 2026-07-07 in 4 days, no writer progress | SEO-010 | founder/writer-resourcing decision |
| Product schema (AggregateRating/Offers/Availability): Comm 2.0 (49 rev), SafeBuds/ngwehear (38 rev, 4.3★), Pro (119 rev), ES Lite | SEO-011 | approval |
| Re-harmonize SEO-004 (WFH page): meta + H1 alignment + FAQ schema — position dropped 4.06→5.36 since halt | SEO-012 | approval |
| OpenWire LP SEO/AEO package DRAFTED (Jul 9): keyword-tuned title/meta/H1 ("open ear wired earphones with mic", Type-C/USB-C, ear-health, clip-fit clusters from live GSC 90d pull), 7-Q FAQPage JSON-LD, Product JSON-LD (live price/availability, conditional aggregateRating), Judge.me widget. Files: `OpenWire_Shopify/`. Goes live with OW-001. Post-live: Rich Results Test + GSC indexing request. NOTE: collection `/collections/wired-open-ear-headphones` (648 clicks/90d, pos 3.2 on "open ear wired earphones") is the cluster's ranking asset — LP complements, must not replace it. FLAG: possible duplicate PDP `/products/ng-earsafe-openwire` vs ranking `/products/open-ear-headphones-wired-ng-earsafe` — check & 301 if duplicate | OW-001 | approval |

## PERFORMANCE TARGETS (baseline Jun 1 2026)
| Metric | Baseline | 30-day | 60-day | 90-day |
|---|---|---|---|---|
| Overall CTR | 1.19% | 1.6% | 2.0% | 2.5% |
| Non-branded CTR | 0.48% | 0.8% | 1.2% | 1.5% |
| Organic clicks/month | ~1,963 | 2,600 | 3,500 | 5,000 |
| Blog page CVR | ~0% | 0.5% | 1.0% | 1.5% |
| "open ear headphones" position | 12.0 | 9.0 | 7.0 | 5.0 |
| Monthly organic revenue (GA4) | ~₹7.5L | ₹9.5L | ₹12L | ₹15L |

## DATA PULL SCHEDULE
- Every 30 days: Search Console keywords + pages, GA4 organic landing data (Windsor.ai).
- Every 14 days: AEO check on the 5 monitoring queries.
- Every 7 days: Rich Results Test on last-modified pages.

## DEPENDENCIES / BLOCKERS
- **Earplug decision** blocks topical-authority cleanup (awaiting founder).
- **Stock-before-demand:** buyer-intent pages for out-of-stock SKUs held; informational/category content continues.
- Shares converting-query themes with **instagram-content** (content gaps) and **cro** (landing-page intent).
