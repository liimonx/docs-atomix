
export const progressMetadata = {
  id: 'progress',
  name: 'Progress',
  description: 'A visual feedback component for ongoing processes, loading states, and completion status. It supports various styles, animations, and can display both determinate and indeterminate progress states.',
  category: 'Feedback',
  status: 'stable' as const,
  version: '1.0.0',
  importPath: '@shohojdhara/atomix/Progress',
  dependencies: ['react'],
  tags: ['progress', 'loading', 'indicator', 'bar', 'feedback', 'status'],
  relatedComponents: ['Spinner', 'Button', 'Card'],
  features: [
    'Determinate and indeterminate progress states',
    'Multiple color variants (primary, secondary, success, info, warning, error)',
    'Multiple sizes (sm, md, lg)',
    'Striped and animated stripe patterns',
    'Optional percentage label display',
    'Glass morphism effect support',
    'Full accessibility support with ARIA attributes'
  ],
  props: [
    {
      name: 'value',
      type: 'number',
      description: 'Progress value (0-100) (Required)',
      required: true
    },
    {
      name: 'max',
      type: 'number',
      description: 'Maximum value',
      required: false,
      defaultValue: '100'
    },
    {
      name: 'variant',
      type: "ThemeColor | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error'",
      description: 'Progress bar color variant',
      required: false,
      defaultValue: "'primary'"
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg'",
      description: 'Progress bar size',
      required: false,
      defaultValue: "'md'"
    },
    {
      name: 'indeterminate',
      type: 'boolean',
      description: 'Indeterminate/loading state',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'striped',
      type: 'boolean',
      description: 'Striped pattern',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'animated',
      type: 'boolean',
      description: 'Animated stripes',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'showLabel',
      type: 'boolean',
      description: 'Show percentage label',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'label',
      type: 'string',
      description: 'Custom label text',
      required: false
    },
    {
      name: 'glass',
      type: 'boolean | AtomixGlassProps',
      description: 'Glass morphism effect for the progress bar',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'className',
      type: 'string',
      description: 'Additional CSS classes',
      required: false,
      defaultValue: "''"
    },
    {
      name: 'ariaLabel',
      type: 'string',
      description: 'Accessible label for screen readers',
      required: false
    }
  ],
  examples: [
    {
      title: 'Basic Progress Bars',
      description: 'Progress bars with different color variants',
      code: `import { Progress } from '@shohojdhara/atomix';

function BasicProgress() {
  return (
    <div className="u-gap-4">
      <Progress value={25} variant="primary" showLabel />
      <Progress value={50} variant="success" showLabel />
      <Progress value={75} variant="warning" showLabel />
      <Progress value={90} variant="error" showLabel />
      <Progress value={60} variant="info" showLabel />
    </div>
  );
}`,
      preview: true
    },
    {
      title: 'Progress Sizes',
      description: 'Different sizes of progress bars',
      code: `function ProgressSizes() {
  return (
    <div className="u-gap-4">
      <div>
        <label>Small</label>
        <Progress value={30} size="sm" variant="primary" />
      </div>
      <div>
        <label>Medium (Default)</label>
        <Progress value={60} size="md" variant="primary" />
      </div>
      <div>
        <label>Large</label>
        <Progress value={80} size="lg" variant="primary" />
      </div>
    </div>
  );
}`,
      preview: true
    },
    {
      title: 'Striped and Animated Progress',
      description: 'Progress bars with striped patterns and animations',
      code: `function StripedProgress() {
  return (
    <div className="u-gap-4">
      <div>
        <label>Striped</label>
        <Progress value={45} variant="primary" striped />
      </div>
      <div>
        <label>Animated Stripes</label>
        <Progress value={65} variant="success" striped animated />
      </div>
      <div>
        <label>Indeterminate</label>
        <Progress indeterminate variant="info" />
      </div>
    </div>
  );
}`,
      preview: true
    },
    {
      title: 'File Upload Progress',
      description: 'Using progress bars for file uploads',
      code: `import { useState } from 'react';

function FileUploadProgress() {
  const [uploads, setUploads] = useState([]);

  const simulateUpload = (fileName) => {
    const uploadId = Date.now();
    const newUpload = {
      id: uploadId,
      fileName,
      progress: 0,
      status: 'uploading'
    };

    setUploads(prev => [...prev, newUpload]);

    const interval = setInterval(() => {
      setUploads(prev => prev.map(upload => {
        if (upload.id === uploadId) {
          const newProgress = upload.progress + Math.random() * 15;
          if (newProgress >= 100) {
            clearInterval(interval);
            return { ...upload, progress: 100, status: 'completed' };
          }
          return { ...upload, progress: newProgress };
        }
        return upload;
      }));
    }, 200);
  };

  return (
    <div className="u-gap-4">
      {uploads.map(upload => (
        <div key={upload.id}>
          <div className="u-flex u-justify-between u-mb-2">
            <span>{upload.fileName}</span>
            <span>{Math.round(upload.progress)}%</span>
          </div>
          <Progress 
            value={upload.progress} 
            variant="primary"
            striped
            animated={upload.status === 'uploading'}
          />
        </div>
      ))}
      <button onClick={() => simulateUpload('document.pdf')}>
        Upload File
      </button>
    </div>
  );
}`,
      preview: true
    }
  ],
  accessibility: {
    overview: 'The Progress component follows WCAG 2.1 guidelines with proper ARIA attributes, screen reader announcements, and keyboard navigation support.',
    keyboardSupport: [
      {
        key: 'N/A',
        action: 'Progress bars are typically non-interactive display elements',
        context: 'When used in interactive contexts, they should follow standard interactive patterns'
      }
    ],
    ariaAttributes: [
      {
        attribute: 'role="progressbar"',
        description: 'Applied automatically to indicate progress',
        required: true
      },
      {
        attribute: 'aria-valuenow',
        description: 'Current progress value',
        required: true
      },
      {
        attribute: 'aria-valuemin',
        description: 'Minimum value (typically 0)',
        required: true
      },
      {
        attribute: 'aria-valuemax',
        description: 'Maximum value (typically 100)',
        required: true
      },
      {
        attribute: 'aria-label',
        description: 'Descriptive label for the progress bar',
        required: false
      }
    ],
    guidelines: [
      'Provide descriptive aria-label for progress bars',
      'Use indeterminate state for unknown completion times',
      'Announce progress changes to screen readers when appropriate',
      'Ensure sufficient color contrast for all variants',
      'Provide text alternatives for progress information'
    ],
    wcagLevel: 'AA' as const,
    screenReaderSupport: true,
    focusManagement: [
      'Progress bars typically do not receive focus',
      'Interactive progress controls should be focusable with clear indicators'
    ]
  }
};

