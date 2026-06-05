import { uiStyles } from "@/styles/ui";

const homeStyles = {
  section: "grid h-full content-start items-start gap-6 pt-2",
  aboutCard:
    "relative overflow-hidden rounded-3xl border border-[var(--ui-border-soft)] bg-[var(--ui-surface-base)] p-6 shadow-[0_20px_48px_-32px_var(--ui-shadow-elevated)] md:p-8",
  aboutInner: "relative",
  sectionTitle: uiStyles.heading,
  bodyText: `text-base leading-7 ${uiStyles.mutedTextBody} md:text-[17px]`,
  secondaryGrid: "grid gap-4 md:grid-cols-2",
  panel: `${uiStyles.panelBase} p-6 shadow-[0_18px_40px_-34px_var(--ui-shadow-elevated)]`,
  list: `mt-4 space-y-3 ${uiStyles.mutedTextSm} leading-6`,
  listItem: uiStyles.subtleItem,
  skillsWrap: `mt-4 space-y-4 ${uiStyles.mutedTextSm} leading-6`,
  skillLabel: "text-xs font-semibold uppercase tracking-wide text-[var(--ui-text-strong)]",
  skillValue: "mt-1",
} as const;

export { homeStyles };
