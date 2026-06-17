// Fabstone website UI kit — shared sales-rep directory.
// Used by both the About page's "Find Your Rep" section and the dedicated
// reps.html page, so the roster lives in exactly one place.
//
// PLACEHOLDER DATA — swap REPS for the real roster + direct lines. Each rep
// owns a region within the 15 south-central states Fabstone serves.
export const REPS = [
  { region: 'North Texas & Oklahoma', states: ['N. Texas', 'Oklahoma'], name: 'Jordan Avery', email: 'jordan@fabsg.com', phone: '972-542-9678' },
  { region: 'Central & South Texas', states: ['Austin', 'San Antonio', 'Houston'], name: 'Marisol Reyes', email: 'marisol@fabsg.com', phone: '972-542-9679' },
  { region: 'Louisiana & Mississippi', states: ['Louisiana', 'Mississippi'], name: 'Dale Fontenot', email: 'dale@fabsg.com', phone: '972-542-9680' },
  { region: 'Arkansas & Tennessee', states: ['Arkansas', 'Tennessee'], name: 'Priya Nair', email: 'priya@fabsg.com', phone: '972-542-9681' },
  { region: 'Kansas & Missouri', states: ['Kansas', 'Missouri'], name: 'Garrett Cole', email: 'garrett@fabsg.com', phone: '972-542-9682' },
  { region: 'New Mexico & Colorado', states: ['New Mexico', 'Colorado'], name: 'Alejandra Soto', email: 'alex@fabsg.com', phone: '972-542-9683' },
];

function RepIconMail() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2.5" y="4.5" width="19" height="15" rx="3" stroke="currentColor" strokeWidth="1.6"></rect>
      <path d="M4 7l8 5.5L20 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  );
}
function RepIconPhone() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 005.5 5.5l1.5-2 4 1.5v3c0 1.1-.9 2-2 2A16 16 0 014.5 5.5c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"></path>
    </svg>
  );
}

// Region filter (light pills) + responsive grid of rep contact cards.
export function RepsDirectory() {
  const [region, setRegion] = React.useState('All');
  const filters = ['All', ...REPS.map((r) => r.region)];
  const visible = region === 'All' ? REPS : REPS.filter((r) => r.region === region);
  // Mobile: region filter becomes a single-row drag/swipe scroller.
  const filterRef = React.useRef(null);
  const fDrag = React.useRef({ down: false, startX: 0, startLeft: 0, moved: false });
  const onFDown = (e) => {
    const el = filterRef.current;
    if (!el) return;
    fDrag.current = { down: true, startX: e.clientX, startLeft: el.scrollLeft, moved: false };
    el.setPointerCapture && el.setPointerCapture(e.pointerId);
  };
  const onFMove = (e) => {
    const el = filterRef.current;
    if (!el || !fDrag.current.down) return;
    const dx = e.clientX - fDrag.current.startX;
    if (Math.abs(dx) > 3) fDrag.current.moved = true;
    el.scrollLeft = fDrag.current.startLeft - dx;
  };
  const onFUp = () => { fDrag.current.down = false; };
  const onFClickCapture = (e) => { if (fDrag.current.moved) { e.preventDefault(); e.stopPropagation(); } };
  return (
    <div className="fs-about-reps__inner">
      <div className="fs-about-reps__filter" role="tablist" aria-label="Filter reps by region" ref={filterRef}
        onPointerDown={onFDown} onPointerMove={onFMove} onPointerUp={onFUp} onPointerCancel={onFUp}
        onClickCapture={onFClickCapture}>
        {filters.map((r) => (
          <button type="button" key={r}
            className={'fs-pill fs-pill--light' + (region === r ? ' is-active' : '')}
            aria-pressed={region === r}
            onClick={() => setRegion(r)}>
            {r === 'All' ? 'All Regions' : r}
          </button>
        ))}
      </div>
      <div className="fs-about-reps__grid" aria-live="polite">
        {visible.map((rep) => (
          <article className="fs-rep-card" key={rep.region}>
            <div>
              <p className="fs-rep-card__eyebrow">Regional Rep</p>
              <h3 className="fs-rep-card__region">{rep.region}</h3>
            </div>
            <div className="fs-rep-card__states">
              {rep.states.map((s) => <span className="fs-rep-state" key={s}>{s}</span>)}
            </div>
            <div className="fs-rep-card__person">
              <p className="fs-rep-card__name">{rep.name}</p>
              <p className="fs-rep-card__role">Account Manager</p>
              <div className="fs-rep-card__contact">
                <a href={'mailto:' + rep.email}><RepIconMail />{rep.email}</a>
                <a href={'tel:' + rep.phone.replace(/[^0-9]/g, '')}><RepIconPhone />{rep.phone}</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
