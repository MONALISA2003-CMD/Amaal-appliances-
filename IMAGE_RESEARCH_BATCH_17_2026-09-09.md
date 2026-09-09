# Amaal Appliances — Image Repair & Hisense Soundbar Removal — Batch 17

Date: 2026-09-09
Base: Global Worldwide Deep Research Batch 16

## Scope
- Repair the user-reported missing/broken catalogue images.
- Replace selected weak/broken image hosts with cleaner direct image assets from credible global/manufacturer/retailer sources.
- Make product-image rendering use the original remote image directly (`unoptimized`) to avoid Next/Vercel image-optimizer failures on third-party appliance image hosts.
- Delete **Hisense soundbars only**; no other Hisense products are removed.
- Preserve all other catalogue data and existing image work.

## Direct image replacements researched
- RAF R.2841 — direct Alibaba image, exact RAF 2.5L heavy-duty blender family.
- RAF R.2838 — direct Dombelo Uganda exact-model image.
- Hisense HF631GEES — direct Hisense Kenya exact-model image.
- Midea MF-CY85WK2 — direct official Midea image.
- Geepas GSB6104 — direct retailer image, exact model.
- Geepas GSB9891 — direct official Geepas image.
- Geepas GSB44017 — direct official Geepas image.
- Midea MJ-BL6006W — direct Midea regional image.
- Geepas GK38012 — direct official Geepas image.
- Geepas GF9479 — direct official Geepas image.
- Geepas GF9611 — direct official Geepas image.
- Midea FS40-23MR — direct official Midea image.
- Tata Voltas 12,000 BTU — direct retailer image for the Tata/Voltas 1-ton split AC family.
- RAF R.286 — replaced with a much larger clean direct image from Atenza Home Appliances (Kenya), based on the exact R.286/R.2869 family listing.

## Research evidence
- RAF R.2841 exact product: TilyExpress Uganda / Dombelo Uganda; image family also cross-checked globally.
- RAF R.2838 exact product: TilyExpress Uganda / Dombelo Uganda.
- Hisense HF631GEES exact model: Hisense Kenya.
- Midea MF-CY85WK2 exact model: official Midea.
- Geepas GSB6104 exact model: Al Hadaya Center.
- Geepas GSB9891 and GSB44017 exact models: official Geepas UAE.
- Midea MJ-BL6006W exact model: official Midea regional site.
- Geepas GK38012, GF9479 and GF9611 exact models: official Geepas UAE.
- Midea FS40-23MR exact model: official Midea Cambodia/regional page.
- Tata/Voltas 12,000 BTU family: Ugandan retailer evidence plus global Tata/Voltas imagery.
- RAF R.286: Jumia Uganda exact model and Atenza Kenya high-resolution family image.

## Hisense soundbars removed
Deleted only:
- `hisense-hs2100` — Hisense 2.1-Channel 240W Soundbar HS2100
- `hisense-ax5100q` — Hisense 5.1-Channel 580W Dolby Atmos Soundbar AX5100Q

No other Hisense product records were removed.

## Rendering reliability change
`components/catalogue/ProductImage.tsx` now sets `unoptimized` on product images. This intentionally loads the researched remote image URL directly in the browser instead of routing every third-party image through the Next.js/Vercel image optimizer. This is especially useful for retailer/manufacturer CDNs that return unusual headers, redirects, or formats.

## Audit
- Product records after soundbar removal: 276
- Missing image fields: 0
- HTTPS image URLs: all populated records use HTTPS remote images
- Duplicate product IDs: 0
- Duplicate slugs: 0
- Duplicate object keys detected in product objects: 0
- Hisense soundbar records remaining: 0
- Data-focused TypeScript audit: PASS
- Full `next build`: not run locally because the project archive has no lockfile/node_modules; Vercel remains the authoritative full-build environment.
