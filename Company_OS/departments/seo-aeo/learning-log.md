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
  0.29% vs 0.61% prior). CTR-FIX work is the lever, not rank alone. **Update 2026-08-03: this cycle
  broke the pattern for the first time** — "open ear headphones" position improved (8.59→8.16) AND
  CTR improved with it (0.29%→0.77%). One data point, not yet a reversal of the standing pattern —
  watch next cycle before crediting it.
- **A page can rank well and still catastrophically fail on CTR if its title/meta don't match the
  queries it actually earns impressions on, not just its target keyword.** New pattern, confirmed
  2026-08-03: `open-ear-vs-in-ear-vs-over-ear-headphones` ranks pos 6.28 overall but converts at
  0.11% CTR (13,992 impr/30d) because its two biggest queries by impressions — "in ear earphones"
  (2,565 impr) and "over ear earphones" (909 impr) — are generic single-category searches the
  comparison-framed title doesn't speak to. SEO-001/003's July rewrite optimized for the exact-match
  phrase ("open ear vs in ear headphones," only 46 impr) while the page's real impression volume
  sits on adjacent generic terms. Lesson for every future CTR-FIX: pull the page's top queries by
  impression, not just its nominal target keyword, before writing the rewrite spec.
- **WebFetch silently strips `<script>` tags — it will false-negative on any JSON-LD/schema check.**
  Confirmed repeatedly (SEO-002 07-03, SEO-011/013 07-21). Never conclude "schema missing" from a
  WebFetch read; use raw `curl` or a Rich Results Test. This single tool limitation produced two
  false-premise queue rows (SEO-011's "4 SKUs missing schema" and SEO-013's "still missing Product
  JSON-LD") before it was diagnosed.
- **Any `/execute-approved` run must commit+push tracker.md/queue-inbox.md/learning-log.md in the
  same session.** Local-only status updates are invisible to the managed agent, which reads only
  GitHub — see the 2026-07-27 sync-gap entry below for what happens when this is skipped (three
  cycles of a fixed page getting re-flagged as broken).
- **Always read tracker.md's LIVE STATUS SNAPSHOT / ⚠️ SYNC CORRECTION section in full before
  drafting anything, every run — not just after a known incident.** Confirmed necessary again
  2026-07-27: a same-day earlier run had already produced 3 duplicate/false-premise drafts
  (SEO-017/018/019) purely because it trusted a stale snapshot. The correction lived only in the
  tracker's top section, not in the standing rules — reading it first is what prevented a repeat.
  **Reconfirmed clean 2026-08-03:** read queue-inbox.md directly before drafting SEO-025/026/027 —
  confirmed SEO-020 through SEO-024 all still pending, zero collisions this cycle.

## KEYWORD MOVEMENT LOG (update each 30-day pull)
| Date | Keyword | Position before | Position after | CTR before | CTR after | Note |
|---|---|---|---|---|---|---|
| _seed_ | "open ear headphones" | 12.0 | — | — | — | target pos 5 |
| 2026-07-20 | "open ear headphones" | 8.7 (06-27) | 8.64 | 1.01% | 0.61% | Position now beats the 9.0 30-day target; CTR did not follow — clicks lag rank gains. |
| 2026-07-27 | "open ear headphones" | 8.64 (07-20) | 8.59 | 0.61% | 0.29% | Position still beats target; CTR fell again, on a very small slice (1,025 impr/3 clicks). Confirms the standing pattern, not a new signal. Reconfirmed on re-pull in the corrected same-day cycle (identical numbers — same 30d window, no new data). |
| 2026-08-03 | "open ear headphones" | 8.59 (07-27) | 8.16 | 0.29% | 0.77% | **Pattern break:** position improved AND CTR improved with it (7 clicks/909 impr). First cycle since tracking began where rank and CTR moved the same direction. One data point — watch next cycle before crediting a reversal of the standing "rank gains don't convert" pattern. |
| 2026-07-20 | best-noise-canceling-headset-for-wfh (page) | 5.36 (07-03) | 6.31 | 0.13% | 0.08% | 3rd straight cycle of decline (4.06→5.36→6.31); re-queued SEO-014. |
| 2026-07-27 | best-noise-canceling-headset-for-wfh (page) | 6.31 (07-20) | 8.34 | 0.08% | 0.10% | 4th straight cycle of decline (4.06→5.36→6.31→8.34); impressions down 65% since 06-27 (2,873→993). SEO-014 (the H1/FAQ fix) is already live and did not arrest it — the real lever (content↔promise mismatch) is now drafted as **SEO-021**, not another H1 edit. |
| 2026-08-03 | best-noise-canceling-headset-for-wfh (page) | 8.34 (07-27) | 9.52 | 0.10% | 0.099% | **5th straight cycle of decline** (4.06→5.36→6.31→8.34→9.52). Impressions flattened (993→1,013) rather than collapsing further — possible bottoming-out, but position keeps sliding. SEO-021 (the real fix — comparison content) has been drafted and unapproved for a full week; upgraded to urgent this cycle, not re-drafted. |
| 2026-07-27 | Pro Swimming PDP (page, CTR-disease) | pos 4.16 / 30,935 impr (07-20) | pos 4.19 / 50,904 impr | 1.32% | 0.96% | SEO-013/017 executed 07-21 — inside its D+30 read window (2026-08-19), not re-surfaced this cycle. |
| 2026-08-03 | Pro Swimming PDP (page, CTR-disease) | pos 4.19 / 50,904 impr (07-27) | pos 4.34 / 55,501 impr | 0.96% | 0.86% | Impressions keep growing (+9%) but CTR keeps falling — still inside SEO-013's D+30 read window (2026-08-19), not re-drafted, but the trend is worth watching hard when that window closes. |
| 2026-08-03 | open-ear-vs-in-ear-vs-over-ear-headphones (page, SEO-001/003 target) | n/a (too early to read before 07-31) | pos 6.28 / 13,992 impr | n/a | **0.11%** | **First valid 30-day read on the July rewrite.** Result is a clear miss — CTR far below the 43-page disease band's own 0.625% blended average. Root cause diagnosed: page's biggest queries by impression ("in ear earphones," "over ear earphones") don't match the comparison-framed title/meta the July rewrite shipped. Escalated as SEO-025 (CTR-FIX) + SEO-026 (AEO). |
| 2026-08-03 | can-headphones-cause-vertigo (page, SEO-007 target) | n/a (too early before 07-31) | pos 6.77 / 1,967 impr | n/a | 1.37% | First valid read: promising — CTR above the disease-band average (0.625%), the best-performing of the 5 July-rewrite pages read this cycle. |
| 2026-08-03 | side-effects-of-headphones-on-brain (page, SEO-008 target) | n/a (too early before 07-31) | pos 7.58 / 2,539 impr | n/a | 0.98% | First valid read: also promising, CTR above the disease-band average. |
| 2026-08-03 | bone-conduction-headphones-side-effects (page, SEO-002 target) | n/a (too early before 07-31) | pos 10.19 / 3,079 impr | n/a | 0.52% | First valid read: middling — below the disease-band average but page now surfaces in web_search results (~8th of 10) for "bone conduction headphones side effects," which it didn't reliably do before. |

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
| 2026-07-27 | "earphones hurting ears what to do" | No — unchanged | No | web_search proxy — Shokz now confirmed running *two* separate articles on this query; SEO-016 already executed, D+14 read due 2026-08-04 |
| 2026-07-27 | "bone conduction headphones side effects" | No change — own page still surfaces ~5th of 10 | Page present, citation unconfirmed | web_search proxy |
| 2026-07-27 | "open ear vs in ear headphones" | **2nd consecutive cycle NG did not surface** in top-10 (Bose, Soundcore, Forbes, beyerdynamic, Shokz, Lobkin, Avantree dominate). GSC page position (6.28) still hasn't collapsed — still read as SERP-snapshot volatility, but re-check harder if a 3rd cycle repeats it (next AEO check due 2026-08-03). | No | web_search proxy (corrected same-day re-check, reconfirms the earlier same-day read) |
| 2026-07-27 | "best running headphones india" (new — not one of the 5 standing monitors, checked to ground the WRITE gate) | No — NG completely absent | No | web_search proxy — Shokz OpenRun Pro 2 named #1 pick by TechRadar; grounds SEO-024 |
| 2026-08-03 | "best open ear headphones india" | No change — collection pages still surface organically, still not a confirmed AI citation | No | web_search proxy |
| 2026-08-03 | "are open ear headphones safe" | No — unchanged, 3rd straight cycle. Shokz, Soundcore (x2), Baseus, King Lucky, langsdom all cited, no NG. | No | web_search proxy — reconfirms SEO-020, still unapproved |
| 2026-08-03 | "earphones hurting ears what to do" | No — unchanged. This is SEO-016's D+14 read: schema shipped 07-21, citation not yet won. | No | web_search proxy — Shokz confirmed running the query from **two separate domains** (shokz.com + uk.shokz.com), up from one prior cycle's single-article read |
| 2026-08-03 | "bone conduction headphones side effects" | NG's own page (SEO-002 target) surfaces at ~8th of 10 — present but not the AI-style citation | Present, citation unconfirmed | web_search proxy |
| 2026-08-03 | "open ear vs in ear headphones" | **3rd consecutive cycle of absence — escalation trigger fired.** Bose, Soundcore, Forbes, beyerdynamic, Shokz, opnsound, LOBKIN, Skullcandy, Avantree dominate; NG completely absent from the top-10 sweep for the 3rd straight cycle running. | No | web_search proxy — escalated to **SEO-026** (direct-answer + FAQ fix on the same page being CTR-fixed as SEO-025) |

## REJECTED / DEAD ENDS
- **Assuming a local `/execute-approved` session's file updates reach the managed agent
  automatically — REJECTED 2026-07-27.** They don't; the agent only ever sees what's on GitHub.
  Three human-approved-and-shipped fixes (SEO-013/014/016, plus the OpenWire title swap and the
  PDP structural change) got silently re-flagged as unaddressed for a full cycle because the local
  updates to tracker.md/queue-inbox.md were never committed+pushed. See the 2026-07-27 sync-gap
  postmortem cycle entry for the full account. Always push after `/execute-approved`.
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

---

## CYCLE LOG (most recent first)

### 2026-08-03 — Weekly managed-agent cycle: first valid July-rewrite read, 3rd-cycle AEO escalation, SafeBuds/WFH still unapproved

**Initiative:** Third Monday 08:00 IST managed-agent cycle. Read tracker.md + learning-log.md first
(2 calls); confirmed no ⚠️ SYNC CORRECTION pending and the LIVE STATUS SNAPSHOT accurate as of
2026-07-27. Pulled GSC + GA4 fresh via direct APIs in one Python script (window 2026-07-04→
2026-08-02, 30d): GSC returned 16,283 query×page rows (single page, no truncation — under the
25,000 cap); GA4 returned 1,936 rows, `len(rows)==rowCount` asserted (no truncation). All
page/branded/PDP/landingPage breakdowns reconciled to their parent totals in code (asserted, no
mismatches). Read queue-inbox.md directly before drafting anything — confirmed SEO-020 through
SEO-024 all still pending, zero collisions.

**CONFIRMED — first valid 30-day read on the July rewrites (SEO-001/002/003/007/008) is now in
(read date was 2026-07-31, this cycle is 3 days past):** mixed result, not credited or rejected as
a batch. SEO-007 (vertigo) and SEO-008 (brain side-effects) show early promise — both above the
disease-band's own 0.625% blended CTR average. SEO-002 (bone-conduction-side-effects) is middling
(0.52% CTR) but the page now surfaces in web_search results where it previously didn't reliably.
SEO-001/003 (open-ear-vs-in-ear-vs-over-ear-headphones) is a clear miss: **0.11% CTR on 13,992
impr/30d**, far below the band average — root cause diagnosed as a content-intent mismatch (see
CONFIRMED PATTERNS above) and escalated as **SEO-025** (CTR-FIX) + **SEO-026** (AEO).

**CONFIRMED — "open ear vs in ear headphones" AEO absence hit its 3-cycle escalation trigger.**
Flagged on 2026-07-27 to escalate if a 3rd consecutive cycle repeated NG's absence from the
web_search sweep — it did, this cycle. Folded into SEO-026 on the same page as the CTR-FIX since
root cause is shared: the page ranks fine in GSC (pos 6.28) but never directly answers its own
target phrase in a way that wins AI-style citation.

**NEW — SEO-027 (WRITE, ES Lite budget cluster):** "open ear earphones under 2000" and "budget open
ear earphones india" both return 0 GSC rows this cycle — genuine zero presence on a price-anchored,
high-intent phrase. ES Lite's own PDP only ranks on branded terms. Drafted a new buying-guide
article, not a duplicate of SEO-024 (running cluster, different intent/cluster).

**RE-CONFIRMED, escalated in urgency, not re-drafted:** SEO-021 (WFH page) is now a 5th straight
cycle of decline (8.34→9.52) while sitting unapproved for a full week — upgraded to urgent in the
queue-inbox annotation. SEO-022 (collections page) and SEO-023 (SafeBuds PDP) both essentially
unchanged week-on-week, still unapproved. SEO-020 (AEO, are-bone-conduction-safe) reconfirmed via
fresh web_search, unchanged, still unapproved. SEO-024 (running WRITE) reconfirmed — still 0 rows
on its target keyword.

**PDP CLUSTER TRACKER — 2nd real pull, now week-on-week not first-read:** OpenWire impr +32%
(1,394→1,839), CTR down but still healthy (5.95%→4.84%); Comm 2.0 roughly flat; SafeBuds impr +5%
(4,726→4,979), CTR up slightly (0.91%→1.06%) but still inside the disease band (SEO-023 remains
valid); ES Lite impr +29% (1,509→1,951), CTR down slightly but position strong (pos 3.60, outside
the disease-band gate). None of the provisional PDP money keywords ("open ear wireless earbuds
india," "boom mic open ear headset," etc.) returned any GSC rows this cycle — SafeBuds/Comm2.0/ES
Lite continue to earn their impressions on branded/co-brand terms, not the aspirational category
phrases in constitution.md §3a.

**UNCHANGED — not re-flagged with new action, not decided by this agent:** SEO-005 (earplug
cluster, 17,138 impr/44 clicks/0.2567% CTR/pos 12.46 — roughly unchanged, still pending founder
decision); SEO-009 (GA4 organic revenue ₹3,60,670.20 vs GSC clicks 2,453, both roughly flat vs
prior cycle — still unreconciled); P0-4 (Rich Results Test on FAQPage schema, still not run this
cycle — out of budget again).

**Next sprint change triggered:** SEO-025 (CTR-FIX, open-ear-vs-in-ear page), SEO-026 (AEO, same
page), SEO-027 (WRITE, ES Lite budget cluster). Next free ID after this cycle: **SEO-028.**

---

### 2026-07-27 (corrected run) — PDP cluster first pull + 4 new drafts (SEO-021–024), zero re-drafts

**Initiative:** Ran the weekly cycle again same-day, after the sync-correction fixed tracker.md
and queue-inbox.md. Re-pulled GSC + GA4 fresh (direct APIs, same 2026-06-27→2026-07-26 window as
the flawed earlier run — GSC numbers reproduced identically: 15,424 rows, 2,449 clicks, 1,84,827
impr, confirming no new data arrived intraday; GA4 sessions/revenue moved slightly, 7,059 sessions/
₹3,67,834.65, reflecting normal GA4 processing lag). Read tracker.md's LIVE STATUS SNAPSHOT and
SYNC CORRECTION in full before drafting anything this time — confirmed SEO-013/014/015/016/017/
018/019/020 are all either executed or already-queued-and-pending, and drafted **nothing** against
any of them.

**NEW — first real PDP Cluster Tracker pull (SEO-019's structural change, finally exercised):**
OpenWire 1,394 impr/83 clicks/5.95% CTR/pos 6.38; Comm 2.0 1,783/43/2.41%/2.74; SafeBuds
4,726/43/0.91%/5.10; ES Lite 1,509/24/1.59%/3.65. Only SafeBuds crosses the CTR-disease gate (pos
4–10 & CTR<2%) — drafted as **SEO-023** (title/meta only, explicitly not touching the
Product-schema/rating-source question still blocked at SEO-011). Labeled all 4 as first-read
baselines; explicitly did NOT compare OpenWire's 1,394 impr/30d figure against the tracker's old
"648 clicks/90d" number, which is a different page (collection page) over a different window.

**NEW — WFH page's OPEN FLAG finally drafted, not just flagged (SEO-021):** the content↔promise
mismatch identified during SEO-014's execution (07-21) has sat unassigned for two cycles while the
page kept declining (now 4 straight cycles, 4.06→5.36→6.31→8.34, impressions −65%). Drafted the
actual comparison-content fix this cycle instead of re-flagging it a third time.

**NEW — 2 more CTR-FIX candidates surfaced from the disease band (SEO-022, /collections/open-ear-
headphones, 8,235 impr/0.89% CTR/pos 5.90) and confirmed via the PDP pull (SEO-023, above) — both
untouched by any prior draft.**

**NEW — WRITE gap on the Running/Safety cluster (SEO-024):** "best running headphones india"
returns 0 rows; the existing page at this exact topic (`best-out-of-ear-headphones-for-running`)
is thin and near-invisible (24 impr/30d, 0 clicks, pos 12.83). web_search confirms zero NG
presence and Shokz OpenRun Pro 2 as the category's dominant pick. Drafted as a rewrite/expand of
the existing URL, not a new one, to avoid cannibalization.

**CONFIRMED — "open ear vs in ear headphones" AEO non-appearance is now a 2nd consecutive
cycle**, not a one-off SERP snapshot. GSC page position (6.28) still hasn't moved, so still read
as volatility rather than a real drop, but flagged to escalate if a 3rd cycle (2026-08-03) repeats
it.

**UNCHANGED — SEO-020 (AEO, "are open ear headphones safe") reconfirmed, not re-drafted; SEO-016
(AEO, "earphones hurting ears") D+14 read due 2026-08-04, not yet; SEO-001/002/003/007/008 (July
rewrites) remain PENDING-READ, valid read 2026-07-31 (4 days out); SEO-005 (earplug cluster) and
SEO-009 (GA4 vs GSC) re-flagged, not decided by this agent.**

**Next sprint change triggered:** SEO-021 (WFH comparison section — the highest-priority undrafted
item finally drafted), SEO-022 (collections page CTR-FIX), SEO-023 (SafeBuds PDP CTR-FIX, first
PDP-pull finding), SEO-024 (running-headphones WRITE). Next free ID after this cycle: **SEO-025.**

---

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
(the one genuine new item from 07-27) carries forward unchanged. (Superseded in practice by the
corrected same-day cycle logged above, which drafted SEO-021–024.)

---

### 2026-07-27 — Weekly managed-agent cycle: GSC + GA4 direct-API pulls, 5 AEO checks + 1 competitor-SERP check

**Initiative:** Second run under the Monday 08:00 IST managed-agent cadence, and the first cycle
where both GSC and GA4 are confirmed direct-API pulls (GA4 moved off Windsor on 2026-07-22).
Window 2026-06-27→2026-07-26 (30d). GSC: OAuth token exchange + paginated Search Analytics
returned 15,424 query×page rows (no truncation, single page under the 25,000 cap). GA4: OAuth
token exchange + Data API `runReport` returned 1,857 rows, `len(rows)==rowCount` asserted (no
truncation). All page/query/branded/landingPage breakdowns reconciled to their parent totals in
code (asserted, no mismatches).

**⚠️ Note added by the corrected same-day run:** this cycle's SEO-017/018/019 drafts (referenced
below) were VOID — see the sync-gap postmortem entry above and the corrected-run entry at the top
of this log for what actually happened and what was drafted instead.

**CONFIRMED — rank gains still not converting to clicks, and it's spreading:** "open ear
headphones" position (8.59) again beats the 9.0 target, but CTR on it fell again (0.61%→0.29%).
Site-wide, non-branded CTR fell too (0.73%→0.69%, same classification method as the 07-20 anchor
— a real 0.04pp decline, not a methodology artifact). This is now a two-cycle trend, not a
one-off.

**PENDING — July rewrites (SEO-001/002/003/007/008):** Still inside the too-early window. First
valid 30-day read remains 2026-07-31 (4 days out from this cycle). Not credited or rejected here.

**Next sprint change triggered:** superseded — see the corrected-run entry above for what actually
shipped to the queue this date (SEO-020 reconfirmed; SEO-021–024 new).

---

## SCALE HYPOTHESIS BACKLOG (per COMPANY_STATE §5.5 — test → validate → scale)

> Falsifiable bets on what wins clicks + AEO citations. Scale bar: non-branded CTR + position trend up on the target cluster, AEO citation captured. A confirmed pattern gets rolled across the cluster; a rejected one is retired.

| # | Hypothesis (metric + threshold) | Test (smallest move) | Status | Linked queue |
|---|---|---|---|---|
| SH-SEO-1 | Adding an 8-Q FAQPage schema to high-impression health-scare pages wins AEO citations and lifts CTR toward 3% within 30–60 days. | Ship SEO-007 (vertigo) + SEO-003 (comparison) schema, recheck CTR + AI citation at 30/60 days. | OPEN — pattern test; roll across cluster if confirmed. First 30-day read (2026-08-03): SEO-007 promising (1.37% CTR, above disease-band average); SEO-003's page (open-ear-vs-in-ear) is a clear miss (0.11%) but for a diagnosed reason (query-intent mismatch, not the schema itself) — see SEO-025/026. | SEO-007, SEO-003, SEO-002 |
| SH-SEO-2 | "India 2026 + price/use-case" front-loaded titles lift CTR on top-10 CTR-disease pages without hurting position. | Ship SEO-001/004/008 rewrites, read CTR + pos at 28 days. | **First read in (2026-08-03), MIXED — not a clean confirm.** SEO-008 (brain side-effects) shows promise (0.98% CTR, above band average). SEO-001 (open-ear-vs-in-ear) is a clear miss (0.11% CTR) — but root cause is that the front-loaded title didn't address the page's actual top queries, not that the pattern itself is wrong. Escalating with SEO-025 (a corrected version of the same rewrite approach) before rejecting the hypothesis outright. | SEO-001, SEO-004, SEO-008 |
| SH-SEO-3 | With Comm 2.0 stock cleared, adding Comm 2.0 as a primary CTA on WFH/commercial pages lifts SEO→D2C conversion without harming rankings. | Add Comm 2.0 CTA to SEO-004/006 pages, watch assisted conversions. | OPEN — newly unblocked by CEO stock clearance 2026-06-27. | SEO-004, SEO-006, CSO-001 |
| SH-SEO-4 | A dedicated India-focused "Shokz alternatives" comparison page can capture organic share of a cluster NG currently has zero presence in, within 60 days of publish. | Ship SEO-015/SEO-019, read GSC rank for "shokz alternatives india" + related long-tail at 30/60 days. | OPEN — published live 07-21; D+30 read 2026-08-19. 2026-08-03 pull: still near-zero (14 impr, 0 clicks, pos 16.29), one day before its D+14 index check. | SEO-015, SEO-019 |
| SH-SEO-5 | Adding a direct-answer FAQPage block for adjacent pain-point queries ("earphones hurting ears") to an already-authoritative page (vertigo blog) wins AI-answer consideration faster than a new standalone page would. | Ship SEO-016, recheck AEO citation proxy at 14 days (2026-08-03/04). | **D+14 read in (2026-08-03): inconclusive/not yet won.** NG still absent from the web_search sweep; Shokz's footprint grew further (now 2 separate domains running the query). Continue monitoring — not rejected yet, but no positive signal either. | SEO-016 |
| SH-SEO-6 | A direct-answer + FAQPage rewrite of a near-zero-visibility safety page (pos 43.70) can both win AEO citation and lift organic rank for "are open ear/bone conduction headphones safe" within 30–60 days. | Ship SEO-020, recheck AEO citation proxy at 14 days (2026-08-10) and GSC position at 30 days. | OPEN — still pending approval, reconfirmed again 2026-08-03 (3rd cycle unapproved). | SEO-020 |
| SH-SEO-7 | A rewrite of an existing thin page (not a new URL) can capture organic share of the Running/Safety cluster, where NG currently has zero presence on the money keyword, within 60 days. | Ship SEO-024, read GSC rank for "best running headphones india" at 30/60 days. | OPEN — still pending approval, reconfirmed 2026-08-03 (still 0 rows on target keyword). | SEO-024 |
| SH-SEO-8 | Fixing the WFH page's content↔promise mismatch (real comparison content, not another H1/FAQ edit) succeeds where the SEO-014 harmonization alone did not, arresting a multi-cycle position slide. | Ship SEO-021, read GSC position at 30 days (2026-08-26) against the 8.34 baseline. | OPEN — still pending approval; the slide it's meant to fix continued for a 5th straight cycle this session (now 9.52). Upgraded to urgent. | SEO-021 |
| SH-SEO-9 | The first PDP-level GSC pull reliably surfaces CTR-disease-band members that thematic-cluster tracking alone misses (as it did with OpenWire pre-SEO-019). | Ship SEO-023 (SafeBuds CTR-FIX, surfaced only via the PDP pull), read CTR/position at 30 days. | OPEN — 2nd PDP pull (2026-08-03) confirms SafeBuds still the only tracked PDP inside the disease-band gate; SEO-023 still pending approval, still unexecuted. | SEO-023, SEO-019 |
| SH-SEO-10 | A CTR-FIX rewrite that targets a page's actual top queries by impression (not just its nominal target keyword) recovers CTR meaningfully faster than a rewrite targeting the exact-match phrase alone. | Ship SEO-025 (open-ear-vs-in-ear page, rewritten for "in ear earphones"/"over ear earphones" intent, not just the comparison phrase), read CTR at 30 days (2026-09-02) against the 0.11% baseline. | OPEN — new this cycle (2026-08-03), first test of the query-intent-mismatch pattern diagnosed above. | SEO-025 |
| SH-SEO-11 | Folding a direct-answer block for a money AEO query into an already-ranking page (rather than a new page) wins AI-answer consideration within 14 days, even when the page's existing FAQ buries the exact phrase. | Ship SEO-026 (open-ear-vs-in-ear page), recheck AEO citation proxy at 14 days (2026-08-17). | OPEN — new this cycle (2026-08-03), tests the same pattern as SH-SEO-5 on a different query/page pair. | SEO-026 |
| SH-SEO-12 | A dedicated budget/price-anchored buying guide can capture organic share of a genuine zero-presence money keyword ("open ear earphones under 2000") within 60 days, using an existing PDP (ES Lite) as the primary CTA. | Ship SEO-027, read GSC rank for "open ear earphones under 2000" at 30/60 days. | OPEN — new this cycle (2026-08-03). | SEO-027 |
