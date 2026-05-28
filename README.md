# The Thrift Lounge Shopify Theme

Custom Shopify Online Store 2.0 theme for a women's clothing thrift boutique.

## Current Lock

Homepage visual direction is locked as `HS1.0`.

- Lock document: `docs/HS1.0-home-lock.md`
- Audit document: `docs/codebase-audit-2026-05-28.md`

## Active Structure

- `layout/theme.liquid` provides the global document shell.
- `templates/index.json`, `collection.json`, `product.json`, and `cart.json` define the active required Online Store 2.0 templates.
- `sections/ttl-*.liquid` provide the active reusable theme-editor sections.
- `snippets/ttl-*.liquid` contain shared product, price, icon, and collection-card markup.
- `assets/ttl-theme.css` and `assets/ttl-theme.js` provide the boutique styling and small interactions.
- `config/settings_schema.json` exposes brand, social, homepage, collection, and support controls.

Older non-`ttl` files may exist as reference material, but the active locked storefront uses the `ttl-*` architecture.

## Dynamic Data

Products, product images, prices, sale state, stock availability, collections, collection imagery, search results, cart items, and product recommendations are read from Shopify objects.

The active Shopify theme must not hardcode product records, prices, inventory, or product imagery.

## Suggested Shopify Setup

Create collections such as:

- New Arrivals
- Dresses
- Denim
- Workwear
- Tops
- Evening
- Accessories

Use Shopify inventory tracking for thrift stock so sold-out badges reflect actual availability.

## Required Dynamic Setup

- Assign the New Arrivals Shopify collection in the theme editor or global theme settings.
- Assign six category collections in Theme settings > Homepage content.
- Configure Shopify Search & Discovery filters for size, price, availability, and product type.
- Add product metafields under the `custom` namespace:
  - `condition`
  - `measurements`
  - `fabric`
  - `styling_note`
- Add Instagram and WhatsApp links in Theme settings > Social links.

## Local Preview

`ttl-preview.html` is a local visual preview file and is ignored by Git. It can include static demo content for visual review only; production Shopify sections must remain dynamic.
