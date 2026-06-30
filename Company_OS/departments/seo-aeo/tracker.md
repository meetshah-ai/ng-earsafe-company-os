# SEO & AEO — Live Task Tracker

> Read at the start of every SEO session to resume instantly. After a task: update status + result. Each 30-day cycle: archive completed into `learning-log.md` and reset.
> Last updated: 2026-06-25 (seeded from `[[ng-seo-aeo-task-tracker]]`, `[[ng-seo-aeo-baseline]]`)

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
