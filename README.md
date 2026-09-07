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
