export const atomixGlassMetadata = {
  id: 'atomix-glass',
  name: 'AtomixGlass',
  description: 'A high-performance glass morphism component with liquid distortion effects, featuring hardware-accelerated glass effects, mouse-responsive liquid distortion, automatic light/dark theme detection, accessibility and performance optimizations, and multiple displacement modes (standard, polar, prominent, shader).',
  category: 'Effects',
  status: 'stable' as const,
  version: '1.0.0',
  importPath: '@shohojdhara/atomix/AtomixGlass',
  dependencies: ['react'],
  tags: ['glass', 'morphism', 'effects', 'distortion', 'liquid', 'blur', 'displacement'],
  relatedComponents: ['Card', 'Modal', 'Hero'],
  features: [
    'Hardware-accelerated glass effects with SVG filters',
    'Mouse-responsive liquid distortion',
    'Automatic light/dark theme detection',
    'Accessibility and performance optimizations',
    'Multiple displacement modes (standard, polar, prominent, shader)',
    'Customizable displacement, blur, saturation, and chromatic aberration effects',
    'Elasticity and hover effects',
    'Glass morphism effects for cards, modals, hero sections, and other UI elements'
  ],
  props: [
    {
      name: 'children',
      type: 'ReactNode',
      description: 'Content to display inside the glass effect',
      required: true
    },
    {
      name: 'displacementScale',
      type: 'number',
      description: 'Intensity of the displacement effect',
      required: false,
      defaultValue: '20'
    },
    {
      name: 'blurAmount',
      type: 'number',
      description: 'Amount of blur to apply',
      required: false,
      defaultValue: '1'
    },
    {
      name: 'mode',
      type: "'standard' | 'polar' | 'prominent' | 'shader'",
      description: 'Displacement mode to use',
      required: false,
      defaultValue: 'standard'
    },
    {
      name: 'enableLiquidBlur',
      type: 'boolean',
      description: 'Enable liquid blur effect',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'elasticity',
      type: 'number',
      description: 'Elasticity factor for mouse movement',
      required: false,
      defaultValue: '0'
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
      title: 'Basic Glass Effect',
      description: 'A simple glass effect applied to content',
      code: `<AtomixGlass>
  <div style={{ padding: '2rem' }}>
    <h3>Glass Content</h3>
    <p>This content is displayed with a glass effect.</p>
  </div>
</AtomixGlass>`,
      preview: true
    },
    {
      title: 'Customized Glass Effect',
      description: 'Glass effect with custom parameters',
      code: `<AtomixGlass 
  displacementScale={30}
  blurAmount={2}
  mode="prominent"
  elasticity={0.5}
>
  <div style={{ padding: '2rem' }}>
    <h3>Custom Glass</h3>
    <p>This glass effect has custom parameters.</p>
  </div>
</AtomixGlass>`,
      preview: true
    }
  ],
  accessibility: {
    keyboardSupport: [
      'Glass effects are visual enhancements and do not affect keyboard navigation',
      'Ensure content within glass effects maintains proper focus order'
    ],
    ariaAttributes: [
      'No specific ARIA attributes needed for glass effects',
      'Maintain proper semantics of content within glass effects'
    ],
    screenReaderSupport: true,
    focusManagement: [
      'Focus management follows standard content patterns',
      'Ensure focus indicators are visible against glass backgrounds'
    ]
  }
};
