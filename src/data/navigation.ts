import { NavigationSection, NavigationItem, NavigationBadge } from '../types/index';

// Helper function to create badges
const createBadge = (text: string, variant: NavigationBadge['variant']): NavigationBadge => ({
  text,
  variant
});

// Navigation data structure
export const navigationData: NavigationSection[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'Everything you need to get up and running with Atomix',
    priority: 1,
    collapsed: false,
    items: [
      {
        id: 'introduction',
        title: 'Introduction',
        path: '/docs/introduction',
        icon: 'BookOpen',
        description: 'Welcome to Atomix - A comprehensive design system',
        category: 'getting-started',
        searchTerms: ['intro', 'welcome', 'overview', 'about'],
        priority: 1
      },
      {
        id: 'installation',
        title: 'Installation',
        path: '/docs/getting-started/installation',
        icon: 'Download',
        description: 'Complete setup instructions for Atomix',
        category: 'getting-started',
        searchTerms: ['install', 'setup', 'npm', 'yarn', 'package'],
        priority: 2
      },
      {
        id: 'quick-start',
        title: 'Quick Start',
        path: '/docs/getting-started/quick-start',
        icon: 'Lightning',
        description: '5-minute tutorial to get started',
        category: 'getting-started',
        searchTerms: ['quick', 'start', 'tutorial', 'guide'],
        badge: createBadge('Updated', 'updated'),
        isUpdated: true,
        priority: 3
      },
      {
        id: 'migration',
        title: 'Migration Guide',
        path: '/docs/getting-started/migration',
        icon: 'ArrowRight',
        description: 'Migrate from other design systems',
        category: 'getting-started',
        searchTerms: ['migration', 'upgrade', 'move', 'switch'],
        priority: 4
      }
    ]
  },
  {
    id: 'design-tokens',
    title: 'Design Tokens',
    description: 'The foundation of the Atomix Design System',
    priority: 2,
    collapsed: true,
    items: [
      {
        id: 'colors',
        title: 'Colors',
        path: '/docs/design-tokens/colors',
        icon: 'Palette',
        description: 'Comprehensive color system and palettes',
        category: 'design-tokens',
        searchTerms: ['colors', 'palette', 'theme', 'brand'],
        priority: 1
      },
      {
        id: 'spacing',
        title: 'Spacing',
        path: '/docs/design-tokens/spacing',
        icon: 'ArrowsOut',
        description: 'Spacing and layout system',
        category: 'design-tokens',
        searchTerms: ['spacing', 'margin', 'padding', 'gap'],
        priority: 2
      },
      {
        id: 'typography',
        title: 'Typography',
        path: '/docs/design-tokens/typography',
        icon: 'TextT',
        description: 'Type system and scales',
        category: 'design-tokens',
        searchTerms: ['typography', 'fonts', 'text', 'type'],
        priority: 3
      },
      {
        id: 'grid',
        title: 'Grid',
        path: '/docs/design-tokens/grid',
        icon: 'GridFour',
        description: 'Responsive grid system',
        category: 'design-tokens',
        searchTerms: ['grid', 'layout', 'columns', 'responsive'],
        priority: 4
      },
      {
        id: 'elevation',
        title: 'Elevation',
        path: '/docs/design-tokens/elevation',
        icon: 'Stack',
        description: 'Shadow and depth system',
        category: 'design-tokens',
        searchTerms: ['elevation', 'shadow', 'depth', 'z-index'],
        priority: 4
      }
    ]
  },
  {
    id: 'styles',
    title: 'Styles System',
    description: 'CSS architecture and utilities built on ITCSS',
    priority: 3,
    collapsed: true,
    items: [
      {
        id: 'architecture',
        title: 'Architecture',
        path: '/docs/styles/architecture',
        icon: 'Building',
        description: 'ITCSS structure and organization',
        category: 'styles',
        searchTerms: ['architecture', 'itcss', 'css', 'structure'],
        priority: 1
      },
      {
        id: 'customization',
        title: 'Customization',
        path: '/docs/styles/customization',
        icon: 'Gear',
        description: 'Theming and brand integration',
        category: 'styles',
        searchTerms: ['customization', 'theming', 'brand', 'variables'],
        priority: 2
      },
      {
        id: 'utilities',
        title: 'Utilities',
        path: '/docs/styles/utilities',
        icon: 'Wrench',
        description: 'Complete utility class reference',
        category: 'styles',
        searchTerms: ['utilities', 'classes', 'helpers', 'css'],
        priority: 3
      },
      {
        id: 'api-reference',
        title: 'API Reference',
        path: '/docs/styles/api-reference',
        icon: 'Code',
        description: 'Complete technical reference',
        category: 'styles',
        searchTerms: ['api', 'reference', 'technical', 'docs'],
        priority: 4
      }
    ]
  },
  {
    id: 'layouts',
    title: 'Layouts',
    description: 'Powerful layout system for responsive interfaces',
    priority: 4,
    collapsed: true,
    items: [
      {
        id: 'grid',
        title: 'Grid System',
        path: '/docs/layouts/grid',
        icon: 'GridFour',
        description: 'Comprehensive 12-column responsive grid',
        category: 'layouts',
        searchTerms: ['grid', 'columns', 'responsive', 'layout'],
        priority: 1
      },
      {
        id: 'masonry-grid',
        title: 'Masonry Grid',
        path: '/docs/layouts/masonry-grid',
        icon: 'GridFour',
        description: 'Pinterest-style dynamic layouts',
        category: 'layouts',
        searchTerms: ['masonry', 'pinterest', 'dynamic', 'grid'],
        priority: 2
      },
      {
        id: 'responsive-patterns',
        title: 'Responsive Patterns',
        path: '/docs/layouts/responsive-patterns',
        icon: 'DeviceMobile',
        description: 'Common responsive layout solutions',
        category: 'layouts',
        searchTerms: ['responsive', 'mobile', 'patterns', 'breakpoints'],
        priority: 3
      },
      {
        id: 'layout-customization',
        title: 'Customization',
        path: '/docs/layouts/customization',
        icon: 'Gear',
        description: 'Theming and advanced configuration',
        category: 'layouts',
        searchTerms: ['customization', 'configuration', 'theming'],
        priority: 4
      },
      {
        id: 'performance',
        title: 'Performance',
        path: '/docs/layouts/performance',
        icon: 'Lightning',
        description: 'Optimization strategies',
        category: 'layouts',
        searchTerms: ['performance', 'optimization', 'speed'],
        priority: 5
      }
    ]
  },
  {
    id: 'components',
    title: 'Components',
    description: 'Comprehensive component library with React and vanilla JS',
    priority: 5,
    collapsed: false,
    items: [
      {
        id: 'overview',
        title: 'Overview',
        path: '/docs/components/overview',
        icon: 'GridFour',
        description: 'All available components',
        category: 'components',
        searchTerms: ['overview', 'components', 'library'],
        priority: 1
      },
      {
        id: 'guidelines',
        title: 'Guidelines',
        path: '/docs/components/guidelines',
        icon: 'BookOpen',
        description: 'Development standards and best practices',
        category: 'components',
        searchTerms: ['guidelines', 'standards', 'best practices'],
        priority: 2
      },
      {
        id: 'accordion',
        title: 'Accordion',
        path: '/docs/components/accordion',
        icon: 'List',
        description: 'Collapsible content sections with smooth animations',
        category: 'components',
        searchTerms: ['accordion', 'collapsible', 'expand', 'collapse'],
        priority: 3
      },
      {
        id: 'atomix-glass',
        title: 'AtomixGlass',
        path: '/docs/components/atomix-glass',
        icon: 'Drop',
        description: 'Advanced glass morphism effect with WebGL shaders',
        category: 'components',
        searchTerms: ['glass', 'morphism', 'effect', 'webgl'],
        priority: 4
      },
      {
        id: 'button',
        title: 'Button',
        path: '/docs/components/button',
        icon: 'Mouse',
        description: 'Customizable button component with multiple variants',
        category: 'components',
        searchTerms: ['button', 'click', 'action', 'submit'],
        priority: 5
      },
      {
        id: 'card',
        title: 'Card',
        path: '/docs/components/card',
        icon: 'CreditCard',
        description: 'Flexible container component for content',
        category: 'components',
        searchTerms: ['card', 'container', 'content', 'panel'],
        priority: 4
      },
      {
        id: 'input',
        title: 'Input',
        path: '/docs/components/input',
        icon: 'TextT',
        description: 'Text input field with validation support',
        category: 'components',
        searchTerms: ['input', 'text', 'form', 'field'],
        priority: 5
      },
      {
        id: 'form',
        title: 'Form',
        path: '/docs/components/form',
        icon: 'FileText',
        description: 'Form components and validation',
        category: 'components',
        searchTerms: ['form', 'input', 'validation', 'fields'],
        priority: 10
      },
      {
        id: 'avatar',
        title: 'Avatar',
        path: '/docs/components/avatar',
        icon: 'User',
        description: 'Display user profile images, initials, or icons',
        category: 'components',
        searchTerms: ['avatar', 'profile', 'user', 'image'],
        priority: 11
      },
      {
        id: 'badge',
        title: 'Badge',
        path: '/docs/components/badge',
        icon: 'Tag',
        description: 'Compact UI element for displaying status indicators and labels',
        category: 'components',
        searchTerms: ['badge', 'status', 'label', 'indicator'],
        priority: 12
      },
      {
        id: 'breadcrumb',
        title: 'Breadcrumb',
        path: '/docs/components/breadcrumb',
        icon: 'NavigationArrow',
        description: 'Hierarchical navigation showing the user\'s location',
        category: 'components',
        searchTerms: ['breadcrumb', 'navigation', 'path', 'hierarchy'],
        priority: 13
      },
      {
        id: 'dropdown',
        title: 'Dropdown',
        path: '/docs/components/dropdown',
        icon: 'CaretDown',
        description: 'Flexible menu system with various triggers and placements',
        category: 'components',
        searchTerms: ['dropdown', 'menu', 'select', 'options'],
        priority: 14
      },
      {
        id: 'modal',
        title: 'Modal',
        path: '/docs/components/modal',
        icon: 'Square',
        description: 'Modal dialog component',
        category: 'components',
        searchTerms: ['modal', 'dialog', 'popup', 'overlay'],
        priority: 15
      },
      {
        id: 'tab',
        title: 'Tab',
        path: '/docs/components/tab',
        icon: 'Layout',
        description: 'Tabbed interfaces for organizing content into separate panels',
        category: 'components',
        searchTerms: ['tab', 'tabs', 'panel', 'content'],
        priority: 16
      },
      {
        id: 'tooltip',
        title: 'Tooltip',
        path: '/docs/components/tooltip',
        icon: 'Question',
        description: 'Contextual information on hover with rich content support',
        category: 'components',
        searchTerms: ['tooltip', 'hover', 'info', 'popup'],
        priority: 17
      }
    ]
  },
  {
    id: 'guides',
    title: 'Guides',
    description: 'In-depth guides and tutorials for mastering Atomix',
    priority: 6,
    collapsed: true,
    items: [
      {
        id: 'theming',
        title: 'Theming Guide',
        path: '/docs/guides/theming',
        icon: 'Palette',
        description: 'Advanced theming techniques and customization',
        category: 'guides',
        searchTerms: ['theming', 'customization', 'brand', 'colors'],
        priority: 1
      },
      {
        id: 'atomix-glass-performance',
        title: 'AtomixGlass Performance',
        path: '/docs/guides/atomix-glass-performance',
        icon: 'Lightning',
        description: 'Optimizing AtomixGlass for performance',
        category: 'guides',
        searchTerms: ['performance', 'glass', 'optimization'],
        badge: createBadge('New', 'new'),
        isNew: true,
        priority: 2
      },
      {
        id: 'atomix-glass-theming',
        title: 'AtomixGlass Theming',
        path: '/docs/guides/atomix-glass-theming',
        icon: 'Drop',
        description: 'Customizing AtomixGlass themes',
        category: 'guides',
        searchTerms: ['glass', 'theming', 'customization'],
        priority: 3
      }
    ]
  },
  {
    id: 'examples',
    title: 'Examples',
    description: 'Real-world examples and implementation patterns',
    priority: 7,
    collapsed: true,
    items: [
      {
        id: 'common-patterns',
        title: 'Common Patterns',
        path: '/docs/examples/common-patterns',
        icon: 'GridFour',
        description: 'Reusable layout patterns',
        category: 'examples',
        searchTerms: ['patterns', 'layouts', 'common'],
        priority: 1
      }
    ]
  },
  {
    id: 'api',
    title: 'API Reference',
    description: 'Complete technical reference for all APIs',
    priority: 8,
    collapsed: true,
    items: [
      {
        id: 'react',
        title: 'React API',
        path: '/docs/api/react',
        icon: 'Code',
        description: 'React component reference and props',
        category: 'api',
        searchTerms: ['react', 'api', 'props', 'components'],
        priority: 1
      },
      {
        id: 'javascript',
        title: 'JavaScript API',
        path: '/docs/api/javascript',
        icon: 'FileCode',
        description: 'Vanilla JS class reference',
        category: 'api',
        searchTerms: ['javascript', 'vanilla', 'js', 'api'],
        priority: 2
      },
      {
        id: 'css',
        title: 'CSS API',
        path: '/docs/api/css',
        icon: 'Palette',
        description: 'CSS classes and custom properties',
        category: 'api',
        searchTerms: ['css', 'classes', 'properties', 'styles'],
        priority: 3
      }
    ]
  },
  {
    id: 'resources',
    title: 'Resources',
    description: 'Additional resources, community, and project information',
    priority: 9,
    collapsed: true,
    items: [
      {
        id: 'roadmap',
        title: 'Roadmap',
        path: '/docs/resources/roadmap',
        icon: 'NavigationArrow',
        description: 'Product development timeline',
        category: 'resources',
        searchTerms: ['roadmap', 'timeline', 'development'],
        priority: 1
      },
      {
        id: 'changelog',
        title: 'Changelog',
        path: '/docs/resources/changelog',
        icon: 'FileText',
        description: 'Release notes and version history',
        category: 'resources',
        searchTerms: ['changelog', 'releases', 'versions', 'history'],
        priority: 2
      },
      {
        id: 'contributing',
        title: 'Contributing',
        path: '/docs/resources/contributing',
        icon: 'Heart',
        description: 'How to contribute to the project',
        category: 'resources',
        searchTerms: ['contributing', 'community', 'development'],
        priority: 3
      }
    ]
  }
];

// Helper functions for navigation
export const findNavigationItem = (id: string): NavigationItem | null => {
  for (const section of navigationData) {
    const item = section.items.find(item => item.id === id);
    if (item) return item;
  }
  return null;
};

export const findNavigationSection = (id: string): NavigationSection | null => {
  return navigationData.find(section => section.id === id) || null;
};

export const getNavigationByCategory = (category: string): NavigationItem[] => {
  return navigationData
    .flatMap(section => section.items)
    .filter(item => item.category === category);
};

export const searchNavigation = (query: string): NavigationItem[] => {
  const lowercaseQuery = query.toLowerCase();
  return navigationData
    .flatMap(section => section.items)
    .filter(item =>
      item.title.toLowerCase().includes(lowercaseQuery) ||
      item.description?.toLowerCase().includes(lowercaseQuery) ||
      item.searchTerms?.some(term => term.toLowerCase().includes(lowercaseQuery))
    )
    .sort((a, b) => (a.priority || 999) - (b.priority || 999));
};