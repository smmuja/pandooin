import { MainLayout } from "layout";
import "styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import ReactQueryProvider from "utils/providers";
import { QueryClient } from "react-query";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <>
      <Head>
        <title>
          Zamrood by Pandooin | Premium Travel Experiences in Indonesia
        </title>
      </Head>
      <MainLayout>
        <ReactQueryProvider>
          <Component {...pageProps} />
        </ReactQueryProvider>
      </MainLayout>
    </>
  );
}
