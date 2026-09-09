'use client';
import Link from 'next/link';
import { Minus, Plus, Trash2, ArrowRight } from 'lucide-react';
import { useCartStore } from '@/lib/cart-store';
import { formatUGX } from '@/lib/catalogue';
import { ProductImage } from '@/components/catalogue/ProductImage';

export function CartSummary(){
  const {items,setQuantity,removeItem,clear}=useCartStore();
  const subtotal=items.reduce((sum,item)=>sum+item.price*item.quantity,0);
  if(!items.length) return <div className="empty-state"><div className="empty-icon">🛍</div><h2>Your bag is empty.</h2><p className="muted">Add a product from the catalogue and it will appear here.</p><Link className="btn" href="/shop">Continue shopping <ArrowRight size={16}/></Link></div>;
  return <div className="cart-layout"><section className="cart-lines"><div className="cart-section-title"><strong>{items.length} {items.length===1?'item':'items'}</strong><button className="text-button" onClick={clear}>Clear bag</button></div>{items.map(item=><article className="cart-line" key={item.id}>
    <Link href={`/product/${item.slug}`} className="cart-line-image">{item.image?<ProductImage src={item.image} alt={item.name} brand={item.brand} model={item.model} width={160} height={120}/>:<span>{item.brand}</span>}</Link>
    <div className="cart-line-info"><Link href={`/product/${item.slug}`}><strong>{item.name}</strong></Link><span>{item.brand} · {item.model}</span><span className="cart-line-price">{formatUGX(item.price)}</span></div>
    <div className="qty-control"><button onClick={()=>setQuantity(item.id,item.quantity-1)} aria-label="Decrease quantity"><Minus size={14}/></button><span>{item.quantity}</span><button onClick={()=>setQuantity(item.id,item.quantity+1)} aria-label="Increase quantity"><Plus size={14}/></button></div>
    <button className="icon-button danger" onClick={()=>removeItem(item.id)} aria-label={`Remove ${item.name}`}><Trash2 size={17}/></button>
  </article>)}</section><aside className="cart-summary"><div className="eyebrow">Order summary</div><div className="summary-row"><span>Subtotal</span><strong>{formatUGX(subtotal)}</strong></div><p className="muted small">Delivery and payment are confirmed during checkout.</p><Link className="btn full" href="/checkout">Proceed to checkout <ArrowRight size={16}/></Link><Link className="continue-link" href="/shop">Continue shopping</Link></aside></div>;
}
