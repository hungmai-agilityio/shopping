'use client';

import React from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

export function QueryProvider({ children }: React.PropsWithChildren) {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 60,
        refetchOnWindowFocus: false
      }
    }
  });

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
