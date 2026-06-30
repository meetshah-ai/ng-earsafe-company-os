---
description: Scaffold a new department — triad + subagent + registry entry — in one command.
---

Scaffold a new NG EarSafe department. The department slug is in $ARGUMENTS (e.g. `seo-aeo`, `google-ads`, `cx`). If no slug is given, ask for one.

Steps:
1. **Validate** the slug (kebab-case, not already in `Company_OS/COMPANY_STATE.md` §6). Confirm the human-readable name.
2. **Create the triad** by copying the template:
   - `Company_OS/departments/<slug>/constitution.md` ← from `Company_OS/departments/_TEMPLATE/constitution.md`
   - `Company_OS/departments/<slug>/tracker.md` ← from `_TEMPLATE/tracker.md`
   - `Company_OS/departments/<slug>/learning-log.md` ← from `_TEMPLATE/learning-log.md`
   Fill in the department name and owner placeholders.
3. **Create the subagent** `.claude/agents/<slug>.md` from `.claude/agents/_department-template.md`: set `name: <slug>`, write a one-line `description`, and set `tools` to the read-only connectors this lane needs (pick from `COMPANY_STATE.md` §7 and the department's row in `SKILLS_MATRIX.md`). Keep it read-only + file-write — **no mutation tools**.
4. **Register** the department: add a row to `COMPANY_STATE.md` §6 (Department Registry) and to the role table in the git-root `CLAUDE.md` (§3 — "Which doc to load").
5. **Port existing knowledge** — point the human to the relevant existing role doc to fold into the new `constitution.md` (e.g. `GoogleAds_*.md` for google-ads, `CX_Support_Scripts.md` for cx, `UAE_Market_Context.md` for international, `[[ng-product-page-cro]]` + `SafeBuds_LP.html` for cro). Pre-load the department's skills from `SKILLS_MATRIX.md`.
6. **Report** what was created and the one manual step left (porting the role doc's specifics into the constitution).

All of this is file creation only — no live-system writes. Registry edits to `COMPANY_STATE.md` are the one allowed direct edit here since scaffolding is structural, not a business decision.
