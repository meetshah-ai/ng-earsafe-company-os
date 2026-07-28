# Meet Shah — Personal LinkedIn Account (the PRIMARY channel)

> **The founder account is the strategy** (Meet, 2026-07-13): ~2,800 followers vs the company page's
> 1,485, and on LinkedIn people follow people. The company page (`13379517`) is the amplifier.

## What we can read, and what we can't (verified 2026-07-13 — don't re-litigate this)

| Source | Gives us | Verdict |
|---|---|---|
| Windsor `linkedin_organic` | Company page only (`13379517`) | ❌ **Cannot see the founder account.** Org-scoped. Only one account exists in it. |
| Windsor `linkedin` | LinkedIn *Ads* | ❌ Not organic, not personal. |
| Porter `linkedin-pages` / `linkedin-ads` | Company / ads | ❌ Same. |
| Windsor `metricool` / `sproutsocial` | Would work — Metricool does connect personal profiles | ❌ **Rejected: paid tools.** (Meet, 2026-07-13) |
| `captain_data` / `apify_dataset` scrapers | Would work | ❌ **Rejected: violates LinkedIn ToS and risks the account the whole strategy rests on.** Never do this. |
| Fetching `linkedin.com/in/meet-shah-9065505a` | — | ❌ Returns HTTP **999** (LinkedIn's bot block). |
| **`curl` on individual post URLs** | **Post text, reactions, comments, date** | ✅ **THE METHOD — confirmed working again 2026-07-21 and 2026-07-28** (see below). |

## ⚡ POSTS TO TRACK — paste new post URLs here the moment they go live

**Search does not index a LinkedIn post for several days.** So the agent cannot discover a post Meet
publishes this week — it has to be handed over once. Paste the URL here; from then on the agent curls
it every cycle and watches the reactions and comments climb.

```
https://www.linkedin.com/posts/meet-shah-9065505a_metaads-performancemarketing-d2c-activity-7482365486110871552-6eHs
https://www.linkedin.com/posts/meet-shah-9065505a_a-few-days-ago-i-was-standing-outside-our-activity-7369264407924649985-mmoN
```

*(Second URL added 2026-07-28 — the kaan-dard reference post, surfaced this session via*
*`site:linkedin.com/posts meet-shah-9065505a` search. Its figures had only ever been carried forward*
*on trust before; now independently re-verifiable every cycle.)*

*(No new post URLs added 2026-07-28 — nothing new was published on the founder account between*
*2026-07-13 and 2026-07-28 per this ledger. Confirmed both by search — nothing newer than the July 13*
*post surfaced — and by the absence of a new URL handed over.)*

---

## THE METHOD (how the agent reads this account each cycle) — RE-CONFIRMED 2026-07-28

**The `web_fetch` tool is blocked on linkedin.com (`url_not_allowed`) and always will be. `curl` is
not.** Post pages return HTTP 200 with the numbers sitting in the HTML. This is a tooling limit, not a
LinkedIn one — LinkedIn publishes these pages deliberately. No user-agent spoofing, no scraper.

```bash
curl -s "<post-url>" --max-time 25 > /tmp/p.html
grep -o 'data-num-reactions="[0-9]*"' /tmp/p.html     # → data-num-reactions="22"
grep -o 'data-num-comments="[0-9]*"'  /tmp/p.html     # → data-num-comments="3"
grep -o '<meta property="og:description" content="[^"]*"' /tmp/p.html   # the post text
```

Verified 2026-07-13 on the kaan-dard post: returned 22 reactions / 3 comments — the exact numbers.
**Re-verified 2026-07-21 on the 2026-07-13 post itself:** curl returned HTTP 200 and the correct block —
`data-num-reactions="10"`, `data-num-comments="1"` on the matching `data-activity-urn`. **Re-verified
2026-07-28 on both tracked posts:** the July 13 post is still exactly `data-num-reactions="10"` /
`data-num-comments="1"` — unchanged in a week, i.e. it has plateaued. The kaan-dard post, now with a
working URL for the first time, independently confirmed at `data-num-reactions="22"` /
`data-num-comments="3"` — an exact match to the figure that had only ever been carried forward on trust.
**Caution for future cycles, re-confirmed:** the post page also embeds LinkedIn's own "related posts"
feed (10+ other unrelated posts with their own reaction/comment counts on the same HTML page) — always
match the count to the specific `data-activity-urn` block for the URL you fetched (search for the URN,
then find the nearest `data-num-reactions`/`data-num-comments` pair after it), not just the first
`data-num-reactions` hit in the file, or you'll read someone else's numbers. This matters more now that
two posts are tracked in one search-results page.

**The profile page and `/recent-activity/` both return HTTP 999.** Don't waste a call on them.

**Impressions are NOT obtainable.** LinkedIn shows them only to the account owner. So:
- **The scoreboard is reactions + comments** (the numerator), not engagement rate.
- Engagement *rate* can only be filled in by Meet, by hand, from his own analytics screen. Optional —
  the system works without it.

**Discipline — this is a rule, not a preference.** A handful of fetches per cycle, never a crawl.
If fetches start failing, the agent writes **"founder post data unavailable this cycle"** and moves on. It never
estimates, never fabricates, and never escalates to a scraper. **We are not risking a 2,800-follower
account — the single asset this entire strategy depends on — to save a human two minutes.**

---

## FOUNDER POST LEDGER (agent-maintained from public data; append each cycle)

| Posted | Post (first line / topic) | Bucket | Reactions | Comments | Note |
|---|---|---|---|---|---|
| **2026-07-13** 09:29 UTC | **"We scaled a Meta ad's budget 35% and its cost-per-purchase went DOWN 39%. Here's the account structure that made that possible."** | **P2 Meta Ads playbook** | **10** | **1** | 🔴 **PLATEAUED — re-confirmed 2026-07-28 (Day 15), unchanged from the Day-8 read.** CYCLE-002, Option B — Meet's pick. This is the P2-vs-P3 head-to-head result: a real, counter-intuitive number in the hook landed 10 reactions / 1 comment and has now stopped growing entirely — well below both P3 story-register comparables below (22/3 and 48/5). **The numbers-only register did not beat the human-story bar, and the gap isn't closing with time either.** See `cycle-log.md` CYCLE-002/003/004 for the learning this drives. |
| 2025-09-04 | *"A few days ago, I was standing outside our office on a call…"* — the delivery-boy who couldn't work for 3 days because his neckband hurt his ears. Made him try EarSafe, helped him order on Amazon. | P3 founder | **22** | **3** | **The register that works.** A real, specific, human story with a validated-hypothesis payoff. No pitch. This is the reference post. **URL surfaced 2026-07-28** (`activity-7369264407924649985`) and independently re-verified via curl for the first time — exact match to the figure carried forward since 2026-07-13. No longer an assumption. |
| 2025-04-09 | #offline #retail #startupstories | — | — | — | not yet fetched. Date confirmed by activity-ID decode 2026-07-13 (`activity-7315680353275260928` → 2025-04-09). |
| 2025-03-28 | #startuplife #openearheadphones #ngearsafe #shokz | — | — | — | not yet fetched. Date confirmed by activity-ID decode 2026-07-13 (`activity-7311400417773428737` → 2025-03-28). |
| 2024-11-25 | IPV Wealth Wise Summit — "conversations when you interact with your consumers directly are always a great learning" | P3 founder | **48** | **5** | Highest reactions found so far. Event + direct-consumer-contact register. Not re-fetched 2026-07-28 (no URL on file); figure carried forward, unverified this session. Note: a *different*, lower-numbers company-page share about the same summit exists too (Windsor `linkedin_organic`: 9 likes / 1 comment / 16 impressions) — don't conflate the two; this ledger row is the founder's personal post specifically. |
| 2024-06-28 | "We at NG India EarSafe are deeply committed to promoting…" | — | — | — | not yet fetched |
| 2024-05-18 | #openear #startuplife #ngearsafe | — | — | — | not yet fetched |
| 2023-06-21 | "How NG is revolutionizing the headphone industry" | — | — | — | not yet fetched |
| 2021-12-20 | "innovation #future #entrepreneurship" (`activity-6878608200258654208`) | — | — | — | Surfaced 2026-07-13 by the standard `site:linkedin.com/posts meet-shah-9065505a` search. Date by activity-ID decode. Likely predates NG EarSafe's D2C pivot — low priority to fetch, but listed for completeness. |

---

## THE FINDING THAT JUSTIFIES THE WHOLE STRATEGY — corrected 2026-07-13

**Previous claim (now known wrong): "the company page has 4 posts, ever, and ZERO comments on all four."**
A full `linkedin_organic` pull this session (last 2 years, 2026-07-13) found **68 posts** on the company
page between 2024-07-30 and 2026-06-19 — not 4. Of those, **10 have 1+ comments**; the best is the
2025-08-07 Hyderabad office-opening post (4 comments / 48 likes / 1,894 impressions). The remaining
~58 (≈85%) show zero comments. This correction is logged in full in `Company_OS/linkedin/2026-07-13.md`
(CYCLE-002 appendix) and should be propagated into `learning-log.md` and `constitution.md` in a future pass —
not done here.

**The thesis still holds, on the corrected numbers.** The company page's single best post ever (4 comments)
still trails what one of Meet's *story-register* posts pulled (3 comments, on presumably a small fraction of
the founder account's total post count, via a genuinely personal story rather than a template). A brand page
occasionally gets a comment when it's unusually human (the office opening, a family photo); a person gets
one almost by default. That's the real, corrected version of the argument — measured, not assumed, and now
accurate.

**Update 2026-07-21:** the founder account's *numbers-only* register (the 2026-07-13 post, 10/1) actually
underperforms the company page's own best post (4 comments) on comments, and sits well below both P3
story-register posts on file. **The founder-vs-brand-page thesis is really a story-vs-broadcast thesis, not
simply a founder-account-vs-company-page one** — the account matters, but the register matters more. Worth
carrying into how future options are weighted.

**Update 2026-07-28:** both halves of that finding are now independently re-verified, not just carried
forward. The numbers-only post is confirmed flat at 10/1 a full week after the last read — it isn't slowly
catching up, it has stopped. The kaan-dard post's 22/3 figure, previously trusted only because it had been
consistent across two cycles, is now confirmed directly from a live fetch. **The story-vs-numbers gap is as
solid as this account's data gets.**

## WHAT WE'RE WATCHING
- **Reactions + comments per founder post, by bucket — RESOLVED 2026-07-21, RE-CONFIRMED 2026-07-28:** does
  P2 (real Meta Ads numbers) beat P3 (founder story)? **No, and the gap isn't closing.** The 2026-07-13 P2
  post (10/1) fell well short of both P3 comparables on file (kaan-dard 22/3 — now independently verified —
  and IPV summit 48/5) and has shown zero engagement growth in the week since the last read.
- **Does the company page resharing / commenting within the first hour move the founder post's
  numbers?** Still untested — no evidence either way was gathered this cycle.
- **Fetch reliability of individual `linkedin.com/posts/...` pages via `curl`** — confirmed working cleanly
  a third time, 2026-07-28 (HTTP 200, correct blocks matched by `data-activity-urn` on both tracked URLs).
- **Impressions** — blank unless Meet fills them in. Not required. Don't block on it.
- **NEW (2026-07-28): has Meet acted on any of the 8 options drafted across CYCLE-002/003/004?** Only
  CYCLE-002's Option B has ever been posted. CYCLE-003 (2026-07-21, 5 options) is still "(pending)" one
  week later. Worth watching whether this is a pacing issue (Meet reviewing on his own schedule) or a
  signal that none of the drafted registers are hitting the mark — not enough data yet to conclude either way.

## OPTIONAL — impressions, if Meet ever wants to add them
LinkedIn → your profile → Analytics (visible only to you). Paste into the ledger above. A blank cell
is always better than a guessed one.
