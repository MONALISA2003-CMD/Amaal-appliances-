import {products} from '@/data/products';
import {ProductGrid} from '@/components/catalogue/ProductGrid';
import {categoryRegistry} from '@/lib/category-registry';
import {canonicalCategory} from '@/lib/catalogue';

export default async function Shop({searchParams}:{searchParams:Promise<{category?:string;brand?:string}>}){
  const params=await searchParams;
  let list=products;
  if(params.category)list=list.filter(p=>canonicalCategory(p.category).toLowerCase()===params.category!.toLowerCase());
  if(params.brand)list=list.filter(p=>p.brand.toLowerCase()===params.brand!.toLowerCase());
  return <main className="section"><div className="container"><div className="section-head"><div><div className="eyebrow">Amaal catalogue</div><h2>{params.category||params.brand||'All appliances & speakers'}</h2><p className="muted">{list.length} catalogue items.</p></div><button className="btn secondary mobile-filter">Filters</button></div><div className="shop-layout"><aside className="filters"><h3>Filter</h3><div className="filter-group"><strong>Categories</strong>{categoryRegistry.map(c=><a key={c.slug} href={`/shop?category=${encodeURIComponent(c.name)}`} style={{display:'block',padding:'7px 0',color:'#555'}}>{c.name}</a>)}</div><div className="filter-group"><strong>Brands</strong>{Array.from(new Set<string>(products.map(p=>p.brand))).sort().map(b=><a key={b} href={`/shop?brand=${encodeURIComponent(b)}`} style={{display:'block',padding:'7px 0',color:'#555'}}>{b}</a>)}</div></aside><section><div className="shop-toolbar"><span className="muted">Showing {list.length} products</span><span className="muted">Master prices · UGX</span></div><ProductGrid products={list}/></section></div></div></main>
}
