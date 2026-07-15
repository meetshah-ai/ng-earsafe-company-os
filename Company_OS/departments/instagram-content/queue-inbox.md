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
| IC-018 | 2026-07-15 | instagram-content | REEL | **Ad-hoc ask (Slack, Riya's team): "already done ear-pain format, need a new angle, FIFA-relevant."** Hook: "POV: India doesn't even have a team in this and you've lost 3 nights of sleep." Body: quick-cut universal-fan-behaviour montage (fake-calm penalty face, flashlight countdown to a 12:30am IST kickoff, refreshing the score mid-meeting) — self-aware fandom humor, NOT ear-pain. Product appears only in the last 2s: one earbud in at a desk, half-watching, still hears a colleague — wrapped in the joke, not stated. Payoff: "Tag the friend who's watched every match and still can't name the group stage." Bucket: reach/humor (reach pillar, not product/education). Tribe: broad fandom × Tribe A crossover. Metric target: shares ≥5, reach ≥600 (vs 289 avg-reach / ~0.3 avg-saves baseline). Visual: real product only, no on-screen spec list, no AI-rendered device. **Full shot-by-shot production kit: `IC018_production_kit.md`** (2-clip continuous-take script, image prompts, text overlays, caption, workflow, KPI check). | "Game Time" (Future x Tyla) confirmed still climbing with live WC action — buffer.com trending-audio update, Jul 2026. Semifinals played 15/16 Jul, final 19 Jul (kickoff 12:30am IST 20 Jul) — wego.com knockout schedule. No player/celebrity named (stop-list compliant). | LOW — no team allegiance, no public figure named, product wrapped not spec'd | YES — draft only | DRAFT — awaiting Riya/Meet |
| IC-019 | 2026-07-15 | instagram-content | REEL | **Same ask, second angle — situational-awareness, not pain.** Hook: "1:58 AM. Extra time. And you still heard the baby monitor." Body: handheld late-night semifinal/final watch-along, dim room, phone propped, one open-ear bud in — home sounds cut through in real time (monitor beep, partner stirring, kettle click) and the wearer reacts instantly; quick contrast cut to a sealed-earbud reaction a beat too late. No spec-dump, ends on an observational line, not a sell. Payoff: shareable to any parent/partner staying up for the semis/final without missing what's happening in the house. Bucket: product-as-proof (situational awareness, not ear pain) — counts toward the ≤1-product-post cap alongside IC-018 staying non-product. Tribe: A (WFH/late-night) + parents/partners crossover. Metric target: saves ≥5 (vs ~0 baseline), reach ≥500. Visual: real on-ear product shot only, dim practical lighting, no floating product render. | Semifinals 15/16 Jul, final 19 Jul kickoff 12:30am IST 20 Jul — all late-night slots (wego.com). Reframes the FIFA wave around the account's untested "awareness not pain" angle — distinct from the IC-015 "Ear #5" pain hook already in this cycle's slate, per teammate's explicit no-repeat ask. | LOW — no player/celebrity named, real product only | YES — draft only | DRAFT — awaiting Riya/Meet |
