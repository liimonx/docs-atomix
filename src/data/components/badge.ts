// import { Badge } from '@shohojdhara/atomix';

export const badgeMetadata = {
  id: 'badge',
  name: 'Badge',
  description: 'A small count and labeling component that attracts attention to an item or indicates status.',
  category: 'Indicators',
  status: 'stable' as const,
  version: '1.1.0',
  importPath: '@shohojdhara/atomix/Badge',
  dependencies: ['react'],
  tags: ['badge', 'status', 'notification', 'indicator'],
  relatedComponents: ['Tag', 'Chip', 'Alert'],
  features: [
    'Multiple variants (default, primary, secondary, success, warning, error, info, dark, light)',
    'Multiple sizes (sm, md, lg)',
    'Dot mode for minimalist notifications',
    'Full accessibility support'
  ],
  props: [
    {
      name: 'variant',
      type: "'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'dark' | 'light'",
      description: 'Visual style variant of the badge',
      required: false,
      defaultValue: 'default'
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg'",
      description: 'Size of the badge',
      required: false,
      defaultValue: 'md'
    },
    {
      name: 'dot',
      type: 'boolean',
      description: 'Display as a dot without text content',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'children',
      type: 'ReactNode',
      description: 'Content to be displayed inside the badge',
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
      title: 'Variants',
      description: 'Different badge styles for different contexts',
      code: `<Badge label="Default" />
<Badge variant="primary" label="Primary" />
<Badge variant="secondary" label="Secondary" />
<Badge variant="success" label="Success" />
<Badge variant="warning" label="Warning" />
<Badge variant="error" label="Error" />
<Badge variant="info" label="Info" />
<Badge variant="dark" label="Dark" />
<Badge variant="light" label="Light" />`,

      preview: null
    },
    {
      title: 'Sizes',
      description: 'Three different badge sizes',
      code: `<Badge size="sm" label="Small" />
<Badge size="md" label="Medium" />
<Badge size="lg" label="Large" />`,
      preview: null
    },
    {
      title: 'Dot Mode',
      description: 'Minimalist dot badges for notifications',
      code: `<Badge dot label="Dot" />
<Badge dot variant="primary" label="Primary" />
<Badge dot variant="error" label="Error" />`,
      preview: null
    }
  ],
  accessibility: {
    keyboardSupport: [
      'Badges are typically non-interactive elements',
      'When used as interactive elements, they should follow standard button keyboard patterns'
    ],
    ariaAttributes: [
      'aria-label - For dot badges or badges without clear text content'
    ],
    screenReaderSupport: true,
    focusManagement: [
      'Badges typically do not receive focus',
      'Interactive badges should be focusable and have clear focus indicators'
    ]
  }
};
