export const sectionIntroMetadata = {
  id: 'section-intro',
  name: 'SectionIntro',
  description: 'A component for creating consistent section introductions with titles, descriptions, and optional badges. It provides a standardized way to introduce content sections throughout your application.',
  category: 'Layout',
  status: 'stable' as const,
  version: '1.0.0',
  importPath: '@shohojdhara/atomix/SectionIntro',
  dependencies: ['react'],
  tags: ['section', 'intro', 'header', 'title', 'description', 'layout'],
  relatedComponents: ['Block', 'Card', 'Hero'],
  features: [
    'Title and description support',
    'Optional badge/status indicator',
    'Consistent spacing and typography',
    'Flexible alignment options',
    'Responsive design',
    'Full accessibility support'
  ],
  props: [
    {
      name: 'title',
      type: 'ReactNode',
      description: 'Section title/heading',
      required: false
    },
    {
      name: 'description',
      type: 'ReactNode',
      description: 'Section description text',
      required: false
    },
    {
      name: 'badge',
      type: 'ReactNode',
      description: 'Optional badge or status indicator',
      required: false
    },
    {
      name: 'align',
      type: "'left' | 'center' | 'right'",
      description: 'Text alignment',
      required: false,
      defaultValue: "'left'"
    },
    {
      name: 'className',
      type: 'string',
      description: 'Additional CSS classes',
      required: false,
      defaultValue: "''"
    }
  ],
  examples: [
    {
      title: 'Basic SectionIntro',
      description: 'Simple section introduction with title and description',
      code: `import { SectionIntro } from '@shohojdhara/atomix';

function BasicSectionIntro() {
  return (
    <SectionIntro
      title="Getting Started"
      description="Learn how to get started with Atomix Design System"
    />
  );
}`,
      preview: true
    },
    {
      title: 'With Badge',
      description: 'Section introduction with a badge indicator',
      code: `import { SectionIntro, Badge } from '@shohojdhara/atomix';

function SectionIntroWithBadge() {
  return (
    <SectionIntro
      title="New Features"
      description="Check out our latest additions"
      badge={<Badge color="success">New</Badge>}
    />
  );
}`,
      preview: true
    },
    {
      title: 'Centered Alignment',
      description: 'Centered section introduction',
      code: `function CenteredSectionIntro() {
  return (
    <SectionIntro
      title="Welcome"
      description="This is a centered section introduction"
      align="center"
    />
  );
}`,
      preview: true
    }
  ],
  accessibility: {
    overview: 'The SectionIntro component uses semantic HTML and follows WCAG 2.1 guidelines for proper document structure and accessibility.',
    keyboardSupport: [
      {
        key: 'N/A',
        action: 'SectionIntro is a presentational component and typically non-interactive'
      }
    ],
    ariaAttributes: [
      {
        attribute: 'aria-label',
        description: 'Descriptive label when needed',
        required: false
      }
    ],
    guidelines: [
      'Use semantic heading elements for titles',
      'Ensure sufficient color contrast',
      'Provide clear, descriptive titles and descriptions',
      'Use badges appropriately for status indicators'
    ],
    wcagLevel: 'AA' as const,
    screenReaderSupport: true,
    focusManagement: [
      'SectionIntro typically does not receive focus',
      'Content structure is announced to screen readers'
    ]
  }
};

