---
description: Chief of Staff daily commercial brief — ROAS (Meta + Google), website SKU split, prepaid %, and GA4 traffic-source mix (read on a 2-day attribution lag), with day-over-day, week-before, month-before, and weekly-trend comparisons. Read-only.
---

Produce the NG EarSafe **daily commercial brief** by dispatching the `chief-of-staff` agent. This is a read-only reporting routine — pull numbers, compute comparisons, interpret, deliver. Never write to any live system.

Let **D** = the most recent complete day (yesterday). Pull every number for these reference periods so the comparisons can be computed:
- **D** (yesterday)
- **D−7** (same weekday, one week ago)
- **D−28** (same weekday, ~one month ago; use the same weekday nearest to one month prior)
- **This week so far** (last 7 days, D−6…D) vs **prior week** (D−13…D−7)

> **Traffic-attribution day = D−2 (not D).** GA4 session source/medium/channel is read for **D−2**, with a week-over-week comparison to **D−9** (same weekday, also fully baked). Revenue, orders and ad ROAS stay on **D** so the report is still timely — only the GA4 traffic-source mix shifts to D−2. See the **GA4 attribution-lag rule** below for why.

### Metrics to pull (read-only)
1. **Meta Ads ROAS** — Windsor.ai `facebook` connector (spend + purchase_roas), account `2337775109995901`. Reference day **D**.
2. **Google Ads ROAS** — Windsor.ai `google_ads` connector (spend + conversions_value), account `508-958-3796`. Reference day **D**.
3. **Blended ROAS** — (Meta value + Google value) ÷ (Meta spend + Google spend). Reference day **D**.
4. **Website revenue + SKU split** — Shopify ShopifyQL (`run-analytics-query`): total website (D2C) revenue and orders, broken down by product/SKU with each SKU's **% share** of revenue and of units. Reference day **D**.
5. **Prepaid %** — from Shopify orders: prepaid orders ÷ total orders (and prepaid revenue ÷ total revenue). Treat COD/cash-on-delivery gateway as not-prepaid; everything else (cards, UPI, netbanking, wallets, Shopify Payments) as prepaid. Reference day **D**.
6. **Traffic-source mix (GA4)** — Windsor.ai `googleanalytics4`, property `299565498`, fields `session_source_medium`, `session_default_channel_group`, `sessions`, `totalusers`, `purchase_revenue`. **Reference day D−2**, compared to **D−9** (same weekday). Roll up to channel (Paid Social / Paid Search / Paid Shopping / Organic Search / Organic Social / Direct / Referral / Email / WhatsApp / Unassigned). Report the **unattributed share** = sessions whose `session_source_medium` is `(not set)`, `(data not available)`, empty, ends in `/ (not set)`, or contains an unresolved `{{…}}` UTM template. On a D−2 read this should be **< ~3% of sessions**; if it is materially higher, that is a *real* tracking issue worth flagging (not lag).

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

TRAFFIC MIX (GA4 — attribution day D−2, baked; vs D−9 same weekday)
  Sessions: <n>  users <n>   unattributed: <x%>  (vs D−9: ±pp)
  Channel (sessions % | ₹/session):
    Paid Social    <s%> | ₹<rps>   (vs D−9: ±pp)
    Paid Search    <s%> | ₹<rps>
    Paid Shopping  <s%> | ₹<rps>
    Organic Search <s%> | ₹<rps>
    Organic Social <s%> | ₹<rps>
    WhatsApp       <s%> | ₹<rps>
    Direct         <s%> | ₹<rps>
    <others>       …

WEEKLY TREND (last 7d vs prior 7d)
  Revenue: ±x%   Blended ROAS: ±x%   Prepaid %: ±pp   Orders: ±x%
  SKU mix shift: <which SKU gained/lost share>

READ
  <3–5 lines: what moved and the likely why; any anomaly (ROAS decay, prepaid drop,
  a SKU sliding); any cross-department gate flag (e.g. SKU running hot but low stock).
  End with the single most important thing to act on today.>
```

### Rules
- **GA4 attribution-lag rule (why traffic is read on D−2).** GA4 takes ~48h to fully process session source/medium. On a same-day (D) or D−1 read, 55–65% of sessions land in `(not set)`/`(data not available)` and collapse to a proper source/medium once the day matures. Verified 2026-07-16: 14 Jul, matured 2 days, showed **1.2%** unattributed sessions; 15 Jul, only 1 day matured, still showed **58.5%**. Same tag, one day younger. **Do not read the traffic-source mix on D or D−1, and do not flag a fresh-day "(not set)" spike as a tracking break** — it is processing lag. Read D−2, compare to D−9. Same-day GA4 also *over-counts* sessions (14 Jul: 5,587 same-day → 3,271 once baked), so same-day channel splits are wrong in both directions.
- **Read + report only.** Do not draft spend changes here — if the read surfaces an action, note it in the READ section and (optionally) queue it to `APPROVALS_QUEUE.md`; never execute.
- Ground every number in the actual pull. If a source is unavailable or a figure looks broken, say so explicitly rather than guessing. A high unattributed share *on a D−2 read* is a genuine signal (e.g. WhatsApp/BiteSpeed traffic not mapped to a channel, or a broken `{{site_source_name}}` UTM template) — flag it; a high share on a D/D−1 read is just lag.
- Convert all comparisons to clear ± percentages (or ±percentage-points for rates like prepaid % and unattributed %).
- Flag any number that trips a `COMPANY_STATE.md` §5 gate.
- Keep it to one screen — this is read over morning coffee.
