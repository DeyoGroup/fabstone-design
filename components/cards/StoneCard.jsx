// Fabstone StoneCard — inventory card for dark sections (.fs-stone-card).
export function StoneCard({ image, title, description, href = '#', onClick, badges }) {
  return (
    <article className="fs-stone-card">
      <a href={href} onClick={onClick} className="fs-stone-card__media" aria-label={title}>
        {badges && badges.length
          ? <span className="fs-inv-card__badges">{badges.map((b) => <span key={b.cls} className={'fs-badge ' + b.cls}>{b.label}</span>)}</span>
          : null}
        {image
          ? <img loading="lazy" src={image} alt="" />
          : <span className="fs-stone-card__placeholder"></span>}
      </a>
      <div className="fs-stone-card__body">
        <h3 className="fs-stone-card__title"><a href={href} onClick={onClick}>{title}</a></h3>
        {description ? <p className="fs-stone-card__desc">{description}</p> : null}
        <a href={href} onClick={onClick} className="fs-stone-card__more">
          <span>Learn More</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M7 17L17 7M17 7H8M17 7v9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </a>
      </div>
    </article>
  );
}
