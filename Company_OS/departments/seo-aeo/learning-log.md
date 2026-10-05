# SEO & AEO — Learning Log

> Institutional memory. `/deep-loop` appends weekly; `/standup` reads here. Never delete — supersede.
> Seeded from `[[ng-seo-aeo-learning-log]]`, `[[ng-seo-aeo-baseline]]`.

## HOW TO LOG
```
DATE | INITIATIVE | HYPOTHESIS | RESULT (confirmed/rejected/inconclusive) | LEARNING CARRIED FORWARD
```

## CONFIRMED PATTERNS (institutional truths)
- Non-branded CTR (0.48%) is the crisis metric; pos 4–10 high-impression pages rewritten title/meta = fastest revenue.
- Informational blog traffic monetizes only with contextual CTAs (was ~0% CVR before Jun 2 install). **Update 2026-09-14: first non-zero blog CVR ever logged (0.12%, 2 txn/1,708 sessions this cycle)** — still far below the 0.5% target, but the ~0% streak is broken. Watch next cycle before declaring a trend. **Update 2026-09-28: 2nd cycle, roughly flat (0.1072%, 2 txn/1,865 sessions)** — the streak stays broken but hasn't grown; not yet a trend. **Update 2026-10-05: 3rd cycle, still flat (0.1079%, 2 txn/1,853 sessions)** — three consecutive cycles now hovering at ~0.11% CVR on a near-constant 2 transactions/month; this looks like a stable low floor, not organic growth yet. Still not formally a trend.
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
  keyword, not a pattern of any kind, until a clearer multi-cycle signal emerges.
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
  specific vocabulary gap and the page's blended CTR has moved only 1.072%→1.030% since (flat).
  Drafted as SEO-044 — now confirmed 7 times, across blog, collection, and PDP page types, and
  specifically on this exact collection page for the 2nd distinct reason (BAHA mismatch was the
  bone-conduction collection's version, SEO-032; this is the sibling open-ear collection's version).
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
  2026-09-28 and 2026-10-05** — no new sync gap found either cycle; SEO-036..043 correctly shown
  pending in both tracker.md and queue-inbox.md before drafting SEO-044.
- **Always read tracker.md's LIVE STATUS SNAPSHOT / ⚠️ SYNC CORRECTION section in full before
  drafting anything, every run — not just after a known incident.** Confirmed necessary again
  2026-07-27: a same-day earlier run had already produced 3 duplicate/false-premise drafts
  (SEO-017/018/019) purely because it trusted a stale snapshot. The correction lived only in the
  tracker's top section, not in the standing rules — reading it first is what prevented a repeat.
  **Reconfirmed clean 2026-08-03, 2026-08-10, 2026-08-17, 2026-09-14, 2026-09-28, and 2026-10-05**
  (no ⚠️ SYNC CORRECTION section present this cycle; SEO-036..043 confirmed still pending in both
  tracker.md and queue-inbox.md before drafting SEO-044, avoiding any duplicate IDs).
- **Approval-to-execution latency is now a measurable drag on the crisis metric, not just a
  process complaint.** New pattern, 2026-08-10: 7 rows (SEO-020/021/022/024/025/026/027) sat
  APPROVED by Meet since 2026-08-04 without execution across multiple weekly cycles, during which
  non-branded CTR fell for several straight weeks and the WFH page posted a 7-straight-cycle
  decline (through 08-17). **Update 2026-09-14: this backlog finally cleared — tracker.md records
  SEO-020 through SEO-035 as all resolved/executed by 2026-09-11,** roughly 5–6 weeks after
  approval for the oldest rows. The metrics moved well in the interim (overall CTR cleared its 30d
  target, "open ear headphones" position beat its 90d target) — consistent with the standing
  observation that execution, not just approval, is what moves the numbers, though the multi-week
  gap makes it impossible to cleanly attribute which specific fix drove which specific metric this
  cycle. **Update 2026-09-28: the newer backlog is repeating the same shape** — SEO-036..039
  (drafted 09-14) are still sitting pending two full weekly cycles later, unapproved. Meanwhile two
  of the pages fixed in the *prior* backlog (WFH/SEO-021, blast page/SEO-028) got measurably worse
  right after their execution, which is a different and more urgent problem than latency alone —
  see the new CONFIRMED PATTERN entry below. **Update 2026-10-05: the backlog has now grown to 8
  rows (SEO-036 through SEO-043), with SEO-036..039 at 3 full weekly cycles pending and SEO-040..043
  at 1 cycle pending — and the two actively-regressing pages (blast/SEO-040, WFH/SEO-041) both got
  worse again this cycle while sitting in the queue.** This is no longer just a latency drag on the
  crisis metric; it is actively compounding two live regressions. Flagged as the top "do this first"
  item in this cycle's report.
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
  2nd cycle of decline.**

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
| 2026-07-27 | best-noise-canceling-headset-for-wfh (page) | 6.31 (07-20) | 8.34 | 0.08% | 0.10% | 4th straight cycle of decline; impressions down 65% since 06-27. SEO-014 (the H1/FAQ fix) already live and did not arrest it — the real lever (content↔promise mismatch) drafted as SEO-021. |
| 2026-08-03 | best-noise-canceling-headset-for-wfh (page) | 8.34 (07-27) | 9.52 | 0.10% | 0.099% | 5th straight cycle of decline. SEO-021 drafted and unapproved for a full week; upgraded to urgent, not re-drafted. |
| 2026-08-10 | best-noise-canceling-headset-for-wfh (page) | 9.52 (08-03) | 11.68 | 0.099% | 0.246% | 6th straight cycle of decline. SEO-021 approved 2026-08-04 but still unexecuted a full week later. |
| 2026-08-17 | best-noise-canceling-headset-for-wfh (page) | 11.68 (08-10) | 13.87 | 0.246% | 0.290% | 7th straight cycle of decline (4.06→5.36→6.31→8.34→9.52→11.68→13.87). SEO-021 now 13 days approved-and-unexecuted. |
| 2026-09-14 | best-noise-canceling-headset-for-wfh (page) | 13.87 (08-17, non-contiguous) | 11.28 | 0.290% | 0.1235% | Position recovered somewhat (13.87→11.28) but CTR fell further (810 impr/1 click). SEO-021 is now resolved per tracker.md's 2026-09-11 sync note; too early and too gapped to attribute this move to the fix. |
| 2026-09-28 | best-noise-canceling-headset-for-working-from-home (page — **slug corrected**: the real live/GSC page is `-for-working-from-home`, not `-for-wfh`, which was never a real URL) | 11.28 (09-14) | **21.91** | 0.1235% | 0.2577% | **8th straight cycle of decline, sharpest yet** (388 impr/1 click) — its own named query "best noise cancelling headset with mic for working from home" fell to pos 47.53, effectively off the SERP. This happened in the same window SEO-021 reportedly shipped (09-11) — escalated as SEO-041 with a technical-regression check as the first step, not another content rewrite. |
| 2026-10-05 | best-noise-canceling-headset-for-working-from-home (page, SEO-021/041 target) | 21.91 (09-28) | **23.15** | 0.2577% | 0.00% | 2nd straight cycle of decline since SEO-021 reportedly shipped (362 impr/0 clicks); named query now pos 51.85. This cycle's competitor-SERP check found zero NG presence in the general web result set for the page's exact phrase — a new, stronger signal than 09-28's (which still found the page present there). SEO-041 remains unexecuted. |
| 2026-08-03 | open-ear-vs-in-ear-vs-over-ear-headphones (page, SEO-001/003 target) | n/a (too early to read before 07-31) | pos 6.28 / 13,992 impr | n/a | **0.11%** | **First valid 30-day read on the July rewrite.** Clear miss — root cause diagnosed as a content-intent mismatch (see CONFIRMED PATTERNS). Escalated as SEO-025 (CTR-FIX) + SEO-026 (AEO). |
| 2026-08-10 | open-ear-vs-in-ear-vs-over-ear-headphones (page) | 6.28 / 13,992 impr (08-03) | 6.17 / 13,893 impr | 0.11% | 0.0792% | Essentially unchanged — still a clear miss. SEO-025/026 approved 2026-08-04 but remains unexecuted. |
| 2026-08-17 | open-ear-vs-in-ear-vs-over-ear-headphones (page, SEO-025/026 target) | 6.17 / 13,893 impr (08-10) | 6.03 / 14,375 impr | 0.0792% | 0.063% | CTR fell further on rising impressions — still unexecuted, still a clear miss, getting slightly worse each cycle. |
| 2026-09-14 | open-ear-vs-in-ear-vs-over-ear-headphones (page, SEO-025/026 target) | 6.03 / 14,375 impr (08-17, non-contiguous) | 8.32 / 10,117 impr | 0.063% | 0.049% | Still a clear miss — CTR fell further, position also worse, impressions down. SEO-025/026 resolved per tracker.md's 09-11 sync note; not re-drafted, monitoring continues. |
| 2026-09-28 | open-ear-vs-in-ear-vs-over-ear-headphones (page, SEO-025/026/043 target) | 8.32 / 10,117 impr (09-14) | 9.57 / 5,761 impr | 0.049% | 0.0868% | New low on both organic signal (impr down 43%) and AEO signal (query "open ear vs in ear headphones" now 6th+ consecutive cycle fully absent from web_search). SEO-025/026 (executed 09-11) show no measured improvement — escalated as SEO-043 with a structural format change (comparison table + FAQ above the fold) rather than another incremental edit. |
| 2026-10-05 | open-ear-vs-in-ear-vs-over-ear-headphones (page, SEO-025/026/043 target) | 9.57 / 5,761 impr (09-28) | 9.87 / 4,720 impr | 0.0868% | 0.1059% | Impressions down a further 18%, position slightly worse; CTR ticked up off its low but remains far below the disease-band average. AEO sweep: 7th+ consecutive cycle fully absent, now with zero NG presence in the organic web set too (not just the AI-style answer). SEO-043 remains unexecuted. |
| 2026-08-10 | Pro Swimming PDP (page, CTR-disease) | 4.34 / 55,501 impr (08-03) | 4.57 / 59,812 impr | 0.86% | 0.78% | Impressions still growing (+8%), CTR still falling. |
| 2026-08-17 | Pro Swimming PDP (page, CTR-disease) | 4.57 / 59,812 impr (08-10) | 4.81 / 63,771 impr | 0.78% | 0.759% | 5th straight cycle of CTR decline, impressions still growing (+6.6%). D+30 window closed 2026-08-19; SEO-013 was later confirmed a D+30 MISS (closed in queue-inbox.md 2026-08-24: CTR 0.838% vs 3% target). |
| 2026-09-14 | Pro Swimming PDP (page, CTR-disease) | 4.81 / 63,771 impr (08-17, non-contiguous) | 5.89 / 19,715 impr | 0.759% | 1.126% | CTR up sharply, but impressions down heavily (63,771→19,715) and position worse — likely a seasonal/demand-side swing given the size of the impression drop; not re-drafted this cycle, still in the disease band. |
| 2026-09-28 | Pro Swimming PDP (page, CTR-disease) | 5.89 / 19,715 impr (09-14) | 5.24 / 9,842 impr | 1.126% | 1.290% | Position and CTR both improved again, impressions fell further (19,715→9,842) — still reads as a demand-side swing, not re-drafted, still in the disease band. |
| 2026-10-05 | Pro Swimming PDP (page, CTR-disease) | 5.24 / 9,842 impr (09-28) | 5.25 / 7,389 impr | 1.290% | 1.502% | CTR continues to climb, position essentially flat, impressions still falling (-25%) — consistent with the standing demand-side-swing read, not re-drafted. |
| 2026-08-03 | bone-conduction-headphones-side-effects (page, SEO-002 target) | n/a (too early before 07-31) | pos 10.19 / 3,079 impr | n/a | 0.52% | First valid read: middling — page now surfaces in web_search results (~8th of 10) for the AEO query. |
| 2026-08-10 | bone-conduction-headphones-side-effects (page, SEO-002 target) | 10.19 / 3,079 impr (08-03) | 10.00 / 3,376 impr | 0.52% | 0.5332% | Roughly flat/slightly improved. Drafted a dedicated AEO fix (SEO-031) this cycle. |
| 2026-08-17 | bone-conduction-headphones-side-effects (page, SEO-002/031 target) | 10.00 / 3,376 impr (08-10) | 10.18 / 3,532 impr | 0.5332% | 0.595% | CTR up slightly, position essentially flat. Web_search sweep shows the page climbing to ~5th of 10 (from ~8th) — a positive interim signal for SEO-031, not yet credited. |
| 2026-09-14 | bone-conduction-headphones-side-effects (page, SEO-031/039 target) | 10.18 / 3,532 impr (08-17, non-contiguous) | 14.13 / 2,576 impr | 0.595% | 0.3882% | GSC position/CTR both eased back, but the web_search sweep (the actual AEO signal) improved further to ~4th of 10 — the two signals are diverging; escalated with SEO-039 rather than waiting. |
| 2026-09-28 | bone-conduction-headphones-side-effects (page, SEO-031/039 target) | 14.13 / 2,576 impr (09-14) | 11.67 / 2,540 impr | 0.3882% | 0.3937% | GSC position recovered somewhat, CTR flat. web_search sweep reconfirms the page directly present with a strong direct-answer opener — still the best AEO signal of any monitored query, still not the featured answer (Shokz UK's "Myths vs Facts" article). SEO-039 remains the right fix, still pending approval. |
| 2026-10-05 | bone-conduction-headphones-side-effects (page, SEO-031/039 target) | 11.67 / 2,540 impr (09-28) | 10.23 / 2,555 impr | 0.3937% | 0.4305% | Both GSC signals improved again. web_search sweep: identical ~4th-of-10 ranking for a 3rd straight cycle — a stable but un-escalating AEO position; SEO-039 remains pending. |

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

---

## CYCLE LOG (most recent first)

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
(3.78%→3.38%), pos improved further (2.44→2.24) — strongest PDP, 3rd straight cycle; SafeBuds impr
flat, clicks +10%, CTR up (1.40%→1.56%) but still in the disease band, pos slipped (6.08→6.27),
"wehear" query fell to literal 0% (see above); ES Lite impr flat, CTR eased just under 2%
(2.14%→1.99%), pos improved (6.01→5.53) — recovering without any fix shipping.

**Next sprint change triggered:** SEO-044 (CTR-FIX, open-ear-headphones collection query
mismatch). Next free ID after this cycle: **SEO-045.**

---

### 2026-09-28 — Weekly managed-agent cycle: WFH page collapse + blast-page CTR collapse both traced to post-execution regressions, "open ear headphones" pattern-break reverted, 3rd escalation on open-ear-vs-in-ear

**Initiative:** Sixth Monday 08:00 IST managed-agent cycle. Read tracker.md + learning-log.md
first (2 calls) — no new ⚠️ SYNC CORRECTION section; confirmed SEO-036 through SEO-039 (drafted
09-14) remain pending in both files, unapproved for a full 2 weekly cycles now. Pulled GSC + GA4
fresh via two direct-API scripts (pull-only writing raw JSON to /tmp, then compute-only reading
those files): window 2026-08-29→2026-09-27 (30d). GSC returned 12,975 query×page rows (single
page, no truncation). GA4 returned 2,016 rows, `len(rows)==rowCount` asserted (no truncation). All
page/branded/PDP/landing-page breakdowns reconciled to their parent totals in code (asserted, no
mismatches). Read `queue-inbox.md` directly before drafting — confirmed SEO-036..039 unchanged in
status, drafted SEO-040..043 without collision.

**CONFIRMED — a page can get measurably worse in the same window its own fix reportedly ships, and
that's a signal to verify delivery before writing more content (new pattern, see CONFIRMED
PATTERNS above):** the WFH page's position collapsed 11.28→21.91 (its named query fell to pos
47.53, effectively off the SERP) and `can-bluetooth-earphones-cause-a-blast`'s CTR fell from ~0.15%
to 0.018% even as its impressions nearly tripled — both in the same window SEO-021 and SEO-028
reportedly executed (2026-09-11). Escalated as SEO-041 and SEO-040 respectively, both leading with
a "verify the live title/meta/canonical actually match the spec" step rather than another rewrite.
Also corrected a standing data error: the WFH page's real GSC/live slug is
`best-noise-canceling-headset-for-working-from-home`, not `-for-wfh` (which was never a real URL) —
used the real slug this cycle and flagged for all future cycles.

**REVERTED — the "open ear headphones" rank/CTR joint-improvement streak broke after 3–4 cycles:**
position improved again (4.73→4.48, best ever) but CTR fell (1.5241%→1.4500%) — the first
divergence since 2026-08-03. Both metrics still solidly beat their targets; read as inconclusive on
the reversal question, not as a new decline.

**ESCALATED a 3rd time — `open-ear-vs-in-ear-vs-over-ear-headphones` / "open ear vs in ear
headphones":** the page hit a new CTR low (0.0868%, impr down 43% to 5,761) and the query hit its
6th+ consecutive cycle of full AEO absence, with SEO-026's D+14 checkpoint (~09-25) now clearly
passed as a MISS. Two prior drafts (SEO-025 CTR-FIX, SEO-026 AEO) have shipped with no measured
improvement on either signal — escalated as SEO-043 with a structural format change (a scannable
comparison table + FAQ above the fold, mirroring Bose/Forbes' winning format) rather than another
incremental edit.

**NEW — WRITE (SEO-042):** `best-out-of-ear-headphones-for-running` remains genuinely near-invisible
(154 impr, 0 clicks, pos 13.38) and "best running headphones india" still returns 0 GSC rows
despite SEO-024 reportedly executing on this same page 2026-09-11 — escalated with a fuller
rewrite spec (H2 outline, internal links, CTA SKUs, explicitly-flagged revenue estimate).

**RE-CONFIRMED, not re-drafted:** SEO-020 (AEO, "are open ear headphones safe") — D+14 checkpoint
now passed, NG still absent, a real miss signal, D+30 is the harder read. SEO-039 (AEO,
bone-conduction-side-effects) — still the best-performing monitored query, page directly present
with a strong direct-answer snippet, still pending approval, not the blocker being content. SEO-013
(Pro Swimming), SEO-015 (Shokz Alternatives), SEO-018 (OpenWire) — all continuing positive trends
post-miss, not re-opened. SEO-009 and SEO-005 not independently re-derived this cycle per the
Phase-1-only-reads rule; both known-open per tracker.md, not restated here as new findings.

**PDP CLUSTER TRACKER — vs prior cycle (09-14):** OpenWire impr −3% but CTR up further
(2.92%→3.57%, clear of disease band), pos improved (5.50→5.23); Comm 2.0 impr flat, clicks +18%,
CTR up (3.25%→3.78%), pos improved (3.19→2.44) — strongest PDP again; SafeBuds impr −15%, CTR up
slightly (1.24%→1.40%) but still in the disease band, pos worse (5.95→6.08), "wehear" query
mismatch persists (SEO-036 still pending); ES Lite impr +7%, CTR up (2.00%→2.14%), pos stabilized
(6.12→6.01) — no further decline while SEO-037 (still pending) waits on approval.

**Next sprint change triggered:** SEO-040 (CTR-FIX, verify+re-fix the blast page), SEO-041
(RANK/GAP, WFH technical-regression check), SEO-042 (WRITE, running cluster escalation), SEO-043
(AEO, open-ear-vs-in-ear structural escalation). Next free ID after this cycle: **SEO-044.**

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
same session, before the next scheduled agent run. Treat "did I push?" as part of the execution
checklist, not an afterthought.

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
| SH-SEO-2 | "India 2026 + price/use-case" front-loaded titles lift CTR on top-10 CTR-disease pages without hurting position. | Ship SEO-001/004/008 rewrites, read CTR + pos at 28 days. | MIXED — SEO-008 held above the disease-band average through 08-17; SEO-001 kept missing and was escalated as SEO-025 (now resolved per tracker.md's 09-11 sync note, still showing a miss this cycle — new low 09-28, essentially unchanged 10-05). | SEO-001, SEO-004, SEO-008 |
| SH-SEO-3 | With Comm 2.0 stock cleared, adding Comm 2.0 as a primary CTA on WFH/commercial pages lifts SEO→D2C conversion without harming rankings. | Add Comm 2.0 CTA to SEO-004/006 pages, watch assisted conversions. | OPEN — newly unblocked by CEO stock clearance 2026-06-27. | SEO-004, SEO-006, CSO-001 |
| SH-SEO-4 | A dedicated India-focused "Shokz alternatives" comparison page can capture organic share of a cluster NG currently has zero presence in, within 60 days of publish. | Ship SEO-015/SEO-019, read GSC rank + clicks at 30/60 days. | CLOSED — D+30 MISS on clicks (0 clicks across the full 5-week live window despite position improving to 5.06), per queue-inbox.md 2026-08-24. Clicks now flowing (6 clicks/113 impr/pos 6.58 this cycle, 10-05) — noted, not re-opened. | SEO-015, SEO-019 |
| SH-SEO-5 | Adding a direct-answer FAQPage block for adjacent pain-point queries ("earphones hurting ears") to an already-authoritative page (vertigo blog) wins AI-answer consideration faster than a new standalone page would. | Ship SEO-016, recheck AEO citation proxy at 14 days. | OPEN — still inconclusive as of 2026-10-05; NG remains absent, Shokz's footprint has grown. | SEO-016 |
| SH-SEO-9 | The first PDP-level GSC pull reliably surfaces CTR-disease-band members that thematic-cluster tracking alone misses. | Ship SEO-023 (SafeBuds CTR-FIX), read CTR/position at 30 days. | CLOSED (plateaued) — D+30+ read 2026-09-14 shows CTR flat at exactly 1.24%, identical to the pre-read baseline. Escalated with a query-specific fix as SEO-036 (still pending approval, 3 cycles now). | SEO-023, SEO-019, SEO-036 |
| SH-SEO-10 | A CTR-FIX rewrite that targets a page's actual top queries by impression (not just its nominal target keyword) recovers CTR meaningfully faster than a rewrite targeting the exact-match phrase alone. | Ship SEO-025 (open-ear-vs-in-ear page), read CTR at 30 days. | OPEN — 7th confirmation 2026-10-05 (`/collections/open-ear-headphones`, "open ear earbuds" query converting 3.7x worse than the page's 2nd-largest query) — pattern now confirmed 7 times across blog, collection (twice, for 2 distinct reasons), and PDP page types. | SEO-025, SEO-028, SEO-029, SEO-032, SEO-036, SEO-040, SEO-044 |
| SH-SEO-13 | A page that already surfaces organically but hasn't won AI citation (bone-conduction-headphones-side-effects) reaches citation faster via a targeted direct-answer+FAQ expansion than a fully-absent page does. | Ship SEO-031, recheck AEO citation proxy at 14 days. | OPEN — SEO-031 executed 2026-09-11 per tracker.md. Page holds its best-ever position in the web_search sweep (~4th of 10) for a 3rd straight cycle as of 10-05, stable but un-escalating. SEO-039 (further escalation) still pending approval, now 3 cycles. | SEO-031, SEO-039 |
| SH-SEO-16 | A query-specific (not generic) title/meta + FAQ fix on a PDP recovers CTR on its single worst-converting query, where a prior generic rewrite on the same page plateaued. | Ship SEO-036 (SafeBuds "wehear" query), read CTR on that specific query at 30 days (2026-10-13) against the 0.17% baseline. | OPEN — still pending approval as of 2026-10-05, "wehear" query CTR fell further to literal **0%** (was 0.1472% last cycle) — the mismatch is getting worse, not stabilizing, while the fix waits. | SEO-036 |
| SH-SEO-17 | A PDP whose position falls sharply outside a template-change window is more likely a regression to check/revert than a genuine ranking loss to content-fix. | Ship SEO-037 (verify ES Lite's title/meta/canonical unchanged; reinforce if confirmed clean), read position at 30 days against the 6.12 baseline. | OPEN — still pending approval; ES Lite's position recovered this cycle (6.01→5.53) without any fix shipping, weak evidence the original drop may have been cyclical rather than a lasting technical regression. **The underlying hypothesis (technical regression over content failure) continues to apply to the much larger, still-worsening cases — SEO-040/041.** | SEO-037, SEO-040, SEO-041 |
| SH-SEO-18 | A persona-specific rewrite (teachers, not generic WFH office workers) of an existing thin page can lift CTR/position on its own distinct keyword cluster. | Ship SEO-038 ("best headphones for teaching online"), read CTR/position at 30 days against the 0.11%/10.25 baseline. | OPEN — still pending approval, 3 cycles now; page essentially flat this cycle (CTR 0.0712%→0.0773%, pos 11.52→11.46), consistent with a fix not yet shipped. | SEO-038 |
| SH-SEO-19 | Mirroring a winning competitor's exact content framing (Shokz UK's "Myths vs Facts" structure) on a page already close to AI citation closes the remaining gap faster than a generic FAQ expansion alone. | Ship SEO-039, recheck AEO citation proxy at 14 days (2026-09-28) against this cycle's ~4th-of-10 baseline. | OPEN — SEO-039 still unshipped (pending approval, 3 cycles); page holds its ~4th-of-10 position unaided for a 3rd straight cycle as of 10-05 — stable, not improving further without the fix. | SEO-039 |
| SH-SEO-20 | A structural format change (comparison table + FAQ above the fold, not incremental prose edits) succeeds on a page where two prior incremental fixes (CTR-FIX + AEO) both failed to move either signal. | Ship SEO-043 (open-ear-vs-in-ear-vs-over-ear-headphones), read CTR at 30 days (2026-10-28) and AEO citation proxy at 14 days (2026-10-12) against this cycle's 0.0868% CTR / 6th-cycle-absence baseline. | OPEN — still pending approval; page got worse again this cycle (impr down a further 18% to 4,720, now 7th+ cycle of full AEO absence with zero organic web presence too). | SEO-043, SEO-025, SEO-026 |
| SH-SEO-21 | A delivery-verification-first fix on a page that got worse immediately after its own reported execution (SEO-040/041) will show the underlying technical issue within 1-2 cycles of being approved, rather than requiring a full D+30 content read. | Ship SEO-040 (blast page) and SEO-041 (WFH page), read both at D+14 (2026-10-19) for any technical-fix signal before the D+30 content read (2026-10-28/11-04). | OPEN — new this cycle (2026-10-05). Both target pages got worse a 2nd straight cycle while the fixes remained unapproved/unexecuted, strengthening rather than testing the hypothesis so far — a real test requires the fix to actually ship. | SEO-040, SEO-041 |
