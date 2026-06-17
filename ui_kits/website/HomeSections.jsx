// Fabstone website UI kit — home page sections (recreated from /home2/).
// Markup mirrors the fabstone-child theme's fs-* / fs2-* classes; styles
// come from the design system's styles.css.
import { Button } from '../../components/core/Button.jsx';
import { Pill } from '../../components/core/Pill.jsx';
import { ArrowButton } from '../../components/core/ArrowButton.jsx';
import { SearchInput } from '../../components/core/SearchInput.jsx';
import { StoneCard } from '../../components/cards/StoneCard.jsx';
import { ExclusiveCard } from '../../components/cards/ExclusiveCard.jsx';
import { InventoryProducts, BadgeMeta } from './InventoryData.jsx';

// Derive card badges from the inventory's own flags, matched by product name —
// so home merchandising stays in sync with Live Inventory (no second source).
function badgesFor(title) {
  const p = InventoryProducts.find((x) => x.name === title);
  if (!p) return [];
  return ['exclusive', 'featured', 'sale'].filter((k) => p[k]).map((k) => BadgeMeta[k]);
}

// True when a product is exclusive but not also featured/on sale — these are kept
// out of the homepage Featured section (Featured = popular picks + current deals).
function isExclusiveOnly(title) {
  const p = InventoryProducts.find((x) => x.name === title);
  return !!(p && p.exclusive && !p.featured && !p.sale);
}

/* ── Hero — full-bleed video poster with play button ── */
export function HomeHero({ poster, videoId = 'LpsgKA36gtI' }) {
  const [playing, setPlaying] = React.useState(false);
  return (
    <section className={'fs2-hero has-video' + (playing ? ' is-playing' : '')} data-screen-label="Hero">
      <div className="fs2-hero__media">
        <img className="fs2-hero__poster" src={poster} alt="" loading="eager" />
        {playing ? (
          <iframe
            src={'https://www.youtube.com/embed/' + videoId + '?autoplay=1&rel=0&modestbranding=1'}
            title="Fabstone video" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        ) : null}
        <button type="button" className="fs2-hero__play" aria-label="Play video" onClick={() => setPlaying(true)}>
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
            <circle cx="40" cy="40" r="38" stroke="#FFFFFF" strokeWidth="2.5" fill="rgba(0,0,0,.18)"></circle>
            <path d="M33 27.5L57 40 33 52.5V27.5Z" fill="#FFFFFF"></path>
          </svg>
        </button>
      </div>
    </section>
  );
}

/* ── Trust strip — intro + partner logos ── */
export function TrustStrip({ assetBase }) {
  // Mouse drag-to-scroll so the mobile logo scroller is usable with a pointer
  // (not just touch). Touch swipe works natively via overflow-x.
  const logosRef = React.useRef(null);
  const drag = React.useRef({ down: false, startX: 0, startLeft: 0, moved: false });
  const onDown = (e) => {
    const el = logosRef.current;
    if (!el) return;
    drag.current = { down: true, startX: e.clientX, startLeft: el.scrollLeft, moved: false };
    el.setPointerCapture && el.setPointerCapture(e.pointerId);
  };
  const onMove = (e) => {
    const el = logosRef.current;
    if (!el || !drag.current.down) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 3) drag.current.moved = true;
    el.scrollLeft = drag.current.startLeft - dx;
  };
  const onUp = () => { drag.current.down = false; };
  return (
    <section className="fs-trust" data-screen-label="Trust strip">
      <div className="fs-trust__inner">
        <div className="fs-trust__intro">
          <h4>Trusted Across the Industry</h4>
          <p>Builders, designers and dealers rely on Fabstone surfaces.</p>
        </div>
        <div className="fs-trust__logos" ref={logosRef}
          onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={onUp}>
          <img src={assetBase + '/images/partner-investify.png'} alt="Investify" loading="lazy" draggable="false" />
          <img src={assetBase + '/images/partner-knewish.png'} alt="Knewish" loading="lazy" draggable="false" />
          <img src={assetBase + '/images/partner-upglam.png'} alt="Upglam" loading="lazy" draggable="false" />
        </div>
      </div>
    </section>
  );
}

/* ── Featured Inventory — dark section with search, pills, 3-up grid, pager ──
   Pills are the customer-facing "Slabs & Countertops" department: derived from
   the canonical slab-material taxonomy, in catalog order, showing only the
   materials actually present in the showcase (so a pill is never empty). The
   full Live Inventory browser carries the other three departments + back-of-house. */
const FS_SLAB_ORDER = ['GRANITE', 'LIMESTONE', 'MARBLE', 'QUARTZITE', 'ELEMENTS QUARTZ', 'TRAVERTINE', 'ONYX', 'SLATE', 'PORCELAIN', 'NATURAL STONE'];

export function FeaturedInventory({ assetBase }) {
  const stones = [
    { title: 'Bianco Superiore', cat: 'QUARTZITE', img: '/images/products/bianco-superiore.jpg', desc: 'Luminous white quartzite with whisper-fine taupe veining — quietly monumental.' },
    { title: 'Calacatta Alaska Gold', cat: 'ELEMENTS QUARTZ', img: '/images/products/calacatta-alaska-gold.jpg', desc: 'Bright white quartz threaded with delicate gold veining.' },
    { title: 'Azzurra Bay', cat: 'QUARTZITE', img: '/images/products/azzurra-bay.jpg', desc: 'Polished grey quartzite crossed by fine storm-line veining.' },
    { title: 'Angola Black', cat: 'GRANITE', img: '/images/products/angola-black.jpg', desc: 'Dense jet-black granite with a fine, even grain — pure drama.' },
    { title: 'Bianco Marina', cat: 'ELEMENTS QUARTZ', img: '/images/products/bianco-marina.jpg', desc: 'Soft white quartz with cloud-like movement for bright, seamless spaces.' },
    { title: 'Alpine Valley', cat: 'GRANITE', img: '/images/products/alpine-valley.jpg', desc: 'Cream and charcoal granite in sweeping glacial currents.' },
    { title: 'Aspen White', cat: 'MARBLE', img: '/images/products/aspen-white.jpg', desc: 'Crisp white stone with feathered grey drifts and a soft polish.' },
    { title: 'Bianco Fantastico', cat: 'GRANITE', img: '/images/products/bianco-fantastico.jpg', desc: 'Polished 3cm — frost-white field scattered with bold charcoal flecks.' },
    { title: 'Azul Platino', cat: 'GRANITE', img: '/images/products/azul-platino.jpg', desc: 'Polished 3cm — cool platinum grey with a fine, even speckle.' },
    { title: 'Absolute White', cat: 'QUARTZITE', img: '/images/products/absolute-white.jpg', desc: 'Polished 3cm — pure white field with soft, drifting grey veins.' },
    { title: 'Midnight Galaxy', cat: 'GRANITE', img: '/images/stone-double-charge-640x480.png', desc: 'Deep navy granite with reflective speckles — adds drama and depth to any space.' },
    { title: 'Romani Ivory', cat: 'PORCELAIN', img: '/images/stone-slab-porcelain-640x480.png', desc: 'Warm ivory porcelain slab with soft striations and a matte finish.' },
    { title: 'Obsidian Edge', cat: 'QUARTZITE', img: '/images/stone-ceramic-wall-640x480.png', desc: 'Deep volcanic black with subtle texture, made for statement walls and floors.' },
  ];
  // One card per page on mobile (the pager arrows become a single-image
  // carousel); three across on tablet/desktop.
  const [perPage, setPerPage] = React.useState(() =>
    (typeof window !== 'undefined' && window.innerWidth <= 640) ? 1 : 3);
  React.useEffect(() => {
    const onResize = () => setPerPage(window.innerWidth <= 640 ? 1 : 3);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  const pool = stones.filter((s) => !isExclusiveOnly(s.title));
  const tabs = ['ALL', ...FS_SLAB_ORDER.filter((c) => pool.some((s) => s.cat === c))];
  const [tab, setTab] = React.useState('ALL');
  const [q, setQ] = React.useState('');
  const [page, setPage] = React.useState(0);
  const filtered = pool.filter((s) =>
    (tab === 'ALL' || s.cat === tab) &&
    (q.trim() === '' || (s.title + ' ' + s.cat + ' ' + s.desc).toLowerCase().includes(q.trim().toLowerCase()))
  );
  const maxPage = Math.max(0, Math.ceil(filtered.length / perPage) - 1);
  const safePage = Math.min(page, maxPage);
  const visible = filtered.slice(safePage * perPage, safePage * perPage + perPage);
  // Mouse drag-to-scroll for the filter pills (touch swipe is native).
  const tabsRef = React.useRef(null);
  const tabDrag = React.useRef({ down: false, startX: 0, startLeft: 0, moved: false });
  const onTabDown = (e) => {
    const el = tabsRef.current;
    if (!el) return;
    tabDrag.current = { down: true, startX: e.clientX, startLeft: el.scrollLeft, moved: false };
    el.setPointerCapture && el.setPointerCapture(e.pointerId);
  };
  const onTabMove = (e) => {
    const el = tabsRef.current;
    if (!el || !tabDrag.current.down) return;
    const dx = e.clientX - tabDrag.current.startX;
    if (Math.abs(dx) > 3) tabDrag.current.moved = true;
    el.scrollLeft = tabDrag.current.startLeft - dx;
  };
  const onTabUp = () => { tabDrag.current.down = false; };
  const selectTab = (t) => { if (tabDrag.current.moved) return; setTab(t); setPage(0); };
  return (
    <section className="fs-collections fs2-featured" data-screen-label="Featured Inventory">
      <div className="fs-collections__head">
        <div className="eyebrow">Curated Selections</div>
        <h2><em className="fs-accent">Featured</em> Inventory</h2>
        <p>From rare marble to engineered porcelain — every slab photographed, measured and ready to reserve.</p>
      </div>
      <div className="fs-collections__controls">
        <SearchInput value={q} onChange={(v) => { setQ(v); setPage(0); }} />
        <div className="fs-tabs" role="tablist" ref={tabsRef}
          onPointerDown={onTabDown} onPointerMove={onTabMove} onPointerUp={onTabUp} onPointerCancel={onTabUp}>
          {tabs.map((t) => (
            <Pill key={t} active={tab === t} onClick={() => selectTab(t)}>{t}</Pill>
          ))}
        </div>
      </div>
      <div className="fs-collections__grid" aria-live="polite">
        {visible.map((s) => (
          <StoneCard key={s.title} image={assetBase + s.img} title={s.title} description={s.desc} badges={badgesFor(s.title)} />
        ))}
        {visible.length === 0 ? <p className="fs-empty">No stones match your search.</p> : null}
      </div>
      <div className="fs-arrows">
        <ArrowButton direction="prev" disabled={safePage === 0} onClick={() => setPage(safePage - 1)} />
        <ArrowButton direction="next" disabled={safePage >= maxPage} onClick={() => setPage(safePage + 1)} />
      </div>
      <div className="fs2-featured__cta">
        <Button variant="primary" href="./live-inventory.html?highlight=featured">View All Featured Inventory</Button>
      </div>
    </section>
  );
}

/* ── Why Fabstone — copy left, tall image with frosted badge right ── */
export function WhyFabstone({ assetBase, onPrimary, onSecondary }) {
  return (
    <section className="fs2-about" data-screen-label="Why Fabstone">
      <div className="fs2-about__inner">
        <div className="fs2-about__copy">
          <div className="eyebrow">About Us</div>
          <h2><em className="fs-accent">Why</em> Fabstone</h2>
          <p>For over two decades, Fabstone has sourced natural stone directly from quarries across Italy, Brazil and India — no middlemen, no compromises.</p>
          <p>Every slab in our showroom is hand-selected, digitally photographed and tracked in live inventory, so what you reserve is exactly what arrives on site.</p>
          <p>Our in-house fabrication team matches veining across seams and edges, turning raw stone into surfaces built for the way you live.</p>
          <div className="fs2-about__actions">
            <Button variant="primary" onClick={onPrimary}>Live Inventory</Button>
            <Button variant="outline-dark" onClick={onSecondary}>Learn More</Button>
          </div>
        </div>
        <div className="fs2-about__media">
          <img src={assetBase + '/images/about-why-fabstone-768x1024.jpg'} alt="" loading="lazy" />
          <span className="fs2-about__badge">
            <span>Matching Materials</span>
            <strong>98% Match</strong>
          </span>
        </div>
      </div>
    </section>
  );
}

/* ── Location — map + phone mockup on dark ── */
export function LocationSection({ assetBase, onCta }) {
  return (
    <section className="fs2-location" data-screen-label="Location">
      <div className="fs2-location__inner">
        <div className="fs2-location__head">
          <h2><em className="fs-accent">Our</em> Location</h2>
        </div>
        <div className="fs2-location__grid">
          <div className="fs2-location__map">
            <iframe src="https://maps.google.com/maps?q=2514+Sam+Rayburn+Hwy,+Melissa,+TX+75454&z=16&output=embed"
              title="Fabstone — 2514 Sam Rayburn Hwy, Melissa, TX 75454" loading="lazy"></iframe>
          </div>
          <div className="fs2-location__phone">
            <div className="fs2-phone">
              <div className="fs2-phone__bar" aria-hidden="true"><span></span><span></span><span></span></div>
              <div className="fs2-phone__screen">
                <div className="fs2-phone__hero" style={{ backgroundImage: 'url(' + assetBase + '/images/hero-poster-scaled.png)' }}>
                  <div className="fs2-phone__hero-overlay" aria-hidden="true"></div>
                  <div className="fs2-phone__hero-body">
                    <div className="fs2-phone__eb">Premium Natural Stone &amp; Surfaces</div>
                    <div className="fs2-phone__title">Elevated by<em>Nature</em></div>
                    <a href="#" className="fs2-phone__cta" onClick={(e) => { e.preventDefault(); onCta && onCta(); }}>Contact Us</a>
                  </div>
                </div>
                <div className="fs2-phone__chip">
                  <div className="fs2-phone__chip-eb">Live Inventory</div>
                  <div className="fs2-phone__chip-title">Browse Slabs in Real Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Exclusive Products — 3×2 mosaic, first card spans 2 rows ── */
export function ExclusiveProducts({ assetBase, onExplore }) {
  const products = [
    { hero: true, tag: 'Quartz', title: 'Calacatta Alaska Gold', img: '/images/products/calacatta-alaska-gold.jpg', desc: 'Bright white quartz threaded with delicate gold veining — the ultimate statement surface.' },
    { tag: 'Granite', title: 'Angola Black', img: '/images/products/angola-black.jpg', desc: 'Dense jet-black granite with a fine, even grain, designed for statement islands and walls.' },
    { tag: 'Quartzite', title: 'Bianco Superiore', img: '/images/products/bianco-superiore.jpg', desc: 'Luminous white quartzite with whisper-fine taupe veining — quietly monumental.' },
    { tag: 'Granite', title: 'Alpine Valley', img: '/images/products/alpine-valley.jpg', desc: 'Cream and charcoal granite in sweeping glacial currents.' },
    { tag: 'Quartzite', title: 'Azzurra Bay', img: '/images/products/azzurra-bay.jpg', desc: 'Polished grey quartzite crossed by fine storm-line veining.' },
  ];
  // Mobile: horizontal scroller — mouse drag + nav buttons (touch swipe native).
  const gridRef = React.useRef(null);
  const drag = React.useRef({ down: false, startX: 0, startLeft: 0, moved: false });
  const onDown = (e) => {
    const el = gridRef.current;
    if (!el) return;
    drag.current = { down: true, startX: e.clientX, startLeft: el.scrollLeft, moved: false };
    el.setPointerCapture && el.setPointerCapture(e.pointerId);
  };
  const onMove = (e) => {
    const el = gridRef.current;
    if (!el || !drag.current.down) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 3) drag.current.moved = true;
    el.scrollLeft = drag.current.startLeft - dx;
  };
  const onUp = () => { drag.current.down = false; };
  const onClickCapture = (e) => { if (drag.current.moved) { e.preventDefault(); e.stopPropagation(); } };
  const page = (dir) => {
    const el = gridRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: 'smooth' });
  };
  return (
    <section className="fs2-exclusive" data-screen-label="Exclusive Products">
      <div className="fs2-exclusive__head">
        <div className="eyebrow">Favorites</div>
        <h2><em className="fs-accent">Exclusive</em> Products</h2>
        <p>Limited-run slabs reserved for Fabstone clients — when they're gone, they're gone.</p>
      </div>
      <div className="fs2-exclusive__grid" ref={gridRef}
        onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={onUp}
        onClickCapture={onClickCapture}>
        {products.map((p) => (
          <ExclusiveCard key={p.title} hero={p.hero} image={assetBase + p.img} tag={p.tag} title={p.title} description={p.desc} badges={badgesFor(p.title).filter((b) => b.cls !== 'is-exclusive')} />
        ))}
      </div>
      <div className="fs-arrows fs2-exclusive__arrows">
        <ArrowButton direction="prev" onClick={() => page(-1)} />
        <ArrowButton direction="next" onClick={() => page(1)} />
      </div>
      <div className="fs2-exclusive__cta">
        <Button variant="primary" onClick={onExplore}>Explore Exclusive Products</Button>
      </div>
    </section>
  );
}

/* ── Gallery — edge-to-edge mosaic ── */
export function GallerySection({ assetBase }) {
  const photos = [
    ['burlington-pearl-install-800x600.jpg', 'Burlington Pearl Install'],
    ['cappuccino-install-800x600.jpg', 'Cappuccino Install'],
    ['kitchen-install-6952-800x600.jpg', 'Kitchen Install'],
    ['kitchen-island-6953-800x600.jpg', 'Kitchen Island'],
    ['kitchen-counter-6954-800x600.jpg', 'Kitchen Counter'],
    ['kitchen-sink-6955-800x600.jpg', 'Kitchen Sink'],
    ['kitchen-counter-6956-800x600.jpg', 'Kitchen Counter'],
    ['kitchen-sink-6957-800x600.jpg', 'Kitchen Sink'],
    ['kitchen-counter-6958-800x600.jpg', 'Kitchen Counter'],
    ['bathroom-vanity-6959-800x600.jpg', 'Bathroom Vanity'],
    ['kitchen-island-6960-800x600.jpg', 'Kitchen Island'],
    ['install-photo-1-800x600.jpg', 'Install Photo'],
    ['install-photo-2-800x600.jpg', 'Install Photo'],
    ['bohemian-blend-800x600.jpg', 'Bohemian Blend'],
    ['carpet-04-800x600.jpg', 'Carpet Tile 04'],
    ['carpet-06-800x600.jpg', 'Carpet Tile 06'],
  ];
  const scrollerRef = React.useRef(null);
  const page = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.7, behavior: 'smooth' });
  };
  const half = Math.ceil(photos.length / 2);
  const rows = [photos.slice(0, half), photos.slice(half)];
  return (
    <section className="fs-gallery fs-gallery--scroll" data-screen-label="Gallery">
      <div className="fs-gallery__head">
        <div className="eyebrow">Highlights</div>
        <h2><em className="fs-accent">Our</em> Gallery</h2>
        <p>Recent installations from kitchens, baths and commercial spaces across Texas.</p>
      </div>
      <div className="fs-gallery__scroller" ref={scrollerRef}>
        {rows.map((row, r) => (
          <div className="fs-gallery__row" key={r}>
            {row.map(([file, alt], i) => (
              <figure key={file + i}><img src={assetBase + '/images/' + file} alt={alt} loading="lazy" /></figure>
            ))}
          </div>
        ))}
      </div>
      <div className="fs-arrows">
        <ArrowButton direction="prev" onClick={() => page(-1)} />
        <ArrowButton direction="next" onClick={() => page(1)} />
      </div>
    </section>
  );
}
