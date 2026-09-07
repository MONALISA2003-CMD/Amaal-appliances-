# Amaal Commerce Catalogue — Continuation

## Working rule
This file is the living handover document. Update it after every substantial build/research cycle. Do not use numbered phases as the project history. Use capability names so future ZIPs remain understandable.

## Current build snapshot
- Catalogue records currently in this starting repository: **48**.
- Unique product IDs: **48**.
- Unique slugs: **48**.
- Product image URLs: **48**.
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

## Next continuation target
Build the catalogue as a complete, reusable commerce frontend first, while keeping backend ownership and integration boundaries explicit. Every new ZIP should update this file rather than creating another numbered status file.
