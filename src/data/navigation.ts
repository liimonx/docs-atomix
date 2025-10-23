import { NavigationSection, NavigationItem, NavigationBadge } from '@types/index';

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
    items: [
      {
        id: 'introduction',
        title: 'Introduction',
        path: '/docs/introduction',
        icon: 'BookOpen',
        description: 'Welcome to Atomix - A modern React component library',
        category: 'getting-started',
        searchTerms: ['intro', 'welcome', 'overview', 'about'],
        priority: 1
      },
      {
        id: 'installation',
        title: 'Installation',
        path: '/docs/installation',
        icon: 'Download',
        description: 'Install Atomix in your React project',
        category: 'getting-started',
        searchTerms: ['install', 'setup', 'npm', 'yarn', 'package'],
        priority: 2
      },
      {
        id: 'quickstart',
        title: 'Quick Start',
        path: '/docs/quickstart',
        icon: 'Zap',
        description: 'Get started with Atomix in minutes',
        category: 'getting-started',
        searchTerms: ['quick', 'start', 'tutorial', 'guide'],
        badge: createBadge('Updated', 'updated'),
        isUpdated: true,
        priority: 3
      },
      {
        id: 'theming',
        title: 'Theming',
        path: '/docs/theming',
        icon: 'Palette',
        description: 'Customize the look and feel of your components',
        category: 'getting-started',
        searchTerms: ['theme', 'colors', 'customization', 'styling'],
        priority: 4
      }
    ]
  },
  {
    id: 'layout',
    title: 'Layout',
    description: 'Components for structuring your application layout',
    priority: 2,
    items: [
      {
        id: 'container',
        title: 'Container',
        path: '/docs/components/container',
        icon: 'Square',
        description: 'Responsive container component for content layout',
        category: 'layout',
        searchTerms: ['container', 'wrapper', 'layout', 'responsive'],
        priority: 1
      },
      {
        id: 'grid',
        title: 'Grid',
        path: '/docs/components/grid',
        icon: 'Grid3X3',
        description: 'Flexible grid system for complex layouts',
        category: 'layout',
        searchTerms: ['grid', 'columns', 'rows', 'layout'],
        priority: 2
      },
      {
        id: 'stack',
        title: 'Stack',
        path: '/docs/components/stack',
        icon: 'Layers',
        description: 'Stack components vertically or horizontally',
        category: 'layout',
        searchTerms: ['stack', 'vertical', 'horizontal', 'spacing'],
        badge: createBadge('New', 'new'),
        isNew: true,
        priority: 3
      },
      {
        id: 'spacer',
        title: 'Spacer',
        path: '/docs/components/spacer',
        icon: 'Minus',
        description: 'Add space between components',
        category: 'layout',
        searchTerms: ['spacer', 'gap', 'margin', 'spacing'],
        priority: 4
      }
    ]
  },
  {
    id: 'inputs',
    title: 'Form Controls',
    description: 'Input components for forms and user interaction',
    priority: 3,
    items: [
      {
        id: 'button',
        title: 'Button',
        path: '/docs/components/button',
        icon: 'Mouse',
        description: 'Customizable button component with multiple variants',
        category: 'inputs',
        searchTerms: ['button', 'click', 'action', 'submit'],
        priority: 1
      },
      {
        id: 'input',
        title: 'Input',
        path: '/docs/components/input',
        icon: 'Type',
        description: 'Text input field with validation support',
        category: 'inputs',
        searchTerms: ['input', 'text', 'form', 'field'],
        priority: 2
      },
      {
        id: 'textarea',
        title: 'Textarea',
        path: '/docs/components/textarea',
        icon: 'AlignLeft',
        description: 'Multi-line text input component',
        category: 'inputs',
        searchTerms: ['textarea', 'multiline', 'text', 'input'],
        priority: 3
      },
      {
        id: 'select',
        title: 'Select',
        path: '/docs/components/select',
        icon: 'ChevronDown',
        description: 'Dropdown select component',
        category: 'inputs',
        searchTerms: ['select', 'dropdown', 'options', 'choice'],
        priority: 4
      },
      {
        id: 'checkbox',
        title: 'Checkbox',
        path: '/docs/components/checkbox',
        icon: 'Check',
        description: 'Checkbox input for binary choices',
        category: 'inputs',
        searchTerms: ['checkbox', 'check', 'boolean', 'toggle'],
        priority: 5
      },
      {
        id: 'radio',
        title: 'Radio',
        path: '/docs/components/radio',
        icon: 'Circle',
        description: 'Radio button for single selection',
        category: 'inputs',
        searchTerms: ['radio', 'option', 'single', 'choice'],
        priority: 6
      },
      {
        id: 'switch',
        title: 'Switch',
        path: '/docs/components/switch',
        icon: 'ToggleLeft',
        description: 'Toggle switch component',
        category: 'inputs',
        searchTerms: ['switch', 'toggle', 'boolean', 'on', 'off'],
        badge: createBadge('Beta', 'beta'),
        priority: 7
      },
      {
        id: 'slider',
        title: 'Slider',
        path: '/docs/components/slider',
        icon: 'SlidersHorizontal',
        description: 'Range slider input component',
        category: 'inputs',
        searchTerms: ['slider', 'range', 'number', 'value'],
        priority: 8
      }
    ]
  },
  {
    id: 'display',
    title: 'Data Display',
    description: 'Components for displaying content and data',
    priority: 4,
    items: [
      {
        id: 'card',
        title: 'Card',
        path: '/docs/components/card',
        icon: 'CreditCard',
        description: 'Flexible container component for content',
        category: 'display',
        searchTerms: ['card', 'container', 'content', 'panel'],
        priority: 1
      },
      {
        id: 'avatar',
        title: 'Avatar',
        path: '/docs/components/avatar',
        icon: 'User',
        description: 'User avatar component with fallbacks',
        category: 'display',
        searchTerms: ['avatar', 'user', 'profile', 'image'],
        priority: 2
      },
      {
        id: 'badge',
        title: 'Badge',
        path: '/docs/components/badge',
        icon: 'Award',
        description: 'Small status indicator component',
        category: 'display',
        searchTerms: ['badge', 'label', 'status', 'indicator'],
        priority: 3
      },
      {
        id: 'table',
        title: 'Table',
        path: '/docs/components/table',
        icon: 'Table',
        description: 'Data table component with sorting and pagination',
        category: 'display',
        searchTerms: ['table', 'data', 'grid', 'rows', 'columns'],
        priority: 4
      },
      {
        id: 'list',
        title: 'List',
        path: '/docs/components/list',
        icon: 'List',
        description: 'Flexible list component for displaying items',
        category: 'display',
        searchTerms: ['list', 'items', 'menu', 'navigation'],
        priority: 5
      },
      {
        id: 'image',
        title: 'Image',
        path: '/docs/components/image',
        icon: 'Image',
        description: 'Responsive image component with loading states',
        category: 'display',
        searchTerms: ['image', 'picture', 'photo', 'responsive'],
        badge: createBadge('Updated', 'updated'),
        isUpdated: true,
        priority: 6
      },
      {
        id: 'code',
        title: 'Code',
        path: '/docs/components/code',
        icon: 'Code',
        description: 'Code display component with syntax highlighting',
        category: 'display',
        searchTerms: ['code', 'syntax', 'highlight', 'snippet'],
        priority: 7
      }
    ]
  },
  {
    id: 'feedback',
    title: 'Feedback',
    description: 'Components for user feedback and status indication',
    priority: 5,
    items: [
      {
        id: 'alert',
        title: 'Alert',
        path: '/docs/components/alert',
        icon: 'AlertTriangle',
        description: 'Alert component for important messages',
        category: 'feedback',
        searchTerms: ['alert', 'message', 'notification', 'warning'],
        priority: 1
      },
      {
        id: 'toast',
        title: 'Toast',
        path: '/docs/components/toast',
        icon: 'MessageSquare',
        description: 'Temporary notification component',
        category: 'feedback',
        searchTerms: ['toast', 'notification', 'message', 'popup'],
        priority: 2
      },
      {
        id: 'loading',
        title: 'Loading',
        path: '/docs/components/loading',
        icon: 'Loader2',
        description: 'Loading indicator components',
        category: 'feedback',
        searchTerms: ['loading', 'spinner', 'progress', 'loader'],
        priority: 3
      },
      {
        id: 'progress',
        title: 'Progress',
        path: '/docs/components/progress',
        icon: 'BarChart',
        description: 'Progress bar component',
        category: 'feedback',
        searchTerms: ['progress', 'bar', 'percentage', 'completion'],
        priority: 4
      },
      {
        id: 'skeleton',
        title: 'Skeleton',
        path: '/docs/components/skeleton',
        icon: 'Square',
        description: 'Loading skeleton component',
        category: 'feedback',
        searchTerms: ['skeleton', 'loading', 'placeholder', 'shimmer'],
        badge: createBadge('New', 'new'),
        isNew: true,
        priority: 5
      }
    ]
  },
  {
    id: 'navigation',
    title: 'Navigation',
    description: 'Components for site navigation and routing',
    priority: 6,
    items: [
      {
        id: 'breadcrumb',
        title: 'Breadcrumb',
        path: '/docs/components/breadcrumb',
        icon: 'ChevronRight',
        description: 'Breadcrumb navigation component',
        category: 'navigation',
        searchTerms: ['breadcrumb', 'navigation', 'path', 'hierarchy'],
        priority: 1
      },
      {
        id: 'tabs',
        title: 'Tabs',
        path: '/docs/components/tabs',
        icon: 'Tabs',
        description: 'Tabbed interface component',
        category: 'navigation',
        searchTerms: ['tabs', 'tab', 'navigation', 'content'],
        priority: 2
      },
      {
        id: 'pagination',
        title: 'Pagination',
        path: '/docs/components/pagination',
        icon: 'MoreHorizontal',
        description: 'Pagination component for large datasets',
        category: 'navigation',
        searchTerms: ['pagination', 'pages', 'navigation', 'data'],
        priority: 3
      },
      {
        id: 'menu',
        title: 'Menu',
        path: '/docs/components/menu',
        icon: 'Menu',
        description: 'Dropdown menu component',
        category: 'navigation',
        searchTerms: ['menu', 'dropdown', 'options', 'navigation'],
        priority: 4
      },
      {
        id: 'navbar',
        title: 'Navbar',
        path: '/docs/components/navbar',
        icon: 'Navigation',
        description: 'Navigation bar component',
        category: 'navigation',
        searchTerms: ['navbar', 'navigation', 'header', 'menu'],
        badge: createBadge('Beta', 'beta'),
        priority: 5
      }
    ]
  },
  {
    id: 'overlay',
    title: 'Overlay',
    description: 'Modal and overlay components',
    priority: 7,
    items: [
      {
        id: 'modal',
        title: 'Modal',
        path: '/docs/components/modal',
        icon: 'Square',
        description: 'Modal dialog component',
        category: 'overlay',
        searchTerms: ['modal', 'dialog', 'popup', 'overlay'],
        priority: 1
      },
      {
        id: 'drawer',
        title: 'Drawer',
        path: '/docs/components/drawer',
        icon: 'PanelLeft',
        description: 'Side drawer component',
        category: 'overlay',
        searchTerms: ['drawer', 'sidebar', 'panel', 'slide'],
        priority: 2
      },
      {
        id: 'popover',
        title: 'Popover',
        path: '/docs/components/popover',
        icon: 'MessageCircle',
        description: 'Popover component for contextual content',
        category: 'overlay',
        searchTerms: ['popover', 'tooltip', 'popup', 'context'],
        priority: 3
      },
      {
        id: 'tooltip',
        title: 'Tooltip',
        path: '/docs/components/tooltip',
        icon: 'HelpCircle',
        description: 'Tooltip component for additional information',
        category: 'overlay',
        searchTerms: ['tooltip', 'hint', 'help', 'hover'],
        priority: 4
      }
    ]
  },
  {
    id: 'utilities',
    title: 'Utilities',
    description: 'Utility components and helpers',
    priority: 8,
    items: [
      {
        id: 'portal',
        title: 'Portal',
        path: '/docs/components/portal',
        icon: 'ArrowUpRight',
        description: 'Portal component for rendering outside the DOM tree',
        category: 'utilities',
        searchTerms: ['portal', 'render', 'dom', 'outside'],
        priority: 1
      },
      {
        id: 'provider',
        title: 'Provider',
        path: '/docs/components/provider',
        icon: 'Settings',
        description: 'Theme and configuration provider',
        category: 'utilities',
        searchTerms: ['provider', 'theme', 'config', 'context'],
        priority: 2
      },
      {
        id: 'visually-hidden',
        title: 'VisuallyHidden',
        path: '/docs/components/visually-hidden',
        icon: 'EyeOff',
        description: 'Hide content visually but keep it accessible',
        category: 'utilities',
        searchTerms: ['hidden', 'accessibility', 'screen', 'reader'],
        priority: 3
      },
      {
        id: 'focus-trap',
        title: 'FocusTrap',
        path: '/docs/components/focus-trap',
        icon: 'Focus',
        description: 'Trap focus within a component',
        category: 'utilities',
        searchTerms: ['focus', 'trap', 'accessibility', 'keyboard'],
        badge: createBadge('New', 'new'),
        isNew: true,
        priority: 4
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
