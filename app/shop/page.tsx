import {products} from '@/data/products';
import {ProductGrid} from '@/components/catalogue/ProductGrid';
import {canonicalCategory} from '@/lib/catalogue';

export default async function Shop({searchParams}:{searchParams:Promise<{category?:string;brand?:string}>}){
  const params=await searchParams;
  let list=products;
  if(params.category){const target=canonicalCategory(params.category).toLowerCase();list=list.filter(p=>canonicalCategory(p.category).toLowerCase()===target);}
  if(params.brand)list=list.filter(p=>p.brand.toLowerCase()===params.brand!.toLowerCase());
  return <main className="section"><div className="container"><div className="section-head"><div><div className="eyebrow">Amaal catalogue</div><h2>{params.category||params.brand||'All appliances & speakers'}</h2><p className="muted">{list.length} catalogue items.</p></div></div><div className="shop-main"><div className="shop-toolbar"><span className="muted">Showing {list.length} products</span><span className="muted">Master prices · UGX</span></div><ProductGrid products={list}/></div></div></main>
}
