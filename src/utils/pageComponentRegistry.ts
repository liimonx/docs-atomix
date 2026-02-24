// Page Component Registry - Maps route categories to page components
// =============================================================================

import { ComponentType } from 'react';
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
  MigrationPage,
  CLIPage,

  // Guide Pages
  GuidesAtomixGlassPerformancePage,
  GuidesAtomixGlassThemingPage,
  GeneralThemingGuidePage,
  ThemeStudioPage,
  DevtoolsOverviewPage,
  DevtoolsInspectorPage,
  DevtoolsPreviewPage,
  DevtoolsComparatorPage,
  DevtoolsLiveEditorPage,
  DevtoolsCLIPage,
  DevtoolsLiveEditorExamplePage,
  DevtoolsInspectorExamplePage,
  DevtoolsPreviewExamplePage,
  DevtoolsComparatorExamplePage,

  // CLI Pages
  CLIOverviewPage,
  CLIUserGuidePage,
  CLIAPIReferencePage,
  CLIMigrationGuidePage,
  CLISecurityGuidePage,

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
type ComponentMapper = (_navItem: NavigationItem, _slugParts: string[]) => ComponentType<any> | null;

/**
 * Registry entry containing a component and its default props
 */
interface RegistryEntry {
  component: ComponentType<any>;
  defaultProps?: Record<string, any>;
}

/**
 * Component registry with category-based and ID-based mappings
 */
class PageComponentRegistry {
  private categoryMap: Map<string, RegistryEntry> = new Map();
  // Use composite key: "category:id" to avoid ID conflicts
  private idMap: Map<string, RegistryEntry> = new Map();
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
    this.idMap.set('api:react', { component: APIReactPage });
    this.idMap.set('api:javascript', { component: APIJavaScriptPage });
    this.idMap.set('api:css', { component: APICSSPage });

    // Component Pages
    this.idMap.set('components:overview', { component: ComponentsOverviewPage });
    this.idMap.set('components:guidelines', { component: ComponentGuidelinesPage });
    // Special case: /docs/components (index page) - when slug is just ['components']
    this.idMap.set('components:index', { component: ComponentsHomePage });
    this.categoryMap.set('components', { component: ComponentPage });

    // Design Token Pages
    this.idMap.set('design-tokens:overview', { component: DesignTokensOverviewPage });
    this.idMap.set('design-tokens:all-tokens', { component: DesignTokensPage });
    this.idMap.set('design-tokens:colors', { component: DesignTokensPage });
    this.idMap.set('design-tokens:spacing', { component: DesignTokensPage });
    this.idMap.set('design-tokens:typography', { component: DesignTokensPage });
    this.idMap.set('design-tokens:grid', { component: DesignTokensGridPage });
    this.idMap.set('design-tokens:elevation', { component: DesignTokensPage });
    this.categoryMap.set('design-tokens', { component: DesignTokensOverviewPage });

    // Getting Started Pages
    // Note: Prop mapping (type) is now handled here
    this.idMap.set('getting-started:installation', { 
      component: GettingStartedPage, 
      defaultProps: { type: 'installation' } 
    });
    this.idMap.set('getting-started:quick-start', { 
      component: GettingStartedPage, 
      defaultProps: { type: 'quickstart' } 
    });
    this.idMap.set('getting-started:introduction', { 
      component: GettingStartedPage, 
      defaultProps: { type: 'introduction' } 
    });
    this.idMap.set('getting-started:migration', { component: MigrationPage });
    this.idMap.set('getting-started:cli', { component: CLIPage });
    this.categoryMap.set('getting-started', { component: GettingStartedPage });

    // CLI Pages
    this.idMap.set('cli:overview', { component: CLIOverviewPage });
    this.idMap.set('cli:user-guide', { component: CLIUserGuidePage });
    this.idMap.set('cli:api-reference', { component: CLIAPIReferencePage });
    this.idMap.set('cli:migration-guide', { component: CLIMigrationGuidePage });
    this.idMap.set('cli:security-guide', { component: CLISecurityGuidePage });
    this.categoryMap.set('cli', { component: CLIOverviewPage });

    // Guide Pages
    this.idMap.set('guides:theming', { component: GeneralThemingGuidePage });
    this.idMap.set('guides:atomix-glass-performance', { component: GuidesAtomixGlassPerformancePage });
    this.idMap.set('guides:atomix-glass-theming', { component: GuidesAtomixGlassThemingPage });
    this.idMap.set('guides:theme-studio', { component: ThemeStudioPage });
    this.idMap.set('guides:devtools', { component: DevtoolsOverviewPage });
    this.idMap.set('guides:devtools-inspector', { component: DevtoolsInspectorPage });
    this.idMap.set('guides:devtools-preview', { component: DevtoolsPreviewPage });
    this.idMap.set('guides:devtools-comparator', { component: DevtoolsComparatorPage });
    this.idMap.set('guides:devtools-live-editor', { component: DevtoolsLiveEditorPage });
    this.idMap.set('guides:devtools-cli', { component: DevtoolsCLIPage });
    this.idMap.set('guides:devtools-live-editor-example', { component: DevtoolsLiveEditorExamplePage });
    this.idMap.set('guides:devtools-inspector-example', { component: DevtoolsInspectorExamplePage });
    this.idMap.set('guides:devtools-preview-example', { component: DevtoolsPreviewExamplePage });
    this.idMap.set('guides:devtools-comparator-example', { component: DevtoolsComparatorExamplePage });
    this.categoryMap.set('guides', { component: GuidesAtomixGlassThemingPage });

    // Layout Pages
    this.idMap.set('layouts:grid', { component: LayoutsGridPage });
    this.idMap.set('layouts:masonry-grid', { component: LayoutsMasonryGridPage });
    this.idMap.set('layouts:responsive-patterns', { component: LayoutsResponsivePatternsPage });
    this.idMap.set('layouts:layout-customization', { component: LayoutsCustomizationPage });
    this.idMap.set('layouts:performance', { component: LayoutsPerformancePage });
    this.categoryMap.set('layouts', { component: LayoutsOverviewPage });

    // Resource Pages
    this.idMap.set('resources:roadmap', { component: ResourcesRoadmapPage });
    this.idMap.set('resources:changelog', { component: ResourcesChangelogPage });
    this.idMap.set('resources:contributing', { component: ResourcesContributingPage });
    this.categoryMap.set('resources', { component: ResourcesRoadmapPage });

    // Style Pages
    this.idMap.set('styles:architecture', { component: StylesArchitecturePage });
    this.idMap.set('styles:customization', { component: StylesCustomizationPage });
    this.idMap.set('styles:utilities', { component: StylesUtilitiesPage });
    this.idMap.set('styles:api-reference', { component: StylesAPIReferencePage });
    this.categoryMap.set('styles', { component: StylesOverviewPage });

    // Example Pages
    this.idMap.set('examples:common-patterns', { component: ExamplesCommonPatternsPage });
    this.categoryMap.set('examples', { component: ExamplesCommonPatternsPage });
  }

  /**
   * Register a component for a specific route ID (with category)
   */
  registerById(category: string, id: string, component: ComponentType<any>, defaultProps?: Record<string, any>): void {
    const key = this.getCompositeKey(category, id);
    this.idMap.set(key, { component, defaultProps });
  }

  /**
   * Register a component for a category
   */
  registerByCategory(category: string, component: ComponentType<any>, defaultProps?: Record<string, any>): void {
    this.categoryMap.set(category, { component, defaultProps });
  }

  /**
   * Register a custom mapper function
   */
  registerMapper(mapper: ComponentMapper): void {
    this.customMappers.push(mapper);
  }

  /**
   * Get entry for a navigation item
   */
  getEntry(item: NavigationItem, slug: string[]): RegistryEntry | null {
    // Try custom mappers first
    for (const mapper of this.customMappers) {
      const component = mapper(item, slug);
      if (component) return { component };
    }

    // Try ID-based mapping with composite key (category:id)
    const compositeKey = this.getCompositeKey(item.category, item.id);
    const idEntry = this.idMap.get(compositeKey);
    if (idEntry) return idEntry;

    // Try category-based mapping
    const categoryEntry = this.categoryMap.get(item.category);
    if (categoryEntry) return categoryEntry;

    return null;
  }

  /**
   * Get entry by category and ID
   */
  getEntryById(category: string, id: string): RegistryEntry | null {
    const key = this.getCompositeKey(category, id);
    return this.idMap.get(key) || null;
  }

  /**
   * Get entry by category only
   */
  getEntryByCategory(category: string): RegistryEntry | null {
    return this.categoryMap.get(category) || null;
  }

  /**
   * DEPRECATED: Use getEntry instead
   */
  getComponent(item: NavigationItem, slug: string[]): ComponentType<any> | null {
    return this.getEntry(item, slug)?.component || null;
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
): ComponentType<any> | null {
  return getPageEntry(item, slug)?.component || null;
}

/**
 * Get page entry (component + props) for a navigation item
 */
export function getPageEntry(
  item: NavigationItem | null,
  slug: string[]
): RegistryEntry | null {
  // Special case: /docs/components (index page) - handle without navigation item
  if (!item && slug.length === 1 && slug[0] === 'components') {
    return pageComponentRegistry.getEntryById('components', 'index');
  }

  if (!item) return null;
  return pageComponentRegistry.getEntry(item, slug);
}

/**
 * Get page component by route path
 */
export function getPageComponentByPath(path: string): ComponentType<any> | null {
  // Use dynamic import to avoid circular dependency
  const routeMapper = require('./routeMapper');
  const item = routeMapper.findNavigationItemByPath(path);
  if (!item) return null;

  const slug = routeMapper.pathToSlug(path);
  return getPageComponent(item, slug);
}

