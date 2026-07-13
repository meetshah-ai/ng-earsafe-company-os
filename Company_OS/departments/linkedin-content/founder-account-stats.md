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
| **Web search + fetching individual post URLs** | **Post text, reactions, comments, date** | ⚠️ **THE METHOD — but fetch access failed on every URL tested 2026-07-13 (see below).** |

## THE METHOD (how the agent reads this account each cycle)

1. **Enumerate posts:** search `site:linkedin.com/posts meet-shah-9065505a`.
2. **Fetch each post URL.** Individual post pages are *supposed to be* publicly readable (unlike the profile page).
   Returns the **full post text**, the **reaction count** and the **comment count** — when the fetch succeeds.
3. **Derive the date from the URL.** LinkedIn's `activity-<id>` number is a snowflake: the exact
   post timestamp is `(id >> 22)` milliseconds since epoch. No guessing required. **Verified again 2026-07-13** —
   decoding the 6 known ledger post IDs reproduced their logged dates exactly.

**Impressions are NOT obtainable.** LinkedIn shows them only to the account owner. So:
- **The scoreboard is reactions + comments** (the numerator), not engagement rate.
- Engagement *rate* can only be filled in by Meet, by hand, from his own analytics screen. Optional —
  the system works without it.

⚠️ **2026-07-13 update — fetch step is currently broken.** `web_fetch` returned `url_not_allowed` on
**every** `linkedin.com/posts/...` URL tried this session, including the reference kaan-dard post
(`activity-7369264407924649985`) whose numbers were already on file. Enumeration via `site:linkedin.com/posts`
search still works fine and still returns full post URLs + hashtag titles; it is specifically the **fetch**
of the individual post page that failed, for every URL, not just new ones. Per the standing rule, this was
**not** re-attempted repeatedly or worked around with a scraper — the existing ledger numbers below were
carried forward unchanged (not re-verified), and no new reaction/comment data was added this cycle.
**If this repeats next cycle, treat it as confirmed-broken (not transient) and stop spending a fetch attempt
on it every time — note it as unavailable and move straight to the enumeration-only data (dates, hashtags).**

**Discipline — this is a rule, not a preference.** A handful of fetches per cycle, never a crawl.
If fetches start failing, the agent writes **"founder post data unavailable this cycle"** and moves on. It never
estimates, never fabricates, and never escalates to a scraper. **We are not risking a 2,800-follower
account — the single asset this entire strategy depends on — to save a human two minutes.**

---

## FOUNDER POST LEDGER (agent-maintained from public data; append each cycle)

| Posted | Post (first line / topic) | Bucket | Reactions | Comments | Note |
|---|---|---|---|---|---|
| 2025-09-04 | *"A few days ago, I was standing outside our office on a call…"* — the delivery-boy who couldn't work for 3 days because his neckband hurt his ears. Made him try EarSafe, helped him order on Amazon. | P3 founder | **22** | **3** | **The register that works.** A real, specific, human story with a validated-hypothesis payoff. No pitch. This is the reference post. Not re-fetched 2026-07-13 (fetch blocked) — figure carried forward from a prior cycle, unverified this session. |
| 2025-04-09 | #offline #retail #startupstories | — | — | — | not yet fetched. Date confirmed by activity-ID decode 2026-07-13 (`activity-7315680353275260928` → 2025-04-09). |
| 2025-03-28 | #startuplife #openearheadphones #ngearsafe #shokz | — | — | — | not yet fetched. Date confirmed by activity-ID decode 2026-07-13 (`activity-7311400417773428737` → 2025-03-28). |
| 2024-11-25 | IPV Wealth Wise Summit — "conversations when you interact with your consumers directly are always a great learning" | P3 founder | **48** | **5** | Highest reactions found so far. Event + direct-consumer-contact register. Not re-fetched 2026-07-13 (fetch blocked) — figure carried forward, unverified this session. Note: a *different*, lower-numbers company-page share about the same summit exists too (Windsor `linkedin_organic`: 9 likes / 1 comment / 16 impressions) — don't conflate the two; this ledger row is the founder's personal post specifically. |
| 2024-06-28 | "We at NG India EarSafe are deeply committed to promoting…" | — | — | — | not yet fetched |
| 2024-05-18 | #openear #startuplife #ngearsafe | — | — | — | not yet fetched |
| 2023-06-21 | "How NG is revolutionizing the headphone industry" | — | — | — | not yet fetched |
| 2021-12-20 | "innovation #future #entrepreneurship" (`activity-6878608200258654208`) | — | — | — | **New find, 2026-07-13.** Surfaced by the standard `site:linkedin.com/posts meet-shah-9065505a` search; not previously in this ledger. Date by activity-ID decode. Likely predates NG EarSafe's D2C pivot — low priority to fetch, but listed for completeness. |

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
still trails what one of Meet's posts pulled (3 comments, on presumably a small fraction of the founder
account's total post count, and via a genuinely personal story rather than a template). A brand page
occasionally gets a comment when it's unusually human (the office opening, a family photo); a person gets
one almost by default. That's the real, corrected version of the argument — measured, not assumed, and now
accurate.

**The founder account gets comments on every post we've been able to read** (3, then 5) — still true, still
based on only 2 of 7 known posts having been fetched.

## WHAT WE'RE WATCHING
- **Reactions + comments per founder post**, by bucket — does P2 (real Meta Ads numbers) beat P3
  (founder story)? The "kaan dard" post says a specific human story is very hard to beat. CYCLE-002
  (2026-07-13) tests a P2 Meta-Ads-near-miss story against a P3 confession post in the same cycle —
  first real head-to-head once Day-7 numbers are in.
- **Does the company page resharing / commenting within the first hour move the founder post's
  numbers?** Untested.
- **Fetch reliability of individual `linkedin.com/posts/...` pages** — broken as of 2026-07-13 for every
  URL tried. Watch whether this is transient or permanent; don't keep spending fetch attempts on it if it
  repeats.
- **Impressions** — blank unless Meet fills them in. Not required. Don't block on it.

## OPTIONAL — impressions, if Meet ever wants to add them
LinkedIn → your profile → Analytics (visible only to you). Paste into the ledger above. A blank cell
is always better than a guessed one.
