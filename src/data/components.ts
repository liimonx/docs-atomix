import React from 'react';

export interface ComponentMetadata {
  id: string;
  name: string;
  description: string;
  category: string;
  status: 'stable' | 'beta' | 'alpha';
  version: string;
  props: ComponentProp[];
  examples: ComponentExample[];
  features: string[];
  dependencies: string[];
  accessibility: AccessibilityInfo;
  relatedComponents: string[];
  tags: string[];
  importPath: string;
}

export interface ComponentProp {
  name: string;
  type: string;
  description: string;
  required: boolean;
  defaultValue?: string;
  options?: string[];
}

export interface ComponentExample {
  title: string;
  description: string;
  code: string;
  preview: React.ReactNode;
}

export interface AccessibilityInfo {
  keyboardSupport: string[];
  ariaAttributes: string[];
  screenReaderSupport: boolean;
  focusManagement: string[];
}

// Component metadata for all Atomix components
export const componentMetadata: ComponentMetadata[] = [
  {
    id: 'button',
    name: 'Button',
    description: 'A versatile button component with multiple variants and states',
    category: 'inputs',
    status: 'stable',
    version: '1.0.0',
    props: [
      {
        name: 'variant',
        type: 'string',
        description: 'Button visual style',
        required: false,
        defaultValue: 'primary',
        options: ['primary', 'secondary', 'outline', 'ghost', 'danger']
      },
      {
        name: 'size',
        type: 'string',
        description: 'Button size',
        required: false,
        defaultValue: 'md',
        options: ['xs', 'sm', 'md', 'lg', 'xl']
      },
      {
        name: 'disabled',
        type: 'boolean',
        description: 'Disable button interaction',
        required: false,
        defaultValue: 'false'
      },
      {
        name: 'loading',
        type: 'boolean',
        description: 'Show loading state',
        required: false,
        defaultValue: 'false'
      },
      {
        name: 'leftIcon',
        type: 'React.ReactNode',
        description: 'Icon to display on the left',
        required: false
      },
      {
        name: 'rightIcon',
        type: 'React.ReactNode',
        description: 'Icon to display on the right',
        required: false
      }
    ],
    examples: [
      {
        title: 'Basic Button',
        description: 'A simple button with default styling',
        code: `<Button>Click me</Button>`,
        preview: React.createElement('button', {}, 'Click me')
      },
      {
        title: 'Button Variants',
        description: 'Different button styles for various use cases',
        code: `<>
  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="ghost">Ghost</Button>
</>`,
        preview: React.createElement(React.Fragment, {}, 
          React.createElement('button', {}, 'Primary'),
          React.createElement('button', {}, 'Secondary'),
          React.createElement('button', {}, 'Outline'),
          React.createElement('button', {}, 'Ghost')
        )
      },
      {
        title: 'Button Sizes',
        description: 'Buttons in different sizes',
        code: `<>
  <Button size="xs">Extra Small</Button>
  <Button size="sm">Small</Button>
  <Button size="md">Medium</Button>
  <Button size="lg">Large</Button>
  <Button size="xl">Extra Large</Button>
</>`,
        preview: React.createElement(React.Fragment, {}, 
          React.createElement('button', {}, 'XS'),
          React.createElement('button', {}, 'SM'),
          React.createElement('button', {}, 'MD'),
          React.createElement('button', {}, 'LG'),
          React.createElement('button', {}, 'XL')
        )
      }
    ],
    features: [
      'Multiple variants and sizes',
      'Loading and disabled states',
      'Icon support',
      'Full keyboard accessibility',
      'Focus management',
      'Ripple effect'
    ],
    dependencies: [],
    accessibility: {
      keyboardSupport: ['Enter', 'Space'],
      ariaAttributes: ['aria-disabled', 'aria-busy', 'aria-label'],
      screenReaderSupport: true,
      focusManagement: ['Focus visible', 'Tab order']
    },
    relatedComponents: ['IconButton', 'ButtonGroup'],
    tags: ['button', 'click', 'action', 'cta'],
    importPath: '@shohojdhara/atomix'
  },
  {
    id: 'card',
    name: 'Card',
    description: 'A flexible container component for grouping related content',
    category: 'display',
    status: 'stable',
    version: '1.0.0',
    props: [
      {
        name: 'variant',
        type: 'string',
        description: 'Card visual style',
        required: false,
        defaultValue: 'default',
        options: ['default', 'outline', 'elevated']
      },
      {
        name: 'padding',
        type: 'string',
        description: 'Padding size',
        required: false,
        defaultValue: 'md',
        options: ['xs', 'sm', 'md', 'lg', 'xl']
      },
      {
        name: 'borderRadius',
        type: 'string',
        description: 'Border radius size',
        required: false,
        defaultValue: 'md',
        options: ['none', 'sm', 'md', 'lg', 'xl']
      },
      {
        name: 'shadow',
        type: 'string',
        description: 'Shadow size',
        required: false,
        defaultValue: 'sm',
        options: ['none', 'sm', 'md', 'lg', 'xl']
      }
    ],
    examples: [
      {
        title: 'Basic Card',
        description: 'A simple card with content',
        code: `<Card>
  <h3>Card Title</h3>
  <p>This is some card content.</p>
</Card>`,
        preview: React.createElement('div', { 
          style: { border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px' } 
        }, 
          React.createElement('h3', {}, 'Card Title'),
          React.createElement('p', {}, 'This is some card content.')
        )
      },
      {
        title: 'Card with Header and Footer',
        description: 'Card with structured content areas',
        code: `<Card>
  <Card.Header>
    <h3>Card Header</h3>
  </Card.Header>
  <Card.Body>
    <p>Card body content goes here.</p>
  </Card.Body>
  <Card.Footer>
    <Button>Action</Button>
  </Card.Footer>
</Card>`,
        preview: React.createElement('div', { 
          style: { border: '1px solid #e2e8f0', borderRadius: '8px' } 
        }, 
          React.createElement('div', { 
            style: { padding: '16px', borderBottom: '1px solid #e2e8f0' } 
          }, React.createElement('h3', {}, 'Card Header')),
          React.createElement('div', { 
            style: { padding: '16px' } 
          }, React.createElement('p', {}, 'Card body content goes here.')),
          React.createElement('div', { 
            style: { padding: '16px', borderTop: '1px solid #e2e8f0' } 
          }, React.createElement('button', {}, 'Action'))
        )
      }
    ],
    features: [
      'Flexible content structure',
      'Multiple variants',
      'Customizable padding and shadow',
      'Header and footer support',
      'Responsive design'
    ],
    dependencies: [],
    accessibility: {
      keyboardSupport: [],
      ariaAttributes: [],
      screenReaderSupport: true,
      focusManagement: []
    },
    relatedComponents: ['CardHeader', 'CardBody', 'CardFooter'],
    tags: ['card', 'container', 'layout', 'content'],
    importPath: '@shohojdhara/atomix'
  }
];

export const getComponentById = (id: string) => {
  return componentMetadata.find(component => component.id === id);
};

export const getComponentsByCategory = (category: string) => {
  return componentMetadata.filter(component => component.category === category);
};

export const getAllCategories = () => {
  const categories = new Set(componentMetadata.map(component => component.category));
  return Array.from(categories);
};