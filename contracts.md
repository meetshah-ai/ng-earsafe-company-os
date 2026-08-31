# SafeBuds PDP — API Contracts

## Overview
Frontend-functional PDP with a lightweight FastAPI + MongoDB backend for:
1. Analytics event capture (CRO tracking)
2. Order creation (demo checkout / buy now)
3. Optional product + reviews read endpoint

Real Shopify/Gokwik/Meta Pixel/Judge.me are simulated in this sandbox.

## Data currently mocked in frontend (`/app/frontend/src/mock.js`)
- PRODUCT, VARIANTS, GALLERY, SPECS, FAQS, REVIEWS, COMPARISON, etc.
- Reviews/rating are real values scraped from reference PDP (4.53 / 17).
- These stay in mock.js (static content). Backend does NOT replace them for the demo.

## Backend endpoints (all prefixed `/api`)

### POST /api/events
Store a CRO analytics event.
Body: `{ session_id: str, event: str, payload: object }`
Response: `{ id, ok: true }`
Notes: frontend `StoreContext.track()` already POSTs here (fire-and-forget). Dedupe of
"once" events happens client-side; server just records.

### GET /api/events/summary
Returns counts grouped by event (for verifying tracking).
Response: `{ total: int, by_event: { event: count } }`

### POST /api/orders
Create a demo order on checkout / buy now.
Body: `{ session_id, items: [{variantId, variantName, name, price, qty}], total, kind: "buy_now"|"checkout" }`
Response: `{ id, order_number, status: "created" }`

### GET /api/orders/{id}
Fetch a created order (for confirmation).

## Frontend integration
- `track()` in StoreContext already calls `POST /api/events` (no change needed).
- CartDrawer checkout + BuyBox buyNow: after tracking, optionally POST /api/orders.
- Keep all UI functional even if backend call fails (graceful catch).

## Mongo collections
- `events`  { id, session_id, event, payload, ts }
- `orders`  { id, order_number, session_id, items, total, kind, status, ts }
