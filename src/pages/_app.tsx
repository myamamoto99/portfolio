import type { AppProps } from "next/app";
import AppNav from "@/components/appNav";

import StoreProvider from "@/store/StoreProvider";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <main className="ui-page min-h-screen !px-0 !pt-0 !pb-10">
        <header className="ui-sticky-header sticky top-0 z-30">
          <div className="flex w-full items-center justify-between gap-4 px-3 pb-3 pt-4 md:px-4 md:pb-4 md:pt-5">
            <div className="min-w-0 flex-1">
              <h1 className="ui-title ui-title-cool mb-0">
                <span className="ui-title-main">Mimi&apos;s Playground</span>
              </h1>
            </div>

            <div className="shrink-0">
              <AppNav />
            </div>
          </div>
        </header>

        <section className="ui-content-surface w-full min-h-[calc(100vh-5.5rem)] md:min-h-[calc(100vh-6rem)]">
          <div className="w-full px-3 pt-4 md:px-4 md:pt-6">
            <Component {...pageProps} />
          </div>
        </section>
      </main>
    </StoreProvider>
  );
}
