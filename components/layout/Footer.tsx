import Link from 'next/link';

export function Footer(){
  return <footer className="site-footer">
    <div className="container footer-grid">
      <div className="footer-brand">
        <Link href="/" className="brand-mark">Amaal</Link>
        <p>Appliances, kitchen essentials and consumer audio — organised in one clear catalogue.</p>
      </div>
      <div>
        <div className="eyebrow">Shop</div>
        <Link href="/shop">All products</Link>
        <Link href="/shop?category=Refrigerators">Refrigerators</Link>
        <Link href="/shop?category=Cookers">Cookers</Link>
        <Link href="/shop?category=Microwaves">Microwaves</Link>
        <Link href="/shop?category=Washing%20Machines">Washing machines</Link>
      </div>
      <div>
        <div className="eyebrow">Explore</div>
        <Link href="/shop?category=Small%20Kitchen%20Appliances">Small kitchen</Link>
        <Link href="/shop?category=Blenders%20%26%20Juicers">Blenders & juicers</Link>
        <Link href="/shop?category=Quick%20Cooking%20%26%20Frying">Quick cooking</Link>
        <Link href="/shop?category=Consumer%20Audio">Consumer audio</Link>
        <Link href="/brands">Brands</Link>
      </div>
      <div>
        <div className="eyebrow">Amaal</div>
        <p className="footer-note">Exact models, clear UGX pricing and a catalogue designed for easy browsing.</p>
        <Link className="footer-cta" href="/shop">Start shopping →</Link>
      </div>
    </div>
    <div className="container footer-bottom">
      <span>© {new Date().getFullYear()} Amaal</span>
      <span>Appliances & consumer audio</span>
    </div>
  </footer>
}
