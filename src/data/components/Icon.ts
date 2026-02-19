// import { Icon } from '@shohojdhara/atomix';

export const iconMetadata = {
  id: 'icon',
  name: 'Icon',
  description: 'A consistent way to display icons throughout your application using the Phosphor Icons library. It supports multiple sizes, weights, colors, and includes built-in accessibility features.',
  category: 'Media',
  status: 'stable' as const,
  version: '1.0.0',
  importPath: '@shohojdhara/atomix/Icon',
  dependencies: ['react', '@phosphor-icons/react'],
  tags: ['icon', 'phosphor', 'media', 'visual', 'symbol'],
  relatedComponents: ['Button', 'Badge', 'Avatar', 'Card'],
  features: [
    'Access to complete Phosphor Icons library',
    'Multiple sizes (xs, sm, md, lg, xl) and custom pixel values',
    'Multiple weights (thin, light, regular, bold, fill, duotone)',
    'Custom color support with CSS color values',
    'Built-in accessibility features with alt text support',
    'Consistent API across all icons'
  ],
  props: [
    {
      name: 'name',
      type: 'PhosphorIconsType',
      description: 'Icon name from Phosphor Icons library (Required)',
      required: true
    },
    {
      name: 'size',
      type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | number",
      description: 'Icon size (preset or custom pixel value)',
      required: false,
      defaultValue: "'md'"
    },
    {
      name: 'weight',
      type: "'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone'",
      description: 'Icon weight/style variant',
      required: false,
      defaultValue: "'regular'"
    },
    {
      name: 'color',
      type: 'string',
      description: 'Icon color (CSS color value)',
      required: false
    },
    {
      name: 'className',
      type: 'string',
      description: 'Additional CSS classes',
      required: false,
      defaultValue: "''"
    },
    {
      name: 'style',
      type: 'React.CSSProperties',
      description: 'Custom style for the icon',
      required: false
    },
    {
      name: 'alt',
      type: 'string',
      description: 'Alt text for accessibility',
      required: false
    }
  ],
  examples: [
    {
      title: 'Basic Icons',
      description: 'Displaying icons with default settings',
      code: `import { Icon } from '@shohojdhara/atomix';

function BasicIcons() {
  return (
    <div className="u-flex u-gap-4 u-align-items-center">
      <Icon name="Heart" />
      <Icon name="Star" />
      <Icon name="User" />
      <Icon name="Settings" />
    </div>
  );
}`,
      preview: true
    },
    {
      title: 'Icon Sizes',
      description: 'Different icon sizes from extra small to extra large',
      code: `function IconSizes() {
  return (
    <div className="u-flex u-gap-4 u-align-items-center">
      <Icon name="Heart" size="xs" />
      <Icon name="Heart" size="sm" />
      <Icon name="Heart" size="md" />
      <Icon name="Heart" size="lg" />
      <Icon name="Heart" size="xl" />
      <Icon name="Heart" size={48} />
    </div>
  );
}`,
      preview: true
    },
    {
      title: 'Icon Weights',
      description: 'Different icon weight variants',
      code: `function IconWeights() {
  return (
    <div className="u-flex u-gap-4 u-align-items-center">
      <Icon name="Star" weight="thin" />
      <Icon name="Star" weight="light" />
      <Icon name="Star" weight="regular" />
      <Icon name="Star" weight="bold" />
      <Icon name="Star" weight="fill" />
      <Icon name="Star" weight="duotone" />
    </div>
  );
}`,
      preview: true
    },
    {
      title: 'Colored Icons',
      description: 'Icons with custom colors',
      code: `function ColoredIcons() {
  return (
    <div className="u-flex u-gap-4 u-align-items-center">
      <Icon name="Heart" color="var(--atomix-error)" />
      <Icon name="CheckCircle" color="var(--atomix-success)" />
      <Icon name="Warning" color="var(--atomix-warning)" />
      <Icon name="Info" color="var(--atomix-primary)" />
      <div style={{ color: 'var(--atomix-primary)' }}>
        <Icon name="Star" color="currentColor" />
      </div>
    </div>
  );
}`,
      preview: true
    },
    {
      title: 'Interactive Icons',
      description: 'Icons used in interactive contexts',
      code: `import { useState } from 'react';

function InteractiveIcons() {
  const [liked, setLiked] = useState(false);
  
  return (
    <div className="u-flex u-gap-4">
      <button 
        className="u-btn-reset u-cursor-pointer"
        onClick={() => setLiked(!liked)}
        aria-label={liked ? "Unlike" : "Like"}
      >
        <Icon 
          name="Heart" 
          weight={liked ? "fill" : "regular"}
          color={liked ? "var(--atomix-error)" : "currentColor"}
        />
      </button>
    </div>
  );
}`,
      preview: true
    },
    {
      title: 'Icons in Buttons',
      description: 'Using icons with buttons and other components',
      code: `import { Button } from '@shohojdhara/atomix';

function IconsInButtons() {
  return (
    <div className="u-flex u-gap-4">
      <Button
        label="Save"
        icon={<Icon name="Save" />}
        variant="primary"
      />
      <Button
        label="Delete"
        icon={<Icon name="Trash" />}
        variant="error"
      />
      <Button
        label="Share"
        icon={<Icon name="Share" />}
        iconPosition="end"
        variant="secondary"
      />
    </div>
  );
}`,
      preview: true
    }
  ],
  accessibility: {
    overview: 'The Icon component includes built-in accessibility features. Icons should have descriptive alt text when used decoratively, and interactive icons should have proper ARIA labels.',
    keyboardSupport: [
      {
        key: 'N/A',
        action: 'Icons are typically non-interactive elements',
        context: 'When used in interactive contexts (buttons, links), they inherit keyboard support from the parent element'
      }
    ],
    ariaAttributes: [
      {
        attribute: 'alt',
        description: 'Alt text for decorative icons to provide context for screen readers',
        required: false
      },
      {
        attribute: 'aria-label',
        description: 'For interactive icons, should be provided on the parent element',
        required: false
      }
    ],
    guidelines: [
      'Use descriptive alt text for decorative icons',
      'Interactive icons should have aria-label on the parent element',
      'Icons used as buttons should have clear labels',
      'Avoid using icons alone without text labels for important actions',
      'Ensure sufficient color contrast for colored icons'
    ],
    wcagLevel: 'AA' as const,
    screenReaderSupport: true,
    focusManagement: [
      'Icons typically do not receive focus',
      'Interactive icons inherit focus behavior from parent elements',
      'Focus indicators should be visible on interactive icon containers'
    ]
  }
};

