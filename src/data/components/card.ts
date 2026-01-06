export const cardMetadata = {
  id: 'card',
  name: 'Card',
  description: 'A flexible container that displays content in a contained, structured format. Perfect for showcasing information, creating dashboards, product listings, and organizing content into digestible sections.',
  category: 'Layout',
  status: 'stable' as const,
  version: '1.3.0',
  importPath: '@shohojdhara/atomix/Card',
  dependencies: ['react'],
  tags: ['card', 'container', 'layout', 'content', 'panel', 'widget'],
  relatedComponents: ['Button', 'Avatar', 'Badge', 'Icon', 'Modal'],
  features: [
    'Multiple appearances (filled, outlined, ghost, elevated)',
    'Multiple sizes (sm, md, lg)',
    'Flexible sections (header, footer, image, icon, actions)',
    'Row layout option (horizontal layout)',
    'Interactive and selectable states',
    'Loading and disabled states',
    'Glass morphism effect support',
    'Can render as link with href prop',
    'Full accessibility support with ARIA attributes',
    'Custom elevation levels'
  ],
  props: [
    {
      name: 'header',
      type: 'ReactNode',
      description: 'Custom header content',
      required: false
    },
    {
      name: 'image',
      type: 'string',
      description: 'URL of the card image',
      required: false
    },
    {
      name: 'imageAlt',
      type: 'string',
      description: 'Alt text for the card image',
      required: false,
      defaultValue: "''"
    },
    {
      name: 'title',
      type: 'ReactNode',
      description: 'Card title content',
      required: false
    },
    {
      name: 'text',
      type: 'ReactNode',
      description: 'Card text/description content',
      required: false
    },
    {
      name: 'actions',
      type: 'ReactNode',
      description: 'Action buttons or interactive elements',
      required: false
    },
    {
      name: 'icon',
      type: 'ReactNode',
      description: 'Icon to display in the header',
      required: false
    },
    {
      name: 'footer',
      type: 'ReactNode',
      description: 'Footer content',
      required: false
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg'",
      description: 'Size variant of the card',
      required: false,
      defaultValue: "'md'"
    },
    {
      name: 'variant',
      type: 'ThemeColor',
      description: 'Color variant of the card',
      required: false,
      defaultValue: "'primary'"
    },
    {
      name: 'appearance',
      type: "'filled' | 'outlined' | 'ghost' | 'elevated'",
      description: 'Appearance style of the card',
      required: false,
      defaultValue: "'filled'"
    },
    {
      name: 'elevation',
      type: "'none' | 'sm' | 'md' | 'lg' | 'xl'",
      description: 'Elevation level (shadow depth)',
      required: false,
      defaultValue: "'none'"
    },
    {
      name: 'row',
      type: 'boolean',
      description: 'Horizontal layout (image on left, content on right)',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'flat',
      type: 'boolean',
      description: 'Remove padding from image container',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'active',
      type: 'boolean',
      description: 'Apply active/selected styling',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: 'Disabled state - prevents interactions and shows visual feedback',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'loading',
      type: 'boolean',
      description: 'Loading state - shows loading indicator',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'selected',
      type: 'boolean',
      description: 'Selected state - indicates card is selected',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'interactive',
      type: 'boolean',
      description: 'Interactive state - makes card clickable with proper ARIA attributes',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'children',
      type: 'ReactNode',
      description: 'Custom content for the card body',
      required: false
    },
    {
      name: 'onClick',
      type: '(event: MouseEvent) => void',
      description: 'Click event handler',
      required: false
    },
    {
      name: 'onHover',
      type: '(event: MouseEvent) => void',
      description: 'Hover event handler',
      required: false
    },
    {
      name: 'onFocus',
      type: '(event: FocusEvent) => void',
      description: 'Focus event handler',
      required: false
    },
    {
      name: 'href',
      type: 'string',
      description: 'Link URL - when provided, card renders as an anchor element',
      required: false
    },
    {
      name: 'target',
      type: "'_blank' | '_self' | '_parent' | '_top'",
      description: 'Link target attribute',
      required: false
    },
    {
      name: 'role',
      type: "'article' | 'button' | 'link' | 'region'",
      description: 'ARIA role for the card',
      required: false
    },
    {
      name: 'ariaLabel',
      type: 'string',
      description: 'ARIA label for accessibility',
      required: false
    },
    {
      name: 'ariaDescribedBy',
      type: 'string',
      description: 'ARIA described by reference',
      required: false
    },
    {
      name: 'tabIndex',
      type: 'number',
      description: 'Tab index for keyboard navigation',
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
      name: 'glass',
      type: 'boolean | AtomixGlassProps',
      description: 'Applies a glass morphism effect to the card',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'style',
      type: 'React.CSSProperties',
      description: 'Custom style for the card',
      required: false
    }
  ],
  examples: [
    {
      title: 'Basic Content Card',
      description: 'A simple card with title, text, and actions',
      code: `import { Card, Button } from '@shohojdhara/atomix';

<Card
  title="Getting Started"
  text="Learn how to use our platform with this comprehensive guide."
  actions={<Button variant="primary" label="Read Guide" />}
/>`,
      preview: true
    },
    {
      title: 'Image Card',
      description: 'Card with image, title, and text',
      code: `import { Card } from '@shohojdhara/atomix';

<Card
  image="https://example.com/landscape.jpg"
  imageAlt="Beautiful landscape"
  title="Nature Photography"
  text="Explore the beauty of nature through stunning photography."
/>`,
      preview: true
    },
    {
      title: 'Icon Card',
      description: 'Card with icon in header',
      code: `import { Card, Icon, Button } from '@shohojdhara/atomix';

<Card
  icon={<Icon name="Zap" size="lg" />}
  title="Fast Performance"
  text="Lightning-fast load times and optimal performance."
  actions={<Button variant="outline-primary" label="Learn More" />}
/>`,
      preview: true
    },
    {
      title: 'Row Layout Card',
      description: 'Horizontal layout with image on left',
      code: `import { Card, Button } from '@shohojdhara/atomix';

<Card
  row
  image="https://example.com/product-thumb.jpg"
  imageAlt="Product thumbnail"
  title="Product Name"
  text="Short product description that fits nicely in a horizontal layout."
  actions={<Button variant="primary" label="View Details" />}
/>`,
      preview: true
    },
    {
      title: 'Card Variants and Appearances',
      description: 'Different appearance styles and elevation levels',
      code: `import { Card } from '@shohojdhara/atomix';

// Different appearances
<Card appearance="filled" title="Filled Card" text="Default filled appearance" />
<Card appearance="outlined" title="Outlined Card" text="Card with border outline" />
<Card appearance="ghost" title="Ghost Card" text="Minimal styling card" />
<Card appearance="elevated" title="Elevated Card" text="Card with shadow elevation" />

// Different elevation levels
<Card elevation="sm" title="Small Elevation" text="Subtle shadow" />
<Card elevation="md" title="Medium Elevation" text="Moderate shadow" />
<Card elevation="lg" title="Large Elevation" text="Prominent shadow" />`,
      preview: true
    },
    {
      title: 'Interactive Cards',
      description: 'Cards with click handlers and state management',
      code: `import { Card } from '@shohojdhara/atomix';
import { useState } from 'react';

function InteractiveCard() {
  const [isActive, setIsActive] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div>
      <Card
        title="Clickable Card"
        text="Click this card to interact with it."
        interactive
        onClick={() => setIsActive(!isActive)}
        active={isActive}
      />
      
      <Card
        title="Selectable Card"
        text="Click this card to select it."
        selected={isSelected}
        onClick={() => setIsSelected(!isSelected)}
      />
    </div>
  );
}`,
      preview: true
    },
    {
      title: 'Card as Link',
      description: 'Card that renders as an anchor element',
      code: `import { Card } from '@shohojdhara/atomix';

<Card
  href="/product/123"
  target="_blank"
  image="https://example.com/product.jpg"
  imageAlt="Product"
  title="Product Name"
  text="Click to view product details"
/>`,
      preview: true
    },
    {
      title: 'Card States',
      description: 'Different card states (disabled, loading, selected)',
      code: `import { Card } from '@shohojdhara/atomix';

// Disabled card
<Card
  title="Disabled Card"
  text="This card is disabled"
  disabled
/>

// Loading card
<Card
  title="Loading Card"
  text="Content is being loaded"
  loading
/>

// Selected card
<Card
  title="Selected Card"
  text="This card is selected"
  selected
/>`,
      preview: true
    }
  ],
  accessibility: {
    overview: 'The Card component follows accessibility best practices with proper ARIA attributes, keyboard navigation, and semantic HTML.',
    keyboardSupport: [
      { key: 'Enter/Space', action: 'Activates the card (when interactive)', context: 'When onClick prop is provided' },
      { key: 'Tab', action: 'Moves focus to the card and interactive elements within', context: 'When interactive' },
      { key: 'Shift + Tab', action: 'Moves focus away from the card', context: 'When interactive' }
    ],
    ariaAttributes: [
      { attribute: 'role', description: 'Applied automatically: "button" when onClick is provided, "link" when href is provided, "article" for standalone content', required: false },
      { attribute: 'aria-label', description: 'For cards without visible text or when additional context is needed', required: false },
      { attribute: 'aria-labelledby', description: 'To associate card with its title', required: false },
      { attribute: 'aria-describedby', description: 'To associate card with its description', required: false },
      { attribute: 'tabIndex', description: 'Set appropriately for interactive cards', required: false }
    ],
    guidelines: [
      'Provide meaningful alt text for images: Use descriptive imageAlt prop',
      'Use semantic heading levels: Use proper heading tags in title prop',
      'Ensure sufficient color contrast: Maintain WCAG AA standards for all text',
      'Make interactive cards keyboard accessible: Provide onClick handlers and proper ARIA attributes',
      'Use appropriate roles: Let the component handle role assignment based on props'
    ],
    wcagLevel: 'AA' as const,
    screenReaderSupport: true,
    focusManagement: [
      'Cards typically do not receive focus unless interactive',
      'Interactive cards should be focusable with clear focus indicators',
      'Focus moves logically through interactive elements within cards',
      'When card is a link, focus behavior follows standard anchor patterns'
    ]
  }
};
