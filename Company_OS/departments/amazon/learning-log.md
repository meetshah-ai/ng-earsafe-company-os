# AMAZON — Learning Log

> The department's institutional memory. Every cycle (and after every campaign/initiative) append an entry. This is what makes the agent auto-learning: it reprioritizes `tracker.md` and its skills based on confirmed/rejected hypotheses logged here. Never delete entries — supersede them.
>
> The weekly `/deep-loop` writes here. The daily `/standup` reads here (so learnings cross-pollinate across departments).

## HOW TO LOG
```
DATE | INITIATIVE | HYPOTHESIS | RESULT (confirmed / rejected / inconclusive) | LEARNING CARRIED FORWARD
```
Be specific and quantified. A learning that can't change a future decision isn't a learning.

---

## CONFIRMED PATTERNS (promote proven learnings here)
- **Pre-flight canary before spending the report budget** (confirmed 2026-08-13, first proposed 2026-08-10): a single cheap `GET /v2/profiles` call correctly predicts whether a full SP/SB/SD + search-term report sequence is worth attempting. Applied this cycle: capped the session at 4 diagnostic calls instead of a full blocked sequence across every ad product and profile. Promote to a standing rule for every future cycle (see AZ-012).

## REJECTED / DEAD ENDS (don't retry these)
- Re-testing host choice (EU vs NA) or the `Amazon-Advertising-API-Scope` header presence/absence as the cause of the `clientId does not match token` 401 — ruled out twice now (2026-08-10, 2026-08-13), identical signature both times, both hosts, with/without scope. The fix is upstream credential provisioning, not call shape. Do not spend a future cycle's budget re-testing this.

---

## CYCLE LOG (most recent first)

### 2026-08-13 — Blocked cycle #2: same Ads API authentication failure, now escalated
**Initiative:** Weekly ad-attributed-ROAS cycle, direct-API pull (no Windsor), both accounts, SP/SB/SD + SP search-term/targeting report, 30-day window (matured cutoff 2026-07-30).
**Hypothesis:** N/A this cycle — pre-flight canary (see below) stopped the pull before report requests were attempted.
**Result (REJECTED — infrastructure, not a performance finding, identical to 2026-08-10):** LWA token exchange (`POST /auth/o2/token`) succeeded (HTTP 200, valid `access_token`, 785 chars, `Atza|...` format). Pre-flight canary `GET /v2/profiles` on both profiles → HTTP 401 `UNAUTHORIZED`. Escalation canary `POST /reporting/reports` (real SP-campaign body, `groupBy` included per the documented shape) on both profiles → HTTP 401 `"Unauthorized exception while handling 3P Request: clientId does not match token"`. 0/4 resource calls succeeded. No `reportId` issued; SB/SD and search-term reports were not attempted — the canary already confirmed the identical 2026-08-10 failure signature, so the report-request budget was not spent chasing a result already known.
**Learning carried forward:**
1. The pre-flight-canary skill signal logged 2026-08-10 worked exactly as intended: this cycle cost 4 diagnostic calls instead of the ~12+ a full blocked SP+SB+SD+search-term sequence would have cost. Promoted to CONFIRMED PATTERNS above.
2. This is the **2nd consecutive live-tested cycle** with the exact same failure signature — narrows the cause from "unknown" to "Security-Profile/client-authorization mismatch": the LWA token mint keeps succeeding (so `AMZADS_REFRESH_TOKEN` + `AMZADS_CLIENT_SECRET` are valid together), but the resource server rejects `AMZADS_CLIENT_ID` against that same token's Security Profile. This is now specific enough to hand to IT as a concrete diagnostic, not just "auth is broken."
3. **P1-1 (search-term harvest) has now missed 3 consecutive cycles** for three nominally-different reasons (Windsor sync, API auth 2026-08-10, API auth again 2026-08-13) — crossing the line this department set for itself on 2026-08-10 ("if a third cycle also fails ... the blocker is itself the story"). Escalated explicitly in this cycle's report and in AZ-009, rather than logged as a routine repeat flag.
4. Re-checked pending-item age against today's date (2026-08-13) per the 2026-08-10 rule, even with the fresh pull blocked: AZ-001..004 are now 36 days pending (was 33 on 2026-08-10); AZ-003's stated read date is now 25 days overdue (was 22). Sized the cost of AZ-001's continued inaction using the campaign's own last-confirmed burn rate: ≈₹12,000–13,000 of plausible additional waste since the 2026-07-08 read, clearly flagged as an estimate, not a fresh number.
5. Explicitly held AZ-003's scale step rather than either executing it blind or silently dropping it — 36-day-old evidence does not satisfy the matured-window-evidence gate for a NEW budget increment, even though the evidence was strong when it was fresh.
**Next-sprint change triggered:** tracker P0-0 escalated (2nd consecutive confirmed cycle, diagnostic narrowed); AZ-009 (escalated infra ask, supersedes AZ-005's urgency level), AZ-010 (CUT reaffirm with updated cost estimate, supersedes AZ-006), AZ-011 (explicit SCALE-HOLD, supersedes AZ-007), AZ-012 (formalize the canary rule, supersedes AZ-008's blocked status note) added. `queue-inbox.md` created this cycle (did not exist before, despite AZ-001..008 already being referenced in tracker/learning-log) — reconstructed rows 001–008 from this file's and tracker's own text so the ID sequence has one home going forward.
**Skill signal:** the pre-flight canary is no longer a proposal — it ran and worked this cycle. Next refinement: if a 3rd consecutive live cycle also gets `clientId does not match token`, stop trying to diagnose further from this side entirely and treat it as a pure IT ticket with no ads-agent action possible until resolved (don't re-derive the same diagnostic a 3rd time).

### 2026-08-10 — Blocked cycle: Ads API authentication failure
**Initiative:** Weekly ad-attributed-ROAS cycle, first fully-direct-API pull (no Windsor), both accounts, SP/SB/SD + SP search-term/targeting report, 30-day window (matured cutoff 2026-07-27).
**Hypothesis:** N/A this cycle — could not reach data collection.
**Result (REJECTED — infrastructure, not a performance finding):** LWA token exchange (`POST /auth/o2/token`) succeeded 3/3 times (HTTP 200, valid `access_token`). Every subsequent Ads API resource call failed: `GET /v2/profiles` → 401 generic `UNAUTHORIZED` (tested with/without ClientId header); `POST /reporting/reports` → 401 `"clientId does not match token"` (tested on EU host, NA host, with/without `Amazon-Advertising-API-Scope`, and in a same-command mint-and-use test to rule out token staleness). 0 of 6 diagnostic calls succeeded. No campaign, budget, spend, sales, or search-term data exists for this session. No `reportId` was ever issued, so there was nothing to poll or download.
**Learning carried forward:**
1. A 200 from the LWA token endpoint does **not** guarantee the token is valid for the Ads API — the resource server does its own client/token pairing check, and that check can fail independent of host, region, or scope header. Future cycles: treat token-endpoint success as necessary but not sufficient; the first real signal of a working credential is a 200 from an actual Ads API resource call, not the token mint.
2. This failure is identical across both `advertising-api-eu.amazon.com` and `advertising-api.amazon.com` — ruling out the EU-for-India host guidance in this agent's own brief as the cause. Do not waste a future cycle re-testing host choice; the fix is upstream (credential provisioning), not the call shape.
3. Two consecutive cycles have now failed to reach the SP search-term/targeting report for two entirely different infrastructure reasons (Windsor sync in cycle 1, API auth in cycle 2, this entry) — P1-1 (harvest/negative-prune) has never once actually run. Flag this pattern if a third cycle also fails to reach it — at that point the blocker is itself the story, worth escalating harder than a routine flag.
4. **Every AZ-### drafted 2026-07-08 (AZ-001..004) is still `PENDING USER` 5 weeks later** — this is the second-largest problem this cycle surfaced, independent of the API break: a stalled decision loop lets a matured, already-proven kill (AZ-001) keep costing money by inaction, and lets a matured, already-proven scale winner (AZ-003) go unread 22 days past its own stated read date. Neither of those facts needed today's API access to notice — they were sitting in tracker.md the whole time. Future cycles: always re-check pending-item age against today's date before assuming "nothing to report," even when the fresh pull is blocked.
**Next-sprint change triggered:** tracker P0-0 (NEW) added as the literal top blocker; P0-4 marked stalled explicitly; P1-1 blocker-cause updated. AZ-005 (fix credential), AZ-006 (re-flag AZ-001 urgency), AZ-007 (re-flag AZ-003 overdue read), AZ-008 (net-new search-term hypothesis, queued for whenever access returns) added to the approvals queue.
**Skill signal:** add a pre-flight check to this agent's own process — before spending the tool-call budget on report requests, do one cheap `GET /v2/profiles` call first as a canary; if that 401s, stop immediately rather than discovering the same failure 6 times across every ad product and profile combination.

### 2026-07-08 — First ads audit (same day as founding)
**Initiative:** Full campaign-level audit, 30d window (8 Jun–7 Jul), both accounts, once Windsor `amazon_ads` sync landed (~2h after connect).
**Hypothesis:** Being tested via AZ-001..004 (queued).
**Result (baseline facts):**
- 30d SP spend ₹35,207 → ₹1,09,545 attributed sales (4.5× on matured basis). SB spend ₹0 (14 campaigns, zero impressions). SD ~nil (table still syncing; settlement cross-check ✓). NG AMS account (1498424255518113): 100% dark, all campaigns.
- **Blended ROAS ≈ 21** vs the 15 bar → headroom exists; the constraint is campaign quality, not the bar.
- Account concentration: "SP-Comm 9th April'26 | Generic" = 53% of spend, 77% of attributed sales — the only campaign that passed a spend test (wk3→wk4 +144% spend, ROAS in range, matures ~19 Jul).
- Clear bleed: "SafeBuds 3rd June Manual" — wks 2–3 fully matured at ₹0 sales on ₹4.6K spend (583 clicks → 5 conv). Clear miss: "SafeBuds 5th May" ran at 5.19× in wk1 then was defunded — the efficient SafeBuds campaign was cut while the bleeder kept spending, precisely while SafeBuds demand surged (+77% SC WoW).
**Learning carried forward:** (1) Read kill/scale ONLY on matured windows — wk4's 3.88 looks weak but isn't readable until ~19 Jul. (2) Settlement ServiceFee deductions cross-check Windsor ads spend within ~15% — good sanity rail. (3) The paradox to never repeat: hottest SKU ≠ funded campaign; check the mapping every cycle.
**Next-sprint change triggered:** tracker P0-1..3 closed; P0-4 (drive AZ-001..004 to decision) + P1-1 (search-term harvest, blocked on targeting-table sync) are the live edge.
**Skill signal:** —

### 2026-07-08 — Department founding baseline
**Initiative:** Amazon department scaffolded; Windsor `amazon_ads` connected (accts NG Corporation `1452172411967063`, NG AMS `1498424255518113`).
**Hypothesis (OPEN):** Amazon can scale from ~₹7.5L/mo run-rate to ₹35L/mo while holding blended ROAS ≥ 15 — because current ad intensity is tiny (settlement-implied ~₹9.5K/wk) against organically accelerating demand (SC +77% WoW, wk 1–7 Jul).
**Result:** too-early — first full ads pull pending (connector backfill running; all `amazon_ads` queries timed out on day 1 — expected for a fresh Windsor connector, not a break).
**Learning carried forward:**
1. Amazon Ads spend was invisible to the whole company until 2026-07-08 — the only prior trace was ~₹2,380 `ServiceFee` deductions in the SC settlement report every 1–3 days (probable ads threshold billing, unconfirmed). Settlement deductions ≠ accrual dates; never use them for week-over-week reads once real ads data exists.
2. Reporting lags are structural: SC ~1 day, VC ~3+ days, ads attribution 14-day. Kill/scale calls only on matured windows.
3. SC and VC revenue are different accounting bases — always label combined figures.
**Next-sprint change triggered:** tracker P0-1/2/3 (audit, baseline, classification) queued for the moment the sync lands.
**Skill signal:** —
