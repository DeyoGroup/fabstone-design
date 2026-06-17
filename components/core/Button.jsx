// Fabstone Button — renders the site's .fs-btn classes.
export function Button({
  variant = 'primary', // 'primary' | 'ghost' | 'dark' | 'white' | 'outline-dark'
  pill = false,
  href,
  children,
  onClick,
  style,
  className = '',
  ...rest
}) {
  const cls = [
    'fs-btn',
    `fs-btn--${variant}`,
    pill ? 'fs-btn--pill' : '',
    className,
  ].filter(Boolean).join(' ');
  const Tag = href ? 'a' : 'button';
  return (
    <Tag href={href} onClick={onClick} className={cls} style={style} type={href ? undefined : 'button'} {...rest}>
      {children}
    </Tag>
  );
}
