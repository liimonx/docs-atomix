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
import DocumentationOverviewPage from './pages/DocumentationOverviewPage';
import NotFoundPage from './pages/NotFoundPage';

// New imports for pages
import StylesArchitecturePage from './pages/StylesArchitecturePage';
import StylesCustomizationPage from './pages/StylesCustomizationPage';
import StylesUtilitiesPage from './pages/StylesUtilitiesPage';
import StylesAPIReferencePage from './pages/StylesAPIReferencePage';
import LayoutsGridPage from './pages/LayoutsGridPage';
import LayoutsMasonryGridPage from './pages/LayoutsMasonryGridPage';
import LayoutsResponsivePatternsPage from './pages/LayoutsResponsivePatternsPage';
import LayoutsCustomizationPage from './pages/LayoutsCustomizationPage';
import LayoutsPerformancePage from './pages/LayoutsPerformancePage';
import GuidesAtomixGlassPerformancePage from './pages/GuidesAtomixGlassPerformancePage';
import ExamplesCommonPatternsPage from './pages/ExamplesCommonPatternsPage';
import APIReactPage from './pages/APIReactPage';
import APIJavaScriptPage from './pages/APIJavaScriptPage';
import APICSSPage from './pages/APICSSPage';
import ResourcesRoadmapPage from './pages/ResourcesRoadmapPage';
import ResourcesContributingPage from './pages/ResourcesContributingPage';

// Overview pages
import GettingStartedOverviewPage from './pages/GettingStartedOverviewPage';
import DesignTokensOverviewPage from './pages/DesignTokensOverviewPage';
import StylesOverviewPage from './pages/StylesOverviewPage';
import LayoutsOverviewPage from './pages/LayoutsOverviewPage';
import ComponentsHomePage from './pages/ComponentsHomePage';

// Styles
import './styles/globals.css';
import { useTheme } from './hooks/useTheme';



function App() {
  const { theme, toggleTheme } = useTheme();
  const colorModeToggle = () => theme === 'dark';
  return (
    <HelmetProvider>
      <Router future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}>
        <Routes>
            <Route path="/*" element={<AppLayout />}>
              <Route index element={<HomePage />} />
              
              {/* Documentation Overview */}
              <Route path="docs" element={<DocumentationOverviewPage />} />
              <Route path="docs/introduction" element={<GettingStartedPage type="introduction" />} />
              
              {/* Getting Started Routes */}
              <Route path="docs/getting-started" element={<GettingStartedOverviewPage />} />
              <Route path="docs/getting-started/installation" element={<GettingStartedPage type="installation" />} />
              <Route path="docs/getting-started/quick-start" element={<GettingStartedPage type="quickstart" />} />
              <Route path="docs/getting-started/migration" element={<Navigate to="/docs/introduction" replace />} />
              
              {/* Design Tokens */}
              <Route path="docs/design-tokens" element={<DesignTokensOverviewPage />} />
              <Route path="docs/design-tokens/colors" element={<DesignTokensPage />} />
              <Route path="docs/design-tokens/spacing" element={<DesignTokensPage />} />
              <Route path="docs/design-tokens/typography" element={<DesignTokensPage />} />
              <Route path="docs/design-tokens/elevation" element={<DesignTokensPage />} />
              
              {/* Styles System */}
              <Route path="docs/styles" element={<StylesOverviewPage />} />
              <Route path="docs/styles/architecture" element={<StylesArchitecturePage />} />
              <Route path="docs/styles/customization" element={<StylesCustomizationPage />} />
              <Route path="docs/styles/utilities" element={<StylesUtilitiesPage />} />
              <Route path="docs/styles/api-reference" element={<StylesAPIReferencePage />} />
              
              {/* Layouts */}
              <Route path="docs/layouts" element={<LayoutsOverviewPage />} />
              <Route path="docs/layouts/grid" element={<LayoutsGridPage />} />
              <Route path="docs/layouts/masonry-grid" element={<LayoutsMasonryGridPage />} />
              <Route path="docs/layouts/responsive-patterns" element={<LayoutsResponsivePatternsPage />} />
              <Route path="docs/layouts/customization" element={<LayoutsCustomizationPage />} />
              <Route path="docs/layouts/performance" element={<LayoutsPerformancePage />} />
              
              {/* Components */}
              <Route path="docs/components" element={<ComponentsHomePage />} />
              <Route path="docs/components/overview" element={<ComponentsIndexPage />} />
              <Route path="docs/components/guidelines" element={<Navigate to="/docs/components/overview" replace />} />
              <Route path="docs/components/:componentId" element={<ComponentPage />} />
              
              {/* Guides */}
              <Route path="docs/guides/theming" element={<GettingStartedPage type="theming" />} />
              <Route path="docs/guides/atomix-glass-performance" element={<GuidesAtomixGlassPerformancePage />} />
              
              {/* Examples */}
              <Route path="docs/examples/common-patterns" element={<ExamplesCommonPatternsPage />} />
              
              {/* API Reference */}
              <Route path="docs/api/react" element={<APIReactPage />} />
              <Route path="docs/api/javascript" element={<APIJavaScriptPage />} />
              <Route path="docs/api/css" element={<APICSSPage />} />
              
              {/* Resources */}
              <Route path="docs/resources/roadmap" element={<ResourcesRoadmapPage />} />
              <Route path="docs/resources/contributing" element={<ResourcesContributingPage />} />
              
              {/* Legacy redirects */}
              <Route path="components" element={<Navigate to="/docs/components/overview" replace />} />
              <Route path="design-tokens" element={<Navigate to="/docs/design-tokens/colors" replace />} />
              <Route path="docs/installation" element={<Navigate to="/docs/getting-started/installation" replace />} />
              <Route path="docs/quickstart" element={<Navigate to="/docs/getting-started/quick-start" replace />} />
              <Route path="docs/theming" element={<Navigate to="/docs/guides/theming" replace />} />
              
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