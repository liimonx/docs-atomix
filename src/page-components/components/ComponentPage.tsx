"use client";

import { useState, useEffect, useMemo, useCallback, FC } from "react";
import Link from "next/link";

import {
  Button,
  Card,
  Badge,
  GridCol,
  Grid,
  Icon,
  Block,
  Hero,
  Tabs,
  Callout,
} from "@shohojdhara/atomix";
import toast from "react-hot-toast";

import { findNavigationItem } from "@/data/navigation";
import { ComponentDocumentation } from "@/types";
import { getComponentDocumentation } from "@/utils/documentationLoader";
import { ComponentProps } from "@/components/showcase/ComponentProps";
import { ComponentExamples } from "@/components/showcase/ComponentExamples";
import { ComponentAccessibility } from "@/components/showcase/ComponentAccessibility";
import { ComponentRelated } from "@/components/showcase/ComponentRelated";
import { GlassProps } from "@/types/atomix-components";
import styles from "@/styles/PageHero.module.scss";

const ComponentPage: FC<{ componentId: string }> = ({ componentId }) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Prevent hydration mismatch by only rendering glass effect on client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Find navigation item for the component
  const navigationItem = useMemo(
    () => (componentId ? findNavigationItem(componentId) : null),
    [componentId],
  );

  // Get component documentation directly (no loading state needed)
  const componentData = useMemo(
    () => getComponentDocumentation(componentId || ""),
    [componentId],
  );

  const componentDoc: ComponentDocumentation = useMemo(() => {
    const fallback = {
      name: navigationItem?.title || componentId || "",
      description: `A ${componentId} component for building user interfaces.`,
      category: navigationItem?.category || "Components",
      version: "1.0.0",
      status: "stable" as const,
      lastUpdated: new Date().toISOString().split("T")[0],
      author: "Atomix Team",
      importPath: `@shohojdhara/atomix/${navigationItem?.title || componentId}`,
      dependencies: ["react"],
      tags: ["component", "ui", "react"],
      relatedComponents: ["Button", "Card", "Badge"],
      props: [
        {
          name: "className",
          type: "string",
          required: false,
          defaultValue: "-",
          description: "Additional CSS classes",
        },
      ],
      examples: [
        {
          id: "basic-usage",
          title: "Basic Usage",
          description: "Simple component implementation",
          code: `<${navigationItem?.title || "Component"} />`,
          language: "jsx",
          category: "basic" as const,
        },
      ],
      features: [
        {
          title: "Accessible by default",
          description: "Follows WCAG guidelines",
          supported: true,
        },
        {
          title: "Customizable styling",
          description: "Supports custom CSS classes",
          supported: true,
        },
        {
          title: "TypeScript support",
          description: "Full TypeScript definitions included",
          supported: true,
        },
        {
          title: "Responsive design",
          description: "Works on all device sizes",
          supported: true,
        },
      ],
      usage: [
        {
          title: "Installation",
          description: "Install the Atomix component library",
          code: "npm install @shohojdhara/atomix",
          language: "bash",
        },
      ],
      accessibility: {
        overview: "The component follows WCAG 2.1 guidelines.",
        keyboardSupport: [
          {
            key: "Tab",
            action: "Moves focus to the component",
          },
        ],
        ariaAttributes: [],
        guidelines: [
          "Components should be keyboard accessible",
          "Focus should be clearly visible",
        ],
        wcagLevel: "AA" as const,
      },
    };

    if (!componentData) return fallback;

    // Ensure all arrays exist
    return {
      ...componentData,
      features: componentData.features || fallback.features,
      dependencies: componentData.dependencies || fallback.dependencies,
      tags: componentData.tags || fallback.tags,
      relatedComponents:
        componentData.relatedComponents || fallback.relatedComponents,
      props: componentData.props || fallback.props,
      examples: componentData.examples || fallback.examples,
      usage: componentData.usage || fallback.usage,
    };
  }, [componentData, navigationItem, componentId]);

  const copyToClipboard = useCallback(async (code: string, id: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(id);
      toast.success("Code copied to clipboard!");
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      toast.error("Failed to copy code");
    }
  }, []);

  const getStatusColor = useMemo(
    () => (status: string) => {
      switch (status) {
        case "stable":
          return "success";
        case "beta":
          return "warning";
        case "experimental":
          return "info";
        case "deprecated":
          return "error";
        default:
          return "default";
      }
    },
    [],
  );

  // Memoize tab items to prevent unnecessary re-renders
  const tabItems = useMemo(() => {
    const items = [
      {
        label: "Overview",
        content: (
          <div>
            <Grid>
              <GridCol md={8}>
                <Card>
                  <h3 className="u-text-xl u-font-bold u-mb-4">
                    <Icon name="Sparkle" /> Features
                  </h3>
                  <ul className="u-list-none u-p-0 u-m-0 u-flex u-flex-wrap u-gap-2">
                    {(componentDoc.features || []).map((feature, index) => (
                      <li
                        key={index}
                        className="u-flex u-items-start u-gap-4"
                      >
                        {feature.supported ? (
                          <>
                            <Icon name="CheckCircle" />
                            <div className="u-flex-grow-1">
                              <div className="u-font-semibold u-text-brand-emphasis u-mb-1">
                                {feature.title}
                              </div>
                              <p className="u-text-secondary-emphasis u-text-sm u-m-0">
                                {feature.description}
                              </p>
                            </div>
                          </>
                        ) : (
                          <>
                            <Icon name="Warning" />
                            <div className="u-flex-grow-1">
                              <div className="u-font-semibold u-text-brand-emphasis u-mb-1">
                                {feature.title}
                              </div>
                              <p className="u-text-secondary-emphasis u-text-sm u-m-0">
                                {feature.description}
                              </p>
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </Card>

                <Card className="u-mt-4">
                  <h3 className="u-text-xl u-font-bold u-mb-4">
                    <Icon name="Package" /> Installation
                  </h3>
                  <Card className="u-p-4 u-bg-secondary-subtle u-border u-border-subtle u-overflow-x-auto">
                    <pre
                      className="u-m-0 u-text-sm"
                      style={{ fontFamily: "var(--atomix-font-family-mono)" }}
                    >
                      <code>npm install @shohojdhara/atomix</code>
                    </pre>
                  </Card>
                </Card>

                <Card className="u-mt-4">
                  <h3 className="u-text-xl u-font-bold u-mb-4">
                    <Icon name="Rocket" /> Basic Usage
                  </h3>
                  <Card className="u-p-4 u-bg-secondary-subtle u-border u-border-subtle u-overflow-x-auto">
                    <pre
                      className="u-m-0 u-text-sm"
                      style={{ fontFamily: "var(--atomix-font-family-mono)" }}
                    >
                      <code>{`import { ${componentDoc.name} } from '${componentDoc.importPath}';

// Example usage
<${componentDoc.name} />
`}</code>
                    </pre>
                  </Card>
                </Card>

                <Callout variant="info" className="u-mt-4">
                  <h4 className="u-text-lg u-font-semibold u-mb-2">
                    <Icon name="Lightbulb" /> Quick Tip
                  </h4>
                  <p className="u-mb-0">
                    Check out the Examples tab for more detailed usage patterns
                    and the Props tab for a complete API reference.
                  </p>
                </Callout>
              </GridCol>

              <GridCol md={4}>
                <div className="u-flex u-flex-column u-gap-4">
                  <Card>
                    <h3 className="u-text-lg u-font-semibold u-mb-4">
                      <Icon name="Book" /> Dependencies
                    </h3>
                    {(componentDoc.dependencies || []).length > 0 ? (
                      <ul className="u-list-none u-p-0 u-m-0 u-flex u-flex-column u-gap-2">
                        {(componentDoc.dependencies || []).map((dep, index) => (
                          <li key={index}>
                            <Badge variant="warning" label={dep as string} />
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="u-text-secondary-emphasis u-text-sm u-font-style-italic u-m-0">
                        No external dependencies
                      </p>
                    )}
                  </Card>

                  <Card>
                    <h3 className="u-text-lg u-font-semibold u-mb-4">
                      <Icon name="Tag" /> Tags
                    </h3>
                    <div className="u-flex u-flex-wrap u-gap-2">
                      {(componentDoc.tags || []).map((tag, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          size="sm"
                          label={tag as string}
                        />
                      ))}
                    </div>
                  </Card>

                  <Card>
                    <h3 className="u-text-lg u-font-semibold u-mb-4">
                      <Icon name="Link" /> Quick Links
                    </h3>
                    <div className="u-flex u-flex-column u-gap-2">
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() =>
                          window.open(
                            `https://github.com/shohojdhara/atomix/tree/main/src/components/${componentDoc.name}`,
                            "_blank",
                          )
                        }
                        className="u-w-100 u-justify-start"
                      >
                        <Icon name="GithubLogo" />
                        Source Code
                      </Button>
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() =>
                          window.open(
                            `https://atomix-storybook.netlify.app/?path=/story/components-${componentId}`,
                            "_blank",
                          )
                        }
                        className="u-w-100 u-justify-start"
                      >
                        <Icon name="BookOpen" />
                        Storybook
                      </Button>
                    </div>
                  </Card>
                </div>
              </GridCol>
            </Grid>
          </div>
        ),
      },
      {
        label: "Examples",
        content: (() => {
          // Create a wrapper function that matches the expected signature
          const handleCopy = (code: string, exampleId: string) => {
            copyToClipboard(code, exampleId);
          };

          return (
            <ComponentExamples
              examples={componentDoc.examples || []}
              onCopy={handleCopy}
              copiedCode={copiedCode}
            />
          );
        })(),
      },
      {
        label: "Props",
        content: <ComponentProps props={componentDoc.props || []} />,
      },
      {
        label: "Accessibility",
        content: (
          <ComponentAccessibility
            accessibility={
              componentDoc.accessibility || {
                overview: "Accessibility information not available",
                guidelines: [],
                wcagLevel: "AA" as const,
                keyboardSupport: [],
                ariaAttributes: [],
              }
            }
          />
        ),
      },
    ];

    // Ensure all items have required properties
    return items.filter((item) => item && item.label && item.content);
  }, [componentDoc, copiedCode, copyToClipboard, componentId]);

  // Don't render tabs during SSR to avoid issues
  if (!isMounted) {
    return <div>Loading...</div>;
  }

  return (
    <div className="u-min-h-screen u-pb-xl">
      <Hero
        glass={
          isMounted
            ? ({
                displacementScale: 30,
                blurAmount: 5,
                elasticity: 0,
                enableLiquidBlur: true,
                padding: "20px",
                cornerRadius: 30,
              } as GlassProps)
            : undefined
        }
        className={styles.pageHero}
        backgroundImageSrc="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2728"
        title={componentDoc.name}
        text={componentDoc.description}
        alignment="center"
      />

      <Block>
        <div className="u-mb-lg">
          <Link
            href="/docs/components/overview"
            className="u-inline-flex u-items-center u-gap-2 u-text-secondary-emphasis u-text-decoration-none u-text-sm u-mb-4 u-transition-fast u-focus-visible-ring"
            style={{
              transition: "var(--atomix-transition-fast)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--atomix-color-primary)";
              e.currentTarget.style.transform = "translateX(-4px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "";
              e.currentTarget.style.transform = "";
            }}
          >
            <Icon name="ArrowLeft" />
            <span>Back to Components</span>
          </Link>

          <div className="u-flex u-flex-wrap u-items-start u-justify-between u-gap-4 u-mb-4">
            <div className="u-flex-grow-1" style={{ minWidth: "300px" }}>
              <h1 className="u-text-4xl u-font-bold u-mb-2">
                {componentDoc.name}
              </h1>
              <p
                className="u-text-lg u-text-secondary-emphasis u-m-0"
                style={{ lineHeight: "var(--atomix-line-height-relaxed)" }}
              >
                {componentDoc.description}
              </p>
            </div>

            <div className="u-flex u-gap-2 u-flex-wrap">
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  window.open(
                    `https://github.com/shohojdhara/atomix/tree/main/src/components/${componentDoc.name}`,
                    "_blank",
                  )
                }
              >
                <Icon name="GithubLogo" />
                Source
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  window.open(`https://atomix-storybook.netlify.app`, "_blank")
                }
              >
                <Icon name="BookOpen" />
                Storybook
              </Button>
            </div>
          </div>

          <div className="u-flex u-flex-wrap u-gap-2">
            <Badge
              variant={getStatusColor(componentDoc.status) as any}
              label={componentDoc.status as string}
            >
              {componentDoc.status as string}
            </Badge>
            <Badge variant="secondary" label={`${componentDoc.version}`} />
            <Badge
              variant="secondary"
              label={`Last updated: ${componentDoc.lastUpdated}`}
            />
            <Badge variant="primary" label={componentDoc.author as string} />
          </div>
        </div>

        <div className="u-mt-4">
          <Tabs
            items={Array.isArray(tabItems) ? tabItems : []}
            activeIndex={0}
          />
        </div>

        <div className="u-mt-8">
          <ComponentRelated
            relatedComponents={componentDoc.relatedComponents || []}
          />
        </div>
      </Block>
    </div>
  );
};

export default ComponentPage;
