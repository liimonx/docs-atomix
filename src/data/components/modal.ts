export const modalMetadata = {
  id: 'modal',
  name: 'Modal',
  description: 'Modal dialog component for displaying content in an overlay, with focus management and accessibility features.',
  category: 'Overlays',
  status: 'stable' as const,
  version: '1.0.0',
  importPath: '@shohojdhara/atomix/Modal',
  dependencies: ['react'],
  tags: ['modal', 'dialog', 'popup', 'overlay', 'popover'],
  relatedComponents: ['Dropdown', 'Tooltip', 'Popover', 'Card'],
  features: [
    'Focus trap and management',
    'Backdrop with click-to-close',
    'Keyboard navigation',
    'Multiple sizes',
    'Customizable header and footer',
    'Portal rendering',
    'Animation support',
    'Full accessibility support'
  ],
  props: [
    {
      name: 'open',
      type: 'boolean',
      description: 'Whether the modal is open',
      required: true
    },
    {
      name: 'onClose',
      type: '() => void',
      description: 'Callback function when modal should close',
      required: true
    },
    {
      name: 'title',
      type: 'string | ReactNode',
      description: 'Modal title',
      required: false
    },
    {
      name: 'children',
      type: 'ReactNode',
      description: 'Modal content',
      required: false
    },
    {
      name: 'footer',
      type: 'ReactNode',
      description: 'Modal footer content',
      required: false
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg' | 'xl' | 'full'",
      description: 'Size of the modal',
      required: false,
      defaultValue: "'md'"
    },
    {
      name: 'closeOnBackdropClick',
      type: 'boolean',
      description: 'Whether clicking backdrop closes modal',
      required: false,
      defaultValue: 'true'
    },
    {
      name: 'closeOnEscape',
      type: 'boolean',
      description: 'Whether pressing Escape closes modal',
      required: false,
      defaultValue: 'true'
    },
    {
      name: 'showCloseButton',
      type: 'boolean',
      description: 'Whether to show close button',
      required: false,
      defaultValue: 'true'
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
      title: 'Basic Modal',
      description: 'Simple modal with title and content',
      code: `const [isOpen, setIsOpen] = useState(false);

<Button onClick={() => setIsOpen(true)}>Open Modal</Button>
<Modal
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Modal Title"
>
  <p>This is the modal content.</p>
</Modal>`,
      preview: null
    },
    {
      title: 'Modal Sizes',
      description: 'Different modal sizes',
      code: `<Modal open={true} size="sm" title="Small Modal">...</Modal>
<Modal open={true} size="md" title="Medium Modal">...</Modal>
<Modal open={true} size="lg" title="Large Modal">...</Modal>
<Modal open={true} size="xl" title="Extra Large Modal">...</Modal>`,
      preview: null
    },
    {
      title: 'Modal with Footer',
      description: 'Modal with custom footer actions',
      code: `<Modal
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirm Action"
  footer={
    <>
      <Button variant="outline" onClick={() => setIsOpen(false)}>
        Cancel
      </Button>
      <Button onClick={() => {
        // Handle confirm
        setIsOpen(false);
      }}>
        Confirm
      </Button>
    </>
  }
>
  <p>Are you sure you want to proceed?</p>
</Modal>`,
      preview: null
    },
    {
      title: 'Non-dismissible Modal',
      description: 'Modal that cannot be closed by clicking backdrop',
      code: `<Modal
  open={isOpen}
  onClose={() => setIsOpen(false)}
  closeOnBackdropClick={false}
  title="Important Notice"
>
  <p>This modal must be explicitly closed.</p>
</Modal>`,
      preview: null
    }
  ],
  accessibility: {
    keyboardSupport: [
      'Escape - Close modal',
      'Tab - Navigate through focusable elements',
      'Shift + Tab - Navigate backwards',
      'Focus is trapped within modal when open'
    ],
    ariaAttributes: [
      'aria-modal - Indicates modal dialog',
      'aria-labelledby - References modal title',
      'aria-describedby - References modal content',
      'role="dialog" - Dialog role',
      'aria-hidden - Hides background content from screen readers'
    ],
    screenReaderSupport: true,
    focusManagement: [
      'Focus moves to modal when opened',
      'Focus is trapped within modal',
      'Focus returns to trigger when closed',
      'Background content is hidden from screen readers',
      'Clear focus indicators for all interactive elements'
    ]
  }
};

