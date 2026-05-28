# HS1.0 Home Screen Lock

Status: Locked
Date: 2026-05-28
Repository branch: `main`

## Scope

HS1.0 locks the approved homepage visual direction for The Thrift Lounge Shopify Online Store 2.0 theme.

This lock applies to:

- Announcement bar
- Header and centered brand lockup
- Homepage hero
- Trust bar
- Shop by Category cards
- New Arrivals grid behavior
- Compact footer support strip
- Floating WhatsApp-only contact button

## Visual Direction

- Premium Indian curated thrift boutique
- Warm ivory, mehendi brown, antique gold, sand beige, and soft maroon accents
- Editorial lifestyle imagery
- Feminine, boutique, Instagram-luxury styling
- Prata for logo/headings, Kalam for tagline/accent text, Hind for body/navigation
- Subtle textile-inspired patterns only, kept low opacity

## Locked Homepage Composition

1. Dark brown announcement bar
   - Left: Mumbai, India
   - Center: Free shipping message
   - Right: Follow/social text

2. Cream sticky header
   - Centered The Thrift Lounge brand
   - Tagline: Curated finds. New stories.
   - Left navigation
   - Right search, account, cart controls
   - Mobile hamburger menu

3. Full-width editorial hero
   - Large text: Timeless Pieces, Your Story.
   - Warm room/lifestyle image
   - Antique gold call-to-action button

4. Trust bar
   - Curated Styles
   - Sustainable Fashion
   - Quality Pieces
   - Easy Shopping

5. Category grid
   - Six rounded cards on desktop
   - Dark bottom overlay
   - Single-line responsive category titles
   - Tops card fallback image reframed so model scale matches the other cards

6. New Arrivals
   - Six-product desktop grid
   - Two-product mobile grid
   - Products must come from the assigned Shopify collection
   - No hardcoded product names, prices, images, or availability in the Shopify section

7. Footer/contact
   - Compact support strip only
   - Four support items remain in one row on desktop/tablet
   - Floating overlay is WhatsApp only

## Dynamic Data Rules

- Products, prices, sold-out state, product images, variants, collections, inventory, and product links must come from Shopify data.
- Theme preview imagery may be used only as fallback collection/hero visuals or in the local `ttl-preview.html` file.
- Product metafields are read from:
  - `product.metafields.custom.condition`
  - `product.metafields.custom.measurements`
  - `product.metafields.custom.fabric`
  - `product.metafields.custom.styling_note`

## Active Files For HS1.0

- `layout/theme.liquid`
- `templates/index.json`
- `sections/ttl-announcement-bar.liquid`
- `sections/ttl-header.liquid`
- `sections/ttl-hero.liquid`
- `sections/ttl-trust-bar.liquid`
- `sections/ttl-category-grid.liquid`
- `sections/ttl-new-arrivals.liquid`
- `sections/ttl-footer.liquid`
- `snippets/ttl-collection-card.liquid`
- `snippets/ttl-product-card.liquid`
- `snippets/ttl-icon.liquid`
- `snippets/ttl-price.liquid`
- `assets/ttl-theme.css`
- `assets/ttl-theme.js`
- `config/settings_schema.json`

## Change Control

Future homepage work should be tracked as a new version, for example `HS1.1`, unless it is a bug fix that preserves this locked visual and behavior.
