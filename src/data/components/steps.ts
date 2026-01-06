// import { Steps } from '@shohojdhara/atomix';

export const stepsMetadata = {
  id: 'steps',
  name: 'Steps',
  description: 'A visual representation of a multi-step process with customizable step indicators, labels, and progress visualization. It supports both horizontal and vertical layouts and can be used for various scenarios like form wizards, onboarding flows, and progress tracking.',
  category: 'Navigation',
  status: 'stable' as const,
  version: '1.0.0',
  importPath: '@shohojdhara/atomix/Steps',
  dependencies: ['react'],
  tags: ['steps', 'wizard', 'progress', 'navigation', 'multi-step', 'workflow'],
  relatedComponents: ['Progress', 'Button', 'Form'],
  features: [
    'Horizontal and vertical layouts',
    'Customizable step indicators',
    'Step labels and descriptions',
    'Completed, active, and upcoming step states',
    'Clickable steps for navigation',
    'Full accessibility support with ARIA attributes',
    'Keyboard navigation support',
    'Responsive design'
  ],
  props: [
    {
      name: 'items',
      type: 'StepItem[]',
      description: 'Array of step items (Required)',
      required: true
    },
    {
      name: 'activeIndex',
      type: 'number',
      description: 'Current active step index (0-based)',
      required: false,
      defaultValue: '0'
    },
    {
      name: 'vertical',
      type: 'boolean',
      description: 'Whether to display steps vertically',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'onStepChange',
      type: '(index: number) => void',
      description: 'Callback when active step changes',
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
      title: 'Basic Steps',
      description: 'Simple horizontal steps component',
      code: `import { useState } from 'react';
import { Steps } from '@shohojdhara/atomix';

function BasicSteps() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { number: 1, text: 'Account Information' },
    { number: 2, text: 'Personal Details' },
    { number: 3, text: 'Verification' },
    { number: 4, text: 'Complete' }
  ];

  return (
    <Steps
      items={steps}
      activeIndex={currentStep}
      onStepChange={setCurrentStep}
    />
  );
}`,
      preview: true
    },
    {
      title: 'Vertical Steps',
      description: 'Steps displayed vertically',
      code: `function VerticalSteps() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { number: 1, text: 'Step 1', description: 'First step description' },
    { number: 2, text: 'Step 2', description: 'Second step description' },
    { number: 3, text: 'Step 3', description: 'Third step description' }
  ];

  return (
    <Steps
      items={steps}
      activeIndex={currentStep}
      onStepChange={setCurrentStep}
      vertical
    />
  );
}`,
      preview: true
    },
    {
      title: 'Form Wizard with Steps',
      description: 'Using steps in a multi-step form',
      code: `function FormWizard() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { number: 1, text: 'Account' },
    { number: 2, text: 'Profile' },
    { number: 3, text: 'Preferences' },
    { number: 4, text: 'Review' }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div>
      <Steps
        items={steps}
        activeIndex={currentStep}
        onStepChange={setCurrentStep}
      />
      
      <div className="form-content">
        {/* Form content based on currentStep */}
      </div>
      
      <div className="form-actions">
        <button onClick={handlePrevious} disabled={currentStep === 0}>
          Previous
        </button>
        <button onClick={handleNext} disabled={currentStep === steps.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
}`,
      preview: true
    }
  ],
  accessibility: {
    overview: 'The Steps component follows WCAG 2.1 guidelines with proper ARIA attributes, keyboard navigation, and screen reader support.',
    keyboardSupport: [
      {
        key: 'Arrow Left',
        action: 'Moves to previous step (when steps are clickable)'
      },
      {
        key: 'Arrow Right',
        action: 'Moves to next step (when steps are clickable)'
      },
      {
        key: 'Home',
        action: 'Moves to first step'
      },
      {
        key: 'End',
        action: 'Moves to last step'
      },
      {
        key: 'Tab',
        action: 'Moves focus to the next focusable element'
      },
      {
        key: 'Shift + Tab',
        action: 'Moves focus to the previous focusable element'
      },
      {
        key: 'Enter',
        action: 'Activates the focused step (when clickable)'
      }
    ],
    ariaAttributes: [
      {
        attribute: 'role="navigation"',
        description: 'Applied automatically to indicate navigation',
        required: true
      },
      {
        attribute: 'aria-label',
        description: 'Descriptive label for the steps',
        required: false
      },
      {
        attribute: 'aria-current',
        description: 'Applied to the current active step',
        required: true
      },
      {
        attribute: 'aria-disabled',
        description: 'Applied to disabled steps',
        required: false
      }
    ],
    guidelines: [
      'Provide descriptive labels for steps',
      'Ensure steps are keyboard accessible when clickable',
      'Use aria-current to indicate the active step',
      'Provide clear visual indicators for step states',
      'Ensure sufficient color contrast for all states',
      'Announce step changes to screen readers when appropriate'
    ],
    wcagLevel: 'AA' as const,
    screenReaderSupport: true,
    focusManagement: [
      'Steps receive focus when tabbed to (if clickable)',
      'Current step is clearly indicated',
      'Focus moves logically through steps',
      'Step states are announced to screen readers'
    ]
  }
};

