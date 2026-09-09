import Link from 'next/link';
import { products } from '@/data/products';
import { brandRegistry } from '@/lib/brand-registry';
import { categoryRegistry } from '@/lib/category-registry';
import { canonicalCategory } from '@/lib/catalogue';
import { BrandLogo } from '@/components/catalogue/BrandLogo';
import { ProductGrid } from '@/components/catalogue/ProductGrid';

const liveCategories = categoryRegistry
  .map(category => ({
    ...category,
    count: products.filter(product => canonicalCategory(product.category) === category.name).length,
  }))
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
          <div><div className="eyebrow">Browse the collection</div><h2>Shop by category</h2><p className="muted">Only categories with catalogue items are shown here.</p></div>
          <Link href="/shop">View all</Link>
        </div>
        <div className="category-grid category-grid-home">
          {liveCategories.map((category, index) => <Link key={category.name} href={`/shop?category=${encodeURIComponent(category.name)}`} className="category-card">
            <div className="category-top"><span className="category-index">{String(index + 1).padStart(2, '0')}</span><span className="category-count">{category.count} items</span></div>
            <h3>{category.name}</h3>
            <p>{category.description}</p>
            <span className="arrow">Explore →</span>
          </Link>)}
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

    <section className="section">
      <div className="container">
        <div className="section-head">
          <div><div className="eyebrow">Brands</div><h2>Shop by brand</h2><p className="muted">Jump straight to the brands represented in the catalogue.</p></div>
          <Link href="/brands">All brands</Link>
        </div>
        <div className="brand-grid brand-grid-home">
          {brandRegistry.slice(0, 12).map(brand => <Link key={brand.name} href={`/shop?brand=${encodeURIComponent(brand.name)}`} className="brand-card">
            <BrandLogo name={brand.name} size="lg"/>
            <span className="brand-name">{brand.name}</span>
            <span>Shop {brand.name} →</span>
          </Link>)}
        </div>
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
