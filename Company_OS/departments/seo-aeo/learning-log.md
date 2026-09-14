# SEO & AEO — Learning Log

> Institutional memory. `/deep-loop` appends weekly; `/standup` reads here. Never delete — supersede.
> Seeded from `[[ng-seo-aeo-learning-log]]`, `[[ng-seo-aeo-baseline]]`.

## HOW TO LOG
```
DATE | INITIATIVE | HYPOTHESIS | RESULT (confirmed/rejected/inconclusive) | LEARNING CARRIED FORWARD
```

## CONFIRMED PATTERNS (institutional truths)
- Non-branded CTR (0.48%) is the crisis metric; pos 4–10 high-impression pages rewritten title/meta = fastest revenue.
- Informational blog traffic monetizes only with contextual CTAs (was ~0% CVR before Jun 2 install). **Update 2026-09-14: first non-zero blog CVR ever logged (0.12%, 2 txn/1,708 sessions this cycle)** — still far below the 0.5% target, but the ~0% streak is broken. Watch next cycle before declaring a trend.
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
  is closed.
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
  types.
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
  all three together. Flagged in this cycle's report as the top action item.
- **Always read tracker.md's LIVE STATUS SNAPSHOT / ⚠️ SYNC CORRECTION section in full before
  drafting anything, every run — not just after a known incident.** Confirmed necessary again
  2026-07-27: a same-day earlier run had already produced 3 duplicate/false-premise drafts
  (SEO-017/018/019) purely because it trusted a stale snapshot. The correction lived only in the
  tracker's top section, not in the standing rules — reading it first is what prevented a repeat.
  **Reconfirmed clean 2026-08-03, 2026-08-10, 2026-08-17, and again 2026-09-14** (this time the
  relevant correction was two dated blockquotes rather than a section literally titled "SYNC
  CORRECTION" — read in full anyway, per the standing rule, and treated as authoritative for
  SEO-020 through SEO-035's status without re-deriving individual outcomes).
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
  cycle.

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
| 2026-07-27 | best-noise-canceling-headset-for-wfh (page) | 6.31 (07-20) | 8.34 | 0.08% | 0.10% | 4th straight cycle of decline; impressions down 65% since 06-27. SEO-014 (the H1/FAQ fix) already live and did not arrest it — the real lever (content↔promise mismatch) drafted as SEO-021. |
| 2026-08-03 | best-noise-canceling-headset-for-wfh (page) | 8.34 (07-27) | 9.52 | 0.10% | 0.099% | 5th straight cycle of decline. SEO-021 drafted and unapproved for a full week; upgraded to urgent, not re-drafted. |
| 2026-08-10 | best-noise-canceling-headset-for-wfh (page) | 9.52 (08-03) | 11.68 | 0.099% | 0.246% | 6th straight cycle of decline. SEO-021 approved 2026-08-04 but still unexecuted a full week later. |
| 2026-08-17 | best-noise-canceling-headset-for-wfh (page) | 11.68 (08-10) | 13.87 | 0.246% | 0.290% | 7th straight cycle of decline (4.06→5.36→6.31→8.34→9.52→11.68→13.87). SEO-021 now 13 days approved-and-unexecuted. |
| 2026-09-14 | best-noise-canceling-headset-for-wfh (page) | 13.87 (08-17, non-contiguous) | 11.28 | 0.290% | 0.1235% | Position recovered somewhat (13.87→11.28) but CTR fell further (810 impr/1 click). SEO-021 is now resolved per tracker.md's 2026-09-11 sync note — too early and too gapped to attribute this move to the fix. |
| 2026-08-03 | open-ear-vs-in-ear-vs-over-ear-headphones (page, SEO-001/003 target) | n/a (too early to read before 07-31) | pos 6.28 / 13,992 impr | n/a | **0.11%** | **First valid 30-day read on the July rewrite.** Clear miss — root cause diagnosed as a content-intent mismatch (see CONFIRMED PATTERNS). Escalated as SEO-025 (CTR-FIX) + SEO-026 (AEO). |
| 2026-08-10 | open-ear-vs-in-ear-vs-over-ear-headphones (page) | 6.28 / 13,992 impr (08-03) | 6.17 / 13,893 impr | 0.11% | 0.0792% | Essentially unchanged — still a clear miss. SEO-025/026 approved 2026-08-04 but remains unexecuted. |
| 2026-08-17 | open-ear-vs-in-ear-vs-over-ear-headphones (page, SEO-025/026 target) | 6.17 / 13,893 impr (08-10) | 6.03 / 14,375 impr | 0.0792% | 0.063% | CTR fell further on rising impressions — still unexecuted, still a clear miss, getting slightly worse each cycle. |
| 2026-09-14 | open-ear-vs-in-ear-vs-over-ear-headphones (page, SEO-025/026 target) | 6.03 / 14,375 impr (08-17, non-contiguous) | 8.32 / 10,117 impr | 0.063% | 0.049% | Still a clear miss — CTR fell further, position also worse, impressions down. SEO-025/026 resolved per tracker.md's 09-11 sync note; not re-drafted, monitoring continues. |
| 2026-08-10 | Pro Swimming PDP (page, CTR-disease) | 4.34 / 55,501 impr (08-03) | 4.57 / 59,812 impr | 0.86% | 0.78% | Impressions still growing (+8%), CTR still falling. |
| 2026-08-17 | Pro Swimming PDP (page, CTR-disease) | 4.57 / 59,812 impr (08-10) | 4.81 / 63,771 impr | 0.78% | 0.759% | 5th straight cycle of CTR decline, impressions still growing (+6.6%). D+30 window closed 2026-08-19; SEO-013 was later confirmed a D+30 MISS (closed in queue-inbox.md 2026-08-24: CTR 0.838% vs 3% target). |
| 2026-09-14 | Pro Swimming PDP (page, CTR-disease) | 4.81 / 63,771 impr (08-17, non-contiguous) | 5.89 / 19,715 impr | 0.759% | 1.126% | CTR up sharply, but impressions down heavily (63,771→19,715) and position worse — likely a seasonal/demand-side swing given the size of the impression drop; not re-drafted this cycle, still in the disease band. |
| 2026-08-03 | bone-conduction-headphones-side-effects (page, SEO-002 target) | n/a (too early before 07-31) | pos 10.19 / 3,079 impr | n/a | 0.52% | First valid read: middling — page now surfaces in web_search results (~8th of 10) for the AEO query. |
| 2026-08-10 | bone-conduction-headphones-side-effects (page, SEO-002 target) | 10.19 / 3,079 impr (08-03) | 10.00 / 3,376 impr | 0.52% | 0.5332% | Roughly flat/slightly improved. Drafted a dedicated AEO fix (SEO-031) this cycle. |
| 2026-08-17 | bone-conduction-headphones-side-effects (page, SEO-002/031 target) | 10.00 / 3,376 impr (08-10) | 10.18 / 3,532 impr | 0.5332% | 0.595% | CTR up slightly, position essentially flat. Web_search sweep shows the page climbing to ~5th of 10 (from ~8th) — a positive interim signal for SEO-031, not yet credited. |
| 2026-09-14 | bone-conduction-headphones-side-effects (page, SEO-031/039 target) | 10.18 / 3,532 impr (08-17, non-contiguous) | 14.13 / 2,576 impr | 0.595% | 0.3882% | GSC position/CTR both eased back, but the web_search sweep (the actual AEO signal) improved further to ~4th of 10 — the two signals are diverging; escalated with SEO-039 rather than waiting. |

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

---

## CYCLE LOG (most recent first)

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
| SH-SEO-2 | "India 2026 + price/use-case" front-loaded titles lift CTR on top-10 CTR-disease pages without hurting position. | Ship SEO-001/004/008 rewrites, read CTR + pos at 28 days. | MIXED — SEO-008 held above the disease-band average through 08-17; SEO-001 kept missing and was escalated as SEO-025 (now resolved per tracker.md's 09-11 sync note, still showing a miss this cycle). | SEO-001, SEO-004, SEO-008 |
| SH-SEO-3 | With Comm 2.0 stock cleared, adding Comm 2.0 as a primary CTA on WFH/commercial pages lifts SEO→D2C conversion without harming rankings. | Add Comm 2.0 CTA to SEO-004/006 pages, watch assisted conversions. | OPEN — newly unblocked by CEO stock clearance 2026-06-27. | SEO-004, SEO-006, CSO-001 |
| SH-SEO-4 | A dedicated India-focused "Shokz alternatives" comparison page can capture organic share of a cluster NG currently has zero presence in, within 60 days of publish. | Ship SEO-015/SEO-019, read GSC rank + clicks at 30/60 days. | CLOSED — D+30 MISS on clicks (0 clicks across the full 5-week live window despite position improving to 5.06), per queue-inbox.md 2026-08-24. This cycle (09-14): page shows 2 clicks/116 impr/pos 7.03 for the first time — noted, not re-opened. | SEO-015, SEO-019 |
| SH-SEO-5 | Adding a direct-answer FAQPage block for adjacent pain-point queries ("earphones hurting ears") to an already-authoritative page (vertigo blog) wins AI-answer consideration faster than a new standalone page would. | Ship SEO-016, recheck AEO citation proxy at 14 days. | OPEN — still inconclusive as of 2026-09-14; NG remains absent, Shokz's footprint has grown. | SEO-016 |
| SH-SEO-9 | The first PDP-level GSC pull reliably surfaces CTR-disease-band members that thematic-cluster tracking alone misses. | Ship SEO-023 (SafeBuds CTR-FIX), read CTR/position at 30 days. | CLOSED (plateaued) — D+30+ read 2026-09-14 shows CTR flat at exactly 1.24%, identical to the pre-read baseline. Escalated with a query-specific fix as SEO-036. | SEO-023, SEO-019, SEO-036 |
| SH-SEO-10 | A CTR-FIX rewrite that targets a page's actual top queries by impression (not just its nominal target keyword) recovers CTR meaningfully faster than a rewrite targeting the exact-match phrase alone. | Ship SEO-025 (open-ear-vs-in-ear page), read CTR at 30 days. | OPEN — resolved per tracker.md's 09-11 sync note but page still shows CTR falling (0.049% this cycle) — monitoring continues. **5th confirmation 2026-09-14 on a PDP (SafeBuds "wehear" query) — pattern now proven across blog, collection, and PDP page types.** | SEO-025, SEO-028, SEO-029, SEO-032, SEO-036 |
| SH-SEO-13 | A page that already surfaces organically but hasn't won AI citation (bone-conduction-headphones-side-effects) reaches citation faster via a targeted direct-answer+FAQ expansion than a fully-absent page does. | Ship SEO-031, recheck AEO citation proxy at 14 days. | OPEN — SEO-031 executed 2026-09-11 per tracker.md. Page continued its climb in the web_search sweep to **~4th of 10** this cycle (best reading on record) even before SEO-031 had time to take effect — escalated further as SEO-039 rather than waiting. | SEO-031, SEO-039 |
| SH-SEO-16 | A query-specific (not generic) title/meta + FAQ fix on a PDP recovers CTR on its single worst-converting query, where a prior generic rewrite on the same page plateaued. | Ship SEO-036 (SafeBuds "wehear" query), read CTR on that specific query at 30 days (2026-10-13) against the 0.17% baseline. | OPEN — new this cycle (2026-09-14). | SEO-036 |
| SH-SEO-17 | A PDP whose position falls sharply outside a template-change window is more likely a regression to check/revert than a genuine ranking loss to content-fix. | Ship SEO-037 (verify ES Lite's title/meta/canonical unchanged; reinforce if confirmed clean), read position at 30 days against the 6.12 baseline. | OPEN — new this cycle (2026-09-14). | SEO-037 |
| SH-SEO-18 | A persona-specific rewrite (teachers, not generic WFH office workers) of an existing thin page can lift CTR/position on its own distinct keyword cluster. | Ship SEO-038 ("best headphones for teaching online"), read CTR/position at 30 days against the 0.11%/10.25 baseline. | OPEN — new this cycle (2026-09-14). | SEO-038 |
| SH-SEO-19 | Mirroring a winning competitor's exact content framing (Shokz UK's "Myths vs Facts" structure) on a page already close to AI citation closes the remaining gap faster than a generic FAQ expansion alone. | Ship SEO-039, recheck AEO citation proxy at 14 days (2026-09-28) against this cycle's ~4th-of-10 baseline. | OPEN — new this cycle (2026-09-14). | SEO-039 |
