# Automation — Twice-Weekly LinkedIn Auto-Publish (linkedin-content)

> Standing automation spec for the LinkedIn lane. The linkedin-content agent drafts posts → Meet approves in `/approvals` → approved posts land in a content **buffer** (Google Sheet) → an **n8n cron** publishes the next approved row to the NG EarSafe LinkedIn page **twice a week (Tue + Fri, 10:00 IST)**.
>
> Owner: Meet · Created: 2026-06-30 · Status: **🟡 SPEC — pipeline not yet deployed.** Workflow file: `Automations/linkedin_twice_weekly_n8n.json`.

---

## 1. PURPOSE

Fix the single biggest problem the traction analysis surfaced: **4 posts in 180 days, followers flat at 1,453.** Cadence — not creative — is the binding constraint. This pipeline guarantees two posts go out every week without a human having to remember to publish, **while keeping the draft-everything spine intact**: nothing posts that Meet hasn't already approved.

## 2. GOVERNANCE MODEL — approved-buffer auto-publish

The whole OS forbids agents from touching live systems except via approval. Publishing to LinkedIn is a live write. So n8n — not the agent — holds the **only** LinkedIn write credential, exactly as n8n holds the only Gmail-send credential for the IG brief pipeline. The flow:

```
linkedin-content agent  →  drafts 2 posts/week to APPROVALS_QUEUE.md
        Meet (/approvals)  →  approves / edits
        approved post copy  →  appended as a row to the BUFFER (Google Sheet)
        n8n cron (Tue+Fri 10:00 IST)  →  pulls next unposted approved row
                                       →  publishes to LinkedIn org 13379517
                                       →  marks the row posted + emails confirmation
```

**Guarantee:** the cron can only ever publish a row that is already `approved` in the buffer. If the buffer has no unposted approved row, the run no-ops and emails a "buffer empty" warning. An unreviewed post can never go live.

## 3. THE BUFFER (Google Sheet)

One sheet, one row per approved post. Columns:

| Column | Meaning |
|---|---|
| `account` | **`company`** (NG page, org `13379517`) or **`founder`** (Meet's personal profile). Blank defaults to `company`. Routes which LinkedIn node publishes the row. |
| `slot_date` | Intended publish date (optional; cron takes the oldest unposted if blank) |
| `pillar` | P1/P2/P3/P4 (constitution §5b) |
| `post_text` | The full post body (no link in body) |
| `media_url` | Optional public image/video URL to attach |
| `first_comment` | Optional link/CTA posted as the first comment after publish |
| `hypothesis` | The bet + named signal |
| `status` | `approved` → set to `posted` by n8n |
| `posted_at` | Timestamp n8n writes on success |
| `post_urn` | The LinkedIn post URN n8n writes back, for performance lookup |

Only rows with `status = approved` and empty `posted_at` are eligible. `/execute-approved` (or Meet) appends rows here when a queue item is approved.

## 4. TRIGGER & SCHEDULE

| Slot | Time (IST) | Cron (UTC) | Default pillar |
|---|---|---|---|
| Tuesday | 10:00 | `30 4 * * 2` | P1 / P3 (authority) |
| Friday | 10:00 | `30 4 * * 5` | P2 (Comm 2.0 / B2B) |

IST = UTC+5:30, so 10:00 IST = 04:30 UTC. Single n8n Schedule Trigger with cron `30 4 * * 2,5`. **Each run publishes two posts — the next approved `company` row AND the next approved `founder` row — so the two accounts each go out twice a week (4 posts/week total).**

## 5. WHAT EACH RUN DOES (n8n workflow — two parallel account branches)

1. **Schedule Trigger** fires (Tue/Fri 04:30 UTC).
2. **Google Sheets — Read** the buffer; rows fan out to both account branches.
3. **Company branch:** Code picks the oldest `account = company` (or blank), `status = approved`, unposted row → IF ready → **LinkedIn Create post as Organization (`13379517`)** → mark row `posted` + write `post_urn` → confirm email. If none → "company buffer empty" email.
4. **Founder branch:** Code picks the oldest `account = founder` unposted approved row → IF ready → **LinkedIn Create post as Person** (Meet's authenticated profile) → mark row `posted` + write `post_urn` → confirm email. If none → "founder buffer empty" email.
5. The two branches are independent: one account's empty buffer never blocks the other.
6. **Link handling:** the money-link goes in `first_comment` (posted after publish), never in `post_text`.

## 6. SETUP (one-time, before the pipeline can publish)

1. **Import** `Automations/linkedin_twice_weekly_n8n.json` into the NG n8n instance (`https://ngearsafe.app.n8n.cloud`).
2. **Connect the LinkedIn credential as Meet.** One credential covers both accounts *if* Meet authenticates as himself and is an **admin of the NG EarSafe page** — then the same token can post as the org (`w_organization_social` / "Community Management" scope, node *Post As = Organization*, ID `13379517`) **and** to his personal feed (`w_member_social`, node *Post As = Person*). If the personal account is a separate login, connect a second LinkedIn credential and point the "Publish as Founder" node at it.
3. **Create the buffer Google Sheet** with the §3 columns (**including `account`**); connect the Google Sheets credential; paste the sheet ID into all four Sheets nodes (read + two updates share the same doc).
4. **Connect the Gmail credential** for the confirmation nodes (reuse the existing IG-pipeline Gmail credential).
5. **Activate** the workflow. Optionally fire a manual test execution with one approved `company` row + one `founder` row before going live.

## 7. KNOWN CONSTRAINTS

- **LinkedIn API scope:** organization posting requires the page's approved API access (Community Management API). If the connected app lacks it, the LinkedIn node will 403 — resolve the app permission before activating. Personal-profile posting needs `w_member_social` on the same (or a second) credential.
- **No analytics for the founder account (LI-DATA-001):** LinkedIn exposes no third-party analytics for personal profiles, so the `founder` branch has no measured baseline — the confirmation email is its only feedback loop and Meet self-reports impressions weekly for the learning loop. The `linkedin_organic` Windsor connector covers the `company` account only.
- **Buffer depth:** keep ≥4 weeks of approved rows **per account** ahead of the cron so neither branch starves. The agent's P1-1 task owns refilling it.
- **No link in body:** the link belongs in `first_comment`, not `post_text` (LinkedIn suppresses reach on outbound links in the body).
- **This file is a spec.** Deploying it (importing the JSON, connecting credentials, activating) is a live action and is out of scope for the agent — it is done by Meet / whoever administers n8n.

## 8. PROVENANCE

Authored 2026-06-30 from the LinkedIn traction analysis (Windsor `linkedin_organic`, Jan–Jun 2026: 4 posts/180 days, followers flat at 1,453, category-POV posts at 6.4–6.58% eng beating hiring posts at 4.6–4.7%). Governance model (approved-buffer auto-publish) and B2B + founder-thought-leadership mandate set by Meet, 2026-06-30. Pattern mirrors the IG 24h-brief n8n send pipeline (`Automations/ig_24h_brief_webhook_n8n.json`), extended from "send email" to "publish approved post."

**Revised 2026-07-01 (Meet):** extended to **two accounts** — the NG EarSafe company page (`13379517`) and Meet's personal founder profile — after the linkedin-content agent's two-account expansion (learning-log 2026-07-01). Workflow now runs two parallel account branches (`Post As = Organization` / `Post As = Person`), routed by a new `account` buffer column; each run publishes one post per account = 4 posts/week. Founder-account analytics gap tracked as LI-DATA-001.
