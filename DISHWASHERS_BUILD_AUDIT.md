# Dishwashers Build Audit

Date: 2026-09-08

## Implementation

Seven researched dishwasher SKUs were added without removing any existing product:

1. Midea WQP13-5201G — UGX 1,550,000
2. Geepas GDW1464SV — UGX 1,990,000
3. Newmatic DW12INT-2 — UGX 2,800,000
4. Beko BDFN15430G — UGX 2,800,000
5. Bosch SMS50D08GC — UGX 3,100,000
6. LG DFC612FV — UGX 3,250,000
7. Samsung DW60BG730FSLEU — UGX 4,075,000

## Audit results

- Total catalogue products: 112
- Dishwashers: 7
- Duplicate IDs: 0
- Duplicate slugs: 0
- Duplicate models: 0
- Duplicate exact product fingerprints: 0
- Image URLs with HTTPS: 112/112
- Image audit: 112/112 PASS
- Product image hosts: 42
- Configured Next.js image hosts: 42
- Missing image hosts: 0
- Unused configured image hosts: 0
- `images.remotePatterns` count: 42 (Next.js maximum is 50)
- TypeScript source parse diagnostics: 0
- Duplicate object properties: 0
- ZIP integrity: PASS

## Image rule

All seven new dishwasher images use manufacturer-controlled product assets or official/local manufacturer assets. No intentionally selected seller watermark, seller phone number or promotional banner is used. Existing product-image rendering remains `object-fit: contain`, preserving the complete appliance in catalogue and detail views.

## Production build note

A full `next build` was not run in this offline working environment because the project dependencies are not installed and `npm install` could not complete within the environment timeout. The source-level TypeScript parser audit passed with zero parse diagnostics, and the previous Next.js remote-pattern limit remains at 42 configured hosts.
