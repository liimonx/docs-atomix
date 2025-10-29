import React, { useState } from 'react';
import { Card, Button, Badge, Icon } from '@shohojdhara/atomix';
import { Copy, Eye, Code as CodeIcon } from 'lucide-react';
import toast from 'react-hot-toast';

interface ComponentExample {
  title: string;
  description: string;
  code: string;
  language: string;
  category: string;
  preview?: React.ReactNode;
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
  const [previewMode, setPreviewMode] = useState<'preview' | 'code'>('preview');

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
                onClick={() => {
                  setActiveExample(index);
                  setPreviewMode('preview'); // Reset to preview mode when changing examples
                }}
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
            <h3 className="u-mb-4">Examples</h3>
            <ul className="u-list-unstyled">
              {examples.map((example, index) => (
                <li key={index} className="u-mb-3">
                  <div className="u-d-flex u-align-items-center u-justify-content-between u-mb-2">
                    <h4 className="u-mb-0">{example.title}</h4>
                    <div className="u-d-flex u-gap-2">
                      <Button variant="outline" size="sm" onClick={() => onCopy(example.code, `example-${index}`)}>
                        <Icon name="Copy" size={16} className="u-mr-2" />
                        {copiedCode === `example-${index}` ? 'Copied!' : 'Copy'}
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => setActiveExample(example)}>
                        <Icon name="Eye" size={16} className="u-mr-2" />
                        Preview
                      </Button>
                    </div>
                  </div>
                  <p className="u-text-muted u-mb-2">{example.description}</p>
                  <pre className="code-block u-mb-0">
                    <code className={`language-${example.language}`}>{example.code}</code>
                  </pre>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      ))}
    </div>
  );
};
