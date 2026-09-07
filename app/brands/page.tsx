import Link from 'next/link';
import {brandRegistry} from '@/lib/brand-registry';
import {BrandLogo} from '@/components/catalogue/BrandLogo';

export default function Brands(){return <main className="section"><div className="container"><div className="eyebrow">Catalogue</div><h1>Brands</h1><p className="muted">Explore the appliance, kitchen and consumer-audio brands currently curated for Amaal.</p><div className="brand-grid" style={{marginTop:30}}>{brandRegistry.map(b=><Link className="brand-card" href={`/shop?brand=${encodeURIComponent(b.name)}`} key={b.name}><BrandLogo name={b.name} size="lg"/><strong className="brand-name">{b.name}</strong><span className="muted">View products →</span></Link>)}</div></div></main>}
