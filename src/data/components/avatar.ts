export const avatarMetadata = {
  id: 'avatar',
  name: 'Avatar',
  description: 'Display user profile images, initials, or icons with multiple sizes and fallback options.',
  category: 'Display',
  status: 'stable' as const,
  version: '1.0.0',
  importPath: '@shohojdhara/atomix/Avatar',
  dependencies: ['react'],
  tags: ['avatar', 'profile', 'user', 'image', 'initials'],
  relatedComponents: ['Badge', 'Card', 'Icon'],
  features: [
    'Image support with fallback',
    'Initials display',
    'Icon fallback',
    'Multiple sizes (sm, md, lg, xl)',
    'Status indicators',
    'Customizable styling',
    'Full accessibility support'
  ],
  props: [
    {
      name: 'src',
      type: 'string',
      description: 'Image source URL',
      required: false
    },
    {
      name: 'alt',
      type: 'string',
      description: 'Alternative text for the image',
      required: false
    },
    {
      name: 'name',
      type: 'string',
      description: 'User name for generating initials',
      required: false
    },
    {
      name: 'initials',
      type: 'string',
      description: 'Custom initials to display',
      required: false
    },
    {
      name: 'icon',
      type: 'ReactNode',
      description: 'Icon to display as fallback',
      required: false
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg' | 'xl'",
      description: 'Size of the avatar',
      required: false,
      defaultValue: "'md'"
    },
    {
      name: 'status',
      type: "'online' | 'offline' | 'away' | 'busy'",
      description: 'Status indicator',
      required: false
    },
    {
      name: 'statusPosition',
      type: "'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'",
      description: 'Position of the status indicator',
      required: false,
      defaultValue: "'bottom-right'"
    },
    {
      name: 'shape',
      type: "'circle' | 'square' | 'rounded'",
      description: 'Shape of the avatar',
      required: false,
      defaultValue: "'circle'"
    },
    {
      name: 'onClick',
      type: '() => void',
      description: 'Click handler for interactive avatars',
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
      title: 'Image Avatar',
      description: 'Avatar with an image',
      code: `<Avatar 
  src="https://example.com/avatar.jpg"
  alt="User avatar"
  name="John Doe"
/>`,
      preview: null
    },
    {
      title: 'Initials Avatar',
      description: 'Avatar displaying user initials',
      code: `<Avatar name="John Doe" />
<Avatar name="Jane Smith" />
<Avatar initials="AB" />`,
      preview: null
    },
    {
      title: 'Icon Avatar',
      description: 'Avatar with icon fallback',
      code: `<Avatar 
  icon={<Icon name="User" />}
  name="Guest User"
/>`,
      preview: null
    },
    {
      title: 'Avatar Sizes',
      description: 'Different avatar sizes',
      code: `<Avatar name="Small" size="sm" />
<Avatar name="Medium" size="md" />
<Avatar name="Large" size="lg" />
<Avatar name="Extra Large" size="xl" />`,
      preview: null
    },
    {
      title: 'With Status',
      description: 'Avatar with status indicator',
      code: `<Avatar 
  name="Online User"
  status="online"
/>
<Avatar 
  name="Away User"
  status="away"
/>
<Avatar 
  name="Busy User"
  status="busy"
/>`,
      preview: null
    },
    {
      title: 'Avatar Shapes',
      description: 'Different avatar shapes',
      code: `<Avatar name="Circle" shape="circle" />
<Avatar name="Square" shape="square" />
<Avatar name="Rounded" shape="rounded" />`,
      preview: null
    }
  ],
  accessibility: {
    keyboardSupport: [
      'Tab - Focus on avatar (if interactive)',
      'Enter or Space - Activate avatar (if interactive)',
      'Escape - Close avatar menu (if applicable)'
    ],
    ariaAttributes: [
      'aria-label - Accessible label for the avatar',
      'aria-hidden - Hide decorative avatars from screen readers',
      'role="img" - Image role for avatar',
      'alt - Alternative text for avatar image'
    ],
    screenReaderSupport: true,
    focusManagement: [
      'Interactive avatars are focusable',
      'Clear focus indicators',
      'Status information is announced to screen readers'
    ]
  }
};

