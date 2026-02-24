// Dynamic Route Handler - Catch-all route for all documentation pages
// =============================================================================

import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { resolveRoute, getRouteSlugsByOwner } from "@/utils/routeMapper";
import { getPageEntry } from "@/utils/pageComponentRegistry";
import { generateMetadataFromSlug } from "@/utils/routeConfig";
import type { RouteParams } from "@/types/routes";
import DocumentationOverviewPage from "@/page-components/common/DocumentationOverviewPage";

// Use 'auto' to allow both static and dynamic generation
export const dynamic = "auto";
export const revalidate = 3600; // Default static revalidation (1 hour)

interface DynamicPageProps {
  params: Promise<RouteParams>;
}

// Generate static params for all routes handled by the catch-all
export async function generateStaticParams() {
  const filteredSlugs = getRouteSlugsByOwner("catch-all");

  // Ensure root and components index are included
  const unique = new Map<string, string[]>();
  unique.set("__root__", []);
  unique.set("components", ["components"]);

  for (const slug of filteredSlugs) {
    const key = slug.length ? slug.join("/") : "__root__";
    unique.set(key, slug);
  }

  return Array.from(unique.values()).map((slug) => ({ slug }));
}

// Generate metadata delegated to routeConfig
export async function generateMetadata({
  params,
}: DynamicPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug || [];
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

  // Handle component detail routes - they belong to [componentId] route
  if (routeResolution.isComponentDetail && routeResolution.componentId) {
    notFound();
  }

  // Get the page entry (component + props)
  const navigationItem = routeResolution.navigationItem;
  const pageEntry = getPageEntry(navigationItem, slug);

  if (!pageEntry) {
    notFound();
  }

  const { component: PageComponent, defaultProps = {} } = pageEntry;

  // Wrap in Suspense to handle async boundaries properly
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageComponent {...defaultProps} />
    </Suspense>
  );
}
