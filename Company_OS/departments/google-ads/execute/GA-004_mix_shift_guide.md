# GA-004 — Shopping SKU mix shift, inside `SC - All Range`

> **Meet's call (2026-07-14): mix change only. No new campaign, no budget change.**
>
> **All of this is done in Google Ads. Nothing in Merchant Center.**
> **Time: ~20 min. Reversible: yes. Budget change: none.**

---

## Two corrections to the record first

1. **`SC - All Range` tROAS is 8.0, not 9.0.** 9.0 is the *Search-26* ad group's target (`ad_group_target_roas = 9`). Shopping's is a campaign-level `target_roas = 8`. Earlier department docs said 9.0 for both — wrong, now fixed.

2. **A dedicated SafeBuds Shopping campaign already exists and is PAUSED:**

   | Campaign | id | Status | tROAS |
   |---|---|---|---|
   | `Shopping \| SafeBuds \| 7th May'26` | `23830060744` | **PAUSED** | 10.0 |
   | `SC - All Range #2` | `23891088227` | PAUSED | 8.0 |

   Not needed for this plan (that would be a *second budget*, which Meet ruled out) — but worth knowing it's sitting there, already built, if the ad-group route disappoints.

---

## Why "just change the product-group bids" doesn't work

`SC - All Range` uses **Target ROAS** — Smart Bidding. On a Smart Bidding campaign, **product-group bids are not editable**. The bid column is greyed out; Google sets bids at auction time. At product-group level you can only **include or exclude**.

**So the mix lever is the ad group, not the product group.** You create a second ad group, split the SKUs between them, and give each ad group its own tROAS target. Same campaign, same daily budget — the money reallocates itself.

Your Search campaign already runs an ad-group-level tROAS (`= 9`), so this pattern is proven in the account.

---

## The problem, in one line

**Your highest-spending SKU has your worst return.**

| SKU | 30d spend | Share | ROAS (platform) | CPA |
|---|---|---|---|---|
| **NG EarSafe Pro** | ₹18,088 | **50.5%** | **11.33×** ← worst | **₹315** |
| EarSafe Comm 2.0 | ₹11,245 | 31.4% | 15.10× | ₹215 |
| **NG x WeHear SafeBuds** | ₹6,488 | **18.1%** | **15.27×** ← best | **₹140** |

*(Platform-claimed, inflated ~49%. Use it to **rank** these three — never as an absolute. The ranking is what matters; the bias is common to all three.)*

One tROAS target can't serve a ₹315-CPA SKU and a ₹140-CPA SKU at once. Google averages them, and Pro eats half the budget because it has the most search volume.

**Goal:** Pro's share 50.5% → ~35%. SafeBuds + Comm 2.0: 49.5% → ~65%. **Total spend unchanged.**

---

## Step 1 — Note the item_ids

From the live feed:

| SKU | item_id |
|---|---|
| **NG x WeHear SafeBuds** | `shopify_zz_10049415381271_51380726497559` |
| **EarSafe Comm 2.0** | `shopify_zz_9926825640215_50399386173719` |
| NG EarSafe Pro | `shopify_zz_9035015258391_47948013207831` |

## Step 2 — Create a second ad group

**Google Ads → `SC - All Range` → Ad groups → ➕ New ad group**

| Setting | Value |
|---|---|
| Ad group name | `Core — SafeBuds + Comm2` |
| Ad group type | Product shopping |
| Target ROAS (ad group) | **7.0** ← see Step 4 |

Rename the existing ad group (`188431133706`) to **`Pro`** so the split is legible later.

## Step 3 — Split the products

**In the new `Core` ad group → Products → "All products" → ✏️ Subdivide → by Item ID:**
- **Include:** SafeBuds + Comm 2.0 item_ids
- **"Everything else in All products" → Excluded** ← don't skip; Pro leaks in otherwise

**In the `Pro` ad group → Products → Subdivide → by Item ID:**
- **Exclude** the SafeBuds + Comm 2.0 item_ids
- Leave Pro (and anything else) included

> Each product now belongs to exactly one ad group. If a SKU sits in both, Google picks arbitrarily and the whole split is meaningless — verify this before you launch.

## Step 4 — Set the ad-group tROAS targets

Campaign target is **8.0**. Move each ad group **≤15%** off it — no further.

| Ad group | tROAS | Effect |
|---|---|---|
| **`Core`** (SafeBuds + Comm2) | **7.0** (−12.5%) | A *lower* target makes Google bid *harder* → share **rises** |
| **`Pro`** | **9.0** (+12.5%) | A *higher* target makes Google bid *softer* → share **falls** |

**Leave the campaign daily budget alone.** Total spend is unchanged; only the split moves.

> ⚠️ **≤15% per step.** A tROAS change beyond ~15–20% triggers a Smart Bidding learning phase (guide Ch 10) — the exact thing we're avoiding. One step, then read. If it works and you want more, take a second 15% step in two weeks.

## Step 5 — Kill tablet while you're in there

**Settings → Devices → Tablet → bid adjustment **−100%****.

Tablet: **₹363/30d, 0 conversions, ₹0 revenue** across every campaign. Free money, and it's the GA-003 finding — Windsor has no API action for device modifiers, so it has to be done here by hand.

## Step 6 — Launch, then don't touch it

The ad-group restructure will cause a **partial re-learn** (Google re-optimises against the new structure). Expect 7–14 days of noisy numbers. **Do not adjust anything during that window.**

---

## The read — 2026-07-28 (14 days)

| Metric | Baseline | Success |
|---|---|---|
| SafeBuds + Comm 2.0 spend share | 49.5% | **≥ 65%** |
| Pro spend share | 50.5% | **≤ 35%** |
| Blended Shopping ROAS (platform) | 13.25× | **≥ 14.5×** |
| **TRUE ROAS** (GA Ads spend ÷ GA4 google/cpc rev) | **9.38×** | **≥ 9.4× — must not fall** |
| Total Shopping spend | ~₹1,800/day | **flat** |

**The TRUE ROAS row decides it.** The mix and the platform ROAS can both look great while the account-level number goes backwards — that is precisely the trap platform-claimed ROAS sets. If TRUE ROAS drops below 9.0, the shift isn't working no matter how good the mix looks.

**If it fails:** set both ad-group targets back to 8.0. One click. You lose two weeks, not money.

---

## What NOT to do

- ❌ **Don't raise the campaign budget.** The marginal-ROAS gate hasn't cleared (last read 0.86–1.43×; floor is 6.0). This is a **mix** change at **flat spend**.
- ❌ **Don't exclude Pro.** It still returns 11.33× and produces ₹2.05L/30d. Worst of three good SKUs, not a loser.
- ❌ **Don't move tROAS more than 15% in one step.**
- ❌ **Don't also un-pause `Shopping | SafeBuds | 7th May'26`.** That's a second budget and a second variable. One experiment at a time.
- ❌ **Don't read before 14 days.** Shopping settles slower than Search, and attribution is 7 days.

---

## Log it when done

Append to `../learning-log.md`:

```
2026-07-14 | GA-004 Shopping mix shift (ad-group split) | HYPOTHESIS: splitting SC-All Range into
two ad groups (Core=SafeBuds+Comm2 @ tROAS 7.0, Pro @ tROAS 9.0, campaign target 8.0) lifts the
Core SKUs' spend share from 49.5% to >=65% and blended Shopping platform ROAS from 13.25x to
>=14.5x within 14 days, at FLAT total spend, WITHOUT account TRUE ROAS falling below 9.0
| READ: 2026-07-28 | RESULT: <...> | LEARNING: <...>
```

Add to SCALE HYPOTHESIS BACKLOG as **SH-GA-12**.
