import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/globals.css';
import { ThemeProvider } from './hooks/useTheme';
import { SearchProvider } from './hooks/useSearch';
import { ResponsiveProvider } from './hooks/useResponsive';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ResponsiveProvider>
      <ThemeProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </ThemeProvider>
    </ResponsiveProvider>
  </React.StrictMode>
);
