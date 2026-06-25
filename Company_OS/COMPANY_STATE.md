# COMPANY_STATE — NG EarSafe Single Source of Truth

> Canonical company state. The orchestrator and every department agent read this first, each session, before acting. **This file is updated only via an approved decision** (see `DECISION_LOG.md`). If a department needs to change a fact here, it drafts the change to `APPROVALS_QUEUE.md` — it does not edit this file directly.
>
> Last updated: 2026-06-25 · Maintained by: Chief of Staff (orchestrator)

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

1. **No VC-scale pressure.** Every plan needs a self-funded path. Don't pitch anything that only works with an external raise.
2. **5–6% EBITDA is the floor, not the ceiling.**
3. **Own it cleanly.** Favour reducing debt over cap-table optics.
4. **AI-first operating model is the mechanism** — replacing agency cost with AI agents is what makes the EBITDA floor achievable at current revenue.

Every department's drafts are judged against: *does this move us toward ₹65L MRR (50/50 D2C/Amazon) at 5–6% EBITDA, on a self-funded path?*


---

## 2. PRODUCT RANGE & STATUS

| Product | Tech | Price | Supplier | Status |
|---|---|---|---|---|
| **Comm 2.0** | Open-ear air-conduction headset + boom mic. Neckband; 180° adjustable noise-cancelling boom mic; ear canal open; fast charge 10 min = 70%; 15 hr playtime; on-headphone mute. | ₹3,499 | Shenzhen Alex | 🔴 Supply-constrained — verify live stock before scaling demand |
| **SafeBuds** (NG × WeHear) | Open-ear air-conduction hook + **SphereLingo™** AI (translate + live note-taking, 100+ langs); 30 hr case; noise-cancelling quad mics; sound-profile customisation; 15 mm dynamic speaker. | ₹2,999 | WeHear (India) | 🟢 Live — only zero-supply-risk SKU, 21-unit MOQ, cash-positive |
| **ES Lite** | Air conduction, open-ear style; 16 mm dynamic speaker; dual ENC mic; 12 hr battery; titanium-alloy neckband; USB-C. | ₹1,999 | Shenzhen Alex | 🟡 Launch-ready |
| **ES Pro** | Bone conduction, IP68, sport (35 g, 8 GB MP3, BT 5.3). | ₹3,999 | Shenzhen Alex | ⬛ Deferred |
| **Pro Mini** | Bone conduction, lightweight sport. | ₹2,999 | Shenzhen Alex | ⬛ Deferred |
| **ES OpenMax** | First over-ear open-acoustic headphone (ODM A100). | ₹2,999 | ODM | 🧪 50-unit organic-only trial, specs unresolved |
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
| **Stock-before-demand** | Do not scale paid/SEO demand for a SKU that is out of stock or supply-blocked. Confirm live inventory first. | Spending to drive traffic to an unbuyable product burns cash against the EBITDA floor. |
| **Creative-format** | New Meta creative must be review/explainer format or it doesn't ship. | Only format proven to convert. |
| **Spend approval** | Any new spend or budget increase is a draft-for-approval item, never auto-executed. | Draft-everything policy + EBITDA discipline. |
| **Channel balance** | Flag plans that push the D2C/Amazon mix away from the 50/50 FY27 target without rationale. | North-star alignment. |
| **Brand safety** | Competitor naming, public-figure/celebrity references, palette/vocabulary violations → flag before drafting. | Brand guidelines + stop list. |

**Active initiatives** are tracked per department in `departments/<dept>/tracker.md`. The CSO-level initiative list lives in `[[ng-cso-master-context]]` until migrated here.

---

## 6. DEPARTMENT REGISTRY

Departments scaffolded into the spine. Each has a triad at `Company_OS/departments/<dept>/` (constitution + tracker + learning-log) and a subagent at `.claude/agents/<dept>.md`.

| Department | Slug | Agent | Status |
|---|---|---|---|
| Chief Strategy / Orchestration | `chief-of-staff` | `.claude/agents/chief-of-staff.md` | 🟢 Live (orchestrator) |
| Instagram Content (organic social + daily trend test) | `instagram-content` | `.claude/agents/instagram-content.md` | 🟢 Live |
| Meta Ads (competitor teardown + paid) | `meta-ads` | `.claude/agents/meta-ads.md` | 🟢 Live |
| SEO / AEO | `seo-aeo` | `.claude/agents/seo-aeo.md` | 🟢 Live |
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

| Tool | Read use | Key IDs |
|---|---|---|
| **Windsor.ai** | Cross-channel metrics (GA4, Meta, Google Ads, GSC, Shopify) | — |
| **Porter** | Instagram Insights, marketing blends | — |
| **Shopify MCP** | Products, orders, inventory, ShopifyQL | — |
| **Meta Ads MCP** | Campaign/creative insights | Acct `2337775109995901` (NG SafeTech) |
| **GA4** | Revenue / funnel | Property `299565498` (www.ngcorp.in) |
| **Google Ads** | Campaign performance | Acct `508-958-3796` |
| **Google Drive** | Asset library | See `[[ng-gdrive-asset-library]]` |

Writes (Shopify mutation, Meta create/update, Gmail send, Canva publish, IG post) are **denied in agent contexts** and only run via `/execute-approved`. See `../README.md`.

---

*Edits to this file require an approved decision. Draft changes to `APPROVALS_QUEUE.md`.*
