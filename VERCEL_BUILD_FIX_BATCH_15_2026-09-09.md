# Vercel Build Fix — Batch 15

## Reported build error
Vercel/Next.js 16.3.4 rejected `next.config.ts` because `images.remotePatterns` contained more than the allowed 50 entries.

## Fix applied
Replaced the 59 individual HTTPS hostname entries with one supported wildcard remote pattern:

- `protocol: 'https'`
- `hostname: '**'`

Kept `images.unoptimized: true` so the catalogue's externally hosted images continue to render without Next.js image optimization.

## Validation
- `data/products.ts`: 278 image URLs found.
- All 278 image URLs use HTTPS.
- `next.config.ts`: 1 `remotePatterns` entry, safely below the 50-entry limit.
- ZIP integrity test: passed (`unzip -t`).
- A full local `npm run build` could not be completed in this environment because dependency installation exceeded the available execution window; therefore no claim of full build success is made here.

## Files preserved
This batch is based on the Batch 14 project and preserves its existing catalogue/image research work.
