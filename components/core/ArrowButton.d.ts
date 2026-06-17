/**
 * Circular 48px pager arrow (.fs-arrow). White fill for prev,
 * red (.fs-arrow--primary) for next. Layered diffuse shadow stack.
 * Wrap a prev/next pair in <div className="fs-arrows">.
 */
export interface ArrowButtonProps {
  direction?: 'prev' | 'next';
  /** Red fill — defaults to true for 'next' */
  primary?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}
