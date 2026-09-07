'use client';
import { useState } from 'react';
import { Check, ShoppingBag } from 'lucide-react';
import type { Product } from '@/types/product';
import { useCartStore } from '@/lib/cart-store';

type Props = { product: Product; buyNow?: boolean };
export function AddToCartButton({ product, buyNow = false }: Props){
  const addItem = useCartStore((s)=>s.addItem);
  const [added,setAdded] = useState(false);
  const disabled = product.availability !== 'in-stock';
  const action = () => {
    if(disabled) return;
    addItem({id:product.id,slug:product.slug,name:product.name,brand:product.brand,model:product.model,price:product.price,currency:product.currency,image:product.image});
    setAdded(true);
    window.setTimeout(()=>setAdded(false), 1400);
    if(buyNow) window.location.href='/checkout';
  };
  return <button className="btn" disabled={disabled} onClick={action} aria-label={`${buyNow?'Buy now':'Add'} ${product.name}`}>
    {added ? <><Check size={16}/> Added</> : <><ShoppingBag size={16}/> {disabled ? 'Unavailable' : buyNow ? 'Buy now' : 'Add to bag'}</>}
  </button>;
}
