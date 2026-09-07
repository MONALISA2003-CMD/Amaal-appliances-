import fs from 'node:fs';
const text=fs.readFileSync(new URL('./data/products.ts', import.meta.url),'utf8');
const products=[...text.matchAll(/\{id:'([^']+)'[\s\S]*?image:'([^']+)'/g)].map(m=>({id:m[1],image:m[2]}));
if(!products.length){console.error('Image audit failed: no products found');process.exit(1)}
if(products.some(p=>!/^https:\/\//.test(p.image))){console.error('Image audit failed: every product image must be HTTPS');process.exit(1)}
if(products.some(p=>/watermark|watermarked|logo-overlay|j\.pg\?watermark/i.test(p.image))){console.error('Image audit failed: image URL contains a known watermark marker');process.exit(1)}
if(products.some(p=>/dombelo\.com\/(product|product-tag)\//i.test(p.image))){console.error('Image audit failed: a product-page URL was used as an image');process.exit(1)}
const ids=products.map(p=>p.id); const dup=ids.filter((id,i)=>ids.indexOf(id)!==i);
if(dup.length){console.error(`Image audit failed: duplicate product IDs: ${dup.join(', ')}`);process.exit(1)}
console.log(`Image audit passed: ${products.length}/${products.length} products have direct HTTPS image URLs with no known watermark markers.`);
