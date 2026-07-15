# Instagram Content — Queue Inbox

> **The Instagram Content agent's private draft inbox. It writes here and nowhere else.**
>
> It must **never** touch `Company_OS/APPROVALS_QUEUE.md` — the GitHub MCP write tool replaces a
> file's entire contents (there is no append mode), so a ~180KB shared file that many agents write is
> one bad write away from destroying every department's rows. (That is exactly what happened to the
> Google Ads lane on 2026-07-13: the queue went 179,697 bytes → 23 bytes and had to be rebuilt from
> git history.)
>
> **`/approvals` merges these rows into the shared queue.** That is a human step, on purpose.
>
> **Row format** — id `IC-###`, continue the existing sequence (the tracker is already past IC-008,
> so the next id is at least **IC-009**). Read this file first, then write back its existing contents
> **plus** your new rows. Never emit it with fewer rows than it had.
>
> **Every cycle appends one row per option — exactly one Static, one Carousel, one Reel** (see
> `cycle_flow.md` step 7). Each row states hook / body / payoff / bucket / tribe / metric target / visual.

| id | date | dept | format | action (hook · body · payoff · bucket · tribe · metric target · visual) | data-basis | risk | reversible? | status |
|---|---|---|---|---|---|---|---|---|
| — | — | instagram-content | — | *(no drafts yet — first cycle will append here)* | — | — | — | — |
