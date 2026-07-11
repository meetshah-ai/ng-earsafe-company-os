// NG EarSafe — Slack ⇆ Chief-of-Staff relay (daily-brief conversation)
//
// One-way posting (brief -> Slack) is handled by the GitHub Action. THIS service adds the
// other direction: reply in the brief's Slack thread, and the CoS agent answers in-thread.
//
// Flow:  Slack message  ->  verify signature  ->  ack 200 fast  ->  (async) run a CoS
//        managed-agent session with your text  ->  post the agent's answer back to the thread.
//
// The CoS agent reads the brief + live data from its own repo/Windsor doors, so we only pass
// your question. It runs on the SAME read-only vault as the scheduled brief — this conversation
// can analyse and explain, never execute. That safety property is inherited, not re-granted.
//
// Deploy on any always-on host (Railway / Fly / Render paid). Needs the env vars in README.md.

import express from "express";
import crypto from "crypto";

const {
  SLACK_SIGNING_SECRET,
  SLACK_BOT_TOKEN,
  ANTHROPIC_API_KEY,
  COS_AGENT_ID,
  ENVIRONMENT_ID,
  VAULT_ID,                 // ng-earsafe-readonly — NEVER a write vault
  BRIEF_CHANNEL_ID,         // only converse in this channel
  PORT = 3000,
} = process.env;

const ANTHROPIC = "https://api.anthropic.com/v1";
const MA_HEADERS = {
  "x-api-key": ANTHROPIC_API_KEY,
  "anthropic-version": "2023-06-01",
  "anthropic-beta": "managed-agents-2026-04-01",
  "content-type": "application/json",
};

const app = express();
// Capture the raw body — Slack's signature is computed over the exact bytes.
app.use(express.json({ verify: (req, _res, buf) => { req.rawBody = buf; } }));

const seenEvents = new Set();          // dedup Slack retries (in-memory; fine for one instance)
const threadToSession = new Map();     // Slack thread_ts -> CoS session_id (one session per thread)

function verifySlack(req) {
  const ts = req.header("X-Slack-Request-Timestamp");
  const sig = req.header("X-Slack-Signature");
  if (!ts || !sig) return false;
  if (Math.abs(Date.now() / 1000 - Number(ts)) > 300) return false; // 5-min replay window
  const base = `v0:${ts}:${req.rawBody}`;
  const mine = "v0=" + crypto.createHmac("sha256", SLACK_SIGNING_SECRET).update(base).digest("hex");
  return crypto.timingSafeEqual(Buffer.from(mine), Buffer.from(sig));
}

app.post("/slack/events", async (req, res) => {
  // 1) URL verification handshake (once, when you add the endpoint in Slack).
  if (req.body.type === "url_verification") return res.send(req.body.challenge);

  // 2) Verify, then ACK within Slack's 3-second window before doing any slow work.
  if (!verifySlack(req)) return res.status(401).send("bad signature");
  res.status(200).send();

  const e = req.body.event;
  if (!e || e.type !== "message") return;
  if (e.bot_id || e.subtype) return;                 // ignore bots / edits / joins
  if (BRIEF_CHANNEL_ID && e.channel !== BRIEF_CHANNEL_ID) return;
  if (seenEvents.has(req.body.event_id)) return;     // dedup retries
  seenEvents.add(req.body.event_id);
  setTimeout(() => seenEvents.delete(req.body.event_id), 5 * 60 * 1000);

  const thread = e.thread_ts || e.ts;                // reply stays in the same thread
  try {
    await postSlack(e.channel, thread, "_On it — pulling the numbers…_");
    const answer = await askCoS(thread, e.text);
    await postSlack(e.channel, thread, answer || "_(no answer produced)_");
  } catch (err) {
    await postSlack(e.channel, thread, `⚠️ Relay error: ${err.message}`);
  }
});

// Start (or continue) a CoS session for this thread, send the user's text, return the answer.
async function askCoS(thread, text) {
  let sessionId = threadToSession.get(thread);
  if (!sessionId) {
    const r = await fetch(`${ANTHROPIC}/sessions`, {
      method: "POST", headers: MA_HEADERS,
      body: JSON.stringify({
        agent: { type: "agent", id: COS_AGENT_ID },
        environment_id: ENVIRONMENT_ID,
        vault_ids: [VAULT_ID],
        title: "Slack — daily brief Q&A",
      }),
    });
    if (!r.ok) throw new Error(`session create ${r.status}: ${await r.text()}`);
    sessionId = (await r.json()).id;
    threadToSession.set(thread, sessionId);
  }

  const sent = await fetch(`${ANTHROPIC}/sessions/${sessionId}/events`, {
    method: "POST", headers: MA_HEADERS,
    body: JSON.stringify({
      events: [{
        type: "user.message",
        content: [{ type: "text",
          text: `A teammate is asking about today's commercial brief (in Company_OS/briefs/). ` +
                `Read the latest brief and pull live data as needed, then answer concisely for Slack. ` +
                `Question: ${text}` }],
      }],
    }),
  });
  if (!sent.ok) throw new Error(`send ${sent.status}: ${await sent.text()}`);

  return await pollForAnswer(sessionId);
}

// Poll the session's events until it goes idle, collecting the agent's reply. CoS answers that
// require data pulls can take a couple of minutes — that's why this runs on a persistent host.
async function pollForAnswer(sessionId, timeoutMs = 4 * 60 * 1000) {
  const started = Date.now();
  const seen = new Set();
  let answer = "";
  while (Date.now() - started < timeoutMs) {
    await new Promise((r) => setTimeout(r, 2500));
    const r = await fetch(`${ANTHROPIC}/sessions/${sessionId}/events`, { headers: MA_HEADERS });
    if (!r.ok) continue;
    const events = (await r.json()).data || [];
    let idle = false;
    for (const ev of events) {
      if (ev.type === "agent.message" && !seen.has(ev.id)) {
        seen.add(ev.id);
        for (const b of ev.content || []) if (b.type === "text") answer += b.text;
      }
      // Idle with a terminal stop_reason = the turn is done (not merely waiting between tools).
      if (ev.type === "session.status_idle" && ev.stop_reason?.type !== "requires_action" && !seen.has(ev.id)) {
        seen.add(ev.id); idle = true;
      }
    }
    if (idle && answer) return answer;
  }
  return answer || "_(the agent is still working — try again in a moment)_";
}

async function postSlack(channel, thread_ts, text) {
  await fetch("https://slack.com/api/chat.postMessage", {
    method: "POST",
    headers: { authorization: `Bearer ${SLACK_BOT_TOKEN}`, "content-type": "application/json" },
    body: JSON.stringify({ channel, thread_ts, text }),
  });
}

app.get("/", (_req, res) => res.send("NG EarSafe Slack relay: up"));
app.listen(PORT, () => console.log(`relay listening on :${PORT}`));
