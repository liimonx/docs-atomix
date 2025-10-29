export const accordionMetadata = {
  id: 'accordion',
  name: 'Accordion',
  description: 'Collapsible content sections that help organize information in a space-efficient way. Users can expand and collapse sections to reveal or hide content, making it perfect for FAQs, settings panels, and content organization.',
  category: 'Layout',
  status: 'stable' as const,
  version: '1.0.0',
  importPath: '@shohojdhara/atomix/Accordion',
  dependencies: ['react', 'framer-motion'],
  tags: ['accordion', 'collapsible', 'expand', 'collapse', 'content', 'organization'],
  relatedComponents: ['Tabs', 'Collapse', 'Card'],
  features: [
    'Smooth expand/collapse animations',
    'Keyboard navigation support',
    'Customizable icons and positioning',
    'Disabled state',
    'Controlled and uncontrolled modes',
    'Glass morphism effects',
    'Full accessibility support',
    'ARIA attributes and screen reader support'
  ],
  props: [
    {
      name: 'title',
      type: 'string',
      description: 'Accordion header title',
      required: true
    },
    {
      name: 'children',
      type: 'ReactNode',
      description: 'Content to be displayed inside the accordion',
      required: true
    },
    {
      name: 'defaultOpen',
      type: 'boolean',
      description: 'Whether the accordion is open by default',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'disabled',
      type: 'boolean',
      description: 'Whether the accordion is disabled',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'iconPosition',
      type: "'left' | 'right'",
      description: 'Position of the expand/collapse icon',
      required: false,
      defaultValue: 'right'
    },
    {
      name: 'onToggle',
      type: '(isOpen: boolean) => void',
      description: 'Callback function when accordion is toggled',
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
      title: 'Basic Accordion',
      description: 'A simple accordion with content',
      code: `<Accordion title="Accordion Title">
  <p>This is the content of the accordion. It can contain any type of content including text, images, or other components.</p>
</Accordion>`,
      preview: null
    },
    {
      title: 'Multiple Accordions',
      description: 'A group of accordions working together',
      code: `<Accordion title="First Accordion">
  <p>Content of the first accordion.</p>
</Accordion>
<Accordion title="Second Accordion">
  <p>Content of the second accordion.</p>
</Accordion>
<Accordion title="Third Accordion">
  <p>Content of the third accordion.</p>
</Accordion>`,
      preview: null
    },
    {
      title: 'Default Open',
      description: 'An accordion that is open by default',
      code: `<Accordion title="Default Open Accordion" defaultOpen>
  <p>This accordion is open when first rendered.</p>
</Accordion>`,
      preview: null
    }
  ],
  accessibility: {
    keyboardSupport: [
      'Enter or Space - Toggle accordion',
      'Tab - Move to next focusable element',
      'Shift + Tab - Move to previous focusable element',
      'Up/Down arrows - Navigate between accordion headers'
    ],
    ariaAttributes: [
      'aria-expanded - Indicates if the accordion is expanded or collapsed',
      'aria-controls - References the content element controlled by the header',
      'aria-disabled - Set when the accordion is disabled'
    ],
    screenReaderSupport: true,
    focusManagement: [
      'Accordion headers are focusable',
      'Focus moves to headers when tabbing through the page',
      'Focus can be moved between headers using arrow keys'
    ]
  }
};
