"use client";

import React, { useState, FC } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  Button,
  Card,
  Badge,
  GridCol,
  Tabs,
  Block,
  Icon,
  Grid,
} from "@shohojdhara/atomix";
import toast from "react-hot-toast";

import { componentMetadata } from "@/data/components";
import { ComponentProps } from "@/components/showcase/ComponentProps";
import { ComponentExamples } from "@/components/showcase/ComponentExamples";
import { ComponentAccessibility } from "@/components/showcase/ComponentAccessibility";
import { ComponentRelated } from "@/components/showcase/ComponentRelated";
import { BreadcrumbNavigation } from "@/components/navigation/BreadcrumbNavigation";
import { EnhancedCodeBlock } from "@/components/showcase/EnhancedCodeBlock";

const ComponentDetailPage: FC<{ componentId?: string }> = ({
  componentId: componentIdProp,
}) => {
  const params = useParams();
  const componentId = componentIdProp || (params?.componentId as string) || "";
  const [activeTab, setActiveTab] = useState<
    "overview" | "examples" | "props" | "accessibility"
  >("overview");
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const componentDoc = componentId
    ? componentMetadata.find((c) => c.id === componentId)
    : null;

  const copyToClipboard = React.useCallback(
    async (code: string, id: string) => {
      try {
        await navigator.clipboard.writeText(code);
        setCopiedCode(id);
        toast.success("Code copied to clipboard!");
        setTimeout(() => setCopiedCode(null), 2000);
      } catch (err) {
        toast.error("Failed to copy code");
      }
    },
    []
  );

  // Prepare tab items for Atomix Tabs component
  // Must be called before early return to follow Rules of Hooks
  const tabItems = React.useMemo(() => {
    if (!componentDoc) {
      return [];
    }

    return [
      {
        id: "overview",
        label: "Overview",
        content: (
          <div className="u-mt-4">
            <Grid>
              <GridCol md={8} className="u-mb-6">
                <Card>
                  <h3 className="u-fs-xl u-fw-bold u-mb-4">Features</h3>
                  <ul className="u-list-none u-p-0 u-m-0 u-d-flex u-flex-column u-gap-2">
                    {componentDoc.features.map((feature, index) => (
                      <li
                        key={index}
                        className="u-d-flex u-align-items-start u-gap-2"
                      >
                        <Icon
                          name="CheckCircle"
                          size={16}
                          className="u-text-success u-flex-shrink-0"
                          style={{ marginTop: "2px" }}
                        />
                        <span className="u-text-secondary-emphasis">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </GridCol>
              <GridCol md={4}>
                <Card>
                  <h3 className="u-fs-xl u-fw-bold u-mb-4">Dependencies</h3>
                  {componentDoc.dependencies.length > 0 ? (
                    <ul className="u-list-none u-p-0 u-m-0 u-d-flex u-flex-column u-gap-2">
                      {componentDoc.dependencies.map((dep, index) => (
                        <li key={index}>
                          <Badge variant="warning" label={dep} />
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="u-text-secondary-emphasis u-m-0">
                      No external dependencies
                    </p>
                  )}
                </Card>
              </GridCol>
            </Grid>

            <Card>
              <h3 className="u-fs-xl u-fw-bold u-mb-4">Installation</h3>
              <EnhancedCodeBlock
                code="npm install @shohojdhara/atomix"
                language="bash"
                showLineNumbers={false}
              />
            </Card>

            <Card>
              <h3 className="u-fs-xl u-fw-bold u-mb-4">Basic Usage</h3>
              <EnhancedCodeBlock
                code={`import { ${componentDoc.name} } from '${componentDoc.importPath}';`}
                language="typescript"
                showLineNumbers={false}
              />
            </Card>
          </div>
        ),
      },
      {
        id: "examples",
        label: "Examples",
        content: (() => {
          const examples = componentDoc.examples.map((example, index) => ({
            id: `example-${index}`,
            title: example.title,
            description: example.description,
            code: example.code,
            language: "jsx",
            category: "basic" as const,
            preview: example.preview === null ? undefined : example.preview,
          }));

          // Create a wrapper function that matches the expected signature
          const handleCopy = (code: string) => {
            const example = examples.find((ex) => ex.code === code);
            const exampleId = example?.id || examples[0]?.id || "";
            copyToClipboard(code, exampleId);
          };

          return (
            <ComponentExamples
              examples={examples}
              onCopy={handleCopy}
              copiedCode={copiedCode}
            />
          );
        })(),
      },
      {
        id: "props",
        label: "Props",
        content: <ComponentProps props={componentDoc.props} />,
      },
      {
        id: "accessibility",
        label: "Accessibility",
        content: (() => {
          // Transform accessibility data to match expected format
          const transformAccessibility = (acc: any) => {
            if (!acc) {
              return {
                overview: "Accessibility information not available",
                guidelines: [],
                wcagLevel: "AA" as const,
                keyboardSupport: [],
                ariaAttributes: [],
              };
            }

            // Transform keyboardSupport from string array to object array
            const keyboardSupport = Array.isArray(acc.keyboardSupport)
              ? acc.keyboardSupport.map(
                  (
                    item:
                      | string
                      | { key: string; action: string; context?: string }
                  ) => {
                    if (typeof item === "string") {
                      const [key, ...actionParts] = item.split(" - ");
                      return {
                        key: key.trim(),
                        action: actionParts.join(" - ").trim() || key.trim(),
                      };
                    }
                    return item;
                  }
                )
              : [];

            // Transform ariaAttributes from string array to object array
            const ariaAttributes = Array.isArray(acc.ariaAttributes)
              ? acc.ariaAttributes.map(
                  (
                    item:
                      | string
                      | {
                          attribute: string;
                          description: string;
                          required: boolean;
                          defaultValue?: string;
                        }
                  ) => {
                    if (typeof item === "string") {
                      const [attribute, ...descParts] = item.split(" - ");
                      return {
                        attribute: attribute.trim(),
                        description:
                          descParts.join(" - ").trim() || attribute.trim(),
                        required: false,
                      };
                    }
                    return item;
                  }
                )
              : [];

            return {
              overview:
                acc.overview || "Accessibility information not available",
              guidelines: acc.guidelines || [],
              wcagLevel: acc.wcagLevel || ("AA" as const),
              keyboardSupport,
              ariaAttributes,
            };
          };

          return (
            <ComponentAccessibility
              accessibility={transformAccessibility(componentDoc.accessibility)}
            />
          );
        })(),
      },
    ];
  }, [componentDoc, copiedCode, copyToClipboard]);

  const getStatusColor = (
    status: string
  ): "success" | "warning" | "info" | "error" => {
    switch (status) {
      case "stable":
        return "success";
      case "beta":
        return "warning";
      case "alpha":
        return "info";
      case "deprecated":
        return "error";
      default:
        return "info";
    }
  };

  const getActiveTabIndex = () => {
    const index = tabItems.findIndex((tab) => tab.id === activeTab);
    return index >= 0 ? index : 0;
  };

  if (!componentDoc) {
    return (
      <Block>
        <div className="u-text-center u-py-8">
          <h1 className="u-fs-3xl u-fw-bold u-mb-4">Component Not Found</h1>
          <p className="u-text-secondary-emphasis u-mb-6">
            The requested component could not be found.
          </p>
          <Link href="/docs/components/overview">
            <Button>Back to Components</Button>
          </Link>
        </div>
      </Block>
    );
  }

  return (
    <div className="u-min-h-screen u-pb-xl">
      <BreadcrumbNavigation />

      <Block>
        <div className="u-mb-8">
          <Link
            href="/docs/components"
            className="u-d-inline-flex u-align-items-center u-gap-2 u-text-secondary-emphasis u-text-decoration-none u-fs-sm u-mb-4 u-transition-fast u-focus-visible-ring"
          >
            <span>← Back to Components</span>
          </Link>

          <div className="u-d-flex u-flex-wrap u-align-items-center u-justify-content-between u-gap-4">
            <div>
              <h1 className="u-fs-4xl u-fw-bold u-mb-2">{componentDoc.name}</h1>
              <p className="u-text-secondary-emphasis u-m-0">
                {componentDoc.description}
              </p>
            </div>

            <div className="u-d-flex u-gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  window.open(
                    `https://github.com/shohojdhara/atomix/tree/main/src/components/${componentDoc.name}`,
                    "_blank"
                  )
                }
              >
                <Icon name="GithubLogo" size={16} className="u-mr-2" />
                Source
              </Button>
              <Button
                icon={<Icon name="BookOpen" size={16} />}
                variant="outline"
                label="Storybook"
                size="sm"
                onClick={() =>
                  window.open("https://atomix-storybook.netlify.app", "_blank")
                }
              />
            </div>
          </div>

          <div className="u-d-flex u-flex-wrap u-gap-3 u-mt-4">
            <Badge
              variant={getStatusColor(componentDoc.status)}
              label={componentDoc.status}
            />
            <Badge variant="secondary" label={`v${componentDoc.version}`} />
            <Badge
              variant="secondary"
              label={`Import: ${componentDoc.importPath}`}
            />
          </div>
        </div>

        <div className="u-mb-6">
          <Tabs
            items={tabItems}
            activeIndex={getActiveTabIndex()}
            onTabChange={(index) => {
              const tab = tabItems[index];
              if (tab) {
                setActiveTab(tab.id as any);
              }
            }}
          />
        </div>

        <div className="u-mt-8">
          <ComponentRelated
            relatedComponents={componentDoc.relatedComponents}
          />
        </div>
      </Block>
    </div>
  );
};

export default ComponentDetailPage;
