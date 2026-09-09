# Amaal Appliances — Hisense Refrigerators / Cookers / Microwaves / Washing Machines — Batch 20

## Duplicate audit first

Audited the actual `data/products.ts` before expansion.

Existing Hisense products in the four requested categories before this batch:
- Refrigerators: **0**
- Washing Machines: **0**
- Microwaves: **0**
- Cookers: **1** — `HF631GEES`
- Existing Hisense freezer `FC13DT4ST` is in Freezers and was not duplicated.
- Existing Hisense air fryers `H09AFBK2S5` and generic `6L Air Fryer` were not touched.

## Added — 10 exact-model SKUs

### Refrigerators (4)
- RD-16DR — 160L double door
- RD-27DR — 270L double door with water dispenser
- RR229D4WGU — 229L single door with water dispenser
- RD-20DR4SA — 200L top freezer

### Cookers (2)
- HFG60121X — 60×60cm 4-burner full gas cooker
- HF942GEES — 90×60cm 4-gas + 2-electric cooker

`HF631GEES` was intentionally skipped because it already exists in the catalogue.

### Microwaves (2)
- H20MOMS10 — 20L manual microwave
- H25MOMS7HG — 25L digital grill microwave

### Washing Machines (2)
- WTJA1402T — 14kg top loader
- WSBE121 — 12kg twin tub

## Verification

- Image audit: **286/286 direct HTTPS images passed** with no known watermark markers.
- Catalogue count: **276 → 286** (+10).
- Research prioritized Uganda availability and exact model identity, with retailer/OEM cross-checks where available.
- Full Next.js production build could not be run in the supplied archive because dependencies (`next`) are not installed in this working copy. This is a packaging/source verification limitation, not a claim of deployment.
