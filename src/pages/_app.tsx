import type { AppProps } from "next/app";
import AppNav from "@/components/appNav";

import StoreProvider from "@/store/StoreProvider";
import { appShellStyles } from "@/styles/appShell";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <main className={appShellStyles.main}>
        <header className={appShellStyles.header}>
          <div className={appShellStyles.headerInner}>
            <div className={appShellStyles.titleWrap}>
              <h1 className={appShellStyles.title}>
                <span className="ui-title-main">Mimi&apos;s Playground</span>
              </h1>
            </div>

            <div className={appShellStyles.navWrap}>
              <AppNav />
            </div>
          </div>
        </header>

        <section className={appShellStyles.contentSurface}>
          <div className={appShellStyles.contentInner}>
            <Component {...pageProps} />
          </div>
        </section>
      </main>
    </StoreProvider>
  );
}
