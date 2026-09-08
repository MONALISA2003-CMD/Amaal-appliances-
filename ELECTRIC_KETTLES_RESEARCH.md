# Electric Kettles Research — 8 September 2026

## Implementation pass

Implemented 17 new, exact-model electric kettles with clean direct product imagery and model-level duplicate checks. Existing kettle products were preserved.

### Hoffmans
- HM-2557 — 4.8L, 2000W; Uganda Jiji evidence around UGX 80,000.
- HM-2510 — 2.5L, 1800W; Uganda Jiji evidence around UGX 45,000.
- HM-2530 — 3L, 2000W; Uganda Life Stores evidence around UGX 75,000.
- HM-2552 — 4L; Uganda Jiji evidence around UGX 95,000.
- HM-2535 — 2.5L stainless/double-wall; Uganda Jumia/TilyExpress evidence.
- HM-2545 — 2.5L, 2000W; exact model image and OEM catalogue evidence; price marked coming-soon because no strong current Uganda exact-model price was captured.
- HM-2536 — 2.5L; Uganda Jumia exact-model evidence around UGX 39,000.
- HM-2563 — 0.8L, 800W compact travel kettle; Uganda Jumia exact-model evidence around UGX 26,900.
- HM-2560 — 0.8L, 1200W foldable 3-in-1 travel kettle; Uganda Jumia evidence around UGX 30,200.
- HM-2554 — 2.5L, 1800W double-wall kettle; Uganda Dream Home Store exact-model evidence at UGX 85,000.

### RAF
- R.7800 — 2L, 2000W, digital temperature display; Uganda Jumia category evidence around UGX 95,000.
- R.7994 — 3L, 1600W; Uganda Jumia evidence around UGX 47,000.
- R.7886 — 2.3L, 2000W stainless; image/model verified, Uganda exact-model price not strong enough, so price marked coming-soon.

### Geepas
- GK38012 — 1.2L, 1360W, double-layer; official Geepas specification/image. Uganda price marked coming-soon.

### Sonifer
- SF-2098 — 1.5L, 1500W digital temperature control; exact model/image verified. Uganda price marked coming-soon.
- SF-2025 — 1.8L, 1850W; exact model/image verified. Uganda price marked coming-soon.

### Midea
- MK-17S30A2 — 1.7L, 2200W stainless steel; exact model/image verified. Uganda price marked coming-soon.

## Requested Hoffmans models not implemented
- HM-2562: verified as 2L/1800W in Uganda, but available exact-model images located in this pass were seller-watermarked. Held rather than using a non-compliant image.
- HM-2557: implemented.
- HM-2512: verified by OEM catalogue as 2.5L, but clean exact-model image was not secured. Held.
- HM-2510: implemented.
- HM-2531: verified by OEM catalogue as 2.5L, but clean exact-model image was not secured. Held.
- HM-2530: implemented.
- Hoffmans 4L: implemented as HM-2552 based on Uganda listing evidence. Do not create a second generic 4L record.

## Duplicate rule
Existing catalogue models were checked before insertion. Different seller listings and colour variants were not treated as separate products.

## Image rule
Only direct HTTPS image URLs were used for implemented products. Watermarked/seller-contact images were held back.
