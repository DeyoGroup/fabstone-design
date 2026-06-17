/**
 * Frosted-glass filter pill (.fs-pill) — 58px tall, radius 40,
 * rgba(255,255,255,.10) fill + blur(24px). Active = solid white, dark text.
 * Designed for dark backgrounds; labels are ALL-CAPS category names.
 */
export interface PillProps {
  /** Solid white active state */
  active?: boolean;
  onClick?: () => void;
  children?: any;
  className?: string;
}
