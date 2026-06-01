const gameStyles = {
  pageSection: "pb-8 pt-2",
  headerWrap: "mb-5 flex flex-wrap items-end justify-between gap-3",
  filterWrap: "flex flex-wrap gap-2",
  filterButtonBase: "rounded-full px-3 py-1.5 text-xs font-semibold tracking-wide transition-colors md:text-sm",
  filterButtonActive: "bg-[var(--ui-accent)] text-white",
  filterButtonInactive:
    "border border-[var(--ui-border-soft)] bg-[var(--ui-surface-base)] text-[var(--ui-text-muted)] hover:text-[var(--ui-text-strong)]",
  grid: "grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3",
  card:
    "group rounded-2xl border border-[var(--ui-border-soft)] bg-[var(--ui-surface-base)] p-4 shadow-[0_16px_40px_-30px_var(--ui-shadow-elevated)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--ui-accent)]/45 hover:shadow-[0_20px_44px_-28px_var(--ui-shadow-elevated)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ui-focus-ring)]",
  cardVisual:
    "relative mb-3 h-80 overflow-hidden rounded-xl border border-[var(--ui-border-soft)]/60 bg-[linear-gradient(135deg,color-mix(in_oklab,var(--ui-accent)_20%,transparent),var(--ui-surface-soft))]",
  cardPreviewImage: "absolute inset-0 h-full w-full object-cover",
  cardPreviewFrame: "absolute inset-0 h-full w-full origin-top-left scale-100 border-0 pointer-events-none",
  cardPreviewLoading: "absolute inset-0 animate-pulse bg-[linear-gradient(135deg,color-mix(in_oklab,var(--ui-accent)_24%,transparent),var(--ui-surface-soft))]",
  cardPreviewFallback:
    "absolute inset-0 flex items-center justify-center bg-[linear-gradient(145deg,color-mix(in_oklab,var(--ui-accent)_14%,transparent),var(--ui-surface-soft))] text-[var(--ui-text-muted)]",
  cardPreviewDomain:
    "absolute bottom-2 right-2 rounded-full bg-black/55 px-2 py-0.5 text-[10px] font-medium tracking-wide text-white",
  cardTitle: "text-base font-semibold text-[var(--ui-text-strong)]",
  cardHook: "mt-2 text-sm text-[var(--ui-text-muted)]",
  cardMetaRow: "mt-4 flex items-center justify-between text-xs text-[var(--ui-text-muted)]",
  cardThinkingStyle:
    "rounded-full border border-[var(--ui-border-soft)] bg-[var(--ui-surface-soft)] px-2.5 py-1 font-medium",
  cardCta:
    "mt-4 text-sm font-semibold text-[var(--ui-accent)] transition-transform duration-200 group-hover:translate-x-0.5",
} as const;

export { gameStyles };
