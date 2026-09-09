'use client';
import Link from 'next/link';
import { Menu, Search, ShoppingBag, X, ChevronRight } from 'lucide-react';
import { CartCount } from '@/components/commerce/CartCount';
import { useState } from 'react';

const groups: Array<[string, string[]]> = [
  ['Kitchen', ['Small Kitchen', 'Blenders', 'Juicers', 'Quick Cooking', 'Pressure Cookers', 'Beverage']],
  ['Home', ['Refrigerators', 'Freezers', 'Washing Machines', 'Dryers', 'Fans', 'Home Care']],
  ['Audio', ['Audio']],
];

export function Header(){
  const [open,setOpen]=useState(false);
  return <header className="header">
    <div className="container header-inner">
      <button className="mobile-nav icon-button" aria-label={open?'Close menu':'Open menu'} onClick={()=>setOpen(!open)}>{open?<X size={21}/>:<Menu size={21}/>}</button>
      <Link href="/" className="brand-mark" aria-label="Amaal home">Amaal</Link>
      <nav className="nav" aria-label="Primary navigation">
        <Link href="/shop">Shop</Link>
        <Link href="/shop?category=Small%20Kitchen">Kitchen</Link>
        <Link href="/shop?category=Quick%20Cooking">Quick cooking</Link>
        <Link href="/shop?category=Audio">Speakers</Link>
        <Link href="/brands">Brands</Link>
      </nav>
      <form className="search" action="/search">
        <Search size={17}/><input name="q" placeholder="Search products, brands or models" aria-label="Search products"/>
      </form>
      <Link href="/cart" className="cart-pill" aria-label="Shopping bag"><ShoppingBag size={17}/><span>Bag <CartCount/></span></Link>
    </div>
    {open&&<div className="mobile-menu"><div className="container mobile-menu-grid">
      {groups.map(([title, rawItems])=><div key={title as string}><div className="eyebrow">{title as string}</div>{(rawItems as string[]).map(item=><Link key={item} href={`/shop?category=${encodeURIComponent(item)}`} onClick={()=>setOpen(false)}>{item}<ChevronRight size={14}/></Link>)}</div>)}
      <div><div className="eyebrow">Explore</div><Link href="/shop" onClick={()=>setOpen(false)}>All products <ChevronRight size={14}/></Link><Link href="/brands" onClick={()=>setOpen(false)}>Brands <ChevronRight size={14}/></Link></div>
    </div></div>}
  </header>
}
