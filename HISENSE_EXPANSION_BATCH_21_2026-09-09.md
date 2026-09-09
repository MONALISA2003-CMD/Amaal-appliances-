# Amaal Appliances — Hisense Refrigerator Expansion + Image Rendering Hardening — Batch 21

## Duplicate audit
Audited the actual data/products.ts from Batch 20 before adding anything.

New exact models added in this batch were absent before insertion:
- RT266N4DGN
- RB341D4WGU
- RT488N4ASU
- RC-56WS4S2
- RT715N4ACB

No existing Hisense SKU was replaced by a duplicate model.

## Image rendering hardening
- Replaced the broken WTJA1402T image source with the official Hisense South Africa product asset.
- Replaced the H25MOMS7HG image source with a current Life Stores Uganda product asset.
- ProductImage now uses a four-stage chain: direct image → Amaal proxy → wsrv.nl external image proxy → branded fallback.
- Product images explicitly use object-fit: contain so tall appliances and wide appliances remain fully visible.
- Existing direct HTTPS image audit retained.

## New products
5 additional Hisense refrigerators were added, all with exact model numbers and Uganda-market evidence.

## Expected catalogue count
286 → 291 products (+5).
