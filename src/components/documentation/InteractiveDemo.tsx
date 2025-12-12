import { FC } from "react";
import { useState } from 'react';
import { Button, Tabs, Select, Card } from '@shohojdhara/atomix';
import { EnhancedCodeBlock } from '@/components/showcase/EnhancedCodeBlock';
import type { ComponentDocumentation } from '@/types/index';

interface InteractiveDemoProps {
  component: ComponentDocumentation;
  selectedExample: number;
  onExampleChange: (idx: number) => void;
}

export const InteractiveDemo: FC<InteractiveDemoProps> = ({
  component,
  selectedExample,
  onExampleChange
}) => {
  const [activeTab, setActiveTab] = useState(0);

  const example = component.examples?.[selectedExample];

  if (!example) {
    return (
      <Card className="u-p-6 u-text-center">
        <p className="u-text-secondary-emphasis">No examples available for this component.</p>
      </Card>
    );
  }

  const tabs = [
    {
      id: 'preview',
      label: 'Preview',
      description: 'Live preview of the component',
      content: (
        <div className="u-mt-4">
          <div className="u-p-6 u-bg-secondary u-br-md u-border u-border-subtle">
            {example.preview ? (
              example.preview
            ) : (
              <div className="u-text-center u-p-8">
                <p className="u-text-secondary-emphasis">Preview not available</p>
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
        <div className="u-mt-4">
          <EnhancedCodeBlock
            code={example.code}
            language="tsx"
            showLineNumbers={true}
            title={example.title}
          />
        </div>
      )
    }
  ];

  return (
    <div className="u-mb-6">
      <div className="u-mb-6">
        <h3 className="u-fs-xl u-fw-bold u-mb-2">{example.title}</h3>
        <p className="u-text-secondary-emphasis u-mb-4">{example.description}</p>
        
        {component.examples && component.examples.length > 1 && (
          <div className="u-d-flex u-align-items-center u-gap-3 u-mt-4">
            <label htmlFor="example-select" className="u-fs-sm u-fw-medium">Select example:</label>
            <Select
              id="example-select"
              value={selectedExample.toString()}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onExampleChange(parseInt(e.target.value))}
              options={component.examples.map((ex, index) => ({
                value: index.toString(),
                label: ex.title
              }))}
            />
          </div>
        )}
      </div>

      <Tabs
        items={tabs}
        activeIndex={activeTab}
        onTabChange={setActiveTab}
      />
    </div>
  );
};