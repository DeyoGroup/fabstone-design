// Fabstone website UI kit — Home page (recreation of /home2/).
// Per client direction: the "SOCI + Elements" platform section is omitted
// and lorem-ipsum copy is replaced with realistic stone-industry copy.
import { SiteHeader } from '../../components/chrome/SiteHeader.jsx';
import { SiteFooter } from '../../components/chrome/SiteFooter.jsx';
import { CtaBanner } from '../../components/chrome/CtaBanner.jsx';
import { HomeHero, TrustStrip, FeaturedInventory, WhyFabstone, LocationSection, ExclusiveProducts, GallerySection } from './HomeSections.jsx';
import { SITE_NAV } from './siteNav.jsx';

export function HomePage({ assetBase = '../../assets' }) {
  const go = (href) => { window.location.href = href; };
  const contact = () => { window.location.href = 'mailto:sales@fabsg.com'; };

  // Scroll to #location / #gallery when arriving via a hash link from another page.
  React.useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.slice(1);
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    };
    const t = setTimeout(scrollToHash, 350);
    window.addEventListener('hashchange', scrollToHash);
    return () => { clearTimeout(t); window.removeEventListener('hashchange', scrollToHash); };
  }, []);

  return (
    <div className="fs-body" data-screen-label="Home">
      <SiteHeader logo={assetBase + '/images/logo-fabstone.png'} homeHref="./index.html" onCta={contact} nav={SITE_NAV} />
      <main className="fs-main">
        <HomeHero poster={assetBase + '/images/hero-poster-scaled.png'} />
        <TrustStrip assetBase={assetBase} />
        <FeaturedInventory assetBase={assetBase} />
        <WhyFabstone assetBase={assetBase} onPrimary={() => go('./live-inventory.html')} onSecondary={() => go('./about.html')} />
        <LocationSection assetBase={assetBase} onCta={contact} />
        <ExclusiveProducts assetBase={assetBase} onExplore={() => go('./live-inventory.html?highlight=exclusive')} />
        <GallerySection assetBase={assetBase} />
        <CtaBanner onPrimary={contact} onSecondary={() => go('./live-inventory.html')} />
      </main>
      <SiteFooter logo={assetBase + '/images/logo-fabstone.png'} />
    </div>
  );
}
