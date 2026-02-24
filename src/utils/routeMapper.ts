// Route Mapper - Maps navigation paths to page components and handles route resolution
// =============================================================================

import { navigationData, pathMap } from '@/data/navigation';
import { NavigationItem } from '@/types';

/**
 * Convert a path string to a slug array
 * Example: '/docs/getting-started/installation' -> ['getting-started', 'installation']
 */
export function pathToSlug(path: string): string[] {
  return path
    .replace(/^\/docs\//, '')
    .split('/')
    .filter(Boolean);
}

/**
 * Convert a slug array to a path string
 * Example: ['getting-started', 'installation'] -> '/docs/getting-started/installation'
 */
export function slugToPath(slug: string[]): string {
  return `/docs/${slug.join('/')}`;
}

/**
 * Find navigation item by path
 */
export function findNavigationItemByPath(path: string): NavigationItem | null {
  return pathMap.get(path) || null;
}

/**
 * Find navigation item by slug array
 */
export function findNavigationItemBySlug(slug: string[]): NavigationItem | null {
  const path = slugToPath(slug);
  return findNavigationItemByPath(path);
}

/**
 * Get all routes from navigation data
 */
export function getAllRoutes(): NavigationItem[] {
  return navigationData.flatMap(section => section.items);
}

/**
 * Get all route paths
 */
export function getAllRoutePaths(): string[] {
  return getAllRoutes().map(item => item.path);
}

/**
 * Get all route slugs for static generation
 */
export function getAllRouteSlugs(): string[][] {
  return getAllRoutes().map(item => pathToSlug(item.path));
}

/**
 * Check if a route exists in navigation data
 */
export function routeExists(path: string): boolean {
  return findNavigationItemByPath(path) !== null;
}

/**
 * Check if a slug array represents a valid route
 */
export function slugExists(slug: string[]): boolean {
  return findNavigationItemBySlug(slug) !== null;
}

/**
 * Get route category from path
 */
export function getRouteCategory(path: string): string | null {
  const item = findNavigationItemByPath(path);
  return item?.category || null;
}

/**
 * Get route category from slug
 */
export function getRouteCategoryFromSlug(slug: string[]): string | null {
  const item = findNavigationItemBySlug(slug);
  return item?.category || null;
}

/**
 * Check if route is a component detail page
 */
export function isComponentDetailRoute(path: string): boolean {
  return path.startsWith('/docs/components/') && 
         path !== '/docs/components' &&
         path !== '/docs/components/overview' &&
         path !== '/docs/components/guidelines';
}

/**
 * Check if route is a component detail route from slug
 */
export function isComponentDetailSlug(slug: string[]): boolean {
  const path = slugToPath(slug);
  return isComponentDetailRoute(path);
}

/**
 * Extract component ID from path
 */
export function extractComponentId(path: string): string | null {
  if (!isComponentDetailRoute(path)) return null;
  const match = path.match(/\/docs\/components\/([^/]+)$/);
  return match ? match[1] : null;
}

/**
 * Extract component ID from slug
 */
export function extractComponentIdFromSlug(slug: string[]): string | null {
  if (slug.length >= 2 && slug[0] === 'components' && slug[1] !== 'overview' && slug[1] !== 'guidelines') {
    return slug[1];
  }
  return null;
}

/**
 * Route resolution result
 */
export interface RouteResolution {
  navigationItem: NavigationItem | null;
  category: string | null;
  componentId: string | null;
  isValid: boolean;
  isComponentDetail: boolean;
}

/**
 * Resolve a route from slug array
 */
export function resolveRoute(slug: string[]): RouteResolution {
  const path = slugToPath(slug);
  const navigationItem = findNavigationItemByPath(path);
  const category = navigationItem?.category || null;
  const componentId = extractComponentIdFromSlug(slug);
  const isComponentDetail = isComponentDetailSlug(slug);
  
  // Special cases
  const isComponentsIndex = slug.length === 1 && slug[0] === 'components';
  const isValid = navigationItem !== null || isComponentsIndex;

  return {
    navigationItem,
    category: category || (isComponentsIndex ? 'components' : null),
    componentId,
    isValid,
    isComponentDetail,
  };
}

/**
 * Get route slugs filtered by their rendering owner
 */
export function getRouteSlugsByOwner(owner: 'catch-all' | 'components'): string[][] {
  const allSlugs = getAllRouteSlugs();

  if (owner === 'catch-all') {
    return allSlugs.filter((slug) => {
      // Components index, overview, and guidelines are handled by catch-all
      if (slug.length >= 2 && slug[0] === 'components') {
        return slug[1] === 'overview' || slug[1] === 'guidelines';
      }
      // Everything else EXCEPT deep component pages
      return true;
    });
  }

  if (owner === 'components') {
    return allSlugs.filter((slug) => {
      // Only deep component pages (e.g., /docs/components/button)
      return slug.length >= 2 && 
             slug[0] === 'components' && 
             slug[1] !== 'overview' && 
             slug[1] !== 'guidelines';
    });
  }

  return [];
}

