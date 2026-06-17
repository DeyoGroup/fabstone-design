/**
 * Exclusive-products card (.fs2-exclusive__card) — full-bleed photo at 75%
 * opacity over #1A1A1A, bottom protection gradient, red uppercase tag,
 * 24/700 white title. `hero` spans 2 rows in the 3×2 grid.
 */
export interface ExclusiveCardProps {
  image?: string;
  /** Red uppercase category tag, e.g. "Quartzite" */
  tag?: string;
  title: string;
  description?: string;
  /** Spans two rows (first card of the 3×2 grid) */
  hero?: boolean;
  href?: string;
  onClick?: () => void;
}
