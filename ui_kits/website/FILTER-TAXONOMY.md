# Live Inventory — Filter Taxonomy (StoneProfits source data + proposed normalization)

Reference for the #2 Live Inventory facet rebuild. Captures the raw StoneProfits
facet values the client provided (2026-06-15) and the proposed customer-facing
structure. **Raw values are kept verbatim for the import mapping; the UI should
present the normalized structure, not the raw lists.**

---

## A. CATEGORY (department source) — see ROADMAP for the 4+1 department model
Slabs & Countertops · Tile · Sinks · Faucets & Fixtures · Shop & Supplies (back-of-house, kept per client).

---

## B. GROUP — raw list is **7 different axes mashed together**

The client "groups" list conflates merchandising tiers, brands, model/series
numbers, bowl configs, finishes, and components. Split it by axis:

### B1. Slab merchandising tier  *(real "Group" facet, Slabs dept only)*
EXOTIC · SEMIEXOTIC · BASIC · CLEARANCE · FAB ADV · DISCO
> The raw StoneProfits "group" list also contained MARBLE · TRAVERTINE · QUARTZ.
> These are **material families, not tiers** — they duplicate the Material facet,
> so they're removed from Group and surfaced only under Material (Marble, Travertine,
> Elements Quartz). Group stays a pure quality/price tier.

### B2. Brand  *(promote to its own facet — appears in Tile / Sinks / Faucets)*
MARBLE SYSTEMS · ADEX · BEDROSIANS · SOCI · ELIANE · KEYSTONE · PANARIA · BLANCO ·
KOHLER · PELICAN · CONSTRUCTION VENTURES · SINKITS · DELTA · CORTENA · DAP · SATELLITE

### B3. Model / Series  *(sub-filter under Brand, not top-level)*
1100 · 1110 · 1120 · 1400 · 1405 · 1408 · 1509 ·
SOLIDO 1200/1201/1300/1301/1310/1320/1510 ·
M SERIES 2100/2110/2200/2201/2300/2301/2405/2408/2509/2510 ·
CITYSCAPE SERIES · LUMINOUS SERIES

### B4. Bowl / form config  *(Sinks dept facet)*
SINGLE BOWL · 50/50 · 60/40 · OVAL · ROUND · VESSEL · UTILITY/BAR · KITCHEN

### B5. Components / parts  *(Shop & Supplies / accessories)*
DRAINS · GRIDS · RACK

### B6. Finish/color values that leaked into "group"
ANTHRACITE · BISCOTTI · BISCUITS · BLACK · CAFE BROWN · CHROME · CINDER · IVORY ·
METALLIC GRAY · SATIN NICKEL · TRUFFLE · WHITE  → fold into Color/Finish (section C)

### B7. Ops
SPECIAL ORDER

---

## C. COLOR — raw list is ~150 values; **collapse to ~16 swatches + a separate Finish facet**

Problems in the raw list: (1) metal **finishes** mixed with colors; (2) **branded
sink colors** (Silgranit names); (3) ~30 **compound/multi** colors; (4) **typos &
dupes** — `BLLACK/SILVER`, `BISCUITS`/`BISCUIT`, `OFF-WHITE`/`OFF WHITE`.

### C1. Primary color swatches  *(customer-facing Color filter — map every raw value to one of these)*
White · Off-White / Cream · Beige / Tan · Gray · Black · Brown · Blue · Green ·
Gold · Red / Rust · Orange · Yellow · Aqua / Turquoise · Multi · Silver · Copper / Bronze

### C2. Metal finish  *(separate "Finish" facet — Faucets & Sinks only)*
Chrome · Stainless / Brushed Stainless · Arctic Stainless · Matte Black · Polished Nickel ·
Brushed Nickel · Vibrant Brushed Nickel · Satin Gold · Brass · Champagne Bronze ·
Venetian Bronze · Oil Rubbed Bronze · Vibrant Brushed Bronze · Brushed Bronze

### C3. Branded sink colors (Silgranit etc.)  *(roll up to a primary swatch via the map)*
Anthracite→Gray · Biscotti→Beige · Biscuit→Off-White · Cinder→Gray · Concrete Gray→Gray ·
Volcano Gray→Gray · Metallic Gray→Gray · Cafe Brown→Brown · Coal Black→Black ·
Soft White→White · Truffle→Brown · Cashmere→Cream · Café/etc → nearest primary

### C4. Compound / multi colors  *(tag with BOTH primaries, default-bucket to "Multi")*
e.g. White/Gray, Blue/Rust, White/Gray/Gold, Beige/Blue, Green/Black … (~30 values).
Stone/tile blends — store both component colors so they surface under either swatch.

### C5. Cleanup before import
- `BLLACK/SILVER` → Black/Silver
- merge `OFF-WHITE` + `OFF WHITE`; `BISCUIT` + `BISCUITS`
- `CLEAR` (glass) → its own value or omit from swatch filter

---

## D. How facets appear per department (adaptive sidebar)
| Department | Facets shown |
|---|---|
| Slabs & Countertops | Material · Group (tier) · Color · Price (PL1–PL10) · Finish (Polished/Honed/Leathered) |
| Tile | Material · Brand · Color · Format/Series |
| Sinks | Brand · Material · Bowl Config · Color/Finish |
| Faucets & Fixtures | Brand · Finish · Type |
| Shop & Supplies | Type · Brand |

**Next step:** when the full product export arrives, each item gets tagged
department + the relevant facet values via the maps above. **The structure below
is now built into the UI** (`InventoryData.jsx` → `Departments`, `DepartmentFacets`,
`DepartmentSpecs`, `SwatchHex`; rendered by `InventoryPage.jsx`). Seeded with 11
real slabs + ~20 placeholder products so the adaptive filters are testable.
