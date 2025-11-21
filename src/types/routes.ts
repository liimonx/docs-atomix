// Route Type Definitions
// =============================================================================

import { NavigationItem } from './index';

/**
 * Route parameters for dynamic routes
 */
export interface RouteParams {
  slug?: string[];
  componentId?: string;
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
 * Route configuration
 */
export interface RouteConfig {
  path: string;
  category: string | null;
  navigationItem: NavigationItem | null;
  isValid: boolean;
}

/**
 * Component props mapping
 */
export interface ComponentPropsMap {
  [key: string]: unknown;
}

/**
 * Page component with props
 */
export interface PageComponentProps {
  [key: string]: unknown;
}

/**
 * Route metadata
 */
export interface RouteMetadata {
  title: string;
  description: string;
  keywords?: string[];
  category?: string;
}

