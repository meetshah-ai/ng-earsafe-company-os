# Automation — 24h Pre-Post Brief Email (instagram-content)

> Standing automation spec. The instagram-content agent assembles a decision-ready brief **24 hours before each scheduled post**, the chief-of-staff agent audits it, and it is delivered to Meet + Riya so they can approve an option before production.
>
> Owner: Riya / Meet · Created: 2026-06-29 · Status: **🟢 LIVE (2026-06-30).** 3 weekly cloud routines + n8n send wired. See §6.

---

## 1. PURPOSE

Close the approval-bottleneck risk named repeatedly in the learning-log (reactive windows closing before approval lands). Every post in the 3×/week skeleton gets a heads-up email **a full day before** its slot, carrying the thesis, the falsifiable expectation, and **three genuinely distinct posting options** — so Meet/Riya make one fast decision instead of reverse-engineering the plan under time pressure.

## 2. TRIGGER (24h before each slot)

Standing skeleton (constitution §5b): Sat 7pm / Tue 8am / Wed 8am IST. The email fires 24h prior:

| Post slot (IST) | Email fires (IST) | Cron (UTC) | Preps |
|---|---|---|---|
| Sat 7:00pm — reactive Reel (Tribes B+D) | **Fri 7:00pm** | `30 13 * * 5` | Saturday reactive trend-ride |
| Tue 8:00am — confessional Reel (Tribes A+E) | **Mon 8:00am** | `30 2 * * 1` | Tuesday confessional |
| Wed 8:00am — educational Carousel (Tribes A+E) | **Tue 8:00am** | `30 2 * * 2` | Wednesday carousel |

IST = UTC+5:30. Three weekly cloud routines, one per slot, identical prompt; the agent infers the target slot from the weekday it runs.

## 3. WHAT EACH RUN DOES

1. Clone the repo; read `COMPANY_STATE.md` → instagram-content `constitution.md` → `tracker.md` → `learning-log.md` → `NG_EarSafe_Brand_Guidelines.md`.
2. Determine the target slot from the current weekday (Fri→Sat reactive / Mon→Tue confessional / Tue→Wed carousel).
3. **instagram-content agent** runs the daily trend test and produces the brief in the §4 structure.
4. **chief-of-staff agent** audits the brief against the §5 checklist; appends a verdict block.
5. Compose the email (§4 layout) and **deliver to Meet + Riya** (mechanism per §6).

## 4. EMAIL STRUCTURE (the template)

```
Subject: [NG IG · 24h] <Slot day> <date> — <post one-liner> — pick an option by <deadline>

THESIS — 2–3 sentences: the bet (tribe × content type × structure), why now, trend/category linkage. Tag [brand] or [category].

EXPECTATIONS — target signal, success threshold, comparison baseline (note where blank + the proxy used), which scale hypothesis (SH-IC-1 / SH-IC-2) it advances.

3 POSTING OPTIONS — three executions that span DIFFERENT content pillars (e.g. one reach/humor play, one education/value play, one product-in-a-wrapper) so Meet/Riya pick a *strategy*, not three captions of one idea. Each must obey the craft law (5s hook · 75% value · share/save payoff · concrete). Each: pillar + label + 6-word angle · format · tribe + SKU (if any) · hook (first 5s) · the 75%-value spine in one line · share/save payoff · caption mode + 1-line direction · visual brief (Higgsfield for video / Canva for overlay+carousel; real product photo only) · audio (if reactive) · target signal (saves/shares/reach) · one-line win/flop.

RECOMMENDED OPTION — one pick + one-line why.

CHIEF-OF-STAFF AUDIT — verdict (CLEAR / FLAG) + notes (see §5).

THE ASK — "Approve an option or name the alternative by <deadline> so production runs today."
POST DATE/TIME — exact IST slot.
```

Recipients: **meetshah@ngearsafe.com, riyashah@ngearsafe.com.**

## 5. CHIEF-OF-STAFF AUDIT CHECKLIST (gate before the email goes out)

- **North-star fit:** does the post move toward ₹65L MRR (open-ear / NG category awareness), not vanity reach?
- **Stock-before-demand:** any SKU named in a CTA is in stock (Comm 2.0 ✅, SafeBuds ✅, ES Lite ✅ as of 2026-06-27; ES OpenMax pre-order only; ES Pro/Pro Mini deferred — no demand).
- **Creative-format / brand-safety:** within palette + vocabulary; clears the stop list; no competitor naming, no celebrity/public-figure reference, no AI-generated product device, no Python for creatives.
- **Skeleton integrity:** the slot matches the standing skeleton; any change is flagged, not silently made.
- **Measurability:** the expectation is falsifiable with a named signal + threshold; baseline-blank is stated honestly with the proxy used.

The CoS audits as an ex-McKinsey D2C growth advisor: reads the brief against the trend of past data + brand equity, then commits to ONE recommendation.
Verdict + recommendation lines:
`CoS AUDIT: CLEAR` or `CoS AUDIT: FLAG — <what + fix>`
`THE ONE RECOMMENDATION: <approve as-is | option X | change to Y> — <one line grounded in a number / brand truth>`

## 6. LIVE CONFIG (resolved 2026-06-30)

- **Cloud routines (3):** `trig_01HtaYyPvytGhxPC5gYZHiaC` (Fri→Sat reactive, `30 13 * * 5`), `trig_01UbGrE7oieugr5iyFn2czsU` (Mon→Tue confessional, `30 2 * * 1`), `trig_017Lg62cJnfD1w3RQ6xCnzBu` (Tue→Wed carousel, `30 2 * * 2`). Manage at claude.ai/code/routines. Model: claude-sonnet-4-6.
- **Repo mirror:** `github.com/meetshah-ai/ng-earsafe-company-os` (private). Each routine clones this. **The cloud agent only sees what is PUSHED** — Claude owns pushing repo updates each session (CEO directive 2026-06-30, DECISION_LOG `CEO-2026-06-30-a`).
- **Send mechanism = n8n (NOT the Gmail connector).** The claude.ai Gmail connector is **draft-only** (`create_draft`, no send tool), so true auto-send is done via n8n: the routine POSTs `{subject, slot, postDateTime, deadline, body}` to the webhook `https://ngearsafe.app.n8n.cloud/webhook/ng-ig-24h-brief`, whose Gmail node sends to Meet + Riya. Workflow: `Automations/ig_24h_brief_webhook_n8n.json`. Pipe tested HTTP 200 on 2026-06-30.
- **Known limitation — freshness:** the routine's "memory" is only as current as the last push. The weekly learning-log/tracker updates must be pushed or the cloud agent drifts. Owned by Claude per the directive above.
- **First instance:** IC-006 brief sent 2026-06-30 ~09:11 IST. Because setup ran overnight it landed same-day rather than 24h-ahead; the recurring routines are correctly 24h-ahead from next week.

## 7. PROVENANCE

First instance authored from the live IC-006 brief (Tue 30 Jun 8am slot) produced by the instagram-content agent on 2026-06-29 — see the dept tracker/learning-log and `APPROVALS_QUEUE.md` rows IC-009 (automation stand-up) + the first-instance email body in `automation_first_instance_IC006_email.md`.
