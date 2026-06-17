/**
 * Frosted search bar (.fs-search) — 58px, radius 40, 10% white glass with
 * 40% white border + blur(24px), magnifier icon. For dark sections.
 */
export interface SearchInputProps {
  placeholder?: string;
  value?: string;
  /** Called with the new string value */
  onChange?: (value: string) => void;
  className?: string;
}
