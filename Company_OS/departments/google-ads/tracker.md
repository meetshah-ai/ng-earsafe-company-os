# Google Ads — Live Task Tracker

> Read at the start of every session, after `constitution.md`. Archive completed sprints to `learning-log.md` every 30 days.
>
> **Last updated: 2026-08-17 (Monday teardown — 8th direct-API cycle). 🚨 TODAY IS THE 17 AUG BIDDING-CHANGE DEADLINE. P0-1 (conversion fix) is STILL NOT STARTED — the exposure window is now closed, not just counting down.** The overclaim did not improve going into today — it got worse: 77.2% (30d) / **79.3% (last-7d, a genuinely stable, non-transition window)** vs the 54.2% anchor, both above the 35–65% band. **The one confirmed win: SH-GA-21 matured its first clean 7-day read exactly on schedule — `SC - All Range`'s reactivation (a ₹0-ratchet status toggle) restored account GA4 revenue/day to 82.3% of the ₹14,300.85 pre-pause baseline (₹11,772.36). GA-034 stays half-resolved: the reactivation's OUTCOME is now confirmed good, but its CAUSE (and `Search-26`'s continued pause) is still unconfirmed.** **The zero-conversion search-term waste batch refreshed an 8th time: ₹12,441.81/906 terms (GA-040, supersedes GA-035) — down further from last cycle but still nowhere near the ₹0 that would indicate execution.** **AI Max's zero-conv tail ROSE this cycle (₹576.80→₹773.12/46 terms), reversing 3 straight cycles of decline — GA-013 (approved 08-04) still not executed.** **`SafeBuds-Search-28th July'26`'s BROAD-match problem (55/84 keywords) was freshly re-checked at keyword level for the first time since its 08-04 diagnosis — unchanged in structure, now materially larger in scale (campaign is 18.0% of account spend). Re-escalated as GA-042.** **`open ear headphones` broke its 6-cycle zero-conversion streak (1.5 conv this cycle) — one data point, GA-036 investigation held open one more cycle rather than closed.** **Comm 2.0's feed-title split (GA-031) remains unresolved, 8th cycle running, gap now the widest yet recorded (28% worse).**
>
> **2026-08-13 (Thursday follow-up — 7th direct-API cycle).** 🚨 **GA-034 is HALF-RESOLVED: `SC - All Range` reactivated (`status = ENABLED`) on 2026-08-10, spending ₹1,150–1,340/day again, close to its pre-pause rate. `Search-26 May 25` remains `PAUSED`, zero spend since 08-04. Neither the original pause nor this partial reactivation had a confirmed cause from Meet — still the top open item as of 2026-08-17.** **P0-1 (conversion fix) was STILL not started — 4 days to 17 Aug at the time, now 0: the deadline has arrived unfixed.** **The zero-conversion search-term waste batch had refreshed to ₹14,593.55/1,016 terms (GA-035, supersedes GA-033) — now further refreshed to GA-040.** **AI Max's zero-conv tail had fallen a 3rd straight cycle (₹692.22→₹576.80) — reversed this cycle, see 2026-08-17 note above.** **Shopping SKU mix had flipped a 6th time; now flipped an 8th time as of 2026-08-17 — reinforcing that this metric cannot support any structural decision.** **Comm 2.0's feed-title split (GA-031) remained unresolved, 6th cycle running at the time, now 8th.**
>
> **Cycles prior to 2026-08-13 (2026-08-10, 2026-08-06 and earlier) — unchanged, retained in full in git history (see `learning-log.md` for the institutional-truth summaries that carry forward).**
>
> **2026-08-04 /approvals update:** GA-013 (AI Max negatives) and GA-023 (superseded batch) **APPROVED, awaiting `/execute-approved`** — ⚠️ **2026-08-17: GA-013 STILL not executed, and its underlying zero-conv tail rose this cycle instead of falling — the batch itself is now GA-040.** GA-014, GA-017/GA-027, and GA-024/GA-025 **REJECTED by Meet** — do not re-draft on the same evidence (GA-024's tablet finding has since been refreshed with genuinely new evidence as GA-037). GA-011 reviewed and closed (informational). Full detail in `queue-inbox.md`.
> **⚠️ Ad-hoc 2026-08-04 (Slack request) — P0-4 diagnosis complete AND its live successor caught repeating the mistake, see GA-029/GA-039, now GA-042.** `Search | SafeBuds | OWS + Conquest` (dead, PAUSED since ~22 Jun) root cause: broad-match leakage + a single-SKU landing page that never converted. **The live successor `SafeBuds-Search-28th July'26` is STILL repeating the identical structural mistake as of 2026-08-17** (55/84 keywords still BROAD, freshly re-verified at keyword level, now carrying 70.8% of the campaign's keyword spend) — and it is now 18.0% of account spend, its largest share yet. Re-escalated as **GA-042**.

## PRIORITY SYSTEM
- **P0** — this week. Blocks everything else, or is time-boxed by an external deadline.
- **P1** — this sprint. The real levers.
- **P2** — next sprint / blocked.
- **P3** — backlog.

---

## 🚨 CAMPAIGN STATUS — UPDATED 2026-08-17

**`SC - All Range` remains `status = ENABLED`** since its 2026-08-10 reactivation — daily spend ₹1,336.22 / ₹1,148.72 / ₹1,143.26 / ₹1,144.99 / ₹1,252.60 / ₹1,536.94 / ₹83.22 across 08-10→08-16 (last day likely a lag artifact, not a real collapse), averaging ₹1,092.28/day, close to its ~₹1,591.35/day pre-pause blended rate. **`Search-26 May 25` remains `status = PAUSED`** — confirmed zero spend every day since 2026-08-04, now 13+ days dark. `SafeBuds-Search-28th July'26` (`status = ENABLED`) continued spending throughout and is now the account's 2nd-largest live campaign by 30d spend (18.0%, up from prior cycles).

**Nobody has confirmed the cause of either the original pause or the reactivation — still the top open item (GA-034).** What IS newly confirmed: the reactivation's *effect* — GA4 revenue/day recovered to 82.3% of the pre-pause baseline over its first mature 7-day window (SH-GA-21, CONFIRMED, GA-041). Confirming cause and confirming outcome are two separate questions; only the second is answered.

---

## ⏳ THE COUNTDOWN — 17 AUG 2026 HAS ARRIVED

Google's Smart Bidding change (budget-limited tROAS campaigns get pulled DOWN toward target instead of overperforming) takes effect **today**. `SC - All Range` (tROAS 8.0, campaign-level) is reactivated and live; `Search-26 May 25` (tROAS 9.0, ad-group-level) remains paused; `SafeBuds-Search-28th July'26`'s own bidding strategy/target remains unaudited. **Both known targets were set against the inflated conversion value, and P0-1 was never fixed before today.** The exposure is no longer a countdown — it is live, as of today, on every enabled campaign with a tROAS target calibrated against a number now confirmed to be 77–79% inflated.

| Campaign | tROAS | Set at | Status (2026-08-17) |
|---|---|---|---|
| `SC - All Range` (`23278488657`) | **8.0** | campaign level | **ENABLED — reactivated 2026-08-10, now exposed to today's bidding change on an uncorrected target** |
| `Search-26 May 25` (`22601036342`) | **9.0** | ad-group level (`178785500303`) | **PAUSED** — not exposed while dark |
| `SafeBuds-Search-28th July'26` (`24068804553`) | unconfirmed — not yet audited | — | **ENABLED — 2nd-largest live spender, 18.0% of account, exposure unquantified** |

---

## ✅ SHIPPED — ⚠️ UNCONFIRMED, see cycle notes above

| What | Result (as claimed 2026-07-14) | Date | Latest verification (2026-08-17) |
|---|---|---|---|
| **GA-009 + GA-010 — 99 zero-conversion negative keywords (EXACT), campaign-level.** | **₹3,659/30d of waste removed** (claimed). | 2026-07-14 | ⚠️ **STILL NOT CONFIRMED** — superseded in scale by GA-040 regardless. |
| **P1-1 — Tablet excluded (−100% device bid), all campaigns.** | **₹363/30d recovered** (claimed). | 2026-07-14 | ⚠️ **STILL NOT CONFIRMED as a blanket cut** — device-level cuts are per-campaign (GA-037). |
| **P1-2 — SafeBuds Ivory excluded** (`…51380726530327`) from `SC - All Range`. | **₹956/30d reallocated** (claimed). | 2026-07-14 | ⚠️ **UNCONFIRMED.** SafeBuds Ivory shows no row for a 6th+ straight cycle now (including 2026-08-17) — still too immaterial to chase hard. |

### 💰 Total claimed-shipped: ₹4,978/30d — **status remains unconfirmed. GA-040 (₹12,441.81/30d) is the current, freshly-verified live waste figure regardless of what did or didn't execute from the 07-14 batch.**

---

## CURRENT SPRINT

| # | Task | Target | Why it matters | Status |
|---|---|---|---|---|
| **P0-0** | Confirm cause of the `SC - All Range` / `Search-26` pause AND the partial reactivation. | Cause confirmed within 24–48h | **Still the single highest-value open item** — outcome of the reactivation is now confirmed good (SH-GA-21), but the cause of either event is still unknown. | 🚨 **STILL OPEN.** |
| **P0-1** | **Fix the duplicate purchase conversion action.** | One purchase action, correct coverage, in the bidding goal | **The 17 Aug deadline has arrived with this unfixed. Overclaim reading is now WORSE (77–79%) than when this was first flagged (54.2%).** | 🔴 **NOT STARTED — deadline missed, exposure now live, not counting down.** |
| **P0-2** | **Re-baseline tROAS targets** against the corrected value, in ≤15%/week steps. | Each active campaign gets its own corrected target | Removes the (now-live, not future) bidding-change exposure. | ⬜ Blocked by P0-1 |
| **P0-3** | **CLOSED 2026-07-23, reaffirmed every cycle since including 2026-08-17.** Marginal ROAS stands at −3.64×. | No re-read scheduled — wait for a natural spend variation. | Gate stays closed; no budget move. | 🔴 **REJECTED — no budget headroom. Gate stays closed.** |
| **P0-4** | **Diagnose `Search \| SafeBuds \| OWS + Conquest`.** | Root cause named; fix or leave dark | **DIAGNOSED 2026-08-04.** Its live successor's BROAD-match mistake reconfirmed at keyword level 2026-08-17 — see GA-042. | 🟢 **DIAGNOSED — successor fix still pending, now with fresh keyword-level evidence.** |
| **P0-5** | **Audit the `SafeBuds-Search-28th July'26` campaign.** | Confirm bidding strategy/target, landing page, BROAD-match fix | Continues to clear the 6.0 floor decisively (18.35× platform, 2026-08-17) — now 18.0% of account spend. BROAD→PHRASE/EXACT fix (SH-GA-18) still not executed, freshly reconfirmed. | 🟡 **Floor-clearing CONFIRMED repeatedly; BROAD-match fix still pending — GA-042.** |
| **P0-6** | Do not reactivate the remaining paused campaign (`Search-26`) blindly. | Confirm cause (P0-0) first | `SC - All Range` already came back with no confirmed cause and its outcome happened to be good (SH-GA-21) — that's not proof reactivating `Search-26` blind would also be safe. | 🚨 **STILL OPEN — see GA-043.** |
| **P1-1** | **Rein in AI Max** — already ON on `Search-26`, matching junk. | AI_MAX terms converting, or excluded | Zero-conv tail ROSE this cycle (₹576.80→₹773.12), reversing 3 straight cycles of decline. | 🟡 GA-013 approved 2026-08-04, still awaiting `/execute-approved` as of 2026-08-17 — now more urgent, not less. |
| **P1-1b** | **Confirm execution of GA-009/010/tablet/SafeBuds-Ivory.** | Spend check confirms ₹0 on all previously-approved cuts, or root-cause the block | Not run this cycle — still worth a dedicated check. | 🔴 **Still not started.** |
| **P1-1c** | **Rescope tablet exclusion — THREE campaigns need per-campaign scoping, not blanket.** | `Search-26` tablet (₹58.55, 0 conv, paused anyway) + `SafeBuds-Search` tablet (₹271.89, 0 conv, GA-037, up from ₹257.61) excluded; `SC - All Range` tablet (₹183.23, 1 conv, 15.82× platform) left alone | Consistent across 7+ pulls now. | 🟡 **GA-037 still pending, refreshed evidence this cycle.** |
| **P1-2** | **Shopping feed titles.** `SC - All Range` is the largest campaign by spend and is feed-targeted. | Titles rewritten, A/B'd via Merchant Center feed rules | **Probably the largest un-pulled lever in the account.** Comm 2.0's title split (GA-031) is STILL unresolved, 8th cycle running 2026-08-17, gap now widest yet (28% worse). | 🔴 Mostly not started; GA-031 is the ready-to-execute fix, still not run |
| **P1-3** | **Enhanced Conversions.** | Enabled + verified | Attacks the platform-vs-GA4 gap from the other side, alongside P0-1. | 🔴 Not started |
| **P1-4** | **Execute GA-040 (refreshed 906-term zero-conv negative batch, ₹12,441.81/30d) once the write path can be confirmed to actually execute anything.** Supersedes GA-035, GA-033, GA-030, GA-023, GA-020, GA-015, GA-012. | 906 terms negatived, spend falls toward ~₹0 within one attribution window on covered spend | Eight straight cycles of prior batches show no confirmed execution. | 🔴 **Blocked by unresolved write-path status — read plan is GA-040's own 2026-08-20 check.** |
| **P1-5** | **Shopping SKU mix has flipped an 8th time; stop treating any single cycle's "worst/best SKU" as an action trigger.** | Keep SH-GA-16 as a scheduled monitor but do not treat any single cycle's ranking as new information requiring action | **2026-08-17: the ex-"Pro" SKU (now titled "EarSafe Lite") is smallest share (1.7%) AND best-returning (35.94×) again.** The instability, not the direction, remains the finding. | 🟡 **Monitor-only — see SH-GA-16, unchanged this cycle** |
| **P1-6** | **GA4 lag-day pattern — mostly resolved/explained.** | — | 07-18 and 08-02 remain present and unexplained (6+ cycles old); **07-18 is now confirmed to actively distort the 30d TRUE ROAS figure (real GA4 revenue, zero matched Ads spend that day)** — worth a platform-side check. | 🟢 **Mostly resolved; 07-18 now flagged as an active distortion, not just an oddity.** |
| **P2-1** | **Build a conquest Search campaign** (SH-GA-11). | Dedicated Search campaign, conquest keywords | Best return in the account, still starved. Deferred past 17 Aug (which has now arrived) and past GA-034's full resolution. | ⬜ Deferred |
| **P3-1** | **Geo/holdout incrementality test.** | Causal read on true incrementality | Would settle the overclaim question for good. | ⬜ Backlog |

---

## ❌ RETRACTED — do not resurrect

| Was | Why it's dead |
|---|---|
| **"The Quality Score scandal"** *(old P0-5/P0-6, GA-008)* | **FALSE.** Real daily QS reconfirmed an 8th time 2026-08-17 (direct API, 1,782 keyword rows): max QS seen = 10, only one keyword at QS≤4 carried any spend (₹75.82, isolated). **There is no QS problem.** |
| **"Shopping SKU mix is upside-down, Pro is the problem"** *(old P1-7, GA-004)* | **FALSE, now eight times over, in BOTH directions.** The ex-Pro SKU has cycled through every share/ROAS position across eight cycles without any executed mix-shift action. **Do not resurrect any Pro- or Comm-2.0-focused framing.** |
| **"Raise conquest keyword bids"** *(GA-006)* | **IMPOSSIBLE.** Shopping campaign, no keywords exist. Superseded by P2-1. |
| **"Pause the dormant SafeBuds campaign"** *(GA-007)* | **NO-OP.** Already `PAUSED`. |
| **"Roll the budget back to ₹1,800/day"** *(GA-001)* | **REJECTED.** Superseded by P0-3 (closed 2026-07-23, reaffirmed through 2026-08-17). |
| **"Tablet is a blanket free kill across every campaign"** *(old finding, P1-1)* | **NARROWED, per-campaign** — `SC - All Range` converts on tablet, `Search-26`/`SafeBuds-Search` do not. |
| **"Brand de-duplication (GA-005) has a stable, actionable ROAS gap"** *(GA-005, SH-GA-10)* | **CLOSED PERMANENTLY 2026-07-23 — GA-018. Stays closed through 2026-08-17.** |
| **"Google Ads has budget headroom above ~₹1,800/day"** *(GA-001, SH-GA-7)* | **CLOSED 2026-07-23 — GA-019. Reaffirmed through 2026-08-17** — no genuine natural spend variation. |
| **"`Search \| SafeBuds \| OWS + Conquest` just needs more/better keywords"** *(P0-4, resolved 2026-08-04)* | **FALSE.** Every search term in the campaign's history shows zero conversions. **Also wrong for the live successor**, still true 2026-08-17 at keyword-level granularity. |
| **"GA-025's ₹6,534.18 AI Max total-volume figure is a real, growing leak"** *(GA-025, 2026-08-06)* | **CLOSED 2026-08-13 as EXPLAINED, not retracted as false.** Stays closed. |
| **"`open ear headphones`'s zero-conversion reading proves demand collapsed"** | **NOT SUPPORTED as of 2026-08-17** — streak broke this cycle (1.5 conv). Investigation (GA-036) held open one more cycle, not closed either way. |

**Also: do not "build a SafeBuds Shopping campaign."** One already exists (`Shopping | SafeBuds | 7th May'26`, PAUSED, tROAS 10.0), as does `SC - All Range #2` (PAUSED, tROAS 8.0). `SafeBuds-Search-28th July'26` remains the only genuinely new, live campaign of its kind.

---

## PERFORMANCE TARGETS

| Metric | Current (last live pull, 18 Jul–16 Aug, direct API) | Floor | 30-day target | 90-day |
|---|---|---|---|---|
| **TRUE ROAS** | **7.73×** (30d, note: inflated by the 07-18 anomaly — see below); **7.31×** last-7d (clean, mature, non-transition window); **5.41×** prior-7d ⚠️PARTIAL (contaminated by the pause transition mid-window, not a real floor breach — overclaim 237.6%, wildly out-of-band, the standard tell) | **6.0×** | ≥ 9.0× | 9–11× band held while spend compounds |
| Marginal ROAS (11–12 Jul spike, fully matured) | **−3.64×** (unchanged since 2026-07-23, reaffirmed through 2026-08-17 — no new natural variation; this cycle's raw 9.28× last7-vs-prior7 delta is a status-transition artifact, not valid evidence) — **gate CLOSED, rejected** | **6.0×** | N/A until re-opened by a genuine natural spend variation | ≥ 6.0 sustained |
| Platform overclaim | **77.2%** (30d, above band); **79.3%** last-7d (⚠️ the highest STABLE-window reading yet — not a transition artifact, a real elevated number, landing on the exact 17 Aug deadline day) / **237.6%** prior-7d (⚠️ wildly out-of-band — pause transition contamination, not real) | 35–65% band | **< 20%** (after P0-1) | < 15% |
| Spend | ₹42,525.80/30d (~₹1,417/day blended; last 7 days ~₹1,609.77/day post-reactivation, still below the ₹1,800/day historical operating point because `Search-26` remains dark) | — | Hold at current level — no headroom (P0-3/GA-019 closed) | Compound via +20%/wk **only** when marginal ≥ 6.0 |
| Zero-conversion waste | **₹12,441.81/30d** (GA-040, cost≥₹5 floor, `safe buds` newly held out on judgment grounds) | — | Keep at ~₹0 via weekly prune, once execution can be confirmed | — |
| Lost IS (Budget) — `SC - All Range` | **73.1% Budget-lost** (10.2% Rank-lost) | — | Next budget dollar targets Shopping first, once gate clears — still CLOSED | < 40% |
| Lost IS (Budget) — `Search-26` | 77.4% Budget-lost, but campaign is PAUSED — informational only | — | N/A while paused | — |
| Lost IS — `SafeBuds-Search` | 59.9% Budget-lost / 31.2% Rank-lost — more Budget-lost than last cycle's split | — | No budget move until gate clears | — |

---

## DATA PULL SCHEDULE — 7 pulls, **direct Google Ads + GA4 APIs (Windsor fully retired), NO metric filters, ever.** Aggregate before selecting, never trust a single row.

| # | Connector | What | Notes |
|---|---|---|---|
| 1 | Google Ads API (direct, via `curl`) | campaign × day | Pull a WIDE date range (this cycle: 65 days) once, slice in code into anchor/30d/7d/prior-7d windows — avoids a separate anchor query. Use full-calendar-day summation when computing TRUE ROAS, not just dates with an Ads row. |
| 2 | GA4 Data API (direct, via `requests`) | `google/cpc` × day | `sessionMedium = cpc` (EXACT) is **the one legal dimension filter**. Assert `len(rows)==rowCount` every pull. |
| 3 | Google Ads API | keyword × Quality Score | **MUST NOT include `date`** in GAQL. **Any QS > 10 is a bug — re-pull.** Reuse these rows for any same-cycle keyword-level ad-hoc checks (e.g. match-type breakdowns) instead of re-querying. |
| 4 | Google Ads API | search terms | Aggregate in code before selecting zero-conversion terms. A word-boundary brand/conquest regex is necessary but NOT sufficient — product-line-adjacent terms (e.g. `safe buds`) need a manual judgment hold-out too. Search-term-view covers ~69–72% of account spend (structural Shopping reporting gap). |
| 5 | Google Ads API | Shopping SKU | Assert sums to campaign spend. 4 rows this cycle (SafeBuds Ivory absent 6th+ straight cycle; Comm 2.0 still split across TWO product_title strings — GA-031, 8th cycle unresolved). |
| 6 | Google Ads API | device | Assert sums to campaign spend. Cuts must be scoped **per campaign** — see GA-014/GA-024/GA-037. |
| 7 | Google Ads API | impression share | Cannot be queried alongside `quality_score` (Google API restriction) |

> 🚨 **The `requests` Python HTTP client gets a `503 "DNS resolution failure"` from `googleads.googleapis.com:searchStream` in some environments — use `curl` for all Ads calls, `requests` is fine for GA4.**
> 🚨 **Never put `conversions` or `impressions` in a `filters` argument. Pull everything, filter in code, and assert every breakdown sums to its parent total.**
> 🚨 **Never trust a "SHIPPED" status without a spend check** — and **check `campaign.status` (paused/enabled) before crediting or blaming any batch for a spend change, in either direction.**
> 🚨 **A "total X doesn't reconcile" flag should be investigated by asking what dimension each reading was scoped to, before assuming a connector fault.**
> 🚨 **A missing-Ads-row day is not a zero on the GA4 side — verify this in code (full-calendar-day summation), not just by rule. And check whether the missing day is a KNOWN, already-explained gap (genuine ₹0) vs. an unexplained one that might be actively distorting a ratio (like 07-18, which pairs real GA4 revenue with zero matched spend).**
> 🚨 **NEW 2026-08-17: an out-of-band overclaim reading is "transition contamination" only if the window in question actually contains a mid-window campaign-status change. Check this explicitly — don't apply the excuse to every unusual reading by default.**

---

## DEPENDENCIES / BLOCKERS

- **P0-0 (confirm pause/reactivation cause) still gates the cleanest read on almost everything** — though SH-GA-21's confirmed-good outcome means the department can stop worrying about whether reactivating was *harmful*; it still doesn't know *why* it happened.
- **P0-2 is blocked by P0-1.** **The 17 Aug deadline has now arrived with P0-1 unfixed — this is no longer a countdown, it's a live exposure.**
- **P0-3 is CLOSED as of 2026-07-23, reaffirmed through 2026-08-17** — marginal ROAS −3.64×, no new natural spend variation.
- **P0-4 diagnosed — P0-5/SH-GA-18 (successor's BROAD-match fix) is the open item, reconfirmed at keyword level 2026-08-17, now materially more urgent (18.0% of account spend).**
- **GA-040 (refreshed negative batch, ₹12,441.81/30d) read plan is 2026-08-20.**
- **GA-032 CLOSED 2026-08-13 — no longer a blocker or open question.**
- **SH-GA-21 CLOSED 2026-08-17 as CONFIRMED — no longer a blocker or open question. GA-034's cause-confirmation question remains open separately.**
- **P2-1 (conquest campaign) deferred past 17 Aug (arrived) and past GA-034's full resolution.**
- **GA-043/SH-GA-23 — new: Search-26 reactivation is proposed as a TEST, contingent on Meet confirming the pause cause first. Not gated by the ratchet (status toggle), gated by the unconfirmed-cause caution instead.**
