import fs from 'node:fs';
const text = fs.readFileSync(new URL('./data/products.ts', import.meta.url), 'utf8');
const products = [...text.matchAll(/\{id:'([^']+)',slug:'([^']+)',brand:'([^']+)',model:'([^']+)'[^}]*?name:'([^']+)',category:'([^']+)'/g)]
  .map(m => ({id:m[1],slug:m[2],brand:m[3],model:m[4],name:m[5],category:m[6]}));
const check = (field) => { const map=new Map(); for(const p of products){const k=p[field].trim().toLowerCase(); map.set(k,[...(map.get(k)||[]),p.id]);} return [...map].filter(([,ids])=>ids.length>1); };
for (const field of ['id','slug','model']) { const dup=check(field); if(dup.length){console.error(`Duplicate ${field}:`,dup); process.exit(1);} }
const fingerprints = new Map();
for(const p of products){const k=[p.brand,p.model,p.category].map(x=>x.trim().toLowerCase()).join('|'); fingerprints.set(k,[...(fingerprints.get(k)||[]),p.id]);}
const near=[...fingerprints].filter(([,ids])=>ids.length>1); if(near.length){console.error('Repeated exact product fingerprints:',near); process.exit(1);}
console.log(`Catalogue audit PASS: ${products.length} products; 0 duplicate IDs, slugs, models, or exact product fingerprints.`);
