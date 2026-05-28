# Codebase Audit - 2026-05-28

## Result

Audit result: Pass with notes.

The active Shopify OS 2.0 theme architecture is present, the required JSON templates parse successfully, and `main` is pushed to `origin/main`.

## Verified Theme Architecture

Required files present:

- `layout/theme.liquid`
- `templates/index.json`
- `templates/collection.json`
- `templates/product.json`
- `templates/cart.json`
- `sections/ttl-announcement-bar.liquid`
- `sections/ttl-header.liquid`
- `sections/ttl-hero.liquid`
- `sections/ttl-trust-bar.liquid`
- `sections/ttl-category-grid.liquid`
- `sections/ttl-new-arrivals.liquid`
- `sections/ttl-main-product.liquid`
- `sections/ttl-main-collection.liquid`
- `sections/ttl-cart.liquid`
- `sections/ttl-footer.liquid`
- `snippets/ttl-product-card.liquid`
- `snippets/ttl-icon.liquid`
- `snippets/ttl-price.liquid`
- `assets/ttl-theme.css`
- `assets/ttl-theme.js`
- `config/settings_schema.json`

## Homepage HS1.0

HS1.0 has been locked in `docs/HS1.0-home-lock.md`.

The active homepage template uses:

- `ttl-hero`
- `ttl-trust-bar`
- `ttl-category-grid`
- `ttl-new-arrivals`

Global layout injects:

- `ttl-announcement-bar`
- `ttl-header`
- `ttl-footer`

## Dynamic Data Audit

Pass:

- Product cards use Shopify `product` objects.
- Product prices use Shopify money filters.
- Sold-out state uses `product.available`.
- Collection page uses `collection.products`, `collection.filters`, and `collection.sort_options`.
- Product page uses `product.media`, variants, inventory availability, and configured metafields.
- Cart uses Shopify cart line items.
- New Arrivals now renders products only from the selected Shopify collection.

Fixed during audit:

- Removed hardcoded fallback product names, prices, and images from the active `ttl-new-arrivals` Shopify section. Demo products remain only in local `ttl-preview.html`, which is ignored by Git.

## Visual/UX Audit

Pass:

- Homepage matches the approved warm boutique layout.
- Footer support items stay in one row at desktop/tablet widths.
- Floating overlay is WhatsApp only.
- Category text stays single-line and responsive.
- Tops/category fallback image is reframed to avoid oversized model scale.

## JSON Validation

Pass:

- All `templates/*.json` files parse.
- `config/settings_schema.json` parses.
- `config/settings_data.json` parses.

## Git/GitHub State

Local Git:

- Current branch: `main`
- Remote: `origin` -> `https://github.com/thriftlounge/thriftlounge.git`
- Branch is aligned with `origin/main` before audit documentation changes.

Pull request check:

- `gh pr status` could not be used because GitHub CLI is not authenticated on this machine.
- GitHub API check returned `open_pr_count=0` for `thriftlounge/thriftlounge`.

## Notes

- There are older non-`ttl` sections/snippets/assets still present. They are not used by the active required homepage, product, collection, and cart templates, but they may be kept as reference or cleaned up in a later housekeeping task.
- Shopify CLI/theme-check is not installed on this machine, so validation was limited to file presence, JSON parsing, Liquid reference review, Git state, and local preview verification.
