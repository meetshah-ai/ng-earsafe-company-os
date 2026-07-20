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
| 2026-07-20 | "open ear headphones" | 8.7 (06-27) | 8.64 | 1.01% | 0.61% | Position now beats the 9.0 30-day target; CTR did not follow — clicks lag rank gains. |
| 2026-07-20 | best-noise-canceling-headset-for-wfh (page) | 5.36 (07-03) | 6.31 | 0.13% | 0.08% | 3rd straight cycle of decline (4.06→5.36→6.31); re-queued SEO-014. |

## AEO CITATION LOG (update each 14-day check)
| Date | Query | NG named? | Article cited? | Engine |
|---|---|---|---|---|
| _seed_ | "are open ear headphones safe" | — | — | ChatGPT/Perplexity/Google AIO |
| 2026-07-20 | "best open ear headphones india" | No (own page now surfaces in organic web results, not confirmed as AI-cited) | No | web_search proxy |
| 2026-07-20 | "are open ear headphones safe" | No | No | web_search proxy — clean Shokz/Soundcore/KingLucky sweep |
| 2026-07-20 | "earphones hurting ears what to do" | No | No | web_search proxy — Shokz owns a direct-answer blog for this exact query; used to ground SEO-016 |
| 2026-07-20 | "bone conduction headphones side effects" | No (own page surfaces in organic results now) | Page present, citation unconfirmed | web_search proxy |
| 2026-07-20 | "open ear vs in ear headphones" | No (own page surfaces in organic results now) | Page present, citation unconfirmed | web_search proxy |

## REJECTED / DEAD ENDS
- (none yet — add with the number that proves it)

---

## CYCLE LOG (most recent first)

### 2026-07-20 — Weekly managed-agent cycle: GSC direct-API pull + GA4 + 5 AEO checks + competitor SERP

**Initiative:** First run under the new Monday 08:00 IST managed-agent cadence. GSC pulled directly
via OAuth (no Windsor searchconsole connector used — token exchange + paginated Search Analytics
inside one Python script), window 2026-06-20→2026-07-19 (30d). GA4 pulled via Windsor
(`googleanalytics4`, medium=organic filter, last_30d). 15,393 GSC query×page rows and 1,730 GA4
rows returned; all page/query/branded breakdowns reconciled to site totals in code (asserted, no
mismatches).

**CONFIRMED — position is moving, clicks are not following:**
"open ear headphones" position is now 8.64, beating the 30-day target of 9.0 (baseline was 12.0) —
but CTR on that query is only 0.61% and impressions/clicks are flat-to-down vs the prior cycle.
This is the clearest evidence yet that rank gains alone are not the fix — CTR-FIX work (title/meta/
schema) is the lever that actually converts rank into clicks, exactly as the standing institutional
truth states.

**CONFIRMED — the single largest CTR-disease page on the site is a product page, not a blog:**
`/products/open-ear-bone-conduction-headphones-ng-ear-safe-pro-swimming` — 30,935 impressions/30d,
409 clicks, 1.32% CTR, pos 4.16. This dwarfs every blog CTR-disease page (the next largest,
open-ear-vs-in-ear, is 14,795 impressions). It had never been queued for a CTR-focused title/meta
rewrite (SEO-011 covers schema only) — queued now as SEO-013 with a GA4-grounded revenue estimate
(page CVR 1.61%, AOV ₹4,324).

**CONFIRMED — SEO-004/012 (WFH page) is not stabilizing, it is actively worsening:**
Position has now declined for three straight cycles: 4.06 (06-27) → 5.36 (07-03) → 6.31 (07-20).
Impressions have fallen in step: 2,873 → 2,287 → 1,296. This is no longer noise — it is a
week-on-week decline pattern with a known, un-executed fix sitting in the queue. Re-surfaced a
third time as SEO-014.

**CONFIRMED — a genuine content gap on the Shokz-conquest cluster:**
"shokz alternatives india" returns zero rows in a 15,393-row GSC pull — NG has no ranking presence
at all on this query, and web_search confirms no India-specific comparison content exists from
anyone yet (only global/US listicles). This is a clean, gate-qualifying WRITE opportunity — queued
as SEO-015. Search volume for the exact keyword was not independently measured this session (no
keyword-volume connector available) — flagged rather than estimated as fact; the revenue estimate
attached uses this session's own blended organic CVR/AOV instead of an invented volume number.

**CONFIRMED — AEO gap on "earphones hurting ears what to do":** Shokz owns a direct-answer blog
for this exact query; NG is absent. NG's highest-click blog page (`can-headphones-cause-vertigo`,
2,379 impr/39 clicks/1.64% CTR this pull) is the best host for a 6+Q FAQPage fix — queued as
SEO-016.

**NEW SIGNAL — NG's own pages are starting to surface in organic web results for two AEO
queries** ("bone conduction headphones side effects" and "open ear vs in ear headphones") where
prior cycles (06-27, 07-03) showed total absence. This is presence in organic search, not a
confirmed AI-Overview/answer-engine citation — do not conflate the two. Worth re-checking at the
next 14-day AEO cycle (2026-08-03) to see if organic presence has translated into any citation
signal.

**FLAG — SEO-009 (GA4 revenue vs GSC clicks) persists at a different magnitude:** GA4 organic 30d
revenue is ₹3,53,310 (138 txn, 6,592 sessions) — below the ₹9.5L 30-day target and the ~₹7.5L
baseline, while GSC clicks (2,377/30d) are up ~21% vs the ~1,963/mo baseline. Same
attribution-not-demand-collapse read as prior cycles; still unreconciled. Flagged again, not
decided.

**FLAG — SEO-005 (earplug cluster) unchanged:** 16 pages, 18,528 impressions, 56 clicks, 0.30%
CTR — still below site average (1.41%) and still a confirmed authority drag. "do earplugs work":
1,267 impressions, 0 clicks, pos 3.39. Founder decision still pending; not decided by this agent.

**PENDING — July rewrites (SEO-001/002/003/007/008):** Still inside the too-early window. First
valid 30-day read remains 2026-07-31 (11 days out from this cycle). Not credited or rejected here.

**Methodology note carried forward:** this cycle's branded/non-branded split (query contains
"earsafe"/"ear safe", or starts with "ng ") is broader than the 07-03 cycle's exact-substring
method, producing 0.73% non-branded CTR vs the prior 0.91% anchor on a different (30d vs 28d)
window. Treat as a second anchor point, not a regression — do not compare the two directly in
future cycles without re-noting the method difference.

**Next sprint change triggered:** SEO-013 (Pro Swimming CTR-FIX, new — largest disease-band page),
SEO-014 (WFH harmonization, 3rd re-surface), SEO-015 (Shokz-alternatives WRITE brief, new cluster
gap), SEO-016 (vertigo-page AEO FAQ expansion, new). SEO-005 and SEO-009 re-flagged, still
undecided. SEO-001/002/003/007/008 remain PENDING-READ until 2026-07-31.

---

## SCALE HYPOTHESIS BACKLOG (per COMPANY_STATE §5.5 — test → validate → scale)

> Falsifiable bets on what wins clicks + AEO citations. Scale bar: non-branded CTR + position trend up on the target cluster, AEO citation captured. A confirmed pattern gets rolled across the cluster; a rejected one is retired.

| # | Hypothesis (metric + threshold) | Test (smallest move) | Status | Linked queue |
|---|---|---|---|---|
| SH-SEO-1 | Adding an 8-Q FAQPage schema to high-impression health-scare pages wins AEO citations and lifts CTR toward 3% within 30–60 days. | Ship SEO-007 (vertigo) + SEO-003 (comparison) schema, recheck CTR + AI citation at 30/60 days. | OPEN — pattern test; roll across cluster if confirmed. | SEO-007, SEO-003, SEO-002 |
| SH-SEO-2 | "India 2026 + price/use-case" front-loaded titles lift CTR on top-10 CTR-disease pages without hurting position. | Ship SEO-001/004/008 rewrites, read CTR + pos at 28 days. | OPEN. | SEO-001, SEO-004, SEO-008 |
| SH-SEO-3 | With Comm 2.0 stock cleared, adding Comm 2.0 as a primary CTA on WFH/commercial pages lifts SEO→D2C conversion without harming rankings. | Add Comm 2.0 CTA to SEO-004/006 pages, watch assisted conversions. | OPEN — newly unblocked by CEO stock clearance 2026-06-27. | SEO-004, SEO-006, CSO-001 |
| SH-SEO-4 | A dedicated India-focused "Shokz alternatives" comparison page can capture organic share of a cluster NG currently has zero presence in, within 60 days of publish. | Ship SEO-015, read GSC rank for "shokz alternatives india" + related long-tail at 30/60 days. | OPEN — new this cycle. | SEO-015 |
| SH-SEO-5 | Adding a direct-answer FAQPage block for adjacent pain-point queries ("earphones hurting ears") to an already-authoritative page (vertigo blog) wins AI-answer consideration faster than a new standalone page would. | Ship SEO-016, recheck AEO citation proxy at 14 days (2026-08-03). | OPEN — new this cycle. | SEO-016 |
