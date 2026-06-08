import { uiStyles } from "@/styles/ui";

const homeStyles = {
  section: "grid h-full content-start items-start gap-4 pt-2",
  aboutCard: `${uiStyles.panelBase} p-6 shadow-[0_18px_40px_-34px_var(--ui-shadow-elevated)] md:p-8`,
  aboutInner: "relative",
  sectionTitle: uiStyles.heading,
  bodyText: `text-base leading-7 ${uiStyles.mutedTextBody} md:text-[17px]`,
  contentGrid: "grid gap-4 md:grid-cols-2",
  panel: `${uiStyles.panelBase} p-6 shadow-[0_18px_40px_-34px_var(--ui-shadow-elevated)]`,
  list: `mt-4 list-disc space-y-2 pl-5 marker:text-[var(--ui-text-muted)] ${uiStyles.mutedTextSm} leading-6`,
  listItem: `${uiStyles.mutedTextSm} leading-6`,
  skillsWrap: `mt-4 space-y-4 ${uiStyles.mutedTextSm} leading-6`,
  skillItem: "space-y-1 border-t border-[var(--ui-border-soft)] pt-4 first:border-t-0 first:pt-0",
  resumeWrap: "mt-4 space-y-6",
  resumeItem: "space-y-2 border-t border-[var(--ui-border-soft)] pt-5 first:border-t-0 first:pt-0",
  resumeList:
    "mt-3 list-disc space-y-1.5 pl-5 text-xs leading-5 text-[var(--ui-text-muted)] marker:text-[var(--ui-text-muted)] md:mt-4 md:space-y-2 md:text-sm md:leading-6",
  resumeListItem: "leading-inherit",
  resumeHeader: "text-sm font-semibold text-[var(--ui-text-strong)] md:text-base",
  resumeSubtle: "font-medium text-[var(--ui-text-muted)]",
  resumeMeta: `text-xs uppercase tracking-wide ${uiStyles.mutedTextSm}`,
  skillLabel: "text-xs font-semibold uppercase tracking-wide text-[var(--ui-text-strong)]",
  skillValue: "mt-1",
} as const;

export { homeStyles };
