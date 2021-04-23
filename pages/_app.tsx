import Head from 'next/head';
import * as React from 'react';
import { AppProps } from 'next/app';
import dynamic from "next/dynamic";

import '../styles/base.scss';

const ReactTooltip = dynamic(() => import("react-tooltip"), {
  ssr: false,
});

export default function MyApp({
  Component,
  pageProps
}: AppProps): React.ReactNode {
  const lang = 'en';
  React.useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <title>Droob - Application</title>
      </Head>
      <Component {...pageProps} />
      <ReactTooltip effect="solid" type="light" />
    </>
  );
}
