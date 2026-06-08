const controlsStyles = {
  container: "flex justify-between flex-wrap",
  wrap: "inline-flex rounded-xl border border-[var(--ui-border-soft)] bg-[var(--ui-surface-base)] p-1 mb-4",
  sortContainer: "mb-4 flex items-center justify-end gap-2",
  sortLabel: "text-xs font-semibold uppercase tracking-wide text-[var(--ui-text-muted)]",
  sortSelect:
    "rounded-md border border-[var(--ui-border-soft)] bg-[var(--ui-surface-base)] px-3 py-2 text-sm text-[var(--ui-text-strong)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ui-focus-ring)]",
  buttonBase:
    "inline-flex min-h-9 items-center gap-1.5 rounded-md px-3 py-2 text-sm font-semibold tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ui-focus-ring)]",
  buttonActive: "bg-[var(--ui-accent)] text-white",
  buttonInactive:
    "text-[var(--ui-text-muted)] hover:bg-[var(--ui-surface-soft)] hover:text-[var(--ui-text-strong)]",
  icon: "h-4 w-4",
};

export { controlsStyles };
