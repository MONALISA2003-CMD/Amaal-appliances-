# Amaal Commerce Catalogue

A production-minded Next.js frontend for Amaal's appliance and affordable consumer-audio catalogue. This is the temporary standalone starting repository for the broader Amaal commerce ecosystem.

## Start
```bash
npm install
npm run dev
```

## Verify
```bash
npm run lint
npm run audit:images
npm run build
```

## Read first
- `MASTER_BLUEPRINT_ARCHITECTURE.md` — whole architecture and technology choices.
- `CONTINUATION.md` — living build handover and what remains.
- `PRICE_MASTER.md` — every current catalogue item's customer-facing master price.
- `RESEARCH_AND_IMAGE_STANDARDS.md` — how product information, prices and images are researched.
- `MODULAR_BUILD.md` — how the application is being built and kept maintainable.
- `ECOMMERCE_EXPERIENCE.md` — working customer journey and future integration boundaries.
- `INTEGRATION_CONTRACT.md` — how this app joins Main Amaal.
- `.github/workflows/extract-amaal-commerce.yml` — repeatable phone-friendly ZIP extraction workflow.

## Important
This repository contains a frontend commerce foundation. It does not claim to provide production payment processing, live inventory, authentication or server-side order persistence yet.


## Current catalogue continuation
The refrigerator family has begun with five verified exact-model SKUs. See `REFRIGERATORS_RESEARCH.md` and `CONTINUATION.md` for the research trail and remaining refrigerator work.


## Brand identity implementation
The landing page and Brands directory now use the central `lib/brand-registry.ts`. Every supported Amaal brand is represented in the brand grid. `BrandLogo` prefers sourced brand assets, falls back safely when an asset cannot load, and keeps the brand name visible. The same component is used in brand browsing and product cards.

## Current catalogue continuation
Freezers are now the active continuation capability. Six exact-model Uganda-market freezer SKUs are implemented across Hisense, ADH, Midea, Roch and Beko. Samsung and LG freezer expansion remains open pending clean exact-model image/evidence verification.
