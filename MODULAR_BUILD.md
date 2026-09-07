# Amaal Modular Build

## Build philosophy
The repository is a **modular monolith frontend**. Modules are separated by responsibility, while the application stays simple enough to deploy and maintain as one Next.js project.

## Module map
```text
app/                         routes and page composition
components/layout/           global navigation/layout
components/catalogue/        reusable catalogue presentation
components/commerce/         cart and commerce interactions
data/                        current structured catalogue source
lib/                         domain helpers and state boundaries
styles/                      design tokens
types/                       domain types
scripts/                     repeatable audits
*.md                         architecture, research, continuation and handover
.github/workflows/           repeatable ZIP extraction workflow
```

## Why modularity matters
- Catalogue growth does not require rewriting commerce components.
- Commerce state does not leak into server-rendered product data.
- Main Amaal can replace local state/API boundaries later.
- Research metadata stays separate from customer-facing presentation.
- UI can evolve without changing product identity rules.
- Backend integration can happen module-by-module.

## Frontend rules
- Prefer Server Components.
- Add `'use client'` only where browser state/events are required.
- Keep data transformations out of JSX where reusable.
- Never hard-code product details into multiple pages.
- Keep customer prices as integer UGX values.
- Use exact product IDs/slugs everywhere.
- Keep buttons connected to real state transitions, not decorative click handlers.

## Commerce flow
```text
Product card
   ↓ Add to bag
Zustand persisted cart
   ↓ quantity/remove
Cart summary
   ↓ checkout
Validated checkout form
   ↓ order request
Confirmation boundary
   ↓ future integration
Main Amaal order/payment/inventory services
```

## Server-state evolution
TanStack Query is included as the client-server state layer for the point where live APIs are introduced. Until then, the local typed catalogue is intentionally deterministic and does not pretend to be a live inventory service.

## UI foundation
The app retains lightweight CSS design tokens for predictable visual control while the package stack includes Tailwind, Radix and shadcn-compatible primitives. Domain modules should not depend directly on a vendor-specific component implementation.

## Definition of done for a catalogue module
- Exact product identity confirmed.
- Reliable product information recorded.
- Uganda price evidence researched.
- One master UGX price selected.
- Clean exact-model image sourced.
- Image URL audit passed.
- Visual image audit performed when required.
- Product route works.
- Product card works.
- Add-to-bag works.
- Cart totals update correctly.
- Mobile layout checked.
- Vercel build passes.
- Continuation and price documents updated.
