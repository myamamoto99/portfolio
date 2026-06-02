const bakingStyles = {
	cardButton:
		"group relative block h-full w-full overflow-hidden border border-[var(--ui-border-soft)]/70 bg-[var(--ui-surface-base)] text-left outline-none focus-visible:ring-2 focus-visible:ring-[var(--ui-focus-ring)]",
	expandBadge:
		"absolute right-3 top-3 z-20 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/35 bg-black/50 text-white/95 transition-colors duration-200 group-hover:bg-black/62 group-focus-visible:bg-black/62",
	modalBackdrop: "fixed inset-0 z-50 bg-slate-950/86 p-4 backdrop-blur-sm md:p-8",
	modalFrame: "relative mx-auto flex h-full w-full max-w-6xl items-center justify-center",
	modalImageWrap:
		"relative h-full max-h-[92vh] w-full overflow-hidden rounded-xl border border-white/15 bg-slate-950/40 shadow-2xl",
	modalImage: "object-contain",
	modalClose:
		"absolute right-2 top-2 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/55 text-white transition-colors duration-200 hover:bg-black/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80",
	modalMeta:
		"absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/72 via-black/35 to-transparent px-5 pb-4 pt-12 text-white",
	modalTitle: "text-lg font-semibold md:text-xl",
	modalDate: "mt-1 text-sm text-slate-200",
    modalZoomControls: "absolute bottom-2 right-2 z-20 flex space-x-2",
};

export { bakingStyles };