---
description: Review the approval queue; record approve/reject; move decided rows to the decision log.
---

Help Meet review pending actions in `Company_OS/APPROVALS_QUEUE.md`.

1. Read `Company_OS/APPROVALS_QUEUE.md` and render every `pending` row in a clear, scannable list grouped by department, each with: id, action, rationale, data-basis, risk, reversibility.
2. For each, present a crisp recommendation (approve / reject / needs-info) with one line of reasoning grounded in `COMPANY_STATE.md`. Do **not** decide for the human — wait for their call. Use the AskUserQuestion flow if helpful to batch decisions.
3. When the human approves or rejects items:
   - Set the row's `status` in `APPROVALS_QUEUE.md` to `approved` or `rejected`.
   - Append a corresponding row to `Company_OS/DECISION_LOG.md` with `decision`, `approved-by` (Meet), `executed = no` for approved items (`n/a` for rejected), and a note.
4. Approved items now await `/execute-approved`. Remind the human that **nothing is live yet**.

This command edits files only (queue + decision log). It performs **no** live writes to Shopify/Meta/Gmail/etc.

$ARGUMENTS can filter to a department slug or a specific row id.
