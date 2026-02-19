export const modalMetadata = {
  id: 'modal',
  name: 'Modal',
  description: 'Creates overlay dialogs for displaying content that requires user attention or interaction. Provides a flexible, accessible way to show forms, confirmations, images, or any other content in a focused overlay.',
  category: 'Overlays',
  status: 'stable' as const,
  version: '1.0.0',
  importPath: '@shohojdhara/atomix/Modal',
  dependencies: ['react'],
  tags: ['modal', 'dialog', 'popup', 'overlay', 'popover', 'alert'],
  relatedComponents: ['Button', 'Form', 'Icon', 'Spinner', 'Card'],
  features: [
    'Focus trap and management',
    'Backdrop with click-to-close option',
    'Keyboard navigation (Escape to close)',
    'Multiple sizes (sm, md, lg, xl)',
    'Customizable header, subtitle, and footer',
    'Portal rendering',
    'Animation support',
    'Glass morphism effect support',
    'Full accessibility support with ARIA attributes',
    'Programmatic open/close control'
  ],
  props: [
    {
      name: 'isOpen',
      type: 'boolean',
      description: 'Whether the modal is open',
      required: true
    },
    {
      name: 'onOpenChange',
      type: '(isOpen: boolean) => void',
      description: 'Callback when open state changes',
      required: false
    },
    {
      name: 'onOpen',
      type: '() => void',
      description: 'Callback when modal opens',
      required: false
    },
    {
      name: 'onClose',
      type: '() => void',
      description: 'Callback when modal closes',
      required: false
    },
    {
      name: 'title',
      type: 'ReactNode',
      description: 'Modal title in header',
      required: false
    },
    {
      name: 'subtitle',
      type: 'ReactNode',
      description: 'Modal subtitle in header',
      required: false
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg' | 'xl'",
      description: 'Modal size',
      required: false,
      defaultValue: "'md'"
    },
    {
      name: 'backdrop',
      type: 'boolean',
      description: 'Close when backdrop is clicked',
      required: false,
      defaultValue: 'true'
    },
    {
      name: 'keyboard',
      type: 'boolean',
      description: 'Close when escape key is pressed',
      required: false,
      defaultValue: 'true'
    },
    {
      name: 'closeButton',
      type: 'boolean',
      description: 'Show close button in header',
      required: false,
      defaultValue: 'true'
    },
    {
      name: 'footer',
      type: 'ReactNode',
      description: 'Footer content',
      required: false
    },
    {
      name: 'children',
      type: 'ReactNode',
      description: 'Modal body content',
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
      description: 'Glass morphism effect for the modal',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'style',
      type: 'React.CSSProperties',
      description: 'Custom style for the modal',
      required: false
    }
  ],
  examples: [
    {
      title: 'Basic Modal',
      description: 'Simple modal with title, subtitle, and content',
      code: `import { Modal, Button } from '@shohojdhara/atomix';
import { useState } from 'react';

function BasicModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button 
        label="Open Modal" 
        onClick={() => setIsOpen(true)} 
      />
      
      <Modal
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        title="Basic Modal"
        subtitle="This is a simple modal example"
      >
        <p>This is the modal content. You can put any content here.</p>
      </Modal>
    </>
  );
}`,
      preview: true
    },
    {
      title: 'Confirmation Modal',
      description: 'Modal for confirming actions with footer buttons',
      code: `import { Modal, Button } from '@shohojdhara/atomix';
import { useState } from 'react';

function ConfirmationModal({ isOpen, onConfirm, onCancel, title, message }) {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onCancel}
      title={title}
      size="sm"
      footer={
        <div className="u-flex u-gap-3 u-justify-end">
          <Button 
            label="Cancel" 
            variant="secondary" 
            onClick={onCancel} 
          />
          <Button 
            label="Confirm" 
            variant="error" 
            onClick={onConfirm} 
          />
        </div>
      }
    >
      <p>{message}</p>
    </Modal>
  );
}`,
      preview: true
    },
    {
      title: 'Form Modal',
      description: 'Modal containing a form with validation',
      code: `import { Modal, Form, FormGroup, Input, Textarea, Button } from '@shohojdhara/atomix';
import { useState } from 'react';

function FormModal({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onClose}
      title="Contact Us"
      subtitle="Send us a message"
      size="md"
      footer={
        <div className="u-flex u-gap-3 u-justify-end">
          <Button label="Cancel" variant="secondary" onClick={onClose} />
          <Button label="Send Message" variant="primary" type="submit" form="contact-form" />
        </div>
      }
    >
      <Form id="contact-form" onSubmit={handleSubmit}>
        <FormGroup label="Name" required>
          <Input value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
        </FormGroup>
        <FormGroup label="Email" required>
          <Input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
        </FormGroup>
        <FormGroup label="Message" required>
          <Textarea value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} rows={4} />
        </FormGroup>
      </Form>
    </Modal>
  );
}`,
      preview: true
    },
    {
      title: 'Modal Sizes',
      description: 'Different modal sizes for various use cases',
      code: `import { Modal } from '@shohojdhara/atomix';

<Modal isOpen={true} size="sm" title="Small Modal">Small content</Modal>
<Modal isOpen={true} size="md" title="Medium Modal">Medium content</Modal>
<Modal isOpen={true} size="lg" title="Large Modal">Large content</Modal>
<Modal isOpen={true} size="xl" title="Extra Large Modal">Extra large content</Modal>`,
      preview: true
    },
    {
      title: 'Glass Effect Modal',
      description: 'Modal with glass morphism effect',
      code: `import { Modal, Button } from '@shohojdhara/atomix';
import { useState } from 'react';

function GlassModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button label="Open Glass Modal" onClick={() => setIsOpen(true)} />
      <Modal
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        title="Glass Modal"
        glass={true}
      >
        <p>This modal has a glass morphism effect applied.</p>
      </Modal>
    </>
  );
}`,
      preview: true
    },
    {
      title: 'Non-dismissible Modal',
      description: 'Modal that cannot be closed by clicking backdrop or pressing Escape',
      code: `import { Modal } from '@shohojdhara/atomix';

<Modal
  isOpen={isOpen}
  onOpenChange={setIsOpen}
  backdrop={false}
  keyboard={false}
  title="Important Notice"
>
  <p>This modal must be explicitly closed using the close button.</p>
</Modal>`,
      preview: true
    }
  ],
  accessibility: {
    overview: 'The Modal component follows WCAG accessibility guidelines with proper ARIA attributes, focus management, and keyboard navigation.',
    keyboardSupport: [
      { key: 'Escape', action: 'Closes the modal (if keyboard prop is true)' },
      { key: 'Tab', action: 'Cycles through focusable elements within modal' },
      { key: 'Shift + Tab', action: 'Reverse tab order' },
      { key: 'Focus trap', action: 'Keeps focus within the modal when open' }
    ],
    ariaAttributes: [
      { attribute: 'role="dialog"', description: 'Identifies the modal as a dialog', required: true },
      { attribute: 'aria-modal="true"', description: 'Indicates modal behavior', required: true },
      { attribute: 'aria-labelledby', description: 'References the modal title', required: false },
      { attribute: 'aria-describedby', description: 'References the modal description', required: false },
      { attribute: 'aria-hidden', description: 'Hides background content from screen readers', required: true }
    ],
    guidelines: [
      'Use modals sparingly: Only for important interactions that require user attention',
      'Provide clear titles: Always include a descriptive title prop',
      'Include close mechanisms: Ensure users can easily close the modal',
      'Keep content focused: Avoid overly complex or lengthy content',
      'Return focus properly: Focus returns to trigger element after closing',
      'Hide background content: Background is automatically hidden from screen readers'
    ],
    wcagLevel: 'AA' as const,
    screenReaderSupport: true,
    focusManagement: [
      'Focus moves to modal when opened',
      'Focus is trapped within modal',
      'Focus returns to trigger element when closed',
      'Background content is hidden from screen readers via aria-hidden',
      'Clear focus indicators for all interactive elements',
      'Modal title is announced when opened'
    ]
  }
};

