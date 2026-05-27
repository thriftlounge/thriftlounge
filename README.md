# The Thrift Lounge Shopify Theme

Custom Shopify Online Store 2.0 theme for a women’s clothing thrift boutique.

## Structure

- `layout/theme.liquid` provides the global document shell.
- `templates/*.json` define editable Online Store 2.0 templates.
- `sections/*.liquid` provide reusable theme-editor sections.
- `snippets/*.liquid` contain shared product, price, icon, and pagination markup.
- `assets/theme.css` and `assets/theme.js` provide the boutique styling and small interactions.
- `config/settings_schema.json` exposes brand, color, and typography controls.

## Dynamic Data

Products, product images, prices, sale state, stock availability, collections, collection imagery, search results, cart items, blog posts, and product recommendations are read from Shopify objects. The theme does not hardcode product records.

For the homepage, assign Shopify collections in the theme editor:

- Hero buttons can link to any Shopify collection, page, or product.
- Collection list blocks should point to real Shopify collections.
- Featured collection should point to a “New Arrivals” or similar dynamic collection.

## Suggested Shopify Setup

Create collections such as:

- New Arrivals
- Dresses
- Denim
- Workwear
- Evening

Use Shopify inventory tracking for thrift stock so sold-out badges reflect actual availability.

## Required Dynamic Setup

- Assign the “New Arrivals” Shopify collection to the New Arrivals section in the theme editor.
- Assign six category collections to the Shop by Category section.
- Configure Shopify Search & Discovery filters for size, price, availability, and product type.
- Add product metafields under the `custom` namespace:
  - `condition`
  - `measurements`
  - `fabric`
  - `styling_note`
- Add Instagram and WhatsApp links in Theme settings > Social links.
