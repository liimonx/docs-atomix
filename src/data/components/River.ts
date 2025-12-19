export const riverMetadata = {
  id: 'river',
  name: 'River',
  description: 'A flexible layout component for creating prominent content sections with titles, text, and actions. Commonly used for call-to-action sections, hero content, and feature highlights.',
  category: 'Layout',
  status: 'stable' as const,
  version: '1.0.0',
  importPath: '@shohojdhara/atomix/River',
  dependencies: ['react'],
  tags: ['river', 'layout', 'cta', 'call-to-action', 'hero', 'section'],
  relatedComponents: ['Hero', 'Block', 'Card', 'Button'],
  features: [
    'Title and text content support',
    'Action buttons/elements',
    'Content width control',
    'Center alignment option',
    'Flexible layout',
    'Glass morphism effect support'
  ],
  props: [
    {
      name: 'title',
      type: 'ReactNode',
      description: 'River title/heading',
      required: false
    },
    {
      name: 'text',
      type: 'ReactNode',
      description: 'River text content',
      required: false
    },
    {
      name: 'actions',
      type: 'ReactNode',
      description: 'Action buttons or elements',
      required: false
    },
    {
      name: 'center',
      type: 'boolean',
      description: 'Whether to center the content',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'contentWidth',
      type: 'string',
      description: 'Maximum width of the content area',
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
      description: 'Glass morphism effect for the river',
      required: false,
      defaultValue: 'false'
    }
  ],
  examples: [
    {
      title: 'Basic River',
      description: 'Simple river with title, text, and actions',
      code: `import { River, Button } from '@shohojdhara/atomix';

function BasicRiver() {
  return (
    <River
      title="Get Started Today"
      text="Join thousands of developers using Atomix Design System"
      actions={
        <>
          <Button label="Sign Up" variant="primary" />
          <Button label="Learn More" variant="secondary" />
        </>
      }
    />
  );
}`,
      preview: null
    },
    {
      title: 'Centered River',
      description: 'Centered river for call-to-action sections',
      code: `function CenteredRiver() {
  return (
    <River
      title="Ready to Start?"
      text="Begin building amazing user interfaces today"
      center
      actions={<Button label="Get Started" variant="primary" />}
    />
  );
}`,
      preview: null
    },
    {
      title: 'River with Custom Width',
      description: 'River with controlled content width',
      code: `function RiverWithWidth() {
  return (
    <River
      title="Featured Content"
      text="This river has a custom maximum content width"
      contentWidth="600px"
      center
      actions={<Button label="Action" variant="primary" />}
    />
  );
}`,
      preview: null
    },
    {
      title: 'River with Glass Effect',
      description: 'River with glass morphism effect',
      code: `function RiverWithGlass() {
  return (
    <River
      title="Premium Experience"
      text="Experience the power of glass morphism"
      glass
      center
      actions={<Button label="Explore" variant="primary" />}
    />
  );
}`,
      preview: null
    }
  ],
  accessibility: {
    overview: 'The River component uses semantic HTML and follows WCAG 2.1 guidelines for proper document structure and accessibility.',
    keyboardSupport: [
      {
        key: 'Tab',
        action: 'Moves focus to action buttons'
      },
      {
        key: 'Enter',
        action: 'Activates focused action button'
      }
    ],
    ariaAttributes: [
      {
        attribute: 'aria-label',
        description: 'Descriptive label for the river section',
        required: false
      }
    ],
    guidelines: [
      'Use semantic heading elements for titles',
      'Ensure action buttons are keyboard accessible',
      'Provide clear, descriptive text content',
      'Ensure sufficient color contrast',
      'Use appropriate heading hierarchy'
    ],
    wcagLevel: 'AA' as const,
    screenReaderSupport: true,
    focusManagement: [
      'Action buttons receive focus when tabbed to',
      'Content structure is announced to screen readers',
      'Focus order follows logical document flow'
    ]
  }
};

