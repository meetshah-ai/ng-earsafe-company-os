# NG EarSafe — UAE Go-Live Task List (Tasks 1, 2, 4, 5)

**Goal:** take the UAE site live on `ngearsafe.com` (same-domain Shopify pages) so Meta ads can land directly and checkout/pixel stay on one domain.
**Scope:** Tasks 1, 2, 4, 5 only. **Task 3 (payments + Tabby/Tamara BNPL) is OUT of scope here but is a hard dependency for the BNPL claims on the pages — see ⚠️ in Task 4.**
**Owner tags:** `[CLAUDE]` = code/file edits Claude can do · `[SHOPIFY]` = Admin dashboard or Shopify MCP/API · `[VERIFY]` = acceptance check.

---

## TASK 1 — Shopify Markets + AED presentment currency
**Why:** without AED at checkout, UAE buyers see INR — the core friction. Enabling Markets also unlocks Shopify's native Geolocation app (used in Task 5).

- [ ] `[SHOPIFY]` Settings → **Markets** → add **United Arab Emirates** as a market (or add UAE to the existing International market).
- [ ] `[SHOPIFY]` In the UAE market → **add presentment currency AED**.
- [ ] `[VERIFY]` **Gateway dependency — check FIRST:** confirm the active gateway (Razorpay / Stripe) actually supports **AED presentment & settlement**.
  - If **yes** → enable AED, set price rounding (e.g., `.00`).
  - If **no** → fall back to **USD presentment** (already scoped in context) OR run the test in **INR** and note the friction. Do **not** block launch on AED if the gateway can't do it.
- [ ] `[SHOPIFY]` Set UAE market pricing so on-site prices match the LPs: **Comm 2.0 = AED 175**, **SafeBuds = AED 200** (per-market price override or rely on FX rounding — verify the displayed number matches the page).
- [ ] `[VERIFY]` Load checkout with a UAE shipping address → price shows in AED (or agreed fallback), amount matches the landing page.

**Done when:** a UAE-address checkout displays the correct currency and the amount matches the LP price.

---

## TASK 2 — Add UAE shipping zone
**Why:** UAE is currently in **no** shipping zone → UAE customers cannot complete checkout today.

- [ ] `[SHOPIFY]` Settings → **Shipping and delivery** → profile **"NG EarSafe Products"** (`gid://shopify/DeliveryProfile/125946626327`).
- [ ] `[SHOPIFY]` Open the **International** zone → **Add country: United Arab Emirates**.
- [ ] `[SHOPIFY]` Set rate: **₹1,500 flat (~$18)** to start (covers DHL/Aramex), **or ₹0 free** if cost is built into price for higher CVR. Recommendation: launch flat, switch to free if CVR is weak.
- [ ] `[VERIFY]` Add a UAE address at checkout → shipping option appears, order can proceed to payment step.

**Done when:** a UAE address returns a valid shipping rate and checkout reaches payment.

---

## TASK 4 — Deploy the 3 pages as Shopify templates + fix links
**Why:** the pages must render standalone on `ngearsafe.com/pages/...` with working cross-links.

### 4a. Rewrite inter-page links `[CLAUDE]`
Replace every relative `*.html` link across all three files with Shopify page handles:

| Old (relative) | New (Shopify) |
|---|---|
| `UAE_Homepage.html` | `/pages/uae-home` |
| `UAE_Comm2_LP.html` | `/pages/uae-comm2` |
| `UAE_SafeBuds_LP.html` | `/pages/uae-safebuds` |

- [ ] `[CLAUDE]` Update nav links, product-card CTAs, "Discover/Shop" buttons, scenario links, footer links, final-CTA buttons in **all 3 files**.
- [ ] `[CLAUDE]` On the UAE pages' footer "switch region" link → use plain `<a href="https://ngearsafe.com">` (the geo-snippet is NOT loaded on `layout none` pages, so JS `NGsetRegion` is undefined there).
- [ ] ⚠️ `[CLAUDE]` **BNPL guard:** the pages advertise "4× with Tabby/Tamara." Until Task 3 enables those gateways, **comment out / hide the `.bnpl` lines** (Comm + SafeBuds) and the announcement BNPL mention — shipping a payment method that isn't live is a false claim. Re-enable when Task 3 lands.

### 4b. Wrap as Shopify templates `[CLAUDE]` → `[SHOPIFY]`
For each file create a theme template `templates/page.<handle>.liquid` with **exactly** this wrapper:
```liquid
{% layout none %}
{% raw %}
<!DOCTYPE html> … entire page HTML … </html>
{% endraw %}
```
- [ ] `[CLAUDE]` Produce the 3 wrapped template files: `page.uae-home.liquid`, `page.uae-comm2.liquid`, `page.uae-safebuds.liquid`. (`layout none` = no theme header/footer; `{% raw %}` = stop Liquid parsing our CSS/JS braces.)

### 4c. Upload + create pages `[SHOPIFY]`
- [ ] `[SHOPIFY]` Online Store → Themes → Edit code → **Templates → Add a new template → page → `uae-home`** (repeat for `uae-comm2`, `uae-safebuds`); paste each wrapped file.
- [ ] `[SHOPIFY]` Online Store → **Pages → Add page** ×3; set handles to `uae-home`, `uae-comm2`, `uae-safebuds`; assign each the matching template; set to visible.
- [ ] ⚠️ `[SHOPIFY]` **Pixel on `layout none` pages:** a Meta pixel hardcoded in `theme.liquid <head>` will **NOT** load on these templates (they skip the theme layout). Install the pixel via **Settings → Customer events (Web Pixel)** or the **Meta sales-channel pixel** — those fire on all storefront pages including custom templates. Otherwise ViewContent/ATC won't fire on the UAE pages and the test is unmeasurable.
- [ ] `[VERIFY]` Visit all 3 `/pages/...` URLs → render correctly, no theme chrome, **every nav/CTA/cross-link resolves** (no 404), product images load, cart buttons open the correct variant.
- [ ] `[VERIFY]` Meta Pixel Helper shows **ViewContent firing on `/pages/uae-home`** and a product page.

**Done when:** all 3 pages are live on `/pages/...`, fully styled, inter-navigation + cart links work, and the pixel fires on them.

---

## TASK 5 — Geolocation country selector (Shokz-style)
**Why:** organic/direct visitors who land on the India store should be offered the UAE store. (Paid traffic skips this — ads land on `/pages/...` directly.)

Pick **ONE** route:

### Route A (recommended) — Shopify native Geolocation app `[SHOPIFY]`
- [ ] Install Shopify's free **Geolocation** app (available once Markets/Task 1 is set).
- [ ] Configure the recommendation bar to point UAE visitors to the UAE market/pages.
- [ ] `[VERIFY]` UAE IP (VPN) on India store → "you're in the UAE" prompt appears.

### Route B — custom branded modal `[CLAUDE]` → `[SHOPIFY]`
- [ ] `[CLAUDE]` In `UAE_GeoSelector_Snippet.html`, set `uaeUrl: 'https://ngearsafe.com/pages/uae-home'`.
- [ ] `[SHOPIFY]` Paste the snippet (style + modal + script) into `layout/theme.liquid` just before `</body>` on the **India** theme only.
- [ ] `[VERIFY]` UAE IP (VPN), cleared localStorage → modal shows; "Shop UAE store" redirects to `/pages/uae-home`; "Stay" dismisses and doesn't nag on reload.

**Done when:** a UAE visitor on the India homepage is offered the UAE store and the choice persists.

---

## Execution order & dependencies
1. **Task 2** (shipping) and **Task 1** (market/currency) — independent, do in parallel. Both gate a completable UAE checkout.
2. **Task 4** — can build files anytime; publishing should follow Task 1 so prices/currency align.
3. **Task 5** — do **after** Task 4 (needs `/pages/uae-home` to exist); Route A also needs Task 1.
4. **⚠️ Task 3 (payments + BNPL)** — not in this list, but: checkout can't be *completed* without international card payment enabled, and the BNPL lines must stay hidden (Task 4c) until Tabby/Tamara are live.

## Final pre-ad smoke test `[VERIFY]`
- [ ] Full UAE-address purchase attempt end-to-end (test order) on each product.
- [ ] Meta pixel fires ViewContent → AddToCart → InitiateCheckout → Purchase on one domain.
- [ ] All 3 pages mobile-checked at 375px.
