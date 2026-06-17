// Fabstone CtaBanner — red rounded banner (.fs-cta-banner).
export function CtaBanner({
  eyebrow = 'FABSTONE',
  title = 'Ready to Transform Your Space?',
  lede = 'Connect with our design team or explore the full collection.',
  primaryLabel = 'Contact Us',
  secondaryLabel = 'Live Inventory',
  onPrimary = () => { window.location.href = 'mailto:sales@fabsg.com'; },
  onSecondary = () => { window.location.href = './live-inventory.html'; },
}) {
  return (
    <section className="fs-cta-banner">
      <div className="fs-cta-banner__inner">
        <div className="fs-cta-banner__eyebrow">{eyebrow}</div>
        <h2>{title}</h2>
        {lede ? <p>{lede}</p> : null}
        <div className="fs-cta-banner__actions">
          <a href="#" className="fs-btn fs-btn--white"
            onClick={onPrimary ? (e) => { e.preventDefault(); onPrimary(); } : undefined}>{primaryLabel}</a>
          {secondaryLabel ? (
            <a href="#" className="fs-btn fs-btn--ghost"
              onClick={onSecondary ? (e) => { e.preventDefault(); onSecondary(); } : undefined}>{secondaryLabel}</a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
