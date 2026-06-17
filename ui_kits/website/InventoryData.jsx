// Fabstone live inventory data + filter taxonomy.
// Department model (4 customer-facing + Shop & Supplies back-of-house) and
// normalized facet values per ui_kits/website/FILTER-TAXONOMY.md.
//
// SEED DATASET: 11 real slabs (with photography) + representative PLACEHOLDER
// products across the other four departments so the adaptive filters are
// testable. Placeholder products have no `img` — the card renders a tinted
// "image coming soon" panel. Replace/extend with the full StoneProfits export.

export const Departments = [
  'Slabs & Countertops',
  'Tile',
  'Sinks',
  'Faucets & Fixtures',
  'Shop & Supplies',
];

// Merchandising highlights — cross-department flags surfaced as card badges and
// a top-level filter row. `featured` rolls in `sale` (current deals are featured);
// `exclusive` = Fabstone-branded, owned product. Order = badge stack priority.
export const Highlights = [
  { key: 'exclusive', label: 'Exclusive', match: (p) => !!p.exclusive },
  { key: 'featured', label: 'Featured', match: (p) => !!(p.featured || p.sale) },
  { key: 'sale', label: 'On Sale', match: (p) => !!p.sale },
];

// Per-flag badge presentation (label shown on the card corner + style modifier).
export const BadgeMeta = {
  exclusive: { label: 'Exclusive', cls: 'is-exclusive' },
  featured: { label: 'Featured', cls: 'is-featured' },
  sale: { label: 'On Sale', cls: 'is-sale' },
};

// Master swatch lookup — any color/finish rendered as a swatch dot reads its hex here.
export const SwatchHex = {
  // Primary stone / product colors
  'White': '#F1EEE8', 'Off-White': '#E6DECF', 'Cream': '#E3D6B6', 'Beige': '#D7C3A1',
  'Tan': '#C0A277', 'Gray': '#9A9A97', 'Black': '#1E1E1E', 'Brown': '#6B4A33',
  'Blue': '#3F5E78', 'Green': '#55634C', 'Gold': '#B8924A', 'Red/Rust': '#8C4A35',
  'Silver': '#B9BCC0', 'Copper': '#A66A3E', 'Aqua': '#5FA8A0', 'Multi': 'multi',
  // Metal finishes (Faucets & Sinks)
  'Chrome': '#C7CACE', 'Stainless': '#AFB3B7', 'Matte Black': '#232323',
  'Brushed Nickel': '#B8B6B0', 'Polished Nickel': '#CFCFCF', 'Champagne Bronze': '#B89A6E',
  'Venetian Bronze': '#5E4A38', 'Vibrant Brushed Bronze': '#9C7A52', 'Brass': '#B79355',
};

// Customer-facing color swatch vocabulary used by Slabs/Tile/Sinks color facet.
const PRIMARY_COLORS = ['White', 'Off-White', 'Cream', 'Beige', 'Tan', 'Gray', 'Black', 'Brown', 'Blue', 'Green', 'Gold', 'Red/Rust', 'Aqua', 'Multi'];
const METAL_FINISHES = ['Chrome', 'Stainless', 'Matte Black', 'Brushed Nickel', 'Polished Nickel', 'Champagne Bronze', 'Venetian Bronze', 'Vibrant Brushed Bronze', 'Brass'];

// Adaptive facet config — which filters appear for each department, in order.
// `swatch: true` renders color/finish dots instead of checkboxes.
export const DepartmentFacets = {
  'Slabs & Countertops': [
    { key: 'material', label: 'Material', options: ['Granite', 'Quartzite', 'Marble', 'Elements Quartz', 'Limestone', 'Travertine', 'Onyx', 'Slate', 'Porcelain'] },
    { key: 'tier', label: 'Group', options: ['Exotic', 'Semiexotic', 'Basic', 'Clearance', 'Fab Adv', 'Disco'] },
    { key: 'color', label: 'Color', swatch: true, options: PRIMARY_COLORS },
    { key: 'finish', label: 'Finish', options: ['Polished', 'Honed', 'Leathered'] },
    { key: 'price', label: 'Price Range', options: ['PL1', 'PL2', 'PL3', 'PL4', 'PL5', 'PL6', 'PL7', 'PL8', 'PL9', 'PL10'] },
  ],
  'Tile': [
    { key: 'material', label: 'Material', options: ['Porcelain', 'Ceramic', 'Glass', 'Natural Stone', 'Marble', 'Cement'] },
    { key: 'brand', label: 'Brand', options: ['Adex', 'Bedrosians', 'Eliane', 'Keystone', 'Marble Systems', 'Panaria'] },
    { key: 'color', label: 'Color', swatch: true, options: PRIMARY_COLORS },
    { key: 'format', label: 'Format', options: ['Field Tile', 'Mosaic', 'Accent', 'Specialty'] },
  ],
  'Sinks': [
    { key: 'brand', label: 'Brand', options: ['Blanco', 'Kohler', 'Soci'] },
    { key: 'material', label: 'Material', options: ['Cast Iron', 'Fireclay', 'Granite Composite', 'Stainless', 'Vitreous', 'Resin'] },
    { key: 'config', label: 'Bowl Config', options: ['Single Bowl', '50/50', '60/40', 'Oval', 'Round', 'Vessel', 'Utility/Bar'] },
    { key: 'color', label: 'Color / Finish', swatch: true, options: ['White', 'Off-White', 'Gray', 'Black', 'Brown', 'Beige'] },
  ],
  'Faucets & Fixtures': [
    { key: 'brand', label: 'Brand', options: ['Delta', 'Kohler', 'Pelican'] },
    { key: 'finish', label: 'Finish', swatch: true, options: METAL_FINISHES },
    { key: 'type', label: 'Type', options: ['Kitchen Faucet', 'Bar Faucet', 'Bathroom Faucet', 'Pot Filler', 'Accessory'] },
  ],
  'Shop & Supplies': [
    { key: 'type', label: 'Type', options: ['Adhesive', 'Chemical', 'Drain', 'Grid', 'Rack', 'Sample', 'Shop Supply', 'Special Order'] },
    { key: 'brand', label: 'Brand', options: ['Construction Ventures', 'Cortena', 'DAP', 'Fabstone', 'Satellite', 'Sinkits'] },
  ],
};

// Spec rows shown on the product detail page, per department (only present fields render).
export const DepartmentSpecs = {
  'Slabs & Countertops': [['Material', 'material'], ['Color', 'color'], ['Finish', 'finish'], ['Thickness', 'thickness'], ['Type', 'type'], ['Group', 'tier']],
  'Tile': [['Material', 'material'], ['Brand', 'brand'], ['Color', 'color'], ['Format', 'format']],
  'Sinks': [['Brand', 'brand'], ['Material', 'material'], ['Bowl Config', 'config'], ['Color / Finish', 'color']],
  'Faucets & Fixtures': [['Brand', 'brand'], ['Finish', 'finish'], ['Type', 'type']],
  'Shop & Supplies': [['Type', 'type'], ['Brand', 'brand']],
};

export const InventoryProducts = [
  // ── Slabs & Countertops (real photography) ──
  { id: 'bianco-superiore', name: 'Bianco Superiore', department: 'Slabs & Countertops', material: 'Quartzite', tier: 'Exotic', color: 'White', finish: 'Polished', thickness: '3cm', type: 'Slab', price: 'PL7', tag: 'Quartzite', meta: 'Polished · 3cm · Slab', img: 'products/bianco-superiore.jpg', featured: true },
  { id: 'calacatta-alaska-gold', name: 'Calacatta Alaska Gold', department: 'Slabs & Countertops', material: 'Elements Quartz', tier: 'Semiexotic', color: 'White', finish: 'Polished', thickness: '3cm', type: 'Slab', price: 'PL6', tag: 'Elements Quartz', meta: 'Polished · 3cm · Slab', img: 'products/calacatta-alaska-gold.jpg', exclusive: true, featured: true },
  { id: 'azzurra-bay', name: 'Azzurra Bay', department: 'Slabs & Countertops', material: 'Quartzite', tier: 'Exotic', color: 'Gray', finish: 'Polished', thickness: '3cm', type: 'Slab', price: 'PL8', tag: 'Quartzite', meta: 'Polished · 3cm · Slab', img: 'products/azzurra-bay.jpg', featured: true },
  { id: 'angola-black', name: 'Angola Black', department: 'Slabs & Countertops', material: 'Granite', tier: 'Basic', color: 'Black', finish: 'Polished', thickness: '3cm', type: 'Slab', price: 'PL3', tag: 'Granite', meta: 'Polished · 3cm · Slab', img: 'products/angola-black.jpg', featured: true },
  { id: 'bianco-marina', name: 'Bianco Marina', department: 'Slabs & Countertops', material: 'Elements Quartz', tier: 'Basic', color: 'White', finish: 'Polished', thickness: '3cm', type: 'Slab', price: 'PL5', tag: 'Elements Quartz', meta: 'Polished · 3cm · Slab', img: 'products/bianco-marina.jpg', exclusive: true },
  { id: 'alpine-valley', name: 'Alpine Valley', department: 'Slabs & Countertops', material: 'Granite', tier: 'Semiexotic', color: 'Cream', finish: 'Polished', thickness: '3cm', type: 'Slab', price: 'PL4', tag: 'Granite', meta: 'Polished · 3cm · Slab', img: 'products/alpine-valley.jpg', sale: true },
  { id: 'aspen-white', name: 'Aspen White', department: 'Slabs & Countertops', material: 'Marble', tier: 'Semiexotic', color: 'White', finish: 'Polished', thickness: '3cm', type: 'Slab', price: 'PL5', tag: 'Marble', meta: 'Polished · 3cm · Slab', img: 'products/aspen-white.jpg' },
  { id: 'bianco-fantastico', name: 'Bianco Fantastico', department: 'Slabs & Countertops', material: 'Granite', tier: 'Basic', color: 'White', finish: 'Polished', thickness: '3cm', type: 'Slab', price: 'PL2', tag: 'Granite', meta: 'Polished · 3cm · Slab', img: 'products/bianco-fantastico.jpg', sale: true },
  { id: 'azul-platino', name: 'Azul Platino', department: 'Slabs & Countertops', material: 'Granite', tier: 'Basic', color: 'Gray', finish: 'Polished', thickness: '3cm', type: 'Slab', price: 'PL2', tag: 'Granite', meta: 'Polished · 3cm · Slab', img: 'products/azul-platino.jpg', sale: true },
  { id: 'absolute-white', name: 'Absolute White', department: 'Slabs & Countertops', material: 'Quartzite', tier: 'Exotic', color: 'White', finish: 'Polished', thickness: '3cm', type: 'Slab', price: 'PL7', tag: 'Quartzite', meta: 'Polished · 3cm · Slab', img: 'products/absolute-white.jpg', featured: true },
  { id: 'bianco-verona', name: 'Bianco Verona Classic', department: 'Slabs & Countertops', material: 'Elements Quartz', tier: 'Basic', color: 'White', finish: 'Polished', thickness: '3cm', type: 'Slab', price: 'PL5', tag: 'Elements Quartz', meta: 'Polished · 3cm · Slab', imgUrl: 'https://s3.us-east-1.amazonaws.com/fabstone-sps-files/Item_Img_176451_bianco_verona_166406.jpg', exclusive: true },

  // ── Tile (placeholder — awaiting photography) ──
  { id: 'carrara-hex-mosaic', name: 'Carrara Hexagon Mosaic', department: 'Tile', material: 'Marble', brand: 'Marble Systems', format: 'Mosaic', color: 'White', tag: 'Mosaic Tile', meta: 'Marble Systems · 2" Hex', featured: true },
  { id: 'metro-subway-white', name: 'Metro Subway White', department: 'Tile', material: 'Ceramic', brand: 'Bedrosians', format: 'Field Tile', color: 'White', tag: 'Field Tile', meta: 'Bedrosians · 3×6 Gloss', sale: true },
  { id: 'cementine-blue', name: 'Cementine Blue Pattern', department: 'Tile', material: 'Porcelain', brand: 'Eliane', format: 'Accent', color: 'Blue', tag: 'Accent Tile', meta: 'Eliane · 8×8 Patterned' },
  { id: 'glass-linear-aqua', name: 'Linear Glass Aqua', department: 'Tile', material: 'Glass', brand: 'Adex', format: 'Mosaic', color: 'Aqua', tag: 'Glass Mosaic', meta: 'Adex · Linear Blend' },
  { id: 'slate-ledger-black', name: 'Slate Ledger Panel', department: 'Tile', material: 'Natural Stone', brand: 'Keystone', format: 'Specialty', color: 'Black', tag: 'Ledger Panel', meta: 'Keystone · Stacked Stone' },

  // ── Sinks (placeholder — awaiting photography) ──
  { id: 'blanco-performa-cascade', name: 'Blanco Performa Cascade', department: 'Sinks', brand: 'Blanco', material: 'Granite Composite', config: '60/40', color: 'Gray', tag: 'Granite Composite Sink', meta: 'Blanco · 60/40 Double Bowl', featured: true },
  { id: 'kohler-whitehaven', name: 'Kohler Whitehaven', department: 'Sinks', brand: 'Kohler', material: 'Cast Iron', config: 'Single Bowl', color: 'White', tag: 'Farmhouse Sink', meta: 'Kohler · Apron Front' },
  { id: 'soci-fireclay-apron', name: 'Soci Fireclay Apron', department: 'Sinks', brand: 'Soci', material: 'Fireclay', config: 'Single Bowl', color: 'White', tag: 'Fireclay Sink', meta: 'Soci · Apron Front' },
  { id: 'blanco-diamond-dual', name: 'Blanco Diamond Dual', department: 'Sinks', brand: 'Blanco', material: 'Granite Composite', config: '50/50', color: 'Brown', tag: 'Granite Composite Sink', meta: 'Blanco · 50/50 Double Bowl' },
  { id: 'kohler-strive', name: 'Kohler Strive Undermount', department: 'Sinks', brand: 'Kohler', material: 'Stainless', config: 'Single Bowl', color: 'Stainless', tag: 'Stainless Sink', meta: 'Kohler · Undermount', sale: true },

  // ── Faucets & Fixtures (placeholder — awaiting photography) ──
  { id: 'delta-trinsic', name: 'Delta Trinsic Pull-Down', department: 'Faucets & Fixtures', brand: 'Delta', finish: 'Matte Black', type: 'Kitchen Faucet', color: 'Matte Black', tag: 'Kitchen Faucet', meta: 'Delta · Pull-Down', featured: true },
  { id: 'kohler-artifacts', name: 'Kohler Artifacts Bridge', department: 'Faucets & Fixtures', brand: 'Kohler', finish: 'Vibrant Brushed Bronze', type: 'Kitchen Faucet', color: 'Vibrant Brushed Bronze', tag: 'Kitchen Faucet', meta: 'Kohler · Bridge' },
  { id: 'delta-pot-filler', name: 'Delta Wall Pot Filler', department: 'Faucets & Fixtures', brand: 'Delta', finish: 'Chrome', type: 'Pot Filler', color: 'Chrome', tag: 'Pot Filler', meta: 'Delta · Wall-Mount' },
  { id: 'pelican-bar', name: 'Pelican Bar Faucet', department: 'Faucets & Fixtures', brand: 'Pelican', finish: 'Stainless', type: 'Bar Faucet', color: 'Stainless', tag: 'Bar Faucet', meta: 'Pelican · Single-Handle' },
  { id: 'delta-widespread', name: 'Delta Widespread Lav', department: 'Faucets & Fixtures', brand: 'Delta', finish: 'Champagne Bronze', type: 'Bathroom Faucet', color: 'Champagne Bronze', tag: 'Bathroom Faucet', meta: 'Delta · Widespread' },

  // ── Shop & Supplies (back-of-house, placeholder) ──
  { id: 'sample-kit', name: 'Stone Color Sample Kit', department: 'Shop & Supplies', type: 'Sample', brand: 'Fabstone', color: 'Multi', tag: 'Sample Kit', meta: 'Fabstone · 12 Colors', exclusive: true },
  { id: 'dap-silicone', name: 'DAP 100% Silicone Sealant', department: 'Shop & Supplies', type: 'Chemical', brand: 'DAP', color: 'Gray', tag: 'Sealant', meta: 'DAP · Clear Silicone' },
  { id: 'sink-grid', name: 'Sink Mounting Grid', department: 'Shop & Supplies', type: 'Grid', brand: 'Sinkits', color: 'Stainless', tag: 'Sink Grid', meta: 'Sinkits · Stainless' },
  { id: 'basket-strainer', name: 'Basket Strainer Drain', department: 'Shop & Supplies', type: 'Drain', brand: 'Cortena', color: 'Stainless', tag: 'Drain', meta: 'Cortena · Basket Strainer' },
  { id: 'display-rack', name: 'Slab Display A-Frame', department: 'Shop & Supplies', type: 'Rack', brand: 'Construction Ventures', color: 'Black', tag: 'Display Rack', meta: 'Construction Ventures · A-Frame' },
];
