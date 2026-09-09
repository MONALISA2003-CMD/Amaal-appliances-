import {searchProducts} from '@/lib/catalogue';
import {ProductGrid} from '@/components/catalogue/ProductGrid';
import Link from 'next/link';
import { Search } from 'lucide-react';

export default async function SearchPage({searchParams}:{searchParams:Promise<{q?:string}>}){
  const {q=''}=await searchParams;
  const results=searchProducts(q);
  return <main className="section search-page"><div className="container">
    <div className="eyebrow">Search Amaal</div><h1 className="page-title">{q?`Results for “${q}”`:'Search Amaal'}</h1>
    <form className="search-large" action="/search"><Search size={20}/><input name="q" defaultValue={q} placeholder="Search by product, brand, model or category" aria-label="Search Amaal"/><button className="btn" type="submit">Search</button></form>
    {q ? <p className="search-result-meta"><strong>{results.length}</strong> {results.length===1?'product':'products'} found</p> : <div className="search-help"><strong>Search smarter</strong><span>Try a brand, exact model number, product type or category.</span><div className="search-chips"><Link href="/search?q=Hisense">Hisense</Link><Link href="/search?q=Refrigerator">Refrigerators</Link><Link href="/search?q=Washing%20Machine">Washing machines</Link><Link href="/search?q=Microwave">Microwaves</Link></div></div>}
    {q && (results.length ? <ProductGrid products={results}/> : <div className="empty-state"><h2>No products found.</h2><p className="muted">Try a broader search or browse all products.</p><Link className="btn" href="/shop">View all products</Link></div>)}
  </div></main>
}
