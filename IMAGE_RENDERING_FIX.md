# Image rendering reliability fix

The catalogue had image URLs for all products, but some third-party hosts fail when loaded directly by a customer's browser (hotlink blocking, CDN restrictions, redirects, or upstream timeouts).

## Fix

`components/catalogue/ProductImage.tsx` now:
1. Tries the researched direct image URL first.
2. If the browser cannot load it, automatically retries through `/api/image`.
3. Shows the existing branded fallback only if both paths fail.

`app/api/image/route.ts` is a server-side HTTPS image proxy with:
- redirect following
- browser-like Accept/User-Agent headers
- upstream Referer
- image content-type validation
- public caching headers
- basic private/local-host protection

This preserves the original research URLs while making browser rendering much more resilient.

## Validation

The catalogue image audit passes for all 276 products: every product has a direct HTTPS image URL.

The production build could not be run in this working container because the archive does not contain installed `node_modules` and package installation timed out. Vercel should run the normal `npm install`/build pipeline on deployment.
