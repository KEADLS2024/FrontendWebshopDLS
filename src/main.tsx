// root
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './contexts/AuthContext';
import theme from './theme';

// Opretter en ny QueryClient for at administrere asynkrone forespørgsler og caching.
const queryClient = new QueryClient();

// Finder roden til applikationens DOM-element.
const rootElement = document.getElementById('root');
if (rootElement) {
  // Renderer applikationen inden i det fundne DOM-element. 
  // Indkapsler applikationen i de nødvendige providere.
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>       
            <RouterProvider router={router} />
          </AuthProvider>
        </QueryClientProvider>
      </ChakraProvider>
    </React.StrictMode>
  );
}
