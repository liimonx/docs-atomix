// Dynamic Route Handler - Catch-all route for all documentation pages
// =============================================================================

 

import type { Metadata } from 'next';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { resolveRoute, getAllRouteSlugs } from '@/utils/routeMapper';
import { getPageComponent } from '@/utils/pageComponentRegistry';
import { generateMetadataFromSlug } from '@/utils/routeConfig';
import type { RouteParams, ComponentPropsMap } from '@/types/routes';
import DocumentationOverviewPage from '@/page-components/common/DocumentationOverviewPage';

interface DynamicPageProps {
  params: Promise<RouteParams>;
}

// Generate static params for all routes
export async function generateStaticParams() {
  const allSlugs = getAllRouteSlugs();
  
  // Filter out ALL component detail routes - these are handled by [componentId] route
  const filteredSlugs = allSlugs.filter(slug => {
    // Exclude ALL component detail routes except overview and guidelines
    if (slug.length >= 2 && slug[0] === 'components') {
      return slug[1] === 'overview' || slug[1] === 'guidelines';
    }
    return true;
  });
  
  return [
    { slug: [] }, // For /docs
    { slug: ['components'] }, // For /docs/components index
    ...filteredSlugs.map(slug => ({ slug })),
  ];
}

// Generate metadata for the route
export async function generateMetadata({ params }: DynamicPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug || [];
  
  // Handle empty slug - return docs overview metadata
  if (slug.length === 0) {
    return {
      title: 'Documentation | Atomix Design System',
      description: 'Complete documentation for the Atomix Design System. Explore 40+ components, design tokens, layouts, guides, and API references. Everything you need to build amazing user interfaces.',
      openGraph: {
        title: 'Documentation | Atomix Design System',
        description: 'Complete documentation for the Atomix Design System. Explore 40+ components, design tokens, layouts, and guides.',
        type: 'website',
        url: 'https://atomix-docs.vercel.app/docs',
        siteName: 'Atomix Documentation',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Documentation | Atomix Design System',
        description: 'Complete documentation for the Atomix Design System.',
      },
      alternates: {
        canonical: 'https://atomix-docs.vercel.app/docs',
      },
    };
  }
  
  // Handle /docs/components (index page) - special metadata
  if (slug.length === 1 && slug[0] === 'components') {
    return {
      title: 'Components | Atomix Documentation',
      description: 'A comprehensive collection of modern, accessible, and customizable React components. Browse 40+ components with search, filtering, and detailed documentation.',
      openGraph: {
        title: 'Components | Atomix Documentation',
        description: 'A comprehensive collection of modern, accessible, and customizable React components.',
        type: 'website',
        url: 'https://atomix-docs.vercel.app/docs/components',
        siteName: 'Atomix Documentation',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Components | Atomix Documentation',
        description: 'A comprehensive collection of modern, accessible, and customizable React components.',
      },
      alternates: {
        canonical: 'https://atomix-docs.vercel.app/docs/components',
      },
    };
  }
  
  return generateMetadataFromSlug(slug);
}

export default async function DynamicDocsPage({ params }: DynamicPageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug || [];
  
  // Handle empty slug - show documentation overview page
  if (slug.length === 0) {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <DocumentationOverviewPage />
      </Suspense>
    );
  }
  
  // Resolve the route
  const routeResolution = resolveRoute(slug);
  
  // Handle invalid routes
  if (!routeResolution.isValid) {
    notFound();
  }
  
  // Explicitly handle component detail routes - redirect to [componentId] route
  if (routeResolution.isComponentDetail && routeResolution.componentId) {
    notFound(); // Let [componentId] route handle these
  }
  
  // Get the navigation item
  const navigationItem = routeResolution.navigationItem;
  
  // Special case: /docs/components (index page) - no navigation item needed
  const isComponentsIndex = slug.length === 1 && slug[0] === 'components';
  
  if (!navigationItem && !isComponentsIndex) {
    notFound();
  }
  
  // Get the page component
  const PageComponent = getPageComponent(navigationItem, slug);
  
  if (!PageComponent) {
    // If no component found, return 404
    notFound();
  }
  
  // Render the component with appropriate props
  // Some components need specific props (e.g., GettingStartedPage needs 'type')
  const componentProps = navigationItem ? getComponentProps(navigationItem) : {};
  
  // Wrap in Suspense to handle async boundaries properly
  // This prevents React errors when async server components render client components
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageComponent {...componentProps} />
    </Suspense>
  );
}

/**
 * Get component props based on navigation item
 * 
 * Some page components require specific props:
 * - GettingStartedPage: requires 'type' prop ('introduction' | 'installation' | 'quickstart' | 'theming')
 * - ComponentPage: requires 'componentId' prop (for component detail pages, but those use [componentId] route)
 */
function getComponentProps(
  navigationItem: { category: string; id: string }
): ComponentPropsMap {
  const props: ComponentPropsMap = {};
  
  // Handle GettingStartedPage which needs 'type' prop
  if (navigationItem.category === 'getting-started') {
    const id = navigationItem.id;
    if (id === 'installation') {
      props.type = 'installation';
    } else if (id === 'quick-start') {
      props.type = 'quickstart';
    } else if (id === 'introduction') {
      props.type = 'introduction';
    }
    // Note: 'theming' type is not used in navigation, but supported by GettingStartedPage
  }
  
  // Note: ComponentPage with componentId prop is handled by [componentId] route,
  // not the catch-all route, so we don't need to handle it here
  
  return props;
}

