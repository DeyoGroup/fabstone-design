# Fabstone Website — Build Roadmap

Working gameplan to take the site from the current two pages to launch-complete.
Status: ✦ = built in this project · ◌ = needs design · ⧗ = blocked on client input

## Pages

| # | Page | Status | Source / inputs needed | Notes |
|---|------|--------|------------------------|-------|
| 1 | Home (`/home2/`) | ✕ built | — | SOCI section removed, real copy, two-row gallery scroller, textured utilities available |
| 2 | Live Inventory | ✕ built | ⧗ full product export (StoneProfits CSV/Excel, or saved "Show all" HTML) | **Department-first rebuild (2026-06-15):** 5 departments, adaptive per-dept facets, color/finish swatches. 11 real slabs + ~20 placeholder products across Tile/Sinks/Faucets/Shop so filters are testable |
| 3 | Product detail | ✕ built | ⧗ verify spec fields vs. StoneProfits (screenshot of an item page) | `product.html?item=<id>`; spec rows + related items now adapt to department |
| 4 | Collections / category landing | ◌ | staging capture if one exists; else design fresh | One page per material (Marble, Quartzite…) or one filterable page — recommend reusing inventory with pre-set facet |
| 5 | About Us | ◌ | company story, team photos, yard photos | "Why Fabstone" section is seed content |
| 6 | Inspiration Gallery | ◌ | full install-photo library w/ project names | Expand home scroller into filterable masonry page |
| 7 | Contact Us | ◌ | confirm form fields + destination email | Map + form (forms.css already styled) |
| 8 | Trade Program / Designer Resources | ◌ ⧗ | program details | Footer links to it |
| 9 | Find a Dealer | ◌ ⧗ | dealer list | Footer links to it |
| 10 | Sample Requests | ◌ ⧗ | fulfillment workflow | Could be a form or per-product CTA |
| 11 | Pay Online | ⧗ | payment provider link | Utility-bar link; likely external |
| 12 | Legal (Privacy / Terms / Accessibility) | ◌ | client legal copy | Simple doc template |

## Suggested order

1. **Product data import** — unblocks Inventory + Product pages with all 159 items (need: StoneProfits export, or "Show all Items" page saved as HTML).
2. **Contact Us** — every CTA on the site points at it; small, high value.
3. **About Us** — content exists in part (Why Fabstone), needs photos + story.
4. **Inspiration Gallery** — assets exist; mostly layout work.
5. **Collections landing(s)** — decide: separate pages vs. pre-filtered inventory links.
6. **Trade / Dealer / Samples** — needs client program details first.
7. **Legal pages** — drop in copy when ready.

## Standing client asks

- StoneProfits inventory export (CSV/Excel) **or** saved "Show all" inventory HTML
- Screenshot of a StoneProfits product page (to verify spec fields)
- Staging captures (Cmd+S → "Webpage, Complete" + zipped `_files`) for any other designed pages
- About Us copy + team/yard photography
- Trade program, dealer list, sample-request details
- Real names/categories check for seeded products (group/color/price levels are guesses; Absolute White assumed quartzite)
- **Filter taxonomy received 2026-06-15** — raw StoneProfits Group (56) & Color (~150) lists captured in `ui_kits/website/FILTER-TAXONOMY.md`; both need normalization before UI (group = 7 mixed axes; color = collapse to ~16 swatches + separate Finish facet, plus typo/dupe cleanup)

## Session log

- **2026-06-11** — DS built from staging capture; home page rebuilt (SOCI removed, real copy, client product photos, two-row gallery scroller, map fixed); reversed logo added; Live Inventory + Product pages built with faceted browsing; facets alphabetized; `.fs-texture` utilities added; search clear-button enlarged; logo links home.
