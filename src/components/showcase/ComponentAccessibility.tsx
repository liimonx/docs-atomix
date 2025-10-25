import React from 'react';
import { Card, Badge } from '@shohojdhara/atomix';

interface AccessibilityInfo {
  overview: string;
  keyboardSupport: Array<{
    key: string;
    action: string;
    context?: string;
  }>;
  ariaAttributes: Array<{
    attribute: string;
    description: string;
    required: boolean;
    defaultValue?: string;
  }>;
  guidelines: string[];
  wcagLevel: 'A' | 'AA' | 'AAA';
}

interface ComponentAccessibilityProps {
  accessibility: AccessibilityInfo;
}

export const ComponentAccessibility: React.FC<ComponentAccessibilityProps> = ({ accessibility }) => {
  return (
    <div className="component-accessibility">
      <Card className="u-mb-6">
        <div className="card-header">
          <h3 className="u-mb-0">Overview</h3>
        </div>
        <div className="card-body">
          <p>{accessibility.overview}</p>
          <div className="u-mt-3">
            <Badge variant="info">WCAG {accessibility.wcagLevel}</Badge>
          </div>
        </div>
      </Card>

      {accessibility.keyboardSupport.length > 0 && (
        <Card className="u-mb-6">
          <div className="card-header">
            <h3 className="u-mb-0">Keyboard Support</h3>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Key</th>
                    <th>Action</th>
                    {accessibility.keyboardSupport.some(k => k.context) && <th>Context</th>}
                  </tr>
                </thead>
                <tbody>
                  {accessibility.keyboardSupport.map((kb, index) => (
                    <tr key={index}>
                      <td>
                        <code className="u-bg-light u-px-2 u-py-1 u-rounded">
                          {kb.key}
                        </code>
                      </td>
                      <td>{kb.action}</td>
                      {accessibility.keyboardSupport.some(k => k.context) && (
                        <td>{kb.context || '-'}</td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Card>
      )}

      {accessibility.ariaAttributes.length > 0 && (
        <Card className="u-mb-6">
          <div className="card-header">
            <h3 className="u-mb-0">ARIA Attributes</h3>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Attribute</th>
                    <th>Description</th>
                    <th>Required</th>
                    <th>Default Value</th>
                  </tr>
                </thead>
                <tbody>
                  {accessibility.ariaAttributes.map((aria, index) => (
                    <tr key={index}>
                      <td>
                        <code className="u-text-info">{
                          aria.attribute
                        }</code>
                      </td>
                      <td>{aria.description}</td>
                      <td>
                        {aria.required ? (
                          <Badge variant="success" size="sm">Required</Badge>
                        ) : (
                          <Badge variant="secondary" size="sm">Optional</Badge>
                        )}
                      </td>
                      <td>
                        {aria.defaultValue ? (
                          <code>{aria.defaultValue}</code>
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
      )}

      {accessibility.guidelines.length > 0 && (
        <Card>
          <div className="card-header">
            <h3 className="u-mb-0">Guidelines</h3>
          </div>
          <div className="card-body">
            <ul className="u-list-unstyled u-mb-0">
              {accessibility.guidelines.map((guideline, index) => (
                <li key={index} className="u-mb-2 u-d-flex u-align-items-start">
                  <span className="u-mr-2">•</span>
                  <span>{guideline}</span>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      )}
    </div>
  );
};