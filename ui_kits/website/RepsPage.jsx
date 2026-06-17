// Fabstone website UI kit — Sales Reps page (reps.html).
// Dedicated full roster, linked from the About page's "View All Reps" button
// and the About Us dropdown. Reuses the shared RepsDirectory + site chrome.
import { SiteHeader } from '../../components/chrome/SiteHeader.jsx';
import { SiteFooter } from '../../components/chrome/SiteFooter.jsx';
import { CtaBanner } from '../../components/chrome/CtaBanner.jsx';
import { RepsDirectory } from './RepsDirectory.jsx';
import { SITE_NAV } from './AboutPage.jsx';

export function RepsPage({ assetBase = '../../assets' }) {
  const go = (href) => { window.location.href = href; };
  const contact = () => { window.location.href = 'mailto:sales@fabsg.com'; };
  return (
    <div className="fs-body" data-screen-label="Sales Reps">
      <SiteHeader logo={assetBase + '/images/logo-fabstone.png'} homeHref="./index.html"
        activeItem="About Us" onCta={contact} nav={SITE_NAV} />
      <main className="fs-main">

        {/* ── Hero ── */}
        <section className="fs-about-hero" data-screen-label="Reps — Hero">
          <div className="fs-about-hero__inner">
            <nav className="fs-breadcrumb" aria-label="Breadcrumb">
              <a href="./index.html">Home</a>
              <span aria-hidden="true">/</span>
              <a href="./about.html">About Us</a>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Sales Reps</span>
            </nav>
            <div className="eyebrow">Sales Team</div>
            <h1>Find Your <em>Rep</em></h1>
            <p>Fabstone serves 15 states across the south-central U.S. Find the representative for your region and reach them directly.</p>
          </div>
        </section>

        {/* ── Full directory ── */}
        <section className="fs-about-reps" data-screen-label="Reps — Directory">
          <RepsDirectory />
        </section>

        {/* ── CTA banner (reused) ── */}
        <CtaBanner
          eyebrow="Not Sure Who to Ask?"
          title="Talk to the Fabstone Team"
          lede="Reach our Melissa, TX headquarters and we'll connect you with the right rep for your project."
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
