import { products } from '@/data/products';
export function formatUGX(value:number){return new Intl.NumberFormat('en-UG',{style:'currency',currency:'UGX',maximumFractionDigits:0}).format(value).replace('USh','UGX ')}
export function getProduct(slug:string){return products.find(p=>p.slug===slug)}
export function getProductsByCategory(category:string){return products.filter(p=>p.category.toLowerCase()===category.toLowerCase())}
export function searchProducts(query:string){const q=query.trim().toLowerCase(); if(!q)return products; return products.filter(p=>[p.name,p.brand,p.model,p.category,p.description,...p.features].join(' ').toLowerCase().includes(q))}
