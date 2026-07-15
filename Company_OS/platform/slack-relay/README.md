# Slack ⇆ Managed-Agent convening relay (Phase 2)

Reply in any agent's Slack channel and that channel's **home agent** answers in-thread —
reads its latest report, pulls live data, revises a draft if you ask. Prefix a message with
one or more `@aliases` to **convene** other agents into the thread; each replies under its
own name. Address `@cos` with an audit verb to get a Chief-of-Staff **decision verdict**.

One-way posting (report → channel) is the GitHub Action; this service adds the reply
direction + convening. **It runs on the read-only vault — it can analyse, explain, and revise
a draft, never approve or go live.**

~230 lines, one small always-on server. Routing lives in `routes.json`.

---

## What you can type

| In a channel… | What happens |
|---|---|
| `what's driving the ROAS dip this week?` | The channel's **home** agent answers (Meta in #meta-ads, etc.) |
| `@cos audit — is +20% on SafeBuds right given the EBITDA floor?` | Chief of Staff judges the **decision**, ends with `CoS VERDICT: …` |
| `@cos @google-ads does this conflict with the Google budget?` | Both agents answer in-thread, each under its own name |
| `revise MA-027 to a 15% cut` (in #meta-ads) | Meta agent edits its **draft** row in queue-inbox.md and commits |

A thread keeps context per agent (each `thread × agent` is its own session). A new thread
starts fresh. The in-memory session map resets on redeploy — the next reply just opens a new
session, no data lost.

---

## 1. routes.json (once)

`cp routes.example.json routes.json`, then fill the five `C_FILL_*` keys with your real
Slack channel IDs (Slack → open the channel → its name → **About** → **Channel ID**, `C…`).
The agent IDs are already filled in. Commit `routes.json` — IDs are not secrets; the
read-only vault is the safety net.

## 2. Slack app (reuse the one from Phase 1)

- **OAuth & Permissions → Bot Token Scopes:** add `chat:write`, `channels:history` (public
  channels) and/or `groups:history` (private channels) → **Install to Workspace** → copy the
  **Bot User OAuth Token** (`xoxb-…`).
- **Basic Information:** copy the **Signing Secret**.
- **Invite the bot** into every routed channel: `/invite @NG EarSafe Reports`.
- **Event Subscriptions:** toggle **On** → Request URL `https://<your-host>/slack/events`
  (the service answers the verification handshake automatically) → under **Subscribe to bot
  events** add `message.channels` (public) and/or `message.groups` (private) → **Save**.

## 3. Host it

Any always-on host (Railway / Fly / Render **paid** — avoid free tiers that sleep, or the
first reply after idle times out). Root directory = this folder; start command `npm start`.

## 4. Environment variables (`.env.example`)

| Var | Value |
|---|---|
| `SLACK_SIGNING_SECRET` | Slack app → Basic Information → Signing Secret |
| `SLACK_BOT_TOKEN` | the `xoxb-…` bot token |
| `ANTHROPIC_API_KEY` | Anthropic API key with access to your workspace |
| `ENVIRONMENT_ID` | `ng-eaarsafe` (`env_…`) — already in `.env.example` |
| `VAULT_ID` | **`ng-earsafe-readonly` only** (`vlt_…`) — never a write vault |

## 5. Test

In a routed channel: `@cos are we on pace for the month?` → the bot posts
"_On it — Chief of Staff is looking…_", then the answer lands in-thread in a minute or two.

---

## What it does and doesn't do

- **Read-only, inherited.** Every session attaches the read-only vault, so a Slack
  conversation has exactly the agents' powers: read data, read the repo, reason, revise a
  *draft* row. It cannot change a budget or a listing — live writes stay in human-started
  `/execute-approved` sessions.
- **Not an approval interface.** Buttons to approve/reject/execute a drafted row are Phase 3
  (they cross into the live-write path) — build only after this is proven.
- **Single instance.** Fine for a founding team. To scale to many concurrent threads, move
  the dedup set + session map to a shared store (Redis/KV).
