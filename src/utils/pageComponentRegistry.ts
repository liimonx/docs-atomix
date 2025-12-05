// Page Component Registry - Maps route categories to page components
// =============================================================================

import React from 'react';
import {
  // API Pages
  APICSSPage,
  APIJavaScriptPage,
  APIReactPage,
  
  // Component Pages
  ComponentsHomePage,
  ComponentsOverviewPage,
  ComponentPage,
  ComponentGuidelinesPage,
  
  // Design Token Pages
  DesignTokensPage,
  DesignTokensOverviewPage,
  DesignTokensGridPage,
  
  // Getting Started Pages
  GettingStartedPage,
  GettingStartedOverviewPage,
  MigrationPage,
  
  // Guide Pages
  GuidesAtomixGlassPerformancePage,
  GuidesAtomixGlassThemingPage,
  GeneralThemingGuidePage,
  
  // Layout Pages
  LayoutsOverviewPage,
  LayoutsGridPage,
  LayoutsMasonryGridPage,
  LayoutsCustomizationPage,
  LayoutsPerformancePage,
  LayoutsResponsivePatternsPage,
  
  // Resource Pages
  ResourcesChangelogPage,
  ResourcesContributingPage,
  ResourcesRoadmapPage,
  
  // Style Pages
  StylesOverviewPage,
  StylesArchitecturePage,
  StylesCustomizationPage,
  StylesUtilitiesPage,
  StylesAPIReferencePage,
  
  // Example Pages
  ExamplesCommonPatternsPage,
} from '@/page-components';

import { NavigationItem } from '@/types';

/**
 * Component mapping function type
 */
type ComponentMapper = (__item: NavigationItem, __slug: string[]) => React.ComponentType<any> | null;

/**
 * Component registry with category-based and ID-based mappings
 */
class PageComponentRegistry {
  private categoryMap: Map<string, React.ComponentType<any>> = new Map();
  // Use composite key: "category:id" to avoid ID conflicts
  private idMap: Map<string, React.ComponentType<any>> = new Map();
  private customMappers: ComponentMapper[] = [];

  constructor() {
    this.initializeDefaultMappings();
  }

  /**
   * Get composite key for ID mapping
   */
  private getCompositeKey(category: string, id: string): string {
    return `${category}:${id}`;
  }

  /**
   * Initialize default component mappings
   */
  private initializeDefaultMappings(): void {
    // API Pages
    this.idMap.set('api:react', APIReactPage);
    this.idMap.set('api:javascript', APIJavaScriptPage);
    this.idMap.set('api:css', APICSSPage);

    // Component Pages
    this.idMap.set('components:overview', ComponentsOverviewPage);
    this.idMap.set('components:guidelines', ComponentGuidelinesPage);
    // Special case: /docs/components (index page) - when slug is just ['components']
    this.idMap.set('components:index', ComponentsHomePage);
    this.categoryMap.set('components', ComponentPage);

    // Design Token Pages
    this.idMap.set('design-tokens:overview', DesignTokensOverviewPage);
    this.idMap.set('design-tokens:all-tokens', DesignTokensPage);
    this.idMap.set('design-tokens:colors', DesignTokensPage);
    this.idMap.set('design-tokens:spacing', DesignTokensPage);
    this.idMap.set('design-tokens:typography', DesignTokensPage);
    this.idMap.set('design-tokens:grid', DesignTokensGridPage);
    this.idMap.set('design-tokens:elevation', DesignTokensPage);
    this.categoryMap.set('design-tokens', DesignTokensOverviewPage);

    // Getting Started Pages
    // Note: GettingStartedPage needs 'type' prop, handled in route handler
    this.idMap.set('getting-started:introduction', GettingStartedOverviewPage);
    this.idMap.set('getting-started:installation', GettingStartedPage);
    this.idMap.set('getting-started:quick-start', GettingStartedPage);
    this.idMap.set('getting-started:migration', MigrationPage);
    this.categoryMap.set('getting-started', GettingStartedOverviewPage);

    // Guide Pages
    this.idMap.set('guides:theming', GeneralThemingGuidePage);
    this.idMap.set('guides:atomix-glass-performance', GuidesAtomixGlassPerformancePage);
    this.idMap.set('guides:atomix-glass-theming', GuidesAtomixGlassThemingPage);
    this.categoryMap.set('guides', GuidesAtomixGlassThemingPage);

    // Layout Pages
    this.idMap.set('layouts:grid', LayoutsGridPage);
    this.idMap.set('layouts:masonry-grid', LayoutsMasonryGridPage);
    this.idMap.set('layouts:responsive-patterns', LayoutsResponsivePatternsPage);
    this.idMap.set('layouts:layout-customization', LayoutsCustomizationPage);
    this.idMap.set('layouts:performance', LayoutsPerformancePage);
    this.categoryMap.set('layouts', LayoutsOverviewPage);

    // Resource Pages
    this.idMap.set('resources:roadmap', ResourcesRoadmapPage);
    this.idMap.set('resources:changelog', ResourcesChangelogPage);
    this.idMap.set('resources:contributing', ResourcesContributingPage);
    this.categoryMap.set('resources', ResourcesRoadmapPage);

    // Style Pages
    this.idMap.set('styles:architecture', StylesArchitecturePage);
    this.idMap.set('styles:customization', StylesCustomizationPage);
    this.idMap.set('styles:utilities', StylesUtilitiesPage);
    this.idMap.set('styles:api-reference', StylesAPIReferencePage);
    this.categoryMap.set('styles', StylesOverviewPage);

    // Example Pages
    this.idMap.set('examples:common-patterns', ExamplesCommonPatternsPage);
    this.categoryMap.set('examples', ExamplesCommonPatternsPage);
  }

  /**
   * Register a component for a specific route ID (with category)
   */
  registerById(category: string, id: string, component: React.ComponentType<any>): void {
    const key = this.getCompositeKey(category, id);
    this.idMap.set(key, component);
  }

  /**
   * Register a component for a category
   */
  registerByCategory(category: string, component: React.ComponentType<any>): void {
    this.categoryMap.set(category, component);
  }

  /**
   * Register a custom mapper function
   */
  registerMapper(mapper: ComponentMapper): void {
    this.customMappers.push(mapper);
  }

  /**
   * Get component for a navigation item
   */
  getComponent(item: NavigationItem, slug: string[]): React.ComponentType<any> | null {
    // Try custom mappers first
    for (const mapper of this.customMappers) {
      const component = mapper(item, slug);
      if (component) return component;
    }

    // Try ID-based mapping with composite key (category:id)
    const compositeKey = this.getCompositeKey(item.category, item.id);
    const idComponent = this.idMap.get(compositeKey);
    if (idComponent) return idComponent;

    // Try category-based mapping
    const categoryComponent = this.categoryMap.get(item.category);
    if (categoryComponent) return categoryComponent;

    return null;
  }

  /**
   * Get component by category and ID
   */
  getComponentById(category: string, id: string): React.ComponentType<any> | null {
    const key = this.getCompositeKey(category, id);
    return this.idMap.get(key) || null;
  }

  /**
   * Get component by category only
   */
  getComponentByCategory(category: string): React.ComponentType<any> | null {
    return this.categoryMap.get(category) || null;
  }

  /**
   * Check if a component exists for a category and ID
   */
  hasComponentById(category: string, id: string): boolean {
    const key = this.getCompositeKey(category, id);
    return this.idMap.has(key);
  }

  /**
   * Check if a component exists for a category
   */
  hasComponentByCategory(category: string): boolean {
    return this.categoryMap.has(category);
  }
}

// Export singleton instance
export const pageComponentRegistry = new PageComponentRegistry();

/**
 * Get page component for a navigation item
 */
export function getPageComponent(
  item: NavigationItem | null,
  slug: string[]
): React.ComponentType<any> | null {
  // Special case: /docs/components (index page) - handle without navigation item
  if (!item && slug.length === 1 && slug[0] === 'components') {
    return pageComponentRegistry.getComponentById('components', 'index');
  }
  
  if (!item) return null;
  return pageComponentRegistry.getComponent(item, slug);
}

/**
 * Get page component by route path
 */
export function getPageComponentByPath(path: string): React.ComponentType<any> | null {
  // Use dynamic import to avoid circular dependency
  const routeMapper = require('./routeMapper');
  const item = routeMapper.findNavigationItemByPath(path);
  if (!item) return null;
  
  const slug = routeMapper.pathToSlug(path);
  return getPageComponent(item, slug);
}

