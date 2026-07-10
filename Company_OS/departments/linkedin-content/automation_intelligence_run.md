# Automation — LinkedIn Intelligence Run (the scheduled Claude brain)

> **This is the missing trigger.** `content_intelligence_engine.md` describes the LEARN→GENERATE loop; `linkedin_smart_cycle_n8n.json` emails + posts the result. **This file is what actually runs the Claude intelligence on a schedule** and lands its output in the Proposals sheet so the emailer has something to send. Without this, the smart-cycle workflow just emails "⚠ nothing generated."
>
> Owner: Meet · Created: 2026-07-01 · Status: **🟡 SPEC — cloud routine + ingest webhook not yet registered.** Mirrors the IG lane's `../instagram-content/automation_24h_pre_post_brief.md` (proven cloud-routine → n8n pattern).

---

## 1. THE FULL LOOP (where this fits)

```
[THIS FILE]  Claude cloud routine (Mon eve + Thu eve)
   → runs the linkedin-content agent: LEARN (perf read + S1–S5 signal scan) → GENERATE 3 company options + 1 founder post, each with pillar + angle + format + creative-asset call
   → POSTs the JSON payload to the n8n INGEST webhook
        → n8n appends a row to the Proposals sheet as status='proposed'
[linkedin_smart_cycle_n8n.json A]  Tue/Fri 08:30 IST → emails the 3 options + founder post
        → Meet clicks one → auto-posts to company page, founder post copy-pasted
[content_intelligence_engine.md 2d]  Day-2/3 → log result → feeds next run's LEARN
```

The **intelligence** (deciding what/angle/pillar/asset from live trends) is steps 1–2 here. Everything downstream is deterministic plumbing.

## 2. SCHEDULE

Run the evening **before** each posting slot so the proposal is waiting when the 08:30 emailer fires:

| Intelligence run (IST) | Cron (UTC) | Feeds slot |
|---|---|---|
| **Monday 19:00** | `30 13 * * 1` | Tuesday 10:00 |
| **Thursday 19:00** | `30 13 * * 4` | Friday 10:00 |

Registered as **two Claude cloud routines** at `claude.ai/code/routines` (same mechanism as the IG lane's 3 routines). Each clones the repo, runs the prompt in §3, POSTs to the ingest webhook.

## 3. THE ROUTINE PROMPT (what each run executes)

```
You are the NG EarSafe linkedin-content agent. Produce ONE cycle's LinkedIn proposal.

READ FIRST (in order):
- Company_OS/COMPANY_STATE.md
- Company_OS/departments/linkedin-content/constitution.md
- Company_OS/departments/linkedin-content/content_intelligence_engine.md   ← the loop + the S1–S5 scan + the creative-asset decision
- Company_OS/departments/linkedin-content/tracker.md
- Company_OS/departments/linkedin-content/learning-log.md   ← the LAST post's result is your primary input

DO:
1. LEARN — (i) pull the last company post's numbers via Windsor linkedin_organic (acct 13379517); (ii) run the SIGNAL SCAN (engine §2a-ii) across all five buckets S1–S5 using WebSearch/WebFetch. Capture each signal with a source + date. Keep only signals that map to a real NG product/category truth. Note any empty bucket honestly — do not invent trends.
2. DECIDE — pick the 1–2 strongest signals. For the company page, generate 3 DISTINCT options (safe/proven · revenue/B2B · reach swing), each with: signal(S#)+source, hook, thesis (why THIS wins this week), format, tribe, full body, CREATIVE-ASSET CALL (none/image/document/video + brief per engine §2b), predicted signal, first_comment. Generate 1 founder post (first-person, proven register, anchored on something real).
3. GATE — verify stock, brand stop-list (flag any competitor/celebrity), no money-link in body, no unverified public number.
4. OUTPUT — emit the payload as JSON matching the Proposals sheet columns (§4), then POST it to the ingest webhook (§4). Also append the cycle's hypothesis to learning-log.md as OPEN.

Be a paid-media/organic strategist defending each option's thesis with a number or a scanned signal — not generic 'LinkedIn voice'.
```

## 4. OUTPUT CONTRACT → INGEST WEBHOOK

The run POSTs this JSON to `https://ngearsafe.app.n8n.cloud/webhook/linkedin-ingest` (the ingest node added to the smart-cycle workflow). n8n appends it to the **Proposals** sheet as `status = proposed`:

```json
{
  "cycle_id": "LI-CYC-2026-07-07",
  "slot_date": "2026-07-07",
  "status": "proposed",
  "optA_hook": "", "optA_thesis": "", "optA_format": "", "optA_tribe": "",
  "optA_body": "", "optA_first_comment": "", "optA_media_url": "",
  "optA_signal": "S1 · WHO safe-listening 2026-07-02",
  "optA_asset": "none",
  "optB_...": "...(revenue/B2B option)...",
  "optC_...": "...(reach-swing option)...",
  "founder_hook": "", "founder_body": "", "founder_signal": "", "founder_asset": ""
}
```

(`opt*_signal` and `opt*_asset` are new columns — add them to the Proposals sheet + the email template so the intelligence is visible on approval.)

## 5. SETUP (one-time, human steps — this is why status is 🟡)

1. **Add the ingest webhook to n8n** — a `Webhook (POST /linkedin-ingest)` → `Google Sheets Append (Proposals)` path. (Two nodes; can be added to `linkedin_smart_cycle_n8n.json` or a tiny separate workflow.)
2. **Register the two cloud routines** at `claude.ai/code/routines` with the §2 crons and the §3 prompt, pointed at the repo mirror (`github.com/meetshah-ai/ng-earsafe-company-os`). *The routine only sees what's pushed — push the engine/constitution/tracker updates or the brain runs stale* (same rule as the IG lane).
3. **Add the `opt*_signal` / `opt*_asset` columns** to the Proposals sheet + the email template.
4. **Test:** trigger one routine manually → confirm a `proposed` row lands → confirm the Tue/Fri emailer sends it.

## 6. CREATIVE ASSETS IN THE LOOP

When an option's asset call ≠ `none`, the run writes the brief into the payload but does **not** auto-generate — asset generation stays draft-first. On approval, the asset is produced (Higgsfield for visuals / Canva for carousels+overlays, per `[[ng-creative-tooling-rules]]`; real product photo only, never AI-generated device) and its URL dropped into `opt*_media_url` before the post publishes. For a first pass, text-only (`asset: none`) options can ship immediately while the asset pipeline is wired.

## 7. PROVENANCE

Authored 2026-07-01 to fix the gap Meet flagged: the Claude intelligence layer was described (`content_intelligence_engine.md`) but had **no scheduled trigger and no path into the Proposals sheet**, so the smart-cycle emailer had nothing to send. Adds (a) the structured S1–S5 signal scan + creative-asset decision to the engine, (b) this scheduled run spec, (c) the ingest webhook contract. Pattern mirrors the live IG 24h-brief cloud-routine → n8n pipeline.
