import Link from 'next/link';
import {ProductImage} from '@/components/catalogue/ProductImage';
import {notFound} from 'next/navigation';
import {getProduct,formatUGX,searchProducts} from '@/lib/catalogue';
import {AddToCartButton} from '@/components/commerce/AddToCartButton';
import {ArrowLeft, Check, ShieldCheck, Truck} from 'lucide-react';
import {ProductGrid} from '@/components/catalogue/ProductGrid';

export default async function ProductPage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params; const p=getProduct(slug); if(!p)notFound();
 const related=searchProducts(p.brand).filter(item=>item.id!==p.id).slice(0,4);
 return <main className="section product-page"><div className="container">
   <Link className="back-link" href="/shop"><ArrowLeft size={15}/> Back to shop</Link>
   <div className="product-detail">
     <div className="detail-media-wrap"><div className="detail-media">{p.image?<ProductImage src={p.image} alt={`${p.brand} ${p.model} product image`} brand={p.brand} model={p.model} width={900} height={700} style={{width:'100%',height:'100%',maxHeight:'560px',objectFit:'contain',objectPosition:'center'}}/>:<div><strong>{p.brand}</strong><span>{p.model}</span></div>}</div><div className="detail-caption"><span>Product model</span><span>{p.model}</span></div></div>
     <div className="detail-copy"><div className="eyebrow">{p.category}</div><h1>{p.name}</h1><div className="detail-model"><span>{p.brand}</span> · Model {p.model}</div><p className="detail-description">{p.description}</p><div className="detail-price">{formatUGX(p.price)}</div><div className="detail-availability"><span><Check size={14}/> {p.availability==='in-stock'?'In stock':'Availability to be confirmed'}</span>{p.warranty&&<span>Warranty: {p.warranty}</span>}</div><div className="detail-actions"><AddToCartButton product={p}/><AddToCartButton product={p} buyNow/><Link className="btn secondary" href="/cart">View bag</Link></div><div className="detail-benefits"><div><ShieldCheck size={18}/><span><strong>Product details</strong><small>Model and specification details</small></span></div><div><Truck size={18}/><span><strong>Delivery arranged</strong><small>Details confirmed at checkout</small></span></div></div><section className="spec-block"><h2>Specifications</h2><dl>{Object.entries(p.specifications).map(([k,v])=><div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl></section><section className="spec-block"><h2>Features</h2><ul>{p.features.map(f=><li key={f}>{f}</li>)}</ul></section></div>
   </div>
   {related.length>0&&<section className="related-section"><div className="section-head"><div><div className="eyebrow">More from {p.brand}</div><h2>Related products</h2></div><Link className="section-link" href={`/shop?brand=${encodeURIComponent(p.brand)}`}>View brand <span>→</span></Link></div><ProductGrid products={related}/></section>}
 </div></main>
}
