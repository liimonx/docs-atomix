import type { Metadata, Viewport } from 'next';
import { Toaster } from 'react-hot-toast';
import { ResponsiveProvider } from '@/hooks/useResponsive';
import { SearchProvider } from '@/hooks/useSearch';
import { Providers } from '@/components/providers/Providers';
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning className="u-bg-background-light dark:u-bg-background-dark u-color-text-primary u-font-display">
        <Providers>
          <ResponsiveProvider>
            <SearchProvider>
              {children}
            </SearchProvider>
          </ResponsiveProvider>
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
