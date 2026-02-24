import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";

import { ComponentPage } from "@/page-components";
import { generateComponentMetadata, validateRoute } from "@/utils/routeConfig";

import { getRouteSlugsByOwner } from "@/utils/routeMapper";

// Use 'auto' to allow both static and dynamic generation
export const dynamic = "auto";
export const revalidate = 7200; // Revalidate component pages every 2 hours

export function generateStaticParams() {
  const filteredSlugs = getRouteSlugsByOwner("components");

  return filteredSlugs.map((slug) => ({
    componentId: slug[1],
  }));
}

interface ComponentRouteParams {
  params: Promise<{ componentId: string }>;
}

export async function generateMetadata({
  params,
}: ComponentRouteParams): Promise<Metadata> {
  const resolvedParams = await params;
  return generateComponentMetadata(resolvedParams.componentId);
}

export default async function ComponentPageRoute({
  params,
}: ComponentRouteParams) {
  const resolvedParams = await params;
  const { componentId } = resolvedParams;

  // Exclude routes handled by catch-all
  if (componentId === "overview" || componentId === "guidelines") {
    notFound();
  }

  // Validate component exists
  if (!validateRoute(`/docs/components/${componentId}`)) {
    notFound();
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ComponentPage componentId={componentId} />
    </Suspense>
  );
}
