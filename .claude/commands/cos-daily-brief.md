---
description: Chief of Staff daily commercial brief — ROAS (Meta + Google), website SKU split, prepaid %, with day-over-day, week-before, month-before, and weekly-trend comparisons. Read-only.
---

Produce the NG EarSafe **daily commercial brief** by dispatching the `chief-of-staff` agent. This is a read-only reporting routine — pull numbers, compute comparisons, interpret, deliver. Never write to any live system.

Let **D** = the most recent complete day (yesterday). Pull every number for these reference periods so the comparisons can be computed:
- **D** (yesterday)
- **D−7** (same weekday, one week ago)
- **D−28** (same weekday, ~one month ago; use the same weekday nearest to one month prior)
- **This week so far** (last 7 days, D−6…D) vs **prior week** (D−13…D−7)

### Metrics to pull (read-only)
1. **Meta Ads ROAS** — Windsor.ai `facebook` connector (spend + purchase_roas), account `2337775109995901`.
2. **Google Ads ROAS** — Windsor.ai `google_ads` connector (spend + conversions_value), account `508-958-3796`.
3. **Blended ROAS** — (Meta value + Google value) ÷ (Meta spend + Google spend).
4. **Website revenue + SKU split** — Shopify ShopifyQL (`run-analytics-query`): total website (D2C) revenue and orders, broken down by product/SKU with each SKU's **% share** of revenue and of units.
5. **Prepaid %** — from Shopify orders: prepaid orders ÷ total orders (and prepaid revenue ÷ total revenue). Treat COD/cash-on-delivery gateway as not-prepaid; everything else (cards, UPI, netbanking, wallets, Shopify Payments) as prepaid.

### The brief (output shape)
```
NG EarSafe — Daily Commercial Brief · <D, e.g. Thu 25 Jun 2026>

ROAS
  Meta:    <D>   (vs wk-ago <D-7>: ±x%) (vs mo-ago <D-28>: ±x%)
  Google:  <D>   (vs wk-ago: ±x%)       (vs mo-ago: ±x%)
  Blended: <D>   (vs wk-ago: ±x%)       (vs mo-ago: ±x%)

WEBSITE (D2C)
  Revenue: ₹<D>  orders <n>   (vs wk-ago: ±x%) (vs mo-ago: ±x%)
  Prepaid %: <x%> of orders / <y%> of revenue  (vs wk-ago: ±pp) (vs mo-ago: ±pp)
  SKU split (rev % | unit %):
    Comm 2.0  <r%> | <u%>
    SafeBuds  <r%> | <u%>
    ES Lite   <r%> | <u%>
    <others>  …

WEEKLY TREND (last 7d vs prior 7d)
  Revenue: ±x%   Blended ROAS: ±x%   Prepaid %: ±pp   Orders: ±x%
  SKU mix shift: <which SKU gained/lost share>

READ
  <3–5 lines: what moved and the likely why; any anomaly (ROAS decay, prepaid drop,
  a SKU sliding); any cross-department gate flag (e.g. SKU running hot but low stock).
  End with the single most important thing to act on today.>
```

### Rules
- **Read + report only.** Do not draft spend changes here — if the read surfaces an action, note it in the READ section and (optionally) queue it to `APPROVALS_QUEUE.md`; never execute.
- Ground every number in the actual pull. If a source is unavailable or a figure looks broken (e.g. UTM/attribution gap), say so explicitly rather than guessing.
- Convert all comparisons to clear ± percentages (or ±percentage-points for rates like prepaid %).
- Flag any number that trips a `COMPANY_STATE.md` §5 gate.
- Keep it to one screen — this is read over morning coffee.
