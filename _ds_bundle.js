/* @ds-bundle: {"format":3,"namespace":"FabstoneDesignSystem_e3db74","components":[{"name":"ExclusiveCard","sourcePath":"components/cards/ExclusiveCard.jsx"},{"name":"StoneCard","sourcePath":"components/cards/StoneCard.jsx"},{"name":"CtaBanner","sourcePath":"components/chrome/CtaBanner.jsx"},{"name":"SiteFooter","sourcePath":"components/chrome/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/chrome/SiteHeader.jsx"},{"name":"ArrowButton","sourcePath":"components/core/ArrowButton.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Pill","sourcePath":"components/core/Pill.jsx"},{"name":"SearchInput","sourcePath":"components/core/SearchInput.jsx"},{"name":"SectionHead","sourcePath":"components/core/SectionHead.jsx"},{"name":"SITE_NAV","sourcePath":"ui_kits/website/siteNav.jsx"},{"name":"AboutPage","sourcePath":"ui_kits/website/AboutPage.jsx"},{"name":"HomePage","sourcePath":"ui_kits/website/HomePage.jsx"},{"name":"HomeHero","sourcePath":"ui_kits/website/HomeSections.jsx"},{"name":"TrustStrip","sourcePath":"ui_kits/website/HomeSections.jsx"},{"name":"FeaturedInventory","sourcePath":"ui_kits/website/HomeSections.jsx"},{"name":"WhyFabstone","sourcePath":"ui_kits/website/HomeSections.jsx"},{"name":"LocationSection","sourcePath":"ui_kits/website/HomeSections.jsx"},{"name":"ExclusiveProducts","sourcePath":"ui_kits/website/HomeSections.jsx"},{"name":"GallerySection","sourcePath":"ui_kits/website/HomeSections.jsx"},{"name":"Departments","sourcePath":"ui_kits/website/InventoryData.jsx"},{"name":"Highlights","sourcePath":"ui_kits/website/InventoryData.jsx"},{"name":"BadgeMeta","sourcePath":"ui_kits/website/InventoryData.jsx"},{"name":"SwatchHex","sourcePath":"ui_kits/website/InventoryData.jsx"},{"name":"DepartmentFacets","sourcePath":"ui_kits/website/InventoryData.jsx"},{"name":"DepartmentSpecs","sourcePath":"ui_kits/website/InventoryData.jsx"},{"name":"InventoryProducts","sourcePath":"ui_kits/website/InventoryData.jsx"},{"name":"CardBadges","sourcePath":"ui_kits/website/InventoryPage.jsx"},{"name":"InvMedia","sourcePath":"ui_kits/website/InventoryPage.jsx"},{"name":"InventoryPage","sourcePath":"ui_kits/website/InventoryPage.jsx"},{"name":"LegalPage","sourcePath":"ui_kits/website/LegalPage.jsx"},{"name":"ProductPage","sourcePath":"ui_kits/website/ProductPage.jsx"},{"name":"REPS","sourcePath":"ui_kits/website/RepsDirectory.jsx"},{"name":"RepsDirectory","sourcePath":"ui_kits/website/RepsDirectory.jsx"},{"name":"RepsPage","sourcePath":"ui_kits/website/RepsPage.jsx"}],"sourceHashes":{"components/cards/ExclusiveCard.jsx":"435eca794c81","components/cards/StoneCard.jsx":"372bb2c6b8cd","components/chrome/CtaBanner.jsx":"86549bc81b85","components/chrome/SiteFooter.jsx":"63030a025c90","components/chrome/SiteHeader.jsx":"7527108f3bff","components/core/ArrowButton.jsx":"cc79b489ed11","components/core/Button.jsx":"7722c349eccc","components/core/Pill.jsx":"c3f3518bc50b","components/core/SearchInput.jsx":"1cac31a1cfa8","components/core/SectionHead.jsx":"553e6053c9e7","site_src/js/fabstone-main.js":"acf232d0e5d0","ui_kits/website/AboutPage.jsx":"4000577c29fe","ui_kits/website/HomePage.jsx":"e942d12464cb","ui_kits/website/HomeSections.jsx":"678e87033149","ui_kits/website/InventoryData.jsx":"18ad73863749","ui_kits/website/InventoryPage.jsx":"c66e7c9bd861","ui_kits/website/LegalPage.jsx":"f513956f583b","ui_kits/website/ProductPage.jsx":"aa0779dd0d5d","ui_kits/website/RepsDirectory.jsx":"07fd7b9fc48a","ui_kits/website/RepsPage.jsx":"5e984330eac9","ui_kits/website/ios-frame.jsx":"be3343be4b51","ui_kits/website/siteNav.jsx":"be9a9571e3a7"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FabstoneDesignSystem_e3db74 = window.FabstoneDesignSystem_e3db74 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/ExclusiveCard.jsx
try { (() => {
// Fabstone ExclusiveCard — photo card with protection gradient (.fs2-exclusive__card).
function ExclusiveCard({
  image,
  tag,
  title,
  description,
  hero = false,
  href = '#',
  onClick,
  badges
}) {
  const cls = ['fs2-exclusive__card', hero ? 'fs2-exclusive__card--hero' : ''].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    className: cls
  }, badges && badges.length ? /*#__PURE__*/React.createElement("span", {
    className: "fs-inv-card__badges"
  }, badges.map(b => /*#__PURE__*/React.createElement("span", {
    key: b.cls,
    className: 'fs-badge ' + b.cls
  }, b.label))) : null, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    loading: "lazy"
  }) : /*#__PURE__*/React.createElement("span", {
    className: "fs2-exclusive__ph"
  }), /*#__PURE__*/React.createElement("div", {
    className: "fs2-exclusive__body"
  }, tag ? /*#__PURE__*/React.createElement("span", {
    className: "fs2-exclusive__tag"
  }, tag) : null, /*#__PURE__*/React.createElement("h3", null, title), description ? /*#__PURE__*/React.createElement("p", null, description) : null));
}
Object.assign(__ds_scope, { ExclusiveCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ExclusiveCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/StoneCard.jsx
try { (() => {
// Fabstone StoneCard — inventory card for dark sections (.fs-stone-card).
function StoneCard({
  image,
  title,
  description,
  href = '#',
  onClick,
  badges
}) {
  return /*#__PURE__*/React.createElement("article", {
    className: "fs-stone-card"
  }, /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    className: "fs-stone-card__media",
    "aria-label": title
  }, badges && badges.length ? /*#__PURE__*/React.createElement("span", {
    className: "fs-inv-card__badges"
  }, badges.map(b => /*#__PURE__*/React.createElement("span", {
    key: b.cls,
    className: 'fs-badge ' + b.cls
  }, b.label))) : null, image ? /*#__PURE__*/React.createElement("img", {
    loading: "lazy",
    src: image,
    alt: ""
  }) : /*#__PURE__*/React.createElement("span", {
    className: "fs-stone-card__placeholder"
  })), /*#__PURE__*/React.createElement("div", {
    className: "fs-stone-card__body"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "fs-stone-card__title"
  }, /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick
  }, title)), description ? /*#__PURE__*/React.createElement("p", {
    className: "fs-stone-card__desc"
  }, description) : null, /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    className: "fs-stone-card__more"
  }, /*#__PURE__*/React.createElement("span", null, "Learn More"), /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 17L17 7M17 7H8M17 7v9",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))));
}
Object.assign(__ds_scope, { StoneCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/StoneCard.jsx", error: String((e && e.message) || e) }); }

// components/chrome/CtaBanner.jsx
try { (() => {
// Fabstone CtaBanner — red rounded banner (.fs-cta-banner).
function CtaBanner({
  eyebrow = 'FABSTONE',
  title = 'Ready to Transform Your Space?',
  lede = 'Connect with our design team or explore the full collection.',
  primaryLabel = 'Contact Us',
  secondaryLabel = 'Live Inventory',
  onPrimary = () => {
    window.location.href = 'mailto:sales@fabsg.com';
  },
  onSecondary = () => {
    window.location.href = './live-inventory.html';
  }
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "fs-cta-banner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs-cta-banner__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs-cta-banner__eyebrow"
  }, eyebrow), /*#__PURE__*/React.createElement("h2", null, title), lede ? /*#__PURE__*/React.createElement("p", null, lede) : null, /*#__PURE__*/React.createElement("div", {
    className: "fs-cta-banner__actions"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "fs-btn fs-btn--white",
    onClick: onPrimary ? e => {
      e.preventDefault();
      onPrimary();
    } : undefined
  }, primaryLabel), secondaryLabel ? /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "fs-btn fs-btn--ghost",
    onClick: onSecondary ? e => {
      e.preventDefault();
      onSecondary();
    } : undefined
  }, secondaryLabel) : null)));
}
Object.assign(__ds_scope, { CtaBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chrome/CtaBanner.jsx", error: String((e && e.message) || e) }); }

// components/chrome/SiteFooter.jsx
try { (() => {
// Fabstone SiteFooter — light-grey 4-column footer (.fs-site-footer).

const fsFooterSocials = [{
  label: 'Facebook',
  href: 'https://www.facebook.com/fabstonegroup',
  svg: /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
  }))
}, {
  label: 'Instagram',
  href: 'https://www.instagram.com/explore/locations/345181813/fabricators-stone-group/',
  svg: /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17.5",
    cy: "6.5",
    r: "1.2",
    fill: "currentColor"
  }))
}];
const fsFooterDefaultCols = [{
  title: 'Live Inventory',
  links: [{
    label: 'Marble',
    href: './live-inventory.html?dept=Slabs%20%26%20Countertops'
  }, {
    label: 'Quartzite',
    href: './live-inventory.html?dept=Slabs%20%26%20Countertops'
  }, {
    label: 'Granite',
    href: './live-inventory.html?dept=Slabs%20%26%20Countertops'
  }, {
    label: 'Travertine',
    href: './live-inventory.html?dept=Slabs%20%26%20Countertops'
  }, {
    label: 'Slate',
    href: './live-inventory.html?dept=Slabs%20%26%20Countertops'
  }]
}, {
  title: 'Discover',
  links: [{
    label: 'Gallery',
    href: './index.html#gallery'
  }, {
    label: 'Favorites',
    href: './live-inventory.html?highlight=exclusive'
  }]
}, {
  title: 'Company',
  links: [{
    label: 'About Us',
    href: './about.html'
  }, {
    label: 'Location',
    href: './index.html#location'
  }, {
    label: 'Contact Us',
    href: 'mailto:sales@fabsg.com'
  }]
}];
function SiteFooter({
  logo = 'assets/images/logo-fabstone.png',
  blurb = "Premium natural stone and surfaces for the world's most ambitious design projects.",
  columns = fsFooterDefaultCols,
  legal = [{
    label: 'Privacy Policy',
    href: './privacy.html'
  }, {
    label: 'Terms of Use',
    href: './terms.html'
  }, {
    label: 'Accessibility',
    href: './accessibility.html'
  }],
  copyright = '© 2026 Fabstone. All rights reserved.'
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: "fs-site-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs-site-footer__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs-site-footer__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs-site-footer__brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "Fabstone",
    className: "fs-site-footer__logo"
  }), /*#__PURE__*/React.createElement("p", {
    className: "fs-site-footer__blurb"
  }, blurb), /*#__PURE__*/React.createElement("ul", {
    className: "fs-socials"
  }, fsFooterSocials.map(s => /*#__PURE__*/React.createElement("li", {
    key: s.label
  }, /*#__PURE__*/React.createElement("a", {
    href: s.href,
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": s.label
  }, s.svg))))), columns.map(col => /*#__PURE__*/React.createElement("div", {
    className: "fs-site-footer__col",
    key: col.title
  }, /*#__PURE__*/React.createElement("h4", null, col.title), /*#__PURE__*/React.createElement("ul", {
    className: "fs-footer-nav"
  }, col.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: typeof l === 'string' ? l : l.label
  }, /*#__PURE__*/React.createElement("a", {
    href: typeof l === 'string' ? '#' : l.href,
    className: "menu-link"
  }, typeof l === 'string' ? l : l.label))))))), /*#__PURE__*/React.createElement("div", {
    className: "fs-site-footer__bar"
  }, /*#__PURE__*/React.createElement("p", {
    className: "fs-site-footer__copyright"
  }, copyright), /*#__PURE__*/React.createElement("nav", {
    className: "fs-site-footer__legal",
    "aria-label": "Legal"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "fs-legal-nav"
  }, legal.map(l => {
    const label = typeof l === 'string' ? l : l.label;
    const href = typeof l === 'string' ? '#' : l.href;
    return /*#__PURE__*/React.createElement("li", {
      key: label
    }, /*#__PURE__*/React.createElement("a", {
      href: href,
      className: "menu-link"
    }, label));
  }))))));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chrome/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/chrome/SiteHeader.jsx
try { (() => {
// Fabstone SiteHeader — utility bar + main header (.fs-site-header).
// Recreated from the fabstone-child theme header markup.

function UtilIconMail() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 9l-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
function UtilIconPhone() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21.97 18.33a3.5 3.5 0 01-.35 1.51 4 4 0 01-.95 1.29 6.27 6.27 0 01-4.4 1.92c-.65 0-1.34-.11-2.05-.33a14.93 14.93 0 01-2.16-.87 22.74 22.74 0 01-7.5-5.79 17.46 17.46 0 01-1.62-2.14 14.74 14.74 0 01-.87-1.62A6.65 6.65 0 012 7.66 4.7 4.7 0 012.32 6 4 4 0 013.4 4.27a3.2 3.2 0 011.55-1A2.86 2.86 0 016 3a2.36 2.36 0 011 .22 2.13 2.13 0 01.84.67l2.49 3.5A4.61 4.61 0 0011 8.05a1.61 1.61 0 01.27.79c0 .28-.08.56-.24.83-.16.27-.39.55-.68.84l-.79.82c-.12.12-.17.27-.17.45a1 1 0 00.04.27c.04.09.07.16.09.22.16.31.43.71.82 1.2.4.48.83.97 1.29 1.46.48.5.95.95 1.42 1.36.46.4.85.69 1.17.86l.21.09c.08.03.18.05.29.05.19 0 .34-.06.46-.18l.78-.78c.31-.31.6-.54.88-.69.28-.17.55-.25.85-.25.23 0 .47.05.73.16.26.1.53.25.82.44l3.55 2.52c.32.22.55.48.69.79.13.31.21.62.21.96z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeMiterlimit: "10"
  }));
}
function UtilIconHeart() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
  }));
}
function SiteHeader({
  logo = 'assets/images/logo-fabstone.png',
  homeHref = '#',
  email = 'sales@fabsg.com',
  phone = '972-542-9678',
  nav = [{
    label: 'Live Inventory',
    href: '#'
  }, {
    label: 'Featured',
    href: '#'
  }, {
    label: 'About Us',
    href: '#'
  }, {
    label: 'Location',
    href: '#'
  }, {
    label: 'Gallery',
    href: '#'
  }],
  activeItem,
  ctaLabel = 'Contact Us',
  onCta = () => {
    window.location.href = 'mailto:sales@fabsg.com';
  },
  onNavClick
}) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [term, setTerm] = React.useState('');
  const closeMenu = () => setMenuOpen(false);
  const submitSearch = e => {
    e.preventDefault();
    const t = term.trim();
    window.location.href = './live-inventory.html' + (t ? '?q=' + encodeURIComponent(t) : '');
  };
  const handleNav = item => {
    closeMenu();
    if (onNavClick) onNavClick(item);
  };
  return /*#__PURE__*/React.createElement("header", {
    className: "fs-site-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs-util"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs-util__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs-util__left"
  }, /*#__PURE__*/React.createElement("a", {
    href: 'mailto:' + email,
    className: "fs-util__item"
  }, /*#__PURE__*/React.createElement(UtilIconMail, null), /*#__PURE__*/React.createElement("span", null, email)), /*#__PURE__*/React.createElement("a", {
    href: 'tel:' + phone.replace(/[^0-9]/g, ''),
    className: "fs-util__item"
  }, /*#__PURE__*/React.createElement(UtilIconPhone, null), /*#__PURE__*/React.createElement("span", null, phone))), /*#__PURE__*/React.createElement("div", {
    className: "fs-util__right"
  }, /*#__PURE__*/React.createElement("a", {
    href: "./live-inventory.html?highlight=exclusive",
    className: "fs-util__item fs-util__item--icon",
    "aria-label": "Saved"
  }, /*#__PURE__*/React.createElement(UtilIconHeart, null)), /*#__PURE__*/React.createElement("span", {
    className: "fs-util__sep",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("a", {
    href: "https://www.billerpayments.com/app/guestpayui/index.html?bsn=fabstone#/guestpay/payment",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "fs-util__item"
  }, "Pay Online"), /*#__PURE__*/React.createElement("span", {
    className: "fs-util__sep",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("form", {
    role: "search",
    className: "fs-util__search",
    onSubmit: submitSearch
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7",
    stroke: "currentColor",
    strokeWidth: "1.6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 21l-4.3-4.3",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("input", {
    type: "search",
    placeholder: "Search fabstone.com",
    value: term,
    onChange: e => setTerm(e.target.value)
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "fs-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs-header__inner"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: 'fs-burger' + (menuOpen ? ' is-open' : ''),
    "aria-label": "Menu",
    "aria-expanded": menuOpen,
    onClick: () => setMenuOpen(o => !o)
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)), /*#__PURE__*/React.createElement("a", {
    href: homeHref,
    className: "fs-header__brand",
    "aria-label": "Fabstone"
  }, /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "Fabstone"
  })), /*#__PURE__*/React.createElement("nav", {
    className: "fs-header__nav",
    "aria-label": "Primary"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "fs-nav"
  }, nav.map(item => {
    const kids = item.children && item.children.length ? item.children : null;
    return /*#__PURE__*/React.createElement("li", {
      key: item.label,
      className: 'menu-item' + (kids ? ' menu-item-has-children' : '') + (activeItem === item.label ? ' current-menu-item' : '')
    }, /*#__PURE__*/React.createElement("a", {
      href: item.href,
      className: "menu-link",
      "aria-haspopup": kids ? 'true' : undefined,
      onClick: onNavClick ? e => {
        e.preventDefault();
        onNavClick(item);
      } : undefined
    }, item.label, kids ? /*#__PURE__*/React.createElement("span", {
      className: "fs-caret",
      "aria-hidden": "true"
    }) : null), kids ? /*#__PURE__*/React.createElement("ul", {
      className: "fs-subnav"
    }, kids.map(c => /*#__PURE__*/React.createElement("li", {
      key: c.label
    }, /*#__PURE__*/React.createElement("a", {
      href: c.href,
      className: "menu-link",
      onClick: onNavClick ? e => {
        e.preventDefault();
        onNavClick(c);
      } : undefined
    }, c.label)))) : null);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fs-header__cta"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "fs-btn fs-btn--primary",
    onClick: onCta ? e => {
      e.preventDefault();
      onCta();
    } : undefined
  }, ctaLabel)))), /*#__PURE__*/React.createElement("div", {
    className: 'fs-mobile' + (menuOpen ? ' is-open' : ''),
    "aria-hidden": !menuOpen
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "fs-mobile__close",
    "aria-label": "Close menu",
    onClick: closeMenu
  }, "\xD7"), /*#__PURE__*/React.createElement("ul", {
    className: "fs-mobile__nav"
  }, nav.map(item => /*#__PURE__*/React.createElement("li", {
    key: item.label
  }, /*#__PURE__*/React.createElement("a", {
    href: item.href,
    onClick: onNavClick ? e => {
      e.preventDefault();
      handleNav(item);
    } : closeMenu
  }, item.label), item.children && item.children.length ? /*#__PURE__*/React.createElement("ul", {
    className: "fs-mobile__subnav"
  }, item.children.map(c => /*#__PURE__*/React.createElement("li", {
    key: c.label
  }, /*#__PURE__*/React.createElement("a", {
    href: c.href,
    onClick: onNavClick ? e => {
      e.preventDefault();
      handleNav(c);
    } : closeMenu
  }, c.label)))) : null))), /*#__PURE__*/React.createElement("div", {
    className: "fs-mobile__util"
  }, /*#__PURE__*/React.createElement("a", {
    href: 'mailto:' + email,
    className: "fs-mobile__util-item"
  }, /*#__PURE__*/React.createElement(UtilIconMail, null), /*#__PURE__*/React.createElement("span", null, email)), /*#__PURE__*/React.createElement("a", {
    href: 'tel:' + phone.replace(/[^0-9]/g, ''),
    className: "fs-mobile__util-item"
  }, /*#__PURE__*/React.createElement(UtilIconPhone, null), /*#__PURE__*/React.createElement("span", null, phone)), /*#__PURE__*/React.createElement("a", {
    href: "./live-inventory.html?highlight=exclusive",
    className: "fs-mobile__util-item",
    onClick: closeMenu
  }, /*#__PURE__*/React.createElement(UtilIconHeart, null), /*#__PURE__*/React.createElement("span", null, "Saved")), /*#__PURE__*/React.createElement("a", {
    href: "https://www.billerpayments.com/app/guestpayui/index.html?bsn=fabstone#/guestpay/payment",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "fs-mobile__util-item",
    onClick: closeMenu
  }, /*#__PURE__*/React.createElement("span", null, "Pay Online"))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "fs-btn fs-btn--primary fs-mobile__cta",
    onClick: onCta ? e => {
      e.preventDefault();
      closeMenu();
      onCta();
    } : closeMenu
  }, ctaLabel)));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chrome/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/core/ArrowButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Fabstone ArrowButton — 48px circular pager arrow (.fs-arrow).
function ArrowButton({
  direction = 'next',
  // 'prev' | 'next'
  primary = direction === 'next',
  disabled = false,
  onClick,
  className = '',
  ...rest
}) {
  const cls = ['fs-arrow', primary ? 'fs-arrow--primary' : '', className].filter(Boolean).join(' ');
  const d = direction === 'prev' ? 'M15 18l-6-6 6-6' : 'M9 18l6-6-6-6';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    disabled: disabled,
    onClick: onClick,
    "aria-label": direction === 'prev' ? 'Previous' : 'Next'
  }, rest), /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: d,
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}
Object.assign(__ds_scope, { ArrowButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ArrowButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Fabstone Button — renders the site's .fs-btn classes.
function Button({
  variant = 'primary',
  // 'primary' | 'ghost' | 'dark' | 'white' | 'outline-dark'
  pill = false,
  href,
  children,
  onClick,
  style,
  className = '',
  ...rest
}) {
  const cls = ['fs-btn', `fs-btn--${variant}`, pill ? 'fs-btn--pill' : '', className].filter(Boolean).join(' ');
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: onClick,
    className: cls,
    style: style,
    type: href ? undefined : 'button'
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Pill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Fabstone Pill — frosted-glass filter tab (.fs-pill), used on dark sections.
function Pill({
  active = false,
  children,
  onClick,
  className = '',
  ...rest
}) {
  const cls = ['fs-pill', active ? 'is-active' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    onClick: onClick,
    role: "tab",
    "aria-selected": active
  }, rest), children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Pill.jsx", error: String((e && e.message) || e) }); }

// components/core/SearchInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Fabstone SearchInput — frosted search bar (.fs-search) for dark sections.
function SearchInput({
  placeholder = 'Search by stone type, color or application...',
  value,
  onChange,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ['fs-search', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7",
    stroke: "currentColor",
    strokeWidth: "1.8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 21l-4.3-4.3",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("input", _extends({
    type: "search",
    placeholder: placeholder,
    value: value,
    onChange: onChange ? e => onChange(e.target.value) : undefined
  }, rest)), onChange && value ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "fs-search__clear",
    "aria-label": "Clear search",
    onClick: () => onChange('')
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }))) : null);
}
Object.assign(__ds_scope, { SearchInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SearchInput.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHead.jsx
try { (() => {
// Fabstone SectionHead — eyebrow + H2 (italic red accent word) + lede.
// Matches the centered section-head pattern used across the site.
function SectionHead({
  eyebrow,
  accent,
  // the italic red first word(s)
  title,
  // the rest of the title
  lede,
  onDark = false,
  align = 'center',
  className = '',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      textAlign: align,
      maxWidth: 760,
      margin: '0 auto',
      paddingInline: 24,
      ...style
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      fontFamily: 'var(--fs-font-display)',
      color: 'var(--fs-red)',
      fontSize: 24,
      fontWeight: 600,
      lineHeight: '28.8px',
      marginBottom: 12
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--fs-font-display)',
      fontSize: 60,
      fontWeight: 700,
      lineHeight: '72px',
      color: onDark ? 'var(--fs-white)' : '#0C111F',
      margin: '0 0 24px'
    }
  }, accent ? /*#__PURE__*/React.createElement("em", {
    className: "fs-accent"
  }, accent) : null, accent ? ' ' : '', title), lede ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--fs-font-display)',
      fontSize: 24,
      fontWeight: 500,
      lineHeight: '34px',
      color: onDark ? '#D2D2D2' : '#7E7E7E',
      margin: 0
    }
  }, lede) : null);
}
Object.assign(__ds_scope, { SectionHead });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHead.jsx", error: String((e && e.message) || e) }); }

// site_src/js/fabstone-main.js
try { (() => {
/* Fabstone — main JS
 * Handles: Featured Collections + Live Inventory filtering, hero video play,
 * announcement scroller pause-on-hover, mobile menu toggle (if needed).
 */
(function () {
  'use strict';

  /* ───────────── Featured Collections / Live Inventory filter ───────────── */
  function initFilterGrid(root) {
    const tabs = root.querySelectorAll('[data-fs-tab]');
    const search = root.querySelector('[data-fs-search]');
    const grid = root.querySelector('[data-fs-grid]');
    const empty = root.querySelector('[data-fs-empty]');
    const pager = root.querySelector('[data-fs-pager]');
    const prevBtn = root.querySelector('[data-fs-prev]');
    const nextBtn = root.querySelector('[data-fs-next]');
    const perPage = parseInt(root.dataset.fsPerPage || '3', 10);
    const state = {
      stone_type: 'all',
      search: '',
      paged: 1,
      maxPages: 1
    };
    let searchTimer = null;
    if (!grid) return;
    if (pager) {
      state.maxPages = parseInt(pager.dataset.fsMax || '1', 10);
    }
    function setActiveTab(slug) {
      tabs.forEach(t => {
        const active = t.dataset.fsTab === slug;
        t.classList.toggle('is-active', active);
        t.setAttribute('aria-selected', active ? 'true' : 'false');
      });
    }
    function updatePagerUI() {
      if (!pager) return;
      pager.dataset.fsPage = String(state.paged);
      pager.dataset.fsMax = String(state.maxPages);
      if (prevBtn) prevBtn.disabled = state.paged <= 1;
      if (nextBtn) nextBtn.disabled = state.paged >= state.maxPages;
    }
    async function fetchAndRender() {
      grid.setAttribute('aria-busy', 'true');
      const body = new FormData();
      body.append('action', 'fabstone_filter');
      body.append('nonce', FabstoneData.nonce);
      body.append('stone_type', state.stone_type);
      body.append('search', state.search);
      body.append('paged', String(state.paged));
      body.append('per_page', String(perPage));
      try {
        const r = await fetch(FabstoneData.ajaxUrl, {
          method: 'POST',
          body
        });
        const json = await r.json();
        if (json.success) {
          grid.innerHTML = json.data.html;
          state.maxPages = json.data.max_pages || 1;
          if (empty) empty.hidden = json.data.found > 0;
          updatePagerUI();
        }
      } catch (err) {
        console.error('[fabstone] filter failed', err);
      } finally {
        grid.removeAttribute('aria-busy');
      }
    }
    tabs.forEach(tab => tab.addEventListener('click', () => {
      state.stone_type = tab.dataset.fsTab;
      state.paged = 1;
      setActiveTab(state.stone_type);
      fetchAndRender();
    }));
    if (search) {
      search.addEventListener('input', () => {
        clearTimeout(searchTimer);
        searchTimer = setTimeout(() => {
          state.search = search.value.trim();
          state.paged = 1;
          fetchAndRender();
        }, 250);
      });
    }
    if (prevBtn) prevBtn.addEventListener('click', () => {
      if (state.paged > 1) {
        state.paged--;
        fetchAndRender();
      }
    });
    if (nextBtn) nextBtn.addEventListener('click', () => {
      if (state.paged < state.maxPages) {
        state.paged++;
        fetchAndRender();
      }
    });
    updatePagerUI();
  }

  /* ───────────── Hero video play ───────────── */
  function initHeroPlay() {
    document.querySelectorAll('.fs-hero__play').forEach(btn => {
      btn.addEventListener('click', () => {
        const wrap = btn.closest('.fs-hero__media');
        const video = wrap && wrap.querySelector('video');
        if (video) {
          video.play();
          btn.style.display = 'none';
        }
      });
    });
  }

  /* ───────────── Announcement scroller — pause on hover ───────────── */
  function initAnnounce() {
    document.querySelectorAll('.fs-announce__track').forEach(track => {
      track.addEventListener('mouseenter', () => track.style.animationPlayState = 'paused');
      track.addEventListener('mouseleave', () => track.style.animationPlayState = 'running');
    });
  }

  /* ───────────── Mobile menu drawer ───────────── */
  function initMobileMenu() {
    const burger = document.querySelector('.fs-burger');
    const drawer = document.getElementById('fs-mobile');
    const closeBtn = drawer && drawer.querySelector('.fs-mobile__close');
    if (!burger || !drawer) return;
    const open = () => {
      drawer.classList.add('is-open');
      burger.classList.add('is-open');
      drawer.setAttribute('aria-hidden', 'false');
      burger.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    };
    const close = () => {
      drawer.classList.remove('is-open');
      burger.classList.remove('is-open');
      drawer.setAttribute('aria-hidden', 'true');
      burger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    };
    burger.addEventListener('click', () => {
      drawer.classList.contains('is-open') ? close() : open();
    });
    closeBtn && closeBtn.addEventListener('click', close);
    drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') close();
    });
  }

  /* ───────────── v2 Hero play button — swap poster for embedded video ─────────────
   * Markup expectation:
   *   <section class="fs2-hero" data-fs2-hero>
   *     <div class="fs2-hero__media">
   *       <img class="fs2-hero__poster" …>
   *       <button class="fs2-hero__play" data-fs2-play>…</button>
   *       <template data-fs2-embed><!-- iframe or video --></template>
   *     </div>
   *   </section>
   */
  function initHero2Play() {
    document.querySelectorAll('[data-fs2-hero]').forEach(hero => {
      const btn = hero.querySelector('[data-fs2-play]');
      const tpl = hero.querySelector('[data-fs2-embed]');
      const media = hero.querySelector('.fs2-hero__media');
      if (!btn || !tpl || !media) return;
      btn.addEventListener('click', () => {
        const node = tpl.content.cloneNode(true);
        media.appendChild(node);
        hero.classList.add('is-playing');
      }, {
        once: true
      });
    });
  }

  /* ───────────── [fabstone_inspirations] — client-side filter ─────────────
   * Inspiration CPT is small (a handful of posts), so a JS-only filter is
   * lighter than an AJAX round-trip. Pill click → keep cards whose
   * data-fs-space matches; search input → match against data-fs-text.
   */
  function initInspirationFilter(root) {
    const tabs = root.querySelectorAll('[data-fs-insp-tab]');
    const search = root.querySelector('[data-fs-insp-search]');
    const cards = root.querySelectorAll('[data-fs-insp-card]');
    const empty = root.querySelector('[data-fs-insp-empty]');
    if (!cards.length) return;
    const state = {
      space: 'all',
      term: ''
    };
    let searchTimer = null;
    function apply() {
      let visible = 0;
      cards.forEach(card => {
        const spaceMatch = state.space === 'all' || card.dataset.fsSpace === state.space;
        const textMatch = !state.term || (card.dataset.fsText || '').indexOf(state.term) !== -1;
        const show = spaceMatch && textMatch;
        card.hidden = !show;
        if (show) visible++;
      });
      if (empty) empty.hidden = visible > 0;
    }
    tabs.forEach(tab => tab.addEventListener('click', () => {
      state.space = tab.dataset.fsInspTab;
      tabs.forEach(t => {
        const active = t === tab;
        t.classList.toggle('is-active', active);
        t.setAttribute('aria-selected', active ? 'true' : 'false');
      });
      apply();
    }));
    if (search) {
      search.addEventListener('input', () => {
        clearTimeout(searchTimer);
        searchTimer = setTimeout(() => {
          state.term = search.value.trim().toLowerCase();
          apply();
        }, 150);
      });
    }
  }
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-fs-filter]').forEach(initFilterGrid);
    document.querySelectorAll('[data-fs-insp-root]').forEach(initInspirationFilter);
    initHeroPlay();
    initHero2Play();
    initAnnounce();
    initMobileMenu();
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site_src/js/fabstone-main.js", error: String((e && e.message) || e) }); }

// ui_kits/website/InventoryData.jsx
try { (() => {
// Fabstone live inventory data + filter taxonomy.
// Department model (4 customer-facing + Shop & Supplies back-of-house) and
// normalized facet values per ui_kits/website/FILTER-TAXONOMY.md.
//
// SEED DATASET: 11 real slabs (with photography) + representative PLACEHOLDER
// products across the other four departments so the adaptive filters are
// testable. Placeholder products have no `img` — the card renders a tinted
// "image coming soon" panel. Replace/extend with the full StoneProfits export.

const Departments = ['Slabs & Countertops', 'Tile', 'Sinks', 'Faucets & Fixtures', 'Shop & Supplies'];

// Merchandising highlights — cross-department flags surfaced as card badges and
// a top-level filter row. `featured` rolls in `sale` (current deals are featured);
// `exclusive` = Fabstone-branded, owned product. Order = badge stack priority.
const Highlights = [{
  key: 'exclusive',
  label: 'Exclusive',
  match: p => !!p.exclusive
}, {
  key: 'featured',
  label: 'Featured',
  match: p => !!(p.featured || p.sale)
}, {
  key: 'sale',
  label: 'On Sale',
  match: p => !!p.sale
}];

// Per-flag badge presentation (label shown on the card corner + style modifier).
const BadgeMeta = {
  exclusive: {
    label: 'Exclusive',
    cls: 'is-exclusive'
  },
  featured: {
    label: 'Featured',
    cls: 'is-featured'
  },
  sale: {
    label: 'On Sale',
    cls: 'is-sale'
  }
};

// Master swatch lookup — any color/finish rendered as a swatch dot reads its hex here.
const SwatchHex = {
  // Primary stone / product colors
  'White': '#F1EEE8',
  'Off-White': '#E6DECF',
  'Cream': '#E3D6B6',
  'Beige': '#D7C3A1',
  'Tan': '#C0A277',
  'Gray': '#9A9A97',
  'Black': '#1E1E1E',
  'Brown': '#6B4A33',
  'Blue': '#3F5E78',
  'Green': '#55634C',
  'Gold': '#B8924A',
  'Red/Rust': '#8C4A35',
  'Silver': '#B9BCC0',
  'Copper': '#A66A3E',
  'Aqua': '#5FA8A0',
  'Multi': 'multi',
  // Metal finishes (Faucets & Sinks)
  'Chrome': '#C7CACE',
  'Stainless': '#AFB3B7',
  'Matte Black': '#232323',
  'Brushed Nickel': '#B8B6B0',
  'Polished Nickel': '#CFCFCF',
  'Champagne Bronze': '#B89A6E',
  'Venetian Bronze': '#5E4A38',
  'Vibrant Brushed Bronze': '#9C7A52',
  'Brass': '#B79355'
};

// Customer-facing color swatch vocabulary used by Slabs/Tile/Sinks color facet.
const PRIMARY_COLORS = ['White', 'Off-White', 'Cream', 'Beige', 'Tan', 'Gray', 'Black', 'Brown', 'Blue', 'Green', 'Gold', 'Red/Rust', 'Aqua', 'Multi'];
const METAL_FINISHES = ['Chrome', 'Stainless', 'Matte Black', 'Brushed Nickel', 'Polished Nickel', 'Champagne Bronze', 'Venetian Bronze', 'Vibrant Brushed Bronze', 'Brass'];

// Adaptive facet config — which filters appear for each department, in order.
// `swatch: true` renders color/finish dots instead of checkboxes.
const DepartmentFacets = {
  'Slabs & Countertops': [{
    key: 'material',
    label: 'Material',
    options: ['Granite', 'Quartzite', 'Marble', 'Elements Quartz', 'Limestone', 'Travertine', 'Onyx', 'Slate', 'Porcelain']
  }, {
    key: 'tier',
    label: 'Group',
    options: ['Exotic', 'Semiexotic', 'Basic', 'Clearance', 'Fab Adv', 'Disco']
  }, {
    key: 'color',
    label: 'Color',
    swatch: true,
    options: PRIMARY_COLORS
  }, {
    key: 'finish',
    label: 'Finish',
    options: ['Polished', 'Honed', 'Leathered']
  }, {
    key: 'price',
    label: 'Price Range',
    options: ['PL1', 'PL2', 'PL3', 'PL4', 'PL5', 'PL6', 'PL7', 'PL8', 'PL9', 'PL10']
  }],
  'Tile': [{
    key: 'material',
    label: 'Material',
    options: ['Porcelain', 'Ceramic', 'Glass', 'Natural Stone', 'Marble', 'Cement']
  }, {
    key: 'brand',
    label: 'Brand',
    options: ['Adex', 'Bedrosians', 'Eliane', 'Keystone', 'Marble Systems', 'Panaria']
  }, {
    key: 'color',
    label: 'Color',
    swatch: true,
    options: PRIMARY_COLORS
  }, {
    key: 'format',
    label: 'Format',
    options: ['Field Tile', 'Mosaic', 'Accent', 'Specialty']
  }],
  'Sinks': [{
    key: 'brand',
    label: 'Brand',
    options: ['Blanco', 'Kohler', 'Soci']
  }, {
    key: 'material',
    label: 'Material',
    options: ['Cast Iron', 'Fireclay', 'Granite Composite', 'Stainless', 'Vitreous', 'Resin']
  }, {
    key: 'config',
    label: 'Bowl Config',
    options: ['Single Bowl', '50/50', '60/40', 'Oval', 'Round', 'Vessel', 'Utility/Bar']
  }, {
    key: 'color',
    label: 'Color / Finish',
    swatch: true,
    options: ['White', 'Off-White', 'Gray', 'Black', 'Brown', 'Beige']
  }],
  'Faucets & Fixtures': [{
    key: 'brand',
    label: 'Brand',
    options: ['Delta', 'Kohler', 'Pelican']
  }, {
    key: 'finish',
    label: 'Finish',
    swatch: true,
    options: METAL_FINISHES
  }, {
    key: 'type',
    label: 'Type',
    options: ['Kitchen Faucet', 'Bar Faucet', 'Bathroom Faucet', 'Pot Filler', 'Accessory']
  }],
  'Shop & Supplies': [{
    key: 'type',
    label: 'Type',
    options: ['Adhesive', 'Chemical', 'Drain', 'Grid', 'Rack', 'Sample', 'Shop Supply', 'Special Order']
  }, {
    key: 'brand',
    label: 'Brand',
    options: ['Construction Ventures', 'Cortena', 'DAP', 'Fabstone', 'Satellite', 'Sinkits']
  }]
};

// Spec rows shown on the product detail page, per department (only present fields render).
const DepartmentSpecs = {
  'Slabs & Countertops': [['Material', 'material'], ['Color', 'color'], ['Finish', 'finish'], ['Thickness', 'thickness'], ['Type', 'type'], ['Group', 'tier']],
  'Tile': [['Material', 'material'], ['Brand', 'brand'], ['Color', 'color'], ['Format', 'format']],
  'Sinks': [['Brand', 'brand'], ['Material', 'material'], ['Bowl Config', 'config'], ['Color / Finish', 'color']],
  'Faucets & Fixtures': [['Brand', 'brand'], ['Finish', 'finish'], ['Type', 'type']],
  'Shop & Supplies': [['Type', 'type'], ['Brand', 'brand']]
};
const InventoryProducts = [
// ── Slabs & Countertops (real photography) ──
{
  id: 'bianco-superiore',
  name: 'Bianco Superiore',
  department: 'Slabs & Countertops',
  material: 'Quartzite',
  tier: 'Exotic',
  color: 'White',
  finish: 'Polished',
  thickness: '3cm',
  type: 'Slab',
  price: 'PL7',
  tag: 'Quartzite',
  meta: 'Polished · 3cm · Slab',
  img: 'products/bianco-superiore.jpg',
  featured: true
}, {
  id: 'calacatta-alaska-gold',
  name: 'Calacatta Alaska Gold',
  department: 'Slabs & Countertops',
  material: 'Elements Quartz',
  tier: 'Semiexotic',
  color: 'White',
  finish: 'Polished',
  thickness: '3cm',
  type: 'Slab',
  price: 'PL6',
  tag: 'Elements Quartz',
  meta: 'Polished · 3cm · Slab',
  img: 'products/calacatta-alaska-gold.jpg',
  exclusive: true,
  featured: true
}, {
  id: 'azzurra-bay',
  name: 'Azzurra Bay',
  department: 'Slabs & Countertops',
  material: 'Quartzite',
  tier: 'Exotic',
  color: 'Gray',
  finish: 'Polished',
  thickness: '3cm',
  type: 'Slab',
  price: 'PL8',
  tag: 'Quartzite',
  meta: 'Polished · 3cm · Slab',
  img: 'products/azzurra-bay.jpg',
  featured: true
}, {
  id: 'angola-black',
  name: 'Angola Black',
  department: 'Slabs & Countertops',
  material: 'Granite',
  tier: 'Basic',
  color: 'Black',
  finish: 'Polished',
  thickness: '3cm',
  type: 'Slab',
  price: 'PL3',
  tag: 'Granite',
  meta: 'Polished · 3cm · Slab',
  img: 'products/angola-black.jpg',
  featured: true
}, {
  id: 'bianco-marina',
  name: 'Bianco Marina',
  department: 'Slabs & Countertops',
  material: 'Elements Quartz',
  tier: 'Basic',
  color: 'White',
  finish: 'Polished',
  thickness: '3cm',
  type: 'Slab',
  price: 'PL5',
  tag: 'Elements Quartz',
  meta: 'Polished · 3cm · Slab',
  img: 'products/bianco-marina.jpg',
  exclusive: true
}, {
  id: 'alpine-valley',
  name: 'Alpine Valley',
  department: 'Slabs & Countertops',
  material: 'Granite',
  tier: 'Semiexotic',
  color: 'Cream',
  finish: 'Polished',
  thickness: '3cm',
  type: 'Slab',
  price: 'PL4',
  tag: 'Granite',
  meta: 'Polished · 3cm · Slab',
  img: 'products/alpine-valley.jpg',
  sale: true
}, {
  id: 'aspen-white',
  name: 'Aspen White',
  department: 'Slabs & Countertops',
  material: 'Marble',
  tier: 'Semiexotic',
  color: 'White',
  finish: 'Polished',
  thickness: '3cm',
  type: 'Slab',
  price: 'PL5',
  tag: 'Marble',
  meta: 'Polished · 3cm · Slab',
  img: 'products/aspen-white.jpg'
}, {
  id: 'bianco-fantastico',
  name: 'Bianco Fantastico',
  department: 'Slabs & Countertops',
  material: 'Granite',
  tier: 'Basic',
  color: 'White',
  finish: 'Polished',
  thickness: '3cm',
  type: 'Slab',
  price: 'PL2',
  tag: 'Granite',
  meta: 'Polished · 3cm · Slab',
  img: 'products/bianco-fantastico.jpg',
  sale: true
}, {
  id: 'azul-platino',
  name: 'Azul Platino',
  department: 'Slabs & Countertops',
  material: 'Granite',
  tier: 'Basic',
  color: 'Gray',
  finish: 'Polished',
  thickness: '3cm',
  type: 'Slab',
  price: 'PL2',
  tag: 'Granite',
  meta: 'Polished · 3cm · Slab',
  img: 'products/azul-platino.jpg',
  sale: true
}, {
  id: 'absolute-white',
  name: 'Absolute White',
  department: 'Slabs & Countertops',
  material: 'Quartzite',
  tier: 'Exotic',
  color: 'White',
  finish: 'Polished',
  thickness: '3cm',
  type: 'Slab',
  price: 'PL7',
  tag: 'Quartzite',
  meta: 'Polished · 3cm · Slab',
  img: 'products/absolute-white.jpg',
  featured: true
}, {
  id: 'bianco-verona',
  name: 'Bianco Verona Classic',
  department: 'Slabs & Countertops',
  material: 'Elements Quartz',
  tier: 'Basic',
  color: 'White',
  finish: 'Polished',
  thickness: '3cm',
  type: 'Slab',
  price: 'PL5',
  tag: 'Elements Quartz',
  meta: 'Polished · 3cm · Slab',
  imgUrl: 'https://s3.us-east-1.amazonaws.com/fabstone-sps-files/Item_Img_176451_bianco_verona_166406.jpg',
  exclusive: true
},
// ── Tile (placeholder — awaiting photography) ──
{
  id: 'carrara-hex-mosaic',
  name: 'Carrara Hexagon Mosaic',
  department: 'Tile',
  material: 'Marble',
  brand: 'Marble Systems',
  format: 'Mosaic',
  color: 'White',
  tag: 'Mosaic Tile',
  meta: 'Marble Systems · 2" Hex',
  featured: true
}, {
  id: 'metro-subway-white',
  name: 'Metro Subway White',
  department: 'Tile',
  material: 'Ceramic',
  brand: 'Bedrosians',
  format: 'Field Tile',
  color: 'White',
  tag: 'Field Tile',
  meta: 'Bedrosians · 3×6 Gloss',
  sale: true
}, {
  id: 'cementine-blue',
  name: 'Cementine Blue Pattern',
  department: 'Tile',
  material: 'Porcelain',
  brand: 'Eliane',
  format: 'Accent',
  color: 'Blue',
  tag: 'Accent Tile',
  meta: 'Eliane · 8×8 Patterned'
}, {
  id: 'glass-linear-aqua',
  name: 'Linear Glass Aqua',
  department: 'Tile',
  material: 'Glass',
  brand: 'Adex',
  format: 'Mosaic',
  color: 'Aqua',
  tag: 'Glass Mosaic',
  meta: 'Adex · Linear Blend'
}, {
  id: 'slate-ledger-black',
  name: 'Slate Ledger Panel',
  department: 'Tile',
  material: 'Natural Stone',
  brand: 'Keystone',
  format: 'Specialty',
  color: 'Black',
  tag: 'Ledger Panel',
  meta: 'Keystone · Stacked Stone'
},
// ── Sinks (placeholder — awaiting photography) ──
{
  id: 'blanco-performa-cascade',
  name: 'Blanco Performa Cascade',
  department: 'Sinks',
  brand: 'Blanco',
  material: 'Granite Composite',
  config: '60/40',
  color: 'Gray',
  tag: 'Granite Composite Sink',
  meta: 'Blanco · 60/40 Double Bowl',
  featured: true
}, {
  id: 'kohler-whitehaven',
  name: 'Kohler Whitehaven',
  department: 'Sinks',
  brand: 'Kohler',
  material: 'Cast Iron',
  config: 'Single Bowl',
  color: 'White',
  tag: 'Farmhouse Sink',
  meta: 'Kohler · Apron Front'
}, {
  id: 'soci-fireclay-apron',
  name: 'Soci Fireclay Apron',
  department: 'Sinks',
  brand: 'Soci',
  material: 'Fireclay',
  config: 'Single Bowl',
  color: 'White',
  tag: 'Fireclay Sink',
  meta: 'Soci · Apron Front'
}, {
  id: 'blanco-diamond-dual',
  name: 'Blanco Diamond Dual',
  department: 'Sinks',
  brand: 'Blanco',
  material: 'Granite Composite',
  config: '50/50',
  color: 'Brown',
  tag: 'Granite Composite Sink',
  meta: 'Blanco · 50/50 Double Bowl'
}, {
  id: 'kohler-strive',
  name: 'Kohler Strive Undermount',
  department: 'Sinks',
  brand: 'Kohler',
  material: 'Stainless',
  config: 'Single Bowl',
  color: 'Stainless',
  tag: 'Stainless Sink',
  meta: 'Kohler · Undermount',
  sale: true
},
// ── Faucets & Fixtures (placeholder — awaiting photography) ──
{
  id: 'delta-trinsic',
  name: 'Delta Trinsic Pull-Down',
  department: 'Faucets & Fixtures',
  brand: 'Delta',
  finish: 'Matte Black',
  type: 'Kitchen Faucet',
  color: 'Matte Black',
  tag: 'Kitchen Faucet',
  meta: 'Delta · Pull-Down',
  featured: true
}, {
  id: 'kohler-artifacts',
  name: 'Kohler Artifacts Bridge',
  department: 'Faucets & Fixtures',
  brand: 'Kohler',
  finish: 'Vibrant Brushed Bronze',
  type: 'Kitchen Faucet',
  color: 'Vibrant Brushed Bronze',
  tag: 'Kitchen Faucet',
  meta: 'Kohler · Bridge'
}, {
  id: 'delta-pot-filler',
  name: 'Delta Wall Pot Filler',
  department: 'Faucets & Fixtures',
  brand: 'Delta',
  finish: 'Chrome',
  type: 'Pot Filler',
  color: 'Chrome',
  tag: 'Pot Filler',
  meta: 'Delta · Wall-Mount'
}, {
  id: 'pelican-bar',
  name: 'Pelican Bar Faucet',
  department: 'Faucets & Fixtures',
  brand: 'Pelican',
  finish: 'Stainless',
  type: 'Bar Faucet',
  color: 'Stainless',
  tag: 'Bar Faucet',
  meta: 'Pelican · Single-Handle'
}, {
  id: 'delta-widespread',
  name: 'Delta Widespread Lav',
  department: 'Faucets & Fixtures',
  brand: 'Delta',
  finish: 'Champagne Bronze',
  type: 'Bathroom Faucet',
  color: 'Champagne Bronze',
  tag: 'Bathroom Faucet',
  meta: 'Delta · Widespread'
},
// ── Shop & Supplies (back-of-house, placeholder) ──
{
  id: 'sample-kit',
  name: 'Stone Color Sample Kit',
  department: 'Shop & Supplies',
  type: 'Sample',
  brand: 'Fabstone',
  color: 'Multi',
  tag: 'Sample Kit',
  meta: 'Fabstone · 12 Colors',
  exclusive: true
}, {
  id: 'dap-silicone',
  name: 'DAP 100% Silicone Sealant',
  department: 'Shop & Supplies',
  type: 'Chemical',
  brand: 'DAP',
  color: 'Gray',
  tag: 'Sealant',
  meta: 'DAP · Clear Silicone'
}, {
  id: 'sink-grid',
  name: 'Sink Mounting Grid',
  department: 'Shop & Supplies',
  type: 'Grid',
  brand: 'Sinkits',
  color: 'Stainless',
  tag: 'Sink Grid',
  meta: 'Sinkits · Stainless'
}, {
  id: 'basket-strainer',
  name: 'Basket Strainer Drain',
  department: 'Shop & Supplies',
  type: 'Drain',
  brand: 'Cortena',
  color: 'Stainless',
  tag: 'Drain',
  meta: 'Cortena · Basket Strainer'
}, {
  id: 'display-rack',
  name: 'Slab Display A-Frame',
  department: 'Shop & Supplies',
  type: 'Rack',
  brand: 'Construction Ventures',
  color: 'Black',
  tag: 'Display Rack',
  meta: 'Construction Ventures · A-Frame'
}];
Object.assign(__ds_scope, { Departments, Highlights, BadgeMeta, SwatchHex, DepartmentFacets, DepartmentSpecs, InventoryProducts });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/InventoryData.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeSections.jsx
try { (() => {
// Fabstone website UI kit — home page sections (recreated from /home2/).
// Markup mirrors the fabstone-child theme's fs-* / fs2-* classes; styles
// come from the design system's styles.css.

// Derive card badges from the inventory's own flags, matched by product name —
// so home merchandising stays in sync with Live Inventory (no second source).
function badgesFor(title) {
  const p = __ds_scope.InventoryProducts.find(x => x.name === title);
  if (!p) return [];
  return ['exclusive', 'featured', 'sale'].filter(k => p[k]).map(k => __ds_scope.BadgeMeta[k]);
}

// True when a product is exclusive but not also featured/on sale — these are kept
// out of the homepage Featured section (Featured = popular picks + current deals).
function isExclusiveOnly(title) {
  const p = __ds_scope.InventoryProducts.find(x => x.name === title);
  return !!(p && p.exclusive && !p.featured && !p.sale);
}

/* ── Hero — full-bleed video poster with play button ── */
function HomeHero({
  poster,
  videoId = 'LpsgKA36gtI'
}) {
  const [playing, setPlaying] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    className: 'fs2-hero has-video' + (playing ? ' is-playing' : ''),
    "data-screen-label": "Hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs2-hero__media"
  }, /*#__PURE__*/React.createElement("img", {
    className: "fs2-hero__poster",
    src: poster,
    alt: "",
    loading: "eager"
  }), playing ? /*#__PURE__*/React.createElement("iframe", {
    src: 'https://www.youtube.com/embed/' + videoId + '?autoplay=1&rel=0&modestbranding=1',
    title: "Fabstone video",
    allow: "autoplay; encrypted-media",
    allowFullScreen: true
  }) : null, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "fs2-hero__play",
    "aria-label": "Play video",
    onClick: () => setPlaying(true)
  }, /*#__PURE__*/React.createElement("svg", {
    width: "80",
    height: "80",
    viewBox: "0 0 80 80",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "40",
    cy: "40",
    r: "38",
    stroke: "#FFFFFF",
    strokeWidth: "2.5",
    fill: "rgba(0,0,0,.18)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M33 27.5L57 40 33 52.5V27.5Z",
    fill: "#FFFFFF"
  })))));
}

/* ── Trust strip — intro + partner logos ── */
function TrustStrip({
  assetBase
}) {
  // Mouse drag-to-scroll so the mobile logo scroller is usable with a pointer
  // (not just touch). Touch swipe works natively via overflow-x.
  const logosRef = React.useRef(null);
  const drag = React.useRef({
    down: false,
    startX: 0,
    startLeft: 0,
    moved: false
  });
  const onDown = e => {
    const el = logosRef.current;
    if (!el) return;
    drag.current = {
      down: true,
      startX: e.clientX,
      startLeft: el.scrollLeft,
      moved: false
    };
    el.setPointerCapture && el.setPointerCapture(e.pointerId);
  };
  const onMove = e => {
    const el = logosRef.current;
    if (!el || !drag.current.down) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 3) drag.current.moved = true;
    el.scrollLeft = drag.current.startLeft - dx;
  };
  const onUp = () => {
    drag.current.down = false;
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "fs-trust",
    "data-screen-label": "Trust strip"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs-trust__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs-trust__intro"
  }, /*#__PURE__*/React.createElement("h4", null, "Trusted Across the Industry"), /*#__PURE__*/React.createElement("p", null, "Builders, designers and dealers rely on Fabstone surfaces.")), /*#__PURE__*/React.createElement("div", {
    className: "fs-trust__logos",
    ref: logosRef,
    onPointerDown: onDown,
    onPointerMove: onMove,
    onPointerUp: onUp,
    onPointerCancel: onUp
  }, /*#__PURE__*/React.createElement("img", {
    src: assetBase + '/images/partner-investify.png',
    alt: "Investify",
    loading: "lazy",
    draggable: "false"
  }), /*#__PURE__*/React.createElement("img", {
    src: assetBase + '/images/partner-knewish.png',
    alt: "Knewish",
    loading: "lazy",
    draggable: "false"
  }), /*#__PURE__*/React.createElement("img", {
    src: assetBase + '/images/partner-upglam.png',
    alt: "Upglam",
    loading: "lazy",
    draggable: "false"
  }))));
}

/* ── Featured Inventory — dark section with search, pills, 3-up grid, pager ──
   Pills are the customer-facing "Slabs & Countertops" department: derived from
   the canonical slab-material taxonomy, in catalog order, showing only the
   materials actually present in the showcase (so a pill is never empty). The
   full Live Inventory browser carries the other three departments + back-of-house. */
const FS_SLAB_ORDER = ['GRANITE', 'LIMESTONE', 'MARBLE', 'QUARTZITE', 'ELEMENTS QUARTZ', 'TRAVERTINE', 'ONYX', 'SLATE', 'PORCELAIN', 'NATURAL STONE'];
function FeaturedInventory({
  assetBase
}) {
  const stones = [{
    title: 'Bianco Superiore',
    cat: 'QUARTZITE',
    img: '/images/products/bianco-superiore.jpg',
    desc: 'Luminous white quartzite with whisper-fine taupe veining — quietly monumental.'
  }, {
    title: 'Calacatta Alaska Gold',
    cat: 'ELEMENTS QUARTZ',
    img: '/images/products/calacatta-alaska-gold.jpg',
    desc: 'Bright white quartz threaded with delicate gold veining.'
  }, {
    title: 'Azzurra Bay',
    cat: 'QUARTZITE',
    img: '/images/products/azzurra-bay.jpg',
    desc: 'Polished grey quartzite crossed by fine storm-line veining.'
  }, {
    title: 'Angola Black',
    cat: 'GRANITE',
    img: '/images/products/angola-black.jpg',
    desc: 'Dense jet-black granite with a fine, even grain — pure drama.'
  }, {
    title: 'Bianco Marina',
    cat: 'ELEMENTS QUARTZ',
    img: '/images/products/bianco-marina.jpg',
    desc: 'Soft white quartz with cloud-like movement for bright, seamless spaces.'
  }, {
    title: 'Alpine Valley',
    cat: 'GRANITE',
    img: '/images/products/alpine-valley.jpg',
    desc: 'Cream and charcoal granite in sweeping glacial currents.'
  }, {
    title: 'Aspen White',
    cat: 'MARBLE',
    img: '/images/products/aspen-white.jpg',
    desc: 'Crisp white stone with feathered grey drifts and a soft polish.'
  }, {
    title: 'Bianco Fantastico',
    cat: 'GRANITE',
    img: '/images/products/bianco-fantastico.jpg',
    desc: 'Polished 3cm — frost-white field scattered with bold charcoal flecks.'
  }, {
    title: 'Azul Platino',
    cat: 'GRANITE',
    img: '/images/products/azul-platino.jpg',
    desc: 'Polished 3cm — cool platinum grey with a fine, even speckle.'
  }, {
    title: 'Absolute White',
    cat: 'QUARTZITE',
    img: '/images/products/absolute-white.jpg',
    desc: 'Polished 3cm — pure white field with soft, drifting grey veins.'
  }, {
    title: 'Midnight Galaxy',
    cat: 'GRANITE',
    img: '/images/stone-double-charge-640x480.png',
    desc: 'Deep navy granite with reflective speckles — adds drama and depth to any space.'
  }, {
    title: 'Romani Ivory',
    cat: 'PORCELAIN',
    img: '/images/stone-slab-porcelain-640x480.png',
    desc: 'Warm ivory porcelain slab with soft striations and a matte finish.'
  }, {
    title: 'Obsidian Edge',
    cat: 'QUARTZITE',
    img: '/images/stone-ceramic-wall-640x480.png',
    desc: 'Deep volcanic black with subtle texture, made for statement walls and floors.'
  }];
  // One card per page on mobile (the pager arrows become a single-image
  // carousel); three across on tablet/desktop.
  const [perPage, setPerPage] = React.useState(() => typeof window !== 'undefined' && window.innerWidth <= 640 ? 1 : 3);
  React.useEffect(() => {
    const onResize = () => setPerPage(window.innerWidth <= 640 ? 1 : 3);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  const pool = stones.filter(s => !isExclusiveOnly(s.title));
  const tabs = ['ALL', ...FS_SLAB_ORDER.filter(c => pool.some(s => s.cat === c))];
  const [tab, setTab] = React.useState('ALL');
  const [q, setQ] = React.useState('');
  const [page, setPage] = React.useState(0);
  const filtered = pool.filter(s => (tab === 'ALL' || s.cat === tab) && (q.trim() === '' || (s.title + ' ' + s.cat + ' ' + s.desc).toLowerCase().includes(q.trim().toLowerCase())));
  const maxPage = Math.max(0, Math.ceil(filtered.length / perPage) - 1);
  const safePage = Math.min(page, maxPage);
  const visible = filtered.slice(safePage * perPage, safePage * perPage + perPage);
  // Mouse drag-to-scroll for the filter pills (touch swipe is native).
  const tabsRef = React.useRef(null);
  const tabDrag = React.useRef({
    down: false,
    startX: 0,
    startLeft: 0,
    moved: false
  });
  const onTabDown = e => {
    const el = tabsRef.current;
    if (!el) return;
    tabDrag.current = {
      down: true,
      startX: e.clientX,
      startLeft: el.scrollLeft,
      moved: false
    };
    el.setPointerCapture && el.setPointerCapture(e.pointerId);
  };
  const onTabMove = e => {
    const el = tabsRef.current;
    if (!el || !tabDrag.current.down) return;
    const dx = e.clientX - tabDrag.current.startX;
    if (Math.abs(dx) > 3) tabDrag.current.moved = true;
    el.scrollLeft = tabDrag.current.startLeft - dx;
  };
  const onTabUp = () => {
    tabDrag.current.down = false;
  };
  const selectTab = t => {
    if (tabDrag.current.moved) return;
    setTab(t);
    setPage(0);
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "fs-collections fs2-featured",
    "data-screen-label": "Featured Inventory"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs-collections__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Curated Selections"), /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("em", {
    className: "fs-accent"
  }, "Featured"), " Inventory"), /*#__PURE__*/React.createElement("p", null, "From rare marble to engineered porcelain \u2014 every slab photographed, measured and ready to reserve.")), /*#__PURE__*/React.createElement("div", {
    className: "fs-collections__controls"
  }, /*#__PURE__*/React.createElement(__ds_scope.SearchInput, {
    value: q,
    onChange: v => {
      setQ(v);
      setPage(0);
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fs-tabs",
    role: "tablist",
    ref: tabsRef,
    onPointerDown: onTabDown,
    onPointerMove: onTabMove,
    onPointerUp: onTabUp,
    onPointerCancel: onTabUp
  }, tabs.map(t => /*#__PURE__*/React.createElement(__ds_scope.Pill, {
    key: t,
    active: tab === t,
    onClick: () => selectTab(t)
  }, t)))), /*#__PURE__*/React.createElement("div", {
    className: "fs-collections__grid",
    "aria-live": "polite"
  }, visible.map(s => /*#__PURE__*/React.createElement(__ds_scope.StoneCard, {
    key: s.title,
    image: assetBase + s.img,
    title: s.title,
    description: s.desc,
    badges: badgesFor(s.title)
  })), visible.length === 0 ? /*#__PURE__*/React.createElement("p", {
    className: "fs-empty"
  }, "No stones match your search.") : null), /*#__PURE__*/React.createElement("div", {
    className: "fs-arrows"
  }, /*#__PURE__*/React.createElement(__ds_scope.ArrowButton, {
    direction: "prev",
    disabled: safePage === 0,
    onClick: () => setPage(safePage - 1)
  }), /*#__PURE__*/React.createElement(__ds_scope.ArrowButton, {
    direction: "next",
    disabled: safePage >= maxPage,
    onClick: () => setPage(safePage + 1)
  })), /*#__PURE__*/React.createElement("div", {
    className: "fs2-featured__cta"
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    href: "./live-inventory.html?highlight=featured"
  }, "View All Featured Inventory")));
}

/* ── Why Fabstone — copy left, tall image with frosted badge right ── */
function WhyFabstone({
  assetBase,
  onPrimary,
  onSecondary
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "fs2-about",
    "data-screen-label": "Why Fabstone"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs2-about__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs2-about__copy"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "About Us"), /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("em", {
    className: "fs-accent"
  }, "Why"), " Fabstone"), /*#__PURE__*/React.createElement("p", null, "For over two decades, Fabstone has sourced natural stone directly from quarries across Italy, Brazil and India \u2014 no middlemen, no compromises."), /*#__PURE__*/React.createElement("p", null, "Every slab in our showroom is hand-selected, digitally photographed and tracked in live inventory, so what you reserve is exactly what arrives on site."), /*#__PURE__*/React.createElement("p", null, "Our in-house fabrication team matches veining across seams and edges, turning raw stone into surfaces built for the way you live."), /*#__PURE__*/React.createElement("div", {
    className: "fs2-about__actions"
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    onClick: onPrimary
  }, "Live Inventory"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outline-dark",
    onClick: onSecondary
  }, "Learn More"))), /*#__PURE__*/React.createElement("div", {
    className: "fs2-about__media"
  }, /*#__PURE__*/React.createElement("img", {
    src: assetBase + '/images/about-why-fabstone-768x1024.jpg',
    alt: "",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("span", {
    className: "fs2-about__badge"
  }, /*#__PURE__*/React.createElement("span", null, "Matching Materials"), /*#__PURE__*/React.createElement("strong", null, "98% Match")))));
}

/* ── Location — map + phone mockup on dark ── */
function LocationSection({
  assetBase,
  onCta
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "fs2-location",
    id: "location",
    "data-screen-label": "Location"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs2-location__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs2-location__head"
  }, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("em", {
    className: "fs-accent"
  }, "Our"), " Location")), /*#__PURE__*/React.createElement("div", {
    className: "fs2-location__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs2-location__map"
  }, /*#__PURE__*/React.createElement("iframe", {
    src: "https://maps.google.com/maps?q=2514+Sam+Rayburn+Hwy,+Melissa,+TX+75454&z=16&output=embed",
    title: "Fabstone \u2014 2514 Sam Rayburn Hwy, Melissa, TX 75454",
    loading: "lazy"
  })), /*#__PURE__*/React.createElement("div", {
    className: "fs2-location__phone"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs2-phone"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs2-phone__bar",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)), /*#__PURE__*/React.createElement("div", {
    className: "fs2-phone__screen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs2-phone__hero",
    style: {
      backgroundImage: 'url(' + assetBase + '/images/hero-poster-scaled.png)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs2-phone__hero-overlay",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "fs2-phone__hero-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs2-phone__eb"
  }, "Premium Natural Stone & Surfaces"), /*#__PURE__*/React.createElement("div", {
    className: "fs2-phone__title"
  }, "Elevated by", /*#__PURE__*/React.createElement("em", null, "Nature")), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "fs2-phone__cta",
    onClick: e => {
      e.preventDefault();
      onCta && onCta();
    }
  }, "Contact Us"))), /*#__PURE__*/React.createElement("div", {
    className: "fs2-phone__chip"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs2-phone__chip-eb"
  }, "Live Inventory"), /*#__PURE__*/React.createElement("div", {
    className: "fs2-phone__chip-title"
  }, "Browse Slabs in Real Time"))))))));
}

/* ── Exclusive Products — 3×2 mosaic, first card spans 2 rows ── */
function ExclusiveProducts({
  assetBase,
  onExplore
}) {
  const products = [{
    hero: true,
    tag: 'Quartz',
    title: 'Calacatta Alaska Gold',
    img: '/images/products/calacatta-alaska-gold.jpg',
    desc: 'Bright white quartz threaded with delicate gold veining — the ultimate statement surface.'
  }, {
    tag: 'Granite',
    title: 'Angola Black',
    img: '/images/products/angola-black.jpg',
    desc: 'Dense jet-black granite with a fine, even grain, designed for statement islands and walls.'
  }, {
    tag: 'Quartzite',
    title: 'Bianco Superiore',
    img: '/images/products/bianco-superiore.jpg',
    desc: 'Luminous white quartzite with whisper-fine taupe veining — quietly monumental.'
  }, {
    tag: 'Granite',
    title: 'Alpine Valley',
    img: '/images/products/alpine-valley.jpg',
    desc: 'Cream and charcoal granite in sweeping glacial currents.'
  }, {
    tag: 'Quartzite',
    title: 'Azzurra Bay',
    img: '/images/products/azzurra-bay.jpg',
    desc: 'Polished grey quartzite crossed by fine storm-line veining.'
  }];
  // Mobile: horizontal scroller — mouse drag + nav buttons (touch swipe native).
  const gridRef = React.useRef(null);
  const drag = React.useRef({
    down: false,
    startX: 0,
    startLeft: 0,
    moved: false
  });
  const onDown = e => {
    const el = gridRef.current;
    if (!el) return;
    drag.current = {
      down: true,
      startX: e.clientX,
      startLeft: el.scrollLeft,
      moved: false
    };
    el.setPointerCapture && el.setPointerCapture(e.pointerId);
  };
  const onMove = e => {
    const el = gridRef.current;
    if (!el || !drag.current.down) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 3) drag.current.moved = true;
    el.scrollLeft = drag.current.startLeft - dx;
  };
  const onUp = () => {
    drag.current.down = false;
  };
  const onClickCapture = e => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
    }
  };
  const page = dir => {
    const el = gridRef.current;
    if (!el) return;
    el.scrollBy({
      left: dir * el.clientWidth * 0.85,
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "fs2-exclusive",
    "data-screen-label": "Exclusive Products"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs2-exclusive__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Favorites"), /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("em", {
    className: "fs-accent"
  }, "Exclusive"), " Products"), /*#__PURE__*/React.createElement("p", null, "Limited-run slabs reserved for Fabstone clients \u2014 when they're gone, they're gone.")), /*#__PURE__*/React.createElement("div", {
    className: "fs2-exclusive__grid",
    ref: gridRef,
    onPointerDown: onDown,
    onPointerMove: onMove,
    onPointerUp: onUp,
    onPointerCancel: onUp,
    onClickCapture: onClickCapture
  }, products.map(p => /*#__PURE__*/React.createElement(__ds_scope.ExclusiveCard, {
    key: p.title,
    hero: p.hero,
    image: assetBase + p.img,
    tag: p.tag,
    title: p.title,
    description: p.desc,
    badges: badgesFor(p.title).filter(b => b.cls !== 'is-exclusive')
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fs-arrows fs2-exclusive__arrows"
  }, /*#__PURE__*/React.createElement(__ds_scope.ArrowButton, {
    direction: "prev",
    onClick: () => page(-1)
  }), /*#__PURE__*/React.createElement(__ds_scope.ArrowButton, {
    direction: "next",
    onClick: () => page(1)
  })), /*#__PURE__*/React.createElement("div", {
    className: "fs2-exclusive__cta"
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    onClick: onExplore
  }, "Explore Exclusive Products")));
}

/* ── Gallery — edge-to-edge mosaic ── */
function GallerySection({
  assetBase
}) {
  const photos = [['burlington-pearl-install-800x600.jpg', 'Burlington Pearl Install'], ['cappuccino-install-800x600.jpg', 'Cappuccino Install'], ['kitchen-install-6952-800x600.jpg', 'Kitchen Install'], ['kitchen-island-6953-800x600.jpg', 'Kitchen Island'], ['kitchen-counter-6954-800x600.jpg', 'Kitchen Counter'], ['kitchen-sink-6955-800x600.jpg', 'Kitchen Sink'], ['kitchen-counter-6956-800x600.jpg', 'Kitchen Counter'], ['kitchen-sink-6957-800x600.jpg', 'Kitchen Sink'], ['kitchen-counter-6958-800x600.jpg', 'Kitchen Counter'], ['bathroom-vanity-6959-800x600.jpg', 'Bathroom Vanity'], ['kitchen-island-6960-800x600.jpg', 'Kitchen Island'], ['install-photo-1-800x600.jpg', 'Install Photo'], ['install-photo-2-800x600.jpg', 'Install Photo'], ['bohemian-blend-800x600.jpg', 'Bohemian Blend'], ['carpet-04-800x600.jpg', 'Carpet Tile 04'], ['carpet-06-800x600.jpg', 'Carpet Tile 06']];
  const scrollerRef = React.useRef(null);
  const page = dir => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({
      left: dir * el.clientWidth * 0.7,
      behavior: 'smooth'
    });
  };
  const half = Math.ceil(photos.length / 2);
  const rows = [photos.slice(0, half), photos.slice(half)];
  return /*#__PURE__*/React.createElement("section", {
    className: "fs-gallery fs-gallery--scroll",
    id: "gallery",
    "data-screen-label": "Gallery"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs-gallery__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Highlights"), /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("em", {
    className: "fs-accent"
  }, "Our"), " Gallery"), /*#__PURE__*/React.createElement("p", null, "Recent installations from kitchens, baths and commercial spaces across Texas.")), /*#__PURE__*/React.createElement("div", {
    className: "fs-gallery__scroller",
    ref: scrollerRef
  }, rows.map((row, r) => /*#__PURE__*/React.createElement("div", {
    className: "fs-gallery__row",
    key: r
  }, row.map(([file, alt], i) => /*#__PURE__*/React.createElement("figure", {
    key: file + i
  }, /*#__PURE__*/React.createElement("img", {
    src: assetBase + '/images/' + file,
    alt: alt,
    loading: "lazy"
  })))))), /*#__PURE__*/React.createElement("div", {
    className: "fs-arrows"
  }, /*#__PURE__*/React.createElement(__ds_scope.ArrowButton, {
    direction: "prev",
    onClick: () => page(-1)
  }), /*#__PURE__*/React.createElement(__ds_scope.ArrowButton, {
    direction: "next",
    onClick: () => page(1)
  })));
}
Object.assign(__ds_scope, { HomeHero, TrustStrip, FeaturedInventory, WhyFabstone, LocationSection, ExclusiveProducts, GallerySection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeSections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/RepsDirectory.jsx
try { (() => {
// Fabstone website UI kit — shared sales-rep directory.
// Used by both the About page's "Find Your Rep" section and the dedicated
// reps.html page, so the roster lives in exactly one place.
//
// PLACEHOLDER DATA — swap REPS for the real roster + direct lines. Each rep
// owns a region within the 15 south-central states Fabstone serves.
const REPS = [{
  region: 'North Texas & Oklahoma',
  states: ['N. Texas', 'Oklahoma'],
  name: 'Jordan Avery',
  email: 'jordan@fabsg.com',
  phone: '972-542-9678'
}, {
  region: 'Central & South Texas',
  states: ['Austin', 'San Antonio', 'Houston'],
  name: 'Marisol Reyes',
  email: 'marisol@fabsg.com',
  phone: '972-542-9679'
}, {
  region: 'Louisiana & Mississippi',
  states: ['Louisiana', 'Mississippi'],
  name: 'Dale Fontenot',
  email: 'dale@fabsg.com',
  phone: '972-542-9680'
}, {
  region: 'Arkansas & Tennessee',
  states: ['Arkansas', 'Tennessee'],
  name: 'Priya Nair',
  email: 'priya@fabsg.com',
  phone: '972-542-9681'
}, {
  region: 'Kansas & Missouri',
  states: ['Kansas', 'Missouri'],
  name: 'Garrett Cole',
  email: 'garrett@fabsg.com',
  phone: '972-542-9682'
}, {
  region: 'New Mexico & Colorado',
  states: ['New Mexico', 'Colorado'],
  name: 'Alejandra Soto',
  email: 'alex@fabsg.com',
  phone: '972-542-9683'
}];
function RepIconMail() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "2.5",
    y: "4.5",
    width: "19",
    height: "15",
    rx: "3",
    stroke: "currentColor",
    strokeWidth: "1.6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 7l8 5.5L20 7",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
function RepIconPhone() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6.5 3.5h3l1.5 4-2 1.5a12 12 0 005.5 5.5l1.5-2 4 1.5v3c0 1.1-.9 2-2 2A16 16 0 014.5 5.5c0-1.1.9-2 2-2z",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinejoin: "round"
  }));
}

// Region filter (light pills) + responsive grid of rep contact cards.
function RepsDirectory() {
  const [region, setRegion] = React.useState('All');
  const filters = ['All', ...REPS.map(r => r.region)];
  const visible = region === 'All' ? REPS : REPS.filter(r => r.region === region);
  // Mobile: region filter becomes a single-row drag/swipe scroller.
  const filterRef = React.useRef(null);
  const fDrag = React.useRef({
    down: false,
    startX: 0,
    startLeft: 0,
    moved: false
  });
  const onFDown = e => {
    const el = filterRef.current;
    if (!el) return;
    fDrag.current = {
      down: true,
      startX: e.clientX,
      startLeft: el.scrollLeft,
      moved: false
    };
    el.setPointerCapture && el.setPointerCapture(e.pointerId);
  };
  const onFMove = e => {
    const el = filterRef.current;
    if (!el || !fDrag.current.down) return;
    const dx = e.clientX - fDrag.current.startX;
    if (Math.abs(dx) > 3) fDrag.current.moved = true;
    el.scrollLeft = fDrag.current.startLeft - dx;
  };
  const onFUp = () => {
    fDrag.current.down = false;
  };
  const onFClickCapture = e => {
    if (fDrag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "fs-about-reps__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs-about-reps__filter",
    role: "tablist",
    "aria-label": "Filter reps by region",
    ref: filterRef,
    onPointerDown: onFDown,
    onPointerMove: onFMove,
    onPointerUp: onFUp,
    onPointerCancel: onFUp,
    onClickCapture: onFClickCapture
  }, filters.map(r => /*#__PURE__*/React.createElement("button", {
    type: "button",
    key: r,
    className: 'fs-pill fs-pill--light' + (region === r ? ' is-active' : ''),
    "aria-pressed": region === r,
    onClick: () => setRegion(r)
  }, r === 'All' ? 'All Regions' : r))), /*#__PURE__*/React.createElement("div", {
    className: "fs-about-reps__grid",
    "aria-live": "polite"
  }, visible.map(rep => /*#__PURE__*/React.createElement("article", {
    className: "fs-rep-card",
    key: rep.region
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "fs-rep-card__eyebrow"
  }, "Regional Rep"), /*#__PURE__*/React.createElement("h3", {
    className: "fs-rep-card__region"
  }, rep.region)), /*#__PURE__*/React.createElement("div", {
    className: "fs-rep-card__states"
  }, rep.states.map(s => /*#__PURE__*/React.createElement("span", {
    className: "fs-rep-state",
    key: s
  }, s))), /*#__PURE__*/React.createElement("div", {
    className: "fs-rep-card__person"
  }, /*#__PURE__*/React.createElement("p", {
    className: "fs-rep-card__name"
  }, rep.name), /*#__PURE__*/React.createElement("p", {
    className: "fs-rep-card__role"
  }, "Account Manager"), /*#__PURE__*/React.createElement("div", {
    className: "fs-rep-card__contact"
  }, /*#__PURE__*/React.createElement("a", {
    href: 'mailto:' + rep.email
  }, /*#__PURE__*/React.createElement(RepIconMail, null), rep.email), /*#__PURE__*/React.createElement("a", {
    href: 'tel:' + rep.phone.replace(/[^0-9]/g, '')
  }, /*#__PURE__*/React.createElement(RepIconPhone, null), rep.phone)))))));
}
Object.assign(__ds_scope, { REPS, RepsDirectory });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/RepsDirectory.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ios-frame.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports (to window): IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard
//
// Usage — wrap your screen content in <IOSDevice> to get the bezel, status bar
// and home indicator (props: title, dark, keyboard):
//
//   <IOSDevice title="Settings">
//     ...your screen content...
//   </IOSDevice>
//   <IOSDevice dark title="Search" keyboard>…</IOSDevice>
/* END USAGE */

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 48,
      overflow: 'hidden',
      position: 'relative',
      background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 37,
      borderRadius: 24,
      background: '#000',
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(IOSStatusBar, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
    title: title,
    dark: dark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 34,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 8,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 139,
      height: 5,
      borderRadius: 100,
      background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
    }
  })));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ios-frame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/siteNav.jsx
try { (() => {
// Fabstone website UI kit — canonical primary navigation.
// One source of truth so every page's header is identical and all links resolve.
// All pages live in this folder, so relative ./*.html links work everywhere.
const SITE_NAV = [{
  label: 'Live Inventory',
  href: './live-inventory.html'
}, {
  label: 'Featured',
  href: './live-inventory.html?highlight=featured'
}, {
  label: 'About Us',
  href: './about.html',
  children: [{
    label: 'Our Team',
    href: './about.html#about-team'
  }, {
    label: 'Find a Rep',
    href: './reps.html'
  }]
}, {
  label: 'Location',
  href: './index.html#location'
}, {
  label: 'Gallery',
  href: './index.html#gallery'
}];
Object.assign(__ds_scope, { SITE_NAV });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/siteNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AboutPage.jsx
try { (() => {
// Fabstone website UI kit — About Us page.
// Built from the home page's visual language (dark stone-texture bands, red
// italic ems, copper/red eyebrows, the fs2-about split + frosted badge, the
// shared red CTA banner). Copy is the client's real story: privately owned
// since 2006, four-acre yard in Melissa TX, direct imports, 15 states served,
// 150+ years of collective experience. Story / Gallery / CTA reuse existing
// classes and components verbatim.

// Re-exported so existing importers (RepsPage) keep working.

const STATS = [{
  num: '2006',
  label: 'Privately owned & operated since'
}, {
  num: '4',
  em: ' acres',
  label: 'Slab yard in Melissa, Texas'
}, {
  num: '15',
  label: 'Southern-central states served'
}, {
  num: '150',
  em: '+',
  label: 'Years of collective experience'
}];
const PROCESS = [{
  n: '01',
  h: 'Imported Direct',
  p: 'We bring slabs in directly from quarries in Brazil, India, Europe and beyond — no middlemen, better stone, better pricing.'
}, {
  n: '02',
  h: 'Hand-Selected',
  p: 'Every block is chosen for quality and character, then brought to our four-acre yard in Melissa, Texas.'
}, {
  n: '03',
  h: 'Live Inventory',
  p: 'Each slab is photographed and tracked in real time, so what you reserve is exactly what arrives on site.'
}, {
  n: '04',
  h: 'Fabrication & Install',
  p: 'Long-term partners who excel in the trade cut, finish and install — backed by 150+ years of collective craft.'
}];
const TEAM = [{
  role: 'Founder & Owner',
  dept: 'Leadership'
}, {
  role: 'Sales Director',
  dept: 'Sales'
}, {
  role: 'Operations Manager',
  dept: 'Operations'
}, {
  role: 'Fabrication Lead',
  dept: 'Production'
}];
function AboutPage({
  assetBase = '../../assets'
}) {
  const go = href => {
    window.location.href = href;
  };
  const contact = () => {
    window.location.href = 'mailto:sales@fabsg.com';
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "fs-body",
    "data-screen-label": "About Us"
  }, /*#__PURE__*/React.createElement(__ds_scope.SiteHeader, {
    logo: assetBase + '/images/logo-fabstone.png',
    homeHref: "./index.html",
    activeItem: "About Us",
    onCta: contact,
    nav: __ds_scope.SITE_NAV
  }), /*#__PURE__*/React.createElement("main", {
    className: "fs-main"
  }, /*#__PURE__*/React.createElement("section", {
    className: "fs-about-hero",
    "data-screen-label": "About \u2014 Hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs-about-hero__inner"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "fs-breadcrumb",
    "aria-label": "Breadcrumb"
  }, /*#__PURE__*/React.createElement("a", {
    href: "./index.html"
  }, "Home"), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "/"), /*#__PURE__*/React.createElement("span", {
    "aria-current": "page"
  }, "About Us")), /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "About Us"), /*#__PURE__*/React.createElement("h1", null, "Elevated by ", /*#__PURE__*/React.createElement("em", null, "Nature")), /*#__PURE__*/React.createElement("p", null, "Premium natural stone and quartz \u2014 imported direct, hand-selected and tracked in live inventory at our Melissa, Texas yard since 2006."))), /*#__PURE__*/React.createElement("section", {
    className: "fs-about-story",
    "data-screen-label": "About \u2014 Story"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs-about-story__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs-about-story__media"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs-about-story__frame"
  }, /*#__PURE__*/React.createElement("img", {
    src: assetBase + '/images/about-why-fabstone-768x1024.jpg',
    alt: "Fabstone slab yard in Melissa, Texas",
    loading: "lazy"
  })), /*#__PURE__*/React.createElement("span", {
    className: "fs-about-story__stamp"
  }, /*#__PURE__*/React.createElement("small", null, "Est."), /*#__PURE__*/React.createElement("strong", null, "2006"))), /*#__PURE__*/React.createElement("div", {
    className: "fs-about-story__copy"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Our Story"), /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("em", {
    className: "fs-accent"
  }, "Family"), " Owned Since 2006"), /*#__PURE__*/React.createElement("p", {
    className: "fs-about-story__lead"
  }, "Four acres of hand-selected stone in Melissa, Texas \u2014 from builder-grade surfaces to semi-precious granite, marble and quartzite."), /*#__PURE__*/React.createElement("p", null, "Fabstone has been privately owned and operated since 2006, importing our collections direct from Brazil, India, Europe and beyond \u2014 no middlemen, no compromises."), /*#__PURE__*/React.createElement("p", null, "We currently serve 15 southern-central states alongside long-term partners who excel in the slab and fabrication industry, backed by more than 150 years of collective experience."), /*#__PURE__*/React.createElement("div", {
    className: "fs2-about__actions"
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    href: "./live-inventory.html"
  }, "Browse Live Inventory"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outline-dark",
    onClick: contact
  }, "Schedule a Visit"))))), /*#__PURE__*/React.createElement("section", {
    className: "fs-about-stats",
    "data-screen-label": "About \u2014 Stats"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs-about-stats__inner"
  }, STATS.map(s => /*#__PURE__*/React.createElement("div", {
    className: "fs-about-stat",
    key: s.label
  }, /*#__PURE__*/React.createElement("p", {
    className: "fs-about-stat__num"
  }, s.num, s.em ? /*#__PURE__*/React.createElement("em", null, s.em) : null), /*#__PURE__*/React.createElement("p", {
    className: "fs-about-stat__label"
  }, s.label))))), /*#__PURE__*/React.createElement("section", {
    className: "fs-about-process",
    "data-screen-label": "About \u2014 How We Work"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs-spaces__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Our Process"), /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("em", null, "How"), " We Work"), /*#__PURE__*/React.createElement("p", null, "From the quarry to your countertop, every slab moves through four deliberate steps.")), /*#__PURE__*/React.createElement("div", {
    className: "fs-about-process__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs-about-process__grid"
  }, PROCESS.map(step => /*#__PURE__*/React.createElement("div", {
    className: "fs-about-step",
    key: step.n
  }, /*#__PURE__*/React.createElement("span", {
    className: "fs-about-step__num"
  }, step.n), /*#__PURE__*/React.createElement("span", {
    className: "fs-about-step__rule",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("h3", null, step.h), /*#__PURE__*/React.createElement("p", null, step.p)))))), /*#__PURE__*/React.createElement("section", {
    className: "fs-about-team",
    id: "about-team",
    "data-screen-label": "About \u2014 Team"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs-spaces__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Our People"), /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("em", null, "The"), " Fabstone Team"), /*#__PURE__*/React.createElement("p", null, "The people who source, photograph and fabricate every Fabstone slab.")), /*#__PURE__*/React.createElement("div", {
    className: "fs-about-team__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs-about-team__grid"
  }, TEAM.map(m => /*#__PURE__*/React.createElement("div", {
    className: "fs-about-member",
    key: m.role
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs-about-member__photo"
  }, /*#__PURE__*/React.createElement("span", null, "Add headshot")), /*#__PURE__*/React.createElement("div", {
    className: "fs-about-member__body"
  }, /*#__PURE__*/React.createElement("h3", null, m.role), /*#__PURE__*/React.createElement("p", null, m.dept))))), /*#__PURE__*/React.createElement("div", {
    className: "fs-about-team__cta"
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    href: "./reps.html"
  }, "Find My Sales Rep")))), /*#__PURE__*/React.createElement(__ds_scope.GallerySection, {
    assetBase: assetBase
  }), /*#__PURE__*/React.createElement(__ds_scope.CtaBanner, {
    eyebrow: "Visit Us",
    title: "Schedule a Shopping Appointment",
    lede: "Come hand-pick your slab at our Melissa, TX yard \u2014 or reserve online from live inventory.",
    primaryLabel: "Contact Us",
    secondaryLabel: "Live Inventory",
    onPrimary: contact,
    onSecondary: () => go('./live-inventory.html')
  })), /*#__PURE__*/React.createElement(__ds_scope.SiteFooter, {
    logo: assetBase + '/images/logo-fabstone.png'
  }));
}
Object.assign(__ds_scope, { SITE_NAV: __ds_scope.SITE_NAV, AboutPage });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AboutPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomePage.jsx
try { (() => {
// Fabstone website UI kit — Home page (recreation of /home2/).
// Per client direction: the "SOCI + Elements" platform section is omitted
// and lorem-ipsum copy is replaced with realistic stone-industry copy.

function HomePage({
  assetBase = '../../assets'
}) {
  const go = href => {
    window.location.href = href;
  };
  const contact = () => {
    window.location.href = 'mailto:sales@fabsg.com';
  };

  // Scroll to #location / #gallery when arriving via a hash link from another page.
  React.useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.slice(1);
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    };
    const t = setTimeout(scrollToHash, 350);
    window.addEventListener('hashchange', scrollToHash);
    return () => {
      clearTimeout(t);
      window.removeEventListener('hashchange', scrollToHash);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "fs-body",
    "data-screen-label": "Home"
  }, /*#__PURE__*/React.createElement(__ds_scope.SiteHeader, {
    logo: assetBase + '/images/logo-fabstone.png',
    homeHref: "./index.html",
    onCta: contact,
    nav: __ds_scope.SITE_NAV
  }), /*#__PURE__*/React.createElement("main", {
    className: "fs-main"
  }, /*#__PURE__*/React.createElement(__ds_scope.HomeHero, {
    poster: assetBase + '/images/hero-poster-scaled.png'
  }), /*#__PURE__*/React.createElement(__ds_scope.TrustStrip, {
    assetBase: assetBase
  }), /*#__PURE__*/React.createElement(__ds_scope.FeaturedInventory, {
    assetBase: assetBase
  }), /*#__PURE__*/React.createElement(__ds_scope.WhyFabstone, {
    assetBase: assetBase,
    onPrimary: () => go('./live-inventory.html'),
    onSecondary: () => go('./about.html')
  }), /*#__PURE__*/React.createElement(__ds_scope.LocationSection, {
    assetBase: assetBase,
    onCta: contact
  }), /*#__PURE__*/React.createElement(__ds_scope.ExclusiveProducts, {
    assetBase: assetBase,
    onExplore: () => go('./live-inventory.html?highlight=exclusive')
  }), /*#__PURE__*/React.createElement(__ds_scope.GallerySection, {
    assetBase: assetBase
  }), /*#__PURE__*/React.createElement(__ds_scope.CtaBanner, {
    onPrimary: contact,
    onSecondary: () => go('./live-inventory.html')
  })), /*#__PURE__*/React.createElement(__ds_scope.SiteFooter, {
    logo: assetBase + '/images/logo-fabstone.png'
  }));
}
Object.assign(__ds_scope, { HomePage });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/InventoryPage.jsx
try { (() => {
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

function dotStyle(name) {
  const hex = __ds_scope.SwatchHex[name];
  if (hex === 'multi') {
    return {
      backgroundImage: 'conic-gradient(#8C4A35, #B8924A, #55634C, #3F5E78, #6B4A33, #8C4A35)'
    };
  }
  return {
    background: hex || '#cfcabf'
  };
}

// Card corner badges — literal flags set on the product (exclusive > featured > sale).
function CardBadges({
  product
}) {
  const keys = ['exclusive', 'featured', 'sale'].filter(k => product[k]);
  if (!keys.length) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "fs-inv-card__badges"
  }, keys.map(k => /*#__PURE__*/React.createElement("span", {
    key: k,
    className: 'fs-badge ' + __ds_scope.BadgeMeta[k].cls
  }, __ds_scope.BadgeMeta[k].label)));
}

// Shared media: real photo, or a tinted "image coming soon" placeholder.
function InvMedia({
  product,
  assetBase,
  cls
}) {
  const src = product.imgUrl || (product.img ? assetBase + '/images/' + product.img : null);
  if (src) return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: product.name,
    loading: "lazy"
  });
  return /*#__PURE__*/React.createElement("div", {
    className: 'fs-ph ' + (cls || ''),
    style: dotStyle(product.color)
  }, /*#__PURE__*/React.createElement("span", {
    className: "fs-ph__scrim",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "fs-ph__tag"
  }, product.tag), /*#__PURE__*/React.createElement("span", {
    className: "fs-ph__note"
  }, "Image coming soon"));
}
function CheckFacet({
  label,
  options,
  counts,
  selected,
  onToggle
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "fs-facet"
  }, /*#__PURE__*/React.createElement("h3", null, label), /*#__PURE__*/React.createElement("ul", {
    className: "fs-facet__list"
  }, options.map(opt => {
    const n = counts[opt] || 0;
    const on = selected.has(opt);
    return /*#__PURE__*/React.createElement("li", {
      key: opt
    }, /*#__PURE__*/React.createElement("label", {
      className: 'fs-facet__opt' + (!n && !on ? ' is-empty' : '')
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: on,
      disabled: !n && !on,
      onChange: () => onToggle(opt)
    }), /*#__PURE__*/React.createElement("span", null, opt), /*#__PURE__*/React.createElement("span", {
      className: "count"
    }, n)));
  })));
}
function SwatchFacet({
  label,
  options,
  counts,
  selected,
  onToggle
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "fs-facet"
  }, /*#__PURE__*/React.createElement("h3", null, label), /*#__PURE__*/React.createElement("ul", {
    className: "fs-facet__list"
  }, options.map(opt => {
    const n = counts[opt] || 0;
    const on = selected.has(opt);
    return /*#__PURE__*/React.createElement("li", {
      key: opt
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: 'fs-facet__swatch' + (on ? ' is-active' : ''),
      disabled: !n && !on,
      onClick: () => onToggle(opt)
    }, /*#__PURE__*/React.createElement("span", {
      className: "fs-facet__dot",
      style: dotStyle(opt)
    }), /*#__PURE__*/React.createElement("span", null, opt), /*#__PURE__*/React.createElement("span", {
      className: "count"
    }, n)));
  })));
}
function InvCard({
  product,
  assetBase
}) {
  return /*#__PURE__*/React.createElement("a", {
    className: "fs-inv-card",
    href: './product.html?item=' + product.id
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs-inv-card__media"
  }, /*#__PURE__*/React.createElement(CardBadges, {
    product: product
  }), /*#__PURE__*/React.createElement(InvMedia, {
    product: product,
    assetBase: assetBase
  })), /*#__PURE__*/React.createElement("div", {
    className: "fs-inv-card__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fs-inv-card__tag"
  }, product.tag), /*#__PURE__*/React.createElement("h3", {
    className: "fs-inv-card__title"
  }, product.name), /*#__PURE__*/React.createElement("span", {
    className: "fs-inv-card__meta"
  }, product.meta)));
}

// Adaptive facets for the selected department(s):
//  • exactly 1 department → that department's full adaptive facet list (unchanged).
//  • 2+ departments     → a compact UNIVERSAL set (Color/Finish, Material, Brand)
//    built from the values actually present, so it never shows an empty facet.
const UNIVERSAL_FACETS = [{
  key: 'color',
  label: 'Color / Finish',
  swatch: true
}, {
  key: 'material',
  label: 'Material'
}, {
  key: 'brand',
  label: 'Brand'
}];
function buildFacets(deptList) {
  if (deptList.length === 1) return __ds_scope.DepartmentFacets[deptList[0]];
  if (deptList.length === 0) return [];
  const pool = __ds_scope.InventoryProducts.filter(p => deptList.includes(p.department));
  const out = [];
  for (const u of UNIVERSAL_FACETS) {
    const order = [];
    const seen = new Set();
    for (const d of deptList) {
      for (const f of __ds_scope.DepartmentFacets[d]) {
        if (f.key === u.key) for (const o of f.options) if (!seen.has(o)) {
          seen.add(o);
          order.push(o);
        }
      }
    }
    for (const p of pool) {
      const v = p[u.key];
      if (v && !seen.has(v)) {
        seen.add(v);
        order.push(v);
      }
    }
    const present = order.filter(o => pool.some(p => p[u.key] === o));
    if (present.length) out.push({
      ...u,
      options: present
    });
  }
  return out;
}

// Contextual band copy per active highlight.
function bandCopy(highlight) {
  switch (highlight) {
    case 'featured':
      return {
        eyebrow: 'Highlights',
        word: 'Featured',
        rest: ' Inventory',
        lede: 'Popular picks and current deals — hand-selected from across every department.'
      };
    case 'exclusive':
      return {
        eyebrow: 'Fabstone Originals',
        word: 'Exclusive',
        rest: ' Collection',
        lede: 'Limited-run, Fabstone-branded surfaces and supplies you won\u2019t find anywhere else.'
      };
    case 'sale':
      return {
        eyebrow: 'Limited Time',
        word: 'On Sale',
        rest: ' Now',
        lede: 'Current price drops across the yard \u2014 reserve before they\u2019re gone.'
      };
    default:
      return {
        eyebrow: 'Browse the Catalog',
        word: 'Live',
        rest: ' Inventory',
        lede: 'Every slab, sink, tile and fixture in our Melissa, TX yard \u2014 photographed, measured and updated in real time.'
      };
  }
}
function InventoryPage({
  assetBase = '../../assets',
  initialHighlight = null,
  initialDept = null
}) {
  const [highlight, setHighlight] = React.useState(initialHighlight);
  const [depts, setDepts] = React.useState(() => new Set(initialHighlight ? __ds_scope.Departments : [initialDept || __ds_scope.Departments[0]]));
  const [q, setQ] = React.useState('');
  const [sel, setSel] = React.useState({});
  const [perPage, setPerPage] = React.useState(9);
  const [page, setPage] = React.useState(0);
  const [filtersOpen, setFiltersOpen] = React.useState(false); // collapsed on mobile; CSS keeps it open on desktop

  // Deep-link: ?highlight=featured|exclusive|sale and ?dept=<name>
  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const hl = params.get('highlight');
    const dp = params.get('dept');
    const qq = params.get('q');
    if (qq) setQ(qq);
    if (hl && __ds_scope.Highlights.some(h => h.key === hl)) {
      setHighlight(hl);
      setDepts(new Set(__ds_scope.Departments));
    } else if (dp && __ds_scope.Departments.includes(dp)) {
      setDepts(new Set([dp]));
    }
  }, []);
  const activeDepts = __ds_scope.Departments.filter(d => depts.has(d));
  const facets = buildFacets(activeDepts);
  const sizeOf = key => sel[key] ? sel[key].size : 0;
  const hlMatch = p => highlight ? __ds_scope.Highlights.find(h => h.key === highlight).match(p) : true;
  const toggleDept = d => {
    setSel({});
    setPage(0);
    setDepts(prev => {
      const next = new Set(prev);
      next.has(d) ? next.delete(d) : next.add(d);
      return next;
    });
  };
  const allDepts = () => {
    setDepts(new Set(__ds_scope.Departments));
    setSel({});
    setPage(0);
  };
  const pickHighlight = key => {
    setHighlight(key);
    setDepts(new Set(__ds_scope.Departments));
    setSel({});
    setPage(0);
  };
  const toggle = (key, opt) => {
    setSel(prev => {
      const next = new Set(prev[key] || []);
      next.has(opt) ? next.delete(opt) : next.add(opt);
      return {
        ...prev,
        [key]: next
      };
    });
    setPage(0);
  };
  const clearAll = () => {
    setSel({});
    setQ('');
    setHighlight(null);
    setPage(0);
  };
  const matchesSearch = p => q.trim() === '' || (p.name + ' ' + (p.tag || '') + ' ' + (p.material || '') + ' ' + (p.brand || '') + ' ' + (p.color || '')).toLowerCase().includes(q.trim().toLowerCase());
  const matchesFacets = (p, skipKey) => facets.every(({
    key
  }) => key === skipKey || sizeOf(key) === 0 || sel[key] && sel[key].has(p[key]));
  const pool = __ds_scope.InventoryProducts.filter(p => depts.has(p.department));
  const filtered = pool.filter(p => matchesFacets(p, null) && matchesSearch(p) && hlMatch(p));

  // Department pill counts respect search + highlight (ignore dept/facet selection).
  const deptCounts = {};
  for (const d of __ds_scope.Departments) deptCounts[d] = __ds_scope.InventoryProducts.filter(p => p.department === d && matchesSearch(p) && hlMatch(p)).length;

  // Highlight chip counts respect search only (across the whole catalog).
  const hlCounts = {
    all: __ds_scope.InventoryProducts.filter(matchesSearch).length
  };
  for (const h of __ds_scope.Highlights) hlCounts[h.key] = __ds_scope.InventoryProducts.filter(p => matchesSearch(p) && h.match(p)).length;

  // Facet counts reflect the OTHER active facets + highlight (standard faceted search).
  const counts = {};
  for (const {
    key
  } of facets) {
    counts[key] = {};
    for (const p of pool) {
      if (matchesSearch(p) && hlMatch(p) && matchesFacets(p, key)) counts[key][p[key]] = (counts[key][p[key]] || 0) + 1;
    }
  }
  const maxPage = Math.max(0, Math.ceil(filtered.length / perPage) - 1);
  const safePage = Math.min(page, maxPage);
  const visible = filtered.slice(safePage * perPage, safePage * perPage + perPage);
  const activeFilterCount = (highlight ? 1 : 0) + facets.reduce((n, {
    key
  }) => n + sizeOf(key), 0);
  const anyFilter = q.trim() !== '' || !!highlight || facets.some(({
    key
  }) => sizeOf(key) > 0);
  const isAllDepts = activeDepts.length === __ds_scope.Departments.length;
  const copy = bandCopy(highlight);

  // Mouse drag-to-scroll for the department pill bar (touch swipe is native).
  const deptsRef = React.useRef(null);
  const deptDrag = React.useRef({
    down: false,
    startX: 0,
    startLeft: 0,
    moved: false
  });
  const onDeptDown = e => {
    const el = deptsRef.current;
    if (!el) return;
    deptDrag.current = {
      down: true,
      startX: e.clientX,
      startLeft: el.scrollLeft,
      moved: false
    };
    el.setPointerCapture && el.setPointerCapture(e.pointerId);
  };
  const onDeptMove = e => {
    const el = deptsRef.current;
    if (!el || !deptDrag.current.down) return;
    const dx = e.clientX - deptDrag.current.startX;
    if (Math.abs(dx) > 3) deptDrag.current.moved = true;
    el.scrollLeft = deptDrag.current.startLeft - dx;
  };
  const onDeptUp = () => {
    deptDrag.current.down = false;
  };
  const onDeptClickCapture = e => {
    if (deptDrag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
    }
  };
  const scopeLabel = activeDepts.length === 0 ? 'no department selected' : activeDepts.length === 1 ? 'in ' + activeDepts[0] : isAllDepts ? 'across all departments' : 'across ' + activeDepts.length + ' departments';
  return /*#__PURE__*/React.createElement("div", {
    className: "fs-body",
    "data-screen-label": "Live Inventory"
  }, /*#__PURE__*/React.createElement(__ds_scope.SiteHeader, {
    logo: assetBase + '/images/logo-fabstone.png',
    homeHref: "./index.html",
    activeItem: highlight ? 'Featured' : 'Live Inventory',
    nav: __ds_scope.SITE_NAV
  }), /*#__PURE__*/React.createElement("main", {
    className: "fs-main"
  }, /*#__PURE__*/React.createElement("section", {
    className: "fs-inv-band fs-texture",
    "data-screen-label": "Inventory band"
  }, /*#__PURE__*/React.createElement("img", {
    className: "fs-texture__img",
    src: assetBase + '/images/stone-double-charge-640x480.png',
    alt: "",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "fs-texture__shade",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, copy.eyebrow), /*#__PURE__*/React.createElement("h1", null, /*#__PURE__*/React.createElement("em", {
    className: "fs-accent"
  }, copy.word), copy.rest), /*#__PURE__*/React.createElement("p", null, copy.lede), /*#__PURE__*/React.createElement(__ds_scope.SearchInput, {
    value: q,
    onChange: v => {
      setQ(v);
      setPage(0);
    }
  })), /*#__PURE__*/React.createElement("section", {
    className: "fs-inv",
    "data-screen-label": "Inventory listing"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs-inv__depts",
    role: "group",
    "aria-label": "Departments",
    ref: deptsRef,
    onPointerDown: onDeptDown,
    onPointerMove: onDeptMove,
    onPointerUp: onDeptUp,
    onPointerCancel: onDeptUp,
    onClickCapture: onDeptClickCapture
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: 'fs-inv__dept fs-inv__dept--all' + (isAllDepts ? ' is-active' : ''),
    "aria-pressed": isAllDepts,
    onClick: allDepts
  }, "All Departments"), __ds_scope.Departments.map(d => /*#__PURE__*/React.createElement("button", {
    key: d,
    type: "button",
    "aria-pressed": depts.has(d),
    className: 'fs-inv__dept' + (depts.has(d) ? ' is-active' : ''),
    onClick: () => toggleDept(d)
  }, d, /*#__PURE__*/React.createElement("span", {
    className: "n"
  }, deptCounts[d])))), /*#__PURE__*/React.createElement("div", {
    className: "fs-inv__inner"
  }, /*#__PURE__*/React.createElement("aside", {
    className: 'fs-inv__filters' + (filtersOpen ? ' is-open' : ''),
    "aria-label": "Filters"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs-inv__filters-head"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "fs-inv__filters-toggle",
    "aria-expanded": filtersOpen,
    onClick: () => setFiltersOpen(o => !o)
  }, /*#__PURE__*/React.createElement("h2", null, "Filters"), anyFilter ? /*#__PURE__*/React.createElement("span", {
    className: "fs-inv__filters-badge"
  }, activeFilterCount) : null, anyFilter ? /*#__PURE__*/React.createElement("span", {
    className: "fs-inv__clear",
    role: "button",
    tabIndex: 0,
    onClick: e => {
      e.stopPropagation();
      clearAll();
    },
    onKeyDown: e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        e.stopPropagation();
        clearAll();
      }
    }
  }, "Clear All") : null, /*#__PURE__*/React.createElement("span", {
    className: "fs-inv__filters-chevron",
    "aria-hidden": "true"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fs-inv__filters-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs-facet fs-facet--hl"
  }, /*#__PURE__*/React.createElement("h3", null, "Highlights"), /*#__PURE__*/React.createElement("ul", {
    className: "fs-facet__list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: 'fs-hl-opt' + (!highlight ? ' is-active' : ''),
    onClick: () => {
      setHighlight(null);
      allDepts();
    }
  }, "All Inventory", /*#__PURE__*/React.createElement("span", {
    className: "count"
  }, hlCounts.all))), __ds_scope.Highlights.map(h => /*#__PURE__*/React.createElement("li", {
    key: h.key
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: 'fs-hl-opt fs-hl-opt--' + h.key + (highlight === h.key ? ' is-active' : ''),
    onClick: () => pickHighlight(h.key)
  }, h.label, /*#__PURE__*/React.createElement("span", {
    className: "count"
  }, hlCounts[h.key])))))), facets.length === 0 ? /*#__PURE__*/React.createElement("p", {
    className: "fs-inv__filters-note"
  }, activeDepts.length === 0 ? 'Select a department to filter.' : 'Pick a single department for detailed filters.') : facets.map(f => f.swatch ? /*#__PURE__*/React.createElement(SwatchFacet, {
    key: f.key,
    label: f.label,
    options: f.options,
    counts: counts[f.key],
    selected: sel[f.key] || new Set(),
    onToggle: opt => toggle(f.key, opt)
  }) : /*#__PURE__*/React.createElement(CheckFacet, {
    key: f.key,
    label: f.label,
    options: f.options,
    counts: counts[f.key],
    selected: sel[f.key] || new Set(),
    onToggle: opt => toggle(f.key, opt)
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "fs-inv__toolbar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fs-inv__count",
    "aria-live": "polite"
  }, /*#__PURE__*/React.createElement("strong", null, filtered.length), " ", filtered.length === 1 ? 'product' : 'products', " ", scopeLabel), /*#__PURE__*/React.createElement("label", {
    className: "fs-inv__perpage"
  }, "Show", /*#__PURE__*/React.createElement("select", {
    value: perPage,
    onChange: e => {
      setPerPage(Number(e.target.value));
      setPage(0);
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "9"
  }, "9"), /*#__PURE__*/React.createElement("option", {
    value: "18"
  }, "18"), /*#__PURE__*/React.createElement("option", {
    value: "36"
  }, "36"), /*#__PURE__*/React.createElement("option", {
    value: String(Math.max(1, pool.length))
  }, "All")), "per page")), /*#__PURE__*/React.createElement("div", {
    className: "fs-inv__grid",
    "aria-live": "polite"
  }, visible.map(p => /*#__PURE__*/React.createElement(InvCard, {
    key: p.id,
    product: p,
    assetBase: assetBase
  })), visible.length === 0 ? /*#__PURE__*/React.createElement("p", {
    className: "fs-inv__empty"
  }, "No products match your filters. Try clearing a filter, or contact us \u2014 new shipments arrive weekly.") : null), maxPage > 0 ? /*#__PURE__*/React.createElement("div", {
    className: "fs-inv__pager"
  }, /*#__PURE__*/React.createElement(__ds_scope.ArrowButton, {
    direction: "prev",
    disabled: safePage === 0,
    onClick: () => setPage(safePage - 1)
  }), /*#__PURE__*/React.createElement("span", {
    className: "fs-inv__pager-label"
  }, "Page ", safePage + 1, " of ", maxPage + 1), /*#__PURE__*/React.createElement(__ds_scope.ArrowButton, {
    direction: "next",
    disabled: safePage >= maxPage,
    onClick: () => setPage(safePage + 1)
  })) : null))), /*#__PURE__*/React.createElement(__ds_scope.CtaBanner, {
    title: "Don't See What You Need?",
    lede: "New containers arrive weekly \u2014 tell us what you're looking for.",
    primaryLabel: "Contact Us",
    secondaryLabel: ""
  })), /*#__PURE__*/React.createElement(__ds_scope.SiteFooter, {
    logo: assetBase + '/images/logo-fabstone.png'
  }));
}
Object.assign(__ds_scope, { CardBadges, InvMedia, InventoryPage });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/InventoryPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/LegalPage.jsx
try { (() => {
// Fabstone website UI kit — Legal pages (Privacy Policy, Terms of Use, Accessibility).
// One component, three documents selected by `kind`. Plain informational copy —
// a sensible baseline for the client's counsel to review and finalize, not legal advice.

const UPDATED = 'June 16, 2026';
const LEGAL_DOCS = {
  privacy: {
    eyebrow: 'Legal',
    title: 'Privacy Policy',
    lede: 'This Privacy Policy explains how Fabstone (\u201cFabstone,\u201d \u201cwe,\u201d \u201cus\u201d) collects, uses and protects information when you visit our website or our Melissa, TX showroom and slab yard.',
    sections: [{
      h: 'Information We Collect',
      p: ['We collect information you provide directly \u2014 such as your name, email, phone number and project details \u2014 when you request a quote, reserve a slab, schedule a visit or contact us.', 'We also collect limited technical information automatically, including your browser type, device, and pages viewed, to help us understand how the site is used and to keep it working reliably.']
    }, {
      h: 'How We Use Your Information',
      p: ['We use your information to respond to inquiries, prepare quotes, fulfill orders, coordinate showroom visits and deliveries, and improve our products and services.', 'With your consent, we may send occasional updates about new inventory, promotions or events. You can opt out of these messages at any time.']
    }, {
      h: 'How We Share Information',
      p: ['We do not sell your personal information. We share it only with service providers who help us operate our business (for example, payment processors and delivery partners), and only as needed to provide the service you requested.', 'We may disclose information when required by law or to protect the rights, safety and property of Fabstone, our customers or others.']
    }, {
      h: 'Cookies & Analytics',
      p: ['Our site uses cookies and similar technologies to remember your preferences and measure site performance. You can control cookies through your browser settings, though some features may not work without them.']
    }, {
      h: 'Data Retention & Security',
      p: ['We keep your information only as long as needed for the purposes described here or as required by law, and we use reasonable safeguards to protect it. No method of transmission or storage is completely secure.']
    }, {
      h: 'Your Choices',
      p: ['You may request access to, correction of, or deletion of your personal information, subject to applicable law. To make a request, contact us using the details below.']
    }]
  },
  terms: {
    eyebrow: 'Legal',
    title: 'Terms of Use',
    lede: 'These Terms of Use govern your access to and use of the Fabstone website. By using the site, you agree to these terms.',
    sections: [{
      h: 'Use of the Site',
      p: ['You may use this site for lawful, personal and business purposes related to evaluating and purchasing our products. You agree not to misuse the site, interfere with its operation, or attempt to access it in any unauthorized way.']
    }, {
      h: 'Product Information & Availability',
      p: ['Natural stone is a product of nature: color, veining, pattern and finish vary from slab to slab, and on-screen images are representations only. We encourage viewing the actual material in person before purchase.', 'Inventory shown as available is updated regularly but is not guaranteed until reserved and confirmed. Pricing, specifications and availability may change without notice.']
    }, {
      h: 'Quotes, Orders & Reservations',
      p: ['Quotes are estimates and are valid for the period stated. An order or reservation is confirmed only when accepted by Fabstone in writing. Deposits and payment terms are described at the time of order.']
    }, {
      h: 'Intellectual Property',
      p: ['All content on this site \u2014 including text, photography, logos and design \u2014 is owned by or licensed to Fabstone and may not be copied or reused without our written permission.']
    }, {
      h: 'Disclaimers & Limitation of Liability',
      p: ['The site is provided \u201cas is\u201d without warranties of any kind. To the fullest extent permitted by law, Fabstone is not liable for any indirect or consequential damages arising from your use of the site.']
    }, {
      h: 'Governing Law',
      p: ['These terms are governed by the laws of the State of Texas, without regard to its conflict-of-laws rules. Any disputes will be handled in the courts located in Collin County, Texas.']
    }]
  },
  accessibility: {
    eyebrow: 'Legal',
    title: 'Accessibility Statement',
    lede: 'Fabstone is committed to making our website usable for everyone, including people with disabilities.',
    sections: [{
      h: 'Our Commitment',
      p: ['We strive to meet the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA and to continually improve the experience for all visitors. Accessibility is an ongoing effort, and we regularly review the site as we add new features and content.']
    }, {
      h: 'Measures We Take',
      p: ['We aim for sufficient color contrast, keyboard-navigable controls, descriptive labels and alternative text for meaningful images, and a layout that adapts to different screen sizes and zoom levels.']
    }, {
      h: 'Known Limitations',
      p: ['Some third-party content \u2014 such as embedded maps and video \u2014 may not be fully accessible. Where we rely on these services, we work to provide accessible alternatives or contact options.']
    }, {
      h: 'Need Help or Found an Issue?',
      p: ['If you experience any difficulty using our website, or have a suggestion to improve accessibility, please reach out. We welcome your feedback and will do our best to provide the information or assistance you need.']
    }]
  }
};
function LegalPage({
  assetBase = '../../assets',
  kind = 'privacy'
}) {
  const doc = LEGAL_DOCS[kind] || LEGAL_DOCS.privacy;
  return /*#__PURE__*/React.createElement("div", {
    className: "fs-body",
    "data-screen-label": doc.title
  }, /*#__PURE__*/React.createElement(__ds_scope.SiteHeader, {
    logo: assetBase + '/images/logo-fabstone.png',
    homeHref: "./index.html",
    nav: __ds_scope.SITE_NAV
  }), /*#__PURE__*/React.createElement("main", {
    className: "fs-main"
  }, /*#__PURE__*/React.createElement("section", {
    className: "fs-legal",
    "data-screen-label": 'Legal — ' + doc.title
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs-legal__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, doc.eyebrow), /*#__PURE__*/React.createElement("h1", {
    className: "fs-legal__title"
  }, doc.title), /*#__PURE__*/React.createElement("p", {
    className: "fs-legal__updated"
  }, "Last updated ", UPDATED), /*#__PURE__*/React.createElement("p", {
    className: "fs-legal__lede"
  }, doc.lede), doc.sections.map(s => /*#__PURE__*/React.createElement("section", {
    className: "fs-legal__section",
    key: s.h
  }, /*#__PURE__*/React.createElement("h2", null, s.h), s.p.map((para, j) => /*#__PURE__*/React.createElement("p", {
    key: j
  }, para)))), /*#__PURE__*/React.createElement("div", {
    className: "fs-legal__contact"
  }, /*#__PURE__*/React.createElement("h2", null, "Contact Us"), /*#__PURE__*/React.createElement("p", null, "Fabstone \xB7 2514 Sam Rayburn Hwy, Melissa, TX 75454", /*#__PURE__*/React.createElement("br", null), "sales@fabsg.com \xB7 972-542-9678"))))), /*#__PURE__*/React.createElement(__ds_scope.SiteFooter, {
    logo: assetBase + '/images/logo-fabstone.png'
  }));
}
Object.assign(__ds_scope, { LegalPage });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/LegalPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProductPage.jsx
try { (() => {
// Fabstone website UI kit — Product detail page.
// Reached from the Live Inventory grid (?item=<id>). Adapts spec rows and
// related items to the product's department. Content modeled on the
// StoneProfits item page (photo, specs, yard location, related items).

function PdpRelCard({
  product,
  assetBase
}) {
  return /*#__PURE__*/React.createElement("a", {
    className: "fs-inv-card",
    href: './product.html?item=' + product.id
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs-inv-card__media"
  }, /*#__PURE__*/React.createElement(__ds_scope.CardBadges, {
    product: product
  }), /*#__PURE__*/React.createElement(__ds_scope.InvMedia, {
    product: product,
    assetBase: assetBase
  })), /*#__PURE__*/React.createElement("div", {
    className: "fs-inv-card__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fs-inv-card__tag"
  }, product.tag), /*#__PURE__*/React.createElement("h3", {
    className: "fs-inv-card__title"
  }, product.name), /*#__PURE__*/React.createElement("span", {
    className: "fs-inv-card__meta"
  }, product.meta)));
}
function ProductPage({
  assetBase = '../../assets',
  itemId
}) {
  const product = __ds_scope.InventoryProducts.find(p => p.id === itemId) || __ds_scope.InventoryProducts[0];
  const related = __ds_scope.InventoryProducts.filter(p => p.id !== product.id && p.department === product.department).slice(0, 3);
  const specs = (__ds_scope.DepartmentSpecs[product.department] || []).filter(([, key]) => product[key]);
  // Mobile: similar slabs become a swipeable scroller (mouse drag + nav buttons).
  const relRef = React.useRef(null);
  const relDrag = React.useRef({
    down: false,
    startX: 0,
    startLeft: 0,
    moved: false
  });
  const onRelDown = e => {
    const el = relRef.current;
    if (!el) return;
    relDrag.current = {
      down: true,
      startX: e.clientX,
      startLeft: el.scrollLeft,
      moved: false
    };
    el.setPointerCapture && el.setPointerCapture(e.pointerId);
  };
  const onRelMove = e => {
    const el = relRef.current;
    if (!el || !relDrag.current.down) return;
    const dx = e.clientX - relDrag.current.startX;
    if (Math.abs(dx) > 3) relDrag.current.moved = true;
    el.scrollLeft = relDrag.current.startLeft - dx;
  };
  const onRelUp = () => {
    relDrag.current.down = false;
  };
  const onRelClickCapture = e => {
    if (relDrag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
    }
  };
  const relPage = dir => {
    const el = relRef.current;
    if (!el) return;
    el.scrollBy({
      left: dir * el.clientWidth * 0.85,
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "fs-body",
    "data-screen-label": 'Product — ' + product.name
  }, /*#__PURE__*/React.createElement(__ds_scope.SiteHeader, {
    logo: assetBase + '/images/logo-fabstone.png',
    homeHref: "./index.html",
    activeItem: "Live Inventory",
    nav: __ds_scope.SITE_NAV
  }), /*#__PURE__*/React.createElement("main", {
    className: "fs-main"
  }, /*#__PURE__*/React.createElement("section", {
    className: "fs-pdp",
    "data-screen-label": "Product detail"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs-pdp__inner"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "fs-pdp__crumbs",
    "aria-label": "Breadcrumb"
  }, /*#__PURE__*/React.createElement("a", {
    href: "./index.html"
  }, "Home"), /*#__PURE__*/React.createElement("span", {
    className: "sep"
  }, "/"), /*#__PURE__*/React.createElement("a", {
    href: "./live-inventory.html"
  }, "Live Inventory"), /*#__PURE__*/React.createElement("span", {
    className: "sep"
  }, "/"), /*#__PURE__*/React.createElement("span", {
    className: "here"
  }, product.name)), /*#__PURE__*/React.createElement("div", {
    className: "fs-pdp__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs-pdp__media"
  }, /*#__PURE__*/React.createElement(__ds_scope.CardBadges, {
    product: product
  }), /*#__PURE__*/React.createElement(__ds_scope.InvMedia, {
    product: product,
    assetBase: assetBase,
    cls: "fs-ph--lg"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "fs-pdp__tag"
  }, product.tag), /*#__PURE__*/React.createElement("h1", {
    className: "fs-pdp__title"
  }, product.name), /*#__PURE__*/React.createElement("p", {
    className: "fs-pdp__sub"
  }, product.meta), /*#__PURE__*/React.createElement("div", {
    className: "fs-pdp__avail"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot",
    "aria-hidden": "true"
  }), "In stock at our Melissa, TX showroom & slab yard"), /*#__PURE__*/React.createElement("dl", {
    className: "fs-pdp__specs"
  }, specs.map(([label, key]) => /*#__PURE__*/React.createElement("div", {
    className: "fs-pdp__spec",
    key: label
  }, /*#__PURE__*/React.createElement("dt", null, label), /*#__PURE__*/React.createElement("dd", null, product[key])))), /*#__PURE__*/React.createElement("div", {
    className: "fs-pdp__actions"
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outline-dark",
    href: "./live-inventory.html"
  }, "Back to Inventory"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    href: 'mailto:sales@fabsg.com?subject=' + encodeURIComponent('Quote request: ' + product.name)
  }, "Request a Quote")))))), /*#__PURE__*/React.createElement("section", {
    className: "fs-pdp-loc",
    "data-screen-label": "Availability and location"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs-pdp-loc__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs-pdp-loc__card"
  }, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("em", {
    className: "fs-accent"
  }, "See It"), " in Person"), /*#__PURE__*/React.createElement("p", null, "Photos tell half the story \u2014 visit the showroom to see the full piece, veining and finish in natural light."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Fabstone Slab Yard"), /*#__PURE__*/React.createElement("br", null), "2514 Sam Rayburn Hwy", /*#__PURE__*/React.createElement("br", null), "Melissa, TX 75454"), /*#__PURE__*/React.createElement("p", null, "sales@fabsg.com \xB7 972-542-9678"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    href: "mailto:sales@fabsg.com?subject=Schedule%20a%20Visit"
  }, "Schedule a Visit")), /*#__PURE__*/React.createElement("div", {
    className: "fs-pdp-loc__map"
  }, /*#__PURE__*/React.createElement("iframe", {
    src: "https://maps.google.com/maps?q=2514+Sam+Rayburn+Hwy,+Melissa,+TX+75454&z=16&output=embed",
    title: "Fabstone \u2014 2514 Sam Rayburn Hwy, Melissa, TX 75454",
    loading: "lazy"
  })))), related.length ? /*#__PURE__*/React.createElement("section", {
    className: "fs-pdp-rel",
    "data-screen-label": "Related products"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs-pdp-rel__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs-pdp-rel__head"
  }, /*#__PURE__*/React.createElement("h2", null, /*#__PURE__*/React.createElement("em", {
    className: "fs-accent"
  }, "Similar"), " ", product.department === 'Slabs & Countertops' ? 'Slabs' : 'Products'), /*#__PURE__*/React.createElement("a", {
    className: "fs-pdp-rel__all",
    href: "./live-inventory.html"
  }, "View All Inventory")), /*#__PURE__*/React.createElement("div", {
    className: "fs-pdp-rel__grid",
    ref: relRef,
    onPointerDown: onRelDown,
    onPointerMove: onRelMove,
    onPointerUp: onRelUp,
    onPointerCancel: onRelUp,
    onClickCapture: onRelClickCapture
  }, related.map(p => /*#__PURE__*/React.createElement(PdpRelCard, {
    key: p.id,
    product: p,
    assetBase: assetBase
  }))), related.length > 1 ? /*#__PURE__*/React.createElement("div", {
    className: "fs-arrows fs-pdp-rel__arrows"
  }, /*#__PURE__*/React.createElement(__ds_scope.ArrowButton, {
    direction: "prev",
    onClick: () => relPage(-1)
  }), /*#__PURE__*/React.createElement(__ds_scope.ArrowButton, {
    direction: "next",
    onClick: () => relPage(1)
  })) : null)) : null), /*#__PURE__*/React.createElement(__ds_scope.SiteFooter, {
    logo: assetBase + '/images/logo-fabstone.png'
  }));
}
Object.assign(__ds_scope, { ProductPage });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProductPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/RepsPage.jsx
try { (() => {
// Fabstone website UI kit — Sales Reps page (reps.html).
// Dedicated full roster, linked from the About page's "View All Reps" button
// and the About Us dropdown. Reuses the shared RepsDirectory + site chrome.

function RepsPage({
  assetBase = '../../assets'
}) {
  const go = href => {
    window.location.href = href;
  };
  const contact = () => {
    window.location.href = 'mailto:sales@fabsg.com';
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "fs-body",
    "data-screen-label": "Sales Reps"
  }, /*#__PURE__*/React.createElement(__ds_scope.SiteHeader, {
    logo: assetBase + '/images/logo-fabstone.png',
    homeHref: "./index.html",
    activeItem: "About Us",
    onCta: contact,
    nav: __ds_scope.SITE_NAV
  }), /*#__PURE__*/React.createElement("main", {
    className: "fs-main"
  }, /*#__PURE__*/React.createElement("section", {
    className: "fs-about-hero",
    "data-screen-label": "Reps \u2014 Hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs-about-hero__inner"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "fs-breadcrumb",
    "aria-label": "Breadcrumb"
  }, /*#__PURE__*/React.createElement("a", {
    href: "./index.html"
  }, "Home"), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "/"), /*#__PURE__*/React.createElement("a", {
    href: "./about.html"
  }, "About Us"), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "/"), /*#__PURE__*/React.createElement("span", {
    "aria-current": "page"
  }, "Sales Reps")), /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Sales Team"), /*#__PURE__*/React.createElement("h1", null, "Find Your ", /*#__PURE__*/React.createElement("em", null, "Rep")), /*#__PURE__*/React.createElement("p", null, "Fabstone serves 15 states across the south-central U.S. Find the representative for your region and reach them directly."))), /*#__PURE__*/React.createElement("section", {
    className: "fs-about-reps",
    "data-screen-label": "Reps \u2014 Directory"
  }, /*#__PURE__*/React.createElement(__ds_scope.RepsDirectory, null)), /*#__PURE__*/React.createElement(__ds_scope.CtaBanner, {
    eyebrow: "Not Sure Who to Ask?",
    title: "Talk to the Fabstone Team",
    lede: "Reach our Melissa, TX headquarters and we'll connect you with the right rep for your project.",
    primaryLabel: "Contact Us",
    secondaryLabel: "Live Inventory",
    onPrimary: contact,
    onSecondary: () => go('./live-inventory.html')
  })), /*#__PURE__*/React.createElement(__ds_scope.SiteFooter, {
    logo: assetBase + '/images/logo-fabstone.png'
  }));
}
Object.assign(__ds_scope, { RepsPage });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/RepsPage.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ExclusiveCard = __ds_scope.ExclusiveCard;

__ds_ns.StoneCard = __ds_scope.StoneCard;

__ds_ns.CtaBanner = __ds_scope.CtaBanner;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.ArrowButton = __ds_scope.ArrowButton;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.SearchInput = __ds_scope.SearchInput;

__ds_ns.SectionHead = __ds_scope.SectionHead;

__ds_ns.SITE_NAV = __ds_scope.SITE_NAV;

__ds_ns.AboutPage = __ds_scope.AboutPage;

__ds_ns.HomePage = __ds_scope.HomePage;

__ds_ns.HomeHero = __ds_scope.HomeHero;

__ds_ns.TrustStrip = __ds_scope.TrustStrip;

__ds_ns.FeaturedInventory = __ds_scope.FeaturedInventory;

__ds_ns.WhyFabstone = __ds_scope.WhyFabstone;

__ds_ns.LocationSection = __ds_scope.LocationSection;

__ds_ns.ExclusiveProducts = __ds_scope.ExclusiveProducts;

__ds_ns.GallerySection = __ds_scope.GallerySection;

__ds_ns.Departments = __ds_scope.Departments;

__ds_ns.Highlights = __ds_scope.Highlights;

__ds_ns.BadgeMeta = __ds_scope.BadgeMeta;

__ds_ns.SwatchHex = __ds_scope.SwatchHex;

__ds_ns.DepartmentFacets = __ds_scope.DepartmentFacets;

__ds_ns.DepartmentSpecs = __ds_scope.DepartmentSpecs;

__ds_ns.InventoryProducts = __ds_scope.InventoryProducts;

__ds_ns.CardBadges = __ds_scope.CardBadges;

__ds_ns.InvMedia = __ds_scope.InvMedia;

__ds_ns.InventoryPage = __ds_scope.InventoryPage;

__ds_ns.LegalPage = __ds_scope.LegalPage;

__ds_ns.ProductPage = __ds_scope.ProductPage;

__ds_ns.REPS = __ds_scope.REPS;

__ds_ns.RepsDirectory = __ds_scope.RepsDirectory;

__ds_ns.RepsPage = __ds_scope.RepsPage;

})();
