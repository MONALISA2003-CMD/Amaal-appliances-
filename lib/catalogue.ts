import { products } from '@/data/products';

const categoryAliases: Record<string, string> = {
  'small kitchen': 'Small Kitchen Appliances',
  'blenders': 'Blenders & Juicers',
  'juicers': 'Blenders & Juicers',
  'quick cooking': 'Quick Cooking & Frying',
  'pressure cookers': 'Quick Cooking & Frying',
  'beverage': 'Small Kitchen Appliances',
  'home care': 'Cleaning & Floor Care',
  'audio': 'Consumer Audio',
};

export function formatUGX(value:number){return new Intl.NumberFormat('en-UG',{style:'currency',currency:'UGX',maximumFractionDigits:0}).format(value).replace('USh','UGX ')}
export function getProduct(slug:string){return products.find(p=>p.slug===slug)}
export function canonicalCategory(category:string){return categoryAliases[category.trim().toLowerCase()] ?? category}
export function getProductsByCategory(category:string){const target=canonicalCategory(category).toLowerCase(); return products.filter(p=>canonicalCategory(p.category).toLowerCase()===target)}
export function searchProducts(query:string){const q=query.trim().toLowerCase(); if(!q)return products; return products.filter(p=>[p.name,p.brand,p.model,p.category,canonicalCategory(p.category),p.description,...p.features].join(' ').toLowerCase().includes(q))}
