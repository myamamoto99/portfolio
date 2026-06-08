const navStyles = {
  container: "relative flex items-center",
  desktopList: "hidden w-[min(68vw,18rem)] flex-row md:flex",
  mobileToggle:
    "inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--ui-border-soft)] bg-[var(--ui-surface-base)] text-[var(--ui-text-strong)] transition-colors duration-200 hover:bg-[var(--ui-surface-subtle)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ui-focus-ring)] md:hidden",
  mobileMenu:
    "absolute right-0 top-full z-40 mt-2 flex min-w-[11rem] flex-col rounded-xl border border-[var(--ui-border-soft)] bg-[var(--ui-surface-base)] p-1 shadow-[0_18px_40px_-24px_var(--ui-shadow-elevated)] md:hidden",
  itemBase:
    "w-full border-b-2 border-transparent px-3 py-2 text-center text-sm font-semibold tracking-wide transition-colors duration-200 focus:outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-[var(--ui-focus-ring)]",
  mobileItemBase:
    "rounded-md px-3 py-2 text-left text-sm font-semibold tracking-wide transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ui-focus-ring)]",
  itemActive: "border-[var(--ui-accent)] text-[var(--ui-accent)]",
  itemInactive: "text-[var(--ui-text-muted)] hover:text-[var(--ui-text-strong)]",
  mobileItemActive: "bg-[var(--ui-surface-subtle)] text-[var(--ui-accent)]",
  mobileItemInactive: "text-[var(--ui-text-muted)] hover:bg-[var(--ui-surface-subtle)]",
} as const;

const getNavItemClassName = (isActive: boolean) => {
  return `${navStyles.itemBase} ${isActive ? navStyles.itemActive : navStyles.itemInactive}`;
};

const getMobileNavItemClassName = (isActive: boolean) => {
  return `${navStyles.mobileItemBase} ${isActive ? navStyles.mobileItemActive : navStyles.mobileItemInactive}`;
};

export { navStyles, getNavItemClassName, getMobileNavItemClassName };
