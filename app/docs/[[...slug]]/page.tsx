// Dynamic Route Handler - Catch-all route for all documentation pages
// =============================================================================

 

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { resolveRoute, getAllRouteSlugs } from '@/utils/routeMapper';
import { getPageComponent } from '@/utils/pageComponentRegistry';
import { generateMetadataFromSlug } from '@/utils/routeConfig';
import type { RouteParams, ComponentPropsMap } from '@/types/routes';
import DocumentationOverviewPage from '@/page-components/common/DocumentationOverviewPage';

interface DynamicPageProps {
  params: RouteParams;
}

// Generate static params for all routes
export async function generateStaticParams() {
  const allSlugs = getAllRouteSlugs();
  
  // Filter out component detail routes - these are handled by [componentId] route
  const filteredSlugs = allSlugs.filter(slug => {
    // Exclude component detail routes (e.g., ['components', 'button'])
    // These should be handled by /docs/components/[componentId] route
    if (slug.length >= 2 && slug[0] === 'components') {
      // Only include 'overview' and 'guidelines', exclude all component detail routes
      return slug[1] === 'overview' || slug[1] === 'guidelines';
    }
    return true; // Include all other routes
  });
  
  // Include empty slug for /docs overview page
  return [
    { slug: [] }, // For /docs
    ...filteredSlugs.map(slug => ({
      slug,
    })),
  ];
}

// Generate metadata for the route
export async function generateMetadata({ params }: DynamicPageProps): Promise<Metadata> {
  const slug = params.slug || [];
  
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
  
  return generateMetadataFromSlug(slug);
}

export default async function DynamicDocsPage({ params }: DynamicPageProps) {
  const slug = params.slug || [];
  
  // Handle empty slug - show documentation overview page
  if (slug.length === 0) {
    return <DocumentationOverviewPage />;
  }
  
  // Resolve the route
  const routeResolution = resolveRoute(slug);
  
  // Route resolution debug (development only)
  
  // Handle invalid routes
  if (!routeResolution.isValid) {
    notFound();
  }
  
  // Handle component detail pages (these are handled by the [componentId] route)
  // Next.js routing precedence means [componentId] is more specific than [[...slug]],
  // but we exclude them here as a safety measure to avoid conflicts
  if (routeResolution.isComponentDetail && routeResolution.componentId) {
    // Let the [componentId] route handle component detail pages
    // This should not normally be reached due to route precedence, but acts as a fallback
    notFound();
  }
  
  // Get the navigation item
  const navigationItem = routeResolution.navigationItem;
  if (!navigationItem) {
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
  const componentProps = getComponentProps(navigationItem);
  
  return <PageComponent {...componentProps} />;
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

