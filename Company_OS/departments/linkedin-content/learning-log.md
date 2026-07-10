# LinkedIn Content — Learning Log

> The department's institutional memory. Every cycle (and after every initiative) append an entry. This is what makes the agent auto-learning: it reprioritizes `tracker.md` based on confirmed/rejected hypotheses logged here. Never delete entries — supersede them.

## HOW TO LOG
```
DATE | INITIATIVE | HYPOTHESIS | RESULT (confirmed / rejected / inconclusive) | LEARNING CARRIED FORWARD
```
Be specific and quantified. A learning that can't change a future decision isn't a learning.

---

## CONFIRMED PATTERNS (promote proven learnings here)
- **Category-POV beats hiring/announcement posts on this page.** "Trend or necessity?" (6.4%) + "Sold out, organic-only" (6.58%) vs two hiring posts (4.6%, 4.7%). Source: Windsor `linkedin_organic`, Jan–Jun 2026. Lead with a stance, never with a job opening.
- **6.5% engagement is strong for LinkedIn** (≈2% platform average). The existing 1,453-follower base is responsive — it's starved, not dead.

## REJECTED / DEAD ENDS (don't retry these)
- **Posting ~once every 45 days holds followers dead flat.** 4 posts / 180 days → net 0 follower growth (1,453 → 1,453). Cadence is the binding constraint; sporadic high-quality posts do not compound.

---

## CYCLE LOG (most recent first)

### 2026-07-04 — CEO redirect: LinkedIn = operator-insight channel, NOT an open-ear showcase
**Initiative:** First live run of the `linkedin_all_in_one` n8n workflow (Meet completed credential setup 2026-07-04). The brief generated fine mechanically, but **all three options came back as open-ear category-awareness angles.** Meet rejected the mix: "the strategy for posting should revolve around industry news, D2C tips, etc, not just open ear showcase."
**Root cause:** The v1 system prompt in the Claude node instructed "keep only signals that map to a real NG product or category truth" and made option A "category-POV" by design — it filtered every non-product signal out before generation. Prompt design, not model behavior.
**Result:** REJECTED — open-ear-led option mix. (Same lesson the IG lane learned 2026-06: portfolio of pillars, brand ties back over time, not in every post.)
**Learning carried forward:** LinkedIn audience = founders/operators/HR-procurement, who follow pages that make them smarter, not pages that advertise. New pillar mix (constitution §5b updated): P1 industry-news POV, P2 D2C operator playbook, P3 founder building-in-public, P4 product/B2B **capped at max 1 product-forward option per cycle**. The n8n Claude prompt (v2, in `Automations/linkedin_all_in_one_n8n.json`) now hard-codes: option A = news reaction, option B = D2C playbook, option C = the only product-allowed slot, and the CoS audit FLAGs product-showcase creep.
**Next-sprint change triggered:** Constitution §5b/§5c rewritten; prompt v2 must be pasted into the live n8n Claude node (repo JSON already updated). First read: do P1/P2 posts beat the 5% eng baseline set by the old category-POV posts?

### 2026-06-30 — Department baseline (founding entry)
**Initiative:** Stand up the LinkedIn lane from a parked 1,453-follower page.
**Baseline (Windsor `linkedin_organic`, Jan 1–Jun 30 2026):** 4 posts in 180 days; followers flat at 1,453; 1,735 total impressions (~9.6/day); 23 likes / 4 comments / ~140 clicks. Best posts: "Sold out" (395 impr, 6.58%), "Trend or necessity?" (250 impr, 6.4%). Worst: two hiring posts (174/148 impr, 4.6%/4.7%).
**Hypothesis:** A held 2×/week cadence — one category/founder authority post + one Comm 2.0 B2B post — lifts followers and sustains ≥5% engagement, where sporadic posting could not.
**Result:** OPEN — measure at 30/60/90 days against the `tracker.md` targets.
**Learning carried forward:** Mandate = B2B + founder thought-leadership (CEO decision 2026-06-30). Cadence is the #1 lever. Category-POV is the throughline; hiring content is deprioritized.
**Next-sprint change triggered:** P0-1 (pipeline) + P0-2 (Week-1 posts) in `tracker.md`.

### 2026-07-01 — Two-account expansion: NG EarSafe company page + Meet Shah personal account
**Initiative:** Build a 2-week (8-post) twice-weekly calendar across BOTH the company page (1,455 followers, confirmed live) and the founder's personal account (~2,800 followers, the larger reach engine, requested this cycle for the first time).
**Data pull (Windsor `linkedin_organic`, 2026-07-01):** Re-confirms constitution §4 baseline exactly — followers 1,455 (was 1,453, +2 organic in the interim), 4 posts/180 days, "Trend or necessity?" 250 impr/6.4% eng, "Sold out" 395 impr/6.58% eng, two hiring posts 174 impr/4.6% eng and 149 impr/4.7% eng. No new posts since the last snapshot — cadence is still the binding constraint.
**Data gap surfaced:** Windsor's `linkedin_organic` connector is organization-scoped only. There is no connector — Windsor or otherwise — for LinkedIn personal-profile analytics (LinkedIn's API doesn't expose it to third parties). Every founder-account target signal in this cycle's drafts (LI-003, LI-004, LI-007, LI-008) is a stated assumption, not a measured baseline. Logged as LI-DATA-001 in `APPROVALS_QUEUE.md`.
**Hypothesis (new, OPEN):** The founder's personal account (larger base, no institutional data yet) will outperform the company page on raw impressions when running the same proven registers (category POV, "sold out" scarcity/honesty) in first-person voice — and cross-amplification (founder reshares company posts, company page comments on founder posts within the first hour) compounds both accounts faster than either running alone.
**Result:** OPEN — first read at Day 7 after LI-001–LI-004 go live (week of Jul 6), assuming Meet self-reports personal-account impressions per LI-DATA-001's recommendation.
**Learning carried forward:** Don't assume a connector exists just because the org-page one does — verify schema scope (`get_fields`) before citing a number as "live data." Founder-voice claims (LI-007's Amazon best-seller line, LI-008's financial framing) need an explicit pre-publish verification step beyond the usual copy review — flagged inline in both queue rows.
**Next-sprint change triggered:** Tracker P1-3 added (founder-account data-gap tracking). 8 posts (LI-001–LI-008) drafted to `APPROVALS_QUEUE.md`, covering weeks of Jul 6 and Jul 13, 2026.

### 2026-07-03 — Morning loop: the bottleneck moved from content to publishing
**Initiative:** Routine morning loop (LEARN → REVIEW → CHECK → SUGGEST → RECOMMEND). Third cycle since founding.
**Data pull (Windsor `linkedin_organic`, 2026-07-03):** Zero change since the 07-01 pull. Still exactly 4 total posts, all from before the department existed: "Trend or necessity?" (2026-01-09, 249 impr, 6.43% eng), hiring (2026-01-21, 171 impr, 4.68% eng), "Sold out" (2026-03-24, 385 impr, 6.75% eng), hiring (2026-06-19, 156 impr, 4.49% eng). Follower count flat at 1,456 across the full 2026-06-25→2026-07-03 account-level pull — every day in that window shows 0 engagement, 0 clicks, 0 likes, 0 comments, 0 shares. Confirms category-POV (6.43–6.75%) still beats hiring (4.49–4.68%) — CONFIRMED, unchanged.
**Hypothesis review:** (1) 2026-06-30 cadence hypothesis — still OPEN/untestable: cadence has not actually started (0 posts since founding). (2) 2026-07-01 founder-vs-company hypothesis — still OPEN/untestable for the same reason. Neither hypothesis has had a fair test yet — not because the drafting stalled, but because **the publish mechanism never went live.**
**Result:** REJECTED (as a process, not a content hypothesis) — "draft more content" is not the binding constraint. Two full drafting rounds (LI-001–008 batch calendar, then LI-C1-COMPANY/FOUNDER rolling-cycle options) are sitting in `APPROVALS_QUEUE.md`; DECISION_LOG.md has **zero** linkedin-content rows, executed or otherwise. The `linkedin_all_in_one_n8n.json` pipeline (the current design, superseding both older workflows) has an execution task with every checkbox unticked and no assigned owner. `LI-SMART-000` (the auto-post governance sign-off) has been `pending` for 2 days with no decision.
**Learning carried forward:** For this department specifically, **the scarce resource is not content ideas or drafting cycles — it's the human decision + automation deployment that turns a draft into a live post.** Future loops should default to recommending a manual-post bridge (Riya/Meet copy-paste from the queue) whenever automation is more than ~3 days from being live, rather than generating a third round of drafts nobody can ship. Logged as LI-009 (pipeline stall flag) + LI-010 (manual-bridge recommendation) in `APPROVALS_QUEUE.md`.
**Next-sprint change triggered:** Tracker P0-1 reprioritized to explicitly note the deployment stall and the manual-bridge fallback; no new content drafted this cycle (Cycle 1 is still live in the queue and hasn't been superseded).
