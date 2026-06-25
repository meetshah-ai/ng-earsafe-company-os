# SKILLS MATRIX — what each department agent can do

> **Draft v1 · 2026-06-25.** Every department is a *different* skill set, not a generic assistant. A "skill" here = a named, reusable capability the department agent invokes to do its job — each tied to the connectors it needs and grounded in work this company has actually requested and done (sourced from the memory graph).
>
> **Status legend:** 🟢 proven (done, with results in memory) · 🔵 in-use (active, results pending) · ⚪ proposed (logical next, not yet run).
> **Maturity → automation:** proven skills are candidates to wrap as Claude Code Skills / slash commands and put on the standup/deep-loop cadence. Proposed skills stay human-driven until proven once.

This matrix is read by `/new-department` (to pre-load a department's skills) and by the orchestrator (to know which department owns a capability). Update a skill's status from the `learning-log.md` of the owning department.

---

## SHARED SKILLS (every department inherits these)
| Skill | What it does | Tools |
|---|---|---|
| `pull-live-metrics` | Read current performance for the lane (read-only) | Windsor.ai, Porter, Shopify, GA4, GSC, Meta Ads |
| `draft-to-queue` | Write a proposed action into `APPROVALS_QUEUE.md` with rationale + data-basis + risk | Files |
| `run-learning-loop` | Log hypothesis → result → learning to `learning-log.md`; reprioritize `tracker.md` | Files |
| `respect-gates` | Check a draft against `COMPANY_STATE.md` §5 cross-department gates before queuing | Files |

---

## 1. INSTAGRAM CONTENT — `instagram-content`  *(live · organic social + daily trend test)*
*Grounded in: `[[ng-earsafe-content-strategy]]`, `[[ng-earsafe-products-tribes]]`, `[[ng-earsafe-learning-loop]]`, `[[ng-earsafe-account-status]]`, `[[ng-creative-tooling-rules]]`, `[[ng-video-generation-rules]]`, `[[ng-product-image-rule]]`, `[[ng-gdrive-asset-library]]`, brand guidelines.*

| Skill | What it does | Status | Tools |
|---|---|---|---|
| `trend-radar` | Daily scan of what's trending in India *today* (audio, formats, memes, news/sport/regional moments) | 🔵 | WebSearch, Porter |
| `7day-rideability` | Identify last-7-day trends still rideable (audio climbing, format unsaturated, moment live) vs past-peak | 🔵 | WebSearch |
| `trend-to-hook` | Convert a trend into hooks that ride it AND land a brand/category-awareness beat; tag `[brand]`/`[category]` | 🔵 | Files |
| `sprint-calendar` | Build a 14-day content calendar — tribe, format, caption mode, sell stage, hypothesis per post | 🟢 | Files |
| `caption-craft` | Captions in the 5 modes (Observer/Nudge/Scene/Wit/Declaration), correct anatomy + hashtags, native regional registers | 🟢 | Files |
| `higgsfield-visual` | Brand-correct visuals from the §08 prompt base — real product photo only, never AI-generate the device | 🟢 | Higgsfield |
| `video-motion-brief` | Reel prompts with mandatory natural-human-motion language (no robotic/slow) | 🟢 | Higgsfield |
| `canva-overlay` | Text/overlay/carousel/static composition (Canva only — no Python for creatives) | 🟢 | Canva |
| `ig-algorithm-fit` | Choose format/timing/audio for the saves→shares→comments signal hierarchy | 🔵 | Porter |
| `reactive-radar` | Spot a cultural moment, draft a 48-hr reactive post | 🔵 | WebSearch |
| `tribe-experiment` | One labelled experiment/sprint with a stated hypothesis vs baseline | 🔵 | Files |

## 2. SEO / AEO — `seo-aeo`  *(live)*
*Grounded in: `[[ng-seo-aeo-task-tracker]]`, `[[ng-seo-aeo-baseline]]`, `[[ng-seo-aeo-learning-log]]`, `Q3_2026_Content_Calendar_Automation.md`.*

| Skill | What it does | Status | Tools |
|---|---|---|---|
| `rank-gap-audit` | Audit NG positions + CTR vs competitor SERP rankings; surface rewrite/gap/AEO opportunities | 🔵 | GSC/Windsor, WebSearch |
| `competitor-serp-scan` | Read who out-ranks NG on money keywords + their content angle | 🔵 | WebSearch, WebFetch |
| `ctr-rewrite` | Find pos 4–10 / high-impression-low-CTR pages, rewrite title+meta | 🟢 (done Jun 2, results pending) | GSC, Shopify |
| `blog-cta-install` | Add contextual CTAs to high-traffic 0-revenue blog pages | 🟢 | Shopify |
| `collection-authority` | H1 + copy + FAQPage schema + internal links to lift collection rank | 🟢 | Shopify |
| `product-schema` | aggregateRating/offers/availability schema for rich snippets | ⚪ | Shopify |
| `content-brief-gen` | Generate keyword-led content briefs (volume, position, intent, H2s, links, schema, CTA) | 🔵 | GSC, WebSearch |
| `content-calendar-exec` | Run the 13-article Q3 calendar via status triggers | 🔵 | Shopify, GSC |
| `aeo-citation-monitor` | Check ChatGPT/Perplexity/Google AIO citation on target queries every 14 days; draft AEO fixes | 🔵 | WebSearch |
| `keyword-movement-track` | 30-day keyword/position/CTR pulls, log movement | 🔵 | GSC, Windsor.ai |

## 3. GOOGLE ADS — `google-ads`
*Grounded in: `[[ng-google-ads-task-tracker]]`, `GoogleAds_Search_IS_Rank_Optimization.md`, `GoogleAds_Conversion_Tracking_Task.md`, `GoogleAds_Measurement_Incrementality_Plan.md`.*

| Skill | What it does | Status | Tools |
|---|---|---|---|
| `conversion-tracking-fix` | Fix tracking to Purchase-only before scaling (P0) | 🔵 | GA4, Google Ads |
| `negative-keyword-prune` | Build/maintain exact negative lists to kill junk traffic | 🟢 | Google Ads |
| `campaign-restructure` | Rebuild fragmented spend into clean campaigns w/ budgets | 🔵 | Google Ads (write→gated) |
| `feed-title-optimize` | Rewrite Merchant Center feed titles for Shopping | 🔵 | Shopify, Google Ads |
| `is-rank-analysis` | Diagnose impression-share lost to rank vs budget | 🟢 | Google Ads |
| `incrementality-test` | Design geo/holdout measurement of true lift | ⚪ | Google Ads, GA4 |

## 4. META ADS — `meta-ads`  *(live · competitor teardown + paid)*
*Grounded in: `[[ng-meta-ads-performance]]`, `[[ng-paid-marketing-performance-jan-may26]]`, `safebuds_*.csv`, `c2_*` files.*

| Skill | What it does | Status | Tools |
|---|---|---|---|
| `competitor-ad-teardown` | Pull Shokz/boAt/Noise/wecool (+Mojawe/Oladence) ads from Meta Ad Library; classify content/caption/format/hook/offer/longevity; recommend NG counter-actions | 🔵 | Meta Ads `ads_library_search`, WebSearch |
| `creative-format-lock` | Enforce review/explainer format (only converter); kill feature/UGC/static | 🟢 | Meta Ads |
| `roas-decay-watch` | Flag frequency >2.5× / CPP climb; trigger creative rotation | 🟢 | Meta Ads, Windsor.ai |
| `audience-expansion` | LAL 1%→3–5% to fight saturation | 🔵 | Meta Ads (write→gated) |
| `creative-rotation` | Brief new review-style creative every 4–6 weeks (hands brief to instagram-content/Higgsfield) | 🔵 | Higgsfield, Canva |
| `catalog-dynamic-ads` | Maintain catalog/product-set health for DPA | ⚪ | Meta Ads, Shopify |
| `winner-scale` | Scale proven creatives (e.g. 3D-Feature-Lite) within budget | 🔵 | Meta Ads (write→gated) |

## 5. CRO / PRODUCT PAGES — `cro`
*Grounded in: `[[ng-product-page-cro]]`, `SafeBuds_LP.html`, `SafeBuds_Shopify/` theme.*

| Skill | What it does | Status | Tools |
|---|---|---|---|
| `funnel-diagnosis` | GA4 views→ATC→checkout→purchase teardown per product | 🟢 | GA4, Shopify |
| `lp-build` | Build/iterate landing pages (image_picker workflow, never asset_url) | 🟢 | Shopify, Files |
| `utm-attribution-fix` | Repair broken UTM/GA4 discrepancy (138× Meta gap) | 🔵 | GA4, Shopify |
| `checkout-friction-cut` | Reduce same-day-buyer friction (87.6% decide same day) | ⚪ | Shopify |
| `whatsapp-cart-recovery` | Abandoned-cart recovery via WhatsApp (highest CVR channel) | ⚪ | Bitespeed |

## 6. CX / SUPPORT — `cx`
*Grounded in: `[[ng-cx-support-context]]`, `CX_Support_Scripts.md`, `CX Team/` transcripts.*

| Skill | What it does | Status | Tools |
|---|---|---|---|
| `support-scripting` | Channel-correct chat/email scripts, CX voice, do-not-say list | 🟢 | Files |
| `open-ear-education` | Explain open-ear/fit/sound before accepting a return | 🟢 | Files |
| `call-transcript-mine` | Transcribe + mine support calls for product/CX signal | 🟢 | (transcription) |
| `escalation-routing` | Apply escalation rules; flag warranty/defect patterns | 🔵 | Files |
| `query-pattern-feedback` | Feed recurring queries back to CRO/Content as content gaps | ⚪ | Files |

## 7. CFO / FINANCE — `finance`
*Grounded in: `[[ng-cfo-cashflow-analysis]]`, `[[ng-supply-chain-map]]`, `CFO/` workbooks.*

| Skill | What it does | Status | Tools |
|---|---|---|---|
| `verified-cashflow` | Override-first cashflow from verified txn file; real op-revenue vs financing plug | 🟢 | CFO xlsx |
| `12mo-forecast` | Scenario forecasts vs revolver/EBITDA-floor survival | 🟢 | CFO xlsx |
| `working-capital-model` | Model Amazon D+10 + Earkart revolving + supplier terms | 🟢 | Files |
| `margin-guard` | Check any plan against the 5–6% EBITDA floor | 🔵 | CFO xlsx |
| `unit-economics` | Per-SKU/per-channel contribution + CAC gates | 🔵 | GA4, Shopify, CFO xlsx |

## 8. B2B / CORPORATE — `b2b`
*Grounded in: `B2B_Cold_Outreach_Targets.md` (12 tiers), CSO Initiative 8.*

| Skill | What it does | Status | Tools |
|---|---|---|---|
| `tier-target-list` | Maintain 12-tier prospect directory + decision-makers | 🟢 | Files |
| `cold-outreach-seq` | Draft tiered cold email variants + follow-up sequence | 🟢 | Gmail (send→gated) |
| `bulk-pricing-quote` | Build bulk/corporate pricing for Comm 2.0 WFH wellness | 🔵 | Files |
| `linkedin-bd` | 20/day LinkedIn outreach drafts | ⚪ | WebFetch |

## 9. INTERNATIONAL (UAE) — `international`
*Grounded in: `[[ng-uae-market-context]]`, `UAE_*.html`, `UAE_GoLive_Tasklist.md`.*

| Skill | What it does | Status | Tools |
|---|---|---|---|
| `market-test-design` | D2C demand test w/ pass/fail thresholds (CPP/CVR gates) | 🟢 | Files |
| `geo-lp-build` | Localized LPs + geo-selector, AED pricing | 🟢 | Files, Shopify |
| `intl-shipping-config` | Resolve shipping-zone gaps for new geos | 🔵 | Shopify |
| `competitor-map` | Meta Ad Library competitor scan per market | 🔵 | Meta Ads |

## 10. CHIEF OF STAFF / ORCHESTRATION — `chief-of-staff`
*Grounded in: `[[ng-cso-master-context]]`, `[[ng-founder-strategy-north-star]]`.*

| Skill | What it does | Status | Tools |
|---|---|---|---|
| `daily-standup` | Cross-department metric pull, gate reconciliation, queue drafts | 🔵 | all read connectors |
| `weekly-deep-loop` | Dispatch each department's learning loop, roll up learnings | 🔵 | Agent dispatch |
| `dependency-reconcile` | Catch cross-lane conflicts (stock-before-demand, channel balance) | 🟢 | Files |
| `north-star-check` | Judge every queued item against the FY27 target | 🟢 | Files |
| `approval-routing` | Move queue↔decision-log; never executes writes itself | 🔵 | Files |

---

## How to grow this matrix
1. A department proposes a skill (⚪) when a recurring need appears in its `tracker.md`.
2. Run it once human-driven; log the result in `learning-log.md`.
3. If it works, promote to 🟢 and consider wrapping it as a Claude Code Skill or slash command.
4. The orchestrator may reassign a skill if two departments contend for the same capability (single owner per skill).
