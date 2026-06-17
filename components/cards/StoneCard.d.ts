/**
 * Inventory stone card (.fs-stone-card) — square 1:1 image (radius 24),
 * 24/700 white title, 18/28 grey description, "Learn More ↗" with red arrow.
 * Image scales 1.04 on hover. Lives on dark (#121212) sections in a 3-col grid.
 */
export interface StoneCardProps {
  /** Square-ish stone/product photo. Omit for a dark gradient placeholder. */
  image?: string;
  /** Evocative two-word stone name, e.g. "Midnight Galaxy" */
  title: string;
  /** One-line sensory description */
  description?: string;
  href?: string;
  onClick?: () => void;
}
