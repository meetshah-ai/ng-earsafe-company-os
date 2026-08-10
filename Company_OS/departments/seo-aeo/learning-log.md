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

### 2026-07-03 — Morning loop cycle 3: post-execution verification pull + Article 1 deadline check

**Initiative:** First live GSC pull SINCE the 2026-07-01 execution of SEO-001/002/003/007/008. Window: last_28d (≈2026-06-05→2026-07-02) — only 1-2 days post-execution fall inside this window, so this is a verification pull, NOT a valid 30-day result read. Also pulled GA4 organic channel data and re-ran competitor SERP + product-schema checks.

**CONFIRMED — the 5 executed rewrites are LIVE on-site (verified directly, not just per DECISION_LOG):**
| Page | Title tag confirmed live | FAQ Q&As visible |
|---|---|---|
| bone-conduction-headphones-side-effects (SEO-002) | "Bone Conduction Side Effects India 2026 — What's Actually Safe" — CONFIRMED via WebFetch | 7 visible (8th referenced) |
| best-noise-canceling-headset-for-wfh (SEO-004, still NOT executed) | "Best Headset for Work From Home India 2026 — Open Ear vs Noise Cancelling" — confirms DECISION_LOG note this changed independently of our approval | H1 still stale: "Best Noise-Canceling Microphone Headset for Working from Home" (mismatch) |

**CAUTION — FAQPage JSON-LD schema NOT independently confirmed by WebFetch** on bone-conduction-side-effects despite DECISION_LOG SEO-002 claiming "verified live." This is most likely a WebFetch/markdown-conversion artifact (script tags are commonly stripped when HTML→markdown converts) rather than proof the schema is missing — but it must be confirmed with an actual Rich Results Test before trusting AEO eligibility. Action: run Rich Results Test on all 3 schema pages (open-ear-vs-in-ear, bone-conduction-side-effects, vertigo) next session — read-only, no approval needed.

**TOO EARLY — CTR/position movement on the 4 executed pages is noise-level at n=1-2 days, exactly as expected:**
| Page | Cycle 2 (06-27) | Cycle 3 (07-03, post-exec) | Read |
|---|---|---|---|
| open-ear-vs-in-ear-vs-over-ear (SEO-001+003) | 21,401 impr / 18 clicks / 0.08% CTR / pos 6.48 | 20,528 impr / 18 clicks / 0.09% CTR / pos 6.15 | flat — too early |
| bone-conduction-side-effects (SEO-002) | 7,495 impr / 32 clicks / 0.43% CTR / pos 10.63 | 7,069 impr / 23 clicks / 0.33% CTR / pos 10.77 | down, noise-level |
| can-headphones-cause-vertigo (SEO-007) | 21,869 impr / 361 clicks / 1.65% CTR / pos 5.59 | 20,900 impr / 368 clicks / 1.76% CTR / pos 5.65 | slightly up — encouraging but not yet significant |
| side-effects-of-headphones-on-brain (SEO-008) | 13,124 impr / 122 clicks / 0.93% CTR / pos 6.27 | 11,349 impr / 87 clicks / 0.77% CTR / pos 5.92 | down, noise-level |
**Do not credit or reject the SH-SEO-1/SH-SEO-2 hypotheses yet.** First valid read: ~2026-07-31 (30 days post-execution).

**NEW SIGNAL — SEO-004 (halted, not executed) page has gotten WORSE since cycle 2:** position dropped from pos 4.06 (top-5) to pos 5.36, CTR from 0.17% to 0.13%, impressions down 2,873→2,287. The independently-live title ("Best Headset for Work From Home India 2026 — Open Ear vs Noise Cancelling") has NOT fixed the CTR-disease and the H1 is stale/mismatched. Re-queued as SEO-012 for a decision: harmonize meta + H1 + add FAQ schema now rather than waiting for Article 4 (Jul 28).

**CONFIRMED — non-branded CTR read (new direct calculation, first of its kind this cycle):** Site-wide 28d totals: 337,525 impressions, 3,828 clicks, 1.13% overall CTR, avg pos 7.95 (Windsor searchconsole aggregate pull). Branded query set (all queries containing "earsafe"): ~4,287 impressions, ~789 clicks, ~18.4% CTR. Non-branded (site total minus branded): ~333,238 impressions, ~3,039 clicks, **~0.91% non-branded CTR** — up from the 0.48% Jun 1 baseline. CAVEAT: this is a different measurement method than the baseline (direct query-string filter on "earsafe" substring, vs whatever classification produced the 0.48% baseline number) and a different/shifted 28-day window — treat as a fresh anchor point for future cycles, not a confirmed 2× lift. Organic clicks are also up: ~3,828/28d vs ~1,963/month baseline — same caveat applies, but directionally consistent with a genuine improvement, not just noise.

**FLAG — GA4 organic revenue vs GSC click volume mismatch (data-integrity concern, not an SEO on-page finding):** GA4 `googleanalytics4` pull, last 28d: Organic Search = 5,389 sessions, ₹1,74,428.80 revenue, 64 transactions. This is far below the ₹7.5L/month baseline and even below the 30-day target of ₹9.5L — a ~77% shortfall. But GSC clicks are UP over the same period (3,828 vs ~1,963 baseline), which is inconsistent with a genuine organic revenue collapse. Combined with the previously-confirmed broken UTM tracking (138× Meta/GA4 discrepancy, `[[ng-product-page-cro]]`), this reads like an attribution/measurement problem, not a real organic-demand drop. Flagged as SEO-009 for CFO/CRO cross-check — do not act on the ₹1.74L figure as if it were real until reconciled.

**CONFIRMED — competitor/AEO gap unchanged:**
- "best open ear headphones india 2026" web search: NG EarSafe absent from all 10 results (Smartprix, TheAudioStore, Digit.in, Amazon, Dailyhunt/Mashable, TheQuint, TechRadar, Yahoo Tech). Same gap as cycles 1-2.
- bestreviewsonline.in/open-ear-headphones (checked again 2026-07-03): top 10 = pTron ×4, WeCool ×2, Truke, King Lucky, Acer, Drumstone — NG EarSafe still not mentioned anywhere on page. Gap persists, unchanged from cycle 2.
- "bone conduction headphones side effects india" web search: NG's page NOW appears in organic web results (3rd link) — but Google's cached snippet still shows the OLD title ("Bone Conduction Headphones Side Effects — What's Real and What's Not"), confirming Google has not yet recrawled the 07-01 change. Expected lag, not a problem.

**NEW SIGNAL — P1-5 (product schema) data now complete enough to draft:** Comm 2.0 = 49 reviews, ₹3,499 (live price, matches COMPANY_STATE); SafeBuds (`/products/ngwehear`, NOT `/products/open-ear-earbuds-wireless-ng-ear-safe-buds` which is a different/legacy NG Buds SKU at ₹3,499) = 38 reviews, 4.3★, ₹2,999 (matches COMPANY_STATE); Pro = 119 reviews. None show confirmed AggregateRating/Offers JSON-LD via WebFetch (same script-tag caveat as above). Queued as SEO-011.

**NEW SIGNAL — Article 1 (SEO-006) deadline risk:** `Q3_2026_Content_Calendar_Automation.md` confirms Article 1 status is still `BRIEF_READY` with publish date 2026-07-07 — 4 days away — and no evidence of writer progress (no DRAFT_READY transition). Flagged as SEO-010.

**Next sprint change triggered:** SEO-009 (GA4/GSC data-integrity flag), SEO-010 (Article 1 deadline flag), SEO-011 (product schema draft), SEO-012 (SEO-004 re-harmonization). SEO-001/002/003/007/008 remain in PENDING-READ status (30-day read due ~2026-07-31). SEO-005 (earplug) still awaiting founder decision — "do earplugs work" still at pos 2.46, 1,817 impr, 0 clicks, confirms the drag is unchanged.

**EXECUTED 2026-07-20 — SEO-014 (WFH page harmonization).** Shopify Article 751516680471, `articleUpdate`, exact strings in `SEO-014_execution_spec.md`. Three changes landed: H1 harmonized to the live `title_tag` ("Best Headset for Work From Home India 2026 — Open Ear vs Noise Cancelling"), 2 visible Q&As appended (6-hour Zoom days; noisy Indian home office), and a 6-Q FAQPage JSON-LD block. `title_tag` and `description_tag` were deliberately NOT touched — Meet's 2026-07-20 decision closed the SEO-004 halt in favour of keeping the live India-2026 title, and SEO-012's "meta is possibly generic" premise was disproven on inspection (live meta is 159 chars, on-brand). Baseline at execution: 1,296 impr, 1 click, 0.077% CTR, pos 6.31 (28d) — third consecutive worsening cycle (pos 4.06 → 5.36 → 6.31). **First valid read: 2026-08-19 (D+30).** Do not credit or reject the harmonization hypothesis before then.

**EXECUTION LEARNING — Shopify article body preserves `<script type="application/ld+json">`.** The JSON-LD block was written as part of `article.body` via `articleUpdate` and survived the sanitizer intact on post-write re-query. This is the cheapest schema-injection path for blog articles — no theme edit, no metafield, no `/execute-approved` theme-file risk. Reusable for SEO-011 (product schema) and any future article schema work. Companion regression check that should become standard on any article write: re-query `metafields(namespace: "global")` after the mutation and confirm `title_tag`/`description_tag` are byte-identical, since `articleUpdate` touches the same record.

**⚠️ OPEN FLAG raised during SEO-014 execution (NOT actioned, needs its own row).** The `description_tag` promises "the honest WFH headset comparison for Indian professionals — with a clear pick for every use case." The body delivers no comparison: no competitor named, no pricing, no use-case matrix, and every section pitches the NG EarSafe Comm. The one comparative H2 ("Wireless vs Wired Headsets for Work") is two short paragraphs. This content↔promise mismatch is plausibly a **larger** relevance drag than the H1 mismatch SEO-014 just fixed — which means SEO-014's hypothesis (harmonize → position returns to ≤5.0) may be under-powered, and a flat D+30 read should not be read as "harmonization doesn't work." Recommend a separate queue row for a genuine comparison section (NG vs Shokz OpenComm vs a sealed-ANC benchmark, India pricing, per-use-case pick). Deliberately NOT folded into SEO-014 — keeps the D+30 read clean on the H1 variable.

**PUBLISHED 2026-07-21 — SEO-015 ("Shokz Alternatives in India (2026): An Honest Comparison").** New article, Shopify Article 753805951255, `/blogs/open-ear-headphones/shokz-alternatives-india`, ~1,450 words, 7 visible Q&As + matching FAQPage JSON-LD, 9-row comparison table, internal links to Pro / Comm 2.0 / Lite / OpenWire PDPs. Full copy in `SEO-015_execution_spec.md`. First NG conquest content targeting the Shokz cluster, where NG previously had zero presence (0 GSC rows). **First valid read: 2026-08-19 (D+30) — judge on indexation and first impressions, NOT revenue.** The queue row's ~₹1.9L/yr / 300-sessions-per-month projection is explicitly ungrounded (no keyword-volume connector); do not credit or reject it against that number.

**EXECUTION LEARNING — verify competitor pricing against the marketplace, never against an aggregator.** The first draft of this article was built on Smartprix figures that turned out to be wrong or speculative: OpenComm 2 "from ₹38,499" (a grey-market artifact) and OpenFit 2 Plus "expected ₹16,999" (an expectation, not a price). Direct WebFetch of Amazon.in is blocked (503/500 anti-bot on both search and product URLs). **The working path is Porter `seo.merchant_amazon_products_live_advanced`** (keyword + `location_name: "India"`; note it rejects `language_code`). That returned real listed prices, coupon prices, ratings and review counts. Reusable for any future competitor-price content. Had the aggregator numbers shipped, the article's central price table — on a page whose entire premise is honesty — would have carried a checkable error.

**NEW SIGNAL — the Shokz/NG price ranges do not overlap.** Amazon.in 2026-07-21: Shokz spans ₹9,999 (OpenMove) to ₹18,999 (OpenSwim Pro), with OpenRun ₹13,499 and OpenRun Pro ₹15,999. NG spans ₹799 (OpenWire) to ₹4,999 (Pro). There is no price point at which the two brands compete directly. This reframes all NG-vs-Shokz positioning: NG is not a cheaper Shokz, it is a different market. Applies beyond SEO — relevant to meta-ads, amazon and CRO messaging.

**NEW SIGNAL — Shokz OpenComm is absent from Amazon.in.** Zero listings on the brand keyword. The most-recommended open-ear call headset is effectively unavailable in India, and NG Comm 2.0 (₹3,499) has no direct competitor in that slot on the largest Indian marketplace. Confirmed as of 2026-07-21; re-verify before leaning on it in future content.

**⚠️ CROSS-LANE FINDING — belongs to the amazon lane, NOT actioned here.** The same pull shows **NG EarSafe Lite already ranks #7 organically on the keyword "shokz" on Amazon.in** (ASIN B0CYLBDFZ5, ₹1,999, 3.5★/491 reviews) — NG is already winning Shokz conquest traffic on Amazon while ranking nowhere for it on Google. The 3.5★ rating looks like the binding constraint on that listing. Separately, the sub-₹2,500 open-ear shelf is crowded and moving real volume: WeCool Moonwalk M2 ₹2,445 (300 bought last month), Moonwalk Mini ₹1,394 (200), pTron Bassbuds ₹799 (400), King Lucky ₹2,499 (100) — NG Lite at ₹1,799 sits inside that band. Needs a proper read by the amazon agent.

---

### 2026-07-22 — Structural: PDP cluster tracking added (SEO-019); two corrections superseded

**Initiative:** Traced why OpenWire's OW-001 sat `pending` for three weeks despite the work shipping (via CRO-014), and why its "possible duplicate PDP" flag was never closed. Root cause: no keyword cluster or PDP-level tracking existed for OpenWire (or any non-"category" product), so nothing triggered a weekly look at it. Added PDP-level cluster tracking for OpenWire, Comm 2.0, SafeBuds, ES Lite to `constitution.md` §3a and the agent yaml (SEO-019) — see `APPROVALS_QUEUE.md`/`DECISION_LOG.md` SEO-019 for full detail.

**CONFIRMED — the duplicate-PDP flag was a false alarm.** `/products/ng-earsafe-openwire` carries a real, working `301` to the canonical `/products/open-ear-headphones-wired-ng-earsafe` (verified via `curl -D-`, not just WebFetch, which silently follows redirects and had made it look like two live pages). No action needed; tracker.md's flag is closed.

**SUPERSEDING NOTE — the 2026-06-27 cycle-2 entry mischaracterized "wehear" as an irrelevant OEM/competitor query.** That entry read: *"'wehear' query: 1,016 impressions, 1 click. WeHear is the SafeBuds OEM... competitor brand searches that NG accidentally ranks for. Not a priority to optimize."* Correction (Meet, 2026-07-22): WeHear is NG's own co-brand partner — the product is sold as "NG x WeHear SafeBuds" — so "wehear" is an owned/branded-adjacent query, not a competitor term. Do not deprioritize it as accidental; track it as part of the SafeBuds PDP cluster going forward. The original entry is left in place per the never-delete rule; this note supersedes its conclusion.

**Next sprint change triggered:** first dedicated GSC pull for all 4 PDP clusters (OpenWire, Comm 2.0, SafeBuds, ES Lite) on the 2026-07-27 managed-agent cycle — sets each cluster's baseline the way the 0.48% non-branded CTR baseline was set site-wide. SEO-018 (OpenWire title/meta swap) queued alongside.

---

## SCALE HYPOTHESIS BACKLOG (per COMPANY_STATE §5.5 — test → validate → scale)

> Falsifiable bets on what wins clicks + AEO citations. Scale bar: non-branded CTR + position trend up on the target cluster, AEO citation captured. A confirmed pattern gets rolled across the cluster; a rejected one is retired.

| # | Hypothesis (metric + threshold) | Test (smallest move) | Status | Linked queue |
|---|---|---|---|---|
| SH-SEO-1 | Adding an 8-Q FAQPage schema to high-impression health-scare pages wins AEO citations and lifts CTR toward 3% within 30–60 days. | Ship SEO-007 (vertigo) + SEO-003 (comparison) schema, recheck CTR + AI citation at 30/60 days. | OPEN — pattern test; roll across cluster if confirmed. | SEO-007, SEO-003, SEO-002 |
| SH-SEO-2 | "India 2026 + price/use-case" front-loaded titles lift CTR on top-10 CTR-disease pages without hurting position. | Ship SEO-001/004/008 rewrites, read CTR + pos at 28 days. | OPEN. | SEO-001, SEO-004, SEO-008 |
| SH-SEO-3 | With Comm 2.0 stock cleared, adding Comm 2.0 as a primary CTA on WFH/commercial pages lifts SEO→D2C conversion without harming rankings. | Add Comm 2.0 CTA to SEO-004/006 pages, watch assisted conversions. | OPEN — newly unblocked by CEO stock clearance 2026-06-27. | SEO-004, SEO-006, CSO-001 |
