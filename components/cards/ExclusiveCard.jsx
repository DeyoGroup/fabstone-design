// Fabstone ExclusiveCard — photo card with protection gradient (.fs2-exclusive__card).
export function ExclusiveCard({ image, tag, title, description, hero = false, href = '#', onClick, badges }) {
  const cls = ['fs2-exclusive__card', hero ? 'fs2-exclusive__card--hero' : ''].filter(Boolean).join(' ');
  return (
    <a href={href} onClick={onClick} className={cls}>
      {badges && badges.length
        ? <span className="fs-inv-card__badges">{badges.map((b) => <span key={b.cls} className={'fs-badge ' + b.cls}>{b.label}</span>)}</span>
        : null}
      {image ? <img src={image} alt={title} loading="lazy" /> : <span className="fs2-exclusive__ph"></span>}
      <div className="fs2-exclusive__body">
        {tag ? <span className="fs2-exclusive__tag">{tag}</span> : null}
        <h3>{title}</h3>
        {description ? <p>{description}</p> : null}
      </div>
    </a>
  );
}
