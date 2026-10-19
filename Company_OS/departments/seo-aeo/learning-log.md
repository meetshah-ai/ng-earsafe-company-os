# SEO & AEO — Learning Log

> Institutional memory. `/deep-loop` appends weekly; `/standup` reads here. Never delete — supersede.
> Seeded from `[[ng-seo-aeo-learning-log]]`, `[[ng-seo-aeo-baseline]]`.

## HOW TO LOG
```
DATE | INITIATIVE | HYPOTHESIS | RESULT (confirmed/rejected/inconclusive) | LEARNING CARRIED FORWARD
```

## CONFIRMED PATTERNS (institutional truths)
- Non-branded CTR (0.48%) is the crisis metric; pos 4–10 high-impression pages rewritten title/meta = fastest revenue. **Update 2026-10-19: non-branded CTR fell back below its own 30-day target (0.8044%→0.7757%) one cycle after first clearing it** — the crisis is not resolved, gains concentrated in branded search this cycle.
- Informational blog traffic monetizes only with contextual CTAs (was ~0% CVR before Jun 2 install). **Update 2026-09-14: first non-zero blog CVR ever logged (0.12%, 2 txn/1,708 sessions this cycle)** — still far below the 0.5% target, but the ~0% streak is broken. Watch next cycle before declaring a trend. **Update 2026-09-28: 2nd cycle, roughly flat (0.1072%, 2 txn/1,865 sessions)** — the streak stays broken but hasn't grown; not yet a trend. **Update 2026-10-05: 3rd cycle, still flat (0.1079%, 2 txn/1,853 sessions)** — three consecutive cycles now hovering at ~0.11% CVR on a near-constant 2 transactions/month; this looks like a stable low floor, not organic growth yet. Still not formally a trend. **Update 2026-10-12: fell back toward the old near-zero floor (0.0531%, 1 txn/1,882 sessions)** — the non-zero streak broke. **Update 2026-10-19: essentially unchanged (0.0551%, 1 txn/1,814 sessions)** — still at the near-zero floor, not recovering.
- Google organic is the survival engine and highest-margin demand.
- FAQPage schema is the AEO eligibility lever; citation must be tracked, not assumed.
- Rank gains do not automatically convert to clicks — position can beat target while CTR on the
  same query falls (confirmed again 2026-07-27: "open ear headphones" pos 8.59 vs 8.64 prior, CTR
  0.29% vs 0.61% prior). CTR-FIX work is the lever, not rank alone. **Update 2026-08-03: this cycle
  broke the pattern for the first time** — "open ear headphones" position improved (8.59→8.16) AND
  CTR improved with it (0.29%→0.77%). One data point, not yet a reversal of the standing pattern —
  watch next cycle before crediting it. **Update 2026-08-10: 2nd consecutive cycle of the pattern
  break** — position improved again (8.16→6.66) and CTR improved again (0.77%→1.21%). Two data
  points now, on rising impressions (not a shrinking-sample artifact) — this is starting to look
  like a real reversal, not noise. Continue watching before formally crediting a reversal.
  **Update 2026-08-17: 3rd cycle — position improved again (6.66→6.38, now beating the 9.0 target
  by 2.62) but CTR essentially plateaued (1.21%→1.1990%), not a 3rd straight improvement.** Read as
  a plateau, not a clean 3rd confirmation of the reversal — the two metrics are no longer actively
  diverging (the old pattern), but they're not clearly moving together either this cycle. Keep
  watching rather than crediting a formal reversal. **Update 2026-09-14 (non-contiguous — a ~4-week
  gap sits between this read and the last logged one): position improved again, sharply (6.38→4.73,
  now beating even the 90-day target of 5.0), and CTR improved again (1.1990%→1.5241%).** Both
  metrics moved the same direction across the gap. Given the gap, this is not being formally
  credited as a "4th cycle" of anything — but it is the best joint reading on record and continues
  to support a real reversal rather than noise. Keep watching; a clean, contiguous multi-cycle read
  is still owed once the tracker/learning-log/queue-inbox sync gap (see this cycle's entry below)
  is closed. **Update 2026-09-28: the pattern reverted — position improved again (4.73→4.48) but
  CTR fell this time (1.5241%→1.4500%), the first divergence since 08-03.** Both metrics still
  solidly beat their targets, so this is not a crisis, but it confirms the "reversal" was never
  fully secure — the old antipattern can still show up mid-streak. Read as inconclusive on the
  reversal question, not as a new decline. **Update 2026-10-05: a third variant this time — position
  slipped (4.48→4.79) while CTR *improved* (1.4500%→1.5350%), the inverse of both the original
  pattern and the 09-28 divergence.** All three possible joint movements (both up, both down, and
  now each direction diverging oppositely) have now been observed on this single keyword within 10
  weeks. Both metrics still comfortably clear their targets (pos beats the 5.0 90-day target, CTR
  is well above the disease-band average) — reading this as noise around a stable high-performing
  keyword, not a pattern of any kind, until a clearer multi-cycle signal emerges. **Update
  2026-10-12: position essentially flat (4.79→4.82) while CTR improved further (1.5350%→1.8162%)
  on rising impressions (3,518→3,634)** — a 4th distinct joint-movement variant within 11 weeks.
  Still reading as noise around a stable, target-beating keyword; no further action warranted.
  **Update 2026-10-19: both metrics improved together again — position 4.82→4.58, CTR
  1.8162%→1.9252%, impressions roughly flat (3,634→3,584)** — a clean joint-improvement reading,
  consistent with the original "reversal" hypothesis but still not formally credited given how many
  different joint-movement shapes this single keyword has shown; continuing to watch.
- **A page can rank well and still catastrophically fail on CTR if its title/meta don't match the
  queries it actually earns impressions on, not just its target keyword.** New pattern, confirmed
  2026-08-03: `open-ear-vs-in-ear-vs-over-ear-headphones` ranks pos 6.28 overall but converts at
  0.11% CTR (13,992 impr/30d) because its two biggest queries by impressions — "in ear earphones"
  (2,565 impr) and "over ear earphones" (909 impr) — are generic single-category searches the
  comparison-framed title doesn't speak to. SEO-001/003's July rewrite optimized for the exact-match
  phrase ("open ear vs in ear headphones," only 46 impr) while the page's real impression volume
  sits on adjacent generic terms. Lesson for every future CTR-FIX: pull the page's top queries by
  impression, not just its nominal target keyword, before writing the rewrite spec. **2nd and 3rd
  confirmations, 2026-08-10:** `can-bluetooth-earphones-cause-a-blast` (title framed around
  "blast/explode," but 62% of its impression volume — 3,656 of 5,932 — sits on "why does wireless
  earbuds overheat," a different angle entirely, 0 clicks) and `headset-vs-headphone` (0% CTR
  across 10+ distinct "X vs Y" queries at pos 5–13 — every query converts zero, suggesting the
  title/snippet itself, not any single query mismatch, is the failure point). Drafted as SEO-028/029.
  **4th confirmation, 2026-08-17:** `/collections/bone-conduction-headphones` — its 2nd/7th-largest
  non-branded queries ("bone anchored earphones" 320 impr, "bone anchor headphones" 133 impr, ~10%
  of page total) are bone-anchored-hearing-aid (BAHA) medical-device searches, not consumer
  bone-conduction buyers; the actual money term "bone conduction headphones india" gets only 153
  impr at pos 8.81, worse than the page's own blended position. Drafted as SEO-032. This pattern is
  now the single most productive way to find new CTR-FIX candidates — check it first, every cycle,
  before scanning the disease band by impression alone. **5th confirmation, 2026-09-14, on a PDP
  (not blog/collection) this time:** SafeBuds' PDP (`/products/ngwehear`) earns 43% of its total
  impressions (1,768 of 4,123) on the single query "wehear," converting at 0.17% — ~7x worse than
  the page's own 1.24% blended CTR. SEO-023's generic title/meta rewrite (executed 2026-08-04) did
  not touch this specific mismatch and has now plateaued at exactly the same 1.24% CTR after a full
  D+30+ read. Drafted as SEO-036 — the pattern now confirmed across blog, collection, AND PDP page
  types. **6th confirmation, 2026-09-28 — the sharpest yet, and now with a "fix made it worse"
  twist:** `can-bluetooth-earphones-cause-a-blast`'s reportedly-executed SEO-028 rewrite (09-11)
  coincided with the page's top query ("bluetooth headphones overheating fix," now 13,018 of the
  page's 16,312 impr, 80%) still converting at literally **0%** — CTR on the whole page fell from
  ~0.15% at draft time to 0.018% now, even as impressions nearly tripled. This is either the
  clearest case yet of a fix not addressing the real query, or the fix never shipped as specified —
  escalated as SEO-040 with an explicit "verify what's actually live" step, not just a rewrite spec.
  **7th confirmation, 2026-10-05, on `/collections/open-ear-headphones`:** the collection page's
  single largest query by impression, "open ear earbuds" (6,658 impr, 31% of the page's total),
  converts at 0.4356% CTR, while the page's 2nd-largest query, "open ear headphones" (3,377 impr),
  converts at 1.5991% on a *better* position — the title/H1/copy say "headphones" throughout and
  never say "earbuds." SEO-022 (07-27, same URL) was a generic rewrite that never targeted this
  specific vocabulary gap and the page's blended CTR has moved only 1.072%→1.030% (flat) since.
  Drafted as SEO-044 — now confirmed 7 times, across blog, collection, and PDP page types, and
  specifically on this exact collection page for the 2nd distinct reason (BAHA mismatch was the
  bone-conduction collection's version, SEO-032; this is the sibling open-ear collection's version).
  **Update 2026-10-12 (not an 8th new confirmation, a continuity read on the 7th):** the same
  "open ear earbuds" query improved (0.4356%→0.5488% CTR, impr 6,658→8,200) but still converts
  far below the page's "open ear headphones" query (1.8705% CTR) on the same page — SEO-044
  correctly diagnosed, still pending, mismatch narrowing slightly but not closed. **Update
  2026-10-19 (continuity, not a new confirmation): the narrowing stalled** — "open ear earbuds"
  impr=9,442, CTR 0.5401% (essentially flat vs 0.5488% last cycle), still far below the page's
  "open ear headphones" query (3,428 impr, 1.9837% CTR). **8th confirmation, 2026-10-19, on a
  genuinely new page:** `best-headphones-for-glasses-wearers` — its largest query ("which
  headphones are best for people who wear glasses all day?", 1,050 impr, 38.5% of the page's 2,728
  total) converts at literal 0% CTR at pos 10.92, while the page's other glasses-wearer queries
  convert fine (1.9–7.4% CTR) when phrased more directly — the page simply never answers this exact
  natural-language question verbatim. Drafted as SEO-046. The pattern now spans blog, collection,
  PDP, and a second distinct blog page — 8 confirmations, 0 rejections.
- **WebFetch silently strips `<script>` tags — it will false-negative on any JSON-LD/schema check.**
  Confirmed repeatedly (SEO-002 07-03, SEO-011/013 07-21). Never conclude "schema missing" from a
  WebFetch read; use raw `curl` or a Rich Results Test. This single tool limitation produced two
  false-premise queue rows (SEO-011's "4 SKUs missing schema" and SEO-013's "still missing Product
  JSON-LD") before it was diagnosed.
- **Any `/execute-approved` run must commit+push tracker.md/queue-inbox.md/learning-log.md in the
  same session.** Local-only status updates are invisible to the managed agent, which reads only
  GitHub — see the 2026-07-27 sync-gap entry below for what happens when this is skipped (three
  cycles of a fixed page getting re-flagged as broken). **Recurred in a different shape, 2026-09-14:
  queue-inbox.md ran an intermediate cycle on 2026-08-24 (SEO-034/035 drafted, SEO-013/015 D+30
  verdicts closed) that was never reflected in tracker.md's CURRENT SPRINT table or this file's
  CYCLE LOG; separately, tracker.md's top-of-file blockquotes (2026-09-09/09-11) recorded real
  approvals+executions that queue-inbox.md's row bodies didn't reflect until this session manually
  synced them.** Same root cause as 07-27 — files updated independently, no single session pushing
  all three together. Flagged in this cycle's report as the top action item. **Reconfirmed clean
  2026-09-28, 2026-10-05, 2026-10-12, and 2026-10-19** — no new sync gap found in any of these
  cycles; SEO-036..045 correctly shown pending (bar SEO-038, executed) in both tracker.md and
  queue-inbox.md before drafting SEO-046.
- **Always read tracker.md's LIVE STATUS SNAPSHOT / ⚠️ SYNC CORRECTION section in full before
  drafting anything, every run — not just after a known incident.** Confirmed necessary again
  2026-07-27: a same-day earlier run had already produced 3 duplicate/false-premise drafts
  (SEO-017/018/019) purely because it trusted a stale snapshot. The correction lived only in the
  tracker's top section, not in the standing rules — reading it first is what prevented a repeat.
  **Reconfirmed clean 2026-08-03, 2026-08-10, 2026-08-17, 2026-09-14, 2026-09-28, 2026-10-05,
  2026-10-12, and 2026-10-19** (no ⚠️ SYNC CORRECTION section present any of these cycles;
  SEO-036..045 confirmed still pending/executed-as-noted in both tracker.md and queue-inbox.md
  before drafting SEO-046, avoiding any duplicate IDs).
- **Approval-to-execution latency is now a measurable drag on the crisis metric, not just a
  process complaint.** New pattern, 2026-08-10: 7 rows (SEO-020/021/022/024/025/026/027) sat
  APPROVED by Meet since 2026-08-04 without execution across multiple weekly cycles, during which
  non-branded CTR fell for several straight weeks and the WFH page posted a 7-straight-cycle
  decline (through 08-17). **Update 2026-09-14: this backlog finally cleared — tracker.md records
  SEO-020 through SEO-035 as all resolved/executed by 2026-09-11,** roughly 5–6 weeks after
  approval for the oldest rows. **Update 2026-10-19: the newer backlog (SEO-036 onward) has not
  cleared the same way — it is now 10 rows deep (SEO-036 through SEO-045, SEO-038 the lone
  execution), with SEO-036..039 at 6 full weekly cycles pending.** Two of the clearest, most
  costless opportunities on the site (blast page/SEO-040, now 5 cycles at literal zero clicks on
  its top query; bone-conduction AEO/SEO-039, now fully absent from its web_search sweep after 3
  stable cycles at ~4th of 10) remain unexecuted while sitting in the queue. This is the single
  largest standing drag on both the CTR and AEO crisis metrics.
- **NEW, 2026-09-28 — a fix reportedly executed can coincide with the page getting worse, not
  better, and that is a signal to check the fix's technical delivery before assuming the content
  strategy failed.** Two independent pages that reportedly received on-page fixes on 2026-09-11
  (WFH page/SEO-021, blast page/SEO-028) both hit their worst-ever readings in this cycle's pull —
  WFH's position collapsed 11.28→21.91 (its named query fell to pos 47.53, effectively off the
  SERP) and the blast page's CTR fell from ~0.15% to 0.018% even as its impressions nearly tripled.
  Both are large enough moves, on enough volume, to rule out noise. Neither is being treated as
  proof the underlying content strategy was wrong — both are escalated (SEO-040, SEO-041) with an
  explicit first step to verify the live title/meta/canonical actually match what was drafted
  before writing any new copy. **This is a distinct failure mode from the SH-SEO-10 query-intent
  pattern above** — that pattern is about a fix targeting the wrong query; this one is about not
  being able to confirm a fix shipped as specified at all, on top of a possible template/technical
  regression. **Update 2026-10-05: both pages got worse a 2nd straight cycle while their fixes
  (SEO-040, SEO-041) remained unexecuted/unapproved** — WFH fell further (21.91→23.15, named query
  47.53→51.85) and the blast page's CTR fell again (0.0184%→0.0062%, its top query's 0-click streak
  now spans 3 consecutive 30-day windows at page-1 position). This cycle's WFH competitor-SERP
  check additionally found **zero** NG presence in the general web result set for the page's exact
  keyword phrase — a new, stronger piece of evidence for the technical-regression hypothesis, since
  09-28's equivalent check had found NG's page still present there.</br>
  **A pattern is only confirmed, not just repeated, once it has shown up on a 3rd independent page —
  that has not yet happened; both known cases remain the same two pages from 09-28, now in their
  2nd cycle of decline.** **Update 2026-10-12:** both pages logged a 3rd/4th straight cycle in the
  same state — blast page's top query still 0 clicks (4th cycle), WFH page still off-SERP on its
  named query (51.79, essentially unchanged) with a **new, more concrete diagnostic**: the WFH
  page's current top queries by impression are now almost entirely Comm 2.0-branded terms, not its
  original generic WFH angle — consistent with the page's content having been overwritten toward
  Comm 2.0 copy specifically, not just "something broke." Still only 2 known pages — the 3rd-page
  confirmation bar for formally naming this a pattern remains unmet. **Update 2026-10-19:** blast
  page logged a 5th straight cycle of literal zero clicks on its top query; WFH page got worse
  again (pos 22.86→25.17, named query 51.79→55.90) — **but this cycle's competitor-SERP check found
  NG's own page present again in the general web result set (~5th of 10), a reversal from
  10-05/10-12's "zero presence" readings.** This complicates the technical-regression hypothesis:
  a fully de-indexed/noindexed page would not fluctuate between present and absent across cycles
  for a stable query set. Re-reading this as evidence of an unstable ranking signal (the page is
  still crawlable and occasionally surfaces) rather than a hard technical break — still not
  resolved, still 2 known pages, still unexecuted.
- **NEW, 2026-10-12 — a WRITE brief marked "resolved/executed" can have had its scope silently
  changed during execution, leaving the original money keywords completely untouched.** SEO-030
  (Comm 2.0 "boom mic" buying guide) was executed 2026-09-11, but per its own resolution note the
  execution updated an existing video-conferencing article instead of publishing content for the
  original target phrases — "open ear headphones with mic india" and "boom mic open ear headset"
  remain at literal 0 GSC rows today, unchanged since the brief was first drafted 07-27/08-03. This
  is a 3rd distinct failure mode alongside SH-SEO-10 (wrong query targeted) and the
  delivery-verification pattern above (fix didn't ship as specified) — here the fix shipped, just
  not as the content gap required. Re-opened with correct scope as SEO-045. Lesson: a "resolved"
  WRITE row's resolution note must be re-read for scope changes, not just treated as "done," before
  trusting that a money keyword's zero-row status will ever change. **Update 2026-10-19:** both
  target phrases confirmed still 0 GSC rows this cycle too — SEO-045 remains the correct,
  unexecuted fix.
- **Assuming a page's own named money-keyword exact phrase will keep reliably returning GSC rows
  once any clicks appear — weak evidence, not yet rejected.** This cycle, "shokz alternatives
  india" (SEO-015/019's target, which had shown 6 clicks/113 impr/pos 6.58 just last cycle) returned
  **0 rows** this window. Most likely explanation is ordinary low-volume/long-tail noise, not a
  real reversal — not escalated, flagged as a one-cycle watch item only. **Update 2026-10-19: a 2nd
  straight cycle of 0 rows on this exact phrase** — still read as long-tail volume noise rather than
  a reversal, but now due a 3rd-cycle check before continuing to dismiss it.
- **NEW, 2026-10-19 — a page's blended position/CTR can be catastrophically skewed by a sudden
  flood of unrelated, oddly-templated, zero-click queries; always disaggregate to the actual money
  query before declaring a regression.** `are-noise-cancelling-headphones-safe` (SEO-034)'s blended
  position fell from 5.20 (10-05) to 18.77 this cycle — on its face, a reading as severe as the
  WFH/blast-page regressions above. Disaggregating showed four near-identical, newly-appearing
  queries ("for home use / for beginners / worth buying / for small apartments noise cancelling
  headphones common problems," ~2,416 impr combined, pos 27–43, 0 clicks each) that were not present
  in prior cycles' top-query lists for this page, reading as templated/bot-style query expansions
  rather than real buyer searches. The actual target query ("are noise cancelling headphones safe,"
  48 impr, pos 6.15, 0% CTR) sits roughly where it's been. This is a 4th distinct failure mode,
  alongside SH-SEO-10 (wrong query targeted), the delivery-verification pattern (fix didn't ship as
  specified), and the WRITE-scope-change pattern (SEO-030/045) — here the page's own numbers are
  real but the *aggregate* is misleading. Lesson: before escalating any page as a new
  technical-regression case, always pull its full query list and check whether a handful of
  oddly-phrased, zero-click queries are doing the damage to the blended average, rather than a
  genuine decline on the queries that actually matter.

## KEYWORD MOVEMENT LOG (update each 30-day pull)
| Date | Keyword | Position before | Position after | CTR before | CTR after | Note |
|---|---|---|---|---|---|---|
| _seed_ | "open ear headphones" | 12.0 | — | — | — | target pos 5 |
| 2026-07-20 | "open ear headphones" | 8.7 (06-27) | 8.64 | 1.01% | 0.61% | Position now beats the 9.0 30-day target; CTR did not follow — clicks lag rank gains. |
| 2026-07-27 | "open ear headphones" | 8.64 (07-20) | 8.59 | 0.61% | 0.29% | Position still beats target; CTR fell again, on a very small slice (1,025 impr/3 clicks). Confirms the standing pattern, not a new signal. |
| 2026-08-03 | "open ear headphones" | 8.59 (07-27) | 8.16 | 0.29% | 0.77% | **Pattern break:** position improved AND CTR improved with it (7 clicks/909 impr). First cycle since tracking began where rank and CTR moved the same direction. |
| 2026-08-10 | "open ear headphones" | 8.16 (08-03) | 6.66 | 0.77% | 1.21% | **2nd straight cycle of the pattern break** — position improved again (well past the 9.0 target) and CTR improved again, on rising impressions (909→1,659). |
| 2026-08-17 | "open ear headphones" | 6.66 (08-10) | 6.38 | 1.21% | 1.1990% | Position improved again, now beating the 9.0 target by 2.62 (2,502 impr/30 clicks). CTR essentially flat/plateaued rather than a 3rd straight improvement — read as a plateau, not a clean reversal confirmation. Keep watching. |
| 2026-09-14 | "open ear headphones" | 6.38 (08-17, non-contiguous — ~4-week gap) | 4.73 | 1.1990% | 1.5241% | Sharp improvement on both metrics together (3,740 impr/57 clicks) — now beating the 90-day target (5.0) six weeks early. Best joint reading on record; not formally credited as a "4th cycle" given the gap, but continues to support a real reversal of the old "rank gains don't convert" pattern. |
| 2026-09-28 | "open ear headphones" | 4.73 (09-14) | 4.48 | 1.5241% | 1.4500% | Position improved further (best ever, still beating the 90-day target). CTR fell this time (3,517 impr/51 clicks) — the joint-improvement streak broke after 3–4 cycles. Read as inconclusive on the reversal, not a decline (both metrics still solidly beat target). |
| 2026-10-05 | "open ear headphones" | 4.48 (09-28) | 4.79 | 1.4500% | 1.5350% | Position slipped slightly (4.79, still clear of the 5.0 90-day target) while CTR rose (3,518 impr/54 clicks) — the inverse of 09-28's divergence. Read as noise around a stable high performer, not a pattern. |
| 2026-10-12 | "open ear headphones" | 4.79 (10-05) | 4.82 | 1.5350% | 1.8162% | Position essentially flat while CTR rose further (3,634 impr/66 clicks), a 4th distinct joint-movement variant within 11 weeks — still reading as noise around a stable, target-beating keyword. |
| 2026-10-19 | "open ear headphones" | 4.82 (10-12) | 4.58 | 1.8162% | 1.9252% | Both metrics improved together (3,584 impr/69 clicks) — a clean joint-improvement reading, consistent with (but not yet formally crediting) the original reversal hypothesis. |
| 2026-07-27 | best-noise-canceling-headset-for-wfh (page) | 6.31 (07-20) | 8.34 | 0.08% | 0.10% | 4th straight cycle of decline; impressions down 65% since 06-27. SEO-014 (the H1/FAQ fix) already live and did not arrest it — the real lever (content↔promise mismatch) drafted as SEO-021. |
| 2026-08-03 | best-noise-canceling-headset-for-wfh (page) | 8.34 (07-27) | 9.52 | 0.10% | 0.099% | 5th straight cycle of decline. SEO-021 drafted and unapproved for a full week; upgraded to urgent, not re-drafted. |
| 2026-08-10 | best-noise-canceling-headset-for-wfh (page) | 9.52 (08-03) | 11.68 | 0.099% | 0.246% | 6th straight cycle of decline. SEO-021 approved 2026-08-04 but still unexecuted a full week later. |
| 2026-08-17 | best-noise-canceling-headset-for-wfh (page) | 11.68 (08-10) | 13.87 | 0.246% | 0.290% | 7th straight cycle of decline (4.06→5.36→6.31→8.34→9.52→11.68→13.87). SEO-021 now 13 days approved-and-unexecuted. |
| 2026-09-14 | best-noise-canceling-headset-for-wfh (page) | 13.87 (08-17, non-contiguous) | 11.28 | 0.290% | 0.1235% | Position recovered somewhat (13.87→11.28) but CTR fell further (810 impr/1 click). SEO-021 is now resolved per tracker.md's 2026-09-11 sync note; too early and too gapped to attribute this move to the fix. |
| 2026-09-28 | best-noise-canceling-headset-for-working-from-home (page — **slug corrected**: the real live/GSC page is `-for-working-from-home`, not `-for-wfh`, which was never a real URL) | 11.28 (09-14) | **21.91** | 0.1235% | 0.2577% | **8th straight cycle of decline, sharpest yet** (388 impr/1 click) — its own named query "best noise cancelling headset with mic for working from home" fell to pos 47.53, effectively off the SERP. This happened in the same window SEO-021 reportedly shipped (09-11) — escalated as SEO-041 with a technical-regression check as the first step, not another content rewrite. |
| 2026-10-05 | best-noise-canceling-headset-for-working-from-home (page, SEO-021/041 target) | 21.91 (09-28) | **23.15** | 0.2577% | 0.00% | 2nd straight cycle of decline since SEO-021 reportedly shipped (362 impr/0 clicks); named query now pos 51.85. This cycle's competitor-SERP check found zero NG presence in the general web result set for the page's exact phrase — a new, stronger signal than 09-28's (which still found the page present there). SEO-041 remains unexecuted. |
| 2026-10-12 | best-noise-canceling-headset-for-working-from-home (page, SEO-021/041 target) | 23.15 (10-05) | 22.86 | 0.00% | 0.00% | Marginal tick up (still catastrophic), named query essentially flat (51.85→51.79). **New diagnostic:** the page's top queries by impression are now almost entirely Comm 2.0-branded terms, not its original generic WFH framing — a concrete lead for the technical-regression check. Competitor-SERP check reconfirmed zero NG presence for a 2nd straight cycle. SEO-041 remains unexecuted. |
| 2026-10-19 | best-noise-canceling-headset-for-working-from-home (page, SEO-021/041 target) | 22.86 (10-12) | 25.17 | 0.00% | 0.00% | Worse again (259 impr/0 clicks); named query worse again (51.79→55.90). Top queries remain Comm 2.0-branded. **But this cycle's competitor-SERP check found NG's own page present again in the general web result set (~5th of 10)** — a reversal from the two prior "zero presence" readings, complicating the technical-regression hypothesis. SEO-041 remains unexecuted. |
| 2026-08-03 | open-ear-vs-in-ear-vs-over-ear-headphones (page, SEO-001/003 target) | n/a (too early to read before 07-31) | pos 6.28 / 13,992 impr | n/a | **0.11%** | **First valid 30-day read on the July rewrite.** Clear miss — root cause diagnosed as a content-intent mismatch (see CONFIRMED PATTERNS). Escalated as SEO-025 (CTR-FIX) + SEO-026 (AEO). |
| 2026-08-10 | open-ear-vs-in-ear-vs-over-ear-headphones (page) | 6.28 / 13,992 impr (08-03) | 6.17 / 13,893 impr | 0.11% | 0.0792% | Essentially unchanged — still a clear miss. SEO-025/026 approved 2026-08-04 but remains unexecuted. |
| 2026-08-17 | open-ear-vs-in-ear-vs-over-ear-headphones (page, SEO-025/026 target) | 6.17 / 13,893 impr (08-10) | 6.03 / 14,375 impr | 0.0792% | 0.063% | CTR fell further on rising impressions — still unexecuted, still a clear miss, getting slightly worse each cycle. |
| 2026-09-14 | open-ear-vs-in-ear-vs-over-ear-headphones (page, SEO-025/026 target) | 6.03 / 14,375 impr (08-17, non-contiguous) | 8.32 / 10,117 impr | 0.063% | 0.049% | Still a clear miss — CTR fell further, position also worse, impressions down. SEO-025/026 resolved per tracker.md's 09-11 sync note; not re-drafted, monitoring continues. |
| 2026-09-28 | open-ear-vs-in-ear-vs-over-ear-headphones (page, SEO-025/026/043 target) | 8.32 / 10,117 impr (09-14) | 9.57 / 5,761 impr | 0.049% | 0.0868% | New low on both organic signal (impr down 43%) and AEO signal (query "open ear vs in ear headphones" now 6th+ consecutive cycle fully absent from web_search). SEO-025/026 (executed 09-11) show no measured improvement — escalated as SEO-043 with a structural format change (comparison table + FAQ above the fold) rather than another incremental edit. |
| 2026-10-05 | open-ear-vs-in-ear-vs-over-ear-headphones (page, SEO-025/026/043 target) | 9.57 / 5,761 impr (09-28) | 9.87 / 4,720 impr | 0.0868% | 0.1059% | Impressions down a further 18%, position slightly worse; CTR ticked up off its low but remains far below the disease-band average. AEO sweep: 7th+ consecutive cycle fully absent, now with zero NG presence in the organic web set too (not just the AI-style answer). SEO-043 remains unexecuted. |
| 2026-10-12 | open-ear-vs-in-ear-vs-over-ear-headphones (page, SEO-025/026/043 target) | 9.87 / 4,720 impr (10-05) | 9.09 / 5,344 impr | 0.1059% | 0.1123% | **First positive tick on both CTR and position since the decline began** (impr +13%). AEO sweep: still fully absent, 8th+ consecutive cycle — GSC and AEO signals now diverging (GSC stabilizing, AEO showing no change). SEO-043 remains unexecuted. |
| 2026-10-19 | open-ear-vs-in-ear-vs-over-ear-headphones (page, SEO-025/026/043 target) | 9.09 (10-12) | 7.65 / 5,968 impr | 0.1123% | 0.1005% | Position improved further (9.09→7.65, impr +12%), CTR eased slightly off last cycle's tick. AEO sweep: still fully absent, 9th+ consecutive cycle — same competitor cast dominates. SEO-043 remains unexecuted. |
| 2026-08-10 | Pro Swimming PDP (page, CTR-disease) | 4.34 / 55,501 impr (08-03) | 4.57 / 59,812 impr | 0.86% | 0.78% | Impressions still growing (+8%), CTR still falling. |
| 2026-08-17 | Pro Swimming PDP (page, CTR-disease) | 4.57 / 59,812 impr (08-10) | 4.81 / 63,771 impr | 0.78% | 0.759% | 5th straight cycle of CTR decline, impressions still growing (+6.6%). D+30 window closed 2026-08-19; SEO-013 was later confirmed a D+30 MISS (closed in queue-inbox.md 2026-08-24: CTR 0.838% vs 3% target). |
| 2026-09-14 | Pro Swimming PDP (page, CTR-disease) | 4.81 / 63,771 impr (08-17, non-contiguous) | 5.89 / 19,715 impr | 0.759% | 1.126% | CTR up sharply, but impressions down heavily (63,771→19,715) and position worse — likely a seasonal/demand-side swing given the size of the impression drop; not re-drafted this cycle, still in the disease band. |
| 2026-09-28 | Pro Swimming PDP (page, CTR-disease) | 5.89 / 19,715 impr (09-14) | 5.24 / 9,842 impr | 1.126% | 1.290% | Position and CTR both improved again, impressions fell further (19,715→9,842) — still reads as a demand-side swing, not re-drafted, still in the disease band. |
| 2026-10-05 | Pro Swimming PDP (page, CTR-disease) | 5.24 / 9,842 impr (09-28) | 5.25 / 7,389 impr | 1.290% | 1.502% | CTR continues to climb, position essentially flat, impressions still falling (-25%) — consistent with the standing demand-side-swing read, not re-drafted. |
| 2026-10-12 | Pro Swimming PDP (page, CTR-disease) | 5.25 / 7,389 impr (10-05) | 5.51 / 7,287 impr | 1.502% | 1.6468% | CTR continues to climb, impressions roughly flat (-1%), position slightly worse — still reads as the standing demand-side-swing pattern, not re-drafted. |
| 2026-10-19 | Pro Swimming PDP (page, CTR-disease) | 5.51 / 7,287 impr (10-12) | 4.57 / 9,079 impr | 1.6468% | 1.7072% | Impressions up sharply this cycle (+24.6%), CTR continued climbing, position improved — demand-side-swing read continues to hold, not re-drafted. |
| 2026-08-03 | bone-conduction-headphones-side-effects (page, SEO-002 target) | n/a (too early before 07-31) | pos 10.19 / 3,079 impr | n/a | 0.52% | First valid read: middling — page now surfaces in web_search results (~8th of 10) for the AEO query. |
| 2026-08-10 | bone-conduction-headphones-side-effects (page, SEO-002/031 target) | 10.19 / 3,079 impr (08-03) | 10.00 / 3,376 impr | 0.52% | 0.5332% | Roughly flat/slightly improved. Drafted a dedicated AEO fix (SEO-031) this cycle. |
| 2026-08-17 | bone-conduction-headphones-side-effects (page, SEO-002/031 target) | 10.00 / 3,376 impr (08-10) | 10.18 / 3,532 impr | 0.5332% | 0.595% | CTR up slightly, position essentially flat. Web_search sweep shows the page climbing to ~5th of 10 (from ~8th) — a positive interim signal for SEO-031, not yet credited. |
| 2026-09-14 | bone-conduction-headphones-side-effects (page, SEO-031/039 target) | 10.18 / 3,532 impr (08-17, non-contiguous) | 14.13 / 2,576 impr | 0.595% | 0.3882% | GSC position/CTR both eased back, but the web_search sweep (the actual AEO signal) improved further to ~4th of 10 — the two signals are diverging; escalated with SEO-039 rather than waiting. |
| 2026-09-28 | bone-conduction-headphones-side-effects (page, SEO-031/039 target) | 14.13 / 2,576 impr (09-14) | 11.67 / 2,540 impr | 0.3882% | 0.3937% | GSC position recovered somewhat, CTR flat. web_search sweep reconfirms the page directly present with a strong direct-answer opener — still the best AEO signal of any monitored query, still not the featured answer (Shokz UK's "Myths vs Facts" article). SEO-039 remains the right fix, still pending approval. |
| 2026-10-05 | bone-conduction-headphones-side-effects (page, SEO-031/039 target) | 11.67 / 2,540 impr (09-28) | 10.23 / 2,555 impr | 0.3937% | 0.4305% | Both GSC signals improved again. web_search sweep: identical ~4th-of-10 ranking for a 3rd straight cycle — a stable but un-escalating AEO position; SEO-039 remains pending. |
| 2026-10-12 | bone-conduction-headphones-side-effects (page, SEO-031/039 target) | 10.23 / 2,555 impr (10-05) | 9.58 / 2,972 impr | 0.4305% | 0.4711% | GSC signals continue improving. **web_search sweep regressed sharply — fell to ~9th of 10**, the first reversal since the ~4th-of-10 climb began (3 straight cycles stable). GSC and AEO signals are now diverging in opposite directions. SEO-039 escalation is now more urgent, not less. |
| 2026-10-19 | bone-conduction-headphones-side-effects (page, SEO-031/039 target) | 9.58 / 2,972 impr (10-12) | 9.49 / 3,061 impr | 0.4711% | 0.5227% | GSC signals continue improving (CTR and impressions both up). **web_search sweep regressed further — NG is now fully absent from the top-10**, a 2nd straight cycle of decline after 3 stable cycles at ~4th of 10. GSC and AEO signals are now diverging hard. SEO-039 is now the single most urgent pending item on the board. |

## AEO CITATION LOG (update each 14-day check)
| Date | Query | NG named? | Article cited? | Engine |
|---|---|---|---|---|
| _seed_ | "are open ear headphones safe" | — | — | ChatGPT/Perplexity/Google AIO |
| 2026-07-20 | "best open ear headphones india" | No (own page now surfaces in organic web results, not confirmed as AI-cited) | No | web_search proxy |
| 2026-07-20 | "are open ear headphones safe" | No | No | web_search proxy — clean Shokz/Soundcore/KingLucky sweep |
| 2026-07-20 | "earphones hurting ears what to do" | No | No | web_search proxy — Shokz owns a direct-answer blog for this exact query; used to ground SEO-016 |
| 2026-07-20 | "bone conduction headphones side effects" | No (own page surfaces in organic results now) | Page present, citation unconfirmed | web_search proxy |
| 2026-07-20 | "open ear vs in ear headphones" | No (own page surfaces in organic results now) | Page present, citation unconfirmed | web_search proxy |
| 2026-07-27 | "open ear vs in ear headphones" | 2nd consecutive cycle NG did not surface in top-10 (Bose, Soundcore, Forbes, beyerdynamic, Shokz, Lobkin, Avantree dominate). | No | web_search proxy |
| 2026-08-03 | "open ear vs in ear headphones" | 3rd consecutive cycle of absence — escalation trigger fired. | No | web_search proxy — escalated to SEO-026 |
| 2026-08-10 | "bone conduction headphones side effects" | NG's own page surfaces ~8th of 10 — closest of any monitored query to a win, not yet cited | Present, citation unconfirmed | web_search proxy — new AEO fix drafted this cycle (SEO-031) |
| 2026-08-10 | "open ear vs in ear headphones" | No — 4th consecutive cycle of absence. | No | web_search proxy — SEO-026 remains unexecuted |
| 2026-08-17 | "best open ear headphones india" | No change — own `/collections/best-sellers` page surfaces (title "Best Open Ear Headphones India 2026 \| Top NG EarSafe Picks"), still not a confirmed AI citation | No | web_search proxy |
| 2026-08-17 | "are open ear headphones safe" | No — unchanged, 5th straight cycle. Shokz UK, langsdom, soundcore, King Lucky (x2), Baseus all cited. | No | web_search proxy — reconfirms SEO-020, still approved-but-unexecuted 13 days |
| 2026-08-17 | "earphones hurting ears what to do" | No — unchanged. Shokz (now 2 domains), Healthline, HP, Miracle-Ear, Headphonesty all cited. | No | web_search proxy — SEO-016 remains inconclusive |
| 2026-08-17 | "bone conduction headphones side effects" | NG's own page surfaces ~5th of 10 — improved from ~8th last cycle, closest of any monitored query to a win | Present, citation unconfirmed | web_search proxy — positive interim signal for SEO-031 |
| 2026-08-17 | "open ear vs in ear headphones" | No — 5th consecutive cycle of absence. Bose, Soundcore, Forbes, beyerdynamic, Shokz, opnsound, LOBKIN, Avantree dominate. | No | web_search proxy — SEO-026's own D+14 read checkpoint was due today and arrived with the fix never executed |
| 2026-09-14 | "best open ear headphones india" | Own domain surfaces (ngearsafe.com homepage) plus an OpenWire listing inside an Amazon bestsellers aggregate — no dedicated AI-style citation, unchanged in kind from prior cycles | No | web_search proxy |
| 2026-09-14 | "are open ear headphones safe" | No — unchanged. Soundcore, Shokz UK, KingLucky, QCY, Sanag, Langsdom, Baseus all cited. | No | web_search proxy — SEO-020 executed 2026-09-11 per tracker.md, only 3 days live, too early for a citation to show. D+14 read due ~2026-09-25. |
| 2026-09-14 | "earphones hurting ears what to do" | No — unchanged. Shokz UK, Healthline, HP, Miracle-Ear, Headphonesty, CEENTA all cited. | No | web_search proxy — SEO-016 remains inconclusive |
| 2026-09-14 | "bone conduction headphones side effects" | **Yes — NG's own page now ~4th of 10**, its best reading on record (was ~5th on 08-17, ~8th on 08-10) | Present, still not the featured/cited answer — Shokz UK's "Myths vs Facts" article appears to own the framing | web_search proxy — escalated as SEO-039 rather than waiting on SEO-031 alone |
| 2026-09-14 | "open ear vs in ear headphones" | No — still fully absent. Bose, Soundcore (x2), Forbes, beyerdynamic, Shokz dominate. | No | web_search proxy — SEO-026 executed 2026-09-11 per tracker.md, only 3 days live. D+14 read due ~2026-09-25. |
| 2026-09-28 | "best open ear headphones india" | No dedicated AI-style citation, but NG's own `/collections/open-ear-headphones` page surfaced directly in the organic sweep for the first time (previously only Amazon-listing mentions of NG products appeared) | No | web_search proxy — positive but not escalation-worthy |
| 2026-09-28 | "are open ear headphones safe" | No — unchanged, 6th straight cycle. Shokz UK, QCY, Soundcore (x2), KingLucky (x3), Baseus all cited. | No | web_search proxy — SEO-020's D+14 checkpoint (~09-25) has now passed with NG still absent, a real miss signal; D+30 remains the harder read |
| 2026-09-28 | "earphones hurting ears what to do" | No — unchanged. Shokz UK, Healthline, headphonesaddict, HP, Miracle-Ear, CEENTA, Soundcore all cited. | No | web_search proxy — SEO-016 remains inconclusive |
| 2026-09-28 | "bone conduction headphones side effects" | **Yes — NG's own page again directly present**, now with a visible strong direct-answer opener quoted in the search snippet ("Short answer: no significant ones...") | Present, still not the featured answer — Shokz UK's "Myths vs Facts" article still owns the framing | web_search proxy — best signal of any monitored query, unchanged from last cycle; SEO-039 (still pending approval) is the right next step |
| 2026-09-28 | "open ear vs in ear headphones" | No — still fully absent, 6th+ consecutive cycle. Bose, Soundcore (x2), Forbes, beyerdynamic, Shokz dominate. | No | web_search proxy — SEO-026's D+14 checkpoint (~09-25) has now passed with NG still fully absent, a clear MISS; escalated as SEO-043 with a structural format change |
| 2026-10-05 | "best open ear headphones india" | No dedicated AI-style citation. NG's own collection page again surfaces directly (2nd straight cycle), plus OpenWire/ES Lite appear inside an Amazon bestsellers aggregate and a reseller (theaudiostore.in) review. | No | web_search proxy — stable, not escalation-worthy |
| 2026-10-05 | "are open ear headphones safe" | No — 7th straight cycle. Shokz UK, QCY, KingLucky, Soundcore, Baseus all cited — same cast as prior cycles. | No | web_search proxy — SEO-020's D+30 window (~10-11) not yet reached |
| 2026-10-05 | "earphones hurting ears what to do" | No — unchanged. Hearing-speechcenter, headphonesaddict, Healthline, Shokz UK, HP, Miracle-Ear, CEENTA, Soundcore all cited. | No | web_search proxy — SEO-016 remains inconclusive |
| 2026-10-05 | "bone conduction headphones side effects" | **Yes — NG's own page present at ~4th of 10 for a 3rd straight cycle**, same strong direct-answer snippet quoted. | Present, still not the featured answer — Shokz UK's "Myths vs Facts" article still directly behind it, unchanged framing. | web_search proxy — stable but no further movement; SEO-039 still pending approval |
| 2026-10-05 | "open ear vs in ear headphones" | No — 7th+ consecutive cycle, and this cycle found **zero** NG presence anywhere in the top-10 (not even a non-AI organic mention). Bose, Soundcore (x2), Forbes, beyerdynamic, opnsound, Shokz (x2) dominate. | No | web_search proxy — escalation (SEO-043) remains the right call, still unexecuted |
| 2026-10-12 | "best open ear headphones india" | No dedicated AI-style citation. NG product appears anonymously in a reseller listing (theaudiostore.in, Comm 2.0) and an Amazon price-filtered page (₹1,799/₹4,999 matches ES Lite exactly, unbranded in the listing text). | No | web_search proxy — stable, not escalation-worthy |
| 2026-10-12 | "are open ear headphones safe" | No — 8th straight cycle. **SEO-020's D+30 window closed today — confirmed MISS.** Shokz UK, KingLucky (x2), QCY, Soundcore (x2), Baseus cited — same cast as prior cycles. | No | web_search proxy |
| 2026-10-12 | "earphones hurting ears what to do" | No — unchanged. hearing-speechcenter, headphonesaddict, soundcore, Healthline, HP, Miracle-Ear, Shokz UK, CEENTA cited. | No | web_search proxy — SEO-016 remains inconclusive |
| 2026-10-12 | "bone conduction headphones side effects" | **Regressed — NG's own page fell to ~9th of 10**, the first reversal after 3 straight cycles stable at ~4th of 10. | Present, still not the featured answer — Shokz UK's "Myths vs Facts" article still directly ahead. | web_search proxy — SEO-039 escalation now more urgent, still pending approval |
| 2026-10-12 | "open ear vs in ear headphones" | No — 8th+ consecutive cycle, zero NG presence in the top-10. Bose, Soundcore, Forbes, beyerdynamic dominate — same cast. | No | web_search proxy — escalation (SEO-043) remains the right call, still unexecuted |
| 2026-10-19 | "best open ear headphones india" | No dedicated AI-style citation. NG's `/collections/open-ear-headphones` page surfaces directly in the organic sweep; OpenWire/ES Lite appear unbranded in Amazon bestseller/price listings and reseller sites. | No | web_search proxy — stable, not escalation-worthy |
| 2026-10-19 | "are open ear headphones safe" | No — 9th straight cycle. Shokz UK, KingLuckyShop (x2), QCY, Baseus, Soundcore (x2), Sanag, Langsdom cited — same cast as prior cycles. | No | web_search proxy — SEO-020 confirmed MISS last cycle, not re-escalated |
| 2026-10-19 | "earphones hurting ears what to do" | No — unchanged. hearing-speechcenter, headphonesaddict, Soundcore, HP, Healthline, Headphonesty, Miracle-Ear, Shokz (x2 domains) cited. | No | web_search proxy — SEO-016 remains inconclusive |
| 2026-10-19 | "bone conduction headphones side effects" | **No — fully absent from the top-10 this cycle**, a 2nd straight cycle of regression after 3 stable cycles at ~4th of 10, then ~9th last cycle. | No. hearinghealthmatters.org, soundtrace.com, drip-fly, hearingup, PMC/NIH, Shokz (x2), CavCom, Soundly, Mojawa occupy all 10 slots. | web_search proxy — SEO-039 escalation is now the single most urgent pending item on the board |
| 2026-10-19 | "open ear vs in ear headphones" | No — 9th+ consecutive cycle, zero NG presence in the top-10. Bose, Soundcore (x2), Forbes, beyerdynamic, Shokz (x2), Skullcandy, Avantree dominate — same cast. | No | web_search proxy — escalation (SEO-043) remains the right call, still unexecuted |

## REJECTED / DEAD ENDS
- **Assuming a local `/execute-approved` session's file updates reach the managed agent
  automatically — REJECTED 2026-07-27.** They don't; the agent only ever sees what's on GitHub.
  Three human-approved-and-shipped fixes (SEO-013/014/016, plus the OpenWire title swap and the
  PDP structural change) got silently re-flagged as unaddressed for a full cycle because the local
  updates to tracker.md/queue-inbox.md were never committed+pushed. Always push after
  `/execute-approved`. **Recurred in a milder shape 2026-09-14** — see the CONFIRMED PATTERNS entry
  above.
- **Trusting a tracker.md snapshot without reading its top-of-file correction section first —
  REJECTED 2026-07-27 (2nd time this exact date).** The first same-day run did exactly this and
  produced SEO-017/018/019 as duplicate/false-premise drafts. Reading the ⚠️ SYNC CORRECTION /
  LIVE STATUS SNAPSHOT sections in full, every run, before drafting anything is now non-negotiable.
- **Optimizing a CTR-FIX rewrite purely for a page's nominal target keyword without checking its
  actual top queries by impression — REJECTED 2026-08-03.** SEO-001/003's rewrite of the
  open-ear-vs-in-ear page optimized for "open ear vs in ear headphones" (46 impr) while the page's
  real impression volume sits on generic "in ear earphones"/"over ear earphones" queries the
  rewrite never addressed. Every future CTR-FIX spec must pull and review the page's top queries by
  impression before writing copy.
- **Assuming a generic title/meta rewrite fixes a query-intent mismatch on a PDP the same way it
  does on a blog/collection page — REJECTED 2026-09-14.** SEO-023's plain title/meta swap on the
  SafeBuds PDP (executed 2026-08-04) has now had a full D+30+ read and the PDP's blended CTR sits
  at exactly 1.24%, identical to before — flat, not improved. The specific mismatch (the "wehear"
  query converting 7x worse than the page's blended average) was never targeted. Escalated as
  SEO-036 with a query-specific fix, not another generic rewrite.
- **Assuming a page's numbers not moving after a reported execution means the fix simply needs
  more time — REJECTED 2026-09-28, for cases where the page got measurably worse, not flat.**
  Two pages (WFH/SEO-021, blast page/SEO-028) didn't just fail to improve after their 09-11
  execution — they hit their worst-ever readings. Treating that as "needs more time" would miss a
  likely technical regression (canonical/noindex/slug/template issue). Escalated both with an
  explicit "verify what's actually live first" step (SEO-040, SEO-041) instead of assuming the
  content strategy itself was wrong.
- **Assuming a generic collection-page rewrite closes every query-intent gap on that page in one
  pass — REJECTED 2026-10-05.** SEO-022 (07-27, `/collections/open-ear-headphones`) was a generic
  title/meta rewrite; it left the page's single largest query by impression ("open ear earbuds,"
  31% of the page's traffic) converting 3.7x worse than the page's 2nd-largest query despite never
  being specifically addressed — the page's blended CTR has moved only 1.072%→1.030% (flat) in the
  roughly 10 weeks since. Same lesson as SEO-036's PDP finding, now confirmed on a collection page
  too: a generic rewrite can leave a specific, large query-vocabulary gap completely untouched.
  Escalated as SEO-044 with a query-specific (not generic) fix.
- **Assuming a "resolved/executed" WRITE row closed its original money-keyword gap without
  re-reading its own resolution note for a scope change — REJECTED 2026-10-12.** SEO-030 was
  marked executed 2026-09-11, and for 2 full cycles (09-28, 10-05) this agent did not re-check
  whether its original target phrases ("open ear headphones with mic india," "boom mic open ear
  headset") had actually started returning GSC rows — they hadn't, because the resolution note
  itself recorded a scope change (updated a different, existing article instead). Re-opened with
  correct scope as SEO-045. Lesson: "resolved" status is not the same as "the original gap is
  closed" — always re-read the resolution note's own wording, not just its status, before trusting
  a money keyword will ever move.
- **Treating a page's blended position/CTR collapse as proof of a technical regression without
  first disaggregating its query list — REJECTED 2026-10-19.** `are-noise-cancelling-headphones-
  safe` (SEO-034)'s blended position fell from 5.20 to 18.77 this cycle, superficially matching the
  shape of the WFH/blast-page regressions. Disaggregating showed the collapse was driven entirely
  by a flood of ~2,400 impressions across four newly-appearing, oddly-templated, zero-click queries
  — the actual money query held steady at pos 6.15. Always pull and inspect the full query list
  before escalating a blended-metric collapse as a new regression case.

---

## CYCLE LOG (most recent first)

### 2026-10-19 — Weekly managed-agent cycle: non-branded CTR falls back below target, bone-conduction AEO fully collapses, blast page's 5th zero-click cycle, SEO-034 data-integrity artifact diagnosed, 8th SH-SEO-10 confirmation (glasses-wearers)

**Initiative:** Ninth Monday 08:00 IST managed-agent cycle. Read tracker.md + learning-log.md
first (2 calls) — no new ⚠️ SYNC CORRECTION; confirmed SEO-036 through SEO-045 (10 rows) all still
pending except SEO-038 (executed 2026-10-07, D+30 due 2026-11-06) before drafting anything. Pulled
GSC + GA4 fresh via a direct-API pull script (writes raw JSON to `/tmp`, no analysis in that step),
then four compute-only passes reading those same files: window 2026-09-19→2026-10-18 (30d). GSC
returned 13,127 query×page rows (single page, no truncation — rowLimit 25,000 never hit). GA4
returned 1,511 rows, `len(rows)==rowCount` asserted (no truncation). All page/query/branded/PDP/
landing-page breakdowns reconciled to their parent totals in code (asserted, no mismatches). Read
`queue-inbox.md` directly before drafting — confirmed SEO-036..045 unchanged in status (bar
SEO-038), drafted SEO-046 without collision.

**REGRESSED — non-branded CTR fell back below its own 30-day target, one cycle after first
clearing it:** 0.7757% this cycle vs the 0.8% target, down from 0.8044% last cycle. Overall CTR
(1.6478%) also eased slightly but still clears its 30-day target (1.6%). Organic clicks (2,816)
continue to beat the 2,600 target (+0.4% vs last cycle). GA4 organic revenue (₹4,08,560.55) rose
+2.7% — notably, this moved *with* GSC clicks this cycle rather than diverging against them
(SEO-009's usual pattern did not reproduce this time).

**CONFIRMED — the blast page's top query logged a 5th consecutive 30-day pull at literal zero
clicks:** "bluetooth headphones overheating fix" (12,044 impr, pos 4.23, page-1 position) — still
unexecuted, SEO-040 remains the single largest unclaimed opportunity on the site.

**REGRESSED SHARPLY — bone-conduction-headphones-side-effects' AEO signal, 2nd straight cycle of
decline:** the web_search sweep found NG **fully absent from the top-10** this cycle, down from
~9th of 10 last cycle and ~4th of 10 for the 3 cycles before that. GSC signals on the same page
kept improving (CTR 0.4711%→0.5227%, pos 9.58→9.49) — GSC and AEO are now diverging hard. SEO-039
(pending 5 cycles) is now the single most urgent item on the board, ahead of the blast page.

**NEW — a data-integrity finding, explicitly diagnosed as NOT a regression:** `are-noise-
cancelling-headphones-safe` (SEO-034, flagged for re-check last cycle) showed a blended position
collapse from 5.20 to 18.77 — superficially matching the WFH/blast-page regression shape.
Disaggregating the page's full query list found four near-identical, newly-appearing, zero-click
queries ("for home use / for beginners / worth buying / for small apartments noise cancelling
headphones common problems," ~2,416 impr combined, pos 27–43) that weren't present in prior
cycles — reading as templated/bot-style query noise, not real buyer searches. The actual target
query ("are noise cancelling headphones safe," 48 impr, pos 6.15, 0% CTR) sits roughly where it's
been. Logged as a new confirmed pattern and a new REJECTED entry — a 4th distinct failure mode
alongside SH-SEO-10, the delivery-verification pattern, and the WRITE-scope-change pattern.

**NEW — 8th confirmation of the SH-SEO-10 query-intent-mismatch pattern, on a page never before
surfaced:** `best-headphones-for-glasses-wearers` — its largest query ("which headphones are best
for people who wear glasses all day?", 1,050 impr, 38.5% of the page's 2,728 total impressions)
converts at literal 0% CTR at pos 10.92, while the page's other glasses-wearer queries convert
1.9–7.4% CTR when phrased more directly. Drafted as SEO-046.

**WRINKLE — the WFH/blast-page technical-regression hypothesis got more complicated, not more
confirmed:** the WFH page got worse again on its own metrics (pos 22.86→25.17, named query
51.79→55.90), but this cycle's competitor-SERP check found NG's own page present again in the
general web result set (~5th of 10) — a reversal from the two most recent "zero presence"
readings. A fully de-indexed page would not fluctuate between present and absent for a stable
query set; read as evidence of an unstable ranking signal rather than a hard technical break.
Still only 2 known pages (WFH, blast) — the 3rd-page confirmation bar for formally naming this a
pattern remains unmet.

**RE-CONFIRMED, not re-drafted:** SEO-036 (SafeBuds "wehear" query) — ticked up off the literal-
zero floor to 0.089% CTR (1 click), still ~15x worse than the PDP's own blend. SEO-037 (ES Lite) —
3rd straight cycle of unaided recovery, pos improved again (5.05→4.30), its best reading in many
cycles. SEO-013 (Pro Swimming) — impressions and CTR both up this cycle, demand-side-swing read
continues to hold. SEO-015 (Shokz Alternatives) — "shokz alternatives india" returned 0 rows for a
2nd straight cycle, still read as long-tail noise but due a 3rd-cycle check. SEO-018 (OpenWire) —
CTR up slightly (2.5486%→2.7356%), clicks/impr down, still clear of the disease band. SEO-022/044
(open-ear-headphones collection) — "open ear earbuds" query mismatch narrowing stalled this cycle
(CTR 0.5488%→0.5401%, essentially flat). SEO-032 (bone-conduction collection) — impressions down
this cycle, CTR eased slightly, still just under the 2% disease-band line. SEO-042 (running
cluster) — "best running headphones india" still 0 rows; page itself not independently re-pulled
this cycle. SEO-043 (open-ear-vs-in-ear) — position improved further (9.09→7.65), AEO sweep still
fully absent, 9th+ consecutive cycle. SEO-045 (Comm 2.0 boom-mic phrases) — both exact phrases
confirmed still 0 GSC rows; Comm 2.0 PDP logged its first regression after 4 straight improving
cycles (pos 2.15→2.44, CTR down) — watch-only, not escalation-worthy on one cycle. SEO-033/035
(SafeBuds AI-translation, OpenWire type-c) — not independently re-pulled this cycle, flagged for
explicit re-check next cycle. SEO-009 and SEO-005 not independently re-derived beyond this cycle's
own GSC/GA4 numbers, per the Phase-1-only-reads rule; SEO-005 (earplug cluster) essentially flat
(impr=13,565, clicks=60, ctr=0.4423%, pos=8.43 vs last cycle's 13,681/64/0.4678%/8.65), still
pending founder decision.

**NEW, CRO-adjacent, not drafted:** blog CVR essentially unchanged at the near-zero floor
(0.0551%, 1 txn/1,814 sessions vs last cycle's 0.0531%/1,882 sessions) — noted, not escalated.

**PDP CLUSTER TRACKER — vs prior cycle (10-12):** OpenWire impr −11.7%, clicks −5.3%, CTR up
(2.5486%→2.7356%), pos slightly worse (5.47→5.74) — still clear of the disease band; Comm 2.0 impr
+4.8%, clicks −15%, CTR down (2.9851%→2.4217%), **pos worse (2.15→2.44) — first regression after 4
straight improving cycles**, watch-only; SafeBuds impr +12.5%, clicks +4.3%, CTR down
(1.4007%→1.2994%, still in disease band), pos improved slightly (6.24→6.09), "wehear" query ticked
up off literal-zero (0%→0.089%); ES Lite impr +6.9%, clicks +12.1%, CTR up (2.1113%→2.2142%), **pos
improved again (5.05→4.30)** — 3rd straight cycle of unaided recovery, best reading in many cycles.

**Next sprint change triggered:** SEO-046 (CTR-FIX, `best-headphones-for-glasses-wearers`). Next
free ID after this cycle: **SEO-047.**

---

### 2026-10-12 — Weekly managed-agent cycle: non-branded CTR crosses its 30d target for the first time, blast page 4th straight cycle of zero clicks, AEO regression on bone-conduction-side-effects, SEO-030 scope-change gap found and re-opened as SEO-045

**Initiative:** Eighth Monday 08:00 IST managed-agent cycle. Read tracker.md + learning-log.md
first (2 calls) — no new ⚠️ SYNC CORRECTION section; confirmed SEO-036 through SEO-044 (9 rows)
all still pending approval/execution in both files except SEO-038 (approved 2026-10-07, executed
same day per tracker.md's top-of-file note) — none re-drafted. Pulled GSC + GA4 fresh via a
single direct-API script (writes raw JSON to /tmp, then a compute-only pass reads those same
files in the same run): window 2026-09-12→2026-10-11 (30d). GSC returned 12,868 query×page rows
(single page, no truncation — rowLimit 25,000 never hit). GA4 returned 1,707 rows,
`len(rows)==rowCount` asserted (no truncation). All page/query/branded/PDP/landing-page
breakdowns reconciled to their parent totals in code (asserted, no mismatches). Read
`queue-inbox.md` directly before drafting — confirmed SEO-036..044 unchanged in status (bar
SEO-038), drafted SEO-045 without collision.

**CONFIRMED — non-branded CTR crossed its 30-day target for the first time:** 0.8044% this cycle
vs the 0.8% target, up from 0.7985% last cycle (which had been 0.02pp short). Overall CTR
(1.6785%) eased slightly from last cycle (1.696%) but still clears its own 30-day target (1.6%).
Organic clicks (2,805) continue to beat the 2,600 30-day target, up 2.3% on last cycle.

**CONFIRMED — the blast page's top query logged a 4th consecutive 30-day pull at literal zero
clicks:** "bluetooth headphones overheating fix" (13,018 impr, pos 4.37, page-1 position) has now
recorded 0 clicks across all 4 cycles it has been tracked (09-28, 10-05, 10-12, and the original
08-10 draft's precursor reading). SEO-040 remains unexecuted. This is now flagged as the single
cleanest, largest, most costless-to-verify opportunity on the entire site — it needs no further
diagnosis, only execution. Flagged as this cycle's "do this first."

**NEW diagnostic — WFH page (SEO-041):** its current top queries by impression are now almost
entirely Comm 2.0-branded terms ("ng earsafe comm 2.0 noise cancelling open ear headphones with
mic," 75 impr; "ng earsafe comm 2.0," 48 impr) rather than its original generic WFH framing —
consistent with the page's content having been overwritten/repurposed toward Comm 2.0 copy
specifically. This is a more concrete lead than prior cycles' "something broke" framing, though
the 3rd-independent-page bar for formally confirming this as a pattern (distinct from the SH-SEO-10
query-mismatch pattern) remains unmet — still only 2 known pages (WFH, blast). This cycle's
competitor-SERP check reconfirmed **zero** NG presence in the general web results for the WFH
page's named query, a 2nd straight cycle of total absence.

**REGRESSED — bone-conduction-headphones-side-effects' AEO signal, after 3 stable cycles:** the
web_search sweep position fell from ~4th of 10 (held 08-17 through 10-05) to **~9th of 10** this
cycle — the first reversal since the climb began. GSC signals on the same page kept improving
(CTR 0.4305%→0.4711%, pos 10.23→9.58), so the organic and AEO signals are now diverging in
opposite directions. SEO-039 (the Myths-vs-Facts structural escalation, still pending 4 full
cycles) is now more urgent, not less.

**CLOSED — SEO-020's D+30 AEO window (confirmed MISS):** "are open ear headphones safe" — NG
remains fully absent from the web_search sweep an 8th straight cycle, with the D+30 checkpoint
now passed. Not re-escalated this cycle given the already-deep backlog; flagged for a future
dedicated re-approach. **Also closed, not re-escalated:** SEO-029's D+30 window
(`headset-vs-headphone`) — 2 clicks on 5,037 impr, still effectively a MISS against a 0%→
disease-band-floor recovery target, flagged for a future slot rather than adding an 11th open row.

**NEW — a 3rd distinct failure mode found this cycle, alongside SH-SEO-10 and the
delivery-verification pattern: a "resolved" WRITE row can have had its scope silently changed
during execution, leaving the original money keywords untouched (see CONFIRMED PATTERNS and
REJECTED/DEAD ENDS above).** SEO-030 (Comm 2.0 "boom mic" buying guide) was executed 2026-09-11,
but its own resolution note records that the execution updated an existing video-conferencing
article instead of the originally-briefed content — "open ear headphones with mic india" and
"boom mic open ear headset" remain at literal 0 GSC rows, unchanged since 07-27/08-03. Comm 2.0
is now NG's single strongest-performing PDP this cycle (pos 2.15, 4th straight cycle of
improvement) — the commercial fit is proven, the content for these two phrases simply doesn't
exist. Re-opened with correct scope as **SEO-045**.

**POSITIVE TICKS, not yet credited as trends:** `open-ear-vs-in-ear-vs-over-ear-headphones`
(SEO-025/026/043 target) logged its first positive movement on both CTR and position since its
decline began (CTR 0.1059%→0.1123%, pos 9.87→9.09, impr +13%) — AEO signal unchanged (still fully
absent, 8th+ cycle). `best-out-of-ear-headphones-for-running` (SEO-024/042) logged its first-ever
click (1 click on a branded query) — "best running headphones india" still 0 rows. ES Lite PDP
(SEO-037) improved again unaided (pos 5.53→5.05, now clear of the disease band on CTR too) — 2nd
straight cycle of unaided recovery, increasingly looks cyclical rather than a lasting regression.

**RE-CONFIRMED, not re-drafted:** SEO-036 (SafeBuds "wehear" query) — still literal 0% CTR,
unchanged from last cycle, no further deterioration but no recovery either. SEO-013 (Pro
Swimming), SEO-018 (OpenWire), SEO-032 (bone-conduction collection) — all continuing their
standing trends (Pro Swimming: demand-side swing read holds; OpenWire: softest CTR reading in
several cycles but still clear of the disease band; bone-conduction collection: continuing to
improve, just under the disease-band line). SEO-015 (Shokz Alternatives) — "shokz alternatives
india" returned 0 rows this window vs 113 impr last cycle, flagged as a one-cycle watch item, not
escalated. SEO-033/035 (SafeBuds AI-translation, OpenWire type-c) — both money keywords still 0
rows, not independently re-escalated (distinct from the already-covered SafeBuds/OpenWire issues).
SEO-034 — not independently re-pulled this cycle (not among the named continuity pages tracked
this run), flagged for explicit re-check next cycle. SEO-009 and SEO-005 not independently
re-derived beyond this cycle's own GSC/GA4 numbers, per the Phase-1-only-reads rule; SEO-009's
pattern reproduced again this cycle (GSC clicks +2.3%, GA4 revenue −8.5%) — still a CFO/CRO call.

**NEW, CRO-adjacent, not drafted (outside this department's write scope):** blog CVR fell back
toward its old near-zero floor this cycle (0.0531%, 1 txn/1,882 sessions) after 3 cycles flat at
~0.11% (2 txn) — noted in the weekly report, not escalated as a department draft.

**PDP CLUSTER TRACKER — vs prior cycle (10-05):** OpenWire impr flat (−0.3%), CTR eased further
(3.2754%→2.5486%), clicks down (49→38) — softest OpenWire reading in several cycles but still
clear of the disease band; Comm 2.0 impr +3%, CTR eased (3.3846%→2.9851%), **position improved
again (2.24→2.15) — strongest PDP, 4th straight cycle**; SafeBuds impr −5.2%, CTR down
(1.5580%→1.4007%), still in the disease band, "wehear" query still literal 0%, unchanged; ES Lite
impr +3.6%, CTR up (1.9881%→2.1113%, clear of the disease band), **position improved again
(5.53→5.05)** — 2nd straight cycle of unaided recovery.

**Next sprint change triggered:** SEO-045 (WRITE, Comm 2.0 "boom mic"/WFH-mic phrase re-scope).
Next free ID after this cycle: **SEO-046.**

---

### 2026-10-05 — Weekly managed-agent cycle: blast page and WFH page both worse a 2nd straight cycle, SafeBuds "wehear" fell to literal 0%, 7th SH-SEO-10 confirmation (open-ear-headphones collection), non-branded CTR within 0.02pp of target

**Initiative:** Seventh Monday 08:00 IST managed-agent cycle. Read tracker.md + learning-log.md
first (2 calls) — no new ⚠️ SYNC CORRECTION section; confirmed SEO-036 through SEO-043 (8 rows)
all still pending approval/execution in both files, none re-drafted. Pulled GSC + GA4 fresh via a
single direct-API script (writes raw JSON to /tmp, no analysis in that step), then ran two
compute-only passes reading those files: window 2026-09-05→2026-10-04 (30d). GSC returned 12,360
query×page rows (single page, no truncation). GA4 returned 1,827 rows, `len(rows)==rowCount`
asserted (no truncation). All page/query/branded/PDP/landing-page breakdowns reconciled to their
parent totals in code (asserted, no mismatches). Read `queue-inbox.md` directly before drafting —
confirmed SEO-036..043 unchanged in status, drafted SEO-044 without collision.

**CONFIRMED — both actively-regressing pages from last cycle got worse again, for a 2nd straight
cycle, while their fixes sat unexecuted in the queue:** the blast page's CTR fell again
(0.0184%→0.0062%), its top query's 0-click streak now spans 3 consecutive 30-day pulls on 13,018
impressions at page-1 position; the WFH page fell further still (pos 21.91→23.15, named query
47.53→51.85), and this cycle's competitor-SERP check for the WFH page's exact phrase found **zero**
NG presence in the general web result set — a reversal from 09-28's reading, which had found the
page still present there. Neither page's fix (SEO-040, SEO-041) has moved from "pending" — the
approval-latency problem (now 8 rows deep, 3 cycles old for the oldest 4) is directly compounding
two live regressions, not just slowing new work.

**NEW — a fresh, sharper SafeBuds data point for the already-open SEO-036 hypothesis:** the
"wehear" query, which was already converting 7x worse than the PDP's blended average back in
09-14 (0.17%) and had barely moved by 09-28 (0.1472%), fell this cycle to **literal 0% CTR**
(0 clicks on 1,372 impressions) — even as the PDP's own blended CTR kept climbing (1.40%→1.56%).
The mismatch, not the PDP overall, is now the entire remaining problem on this page.

**NEW — 7th confirmation of the SH-SEO-10 query-intent-mismatch pattern, on
`/collections/open-ear-headphones` (SEO-044):** the page's single largest query by impression,
"open ear earbuds" (6,658 impr, 31% of total), converts at 0.4356% CTR at pos 8.60, while the
page's 2nd-largest query, "open ear headphones" (3,377 impr), converts at 1.5991% at a *better*
position (4.64) on the same page. SEO-022 (07-27, same URL) was a generic rewrite that never
targeted this specific vocabulary gap, and the page's blended CTR has moved only 1.072%→1.030%
(flat) since. Drafted as SEO-044 with a query-specific fix (add "earbuds" to title/H1/copy + FAQ
entry), not another generic rewrite — same lesson as SEO-036, now confirmed on a collection page.

**CONFIRMED — non-branded CTR is now within 0.02pp of its own 30-day target:** 0.7985% this cycle
vs 0.8% target, up from 0.7668% last cycle. Overall CTR (1.696%) also climbed further past its
30-day target (1.6%), continuing toward the 2.0% 60-day target.

**INCONCLUSIVE, 3rd variant — "open ear headphones" joint-movement pattern:** position slipped
slightly (4.48→4.79) while CTR *improved* (1.4500%→1.5350%) — the inverse of 09-28's divergence and
different again from the earlier joint-improvement streak. All three possible combinations have now
appeared on this one keyword within 10 weeks; both metrics still comfortably clear their targets.
Read as noise around a stable high performer, not a pattern.

**RE-CONFIRMED, not re-drafted:** SEO-020 (AEO, "are open ear headphones safe") — D+30 window
(~10-11) not yet reached, NG still absent. SEO-039 (AEO, bone-conduction-side-effects) — 3rd
straight cycle holding the same ~4th-of-10 web_search position, stable but un-escalating, still
pending approval. SEO-013 (Pro Swimming), SEO-015 (Shokz Alternatives), SEO-018 (OpenWire), SEO-032
(bone-conduction collection) — all continuing positive or flat trends, not re-opened. SEO-029
(headset-vs-headphone) and SEO-034 (are-noise-cancelling-headphones-safe) — both still inside their
D+30 windows (~10-11), spot-checked only. SEO-009 and SEO-005 not independently re-derived beyond
this cycle's own GSC/GA4 numbers, per the Phase-1-only-reads rule; both known-open per tracker.md.

**PDP CLUSTER TRACKER — vs prior cycle (09-28):** OpenWire impr −4.6%, CTR eased (3.57%→3.28%) but
clear of the disease band, pos slipped slightly (5.23→5.48); Comm 2.0 impr −7.2%, CTR eased
(3.78%→3.38%), pos improved further (2.44→2.24) — strongest PDP again, 3rd straight cycle; SafeBuds
impr flat, clicks +10%, CTR up (1.40%→1.56%) but still in the disease band, pos slipped (6.08→6.27),
"wehear" query fell to literal 0% (see above); ES Lite impr flat, CTR eased just under 2%
(2.14%→1.99%), pos improved (6.01→5.53) — recovering without any fix shipping.

**Next sprint change triggered:** SEO-044 (CTR-FIX, open-ear-headphones collection query
mismatch). Next free ID after this cycle: **SEO-045.**

---

### 2026-09-14 — Weekly managed-agent cycle: SEO-020..035 synced to Resolved, 5th SH-SEO-10 confirmation (PDP-level), both headline metrics beat target, cross-file sync gap flagged

**Initiative:** Managed-agent cycle under the Monday 08:00 IST cadence. Read tracker.md +
learning-log.md first (2 calls) — tracker.md's top-of-file blockquotes (dated 2026-09-09 and
2026-09-11) stated SEO-020 through SEO-035 are all resolved (10 explicitly named EXECUTED
2026-09-11; the rest covered by the same blanket statement). Treated as authoritative per standing
instruction and did not re-derive individual outcomes. Pulled GSC + GA4 fresh via direct APIs in
two scripts (pull-only writing raw JSON to /tmp, then compute-only reading those files): window
2026-08-15→2026-09-13 (30d). GSC returned 14,312 query×page rows (single page, no truncation).
GA4 returned 2,189 rows, `len(rows)==rowCount` asserted (no truncation). All page/query/branded/
PDP/landingPage/blog breakdowns reconciled to their parent totals in code (asserted, no
mismatches). Read `queue-inbox.md` directly before drafting — its row bodies still showed
pre-09-09 "APPROVED, awaiting execute-approved" text for SEO-020-035, inconsistent with tracker.md's
newer blockquotes; reconciled by moving all 16 rows to Resolved (compact) this session, per
tracker.md's authority.

**FLAGGED — a real cross-file sync gap, distinct from the 07-27 incident:** queue-inbox.md shows an
intermediate cycle ran on 2026-08-24 (SEO-034/035 drafted, SEO-013/015 D+30 verdicts closed) that
never reached tracker.md's CURRENT SPRINT table or this file's CYCLE LOG (both still showed
2026-08-17 as the last entry). Separately, tracker.md's 09-09/09-11 blockquotes recorded real
approvals+executions that queue-inbox.md's row bodies hadn't caught up to until this session. Same
root cause as the 07-27 postmortem (independent file updates, no single session pushing all three
together) in a milder shape. Flagged as this cycle's "Do this first" in the weekly report.

**CONFIRMED — both headline targets cleared for the first time:** overall CTR (1.70%) cleared its
30-day target (1.6%) for the first time on record; "open ear headphones" position (4.73) beat its
**90-day** target (5.0) six weeks early, with CTR improving alongside it (1.1990%→1.5241%) —
continuing to support a reversal of the old "rank gains don't convert" pattern, though the
non-contiguous window means this isn't formally credited as a clean multi-cycle confirmation yet.

**NEW — 5th confirmation of the SH-SEO-10 query-intent-mismatch pattern, first time on a PDP
(SEO-036):** SafeBuds' PDP (`/products/ngwehear`) earns 43% of its impressions (1,768 of 4,123) on
the single query "wehear," converting at 0.17% CTR — ~7x worse than the page's own 1.24% blended
average. SEO-023's earlier generic title/meta rewrite (executed 2026-08-04) never targeted this
specific query and has now plateaued at exactly the same 1.24% CTR after a full D+30+ read —
grounds for a REJECTED entry above and a fresh, query-specific escalation.

**NEW — RANK/GAP (SEO-037):** ES Lite's PDP position fell from 3.36 (last logged cycle) to 6.12
this cycle — the sharpest move of any tracked PDP, and the first time it's entered the CTR-disease
band. Not a named target of the 09-11 execute-approved batch, so a template-regression check is
the first lever, paired with a reinforcement rewrite.

**NEW — WRITE (SEO-038):** "best headphones for teaching online" — an existing, near-invisible page
(1,898 impr/30d, 0.11% CTR, pos 10.25) distinct from the WFH/office-worker cluster already covered
by SEO-014/021, targeting the teacher persona specifically.

**NEW — AEO (SEO-039):** "bone conduction headphones side effects" continues its multi-cycle climb
in the web_search sweep (~8th → ~5th → **~4th of 10** this cycle) — the best reading of any
monitored query. Escalated past SEO-031 (which only shipped 3 days before this pull) with a
structured comparison table + Speakable schema + consolidated internal links, rather than waiting.

**RE-CONFIRMED, not re-drafted:** SEO-020/026 (AEO fixes, both executed 2026-09-11) — both queries
still show NG absent in this cycle's web_search sweep, expected given only 3 days live; D+14 reads
due ~2026-09-25. SEO-016 ("earphones hurting ears," still inconclusive). SEO-022/024/025 (resolved
per tracker.md's blanket statement) — spot-checked this cycle's GSC numbers, none show a
fix-driven improvement yet, consistent with very recent execution; not re-drafted. SEO-005
(earplug cluster, 15,108 impr/52 clicks/0.34% CTR/pos 10.69 — roughly unchanged, still pending
founder decision). SEO-009 (GA4 organic revenue ₹3,69,508.15 vs GSC clicks 2,726 — both moved up
together this cycle, +1.3% and +0.6% — a good sign, not resolving, still not this agent's call).

**PDP CLUSTER TRACKER — vs last logged cycle (08-17, non-contiguous ~4-week gap):** OpenWire impr
−41% but CTR up hard (2.15%→2.92%, now clear of the disease band), pos worse (4.19→5.50); Comm 2.0
impr +11%, CTR up (2.09%→3.25%), pos improved (3.49→3.19) — strongest PDP this cycle; SafeBuds impr
−12%, CTR flat (1.24%→1.24%, grounds SEO-036), pos improved (6.40→5.95) but still in the disease
band; ES Lite impr −38%, CTR up (0.98%→2.00%) but pos fell hard (3.36→6.12, grounds SEO-037). All
totals combine each PDP's base URL with its `?variant=...` GSC rows (same canonical page).

**Next sprint change triggered:** SEO-036 (CTR-FIX, SafeBuds "wehear" query), SEO-037 (RANK/GAP, ES
Lite PDP position), SEO-038 (WRITE, teaching-online cluster), SEO-039 (AEO escalation,
bone-conduction-side-effects). Next free ID after this cycle: **SEO-040.**

---

### 2026-08-17 — Weekly managed-agent cycle: 4th SH-SEO-10 confirmation (bone-conduction collection), WFH's 7th straight decline, SEO-026's D+14 checkpoint missed

**Initiative:** Fifth Monday 08:00 IST managed-agent cycle. Read tracker.md + learning-log.md
first (2 calls). No ⚠️ SYNC CORRECTION present. Read `queue-inbox.md` directly before drafting —
confirmed SEO-020/021/022/024/025/026/027 still APPROVED-unexecuted (now 13 days), SEO-023 still
EXECUTED, SEO-028/029/030/031 still pending-unapproved, all unchanged in state since 08-10. Zero
collisions, nothing re-drafted. Pulled GSC + GA4 fresh via direct APIs: window 2026-07-18→
2026-08-16 (30d). GSC returned 16,459 query×page rows (single page, no truncation). GA4 returned
2,081 rows, `len(rows)==rowCount` asserted. All breakdowns reconciled (asserted, no mismatches).

**NEW — 4th confirmation of SH-SEO-10, on a fresh collection page (SEO-032):**
`/collections/bone-conduction-headphones` (4,569 impr, 0.83% CTR, pos 6.52). Its 2nd/7th-largest
non-branded queries ("bone anchored earphones" 320 impr, "bone anchor headphones" 133 impr) are
BAHA medical-device searches, not consumer buyers; the real money term "bone conduction headphones
india" gets only 153 impr at pos 8.81. Drafted as SEO-032.

**NEW — WRITE (SEO-033):** "open ear wireless earbuds india" and "open ear earbuds ai
translation" both return 0 GSC rows. SafeBuds' own PDP earns ~75% of its impressions on branded
"wehear" terms only.

**CONFIRMED — approval-to-execution latency actively missing its own checkpoints.** The same 7
rows (SEO-020/021/022/024/025/026/027) are now 13 days unexecuted, three full weekly cycles. WFH
extended to a 7th straight cycle of decline (pos 13.87). SEO-026's own D+14 AEO read checkpoint
arrived today with the fix never shipped.

**Next sprint change triggered:** SEO-032 (CTR-FIX, `/collections/bone-conduction-headphones`),
SEO-033 (WRITE, SafeBuds "open ear wireless earbuds india" / AI-translation cluster). Next free ID
after this cycle: **SEO-034.**

---

### 2026-08-10 — Weekly managed-agent cycle: 2 new CTR-FIX finds via the query-intent-mismatch pattern, WFH's 6th straight decline, approval latency now flagged as measurable

**Initiative:** Fourth Monday 08:00 IST managed-agent cycle. Read tracker.md + learning-log.md
first. No ⚠️ SYNC CORRECTION present. Read `queue-inbox.md` directly — confirmed SEO-020/021/022/
024/025/026/027 all APPROVED by Meet (2026-08-04) awaiting `/execute-approved`, SEO-023 EXECUTED —
none re-drafted. Pulled GSC + GA4 fresh: window 2026-07-11→2026-08-09 (30d). GSC returned 16,371
rows (no truncation). GA4 returned 1,947 rows, `len(rows)==rowCount` asserted. All breakdowns
reconciled.

**NEW — 2 fresh CTR-FIX finds via SH-SEO-10:** `can-bluetooth-earphones-cause-a-blast` (5,932
impr, 0.15% CTR, pos 5.69 — 62% of volume on "why does wireless earbuds overheat," a different
angle) and `headset-vs-headphone` (4,617 impr, 0.00% CTR, pos 9.46 — zero clicks across 10+
distinct "X vs Y" queries). Drafted as SEO-028/029.

**NEW — WRITE (SEO-030):** "open ear headphones with mic india" / "boom mic open ear headset" both
0 GSC rows. Comm 2.0 primary CTA.

**NEW — AEO (SEO-031):** "bone conduction headphones side effects" is the only one of the 5
monitored queries where NG's own page already surfaces organically (~8th of 10) rather than being
fully absent — drafted a direct-answer opener + FAQ expansion specifically for this page.

**CONFIRMED — approval-to-execution latency is now a measurable drag.** 7 rows sat APPROVED since
2026-08-04 across two full cycles with zero execution; non-branded CTR fell a 4th straight week;
WFH posted a 6th straight cycle of decline. SEO-023, the one row that did execute, is the only PDP
showing a CTR improvement this cycle.

**Next sprint change triggered:** SEO-028, SEO-029, SEO-030, SEO-031. Next free ID after this
cycle: **SEO-032.**

---

### 2026-08-03 — Weekly managed-agent cycle: first valid July-rewrite read, 3rd-cycle AEO escalation, SafeBuds/WFH still unapproved

**Initiative:** Third Monday 08:00 IST managed-agent cycle. Read tracker.md + learning-log.md
first; confirmed no ⚠️ SYNC CORRECTION pending. Pulled GSC + GA4 fresh: window 2026-07-04→
2026-08-02 (30d). GSC returned 16,283 rows (no truncation). GA4 returned 1,936 rows,
`len(rows)==rowCount` asserted. All breakdowns reconciled. Read queue-inbox.md directly before
drafting — confirmed SEO-020 through SEO-024 all still pending, zero collisions.

**CONFIRMED — first valid 30-day read on the July rewrites (SEO-001/002/003/007/008) is now in:**
mixed result. SEO-007 (vertigo) and SEO-008 (brain side-effects) show early promise, above the
disease band's average. SEO-002 (bone-conduction-side-effects) is middling (0.52% CTR) but the
page now surfaces in web_search results. SEO-001/003 (open-ear-vs-in-ear-vs-over-ear-headphones)
is a clear miss (0.11% CTR on 13,992 impr/30d) — root cause diagnosed as a content-intent mismatch,
escalated as SEO-025 (CTR-FIX) + SEO-026 (AEO).

**CONFIRMED — "open ear vs in ear headphones" AEO absence hit its 3-cycle escalation trigger.**
Folded into SEO-026 on the same page as the CTR-FIX.

**NEW — SEO-027 (WRITE, ES Lite budget cluster):** "open ear earphones under 2000" and "budget
open ear earphones india" both return 0 GSC rows this cycle — genuine zero presence.

**Next sprint change triggered:** SEO-025, SEO-026, SEO-027. Next free ID after this cycle:
**SEO-028.**

---

### 2026-07-27 (corrected run) — PDP cluster first pull + 4 new drafts (SEO-021–024), zero re-drafts

**Initiative:** Ran the weekly cycle again same-day, after the sync-correction fixed tracker.md
and queue-inbox.md. Re-pulled GSC + GA4 fresh (2026-06-27→2026-07-26 window, same as the flawed
earlier run — GSC numbers reproduced identically: 15,424 rows, 2,449 clicks, 1,84,827 impr,
confirming no new data arrived intraday). Read tracker.md's LIVE STATUS SNAPSHOT and SYNC
CORRECTION in full before drafting this time — confirmed SEO-013/014/015/016/017/018/019/020 are
all either executed or already-queued-and-pending, and drafted **nothing** against any of them.

**NEW — first real PDP Cluster Tracker pull:** OpenWire 1,394 impr/83 clicks/5.95% CTR/pos 6.38;
Comm 2.0 1,783/43/2.41%/2.74; SafeBuds 4,726/43/0.91%/5.10; ES Lite 1,509/24/1.59%/3.65. Only
SafeBuds crosses the CTR-disease gate — drafted as **SEO-023**. Labeled all 4 as first-read
baselines; explicitly did NOT compare OpenWire's 1,394 impr/30d figure against the tracker's old
"648 clicks/90d" number (a different page/window).

**NEW — WFH page's OPEN FLAG finally drafted (SEO-021):** the content↔promise mismatch identified
during SEO-014's execution had sat unassigned for two cycles while the page kept declining.

**NEW — 2 more CTR-FIX candidates (SEO-022, `/collections/open-ear-headphones`) and confirmed via
the PDP pull (SEO-023, above).**

**NEW — WRITE gap on the Running/Safety cluster (SEO-024):** "best running headphones india"
returns 0 rows; the existing page is thin and near-invisible.

**Next sprint change triggered:** SEO-021, SEO-022, SEO-023, SEO-024. Next free ID after this
cycle: **SEO-025.**

---

### 2026-07-27 — Sync-gap postmortem: three cycles of duplicate drafts, root cause + fix

**What happened:** `/execute-approved` sessions on 2026-07-21 and 2026-07-22 executed SEO-013
through SEO-019 live (5 Shopify writes + 1 structural doc change), and updated
`APPROVALS_QUEUE.md`, `DECISION_LOG.md`, `tracker.md`, `queue-inbox.md`, and this file locally —
but those file changes were never committed and pushed to GitHub. The managed agent reads only
`tracker.md` + `learning-log.md` from GitHub — it had no way to know any of that work happened.
Its 2026-07-27 run, working from a tracker that still said "start at SEO-013," drafted new content
and mislabeled it SEO-017 through SEO-020. Three of those four collided with IDs already used by
real, executed work.

**Root cause:** a broken feedback loop, not an agent error. Nothing enforced that a human
`/execute-approved` session pushes its tracker/queue-inbox/learning-log updates back to GitHub
before the next scheduled agent run.

**Fix applied this session:** `tracker.md` corrected (SEO-013/014/015/016/017/018/019 marked
executed; the three 07-27 duplicate drafts marked VOID with the reason); `queue-inbox.md`
corrected the same way, VOID rows kept (not deleted) so the ID collision is visible in history.

**Process learning carried forward:** any `/execute-approved` run touching a managed-agent
department must commit+push that department's tracker.md/queue-inbox.md/learning-log.md in the
same session. Treat "did I push?" as part of the execution checklist, not an afterthought.

**Next sprint change triggered:** none new — this cycle is corrective, not additive.

---

### 2026-07-27 — Weekly managed-agent cycle: GSC + GA4 direct-API pulls, 5 AEO checks + 1 competitor-SERP check

**Initiative:** Second run under the Monday 08:00 IST managed-agent cadence, and the first cycle
where both GSC and GA4 are confirmed direct-API pulls. Window 2026-06-27→2026-07-26 (30d). GSC:
15,424 query×page rows (no truncation). GA4: 1,857 rows, `len(rows)==rowCount` asserted. All
breakdowns reconciled.

**⚠️ Note added by the corrected same-day run:** this cycle's SEO-017/018/019 drafts were VOID —
see the sync-gap postmortem entry above.

**CONFIRMED — rank gains still not converting to clicks, and it's spreading:** "open ear
headphones" position (8.59) again beats the 9.0 target, but CTR on it fell again (0.61%→0.29%).
Site-wide, non-branded CTR fell too (0.73%→0.69%).

**PENDING — July rewrites (SEO-001/002/003/007/008):** Still inside the too-early window. First
valid 30-day read remains 2026-07-31.

**Next sprint change triggered:** superseded — see the corrected-run entry above for what actually
shipped (SEO-020 reconfirmed; SEO-021–024 new).

---

## SCALE HYPOTHESIS BACKLOG (per COMPANY_STATE §5.5 — test → validate → scale)

> Falsifiable bets on what wins clicks + AEO citations. Scale bar: non-branded CTR + position trend up on the target cluster, AEO citation captured. A confirmed pattern gets rolled across the cluster; a rejected one is retired.

| # | Hypothesis (metric + threshold) | Test (smallest move) | Status | Linked queue |
|---|---|---|---|---|
| SH-SEO-1 | Adding an 8-Q FAQPage schema to high-impression health-scare pages wins AEO citations and lifts CTR toward 3% within 30–60 days. | Ship SEO-007 (vertigo) + SEO-003 (comparison) schema, recheck CTR + AI citation at 30/60 days. | OPEN — SEO-007 held steady in the 1.3–1.4% range through 08-17, above the disease-band average each cycle it was read. | SEO-007, SEO-003, SEO-002 |
| SH-SEO-2 | "India 2026 + price/use-case" front-loaded titles lift CTR on top-10 CTR-disease pages without hurting position. | Ship SEO-001/004/008 rewrites, read CTR + pos at 28 days. | MIXED — SEO-008 held above the disease-band average through 08-17; SEO-001 kept missing and was escalated as SEO-025 (now resolved per tracker.md's 09-11 sync note, still showing a miss this cycle — new low 09-28, essentially unchanged 10-05/10-12, improving on position 10-19). | SEO-001, SEO-004, SEO-008 |
| SH-SEO-3 | With Comm 2.0 stock cleared, adding Comm 2.0 as a primary CTA on WFH/commercial pages lifts SEO→D2C conversion without harming rankings. | Add Comm 2.0 CTA to SEO-004/006 pages, watch assisted conversions. | OPEN — newly unblocked by CEO stock clearance 2026-06-27. | SEO-004, SEO-006, CSO-001 |
| SH-SEO-4 | A dedicated India-focused "Shokz alternatives" comparison page can capture organic share of a cluster NG currently has zero presence in, within 60 days of publish. | Ship SEO-015/SEO-019, read GSC rank + clicks at 30/60 days. | CLOSED — D+30 MISS on clicks (0 clicks across the full 5-week live window despite position improving to 5.06), per queue-inbox.md 2026-08-24. Clicks now flowing (6 clicks/113 impr/pos 6.58, 10-05) — noted, not re-opened. This cycle (10-12): "shokz alternatives india" returned 0 rows — flagged as a one-cycle watch item. This cycle (10-19): 0 rows again, 2nd straight cycle — due a 3rd-cycle check before continuing to dismiss. | SEO-015, SEO-019 |
| SH-SEO-5 | Adding a direct-answer FAQPage block for adjacent pain-point queries ("earphones hurting ears") to an already-authoritative page (vertigo blog) wins AI-answer consideration faster than a new standalone page would. | Ship SEO-016, recheck AEO citation proxy at 14 days. | OPEN — still inconclusive as of 2026-10-19; NG remains absent, Shokz's footprint has grown. | SEO-016 |
| SH-SEO-9 | The first PDP-level GSC pull reliably surfaces CTR-disease-band members that thematic-cluster tracking alone misses. | Ship SEO-023 (SafeBuds CTR-FIX), read CTR/position at 30 days. | CLOSED (plateaued) — D+30+ read 2026-09-14 shows CTR flat at exactly 1.24%, identical to the pre-read baseline. Escalated with a query-specific fix as SEO-036 (still pending, 5 cycles now). | SEO-023, SEO-019, SEO-036 |
| SH-SEO-10 | A CTR-FIX rewrite that targets a page's actual top queries by impression (not just its nominal target keyword) recovers CTR meaningfully faster than a rewrite targeting the exact-match phrase alone. | Ship SEO-025 (open-ear-vs-in-ear page), read CTR at 30 days. | OPEN — **8th confirmation 2026-10-19** (`best-headphones-for-glasses-wearers`, "which headphones are best for people who wear glasses all day?" converting at literal 0% CTR at pos 10.92 while the page's other glasses-wearer queries convert 1.9–7.4%) — pattern now confirmed 8 times across blog (×2 distinct pages), collection (twice, for 2 distinct reasons), and PDP page types. SEO-044's "open ear earbuds" mismatch narrowing stalled this cycle (0.5488%→0.5401%, essentially flat). | SEO-025, SEO-028, SEO-029, SEO-032, SEO-036, SEO-040, SEO-044, SEO-046 |
| SH-SEO-13 | A page that already surfaces organically but hasn't won AI citation (bone-conduction-headphones-side-effects) reaches citation faster via a targeted direct-answer+FAQ expansion than a fully-absent page does. | Ship SEO-031, recheck AEO citation proxy at 14 days. | OPEN — SEO-031 executed 2026-09-11 per tracker.md. Page held its best-ever position in the web_search sweep (~4th of 10) for 3 straight cycles (08-17→10-05), **regressed to ~9th of 10 (10-12), then fully absent from the top-10 (10-19)** — a 2nd straight cycle of decline. SEO-039 (further escalation) still pending approval, now 5 cycles, the single most urgent item on the board. | SEO-031, SEO-039 |
| SH-SEO-16 | A query-specific (not generic) title/meta + FAQ fix on a PDP recovers CTR on its single worst-converting query, where a prior generic rewrite on the same page plateaued. | Ship SEO-036 (SafeBuds "wehear" query), read CTR on that specific query at 30 days (2026-10-13) against the 0.17% baseline. | OPEN — still pending approval as of 2026-10-19 (5 cycles now); "wehear" query CTR ticked up off the literal-zero floor to 0.089% this cycle (1 click) — still ~15x worse than the PDP's own blend, neither a clean recovery nor further deterioration. | SEO-036 |
| SH-SEO-17 | A PDP whose position falls sharply outside a template-change window is more likely a regression to check/revert than a genuine ranking loss to content-fix. | Ship SEO-037 (verify ES Lite's title/meta/canonical unchanged; reinforce if confirmed clean), read position at 30 days against the 6.12 baseline. | OPEN — still pending approval; ES Lite's position recovered for a 3rd straight cycle this cycle (5.05→4.30), its best reading in many cycles, now very strong evidence the original drop was cyclical rather than a lasting technical regression. **The underlying hypothesis (technical regression over content failure) continues to apply to the much larger, still-worsening/fluctuating cases — SEO-040/041.** | SEO-037, SEO-040, SEO-041 |
| SH-SEO-18 | A persona-specific rewrite (teachers, not generic WFH office workers) of an existing thin page can lift CTR/position on its own distinct keyword cluster. | Ship SEO-038 ("best headphones for teaching online"), read CTR/position at 30 days against the 0.11%/10.25 baseline. | **EXECUTED 2026-10-07** (approved same day via /approvals, executed same day via /execute-approved per tracker.md — Shopify Article 751511568663 rewritten). D+30 read due 2026-11-06. Spot-check 2026-10-12 (5 days post-execution): ctr=0.0738% pos=10.68 — essentially unchanged as expected. Spot-check 2026-10-19 (12 days post-execution): ctr=0.3215% pos=8.09 — both up, early positive signal, still too early to credit. | SEO-038 |
| SH-SEO-19 | Mirroring a winning competitor's exact content framing (Shokz UK's "Myths vs Facts" structure) on a page already close to AI citation closes the remaining gap faster than a generic FAQ expansion alone. | Ship SEO-039, recheck AEO citation proxy at 14 days (2026-09-28) against this cycle's ~4th-of-10 baseline. | OPEN — SEO-039 still unshipped (pending approval, 5 cycles); page's unaided position regressed to ~9th of 10 (10-12) then **fully absent from the top-10 (10-19)** — a 2nd straight cycle of decline, now the strongest evidence yet that an un-escalated, un-fixed position is not stable long-term and can collapse entirely. | SEO-039 |
| SH-SEO-20 | A structural format change (comparison table + FAQ above the fold, not incremental prose edits) succeeds on a page where two prior incremental fixes (CTR-FIX + AEO) both failed to move either signal. | Ship SEO-043 (open-ear-vs-in-ear-vs-over-ear-headphones), read CTR at 30 days (2026-10-28) and AEO citation proxy at 14 days (2026-10-12) against this cycle's 0.0868% CTR / 6th-cycle-absence baseline. | OPEN — still pending approval; page's position has now improved for 2 straight cycles (9.09→7.65), CTR eased slightly off last cycle's tick, while the AEO signal stayed fully absent (9th+ cycle) — GSC and AEO continue to diverge, still unexecuted. | SEO-043, SEO-025, SEO-026 |
| SH-SEO-21 | A delivery-verification-first fix on a page that got worse immediately after its own reported execution (SEO-040/041) will show the underlying technical issue within 1-2 cycles of being approved, rather than requiring a full D+30 content read. | Ship SEO-040 (blast page) and SEO-041 (WFH page), read both at D+14 (2026-10-19) for any technical-fix signal before the D+30 content read (2026-10-28/11-04). | OPEN — still unexecuted as of 2026-10-19 (4th cycle for SEO-040, 4th for SEO-041). Blast page's top query logged a **5th consecutive cycle of literal zero clicks**; WFH page got worse again on its own metrics but this cycle's competitor-SERP check found NG's page present again in the general web results — complicating, not resolving, the technical-regression read. Both strengthen the case for shipping the fixes rather than testing them, since neither has shipped yet. | SEO-040, SEO-041 |
| SH-SEO-22 | A WRITE brief's "resolved/executed" status can mask a scope change that leaves the original money keywords untouched — re-reading the resolution note's own wording (not just its status) at the next cycle after execution catches this faster than waiting for a D+30 zero-row re-check to trigger escalation on its own. | Ship SEO-045 (Comm 2.0 "boom mic"/WFH-mic phrase re-scope, re-opening SEO-030's original brief), read both target phrases' GSC row-count at D+30 (2026-11-11). | OPEN — both target phrases confirmed still 0 GSC rows this cycle (10-19) too; Comm 2.0 PDP logged its first regression after 4 straight improving cycles, watch-only. | SEO-045, SEO-030 |
| SH-SEO-23 | A page's blended position/CTR collapse can be a data-integrity artifact (a flood of unrelated, oddly-templated, zero-click queries) rather than a genuine technical regression — disaggregating the query list before escalating catches this. | Re-check SEO-034 at D+30 after this cycle's diagnostic; if the four templated queries persist or grow, treat as a recurring GSC data-quality issue to flag for Meet rather than a content problem to fix. | NEW, 2026-10-19 — found on `are-noise-cancelling-headphones-safe` (SEO-034): blended position fell from 5.20 to 18.77, but the actual money query held steady at pos 6.15; the collapse was driven by ~2,400 impr across 4 newly-appearing, zero-click, oddly-phrased queries. | SEO-034 |
