'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCartStore } from '@/lib/cart-store';
import { formatUGX } from '@/lib/catalogue';

const schema=z.object({name:z.string().min(2,'Enter your full name.'),phone:z.string().min(9,'Enter a valid phone number.'),email:z.string().email('Enter a valid email.').optional().or(z.literal('')),location:z.string().min(2,'Enter your delivery location.'),payment:z.enum(['cash-on-delivery','mobile-money','bank-transfer'])});
type FormData=z.infer<typeof schema>;
export default function Checkout(){
 const router=useRouter(); const items=useCartStore((s)=>s.items); const clear=useCartStore((s)=>s.clear); const subtotal=items.reduce((sum,i)=>sum+i.price*i.quantity,0);
 const {register,handleSubmit,formState:{errors,isSubmitting}}=useForm<FormData>({resolver:zodResolver(schema),defaultValues:{payment:'mobile-money'}});
 const onSubmit=(data:FormData)=>{ if(!items.length)return; const order=`AMA-${Date.now().toString().slice(-8)}`; sessionStorage.setItem('amaal-last-order',JSON.stringify({order,data,items,total:subtotal})); clear(); router.push(`/order-confirmation?order=${order}`); };
 if(!items.length) return <main className="section"><div className="container empty-state"><div className="eyebrow">Checkout</div><h1>No items to checkout.</h1><p className="muted">Your bag is empty.</p><Link className="btn" href="/shop">Shop products</Link></div></main>;
 return <main className="section"><div className="container"><div className="eyebrow">Secure checkout interface</div><h1>Complete your order</h1><div className="checkout-layout"><form className="checkout-form" onSubmit={handleSubmit(onSubmit)}><label>Full name<input {...register('name')} placeholder="Your name"/>{errors.name&&<small>{errors.name.message}</small>}</label><label>Phone number<input {...register('phone')} placeholder="07xx xxx xxx"/>{errors.phone&&<small>{errors.phone.message}</small>}</label><label>Email (optional)<input {...register('email')} placeholder="you@example.com"/>{errors.email&&<small>{errors.email.message}</small>}</label><label>Delivery location<input {...register('location')} placeholder="Area, town/city"/>{errors.location&&<small>{errors.location.message}</small>}</label><fieldset><legend>Payment preference</legend><label className="radio"><input type="radio" value="mobile-money" {...register('payment')}/> Mobile money</label><label className="radio"><input type="radio" value="cash-on-delivery" {...register('payment')}/> Cash on delivery</label><label className="radio"><input type="radio" value="bank-transfer" {...register('payment')}/> Bank transfer</label></fieldset><button className="btn full" disabled={isSubmitting}>Place order request</button><p className="muted small">This repository currently creates a local order-request confirmation. Payment gateway, inventory reservation and server-side order persistence are integration boundaries for the main Amaal backend.</p></form><aside className="checkout-summary"><div className="eyebrow">Your order</div>{items.map(i=><div className="summary-item" key={i.id}><span>{i.name} × {i.quantity}</span><strong>{formatUGX(i.price*i.quantity)}</strong></div>)}<div className="summary-row total"><span>Total</span><strong>{formatUGX(subtotal)}</strong></div></aside></div></div></main>;
}
