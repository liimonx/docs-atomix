export const breadcrumbMetadata = {
  id: 'breadcrumb',
  name: 'Breadcrumb',
  description: 'Hierarchical navigation component showing the user\'s current location within the site structure.',
  category: 'Navigation',
  status: 'stable' as const,
  version: '1.0.0',
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
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    }
  ],
  accessibility: {
    keyboardSupport: [
      'Tab - Navigate through breadcrumb links',
      'Enter or Space - Activate breadcrumb link',
      'Arrow keys - Navigate between items (if supported)'
    ],
    ariaAttributes: [
      'aria-label - Accessible label for breadcrumb navigation',
      'aria-current - Indicates current page',
      'role="navigation" - Navigation landmark',
      'aria-label="Breadcrumb" - Breadcrumb navigation label'
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

