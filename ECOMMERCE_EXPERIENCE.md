# Amaal E-commerce Experience

## Current customer journey
Home → Shop → Search/Filter → Product → Add to bag / Buy now → Bag → Checkout → Order confirmation.

## Working interactions in this repository
- Search form routes to product search.
- Category and brand links filter the catalogue.
- Product cards open exact product routes.
- Product cards can add an item directly to the bag.
- Product detail can add to bag, buy now or open the bag.
- Cart quantities can be increased/decreased.
- Cart lines can be removed or cleared.
- Cart persists in the browser between sessions.
- Checkout validates name, phone, optional email, location and payment preference.
- Successful checkout creates a local order-request reference and clears the bag.

## Production integration still required
The checkout UI is intentionally honest: it does not pretend to charge a card/mobile wallet or reserve stock. Main Amaal should own authentication, the authoritative cart/order record, payment integration, inventory reservation and delivery workflow.

## Future UX modules
Wishlist, compare, delivery estimator, live stock status, customer account, saved addresses, order tracking, payment status, reviews, related products and recommendation surfaces can be added without changing the core Product → SKU → Cart Line contract.
