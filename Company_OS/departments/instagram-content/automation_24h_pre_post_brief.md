# Automation — 24h Pre-Post Brief Email (instagram-content)

> Standing automation spec. The instagram-content agent assembles a decision-ready brief **24 hours before each scheduled post**, the chief-of-staff agent audits it, and it is delivered to Meet + Riya so they can approve an option before production.
>
> Owner: Riya / Meet · Created: 2026-06-29 · Status: **STAGED — awaiting 2 unblocks (GitHub repo URL + send mechanism). See §6.**

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

3 POSTING OPTIONS — three distinct executions (not 3 captions of one idea). Each: label + 6-word angle · format · tribe + SKU · hook (0–3s) · caption mode + 1-line direction · visual brief (Higgsfield for video / Canva for overlay+carousel; real product photo only) · audio (if reactive) · target signal · one-line win/flop.

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

Verdict line: `CoS AUDIT: CLEAR` or `CoS AUDIT: FLAG — <what + fix>`.

## 6. OPEN UNBLOCKS (why this is STAGED, not LIVE)

1. **Cloud-routine repo source.** Routines run in Anthropic cloud and clone from a **GitHub URL**; this repo has no remote. Needs the repo pushed to a private GitHub repo (decision: push full Company_OS — taken 2026-06-29). Blocked locally on GitHub auth (`gh` not installed, no PAT/SSH). → user provides repo URL / token.
2. **Send mechanism.** The connected claude.ai Gmail connector is **draft-only** (`create_draft`; no send). Literal auto-send isn't possible through it. Two resolutions:
   - **(a) Auto-draft:** routine creates a fully-composed, CoS-audited Gmail draft to Meet+Riya 24h prior; Meet clicks Send (one click, zero composition).
   - **(b) True auto-send via n8n:** routine POSTs the brief to an n8n webhook whose email node sends to both. Uses existing n8n plumbing (`Automations/daily_report_n8n.json`). Needs a webhook + email node set up once.

## 7. PROVENANCE

First instance authored from the live IC-006 brief (Tue 30 Jun 8am slot) produced by the instagram-content agent on 2026-06-29 — see the dept tracker/learning-log and `APPROVALS_QUEUE.md` rows IC-009 (automation stand-up) + the first-instance email body in `automation_first_instance_IC006_email.md`.
