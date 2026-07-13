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
| **Web search + fetching individual post URLs** | **Post text, reactions, comments, date** | ✅ **THIS IS THE METHOD.** See below. |

## THE METHOD (how the agent reads this account each cycle)

1. **Enumerate posts:** search `site:linkedin.com/posts meet-shah-9065505a`.
2. **Fetch each post URL.** Individual post pages *are* publicly readable (unlike the profile page).
   Returns the **full post text**, the **reaction count** and the **comment count**.
3. **Derive the date from the URL.** LinkedIn's `activity-<id>` number is a snowflake: the exact
   post timestamp is `(id >> 22)` milliseconds since epoch. No guessing required.

**Impressions are NOT obtainable.** LinkedIn shows them only to the account owner. So:
- **The scoreboard is reactions + comments** (the numerator), not engagement rate.
- Engagement *rate* can only be filled in by Meet, by hand, from his own analytics screen. Optional —
  the system works without it.

**Discipline — this is a rule, not a preference.** A handful of fetches per cycle, never a crawl.
LinkedIn already blocks the profile page; post pages work *today* and may not tomorrow. If fetches
start failing, the agent writes **"founder post data unavailable this cycle"** and moves on. It never
estimates, never fabricates, and never escalates to a scraper. **We are not risking a 2,800-follower
account — the single asset this entire strategy depends on — to save a human two minutes.**

---

## FOUNDER POST LEDGER (agent-maintained from public data; append each cycle)

| Posted | Post (first line / topic) | Bucket | Reactions | Comments | Note |
|---|---|---|---|---|---|
| 2025-09-04 | *"A few days ago, I was standing outside our office on a call…"* — the delivery-boy who couldn't work for 3 days because his neckband hurt his ears. Made him try EarSafe, helped him order on Amazon. | P3 founder | **22** | **3** | **The register that works.** A real, specific, human story with a validated-hypothesis payoff. No pitch. This is the reference post. |
| 2025-03-28 | #startuplife #openearheadphones #ngearsafe #shokz | — | — | — | not yet fetched |
| 2025-04-09 | #offline #retail #startupstories | — | — | — | not yet fetched |
| 2024-11-25 | IPV Wealth Wise Summit — "conversations when you interact with your consumers directly are always a great learning" | P3 founder | **48** | **5** | Highest reactions found so far. Event + direct-consumer-contact register. |
| 2024-06-28 | "We at NG India EarSafe are deeply committed to promoting…" | — | — | — | not yet fetched |
| 2024-05-18 | #openear #startuplife #ngearsafe | — | — | — | not yet fetched |
| 2023-06-21 | "How NG is revolutionizing the headphone industry" | — | — | — | not yet fetched |

---

## THE FINDING THAT JUSTIFIES THE WHOLE STRATEGY

**The company page has 4 posts, ever, and ZERO comments on all four** — regardless of engagement rate
(Windsor `linkedin_organic`, pulled 2026-07-13). It has never once held a conversation.

**The founder account gets comments on every post we've checked** (3, then 5).

A brand page broadcasts. A person has a conversation. That is the entire argument for the founder-first
pivot, and it is now measured rather than assumed.

## WHAT WE'RE WATCHING
- **Reactions + comments per founder post**, by bucket — does P2 (real Meta Ads numbers) beat P3
  (founder story)? The "kaan dard" post says a specific human story is very hard to beat.
- **Does the company page resharing / commenting within the first hour move the founder post's
  numbers?** Untested.
- **Impressions** — blank unless Meet fills them in. Not required. Don't block on it.

## OPTIONAL — impressions, if Meet ever wants to add them
LinkedIn → your profile → Analytics (visible only to you). Paste into the ledger above. A blank cell
is always better than a guessed one.
