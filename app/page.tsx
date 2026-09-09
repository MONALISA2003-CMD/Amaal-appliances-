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

const heroProducts = liveCategories.slice(0, 4).map(category => category.representative).filter(Boolean);

const trustItems = [
  ['01', '291 catalogue items', 'A broad, organised appliance collection'],
  ['02', 'Exact models', 'Model numbers stay visible before you buy'],
  ['03', 'UGX pricing', 'Clear local catalogue pricing'],
  ['04', 'Easy checkout', 'Add, review and submit your order in a few taps'],
];

export default function Home(){
  return <main>
    <section className="hero-wrap">
      <div className="container">
        <section className="hero hero-home">
          <div className="hero-copy">
            <div className="eyebrow">Amaal · Appliances & audio</div>
            <h1>Good appliances.<br/><em>Clear choices.</em></h1>
            <p>Shop a carefully organised Amaal catalogue of appliances and consumer audio, with exact models, clear UGX pricing and a simple path from discovery to checkout.</p>
            <div className="hero-actions">
              <Link className="btn" href="/shop">Shop all products</Link>
              <Link className="btn secondary" href="/search">Search the catalogue</Link>
            </div>
            <div className="hero-links">
              <Link href="/shop?category=Refrigerators">Refrigerators <span>→</span></Link>
              <Link href="/shop?category=Cookers">Cookers <span>→</span></Link>
              <Link href="/shop?category=Washing%20Machines">Laundry <span>→</span></Link>
              <Link href="/shop?category=Consumer%20Audio">Audio <span>→</span></Link>
            </div>
          </div>
          <div className="hero-showcase" aria-label="Selected Amaal catalogue products">
            <div className="hero-showcase-grid">
              {heroProducts.map((product, index) => product ? <Link href={`/product/${product.slug}`} className={`hero-product hero-product-${index + 1}`} key={product.id}>
                <ProductImage src={product.image || ''} alt={product.name} brand={product.brand} model={product.model} width={500} height={420} sizes="(max-width: 900px) 35vw, 240px"/>
              </Link> : null)}
            </div>
            <div className="hero-showcase-label"><span>THE COLLECTION</span><strong>{products.length}</strong><small>products ready to explore</small></div>
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
          <div><div className="eyebrow">Browse the collection</div><h2>Shop by category</h2><p className="muted">Every card uses a real product already in the catalogue.</p></div>
          <Link className="section-link" href="/shop">View all <span>→</span></Link>
        </div>
        <div className="category-grid category-grid-home">
          {liveCategories.map((category, index) => {
            const representative = category.representative;
            return <Link key={category.name} href={`/shop?category=${encodeURIComponent(category.name)}`} className="category-card">
              <div className="category-image">
                {representative?.image ? <ProductImage src={representative.image} alt={representative.name} brand={representative.brand} model={representative.model} width={520} height={300} sizes="(max-width: 700px) 50vw, (max-width: 1000px) 33vw, 25vw"/> : null}
              </div>
              <div className="category-top"><span className="category-index">{String(index + 1).padStart(2, '0')}</span><span className="category-count">{category.count} items</span></div>
              <h3>{category.name}</h3>
              <p>{category.description}</p>
              <span className="arrow">Explore <span>→</span></span>
            </Link>;
          })}
        </div>
      </div>
    </section>

    <section className="section muted-section">
      <div className="container">
        <div className="section-head">
          <div><div className="eyebrow">Curated selection</div><h2>Featured from the catalogue</h2><p className="muted">A quick route into trusted names and popular appliance families.</p></div>
          <Link className="section-link" href="/shop">See everything <span>→</span></Link>
        </div>
        <ProductGrid products={picks}/>
      </div>
    </section>

    <section className="section closing-section">
      <div className="container">
        <div className="closing-card">
          <div><div className="eyebrow">A simpler way to shop</div><h2>Find the right appliance without the clutter.</h2><p>Search by product, model, category or brand, compare the details, add to your bag and move straight to checkout.</p></div>
          <Link className="btn light" href="/shop">Explore the catalogue <span>→</span></Link>
        </div>
      </div>
    </section>
  </main>
}
