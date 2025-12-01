// Route Validation - Centralized route validation logic
// =============================================================================

import { findNavigationItemByPath } from './routeMapper';

/**
 * Validate if a route path exists in navigation
 */
export function isValidRoute(path: string): boolean {
  // Handle special cases
  if (path === '/docs' || path === '/docs/components') {
    return true;
  }
  
  return findNavigationItemByPath(path) !== null;
}

/**
 * Check if route is a component detail page
 */
export function isComponentRoute(path: string): boolean {
  return path.startsWith('/docs/components/') && 
         path !== '/docs/components' &&
         !path.endsWith('/overview') &&
         !path.endsWith('/guidelines');
}

/**
 * Extract component ID from component route
 */
export function getComponentId(path: string): string | null {
  if (!isComponentRoute(path)) return null;
  
  const match = path.match(/\/docs\/components\/([^/]+)$/);
  return match ? match[1] : null;
}

/**
 * Validate component exists in navigation
 */
export function isValidComponent(componentId: string): boolean {
  return isValidRoute(`/docs/components/${componentId}`);
}