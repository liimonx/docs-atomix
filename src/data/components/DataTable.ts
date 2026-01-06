export const dataTableMetadata = {
  id: 'data-table',
  name: 'DataTable',
  description: 'An advanced table component with sorting, filtering, pagination, and selection capabilities. Perfect for displaying structured data in a user-friendly format.',
  category: 'Data Display',
  status: 'stable' as const,
  version: '1.0.0',
  importPath: '@shohojdhara/atomix/DataTable',
  dependencies: ['react'],
  tags: ['table', 'data', 'sorting', 'filtering', 'pagination', 'grid'],
  relatedComponents: ['Pagination', 'Input', 'Button', 'Select'],
  features: [
    'Column sorting (ascending/descending)',
    'Row selection (single and multiple)',
    'Pagination support',
    'Filtering capabilities',
    'Customizable columns',
    'Responsive design',
    'Loading states',
    'Empty state handling',
    'Full keyboard navigation',
    'Accessibility support'
  ],
  props: [
    {
      name: 'data',
      type: 'Array<Record<string, any>>',
      description: 'Table data array',
      required: true
    },
    {
      name: 'columns',
      type: 'DataTableColumn[]',
      description: 'Column definitions',
      required: true
    },
    {
      name: 'sortable',
      type: 'boolean',
      description: 'Whether columns are sortable',
      required: false,
      defaultValue: 'true'
    },
    {
      name: 'selectable',
      type: 'boolean',
      description: 'Whether rows are selectable',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'pagination',
      type: 'boolean',
      description: 'Whether to show pagination',
      required: false,
      defaultValue: 'false'
    },
    {
      name: 'pageSize',
      type: 'number',
      description: 'Number of rows per page',
      required: false,
      defaultValue: '10'
    },
    {
      name: 'onRowSelect',
      type: '(selectedRows: any[]) => void',
      description: 'Callback when rows are selected',
      required: false
    },
    {
      name: 'onSort',
      type: '(column: string, direction: "asc" | "desc") => void',
      description: 'Callback when column is sorted',
      required: false
    },
    {
      name: 'loading',
      type: 'boolean',
      description: 'Loading state',
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
      title: 'Basic DataTable',
      description: 'Simple table with data and columns',
      code: `import { DataTable } from '@shohojdhara/atomix';

function BasicDataTable() {
  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  ];

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role' },
  ];

  return <DataTable data={data} columns={columns} />;
}`,
      preview: true
    },
    {
      title: 'Sortable DataTable',
      description: 'Table with sortable columns',
      code: `function SortableDataTable() {
  const columns = [
    { key: 'name', label: 'Name', sortable: true },
    { key: 'email', label: 'Email', sortable: true },
    { key: 'role', label: 'Role', sortable: false },
  ];

  return (
    <DataTable
      data={data}
      columns={columns}
      sortable
      onSort={(column, direction) => {
        console.log(\`Sorting by \${column} in \${direction} order\`);
      }}
    />
  );
}`,
      preview: true
    },
    {
      title: 'DataTable with Pagination',
      description: 'Table with pagination controls',
      code: `function DataTableWithPagination() {
  return (
    <DataTable
      data={largeDataSet}
      columns={columns}
      pagination
      pageSize={10}
    />
  );
}`,
      preview: true
    },
    {
      title: 'Selectable DataTable',
      description: 'Table with row selection',
      code: `function SelectableDataTable() {
  const [selectedRows, setSelectedRows] = useState([]);

  return (
    <DataTable
      data={data}
      columns={columns}
      selectable
      onRowSelect={setSelectedRows}
    />
  );
}`,
      preview: true
    }
  ],
  accessibility: {
    overview: 'The DataTable component follows WCAG 2.1 guidelines with full keyboard navigation, ARIA attributes, and screen reader support.',
    keyboardSupport: [
      {
        key: 'Tab',
        action: 'Moves focus between interactive elements'
      },
      {
        key: 'Arrow Keys',
        action: 'Navigate between cells'
      },
      {
        key: 'Enter',
        action: 'Sort column or select row'
      },
      {
        key: 'Space',
        action: 'Select row or toggle sort'
      }
    ],
    ariaAttributes: [
      {
        attribute: 'role="table"',
        description: 'Applied to the table element',
        required: true
      },
      {
        attribute: 'aria-label',
        description: 'Descriptive label for the table',
        required: false
      },
      {
        attribute: 'aria-sort',
        description: 'Indicates sort direction on sortable columns',
        required: false
      },
      {
        attribute: 'aria-selected',
        description: 'Indicates selected rows',
        required: false
      }
    ],
    guidelines: [
      'Provide clear column headers',
      'Use descriptive table labels',
      'Ensure keyboard navigation works correctly',
      'Provide alternative text for icons',
      'Test with screen readers',
      'Ensure sufficient color contrast'
    ],
    wcagLevel: 'AA' as const,
    screenReaderSupport: true,
    focusManagement: [
      'Table receives focus when tabbed to',
      'Column headers are focusable and sortable',
      'Rows are focusable when selectable',
      'Focus moves logically through table cells',
      'Sort state is announced to screen readers'
    ]
  }
};

