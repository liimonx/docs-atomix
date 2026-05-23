// Route Helper Utilities
// =============================================================================

import { NavigationItem } from '@/types';
import { navigationData } from '@/data/navigation';
import { findNavigationItemByPath } from './routeMapper';

/**
 * Check if a route is active
 */
export function isRouteActive(currentPath: string, targetPath: string): boolean {
  return currentPath === targetPath;
}

/**
 * Check if a route is a parent of the current route
 */
export function isRouteParent(currentPath: string, targetPath: string): boolean {
  return currentPath.startsWith(targetPath) && currentPath !== targetPath;
}

/**
 * Get the active navigation item for a path
 */
export function getActiveNavigationItem(path: string): NavigationItem | null {
  return findNavigationItemByPath(path);
}

/**
 * Get all sibling routes for a navigation item
 */
export function getSiblingRoutes(item: NavigationItem): NavigationItem[] {
  const section = navigationData.find(s =>
    s.items.some(i => i.id === item.id)
  );

  if (!section) return [];

  return section.items.filter(i => i.id !== item.id);
}

/**
 * Get the next route in sequence
 */
export function getNextRoute(item: NavigationItem): NavigationItem | null {
  const section = navigationData.find(s =>
    s.items.some(i => i.id === item.id)
  );

  if (!section) return null;

  const currentIndex = section.items.findIndex(i => i.id === item.id);
  if (currentIndex < section.items.length - 1) {
    return section.items[currentIndex + 1];
  }

  return null;
}

/**
 * Get the previous route in sequence
 */
export function getPreviousRoute(item: NavigationItem): NavigationItem | null {
  const section = navigationData.find(s =>
    s.items.some(i => i.id === item.id)
  );

  if (!section) return null;

  const currentIndex = section.items.findIndex(i => i.id === item.id);
  if (currentIndex > 0) {
    return section.items[currentIndex - 1];
  }

  return null;
}

/**
 * Get route hierarchy (section -> item)
 */
export function getRouteHierarchy(path: string): {
  section: { id: string; title: string } | null;
  item: NavigationItem | null;
} {
  const item = findNavigationItemByPath(path);
  if (!item) {
    return { section: null, item: null };
  }

  const section = navigationData.find(s =>
    s.items.some(i => i.id === item.id)
  );

  return {
    section: section
      ? { id: section.id, title: section.title }
      : null,
    item,
  };
}

/**
 * Get all routes in a category
 */
export function getRoutesByCategory(category: string): NavigationItem[] {
  return navigationData
    .flatMap(section => section.items)
    .filter(item => item.category === category);
}

/**
 * Get section information for a route
 */
export function getSectionForRoute(path: string): {
  id: string;
  title: string;
  description?: string;
} | null {
  const item = findNavigationItemByPath(path);
  if (!item) return null;

  const section = navigationData.find(s =>
    s.items.some(i => i.id === item.id)
  );

  return section
    ? {
        id: section.id,
        title: section.title,
        description: section.description,
      }
    : null;
}

