import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './index';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from 'styled-components';
import { theme } from '../utils';
import Globalstyle from '../utils/styling/global-style';

export default function App() {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Globalstyle />
          <Router />
          {/* <ReactQueryDevtools initialIsOpen={true} /> */}
        </QueryClientProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
