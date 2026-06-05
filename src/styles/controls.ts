const controlsStyles = {
  wrap: "inline-flex rounded-xl border border-[var(--ui-border-soft)] bg-[var(--ui-surface-base)] p-1 mb-2",
  buttonBase:
    "inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold tracking-wide transition-colors md:text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ui-focus-ring)]",
  buttonActive: "bg-[var(--ui-accent)] text-white",
  buttonInactive:
    "text-[var(--ui-text-muted)] hover:bg-[var(--ui-surface-soft)] hover:text-[var(--ui-text-strong)]",
  icon: "h-4 w-4",
};

export { controlsStyles };
