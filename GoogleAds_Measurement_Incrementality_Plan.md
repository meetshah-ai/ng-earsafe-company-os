# TASK: Fix Paid Measurement & Prove Incrementality (Google + Meta)

**Owner:** [assign] | **Stores/Accounts:** Shopify `ngearsafe.com` · Google Ads 508-958-3796 · Meta
**Raised by:** Growth/Analytics | **Date:** 25 Jun 2026 | **Priority:** P0
**Sources:** Windsor.ai (Google Ads, Meta) + Shopify connector, live pulls

---

## TL;DR
Every platform's ROAS is **double-counted**. Google + Meta together claim **~102% of
all revenue** — impossible. Do **not** scale any budget on platform ROAS. Get the real
answer with a **causal holdout**, and fix the broken tracking so future calls aren't blind.

## The evidence — order-count reconciliation (May 26 – Jun 24, 30 days)

**Shopify = ground truth (cash):**
- **492 orders / ₹13,22,747 gross** (₹14,54,032 incl. tax+shipping).

**What each platform CLAIMS it drove:**
| Source | Claimed orders | Claimed revenue ₹ |
|---|--:|--:|
| Google Ads (`Purchase (1)`) | ~152 | ~5,12,000 |
| Meta (omni purchase) | 258 | 8,37,365 |
| **Sum (two paid only)** | **410** | **13,49,365** |
| **Shopify actual TOTAL** | **492** | **13,22,747** |

- Two paid platforms alone claim **~102% of all gross revenue** and **83% of all orders**
  — *before* a single organic / direct / branded / email / returning-customer order.
  Mathematically impossible unless both claim the **same baskets**. → Over-attribution.
- Shopify native attribution is ALSO broken: **458/492 orders (93%) have blank referrer**
  (Instagram 13, Facebook 12, Google 4, rest unlabeled). So "Shopify shows ~0 Google
  orders" was NOT proof Google is phantom — Shopify sees almost no one.
- **Real blended truth:** ~₹2.0–2.3L total paid spend → ₹13.2L gross ≈ **~6x blended MER**.
  Per-platform self-reported ROAS cannot be trusted.

---

## Step 0 — FREEZE (now)
Hold ALL budget scaling, including the earlier Shopping ₹1,000→₹2,500/day proposal.
There is no trustworthy ROAS to scale on. Keep current spend flat until Step 1 reads out.

## Step 1 — Causal holdout (the only incremental truth)
Run ONE channel dark at a time. Measure **TOTAL Shopify revenue**, never platform ROAS.

**Test A — Shopping (`SC - All Range`):**
- Pause it for **5–7 full days**.
- Baseline = trailing 7-day avg of total Shopify revenue before the pause.
- It claims ~₹97K / 5 days. Decision rule on the drop in TOTAL revenue:
  - Drop **≥70%** of claimed → incremental → resume + scale budget.
  - Drop **<30%** → largely non-incremental → cut budget.
  - **30–70%** → partially incremental → hold, optimise, retest.

**Test B — Meta (later, staggered):** same protocol on the largest Meta campaign.

**Guardrails:** never run both channels dark at once; avoid sale/festival days; leave
Search + organic untouched as the revenue floor; note any external events in the window.

## Step 2 — Fix measurement (so the next decision isn't blind)
- **UTM tagging (Google Ads):** add final-URL suffix
  `utm_source=google&utm_medium=cpc&utm_campaign={campaignid}` so Shopify + GA4 can
  classify paid clicks (today gclid-only → Shopify mislabels as direct/organic).
- **Blank-referrer (93% of Shopify orders):** investigate checkout/landing UTM capture
  (theme/checkout stripping params, redirects, app interference). This is likely the
  bigger Shopify gap — until fixed, Shopify per-source attribution stays unusable.
- **GA4 side (cleanup, not bidding):** fix the Merchant Center item-ID error on
  `Purchase (GA)`; fix "Begin checkout" misconfigured. These corrupt GA4 product/revenue
  reports but sit on secondary actions, so they don't steer bids.

## Step 3 — New reporting standard (going forward)
- **Single source of truth = Shopify order data (cash)**, not platform pixels.
- Judge channels by **blended MER** (total Shopify revenue ÷ total ad spend across all
  platforms) and **holdout lift** — not self-reported platform ROAS.
- Reference blended MER now ≈ **6x**. Track weekly; a healthy floor protects the P&L
  even while per-channel truth is being established via holdouts.

---

## Verification / Definition of Done
- [ ] Step 1 holdout run; total-revenue drop measured vs baseline; decision logged.
- [ ] `utm_medium=cpc` present on Google paid landing URLs (check a live click).
- [ ] Shopify blank-referrer share falls materially on new orders post-fix.
- [ ] Merchant Center item-ID + Begin-checkout errors cleared in Google Ads diagnostics.
- [ ] Weekly blended-MER report stood up; platform ROAS demoted to a directional metric.

## Why this matters (context)
The account is genuinely profitable at the blended level (~6x MER), so this is not a
fire — but every scaling decision so far has been made on inflated, double-counted
platform numbers. Establishing incrementality + a cash-based source of truth is the
prerequisite for confidently scaling Shopping (or Meta) rather than guessing.
