'use client';
import Link from 'next/link';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCartStore } from '@/lib/cart-store';
import { formatUGX } from '@/lib/catalogue';

export function CartSummary(){
  const {items,setQuantity,removeItem,clear}=useCartStore();
  const subtotal=items.reduce((sum,item)=>sum+item.price*item.quantity,0);
  if(!items.length) return <div className="empty-state"><h2>Your bag is empty.</h2><p className="muted">Add a product from the catalogue and it will appear here.</p><Link className="btn" href="/shop">Continue shopping</Link></div>;
  return <div className="cart-layout"><section className="cart-lines">{items.map(item=><article className="cart-line" key={item.id}>
    <div className="cart-line-image">{item.image?<img src={item.image} alt=""/>:<span>{item.brand}</span>}</div>
    <div className="cart-line-info"><strong>{item.name}</strong><span>{item.brand} · {item.model}</span><span className="cart-line-price">{formatUGX(item.price)}</span></div>
    <div className="qty-control"><button onClick={()=>setQuantity(item.id,item.quantity-1)} aria-label="Decrease quantity"><Minus size={14}/></button><span>{item.quantity}</span><button onClick={()=>setQuantity(item.id,item.quantity+1)} aria-label="Increase quantity"><Plus size={14}/></button></div>
    <button className="icon-button danger" onClick={()=>removeItem(item.id)} aria-label={`Remove ${item.name}`}><Trash2 size={17}/></button>
  </article>)}</section><aside className="cart-summary"><div className="eyebrow">Order summary</div><div className="summary-row"><span>Subtotal</span><strong>{formatUGX(subtotal)}</strong></div><p className="muted small">Delivery and payment are confirmed during checkout. No hidden price changes are applied in the browser.</p><Link className="btn full" href="/checkout">Proceed to checkout</Link><button className="text-button" onClick={clear}>Clear bag</button></aside></div>;
}
