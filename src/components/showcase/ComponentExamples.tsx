import React, { useState } from "react";
import { Card, Button, Icon, Tabs } from "@shohojdhara/atomix";
import { ComponentExample } from "@/types";
import { CodePreview } from "./CodePreview";

interface ComponentExamplesProps {
  examples: ComponentExample[];
  onCopy: (code: string, exampleId: string) => void;
  copiedCode: string | null;
}

export const ComponentExamples: React.FC<ComponentExamplesProps> = ({
  examples,
  onCopy,
  copiedCode,
}) => {
  const [activeExample, setActiveExample] = useState(0);
  // Track active tab index for each example (0 = Preview, 1 = Code)
  const [activeTabs, setActiveTabs] = useState<Record<string, number>>({});

  if (!examples || examples.length === 0) {
    return (
      <Card>
        <div className="card-body">
          <p className="u-text-muted u-mb-0">
            No examples available for this component.
          </p>
        </div>
      </Card>
    );
  }

  const handleTabChange = (exampleId: string, tabIndex: number) => {
    setActiveTabs((prev) => ({
      ...prev,
      [exampleId]: tabIndex,
    }));
  };

  const getActiveTab = (exampleId: string): number => {
    return activeTabs[exampleId] ?? 1; // Default to Code tab (index 1)
  };

  return (
    <div className="component-examples">
      {examples.length > 1 ? (
        <div className="u-my-4">
          <div className="u-d-flex u-gap-2 u-justify-content-center">
            {examples.map((example, index) => (
              <Button
                variant={activeExample === index ? "primary" : "outline-primary"}
                size="sm"
                key={example.id || `example-${index}`}
                onClick={() => {
                  setActiveExample(index);
                }}
                aria-label={`Select example ${example.title}`}
              >
                {example.title}
              </Button>
            ))}
          </div>
        </div>
      ) : null}

      {examples.map((example, index) => {
        const exampleId = example.id || `example-${index}`;
        const activeTabIndex = getActiveTab(exampleId);

        const tabs = [
          {
            id: "preview",
            label: "Preview",
            content: (
              <div className="u-mt-4">
                <div className="u-p-6 u-bg-secondary u-br-md u-border u-border-subtle u-rounded-md">
                  {example.preview && typeof example.preview !== "boolean" ? (
                    <div>{example.preview as React.ReactNode}</div>
                  ) : (
                    <CodePreview
                      code={example.code}
                      language={example.language}
                    />
                  )}
                </div>
              </div>
            ),
          },
          {
            id: "code",
            label: "Code",
            content: (
              <div className="u-mt-4">
                <Card className="u-p-0 u-overflow-hidden">
                  <div className="u-p-4 u-bg-tertiary u-border-b u-border-subtle">
                    <pre className="u-m-0 u-overflow-x-auto">
                      <code className={`language-${example.language} u-fs-sm`}>
                        {example.code}
                      </code>
                    </pre>
                  </div>
                  <div className="u-p-4 u-d-flex u-justify-content-end">
                    <Button
                      icon={<Icon name="Copy" size="sm" />}
                      variant="outline-primary"
                      size="sm"
                      onClick={() => onCopy(example.code, exampleId)}
                    >
                      {copiedCode === exampleId ? "Copied!" : "Copy Code"}
                    </Button>
                  </div>
                </Card>
              </div>
            ),
          },
        ];

        return (
          <div
            key={exampleId}
            className={
              examples.length > 1 && activeExample !== index ? "u-d-none" : ""
            }
          >
            <Card className="u-mb-6" elevation="lg">
              <div className="u-mb-4">
                <h3 className="u-fs-xl u-fw-bold u-mb-2">{example.title}</h3>
                {example.description && (
                  <p className="u-text-secondary-emphasis u-mb-0">
                    {example.description}
                  </p>
                )}
              </div>

              <Tabs
                items={tabs}
                activeIndex={activeTabIndex}
                onTabChange={(tabIndex) => handleTabChange(exampleId, tabIndex)}
              />
            </Card>
          </div>
        );
      })}
    </div>
  );
};