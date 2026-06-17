# Fabstone Website UI Kit

Interactive recreation of the marketing site home page (`https://www.fabstone.example/home2/`), built from the fabstone-child theme's real markup and CSS (shipped via the design system's `styles.css`).

## Files

- `index.html` — mounts the home page (open this)
- `HomePage.jsx` — page composition (header → sections → footer)
- `HomeSections.jsx` — HomeHero, TrustStrip, FeaturedInventory, WhyFabstone, LocationSection, ExclusiveProducts, GallerySection
- `live-inventory.html` / `InventoryPage.jsx` — Live Inventory faceted browser (search, Product Group / Category / Color / Price Range facets, per-page selector, pagination), modeled on fabstone.stoneprofitsweb.com
- `product.html` / `ProductPage.jsx` — product detail (`?item=<id>`): photo, spec table, availability + yard map, related slabs; inventory cards link here
- `review.html` — single-file wrapper that mounts all three pages with internal routing (used for stakeholder review exports)
- `InventoryData.jsx` — product dataset (11 real products; replace with the full 159-item StoneProfits export when available — group/color/price values on current rows are guesses)

## Interactions

- Hero: play button swaps the poster for the YouTube embed
- Featured Inventory: live search + category pills filter 6 stones; prev/next arrows page 3-up
- All hover states (card lift, image zoom, nav underline) come from the real site CSS

## Deviations from staging (per client)

- **"SOCI + Elements" platform section removed**; trust-strip copy recast to drop SOCI/Elements mention (partner logos kept)
- Lorem-ipsum copy replaced with realistic stone-industry copy
- Phone-mockup chip now reads "Live Inventory / Browse Slabs in Real Time" instead of "Platform Solutions / SOCI + Elements"
- Google Maps embed + YouTube video are hotlinked (network required)

Other pages (Collections, About, Contact…) were not captured from staging and are intentionally not invented — ask for captures to add them.
