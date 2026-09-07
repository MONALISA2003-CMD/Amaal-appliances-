# Amaal Commerce Catalogue — Master Blueprint Architecture

## Purpose
This repository is the **Amaal customer-facing appliance and consumer-audio sub-application**. It is being built as a production-minded frontend, not a visual mockup. The catalogue can operate independently while remaining contract-compatible with the wider Amaal platform.

## Product boundary
This sub-app covers the appliance and affordable consumer-audio catalogue. TVs are outside this repository's scope. The long-term catalogue includes refrigerators, freezers, washing machines, dryers, cookers, ovens, hobs, cooker hoods, microwaves, cleaning/floor care, home comfort, fans, small kitchen appliances, blenders/juicers, quick cooking/frying and affordable consumer audio.

## Architecture
```text
                         MAIN AMAAL PLATFORM
                                  │
             ┌────────────────────┼────────────────────┐
             │                    │                    │
          Account                Cart               Orders
             │                    │                    │
             └────────────────────┼────────────────────┘
                                  │ integration contract
                                  ▼
                 AMAAL CATALOGUE / COMMERCE SUB-APP
                                  │
       ┌──────────────────────────┼──────────────────────────┐
       │                          │                          │
   Presentation              Commerce state              Domain data
       │                          │                          │
 Next.js App Router          Zustand cart             Product/SKU model
 React Server Components     Wishlist/compare*          Price master
 Client Components           UI state                    Media metadata
       │                          │                          │
       ├───────────────┬──────────┴──────────────┬───────────┤
       ▼               ▼                         ▼           ▼
   Search/Shop      Product detail            Cart       Checkout UI
       │               │                         │           │
       └───────────────┴──────────────┬──────────┴───────────┘
                                      ▼
                           API / repository boundary
                                      │
                         future production services
                                      │
              ┌───────────────┬───────┴────────┬──────────────┐
              ▼               ▼                ▼              ▼
          PostgreSQL       Inventory         Payments       Orders
          + PostGIS        / availability     gateway       / customer
```
`*` Wishlist/compare are frontend-ready extension points; they are not presented as completed backend features.

## Technology stack and why
| Layer | Technology | Why |
|---|---|---|
| Framework | Next.js 16 App Router | Strong routing, server rendering, image handling and Vercel deployment fit. |
| UI runtime | React 19 | Component model for reusable catalogue and commerce interfaces. |
| Language | TypeScript 5 | Catches catalogue/schema mistakes before production. |
| Styling | CSS design tokens + Tailwind CSS foundation | Tokens preserve the current premium visual language; Tailwind is available for scalable utility composition. |
| UI primitives | Radix UI + shadcn/ui-compatible structure | Accessible, composable primitives without locking business logic to a design library. |
| Icons | Lucide React | Consistent lightweight interface icons. |
| Client state | Zustand | Small, predictable cart/UI state with persistence. |
| Server state | TanStack Query | Prepared for API-backed inventory/catalogue refreshes when the backend arrives. |
| Forms | React Hook Form + Zod | Fast forms with schema validation and clear error handling. |
| Styling utilities | clsx + tailwind-merge + CVA | Safe class composition and reusable component variants. |
| API boundary | Next route handlers + repository-ready modules | Keeps the current local catalogue replaceable by a production API. |
| Database target | PostgreSQL | ACID transactional source of truth for future orders, products and pricing. |
| Geo target | PostGIS | Appropriate when delivery/store/service geography is introduced. |
| Deployment | Vercel | Natural fit for Next.js production delivery and previews. |

## Domain model
```text
Product (canonical product family)
  └── Variant / SKU (exact purchasable item)
        └── Master Price (one current customer price)
              └── Cart Line (SKU + quantity)
                    └── Checkout
                          └── Order
```
The browser may display a price, but production checkout must re-read the authoritative SKU price server-side. Research observations, price ranges and confidence remain internal research data and are never exposed as fake discounts.

## Frontend application boundaries
- Server Components by default for catalogue pages and SEO-friendly product content.
- Client Components only where state or interaction is required: cart, quantity controls, checkout form and interactive controls.
- No duplicated product/category definitions across pages.
- Shared formatting, filtering and lookup functions live under `lib/`.
- Product data remains structured and typed so a database/API can replace the current local source without rewriting the UI.
- Images use Next.js remote image configuration and a deliberate source-quality audit.

## Production evolution
1. Replace local product source with a repository/API layer backed by PostgreSQL.
2. Add authenticated customer identity owned by Main Amaal.
3. Add inventory and reservation rules.
4. Add server-side master-price validation at cart/checkout/order creation.
5. Connect a licensed payment gateway and payment webhook handling.
6. Persist orders and delivery information server-side.
7. Add role/attribute-based administration where staff access requires it.
8. Add read-optimized search/filter infrastructure only when catalogue scale justifies it.
9. Add observability, rate limits, audit logs and automated tests.

## Security principles
- Never trust client-submitted prices.
- Never expose secrets in client components.
- Validate all API inputs.
- Keep customer/account/order authority in Main Amaal when integrated.
- Sensitive documents, if introduced, belong in a secure document-vault boundary with envelope encryption rather than ordinary object storage.
- Apply least privilege and ABAC/RBAC rules to administrative operations.

## Non-goals in this temporary repository
No claim is made that payment processing, live inventory, authentication, fulfilment, server-side orders or a production database are already complete. The frontend is deliberately being built so those systems can be connected without redesigning the customer journey.
