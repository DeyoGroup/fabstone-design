// Fabstone SectionHead — eyebrow + H2 (italic red accent word) + lede.
// Matches the centered section-head pattern used across the site.
export function SectionHead({
  eyebrow,
  accent,        // the italic red first word(s)
  title,         // the rest of the title
  lede,
  onDark = false,
  align = 'center',
  className = '',
  style,
}) {
  return (
    <div className={className} style={{ textAlign: align, maxWidth: 760, margin: '0 auto', paddingInline: 24, ...style }}>
      {eyebrow ? (
        <div className="eyebrow" style={{
          fontFamily: 'var(--fs-font-display)', color: 'var(--fs-red)',
          fontSize: 24, fontWeight: 600, lineHeight: '28.8px', marginBottom: 12,
        }}>{eyebrow}</div>
      ) : null}
      <h2 style={{
        fontFamily: 'var(--fs-font-display)', fontSize: 60, fontWeight: 700,
        lineHeight: '72px', color: onDark ? 'var(--fs-white)' : '#0C111F', margin: '0 0 24px',
      }}>
        {accent ? <em className="fs-accent">{accent}</em> : null}{accent ? ' ' : ''}{title}
      </h2>
      {lede ? (
        <p style={{
          fontFamily: 'var(--fs-font-display)', fontSize: 24, fontWeight: 500,
          lineHeight: '34px', color: onDark ? '#D2D2D2' : '#7E7E7E', margin: 0,
        }}>{lede}</p>
      ) : null}
    </div>
  );
}
