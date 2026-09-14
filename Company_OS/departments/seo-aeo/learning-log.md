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
| 2026-08-17 | "open ear headphones" | 6.66 (08-10) | 6.38 | 1.21% | 1.1990% | Position improved again, now beating the 9.0 target by 2.62 (2,502 impr/30 clicks). CTR essentially flat/plateaued rather than a 3rd straight improvement — read as a plateau, not a clean reversal confirmation. Keep watching. |
| 2026-09-14 | "open ear headphones" | 6.38 (08-17, non-contiguous — ~4-week gap) | 4.73 | 1.1990% | 1.5241% | Sharp improvement on both metrics together (3,740 impr/57 clicks) — now beating the 90-day target (5.0) six weeks early. Best joint reading on record; not formally credited as a "4th cycle" given the gap, but continues to support a real reversal of the old "rank gains don't convert" pattern. |
| 2026-08-17 | best-noise-canceling-headset-for-wfh (page) | 11.68 (08-10) | 13.87 | 0.246% | 0.290% | 7th straight cycle of decline (4.06→5.36→6.31→8.34→9.52→11.68→13.87). SEO-021 now 13 days approved-and-unexecuted. |
| 2026-09-14 | best-noise-canceling-headset-for-wfh (page) | 13.87 (08-17, non-contiguous) | 11.28 | 0.290% | 0.1235% | Position recovered somewhat (13.87→11.28) but CTR fell further (810 impr/1 click). SEO-021 is now resolved per tracker.md's 2026-09-11 sync note — too early and too gapped to attribute this move to the fix. |
| 2026-08-17 | open-ear-vs-in-ear-vs-over-ear-headphones (page, SEO-025/026 target) | 6.17 / 13,893 impr (08-10) | 6.03 / 14,375 impr | 0.0792% | 0.063% | CTR fell further on rising impressions — still unexecuted, still a clear miss, getting slightly worse each cycle. |
| 2026-09-14 | open-ear-vs-in-ear-vs-over-ear-headphones (page, SEO-025/026 target) | 6.03 / 14,375 impr (08-17, non-contiguous) | 8.32 / 10,117 impr | 0.063% | 0.049% | Still a clear miss — CTR fell further, position also worse, impressions down. SEO-025/026 resolved per tracker.md's 09-11 sync note; not re-drafted, monitoring continues. |
| 2026-08-17 | Pro Swimming PDP (page, CTR-disease) | 4.57 / 59,812 impr (08-10) | 4.81 / 63,771 impr | 0.78% | 0.759% | 5th straight cycle of CTR decline, impressions still growing (+6.6%). D+30 window closed 2026-08-19; SEO-013 was later confirmed a D+30 MISS (closed in queue-inbox.md 2026-08-24: CTR 0.838% vs 3% target). |
| 2026-09-14 | Pro Swimming PDP (page, CTR-disease) | 4.81 / 63,771 impr (08-17, non-contiguous) | 5.89 / 19,715 impr | 0.759% | 1.126% | CTR up sharply, but impressions down heavily (63,771→19,715) and position worse — likely a seasonal/demand-side swing given the size of the impression drop; not re-drafted this cycle, still in the disease band. |
| 2026-08-17 | bone-conduction-headphones-side-effects (page, SEO-002/031 target) | 10.00 / 3,376 impr (08-10) | 10.18 / 3,532 impr | 0.5332% | 0.595% | CTR up slightly, position essentially flat. Web_search sweep shows the page climbing to ~5th of 10 (from ~8th) — a positive interim signal for SEO-031, not yet credited. |
| 2026-09-14 | bone-conduction-headphones-side-effects (page, SEO-031/039 target) | 10.18 / 3,532 impr (08-17, non-contiguous) | 14.13 / 2,576 impr | 0.595% | 0.3882% | GSC position/CTR both eased back, but the web_search sweep (the actual AEO signal) improved further to ~4th of 10 — the two signals are diverging; escalated with SEO-039 rather than waiting. |

## AEO CITATION LOG (update each 14-day check)
| Date | Query | NG named? | Article cited? | Engine |
|---|---|---|---|---|
| _seed_ | "are open ear headphones safe" | — | — | ChatGPT/Perplexity/Google AIO |
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
  updates to tracker.md/queue-inbox.md were never committed+pushed. See the 2026-07-27 sync-gap
  postmortem cycle entry for the full account. Always push after `/execute-approved`. **Recurred in
  a milder shape 2026-09-14** — see the CONFIRMED PATTERNS entry above.
- **Trusting a tracker.md snapshot without reading its top-of-file correction section first —
  REJECTED 2026-07-27 (2nd time this exact date).** The first same-day run did exactly this and
  produced SEO-017/018/019 as duplicate/false-premise drafts. Reading the ⚠️ SYNC CORRECTION /
  LIVE STATUS SNAPSHOT sections in full, every run, before drafting anything is now non-negotiable
  — not just a post-incident habit.
- **Optimizing a CTR-FIX rewrite purely for a page's nominal target keyword without checking its
  actual top queries by impression — REJECTED 2026-08-03.** SEO-001/003's rewrite of the
  open-ear-vs-in-ear page optimized for "open ear vs in ear headphones" (46 impr) while the page's
  real impression volume (2,565 + 909 = 3,474 impr, 25% of the page's total) sits on generic
  "in ear earphones"/"over ear earphones" queries the rewrite never addressed. Every future
  CTR-FIX spec must pull and review the page's top queries by impression before writing copy.
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

**RE-CONFIRMED, not re-drafted:** SEO-020/026 (AEO fixes for "are open ear headphones safe" and
"open ear vs in ear headphones," both executed 2026-09-11) — both queries still show NG absent in
this cycle's web_search sweep, expected given only 3 days live; D+14 reads due ~2026-09-25.
SEO-016 ("earphones hurting ears," still inconclusive, unchanged). SEO-022/024/025 (all resolved
per tracker.md's blanket statement but not individually itemized as executed) — spot-checked this
cycle's GSC numbers for each and none show a fix-driven improvement yet, consistent with either
very recent execution or a fix that hasn't landed; not re-drafted. SEO-005 (earplug cluster,
15,108 impr/52 clicks/0.34% CTR/pos 10.69 this cycle — roughly unchanged, still pending founder
decision). SEO-009 (GA4 organic revenue ₹3,69,508.15 vs GSC clicks 2,726 — both moved up together
this cycle, +1.3% and +0.6% respectively — a good sign, not resolving, still not this agent's call).

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
collisions, nothing re-drafted. Pulled GSC + GA4 fresh via direct APIs in one session (two scripts,
pull-then-compute): window 2026-07-18→2026-08-16 (30d). GSC returned 16,459 query×page rows
(single page, no truncation). GA4 returned 2,081 rows, `len(rows)==rowCount` asserted (no
truncation). All page/query/branded/PDP/landingPage breakdowns reconciled to their parent totals
in code (asserted, no mismatches).

**NEW — 4th confirmation of the SH-SEO-10 query-intent-mismatch pattern, on a fresh collection
page (SEO-032):** `/collections/bone-conduction-headphones` (4,569 impr, 0.83% CTR, pos 6.52 —
the largest untouched CTR-disease-band page this cycle). Its 2nd/7th-largest non-branded queries
("bone anchored earphones" 320 impr, "bone anchor headphones" 133 impr) are bone-anchored-hearing-
aid (BAHA) medical-device searches, not consumer bone-conduction buyers, while the real money term
"bone conduction headphones india" gets only 153 impr at pos 8.81 — worse than the page's blended
position. Same diagnostic lens as SEO-025 and SEO-028/029, now proven on a 4th page type
(collection, not blog/PDP). Drafted as SEO-032.

**NEW — WRITE (SEO-033):** "open ear wireless earbuds india" and "open ear earbuds ai
translation" both return 0 GSC rows — genuine zero presence for the SafeBuds cluster. SafeBuds'
own PDP earns ~75% of its impressions on branded "wehear" terms only, never the category/feature
money phrases.

**CONFIRMED — approval-to-execution latency has now crossed from "measurable drag" to "actively
missing its own checkpoints."** The same 7 rows (SEO-020/021/022/024/025/026/027) are now 13 days
unexecuted, three full weekly cycles. WFH extended to a **7th straight cycle of decline** (pos
13.87). **SEO-026's own D+14 AEO read checkpoint arrived today (2026-08-17) with the fix never
shipped.**

**Next sprint change triggered:** SEO-032 (CTR-FIX, `/collections/bone-conduction-headphones`),
SEO-033 (WRITE, SafeBuds "open ear wireless earbuds india" / AI-translation cluster). Next free ID
after this cycle: **SEO-034.**

---

## SCALE HYPOTHESIS BACKLOG (per COMPANY_STATE §5.5 — test → validate → scale)

> Falsifiable bets on what wins clicks + AEO citations. Scale bar: non-branded CTR + position trend up on the target cluster, AEO citation captured. A confirmed pattern gets rolled across the cluster; a rejected one is retired.

| # | Hypothesis (metric + threshold) | Test (smallest move) | Status | Linked queue |
|---|---|---|---|---|
| SH-SEO-10 | A CTR-FIX rewrite that targets a page's actual top queries by impression (not just its nominal target keyword) recovers CTR meaningfully faster than a rewrite targeting the exact-match phrase alone. | Ship SEO-025 (open-ear-vs-in-ear page), read CTR at 30 days. | OPEN — resolved per tracker.md's 09-11 sync note but page still shows CTR falling (0.049% this cycle) — monitoring continues. **5th confirmation 2026-09-14 on a PDP (SafeBuds "wehear" query) — pattern now proven across blog, collection, and PDP page types.** | SEO-025, SEO-028, SEO-029, SEO-032, SEO-036 |
| SH-SEO-13 | A page that already surfaces organically but hasn't won AI citation (bone-conduction-headphones-side-effects) reaches citation faster via a targeted direct-answer+FAQ expansion than a fully-absent page does. | Ship SEO-031, recheck AEO citation proxy at 14 days. | OPEN — SEO-031 executed 2026-09-11 per tracker.md. Page continued its climb in the web_search sweep to **~4th of 10** this cycle (best reading on record) even before SEO-031 had time to take effect — escalated further as SEO-039 rather than waiting. | SEO-031, SEO-039 |
| SH-SEO-16 | A query-specific (not generic) title/meta + FAQ fix on a PDP recovers CTR on its single worst-converting query, where a prior generic rewrite on the same page plateaued. | Ship SEO-036 (SafeBuds "wehear" query), read CTR on that specific query at 30 days (2026-10-13) against the 0.17% baseline. | OPEN — new this cycle (2026-09-14). | SEO-036 |
| SH-SEO-17 | A PDP whose position falls sharply outside a template-change window is more likely a regression to check/revert than a genuine ranking loss to content-fix. | Ship SEO-037 (verify ES Lite's title/meta/canonical unchanged; reinforce if confirmed clean), read position at 30 days against the 6.12 baseline. | OPEN — new this cycle (2026-09-14). | SEO-037 |
| SH-SEO-18 | A persona-specific rewrite (teachers, not generic WFH office workers) of an existing thin page can lift CTR/position on its own distinct keyword cluster. | Ship SEO-038 ("best headphones for teaching online"), read CTR/position at 30 days against the 0.11%/10.25 baseline. | OPEN — new this cycle (2026-09-14). | SEO-038 |
| SH-SEO-19 | Mirroring a winning competitor's exact content framing (Shokz UK's "Myths vs Facts" structure) on a page already close to AI citation closes the remaining gap faster than a generic FAQ expansion alone. | Ship SEO-039, recheck AEO citation proxy at 14 days (2026-09-28) against this cycle's ~4th-of-10 baseline. | OPEN — new this cycle (2026-09-14). | SEO-039 |
