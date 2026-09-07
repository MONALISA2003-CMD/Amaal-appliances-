# Amaal Integration Contract

## Ownership
**Main Amaal owns:** customer identity, account, shared cart authority, checkout/payment, orders, payment status and customer-facing order history.

**This catalogue sub-app owns until centralization:** appliance/audio catalogue presentation, product discovery, product detail and catalogue metadata.

## Product contract
```ts
id: string
slug: string
brand: string
model: string
category: string
name: string
description: string
features: string[]
specifications: Record<string,string>
media: string[]
masterPrice: number
currency: 'UGX'
availability: 'in-stock' | 'out-of-stock' | 'price-coming-soon'
warranty?: string
variantId?: string
```

## Cart contract
A cart line must reference the exact product/SKU and quantity. Never send a client-calculated total as the authority for an order.

## Integration principles
- Main Amaal remains the customer/order authority.
- Do not create a second permanent customer database here.
- Do not create a second permanent payment authority here.
- The sub-app should consume a shared catalogue/API boundary once backend services exist.
- Production checkout must re-price from the server-side master SKU price.
