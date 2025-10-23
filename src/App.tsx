import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';

// Layout
import { AppLayout } from './components/layout/AppLayout';

// Pages
import HomePage from './pages/HomePage';
import ComponentPage from './pages/ComponentPage';
import GettingStartedPage  from './pages/GettingStartedPage';
import ComponentsIndexPage from './pages/ComponentsIndexPage';
import DesignTokensPage from './pages/DesignTokensPage';
import NotFoundPage from './pages/NotFoundPage';

// Styles
import './styles/globals.css';



function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
            <Route path="/*" element={<AppLayout />}>
              <Route index element={<HomePage />} />
              
              {/* Getting Started Routes */}
              <Route path="docs/introduction" element={<GettingStartedPage type="introduction" />} />
              <Route path="docs/installation" element={<GettingStartedPage type="installation" />} />
              <Route path="docs/quickstart" element={<GettingStartedPage type="quickstart" />} />
              <Route path="docs/theming" element={<GettingStartedPage type="theming" />} />
              
              {/* Components */}
              <Route path="components" element={<ComponentsIndexPage />} />
              <Route path="docs/components/:componentId" element={<ComponentPage />} />
              
              {/* Design System */}
              <Route path="design-tokens" element={<DesignTokensPage />} />
              <Route path="guidelines" element={<Navigate to="/" replace />} />
              <Route path="accessibility" element={<Navigate to="/" replace />} />
              
              {/* Resources */}
              <Route path="examples" element={<Navigate to="/" replace />} />
              <Route path="migration" element={<Navigate to="/" replace />} />
              <Route path="changelog" element={<Navigate to="/" replace />} />
              <Route path="contributing" element={<Navigate to="/" replace />} />
              <Route path="resources" element={<Navigate to="/" replace />} />
              
              {/* Catch-all routes */}
              <Route path="docs/*" element={<Navigate to="/" replace />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: 'var(--atomix-bg-secondary)',
              color: 'var(--atomix-text-primary)',
              border: '1px solid var(--atomix-border)',
            },
            success: {
              iconTheme: {
                primary: 'var(--atomix-success)',
                secondary: 'var(--atomix-bg-primary)',
              },
            },
            error: {
              iconTheme: {
                primary: 'var(--atomix-error)',
                secondary: 'var(--atomix-bg-primary)',
              },
            },
          }}
        />
      </Router>
    </HelmetProvider>
  );
}

export default App;
