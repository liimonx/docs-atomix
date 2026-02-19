"use client";

import React, { useState, FC } from "react";
import { Card, Button, Tabs, Badge } from "@shohojdhara/atomix";
import { ComponentExample } from "@/types";
import { CodePreview } from "./CodePreview";
import { EnhancedCodeBlock } from "./EnhancedCodeBlock";
import styles from "./ComponentExamples.module.scss";

interface ComponentExamplesProps {
  examples: ComponentExample[];
  onCopy: (code: string, exampleId: string) => void;
  copiedCode: string | null;
}

export const ComponentExamples: FC<ComponentExamplesProps> = ({
  examples,
  onCopy: _onCopy,
  copiedCode: _copiedCode,
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
    return activeTabs[exampleId] ?? 0; // Default to Preview tab (index 0)
  };

  return (
    <div className="component-examples">
      {examples.length > 1 ? (
        <div className="u-my-4">
          <div className="u-flex u-gap-2 u-justify-center">
            {examples.map((example, index) => (
              <Button
                variant={
                  activeExample === index ? "primary" : "outline-primary"
                }
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
            icon: "Eye" as any,
            content: (
              <div className="u-mt-4">
                <div className={`${styles["preview-container"]}`}>
                  {/* Preview Badge */}
                  <div className={styles["preview-badge"]}>
                    <Badge
                      variant="info"
                      size="sm"
                      label="Live Preview"
                      className="u-text-xs"
                    />
                  </div>
                  {example.preview && typeof example.preview !== "boolean" ? (
                    <div className={styles["preview-content"]}>
                      {example.preview as React.ReactNode}
                    </div>
                  ) : (
                    <div className={styles["preview-content"]}>
                      <CodePreview
                        code={example.code}
                        language={example.language}
                      />
                    </div>
                  )}
                </div>
              </div>
            ),
          },
          {
            id: "code",
            label: "Code",
            icon: "Code" as any,
            content: (
              <div className="u-mt-4">
                <EnhancedCodeBlock
                  code={example.code}
                  language={example.language || "tsx"}
                  showLineNumbers={true}
                  title={example.title}
                />
              </div>
            ),
          },
        ];

        return (
          <div
            key={exampleId}
            className={
              examples.length > 1 && activeExample !== index ? "u-none" : ""
            }
          >
            <Card className="u-mb-6" elevation="lg">
              <div className="u-mb-4">
                <div className={styles["example-header"]}>
                  <h3 className="u-text-xl u-font-bold u-mb-0">
                    {example.title}
                  </h3>
                  {example.language && (
                    <Badge
                      variant="secondary"
                      size="sm"
                      label={example.language.toUpperCase()}
                      className="u-text-xs"
                    />
                  )}
                </div>
                {example.description && (
                  <p className="u-text-secondary-emphasis u-mb-0 u-text-sm">
                    {example.description}
                  </p>
                )}
              </div>

              <Tabs
                items={tabs}
                activeIndex={activeTabIndex}
                onTabChange={(tabIndex) => handleTabChange(exampleId, tabIndex)}
                aria-label={`${example.title} example tabs`}
              />
            </Card>
          </div>
        );
      })}
    </div>
  );
};
