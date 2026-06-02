const imageFillBase = "absolute inset-0 h-full w-full object-cover";

const gridStyles = {
  grid: "grid h-full auto-rows-[280px] content-start gap-px pt-0 md:grid-cols-2 md:auto-rows-[340px]",
  bakingGrid:
    "grid h-full auto-rows-[260px] content-start gap-px pt-0 md:grid-cols-3 md:auto-rows-[280px]",
  imageFillBase,
  image: `${imageFillBase} transition-transform duration-500 group-hover:scale-[1.03] group-focus-within:scale-[1.03]`,
  sectionContainer: "group relative h-full overflow-hidden border border-[var(--ui-border-soft)]/70 bg-[var(--ui-surface-base)] outline-none focus-visible:ring-2 focus-visible:ring-[var(--ui-focus-ring)]",
  overlay: "absolute inset-0 bg-gradient-to-t from-slate-950/58 via-slate-950/18 to-transparent",
  bottomInfo:
    "absolute inset-x-0 bottom-0 z-10 p-4 text-white transition-opacity duration-300 group-hover:opacity-0 group-focus-within:opacity-0",
  title: "text-base font-semibold leading-tight md:text-lg",
  date: "mt-1 text-xs text-slate-100/90 md:text-sm",
} as const;

export { gridStyles };
