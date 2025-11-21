import React from 'react';
import { Card, Badge } from '@shohojdhara/atomix';

interface PropDefinition {
  name: string;
  type: string;
  required: boolean;
  defaultValue?: string;
  description: string;
  examples?: string[];
  deprecated?: boolean;
  since?: string;
}

interface ComponentPropsProps {
  props: PropDefinition[];
}

export const ComponentProps: React.FC<ComponentPropsProps> = ({ props }) => {
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
                <th>Required</th>
                <th>Default</th>
                <th>Description</th>
                <th>Examples</th>
                <th>Deprecated</th>
                <th>Since</th>
              </tr>
            </thead>
            <tbody>
              {props.map((prop, index) => (
                <tr key={index}>
                  <td>
                    <code className="u-text-info">{prop.name}</code>
                  </td>
                  <td>
                    <code>{prop.type}</code>
                  </td>
                  <td>
                    {prop.required ? (
                      <Badge label="Required" variant="success" size="sm">Required</Badge>
                    ) : (
                      <Badge label="Optional" variant="secondary" size="sm">Optional</Badge>
                    )}
                  </td>
                  <td>
                    {prop.defaultValue ? (
                      <code>{prop.defaultValue}</code>
                    ) : (
                      <span className="u-text-muted">-</span>
                    )}
                  </td>
                  <td>{prop.description}</td>
                  <td>
                    {prop.examples && prop.examples.length > 0 ? (
                      <ul className="u-list-unstyled u-mb-0">
                        {prop.examples.map((example, idx) => (
                          <li key={idx}>
                            <code>{example}</code>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <span className="u-text-muted">-</span>
                    )}
                  </td>
                  <td>
                    {prop.deprecated ? (
                      <Badge label="Deprecated" variant="warning" size="sm">Deprecated</Badge>
                    ) : (
                      <span className="u-text-muted">-</span>
                    )}
                  </td>
                  <td>
                    {prop.since ? (
                      <span className="u-text-muted">{prop.since}</span>
                    ) : (
                      <span className="u-text-muted">-</span>
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
