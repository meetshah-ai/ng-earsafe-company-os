# Slack ⇆ Claude — setup checklist (newbie-friendly)

The loop has **two directions**. Direction A already works once you add a webhook; Direction B
needs the small server in this folder deployed. Do them in order — A is 5 min, B is ~20 min.

Your live IDs (already filled into `.env.example`, no need to look them up):
- Chief-of-Staff agent: `agent_01KWvWKXHRrCBRQsy33Pbfck`
- Environment: `env_01XyAqVA96XbV6YDd2YpeyPB`
- Vault (READ-ONLY): `vlt_011Cct4FFqcsnrcEDFfzHCXo`

---

## Direction A — briefs post INTO Slack (agent → Slack)

The GitHub Action `.github/workflows/slack-notify.yml` already does this. It just needs a webhook.

- [ ] Slack → https://api.slack.com/apps → **Create New App** → *From scratch* → name it
      "NG EarSafe Reports", pick your workspace.
- [ ] Left menu → **Incoming Webhooks** → toggle **On** → **Add New Webhook to Workspace** →
      choose your `#daily-brief` channel → **Allow**. Copy the webhook URL (`https://hooks.slack.com/…`).
- [ ] GitHub → your repo → **Settings → Secrets and variables → Actions → New repository secret**:
      name `SLACK_WEBHOOK_BRIEF`, value = the webhook URL. Save.
- [ ] (Optional) repeat for `SLACK_WEBHOOK_CONTENT` if you want content suggestions in another channel.
- [ ] For SEO/AEO: repeat with the `#seo-aeo` channel → webhook → GitHub secret `SLACK_WEBHOOK_SEO`.
- [ ] Test: next time the 07:00 brief commits (or push any edit under `Company_OS/briefs/`), it posts.

Done → briefs land in Slack automatically. Now make them talk back.

## Direction B — reply in Slack, Claude answers (Slack → agent → Slack)

Reuse the SAME Slack app from Direction A.

### B1. Slack app permissions & tokens
- [ ] **OAuth & Permissions** → *Scopes* → *Bot Token Scopes* → add **`chat:write`**.
- [ ] Same page → **Install to Workspace** (re-install if it asks) → copy **Bot User OAuth Token** (`xoxb-…`).
- [ ] **Basic Information** → copy the **Signing Secret**.
- [ ] In Slack, open your brief channel → type `/invite @NG EarSafe Reports` so the bot can read/post.
- [ ] Brief channel → click its name → **About** → copy the **Channel ID** (`C…`).
- [ ] Repeat the invite + Channel-ID copy for every other routed channel (e.g. `#seo-aeo`), then
      paste each real ID into `routes.json` in place of its `C_FILL_*` placeholder — `routes.json`
      already has a `seo-aeo` agent entry and a `C_FILL_SEO` channel slot waiting to be filled.

### B2. Anthropic API key
- [ ] https://console.anthropic.com → **API Keys** → **Create Key** → copy it (`sk-ant-…`).
      (This is what pays for the Slack conversations — same billing as your scheduled agents.)

### B3. Deploy the server (Railway = easiest for a newbie)
- [ ] Push this repo to GitHub if it isn't already.
- [ ] https://railway.app → sign in with GitHub → **New Project → Deploy from GitHub repo** → pick this repo.
- [ ] Settings → **Root Directory** = `Company_OS/platform/slack-relay`.
- [ ] Settings → **Start Command** = `npm start` (auto-detected usually).
- [ ] **Variables** tab → add all 7 from `.env.example` (4 secrets you gathered + 3 pre-filled IDs).
- [ ] Deploy. Settings → **Networking → Generate Domain** → copy the URL (`https://….up.railway.app`).

### B4. Point Slack at the server
- [ ] Slack app → **Event Subscriptions** → toggle **On**.
- [ ] **Request URL** = `https://<your-railway-domain>/slack/events` → wait for the green **Verified**.
- [ ] **Subscribe to bot events** → add **`message.channels`** → **Save Changes**.
- [ ] If Slack asks to reinstall the app, do it.

### B5. Test the loop
- [ ] In the brief channel, reply in a brief's thread (or post any message):
      *"What's our Meta ROAS this week and what should we cut?"*
- [ ] Bot replies "_On it — pulling the numbers…_", then the CoS answer lands in-thread in 1–2 min.

---

## Safety (already true by design — nothing to configure)
- The relay attaches the **read-only vault**, so a Slack chat can read data + reason, but **cannot**
  change a budget, listing, or anything live. Execution still only happens in `/execute-approved`.
- Each Slack **thread** = one CoS conversation (keeps context). A new thread starts fresh.
- Single instance is fine for a founding team. Only revisit if you get many simultaneous threads.
