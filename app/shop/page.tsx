import { products } from '@/data/products';
import { ProductGrid } from '@/components/catalogue/ProductGrid';
import { canonicalCategory } from '@/lib/catalogue';
import Link from 'next/link';

export default async function Shop({searchParams}:{searchParams:Promise<{category?:string;brand?:string}>}){
  const params=await searchParams;
  let list=products;
  if(params.category){const target=canonicalCategory(params.category).toLowerCase();list=list.filter(p=>canonicalCategory(p.category).toLowerCase()===target);}
  if(params.brand)list=list.filter(p=>p.brand.toLowerCase()===params.brand!.toLowerCase());
  const heading=params.category||params.brand||'All appliances & speakers';
  const intro = params.brand
    ? `Explore ${params.brand} products available from Amaal.`
    : params.category
      ? `Explore our ${heading.toLowerCase()} range, with trusted brands, clear prices and useful product details.`
      : 'Shop quality appliances and audio from trusted brands, with clear prices and useful product details.';
  return <main className="section shop-page"><div className="container">
    <div className="shop-intro">
      <div><div className="eyebrow">Shop Amaal</div><h1>{heading}</h1><p className="muted">{intro}</p></div>
      <Link className="btn secondary compact" href="/search">Search Amaal</Link>
    </div>
    <div className="shop-toolbar"><span><strong>{list.length}</strong> {list.length===1?'product':'products'}</span><span>Prices in UGX</span></div>
    {list.length ? <ProductGrid products={list}/> : <div className="empty-state"><h2>Nothing matched that category.</h2><p className="muted">Try another category, brand or search Amaal.</p><Link className="btn" href="/shop">View all products</Link></div>}
  </div></main>
}
