# Google Ads — Queue Inbox

> **The google-ads agent's private draft inbox. It writes here and nowhere else.**
>
> It must **never** touch `Company_OS/APPROVALS_QUEUE.md` — the GitHub MCP write tool replaces a
> file's entire contents (there is no append mode), so a 180KB shared file that many agents write
> is one bad write away from destroying every department's rows. That is exactly what happened on
> 2026-07-13: the queue went 179,697 bytes → 23 bytes and had to be rebuilt from git history.
>
> **`/approvals` merges these rows into the shared queue.** That is a human step, on purpose.
>
> Terminal rows (superseded/closed/resolved/rejected/retracted, nothing left to act on) are compacted to one line each in **`## Resolved (compact)`** at the bottom. Full detail for those lives permanently in `DECISION_LOG.md` and `Company_OS/APPROVALS_QUEUE.md`. Only still-open/pending rows keep full detail here.

| id | date | dept | action | rationale | data-basis | risk | reversible? | status |
|---|---|---|---|---|---|---|---|---|
| **GA-013** | 2026-07-16 | google-ads | CUT/FIX — rein in AI Max leakage, 17 zero-conv queries, ₹624.35/30d | — | — | low | yes | pending — ✅ **APPROVED by Meet 2026-08-04 via /approvals — awaiting `/execute-approved`.** ⚠️ **2026-08-27: still not executed. Zero-conv tail ₹576.80→₹773.12→₹836.26→₹1,186.08→**₹720.22** (25→35 terms) — reversed direction this cycle but still nonzero — see GA-065 refresh. Execution still pending.** |
| **GA-019** | 2026-07-23 | google-ads | HOLD — budget stays at current level, no increase | marginal ROAS −3.64× | — | n/a | n/a | logged — ✅ **Reaffirmed 2026-08-27 — this cycle's naive last7-vs-prior7 delta (12.9×) is not valid budget evidence: both spend AND revenue fell (‑₹523/day, ‑₹6,751/day), not a deliberate spend-increase test. Gate stays CLOSED on the standing −3.64× finding.** |
| **GA-026** | 2026-08-03 | google-ads | TEST — monitor new SafeBuds-Search campaign, no change | — | — | low | n/a | ✅ **CONFIRMED every cycle — 2026-08-27 platform ROAS 15.31× on ₹14,074.32/30d, 90.43 conv. Continue monitoring, do not add spend.** |
| **GA-027** | 2026-08-03 | google-ads | FIX (informational) — confirm GA-022 lag, flag 08-01/08-02 | — | — | low | n/a | ✅ **08-01 confirmed lag. 08-02 confirmed standing zero-activity day — still present, unchanged, 2026-08-20.** |
| **GA-028** | 2026-08-04 | google-ads | TEST/FIX — "wired open ear" keyword research for teammate, new ad group in Search-26 (not a new campaign) | ₹448.53/30d incidental, mostly zero-conv, 1 real converter | 63 terms, 2,660-row unfiltered pull | low | yes | ✅ **APPROVED by Meet 2026-09-09 via /approvals — awaiting `/execute-approved`.** |
| **GA-043** | 2026-08-17 | google-ads | HOLD (informational) — do not reactivate `Search-26 May 25` blindly | GA-034's cause still unconfirmed | Campaign status pull | low | n/a — no change proposed | pending — ⚠️ **2026-08-27: still open. `Search-26` confirmed still PAUSED, 23 days dark. Awaiting Meet's cause confirmation.** |
| **GA-044** | 2026-08-17 | google-ads | TEST — SH-GA-23: reactivate Search-26 once cause confirmed, read revenue/day after 7 days | — | — | low | yes — reversible | pending Meet action on GA-043 first — unchanged 2026-08-27. |
| **GA-057** | 2026-08-24 | google-ads | TEST — SH-GA-25: three "unexplained" anomaly days (08-02, 08-16, 08-23) are all Sundays — possible structural weekly pattern | — | — | low | n/a — observation | ⚠️ **REFINED 2026-08-27 — see GA-063. New evidence (08-26, a Wednesday, shows the identical shape) suggests this is a pull-cycle-timing confound, not a real day-of-week effect. Not yet closed — awaiting the 2026-08-31 read.** |
| **GA-058** | 2026-08-27 | google-ads | **CUT — refreshed zero-conversion search-term negative batch, supersedes GA-050.** **HYPOTHESIS:** cutting genuinely zero-converting, non-brand, non-conquest, non-product-adjacent search-term spend at flat budget frees money toward traffic that already converts, without measurable conversion loss. **CHANGE:** add as EXACT negatives, campaign-level, across all 3 live campaigns: **881 terms** clearing a cost≥₹5 floor, ZERO conversions on the full 30-day aggregate (28 Jul–26 Aug), zero brand tokens, zero conquest tokens (word-boundary regex), `safe buds`/`ai safe buds`/`ear safe buds`/`safe buds price`/`safebuds` (₹99.30 combined, 0 conv) held out as product-line-adjacent. Top by spend: `bone conduction earphones` ₹449.98, `open ear earbuds` ₹178.01, `bone conduction headphones india` ₹176.72, `ng open ear headphones` ₹138.17, `headphones with mic` ₹130.87, `safe earphones` ₹117.55, `fitness band for women samsung` ₹113.28, `kz an01` ₹106.09, `noise pure pods 2` ₹105.89, `best earbuds` ₹101.36, plus 871 smaller terms. **LEARNING-PHASE COST: none — not a budget/bid change.** **READ PLAN:** re-pull 2026-08-31 (Monday); falsifier: 30d TRUE ROAS < 7.0× on the next read → something here was load-bearing, reverse, don't cut deeper (this cycle's own falsifier did NOT trigger — 30d clean TRUE ROAS read 6.88×, close to but still slightly under 7.0×, worth watching next cycle). | Saves **~₹13,202.21/30d floor estimate** (881 terms), essentially flat vs GA-050's ₹13,399.93/906 terms — 11th straight cycle with no confirmed execution. | Unfiltered 30d search-term pull (28 Jul–26 Aug), 2,597 rows → 2,437-term aggregate → 881 zero-conv at cost≥₹5 after brand/conquest word-boundary exclusion + product-line-adjacent judgment hold-out. | low | yes — negatives are removable | ✅ **APPROVED by Meet 2026-09-09 via /approvals — awaiting `/execute-approved`.** |
| **GA-059** | 2026-08-27 | google-ads | **FIX — re-escalate BROAD→PHRASE/EXACT + brand negatives on `SafeBuds-Search-28th July'26`, supersedes GA-052/GA-047/GA-042/GA-039/GA-029.** **HYPOTHESIS:** converting the campaign's BROAD keywords to PHRASE/EXACT and adding campaign-level brand negatives frees budget currently absorbed by broad-match waste toward the campaign's own starved conquest EXACT keywords, lifting campaign platform ROAS without added spend. **CHANGE:** keyword-level match-type edit + campaign-level brand negatives — no budget/bid-target change. Also bundles the same two QS≤4 keywords for ad-copy/landing-page review: `open earbuds` (QS4, ₹116.90, unchanged) and `earbuds with ear hooks` (QS1, ₹12.90, unchanged). **DATA BASIS:** keyword_view pull, this session, 28 Jul–26 Aug, 1,797 rows. BROAD = 55/84 keywords, ₹9,799.69 (71.0% of the campaign's ₹13,795.20 keyword spend), 61.52 conv; EXACT = 14/84, ₹1,907.93, 6.00 conv; PHRASE = 15/84, ₹2,087.58, 17.35 conv. Unchanged in structure since 08-04 diagnosis, now the account's 2nd-largest live campaign. **LEARNING-PHASE COST: none — not a budget/bid-target change.** **READ PLAN:** re-pull keyword_view 2026-08-31 (7 days after any edit lands). | keyword_view pull, this session, 28 Jul–26 Aug 2026, 1,797 rows. | low | yes | ✅ **APPROVED by Meet 2026-09-09 via /approvals — awaiting `/execute-approved`.** |
| **GA-060** | 2026-08-27 | google-ads | **FIX (informational, audit-flag only) — new unlogged live campaign discovered: `Pulse Search Campaign \| 24 Aug 26`.** **HYPOTHESIS:** none yet — too young to hypothesize. **CHANGE:** none — observation only, per the <7-day rule. **DATA BASIS:** campaign×day pull shows `status=ENABLED`, first spend 2026-08-24, 3 days of data: ₹342.75 spend, 12 clicks, 1,480 impressions, 0.81% CTR, 0 conversions. Includes at least one QS4 keyword (`fitness tracker`, ₹1.74). **LEARNING-PHASE COST: none — not a budget/bid change, campaign already exists and is spending regardless of this draft.** **READ PLAN:** re-pull 2026-08-31 and 2026-09-03 once it clears 7 days of data; only then draft a verdict (waste cut, structural fix, or leave alone). | Campaign×day pull, this session, 2026-06-13–2026-08-26. | low | n/a — observation only | pending |
| **GA-063** | 2026-08-27 | google-ads | **TEST — refines SH-GA-25/GA-057: the "Sunday anomaly" pattern is likely a pull-cycle-timing confound, not a real day-of-week effect.** **HYPOTHESIS:** the most-recently-pulled calendar day of ANY pull (Monday or Thursday) is provisionally under-attributed in GA4, regardless of weekday; the apparent Sunday pattern arises because every Monday-teardown's "yesterday" is necessarily a Sunday. **CHANGE:** none — observation only. **DATA BASIS:** this cycle's most-recent day, 2026-08-26 (a **Wednesday**), shows the identical shape as the three prior "Sunday" incidents — real spend (₹1,561.77), real sessions (160), ₹0 GA4 attributed revenue. **LEARNING-PHASE COST: none.** **READ PLAN:** re-pull 2026-08-31; if 08-26 has backfilled (as 08-23 did) AND a future Thursday cycle's own newest day shows the same artifact again, close SH-GA-25 as superseded by this simpler theory. | Campaign×day + GA4×day pull, this session. | low | n/a — observation only | pending |
| **GA-064** | 2026-08-27 | google-ads | **HOLD (informational) — budget stays flat; TRUE ROAS clean-trend watch escalated.** **HYPOTHESIS:** none — this is a standing-gate reaffirmation plus a trend flag. **CHANGE:** none. **DATA BASIS:** clean last-7d TRUE ROAS has fallen 3 straight cycles: 6.94× (13–19 Aug) → 6.56× (16–22 Aug) → 6.22× (19–25 Aug, this cycle) — now only 0.22× above the 6.0 floor, the closest confirmed-clean reading yet. Marginal-ROAS gate (P0-3/GA-019) stays CLOSED at −3.64× — this cycle's naive delta (12.9×) is not valid evidence (both spend and revenue fell, not a spend-increase test). **LEARNING-PHASE COST: none — not a budget change.** **READ PLAN:** re-pull 2026-08-31; if the clean 7d figure drops below 6.0×, escalate immediately to a stepped rollback per the stop-loss protocol. | Campaign×day + GA4×day pull, this session. | low | n/a — hold, monitor only | logged |
| **GA-065** | 2026-08-27 | google-ads | **CUT (refresh) — AI Max zero-conversion tail, supersedes GA-051/GA-049/GA-013's evidence.** **HYPOTHESIS:** AI Max continues to match zero-converting junk queries on `Search-26 May 25`; GA-013 (approved 2026-08-04) remains the unexecuted action. **CHANGE:** none new — refreshes the evidence behind GA-013, does not replace it. **DATA BASIS:** search_term_view pull, this session, segments.search_term_match_type = AI_MAX: 35 zero-conv terms, ₹720.22/30d — down from GA-051's ₹1,186.08/25 terms (rupees fell for the first time in 4 cycles, but term count rose 25→35). This is a subset of the GA-058 batch above, not additive to its total. Top terms: `wehear app` ₹130.18, `bone conduction headphones` ₹62.48, `ng open ear headphones` ₹56.74. **LEARNING-PHASE COST: none.** **READ PLAN:** re-pull 2026-08-31; if GA-013 executes and this tail does not collapse toward ₹0 within one attribution window, the AI Max settings need a second look, not just the negative list. | search_term_view pull, this session, 28 Jul–26 Aug 2026. | low | yes | pending — **GA-013 remains the action to execute; this is a refreshed evidence flag.** |

## 🚫 Rejected 2026-07-13 — removed from the queue, logged in `DECISION_LOG.md`

| id | Why rejected |
|---|---|
| **GA-001** | ~50% budget cut → trips a SECOND learning phase on campaigns already mid-learning. |
| **GA-002** | **DANGEROUS.** Built with a `conversions == 0` filter → contained the brand. |
| **GA-003** | Valid finding but **Windsor has no device-bid-modifier action.** |
| **GA-007** | **No-op.** Campaign is already `PAUSED`. |
| **GA-008** | **Premise false.** QS scandal was a Windsor summing artifact. Real QS is 7–8. |

## 📌 Live, awaiting action (2026-09-09)

| id | Action | Executable? |
|---|---|---|
| **GA-058** | Refreshed 881-term zero-conv negative batch, ₹13,202.21/30d. Supersedes GA-050. | ✅ **APPROVED 2026-09-09 via /approvals — awaiting `/execute-approved`.** |
| **GA-059** | Re-escalate BROAD-match fix on `SafeBuds-Search`, still 71.0% of keyword spend. Supersedes GA-052/GA-047/GA-042/GA-039/GA-029. | ✅ **APPROVED 2026-09-09 via /approvals — awaiting `/execute-approved`.** |
| **GA-028** | Fund/launch "wired open ear" keyword ad group. | ✅ **APPROVED 2026-09-09 via /approvals — awaiting `/execute-approved`.** |
| **GA-060** | New unlogged live campaign `Pulse Search Campaign \| 24 Aug 26` — audit flag only, too young (<7 days) for a verdict. | ⬜ **New, observation only.** |
| **GA-063** | TEST — refines SH-GA-25: Sunday pattern likely a pull-cycle-timing confound, not day-of-week. Read 2026-08-31. | ⬜ **New.** |
| **GA-064** | HOLD — budget flat, gate closed. TRUE ROAS clean-trend now only 0.22× above floor, watch closely. | ⬜ **Logged.** |
| **GA-065** | Refresh — AI Max zero-conv tail now ₹720.22/35 terms, reversed direction. GA-013 still the action to execute. | ⬜ **Refresh, not new distinct action.** |
| **GA-043** | Hold on reactivating `Search-26` blindly — cause still unconfirmed. | ⬜ **Still open, unchanged.** |
| **GA-044** | TEST — reactivate Search-26 once cause confirmed; read revenue/day after 7 days. | ⬜ **Still pending GA-043.** |
| **GA-013** | AI Max negatives + text-guideline tightening. | ✅ Approved 08-04 — ⚠️ **still not executed; see GA-065.** |
| **GA-026** | Monitor `SafeBuds-Search-28th July'26`; no change. | ✅ **CONFIRMED — 15.31× platform ROAS 2026-08-27. Continue monitoring, do not add spend.** |
| **GA-027** | Confirm GA-022 resolved as lag; flag 08-01/08-02 same shape. | ✅ **08-01 confirmed lag. 08-02 confirmed standing gap.** |
| **P2-1** | Conquest **Search** campaign (`wehear` 20–29×, `poly voyager` 55×). | ⬜ **Deferred — `Search-26` still paused.** |
| **GA-019** | Budget hold. | ✅ **Reaffirmed 2026-08-27 — gate stays CLOSED; naive delta again not valid evidence.** |
| **GA-057** | Sunday-anomaly refinement, not yet closed. | ⬜ **Awaiting 2026-08-31 read.** |

## Resolved (compact)

| id | Summary | Resolution |
|---|---|---|
| GA-009 + GA-010 | CUT 99 verified zero-conv negatives (SC-All Range/Search-26) | SUPERSEDED in scale, folded into GA-058 (2026-08-27) |
| GA-004 | SCALE — reweight Shopping SKU mix Pro→SafeBuds | RETRACTED 2026-07-14, premise false; do not resurrect (2026-08-20) |
| GA-005 | FIX — brand de-duplication | CLOSED PERMANENTLY 2026-07-23, stays closed (2026-08-27) |
| GA-006 | TEST — raise keyword max-CPC on 3 conquest terms | NOT EXECUTABLE, withdrawn; refiled as SH-GA-11 (2026-07-13) |
| GA-011 | ESCALATE — confirm execution of GA-009/010 + tablet + SafeBuds Ivory | REVIEWED, closed informational (2026-08-04) |
| GA-012 | CUT fresh zero-conv batch, 106 terms, ~₹4,040/30d | SUPERSEDED repeatedly, folded into GA-058 (2026-08-27) |
| GA-014 | FIX — rescope tablet exclusion to Search-26 only | REJECTED 2026-08-04; moot, Search-26 still paused (2026-08-27) |
| GA-015 | CUT expanded zero-conv batch, 99 terms, ₹17,784/30d | SUPERSEDED repeatedly, folded into GA-058 (2026-08-27) |
| GA-016 | ESCALATE (2nd) write-path execution failure | Resolved via GA-021 (2026-08-03) |
| GA-017 | FIX — flag zero-spend day 2026-07-18 | REJECTED, no spend done; day rolled out of window, no action needed (2026-08-20) |
| GA-018 | KILL — close SH-GA-10/GA-005 permanently | CLOSED, stays closed (2026-08-27) |
| GA-020 | CUT refreshed zero-conv batch, 1,174 terms, ₹18,253/30d | SUPERSEDED repeatedly, folded into GA-058 (2026-08-27) |
| GA-021 | FIX (process) — refine write-path execution test | Resolved as moot (2026-08-03) |
| GA-022 | FIX — flag reverse-shape anomaly 2026-07-26 | CONFIRMED processing lag, closed (2026-08-03) |
| GA-023 | CUT refreshed zero-conv batch, 1,155 terms, ₹17,630/30d | SUPERSEDED repeatedly, folded into GA-058 (2026-08-27) |
| GA-024 | FIX — expand tablet exclusion to SafeBuds-Search | REJECTED; tablet reconfirmed converting 3rd straight cycle, do not exclude (2026-08-27) |
| GA-025 | FIX — escalate AI Max leakage, 3rd time | REJECTED, non-reproducible, CLOSED as EXPLAINED via GA-038 (2026-08-13) |
| GA-029 | FIX — root-cause dead OWS+Conquest campaign + BROAD-match fix on successor | SUPERSEDED, folded into GA-059 (2026-08-27) |
| GA-030 | CUT refreshed zero-conv batch, 1,113 terms, ₹16,709/30d | SUPERSEDED repeatedly, folded into GA-058 (2026-08-27) |
| GA-031 | FIX — Comm 2.0 Shopping feed title 2-variant split | CONFIRMED EXECUTED, single title now live (2026-08-27, see GA-062) |
| GA-032 | FIX (data-integrity) — AI Max "total volume" doesn't reconcile | CLOSED as EXPLAINED (2026-08-13, see GA-038) |
| GA-033 | CUT refreshed zero-conv batch, 1,057 terms, ₹15,611/30d | SUPERSEDED repeatedly, folded into GA-058 (2026-08-27) |
| GA-034 | ESCALATE — SC-All Range + Search-26 paused (91.7% of spend) | RESOLVED, deliberate pause for product/inventory issue, no live action (2026-09-09) |
| GA-035 | CUT refreshed zero-conv batch, 1,016 terms, ₹14,594/30d | SUPERSEDED repeatedly, folded into GA-058 (2026-08-27) |
| GA-036 | FIX — escalate `open ear headphones` to active investigation | CLOSED as CONFIRMED recovered, stable through 2026-08-27 |
| GA-037 | CUT — exclude TABLET device on SafeBuds-Search | RETRACTED, tablet reconfirmed converting 3rd straight cycle; do not execute (2026-08-27) |
| GA-038 | FIX (data-integrity close-out) — GA-032 explained, not a bug | Closed 2026-08-13, stays closed |
| GA-039 | FIX — re-escalate BROAD→PHRASE/EXACT + brand negatives, SafeBuds-Search | SUPERSEDED, folded into GA-059 (2026-08-27) |
| GA-040 | CUT refreshed zero-conv batch, 906 terms, ₹12,442/30d | SUPERSEDED repeatedly, folded into GA-058 (2026-08-27) |
| GA-041 | FIX (informational) — SH-GA-21 confirmed, SC-All Range reactivation restored 82.3% revenue/day | Closed 2026-08-17 as CONFIRMED |
| GA-042 | FIX — re-escalate BROAD→PHRASE/EXACT fix, SafeBuds-Search | SUPERSEDED, folded into GA-059 (2026-08-27) |
| GA-045 | CUT refreshed zero-conv batch, 972 terms, ₹14,325/30d, supersedes GA-040 | SUPERSEDED, folded into GA-058 (2026-08-27) |
| GA-046 | FIX — retract queued GA-037 tablet exclusion | Stays retracted; tablet reconfirmed converting 3rd straight cycle (2026-08-27) |
| GA-047 | FIX — re-escalate BROAD→PHRASE/EXACT fix, supersedes GA-042 | SUPERSEDED, folded into GA-059 (2026-08-27) |
| GA-048 | TEST — SH-GA-24, 2-cycle tablet confirmation rule | CLOSED as GA-053, tablet NOT a stable zero (2026-08-24) |
| GA-049 | CUT (refresh) — AI Max zero-conv tail, ₹836/43 terms | SUPERSEDED, folded into GA-065 (2026-08-27) |
| GA-050 | CUT refreshed zero-conv batch, 906 terms, ₹13,400/30d, supersedes GA-045 | SUPERSEDED, folded into GA-058 (2026-08-27) |
| GA-051 | CUT (refresh) — AI Max zero-conv tail, ₹1,186/25 terms | SUPERSEDED, folded into GA-065 (2026-08-27) |
| GA-052 | FIX — re-escalate BROAD-match fix, 4th time, SafeBuds-Search | SUPERSEDED, folded into GA-059 (2026-08-27) |
| GA-053 | FIX (informational) — SH-GA-24 confirmed tablet NOT a stable zero | Closed 2026-08-24, reconfirmed 3rd straight cycle (2026-08-27) |
| GA-054 | FIX (informational) — SH-GA-20 confirmed `open ear headphones` recovered | Closed 2026-08-24, reconfirmed stable (2026-08-27) |
| GA-055 | FIX (flag) — Comm 2.0 Shopping feed single-title consolidation observed | CONFIRMED, GA-031 executed (2026-08-27, see GA-062) |
| GA-056 | ESCALATE — raw last-7d TRUE ROAS 5.30× appeared to breach 6.0 floor (GA4 processing gap) | CLOSED as CONFIRMED processing lag, no rollback warranted (2026-08-27, see GA-061) |
| GA-061 | FIX (informational close-out) — GA-056 confirmed processing-lag artifact | Closed — CONFIRMED (2026-08-27) |
| GA-062 | FIX (informational close-out) — GA-031/GA-055 confirmed executed, feed title consolidated | Closed — CONFIRMED (2026-08-27) |
</content>
