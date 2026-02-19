// Breadcrumb Generation Utility
// =============================================================================

import { NavigationItem, NavigationSection } from '@/types';
import { pathMap, sectionMap, itemToSectionMap } from '@/data/navigation';
import { pathToSlug, slugToPath } from './routeMapper';

export interface BreadcrumbItem {
  label: string;
  path: string;
  isActive?: boolean;
}

/**
 * Generate breadcrumbs from a route path
 */
export function generateBreadcrumbs(path: string): BreadcrumbItem[] {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', path: '/' },
    { label: 'Documentation', path: '/docs' },
  ];

  // Find the navigation item for this path
  const navigationItem = pathMap.get(path);

  if (!navigationItem) {
    // If not found, try to build from path segments
    const slug = pathToSlug(path);
    if (slug.length > 0) {
      // Add section breadcrumb
      const section = sectionMap.get(slug[0]);
      if (section) {
        breadcrumbs.push({
          label: section.title,
          path: `/docs/${slug[0]}`,
        });
      }

      // Add current page (without path since we don't have the item)
      breadcrumbs.push({
        label: slug[slug.length - 1]
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' '),
        path,
        isActive: true,
      });
    }
    return breadcrumbs;
  }

  // Find the section this item belongs to
  const section = itemToSectionMap.get(navigationItem.id);

  if (section) {
    // Add section breadcrumb if it's not the root
    if (section.id !== 'getting-started' || navigationItem.id !== 'introduction') {
      breadcrumbs.push({
        label: section.title,
        path: getSectionPath(section),
      });
    }
  }

  // Add current page
  breadcrumbs.push({
    label: navigationItem.title,
    path: navigationItem.path,
    isActive: true,
  });

  return breadcrumbs;
}

/**
 * Generate breadcrumbs from a slug array
 */
export function generateBreadcrumbsFromSlug(slug: string[]): BreadcrumbItem[] {
  const path = slugToPath(slug);
  return generateBreadcrumbs(path);
}

/**
 * Get the path for a navigation section
 */
function getSectionPath(section: NavigationSection): string {
  // Try to find an overview/index page for the section
  const overviewItem = section.items.find(
    item => item.id === 'overview' || item.id === section.id
  );

  if (overviewItem) {
    return overviewItem.path;
  }

  // Fallback to first item in section
  if (section.items.length > 0) {
    return section.items[0].path;
  }

  // Last resort: construct from section ID
  return `/docs/${section.id}`;
}

/**
 * Get parent breadcrumbs for a navigation item
 */
export function getParentBreadcrumbs(item: NavigationItem): BreadcrumbItem[] {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', path: '/' },
    { label: 'Documentation', path: '/docs' },
  ];

  const section = itemToSectionMap.get(item.id);

  if (section) {
    breadcrumbs.push({
      label: section.title,
      path: getSectionPath(section),
    });
  }

  return breadcrumbs;
}

