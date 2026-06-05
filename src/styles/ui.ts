const uiStyles = {
  panelBase: "rounded-2xl border border-[var(--ui-border-soft)] bg-[var(--ui-surface-base)]",
  heading: "text-base font-semibold text-[var(--ui-text-strong)]",
  mutedTextSm: "text-sm text-[var(--ui-text-muted)]",
  mutedTextBody: "text-[var(--ui-text-muted)]",
  subtleItem: "rounded-lg bg-[var(--ui-surface-subtle)] px-3 py-2",
  zoomButton:
    "inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-black/55 text-white transition-colors duration-200 hover:bg-black/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80",
} as const;

export { uiStyles };
