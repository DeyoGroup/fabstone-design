/**
 * Light-grey site footer: brand column (logo 56px, blurb, outlined-circle
 * social icons) + three 24/600-headed link columns, hairline rule,
 * copyright + legal bar.
 */
export interface SiteFooterProps {
  logo?: string;
  blurb?: string;
  columns?: { title: string; links: (string | { label: string; href: string })[] }[];
  legal?: string[];
  copyright?: string;
}
