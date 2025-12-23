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
      },
      {
        id: 'cli',
        title: 'CLI Reference',
        path: '/docs/getting-started/cli',
        icon: 'Terminal',
        description: 'Complete command-line interface documentation',
        category: 'getting-started',
        searchTerms: ['cli', 'command', 'terminal', 'command line', 'cli reference'],
        priority: 5
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
        id: 'overview',
        title: 'Overview',
        path: '/docs/design-tokens',
        icon: 'GridFour',
        description: 'Introduction to design tokens and the foundation of Atomix',
        category: 'design-tokens',
        searchTerms: ['overview', 'tokens', 'foundation', 'introduction'],
        priority: 0
      },
      {
        id: 'all-tokens',
        title: 'All Tokens',
        path: '/docs/design-tokens/all',
        icon: 'List',
        description: 'Browse all design tokens in one place',
        category: 'design-tokens',
        searchTerms: ['all', 'tokens', 'browse', 'complete'],
        priority: 1
      },
      {
        id: 'colors',
        title: 'Colors',
        path: '/docs/design-tokens/colors',
        icon: 'Palette',
        description: 'Comprehensive color system and palettes',
        category: 'design-tokens',
        searchTerms: ['colors', 'palette', 'theme', 'brand'],
        priority: 2
      },
      {
        id: 'spacing',
        title: 'Spacing',
        path: '/docs/design-tokens/spacing',
        icon: 'ArrowsOut',
        description: 'Spacing and layout system',
        category: 'design-tokens',
        searchTerms: ['spacing', 'margin', 'padding', 'gap'],
        priority: 3
      },
      {
        id: 'typography',
        title: 'Typography',
        path: '/docs/design-tokens/typography',
        icon: 'TextT',
        description: 'Type system and scales',
        category: 'design-tokens',
        searchTerms: ['typography', 'fonts', 'text', 'type'],
        priority: 4
      },
      {
        id: 'grid',
        title: 'Grid',
        path: '/docs/design-tokens/grid',
        icon: 'GridFour',
        description: 'Responsive grid system documentation',
        category: 'design-tokens',
        searchTerms: ['grid', 'layout', 'columns', 'responsive', 'breakpoints'],
        priority: 5
      },
      {
        id: 'elevation',
        title: 'Elevation',
        path: '/docs/design-tokens/elevation',
        icon: 'Stack',
        description: 'Shadow and depth system',
        category: 'design-tokens',
        searchTerms: ['elevation', 'shadow', 'depth', 'z-index'],
        priority: 6
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
    collapsed: true,
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
        icon: 'FileText',
        description: 'Guidelines and best practices for using Atomix components',
        category: 'components',
        searchTerms: ['guidelines', 'best practices', 'standards', 'patterns'],
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
        id: 'avatar',
        title: 'Avatar',
        path: '/docs/components/avatar',
        icon: 'User',
        description: 'Display user profile images, initials, or icons',
        category: 'components',
        searchTerms: ['avatar', 'profile', 'user', 'image'],
        priority: 5
      },
      {
        id: 'badge',
        title: 'Badge',
        path: '/docs/components/badge',
        icon: 'Tag',
        description: 'Compact UI element for displaying status indicators and labels',
        category: 'components',
        searchTerms: ['badge', 'status', 'label', 'indicator'],
        priority: 6
      },
      {
        id: 'breadcrumb',
        title: 'Breadcrumb',
        path: '/docs/components/breadcrumb',
        icon: 'NavigationArrow',
        description: 'Hierarchical navigation showing the user\'s location',
        category: 'components',
        searchTerms: ['breadcrumb', 'navigation', 'path', 'hierarchy'],
        priority: 7
      },
      {
        id: 'button',
        title: 'Button',
        path: '/docs/components/button',
        icon: 'Mouse',
        description: 'Customizable button component with multiple variants',
        category: 'components',
        searchTerms: ['button', 'click', 'action', 'submit'],
        priority: 8
      },
      {
        id: 'card',
        title: 'Card',
        path: '/docs/components/card',
        icon: 'CreditCard',
        description: 'Flexible container component for content',
        category: 'components',
        searchTerms: ['card', 'container', 'content', 'panel'],
        priority: 9
      },
      {
        id: 'checkbox',
        title: 'Checkbox',
        path: '/docs/components/checkbox',
        icon: 'CheckSquare',
        description: 'Checkbox input component with validation support',
        category: 'components',
        searchTerms: ['checkbox', 'form', 'field'],
        priority: 10
      },
      {
        id: 'date-picker',
        title: 'Date Picker',
        path: '/docs/components/date-picker',
        icon: 'Calendar',
        description: 'Date picker component with validation support',
        category: 'components',
        searchTerms: ['date', 'picker', 'form', 'field'],
        priority: 11
      },
      {
        id: 'dropdown',
        title: 'Dropdown',
        path: '/docs/components/dropdown',
        icon: 'CaretDown',
        description: 'Flexible menu system with various triggers and placements',
        category: 'components',
        searchTerms: ['dropdown', 'menu', 'select', 'options'],
        priority: 12
      },
      {
        id: 'form',
        title: 'Form',
        path: '/docs/components/form',
        icon: 'FileText',
        description: 'Form components and validation',
        category: 'components',
        searchTerms: ['form', 'input', 'validation', 'fields'],
        priority: 13
      },
      {
        id: 'input',
        title: 'Input',
        path: '/docs/components/input',
        icon: 'TextT',
        description: 'Text input field with validation support',
        category: 'components',
        searchTerms: ['input', 'text', 'form', 'field'],
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
        id: 'progress',
        title: 'Progress',
        path: '/docs/components/progress',
        icon: 'CircleDashed',
        description: 'Visual feedback for ongoing processes and completion status',
        category: 'components',
        searchTerms: ['progress', 'feedback', 'status', 'completion'],
        priority: 16
      },
      {
        id: 'radio',
        title: 'Radio',
        path: '/docs/components/radio',
        icon: 'RadioButton',
        description: 'Radio button component with validation support',
        category: 'components',
        searchTerms: ['radio', 'form', 'field'],
        priority: 17
      },
      {
        id: 'rating',
        title: 'Rating',
        path: '/docs/components/rating',
        icon: 'Star',
        description: 'Rating component with validation support',
        category: 'components',
        searchTerms: ['rating', 'form', 'field'],
        priority: 18
      },
      {
        id: 'select',
        title: 'Select',
        path: '/docs/components/select',
        icon: 'CaretDown',
        description: 'Select dropdown component with options',
        category: 'components',
        searchTerms: ['select', 'dropdown', 'options', 'menu'],
        priority: 19
      },
      {
        id: 'slider',
        title: 'Slider',
        path: '/docs/components/slider',
        icon: 'Sliders',
        description: 'Interactive slider component for numeric input',
        category: 'components',
        searchTerms: ['slider', 'numeric', 'input', 'range'],
        priority: 20
      },
      {
        id: 'spinner',
        title: 'Spinner',
        path: '/docs/components/spinner',
        icon: 'CircleNotch',
        description: 'Loading indicator component with multiple styles',
        category: 'components',
        searchTerms: ['spinner', 'loading', 'indicator', 'progress'],
        priority: 21
      },
      {
        id: 'tab',
        title: 'Tab',
        path: '/docs/components/tab',
        icon: 'Layout',
        description: 'Tabbed interfaces for organizing content into separate panels',
        category: 'components',
        searchTerms: ['tab', 'tabs', 'panel', 'content'],
        priority: 22
      },
      {
        id: 'textarea',
        title: 'Textarea',
        path: '/docs/components/textarea',
        icon: 'AlignLeft',
        description: 'Multi-line text input field with validation support',
        category: 'components',
        searchTerms: ['textarea', 'text', 'form', 'field'],
        priority: 23
      },
      {
        id: 'toggle',
        title: 'Toggle',
        path: '/docs/components/toggle',
        icon: 'ToggleLeft',
        description: 'Switch-like controls for binary states and settings',
        category: 'components',
        searchTerms: ['toggle', 'switch', 'binary', 'settings'],
        priority: 24
      },
      {
        id: 'tooltip',
        title: 'Tooltip',
        path: '/docs/components/tooltip',
        icon: 'Question',
        description: 'Contextual information on hover with rich content support',
        category: 'components',
        searchTerms: ['tooltip', 'hover', 'info', 'popup'],
        priority: 25
      },
      {
        id: 'upload',
        title: 'Upload',
        path: '/docs/components/upload',
        icon: 'UploadSimple',
        description: 'Upload component with validation support',
        category: 'components',
        searchTerms: ['upload', 'form', 'field'],
        priority: 26
      },
      {
        id: 'block',
        title: 'Block',
        path: '/docs/components/block',
        icon: 'Square',
        description: 'Flexible layout container for creating consistent section layouts',
        category: 'components',
        searchTerms: ['block', 'layout', 'container', 'section'],
        priority: 27
      },
      {
        id: 'callout',
        title: 'Callout',
        path: '/docs/components/callout',
        icon: 'Info',
        description: 'Display important messages, notifications, alerts, or highlighted information',
        category: 'components',
        searchTerms: ['callout', 'alert', 'notification', 'message', 'info'],
        priority: 28
      },
      {
        id: 'countdown',
        title: 'Countdown',
        path: '/docs/components/countdown',
        icon: 'Clock',
        description: 'Real-time countdown timer to a specified target date/time',
        category: 'components',
        searchTerms: ['countdown', 'timer', 'clock', 'time', 'event'],
        priority: 29
      },
      {
        id: 'hero',
        title: 'Hero',
        path: '/docs/components/hero',
        icon: 'Image',
        description: 'Impactful banner sections for landing pages and feature highlights',
        category: 'components',
        searchTerms: ['hero', 'banner', 'landing', 'header', 'background'],
        priority: 30
      },
      {
        id: 'icon',
        title: 'Icon',
        path: '/docs/components/icon',
        icon: 'Icon',
        description: 'Consistent way to display icons using the Phosphor Icons library',
        category: 'components',
        searchTerms: ['icon', 'icons', 'phosphor', 'symbol'],
        priority: 31
      },
      {
        id: 'list',
        title: 'List',
        path: '/docs/components/list',
        icon: 'ListBullets',
        description: 'Flexible way to display ordered and unordered lists with various styling options',
        category: 'components',
        searchTerms: ['list', 'ordered', 'unordered', 'items', 'collection'],
        priority: 32
      },
      {
        id: 'messages',
        title: 'Messages',
        path: '/docs/components/messages',
        icon: 'ChatCircle',
        description: 'Complete chat interface for displaying conversations between users',
        category: 'components',
        searchTerms: ['messages', 'chat', 'conversation', 'messaging', 'communication'],
        priority: 33
      },
      {
        id: 'navbar',
        title: 'Navbar',
        path: '/docs/components/navbar',
        icon: 'Navigation',
        description: 'Responsive navigation header with brand, menu items, and collapsible mobile menu',
        category: 'components',
        searchTerms: ['navbar', 'navigation', 'header', 'menu', 'responsive'],
        priority: 34
      },
      {
        id: 'pagination',
        title: 'Pagination',
        path: '/docs/components/pagination',
        icon: 'CaretDoubleLeft',
        description: 'Navigation controls for paginated content across multiple pages',
        category: 'components',
        searchTerms: ['pagination', 'navigation', 'pages', 'pager', 'controls'],
        priority: 35
      },
      {
        id: 'popover',
        title: 'Popover',
        path: '/docs/components/popover',
        icon: 'ChatCircleDots',
        description: 'Floating content component that appears relative to a trigger element',
        category: 'components',
        searchTerms: ['popover', 'tooltip', 'overlay', 'floating', 'contextual'],
        priority: 36
      },
      {
        id: 'steps',
        title: 'Steps',
        path: '/docs/components/steps',
        icon: 'Steps',
        description: 'Visual representation of a multi-step process with customizable step indicators',
        category: 'components',
        searchTerms: ['steps', 'wizard', 'progress', 'multi-step', 'workflow'],
        priority: 37
      },
      {
        id: 'section-intro',
        title: 'SectionIntro',
        path: '/docs/components/section-intro',
        icon: 'TextAlignLeft',
        description: 'Consistent section introductions with titles, descriptions, and optional badges',
        category: 'components',
        searchTerms: ['section', 'intro', 'header', 'title', 'description'],
        priority: 38
      },
      {
        id: 'container',
        title: 'Container',
        path: '/docs/components/container',
        icon: 'Square',
        description: 'Responsive container with consistent max-width constraints and padding',
        category: 'components',
        searchTerms: ['container', 'layout', 'responsive', 'wrapper', 'max-width'],
        priority: 39
      },
      {
        id: 'grid',
        title: 'Grid',
        path: '/docs/components/grid',
        icon: 'GridFour',
        description: 'Flexible 12-column responsive grid system for creating complex layouts',
        category: 'components',
        searchTerms: ['grid', 'layout', 'responsive', 'columns', '12-column'],
        priority: 40
      },
      {
        id: 'grid-col',
        title: 'GridCol',
        path: '/docs/components/grid-col',
        icon: 'Columns',
        description: 'Column component for use within the Grid system with responsive breakpoints',
        category: 'components',
        searchTerms: ['grid', 'column', 'layout', 'responsive', 'breakpoint'],
        priority: 41
      },
      {
        id: 'row',
        title: 'Row',
        path: '/docs/components/row',
        icon: 'Rows',
        description: 'Row component for organizing content horizontally within the grid system',
        category: 'components',
        searchTerms: ['row', 'layout', 'grid', 'horizontal', 'flexbox'],
        priority: 42
      },
      {
        id: 'river',
        title: 'River',
        path: '/docs/components/river',
        icon: 'Image',
        description: 'Flexible layout component for prominent content sections with titles, text, and actions',
        category: 'components',
        searchTerms: ['river', 'layout', 'cta', 'call-to-action', 'hero', 'section'],
        priority: 43
      },
      {
        id: 'masonry-grid',
        title: 'MasonryGrid',
        path: '/docs/components/masonry-grid',
        icon: 'GridFour',
        description: 'Dynamic grid layout that arranges items in a masonry (Pinterest-style) layout',
        category: 'components',
        searchTerms: ['masonry', 'grid', 'layout', 'pinterest', 'dynamic', 'columns'],
        priority: 44
      },
      {
        id: 'data-table',
        title: 'DataTable',
        path: '/docs/components/data-table',
        icon: 'Table',
        description: 'Advanced table component with sorting, filtering, pagination, and selection',
        category: 'components',
        searchTerms: ['table', 'data', 'sorting', 'filtering', 'pagination', 'grid'],
        priority: 45
      },
      {
        id: 'edge-panel',
        title: 'EdgePanel',
        path: '/docs/components/edge-panel',
        icon: 'Sidebar',
        description: 'Side panel component that slides in from the edge of the screen',
        category: 'components',
        searchTerms: ['panel', 'sidebar', 'overlay', 'drawer', 'navigation', 'edge'],
        priority: 46
      },
      {
        id: 'side-menu',
        title: 'SideMenu',
        path: '/docs/components/side-menu',
        icon: 'List',
        description: 'Vertical navigation menu component designed for sidebars and navigation panels',
        category: 'components',
        searchTerms: ['menu', 'navigation', 'sidebar', 'vertical', 'nav'],
        priority: 47
      },
      {
        id: 'nav',
        title: 'Nav',
        path: '/docs/components/nav',
        icon: 'List',
        description: 'Flexible navigation component for creating horizontal or vertical navigation menus',
        category: 'components',
        searchTerms: ['nav', 'navigation', 'menu', 'horizontal', 'vertical'],
        priority: 48
      },
      {
        id: 'nav-item',
        title: 'NavItem',
        path: '/docs/components/nav-item',
        icon: 'Link',
        description: 'Navigation item component for use within Nav with active states and icons',
        category: 'components',
        searchTerms: ['nav', 'navigation', 'item', 'link', 'menu'],
        priority: 49
      },
      {
        id: 'nav-dropdown',
        title: 'NavDropdown',
        path: '/docs/components/nav-dropdown',
        icon: 'CaretDown',
        description: 'Dropdown menu component for use within Nav with nested navigation items',
        category: 'components',
        searchTerms: ['nav', 'navigation', 'dropdown', 'menu', 'submenu'],
        priority: 50
      },
      {
        id: 'virtualized-grid',
        title: 'VirtualizedGrid',
        path: '/docs/components/virtualized-grid',
        icon: 'GridFour',
        description: 'High-performance grid component using virtualization for large datasets',
        category: 'components',
        searchTerms: ['virtualized', 'grid', 'performance', 'large-data', 'scroll', 'optimization'],
        priority: 51
      },
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
      },
      {
        id: 'theme-studio',
        title: 'Theme Studio',
        path: '/docs/guides/theme-studio',
        icon: 'Palette',
        description: 'Interactive theme builder and visualizer',
        category: 'guides',
        searchTerms: ['theme', 'studio', 'builder', 'creator', 'customize'],
        badge: createBadge('New', 'new'),
        isNew: true,
        priority: 4
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