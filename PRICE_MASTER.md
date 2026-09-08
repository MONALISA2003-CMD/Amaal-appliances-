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


## Hobs — 2026-09-08
| Brand | Model | Category | Master Price (UGX) | Local evidence |
|---|---|---|---:|---|
| Midea | MC-ID3591-A2 | Hobs | 450000 | Abanista / Shipto / Life Stores / TilyExpress |
| Hisense | HHU60GAGR | Hobs | 580000 | Kanta / Abanista / TilyExpress / Prime / Dombelo |
| Midea | 60M31SA021 | Hobs | 700000 | Abanista / TilyExpress |
| Hisense | HGH951SS01 | Hobs | 750000 | Capital Appliances / Abanista / Kibuga / Dombelo / Jumia / Duuka |


## Microwaves — 8 September 2026
| Brand | Model | Category | Master Price (UGX) | Local evidence |
|---|---|---|---:|---|
| Midea | EM7P012MZ-B | Microwaves | 315000 | Nabellas Uganda; Midea official specifications |
| Samsung | ME731K-B | Microwaves | 390000 | Uganda market observation; Samsung Africa official model |
| Kenwood | MWM30.000BK | Microwaves | 770000 | Dombelo / Abanista Uganda |
| Beko | BMO390 UK | Microwaves | 1000000 | Abanista Uganda; Beko Kenya official model |


### Microwaves budget-brand additions
- ADH AMD20 (E20G): UGX 197,000
- Globalstar F20MXP08: UGX 199,000
- Saachi NL-MO-6109-BK: UGX 260,000
- Blueflame 2026 Mirror Series: UGX 205,000


## Continuation pass — 8 September 2026
- Hisense HS2100 — UGX 520,000 — Bayet Uganda exact-model observation; Hisense OEM specification.
- Hisense AX5100Q — UGX 880,000 — Jumia Uganda exact-model observation; Hisense OEM specification.
- LG S65TR — UGX 1,110,000 — Jumia Uganda exact-model observation; LG Africa OEM specification.
- Kenwood ZJM01 — UGX 205,700 — Kenwood Official Store on Jumia Uganda.
- Geepas GK5454N — UGX 66,000 — Geepas Official Store on Jumia Uganda; Geepas specification cross-check.
- Geepas GAC9576 — UGX 540,000 — Jumia Uganda exact-model observation.
- Geepas GRH28530 — UGX 235,000 — Jumia Uganda exact-model observation.

## Electric Kettles — Expansion Pass 3 additions
- RAF R-7887 — UGX 85,000 — Dombelo Uganda exact-model local listing.
- RAF R.7945 — UGX 97,000 — Dombelo Uganda exact-model local listing; corroborated by Prime Electronics/TilyExpress Uganda.
- Saachi NL-KT-7743 — UGX 125,000 — Uganda market evidence (Duukaan/Jumia) with exact model/specification cross-check.
