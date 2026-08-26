# NG EarSafe — Homepage Redesign (PRD)

## Original Problem Statement
Redesign the homepage of ngearsafe.com. Brand is an India-based open-ear audio company now expanding into Beauty Tech, Wearables, Massagers, Car Tech Accessories and Mobile Accessories. Keep the open-ear core message intact while showcasing new products. Move from an informational feel to a premium eCommerce vibe. Style references: Shokz, JBL, Bang & Olufsen, Daily Objects.

## User Choices
- Static landing page (no cart/checkout backend)
- Hero focus: open-ear audio is the star; new categories secondary
- Visual vibe: sleek dark & premium (Bang & Olufsen style)
- Use real products/prices from ngearsafe.com
- Accent: logo colors only (navy #0F2A44 + cyan #3FB8C4 on deep midnight #050B14)

## Architecture
- Frontend-only React SPA (CRA + Tailwind + shadcn). Backend untouched (default template, unused).
- Motion: framer-motion (scroll reveals, kinetic hero, parallax) + lenis (smooth momentum scroll).
- Fonts: Cabinet Grotesk (display) + Satoshi (body) via Fontshare.
- Data in `src/data/site.js` (real products, categories, manifesto, stats, media).

## Implemented (2026-06)
- Sticky glass navbar (offsets below announcement bar), kinetic hero, editorial marquee.
- "The Open-Ear Revolution" flagship grid — 4 real audio products on lit display-case cards.
- **Announcement bar**: slim rotating top banner (free shipping / new drop / warranty), dismissible.
- **Category sliders** (`CategoryShowcase`): "Beyond Audio" with category pills + one embla slider per category (Wearables, Beauty Tech, Massagers, Car Tech, Mobile Accessories), each showing top-selling products.
- **Quick View** (`QuickView` context + modal): click any product card → modal with large image, price/MRP, description, spec list, and "View on store" CTA.
- **Live newsletter**: footer form → `POST /api/newsletter/subscribe` → stores subscriber in Mongo, sends owner notification + branded welcome via Emergent-managed Resend. Best-effort email (signup always succeeds once captured); dedupe + email validation.
- Numbered manifesto, "Did You Know?" parallax stats, in-media logos, footer with giant wordmark.
- **Wishlist** (`Wishlist` context): heart toggle on every product card + quick view, navbar heart with live count badge, slide-in drawer to revisit saved items (View/Remove), persisted in localStorage.

## Backend
- `POST /api/newsletter/subscribe` (server.py): Subscriber model, Mongo `subscribers` collection, Resend send via guardrail gate. Config in .env: EMERGENT_EMAIL_KEY, EMAIL_FROM_NAME=NG EarSafe, OWNER_EMAIL, EMAIL_REPLY_TO.

## Notes
- New-category products & imagery are realistic PLACEHOLDERS (brand has no live SKUs yet) — swap in site.js `catalog`.
- Owner-notification deliverability depends on a real inbox: OWNER_EMAIL currently defaults to placeholder `hello@ngearsafe.com` (Resend may block undeliverable placeholders). Set a real inbox in backend/.env to receive alerts.

## Backlog / Next
- P1: Set real OWNER_EMAIL inbox; add real product images/prices for new categories.
- P2: Per-category landing pages; wishlist; cart.
