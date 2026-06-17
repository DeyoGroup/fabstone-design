# Fabstone Design System

**Fabstone** is a premium natural stone & surfaces company (tagline: *"Premium Natural Stone & Surfaces"*, hero line: *"Elevated by Nature"*). It sells slabs and surfaces — marble, quartzite, granite, travertine, slate, porcelain — to homeowners, designers, and the trade. Contact: sales@fabsg.com · 972-542-9678. The business surface is a marketing/e-commerce website (WordPress + WooCommerce) with live inventory browsing, an inspiration gallery, a trade program, dealers, and sample requests.

## Sources

- **Staging site:** https://www.fabstone.example/home2/ (noindex staging; WordPress + Astra parent theme + `fabstone-child` theme + Elementor 4.1.1 + WooCommerce). The site is custom-coded in the child theme with clean `fs-*` / `fs2-*` BEM classes — *not* generic Elementor widgets.
- **Saved page capture** (uploaded by user): `uploads/saved_page-1781150992681.html` + zipped `_files` folder → extracted to `site_src/` (original CSS/JS) and `assets/images/` (all site imagery).
- The child-theme CSS repeatedly cites a **Figma file "Fab Stone Landing Page"** (nodes 1:19, 1:51, 1:259, 159:102) as its source of truth. We do not have access to that Figma; the CSS comments preserve its exact specs (px sizes, colors).
- Original site CSS preserved verbatim in `site_src/css/` for diffing; the design system's `css/*.css` are 1:1 ports.

## Products represented

1. **Marketing website** (the only product) — home page (`/home2/`), collections/live inventory, solutions, about, inspiration gallery, contact. Recreated in `ui_kits/website/`.

## Notes / decisions made with the user

- Images are copied locally into `assets/images/` (extracted from the page capture). Remaining hotlinks to staging: the optional `fabstone-dark-texture.jpg` section background (404s on staging too; flat `#121212` fallback renders) and the hero YouTube embed (`LpsgKA36gtI`).
- **"SOCI + Elements" platform section: user asked to remove it** from rebuilt pages. Its styles (`.fs2-platform`) remain in `css/sections.css` for reference, but the UI kit home page omits it. The related "A Unified Vision" trust strip copy was recast to brand-appropriate copy (partner logos kept).
- Much of the staging copy is lorem ipsum; per the user, this design system writes **realistic stone-industry copy** in its place.

---

## CONTENT FUNDAMENTALS

How Fabstone writes (from real site copy):

- **Voice:** confident, premium, aspirational but concrete. "Premium natural stone and surfaces for the world's most ambitious design projects." Benefit-led, no fluff, no jargon.
- **Person:** the company is "we"/"our" ("our design team", "Our Gallery"); the reader is "you"/"your" ("Ready to Transform Your Space?", "your game").
- **Casing:** Title Case for headings and CTAs ("Live Inventory", "Explore Exclusive Products", "Ready to Transform Your Space?"). Filter pills are ALL-CAPS ("ALL", "MARBLE", "QUARTZITE"). Eyebrows are short Title Case phrases ("Curated Selections", "Platform Solutions", "Favorites", "Highlights") — or ALL-CAPS when on the red banner ("FABSTONE").
- **Headline pattern:** two-word section titles where the first word is an italic red accent: *Featured* Inventory, *Why* Fabstone, *Our* Location, *Exclusive* Products, *Our* Gallery. Implemented as `<h2><em class="fs-accent">Word</em> Rest</h2>`.
- **CTAs:** short imperative verbs, 2–3 words: "Contact Us", "Learn More", "Live Inventory", "Explore Exclusive Products". Primary action = red button; secondary = outline/ghost.
- **Product naming:** evocative two-word stone names — Midnight Galaxy, Nordic Frost, Obsidian Edge, Roman Ivory, Calacatta Oro — paired with a one-line sensory description ("Deep volcanic black slate with subtle texture, designed for statement walls and floors."). Em-dashes used inside descriptions.
- **Emoji:** never. **Exclamation marks:** never. Questions appear only as CTA headlines ("Ready to Transform Your Space?").
- **Microcopy:** functional and specific ("Search by stone type, color or application...", "Search fabstone.com").

## VISUAL FOUNDATIONS

- **Color:** white pages punctuated by full-bleed near-black (`#121212`) sections (Featured Inventory, Location) and light-grey (`#F5F6F7`) bands (trust strip, Exclusive, footer). Single brand red `#991B27` (hover `#80161F`) for CTAs, accents, italic heading words, link arrows. Copper `#C7844F` is a secondary warm accent used only for eyebrows on dark/red backgrounds. Slate `#535367` for secondary body text on light; `#D2D2D2` for body text on dark. Max 1–2 background colors per page beyond white.
- **Type:** Urbanist (Google variable font) for *everything* — display, body, UI. Weights: 400 (rare), 500 (body/nav), 600 (eyebrows, buttons, column heads), 700 (headings). Section H2 = 60/72. Hero display = 100/100. Body on marketing sections is large: 18/28 or 24/34. Nav = 20/24 medium. No letter-spacing except uppercase tags (.12–.18em). Headings line-height ≈ 1.05–1.2.
- **Backgrounds:** flat color fields; full-bleed photography only inside rounded media frames, never behind text (exception: phone-mockup hero and exclusive cards use dark protection gradients over photos). An optional dark stone texture may sit behind dark sections (`fs2-featured`, `fs2-location`).
- **Corner radii:** tokenized — 10px buttons/inputs, 24px cards & media, 40px hero-scale frames (CTA banner, platform images, filter pills), pill (999) for utility search. Phone mockup 40px.
- **Shadows:** almost none on cards at rest (`--fs-shadow-sm`); hover lifts to soft `0 8px 24px rgba(0,0,0,.08)`. Circular arrow buttons carry a layered diffuse shadow stack. Big floating elements (phone) use `0 20px 60px rgba(0,0,0,.4)`.
- **Borders:** hairline `#D2D2D2` dividers (header bottom, footer rule). On dark: `rgba(255,255,255,.10–.40)` borders on frosted controls.
- **Transparency & blur:** signature frosted-glass controls on dark imagery — `rgba(255,255,255,.10)` fill + same border + `backdrop-filter: blur(24px)` (search bars, filter pills); `rgba(0,0,0,.55)` + blur(20px) for floating badges over photos.
- **Textured dark bands:** optional `.fs-texture` utility — a stone close-up `<img class="fs-texture__img">` ghosted under a `.fs-texture__shade` dark gradient (used on the Live Inventory title band); `.fs-texture--grain` is a no-asset CSS mineral-noise alternative.
- **Protection:** bottom-up gradients `linear-gradient(to top, rgba(0,0,0,.85), transparent)` on image cards with text (exclusive cards, phone hero).
- **Motion:** one easing everywhere — `cubic-bezier(.2,.7,.2,1)` at 0.25s. Hovers: color/background swaps, cards translateY(-3/-4px), images scale(1.04) over .4–.5s, arrow icons translate(2px,-2px), nav links get a red underline that scales in from the left. No bounces, no entrance animations (only a 30s linear marquee on the announcement strip).
- **Press states:** none distinct from hover.
- **Hover color logic:** red → darker red; white/ghost → inverted fill; muted text → red.
- **Layout:** 1200px content container, generous 88–128px section padding-block, sticky white header (utility strip `#222` 48px + 98px main bar). Section pattern = centered head (eyebrow → H2 → lede) above content grid. Gallery grid runs edge-to-edge (12px gutters). Footer: light grey, 2fr+1fr+1fr+1fr columns.
- **Imagery:** warm, natural interior photography (kitchens, baths, slabs); stone close-ups for product cards (square 1:1 on dark, 4:3 elsewhere). No illustration, no duotones, no grain. Logos in the trust strip render solid dark at ~48px tall, not greyed out.
- **Cards:** image-first, radius 24, body text below (dark sections) or overlaid on a protection gradient (exclusive). Titles 24/700, descriptions 18/28 medium, "Learn More ↗" link with red arrow.

## ICONOGRAPHY

- **No icon font in practice.** All icons are **inline SVGs hand-authored in the child theme** — 24×24 viewBox, `stroke="currentColor"`, stroke-width 1.5–2, round caps/joins (outline style), occasionally `fill="currentColor"` for solid marks (heart, social glyphs). Copied verbatim into `assets/icons/` — use these files (or paste their markup inline) rather than redrawing.
- Icon inventory: mail, phone, heart (solid), search (2 sizes), diagonal "Learn More" arrow (↗ `M7 17L17 7`), chevron prev/next, play (circle + triangle), social set (Facebook solid, Instagram outline, LinkedIn solid, YouTube solid).
- Font Awesome 4 + Elementor icon CSS are enqueued by plugins but unused in the custom design (`e_font_icon_svg` renders SVGs instead). Don't introduce FA icons.
- Unicode used sparingly as glyphs: `×` for close, `✦` (`\2726`) bullets in the announcement marquee, literal `+` styled via `.fs-plus`.
- Logo: `assets/images/logo-fabstone.png` (490×96 wordmark with red/dark mark; render at 48px tall in header, 56px in footer) and `assets/images/logo-fabstone-reverse.png` (637×125 reversed/white variant, supplied by the client — use on dark `#121212` or red backgrounds).

## Index

| Path | What |
|---|---|
| `styles.css` | Global CSS entry — imports everything below |
| `tokens/` | `colors.css`, `typography.css`, `spacing.css`, `fonts.css` (@font-face Urbanist) |
| `css/` | 1:1 ports of the child theme: `base.css` (buttons, pills, cards, utilities), `components.css` (arrows, section title, tag), `forms.css`, `sections.css` (all page sections + chrome), `responsive.css` |
| `assets/images/` | Logos (primary + reversed), hero poster, stone product shots, gallery installs (web-res), partner logos; `originals/` holds the client's full-res install photos |
| `assets/icons/` | The site's inline SVG icons as files |
| `assets/fonts/` | Urbanist variable woff2 (normal + italic, latin + ext) |
| `components/core/` | React: Button, Pill, ArrowButton, SearchInput, SectionHead |
| `components/cards/` | React: StoneCard, ExclusiveCard |
| `components/chrome/` | React: SiteHeader, SiteFooter, CtaBanner |
| `ui_kits/website/` | Interactive recreation of the marketing site: home page (`index.html`) + Live Inventory faceted browser (`live-inventory.html`, data in `InventoryData.jsx`) + product detail (`product.html?item=<id>`) |
| `ROADMAP.md` | Build gameplan for the remaining website pages |
| `templates/website-home/` | Template: full home page as a consuming-project starting point |
| `guidelines/` | Specimen cards rendered in the Design System tab |
| `site_src/` | Raw captured source from staging (reference only — don't link) |
| `SKILL.md` | Agent-skill entry point |

React components are compiled into `_ds_bundle.js`; read them via `const { Button } = window.FabstoneDesignSystem_e3db74`. The website UI kit's page sections and screens (HomeHero, FeaturedInventory, HomePage, …) are exported from the same namespace. Consuming projects can also start from the **Website Home Page** template (`templates/website-home/`).
