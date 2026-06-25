# DECISION LOG — approved/rejected decisions + execution audit trail

> The permanent record. Rows arrive here when Meet approves or rejects an item in `APPROVALS_QUEUE.md`. `/execute-approved` reads rows where `decision = approved` and `executed = no`, performs the live write, then sets `executed = yes` with a result note.
>
> This is the audit trail for the whole AI-first org: who decided what, when, on what basis, and what happened.

**execution states:** `n/a` (rejected) · `no` (approved, awaiting `/execute-approved`) · `yes` (done) · `failed` (attempted, see note).

| id | date-decided | dept | action | decision | approved-by | executed | result / note |
|---|---|---|---|---|---|---|---|
| _example_ | 2026-06-25 | content-growth | Draft + schedule Reel "8 calls, no ear pain" | approved | Meet | no | Awaiting `/execute-approved` |

<!-- New rows appended by /approvals when a human approves/rejects a queue item. -->
