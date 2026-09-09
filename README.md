# Amaal Appliances — Main Website Handoff

## 1. Project

Amaal Appliances is a Next.js ecommerce catalogue for Uganda, focused on home appliances, kitchen and small appliances, refrigeration, laundry, cooking, and consumer audio.

This handoff contains the current catalogue and storefront source. **No new products are introduced by this handoff.** The catalogue remains at **291 unique products**.

## 2. Current catalogue state

- 291 unique catalogue products.
- All catalogue records have a non-zero UGX price in the handoff source.
- The eight products that previously displayed “Price coming soon” have been assigned normal retail prices rather than promotional/discount prices.
- Product models, product IDs and existing catalogue structure are preserved.
- Brand navigation is limited to the active brand registry used by the website; brands with no catalogue item were removed earlier.
- The homepage uses an existing product image from each active category to represent that category.

## 3. Technology stack

### Application
- Next.js 16.3.4
- React 19.2.0
- TypeScript 5
- App Router
- Tailwind CSS 4.1.12 / PostCSS
- CSS design tokens and application styling in `app/globals.css` and `styles/tokens.css`

### State, forms and UI
- Zustand 5 for cart state
- React Hook Form 7 for checkout forms
- Zod 4 for validation
- TanStack React Query for query infrastructure
- Radix UI Slot
- clsx
- tailwind-merge
- class-variance-authority
- lucide-react for interface icons

### Media and deployment
- `next/image` for catalogue and brand imagery
- HTTPS image proxy route at `/api/image`
- Vercel deployment target
- npm-based build and development workflow

## 4. Application architecture

- `app/` — routes, pages, global styling and API routes.
- `components/` — reusable catalogue, layout and UI components.
- `lib/` — catalogue data, brand registry, categories, utilities and application logic.
- `public/` — static assets.
- `styles/` — design tokens.
- `scripts*`, `*.mjs`, `*.py` — retained project utilities and audit/research helpers where useful to maintainers.

The storefront has dedicated flows for the homepage, shop, search, product detail, cart, checkout, order confirmation and brands.

## 5. Visual and UX handoff

The storefront uses a soft-beige, warm-neutral visual system with brown accents and a clean, premium layout.

Implemented UX decisions include:

- Full-width shop catalogue without the previous sidebar/filter panel.
- Mobile-friendly navigation and shopping layouts.
- Homepage Shop by Category cards reuse real catalogue product imagery.
- Homepage Shop by Brand section removed.
- Footer removed from the rendered layout.
- Product cards show model information, availability and UGX pricing with clearer actions.
- Search, cart, checkout and confirmation screens use customer-facing language rather than implementation terminology.
- Brands are organised into Home appliances, Kitchen & small appliances, and Audio.
- Brand cards are intentionally logo-led: large logo presentation, no visible brand-name text inside the card, and no generic text fallback.

## 6. Brand-logo standard

Brand presentation uses real brand logo marks rather than Lucide icons, invented marks or plain-text substitutes. Official manufacturer logo sources are retained in `lib/brand-registry.ts` where available, together with source URLs. The registry also records the identity source for brands whose downloadable web asset is not exposed consistently by the manufacturer.

Logo cards are large, centred, spacious and clickable. The visible card is the logo itself; the accessible image `alt` and `aria-label` still identify the brand for screen readers.

Do not redraw, stylise, recolour or replace a trademark with a fabricated logo during future maintenance.

## 7. Catalogue research methodology

Product research was performed model-by-model and category-by-category using manufacturer information, credible retailers, Uganda-market listings and international retail references where local evidence was unavailable.

The research process prioritised:

1. Exact brand + exact model matching.
2. Manufacturer pages and official product information where available.
3. Credible retail listings for price and product-market validation.
4. Uganda retail evidence where available.
5. International retail evidence as a cross-check when Uganda evidence was incomplete.
6. Avoiding duplicate products already present in the catalogue.
7. Preserving exact model identifiers instead of replacing them with generic product descriptions.

Images were researched against the exact product/model wherever possible. The image system supports direct HTTPS sources, an internal image proxy, an external fallback proxy, and a branded product-image fallback for resilience.

## 8. Pricing methodology

Prices are intended as **normal retail / upper-normal retail reference prices in UGX**, not temporary sale prices, coupon prices or heavily discounted promotional prices.

Pricing research prioritised exact-model retail evidence. Where an exact Uganda price was available only as a discounted offer, the normal/crossed-out price or an upper-normal comparable retail level was preferred. Where exact local evidence was unavailable, international exact-model evidence and brand/category positioning were used to establish a reasonable upper-normal retail reference for Uganda.

The objective is a consistent customer-facing catalogue price rather than a claim that every figure is a live quotation from a specific Ugandan retailer.

## 9. Image methodology

The catalogue image audit established direct HTTPS image coverage across the product dataset. Product image components are resilient to remote-image failure through the `/api/image` route and fallback handling.

For future changes:

- Prefer exact-model product photography.
- Prefer manufacturer or credible retailer imagery.
- Keep product orientation and proportions intact.
- Avoid watermarks where a clean source is available.
- Do not substitute an unrelated model simply because it looks similar.

## 10. Build and deployment

### Local development

```bash
npm install
npm run dev
```

### Production build

```bash
npm run build
npm start
```

### Vercel

The project is structured for Vercel deployment. The authoritative production check should be performed against the deployed Vercel URL after each handoff, because local dependency availability is not guaranteed in this archive.

## 11. Handoff QA checklist

Before attaching this archive to the main Amaal website:

- Confirm exactly one Markdown file exists: `README.md`.
- Confirm there are 291 unique catalogue products.
- Confirm there are zero `price-coming-soon` catalogue records.
- Confirm there are zero zero-value product prices.
- Confirm the brands page contains only active registry brands.
- Confirm brand cards show large logo artwork and no visible text fallback.
- Confirm Shop by Category uses existing product imagery.
- Confirm the homepage Shop by Brand section remains removed.
- Confirm the footer remains removed.
- Confirm the shop sidebar/filter panel remains removed.
- Confirm customer-facing copy contains no frontend/backend implementation notes.
- Run the Vercel production build and inspect the deployed homepage, shop, brands, product detail, cart and checkout flows.

## 12. Important maintenance rule

This archive is a **handoff/stabilisation package, not a product-expansion package**. Do not add catalogue items, brands or speculative models unless the owner explicitly requests a new research and catalogue expansion pass.
