import Link from 'next/link';
import {brandRegistry} from '@/lib/brand-registry';
import {BrandLogo} from '@/components/catalogue/BrandLogo';

const groups = [
  { key: 'appliances', label: 'Home appliances', copy: 'Refrigeration, laundry, cooking and everyday home essentials.' },
  { key: 'small-appliances', label: 'Kitchen & small appliances', copy: 'Kettles, blenders, food processors and practical kitchen helpers.' },
  { key: 'audio', label: 'Audio', copy: 'Speakers and entertainment audio from the Amaal range.' },
] as const;

export default function Brands(){
  return <main className="section brands-page">
    <div className="container">
      <div className="brands-intro">
        <div>
          <div className="eyebrow">Our brands</div>
          <h1 className="page-title">Brands you can shop.</h1>
          <p className="lead muted">Explore the brands available across the Amaal range, organised by product family for easier browsing.</p>
        </div>
        <div className="brands-count"><strong>{brandRegistry.length}</strong><span>brands</span></div>
      </div>

      <div className="brands-groups">
        {groups.map(group => {
          const items = brandRegistry.filter(b => b.category === group.key);
          return <section className="brand-group" key={group.key}>
            <div className="brand-group-head">
              <div><div className="eyebrow">{group.label}</div><h2>{group.label}</h2><p className="muted">{group.copy}</p></div>
              <span className="brand-group-count">{items.length} {items.length === 1 ? 'brand' : 'brands'}</span>
            </div>
            <div className="brand-grid">
              {items.map(b => <Link className="brand-card" href={`/shop?brand=${encodeURIComponent(b.name)}`} key={b.name}>
                <div className="brand-card-logo"><BrandLogo name={b.name} size="lg"/></div>
                
              </Link>)}
            </div>
          </section>
        })}
      </div>
    </div>
  </main>
}
