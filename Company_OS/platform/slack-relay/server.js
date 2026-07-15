// NG EarSafe — Slack ⇆ Managed-Agent convening relay (Phase 2)
//
// One-way posting (agent report -> Slack channel) is handled by the GitHub Action
// (.github/workflows/slack-notify.yml). THIS service adds the reply direction AND the
// multi-agent convening model:
//
//   • Every channel has a HOME agent (routes.json → channels[<id>].home). Reply in the
//     channel with no @mention and the home agent answers, keeping thread context.
//   • Prefix a message with one or more @aliases (routes.json → agents[*].aliases) to
//     summon those agents into the thread instead. Each runs its OWN session on the
//     thread and replies under its own name. e.g. in #meta-ads:
//       "@cos @google-ads does scaling SafeBuds +20% conflict with the Google budget?"
//   • Address @cos with an audit verb (audit / review / verdict / gut-check) and the
//     Chief of Staff (Opus 4.8) is seeded to judge the DECISION in the thread — not the
//     arithmetic — against the north star, and returns a clear VERDICT.
//
// SAFETY (inherited, not re-granted): every session runs on the read-only vault, so a
// Slack conversation — however many agents are convened — can read data, reason, and
// revise a DRAFT row in a department's queue-inbox.md, but CANNOT approve or push
// anything live. Going live still happens only in human-run /execute-approved.
//
// Deploy on any always-on host (Railway / Fly / Render paid). Env vars in .env.example;
// agent + channel routing in routes.json (copy routes.example.json).

import express from "express";
import crypto from "crypto";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const {
  SLACK_SIGNING_SECRET,
  SLACK_BOT_TOKEN,
  ANTHROPIC_API_KEY,
  ENVIRONMENT_ID,
  VAULT_ID,                 // ng-earsafe-readonly — NEVER a write vault
  PORT = 3000,
} = process.env;

// ── Routing table ────────────────────────────────────────────────────────────
const ROUTES = JSON.parse(fs.readFileSync(path.join(__dirname, "routes.json"), "utf8"));
const AGENTS = ROUTES.agents;                 // key -> {id, display, icon, aliases}
const CHANNELS = ROUTES.channels;             // slack channel id -> {home, reportDir, queue?}
const AUDIT_VERBS = (ROUTES.convene?.auditVerbs || ["audit", "review", "verdict", "gut-check"]);

// alias (lowercased) -> agent key
const ALIAS_TO_AGENT = {};
for (const [key, a] of Object.entries(AGENTS)) {
  ALIAS_TO_AGENT[key.toLowerCase()] = key;
  for (const alias of a.aliases || []) ALIAS_TO_AGENT[alias.toLowerCase()] = key;
}

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
const sessionMap = new Map();          // `${thread}::${agentKey}` -> Managed-Agent session id

function verifySlack(req) {
  const ts = req.header("X-Slack-Request-Timestamp");
  const sig = req.header("X-Slack-Signature");
  if (!ts || !sig) return false;
  if (Math.abs(Date.now() / 1000 - Number(ts)) > 300) return false; // 5-min replay window
  const base = `v0:${ts}:${req.rawBody}`;
  const mine = "v0=" + crypto.createHmac("sha256", SLACK_SIGNING_SECRET).update(base).digest("hex");
  return crypto.timingSafeEqual(Buffer.from(mine), Buffer.from(sig));
}

// Parse leading @aliases off the message. Returns { agentKeys:[...], text, addressed:bool }.
// "@cos @google-ads is X right?" -> { agentKeys:["cos","google-ads"], text:"is X right?" }
function parseAddress(raw) {
  const tokens = raw.trim().split(/\s+/);
  const agentKeys = [];
  let i = 0;
  for (; i < tokens.length; i++) {
    const t = tokens[i].replace(/^@/, "").replace(/[:,]$/, "").toLowerCase();
    if (tokens[i].startsWith("@") && ALIAS_TO_AGENT[t]) {
      const key = ALIAS_TO_AGENT[t];
      if (!agentKeys.includes(key)) agentKeys.push(key);
    } else break;
  }
  return { agentKeys, text: tokens.slice(i).join(" "), addressed: agentKeys.length > 0 };
}

app.post("/slack/events", async (req, res) => {
  // 1) URL verification handshake (once, when you add the endpoint in Slack).
  if (req.body.type === "url_verification") return res.send(req.body.challenge);

  // 2) Verify, then ACK within Slack's 3-second window before doing any slow work.
  if (!verifySlack(req)) {
    console.warn("DROP: bad signature (check SLACK_SIGNING_SECRET)");
    return res.status(401).send("bad signature");
  }
  res.status(200).send();

  const e = req.body.event;
  console.log(`event: type=${e?.type} subtype=${e?.subtype || "-"} channel=${e?.channel || "-"} bot=${e?.bot_id ? "yes" : "no"}`);
  if (!e || e.type !== "message") return;
  if (e.bot_id || e.subtype) return;                 // ignore bots / edits / joins
  const channelCfg = CHANNELS[e.channel];
  if (!channelCfg) { console.log(`DROP: channel ${e.channel} not in routes.json`); return; }
  console.log(`routing message in ${e.channel} (home=${channelCfg.home})`);
  if (seenEvents.has(req.body.event_id)) return;     // dedup retries
  seenEvents.add(req.body.event_id);
  setTimeout(() => seenEvents.delete(req.body.event_id), 5 * 60 * 1000);

  const thread = e.thread_ts || e.ts;                // reply stays in the same thread

  // Decide which agent(s) answer: explicit @mentions, else the channel's home agent.
  const { agentKeys, text, addressed } = parseAddress(e.text || "");
  const targets = addressed ? agentKeys : [channelCfg.home];
  const question = addressed ? text : (e.text || "");

  try {
    const names = targets.map((k) => AGENTS[k].display).join(", ");
    await postSlack(e.channel, thread, `_On it — ${names} ${targets.length > 1 ? "are" : "is"} looking…_`);
    // Run each convened agent (sequentially; typical use is 1–2).
    for (const agentKey of targets) {
      const answer = await askAgent(agentKey, channelCfg, e.channel, thread, question);
      const a = AGENTS[agentKey];
      await postSlack(e.channel, thread, `${a.icon || "🤖"} *${a.display}*\n${answer || "_(no answer produced)_"}`);
    }
  } catch (err) {
    await postSlack(e.channel, thread, `⚠️ Relay error: ${err.message}`);
  }
});

// Start (or continue) this agent's session for this thread, send the text, return the answer.
async function askAgent(agentKey, channelCfg, channel, thread, text) {
  const agent = AGENTS[agentKey];
  const sessionKey = `${thread}::${agentKey}`;
  let sessionId = sessionMap.get(sessionKey);
  const isNew = !sessionId;

  if (isNew) {
    const r = await fetch(`${ANTHROPIC}/sessions`, {
      method: "POST", headers: MA_HEADERS,
      body: JSON.stringify({
        agent: { type: "agent", id: agent.id },
        environment_id: ENVIRONMENT_ID,
        vault_ids: [VAULT_ID],
        title: `Slack — ${agent.display} — ${channel}`,
      }),
    });
    if (!r.ok) throw new Error(`session create ${r.status}: ${await r.text()}`);
    sessionId = (await r.json()).id;
    sessionMap.set(sessionKey, sessionId);
  }

  // Seed a freshly-summoned agent with the thread's backstory so it audits the ACTUAL
  // recommendation under discussion. Continuing sessions already hold their own history.
  let backstory = "";
  if (isNew) {
    const history = await fetchThread(channel, thread);
    if (history) backstory = `Thread so far:\n${history}\n\n`;
  }

  const preamble = buildPreamble(agentKey, channelCfg, text);
  const body = `${backstory}${preamble}\n\nMessage from a teammate: ${text}`;

  const sent = await fetch(`${ANTHROPIC}/sessions/${sessionId}/events`, {
    method: "POST", headers: MA_HEADERS,
    body: JSON.stringify({
      events: [{ type: "user.message", content: [{ type: "text", text: body }] }],
    }),
  });
  if (!sent.ok) throw new Error(`send ${sent.status}: ${await sent.text()}`);

  return await pollForAnswer(sessionId);
}

// The instruction that frames each agent's turn. The CoS gets a decision-audit brief
// when addressed with an audit verb; specialists get a be-concise-for-Slack instruction.
function buildPreamble(agentKey, channelCfg, text) {
  const reportDir = channelCfg.reportDir;
  const isAudit = AUDIT_VERBS.some((v) => new RegExp(`\\b${v}\\b`, "i").test(text));

  if (agentKey === "cos" && isAudit) {
    return (
      "You are auditing the DECISION in this thread — not the arithmetic; assume the numbers are right. " +
      `The recommendation comes from the ${channelCfg.home} desk (its latest report is in ${reportDir}/ and its ` +
      "draft rows are in its queue-inbox.md). Judge: (1) does the recommendation actually make sense? " +
      "(2) what second-order or cross-department impact does the originating agent structurally NOT see — brand, " +
      "other channels, inventory, the 5–6% EBITDA floor, the ₹65L MRR / 50-50 north star? End with a clear line " +
      "beginning exactly 'CoS VERDICT: ' followed by endorse / modify / reject and the single reason. Answer concisely for Slack."
    );
  }
  if (agentKey === "cos") {
    return (
      `A teammate is asking in the ${channelCfg.home} channel. Read the latest report in ${reportDir}/ and pull live ` +
      "data as needed, then answer as the strategist — cross-department, tied to the north star. Answer concisely for Slack."
    );
  }
  return (
    `A teammate is asking about your lane. Your latest report is in ${reportDir}/ and your draft rows are in your ` +
    "queue-inbox.md. Read what you need and pull live data as needed. If they ask you to revise a drafted row, edit it " +
    "in queue-inbox.md and commit (it stays a DRAFT — never approve or go live). Answer concisely for Slack."
  );
}

// Poll the session's events until it goes idle with a terminal stop_reason, collecting the
// agent's reply. Answers that require data pulls can take a couple of minutes — that's why
// this runs on a persistent host.
async function pollForAnswer(sessionId, timeoutMs = 4 * 60 * 1000) {
  const started = Date.now();
  const seen = new Set();
  let answer = "";
  while (Date.now() - started < timeoutMs) {
    await new Promise((r) => setTimeout(r, 2500));
    const r = await fetch(`${ANTHROPIC}/sessions/${sessionId}/events`, { headers: MA_HEADERS });
    if (!r.ok) continue;
    const events = (await r.json()).data || [];
    let done = false;
    for (const ev of events) {
      if (ev.type === "agent.message" && !seen.has(ev.id)) {
        seen.add(ev.id);
        for (const b of ev.content || []) if (b.type === "text") answer += b.text;
      }
      // Idle with a terminal stop_reason = the turn is done (not merely waiting between tools).
      if (ev.type === "session.status_idle" && ev.stop_reason?.type !== "requires_action" && !seen.has(ev.id)) {
        seen.add(ev.id); done = true;
      }
    }
    if (done && answer) return answer;
  }
  return answer || "_(the agent is still working — try again in a moment)_";
}

// Fetch the thread's messages so a newly-summoned agent has the context. Needs the
// channels:history (public) / groups:history (private) scope on the bot token.
async function fetchThread(channel, thread_ts, limit = 30) {
  try {
    const url = `https://slack.com/api/conversations.replies?channel=${channel}&ts=${thread_ts}&limit=${limit}`;
    const r = await fetch(url, { headers: { authorization: `Bearer ${SLACK_BOT_TOKEN}` } });
    const data = await r.json();
    if (!data.ok || !data.messages) return "";
    return data.messages
      .map((m) => `${m.bot_id ? (m.username || "agent") : "teammate"}: ${(m.text || "").replace(/\n+/g, " ").trim()}`)
      .filter((line) => line.length > 12)
      .join("\n");
  } catch {
    return "";
  }
}

async function postSlack(channel, thread_ts, text) {
  await fetch("https://slack.com/api/chat.postMessage", {
    method: "POST",
    headers: { authorization: `Bearer ${SLACK_BOT_TOKEN}`, "content-type": "application/json" },
    body: JSON.stringify({ channel, thread_ts, text }),
  });
}

app.get("/", (_req, res) => res.send(`NG EarSafe Slack relay: up · ${Object.keys(CHANNELS).length} channels routed`));
app.listen(PORT, () => console.log(`relay listening on :${PORT} — ${Object.keys(AGENTS).length} agents, ${Object.keys(CHANNELS).length} channels`));
