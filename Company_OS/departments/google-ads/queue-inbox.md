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
> `| id | date | dept | action | rationale | data-basis | risk | reversible? | status |
|---|---|---|---|---|---|---|---|---|
| **GA-009 + GA-010** | 2026-07-13 | google-ads | **CUT — 99 verified zero-conversion negative keywords (EXACT), campaign-level.** 69 on `SC - All Range` (23278488657), 30 on `Search-26 May 25` (22601036342). Full list: `execute/GA-009_GA-010_negatives.json`. | Saves **₹3,659/30d** with zero conversion loss. Every term has ZERO conversions on the **full 30-day aggregate** (not a filtered slice). **Excludes all 35 brand terms, all 7 conquest terms (wehear/shokz/poly), and all 23 converting terms.** Independently re-verified 2026-07-13. | Unfiltered 30d search-term pull (13 Jun–12 Jul), aggregated per literal term across campaigns. 196 rows → 98 safe terms → 99 campaign-level pushes. | low | yes — negatives are removable | ✅ **APPROVED by Meet 2026-07-13 — BLOCKED: Windsor write actions disabled** |
| ~~GA-004~~ | 2026-07-13 | google-ads | SCALE — reweight Shopping SKU mix away from Pro toward SafeBuds | — | — | — | — | ❌ **RETRACTED 2026-07-14 — PREMISE FALSE.** The rationale rested on a `spend > 200` filter that dropped rows **and an entire SKU**. Truth: **FOUR** SKUs; Pro is **47.0%** not 50.5%; **SafeBuds + Comm 2.0 already hold 53.0%** of Shopping spend. The mix is **not** upside-down. The real gap (Pro 11.31× vs core 15.01× = **1.33×**) does not justify an ad-group restructure and a re-learn. **Superseded by P1-2: exclude SafeBuds — Ivory** (9.05×, CPA ₹332, the actual worst SKU) — one click, no learning-phase cost. |
| GA-005 | 2026-07-13 | google-ads | FIX — brand de-duplication: exclude `ng earsafe` family from `SC - All Range` so `Search-26` owns brand. | Search-26 returns 16.98× on brand vs Shopping's 12.60% — self-competition on the same auction. | Brand-family split: Search-26 ₹1,412/16.98×; SC-All Range ₹1,615/12.60×. | med | yes | ⏸ **HELD — Meet 2026-07-13.** Shopping's brand traffic is NOT dead weight: ₹25,131 revenue on 9.75 conversions. The premise assumes Search absorbs those queries — that is an assumption, not a measurement. Prove absorption first (SH-GA-10). |
| ~~GA-006~~ | 2026-07-13 | google-ads | TEST — raise keyword max-CPC on 3 conquest terms | — | — | — | — | ❌ **NOT EXECUTABLE — withdrawn.** All three terms (`wehear earbuds`, `wehear safe buds`, `poly voyager free 60`) sit in **`SC - All Range`, a SHOPPING campaign — which has no keywords.** There is no keyword bid to raise. Windsor's `update_keywords` also requires Manual CPC; the campaign runs tROAS. Real lever = product-group bids, or a dedicated conquest Search campaign. Re-file as SH-GA-11. |

## 🚫 Rejected 2026-07-13 — removed from the queue, logged in `DECISION_LOG.md`

| id | Why rejected |
|---|---|
| **GA-001** | ~50% budget cut → trips a SECOND learning phase on campaigns already mid-learning. Re-read 19 Jul, then step down inside the 20% band. |
| **GA-002** | **DANGEROUS.** Built with a `conversions == 0` filter → contained the brand. Would have negatived **41 conversions / ₹1,13,234 — 25% of Google-paid revenue.** Superseded by GA-009/GA-010. |
| **GA-003** | Valid finding (tablet: ₹363/30d, 0 conversions) but **Windsor has no device-bid-modifier action.** Google Ads UI job, by hand. |
| **GA-007** | **No-op.** Campaign is already `PAUSED`. |
| **GA-008** | **Premise false.** The "QS scandal" was Windsor summing daily `quality_score`. Real QS is 7–8. |

## 📌 Live, awaiting action (2026-07-14)

| id | Action | Executable? |
|---|---|---|
| **P1-1** | **Tablet −100% device bid**, all campaigns. ₹363/30d, **0 conversions**. | ⚠️ **Manual** — Windsor has no device-bid action. One click in the UI. **No learning-phase cost.** |
| **P1-2** | **Exclude SafeBuds — Ivory** (`…51380726530327`) from `SC - All Range`. **9.05×, CPA ₹332** — the worst SKU in the campaign. ₹956/30d. | ⚠️ **Manual** — product-group exclusion. **No learning-phase cost** (exclusions work under Smart Bidding; only *bids* are locked). |
| **GA-005** | Brand de-duplication — exclude brand from Shopping so Search owns it. | ⏸ **HELD.** Shopping's brand traffic made **₹25,131 on 9.75 conversions.** The premise assumes Search absorbs those queries. Prove it first (SH-GA-10). |
| **P2-1** | Conquest **Search** campaign (`wehear` 45–54×, `poly voyager` 55×). | ⬜ **Deferred past 17 Aug** — new campaign = fresh learning phase. The terms sit in Shopping today, which has no keywords, so a new campaign is the *only* lever. |
