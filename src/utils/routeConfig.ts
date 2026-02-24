// Route Configuration - Route configuration, metadata generation, and route validation
// =============================================================================

import type { Metadata } from 'next';
import { NavigationItem } from '@/types';
import { findNavigationItemByPath, slugToPath } from './routeMapper';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://atomix-docs.vercel.app';
const SITE_NAME = 'Atomix Documentation';

/**
 * Generate metadata from navigation item
 */
export function generateMetadataFromNavigation(
  navigationItem: NavigationItem | null,
  path?: string
): Metadata {
  if (!navigationItem) {
    return {
      title: 'Page Not Found | Atomix Documentation',
      description: 'The requested page could not be found.',
    };
  }

  const fullPath = path || navigationItem.path;
  const title = `${navigationItem.title} | ${SITE_NAME}`;
  const description = navigationItem.description || 
    `Documentation for ${navigationItem.title} - part of the Atomix Design System.`;
  const url = `${BASE_URL}${fullPath}`;

  // Generate keywords from navigation item
  const keywords = [
    'Atomix',
    'Design System',
    'React Components',
    navigationItem.category,
    ...(navigationItem.searchTerms || []),
  ].filter(Boolean);

  return {
    title,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: 'Atomix Team' }],
    creator: 'Atomix Design System',
    publisher: 'Atomix',
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
      url,
      siteName: SITE_NAME,
      locale: 'en_US',
      images: [
        {
          url: `${BASE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@atomix',
      images: [`${BASE_URL}/og-image.png`],
    },
    alternates: {
      canonical: url,
    },
    category: navigationItem.category,
  };
}

/**
 * Generate metadata for documentation overview
 */
export function generateDocumentationOverviewMetadata(): Metadata {
  return {
    title: "Documentation",
    description:
      "Complete documentation for the Atomix Design System. Explore 40+ components, design tokens, layouts, guides, and API references. Everything you need to build amazing user interfaces.",
    openGraph: {
      title: "Documentation | Atomix Design System",
      description:
        "Complete documentation for the Atomix Design System. Explore 40+ components, design tokens, layouts, and guides.",
      type: "website",
      url: "https://atomix-docs.vercel.app/docs",
      siteName: "Atomix Documentation",
    },
    twitter: {
      card: "summary_large_image",
      title: "Documentation | Atomix Design System",
      description: "Complete documentation for the Atomix Design System.",
    },
    alternates: {
      canonical: "https://atomix-docs.vercel.app/docs",
    },
  };
}

/**
 * Generate metadata for components index
 */
export function generateComponentsIndexMetadata(): Metadata {
  return {
    title: "Components",
    description:
      "A comprehensive collection of modern, accessible, and customizable React components. Browse 40+ components with search, filtering, and detailed documentation.",
    openGraph: {
      title: "Components | Atomix Documentation",
      description:
        "A comprehensive collection of modern, accessible, and customizable React components.",
      type: "website",
      url: "https://atomix-docs.vercel.app/docs/components",
      siteName: "Atomix Documentation",
    },
    twitter: {
      card: "summary_large_image",
      title: "Components | Atomix Documentation",
      description:
        "A comprehensive collection of modern, accessible, and customizable React components.",
    },
    alternates: {
      canonical: "https://atomix-docs.vercel.app/docs/components",
    },
  };
}

/**
 * Generate metadata from slug array, handling special index routes
 */
export function generateMetadataFromSlug(slug: string[]): Metadata {
  // Handle /docs (empty slug)
  if (slug.length === 0) {
    return generateDocumentationOverviewMetadata();
  }

  // Handle /docs/components (index page)
  if (slug.length === 1 && slug[0] === "components") {
    return generateComponentsIndexMetadata();
  }

  const path = slugToPath(slug);
  const navigationItem = findNavigationItemByPath(path);
  return generateMetadataFromNavigation(navigationItem, path);
}

/**
 * Generate metadata for component detail page
 */
export function generateComponentMetadata(componentId: string): Metadata {
  const navigationItem = findNavigationItemByPath(`/docs/components/${componentId}`);
  
  if (!navigationItem) {
    return {
      title: 'Component Not Found | Atomix Documentation',
      description: 'The requested component could not be found.',
    };
  }

  const title = `${navigationItem.title} | ${SITE_NAME}`;
  const description = navigationItem.description || 
    `Documentation for ${navigationItem.title} component - part of the Atomix Design System. Learn how to use, customize, and implement this component in your React applications.`;
  const url = `${BASE_URL}/docs/components/${componentId}`;

  // Generate keywords for component
  const keywords = [
    'Atomix',
    'Design System',
    'React Components',
    navigationItem.title,
    'Component Documentation',
    ...(navigationItem.searchTerms || []),
  ].filter(Boolean);

  return {
    title,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: 'Atomix Team' }],
    creator: 'Atomix Design System',
    publisher: 'Atomix',
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
      url,
      siteName: SITE_NAME,
      locale: 'en_US',
      images: [
        {
          url: `${BASE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@atomix',
      images: [`${BASE_URL}/og-image.png`],
    },
    alternates: {
      canonical: url,
    },
    category: 'components',
  };
}

/**
 * Validate route path
 */
export function validateRoute(path: string): boolean {
  // Handle special cases
  if (path === '/docs' || path === '/docs/components') {
    return true;
  }
  
  // Check if it's a full path in navigation
  if (findNavigationItemByPath(path) !== null) {
    return true;
  }

  // Check if it's a component ID (legacy fallback for component detail routes)
  if (findNavigationItemByPath(`/docs/components/${path}`) !== null) {
    return true;
  }

  return false;
}

/**
 * Validate slug array
 */
export function validateSlug(slug: string[]): boolean {
  const path = slugToPath(slug);
  return validateRoute(path);
}

/**
 * Get route configuration for a path
 */
export interface RouteConfig {
  path: string;
  category: string | null;
  navigationItem: NavigationItem | null;
  metadata: Metadata;
  isValid: boolean;
}

export function getRouteConfig(path: string): RouteConfig {
  const navigationItem = findNavigationItemByPath(path);
  const category = navigationItem?.category || null;
  const metadata = generateMetadataFromNavigation(navigationItem, path);
  const isValid = navigationItem !== null;

  return {
    path,
    category,
    navigationItem,
    metadata,
    isValid,
  };
}

