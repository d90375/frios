import Layout from "../components/layout";
import "../styles/globals.css";

import React from "react";

export default function App({ Component, pageProps, ...appProps }) {
  const LayoutComponent =  Layout 

  return (
    <ThemeProvider defaultTheme='light' attribute='class'>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </ThemeProvider>
  );
}
