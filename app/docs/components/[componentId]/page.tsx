import type { Metadata } from 'next';
import ComponentPage from '@/page-components/components/ComponentPage';
import { navigationData } from '@/data/navigation';
import { findNavigationItem } from '@/data/navigation';

export async function generateStaticParams() {
  // Get all component IDs from navigation data
  const componentSection = navigationData.find((section) => section.id === 'components');
  if (!componentSection) return [];

  return componentSection.items
    .filter((item) => item.id !== 'overview' && item.id !== 'guidelines')
    .map((item) => ({
      componentId: item.id,
    }));
}

export async function generateMetadata({
  params,
}: {
  params: { componentId: string };
}): Promise<Metadata> {
  const navigationItem = findNavigationItem(params.componentId);
  
  if (!navigationItem) {
    return {
      title: 'Component Not Found',
      description: 'The requested component could not be found.',
    };
  }

  const title = `${navigationItem.title} | Atomix Documentation`;
  const description = navigationItem.description || `Documentation for ${navigationItem.title} component - part of the Atomix Design System. Learn how to use, customize, and implement this component in your React applications.`;

  return {
    title,
    description,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://atomix-docs.vercel.app/docs/components/${params.componentId}`,
      siteName: 'Atomix Documentation',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `https://atomix-docs.vercel.app/docs/components/${params.componentId}`,
    },
  };
}

export default function ComponentPageRoute({
  params,
}: {
  params: { componentId: string };
}) {
  return <ComponentPage componentId={params.componentId} />;
}

