import type { AppProps /*, AppContext */ } from 'next/app';
import { useRouter } from 'next/router';

import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

import '../styles/global.scss';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

import { Layout } from '../components/layout/layout';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <Layout meta={pageProps.meta} {...pageProps.layout} currentPath={router.pathname}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Layout>
  );
}

export default MyApp;
