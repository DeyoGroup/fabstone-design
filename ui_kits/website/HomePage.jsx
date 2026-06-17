// Fabstone website UI kit — Home page (recreation of /home2/).
// Per client direction: the "SOCI + Elements" platform section is omitted
// and lorem-ipsum copy is replaced with realistic stone-industry copy.
import { SiteHeader } from '../../components/chrome/SiteHeader.jsx';
import { SiteFooter } from '../../components/chrome/SiteFooter.jsx';
import { CtaBanner } from '../../components/chrome/CtaBanner.jsx';
import { HomeHero, TrustStrip, FeaturedInventory, WhyFabstone, LocationSection, ExclusiveProducts, GallerySection } from './HomeSections.jsx';

export function HomePage({ assetBase = '../../assets' }) {
  return (
    <div className="fs-body" data-screen-label="Home">
      <SiteHeader logo={assetBase + '/images/logo-fabstone.png'} homeHref="./index.html"
        nav={[
          { label: 'Live Inventory', href: './live-inventory.html' },
          { label: 'Featured', href: './live-inventory.html?highlight=featured' },
          { label: 'About Us', href: '#' },
          { label: 'Location', href: '#' },
          { label: 'Gallery', href: '#' },
        ]} />
      <main className="fs-main">
        <HomeHero poster={assetBase + '/images/hero-poster-scaled.png'} />
        <TrustStrip assetBase={assetBase} />
        <FeaturedInventory assetBase={assetBase} />
        <WhyFabstone assetBase={assetBase} />
        <LocationSection assetBase={assetBase} />
        <ExclusiveProducts assetBase={assetBase} onExplore={() => { window.location.href = './live-inventory.html?highlight=exclusive'; }} />
        <GallerySection assetBase={assetBase} />
        <CtaBanner />
      </main>
      <SiteFooter logo={assetBase + '/images/logo-fabstone.png'} />
    </div>
  );
}
