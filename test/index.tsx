import React, { ReactElement } from 'react';
import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Layout } from '../components/layout/layout';

const queryClient = new QueryClient({
  defaultOptions: {
    // Force the cache to clear to ensure responses
    // are as expected for each test.
    queries: {
      cacheTime: 0,
      retry: false,
    },
  },
});

const AllTheProviders: React.FC = ({ children }) => {
  return (
    // <Layout>
    <>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
      <div id="modal-root"></div>
    </>
    // </Layout>
  );
};

const customRender = (ui: ReactElement, options?: any) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
