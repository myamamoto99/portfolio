const navStyles = {
  container: "grid w-[min(68vw,18rem)] grid-cols-3",
  itemBase:
    "w-full border-b-2 border-transparent px-3 py-2 text-center text-sm font-semibold tracking-wide transition-colors duration-200 focus:outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-[var(--ui-focus-ring)]",
  itemActive: "border-[var(--ui-accent)] text-[var(--ui-accent)]",
  itemInactive: "text-[var(--ui-text-muted)] hover:text-[var(--ui-text-strong)]",
} as const;

const getNavItemClassName = (isActive: boolean) => {
  return `${navStyles.itemBase} ${
    isActive ? navStyles.itemActive : navStyles.itemInactive
  }`;
};

export { navStyles, getNavItemClassName };
