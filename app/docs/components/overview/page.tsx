import type { Metadata } from 'next';
import { ComponentsOverviewPage } from '@/page-components';

export const metadata: Metadata = {
  title: 'Components Overview | Atomix Documentation',
  description: 'A comprehensive collection of modern, accessible, and customizable React components. Browse 40+ components with search, filtering, and detailed documentation.',
  openGraph: {
    title: 'Components Overview | Atomix Documentation',
    description: 'A comprehensive collection of modern, accessible, and customizable React components.',
    type: 'website',
    url: 'https://atomix-docs.vercel.app/docs/components/overview',
    siteName: 'Atomix Documentation',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Components Overview | Atomix Documentation',
    description: 'A comprehensive collection of modern, accessible, and customizable React components.',
  },
  alternates: {
    canonical: 'https://atomix-docs.vercel.app/docs/components/overview',
  },
};

export default function ComponentsOverviewRoute() {
  return <ComponentsOverviewPage />;
}