export const cardMetadata = {
  id: 'card',
  name: 'Card',
  description: 'A flexible content container with multiple variants and options for displaying content with headers, footers, and media.',
  category: 'Layout',
  status: 'stable' as const,
  version: '1.3.0',
  importPath: '@shohojdhara/atomix/Card',
  dependencies: ['react'],
  tags: ['card', 'container', 'layout', 'content'],
  relatedComponents: ['Paper', 'Panel', 'Section'],
  features: [
    'Multiple variants (elevated, outlined, filled)',
    'Flexible sections (header, footer, media, actions)',
    'Full accessibility support'
  ],
  props: [
    {
      name: 'variant',
      type: "'elevated' | 'outlined' | 'filled'",
      description: 'Visual style variant of the card',
      required: false,
      defaultValue: 'elevated'
    },
    {
      name: 'children',
      type: 'ReactNode',
      description: 'Content to be displayed inside the card',
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
      title: 'Basic Card',
      description: 'A simple card with content',
      code: `<Card>
  <h3>Card Title</h3>
  <p>This is a simple card with some content.</p>
</Card>`,
      preview: null
    },
    {
      title: 'Card Variants',
      description: 'Different card styles',
      code: `<Card variant="elevated">
  <h3>Elevated Card</h3>
  <p>This card has a shadow.</p>
</Card>
<Card variant="outlined">
  <h3>Outlined Card</h3>
  <p>This card has a border.</p>
</Card>
<Card variant="filled">
  <h3>Filled Card</h3>
  <p>This card has a background fill.</p>
</Card>`,
      preview: null
    }
  ],
  accessibility: {
    keyboardSupport: [
      'Cards are typically non-interactive containers',
      'When cards are made interactive, they should follow standard button or link patterns'
    ],
    ariaAttributes: [
      'role="article" - For standalone card content',
      'aria-labelledby - To associate card with its title'
    ],
    screenReaderSupport: true,
    focusManagement: [
      'Cards typically do not receive focus',
      'Interactive cards should be focusable with clear focus indicators'
    ]
  }
};
