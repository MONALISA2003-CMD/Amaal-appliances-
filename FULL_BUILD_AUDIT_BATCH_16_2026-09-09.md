# Amaal Appliances — Full Build & Bug Audit Batch 16

Date: 2026-09-09
Base: Batch 15 ZIP

## Vercel error fixed
The Vercel TypeScript failure was caused by duplicate `confidence` properties in six product object literals. The duplicate property was removed while preserving the final intended confidence value.

Affected products:
- aftron-afeac4035
- lg-s4-q12ja3qb
- hoffmans-hm780
- itel-iaf-001
- raf-mw3018
- sonifer-garment-steamer

## Configuration audit
- `images.remotePatterns`: 1 pattern (below Next.js 50-entry limit)
- HTTPS wildcard retained and `unoptimized: true` retained
- `tsconfig.json`: JSX explicitly set to `react-jsx`
- `.next/dev/types/**/*.ts` explicitly included

## Catalogue audit
- Product objects: 278
- Missing image fields: 0
- Non-HTTPS image URLs: 0
- Duplicate product IDs: 0
- Duplicate slugs: 0
- Duplicate models: 0
- Duplicate exact product fingerprints: 0 (catalogue audit)
- Invalid/negative prices: 0
- Suspicious placeholder image URLs: 0
- Broken local imports detected by static import-path audit: 0
- Refrigeration validation: PASS (14 refrigerator/freezer records)
- Image audit: PASS (278/278 HTTPS image URLs)

## TypeScript validation
A dependency-independent TypeScript check covering `data/products.ts`, `lib/brand-registry.ts`, and `types/product.ts` passed after the duplicate-property fixes.

A complete repository-wide `tsc`/Next build could not be executed locally because this working environment has no installed `node_modules`, and dependency installation timed out. The prior Vercel run had already successfully compiled the application and reached TypeScript checking; the only reported TypeScript errors were the six duplicate-property errors fixed in this batch.

## Dependency note
The project has no `package-lock.json`; therefore `npm ci` is not applicable. Vercel uses `npm install` successfully in the deployment log.

## Result
No remaining duplicate object keys or catalogue/data integrity issues were found by the available static and project audit checks. The archive is ready for a fresh Vercel deployment.
