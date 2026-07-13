# Agent Fleet Dashboard

A live wall-display of every Claude managed agent NG EarSafe runs — what's scheduled, what fired,
what's broken, and what's waiting on you.

**It only looks. It never changes anything.** No agent is started, stopped, paused or edited by this
dashboard. It is safe to run at any time.

---

## Run it

Open Terminal, then:

```bash
cd "/Users/meetshah/Desktop/NG /Claude Team"
./Company_OS/platform/fleet/fleet.sh
```

**Maximize the Terminal window first** — the dashboard needs a wide window. If it's too narrow it
will tell you and wait.

- **To quit:** press `q`.
- **To leave it running in the background and come back later:** press `Ctrl-b` then `d` ("detach").
  Re-run the same command to jump back in — it reattaches to the running dashboard.

Prefer a single printout instead of a live screen? `./fleet.sh --once` prints one snapshot and exits.

---

## What you're looking at

The screen is split into four boxes.

| Box | Answers |
|---|---|
| **FLEET** (top-left) | Every agent, which model it runs on, its schedule, and when it next fires. |
| **ALERTS** (top-right) | **Read this one.** Anything quietly broken or waiting on you. |
| **RUNS** (bottom-left) | What actually fired recently, and whether it worked. |
| **SESSIONS** (bottom-right) | Whether an agent is executing *right now*. |

### The symbols

| | Meaning |
|---|---|
| 🟢 `●` | **Active** — scheduled and will fire. |
| 🟡 `⏸` | **Paused** — it has a schedule, but it's switched off. It will not fire. |
| 🔴 `○` | **No schedule** — the agent exists, but *nothing will ever trigger it.* |
| `✓` / `✗` | A past run that succeeded / failed. |
| `◆` | Drafts sitting in the approvals queue, waiting for your sign-off. |

The red `○` is the one worth understanding. An agent can be perfectly written and completely idle,
because writing the agent and *scheduling* it are two separate steps. Nothing warns you about this —
which is why the dashboard does.

---

## How it works (one paragraph)

A hidden one-line pane at the top is a **collector**: every 60 seconds it asks the Claude platform
(via the `ant` CLI) for the current agents, deployments, runs and sessions, and writes the answers to
a temporary cache. The four visible panes just read that cache and redraw every 10 seconds. One set
of API calls feeds all four panes, so the dashboard is cheap to leave open.

Requires `tmux`, `jq`, and `ant` (all already installed on this machine).

---

## Vocabulary

The platform separates two things that sound like one thing:

- An **agent** is the *brain* — its instructions, its model, its tools. Written as a `.agent.yaml`
  in `Company_OS/agents/` and `Company_OS/platform/`.
- A **deployment** is the *alarm clock* — the cron schedule that wakes an agent up.

An agent with no deployment never runs. A deployment that is paused never fires. Both cases look
like silence, and both show up in **ALERTS**.
