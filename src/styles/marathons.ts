const marathonStyles = {
  grid: "grid h-full auto-rows-[280px] content-start gap-px pt-0 md:grid-cols-2 md:auto-rows-[340px]",
  image: "absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] group-focus-within:scale-[1.03]",
  sectionContainer: "group relative h-full overflow-hidden border border-[var(--ui-border-soft)]/70 bg-[var(--ui-surface-base)] outline-none focus-visible:ring-2 focus-visible:ring-[var(--ui-focus-ring)]",
  statName: "text-slate-300",
  statData: "text-right font-medium",
} as const;

export { marathonStyles };
