# Slack ⇆ Chief-of-Staff relay (daily-brief conversation)

Reply in the daily-brief Slack thread → the CoS agent reads the brief, pulls live data if needed,
and answers in the same thread. One-way posting (brief → Slack) is already handled by the GitHub
Action; this service adds the reply direction. **It runs on the read-only vault — it can analyse
and explain, never execute.**

This is the one piece that needs a small always-on server. ~120 lines; deploy in ~15 minutes.

---

## 1. Slack app setup

Use the same Slack app you made for the incoming webhook (or a new one).

- **Bot token:** OAuth & Permissions → Scopes → add `chat:write` → Install to Workspace → copy the
  Bot User OAuth Token (`xoxb-…`).
- **Event subscriptions:** Event Subscriptions → On. Request URL = `https://<your-host>/slack/events`
  (Slack will call it once to verify — the service answers the handshake automatically). Under
  **Subscribe to bot events**, add `message.channels`. Save.
- **Invite the bot** to the brief channel: in Slack, `/invite @NG EarSafe Reports`.
- **Channel ID:** open the brief channel → channel name → About → copy the Channel ID (`C…`).

## 2. Host it

Any always-on host works (Railway, Fly.io, Render **paid** — avoid free tiers that sleep, or the
first Slack reply after idle will time out). Point it at this folder; start command `npm start`.

## 3. Environment variables (set on the host)

| Var | Value |
|---|---|
| `SLACK_SIGNING_SECRET` | Slack app → Basic Information → Signing Secret |
| `SLACK_BOT_TOKEN` | the `xoxb-…` bot token |
| `ANTHROPIC_API_KEY` | an Anthropic API key with access to your workspace |
| `COS_AGENT_ID` | the CoS agent id (`agent_…`) — `ant beta:agents list` |
| `ENVIRONMENT_ID` | `ng-earsafe` environment id (`env_…`) |
| `VAULT_ID` | **`ng-earsafe-readonly` only** (`vlt_…`) — never a write vault |
| `BRIEF_CHANNEL_ID` | the brief channel id (`C…`) — the relay ignores every other channel |

## 4. Test

Post any message in the brief channel (or reply in a brief's thread). The bot replies
"_On it — pulling the numbers…_", then posts the CoS answer in-thread a minute or two later.

---

## What it does and doesn't do

- **One session per thread.** Each Slack thread maps to one CoS session, so a back-and-forth keeps
  context. A new thread starts fresh. (The map is in-memory — a redeploy resets it; the next reply
  just opens a new session, no data lost.)
- **Read-only, inherited.** It attaches the read-only vault, so a Slack conversation has exactly the
  CoS's powers: read data, read the repo, reason. It cannot change a budget or a listing — that
  still lives only in human-started executor sessions.
- **Not an approval interface.** This is Q&A about the brief. Approving/executing actions is a
  separate, more careful build (buttons + an executor agent) — do that only after this is proven.
- **Single instance.** Good for a founding team. If you scale to many concurrent threads, move the
  dedup set + thread map to a shared store (Redis/KV).
