import { Router } from "next/router";
import type { AppProps } from "next/app";

import NProgress from "nprogress";

import "../styles/globals.css";
import "../styles/nprogress.css";
import AppLayout from "layouts/AppLayout";

function MyApp({ Component, pageProps }: AppProps) {
  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });
  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });
  Router.events.on("routeChangeError", () => NProgress.done());

  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;