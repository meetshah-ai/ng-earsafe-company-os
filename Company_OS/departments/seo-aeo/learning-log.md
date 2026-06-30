# SEO & AEO — Learning Log

> Institutional memory. `/deep-loop` appends weekly; `/standup` reads here. Never delete — supersede.
> Seeded from `[[ng-seo-aeo-learning-log]]`, `[[ng-seo-aeo-baseline]]`.

## HOW TO LOG
```
DATE | INITIATIVE | HYPOTHESIS | RESULT (confirmed/rejected/inconclusive) | LEARNING CARRIED FORWARD
```

## CONFIRMED PATTERNS (institutional truths)
- Non-branded CTR (0.48%) is the crisis metric; pos 4–10 high-impression pages rewritten title/meta = fastest revenue.
- Informational blog traffic monetizes only with contextual CTAs (was ~0% CVR before Jun 2 install).
- Google organic is the survival engine and highest-margin demand.
- FAQPage schema is the AEO eligibility lever; citation must be tracked, not assumed.

## KEYWORD MOVEMENT LOG (update each 30-day pull)
| Date | Keyword | Position before | Position after | CTR before | CTR after | Note |
|---|---|---|---|---|---|---|
| _seed_ | "open ear headphones" | 12.0 | — | — | — | target pos 5 |

## AEO CITATION LOG (update each 14-day check)
| Date | Query | NG named? | Article cited? | Engine |
|---|---|---|---|---|
| _seed_ | "are open ear headphones safe" | — | — | ChatGPT/Perplexity/Google AIO |

## REJECTED / DEAD ENDS
- (none yet — add with the number that proves it)

---

## CYCLE LOG (most recent first)

### 2026-06-02 — P0 title rewrites + blog CTAs (historical, carried in)
**Initiative:** Rewrote titles/meta for bone-conduction, WFH-headset, teachers pages; installed CTAs on 8 high-traffic blog pages.
**Hypothesis:** Pos 4–10 CTR 1.12%→3% adds ~1,685 clicks/mo (~+₹7.95L/mo at 12-week lag); 3,500 blog sessions 0%→0.5% CVR (~+₹0.44L/mo).
**Result:** PENDING — check Search Console ~3 weeks out; results lag 8–12 weeks.
**Learning carried forward:** Measure CTR lift at the 30-day pull before declaring; CTAs are necessary but not sufficient — intent match matters.
**Next-sprint change triggered:** tracker P0-4 (schema validation), P1-5 (product schema).
**Skill signal:** `ctr-rewrite`, `blog-cta-install`, `collection-authority` exercised 🟢; `aeo-citation-monitor` to prove over next checks.

### 2026-05-23→26 — Google Ads budget spike lesson (cross-lane, relevant)
**Learning:** Uncontrolled smart bidding + no conversion-tracking fix flooded low-quality traffic and collapsed CVR. SEO note: don't let paid contaminate organic-attribution reads; fix conversion tracking first (owned by google-ads lane).

---

### 2026-06-27 — Morning loop: live GSC audit + AEO citation check + competitor SERP
**Initiative:** First live GSC data pull via Windsor (searchconsole connector, property https://ngearsafe.com/). 28-day window 2026-05-28→2026-06-26.

**CONFIRMED — CTR disease is concentrated in three pages:**
| Page | Impressions (28d) | Clicks | CTR | Position |
|---|---|---|---|---|
| open-ear-vs-in-ear-vs-over-ear | 20,453 | 17 | 0.08% | 6.5 |
| bone-conduction-headphones-side-effects | 7,255 | 29 | 0.40% | 10.67 |
| best-noise-cancelling-headset-for-wfh | 2,833 | 5 | 0.18% | 4.07 |
| open-ear-headphones (collection) | 10,539 | 133 | 1.26% | 5.8 |
| Pro product page | 30,374 | 360 | 1.19% | 4.73 |

**CONFIRMED — branded vs non-branded split:**
- "ng earsafe" branded: 1,726 impressions, 381 clicks, 22.1% CTR — brand intent is healthy.
- "bone conduction headphones": 10,522 impressions, 104 clicks, 0.99% CTR — primary non-branded money keyword at pos 5.3.
- "open ear headphones": 1,580 impressions, 16 clicks, 1.01% CTR at pos 8.7 — below target; needs pillar content.
- "do earplugs work": 1,800 impressions, 0 clicks, 0% CTR at pos 2.6 — earplug content sitting in top 3 and converting zero. Confirms authority drag.
- "in ear earphones": 2,193 impressions, 2 clicks, 0.09% CTR — irrelevant query NG ranks for. Confirms topic-drift risk.
- "noise cancelling headphones news": 1,103 impressions, 0 clicks — another irrelevant ranking. Confirm and clean.

**CONFIRMED — AEO gap:**
AEO check 2026-06-27 (web evidence): on queries "best open ear headphones india", "bone conduction headphones side effects", "open ear vs in ear", AI engines (ChatGPT web browsing, Perplexity, Google AIO) cite Soundcore, Shokz, Bose, TechRadar — NG EarSafe not confirmed cited on any monitored query. The "bone conduction headphones side effects" page has FAQPage schema with only 3 Q&As — insufficient for AI Overview eligibility (minimum 6 per Q3 checklist).

**CONFIRMED — competitor gap on open-ear pillar:**
bestreviewsonline.in "10 Best Open Ear Headphones India June 2026": NG EarSafe NOT LISTED. Top 10 are entirely pTron, WeCool, Truke, King Lucky, Acer, Drumstone. This is an active ranking gap — a review-listing page with no educational content outranks NG's collection page.

**CONFIRMED — no schema on highest-impression blog page:**
/open-ear-vs-in-ear-vs-over-ear page (20,453 impressions/month, pos 6.5): WebFetch confirmed NO FAQPage schema present. This is the largest unaddressed AEO gap on the site.

**PENDING — Jun 2 title/meta rewrites and blog CTA installs:**
Result still PENDING. 30-day pull from today (2026-07-27) will be first valid measurement point. Hypothesis remains open: pos 4–10 rewrites add ~1,685 clicks/mo at the 8–12 week lag.

**PENDING — earplug consolidation (P0-8):**
Live data shows earplug pages at avg 0.69% CTR (better than the 0.26% Jun 1 baseline) but still below site average 1.19% and confirmed as topical-authority drag. Two top earplug pages (88 + 82 clicks) have real traffic value. Founder decision still required. Flagged as SEO-005.

**NEW LEARNING (carry forward):**
- The "open ear vs in ear" page is the single highest-leverage page on the site — 20K+ impressions/month at pos 6.5 with no schema, 0.08% CTR, and competitors (Soundcore, Bose, Shokz) owning the AEO layer above it. Title + schema fix is the fastest compound action.
- "do earplugs work" ranking at pos 2.6 with 1,800 impressions and 0 clicks is conclusive evidence that earplug content is not just a topical drag but is actively occupying high positions and returning zero value. Strengthens the consolidation case.
- bestreviewsonline.in listing the open-ear category with no NG EarSafe is a winnable backlink + PR target. Outreach to get listed (flag for CRO/B2B or instagram cross-lane after article 1 publishes).
- Pro product page (30,374 impressions, 1.19% CTR, pos 4.73) is performing close to site average but is not generating Product schema rich snippets (WebFetch: 119 reviews present but formal aggregateRating JSON-LD not confirmed). Adding Product schema is P1-5 and still TODO.

**Next sprint change triggered:** SEO-001 through SEO-006 queued. Priority order: SEO-001 + SEO-003 (highest impression page), SEO-004 (pos 4.07, 0.18% CTR — top 5 with broken CTR), SEO-002 (AEO schema expansion), SEO-006 (Q3 calendar trigger), SEO-005 (founder decision flag).

---

### 2026-06-27 — Morning loop cycle 2: live GSC re-pull + AEO competitor SERP + bestreviewsonline.in audit

**Initiative:** Second live GSC data pull via Windsor (searchconsole connector). Same 28-day window 2026-05-28→2026-06-26 as cycle 1 for direct comparison. Plus live competitor SERP checks (WebFetch) and AEO citation sampling.

**CONFIRMED — CTR disease numbers are consistent with cycle 1; three new signals emerged:**

| Page | Impr (28d) | Clicks | CTR | Pos | Change vs cycle 1 |
|---|---|---|---|---|---|
| /open-ear-vs-in-ear-vs-over-ear-headphones | 21,401 | 18 | 0.08% | 6.48 | Stable — confirms P0 priority |
| /bone-conduction-headphones-side-effects | 7,495 | 32 | 0.43% | 10.63 | Slightly better CTR, still pos 10 |
| /best-noise-canceling-headset-for-working-from-home | 2,873 | 5 | 0.17% | 4.06 | Stable — top-5 with broken CTR |
| /can-headphones-cause-vertigo | 21,869 | 361 | 1.65% | 5.59 | NEW SIGNAL: highest-click blog on site |
| /side-effects-of-headphones-on-brain | 13,124 | 122 | 0.93% | 6.27 | Mid-CTR, high impressions — underperforming |
| /can-bluetooth-earphones-cause-a-blast | 17,454 | 97 | 0.56% | 4.74 | High impressions, below benchmark |
| Homepage | 23,712 | 1,220 | 5.15% | 5.86 | Healthy branded pull |
| Pro product page | 31,711 | 387 | 1.22% | 4.71 | Consistent — no improvement without schema |

**NEW SIGNAL — /can-headphones-cause-vertigo is the #1 blog click-earner (361 clicks, 1.65% CTR, pos 5.59):**
This page was not in the P0 priority list. At 21,869 impressions and 1.65% CTR it is already the best-performing blog page by click volume. This means (a) the vertigo/health-scare intent cluster is NG's strongest organic blog traffic driver, and (b) the CTR can likely reach 3%+ with a title + schema rewrite (gap = +290 clicks/month at 3% CTR). Queued as SEO-007.

**NEW SIGNAL — /side-effects-of-headphones-on-brain: 13,124 impressions, 0.93% CTR, pos 6.27:**
"side effects of headphones on brain" query alone: 505 impressions, 21 clicks (4.16% CTR on that query) — but the page overall CTR is 0.93% because most impressions come from lower-CTR variant queries. Title + schema rewrite is a P1 action. Queued as SEO-008.

**NEW SIGNAL — /can-bluetooth-earphones-cause-a-blast: 17,454 impressions, 97 clicks, 0.56% CTR, pos 4.74:**
Top-5 position, 17K impressions, only 0.56% CTR. The query "can bluetooth headphones cause cancer" has 11,963 impressions but only 9 clicks (0.08% CTR) — fear-bait query that does not convert clicks. This page's CTR disease is structural: the query intent ("do they explode/cause cancer") is answered in search snippets without needing a click. Low priority for rewrite — informational intent nearly fully satisfied by featured snippet.

**CONFIRMED — bestreviewsonline.in exclusion (two pages checked 2026-06-27):**
bestreviewsonline.in/open-ear-headphone (Jun 2026): Top 10 = pTron ×4, WeCool ×3, Fire-Boltt, Truke, King Lucky. NG EarSafe absent.
bestreviewsonline.in/open-ear-headphones (May 2026): Top 10 = pTron ×4, WeCool ×2, Truke, King Lucky, Acer, Drumstone. NG EarSafe absent.
Both pages rank above NG's own collection page for "open ear headphones india." This is a direct citation gap and outreach target (flag for B2B/PR lane post Article 1 publish).

**CONFIRMED — AEO gap on bone conduction side effects (second check):**
"bone conduction headphones side effects india 2026" SERP: Shokz.com (pos 1), Soundcore.com (pos 2), Soundtrace.com (pos 3), ComputerCity (pos 4), NG EarSafe (pos 5 — confirmed appearing). NG IS in organic results for this query but cited as pos 5 in natural results. The page has 0.43% CTR — Shokz and Soundcore are capturing the clicks. Title + 8-Q FAQSchema expansion (SEO-002, already queued) is the right fix.

**CONFIRMED — open ear comparison SERP: Shokz and Soundcore own the AEO layer:**
"open ear vs in ear" SERP: Shokz.com/blogs/news/open-ear-vs-bone-conduction-vs-in-ear and Soundcore.com/blogs/headphones/open-ear-vs-in-ear-vs-over-ear both rank page 1. NG's comparison page (21,401 impressions) ranks behind these two and has no FAQSchema. AEO engines (Google AIO, Perplexity) will cite these two above NG. SEO-003 (add 8-Q FAQSchema) remains highest-priority fix.

**PENDING — Jun 2 title/meta rewrites + blog CTA installs:**
Still pending 30-day measurement. First valid check point: 2026-07-27. Hypothesis open.

**PENDING — SEO-001 through SEO-006 from cycle 1:**
All still pending approval in APPROVALS_QUEUE.md. No executed rows for SEO dept in DECISION_LOG as of 2026-06-27.

**NEW LEARNING (carry forward):**
1. /can-headphones-cause-vertigo is the highest-value untapped page: 21,869 impressions, 1.65% CTR — already working, needs title + schema to reach 3% (= +290 clicks/month, ~₹2.75L incremental annual revenue at 2% CVR × ₹3,020 AOV). This page is higher priority than the WFH headset page for CTR uplift.
2. The earplug cluster now confirmed at 0% CTR on "do earplugs work" (1,815 impressions, pos 2.73) — earplug pages collectively drag authority at the blog level. SEO-005 founder decision is blocking the most efficient authority cleanup.
3. "wehear" query: 1,016 impressions, 1 click. WeHear is the SafeBuds OEM. NG ranks for "wehear" searches at pos 7.59 but with 0.1% CTR — these are competitor brand searches that NG accidentally ranks for. Not a priority to optimize; could become a liability if WeHear builds a consumer brand. Monitor.
4. NG is absent from bestreviewsonline.in on both open-ear-headphone and open-ear-headphones pages. Both pages rank above NG for commercial open-ear queries. Backlink/PR outreach after Article 1 is published is a confirmed cross-lane action (flag to B2B or instagram-content).
5. /can-bluetooth-earphones-cause-a-blast (17K impressions, 0.56% CTR) has structural CTR ceiling from featured-snippet satisfaction of the query — do not prioritize rewrite.

**Next sprint change triggered:** SEO-007 (vertigo page title + schema — new P0), SEO-008 (brain side effects page — new P1). SEO-001 through SEO-006 remain in queue awaiting approval.

---

## SCALE HYPOTHESIS BACKLOG (per COMPANY_STATE §5.5 — test → validate → scale)

> Falsifiable bets on what wins clicks + AEO citations. Scale bar: non-branded CTR + position trend up on the target cluster, AEO citation captured. A confirmed pattern gets rolled across the cluster; a rejected one is retired.

| # | Hypothesis (metric + threshold) | Test (smallest move) | Status | Linked queue |
|---|---|---|---|---|
| SH-SEO-1 | Adding an 8-Q FAQPage schema to high-impression health-scare pages wins AEO citations and lifts CTR toward 3% within 30–60 days. | Ship SEO-007 (vertigo) + SEO-003 (comparison) schema, recheck CTR + AI citation at 30/60 days. | OPEN — pattern test; roll across cluster if confirmed. | SEO-007, SEO-003, SEO-002 |
| SH-SEO-2 | "India 2026 + price/use-case" front-loaded titles lift CTR on top-10 CTR-disease pages without hurting position. | Ship SEO-001/004/008 rewrites, read CTR + pos at 28 days. | OPEN. | SEO-001, SEO-004, SEO-008 |
| SH-SEO-3 | With Comm 2.0 stock cleared, adding Comm 2.0 as a primary CTA on WFH/commercial pages lifts SEO→D2C conversion without harming rankings. | Add Comm 2.0 CTA to SEO-004/006 pages, watch assisted conversions. | OPEN — newly unblocked by CEO stock clearance 2026-06-27. | SEO-004, SEO-006, CSO-001 |
