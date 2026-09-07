# Amaal Master Price Register

Customer-facing policy: one current UGX master price per exact catalogue SKU. No crossed-out prices, artificial discounts or “was/now” pricing are exposed.

## Refrigerator additions in this build

| Brand | Model | Product | Master price (UGX) | Confidence | Image evidence |
|---|---|---|---:|---|---|
| LG | GL-C252SLBB | 234L Top Freezer Refrigerator | 1,630,000 | High | LG OEM + Uganda listing |
| Samsung | RT31CG5421S9UT | 305L Top Mount Refrigerator | 2,924,000 | High | Samsung OEM + Uganda listing |
| Midea | MDRT187 | 187L Double Door Top Mount Refrigerator | 786,000 | High | Midea/Jumia Uganda exact model |
| Roch | RFR-120S-J | 120L Single Door Refrigerator | 345,000 | High | Roch/Jumia Uganda exact model |
| ADH | BC8091 | 120L Single Door Refrigerator | 375,000 | High | ADH/Jumia Uganda exact model |

## Existing catalogue
The original 48 catalogue prices remain unchanged. See the Git history or previous master register for their research records.

## Pricing method
1. Identify the exact model/SKU.
2. Prefer multiple credible Uganda observations where available.
3. Use OEM information to verify model identity and specifications.
4. Normalize awkward retail values only when the evidence supports it.
5. Treat large discrepancies as a research task, not an automatic average.
6. Freeze the implementation price only after model identity and evidence quality are acceptable.

## Important implementation rule
The frontend `price` field is catalogue data, not the production payment authority. A future backend must re-read the authoritative SKU price before order creation.


## Freezers continuation
Freezers have been added as the next catalogue capability. Current implementation contains exact-model Uganda observations for Hisense, ADH, Midea, Roch and Beko, with Samsung/LG expansion still subject to clean exact-model image and evidence verification.

## Refrigeration price-quality correction — 7 September 2026
- Hisense FC13DT4ST master price normalized to UGX 546,000 using current Uganda official-store observations around UGX 545,500.
- Roch RCF-125G-E master price normalized to UGX 477,000 using current Uganda official-store observations around UGX 469,000–484,000.
- Midea MDRC265FZG43D master price recorded at UGX 800,000 as a medium-confidence local observation while the manufacturer confirms the model is 142L.
- Midea MDRC362FZG43D master price recorded at UGX 878,000 from the current Uganda Midea Official Store observation.

## Refrigerator continuation — 7 September 2026

| Brand | Model | Product | Master price (UGX) | Confidence | Image evidence |
|---|---|---|---:|---|---|
| LG | GN-B312PXGB | 315L Top Freezer Refrigerator | 2,315,000 | High | Clean exact-model Uganda Official Store image + LG East Africa OEM |

## Current implementation pass price observations

- Beko RDNT271I50S KE — UGX 2,159,000 — Beko Official Store Uganda observation.
- Beko BCF3316S UK KE — UGX 1,959,000 — Beko Official Store Uganda observation.
- Beko BAW100 UK — UGX 2,469,000 — Beko Official Store Uganda observation.
- Midea MDRC265FZG43D — UGX 755,600 — Midea Official Store Uganda observation used for current implementation.
- Midea MDRC362FZG43D — UGX 877,800 — Midea Official Store Uganda observation used for current implementation.
- Beko BCF3380 — UGX 2,429,000 — Beko Official Store Uganda observation used for current implementation.


## Dryers implementation — 7 September 2026
- Beko B3T4911DG — UGX 2,384,000 — Beko Official Store Uganda exact-model observation — High confidence.
- Samsung DV90TA040AX/EU — UGX 3,150,000 — exact-model Uganda retailer observation — High confidence.
- Midea MD110H80/T-UY — UGX 1,740,000 — exact-model Uganda retailer observation — High confidence.


## Cookers implementation — 7 September 2026
- ADH AGC-531GE — UGX 695,000 — current Uganda retailer observations; High confidence for local model/price evidence.
- Saachi NL-6361HP — UGX 387,700 — Saachi Manufacturers Official Store on Jumia Uganda; High confidence for local model/price evidence.


## Cookers additions — 7 September 2026

- Saachi NL-GAS-6364SS — UGX 1,125,000 — Saachi Manufacturers Official Store / Jumia Uganda — High confidence.
- Saachi NL-GAS-6364RD — UGX 1,105,000 — Saachi Manufacturers Official Store / Jumia Uganda — High confidence.
- Global Star KZ-560(2+2) Black — research observation UGX 680,000 at Dombelo; not yet implemented because image gate is incomplete.

## Cooker completion pass — 7 September 2026
- Saachi NL-GAS-6363HP — UGX 525,000 — Dombelo Uganda exact-model observation.
- Saachi NL-6365HPE — UGX 700,000 — Saachi Manufacturers Official Store on Jumia Uganda.
- Saachi NL-6366HPE — UGX 750,000 — Saachi Manufacturers Official Store on Jumia Uganda.
- Midea 60E3G1H4FSL — UGX 1,040,000 — TilyExpress Uganda exact-model observation.
- Hisense HF631GEES — UGX 1,195,000 — TilyExpress Uganda exact-model observation.
- Global Star KZ-560(3+1) — UGX 680,000 — Dombelo Uganda exact-model observation.

## Ovens implementation — 7 September 2026
- Newmatic FM6113T — UGX 2,800,000 — Newmatic Kitchen Appliances Uganda / Jumia exact-model listing — High confidence.
- Newmatic FE633 — UGX 1,600,000 — Newmatic Kitchen Appliances Uganda / Jumia exact-model listing — High confidence.
- Midea MBO-M1865 — UGX 850,000 — Kanta Uganda Official Midea Store exact-product listing — High confidence.

## Ovens — Budget Expansion
- Hisense HBO60203 — UGX 730,000
- Hisense HBO60202 — UGX 640,000
- Midea 65M60M1 — UGX 765,000
- Midea 65M40M1-GL — UGX 785,000
