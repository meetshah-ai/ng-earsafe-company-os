# TASK: Google Ads Conversion Tracking — Verify & Clean Up Duplicate Purchase Tags

**Owner:** [assign coworker] | **Account:** Google Ads 508-958-3796 (N.G CONSUMERTECH PVT LTD)
**Raised by:** Growth/Analytics | **Date:** 19 Jun 2026 | **Priority:** P1
**Data source:** Windsor.ai live pull, 24 Mar – 19 Jun 2026, broken down by `conversion_action_name`

---

## Context / why this task exists

While auditing the Google Ads ROAS (platform showed ~48x, GA4 showed ~7.8x), we
traced the gap to how conversion actions are configured. Investigation found:

- **Add to Cart + Begin Checkout WERE inflating the conversion metric — but this is
  already fixed.** Per-week data shows both stopped counting in the primary
  "Conversions" (bidding) column at the **W21→W22 boundary (~end of May)**. They now
  fire as "all conversions" only. ✅ No action needed — just confirm in UI.
- **There are still TWO purchase conversion actions firing for the same orders**, and
  the cleaner one is switched off in bidding. **This is the open task.**
- A page-view action (`custom_page_view_ngearsafe`) is configured as a conversion and
  briefly leaked into the primary metric in W18–W19. Needs a quick status check.

**Important reframing for whoever reviews performance:** the apparent "conversion
collapse" that triggered the Jun 17 pause was mostly an artifact of removing
ATC/Checkout from the goal (the metric definition changed mid-stream). Using the real
Shopify purchase value, revenue actually grew (₹139K→₹213K W20→W22) and ROAS
compressed from ~25x to ~9–10x purely from scaling spend 4x — normal diminishing
returns, **not a collapse**. Full-period real ROAS ≈ 13.7x. The account is healthy.

---

## What the data shows (evidence)

**Two purchase actions, every week, same orders, different counts:**

| Week | Purchase (1) — Shopify pixel | Purchase (GA) — GA4 import |
|---|---|---|
| | orders / value ₹ — **EXCLUDED from bidding** | orders / value ₹ — **counts in bidding** |
| W20 | 45 / 138,477 | 39 / 117,196 |
| W22 | 74 / 212,631 | 63 / 178,092 |
| W24 | 34 / 110,824 | 23 / 79,823 |

Shopify "Purchase (1)" records ~20–40% **more** orders than the GA import every week,
yet it is the one set to **not count**. So bidding currently optimises on the
lower-coverage signal. Full period: Purchase (1) = 489 orders / ₹14.5L;
Purchase (GA) = 356 orders / ₹10.7L.

---

## Tasks (in order)

### 1. Confirm ATC / Begin Checkout are Secondary (5 min) ✅ expected already done
- Google Ads → Goals → Conversions → Summary.
- Confirm **Add to Cart** and **Begin Checkout** are set to **Secondary** ("Not
  counted in Conversions"). Data says this happened ~W22; just verify it's still so.
- If either is back to Primary, set to Secondary.

### 2. Investigate the two Purchase actions (the real task)
- Open **Purchase (1)** and **Purchase (GA)**. For each, record: source/origin
  (website tag vs GA4 import), Count setting (One/Every), attribution model,
  conversion window, and whether it's Primary or Secondary.
- Confirm they fire on the **same** event (a completed Shopify order) — i.e. they are
  duplicates measuring one purchase via two pipelines, not two different events.
- Decide the single source of truth:
  - **Recommended:** keep **Purchase (1)** (Shopify pixel — higher coverage) as the
    sole **Primary**, set **Purchase (GA)** to **Secondary** — *provided* Purchase (1)
    passes a dynamic transaction value (not a fixed/default value). Verify a few
    recent orders show correct rupee values.
  - If Purchase (1) does **not** pass dynamic value correctly, keep **Purchase (GA)**
    Primary and fix the Shopify tag value before switching.
- End state: **exactly one** PURCHASE action is Primary, with correct dynamic value.
  Never both Primary (double-count), never both off.

### 3. Page-view action
- Set `www.ngcorp.in (web) custom_page_view_ngearsafe` to **Secondary** / remove from
  conversions. It briefly counted in W18–W19; ensure it cannot steer bidding.

### 4. Re-baseline bidding (after 1–3)
- With one clean purchase signal, the "Conversions" column should equal real orders
  and "Conv. value" ≈ real revenue (~₹10–14L over the period, not ₹50.9L).
- Do **not** re-scale spend yet. The W21–22 push to ₹14–22K/wk compressed ROAS to
  ~9x; restore "SC – All Range" toward its efficient zone (~₹800/day) and hold for a
  baseline before any scaling (≤20%/week).

---

## Verification (Definition of Done)

- [ ] ATC + Begin Checkout = Secondary (confirmed in UI).
- [ ] Exactly one PURCHASE action is Primary, passing dynamic value; the other is
      Secondary; both confirmed to track the same order event.
- [ ] Page-view action is Secondary / not counted.
- [ ] Re-pull via Windsor (`google_ads`, by `conversion_action_name`, last 2 weeks):
      only one PURCHASE action has `conversions > 0`; ATC/Checkout/pageview = 0 primary.
- [ ] For a test week, Google Ads "Conv. value" ≈ GA4 `purchase_revenue`
      (Paid Search+Shopping) within ~1.0–1.3x (not 8–17x).

## Notes
- Steps 1–3 are in-platform Google Ads settings changes — no website code edit needed,
  unless step 2 shows Purchase (1) lacks dynamic value (then fix the Shopify/GTM
  purchase value parameter first).
- Re-pull/verification can be done via Windsor.ai on request.

---

## Appendix — full weekly data (platform-reported, by conversion action)

Primary "Conversions" column (what Smart Bidding optimises to):

| Week | Add to Cart | Begin Checkout | Purchase (GA) | Pageview | Purchase (1)* |
|---|--:|--:|--:|--:|--:|
| W14 | 54.5 | 66.6 | 16.0 | 0 | (0 / 34 all-conv) |
| W15 | 80.1 | 69.2 | 27.1 | 0 | (0 / 42) |
| W16 | 97.0 | 72.0 | 34.8 | 0 | (0 / 58) |
| W17 | 111.2 | 93.4 | 30.4 | 0 | (0 / 39) |
| W18 | 95.1 | 71.5 | 25.3 | 380 | (0 / 24) |
| W19 | 73.0 | 65.9 | 17.4 | 385 | (0 / 29) |
| W20 | 104.7 | 80.8 | 38.7 | 0 | (0 / 45) |
| W21 | 42.7 | 30.4 | 37.2 | 0 | (0 / 50) |
| **W22** | **0** | **0** | 63.3 | 0 | (0 / 74) |
| W23 | 0 | 0 | 33.1 | 0 | (0 / 47) |
| W24 | 0 | 0 | 22.7 | 0 | (0 / 34) |
| W25† | 0 | 0 | 9.8 | 0 | (0 / 13) |

*Purchase (1) is excluded from bidding (primary = 0); count shown is `all_conversions`.
†W25 partial (Jun 15–19).
