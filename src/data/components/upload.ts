// import { Upload } from '@shohojdhara/atomix';

export const uploadMetadata = {
  id: 'upload',
  name: 'Upload',
  description: 'A drag-and-drop file upload interface with progress tracking, file validation, and support for multiple file types. It offers both interactive drag-and-drop functionality and traditional file selection via button click.',
  category: 'Forms',
  status: 'stable' as const,
  version: '1.0.0',
  importPath: '@shohojdhara/atomix/Upload',
  dependencies: ['react'],
  tags: ['upload', 'file', 'drag-drop', 'form', 'input', 'file-upload'],
  relatedComponents: ['Input', 'Form', 'Button', 'Progress'],
  features: [
    'Drag-and-drop file upload',
    'Traditional file selection via button',
    'Multiple file upload support',
    'File type validation',
    'File size validation',
    'Upload progress tracking',
    'Error handling and validation messages',
    'Customizable accepted file types',
    'Full accessibility support with ARIA attributes',
    'Keyboard navigation support'
  ],
  props: [
    {
      name: 'disabled',
      type: 'boolean',
      description: 'Whether the upload component is disabled',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'maxSizeInMB',
      type: 'number',
      description: 'Maximum file size in megabytes',
      required: false,
      defaultValue: '5'
    },
    {
      name: 'acceptedFileTypes',
      type: 'string[]',
      description: 'Accepted MIME types',
      required: false,
      defaultValue: "['application/pdf', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'image/jpeg', 'image/png']"
    },
    {
      name: 'multiple',
      type: 'boolean',
      description: 'Whether multiple files can be selected',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'title',
      type: 'string',
      description: 'Main title text',
      required: false,
      defaultValue: "'Drag and Drop files here'"
    },
    {
      name: 'supportedFilesText',
      type: 'string',
      description: 'Description of supported file types',
      required: false,
      defaultValue: "'Files supported: PDF, XSLS, JPEG, PNG, Scanner'"
    },
    {
      name: 'buttonText',
      type: 'string',
      description: 'Text for the upload button',
      required: false,
      defaultValue: "'Choose File'"
    },
    {
      name: 'helperText',
      type: 'string',
      description: 'Helper text displayed below button',
      required: false,
      defaultValue: "'Maximum size: {maxSizeInMB}MB'"
    },
    {
      name: 'icon',
      type: 'ReactNode',
      description: 'Icon component for the upload area',
      required: false
    },
    {
      name: 'onFileSelect',
      type: '(files: File[]) => void',
      description: 'Called when files are selected',
      required: false
    },
    {
      name: 'onFileUpload',
      type: '(file: File, progress: number) => void',
      description: 'Called during upload with progress',
      required: false
    },
    {
      name: 'onFileUploadComplete',
      type: '(file: File) => void',
      description: 'Called when upload completes successfully',
      required: false
    },
    {
      name: 'onFileUploadError',
      type: '(file: File, error: string) => void',
      description: 'Called when upload encounters an error',
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
      title: 'Basic File Upload',
      description: 'Simple file upload with drag-and-drop',
      code: `import { useState } from 'react';
import { Upload } from '@shohojdhara/atomix';

function FileUploadForm() {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileSelect = (files) => {
    console.log('Files selected:', files);
  };

  const handleFileUpload = (file, progress) => {
    console.log(\`Uploading \${file.name}: \${progress}%\`);
  };

  const handleUploadComplete = (file) => {
    console.log('Upload complete:', file.name);
    setUploadedFiles(prev => [...prev, file]);
  };

  const handleUploadError = (file, error) => {
    console.error('Upload failed:', file.name, error);
  };

  return (
    <div>
      <h3>Upload Documents</h3>
      <Upload
        maxSizeInMB={10}
        acceptedFileTypes={['application/pdf', 'image/jpeg', 'image/png']}
        onFileSelect={handleFileSelect}
        onFileUpload={handleFileUpload}
        onFileUploadComplete={handleUploadComplete}
        onFileUploadError={handleUploadError}
      />
    </div>
  );
}`,
      preview: null
    },
    {
      title: 'Multiple File Upload',
      description: 'Upload component with multiple file support',
      code: `function MultipleFileUpload() {
  const [files, setFiles] = useState([]);

  const handleFileSelect = (selectedFiles) => {
    setFiles(prev => [...prev, ...selectedFiles]);
  };

  return (
    <Upload
      multiple
      maxSizeInMB={5}
      acceptedFileTypes={['image/*']}
      title="Upload Multiple Images"
      onFileSelect={handleFileSelect}
    />
  );
}`,
      preview: null
    },
    {
      title: 'Custom File Types',
      description: 'Upload with custom accepted file types',
      code: `function CustomFileTypes() {
  return (
    <Upload
      maxSizeInMB={20}
      acceptedFileTypes={[
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'text/plain'
      ]}
      title="Upload Documents"
      supportedFilesText="Files supported: PDF, DOC, DOCX, TXT"
      buttonText="Select Documents"
    />
  );
}`,
      preview: null
    },
    {
      title: 'Image Upload Only',
      description: 'Upload component restricted to images',
      code: `function ImageUploadOnly() {
  return (
    <Upload
      maxSizeInMB={2}
      acceptedFileTypes={['image/jpeg', 'image/png', 'image/gif', 'image/webp']}
      title="Upload Images"
      supportedFilesText="Images only: JPEG, PNG, GIF, WebP"
      multiple
    />
  );
}`,
      preview: null
    }
  ],
  accessibility: {
    overview: 'The Upload component follows WCAG 2.1 guidelines with proper ARIA attributes, keyboard navigation, and screen reader support.',
    keyboardSupport: [
      {
        key: 'Tab',
        action: 'Moves focus to the upload area or button'
      },
      {
        key: 'Shift + Tab',
        action: 'Moves focus to the previous focusable element'
      },
      {
        key: 'Enter',
        action: 'Activates the file selection dialog'
      },
      {
        key: 'Space',
        action: 'Activates the file selection dialog'
      }
    ],
    ariaAttributes: [
      {
        attribute: 'role="button"',
        description: 'Applied to the upload trigger area',
        required: true
      },
      {
        attribute: 'aria-label',
        description: 'Descriptive label for the upload area',
        required: false
      },
      {
        attribute: 'aria-describedby',
        description: 'References helper text or instructions',
        required: false
      },
      {
        attribute: 'aria-disabled',
        description: 'Set to true when the upload is disabled',
        required: false
      }
    ],
    guidelines: [
      'Provide clear labels and instructions',
      'Ensure file type restrictions are communicated',
      'Provide error messages for invalid files',
      'Ensure drag-and-drop area is keyboard accessible',
      'Use appropriate ARIA labels for screen readers',
      'Provide visual feedback for drag-over states'
    ],
    wcagLevel: 'AA' as const,
    screenReaderSupport: true,
    focusManagement: [
      'Upload area receives focus when tabbed to',
      'File input is accessible to screen readers',
      'Error messages are announced to screen readers',
      'Progress updates are communicated when available'
    ]
  }
};

