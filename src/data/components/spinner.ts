export const spinnerMetadata = {
  id: 'spinner',
  name: 'Spinner',
  description: 'Loading indicators for various states and operations. It offers multiple animation styles, sizes, and can be used inline or as overlay loading states to communicate ongoing processes to users.',
  category: 'Feedback',
  status: 'stable' as const,
  version: '1.0.0',
  importPath: '@shohojdhara/atomix/Spinner',
  dependencies: ['react'],
  tags: ['spinner', 'loading', 'indicator', 'progress', 'loader'],
  relatedComponents: ['Button', 'Progress', 'Modal', 'Card', 'Icon'],
  features: [
    'Multiple color variants (primary, secondary, success, warning, error, info)',
    'Multiple sizes (xs: 16px, sm: 20px, md: 24px, lg: 32px, xl: 48px)',
    'Fullscreen overlay mode',
    'Overlay on parent container',
    'Glass morphism effect support',
    'Accessible labels for screen readers',
    'Smooth CSS animations',
    'Flexible positioning options'
  ],
  props: [
    {
      name: 'variant',
      type: "ThemeColor | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'",
      description: 'Color variant',
      required: false,
      defaultValue: "'primary'"
    },
    {
      name: 'size',
      type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
      description: 'Spinner size',
      required: false,
      defaultValue: "'md'"
    },
    {
      name: 'fullscreen',
      type: 'boolean',
      description: 'Fullscreen overlay',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'overlay',
      type: 'boolean',
      description: 'Overlay on parent',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'label',
      type: 'string',
      description: 'Accessible label',
      required: false
    },
    {
      name: 'glass',
      type: 'boolean | AtomixGlassProps',
      description: 'Enable glass morphism effect',
      required: false,
      defaultValue: 'false'
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
      title: 'Basic Spinners',
      description: 'Color variants and sizes',
      code: `import { Spinner } from '@shohojdhara/atomix';

function BasicSpinners() {
  return (
    <div className="u-gap-6">
      <div className="u-gap-4">
        <h3>Color Variants</h3>
        <div className="u-d-flex u-align-items-center u-gap-4">
          <Spinner variant="primary" />
          <Spinner variant="secondary" />
          <Spinner variant="success" />
          <Spinner variant="warning" />
          <Spinner variant="error" />
          <Spinner variant="info" />
        </div>
      </div>

      <div className="u-gap-4">
        <h3>Sizes</h3>
        <div className="u-d-flex u-align-items-center u-gap-4">
          <Spinner size="xs" variant="primary" />
          <Spinner size="sm" variant="primary" />
          <Spinner size="md" variant="primary" />
          <Spinner size="lg" variant="primary" />
          <Spinner size="xl" variant="primary" />
        </div>
      </div>
    </div>
  );
}`,
      preview: null
    },
    {
      title: 'Loading Buttons',
      description: 'Spinners in buttons for loading states',
      code: `function LoadingButtons() {
  const [loading, setLoading] = useState({});

  const handleAction = async (actionId) => {
    setLoading(prev => ({ ...prev, [actionId]: true }));
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(prev => ({ ...prev, [actionId]: false }));
  };

  return (
    <div className="u-d-flex u-flex-wrap u-gap-4">
      <Button 
        label={loading.save ? "Saving..." : "Save"}
        icon={loading.save ? <Spinner size="sm" /> : <Icon name="FloppyDisk" />}
        onClick={() => handleAction('save')}
        disabled={loading.save}
        variant="primary"
      />
    </div>
  );
}`,
      preview: null
    },
    {
      title: 'Fullscreen Loading',
      description: 'Fullscreen overlay spinner',
      code: `function FullscreenLoading() {
  const [showFullscreen, setShowFullscreen] = useState(false);

  return (
    <div>
      <Button 
        label="Show Fullscreen Loading"
        onClick={() => setShowFullscreen(true)}
        variant="primary"
      />

      {showFullscreen && (
        <Spinner 
          fullscreen 
          variant="primary" 
          size="xl"
          label="Loading application..."
        />
      )}
    </div>
  );
}`,
      preview: null
    },
    {
      title: 'Overlay Spinner',
      description: 'Spinner overlay on parent container',
      code: `function OverlaySpinner() {
  const [loading, setLoading] = useState(false);

  return (
    <div style={{ position: 'relative', minHeight: '200px' }}>
      <div>Content that will be covered</div>
      {loading && (
        <Spinner 
          variant="primary" 
          overlay
          label="Loading content..."
        />
      )}
    </div>
  );
}`,
      preview: null
    },
    {
      title: 'Glass Effect',
      description: 'Spinner with glass morphism effect',
      code: `function GlassSpinner() {
  return (
    <Spinner 
      variant="primary" 
      glass={true}
      label="Loading..."
    />
  );
}`,
      preview: null
    }
  ],
  accessibility: {
    overview: 'The Spinner component follows accessibility best practices with proper ARIA attributes and screen reader support. Loading states are announced to users.',
    keyboardSupport: [
      {
        key: 'N/A',
        action: 'Spinners are typically non-interactive elements',
        context: 'They indicate loading states and do not receive keyboard focus'
      }
    ],
    ariaAttributes: [
      {
        attribute: 'role',
        description: 'Set to "status" to identify loading status',
        required: false
      },
      {
        attribute: 'aria-label',
        description: 'Provides accessible description of the loading state',
        required: false
      },
      {
        attribute: 'aria-live',
        description: 'Set to "polite" to announce status changes',
        required: false
      },
      {
        attribute: 'aria-hidden',
        description: 'Set to "true" for decorative spinners',
        required: false
      }
    ],
    guidelines: [
      'Provide meaningful labels for context',
      'Use appropriate sizes for the container',
      'Show spinners for operations longer than 1 second',
      'Use consistent spinner styles throughout the app',
      'Handle loading states gracefully',
      'Ensure loading state is communicated to screen readers'
    ],
    wcagLevel: 'AA' as const,
    screenReaderSupport: true,
    focusManagement: [
      'Spinners typically do not receive focus',
      'Loading state is announced to screen readers',
      'Custom labels are read when provided',
      'Status changes are communicated'
    ]
  }
};

