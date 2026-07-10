# COMPANY_STATE — NG EarSafe Single Source of Truth

> Canonical company state. The orchestrator and every department agent read this first, each session, before acting. **This file is updated only via an approved decision** (see `DECISION_LOG.md`). If a department needs to change a fact here, it drafts the change to `APPROVALS_QUEUE.md` — it does not edit this file directly.
>
> Last updated: 2026-06-30 · Maintained by: Chief of Staff (orchestrator)
> Latest change (2026-06-30, CEO decision): **LinkedIn Content department registered** (§6) — B2B demand-gen + founder thought-leadership, twice-weekly auto-publish via an approved-buffer → n8n pipeline; added the `linkedin_organic` connector to §7.
> Prior change (2026-06-27, CEO decision — see `DECISION_LOG.md`): Comm 2.0 + ES Lite supply constraint **cleared** (now in stock); ES OpenMax moved to a 100-unit pre-order test; north-star pacing set to "as fast as possible while holding ROAS"; added §5.5 Hypothesis-Testing & Scale doctrine.

---

## 0. IDENTITY

- **Legal entity:** N.G Consumertech Pvt Ltd
- **Brand:** NG EarSafe
- **Website:** www.ngearsafe.com
- **Founded:** August 2020
- **Founder / CEO:** Meet Shah — meetshah@ngearsafe.com
- **Social lead:** Riya Shah — riyashah@ngearsafe.com
- **Instagram:** @ngearsafe (~14,000 followers)
- **Category:** India's open-ear audio brand — wired open-ear through AI-enabled OWS.
- **Core belief:** *The way we have been listening is hurting us. Open ear is the answer.*
- **The moat:** Six years of category ownership, ~1L customers, India's only open-ear D2C brand. Brand trust + category ownership — not manufacturing control. Defend this in every recommendation.
- **Competitors:** Shokz, Noise, Boat, Mojawe, Oladence.

---

## 1. NORTH STAR (overrides growth-at-all-costs)

> **FY27 target: ₹65L MRR, split 50% D2C / 50% Amazon, at 5–6% EBITDA.** (Stated by Meet Shah, Jun 2026.)
> **Pacing (CEO, 2026-06-27): reach ₹65L MRR as fast as possible — by *maintaining ROAS*, not sacrificing it.** Speed is now an explicit objective. The constraint is ROAS: scale aggressively on anything that holds its ROAS/efficiency bar, and only on what a test has already validated (see §5.5). Faster is better *if and only if* the unit economics hold.

1. **No VC-scale pressure.** Every plan needs a self-funded path. Don't pitch anything that only works with an external raise.
2. **5–6% EBITDA is the floor, not the ceiling.**
3. **Own it cleanly.** Favour reducing debt over cap-table optics.
4. **AI-first operating model is the mechanism** — replacing agency cost with AI agents is what makes the EBITDA floor achievable at current revenue.
5. **Speed at constant ROAS.** Get to ₹65L MRR as quickly as the ROAS bar allows. Test → validate → scale; never scale an unvalidated lever, never scale a lever whose ROAS is decaying.

Every department's drafts are judged against: *does this move us toward ₹65L MRR (50/50 D2C/Amazon) at 5–6% EBITDA, on a self-funded path — as fast as possible while holding ROAS?*


---

## 2. PRODUCT RANGE & STATUS

| Product | Tech | Price | Supplier | Status |
|---|---|---|---|---|
| **Comm 2.0** | Open-ear air-conduction headset + boom mic. Neckband; 180° adjustable noise-cancelling boom mic; ear canal open; fast charge 10 min = 70%; 15 hr playtime; on-headphone mute. | ₹3,499 | Shenzhen Alex | 🟢 **In stock — supply constraint cleared (CEO, 2026-06-27).** Free to scale demand. |
| **SafeBuds** (NG × WeHear) | Open-ear air-conduction hook + **SphereLingo™** AI (translate + live note-taking, 100+ langs); 30 hr case; noise-cancelling quad mics; sound-profile customisation; 15 mm dynamic speaker. | ₹2,999 | WeHear (India) | 🟢 Live — zero-supply-risk SKU, 21-unit MOQ, cash-positive |
| **ES Lite** | Air conduction, open-ear style; 16 mm dynamic speaker; dual ENC mic; 12 hr battery; titanium-alloy neckband; USB-C. | ₹1,999 | Shenzhen Alex | 🟢 **In stock — free to scale demand (CEO, 2026-06-27).** |
| **ES Pro** | Bone conduction, IP68, sport (35 g, 8 GB MP3, BT 5.3). | ₹3,999 | Shenzhen Alex | ⬛ Deferred |
| **Pro Mini** | Bone conduction, lightweight sport. | ₹2,999 | Shenzhen Alex | ⬛ Deferred |
| **ES OpenMax** | First over-ear open-acoustic headphone (ODM A100). | Pre-book ₹2,999 / regular ₹3,499 | ODM | 🧪 **Pre-order test (CEO, 2026-06-27): 100 units — 50 Silver + 50 Orange. Ships in 10 business days. Pre-book ₹2,999, reverts to ₹3,499 after.** Demand capped at the 100-unit pre-order pool. |
| **Comm 2.0 Dongle** | Pi-bridge USB-C conferencing dongle (driverless USB-Audio+HID, fixes Teams). | — | In-house POC | 🧪 Software/AI pivot POC |

**Strategic focus: Comm 2.0 + SafeBuds + ES Lite.** Detail: `[[ng-earsafe-products-tribes]]`, `[[ng-comm2-on-ear-reference]]`, `[[ng-openmax-product]]`, `[[ng-dongle-poc]]`.

---

## 3. FINANCE & SUPPLY STATE (verify before any financial decision)

Canonical detail lives in finance memories; this is the snapshot the orchestrator reasons from. **Always reconcile against the verified transaction file `CFO/NG_All_Transactions_Verified.xlsx` (override-first) before asserting a number.**

- **Channel target mix (FY27):** 50% D2C / 50% Amazon.
- **EBITDA floor:** 5–6%. Break-even historically ~₹43L/month.
- **Supply spine:** Comm/Lite/Pro/Pro Mini moulds owned by Shenzhen Alex (overdue balance — see `[[ng-supply-chain-map]]`); SafeBuds via WeHear (independent, 30-day terms); Earkart revolving inventory finance; Amazon D+10 payment terms shorten the cash cycle.
- Full picture: `[[ng-cfo-cashflow-analysis]]`, `[[ng-supply-chain-map]]`, `[[ng-cso-master-context]]`.

> Numbers in the memory graph are point-in-time. Treat any rupee figure older than the current month as needing re-pull before it drives a decision.

---

## 4. CHANNEL TRUTHS (institutional — never relearn)

1. **Only review / tech-explainer creative converts on Meta** (Techopedia / Gadgetbhai style). Feature carousels, UGC, static specs = dead across all SKUs.
2. **WhatsApp is the highest-converting channel (~4.93% CVR)** and underused. Every initiative needs a WhatsApp component.
3. **Google organic is the survival engine** (zero ad cost). Never compromise SEO.
4. **NG EarSafe is a category-education problem.** Every creative answers "what is open ear?" AND "why this one?" in 30 seconds.
5. **~87.6% of buyers decide same-day.** Impulse purchase — friction kills.

---

## 5. CURRENT PRIORITIES & CROSS-DEPARTMENT GATES

> The orchestrator reconciles every department's drafts against these gates each standup. A draft that trips a gate is flagged, not queued for approval as-is.

| Gate | Rule | Why |
|---|---|---|
| **Stock-before-demand** | Do not scale paid/SEO demand for a SKU that is out of stock or supply-blocked. Confirm live inventory first. **Stock status (2026-06-27): Comm 2.0 ✅, SafeBuds ✅, ES Lite ✅ — all clear to scale.** ES OpenMax is pre-order only — drive demand up to the 100-unit pool, not beyond. ES Pro / Pro Mini remain deferred — no demand. | Spending to drive traffic to an unbuyable product burns cash against the EBITDA floor. |
| **Creative-format** | New Meta creative must be review/explainer format or it doesn't ship. | Only format proven to convert. |
| **Spend approval** | Any new spend or budget increase is a draft-for-approval item, never auto-executed. | Draft-everything policy + EBITDA discipline. |
| **Channel balance** | Flag plans that push the D2C/Amazon mix away from the 50/50 FY27 target without rationale. | North-star alignment. |
| **Brand safety** | Competitor naming, public-figure/celebrity references, palette/vocabulary violations → flag before drafting. | Brand guidelines + stop list. |

**Active initiatives** are tracked per department in `departments/<dept>/tracker.md`. The CSO-level initiative list lives in `[[ng-cso-master-context]]` until migrated here.

---

## 5.5 HYPOTHESIS-TESTING & SCALE DOCTRINE (test → validate → scale)

> The mechanism that turns "go fast at constant ROAS" (§1) into discipline. **We never scale a lever we haven't tested. We never hold a test we've already validated.** Every department runs a continuous test backlog; the orchestrator reviews it each loop. This is how we reach ₹65L MRR as fast as the ROAS bar allows — by only pouring budget into what a small test has already proven.

**The loop (every department, every cycle):**
1. **Hypothesis** — a falsifiable bet with a named metric and a threshold (e.g. *"Comm 2.0 review-creative LAL holds CPP ≤ ₹250 at ₹X/day"*). Logged in the department `learning-log.md` as OPEN.
2. **Test** — smallest spend/effort that can move the metric. Time-boxed. Draft to `APPROVALS_QUEUE.md`; runs only after approval.
3. **Read** — measure against the threshold honestly. Confirmed / rejected / too-early.
4. **Scale or kill** — **only a CONFIRMED hypothesis earns scale budget**, and only while its ROAS/efficiency metric holds. A rejected one is killed and logged so we don't retry the dead end.
5. **Re-test** — every scaled lever gets a standing watch; the moment its ROAS decays past the bar, it drops back to "test" (re-validate) before more budget.

**Per-department scaling metric (the bar a hypothesis must clear to earn scale):**

| Department | Scale bar (hold this or don't scale) | Test backlog lives in |
|---|---|---|
| **Meta Ads** | ROAS ≥ 8× (target band 8–12×), CPP at/under SKU floor, frequency < 2.5× | `departments/meta-ads/learning-log.md` |
| **Instagram Content** | Saves/reach + profile-visit rate beating the format's prior baseline (proxy until paid attribution) | `departments/instagram-content/learning-log.md` |
| **SEO / AEO** | Non-branded CTR + position trend up on the target cluster; AEO citation captured | `departments/seo-aeo/learning-log.md` |
| **Amazon** | Blended Amazon Ads ROAS ≥ 15 (SC+VC revenue ÷ total ad spend), SKU inventory cover ≥ 3 weeks; campaign passes marginal-ROAS scale test (set by CEO 2026-07-08) | `departments/amazon/learning-log.md` |
| **(future depts)** | Define the one metric the lever must hold, before any scale budget | their `learning-log.md` |

**Rules:** (a) one hypothesis = one logged bet with a number; (b) no scale budget without a prior confirmed test; (c) every scaled lever has a standing ROAS watch and reverts to "test" on decay; (d) the orchestrator surfaces the cross-department test backlog every `/standup` and the per-department reads every `/morning-loop`.

---

## 5.6 DEPARTMENT OPERATING TARGETS & CADENCE (current quarter — set by CEO 2026-06-27)

| Department | Primary mandate this quarter | Hard KPI | Analysis cadence |
|---|---|---|---|
| **Meta Ads** | **Run Meta as a continuous test engine** — systematically test new content **types, ad structures, and creative angles** across **varied audience mixes**. The job is not "manage the existing ads"; it is to find and validate the format/structure/audience combinations that scale. Every analysis must include a **creative-type teardown**: what angle and content structure each ad uses, benchmarked against the current high-performing Meta/Reels ad formats and structures. | **₹5,00,000 total Meta spend delivering ROAS 5–6× over the next 3 months (by ~2026-09-27).** Volume at a held ROAS band — not max ROAS on tiny spend. | **Weekly (week-over-week).** 30-day is context only; kill/scale/rotate decisions are made on the *weekly* trend, not the trailing 30-day average. |
| **Instagram Content** | **Post 3× / week** on Instagram **and Facebook**, organic. Every post is a live test of a **hypothesis** (audience target × content type × structure) aimed at **growing reach + engagement**. Pull IG/FB account analytics (Porter) each cycle to log what worked, what didn't, and what's still untested — memory is the test ledger. | Reach + engagement trending up week-over-week off the Porter baseline; build a confirmed-format library. | **Weekly**, read against the Porter analytics pull. |

> Note: the Meta ₹5L / ROAS 5–6× KPI is the operational bridge to the ₹65L MRR north star — it is the "scale fast at constant ROAS" rule (§1) made concrete for the paid lane. ROAS 5–6× is the floor to hold while scaling spend; do not chase a higher ROAS on trivial spend.

---

## 6. DEPARTMENT REGISTRY

Departments scaffolded into the spine. Each has a triad at `Company_OS/departments/<dept>/` (constitution + tracker + learning-log) and a subagent at `.claude/agents/<dept>.md`.

| Department | Slug | Agent | Status |
|---|---|---|---|
| Chief Strategy / Orchestration | `chief-of-staff` | `.claude/agents/chief-of-staff.md` | 🟢 Live (orchestrator) |
| Instagram Content (organic social + daily trend test) | `instagram-content` | `.claude/agents/instagram-content.md` | 🟢 Live |
| Meta Ads (competitor teardown + paid) | `meta-ads` | `.claude/agents/meta-ads.md` | 🟢 Live |
| SEO / AEO | `seo-aeo` | `.claude/agents/seo-aeo.md` | 🟢 Live |
| LinkedIn Content (B2B demand-gen + founder thought-leadership; twice-weekly auto-publish via approved buffer → n8n) | `linkedin-content` | `.claude/agents/linkedin-content.md` | 🟢 Live |
| Amazon (SC + VC marketplace + Amazon Ads; mandate ₹35L/mo at blended ROAS ≥ 15 — CEO 2026-07-08) | `amazon` | `.claude/agents/amazon.md` | 🟢 Live |
| Google Ads | `google-ads` | — | ⬜ Not yet scaffolded |
| CRO / Product Pages | `cro` | — | ⬜ Not yet scaffolded |
| CX / Support | `cx` | — | ⬜ Not yet scaffolded |
| CFO / Finance | `finance` | — | ⬜ Not yet scaffolded |
| B2B / Corporate | `b2b` | — | ⬜ Not yet scaffolded |
| International (UAE) | `international` | — | ⬜ Not yet scaffolded |

*Note: the earlier `content-growth` reference department was consolidated into `instagram-content` (same lane, fuller mandate).*

To add one: run `/new-department <slug>` and port the relevant existing role doc into its constitution.

---

## 7. DATA CONNECTORS (read for state; writes are gated)

> **Required for the loops to function.** These are claude.ai account connectors, not declared in the repo — a cloud/other-machine runner must have them connected or the read steps degrade to "data unavailable, flag it." This table *is* the connector contract.

| Tool | Read use | Key IDs |
|---|---|---|
| **Windsor.ai** | Cross-channel metrics (GA4, Meta, Google Ads, GSC, Shopify) | — |
| **Windsor.ai** `linkedin_organic` | LinkedIn organic — follower count, impressions, engagement, per-post (SHARE) performance | Acct/org `13379517` (NG EarSafe). Writes (publishing) are **not** via Windsor — they run through the gated n8n approved-buffer pipeline (`Automations/linkedin_twice_weekly_n8n.json`). |
| **Porter** | Instagram Insights, marketing blends | — |
| **Shopify MCP** | Products, orders, inventory, ShopifyQL | — |
| **Meta Ads MCP** | Campaign/creative insights | Acct `2337775109995901` (NG SafeTech) |
| **GA4** | Revenue / funnel | Property `299565498` (www.ngcorp.in) |
| **Google Ads** | Campaign performance | Acct `508-958-3796` |
| **Windsor.ai** `amazon_ads` | Amazon Ads SP/SB/SD campaign daily (cost, attributedsales14d — 14-day attribution window) | Accts `1452172411967063` (NG Corporation), `1498424255518113` (NG AMS). Connected 2026-07-08. |
| **Windsor.ai** `amazon_sp` | Seller Central: sales_and_traffic (ordered rev/units, ~1-day lag), settlement, FBA inventory | Acct `A1R7VDIQ0BT3J7-IN` |
| **Windsor.ai** `amazon_vendor` | Vendor Central: vendor_sales (ordered rev/units, ~3-day lag) | Acct `amzn1.vg.8998932-IN` |
| **Google Drive** | Asset library | See `[[ng-gdrive-asset-library]]` |

Writes (Shopify mutation, Meta create/update, Gmail send, Canva publish, IG post) are **denied in agent contexts** and only run via `/execute-approved`. See `../README.md`.

---

*Edits to this file require an approved decision. Draft changes to `APPROVALS_QUEUE.md`.*
