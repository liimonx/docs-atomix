
"use client";

import { FC, useMemo, useState } from "react";
import Link from "next/link";
import {
  Button,
  Card,
  Hero,
  Grid,
  GridCol,
  Block,
  SectionIntro,
  Callout,
  Icon,
  Tabs,
  List,
} from "@shohojdhara/atomix";
import styles from "@/styles/PageHero.module.scss";

const ComponentGuidelinesPage: FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const guidelines = useMemo(
    () => [
      {
        title: "Component Structure",
        description:
          "Follow the standard directory structure and file organization",
        icon: "Layers",
        items: [
          "Create dedicated directory under src/components/[ComponentName]/",
          "Implement React component with JSDoc comments",
          "Create Storybook examples for all variants",
          "Include TypeScript definitions",
          "Add vanilla JS implementation in scripts subdirectory",
        ],
      },
      {
        title: "Naming Conventions",
        description: "Use consistent naming patterns across all components",
        icon: "Code",
        items: [
          "Use PascalCase for component names",
          "Use kebab-case for file names",
          "Follow BEM methodology for CSS classes",
          "Use descriptive prop names",
          "Prefix component classes with c- (e.g., .c-button)",
        ],
      },
      {
        title: "Accessibility",
        description: "Ensure all components meet WCAG 2.1 AA standards",
        icon: "Shield",
        items: [
          "Include ARIA attributes where needed",
          "Support keyboard navigation",
          "Provide screen reader support",
          "Ensure proper focus management",
          "Test with screen readers",
        ],
      },
      {
        title: "Documentation",
        description: "Comprehensive documentation for all components",
        icon: "FileText",
        items: [
          "Include JSDoc comments",
          "Document all props and their types",
          "Provide usage examples",
          "Include accessibility notes",
          "Create Storybook stories",
        ],
      },
      {
        title: "Styling",
        description: "Follow design system styling guidelines",
        icon: "Palette",
        items: [
          "Use design tokens for colors and spacing",
          "Follow ITCSS architecture",
          "Support theming and customization",
          "Ensure responsive design",
          "Use CSS custom properties",
        ],
      },
      {
        title: "Testing",
        description: "Comprehensive testing for quality assurance",
        icon: "CheckCircle",
        items: [
          "Write unit tests for components",
          "Test accessibility features",
          "Test responsive behavior",
          "Test with different themes",
          "Test both React and vanilla JS implementations",
        ],
      },
    ],
    [],
  );

  const reactExample = useMemo(
    () => `export interface ButtonProps extends BaseComponentProps {
  /**
   * Button label text
   */
  label: string;

  /**
   * Click handler function
   */
  onClick?: () => void;

  /**
   * Button visual style variant
   */
  variant?: 'primary' | 'secondary' | 'success' | 'error';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  label,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
}, ref) => {
  return (
    <button
      ref={ref}
      className={\`c-button c-button--\${variant} c-button--\${size}\`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
});`,
    [],
  );

  const vanillaExample = useMemo(
    () => `export default class Button {
  private element: HTMLElement;
  private options: ButtonOptions;

  constructor(element: string | HTMLElement, options: ButtonOptions = {}) {
    this.element = typeof element === 'string' 
      ? document.querySelector(element) as HTMLElement 
      : element;
    this.options = { ...DEFAULTS, ...options };
    this._init();
  }

  private _init(): void {
    this._bindEvents();
  }

  private _bindEvents(): void {
    this.element.addEventListener('click', this._handleClick.bind(this));
  }

  public destroy(): void {
    // Clean up event listeners
  }
}`,
    [],
  );

  const stylingExample = useMemo(
    () => `// _settings.button.scss
$button-size: 32px !default;
$button-size-sm: 24px !default;
$button-size-lg: 40px !default;
$button-color: var(--atomix-primary) !default;

// _components.button.scss
.c-button {
  --atomix-button-size: #{$button-size};
  --atomix-button-color: #{$button-color};
  
  display: inline-flex;
  align-items: center;
  padding: var(--atomix-spacing-sm) var(--atomix-spacing-md);
  border-radius: var(--atomix-border-radius);
  
  &--primary {
    background-color: var(--atomix-primary);
    color: var(--atomix-white);
  }
  
  &--sm {
    --atomix-button-size: #{$button-size-sm};
  }
}`,
    [],
  );


  const tabItems = useMemo(
    () => [
      {
        id: "overview",
        label: "Overview",
        content: (
          <div className="u-mt-4">
            <Grid>
              {guidelines.map((guideline, index) => (
                <GridCol key={index} md={6} lg={4} className="u-mb-4">
                  <Card elevation="lg" className="u-h-100">
                    <div className="u-flex u-items-center u-mb-3">
                      <div
                        className="u-flex u-items-center u-justify-center u-me-3"
                        style={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "12px",
                          backdropFilter:
                            "blur(5px) saturate(300%) contrast(45%) brightness(130%)",
                        }}
                      >
                        <Icon
                          name={guideline.icon as any}
                          size={"lg"}
                          className="u-text-brand-emphasis"
                        />
                      </div>
                      <h3 className="u-text-lg u-font-semibold u-m-0">
                        {guideline.title}
                      </h3>
                    </div>
                    <p className="u-text-secondary-emphasis-emphasis u-mb-4">
                      {guideline.description}
                    </p>
                    <List variant="text">
                      {guideline.items.map((item, itemIndex) => (
                        <List.Item key={itemIndex}>{item}</List.Item>
                      ))}
                    </List>
                  </Card>
                </GridCol>
              ))}
            </Grid>
          </div>
        ),
      },
      {
        id: "react",
        label: "React Implementation",
        content: (
          <div className="u-mt-4">
            <Card className="u-mb-4">
              <h3 className="u-text-xl u-font-bold u-mb-4">
                React Component Structure
              </h3>
              <p className="u-text-secondary-emphasis-emphasis u-mb-4">
                React components should follow this structure and best
                practices:
              </p>
              <List variant="text">
                <List.Item>
                  Use <code className="u-text-sm">forwardRef</code> for
                  components that need ref forwarding
                </List.Item>
                <List.Item>
                  Define clear props interfaces with JSDoc comments
                </List.Item>
                <List.Item>
                  Support both controlled and uncontrolled modes
                </List.Item>
                <List.Item>
                  Use composable hooks for logic and state management
                </List.Item>
                <List.Item>
                  Include proper ARIA attributes for accessibility
                </List.Item>
                <List.Item>
                  Implement clear return statements with proper JSX structure
                </List.Item>
              </List>
            </Card>

            <Card>
              <h3 className="u-text-xl u-font-bold u-mb-4">
                Example: React Component
              </h3>
              <Card className="u-p-4 u-bg-secondary-subtle u-border u-border-subtle u-overflow-x-auto">
                <pre
                  className="u-m-0 u-text-sm u-text-error-text-emphasis"
                  style={{ fontFamily: "var(--atomix-font-family-mono)" }}
                >
                  <code>{reactExample}</code>
                </pre>
              </Card>
            </Card>
          </div>
        ),
      },
      {
        id: "vanilla",
        label: "Vanilla JS",
        content: (
          <div className="u-mt-4">
            <Card className="u-mb-4">
              <h3 className="u-text-xl u-font-bold u-mb-4">
                Vanilla JavaScript Implementation
              </h3>
              <p className="u-text-secondary-emphasis-emphasis u-mb-4">
                Every component should also provide a vanilla JavaScript
                implementation:
              </p>
              <List variant="text">
                <List.Item>
                  Create a main class with clear constructor and public API
                </List.Item>
                <List.Item>
                  Use proper event delegation for better performance
                </List.Item>
                <List.Item>
                  Implement initialization, event binding, and cleanup methods
                </List.Item>
                <List.Item>Support data attribute initialization</List.Item>
                <List.Item>
                  Clean up all event listeners in destroy method
                </List.Item>
              </List>
            </Card>

            <Card>
              <h3 className="u-text-xl u-font-bold u-mb-4">
                Example: Vanilla JS Class
              </h3>
              <Card className="u-p-4 u-bg-secondary-subtle u-border u-border-subtle u-overflow-x-auto">
                <pre
                  className="u-m-0 u-text-sm u-text-error-text-emphasis"
                  style={{ fontFamily: "var(--atomix-font-family-mono)" }}
                >
                  <code>{vanillaExample}</code>
                </pre>
              </Card>
            </Card>
          </div>
        ),
      },
      {
        id: "styling",
        label: "Styling",
        content: (
          <div className="u-mt-4">
            <Card className="u-mb-4">
              <h3 className="u-text-xl u-font-bold u-mb-4">
                Styling Architecture
              </h3>
              <p className="u-text-secondary-emphasis-emphasis u-mb-4">
                Atomix follows the ITCSS (Inverted Triangle CSS) architecture:
              </p>
              <List variant="text">
                <List.Item>
                  <strong>01-settings/</strong> - Variables and configuration
                </List.Item>
                <List.Item>
                  <strong>02-tools/</strong> - Mixins and functions
                </List.Item>
                <List.Item>
                  <strong>06-components/</strong> - UI component styles
                </List.Item>
                <List.Item>
                  Follow BEM methodology with{" "}
                  <code className="u-text-sm">c-</code> prefix
                </List.Item>
                <List.Item>Use CSS custom properties for theming</List.Item>
              </List>
            </Card>

            <Card>
              <h3 className="u-text-xl u-font-bold u-mb-4">
                Example: Component Styles
              </h3>
              <Card className="u-p-4 u-bg-secondary-subtle u-border u-border-subtle u-overflow-x-auto">
                <pre
                  className="u-m-0 u-text-sm u-text-error-text-emphasis"
                  style={{ fontFamily: "var(--atomix-font-family-mono)" }}
                >
                  <code>{stylingExample}</code>
                </pre>
              </Card>
            </Card>
          </div>
        ),
      },
      {
        id: "accessibility",
        label: "Accessibility",
        content: (
          <div className="u-mt-4">
            <Card className="u-mb-4">
              <h3 className="u-text-xl u-font-bold u-mb-4">
                Accessibility Checklist
              </h3>
              <p className="u-text-secondary-emphasis-emphasis u-mb-4">
                All components must meet WCAG 2.1 AA standards:
              </p>
              <Grid>
                <GridCol md={6}>
                  <List variant="number">
                    <List.Item>Keyboard navigation support</List.Item>
                    <List.Item>Proper focus management</List.Item>
                    <List.Item>ARIA roles and attributes</List.Item>
                    <List.Item>Color contrast compliance</List.Item>
                    <List.Item>Screen reader compatibility</List.Item>
                    <List.Item>Reduced motion support</List.Item>
                  </List>
                </GridCol>
                <GridCol md={6}>
                  <List variant="number">
                    <List.Item>Color contrast compliance</List.Item>
                    <List.Item>Screen reader compatibility</List.Item>
                    <List.Item>Reduced motion support</List.Item>
                  </List>
                </GridCol>
              </Grid>
            </Card>

            <Card>
              <h3 className="u-text-xl u-font-bold u-mb-4">
                Accessibility Example
              </h3>
              <Card className="u-p-4 u-bg-secondary-subtle u-border u-border-subtle u-overflow-x-auto">
                <pre
                  className="u-m-0 u-text-sm u-text-error-text-emphasis"
                  style={{ fontFamily: "var(--atomix-font-family-mono)" }}
                >
                  <code>{`<button
  aria-expanded={isOpen}
  aria-controls={contentId}
  aria-label={ariaLabel || label}
  tabIndex={0}
  onKeyDown={handleKeyDown}
>
  {label}
</button>`}</code>
                </pre>
              </Card>
            </Card>
          </div>
        ),
      },
    ],
    [guidelines, reactExample, vanillaExample, stylingExample],
  );

  return (
    <>
      <Hero
        className={styles.pageHero}
        title="Component Guidelines"
        subtitle="Development standards and best practices"
        text="Learn about component structure, naming conventions, accessibility requirements, and coding standards for the Atomix design system."
        alignment="center"
        fullViewportHeight={false}
        contentWidth="1200px"
        actions={
          <>
            <Button
              label="Browse Components"
              href="/docs/components/overview"
              linkComponent={Link}
            />
            <Button
              variant="secondary"
              label="Quick Start"
              href="/docs/getting-started/quick-start"
              linkComponent={Link}
            />
          </>
        }
      />

      <Block spacing="md">
        <SectionIntro
          title="Development Standards"
          text="Follow these comprehensive guidelines to ensure consistency and quality across all components in the Atomix design system."
        />

        <div className="u-mb-6">
          <Tabs
            items={tabItems}
            activeIndex={activeTab}
            onTabChange={(index) => setActiveTab(index)}
          />
        </div>
      </Block>

      <Block background="secondary">
        <Callout variant="info" title="Getting Started">
          <p className="u-mb-3">
            New to component development? Start with our{" "}
            <Link
              href="/docs/getting-started/installation"
              className="u-text-primary u-text-decoration-none u-font-medium"
            >
              installation guide
            </Link>{" "}
            and{" "}
            <Link
              href="/docs/components/overview"
              className="u-text-primary u-text-decoration-none u-font-medium"
            >
              browse existing components
            </Link>{" "}
            to see these guidelines in action.
          </p>
          <div className="u-flex u-gap-3 u-flex-wrap">
            <Button
              variant="primary"
              href="/docs/components/overview"
              linkComponent={Link}
            >
              <Icon name="GridFour" size={16} className="u-me-2" />
              Browse Components
            </Button>
            <Button
              variant="outline-primary"
              href="/docs/getting-started/quick-start"
              linkComponent={Link}
            >
              <Icon name="Rocket" size={16} className="u-me-2" />
              Quick Start Guide
            </Button>
            <Button
              variant="outline-primary"
              href="/docs/resources/contributing"
              linkComponent={Link}
            >
              <Icon name="Code" size={16} className="u-me-2" />
              Contributing Guide
            </Button>
          </div>
        </Callout>
      </Block>
    </>
  );
};

export default ComponentGuidelinesPage;
