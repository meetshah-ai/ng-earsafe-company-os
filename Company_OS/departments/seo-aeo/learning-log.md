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
- Rank gains do not automatically convert to clicks — position can beat target while CTR on the
  same query falls (confirmed again 2026-07-27: "open ear headphones" pos 8.59 vs 8.64 prior, CTR
  0.29% vs 0.61% prior). CTR-FIX work is the lever, not rank alone.
- **WebFetch silently strips `<script>` tags — it will false-negative on any JSON-LD/schema check.**
  Confirmed repeatedly (SEO-002 07-03, SEO-011/013 07-21). Never conclude "schema missing" from a
  WebFetch read; use raw `curl` or a Rich Results Test. This single tool limitation produced two
  false-premise queue rows (SEO-011's "4 SKUs missing schema" and SEO-013's "still missing Product
  JSON-LD") before it was diagnosed.
- **Any `/execute-approved` run must commit+push tracker.md/queue-inbox.md/learning-log.md in the
  same session.** Local-only status updates are invisible to the managed agent, which reads only
  GitHub — see the 2026-07-27 sync-gap entry below for what happens when this is skipped (three
  cycles of a fixed page getting re-flagged as broken).

## KEYWORD MOVEMENT LOG (update each 30-day pull)
| Date | Keyword | Position before | Position after | CTR before | CTR after | Note |
|---|---|---|---|---|---|---|
| _seed_ | "open ear headphones" | 12.0 | — | — | — | target pos 5 |
| 2026-07-20 | "open ear headphones" | 8.7 (06-27) | 8.64 | 1.01% | 0.61% | Position now beats the 9.0 30-day target; CTR did not follow — clicks lag rank gains. |
| 2026-07-27 | "open ear headphones" | 8.64 (07-20) | 8.59 | 0.61% | 0.29% | Position still beats target; CTR fell again, on a very small slice (1,025 impr/3 clicks). Confirms the standing pattern, not a new signal. |
| 2026-07-20 | best-noise-canceling-headset-for-wfh (page) | 5.36 (07-03) | 6.31 | 0.13% | 0.08% | 3rd straight cycle of decline (4.06→5.36→6.31); re-queued SEO-014. |
| 2026-07-27 | best-noise-canceling-headset-for-wfh (page) | 6.31 (07-20) | 8.34 | 0.08% | 0.10% | 4th straight cycle of decline (4.06→5.36→6.31→8.34); impressions down 65% since 06-27 (2,873→993). Re-queued SEO-018, urgency escalated. |
| 2026-07-27 | Pro Swimming PDP (page, CTR-disease) | pos 4.16 / 30,935 impr (07-20) | pos 4.19 / 50,904 impr | 1.32% | 0.96% | Impressions +64.6% w/w, CTR fell — visibility growing faster than conversion. SEO-013 still unexecuted; re-queued as SEO-017. |

## AEO CITATION LOG (update each 14-day check)
| Date | Query | NG named? | Article cited? | Engine |
|---|---|---|---|---|
| _seed_ | "are open ear headphones safe" | — | — | ChatGPT/Perplexity/Google AIO |
| 2026-07-20 | "best open ear headphones india" | No (own page now surfaces in organic web results, not confirmed as AI-cited) | No | web_search proxy |
| 2026-07-20 | "are open ear headphones safe" | No | No | web_search proxy — clean Shokz/Soundcore/KingLucky sweep |
| 2026-07-20 | "earphones hurting ears what to do" | No | No | web_search proxy — Shokz owns a direct-answer blog for this exact query; used to ground SEO-016 |
| 2026-07-20 | "bone conduction headphones side effects" | No (own page surfaces in organic results now) | Page present, citation unconfirmed | web_search proxy |
| 2026-07-20 | "open ear vs in ear headphones" | No (own page surfaces in organic results now) | Page present, citation unconfirmed | web_search proxy |
| 2026-07-27 | "best open ear headphones india" | No change — own `/collections/best-sellers` and `/collections/open-ear-headphones` both surface, still not a confirmed AI citation | No | web_search proxy |
| 2026-07-27 | "are open ear headphones safe" | No — unchanged | No | web_search proxy — Shokz dedicated article + Soundcore (2 articles) + Baseus + King Lucky; used to ground SEO-020 |
| 2026-07-27 | "earphones hurting ears what to do" | No — unchanged | No | web_search proxy — Shokz now confirmed running *two* separate articles on this query; SEO-016 still unexecuted |
| 2026-07-27 | "bone conduction headphones side effects" | No change — own page still surfaces ~5th of 10 | Page present, citation unconfirmed | web_search proxy |
| 2026-07-27 | "open ear vs in ear headphones" | **Regressed** — own page did NOT surface in this cycle's top-10 (did in 07-20); GSC page position (6.28) unchanged, so likely SERP-snapshot volatility not a real drop. Re-check 2026-08-03. | No | web_search proxy |

## REJECTED / DEAD ENDS
- **Assuming a local `/execute-approved` session's file updates reach the managed agent
  automatically — REJECTED 2026-07-27.** They don't; the agent only ever sees what's on GitHub.
  Three human-approved-and-shipped fixes (SEO-013/014/016, plus the OpenWire title swap and the
  PDP structural change) got silently re-flagged as unaddressed for a full cycle because the local
  updates to tracker.md/queue-inbox.md were never committed+pushed. See the 2026-07-27 sync-gap
  postmortem cycle entry for the full account. Always push after `/execute-approved`.

---

## CYCLE LOG (most recent first)

### 2026-07-27 — Sync-gap postmortem: three cycles of duplicate drafts, root cause + fix

**What happened:** `/execute-approved` sessions on 2026-07-21 and 2026-07-22 executed SEO-013
through SEO-019 live (5 Shopify writes + 1 structural doc change), and updated
`APPROVALS_QUEUE.md`, `DECISION_LOG.md`, `tracker.md`, `queue-inbox.md`, and this file locally —
but those file changes were never committed and pushed to GitHub. The managed agent reads only
`tracker.md` + `learning-log.md` from GitHub (by design, for token discipline) — it had no way to
know any of that work happened. Its 2026-07-27 run, working from a tracker that still said "start
at SEO-013," drafted new content and mislabeled it SEO-017 through SEO-020. Three of those four
collided with IDs already used by real, executed work: SEO-017 (draft: re-do the Pro Swimming
CTR-FIX, real: internal links into the Shokz article), SEO-018 (draft: re-do the WFH harmonization,
real: the OpenWire title swap), SEO-019 (draft: re-write the Shokz Alternatives article, real: the
PDP Cluster Tracker structural change). The SEO-017 draft, if approved at face value, would have
shipped a **duplicate, conflicting Product JSON-LD block** — a real regression risk, not just
wasted effort.

**Root cause:** a broken feedback loop, not an agent error. The agent followed its instructions
correctly given what it could see; the instructions correctly say never to read
`APPROVALS_QUEUE.md`/`DECISION_LOG.md` (token discipline, by design); but nothing enforced that a
human `/execute-approved` session pushes its tracker/queue-inbox/learning-log updates back to
GitHub before the next scheduled agent run. Three weekly cycles' worth of real execution history
(07-21, 07-22, and this file's own missing entries) sat local-only until this correction found it.

**Fix applied this session:** `tracker.md` corrected (SEO-013/014/015/016/017/018/019 marked
executed, not queued; the three 07-27 duplicate drafts marked VOID with the reason);
`queue-inbox.md` corrected the same way, with VOID rows kept (not deleted) so the ID collision is
visible in history, never reused; `constitution.md` §3a (PDP tracker) and `seo-aeo.agent.yaml`
(PDP OUTPUT section, ID-sequence comments) brought in from where they'd been sitting uncommitted;
`APPROVALS_QUEUE.md`/`DECISION_LOG.md` pushed in full (they were stale for every department, not
just this one, since 2026-07-13).

**Process learning carried forward:** any `/execute-approved` run touching a managed-agent
department must commit+push that department's tracker.md/queue-inbox.md/learning-log.md (and the
shared APPROVALS_QUEUE.md/DECISION_LOG.md rows) in the same session, before the next scheduled
agent run. A local-only execution is invisible to every automated agent and will get silently
re-flagged as unaddressed within one cycle. Treat "did I push?" as part of the execution checklist,
not an afterthought.

**Next sprint change triggered:** none new — this cycle is corrective, not additive. SEO-020
(the one genuine new item from 07-27) carries forward unchanged.

---

### 2026-07-27 — Weekly managed-agent cycle: GSC + GA4 direct-API pulls, 5 AEO checks + 1 competitor-SERP check

**Initiative:** Second run under the Monday 08:00 IST managed-agent cadence, and the first cycle
where both GSC and GA4 are confirmed direct-API pulls (GA4 moved off Windsor on 2026-07-22).
Window 2026-06-27→2026-07-26 (30d). GSC: OAuth token exchange + paginated Search Analytics
returned 15,424 query×page rows (no truncation, single page under the 25,000 cap). GA4: OAuth
token exchange + Data API `runReport` returned 1,857 rows, `len(rows)==rowCount` asserted (no
truncation). All page/query/branded/landingPage breakdowns reconciled to their parent totals in
code (asserted, no mismatches).

**CONFIRMED — rank gains still not converting to clicks, and it's spreading:** "open ear
headphones" position (8.59) again beats the 9.0 target, but CTR on it fell again (0.61%→0.29%).
Site-wide, non-branded CTR fell too (0.73%→0.69%, same classification method as the 07-20 anchor
— a real 0.04pp decline, not a methodology artifact). This is now a two-cycle trend, not a
one-off.

**CONFIRMED — the Pro Swimming CTR-FIX (SEO-013) is more urgent, not less, for having waited:**
impressions on `/products/...-pro-swimming` grew 64.6% week-on-week (30,935→50,904) while CTR
fell (1.32%→0.96%). The page remains 42.5% of the entire 45-page CTR-disease band. SEO-013 has
sat unexecuted a full cycle with zero action taken; re-queued as **SEO-017** with updated,
larger numbers (+1,037 clicks/mo upside now vs +519 last cycle).

**CONFIRMED — SEO-004/012/014 (WFH page) has now declined for a 4th consecutive cycle:**
4.06 (06-27) → 5.36 (07-03) → 6.31 (07-20) → 8.34 (07-27); impressions down 65% since 06-27
(2,873→993). Re-queued a 4th time as **SEO-018** — this is the longest unaddressed slide on the
tracker and continues to sit on a known, low-risk, reversible fix.

**CONFIRMED — Shokz-conquest cluster gap persists a 2nd cycle:** "shokz alternatives" (contains)
still returns 0 rows in a 15,424-row pull. Re-queued as **SEO-019** with a revised revenue
estimate using this cycle's blended organic CVR (2.19%) and AOV (₹2,377.51).

**CONFIRMED — new AEO gap, "are open ear headphones safe":** NG completely absent; Shokz runs a
dedicated article, Soundcore runs two, plus Baseus and King Lucky. NG's own
`are-bone-conduction-headphones-safe` page is effectively unranked (pos 43.70, 183 impr, 0
clicks) — the best host for a direct-answer + FAQPage fix, queued as **SEO-020**.

**UNCHANGED — "earphones hurting ears what to do" (SEO-016, still unexecuted):** Shokz now
confirmed running *two* separate articles targeting this exact query (uk.shokz.com and
shokz.com). NG remains absent. Not re-drafted this cycle (already queued); flagged as
increasingly costly to leave unexecuted given Shokz's growing footprint on this query.

**NEW SIGNAL — "open ear vs in ear headphones" AEO organic-presence regressed:** NG's page
surfaced in the 07-20 web_search check but did not appear in this cycle's top-10 (Bose, Soundcore,
Forbes, Shokz, Lobkin, Skullcandy, Avantree dominate instead). The underlying GSC page position
(6.28, 14,105 impr) has not collapsed, so this reads as SERP-snapshot volatility rather than a
real ranking loss — re-check at the next 14-day AEO cycle (2026-08-03) before drawing a
conclusion.

**FLAG — SEO-009 (GA4 revenue vs GSC clicks) — smaller gap this cycle:** GA4 organic revenue
(₹3,66,136, +3.6% w/w) and GSC clicks (2,449, +3.0% w/w) moved in tandem this cycle, a smaller
divergence than prior cycles, but GA4 revenue remains well under the ₹9.5L 30-day target. Still
flagged, still not decided by this agent.

**FLAG — SEO-005 (earplug cluster) roughly unchanged:** 16 pages, 17,083 impr, 44 clicks, 0.26%
CTR this cycle (vs 18,528 impr/56 clicks/0.30% CTR last cycle) — still a confirmed authority drag,
still below site average (1.33%). Founder decision still pending; not decided by this agent.

**PENDING — July rewrites (SEO-001/002/003/007/008):** Still inside the too-early window. First
valid 30-day read remains 2026-07-31 (4 days out from this cycle). Not credited or rejected here.

**Next sprint change triggered:** SEO-017 (Pro Swimming CTR-FIX, escalated from SEO-013 with
larger numbers), SEO-018 (WFH harmonization, 4th re-surface, escalated urgency), SEO-019 (Shokz-
alternatives WRITE brief, 2nd confirmation), SEO-020 (new AEO fix — "are open ear headphones
safe" via the dormant bone-conduction-safety page). SEO-005, SEO-009, and SEO-016 re-flagged,
still undecided/unexecuted. SEO-001/002/003/007/008 remain PENDING-READ until 2026-07-31.

---

### 2026-07-22 — Structural: PDP cluster tracking added (SEO-019); two corrections superseded

**Initiative:** Traced why OpenWire's OW-001 sat `pending` for three weeks despite the work
shipping (via CRO-014), and why its "possible duplicate PDP" flag was never closed. Root cause: no
keyword cluster or PDP-level tracking existed for OpenWire (or any non-"category" product), so
nothing triggered a weekly look at it. Added PDP-level cluster tracking for OpenWire, Comm 2.0,
SafeBuds, ES Lite to `constitution.md` §3a and the agent yaml (SEO-019) — see
`APPROVALS_QUEUE.md`/`DECISION_LOG.md` SEO-019 for full detail. Also executed **SEO-018**: rewrote
the OpenWire PDP's title tag to the OW-001 spec ("Open Ear Wired Earphones with Mic (Type-C) | NG
EarSafe OpenWire") — the one piece of OW-001 that had never landed.

**CONFIRMED — the duplicate-PDP flag was a false alarm.** `/products/ng-earsafe-openwire` carries
a real, working `301` to the canonical `/products/open-ear-headphones-wired-ng-earsafe` (verified
via `curl -D-`, not just WebFetch, which silently follows redirects and had made it look like two
live pages). No action needed; tracker.md's flag is closed.

**SUPERSEDING NOTE — the 2026-06-27 cycle-2 entry mischaracterized "wehear" as an irrelevant OEM/
competitor query.** That entry read: *"'wehear' query: 1,016 impressions, 1 click. WeHear is the
SafeBuds OEM... competitor brand searches that NG accidentally ranks for. Not a priority to
optimize."* Correction (Meet, 2026-07-22): WeHear is NG's own co-brand partner — the product is
sold as "NG x WeHear SafeBuds" — so "wehear" is an owned/branded-adjacent query, not a competitor
term. Do not deprioritize it as accidental; track it as part of the SafeBuds PDP cluster going
forward. The original entry is left in place per the never-delete rule; this note supersedes its
conclusion.

**Next sprint change triggered:** first dedicated GSC pull for all 4 PDP clusters (OpenWire, Comm
2.0, SafeBuds, ES Lite) — was meant for the 2026-07-27 managed-agent cycle but the spec update
wasn't pushed in time (see the 2026-07-27 sync-gap postmortem at the top of this log); now due
2026-08-03.

---

### 2026-07-21 — Execution wrap: SEO-013/014/015/016/017 all shipped live

**Initiative:** `/execute-approved` ran on the five SEO-013…016 rows approved 2026-07-20, plus
SEO-017 (internal links) approved the same day it was drafted. All five executed successfully;
one (SEO-011, product schema) halted on a disproven premise.

**EXECUTED — SEO-013 (Pro Swimming PDP CTR-FIX).** Shopify `productUpdate` on Product
9035015258391. `seo.title` → "NG EarSafe Pro Swimming — Waterproof Bone Conduction Headphones
India 2026"; `seo.description` → IP68/price/ENT meta, 154 chars. **JSON-LD half NOT executed —
premise false.** Raw-HTML inspection (curl, not WebFetch) found the PDP already serves complete
Product JSON-LD (aggregateRating 3.78/122, offers ₹4,999 InStock) — a second block would have
created duplicate conflicting schema. Read plan: D+30 (2026-08-19).

**EXECUTED 2026-07-20 — SEO-014 (WFH page harmonization).** Shopify Article 751516680471,
`articleUpdate`, exact strings in `SEO-014_execution_spec.md`. H1 harmonized to the live
`title_tag`, 2 visible Q&As appended, 6-Q FAQPage JSON-LD block appended. `title_tag`/
`description_tag` deliberately NOT touched. Baseline at execution: 1,296 impr, 1 click, 0.077%
CTR, pos 6.31 — third consecutive worsening cycle. First valid read: 2026-08-19.

**EXECUTION LEARNING — Shopify article body preserves `<script type="application/ld+json">`.**
The JSON-LD block was written as part of `article.body` via `articleUpdate` and survived the
sanitizer intact on post-write re-query. Cheapest schema-injection path for blog articles — no
theme edit needed. Companion regression check now standard: re-query `metafields(namespace:
"global")` after any article mutation and confirm `title_tag`/`description_tag` are byte-identical.

**⚠️ OPEN FLAG raised during SEO-014 execution (NOT actioned, still needs its own row).** The
`description_tag` promises "the honest WFH headset comparison for Indian professionals — with a
clear pick for every use case." The body delivers no comparison: no competitor named, no pricing,
no use-case matrix. Plausibly a **larger** relevance drag than the H1 mismatch SEO-014 fixed —
which would explain why position kept falling for a 4th cycle even after the fix landed (see the
2026-07-27 entries above). Deliberately kept OUT of SEO-014 to keep the D+30 read clean on the H1
variable. Still unassigned as of 2026-07-27 — highest-priority next draft.

**PUBLISHED 2026-07-21 — SEO-015 ("Shokz Alternatives in India (2026): An Honest Comparison").**
New article, Shopify Article 753805951255, `/blogs/open-ear-headphones/shokz-alternatives-india`,
~2,500 words, 7 visible Q&As + matching FAQPage JSON-LD, comparison table, internal links to Pro /
Comm 2.0 / Lite / OpenWire PDPs. Full copy in `SEO-015_execution_spec.md`. First NG conquest
content targeting the Shokz cluster, where NG previously had zero presence. First valid read:
2026-08-19 — judge on indexation and first impressions, NOT revenue (the ₹1.9L/yr projection is
explicitly ungrounded, no keyword-volume connector).

**EXECUTION LEARNING — verify competitor pricing against the marketplace, never an aggregator.**
The first draft was built on Smartprix figures that turned out wrong/speculative. Direct WebFetch
of Amazon.in is blocked (503/500 anti-bot). **Working path: Porter
`seo.merchant_amazon_products_live_advanced`** (keyword + `location_name: "India"`; rejects
`language_code`). Reusable for any future competitor-price content.

**NEW SIGNAL — the Shokz/NG price ranges do not overlap.** Amazon.in 2026-07-21: Shokz spans
₹9,999–₹18,999; NG spans ₹799–₹4,999. NG is not a cheaper Shokz, it is a different market —
reframes NG-vs-Shokz positioning beyond SEO (relevant to meta-ads, amazon, CRO messaging).

**⚠️ CROSS-LANE FINDING — belongs to the amazon lane, not actioned here.** Same pull: NG EarSafe
Lite already ranks #7 organically on the keyword "shokz" on Amazon.in (ASIN B0CYLBDFZ5, ₹1,999,
3.5★/491 reviews) — winning Shokz-conquest traffic on Amazon while ranking nowhere for it on
Google. Needs a proper read by the amazon agent.

**EXECUTED 2026-07-21 — SEO-016 (vertigo blog AEO FAQ expansion).** Article 751492890903,
`articleUpdate`. **Merged into the existing 6-Q FAQPage block (→10 questions), not appended as a
second block** — the page already carried a block from SEO-007, and a second `FAQPage` risks
Google discarding both. Also added a direct-answer "Short answer:" opening paragraph. Post-write
verification: body SHA256 byte-identical to intended, exactly 1 FAQPage block, 10 questions in
schema, 10 visible `<h3>` Q&As. Read plan: D+14 (2026-08-03) AEO citation re-check.

**EXECUTED 2026-07-21 — SEO-017 (internal links into the new Shokz-alternatives article).** All 3
inbound links live: bone-conduction collection, Pro PDP (as a new paragraph — the description was
a bare spec table with no prose to link from), vertigo blog. ⚠️ Self-caught regression: the first
vertigo write dropped `;font-weight:600` from the CTA headline style (hand-transcription error in
a 20KB body) — caught by a post-write SHA diff, repaired, re-verified byte-exact. **Learning:
never hand-transcribe a large body — generate it programmatically and gate every full-body write
on a pre-computed SHA.** Read: D+14 (2026-08-04) index check, D+30 (2026-08-19) with SEO-015.

**HALTED — SEO-011 (product schema, 4 SKUs), premise disproven.** Basis rested on a WebFetch
check; WebFetch strips `<script>` tags. Raw-HTML (curl) inspection of all 4 PDPs found Comm 2.0,
Pro, and ES Lite already carry live, accurate Product JSON-LD. **Only `/products/ngwehear`
(SafeBuds) genuinely lacks it** — 1 of 4, not 4. Blocked on an unresolved review-rating source
(Judge.me 4.67★/3, Audien metafield 4.9★/17, Ryviu another figure all disagree) and a
rendering-path gap (the metafield that would carry it is dead, unrendered by the theme). Needs a
founder call before re-queueing as a SafeBuds-only row.

**CROSS-DEPT — CEO price-accuracy directive (2026-07-21), touches SEO-tracked pages.** Meet
directed a same-day fix of every stale price string across live pages (Pro ₹4,999, Comm 2.0
₹3,499, ES Lite ₹1,799, SafeBuds ₹2,999) — 4 writes, including the vertigo blog's CTA (₹3,299 →
₹3,499). Relevant here because it touches a page this department tracks; owned jointly with
cro-product-pages. Full detail in `DECISION_LOG.md` (CEO-2026-07-21-a).

**Next sprint change triggered:** SEO-018 (OpenWire title swap, queued next day), SEO-019 (PDP
cluster tracking, queued next day). The WFH content↔promise mismatch flagged above is the
highest-priority undraft item carried into every subsequent cycle until it's written.

---

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
| SH-SEO-4 | A dedicated India-focused "Shokz alternatives" comparison page can capture organic share of a cluster NG currently has zero presence in, within 60 days of publish. | Ship SEO-015/SEO-019, read GSC rank for "shokz alternatives india" + related long-tail at 30/60 days. | OPEN — 2nd cycle confirming the gap (2026-07-27). | SEO-015, SEO-019 |
| SH-SEO-5 | Adding a direct-answer FAQPage block for adjacent pain-point queries ("earphones hurting ears") to an already-authoritative page (vertigo blog) wins AI-answer consideration faster than a new standalone page would. | Ship SEO-016, recheck AEO citation proxy at 14 days (2026-08-03). | OPEN — still unexecuted; Shokz's footprint on this query grew to 2 articles this cycle (2026-07-27). | SEO-016 |
| SH-SEO-6 | A direct-answer + FAQPage rewrite of a near-zero-visibility safety page (pos 43.70) can both win AEO citation and lift organic rank for "are open ear/bone conduction headphones safe" within 30–60 days. | Ship SEO-020, recheck AEO citation proxy at 14 days (2026-08-10) and GSC position at 30 days. | OPEN — new this cycle (2026-07-27). | SEO-020 |
