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
- Sticky glass navbar with logo, section links, Shop CTA, mobile menu.
- Kinetic hero: masked line-by-line reveal "Hear Everything. Feel Nothing." + parallax framed product spotlight (real Comm 2.0).
- Editorial marquee of brand pillars.
- "The Open-Ear Revolution" flagship grid — 4 real products (Comm 2.0, Safebuds, Lite, OpenWire) with INR price/MRP on lit display-case cards linking to real product pages.
- "Beyond Audio" bento grid — 5 new categories (Wearables, Beauty Tech, Massagers, Car Tech, Mobile Accessories).
- Numbered manifesto "Why Open Ear?" with hover-active stroke numbers.
- "Did You Know?" stats + parallax lifestyle image.
- In-media logos strip.
- Footer: newsletter (static), link columns, socials, giant NG EARSAFE wordmark.

## Notes
- New-category imagery uses premium stock (brand has no photos yet for these lines).
- Newsletter form is front-end only (no email backend).

## Backlog / Next
- P1: Wire newsletter to a real provider (Resend) + capture leads.
- P1: Add real product images/prices for new categories once brand supplies them.
- P2: Product quick-view modal; per-category landing sections.
