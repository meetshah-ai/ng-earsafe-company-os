# LinkedIn Content Intelligence Engine — the rolling twice-weekly loop

> **This is the operating system for LinkedIn content.** It supersedes the "plan-a-calendar" approach. We do **not** pre-write two weeks of posts. Each cycle fixes the **next post only**, informed by the **last post's real numbers**. Paired files: `constitution.md` (identity, pillars, guardrails — still authoritative), `tracker.md`, `learning-log.md`, and the automation `../../../Automations/linkedin_smart_cycle_n8n.json`.
>
> Version 1.0 · Owner: Meet Shah · Created 2026-07-01 · Replaces the batch-calendar method (rejected: too generic, no compounding).

---

## 0. WHY THIS EXISTS (the failure it fixes)

The first attempt planned 8 posts two weeks out. That is structurally wrong for a learning system: **you cannot write post #8 today, because you don't yet know what post #1 will teach you.** Pre-planned calendars produce generic, "AI-voice" filler — exactly the register the 2026 algorithm punishes (`obvious AI wording with no original judgment` → suppressed reach). The fix is a loop, not a calendar.

**The one rule that overrides everything here:** *Fix only the next post. Decide it from (a) the standing framework, (b) the last post's actual performance, (c) this week's relevance/trends. Then let the result teach the next decision.*

---

## 1. THE TWO ACCOUNTS (and why the founder account is the engine)

| Account | Followers | Role | 2026 reality |
|---|---|---|---|
| **Meet Shah (personal)** | ~2,800 | **Primary reach engine.** First-person, building-in-public, category + operator POV. | Personal profiles get **5–10× the organic reach** of company pages. This is where the category thesis actually travels. |
| **NG EarSafe (company page, org `13379517`)** | ~1,455 | **Amplifier + revenue tie.** Category POV + Comm 2.0-at-work B2B. Auto-posts on approval. | Company pages under-index on reach; they convert intent and carry the bulk/B2B CTA the founder voice shouldn't. |

**Cross-amplification (every cycle, non-negotiable):**
1. Founder post goes first (or same morning).
2. Within the **golden hour**, the *other* account **comments** on it — a substantive comment, not a reshare. Comment depth + a fast-developing conversation is a top-3 dwell signal in 2026; a reshare is not.
3. The **founder post never carries the product link** — that's the company page's job. Keeps the founder voice clean and un-sponsored.

---

## 2. THE CYCLE (runs twice a week — Tue + Fri)

```
LEARN → GENERATE 3+1 → EMAIL → APPROVE (1 click) → AUTO-POST (company) + copy-paste (founder) → LOG → (feeds next LEARN)
```

### 2a. LEARN (the intelligence — this is what makes it "smart")
Before generating anything, run **two reads: performance + a structured signal scan.** Do **not** skip to drafting.

**(i) Performance read (what our own data just taught us)**
1. **Last post's numbers** — `linkedin_organic` (Windsor, acct `13379517`) for the company page: impressions, engagement rate, comments (depth, not just count), non-follower reach. For the founder account there is **no connector** (LinkedIn API doesn't expose personal-profile analytics — see `[[ng-linkedin-founder-data-gap]]`); use the founder's self-reported "View analytics" screenshot if provided, else note it's unmeasured.
2. **Against the last hypothesis** — did it hit its predicted signal? What specifically worked (hook? format? tribe? register?) and what didn't? One line each.

**(ii) THE SIGNAL SCAN (the external intelligence — run every cycle, WebSearch/WebFetch)**
A real scan, not "a quick check." Sweep all five buckets, capture each hit with a **source + freshness date**, then keep only what maps to a real NG product/category truth. This is what decides the week's post type, angle, and pillar.

| # | Bucket | What we're hunting | Example queries / sources |
|---|---|---|---|
| **S1** | **Hearing / ear-health & science news** | New research or awareness moments on noise-induced hearing loss, safe-listening, earbud/occlusion harm, WHO safe-listening, ear-health days. *This is our credibility engine — the "the way we listen is hurting us" thesis made topical.* | `noise induced hearing loss study 2026`, `WHO safe listening`, `earbud hearing damage India`, World Hearing Day; PubMed/WHO/health-desk headlines |
| **S2** | **Headphones / open-ear category** | Open-ear / bone-conduction / OWS launches, reviews, category shifts (India + global); anything that validates or threatens the open-ear thesis. | `open ear headphones 2026`, `bone conduction news`, `OWS earbuds launch`, gadget-desk + tech-review feeds |
| **S3** | **D2C + Amazon domain & headwinds** | D2C India economics — rising CAC/ad costs, Amazon India audio-category moves, marketplace fee/policy changes, import duty/GST, logistics, quick-commerce shifts. The "building a D2C brand in 2026" operator conversation. | `D2C India CAC 2026`, `Amazon India seller fee change`, `Indian D2C headwinds`, `electronics import duty India`; Inc42/ET Retail/YourStory |
| **S4** | **LinkedIn-native trending** | What formats + topics are *gaining attention on LinkedIn this week* in D2C/startup/hardware/health-founder circles — trending hooks, document-post vs video shifts, a viral operator post we can thoughtfully react to (react, don't copy). | `trending LinkedIn posts D2C founder`, LinkedIn news/creator trends; scan Meet's own feed signals if provided |
| **S5** | **Competitor & ecosystem** | Shokz / Noise / boAt / Mojawe / Oladence moves, retail/marketplace signals, partnerships. **Flag before naming any competitor** (stop list). | `Shokz India`, `boAt open ear`, `Noise earbuds launch`; ad-library + press |

> Company/founder *real events* (our own numbers, a decision, a sold-out moment, a shipment) are always eligible fuel and often beat external trends — pair them with a scanned signal for topicality.

**(iii) Gates** — stock (Comm 2.0 🟢, SafeBuds 🟢, ES Lite 🟢 as of 2026-06-27; verify), brand stop-list (no competitor/celebrity un-flagged), no money-link in body, no un-verified public number.

**Scan → decision (how the intelligence becomes the post):** from the buckets, pick the **1–2 strongest signals** (hot × on-thesis × we-can-say-something-true). Each surviving signal → map to a **pillar** (P1 category POV / P2 Comm 2.0-at-work / P3 founder / P4 proof) + an **angle** (the specific stance) + a **format + creative-asset call** (§2b). Tag each `[category]` or `[brand]`. If a bucket is empty this week, say so — don't invent a trend.

> Cycle 1 has no prior post in the loop — it bootstraps off the **institutional truths** (constitution §4) + a first full signal scan. From Cycle 2 on, the previous post's Day-2/3 read + the fresh scan are the two primary inputs.

### 2b. GENERATE — the exact email payload
Produce **3 company options + 1 founder post**. Each company option is a *different bet* so the founder is choosing a direction, not approving a draft:

| Field | What it must contain |
|---|---|
| **Hook** | The scroll-stopper (first 1–2 lines). ≤12 words if text. |
| **Thesis** | *One line:* why THIS wins this week — tie to a proven register, the last post's read, or a live trend. Not "this is good content." |
| **Signal** | Which scanned signal (S1–S5) or real company event this option rides + its source/date. Ties the intelligence to the post. |
| **Format** | text / document (PDF carousel) / native video / image. Chosen from 2026 dwell data + what the last post's format did. |
| **Tribe** | The named audience (A WFH / B mover / C parent / D presence / F bridge-builder / B1 corporate / B3 press). |
| **Body** | The full post copy (or slide-by-slide for a document, or caption + shot-list for video). Publish-ready. |
| **Creative asset** | The explicit asset call (see below): `none` / `image` / `document` / `video` — and if not `none`, the ready-to-run brief (tool + prompt/shot direction). |
| **Predicted signal** | The falsifiable number we're betting on (eng %, impressions, a bulk DM, video views). This becomes next cycle's scorecard. |
| **First comment** | The link + soft CTA (never in the body). |

**The creative-asset decision (every option must answer it):** does this post need an asset, and if so what + who builds it?

| Asset call | When | Tool (per `[[ng-creative-tooling-rules]]`) | Rules |
|---|---|---|---|
| **none** (native text) | POV/founder text posts — the 6.4–6.58% proven register; highest raw reach | — | Default. Don't add an asset just to add one. |
| **image** | One-visual posts, product-in-context, a single stat/quote card | **Higgsfield** for lifestyle/scene; **Canva** for text-overlay/quote cards | **Real product photo only** (Product Images/ folder) — never AI-generate the device (`[[ng-product-image-rule]]`). Comm 2.0 on-ear fit per `[[ng-comm2-on-ear-reference]]`. |
| **document** (PDF carousel) | Educational / data / "how open-ear works" — strong LinkedIn dwell format | **Canva** (carousels/overlays) | No Python for creatives. Category-education spine. |
| **video** | Reach swings, demos (e.g. SphereLingo™ live-translation), founder-to-camera | **Higgsfield** | Natural human motion in every prompt (`[[ng-video-generation-rules]]`); real product only. |

If an asset is called, the brief is produced **in the same cycle** and generated on approval — so the post never waits on creative. Asset generation stays draft-first (nothing publishes until the human's click).

**Standing default spread of the 3 options** (adjust from the learning-log): one **safe/proven** (category-POV native text — our 6.4–6.58% register), one **revenue** (Comm 2.0 B2B, document or image, carries the bulk CTA), one **reach swing** (native video or a novel angle — e.g. SphereLingo™ live-translation demo). Different risk levels on purpose.

The **founder post** is always first-person, a proven register (honest/building-in-public/"sold-out"), anchored on something *real and specific* (a decision, a number, a lesson), and trend-relevant where it can be earned.

### 2c. EMAIL → APPROVE → POST (the automation)
The generated payload is written to the **Proposals sheet**; n8n emails it Tue/Fri morning with **three approve buttons** (one per option). See `../../../Automations/linkedin_smart_cycle_n8n.json` §Architecture. One click →
- the chosen option is written to the Buffer as `approved` and **auto-published to the company page** (immediately, or held to the 10:00 IST slot — configurable);
- the founder post is in the email body to **copy-paste** to the personal account (+ a "mark posted" link so the loop can track it);
- both are logged.

### 2d. LOG (closes the loop)
Day-2/3 after posting → append to `learning-log.md`: *hypothesis → predicted signal → actual → learning.* Update `tracker.md` pillar/format weights. **This is the input to the next LEARN.**

---

## 3. GOVERNANCE — the one rule this bends, and how it's contained

The company spine says *only `/execute-approved` performs live writes.* Auto-posting on an email click is a **bounded exception**, and it must be signed off (queue item `LI-SMART-000`):

- **The email click IS the human approval gate** — the same human decision, captured via a link instead of the CLI. No post goes out without Meet choosing one of three options.
- **Scope is the narrowest, most reversible action on the platform:** a text/image/document post to *one* org page (`13379517`), deletable in ~10 seconds. n8n already holds this exact LinkedIn token (it did in the old auto-publish workflow).
- **The founder account is never auto-posted** — always manual copy-paste (personal-profile ToS + it's the founder's face).
- **Everything upstream stays draft-first** — the *generation* is read-only; only the human's click writes.

If Meet prefers zero exceptions, the fallback is: approve in the email → row lands in Buffer as `approved` → the existing Tue/Fri cron posts it (one extra step, no new token behavior). Flagged for his call in `LI-SMART-000`.

---

## 4. WHAT CHANGED vs THE OLD METHOD

| Old (rejected) | New |
|---|---|
| 8 posts planned 2 weeks out | 1 next post per cycle, decided live |
| No performance input between posts | Every cycle reads the last post's numbers first |
| Generic "LinkedIn voice" | Thesis-per-option; each post defends a specific bet |
| Founder account = afterthought | Founder account = the 5–10× reach engine, planned first |
| Approve → manual buffer → cron | Approve in email (1 click) → company page auto-posts |
| Buffer drains blindly | Loop compounds; dead angles get dropped by data |

Links: `constitution.md` · `tracker.md` · `learning-log.md` · `[[ng-linkedin-founder-data-gap]]` · `../../../Automations/linkedin_smart_cycle_n8n.json`
