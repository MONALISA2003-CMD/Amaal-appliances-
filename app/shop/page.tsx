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
  return <main className="section shop-page"><div className="container">
    <div className="shop-intro">
      <div><div className="eyebrow">Amaal catalogue</div><h1>{heading}</h1><p className="muted">{list.length} {list.length===1?'product':'products'} in this view. Exact models, clear UGX pricing.</p></div>
      <Link className="btn secondary compact" href="/search">Search catalogue</Link>
    </div>
    <div className="shop-toolbar"><span><strong>{list.length}</strong> products</span><span>Prices shown in UGX</span></div>
    {list.length ? <ProductGrid products={list}/> : <div className="empty-state"><h2>Nothing matched that category.</h2><p className="muted">Try another category, brand or search the full catalogue.</p><Link className="btn" href="/shop">View all products</Link></div>}
  </div></main>
}
