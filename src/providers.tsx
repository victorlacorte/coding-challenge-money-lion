'use client';

import type { Env } from '@/types';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import { Reshaped } from 'reshaped';

type Props = {
  children: React.ReactNode;
  env: Env;
};

function Providers(props: Readonly<Props>) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <Reshaped theme="reshaped">
      <QueryClientProvider client={queryClient}>
        {props.children}
        {props.env.NODE_ENV === 'development' ? (
          <ReactQueryDevtools initialIsOpen={false} />
        ) : null}
      </QueryClientProvider>
    </Reshaped>
  );
}

export default Providers;
