import Link from 'next/link';
import { products } from '@/data/products';
import { categoryRegistry } from '@/lib/category-registry';
import { canonicalCategory } from '@/lib/catalogue';
import { ProductGrid } from '@/components/catalogue/ProductGrid';
import { ProductImage } from '@/components/catalogue/ProductImage';

const liveCategories = categoryRegistry
  .map(category => {
    const categoryProducts = products.filter(product => canonicalCategory(product.category) === category.name);
    return { ...category, count: categoryProducts.length, representative: categoryProducts[0] };
  })
  .filter(category => category.count > 0)
  .sort((a, b) => b.count - a.count);

const picks = products
  .filter(product => ['LG', 'Samsung', 'Hisense', 'Midea', 'Roch', 'ADH', 'RAF', 'Hoffmans', 'Philips', 'Oraimo'].includes(product.brand))
  .slice(0, 8);

const trustItems = [
  ['01', `${products.length} catalogue items`, 'A broad, organised appliance collection'],
  ['02', 'Exact models', 'Model numbers kept visible on every product'],
  ['03', 'UGX pricing', 'Clear local catalogue pricing where available'],
  ['04', 'Easy browsing', 'Search, categories, brands and product details'],
];

export default function Home(){
  return <main>
    <section className="hero-wrap">
      <div className="container">
        <section className="hero hero-home">
          <div className="hero-copy">
            <div className="eyebrow">Amaal · Appliances & audio</div>
            <h1>Good appliances. Clear choices.</h1>
            <p>Browse a carefully organised catalogue of refrigerators, cookers, laundry, kitchen appliances, home comfort and consumer audio — with exact models and straightforward UGX pricing.</p>
            <div className="hero-actions">
              <Link className="btn" href="/shop">Shop all products</Link>
              <Link className="btn secondary" href="/brands">Browse brands</Link>
            </div>
            <div className="hero-links">
              <Link href="/shop?category=Refrigerators">Refrigerators →</Link>
              <Link href="/shop?category=Cookers">Cookers →</Link>
              <Link href="/shop?category=Washing%20Machines">Laundry →</Link>
              <Link href="/shop?category=Consumer%20Audio">Audio →</Link>
            </div>
          </div>
          <div className="hero-note">
            <span>CATALOGUE</span>
            <strong>{products.length}</strong>
            <p>products organised across the Amaal collection.</p>
          </div>
        </section>
      </div>
    </section>

    <section className="trust-strip" aria-label="Amaal catalogue highlights">
      <div className="container trust-grid">
        {trustItems.map(([number, title, text]) => <div className="trust-item" key={number}>
          <span>{number}</span><div><strong>{title}</strong><p>{text}</p></div>
        </div>)}
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="section-head">
          <div><div className="eyebrow">Browse the collection</div><h2>Shop by category</h2><p className="muted">Explore each part of the catalogue at a glance.</p></div>
          <Link href="/shop">View all</Link>
        </div>
        <div className="category-grid category-grid-home">
          {liveCategories.map((category, index) => {
            const representative = category.representative;
            return <Link key={category.name} href={`/shop?category=${encodeURIComponent(category.name)}`} className="category-card">
            <div className="category-image">
              {representative ? <ProductImage src={representative.image} alt={representative.name} brand={representative.brand} model={representative.model} width={520} height={300} sizes="(max-width: 700px) 50vw, (max-width: 1000px) 33vw, 25vw"/> : null}
            </div>
            <div className="category-top"><span className="category-index">{String(index + 1).padStart(2, '0')}</span><span className="category-count">{category.count} items</span></div>
            <h3>{category.name}</h3>
            <p>{category.description}</p>
            <span className="arrow">Explore →</span>
          </Link>;
          })}
        </div>
      </div>
    </section>

    <section className="section muted-section">
      <div className="container">
        <div className="section-head">
          <div><div className="eyebrow">Curated selection</div><h2>Featured from the catalogue</h2><p className="muted">A quick way into some of the collection's strongest brands.</p></div>
          <Link href="/shop">See everything</Link>
        </div>
        <ProductGrid products={picks}/>
      </div>
    </section>

    <section className="section closing-section">
      <div className="container">
        <div className="closing-card">
          <div><div className="eyebrow">Ready when you are</div><h2>Find the right appliance without the clutter.</h2><p>Search by product, model, category or brand and move from discovery to product details in a few taps.</p></div>
          <Link className="btn" href="/shop">Explore the catalogue →</Link>
        </div>
      </div>
    </section>
  </main>
}
