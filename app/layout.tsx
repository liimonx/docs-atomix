import type { Metadata, Viewport } from 'next';
import { Toaster } from 'react-hot-toast';
import { ResponsiveProvider } from '@/hooks/useResponsive';
import { SearchProvider } from '@/hooks/useSearch';
import { PageLoaderProvider } from '@/components/providers/PageLoaderProvider';
import '@shohojdhara/atomix/css';
import '../src/styles/globals.scss';

export const viewport: Viewport = {
  themeColor: '#0066cc',
};

export const metadata: Metadata = {
  title: {
    default: 'Atomix Documentation',
    template: '%s | Atomix Documentation',
  },
  description: 'A modern React component library documentation site built with Atomix components.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    url: 'https://atomix-docs.vercel.app/',
    title: 'Atomix - Modern React Component Library',
    description: 'A comprehensive, accessible React component library built with TypeScript. Fast, customizable, and developer-friendly.',
    images: [
      {
        url: 'https://atomix-docs.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Atomix Design System',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atomix - Modern React Component Library',
    description: 'A comprehensive, accessible React component library built with TypeScript. Fast, customizable, and developer-friendly.',
    images: ['https://atomix-docs.vercel.app/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var colorMode = localStorage.getItem('atomix-color-mode') || 'dark';
                  document.documentElement.setAttribute('data-atomix-color-mode', colorMode);
                  document.body.setAttribute('data-atomix-color-mode', colorMode);
                } catch (e) {
                  document.documentElement.setAttribute('data-atomix-color-mode', 'dark');
                  document.body.setAttribute('data-atomix-color-mode', 'dark');
                }
              })();
            `,
          }}
        />
        <ResponsiveProvider>
          <SearchProvider>
            <PageLoaderProvider>
              {children}
            </PageLoaderProvider>
          </SearchProvider>
        </ResponsiveProvider>
        <Toaster />
      </body>
    </html>
  );
}

