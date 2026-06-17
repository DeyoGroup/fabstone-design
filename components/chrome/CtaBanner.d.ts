/**
 * Red CTA banner (.fs-cta-banner) — 1200px rounded (40px) red block,
 * centered: copper uppercase eyebrow, 60/72 white H2, grey lede,
 * white + ghost button pair.
 */
export interface CtaBannerProps {
  /** Uppercase copper eyebrow (default "FABSTONE") */
  eyebrow?: string;
  title?: string;
  lede?: string;
  primaryLabel?: string;
  /** Pass empty string to hide the ghost secondary button */
  secondaryLabel?: string;
  onPrimary?: () => void;
  onSecondary?: () => void;
}
