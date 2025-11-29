import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ComponentPage } from "@/page-components";
import { navigationData } from "@/data/navigation";
import { generateComponentMetadata, validateRoute } from "@/utils/routeConfig";

export function generateStaticParams() {
  // Get all component IDs from navigation data
  const componentSection = navigationData.find(
    (section) => section.id === "components"
  );
  if (!componentSection) return [];

  return componentSection.items
    .filter((item) => item.id !== "overview" && item.id !== "guidelines")
    .map((item) => ({
      componentId: item.id,
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
  const path = `/docs/components/${componentId}`;

  // Validate the route against navigation configuration to ensure we only
  // render valid component documentation pages. If the route is invalid,
  // fall back to the global 404 experience for consistency.
  if (!validateRoute(path)) {
    notFound();
  }

  return <ComponentPage componentId={componentId} />;
}
