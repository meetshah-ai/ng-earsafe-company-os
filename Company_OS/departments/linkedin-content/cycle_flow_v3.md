# LinkedIn Content — Cycle Flow v3 (canonical)

> **The 9-step process every posting cycle must follow.** Specified by Meet Shah, 2026-07-13.
> Supersedes the S1–S5 research flow in `content_intelligence_engine.md` and the twice-weekly cadence in `constitution.md` §5a/§5c.
> Implemented by `Automations/linkedin_all_in_one_n8n.json` (v3). Read with: `constitution.md` (pillars, guardrails), `learning-log.md` (what's been tried), `tracker.md` (what's in flight).

---

## 0. CADENCE

| | v2 (old) | v3 (this spec) |
|---|---|---|
| Posts per week | 2 | **3** |
| Slots | Tue, Fri | **Tue, Thu, Sat** |
| Research runs | 2/week | **3/week — one full 9-step cycle per slot** |
| Cycle trigger | 07:00 IST on slot day | 07:00 IST on slot day (cron `30 1 * * 2,4,6` UTC) |
| Ideas per email | 3 options → pick 1 | **3 options → pick 1** (unchanged) |
| Posting | on approve-click | on approve-click |

**One cycle = one slot = one full run of steps 1–9 = one email = 3 ideas = 1 post.**
Nine ideas are generated a week; three get published. The news-reaction option is researched same-morning, so it never goes stale.

---

## 1. THE NINE STEPS

### Step 1 — LinkedIn trends: day / week / month
Three explicit time horizons, not one. For each, what is actually getting traction on LinkedIn right now among **D2C / consumer-electronics / health-tech founders and operators in India**:

| Horizon | Window | What to find |
|---|---|---|
| **T-DAY** | last 24–48h | The one thing the feed is arguing about today. Time-sensitive, highest reach if we're early. |
| **T-WEEK** | last 7 days | The recurring theme of the week + which **post formats** are working (text / document / image / poll / video). |
| **T-MONTH** | last 30 days | The slower structural narrative (funding climate, platform-fee moves, quick-commerce shifts) — the stuff worth a considered POV, not a hot take. |

Rules: cite **source + date** for every hit. If a horizon is genuinely empty, say so — **never invent a trend**.

### Step 2 — Peer scan: founder posts + company posts
What relevant **D2C / consumer-electronics founders and company pages** have posted recently — what's landing, what angle, what format, what the comments are reacting to.

**Watchlist (config — editable in the workflow's Watchlist node):**
- *Founders/operators:* Peyush Bansal (Lenskart), Ghazal Alagh / Varun Alagh (Mamaearth), Arjun Vaidya (V3 Ventures), Kaushik Mukherjee (SUGAR), Ankur Warikoo, Nikhil Kamath, Shantanu Deshpande (Bombay Shaving).
- *Company pages:* boAt, Noise, Atomberg, Wakefit, Mokobara, The Whole Truth, Zouk.
- *Direct competitors:* Shokz, Noise, boAt, Mojawe, Oladence. *(The flag-before-naming rule is removed as of 2026-07-13 — naming them is allowed. Any factual claim about them must still be true and checkable.)*

**Known constraint — read this before trusting the output.** LinkedIn's API does not expose third-party posts, and LinkedIn blocks crawlers, so this step runs on **web search and is best-effort**. When coverage is thin, the cycle must say *"peer scan: thin this cycle"* rather than fabricate. Upgrade paths, in order of cost: (a) Meet/Riya paste 3–5 peer post links into a `PeerPosts` sheet tab each week — free, highest signal; (b) a scraper API (Apify/Phantombuster) — paid, ToS-grey; (c) accept best-effort.

### Step 3 — Our own past posts: performance + content bucket
Read every past cycle from the `Proposals` sheet and the live `linkedin_organic` numbers (Windsor). For each past post: **what it was, which bucket it fell into, and how it actually performed.**

**Content buckets** (= the constitution's pillars — every option must be tagged with exactly one):

| Bucket | Name | Definition |
|---|---|---|
| **P1** | Industry-news POV | Sharp operator reaction to audio / consumer-hardware / D2C-India / Amazon / q-commerce news |
| **P2** | D2C operator playbook | Tactical, numbers-grounded lesson — **Meta Ads optimization + scale-up is the primary domain** (ROAS, CVR, CPP, % change, what we scaled/killed); broader self-funded D2C lessons secondary |
| **P3** | Founder building-in-public | Honest decisions, milestones, the "sold out" register — anchored in the paid-media build we're running now |
| **P4** | Product / category | Comm 2.0-at-work, open-ear category, commute safety, deep-work focus — the consumer (B5–B7) and B2B argument |

**Structural guarantee (replaces the old "max 1 product post" cap, removed 2026-07-13):** the generator always returns **A = P1 news POV, B = P2 Meta Ads playbook, C = rotating (P3 or P4)**. Cycle diversity is enforced by the design, not by an audit rule.

The cycle must produce a **bucket-level performance rollup** (avg impressions + engagement rate per bucket, n posts) — that is what makes the loop self-learning. It must never repeat a hook or topic already in the history, and it must infer Meet's taste from cycles he *didn't* approve.

### Step 4 — Research summary table
Everything from steps 1–3 collapses into **one table** — this is the top of the approval email, so Meet can see the reasoning before the copy.

| Signal | Horizon/Source | Date | What it says | So-what for NG | Usable? |
|---|---|---|---|---|---|

"Usable?" = yes / no, and if no, one line on why. This table is a required output key, not a nice-to-have.

### Step 5 — Internal breakthrough / unique / antithesis ideas — **scoped to Meta Ads**

**Scope decision (Meet, 2026-07-13): the founder's voice on LinkedIn is built on the Meta Ads optimization and scale-up work we are running right now.** Reading every department's initiatives is too heavy and too diffuse; the paid-media build is the one story we are living daily, it produces real numbers every week, and operators actually want it. So this step reads the **meta-ads lane only**:

**It reads four small files — and nothing else.** The company-wide `APPROVALS_QUEUE.md` (180KB) and `DECISION_LOG.md` are **not** read: this lane only needs *its own* approvals and decisions, which now live in its own `cycle-log.md`. (Meet, 2026-07-13.)

| File | What to pull | Size |
|---|---|---|
| `departments/meta-ads/learning-log.md` | The **domain**: CONFIRMED patterns, REJECTED / dead ends (**never retry**), open hypotheses awaiting a read | ~10KB |
| `departments/meta-ads/tracker.md` | The **domain**: tests in flight, what we're scaling, what we're killing | ~5KB |
| `departments/linkedin-content/cycle-log.md` | **This lane's own approvals + decisions** — every cycle, the 3 options, which one Meet approved, which he ignored, and how it performed | small, append-only |
| `departments/linkedin-content/learning-log.md` | What has worked *as a post* — the writing/format learnings, not the ads learnings | ~10KB |

**The material we are allowed to post — and should:** ROAS, conversion rate, CPP/CAC, the percentage change we moved a number by, what we scaled and what we killed and why. Concrete, dated, ours. *"We cut CPP 34% in three weeks by doing X — here's the account structure"* is the register. Not *"here are 5 tips for Meta ads."*

Each of the 3 options must declare an **`idea_link`**: either (a) an existing untried idea it is finally testing, (b) a past hypothesis it is re-testing with a stated change, or (c) `NEW` + a one-line statement of the new bet. An option that repeats anything in REJECTED is invalid.

**Antithesis slot:** at least one of the three options each cycle must argue **against** a consensus in the feed (from step 1 or 2) — not contrarian for sport, but where NG's own Meta Ads data or six years of category data genuinely contradict what the herd is saying. This is the differentiator; a cycle of three agreeable posts is a failed cycle.

⚠ **Number-accuracy guard (replaces the old blanket confidentiality rule).** Posting real numbers is now the point, so the constraint moves from *"don't"* to *"be right."* Every figure in a post must (a) trace to a specific source and date in the meta-ads lane, and (b) be shown to Meet in the approval email next to that source, so he approves the number and not just the sentence. **Percentages and rates (ROAS, CVR, % change, CPP movement) are publishable. Absolute revenue, cash, margin, supplier terms and cap-table figures are not** — they inform the thinking only.

### Step 6 — Finalize this cycle's target audience
One segment for the whole cycle, decided **before** any copy is written. All three options serve the same audience from different angles — they are not three different audiences.

| | Segment | Who | Why they're on this list |
|---|---|---|---|
| **B1** | Corporate buyer | HR / admin / facilities / IT at call-heavy offices | Bulk Comm 2.0 |
| **B2** | Founder / operator peer | D2C + hardware founders, investors, operators | The Meta Ads / building-in-public audience |
| **B3** | Press / category watcher | Tech journalists, analysts, ecosystem | Category authority |
| **B4** | Professional consumer | WFH knowledge workers | All-day calls, ear fatigue |
| **B5** | **Software engineers** | Devs / IT / product people, heavy headphone users | **Prospective customers** — long focus blocks + calls, situational-awareness need |
| **B6** | **SME owners** | Small-business owners and their teams | **Prospective customers** — both a personal buyer and a small-bulk buyer |
| **B7** | **Regular commuters** | Daily metro / bike / walk / drive commuters | **Prospective customers** — the safety-while-aware use case, the strongest open-ear argument there is |

B5–B7 are **consumer** segments (added by Meet, 2026-07-13): they buy for themselves, so a cycle aimed at them should be written to a person, not to a business.

Output: `cycle_audience` = segment + **why this segment this cycle** (tied to a step-1/2/3 signal) + **what they need to hear from us**.

### Step 7 — Write to LinkedIn's ideal length and structure
Not "a post" — a post built to LinkedIn's mechanics:

- **Hook: ≤ 210 characters.** That's the "…see more" fold. If the hook doesn't earn the click, nothing else in the post exists.
- **Body: 900–1,600 characters** for a text post (LinkedIn's cap is 3,000; the sweet spot for operator posts is well under it).
- **One idea per line, blank line between lines.** No walls of text — the feed is read on a phone.
- **No link in the body** — it suppresses reach. The link goes in the **first comment**, with a soft CTA.
- **3–5 hashtags**, relevant, at the end.
- **Payoff line** that is worth reposting on its own.
- **Document/carousel:** 8–12 slides, one idea per slide.
- **Founder voice:** first person, plain, declarative, occasionally vulnerable. The "sold out" post is the reference register. Never corporate ("We are thrilled to announce…").

Every option carries a **character count** for hook and body, checked automatically — a violation shows in the email rather than going out silently.

### Step 8 — Visual check
For each option: **does this need an image, and which one?**

Output `visual` = `{ needed: yes/no, type: none|image|document|video, source: <specific existing asset, or "Canva — text/overlay", or "shoot needed">, brief: <one line> }`.

Hard rules (inherited from the brand lane): **real product photos only — never AI-generate the device.** Sources: `Product Images/` in the project root, or the Google Drive asset library. Text/overlay/carousel work is Canva, not code. A text-only post is a perfectly good answer here — `needed: no` is the default, not a failure.

### Step 9 — Email Meet for approval, 3 ideas
The approval email carries, in order: the **Chief-of-Staff audit verdict**, the **research summary table** (step 4), the **cycle audience** (step 6), the **bucket performance rollup** (step 3), then the **3 options** — each with hook, thesis, bucket, idea_link, char counts, full publish-ready body, first comment, and visual brief — plus the founder-voice post for Meet's personal account, and a one-click **Approve & post** button per option.

Do nothing = nothing posts. The next cycle reads whatever was picked.

---

## 2. AUDIT (rewritten — Meet, 2026-07-13)

The Chief-of-Staff audit runs on every cycle. **Removed at Meet's direction:** north-star fit, product-showcase creep, stock-before-demand, brand safety. The audit is now three checks — it's a *quality* gate, not a compliance gate:

1. **Antithesis presence** — at least one option genuinely argues against the feed's consensus, grounded in our own data.
2. **Number accuracy** — every figure traces to a dated source in the meta-ads lane, and is shown next to that source in the email. Rates and percentages publishable; absolute revenue / cash / margin / supplier terms are not.
3. **Structure** — hook ≤ 210 chars, body in range, link out of the body.

Verdict: CLEAR or FLAG, plus **the one recommendation** (which option), in one line grounded in a number.

> **Note for the record.** Dropping the product-showcase cap means nothing now stops a cycle from returning three product-forward posts — the exact failure that got the 2026-07-04 cycle rejected ([learning-log.md:24-29](learning-log.md#L24-L29)). The pillar mix in `constitution.md` §5b still says max one product-forward post per cycle, and the *generator prompt* still hard-codes the bucket mix (A = news POV, B = D2C/Meta-Ads playbook, C = the only product-allowed slot), so the behaviour is preserved by construction even without the audit check. Same for brand safety: the constitution §6 stop list (flag before naming a competitor or public figure) still binds the writer — it simply isn't re-checked by the auditor. If you want those genuinely gone, say so and I'll strip them from the constitution too.

---

## 3. CREDIT FRUGALITY (CEO directive, 2026-07-13)

Three cycles a week instead of two is a 50% volume increase. It must not be a 50% cost increase — the design below lands v3 at **roughly half of what v2 cost per week**, despite doing more.

**1. Sonnet everywhere.** The n8n Claude node moves `claude-opus-4-8` → **`claude-sonnet-5`**, matching the Claude Code agent (already Sonnet) and the 2026-07-11 cost decision. This is the single biggest lever — Opus was doing web-search grinding at premium rates.

**2. Split the call in two, and only the second one is expensive.**
- *Call 1 — Research* (steps 1–5): Sonnet + web search, small output (`max_tokens` 4,000 — it returns a research table and an idea-ledger read, not prose). Search is bounded to **8 uses** total across all of: 3 trend horizons, the peer scan, the meta-ads read.
- *Call 2 — Generate + audit* (steps 6–9): Sonnet, **no web search at all** (it works from call 1's table), `max_tokens` 6,000.
This also fixes the real risk that nine steps with a dozen searches blow past the node's 5-minute timeout.

**3. Cache the system prompt.** Both calls carry a long, *stable* system prompt (buckets, segments, structure rules, watchlist). Mark it `cache_control: {"type": "ephemeral"}`. Three cycles a week means cache hits are cheap and frequent; this cuts input cost on the biggest block of every call.

**4. Cap what enters the prompt.** The context digest is hard-capped:
- Past posts: **last 10 posted + last 6 skipped**, hooks only — not full bodies.
- Windsor stats: **12 rows max**.
- Idea ledger: **6,000 characters max**, and `APPROVALS_QUEUE.md` (180KB) is filtered to `meta-ads` + `linkedin-content` rows *before* it ever reaches a token.
Nothing is sent that the model doesn't need to make this cycle's decision.

**5. Don't re-pull what hasn't changed.** Windsor's per-post numbers move slowly; the Day-7 sync (§3 below) refreshes them **once a week**, not on all three cycles. The other two cycles read the sheet.

**6. Web search is a budget, not a habit.** `max_uses: 8`, and the prompt is explicit: if a horizon is empty, **say so — don't spend a search proving it.**

> Net effect: 3 cycles/week × (1 small Sonnet search call + 1 medium Sonnet write call, both cache-hitting) — cheaper per week than v2's 2 × (1 large Opus search+write call), with three horizons, a peer scan and a Meta Ads read added on top.

---

## 4. WHAT MAKES THE LOOP ACTUALLY LEARN

Steps 3 and 5 are only as good as the data written back. A **Day-7 performance sync** must run weekly: pull each posted cycle's per-post `linkedin_organic` numbers → write `impressions`, `engagement_rate`, `bucket` back to the `Proposals` sheet → append a hypothesis→result→learning line to `learning-log.md`. **Without this, the bucket rollup in step 3 is permanently empty and every cycle repeats the same blind guess.** See the change plan for where this lands.
