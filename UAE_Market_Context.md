# NG EarSafe — UAE Market Execution Context
## D2C Demand Test | Comm 2.0 + SafeBuds | Jun 2026

---

## PROJECT GOAL

Run a $200–300 USD Meta ad test targeting Indian expats in UAE. Measure CVR vs India baseline. Validate demand before any inventory commitment or entity setup. Ship from India stock if orders come.

**Test verdict metric:** CPP ≤ $12 and CVR ≥ 0.5% = proceed to scale. Otherwise pivot to Singapore.

---

## SHOPIFY STORE STATE

- **Store:** ngearsafe.com (Shopify Basic, INR currency)
- **Current admin:** meetshah@ngearsafe.com

### Products for UAE test

| Product | Shopify Handle | Variant ID | Stock | India Price | UAE Price |
|---|---|---|---|---|---|
| Comm 2.0 | `noise-cancelling-open-ear-headphones-with-mic-ng-ear-safe-comm-2-0` | `50399386173719` | 9,573 units ✓ | ₹3,299 | AED 175 / $48 |
| SafeBuds Black | `ngwehear` | `51380726497559` | 9,759 units ✓ | ₹2,999 | AED 200 / $55 |
| SafeBuds Ivory | `ngwehear` | `51380726530327` | 9,969 units ✓ | ₹2,999 | AED 200 / $55 |

### Direct checkout links (for LP buttons)
- Comm 2.0: `https://ngearsafe.com/cart/50399386173719:1`
- SafeBuds Black: `https://ngearsafe.com/cart/51380726497559:1`
- SafeBuds Ivory: `https://ngearsafe.com/cart/51380726530327:1`

### Product images (CDN)
- Comm 2.0: `https://cdn.shopify.com/s/files/1/0804/5762/9975/files/Comm2Listing1.webp?v=1745217871`
- SafeBuds: `https://cdn.shopify.com/s/files/1/0804/5762/9975/files/Untitled_design_1.png?v=1776592936`

---

## SETUP CHECKLIST — WHAT'S DONE vs WHAT'S NEEDED

### Shopify setup (required before ads go live)

| Task | Status | How to do it |
|---|---|---|
| UAE shipping zone | NOT DONE | Shopify Admin → Settings → Shipping → "NG EarSafe Products" profile → International zone → Add UAE → Set flat rate ₹1,500 (~$18) |
| International payment | NOT DONE | Check Razorpay dashboard: Settings → Payment Methods → enable International Cards (Visa/MC). OR add Stripe as secondary gateway (stripe.com/in) |
| USD presentment currency | NOT DONE | Shopify Admin → Settings → Markets → International → Add currency: USD. Requires payment gateway to support multi-currency. |
| UAE landing page — Comm 2.0 | DONE — file: `UAE_Comm2_LP.html` | Upload to Shopify Files or host externally via Netlify/GitHub Pages |
| UAE landing page — SafeBuds | DONE — file: `UAE_SafeBuds_LP.html` | Built Jun 17 (minimalist/Apple-Nothing style). Arabic translation CONFIRMED & featured. Hardware specs (battery/BT/IPX) still need confirmation before publish |

### Files created
- `UAE_Comm2_LP.html` — Comm 2.0 UAE landing page (complete, ready to deploy)
- `UAE_Market_Context.md` — this file

---

## SHIPPING SETUP DETAILS

### Current state (as queried Jun 17 2026)
- "General profile" = India domestic only (free shipping)
- "NG EarSafe Products" profile (ID: `gid://shopify/DeliveryProfile/125946626327`) = International zone with UK only (free shipping at ₹0)
- **UAE is not in any zone — UAE customers cannot check out**

### What to add
**Option A (simplest for test):** Add UAE to the existing International zone in "NG EarSafe Products" profile
- Flat rate: ₹1,500 (≈$18) — transparent, covers DHL/Aramex cost
- OR: ₹0 (free shipping) — builds cost into product price, improves CVR

**Option B (cleaner long term):** Create a separate UAE zone
- Allows UAE-specific rates independent of other international markets
- Better for when UAE scales

Recommendation: Add UAE to existing International zone with ₹1,500 flat rate. If CVR is low in the test, reduce to ₹0 free shipping and test again.

---

## PAYMENT GATEWAY NOTES

### Current situation
- Store likely uses **Razorpay** (standard India Shopify setup)
- Razorpay DOES support international credit cards (Visa/MC) — but must be enabled in Razorpay dashboard
- Steps: login.razorpay.com → Settings → Payment Methods → enable International Cards
- UAE buyers paying by card should work once enabled

### If Razorpay doesn't work for UAE
- Add **Stripe** as payment gateway (stripe.com/in — India entity)
- Stripe supports international cards out of the box
- Can run alongside Razorpay (Razorpay for India, Stripe for international)
- In Shopify: Settings → Payments → Add payment provider → Stripe

### Note on AED/USD display
- UAE buyers will see price in INR at checkout unless USD is enabled
- This is a conversion friction point — address it after validating any UAE purchases first
- For the $200 test: acceptable to have INR checkout (some buyers will still complete)
- For scale: enable USD in Shopify Markets

---

## META CAMPAIGN BRIEF — UAE TEST

### Campaign structure
```
Campaign: UAE Demand Test — Comm 2.0
Objective: Sales / Conversions
Budget: $100 (Week 1) → $100 more if CVR ≥ 0.5% (Week 2)
```

### Ad set targeting
```
Location: United Arab Emirates
Language: Hindi (primary) + English (secondary)
Interests: India + technology/electronics + work from home
OR: Demographics — born in India, currently in UAE
Age: 25–45
Placement: Facebook Feed + Instagram Feed + Instagram Stories
```

### Creative to use (Week 1 — zero creative investment)
Use existing best-performing Techopedia/Gadgetbhai-style India creative. 
These resonate with Indian expats who already follow Indian tech content.
Do NOT adapt creative for Week 1 — test the audience first.

### Ad destination
`https://ngearsafe.com/products/noise-cancelling-open-ear-headphones-with-mic-ng-ear-safe-comm-2-0`
OR: UAE_Comm2_LP.html (once hosted)

### Pixel events to track
- ViewContent
- AddToCart
- InitiateCheckout
- Purchase
- (Install Meta pixel UAE variant URL tag for isolation if possible)

---

## PASS / FAIL THRESHOLDS

| Metric | India baseline | UAE pass (Week 2 scale) | UAE fail (pivot to Singapore) |
|---|---|---|---|
| Link CTR (Meta ad) | 1.5–2.5% | ≥ 1.0% | < 0.6% |
| Landing page → ATC | 4.5% | ≥ 2.5% | < 1.5% |
| ATC → Purchase CVR | 28.8% | ≥ 15% | < 10% |
| Overall site CVR | ~1.2–1.5% | ≥ 0.5% | < 0.3% |
| CPP | ₹291–329 (~$3.50–4.00) | ≤ $12 | > $15 |
| ROAS | 9–11× | ≥ 4× | < 3× |

**If UAE Week 1 ($100) produces 0 purchases:** Stop. Audit checkout for UAE blockers (shipping zone, payment). Fix, then re-run.

**If UAE Week 1 produces 1–2 purchases:** Positive signal. Expand to $100 Week 2 before declaring pass/fail.

---

## AUDIENCE INTELLIGENCE — UAE

### Primary target: Indian expats in UAE
- 4.39M Indian nationals in UAE (37.96% of total population)
- Dominant in: real estate brokerage, IT services, construction management, healthcare
- Already understand the open-ear concept from India market exposure
- Respond to Indian tech review creative (Technical Guruji, Gadgetbhai, Techopedia)

### Priority segment: Dubai real estate brokers
- 6,714 new brokers registered H1 2025 alone
- 30–50 calls/day typical for active brokers
- Indian-dominated community in Dubai
- Currently using AirPods or nothing — no dedicated professional open-ear headset
- Target with: Dubai broker Facebook groups + LinkedIn broker hashtags

### Secondary segment: Indian IT professionals in UAE
- TCS, Accenture, Infosys, Wipro UAE offices
- Teams/Zoom on all day in office + home
- Same profile as India WFH buyer

---

## COMPETITOR LANDSCAPE — UAE

| Brand | Price (AED) | UAE D2C? | Meta paid ads? | Gap NG can own |
|---|---|---|---|---|
| Shokz (official + "Shokzme" reseller) | 309–949 | shokz.ae + Sharaf DG + Amazon.ae | **YES — ACTIVE paid Meta in UAE** (verified Meta Ad Library Jun 19 2026). Running OpenDots ONE + OpenRun Pro 2 + sound-quality creative. Dubai office (JLT). | Professional on-call / boom-mic (still open) |
| Anker / soundcore | mid | Amazon.ae | YES — running Aeroclip open earbuds, deals/bundle-led | — |
| Dropship (Dr.Sarah Mitchell/GluCent, ALOVA, Foley, AquaBeats) | low | D2C / Amazon.ae | YES — heavy. Hooks: "Mayo Clinic Recommended," scarcity, "free UAE shipping," "Dubai same-city delivery," swim/sport | — |
| Oladance | 550–750 | Amazon.ae | Unknown | Budget professional (unclaimed) |
| Nothing Ear | 600+ | Amazon.ae + Sharaf DG | Unknown | — |
| **NG Comm 2.0** | **~175** | **LP to build** | **Test to run** | **Professional on-call / boom-mic (OPEN)** |
| **NG SafeBuds** | **~200** | **LP to build** | **Test to run** | **Translation/multilingual (OPEN)** |

**CORRECTED KEY INSIGHT (Jun 19 2026):** The earlier assumption that "Shokz does NOT run paid Meta in UAE (affiliate-only)" is FALSE — verified via live Meta Ad Library. Shokz runs an active, funded paid-Meta presence (official page + Shokzme reseller) pushing OpenDots ONE and OpenRun Pro 2, and is moving into the office/lifestyle space. NG is NOT entering an empty lane. Two lanes still genuinely unclaimed in UAE Meta: (1) **professional / on-calls with a boom mic** — no open-ear advertiser owns this; Shokz OpenDots is a clip earbud with no boom mic; (2) **live translation / multilingual (Arabic↔English)** — zero competitors.

**Structural conversion risks (research Jun 19 2026):** (a) COD is still ~71% of UAE retail and Indian expats default to it — NG checkout is international-card-only, INR currency, shipping from India (5–10 day delivery). Cold traffic into this = double friction. (b) WhatsApp is the dominant UAE closing channel (and NG's best India channel at 4.93% CVR) — a WhatsApp-assisted order path may rescue more test budget than the website checkout. Address both before/alongside launch.

---

## SAFEBUDS UAE ANGLE — TRANSLATION

UAE has 200+ nationalities. Key language pairs for SafeBuds:
- Arabic ↔ English (business meetings)
- Arabic ↔ Hindi/Urdu (broker-to-worker coordination)
- English ↔ Malayalam/Tagalog (office multilingual teams)

**Pre-check — RESOLVED (Jun 17 2026):** SphereLingo Arabic ↔ English live translation CONFIRMED working. This is the globally unclaimed market angle — Arabic ↔ English is now the lead hook on UAE_SafeBuds_LP.html (Feature 02). Greenlit for SafeBuds UAE ads.

---

## INFLUENCERS TO APPROACH (BEFORE PAID SCALE)

| Influencer | Followers | Platform | Budget | Priority |
|---|---|---|---|---|
| Technical Guruji (Gaurav Chaudhary) | 23M+ | YouTube | AED 25,000–75,000 | After UAE validation |
| Nasnas K | 450K+ | Instagram | AED 5,000–15,000 | Ship free unit first |
| Emkwan | 450K+ | YouTube/Instagram | AED 5,000–15,000 | Ship free unit first |

**Action:** Ship 2 free Comm 2.0 units to Nasnas K and Emkwan immediately. Their reviews become social proof for the paid ad landing page.

---

## LANDING PAGE URLS (to update once deployed)

| Page | File | Deploy URL | Status |
|---|---|---|---|
| Comm 2.0 UAE | `UAE_Comm2_LP.html` | TBD | Built, not deployed |
| SafeBuds UAE | TBD | TBD | Not built yet |

### Deployment options
1. **Shopify Files** — upload HTML as a file, access via CDN URL (read-only, no dynamic checkout)
2. **Netlify** (recommended) — drag-and-drop deploy, free, HTTPS, custom domain possible (e.g. uae.ngearsafe.com)
3. **GitHub Pages** — free, requires repo setup

Netlify is the fastest path. Go to netlify.com → Drag UAE_Comm2_LP.html into drop zone → deployed in 60 seconds.

---

## PRICING REFERENCE

| Product | India D2C | UAE price (AED) | UAE price (USD) | Shokz equivalent (AED) |
|---|---|---|---|---|
| Comm 2.0 | ₹3,299 (~$39) | AED 175 | $48 | AED 309+ (Shokz Openrun) |
| SafeBuds | ₹2,999 (~$36) | AED 200 | $55 | No direct competitor |

---

## CERTIFICATION REQUIREMENT

**Current phase (demand test):** ZERO certifications required. Ship each order as a retail parcel from India.
**When needed (scale phase):** CE mark required if volume > 500 units/month or retail listing on Amazon.ae or Sharaf DG.

---

## SPRINT LOG

| Sprint | Dates | Action | Outcome |
|---|---|---|---|
| Sprint 0 | Jun 17 2026 | Context setup, LP built | Done |
| Sprint 1 | Jun 17–24 | Fix shipping zone + payment → launch $100 UAE test | Pending |
| Sprint 2 | Jun 25–Jul 1 | Measure results → pass/fail decision | Pending |

---

*UAE_Market_Context.md v1.0 | Created Jun 17 2026*  
*Paired files: UAE_Comm2_LP.html, UAE_SafeBuds_LP.html (TBD)*  
*Paired plan: /Users/meetshah/.claude/plans/go-deeper-in-estimating-groovy-feather.md*
