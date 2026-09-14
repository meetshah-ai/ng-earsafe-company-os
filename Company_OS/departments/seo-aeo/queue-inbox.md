# SEO/AEO — Queue Inbox

> **The seo-aeo agent's private draft inbox. It writes here and nowhere else.**
>
> It must **never** touch `Company_OS/APPROVALS_QUEUE.md` — the GitHub MCP write tool replaces a
> file's entire contents (there is no append mode), so a 180KB shared file that many agents write
> is one bad write away from destroying every department's rows (that happened to the Google Ads
> lane on 2026-07-13: the queue went 179,697 bytes → 23 bytes and had to be rebuilt from git
> history).
>
> **`/approvals` merges these rows into the shared queue.** That is a human step, on purpose.
>
> Row format — id `SEO-###`, **continue the sequence: SEO-001…035 and OW-001 are taken.** Every
> row must carry a hypothesis (metric + threshold), the exact change, the data basis (window +
> numbers), and a read plan (D+30 for CTR/rank, D+14 for AEO).
>
> ⚠️ **2026-07-27 sync correction:** SEO-017/018/019 below have TWO entries each — the real,
> executed action (dated 07-21/07-22) and a duplicate/false-premise draft the managed agent
> produced on 07-27 because it was reading a tracker.md that hadn't been told the earlier work
> was done. The duplicates are marked **VOID** and must not be approved. See `tracker.md`'s
> "SYNC CORRECTION" section for the full explanation.
>
> ⚠️ **2026-09-14 sync note:** `tracker.md`'s top-of-file blockquotes (dated 2026-09-09 and
> 2026-09-11) state SEO-020 through SEO-035 are all resolved — 10 explicitly named **EXECUTED
> 2026-09-11** (SEO-020/027/028/029/030/031/032/033/034/035, via `/execute-approved` — see
> `DECISION_LOG.md` for exact article/collection IDs, not re-read here per standing instruction),
> the rest (SEO-021/022/023/024/025/026) covered by the same blanket "all resolved one way or
> another" statement (SEO-023 was already independently confirmed EXECUTED 2026-08-04). This
> session moved all 16 rows below into **Resolved (compact)**, trusting tracker.md's declaration
> rather than re-deriving individual outcomes (per standing instruction — never re-derive what
> tracker.md itself has already stated). SEO-010 was a stale finding (pillar article already
> published 07-31) — no action taken, closed, not carried as a row here. SEO-009 (GA4-vs-GSC
> mismatch) and SEO-011 (blocked, review-rating source) remain open but were never formal rows in
> this file. New this cycle: **SEO-036** (CTR-FIX — SafeBuds PDP "wehear" query-intent mismatch,
> SEO-023's plain rewrite plateaued at D+30+), **SEO-037** (RANK/GAP — ES Lite PDP position fell
> 3.36→6.12, verify no template regression + reinforce title/meta), **SEO-038** (WRITE — "best
> headphones for teaching online" cluster, distinct persona from the WFH page), **SEO-039** (AEO
> — escalate `bone-conduction-headphones-side-effects` past SEO-031, now ~4th of 10 in the
> web_search sweep, the best reading of any monitored query). Next free ID after this run:
> **SEO-040.**

| id | date | dept | action | rationale | data-basis | risk | reversible? | status |
|---|---|---|---|---|---|---|---|---|
| SEO-036 | 2026-09-14 | seo-aeo | CTR-FIX: rewrite title+meta for `/products/ngwehear` (SafeBuds PDP) to lead explicitly with "WeHear" brand name; add a 1-Q FAQ/schema block answering "Is this the official WeHear product?" — distinct from SEO-023 (generic title/meta swap, already executed and plateaued) and SEO-011 (blocked on review-rating schema, not touched here). | HYPOTHESIS: CTR on the "wehear" query 0.17%→2% (matching the PDP's own post-fix blended average) on 1,768 impr/30d ≈ +32 clicks/mo on this query alone. Root cause: "wehear" is 43% of the PDP's total impressions (1,768 of 4,123) but converts ~7x worse than the page's 1.24% blended CTR — a query-intent mismatch (SH-SEO-10 pattern) on a query SEO-023's generic rewrite never specifically addressed. SEO-023 has now had a full D+30+ read (executed 2026-08-04) and PDP CTR sits at exactly 1.24%, identical to before — the generic fix has plateaued. | GSC pull 2026-08-15→2026-09-13 (14,312 rows, reconciled to site total 159,965 impr/2,726 clicks): SafeBuds PDP (base+variant rows combined) impr=4,123 clicks=51 ctr=1.237% pos=5.95; single query "wehear" impr=1,768 clicks=3 ctr=0.1697% pos=7.98. | low | yes | pending |
| SEO-037 | 2026-09-14 | seo-aeo | RANK/GAP: for `/products/open-ear-wireless-headphones-ng-ear-safe-lite` (ES Lite PDP) — (1) verify live title/meta/canonical are unchanged from the last known-good state (ES Lite was not a named target of the 2026-09-11 execute-approved batch, so a shared-template side effect is the leading hypothesis for its position drop); (2) if confirmed unchanged, refresh title+meta+schema re-asserting price (₹1,799)/IPX5/12h+ battery to reclaim its historical top-4 position. | HYPOTHESIS: position recovers to ≤4.0 within 30 days. ES Lite's combined PDP position fell from 3.36 (last logged cycle, 08-17) to 6.12 this cycle — the sharpest move of any tracked PDP, moving it into the CTR-disease band for the first time. Impressions also fell 38% (2,247→1,399) over the same non-contiguous window, while CTR actually improved (0.98%→2.00%), suggesting a ranking-side issue, not a demand-side one. | GSC pull 2026-08-15→2026-09-13: ES Lite PDP (base+variant rows) impr=1,399 clicks=28 ctr=2.001% pos=6.12. Last logged cycle (tracker.md, window 2026-07-18→08-16): impr=2,247 clicks=22 ctr=0.98% pos=3.36. Window is non-contiguous (~4-week gap) — flagged, not treated as a clean week-on-week signal. | low | yes | pending |
| SEO-038 | 2026-09-14 | seo-aeo | WRITE: rewrite+expand the existing thin page targeting "best headphones for teaching online" into a full buying guide (teacher persona, distinct from the WFH/office-worker page already covered by SEO-014/021). H2 outline: (1) why standard earbuds fail 6-8hr teaching days (fatigue, hygiene, call dropouts), (2) what matters for online teaching — mic clarity, ANC, all-day battery, (3) NG EarSafe Comm 2.0 spec+price (primary CTA), (4) OpenWire — budget alternative (secondary CTA), (5) Comm 2.0 vs standard headset vs in-ear comparison table, (6) buying checklist, (7) 6+Q FAQPage. Internal links: Comm 2.0 PDP (primary), WFH page, `best-headphones-for-call-center` (existing, 1.84% CTR, same topical cluster). CTA SKU: Comm 2.0 (₹3,499). | HYPOTHESIS: the existing page is near-invisible (1,898 impr/30d, 2 clicks, 0.11% CTR, pos 10.25) despite meaningful impression volume — a rewrite targeting the teacher persona directly (rather than the generic WFH framing) can lift CTR into the disease-band range and grow position. Revenue estimate ₹3,000–9,000/mo at ramp using Comm 2.0's own AOV (₹3,348 this cycle, GA4) — modest; blog CVR is still near-zero site-wide (0.12% this cycle) so this is authority/funnel value primarily, not a direct-revenue bet. Keyword volume not independently measured (no keyword-volume connector) — flagged, not estimated as fact. | GSC pull 2026-08-15→2026-09-13: page `best-headphones-for-teaching-online` impr=1,898 clicks=2 ctr=0.1054% pos=10.25. GA4 same window, Comm 2.0 PDP: sessions=175, revenue=₹30,131.30, txn=9 (AOV ₹3,348.14). | low | yes | pending |
| SEO-039 | 2026-09-14 | seo-aeo | AEO: escalate `/blogs/open-ear-headphones/bone-conduction-headphones-side-effects` past SEO-031 (direct-answer+FAQ expansion, executed 2026-09-11, only 3 days live) — add a structured "Myths vs Facts" comparison table mirroring the framing Shokz UK's competing article appears to be winning citation with, plus Speakable schema, plus 2 additional internal links from the two largest BAHA-adjacent pages (`/collections/bone-conduction-headphones`, `bone-conduction-vs-hearing-aids`) to consolidate topical authority onto this specific page. | HYPOTHESIS: this page is the closest of any of the 5 monitored AEO queries to winning an AI-style citation — web_search sweep position climbed ~8th (08-10) → ~5th (08-17) → **~4th of 10** this cycle, the best reading logged for any monitored query. A structured comparison table + Speakable schema + consolidated internal links can close the remaining gap within 14 days, faster than waiting on SEO-031 alone (which only just shipped). | web_search 2026-09-14 "bone conduction headphones side effects": NG's own page present at ~4th of 10, behind hearinghealthmatters.org, soundtrace.com, and Shokz UK's "Myths vs Facts" article (uk.shokz.com/blogs/guides/how-safe-are-bone-conduction-headphones). GSC same window: page impr=2,576 clicks=10 ctr=0.3882% pos=14.13. | low | yes | pending |

## Resolved (compact)

> Terminal rows (fully resolved — executed+verdict-in, published+verdict-in, or void — nothing left to act on). Full detail (hypothesis, data-basis, execution record) lives permanently in `Company_OS/DECISION_LOG.md` and `Company_OS/APPROVALS_QUEUE.md`; this is a pointer, not the record.

| id | one-line summary | resolution + date |
|---|---|---|
| SEO-013 | CTR-FIX: Pro Swimming PDP title+meta rewrite + JSON-LD check | EXECUTED 2026-07-21; D+30 MISS (CTR 0.838% vs 3% target, pos slid 4.16→5.37) — closed 2026-08-24. |
| SEO-015 | WRITE: "Shokz Alternatives India" comparison article | PUBLISHED LIVE 2026-07-21; D+30 MISS on clicks (pos reached 5.06, 0 clicks across 5 weeks) — closed 2026-08-24. This cycle (09-14): page now shows 2 clicks/116 impr/pos 7.03 — first clicks ever recorded, noted not re-opened. |
| SEO-017 | INTERNAL LINKS: 3 contextual links into Shokz Alternatives article | EXECUTED 2026-07-21, verified byte-exact — closed. |
| SEO-017-VOID | CTR-FIX duplicate draft on Pro Swimming PDP (false premise, stale tracker read) | VOID 2026-07-27 — superseded by fact, never approved/executed. |
| SEO-018 | CTR-FIX: OpenWire PDP title tag rewrite (OW-001 spec) | EXECUTED 2026-07-22; 2026-08-24 pull shows CTR ~flat, named-query clicks recovered 3→23 — closed. This cycle (09-14): named query "open ear wired earphones" now pos 5.13/28 clicks (up from 3) — continued positive trend, not re-opened. |
| SEO-018-VOID | RANK/GAP duplicate draft on WFH page (false premise, stale tracker read) | VOID 2026-07-27 — superseded by fact, never approved/executed. |
| SEO-019-VOID | WRITE duplicate draft "Shokz Alternatives" article (false premise, stale tracker read) | VOID 2026-07-27 — superseded by fact, never approved/executed. |
| SEO-020 | AEO: rewrite+expand `are-bone-conduction-headphones-safe` for "are open ear headphones safe" | APPROVED 2026-08-04; EXECUTED 2026-09-11 per tracker.md sync note. D+14 read due ~2026-09-25 — too early this cycle (3 days live), NG still absent from web_search sweep as expected. |
| SEO-021 | RANK/GAP: WFH page genuine comparison section | APPROVED 2026-08-04; resolved per tracker.md's 2026-09-11 blanket statement (not individually itemized in the executed-list; trusted per standing instruction). Not independently re-verified against DECISION_LOG.md. |
| SEO-022 | CTR-FIX: `/collections/open-ear-headphones` title/meta rewrite | APPROVED 2026-08-04; resolved per tracker.md's 2026-09-11 blanket statement. Page this cycle: impr=17,623 clicks=206 ctr=1.169% pos=5.65 — still in the disease band; not re-drafted. |
| SEO-023 | CTR-FIX: SafeBuds PDP (ngwehear) title+meta rewrite | EXECUTED 2026-08-04; D+30+ read this cycle shows CTR flat at 1.24% (identical to pre-read) — plateaued, escalated as SEO-036. |
| SEO-024 | WRITE: rewrite/expand running-headphones page | APPROVED 2026-08-04; resolved per tracker.md's 2026-09-11 blanket statement. "best running headphones india" still 0 GSC rows this cycle. |
| SEO-025 | CTR-FIX: escalate open-ear-vs-in-ear page | APPROVED 2026-08-04; resolved per tracker.md's 2026-09-11 blanket statement. Page this cycle: impr=10,117 clicks=5 ctr=0.049% pos=8.32 — still a clear miss; not re-drafted, monitoring continues. |
| SEO-026 | AEO: direct-answer + FAQ fold, same page, "open ear vs in ear headphones" | APPROVED 2026-08-04; EXECUTED 2026-09-11 per tracker.md sync note. web_search 2026-09-14: NG still absent — expected, only 3 days live. D+14 read due ~2026-09-25. |
| SEO-027 | WRITE: ES Lite budget cluster buying guide | APPROVED 2026-08-04; EXECUTED 2026-09-11 per tracker.md sync note. |
| SEO-028 | CTR-FIX: retitle `can-bluetooth-earphones-cause-a-blast` around overheating | EXECUTED 2026-09-11 per tracker.md sync note. |
| SEO-029 | CTR-FIX: rewrite `headset-vs-headphone` title+meta | EXECUTED 2026-09-11 per tracker.md sync note. Page this cycle: impr=3,091 clicks=0 ctr=0.00% pos=8.01 — still 0% CTR; too early post-execution to judge, D+30 will be the real read. |
| SEO-030 | WRITE: Comm 2.0 boom-mic buying guide | EXECUTED 2026-09-11 per tracker.md sync note, **scope changed** — updated existing video-conferencing article instead of publishing a near-duplicate (per tracker.md). |
| SEO-031 | AEO: direct-answer + FAQ expansion, bone-conduction-headphones-side-effects | EXECUTED 2026-09-11 per tracker.md sync note. Escalated further this cycle as SEO-039 (page now ~4th of 10 in the web_search sweep, best reading yet). |
| SEO-032 | CTR-FIX: `/collections/bone-conduction-headphones` title/meta rewrite | EXECUTED 2026-09-11 per tracker.md sync note. Page this cycle: impr=14,869 clicks=189 ctr=1.271% pos=5.49. |
| SEO-033 | WRITE: SafeBuds wireless-earbuds/AI-translation buying guide | EXECUTED 2026-09-11 per tracker.md sync note. |
| SEO-034 | CTR-FIX: retitle `are-noise-cancelling-headphones-safe` around overheating/direct-answer | EXECUTED 2026-09-11 per tracker.md sync note. Page this cycle: impr=1,234 clicks=1 ctr=0.081% pos=6.02 — first click recorded since drafting (was 0 clicks at draft time), too early to credit. |
| SEO-035 | WRITE: OpenWire "wired earphones with mic type c" buying guide | EXECUTED 2026-09-11 per tracker.md sync note. |
