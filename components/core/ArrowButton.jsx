// Fabstone ArrowButton — 48px circular pager arrow (.fs-arrow).
export function ArrowButton({
  direction = 'next', // 'prev' | 'next'
  primary = direction === 'next',
  disabled = false,
  onClick,
  className = '',
  ...rest
}) {
  const cls = ['fs-arrow', primary ? 'fs-arrow--primary' : '', className].filter(Boolean).join(' ');
  const d = direction === 'prev' ? 'M15 18l-6-6 6-6' : 'M9 18l6-6-6-6';
  return (
    <button type="button" className={cls} disabled={disabled} onClick={onClick}
      aria-label={direction === 'prev' ? 'Previous' : 'Next'} {...rest}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d={d} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    </button>
  );
}
