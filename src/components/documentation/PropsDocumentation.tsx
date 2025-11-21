import React, { useState } from 'react';
import { DataTable, Badge, Icon } from '@shohojdhara/atomix';
import type { ComponentDocumentation } from '@/types/index';

interface PropsDocumentationProps {
  component: ComponentDocumentation;
}

export const PropsDocumentation: React.FC<PropsDocumentationProps> = ({
  component
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (!component.props || component.props.length === 0) {
    return (
      <div className="props-documentation empty">
        <p>No props documentation available for this component.</p>
      </div>
    );
  }

  // Filter props based on search term
  const filteredProps = component.props.filter(prop =>
    prop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prop.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prop.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Define table columns
  const columns = [
    {
      key: 'name',
      title: 'Name',
      header: 'Name',
      accessor: 'name',
      render: (prop: any) => (
        <div className="prop-name">
          <code>{prop.name}</code>
          {prop.required && (
            <Badge variant="error" label="Required" className="required-badge">
              Required
            </Badge>
          )}
          {prop.deprecated && (
            <Badge variant="warning" label="Deprecated" className="deprecated-badge">
              Deprecated
            </Badge>
          )}
        </div>
      )
    },
    {
      key: 'type',
      title: 'Type',
      header: 'Type',
      accessor: 'type',
      render: (prop: any) => <code className="prop-type">{prop.type}</code>
    },
    {
      key: 'defaultValue',
      title: 'Default',
      header: 'Default',
      accessor: 'defaultValue',
      render: (prop: any) => (
        prop.defaultValue ? <code>{prop.defaultValue}</code> : <span className="no-default">-</span>
      )
    },
    {
      key: 'description',
      title: 'Description',
      header: 'Description',
      accessor: 'description',
      render: (prop: any) => (
        <div className="prop-description">
          <p>{prop.description}</p>
          {prop.deprecated && prop.deprecationMessage && (
            <div className="deprecation-message">
              <Icon name="Warning" size="sm" />
              <span>{prop.deprecationMessage}</span>
            </div>
          )}
        </div>
      )
    }
  ];

  return (
    <div className="props-documentation">
      <div className="props-header">
        <h2>{component.name} Props</h2>
        <div className="props-controls">
          <input
            type="text"
            placeholder="Search props..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="props-search"
          />
        </div>
      </div>

      <div className="props-table-container">
        <DataTable
          data={filteredProps}
          columns={columns}
        />
      </div>

      {/* Methods and Events sections can be added when the component interface supports them */}
    </div>
  );
};