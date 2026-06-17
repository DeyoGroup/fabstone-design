/**
 * Sticky site header: #222 utility strip (email, phone, saved, Pay Online,
 * frosted search pill) above a white 98px bar (logo 48px, 20/500 nav with
 * red hover underline, red Contact Us CTA).
 */
export interface SiteHeaderProps {
  /** Path to logo image (default assets/images/logo-fabstone.png) */
  logo?: string;
  /** Where the logo links (e.g. './index.html') */
  homeHref?: string;
  email?: string;
  phone?: string;
  nav?: { label: string; href: string }[];
  /** Label of the current page's nav item (renders red) */
  activeItem?: string;
  ctaLabel?: string;
  onCta?: () => void;
  onNavClick?: (item: { label: string; href: string }) => void;
}
