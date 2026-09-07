'use client';
import { useCartStore } from '@/lib/cart-store';
export function CartCount(){ const count = useCartStore((s)=>s.items.reduce((sum,item)=>sum+item.quantity,0)); return <span>{count}</span>; }
