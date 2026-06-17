// Fabstone SiteFooter — light-grey 4-column footer (.fs-site-footer).

const fsFooterSocials = [
  { label: 'Facebook', href: 'https://www.facebook.com/fabstonegroup', svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"></path></svg> },
  { label: 'Instagram', href: 'https://www.instagram.com/explore/locations/345181813/fabricators-stone-group/', svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"></circle></svg> },
];

const fsFooterDefaultCols = [
  { title: 'Live Inventory', links: [
    { label: 'Marble', href: './live-inventory.html?dept=Slabs%20%26%20Countertops' },
    { label: 'Quartzite', href: './live-inventory.html?dept=Slabs%20%26%20Countertops' },
    { label: 'Granite', href: './live-inventory.html?dept=Slabs%20%26%20Countertops' },
    { label: 'Travertine', href: './live-inventory.html?dept=Slabs%20%26%20Countertops' },
    { label: 'Slate', href: './live-inventory.html?dept=Slabs%20%26%20Countertops' },
  ] },
  { title: 'Discover', links: [
    { label: 'Gallery', href: './index.html' },
    { label: 'Favorites', href: '#' },
  ] },
  { title: 'Company', links: [
    { label: 'About Us', href: './index.html' },
    { label: 'Location', href: './index.html' },
    { label: 'Contact Us', href: '#' },
  ] },
];

export function SiteFooter({
  logo = 'assets/images/logo-fabstone.png',
  blurb = "Premium natural stone and surfaces for the world's most ambitious design projects.",
  columns = fsFooterDefaultCols,
  legal = [
    { label: 'Privacy Policy', href: './privacy.html' },
    { label: 'Terms of Use', href: './terms.html' },
    { label: 'Accessibility', href: './accessibility.html' },
  ],
  copyright = '© 2026 Fabstone. All rights reserved.',
}) {
  return (
    <footer className="fs-site-footer">
      <div className="fs-site-footer__inner">
        <div className="fs-site-footer__grid">
          <div className="fs-site-footer__brand">
            <img src={logo} alt="Fabstone" className="fs-site-footer__logo" />
            <p className="fs-site-footer__blurb">{blurb}</p>
            <ul className="fs-socials">
              {fsFooterSocials.map((s) => (
                <li key={s.label}><a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>{s.svg}</a></li>
              ))}
            </ul>
          </div>
          {columns.map((col) => (
            <div className="fs-site-footer__col" key={col.title}>
              <h4>{col.title}</h4>
              <ul className="fs-footer-nav">
                {col.links.map((l) => (
                  <li key={typeof l === 'string' ? l : l.label}>
                    <a href={typeof l === 'string' ? '#' : l.href} className="menu-link">
                      {typeof l === 'string' ? l : l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="fs-site-footer__bar">
          <p className="fs-site-footer__copyright">{copyright}</p>
          <nav className="fs-site-footer__legal" aria-label="Legal">
            <ul className="fs-legal-nav">
              {legal.map((l) => {
                const label = typeof l === 'string' ? l : l.label;
                const href = typeof l === 'string' ? '#' : l.href;
                return <li key={label}><a href={href} className="menu-link">{label}</a></li>;
              })}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
