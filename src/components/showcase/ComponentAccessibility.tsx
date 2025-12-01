import React from 'react';
import { Card, Badge, DataTable } from '@shohojdhara/atomix';

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
            <h3 className="u-mb-2">Overview</h3>
          <p className="u-m-0 u-mb-2">{accessibility.overview}</p>
            <Badge label={`WCAG ${accessibility.wcagLevel}`} variant="info">WCAG {accessibility.wcagLevel}</Badge>
      </Card>

      {accessibility.keyboardSupport.length > 0 && (
        <Card className="u-mb-6">
            <h3 className="u-mb-2">Keyboard Support</h3>
            <DataTable
              data={accessibility.keyboardSupport}
              bordered
              striped
              dense
              columns={[
                {
                  key: 'key',
                  title: 'Key',
                  render: (_value: unknown, row: { key: string }) => (
                    <kbd className="u-fs-sm u-fw-semibold u-m-0">{row.key ?? '-'}</kbd>
                  ),
                }, {
                  key: 'action',
                  title: 'Action',
                  render: (_value: unknown, row: { action: string }) => (
                    <span>{row.action ?? '-'}</span>
                  ),
                }, {
                  key: 'context',
                  title: 'Context',
                  render: (_value: unknown, row: { context: string }) => (
                    <span>{row.context ?? '-'}</span>
                  ),
                }
              ]}
            />
        </Card>
      )}

      {accessibility.ariaAttributes.length > 0 && (
        <Card className="u-mb-6">
            <h3 className='u-mb-2'>ARIA Attributes</h3>
                <DataTable
              data={accessibility.ariaAttributes}
              bordered
              striped
              dense
              columns={[
                {
                  key: 'attribute',
                  title: 'Attribute',
                    render: (_value: unknown, row: { attribute: string }) => (
                      <code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">{row.attribute}</code>
                    ),
                },
                {
                  key: 'description',
                  title: 'Description',
                  render: (_value: unknown, row: { description: string }) => (
                    <p className="u-m-0 u-mb-2">{row.description ?? '-'}</p>
                  ),
                },
                {
                  key: 'required',
                  title: 'Required',
                  render: (_value: unknown, row: { required: boolean }) => (
                    row.required ? (
                      <Badge label="Required" variant="success" size="sm">Required</Badge>
                    ) : (
                      <Badge label="Optional" variant="secondary" size="sm">Optional</Badge>
                    )
                  ),
                },
                {
                  key: 'defaultValue',
                  title: 'Default Value',
                  render: (_value: unknown, row: { defaultValue: string }) => (
                    row.defaultValue ? (
                      <code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">{row.defaultValue}</code>
                    ) : (
                      <span className="u-text-muted">-</span>
                    )
                  ),
                }
              ]}
            />
        </Card>
      )}

      {accessibility.guidelines.length > 0 && (
        <Card>
            <h3 className="u-mb-0">Guidelines</h3>
            <ul className="u-list-none u-mb-0">
              {accessibility.guidelines.map((guideline, index) => (
                <li key={index} className="u-mb-2 u-d-flex u-align-items-start">
                  <span className="u-mr-2">•</span>
                  <span>{guideline}</span>
                </li>
              ))}
            </ul>
        </Card>
      )}
    </div>
  );
};
