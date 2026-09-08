# Electric Kettles Audit — Expansion Pass 2

Date: 2026-09-08

## Count safety
- Baseline supplied catalogue: 174 products
- Current catalogue: 177 products
- Newly added unique products: 3
- Existing product IDs removed: 0
- Existing slugs removed: 0
- Existing models removed: 0
- Product-line count in `data/products.ts`: 177
- Beverage-category products after this pass: 31

## New products
1. Pixel SC-20A — 2L stainless steel electric kettle
2. Midea MK-17G06A2M — 1.7L glass electric kettle
3. Scarlett SC-1020 — 2.2L electric kettle

## Duplicate audit
- Duplicate IDs: 0
- Duplicate slugs: 0
- Duplicate models: 0
- Colour-only variants were not added as separate SKUs.

## Image audit
- 177/177 product image URLs use HTTPS.
- 177/177 are direct image URLs in product data.
- New Pixel image: Jumia Uganda exact-model image URL, resized to 600x600 rather than using the 150x150 thumbnail.
- New Midea image: Life Stores Uganda exact-model image, 3840px rendition.
- New Scarlett image: Scarlett official manufacturer image.
- New images were screened for obvious seller phone numbers, promotional price banners and watermark overlays before implementation.
- Actual unique image hosts in the catalogue: 72.
- Next.js configured remotePatterns remain capped at 50; the project currently uses `images.unoptimized = true`. Host consolidation remains an engineering follow-up.

## Research notes
- Pixel SC-20A is locally listed by Prime Electronics Uganda at UGX 50,000 and Jumia Uganda identifies the exact SC-20A model and 2L/1500W configuration.
- Midea MK-17G06A2M is locally listed by Life Stores Uganda at UGX 90,000 and Jumia Uganda carries the exact model; Life Stores documents 1.7L and 1850–2200W.
- Scarlett SC-1020 is verified against the official Scarlett manufacturer page at 2.2L/2200W with internal illumination and multi-level safety. A current Uganda model-specific price was not verified, so it is marked `price-coming-soon` rather than presenting a fabricated local price.

## Held, not implemented
- Hoffmans HM-2562 — local model/price verified, but the available exact-model images did not meet the clean-image gate.
- Hoffmans HM-2512 — exact model researched; clean exact-model image still pending.
- Hoffmans HM-2531 — exact model researched; clean exact-model image still pending.
- Additional Hoffmans/RAF/Scarlett/Pixel candidates remain research candidates until their exact clean image and model fingerprint pass.
