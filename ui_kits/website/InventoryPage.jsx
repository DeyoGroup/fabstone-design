// Fabstone website UI kit — Live Inventory page.
// Department-first faceted browser modeled on fabstone.stoneprofitsweb.com:
// 5 departments (Slabs & Countertops, Tile, Sinks, Faucets & Fixtures,
// Shop & Supplies), an ADAPTIVE sidebar whose facets change per department,
// color/finish swatches, search, per-page selector, pagination.
//
// Merchandising layer: cross-department Highlights (Featured / Exclusive / On
// Sale) shown as a top filter row + card badges. Departments are MULTI-SELECT,
// so a Highlight (e.g. Featured) can span the whole catalog. Deep-linkable via
// ?highlight=featured|exclusive|sale and ?dept=<Department name>.
import { SiteHeader } from '../../components/chrome/SiteHeader.jsx';
import { SiteFooter } from '../../components/chrome/SiteFooter.jsx';
import { CtaBanner } from '../../components/chrome/CtaBanner.jsx';
import { SearchInput } from '../../components/core/SearchInput.jsx';
import { ArrowButton } from '../../components/core/ArrowButton.jsx';
import { InventoryProducts, Departments, DepartmentFacets, SwatchHex, Highlights, BadgeMeta } from './InventoryData.jsx';

function dotStyle(name) {
  const hex = SwatchHex[name];
  if (hex === 'multi') {
    return { backgroundImage: 'conic-gradient(#8C4A35, #B8924A, #55634C, #3F5E78, #6B4A33, #8C4A35)' };
  }
  return { background: hex || '#cfcabf' };
}

// Card corner badges — literal flags set on the product (exclusive > featured > sale).
export function CardBadges({ product }) {
  const keys = ['exclusive', 'featured', 'sale'].filter((k) => product[k]);
  if (!keys.length) return null;
  return (
    <div className="fs-inv-card__badges">
      {keys.map((k) => <span key={k} className={'fs-badge ' + BadgeMeta[k].cls}>{BadgeMeta[k].label}</span>)}
    </div>
  );
}

// Shared media: real photo, or a tinted "image coming soon" placeholder.
export function InvMedia({ product, assetBase, cls }) {
  const src = product.imgUrl || (product.img ? assetBase + '/images/' + product.img : null);
  if (src) return <img src={src} alt={product.name} loading="lazy" />;
  return (
    <div className={'fs-ph ' + (cls || '')} style={dotStyle(product.color)}>
      <span className="fs-ph__scrim" aria-hidden="true"></span>
      <span className="fs-ph__tag">{product.tag}</span>
      <span className="fs-ph__note">Image coming soon</span>
    </div>
  );
}

function CheckFacet({ label, options, counts, selected, onToggle }) {
  return (
    <div className="fs-facet">
      <h3>{label}</h3>
      <ul className="fs-facet__list">
        {options.map((opt) => {
          const n = counts[opt] || 0;
          const on = selected.has(opt);
          return (
            <li key={opt}>
              <label className={'fs-facet__opt' + (!n && !on ? ' is-empty' : '')}>
                <input type="checkbox" checked={on} disabled={!n && !on} onChange={() => onToggle(opt)} />
                <span>{opt}</span>
                <span className="count">{n}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function SwatchFacet({ label, options, counts, selected, onToggle }) {
  return (
    <div className="fs-facet">
      <h3>{label}</h3>
      <ul className="fs-facet__list">
        {options.map((opt) => {
          const n = counts[opt] || 0;
          const on = selected.has(opt);
          return (
            <li key={opt}>
              <button type="button" className={'fs-facet__swatch' + (on ? ' is-active' : '')}
                disabled={!n && !on} onClick={() => onToggle(opt)}>
                <span className="fs-facet__dot" style={dotStyle(opt)}></span>
                <span>{opt}</span>
                <span className="count">{n}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function InvCard({ product, assetBase }) {
  return (
    <a className="fs-inv-card" href={'./product.html?item=' + product.id}>
      <div className="fs-inv-card__media">
        <CardBadges product={product} />
        <InvMedia product={product} assetBase={assetBase} />
      </div>
      <div className="fs-inv-card__body">
        <span className="fs-inv-card__tag">{product.tag}</span>
        <h3 className="fs-inv-card__title">{product.name}</h3>
        <span className="fs-inv-card__meta">{product.meta}</span>
      </div>
    </a>
  );
}

// Adaptive facets for the selected department(s):
//  • exactly 1 department → that department's full adaptive facet list (unchanged).
//  • 2+ departments     → a compact UNIVERSAL set (Color/Finish, Material, Brand)
//    built from the values actually present, so it never shows an empty facet.
const UNIVERSAL_FACETS = [
  { key: 'color', label: 'Color / Finish', swatch: true },
  { key: 'material', label: 'Material' },
  { key: 'brand', label: 'Brand' },
];
function buildFacets(deptList) {
  if (deptList.length === 1) return DepartmentFacets[deptList[0]];
  if (deptList.length === 0) return [];
  const pool = InventoryProducts.filter((p) => deptList.includes(p.department));
  const out = [];
  for (const u of UNIVERSAL_FACETS) {
    const order = [];
    const seen = new Set();
    for (const d of deptList) {
      for (const f of DepartmentFacets[d]) {
        if (f.key === u.key) for (const o of f.options) if (!seen.has(o)) { seen.add(o); order.push(o); }
      }
    }
    for (const p of pool) { const v = p[u.key]; if (v && !seen.has(v)) { seen.add(v); order.push(v); } }
    const present = order.filter((o) => pool.some((p) => p[u.key] === o));
    if (present.length) out.push({ ...u, options: present });
  }
  return out;
}

// Contextual band copy per active highlight.
function bandCopy(highlight) {
  switch (highlight) {
    case 'featured':
      return { eyebrow: 'Highlights', word: 'Featured', rest: ' Inventory', lede: 'Popular picks and current deals — hand-selected from across every department.' };
    case 'exclusive':
      return { eyebrow: 'Fabstone Originals', word: 'Exclusive', rest: ' Collection', lede: 'Limited-run, Fabstone-branded surfaces and supplies you won\u2019t find anywhere else.' };
    case 'sale':
      return { eyebrow: 'Limited Time', word: 'On Sale', rest: ' Now', lede: 'Current price drops across the yard \u2014 reserve before they\u2019re gone.' };
    default:
      return { eyebrow: 'Browse the Catalog', word: 'Live', rest: ' Inventory', lede: 'Every slab, sink, tile and fixture in our Melissa, TX yard \u2014 photographed, measured and updated in real time.' };
  }
}

export function InventoryPage({ assetBase = '../../assets', initialHighlight = null, initialDept = null }) {
  const [highlight, setHighlight] = React.useState(initialHighlight);
  const [depts, setDepts] = React.useState(() => new Set(initialHighlight ? Departments : [initialDept || Departments[0]]));
  const [q, setQ] = React.useState('');
  const [sel, setSel] = React.useState({});
  const [perPage, setPerPage] = React.useState(9);
  const [page, setPage] = React.useState(0);
  const [filtersOpen, setFiltersOpen] = React.useState(false);  // collapsed on mobile; CSS keeps it open on desktop

  // Deep-link: ?highlight=featured|exclusive|sale and ?dept=<name>
  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const hl = params.get('highlight');
    const dp = params.get('dept');
    if (hl && Highlights.some((h) => h.key === hl)) { setHighlight(hl); setDepts(new Set(Departments)); }
    else if (dp && Departments.includes(dp)) { setDepts(new Set([dp])); }
  }, []);

  const activeDepts = Departments.filter((d) => depts.has(d));
  const facets = buildFacets(activeDepts);
  const sizeOf = (key) => (sel[key] ? sel[key].size : 0);
  const hlMatch = (p) => (highlight ? Highlights.find((h) => h.key === highlight).match(p) : true);

  const toggleDept = (d) => {
    setSel({}); setPage(0);
    setDepts((prev) => {
      const next = new Set(prev);
      next.has(d) ? next.delete(d) : next.add(d);
      return next;
    });
  };
  const allDepts = () => { setDepts(new Set(Departments)); setSel({}); setPage(0); };
  const pickHighlight = (key) => {
    setHighlight(key);
    setDepts(new Set(Departments));
    setSel({}); setPage(0);
  };
  const toggle = (key, opt) => {
    setSel((prev) => {
      const next = new Set(prev[key] || []);
      next.has(opt) ? next.delete(opt) : next.add(opt);
      return { ...prev, [key]: next };
    });
    setPage(0);
  };
  const clearAll = () => { setSel({}); setQ(''); setHighlight(null); setPage(0); };

  const matchesSearch = (p) => q.trim() === '' ||
    (p.name + ' ' + (p.tag || '') + ' ' + (p.material || '') + ' ' + (p.brand || '') + ' ' + (p.color || '')).toLowerCase().includes(q.trim().toLowerCase());
  const matchesFacets = (p, skipKey) => facets.every(({ key }) =>
    key === skipKey || sizeOf(key) === 0 || (sel[key] && sel[key].has(p[key])));

  const pool = InventoryProducts.filter((p) => depts.has(p.department));
  const filtered = pool.filter((p) => matchesFacets(p, null) && matchesSearch(p) && hlMatch(p));

  // Department pill counts respect search + highlight (ignore dept/facet selection).
  const deptCounts = {};
  for (const d of Departments) deptCounts[d] = InventoryProducts.filter((p) => p.department === d && matchesSearch(p) && hlMatch(p)).length;

  // Highlight chip counts respect search only (across the whole catalog).
  const hlCounts = { all: InventoryProducts.filter(matchesSearch).length };
  for (const h of Highlights) hlCounts[h.key] = InventoryProducts.filter((p) => matchesSearch(p) && h.match(p)).length;

  // Facet counts reflect the OTHER active facets + highlight (standard faceted search).
  const counts = {};
  for (const { key } of facets) {
    counts[key] = {};
    for (const p of pool) {
      if (matchesSearch(p) && hlMatch(p) && matchesFacets(p, key)) counts[key][p[key]] = (counts[key][p[key]] || 0) + 1;
    }
  }

  const maxPage = Math.max(0, Math.ceil(filtered.length / perPage) - 1);
  const safePage = Math.min(page, maxPage);
  const visible = filtered.slice(safePage * perPage, safePage * perPage + perPage);
  const activeFilterCount = (highlight ? 1 : 0) + facets.reduce((n, { key }) => n + sizeOf(key), 0);
  const anyFilter = q.trim() !== '' || !!highlight || facets.some(({ key }) => sizeOf(key) > 0);
  const isAllDepts = activeDepts.length === Departments.length;

  const copy = bandCopy(highlight);

  // Mouse drag-to-scroll for the department pill bar (touch swipe is native).
  const deptsRef = React.useRef(null);
  const deptDrag = React.useRef({ down: false, startX: 0, startLeft: 0, moved: false });
  const onDeptDown = (e) => {
    const el = deptsRef.current;
    if (!el) return;
    deptDrag.current = { down: true, startX: e.clientX, startLeft: el.scrollLeft, moved: false };
    el.setPointerCapture && el.setPointerCapture(e.pointerId);
  };
  const onDeptMove = (e) => {
    const el = deptsRef.current;
    if (!el || !deptDrag.current.down) return;
    const dx = e.clientX - deptDrag.current.startX;
    if (Math.abs(dx) > 3) deptDrag.current.moved = true;
    el.scrollLeft = deptDrag.current.startLeft - dx;
  };
  const onDeptUp = () => { deptDrag.current.down = false; };
  const onDeptClickCapture = (e) => { if (deptDrag.current.moved) { e.preventDefault(); e.stopPropagation(); } };
  const scopeLabel = activeDepts.length === 0 ? 'no department selected'
    : activeDepts.length === 1 ? 'in ' + activeDepts[0]
    : isAllDepts ? 'across all departments'
    : 'across ' + activeDepts.length + ' departments';

  return (
    <div className="fs-body" data-screen-label="Live Inventory">
      <SiteHeader logo={assetBase + '/images/logo-fabstone.png'} homeHref="./index.html" activeItem={highlight ? 'Featured' : 'Live Inventory'}
        nav={[
          { label: 'Live Inventory', href: './live-inventory.html' },
          { label: 'Featured', href: './live-inventory.html?highlight=featured' },
          { label: 'About Us', href: './index.html' },
          { label: 'Location', href: './index.html' },
          { label: 'Gallery', href: './index.html' },
        ]} />
      <main className="fs-main">
        <section className="fs-inv-band fs-texture" data-screen-label="Inventory band">
          <img className="fs-texture__img" src={assetBase + '/images/stone-double-charge-640x480.png'} alt="" aria-hidden="true" />
          <span className="fs-texture__shade" aria-hidden="true"></span>
          <div className="eyebrow">{copy.eyebrow}</div>
          <h1><em className="fs-accent">{copy.word}</em>{copy.rest}</h1>
          <p>{copy.lede}</p>
          <SearchInput value={q} onChange={(v) => { setQ(v); setPage(0); }} />
        </section>
        <section className="fs-inv" data-screen-label="Inventory listing">
          <div className="fs-inv__depts" role="group" aria-label="Departments" ref={deptsRef}
            onPointerDown={onDeptDown} onPointerMove={onDeptMove} onPointerUp={onDeptUp} onPointerCancel={onDeptUp}
            onClickCapture={onDeptClickCapture}>
            <button type="button" className={'fs-inv__dept fs-inv__dept--all' + (isAllDepts ? ' is-active' : '')}
              aria-pressed={isAllDepts} onClick={allDepts}>
              All Departments
            </button>
            {Departments.map((d) => (
              <button key={d} type="button" aria-pressed={depts.has(d)}
                className={'fs-inv__dept' + (depts.has(d) ? ' is-active' : '')} onClick={() => toggleDept(d)}>
                {d}<span className="n">{deptCounts[d]}</span>
              </button>
            ))}
          </div>
          <div className="fs-inv__inner">
            <aside className={'fs-inv__filters' + (filtersOpen ? ' is-open' : '')} aria-label="Filters">
              <div className="fs-inv__filters-head">
                <button type="button" className="fs-inv__filters-toggle" aria-expanded={filtersOpen}
                  onClick={() => setFiltersOpen((o) => !o)}>
                  <h2>Filters</h2>
                  {anyFilter ? <span className="fs-inv__filters-badge">{activeFilterCount}</span> : null}
                  {anyFilter ? (
                    <span className="fs-inv__clear" role="button" tabIndex={0}
                      onClick={(e) => { e.stopPropagation(); clearAll(); }}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.stopPropagation(); clearAll(); } }}>Clear All</span>
                  ) : null}
                  <span className="fs-inv__filters-chevron" aria-hidden="true"></span>
                </button>
              </div>
              <div className="fs-inv__filters-body">
              <div className="fs-facet fs-facet--hl">
                <h3>Highlights</h3>
                <ul className="fs-facet__list">
                  <li>
                    <button type="button" className={'fs-hl-opt' + (!highlight ? ' is-active' : '')}
                      onClick={() => { setHighlight(null); allDepts(); }}>
                      All Inventory<span className="count">{hlCounts.all}</span>
                    </button>
                  </li>
                  {Highlights.map((h) => (
                    <li key={h.key}>
                      <button type="button" className={'fs-hl-opt fs-hl-opt--' + h.key + (highlight === h.key ? ' is-active' : '')}
                        onClick={() => pickHighlight(h.key)}>
                        {h.label}<span className="count">{hlCounts[h.key]}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              {facets.length === 0 ? (
                <p className="fs-inv__filters-note">{activeDepts.length === 0 ? 'Select a department to filter.' : 'Pick a single department for detailed filters.'}</p>
              ) : facets.map((f) => (
                f.swatch
                  ? <SwatchFacet key={f.key} label={f.label} options={f.options} counts={counts[f.key]} selected={sel[f.key] || new Set()} onToggle={(opt) => toggle(f.key, opt)} />
                  : <CheckFacet key={f.key} label={f.label} options={f.options} counts={counts[f.key]} selected={sel[f.key] || new Set()} onToggle={(opt) => toggle(f.key, opt)} />
              ))}
              </div>
            </aside>
            <div>
              <div className="fs-inv__toolbar">
                <span className="fs-inv__count" aria-live="polite"><strong>{filtered.length}</strong> {filtered.length === 1 ? 'product' : 'products'} {scopeLabel}</span>
                <label className="fs-inv__perpage">
                  Show
                  <select value={perPage} onChange={(e) => { setPerPage(Number(e.target.value)); setPage(0); }}>
                    <option value="9">9</option>
                    <option value="18">18</option>
                    <option value="36">36</option>
                    <option value={String(Math.max(1, pool.length))}>All</option>
                  </select>
                  per page
                </label>
              </div>
              <div className="fs-inv__grid" aria-live="polite">
                {visible.map((p) => <InvCard key={p.id} product={p} assetBase={assetBase} />)}
                {visible.length === 0 ? (
                  <p className="fs-inv__empty">No products match your filters. Try clearing a filter, or contact us — new shipments arrive weekly.</p>
                ) : null}
              </div>
              {maxPage > 0 ? (
                <div className="fs-inv__pager">
                  <ArrowButton direction="prev" disabled={safePage === 0} onClick={() => setPage(safePage - 1)} />
                  <span className="fs-inv__pager-label">Page {safePage + 1} of {maxPage + 1}</span>
                  <ArrowButton direction="next" disabled={safePage >= maxPage} onClick={() => setPage(safePage + 1)} />
                </div>
              ) : null}
            </div>
          </div>
        </section>
        <CtaBanner title="Don't See What You Need?" lede="New containers arrive weekly — tell us what you're looking for." primaryLabel="Contact Us" secondaryLabel="" />
      </main>
      <SiteFooter logo={assetBase + '/images/logo-fabstone.png'} />
    </div>
  );
}
