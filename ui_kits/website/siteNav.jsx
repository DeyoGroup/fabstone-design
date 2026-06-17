// Fabstone website UI kit — canonical primary navigation.
// One source of truth so every page's header is identical and all links resolve.
// All pages live in this folder, so relative ./*.html links work everywhere.
export const SITE_NAV = [
  { label: 'Live Inventory', href: './live-inventory.html' },
  { label: 'Featured', href: './live-inventory.html?highlight=featured' },
  { label: 'About Us', href: './about.html', children: [
    { label: 'Our Team', href: './about.html#about-team' },
    { label: 'Find a Rep', href: './reps.html' },
  ] },
  { label: 'Location', href: './index.html#location' },
  { label: 'Gallery', href: './index.html#gallery' },
];
