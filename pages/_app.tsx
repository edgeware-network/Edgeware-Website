import * as React from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThirdwebProvider, localWallet, metamaskWallet } from '@thirdweb-dev/react';
import { EdgewareEdgeevm } from '@thirdweb-dev/chains';

import * as gtag from '../utils/gtag';

const queryClient = new QueryClient();

import '../styles/global.scss';
import '../styles/tailwind.css';

import { Layout } from '../components/layout/layout';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  React.useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <Layout meta={pageProps.meta} {...pageProps.layout} currentPath={router.pathname}>
      <QueryClientProvider client={queryClient}>
        <ThirdwebProvider
          activeChain={{ ...EdgewareEdgeevm, rpc: ['https://edgeware-evm.jelliedowl.net'] }}
          clientId="a768a5d757fbd7a552b1a6c5749039ee"
          supportedWallets={[metamaskWallet(), localWallet()]}
        >
          <Component {...pageProps} />
        </ThirdwebProvider>
      </QueryClientProvider>
    </Layout>
  );
}

export default MyApp;
