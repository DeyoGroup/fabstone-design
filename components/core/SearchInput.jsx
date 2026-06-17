// Fabstone SearchInput — frosted search bar (.fs-search) for dark sections.
export function SearchInput({ placeholder = 'Search by stone type, color or application...', value, onChange, className = '', ...rest }) {
  return (
    <div className={['fs-search', className].filter(Boolean).join(' ')}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8"></circle>
        <path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"></path>
      </svg>
      <input type="search" placeholder={placeholder} value={value}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined} {...rest} />
      {onChange && value ? (
        <button type="button" className="fs-search__clear" aria-label="Clear search" onClick={() => onChange('')}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
          </svg>
        </button>
      ) : null}
    </div>
  );
}
