/**
 * Fabstone primary action button (.fs-btn). 48px min-height, radius 10,
 * Urbanist 18/600. Primary = brand red #991B27, hover darkens.
 */
export interface ButtonProps {
  /** Visual style. 'primary' red (default) · 'ghost' transparent w/ white border (dark bg) · 'dark' · 'white' (red banner) · 'outline-dark' */
  variant?: 'primary' | 'ghost' | 'dark' | 'white' | 'outline-dark';
  /** Fully-rounded corners instead of radius 10 */
  pill?: boolean;
  /** Renders an <a> when set */
  href?: string;
  onClick?: () => void;
  children?: any;
  className?: string;
  style?: any;
}
