// Fabstone website UI kit — About Us page.
// Built from the home page's visual language (dark stone-texture bands, red
// italic ems, copper/red eyebrows, the fs2-about split + frosted badge, the
// shared red CTA banner). Copy is the client's real story: privately owned
// since 2006, four-acre yard in Melissa TX, direct imports, 15 states served,
// 150+ years of collective experience. Story / Gallery / CTA reuse existing
// classes and components verbatim.
import { SiteHeader } from '../../components/chrome/SiteHeader.jsx';
import { SiteFooter } from '../../components/chrome/SiteFooter.jsx';
import { CtaBanner } from '../../components/chrome/CtaBanner.jsx';
import { Button } from '../../components/core/Button.jsx';
import { GallerySection } from './HomeSections.jsx';

// Primary nav (shared with reps.html). About Us carries a dropdown.
export const SITE_NAV = [
  { label: 'Live Inventory', href: './live-inventory.html' },
  { label: 'Featured', href: './live-inventory.html?highlight=featured' },
  { label: 'About Us', href: './about.html', children: [
    { label: 'Our Team', href: './about.html#about-team' },
    { label: 'Find a Rep', href: './reps.html' },
  ] },
  { label: 'Location', href: './index.html' },
  { label: 'Gallery', href: './index.html' },
];

const STATS = [
  { num: '2006', label: 'Privately owned & operated since' },
  { num: '4', em: ' acres', label: 'Slab yard in Melissa, Texas' },
  { num: '15', label: 'Southern-central states served' },
  { num: '150', em: '+', label: 'Years of collective experience' },
];

const PROCESS = [
  { n: '01', h: 'Imported Direct', p: 'We bring slabs in directly from quarries in Brazil, India, Europe and beyond — no middlemen, better stone, better pricing.' },
  { n: '02', h: 'Hand-Selected', p: 'Every block is chosen for quality and character, then brought to our four-acre yard in Melissa, Texas.' },
  { n: '03', h: 'Live Inventory', p: 'Each slab is photographed and tracked in real time, so what you reserve is exactly what arrives on site.' },
  { n: '04', h: 'Fabrication & Install', p: 'Long-term partners who excel in the trade cut, finish and install — backed by 150+ years of collective craft.' },
];

const TEAM = [
  { role: 'Founder & Owner', dept: 'Leadership' },
  { role: 'Sales Director', dept: 'Sales' },
  { role: 'Operations Manager', dept: 'Operations' },
  { role: 'Fabrication Lead', dept: 'Production' },
];

export function AboutPage({ assetBase = '../../assets' }) {
  const go = (href) => { window.location.href = href; };
  const contact = () => { window.location.href = 'mailto:sales@fabsg.com'; };
  return (
    <div className="fs-body" data-screen-label="About Us">
      <SiteHeader logo={assetBase + '/images/logo-fabstone.png'} homeHref="./index.html"
        activeItem="About Us" onCta={contact} nav={SITE_NAV} />
      <main className="fs-main">

        {/* ── Hero ── */}
        <section className="fs-about-hero" data-screen-label="About — Hero">
          <div className="fs-about-hero__inner">
            <nav className="fs-breadcrumb" aria-label="Breadcrumb">
              <a href="./index.html">Home</a>
              <span aria-hidden="true">/</span>
              <span aria-current="page">About Us</span>
            </nav>
            <div className="eyebrow">About Us</div>
            <h1>Elevated by <em>Nature</em></h1>
            <p>Premium natural stone and quartz — imported direct, hand-selected and tracked in live inventory at our Melissa, Texas yard since 2006.</p>
          </div>
        </section>

        {/* ── Story (editorial collage — distinct from the home fs2-about split) ── */}
        <section className="fs-about-story" data-screen-label="About — Story">
          <div className="fs-about-story__inner">
            <div className="fs-about-story__media">
              <div className="fs-about-story__frame">
                <img src={assetBase + '/images/about-why-fabstone-768x1024.jpg'} alt="Fabstone slab yard in Melissa, Texas" loading="lazy" />
              </div>
              <span className="fs-about-story__stamp">
                <small>Est.</small>
                <strong>2006</strong>
              </span>
            </div>
            <div className="fs-about-story__copy">
              <div className="eyebrow">Our Story</div>
              <h2><em className="fs-accent">Family</em> Owned Since 2006</h2>
              <p className="fs-about-story__lead">Four acres of hand-selected stone in Melissa, Texas — from builder-grade surfaces to semi-precious granite, marble and quartzite.</p>
              <p>Fabstone has been privately owned and operated since 2006, importing our collections direct from Brazil, India, Europe and beyond — no middlemen, no compromises.</p>
              <p>We currently serve 15 southern-central states alongside long-term partners who excel in the slab and fabrication industry, backed by more than 150 years of collective experience.</p>
              <div className="fs2-about__actions">
                <Button variant="primary" href="./live-inventory.html">Browse Live Inventory</Button>
                <Button variant="outline-dark" onClick={contact}>Schedule a Visit</Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats band ── */}
        <section className="fs-about-stats" data-screen-label="About — Stats">
          <div className="fs-about-stats__inner">
            {STATS.map((s) => (
              <div className="fs-about-stat" key={s.label}>
                <p className="fs-about-stat__num">{s.num}{s.em ? <em>{s.em}</em> : null}</p>
                <p className="fs-about-stat__label">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── How We Work ── */}
        <section className="fs-about-process" data-screen-label="About — How We Work">
          <div className="fs-spaces__head">
            <div className="eyebrow">Our Process</div>
            <h2><em>How</em> We Work</h2>
            <p>From the quarry to your countertop, every slab moves through four deliberate steps.</p>
          </div>
          <div className="fs-about-process__inner">
            <div className="fs-about-process__grid">
              {PROCESS.map((step) => (
                <div className="fs-about-step" key={step.n}>
                  <span className="fs-about-step__num">{step.n}</span>
                  <span className="fs-about-step__rule" aria-hidden="true"></span>
                  <h3>{step.h}</h3>
                  <p>{step.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Team (placeholder headshots) ── */}
        <section className="fs-about-team" id="about-team" data-screen-label="About — Team">
          <div className="fs-spaces__head">
            <div className="eyebrow">Our People</div>
            <h2><em>The</em> Fabstone Team</h2>
            <p>The people who source, photograph and fabricate every Fabstone slab.</p>
          </div>
          <div className="fs-about-team__inner">
            <div className="fs-about-team__grid">
              {TEAM.map((m) => (
                <div className="fs-about-member" key={m.role}>
                  <div className="fs-about-member__photo"><span>Add headshot</span></div>
                  <div className="fs-about-member__body">
                    <h3>{m.role}</h3>
                    <p>{m.dept}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="fs-about-team__cta">
              <Button variant="primary" href="./reps.html">Find My Sales Rep</Button>
            </div>
          </div>
        </section>

        {/* ── Gallery (reused from home) ── */}
        <GallerySection assetBase={assetBase} />

        {/* ── CTA banner (reused) ── */}
        <CtaBanner
          eyebrow="Visit Us"
          title="Schedule a Shopping Appointment"
          lede="Come hand-pick your slab at our Melissa, TX yard — or reserve online from live inventory."
          primaryLabel="Contact Us"
          secondaryLabel="Live Inventory"
          onPrimary={contact}
          onSecondary={() => go('./live-inventory.html')}
        />
      </main>
      <SiteFooter logo={assetBase + '/images/logo-fabstone.png'} />
    </div>
  );
}
