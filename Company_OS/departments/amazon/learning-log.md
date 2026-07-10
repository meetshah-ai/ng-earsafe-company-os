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
- *(none yet — department opened 2026-07-08)*

## REJECTED / DEAD ENDS (don't retry these)
- *(none yet)*

---

## CYCLE LOG (most recent first)

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
