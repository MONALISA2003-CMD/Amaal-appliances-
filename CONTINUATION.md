# Amaal Commerce Catalogue — Continuation

## Working rule
This file is the living handover document. Update it after every substantial build/research cycle. Do not use numbered phases as the project history. Use capability names so future ZIPs remain understandable.

## Current build snapshot
- Catalogue records currently in this repository: **53**.
- Unique product IDs: **53**.
- Unique slugs: **53**.
- Product image URLs: **53**.
- Every current record has a UGX master price field.
- Product detail routes exist for every current slug.
- Shop, search, brand navigation and category navigation are wired.
- Cart persistence and quantity controls are implemented with Zustand.
- Product cards can add directly to bag.
- Product detail supports Add to bag, Buy now and View bag.
- Checkout form has React Hook Form + Zod validation.
- Order-request confirmation route is implemented as a frontend integration placeholder, not a production order service.
- `/api/health` and `/api/catalogue` provide lightweight integration endpoints.
- Next Image remote hosts are explicitly allow-listed.

## Built foundations
### Catalogue
- Typed Product model.
- Exact model/SKU identity fields.
- One visible master price per product.
- Structured features and specifications.
- Availability and confidence metadata.
- Image source and cleanliness metadata.

### Commerce UX
- Product discovery.
- Product detail.
- Add to bag.
- Buy now.
- Persistent bag.
- Quantity increase/decrease.
- Remove item.
- Clear bag.
- Checkout form.
- Order confirmation request.

### Engineering
- Next.js App Router.
- React Server Components by default.
- TypeScript.
- Zustand.
- React Hook Form + Zod.
- TanStack Query dependency prepared for future server-state work.
- Tailwind/shadcn/Radix foundation prepared without coupling domain code to UI primitives.
- Vercel-compatible image configuration.
- Lightweight route-level API boundary.

## What is still missing
### Catalogue expansion
The current data set is only the existing researched foundation. Continue the broader Amaal catalogue using the named product families and brands in `MASTER_BLUEPRINT_ARCHITECTURE.md`. Do not narrow the project to small appliances or audio only.

### Research and verification
- Continue exact-model Uganda price research.
- Cross-check suspicious price outliers before freezing a master price.
- Prefer OEM/manufacturer information for specifications.
- Prefer clean OEM or credible retailer product photography.
- Visually inspect images where URL-level checks cannot prove watermark absence.
- Record source and confidence for every researched SKU.

### Commerce backend
- Customer authentication owned by Main Amaal.
- Shared cart service.
- Inventory service.
- Server-side price authority.
- Payment gateway.
- Order persistence.
- Delivery/fulfilment workflow.
- Customer notifications.

### Quality
- Fresh Vercel production build after every dependency/TypeScript change.
- Automated tests for cart and checkout rules.
- Accessibility pass.
- Mobile interaction pass on real devices.
- Performance/LCP image review.
- Broken-link and remote-image health checks.
- Full visual image watermark audit.

## Latest catalogue continuation: Refrigerators
- Added five verified refrigerator SKUs across LG, Samsung, Midea, Roch and ADH.
- Added the `Refrigerators` category to the typed catalogue and shop filters.
- Added manufacturer/local research provenance and image-clean metadata to the new records.
- Added LG and Samsung image hosts to the Next.js image allow-list.
- Added `REFRIGERATORS_RESEARCH.md` for the living refrigerator research trail.

## What remains in Refrigerators
- TCL expansion with direct model-matched images.
- More LG, Samsung, Midea, Roch and ADH models.
- Beko direct image verification.
- Visual watermark review for every refrigerator image.
- Final refrigerator price and specification audit.

## Next continuation target
Finish the refrigerator family to the agreed brand scope before moving to Freezers. Keep backend ownership and integration boundaries explicit. Every new ZIP should update this file rather than creating another numbered status file.


## Brand identity implementation
The landing page and Brands directory now use the central `lib/brand-registry.ts`. Every supported Amaal brand is represented in the brand grid. `BrandLogo` prefers sourced brand assets, falls back safely when an asset cannot load, and keeps the brand name visible. The same component is used in brand browsing and product cards.


## Freezers continuation
Freezers have been added as the next catalogue capability. Current implementation contains exact-model Uganda observations for Hisense, ADH, Midea, Roch and Beko, with Samsung/LG expansion still subject to clean exact-model image and evidence verification.

## Refrigeration gate before moving on
The refrigerator and freezer families have undergone a dedicated quality correction pass. Do not advance to the next catalogue capability by treating them as complete. Current gate: 5 refrigerators + 6 freezers, 59 total catalogue products, all refrigeration records passing the dedicated audit. Continue refrigeration expansion and visual verification until the agreed brand/model coverage is sufficiently complete.
