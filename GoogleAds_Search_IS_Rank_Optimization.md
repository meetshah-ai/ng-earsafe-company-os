# TASK: Reduce Search Lost IS (Rank) — Both Active Search Campaigns

**Owner:** [assign] | **Account:** 508-958-3796 (N.G CONSUMERTECH PVT LTD)
**Raised by:** Growth/Analytics | **Date:** 19 Jun 2026 | **Priority:** P1
**Source:** Windsor.ai live pull, last 30 days (20 May – 19 Jun 2026)
**Scope:** `Search-26 May 25` · `Search | SafeBuds | OWS + Conquest - 2 JUn 26`

---

## TL;DR
Both campaigns lose most eligible impressions to **Ad Rank**, not budget. Lost IS
(Rank) = bid × Quality Score too low. **Do not add budget** (budget loss is only
6.5% / 14%). Fix the bid target first, then Quality Score (structure + ads + LP).

## Diagnosis (data)

| Campaign | Impr Share | **Lost IS (Rank)** | Lost IS (Budget) | Bid strategy | Target | Actual ROAS |
|---|--:|--:|--:|---|---|--:|
| Search-26 May 25 | 16% | **76%** | 6.5% | Max Conversion **Value** | **tROAS 9.0 (900%)** | 7.5x — under target |
| SafeBuds OWS+Conquest | 30% | **47%** | 14% | Max Conversion Value | none | 0 conv (learning) |

**Search-26 root cause:** 900% ROAS target the campaign can't meet (delivering 7.5x),
so the bidder suppresses bids on anything below 9x → non-brand loses the auction on
Rank while brand (clears 9x easily) wins. **The tROAS=9 was set against the OLD
inflated conversion value (ATC+Checkout). Now that tracking is fixed, reported value
dropped ~3–5x, so 9x is far more aggressive than intended — recalibrate NOW or Rank
loss worsens.**

**Keyword-level Quality Score (Search-26):**
| Keyword | QS | Ad relevance | LP exp | Lost IS (Rank) |
|---|--:|---|---|--:|
| bone conduction headphones | 5 | **Below avg** | Avg | 78% |
| bone conduction headphones india | 5 | **Below avg** | Avg | 90% |
| open ear headphones | 7 | Above avg | Avg | 82% |
| open ear bluetooth headphones | 7 | Above avg | Avg | 80% |
| headphones for swimming | 8 | Above avg | Avg | 82% |
| ng earsafe / earsafe (brand) | 10 | Above avg | Above avg | 5–27% |

**SafeBuds root cause:** brand-new, 0 conversions → Max Conv Value bids blind; QS not
yet computed; budget loss (14%) is also real here.

---

## Actions (in order)

### A. Recalibrate bid target — biggest, fastest lever (Search-26)
- Lower **tROAS 9.0 → 4.0–5.0** (real-value basis). Headroom exists: real blended
  ROAS ~10–13x.
- OR clean reset: switch to **Maximize Conversions (no target)** or **tCPA ~₹300–350**
  for 2–3 weeks to rebuild auction presence + data post-tracking-fix, then re-layer a
  sane tROAS.
- Manual in Google Ads UI (Settings → Bidding).

### B. Restructure to raise Quality Score (Search-26) — EXACT SPLIT
Today: ONE ad group ("Search Campaign") holds brand + non-brand + conquest + exact &
phrase duplicates of the same terms → generic ads → Below-Average relevance. Split:

**Campaign 1 — `NG EarSafe | Brand` (Search)** — protect cheaply, high target OK
| Ad group | Keywords (exact) | Headline 1 |
|---|---|---|
| Brand-Core | [ng earsafe], [earsafe], [ng earsafe headphones], [earsafe headphones] | "NG EarSafe Official" |
| Brand-Product | [ng earsafe pro], [ng earsafe comm 2.0], [ng earsafe lite] | product name |

**Campaign 2 — `NG EarSafe | Category` (Search)** — the Rank-reclaim target
| Ad group | Keywords | Headline 1 |
|---|---|---|
| Bone Conduction | "bone conduction headphones", [bone conduction headphones], "bone conduction headphones india", "air conduction headphones" | **Bone Conduction Headphones** |
| Open Ear | "open ear headphones", "open ear bluetooth headphones", "open ear wireless headphones" | **Open Ear Headphones** |
| Swimming/Sport | "headphones for swimming", "waterproof headphones", "swimming headphones" | **Headphones for Swimming** |

**Campaign 3 — `NG EarSafe | Conquest` (Search)** — isolate (low IS/QS expected)
| Ad group | Keywords | Note |
|---|---|---|
| Shokz | "shokz headphones", "shokz openrun", "shokz alternative" | small budget; comparison LP |

≥2 RSAs per ad group, theme in Headline 1; add sitelinks/callouts/structured snippets.

### C. Landing-page map (PROBLEM: all keywords currently → homepage)
Ads' main final URL = `https://www.ngearsafe.com` for everything (838/1058 clicks).
Fine for brand, wrong for non-brand → LP experience "Average" on all non-brand. Map
each theme to the matching page (all already exist on site):

| Keyword theme | Current LP | → Recommended LP |
|---|---|---|
| Brand (ng earsafe, earsafe) | homepage ✓ | keep homepage |
| ng earsafe pro | homepage | `/products/ng-earsafe-pro-open-ear-bone-conduction-headphones` |
| ng earsafe comm 2.0 | homepage | `/products/noise-cancelling-open-ear-headphones-with-mic-ng-ear-safe-comm-2-0` |
| bone conduction headphones (+india) | homepage | `/collections/bone-conduction-headphones` |
| air conduction headphones | homepage | `/products/ng-earsafe-openbuds-with-air-conduction-technology` |
| open ear headphones / bluetooth / wireless | homepage | `/collections/open-ear-headphones` |
| headphones for swimming | homepage | `/products/open-ear-bone-conduction-headphones-ng-ear-safe-pro-swimming` |
| shokz (conquest) | homepage | comparison LP (to build) |
| SafeBuds (open ear/outside ear earbuds) | `/products/ngwehear` | keep, or test `/products/open-ear-earbuds-wireless-ng-ear-safe-buds` |

Flags: Comm 2.0 slug says "noise-cancelling" (open-ear ≠ ANC — false-claim risk);
two Comm 2.0 product pages exist (`...comm-2-0` and `/products/open-ear-headphones-with-mic-2-0-ng-earsafe`) — pick one canonical. LP target speed matters (mobile = 85%).

### D. SafeBuds specifically
- Switch to **Maximize Conversions** (or Maximize Clicks briefly) to gather data —
  Max Conv Value with 0 conversions bids blind.
- **Budget bump justified here** (14% real budget loss) — unlike Search-26.
- Tighten ad relevance to OWS/open-ear theme; QS populates as volume builds.

### E. Self-competition — CORRECTED with data
- **No live cross-campaign cannibalization.** Pulled every SEARCH campaign with >0
  impressions (last 30d): only the two active campaigns served. Legacy campaigns
  (WEBSITE EARSAFE, NG_AllProducts, DIG_TOF, etc.) have ZERO impressions — dark, not
  competing. Earlier "legacy overlap" concern is MOOT. Optional: archive to declutter.
- **Real internal overlap = inside Search-26's single ad group** (exact+phrase dupes of
  ng earsafe / bone conduction headphones / open ear headphones / earsafe headphones).
  Resolved by the B restructure.
- **The 800-lb gorilla is Shopping.** `SC - All Range` (SHOPPING, ENABLED) ran 539,640
  impr / ₹55,125 in 30d = ~89% of paid-search spend, vs ₹6,829 on Search. Same
  bone-conduction/open-ear intent. Separate auction (doesn't cause Search Lost IS Rank
  directly), but it's where the money is. **Decision needed: capture this demand via
  Search at all, or let Shopping own it?** Fund Campaign 2 accordingly.

## Do NOT
- Add budget to Search-26 to fix Rank (budget loss only 6.5%).
- Chase high IS on conquest (shokz) terms — structurally low IS is normal.

## Verification (after 7–10 days)
- [ ] Re-pull Windsor (`google_ads`, by campaign): `search_rank_lost_impression_share`
      down, `search_impression_share` up on both.
- [ ] "bone conduction headphones" `historical_quality_score` ≥ 6–7, ad relevance no
      longer Below Average.
- [ ] Real ROAS (Purchase only) holds within target as IS climbs.

## Execution notes
- tROAS/strategy change, restructure, ad copy, LP = **manual in Google Ads UI**.
- Windsor.ai can action **budgets** and **pause/enable** only (e.g. the SafeBuds budget
  bump) — not bidding strategy or structure.
