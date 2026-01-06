// import { Block } from '@shohojdhara/atomix';

export const blockMetadata = {
  id: 'block',
  name: 'Block',
  description: 'A flexible layout container designed for creating consistent section layouts. It provides standardized spacing, background variants, and container behavior for organizing content into distinct sections or blocks.',
  category: 'Layout',
  status: 'stable' as const,
  version: '1.0.0',
  importPath: '@shohojdhara/atomix/Block',
  dependencies: ['react'],
  tags: ['block', 'section', 'container', 'layout', 'spacing'],
  relatedComponents: ['Card', 'Container', 'Grid'],
  features: [
    'Flexible spacing options (xs, sm, md, lg, xl, none)',
    'Multiple background variants',
    'Full-width content support',
    'Configurable HTML elements (section, div, article, aside, main)',
    'Built-in container behavior for responsive layouts',
    'Container configuration options'
  ],
  props: [
    {
      name: 'children',
      type: 'ReactNode',
      description: 'Content to be displayed inside the block',
      required: false
    },
    {
      name: 'spacing',
      type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none'",
      description: 'Vertical padding/spacing',
      required: false,
      defaultValue: "'md'"
    },
    {
      name: 'variant',
      type: 'string',
      description: 'Background variant',
      required: false
    },
    {
      name: 'fullWidth',
      type: 'boolean',
      description: 'Whether block should span full width',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'as',
      type: "'section' | 'div' | 'article' | 'aside' | 'main'",
      description: 'HTML element to render as',
      required: false,
      defaultValue: "'section'"
    },
    {
      name: 'container',
      type: 'boolean',
      description: 'Whether to apply container behavior',
      required: false,
      defaultValue: 'true'
    },
    {
      name: 'containerWidth',
      type: 'string',
      description: 'Custom container max width',
      required: false
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
      title: 'Basic Block',
      description: 'Simple block with default spacing',
      code: `import { Block } from '@shohojdhara/atomix';

function BasicBlock() {
  return (
    <Block>
      <h2>Section Title</h2>
      <p>This is content inside a Block component.</p>
    </Block>
  );
}`,
      preview: true
    },
    {
      title: 'Spacing Options',
      description: 'Blocks with different spacing sizes',
      code: `function SpacingExample() {
  return (
    <>
      <Block spacing="xs">
        <p>Extra small spacing</p>
      </Block>
      
      <Block spacing="sm">
        <p>Small spacing</p>
      </Block>
      
      <Block spacing="md">
        <p>Medium spacing (default)</p>
      </Block>
      
      <Block spacing="lg">
        <p>Large spacing</p>
      </Block>
      
      <Block spacing="xl">
        <p>Extra large spacing</p>
      </Block>
      
      <Block spacing="none">
        <p>No vertical padding</p>
      </Block>
    </>
  );
}`,
      preview: true
    },
    {
      title: 'Full Width Blocks',
      description: 'Blocks that span the full width',
      code: `function FullWidthBlocks() {
  return (
    <Block fullWidth variant="dark">
      <h2>Full Width Section</h2>
      <p>This block spans the full width of the viewport.</p>
    </Block>
  );
}`,
      preview: true
    },
    {
      title: 'Custom HTML Elements',
      description: 'Blocks rendered as different HTML elements',
      code: `function CustomElements() {
  return (
    <>
      <Block as="article">
        <h2>Article Block</h2>
        <p>Rendered as an article element.</p>
      </Block>
      
      <Block as="aside">
        <h3>Aside Block</h3>
        <p>Rendered as an aside element.</p>
      </Block>
      
      <Block as="main">
        <h1>Main Block</h1>
        <p>Rendered as a main element.</p>
      </Block>
    </>
  );
}`,
      preview: true
    }
  ],
  accessibility: {
    overview: 'The Block component uses semantic HTML elements and follows WCAG 2.1 guidelines for proper document structure and accessibility.',
    keyboardSupport: [
      {
        key: 'N/A',
        action: 'Blocks are layout containers and typically non-interactive',
        context: 'When blocks contain interactive content, they should follow standard interactive patterns'
      }
    ],
    ariaAttributes: [
      {
        attribute: 'role',
        description: 'Applied automatically based on the "as" prop (section, article, etc.)',
        required: false
      },
      {
        attribute: 'aria-label',
        description: 'Descriptive label for the block when needed',
        required: false
      }
    ],
    guidelines: [
      'Use semantic HTML elements (section, article, aside, main)',
      'Provide descriptive labels when needed',
      'Ensure sufficient color contrast for text',
      'Use appropriate heading hierarchy within blocks',
      'Maintain logical document structure'
    ],
    wcagLevel: 'AA' as const,
    screenReaderSupport: true,
    focusManagement: [
      'Blocks typically do not receive focus',
      'Interactive content within blocks should be focusable',
      'Block structure is announced to screen readers'
    ]
  }
};

