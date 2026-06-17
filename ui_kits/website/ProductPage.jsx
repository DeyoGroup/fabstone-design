// Fabstone website UI kit — Product detail page.
// Reached from the Live Inventory grid (?item=<id>). Adapts spec rows and
// related items to the product's department. Content modeled on the
// StoneProfits item page (photo, specs, yard location, related items).
import { SiteHeader } from '../../components/chrome/SiteHeader.jsx';
import { SiteFooter } from '../../components/chrome/SiteFooter.jsx';
import { Button } from '../../components/core/Button.jsx';
import { ArrowButton } from '../../components/core/ArrowButton.jsx';
import { InventoryProducts, DepartmentSpecs } from './InventoryData.jsx';
import { InvMedia, CardBadges } from './InventoryPage.jsx';
import { SITE_NAV } from './siteNav.jsx';

function PdpRelCard({ product, assetBase }) {
  return (
    <a className="fs-inv-card" href={'./product.html?item=' + product.id}>
      <div className="fs-inv-card__media"><CardBadges product={product} /><InvMedia product={product} assetBase={assetBase} /></div>
      <div className="fs-inv-card__body">
        <span className="fs-inv-card__tag">{product.tag}</span>
        <h3 className="fs-inv-card__title">{product.name}</h3>
        <span className="fs-inv-card__meta">{product.meta}</span>
      </div>
    </a>
  );
}

export function ProductPage({ assetBase = '../../assets', itemId }) {
  const product = InventoryProducts.find((p) => p.id === itemId) || InventoryProducts[0];
  const related = InventoryProducts
    .filter((p) => p.id !== product.id && p.department === product.department)
    .slice(0, 3);
  const specs = (DepartmentSpecs[product.department] || []).filter(([, key]) => product[key]);
  // Mobile: similar slabs become a swipeable scroller (mouse drag + nav buttons).
  const relRef = React.useRef(null);
  const relDrag = React.useRef({ down: false, startX: 0, startLeft: 0, moved: false });
  const onRelDown = (e) => {
    const el = relRef.current;
    if (!el) return;
    relDrag.current = { down: true, startX: e.clientX, startLeft: el.scrollLeft, moved: false };
    el.setPointerCapture && el.setPointerCapture(e.pointerId);
  };
  const onRelMove = (e) => {
    const el = relRef.current;
    if (!el || !relDrag.current.down) return;
    const dx = e.clientX - relDrag.current.startX;
    if (Math.abs(dx) > 3) relDrag.current.moved = true;
    el.scrollLeft = relDrag.current.startLeft - dx;
  };
  const onRelUp = () => { relDrag.current.down = false; };
  const onRelClickCapture = (e) => { if (relDrag.current.moved) { e.preventDefault(); e.stopPropagation(); } };
  const relPage = (dir) => {
    const el = relRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: 'smooth' });
  };
  return (
    <div className="fs-body" data-screen-label={'Product — ' + product.name}>
      <SiteHeader logo={assetBase + '/images/logo-fabstone.png'} homeHref="./index.html" activeItem="Live Inventory"
        nav={SITE_NAV} />
      <main className="fs-main">
        <section className="fs-pdp" data-screen-label="Product detail">
          <div className="fs-pdp__inner">
            <nav className="fs-pdp__crumbs" aria-label="Breadcrumb">
              <a href="./index.html">Home</a>
              <span className="sep">/</span>
              <a href="./live-inventory.html">Live Inventory</a>
              <span className="sep">/</span>
              <span className="here">{product.name}</span>
            </nav>
            <div className="fs-pdp__grid">
              <div className="fs-pdp__media">
                <CardBadges product={product} />
                <InvMedia product={product} assetBase={assetBase} cls="fs-ph--lg" />
              </div>
              <div>
                <span className="fs-pdp__tag">{product.tag}</span>
                <h1 className="fs-pdp__title">{product.name}</h1>
                <p className="fs-pdp__sub">{product.meta}</p>
                <div className="fs-pdp__avail"><span className="dot" aria-hidden="true"></span>In stock at our Melissa, TX showroom &amp; slab yard</div>
                <dl className="fs-pdp__specs">
                  {specs.map(([label, key]) => (
                    <div className="fs-pdp__spec" key={label}><dt>{label}</dt><dd>{product[key]}</dd></div>
                  ))}
                </dl>
                <div className="fs-pdp__actions">
                  <Button variant="outline-dark" href="./live-inventory.html">Back to Inventory</Button>
                  <Button variant="primary" href={'mailto:sales@fabsg.com?subject=' + encodeURIComponent('Quote request: ' + product.name)}>Request a Quote</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="fs-pdp-loc" data-screen-label="Availability and location">
          <div className="fs-pdp-loc__inner">
            <div className="fs-pdp-loc__card">
              <h2><em className="fs-accent">See It</em> in Person</h2>
              <p>Photos tell half the story — visit the showroom to see the full piece, veining and finish in natural light.</p>
              <p><strong>Fabstone Slab Yard</strong><br />2514 Sam Rayburn Hwy<br />Melissa, TX 75454</p>
              <p>sales@fabsg.com · 972-542-9678</p>
              <Button variant="primary" href="mailto:sales@fabsg.com?subject=Schedule%20a%20Visit">Schedule a Visit</Button>
            </div>
            <div className="fs-pdp-loc__map">
              <iframe src="https://maps.google.com/maps?q=2514+Sam+Rayburn+Hwy,+Melissa,+TX+75454&z=16&output=embed"
                title="Fabstone — 2514 Sam Rayburn Hwy, Melissa, TX 75454" loading="lazy"></iframe>
            </div>
          </div>
        </section>
        {related.length ? (
          <section className="fs-pdp-rel" data-screen-label="Related products">
            <div className="fs-pdp-rel__inner">
              <div className="fs-pdp-rel__head">
                <h2><em className="fs-accent">Similar</em> {product.department === 'Slabs & Countertops' ? 'Slabs' : 'Products'}</h2>
                <a className="fs-pdp-rel__all" href="./live-inventory.html">View All Inventory</a>
              </div>
              <div className="fs-pdp-rel__grid" ref={relRef}
                onPointerDown={onRelDown} onPointerMove={onRelMove} onPointerUp={onRelUp} onPointerCancel={onRelUp}
                onClickCapture={onRelClickCapture}>
                {related.map((p) => <PdpRelCard key={p.id} product={p} assetBase={assetBase} />)}
              </div>
              {related.length > 1 ? (
                <div className="fs-arrows fs-pdp-rel__arrows">
                  <ArrowButton direction="prev" onClick={() => relPage(-1)} />
                  <ArrowButton direction="next" onClick={() => relPage(1)} />
                </div>
              ) : null}
            </div>
          </section>
        ) : null}
      </main>
      <SiteFooter logo={assetBase + '/images/logo-fabstone.png'} />
    </div>
  );
}
