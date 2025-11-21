import React, { useState } from 'react';
import { Card, Button } from '@shohojdhara/atomix';

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
  // const [previewMode, setPreviewMode] = useState<'preview' | 'code'>('preview');

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
            {examples.map((_, index) => (
              <button
                key={index}
                className={`tab ${activeExample === index ? 'active' : ''}`}
                onClick={() => {
                  setActiveExample(index);
                  // setPreviewMode('preview'); // Reset to preview mode when changing examples
                }}
              >
                {examples[index].title}
              </button>
            ))}
          </div>
        </div>
      ) : null}

      {examples.map((_, index) => (
        <div
          key={index}
          className={examples.length > 1 && activeExample !== index ? 'u-d-none' : ''}
        >
          <Card className="u-mb-6">
            <h3 className="u-mb-4">Examples</h3>
            <ul className="u-list-unstyled">
              {examples.map((_, nestedIndex) => (
                <li key={index} className="u-mb-3">
                  <div className="u-d-flex u-align-items-center u-justify-content-between u-mb-2">
                    <h4 className="u-mb-0">{examples[nestedIndex].title}</h4>
                    <div className="u-d-flex u-gap-2">
                      <Button variant="outline" size="sm" onClick={() => onCopy(examples[nestedIndex].code, `example-${nestedIndex}`)}>
                        {/* <Icon name="Copy" size={16} className="u-mr-2" /> */}
                        {copiedCode === `example-${nestedIndex}` ? 'Copied!' : 'Copy'}
                      </Button>
                      {/* <Button variant="outline" size="sm" onClick={() => setActiveExample(example)}>
                        <Icon name="Eye" size={16} className="u-mr-2" />
                        Preview
                      </Button> */}
                    </div>
                  </div>
                  <p className="u-text-muted u-mb-2">{examples[nestedIndex].description}</p>
                  <pre className="code-block u-mb-0">
                    <code className={`language-${examples[nestedIndex].language}`}>{examples[nestedIndex].code}</code>
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
