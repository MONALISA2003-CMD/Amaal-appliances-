# Electric Kettles Audit — Expansion Pass 3

Date: 2026-09-08

## Count safety
- Baseline before pass: 177 products
- Current catalogue: 180 products
- Newly added unique products: 3
- Existing product IDs removed: 0
- Existing slugs removed: 0
- Existing models removed: 0
- Beverage-category products after this pass: 34

## New products
1. RAF R-7887 — 0.5L travel electric kettle
2. RAF R.7945 — 2.5L glass electric kettle
3. Saachi NL-KT-7743 — 3L stainless steel electric kettle

## Duplicate audit
- Duplicate IDs: 0
- Duplicate slugs: 0
- Duplicate models: 0
- No colour-only variants added.

## Image audit
- All 180 product image URLs are HTTPS.
- All three new images are direct image URLs.
- All three new image hosts were already present in `next.config.ts`; no new remotePatterns entry was required.
- New RAF R-7887 image: exact Dombelo Uganda image, reused through existing i0.wp.com host.
- New RAF R.7945 image: exact Dombelo Uganda image, reused through existing i0.wp.com host.
- New Saachi NL-KT-7743 image: exact QSales image.
- No seller contact numbers, promotional price banners or watermarks knowingly accepted.
- Actual unique image hosts remain 72.
- Configured Next.js remotePatterns remain exactly 50.

## Research / price audit
- RAF R-7887: UGX 85,000 from Dombelo Uganda; exact model and specifications verified.
- RAF R.7945: UGX 97,000 from Dombelo Uganda; exact model/specifications cross-checked with Prime Electronics and TilyExpress Uganda.
- Saachi NL-KT-7743: UGX 125,000 based on current Uganda market evidence; model/specifications cross-checked with QSales.

## Held
- Hoffmans HM-2562, HM-2512 and HM-2531 remain held pending compliant exact-model images.
- Saachi NL-KT-7767 remains held because its best exact image requires a new image host and adding that host would violate the 50-entry configuration ceiling unless an existing host is consolidated first.
