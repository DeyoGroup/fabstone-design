/**
 * Centered section head: red 24/600 eyebrow → 60/72 H2 whose first word is
 * an italic red accent → 24/34 muted lede. The signature Fabstone pattern
 * ("<em>Featured</em> Inventory", "<em>Why</em> Fabstone").
 */
export interface SectionHeadProps {
  /** Short Title Case phrase above the title, e.g. "Curated Selections" */
  eyebrow?: string;
  /** Italic red first word(s) of the title, e.g. "Featured" */
  accent?: string;
  /** Remainder of the title, e.g. "Inventory" */
  title: string;
  /** 24/34 muted paragraph under the title */
  lede?: string;
  /** White title + #D2D2D2 lede for dark sections */
  onDark?: boolean;
  align?: 'center' | 'left';
  className?: string;
  style?: any;
}
