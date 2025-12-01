import type { Metadata } from 'next';
import { ComponentGuidelinesPage } from '@/page-components';

export const metadata: Metadata = {
  title: 'Component Guidelines | Atomix Documentation',
  description: 'Guidelines and best practices for using Atomix components effectively in your applications.',
  openGraph: {
    title: 'Component Guidelines | Atomix Documentation',
    description: 'Guidelines and best practices for using Atomix components effectively.',
    type: 'website',
    url: 'https://atomix-docs.vercel.app/docs/components/guidelines',
    siteName: 'Atomix Documentation',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Component Guidelines | Atomix Documentation',
    description: 'Guidelines and best practices for using Atomix components effectively.',
  },
  alternates: {
    canonical: 'https://atomix-docs.vercel.app/docs/components/guidelines',
  },
};

export default function ComponentGuidelinesRoute() {
  return <ComponentGuidelinesPage />;
}

