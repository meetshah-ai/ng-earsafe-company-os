# GA-004 — Shopping SKU mix reweight · manual guide

> **Why manual:** Windsor's `google_ads` connector has **no** action for Shopping product-group bids, campaign priority, or Merchant Center custom labels. Its Google Ads write actions are limited to: create campaign / ad group / RSA · pause+enable campaign / ad group / ad · push, update, remove keywords · push negative keywords · set campaign budget, bidding strategy, target CPA, max CPC, CPC bid ceiling. None of those touch Shopping product groups. This is a Google Ads UI + Merchant Center job.
>
> **Time:** ~20 minutes. **Reversible:** yes, in one click.
> **Learning-phase cost: NONE** — this is not a budget or bid-target change, so the ±20% ratchet and the 2-week no-touch window do not apply. You can do this today, mid-learning-phase, safely.

---

## The problem, in one line

**Your highest-spending SKU has your worst return, and your best-returning SKU is starved.**

| SKU | 30d spend | Share of Shopping | ROAS (platform) | CPA |
|---|---|---|---|---|
| **NG EarSafe Pro** | ₹18,088 | **50.5%** | **11.33×** ← worst | **₹315** |
| EarSafe Comm 2.0 | ₹11,245 | 31.4% | 15.10× | ₹215 |
| **NG x WeHear SafeBuds** | ₹6,488 | **18.1%** | **15.27×** ← best | **₹140** |

*(Sub-account ROAS is platform-claimed and inflated ~49% — use it to **rank** these three against each other, never as an absolute. The ranking is what matters here, and the bias is common across all three.)*

**Goal:** move ~10–15% of Pro's spend share toward SafeBuds, at **flat total budget**. Do not raise the campaign's daily budget — that would trip the ratchet.

---

## Method A — Merchant Center custom label + product-group bids (recommended)

This is the durable fix. It gives you a permanent lever on SKU mix.

### Step 1 — Tag the SKUs in Merchant Center
1. Go to **Merchant Center → Products → All products**.
2. Note the `item_id` of each SKU (these are the ones in your feed):
   - Pro: `shopify_zz_9035015258391_47948013207831`
   - Comm 2.0: `shopify_zz_9926825640215_50399386173719`
   - SafeBuds: `shopify_zz_10049415381271_51380726497559`
3. Go to **Merchant Center → Data sources → your feed → Feed rules**.
4. Create a rule setting **`custom_label_0`**:
   - `custom_label_0 = high_roas` → for the **SafeBuds** and **Comm 2.0** item_ids
   - `custom_label_0 = low_roas` → for the **Pro** item_id
5. **Apply** the rule and wait for the next feed fetch (or **Fetch now**). Confirm the label appears on the product.

> If you'd rather not touch the feed, Shopify's Google channel app can set `custom_label_0` per product directly — same result.

### Step 2 — Subdivide the product group in Google Ads
1. **Google Ads → Campaigns → `SC - All Range` → Products** (left nav; in some UIs it's *Product groups*).
2. Click the **"All products"** row → **✏️ Subdivide**.
3. Subdivide by **Custom label → Custom label 0**.
4. You'll get rows for `high_roas`, `low_roas`, and *"Everything else in All products"*.

### Step 3 — Shift the bid weight
Because `SC - All Range` uses **Smart Bidding (tROAS)**, you do **not** set CPC bids on the groups. Instead you set a **per-group tROAS target**, which is what actually reallocates spend:

| Product group | Action | Why |
|---|---|---|
| `low_roas` (Pro) | **Raise** its tROAS target ~15% above the campaign target | A higher target makes Google bid *less* on it → its spend share falls |
| `high_roas` (SafeBuds, Comm 2.0) | **Lower** its tROAS target ~15% below the campaign target | A lower target makes Google bid *more* → its spend share rises |

Total budget is unchanged; the mix moves.

> ⚠️ **Keep each step ≤15%.** A tROAS target change >15–20% triggers a Smart Bidding learning phase (guide Ch 10) — the exact thing we're avoiding elsewhere. One 15% step, then read.

### Step 4 — Read it
- **Re-pull the Shopping SKU breakdown on 2026-07-27** (14 days — Shopping needs longer than Search to settle).
- **Success:** Pro's share drops from 50.5% toward ~40%, SafeBuds rises from 18.1% toward ~28%, and **blended `SC - All Range` platform ROAS clears 13.5%** (currently 13.25×).
- **Failure:** blended ROAS falls, or total conversions drop. Then **revert the tROAS targets to equal** — one click, no learning-phase cost beyond the re-settle.

---

## Method B — Campaign split (bigger, better, slower)

If you want a real long-term lever rather than a bid nudge:

1. Create a **second Shopping campaign** containing only the SafeBuds + Comm 2.0 SKUs, on its **own budget**.
2. Set `SC - All Range` (now effectively Pro-heavy) to **Low** campaign priority; set the new high-ROAS campaign to **High** priority.
3. Google serves the high-priority campaign first for any query both could match — so your best SKUs win the auction.

**Cost:** a new campaign starts a fresh learning phase (1–2 weeks). **Benefit:** permanent, explicit budget control per SKU tier, instead of fighting one blended tROAS.

**Do not do this before 17 Aug** — you already have the conversion-tracking fix and the tROAS re-baseline to land, and stacking a new campaign's learning phase on top of those makes everything unreadable.

---

## What NOT to do

- ❌ **Don't raise the campaign daily budget** to "fund" SafeBuds. That is a budget change, it trips the ±20% ratchet, and it resets learning. This is a **mix** change at **flat spend**.
- ❌ **Don't exclude Pro entirely.** It still returns 11.33× and produces ₹2.05L/30d. It is the *worst of three good SKUs*, not a loser.
- ❌ **Don't move more than 15% in one step**, and don't do Method A and Method B at the same time.
- ❌ **Don't read the result before 14 days.** Shopping settles slower than Search, and the attribution window is 7 days.

---

## Log it when done

Append to `../learning-log.md`:

```
2026-07-XX | GA-004 SKU mix reweight | HYPOTHESIS: shifting 10–15% of Shopping spend share
from Pro (11.33×) to SafeBuds (15.27×) at flat budget lifts SC-All Range blended platform ROAS
above 13.5× within 14 days | RESULT: <confirmed/rejected/inconclusive> | LEARNING: <…>
```
