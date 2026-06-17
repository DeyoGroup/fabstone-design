// Fabstone Pill — frosted-glass filter tab (.fs-pill), used on dark sections.
export function Pill({ active = false, children, onClick, className = '', ...rest }) {
  const cls = ['fs-pill', active ? 'is-active' : '', className].filter(Boolean).join(' ');
  return (
    <button type="button" className={cls} onClick={onClick} role="tab" aria-selected={active} {...rest}>
      {children}
    </button>
  );
}
