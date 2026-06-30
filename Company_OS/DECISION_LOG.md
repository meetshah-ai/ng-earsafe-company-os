# DECISION LOG — approved/rejected decisions + execution audit trail

> The permanent record. Rows arrive here when Meet approves or rejects an item in `APPROVALS_QUEUE.md`. `/execute-approved` reads rows where `decision = approved` and `executed = no`, performs the live write, then sets `executed = yes` with a result note.
>
> This is the audit trail for the whole AI-first org: who decided what, when, on what basis, and what happened.

**execution states:** `n/a` (rejected) · `no` (approved, awaiting `/execute-approved`) · `yes` (done) · `failed` (attempted, see note).

| id | date-decided | dept | action | decision | approved-by | executed | result / note |
|---|---|---|---|---|---|---|---|
| _example_ | 2026-06-25 | content-growth | Draft + schedule Reel "8 calls, no ear pain" | approved | Meet | no | Awaiting `/execute-approved` |

<!-- New rows appended by /approvals when a human approves/rejects a queue item. -->
| CEO-2026-06-27-a | 2026-06-27 | chief-of-staff | Comm 2.0 + ES Lite supply constraint CLEARED — both in stock, free to scale demand. COMPANY_STATE §2 + §5 updated. | approved | Meet (direct CEO directive) | yes | State-of-record change applied to COMPANY_STATE.md. Unblocks stock-gated rows MA-003/006/009, IC-003/006, SEO-004/006 (see CSO-001). |
| CEO-2026-06-27-b | 2026-06-27 | cro / chief-of-staff | ES OpenMax pre-order test: 100 units (50 Silver + 50 Orange), ships in 10 business days, pre-book ₹2,999 → regular ₹3,499. | approved | Meet (direct CEO directive) | no | Plan-of-record set in COMPANY_STATE §2. Build/launch drafted as OM-001 (Shopify), OM-002 (IG), OM-003 (WhatsApp/email) — awaiting `/execute-approved` + final spec/margin confirmation before live page. |
| CEO-2026-06-27-c | 2026-06-27 | chief-of-staff | North-star pacing set to "reach ₹65L MRR as fast as possible while holding ROAS"; added §5.5 Hypothesis-Testing & Scale doctrine (test → validate → scale, per-department scale bars). | approved | Meet (direct CEO directive) | yes | COMPANY_STATE §1 + new §5.5 applied. Each /morning-loop and /standup now surfaces the per-department test backlog and scale-bar reads. |
| MA-010 | 2026-06-27 | meta-ads | Pause "3D All Feature-Pro" ES Pro ad (deferred SKU, ₹9,488/30d spend). | approved | Meet (CEO confirmed done) | yes | Paused. meta-ads to verify on next weekly pull that spend has actually stopped. |
| CEO-2026-06-27-d | 2026-06-27 | meta-ads | Set Meta Ads quarter KPI = ₹5L spend at ROAS 5–6× over 3 months (~by 2026-09-27); primary mandate = continuous testing of content types/structures/angles across audience mixes; switch kill/scale analysis from 30-day to WEEKLY (week-over-week). | approved | Meet (direct CEO directive) | yes | COMPANY_STATE §5.6 applied. meta-ads constitution/tracker to encode the test program + weekly cadence. |
| CEO-2026-06-27-e | 2026-06-27 | instagram-content | Set Instagram + Facebook organic cadence = 3×/week; every post a live hypothesis test (audience × content type × structure) for reach/engagement; pull Porter IG/FB analytics each cycle and log to content-agent memory. | approved | Meet (direct CEO directive) | yes | COMPANY_STATE §5.6 applied. instagram-content constitution/tracker + memory to encode 3×/week + the test ledger. |
