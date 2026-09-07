import fs from 'node:fs';
const text=fs.readFileSync(new URL('./data/products.ts', import.meta.url),'utf8');
const products=text.split(/\n(?=\{id:)/).filter(x=>/category:'(Refrigerators|Freezers)'/.test(x));
const bad=[];
for(const p of products){
  for(const r of ['model:','image:','price:','currency:','availability:','confidence:','imageSource:','imageClean:']) if(!p.includes(r)) bad.push(`${r} missing`);
  if(/fit-in\/150x150/.test(p)) bad.push('refrigeration SKU uses 150x150 image URL');
  if(/warranty:'[^']*local observation/i.test(p)) bad.push('refrigeration SKU uses unqualified local-observation warranty');
}
if(text.includes("model:'MDRC265FZG43D'") && !text.includes("NetCapacity:'142L'")) bad.push('MDRC265FZG43D must be 142L per Midea Africa');
if(text.includes("model:'MDRC362FZG43D'") && !text.includes("NetCapacity:'198L'")) bad.push('MDRC362FZG43D must be 198L per Midea Africa');
if(bad.length){console.error('Refrigeration audit failed:\n'+bad.join('\n'));process.exit(1)}
console.log(`Refrigeration audit passed: ${products.length} refrigerator/freezer records validated.`);
