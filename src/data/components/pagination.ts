// import { Pagination } from '@shohojdhara/atomix';

export const paginationMetadata = {
  id: 'pagination',
  name: 'Pagination',
  description: 'Navigation controls for paginated content, allowing users to navigate through multiple pages of data. It supports various configurations including sibling page counts, first/last buttons, and different sizes.',
  category: 'Navigation',
  status: 'stable' as const,
  version: '1.0.0',
  importPath: '@shohojdhara/atomix/Pagination',
  dependencies: ['react'],
  tags: ['pagination', 'navigation', 'pages', 'pager', 'controls'],
  relatedComponents: ['Button', 'DataTable', 'List'],
  features: [
    'Intelligent page range calculation',
    'Configurable sibling page count',
    'First/last page buttons',
    'Previous/next page buttons',
    'Multiple sizes (sm, md, lg)',
    'Full accessibility support with ARIA attributes',
    'Keyboard navigation support',
    'Responsive design'
  ],
  props: [
    {
      name: 'currentPage',
      type: 'number',
      description: 'Current active page (1-based) (Required)',
      required: true
    },
    {
      name: 'totalPages',
      type: 'number',
      description: 'Total number of pages (Required)',
      required: true
    },
    {
      name: 'onPageChange',
      type: '(page: number) => void',
      description: 'Callback when page changes (Required)',
      required: true
    },
    {
      name: 'siblingCount',
      type: 'number',
      description: 'Number of page links before/after current page',
      required: false,
      defaultValue: '1'
    },
    {
      name: 'showFirstLastButtons',
      type: 'boolean',
      description: 'Show first/last page buttons',
      required: false,
      defaultValue: 'true'
    },
    {
      name: 'showPrevNextButtons',
      type: 'boolean',
      description: 'Show previous/next page buttons',
      required: false,
      defaultValue: 'true'
    },
    {
      name: 'size',
      type: "'sm' | 'md' | 'lg'",
      description: 'Pagination size variant',
      required: false,
      defaultValue: "'md'"
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
      description: 'Accessible label for navigation',
      required: false,
      defaultValue: "'Pagination'"
    }
  ],
  examples: [
    {
      title: 'Basic Pagination',
      description: 'Simple pagination with default settings',
      code: `import { useState } from 'react';
import { Pagination } from '@shohojdhara/atomix';

function BasicPagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log('Page changed to:', page);
  };

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
    />
  );
}`,
      preview: null
    },
    {
      title: 'Pagination Sizes',
      description: 'Different sizes of pagination components',
      code: `function PaginationSizes() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  return (
    <div className="u-gap-6">
      <div>
        <h4>Small Pagination</h4>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          size="sm"
        />
      </div>

      <div>
        <h4>Medium Pagination (Default)</h4>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          size="md"
        />
      </div>

      <div>
        <h4>Large Pagination</h4>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          size="lg"
        />
      </div>
    </div>
  );
}`,
      preview: null
    },
    {
      title: 'Custom Sibling Count',
      description: 'Pagination with custom number of visible pages',
      code: `function CustomSiblingCount() {
  const [currentPage, setCurrentPage] = useState(5);
  const totalPages = 20;

  return (
    <div className="u-gap-4">
      <div>
        <h4>Sibling Count: 1 (Default)</h4>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          siblingCount={1}
        />
      </div>

      <div>
        <h4>Sibling Count: 2</h4>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          siblingCount={2}
        />
      </div>

      <div>
        <h4>Sibling Count: 3</h4>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          siblingCount={3}
        />
      </div>
    </div>
  );
}`,
      preview: null
    },
    {
      title: 'Without First/Last Buttons',
      description: 'Pagination without first and last page buttons',
      code: `function NoFirstLastButtons() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={setCurrentPage}
      showFirstLastButtons={false}
    />
  );
}`,
      preview: null
    }
  ],
  accessibility: {
    overview: 'The Pagination component follows WCAG 2.1 guidelines with proper ARIA attributes, keyboard navigation, and screen reader support.',
    keyboardSupport: [
      {
        key: 'Arrow Left',
        action: 'Moves to previous page'
      },
      {
        key: 'Arrow Right',
        action: 'Moves to next page'
      },
      {
        key: 'Home',
        action: 'Moves to first page'
      },
      {
        key: 'End',
        action: 'Moves to last page'
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
        action: 'Activates the focused page button'
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
        description: 'Descriptive label for the pagination',
        required: false
      },
      {
        attribute: 'aria-current',
        description: 'Applied to the current page button',
        required: true
      }
    ],
    guidelines: [
      'Provide descriptive aria-label for pagination',
      'Ensure all page buttons are keyboard accessible',
      'Use aria-current to indicate the current page',
      'Provide clear visual indicators for current page',
      'Ensure sufficient color contrast for all states',
      'Announce page changes to screen readers when appropriate'
    ],
    wcagLevel: 'AA' as const,
    screenReaderSupport: true,
    focusManagement: [
      'Page buttons receive focus when tabbed to',
      'Current page is clearly indicated',
      'Focus moves logically through page buttons',
      'Disabled buttons (first/last when already there) do not receive focus'
    ]
  }
};

