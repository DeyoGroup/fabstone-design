// Fabstone SiteHeader — utility bar + main header (.fs-site-header).
// Recreated from the fabstone-child theme header markup.

function UtilIconMail() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
      <path d="M17 9l-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  );
}
function UtilIconPhone() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M21.97 18.33a3.5 3.5 0 01-.35 1.51 4 4 0 01-.95 1.29 6.27 6.27 0 01-4.4 1.92c-.65 0-1.34-.11-2.05-.33a14.93 14.93 0 01-2.16-.87 22.74 22.74 0 01-7.5-5.79 17.46 17.46 0 01-1.62-2.14 14.74 14.74 0 01-.87-1.62A6.65 6.65 0 012 7.66 4.7 4.7 0 012.32 6 4 4 0 013.4 4.27a3.2 3.2 0 011.55-1A2.86 2.86 0 016 3a2.36 2.36 0 011 .22 2.13 2.13 0 01.84.67l2.49 3.5A4.61 4.61 0 0011 8.05a1.61 1.61 0 01.27.79c0 .28-.08.56-.24.83-.16.27-.39.55-.68.84l-.79.82c-.12.12-.17.27-.17.45a1 1 0 00.04.27c.04.09.07.16.09.22.16.31.43.71.82 1.2.4.48.83.97 1.29 1.46.48.5.95.95 1.42 1.36.46.4.85.69 1.17.86l.21.09c.08.03.18.05.29.05.19 0 .34-.06.46-.18l.78-.78c.31-.31.6-.54.88-.69.28-.17.55-.25.85-.25.23 0 .47.05.73.16.26.1.53.25.82.44l3.55 2.52c.32.22.55.48.69.79.13.31.21.62.21.96z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"></path>
    </svg>
  );
}
function UtilIconHeart() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
    </svg>
  );
}

export function SiteHeader({
  logo = 'assets/images/logo-fabstone.png',
  homeHref = '#',
  email = 'sales@fabsg.com',
  phone = '972-542-9678',
  nav = [
    { label: 'Live Inventory', href: '#' },
    { label: 'Featured', href: '#' },
    { label: 'About Us', href: '#' },
    { label: 'Location', href: '#' },
    { label: 'Gallery', href: '#' },
  ],
  activeItem,
  ctaLabel = 'Contact Us',
  onCta,
  onNavClick,
}) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const closeMenu = () => setMenuOpen(false);
  const handleNav = (item) => {
    closeMenu();
    if (onNavClick) onNavClick(item);
  };
  return (
    <header className="fs-site-header">
      <div className="fs-util">
        <div className="fs-util__inner">
          <div className="fs-util__left">
            <a href={'mailto:' + email} className="fs-util__item"><UtilIconMail /><span>{email}</span></a>
            <a href={'tel:' + phone.replace(/[^0-9]/g, '')} className="fs-util__item"><UtilIconPhone /><span>{phone}</span></a>
          </div>
          <div className="fs-util__right">
            <a href="#" className="fs-util__item fs-util__item--icon" aria-label="Saved"><UtilIconHeart /></a>
            <span className="fs-util__sep" aria-hidden="true"></span>
            <a href="#" className="fs-util__item">Pay Online</a>
            <span className="fs-util__sep" aria-hidden="true"></span>
            <form role="search" className="fs-util__search" onSubmit={(e) => e.preventDefault()}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.6"></circle>
                <path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"></path>
              </svg>
              <input type="search" placeholder="Search fabstone.com" />
            </form>
          </div>
        </div>
      </div>
      <div className="fs-header">
        <div className="fs-header__inner">
          <button type="button"
            className={'fs-burger' + (menuOpen ? ' is-open' : '')}
            aria-label="Menu" aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}>
            <span></span><span></span><span></span>
          </button>
          <a href={homeHref} className="fs-header__brand" aria-label="Fabstone">
            <img src={logo} alt="Fabstone" />
          </a>
          <nav className="fs-header__nav" aria-label="Primary">
            <ul className="fs-nav">
              {nav.map((item) => {
                const kids = item.children && item.children.length ? item.children : null;
                return (
                  <li key={item.label} className={'menu-item' + (kids ? ' menu-item-has-children' : '') + (activeItem === item.label ? ' current-menu-item' : '')}>
                    <a href={item.href} className="menu-link"
                      aria-haspopup={kids ? 'true' : undefined}
                      onClick={onNavClick ? (e) => { e.preventDefault(); onNavClick(item); } : undefined}>
                      {item.label}
                      {kids ? <span className="fs-caret" aria-hidden="true"></span> : null}
                    </a>
                    {kids ? (
                      <ul className="fs-subnav">
                        {kids.map((c) => (
                          <li key={c.label}>
                            <a href={c.href} className="menu-link"
                              onClick={onNavClick ? (e) => { e.preventDefault(); onNavClick(c); } : undefined}>
                              {c.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="fs-header__cta">
            <a href="#" className="fs-btn fs-btn--primary"
              onClick={onCta ? (e) => { e.preventDefault(); onCta(); } : undefined}>{ctaLabel}</a>
          </div>
        </div>
      </div>

      {/* Mobile drawer — primary nav + utility items, surfaced from the burger. */}
      <div className={'fs-mobile' + (menuOpen ? ' is-open' : '')} aria-hidden={!menuOpen}>
        <button type="button" className="fs-mobile__close" aria-label="Close menu" onClick={closeMenu}>&times;</button>
        <ul className="fs-mobile__nav">
          {nav.map((item) => (
            <li key={item.label}>
              <a href={item.href}
                onClick={onNavClick ? (e) => { e.preventDefault(); handleNav(item); } : closeMenu}>
                {item.label}
              </a>
              {item.children && item.children.length ? (
                <ul className="fs-mobile__subnav">
                  {item.children.map((c) => (
                    <li key={c.label}>
                      <a href={c.href}
                        onClick={onNavClick ? (e) => { e.preventDefault(); handleNav(c); } : closeMenu}>
                        {c.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
        <div className="fs-mobile__util">
          <a href={'mailto:' + email} className="fs-mobile__util-item"><UtilIconMail /><span>{email}</span></a>
          <a href={'tel:' + phone.replace(/[^0-9]/g, '')} className="fs-mobile__util-item"><UtilIconPhone /><span>{phone}</span></a>
          <a href="#" className="fs-mobile__util-item" onClick={closeMenu}><UtilIconHeart /><span>Saved</span></a>
          <a href="#" className="fs-mobile__util-item" onClick={closeMenu}><span>Pay Online</span></a>
        </div>
        <a href="#" className="fs-btn fs-btn--primary fs-mobile__cta"
          onClick={onCta ? (e) => { e.preventDefault(); closeMenu(); onCta(); } : closeMenu}>{ctaLabel}</a>
      </div>
    </header>
  );
}
