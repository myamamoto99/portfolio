const marathonStyles = {
  badgeRow: "absolute right-3 top-3 z-20 flex gap-2",
  statsPanel:
    "absolute inset-x-0 bottom-0 z-20 translate-y-full border-t border-white/20 bg-slate-950/84 p-4 text-white backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0 group-focus-within:translate-y-0",
  statsTitle: "text-xs font-semibold uppercase tracking-[0.14em] text-slate-200",
  statsGrid: "mt-2 grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs md:text-sm",
  statName: "text-slate-300",
  statData: "text-right font-medium",
} as const;

export { marathonStyles };
