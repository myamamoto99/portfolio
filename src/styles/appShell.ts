const appShellStyles = {
  main: "ui-page min-h-screen !px-0 !pt-0 !pb-10",
  header: "ui-sticky-header sticky top-0 z-30",
  headerInner:
    "flex w-full items-center justify-between gap-4 px-3 pb-3 pt-4 md:px-4 md:pb-4 md:pt-5",
  titleWrap: "min-w-0 flex-1",
  title: "ui-title ui-title-cool mb-0",
  navWrap: "shrink-0 mr-3 md:mr-4",
  contentSurface: "ui-content-surface w-full min-h-[calc(100vh-5.5rem)] md:min-h-[calc(100vh-6rem)]",
  contentInner: "w-full px-3 pt-4 md:px-4 md:pt-6",
} as const;

export { appShellStyles };
