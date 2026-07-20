# SEO/AEO — Queue Inbox

> **The seo-aeo agent's private draft inbox. It writes here and nowhere else.**
>
> It must **never** touch `Company_OS/APPROVALS_QUEUE.md` — the GitHub MCP write tool replaces a
> file's entire contents (there is no append mode), so a 180KB shared file that many agents write
> is one bad write away from destroying every department's rows (that happened to the Google Ads
> lane on 2026-07-13: the queue went 179,697 bytes → 23 bytes and had to be rebuilt from git
> history).
>
> **`/approvals` merges these rows into the shared queue.** That is a human step, on purpose.
>
> Row format — id `SEO-###`, **continue the sequence: SEO-001…SEO-012 and OW-001 are taken, so the
> agent starts at SEO-013.** Every row must carry a hypothesis (metric + threshold), the exact
> change, the data basis (window + numbers), and a read plan (D+30 for CTR/rank, D+14 for AEO).

| id | date | dept | action | rationale | data-basis | risk | reversible? | status |
|---|---|---|---|---|---|---|---|---|
| _(none yet — first Monday run appends here)_ | | | | | | | | |
