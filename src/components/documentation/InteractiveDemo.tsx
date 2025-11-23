import React, { useState } from 'react';
import { Button, Tabs } from '@shohojdhara/atomix';
import type { ComponentDocumentation } from '@/types/index';

interface InteractiveDemoProps {
  component: ComponentDocumentation;
  selectedExample: number;
  onExampleChange: (index: number) => void;
}

export const InteractiveDemo: React.FC<InteractiveDemoProps> = ({
  component,
  selectedExample,
  onExampleChange
}) => {
  const [activeTab, setActiveTab] = useState(0);

  const example = component.examples?.[selectedExample];

  if (!example) {
    return (
      <div className="interactive-demo empty">
        <p>No examples available for this component.</p>
      </div>
    );
  }

  const tabs = [
    {
      id: 'preview',
      label: 'Preview',
      description: 'Live preview of the component',
      content: (
        <div className="tab-content preview-content">
          <div className="preview-container">
            {example.preview ? (
              example.preview
            ) : (
              <div className="preview-placeholder">
                <p>Preview not available</p>
              </div>
            )}
          </div>
        </div>
      )
    },
    {
      id: 'code',
      label: 'Code',
      description: 'Source code for this example',
      content: (
        <div className="tab-content code-content">
          <pre className="code-block">
            <code>{example.code}</code>
          </pre>
          <div className="code-actions">
            <Button
              variant="outline-primary"
              size="sm"
              onClick={() => navigator.clipboard.writeText(example.code)}
            >
              Copy to Clipboard
            </Button>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="interactive-demo">
      <div className="demo-header">
        <h3>{example.title}</h3>
        <p>{example.description}</p>
        
        {component.examples && component.examples.length > 1 && (
          <div className="example-selector">
            <label htmlFor="example-select">Select example:</label>
            <select 
              id="example-select"
              value={selectedExample}
              onChange={(e) => onExampleChange(parseInt(e.target.value))}
            >
              {component.examples.map((ex, index) => (
                <option key={ex.id} value={index}>
                  {ex.title}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      <Tabs
        items={tabs}
        activeIndex={activeTab}
        onTabChange={setActiveTab}
        className="demo-tabs"
      />
    </div>
  );
};