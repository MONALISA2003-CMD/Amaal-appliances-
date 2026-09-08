# Amaal Product Brand + Image Audit

Date: 8 September 2026

## Brand naming
- 105 product records audited.
- 105/105 have a brand field.
- 105/105 customer-facing product names begin with the recorded brand.
- Product IDs, slugs, models, categories, prices and images were preserved.
- ProductCard now renders an explicit brand name on every product card.
- The same ProductGrid/ProductCard is used by the landing-page product section, shop/category results, brand-filter results and search results.
- Product detail pages use the normalized full product name and show brand + model.

## Image URL audit
- 105/105 product records have HTTPS image URLs.
- 105/105 image URLs are unique.
- 105/105 image hosts are allowed by Next Image remotePatterns.
- 0 URLs contain known watermark-marker patterns used by the automated audit.
- 0 product-page URLs are used as image assets.
- Product cards and detail pages use contain/object-position:center so the full product is presented without intentional cropping.
- A client-side ProductImage fallback prevents a broken-image icon if a remote source becomes unavailable at runtime.

## Important verification boundary
The working container could not complete a live HTTP fetch of all 105 remote images; network requests timed out. Therefore this audit does **not** claim that every remote server was live at audit time or that every image was visually inspected in this run. The source-level checks above pass, and the runtime fallback prevents a broken-image icon, but a live deployed/browser image crawl remains the authoritative final check.

## Engineering
- Catalogue audit: PASS.
- Image structural audit: PASS.
- Next Image hostname coverage: PASS.
- Full production Next.js build was not claimed as passed because dependencies are not installed in the working container.
