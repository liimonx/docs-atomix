'use client';

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  BookOpen,
} from "lucide-react";
import {
  Button,
  Card,
  Badge,
  Row,
  GridCol,
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
import styles from "./ComponentPage.module.scss";

const ComponentPage: React.FC<{ componentId: string }> = ({ componentId }) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Find navigation item for the component
  const navigationItem = componentId ? findNavigationItem(componentId) : null;

  // Get component documentation directly (no loading state needed)
  const componentData = getComponentDocumentation(componentId || "");
  const componentDoc: ComponentDocumentation = componentData || {
    name: navigationItem?.title || componentId || "",
    description: `A ${componentId} component for building user interfaces.`,
    category: navigationItem?.category || "Components",
    version: "1.0.0",
    status: "stable",
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
      wcagLevel: "AA",
    },
  };

  const copyToClipboard = async (code: string, id: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(id);
      toast.success("Code copied to clipboard!");
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      toast.error("Failed to copy code");
    }
  };

  const getStatusColor = (status: string) => {
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
  };

  // Prepare tab items for Atomix Tab component
  const tabItems = [
    {
      label: "📋 Overview",
      content: (
        <div className={styles.componentPage__overview}>
          <Row>
            <GridCol md={8}>
              <Card className="u-p-6">
                <h3 className="u-mb-4">✨ Features</h3>
                <ul className={styles.componentPage__featuresList}>
                  {componentDoc.features.map((feature, index) => (
                    <li
                      key={index}
                      className={styles.componentPage__featureItem}
                    >
                      {feature.supported ? (
                        <>
                          <CheckCircle
                            size={20}
                            className={`${styles.componentPage__featureIcon} u-text-success`}
                          />
                          <div className={styles.componentPage__featureContent}>
                            <div className={styles.componentPage__featureTitle}>
                              {feature.title}
                            </div>
                            <p
                              className={
                                styles.componentPage__featureDescription
                              }
                            >
                              {feature.description}
                            </p>
                          </div>
                        </>
                      ) : (
                        <>
                          <AlertCircle
                            size={20}
                            className={`${styles.componentPage__featureIcon} u-text-warning`}
                          />
                          <div className={styles.componentPage__featureContent}>
                            <div className={styles.componentPage__featureTitle}>
                              {feature.title}
                            </div>
                            <p
                              className={
                                styles.componentPage__featureDescription
                              }
                            >
                              {feature.description}
                            </p>
                          </div>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="u-p-6 u-mt-4">
                <h3 className="u-mb-4">📦 Installation</h3>
                <pre className={styles.componentPage__codeBlock}>
                  <code>npm install @shohojdhara/atomix</code>
                </pre>
              </Card>

              <Card className="u-p-6 u-mt-4">
                <h3 className="u-mb-4">🚀 Basic Usage</h3>
                <pre className={styles.componentPage__codeBlock}>
                  <code>{`import { ${componentDoc.name} } from '${componentDoc.importPath}';

// Example usage
<${componentDoc.name} />
`}</code>
                </pre>
              </Card>

              <Callout variant="info" className="u-mt-4">
                <h4 className="u-mb-2">💡 Quick Tip</h4>
                <p className="u-mb-0">
                  Check out the Examples tab for more detailed usage patterns
                  and the Props tab for a complete API reference.
                </p>
              </Callout>
            </GridCol>

            <GridCol md={4}>
              <div className={styles.componentPage__sidebar}>
                <Card className={`${styles.componentPage__infoCard} u-p-6`}>
                  <h3>📚 Dependencies</h3>
                  {componentDoc.dependencies.length > 0 ? (
                    <ul className={styles.componentPage__dependencyList}>
                      {componentDoc.dependencies.map((dep, index) => (
                        <li
                          key={index}
                          className={styles.componentPage__dependencyItem}
                        >
                          <Badge variant="warning" label={dep as string}/>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className={styles.componentPage__emptyState}>
                      No external dependencies
                    </p>
                  )}
                </Card>

                <Card className={`${styles.componentPage__infoCard} u-p-6`}>
                  <h3>🏷️ Tags</h3>
                  <div className={styles.componentPage__tagList}>
                    {componentDoc.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" size="sm" label={tag as string} className={styles.componentPage__tagBadge} >
                      </Badge>
                    ))}
                  </div>
                </Card>

                <Card className={`${styles.componentPage__infoCard} u-p-6`}>
                  <h3>🔗 Quick Links</h3>
                  <div className={styles.componentPage__quickLinks}>
                    <a
                      href={`https://github.com/shohojdhara/atomix/tree/main/src/components/${componentDoc.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.componentPage__quickLink}
                    >
                      <Github size={14} />
                      Source Code
                    </a>
                    <a
                      href={`https://atomix-storybook.netlify.app/?path=/story/components-${componentId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.componentPage__quickLink}
                    >
                      <BookOpen size={14} />
                      Storybook
                    </a>
                  </div>
                </Card>
              </div>
            </GridCol>
          </Row>
        </div>
      ),
    },
    {
      label: "💻 Examples",
      content: (
        <ComponentExamples
          examples={componentDoc.examples}
          onCopy={copyToClipboard}
          copiedCode={copiedCode}
        />
      ),
    },
    {
      label: "⚙️ Props",
      content: <ComponentProps props={componentDoc.props} />,
    },
    {
      label: "♿ Accessibility",
      content: (
        <ComponentAccessibility accessibility={componentDoc.accessibility} />
      ),
    },
  ];

  return (
    <div className={styles.componentPage}>

      <Hero
        glass={
          {
            displacementScale: 30,
            blurAmount: 5,
            elasticity: 0,
            enableLiquidBlur: true,
            padding: "20px",
            cornerRadius: 30,
          } as GlassProps
        }
        className={`${styles.componentPage__hero} u-pt-32 u-pb-16`}
        backgroundImageSrc="https://images.unsplash.com/photo-1682100615316-e152a40b5793?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2728"
        title={componentDoc.name}
        text={componentDoc.description}
        alignment="center"
      />

      <Block>
        <div className={styles.componentPage__header}>
          <Link
            href="/docs/components/overview"
            className={styles.componentPage__backLink}
          >
            <ArrowLeft size={16} />
            <span>Back to Components</span>
          </Link>

          <div className={styles.componentPage__titleRow}>
            <div className={styles.componentPage__titleContent}>
              <h1 className={styles.componentPage__title}>
                {componentDoc.name}
              </h1>
              <p className={styles.componentPage__description}>
                {componentDoc.description}
              </p>
            </div>

            <div className={styles.componentPage__actions}>
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
                <Github size={16} />
                Source
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  window.open(`https://atomix-storybook.netlify.app`, "_blank")
                }
              >
                <ExternalLink size={16} />
                Storybook
              </Button>
            </div>
          </div>

          <div className={styles.componentPage__badges}>
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

        <div className={styles.componentPage__tabs}>
          <Tabs items={tabItems} activeIndex={0} />
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

export default ComponentPage;
