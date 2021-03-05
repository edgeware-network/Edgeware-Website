import * as React from 'react'
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { QueryClient, QueryClientProvider } from 'react-query';

import * as gtag from "../utils/gtag";

const queryClient = new QueryClient();

import '../styles/global.scss';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

import { Layout } from '../components/layout/layout';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  React.useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <Layout meta={pageProps.meta} {...pageProps.layout} currentPath={router.pathname}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Layout>
  );
}

export default MyApp;
