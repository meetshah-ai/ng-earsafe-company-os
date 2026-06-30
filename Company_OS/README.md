# Company_OS — NG EarSafe AI-First Operating Spine

This folder is the operating system for NG EarSafe as an AI-first company. Each department runs as a specialized, auto-learning Claude Code agent; humans intervene only at approval points. This README explains how the pieces fit.

> **Launch point:** open the project at the **git root (`…/Claude Team/`)**, never inside `Company_OS/`. Every read-order path is git-root-relative; launching inside `Company_OS/` breaks them. A `SessionStart` guard hook warns you if the cwd is wrong.
>
> **Required MCP connectors** (the loops assume these are connected in the running environment — they are claude.ai account connectors, not declared in-repo): **Windsor.ai** (GA4/Meta/Google Ads/GSC/Shopify metrics), **Porter** (IG insights), **Shopify**, **Meta Ads**, **Google Drive** (assets). Without them the read steps degrade to "data unavailable — flag it." See `COMPANY_STATE.md` §7.
>
> **Observability:** every run is traced to `Company_OS/_observability/`; run `/trace-view` after a run to see a flowchart + verdict proving the agent booted right, read the map in order, stayed read-only, the gate held, and actions were drafted.

---

## The shape

```
Company_OS/
  COMPANY_STATE.md        ← single source of truth (read first, every session)
  APPROVALS_QUEUE.md      ← drafted actions awaiting human sign-off
  DECISION_LOG.md         ← approved/rejected decisions + execution audit
  SKILLS_MATRIX.md        ← which skills each department has, and why
  departments/
    _TEMPLATE/            ← clone this for a new department
      constitution.md     ← the agent's identity, playbook, guardrails
      tracker.md          ← live P0–P3 tasks, status, results
      learning-log.md     ← hypothesis → result → learning, every cycle
    instagram-content/    ← live department (organic social + daily trend test)
    meta-ads/             ← live department (competitor teardown + paid)
    seo-aeo/              ← live department (rank/gap/AEO)
    <dept>/ …

.claude/
  agents/
    chief-of-staff.md     ← orchestrator subagent (read-only + drafts)
    _department-template.md ← cloneable department subagent definition
    instagram-content.md  ← + meta-ads.md, seo-aeo.md (live department subagents)
  commands/
    standup.md            ← daily cross-department standup
    deep-loop.md          ← weekly per-department learning loop
    approvals.md          ← review queue, approve/reject
    execute-approved.md   ← THE ONLY place live writes happen
    new-department.md     ← scaffold a new department in one command
  settings.json           ← approval-gate hook + session pointer
```

---

## Two memory layers (no double-maintenance)

- **`Company_OS/` (in-repo) is canonical.** Versioned, reviewable, git-able. This is what humans read and what decisions are logged against.
- **The user-global memory graph (`…/memory/*.md` + `MEMORY.md`) is fast recall.** It holds pointers and short summaries into `Company_OS/`. Existing memory files are linked, not migrated wholesale — they're superseded incrementally as their content moves into department triads. Where the two conflict, **`COMPANY_STATE.md` wins** (it carries supersession notes).

---

## The approval gate (draft-everything)

**No agent mutates a live system.** Department agents and the orchestrator are read-only on connectors and can only write files (drafts + logs). This is enforced two ways:

1. **By construction** — agent tool grants exclude every mutation tool (Shopify `graphql_mutation`, Meta `ads_create_*`/`ads_update_*`, Gmail send/draft, Canva publish, IG post).
2. **By hook** — `settings.json` `PreToolUse` denies those tools unless the env var `NG_EXECUTE=1` is set. Only `/execute-approved` sets it.

**Flow:**
```
agent drafts → APPROVALS_QUEUE.md
   → /approvals (human approves/rejects) → DECISION_LOG.md
      → /execute-approved (NG_EXECUTE=1, human-initiated) → live write → mark executed
```

---

## The cadence (auto-learning loop)

- **Daily — `/standup`** (orchestrator, read-only): pull live metrics, compare to `COMPANY_STATE.md` targets and each department's `tracker.md`, reconcile cross-department gates (e.g. don't scale demand for an out-of-stock SKU), write a standup brief, and append proposed actions to `APPROVALS_QUEUE.md`. Touches no live system.
- **Weekly — `/deep-loop`** (per department): run LEARN → PLAN → DRAFT → REVIEW; log `hypothesis → result → learning` to `learning-log.md`; update `tracker.md`; draft next sprint to the queue.

Scheduling: register `/standup` as a daily routine (after the n8n 8 AM data pull lands) and `/deep-loop` weekly (Sunday eve). n8n stays the deterministic plumbing — scheduled data pulls + report email. Claude Code does the reasoning, drafting, and learning.

---

## How a department learns

Each department's `learning-log.md` is its institutional memory. Every cycle it records what it expected, what happened, and what changes next sprint. Over time `tracker.md` reprioritizes toward what works and `SKILLS_MATRIX.md` reflects which skills earned their keep. The orchestrator reads all department logs during standup so learnings cross-pollinate (a creative insight from Content can inform Meta; an SEO CTR finding can inform CRO).

---

## Adding a department

```
/new-department <slug>      # e.g. /new-department seo-aeo
```
This copies `_TEMPLATE/` into `departments/<slug>/`, clones `_department-template.md` into `.claude/agents/<slug>.md`, and registers the department in `COMPANY_STATE.md` §6 and the Master CLAUDE.md role table. Then port the relevant existing role doc (e.g. `GoogleAds_*` , `CX_Support_Scripts.md`) into the new `constitution.md`, and pick the department's skills from `SKILLS_MATRIX.md`.

---

## Read order for any session

1. `COMPANY_STATE.md` — where the company is.
2. The relevant `departments/<dept>/constitution.md` — how this lane operates.
3. That department's `tracker.md` + `learning-log.md` — what's in flight and what we've learned.
4. Act → draft to `APPROVALS_QUEUE.md`. Never touch live systems outside `/execute-approved`.
