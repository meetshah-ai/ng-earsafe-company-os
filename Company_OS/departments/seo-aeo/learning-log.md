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
- **Always read tracker.md's LIVE STATUS SNAPSHOT / ⚠️ SYNC CORRECTION section in full before
  drafting anything, every run — not just after a known incident.** Confirmed necessary again
  2026-07-27: a same-day earlier run had already produced 3 duplicate/false-premise drafts
  (SEO-017/018/019) purely because it trusted a stale snapshot. The correction lived only in the
  tracker's top section, not in the standing rules — reading it first is what prevented a repeat.

## KEYWORD MOVEMENT LOG (update each 30-day pull)
| Date | Keyword | Position before | Position after | CTR before | CTR after | Note |
|---|---|---|---|---|---|---|
| _seed_ | "open ear headphones" | 12.0 | — | — | — | target pos 5 |
| 2026-07-20 | "open ear headphones" | 8.7 (06-27) | 8.64 | 1.01% | 0.61% | Position now beats the 9.0 30-day target; CTR did not follow — clicks lag rank gains. |
| 2026-07-27 | "open ear headphones" | 8.64 (07-20) | 8.59 | 0.61% | 0.29% | Position still beats target; CTR fell again, on a very small slice (1,025 impr/3 clicks). Confirms the standing pattern, not a new signal. Reconfirmed on re-pull in the corrected same-day cycle (identical numbers — same 30d window, no new data). |
| 2026-07-20 | best-noise-canceling-headset-for-wfh (page) | 5.36 (07-03) | 6.31 | 0.13% | 0.08% | 3rd straight cycle of decline (4.06→5.36→6.31); re-queued SEO-014. |
| 2026-07-27 | best-noise-canceling-headset-for-wfh (page) | 6.31 (07-20) | 8.34 | 0.08% | 0.10% | 4th straight cycle of decline (4.06→5.36→6.31→8.34); impressions down 65% since 06-27 (2,873→993). SEO-014 (the H1/FAQ fix) is already live and did not arrest it — the real lever (content↔promise mismatch) is now drafted as **SEO-021**, not another H1 edit. |
| 2026-07-27 | Pro Swimming PDP (page, CTR-disease) | pos 4.16 / 30,935 impr (07-20) | pos 4.19 / 50,904 impr | 1.32% | 0.96% | SEO-013/017 executed 07-21 — inside its D+30 read window (2026-08-19), not re-surfaced this cycle. |

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

---

## CYCLE LOG (most recent first)

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
| SH-SEO-1 | Adding an 8-Q FAQPage schema to high-impression health-scare pages wins AEO citations and lifts CTR toward 3% within 30–60 days. | Ship SEO-007 (vertigo) + SEO-003 (comparison) schema, recheck CTR + AI citation at 30/60 days. | OPEN — pattern test; roll across cluster if confirmed. | SEO-007, SEO-003, SEO-002 |
| SH-SEO-2 | "India 2026 + price/use-case" front-loaded titles lift CTR on top-10 CTR-disease pages without hurting position. | Ship SEO-001/004/008 rewrites, read CTR + pos at 28 days. | OPEN. | SEO-001, SEO-004, SEO-008 |
| SH-SEO-3 | With Comm 2.0 stock cleared, adding Comm 2.0 as a primary CTA on WFH/commercial pages lifts SEO→D2C conversion without harming rankings. | Add Comm 2.0 CTA to SEO-004/006 pages, watch assisted conversions. | OPEN — newly unblocked by CEO stock clearance 2026-06-27. | SEO-004, SEO-006, CSO-001 |
| SH-SEO-4 | A dedicated India-focused "Shokz alternatives" comparison page can capture organic share of a cluster NG currently has zero presence in, within 60 days of publish. | Ship SEO-015/SEO-019, read GSC rank for "shokz alternatives india" + related long-tail at 30/60 days. | OPEN — published live 07-21; D+30 read 2026-08-19. | SEO-015, SEO-019 |
| SH-SEO-5 | Adding a direct-answer FAQPage block for adjacent pain-point queries ("earphones hurting ears") to an already-authoritative page (vertigo blog) wins AI-answer consideration faster than a new standalone page would. | Ship SEO-016, recheck AEO citation proxy at 14 days (2026-08-03/04). | OPEN — executed 07-21; Shokz's footprint on this query grew to 2 articles. | SEO-016 |
| SH-SEO-6 | A direct-answer + FAQPage rewrite of a near-zero-visibility safety page (pos 43.70) can both win AEO citation and lift organic rank for "are open ear/bone conduction headphones safe" within 30–60 days. | Ship SEO-020, recheck AEO citation proxy at 14 days (2026-08-10) and GSC position at 30 days. | OPEN — still pending approval, reconfirmed 2026-07-27. | SEO-020 |
| SH-SEO-7 | A rewrite of an existing thin page (not a new URL) can capture organic share of the Running/Safety cluster, where NG currently has zero presence on the money keyword, within 60 days. | Ship SEO-024, read GSC rank for "best running headphones india" at 30/60 days. | OPEN — new this cycle (2026-07-27). | SEO-024 |
| SH-SEO-8 | Fixing the WFH page's content↔promise mismatch (real comparison content, not another H1/FAQ edit) succeeds where the SEO-014 harmonization alone did not, arresting a 4-cycle position slide. | Ship SEO-021, read GSC position at 30 days (2026-08-26) against the 8.34 baseline. | OPEN — new this cycle (2026-07-27). | SEO-021 |
| SH-SEO-9 | The first PDP-level GSC pull reliably surfaces CTR-disease-band members that thematic-cluster tracking alone misses (as it did with OpenWire pre-SEO-019). | Ship SEO-023 (SafeBuds CTR-FIX, surfaced only via the PDP pull), read CTR/position at 30 days. | OPEN — new this cycle (2026-07-27), first PDP pull. | SEO-023, SEO-019 |
