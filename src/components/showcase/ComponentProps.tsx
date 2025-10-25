import React from 'react';
import { Card, Badge } from '@shohojdhara/atomix';

interface PropDefinition {
  name: string;
  type: string;
  required: boolean;
  defaultValue?: string;
  description: string;
}

interface ComponentPropsProps {
  props: PropDefinition[];
}

export const ComponentProps: React.FC<ComponentPropsProps> = ({ props }) => {
  if (!props || props.length === 0) {
    return (
      <Card>
        <div className="card-body">
          <p className="u-text-muted u-mb-0">No props defined for this component.</p>
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <div className="card-header">
        <h3 className="u-mb-0">Props</h3>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Description</th>
                <th>Default</th>
                <th>Required</th>
              </tr>
            </thead>
            <tbody>
              {props.map((prop, index) => (
                <tr key={index}>
                  <td>
                    <code>{prop.name}</code>
                  </td>
                  <td>
                    <code className="u-text-info">{prop.type}</code>
                  </td>
                  <td>{prop.description}</td>
                  <td>
                    {prop.defaultValue ? (
                      <code>{prop.defaultValue}</code>
                    ) : (
                      <span className="u-text-muted">-</span>
                    )}
                  </td>
                  <td>
                    {prop.required ? (
                      <Badge variant="error" size="sm">Required</Badge>
                    ) : (
                      <span className="u-text-muted">Optional</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  );
};