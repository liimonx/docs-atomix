export const breadcrumbMetadata = {
  id: 'breadcrumb',
  name: 'Breadcrumb',
  description: 'Hierarchical navigation component showing the user\'s current location within the site structure.',
  category: 'Navigation',
  status: 'stable' as const,
  version: '1.0.0',
  author: 'Atomix Team',
  lastUpdated: '2026-03-10',
  importPath: '@shohojdhara/atomix/Breadcrumb',
  dependencies: ['react'],
  tags: ['breadcrumb', 'navigation', 'path', 'hierarchy', 'location'],
  relatedComponents: ['Link', 'Navigation', 'Tabs'],
  features: [
    'Hierarchical path display',
    'Link support for navigation',
    'Custom separators',
    'Icon support',
    'Responsive behavior',
    'Full accessibility support',
    'ARIA navigation landmarks'
  ],
  props: [
    {
      name: 'items',
      type: 'BreadcrumbItem[]',
      description: 'Array of breadcrumb items',
      required: true
    },
    {
      name: 'separator',
      type: 'string | ReactNode',
      description: 'Custom separator between items',
      required: false,
      defaultValue: "'/'"
    },
    {
      name: 'maxItems',
      type: 'number',
      description: 'Maximum number of items to display before collapsing',
      required: false
    },
    {
      name: 'className',
      type: 'string',
      description: 'Additional CSS classes',
      required: false
    }
  ],
  examples: [
    { id: 'example-1',
      title: 'Basic Breadcrumb',
      description: 'Simple breadcrumb navigation',
      code: `import { Breadcrumb } from '@shohojdhara/atomix';

function BasicBreadcrumb() {
  const items = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Electronics', href: '/products/electronics' }
  ];
  
  return <Breadcrumb items={items} />;
}`,
      preview: true
    ,
      language: 'tsx',
      category: 'basic'
    },
    { id: 'example-2',
      title: 'With Icons',
      description: 'Breadcrumb with icons',
      code: `import { Breadcrumb, Icon } from '@shohojdhara/atomix';

function BreadcrumbWithIcons() {
  const items = [
    { label: 'Home', href: '/', icon: <Icon name="House" /> },
    { label: 'Docs', href: '/docs', icon: <Icon name="Book" /> },
    { label: 'Components', href: '/docs/components' }
  ];
  
  return <Breadcrumb items={items} />;
}`,
      preview: true
    ,
      language: 'tsx',
      category: 'basic'
    },
    { id: 'example-3',
      title: 'Custom Separator',
      description: 'Breadcrumb with custom separator',
      code: `import { Breadcrumb, Icon } from '@shohojdhara/atomix';

function BreadcrumbCustomSeparator() {
  const items = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Team', href: '/about/team' }
  ];
  
  return (
    <Breadcrumb 
      items={items}
      divider={<Icon name="CaretRight" />}
    />
  );
}`,
      preview: true
    ,
      language: 'tsx',
      category: 'basic'
    },
    { id: 'example-4',
      title: 'Current Page',
      description: 'Breadcrumb showing current page',
      code: `import { Breadcrumb } from '@shohojdhara/atomix';

function BreadcrumbCurrentPage() {
  const items = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'Current Post', active: true }
  ];
  
  return <Breadcrumb items={items} />;
}`,
      preview: true
    ,
      language: 'tsx',
      category: 'basic'
    }
  ],
  accessibility: {
    keyboardSupport: [
      { key: 'Tab', action: 'Navigate through breadcrumb links' },
      { key: 'Enter or Space', action: 'Activate breadcrumb link' },
      { key: 'Arrow keys', action: 'Navigate between items (if supported)' }
    ],
    ariaAttributes: [
      { attribute: 'aria-label', description: 'Accessible label for breadcrumb navigation', required: false },
      { attribute: 'aria-current', description: 'Indicates current page', required: false },
      { attribute: 'role="navigation"', description: 'Navigation landmark', required: false },
      { attribute: 'aria-label="Breadcrumb"', description: 'Breadcrumb navigation label', required: false }
    ],
    screenReaderSupport: true,
    focusManagement: [
      'Breadcrumb links are focusable',
      'Clear focus indicators',
      'Current page is announced to screen readers',
      'Navigation structure is communicated clearly'
    ]
  }
};

