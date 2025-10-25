import React, { useState } from 'react';
import { Card, Button } from '@shohojdhara/atomix';
import { Copy } from 'lucide-react';
import toast from 'react-hot-toast';

interface ComponentExample {
  title: string;
  description: string;
  code: string;
  language: string;
  category: string;
}

interface ComponentExamplesProps {
  examples: ComponentExample[];
  onCopy: (code: string, id: string) => void;
  copiedCode: string | null;
}

export const ComponentExamples: React.FC<ComponentExamplesProps> = ({ 
  examples, 
  onCopy,
  copiedCode
}) => {
  const [activeExample, setActiveExample] = useState(0);

  if (!examples || examples.length === 0) {
    return (
      <Card>
        <div className="card-body">
          <p className="u-text-muted u-mb-0">No examples available for this component.</p>
        </div>
      </Card>
    );
  }

  return (
    <div className="component-examples">
      {examples.length > 1 ? (
        <div className="u-mb-4">
          <div className="tabs">
            {examples.map((example, index) => (
              <button
                key={index}
                className={`tab ${activeExample === index ? 'active' : ''}`}
                onClick={() => setActiveExample(index)}
              >
                {example.title}
              </button>
            ))}
          </div>
        </div>
      ) : null}

      {examples.map((example, index) => (
        <div 
          key={index} 
          className={examples.length > 1 && activeExample !== index ? 'u-d-none' : ''}
        >
          <Card className="u-mb-6">
            <div className="card-header u-d-flex u-align-items-center u-justify-content-between">
              <h3 className="u-mb-0">{example.title}</h3>
              <Button
                variant="outline"
                size="sm"
                onClick={() => onCopy(example.code, `example-${index}`)}
              >
                <Copy size={16} className="u-mr-2" />
                {copiedCode === `example-${index}` ? 'Copied!' : 'Copy'}
              </Button>
            </div>
            <div className="card-body">
              {example.description && (
                <p className="u-mb-4">{example.description}</p>
              )}
              
              <div className="u-mb-4">
                <pre className="code-block u-mb-0">
                  <code className={`language-${example.language}`}>
                    {example.code}
                  </code>
                </pre>
              </div>
              
              <div className="example-preview u-p-4 u-bg-light u-rounded">
                <div className="u-text-center u-text-muted">
                  Example preview would be rendered here
                </div>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};