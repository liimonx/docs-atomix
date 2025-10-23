import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Copy,
  CheckCircle,
  Download,
  Zap,
  BookOpen,
  Palette,
  ArrowRight,
  ExternalLink,
  Settings,
  Lightbulb,
} from "lucide-react";
import { Button, Card, Hero } from "@shohojdhara/atomix";
import toast from "react-hot-toast";

interface GettingStartedPageProps {
  type: "introduction" | "installation" | "quickstart" | "theming";
}

const GettingStartedPage: React.FC<GettingStartedPageProps> = ({ type }) => {
  const [copiedCode, setCopiedCode] = React.useState<string | null>(null);

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

  const renderCodeBlock = (
    code: string,
    language: string,
    id: string,
    title?: string
  ) => (
    <div className="code-example">
      <div className="code-header">
        <span className="code-title">{title || language}</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => copyToClipboard(code, id)}
        >
          {copiedCode === id ? <CheckCircle size={16} /> : <Copy size={16} />}
        </Button>
      </div>
      <pre
        style={{
          margin: 0,
          padding: "1rem",
          backgroundColor: "var(--atomix-bg-tertiary)",
          fontSize: "0.875rem",
          overflowX: "auto",
          lineHeight: "1.5",
        }}
      >
        <code>{code}</code>
      </pre>
    </div>
  );

  const getPageContent = () => {
    switch (type) {
      case "introduction":
        return {
          title: "Introduction to Atomix",
          description: "Welcome to Atomix - A modern React component library",
          content: (
            <div className="introduction-content">
              {/* Hero Section */}
              <Hero
                title="Welcome to Atomix"
                subtitle="Modern React Component Library"
                text="A comprehensive, accessible React component library built with TypeScript. Fast, customizable, and developer-friendly."
                alignment="center"
                backgroundImageSrc="https://picsum.photos/id/1067/1920/1080"
                showOverlay={true}
                fullViewportHeight={false}
                contentWidth="900px"
                actions={
                  <>
                    <Link to="/docs/installation">
                      <Button
                        glass
                        icon={<Download size={16} />}
                        label="Download"
                      />
                    </Link>

                    <Link to="/docs/components">
                      <Button
                        glass
                        variant="secondary"
                        label="Browse Components"
                        icon={<BookOpen size={16} />}
                      />
                    </Link>
                  </>
                }
              />

              {/* What is Atomix */}
              <section style={{ marginBottom: "3rem", marginTop: "3rem" }}>
                <h2 style={{ marginBottom: "1rem" }}>What is Atomix?</h2>
                <p
                  style={{
                    fontSize: "1.125rem",
                    color: "var(--atomix-text-secondary)",
                    lineHeight: "1.6",
                    marginBottom: "2rem",
                  }}
                >
                  Atomix is a modern React component library designed to help
                  developers build beautiful, accessible, and performant user
                  interfaces with ease. Built with TypeScript and following best
                  practices, Atomix provides a comprehensive set of components
                  that work seamlessly together.
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "1.5rem",
                  }}
                >
                  {[
                    {
                      icon: (
                        <Zap
                          size={24}
                          style={{ color: "var(--atomix-primary)" }}
                        />
                      ),
                      title: "Performance First",
                      description:
                        "Optimized for speed with tree-shaking, minimal bundle size, and efficient rendering.",
                    },
                    {
                      icon: (
                        <Settings
                          size={24}
                          style={{ color: "var(--atomix-success)" }}
                        />
                      ),
                      title: "Developer Experience",
                      description:
                        "TypeScript-first with excellent IntelliSense, comprehensive docs, and intuitive APIs.",
                    },
                    {
                      icon: (
                        <Palette
                          size={24}
                          style={{ color: "var(--atomix-info)" }}
                        />
                      ),
                      title: "Customizable",
                      description:
                        "Flexible theming system with CSS custom properties and design tokens.",
                    },
                  ].map((feature, index) => (
                    <Card key={index} className="p-6">
                      <div style={{ marginBottom: "1rem" }}>{feature.icon}</div>
                      <h3
                        style={{ marginBottom: "0.5rem", fontSize: "1.125rem" }}
                      >
                        {feature.title}
                      </h3>
                      <p
                        style={{
                          color: "var(--atomix-text-secondary)",
                          fontSize: "0.925rem",
                          lineHeight: "1.5",
                          margin: 0,
                        }}
                      >
                        {feature.description}
                      </p>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Key Features */}
              <section style={{ marginBottom: "3rem" }}>
                <h2 style={{ marginBottom: "1rem" }}>Key Features</h2>
                <div style={{ display: "grid", gap: "1rem" }}>
                  {[
                    "TypeScript-first with comprehensive type definitions",
                    "Full accessibility support (WCAG 2.1 AA compliant)",
                    "Customizable theming system with CSS custom properties",
                    "Tree-shakable for optimal bundle sizes",
                    "Server-side rendering (SSR) compatible",
                    "Comprehensive documentation and examples",
                    "Regular updates and active community support",
                  ].map((feature, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        padding: "1rem",
                        backgroundColor: "var(--atomix-bg-secondary)",
                        borderRadius: "8px",
                      }}
                    >
                      <CheckCircle
                        size={20}
                        style={{ color: "var(--atomix-success)" }}
                      />
                      <span style={{ fontSize: "0.925rem" }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Next Steps */}
              <section>
                <h2 style={{ marginBottom: "1rem" }}>Ready to Get Started?</h2>
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <Button asChild>
                    <Link to="/docs/installation">
                      <Download size={16} style={{ marginRight: "0.5rem" }} />
                      Install Atomix
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/docs/quickstart">
                      <Zap size={16} style={{ marginRight: "0.5rem" }} />
                      Quick Start Guide
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/docs/components/button">
                      <BookOpen size={16} style={{ marginRight: "0.5rem" }} />
                      Browse Components
                    </Link>
                  </Button>
                </div>
              </section>
            </div>
          ),
        };

      case "installation":
        return {
          title: "Installation",
          description: "Install Atomix in your React project",
          content: (
            <div className="installation-content">
              {/* Prerequisites */}
              <section style={{ marginBottom: "3rem" }}>
                <h2 style={{ marginBottom: "1rem" }}>Prerequisites</h2>
                <p
                  style={{
                    color: "var(--atomix-text-secondary)",
                    marginBottom: "1rem",
                    lineHeight: "1.6",
                  }}
                >
                  Before installing Atomix, make sure you have the following:
                </p>
                <ul
                  style={{
                    color: "var(--atomix-text-secondary)",
                    lineHeight: "1.6",
                  }}
                >
                  <li>React 18.0.0 or higher</li>
                  <li>Node.js 16.0.0 or higher</li>
                  <li>A package manager (npm, yarn, or pnpm)</li>
                </ul>
              </section>

              {/* Installation Methods */}
              <section style={{ marginBottom: "3rem" }}>
                <h2 style={{ marginBottom: "1rem" }}>Installation</h2>
                <p
                  style={{
                    color: "var(--atomix-text-secondary)",
                    marginBottom: "2rem",
                    lineHeight: "1.6",
                  }}
                >
                  Choose your preferred package manager to install Atomix:
                </p>

                <div
                  style={{ display: "grid", gap: "1rem", marginBottom: "2rem" }}
                >
                  <div>
                    <h3 style={{ marginBottom: "0.5rem", fontSize: "1rem" }}>
                      npm
                    </h3>
                    {renderCodeBlock(
                      "npm install @shohojdhara/atomix",
                      "bash",
                      "npm-install"
                    )}
                  </div>
                  <div>
                    <h3 style={{ marginBottom: "0.5rem", fontSize: "1rem" }}>
                      yarn
                    </h3>
                    {renderCodeBlock(
                      "yarn add @shohojdhara/atomix",
                      "bash",
                      "yarn-install"
                    )}
                  </div>
                  <div>
                    <h3 style={{ marginBottom: "0.5rem", fontSize: "1rem" }}>
                      pnpm
                    </h3>
                    {renderCodeBlock(
                      "pnpm add @shohojdhara/atomix",
                      "bash",
                      "pnpm-install"
                    )}
                  </div>
                </div>
              </section>

              {/* Setup */}
              <section style={{ marginBottom: "3rem" }}>
                <h2 style={{ marginBottom: "1rem" }}>Setup</h2>
                <p
                  style={{
                    color: "var(--atomix-text-secondary)",
                    marginBottom: "1.5rem",
                    lineHeight: "1.6",
                  }}
                >
                  After installation, you need to import the Atomix CSS in your
                  main application file:
                </p>

                <h3 style={{ marginBottom: "0.5rem", fontSize: "1rem" }}>
                  Import CSS
                </h3>
                {renderCodeBlock(
                  `import '@shohojdhara/atomix/dist/index.css';`,
                  "tsx",
                  "import-css",
                  "main.tsx / App.tsx"
                )}
              </section>

              {/* Verification */}
              <section style={{ marginBottom: "3rem" }}>
                <h2 style={{ marginBottom: "1rem" }}>Verification</h2>
                <p
                  style={{
                    color: "var(--atomix-text-secondary)",
                    marginBottom: "1.5rem",
                    lineHeight: "1.6",
                  }}
                >
                  Test your installation by importing and using a component:
                </p>

                {renderCodeBlock(
                  `import { Button } from '@shohojdhara/atomix';

function App() {
  return (
    <div>
      <Button>Hello Atomix!</Button>
    </div>
  );
}

export default App;`,
                  "tsx",
                  "verification-test",
                  "App.tsx"
                )}
              </section>

              {/* TypeScript Support */}
              <section style={{ marginBottom: "3rem" }}>
                <h2 style={{ marginBottom: "1rem" }}>TypeScript Support</h2>
                <p
                  style={{
                    color: "var(--atomix-text-secondary)",
                    marginBottom: "1rem",
                    lineHeight: "1.6",
                  }}
                >
                  Atomix includes TypeScript definitions out of the box. No
                  additional type packages are needed.
                </p>
                <div
                  style={{
                    backgroundColor: "var(--atomix-bg-secondary)",
                    border: "1px solid var(--atomix-border)",
                    borderRadius: "8px",
                    padding: "1rem",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                  }}
                >
                  <Lightbulb
                    size={20}
                    style={{
                      color: "var(--atomix-info)",
                      marginTop: "0.125rem",
                    }}
                  />
                  <div>
                    <p style={{ margin: 0, fontSize: "0.925rem" }}>
                      <strong>Tip:</strong> Your IDE will automatically provide
                      autocomplete and type checking for all Atomix components
                      and their props.
                    </p>
                  </div>
                </div>
              </section>

              {/* Next Steps */}
              <section>
                <h2 style={{ marginBottom: "1rem" }}>Next Steps</h2>
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <Button asChild>
                    <Link to="/docs/quickstart">
                      <ArrowRight size={16} style={{ marginRight: "0.5rem" }} />
                      Quick Start Guide
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/docs/theming">
                      <Palette size={16} style={{ marginRight: "0.5rem" }} />
                      Setup Theming
                    </Link>
                  </Button>
                </div>
              </section>
            </div>
          ),
        };

      case "quickstart":
        return {
          title: "Quick Start",
          description: "Get started with Atomix in minutes",
          content: (
            <div className="quickstart-content">
              {/* Overview */}
              <section style={{ marginBottom: "3rem" }}>
                <div
                  style={{
                    backgroundColor: "var(--atomix-bg-secondary)",
                    borderRadius: "8px",
                    padding: "2rem",
                    textAlign: "center",
                    marginBottom: "2rem",
                  }}
                >
                  <Zap
                    size={48}
                    style={{
                      color: "var(--atomix-primary)",
                      marginBottom: "1rem",
                    }}
                  />
                  <h1 style={{ marginBottom: "1rem" }}>Quick Start Guide</h1>
                  <p
                    style={{
                      color: "var(--atomix-text-secondary)",
                      fontSize: "1.125rem",
                      margin: 0,
                    }}
                  >
                    Follow this guide to get up and running with Atomix in just
                    a few minutes.
                  </p>
                </div>
              </section>

              {/* Step 1 */}
              <section style={{ marginBottom: "3rem" }}>
                <h2 style={{ marginBottom: "1rem" }}>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "2rem",
                      height: "2rem",
                      backgroundColor: "var(--atomix-primary)",
                      color: "white",
                      borderRadius: "50%",
                      fontSize: "0.875rem",
                      fontWeight: "600",
                      marginRight: "0.75rem",
                    }}
                  >
                    1
                  </span>
                  Install Atomix
                </h2>
                <p
                  style={{
                    color: "var(--atomix-text-secondary)",
                    marginBottom: "1rem",
                    lineHeight: "1.6",
                  }}
                >
                  First, install Atomix in your React project:
                </p>
                {renderCodeBlock(
                  "npm install @shohojdhara/atomix",
                  "bash",
                  "quickstart-install"
                )}
              </section>

              {/* Step 2 */}
              <section style={{ marginBottom: "3rem" }}>
                <h2 style={{ marginBottom: "1rem" }}>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "2rem",
                      height: "2rem",
                      backgroundColor: "var(--atomix-primary)",
                      color: "white",
                      borderRadius: "50%",
                      fontSize: "0.875rem",
                      fontWeight: "600",
                      marginRight: "0.75rem",
                    }}
                  >
                    2
                  </span>
                  Import Styles
                </h2>
                <p
                  style={{
                    color: "var(--atomix-text-secondary)",
                    marginBottom: "1rem",
                    lineHeight: "1.6",
                  }}
                >
                  Import the Atomix CSS in your main application file:
                </p>
                {renderCodeBlock(
                  `import '@shohojdhara/atomix/dist/index.css';`,
                  "tsx",
                  "quickstart-css",
                  "main.tsx"
                )}
              </section>

              {/* Step 3 */}
              <section style={{ marginBottom: "3rem" }}>
                <h2 style={{ marginBottom: "1rem" }}>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "2rem",
                      height: "2rem",
                      backgroundColor: "var(--atomix-primary)",
                      color: "white",
                      borderRadius: "50%",
                      fontSize: "0.875rem",
                      fontWeight: "600",
                      marginRight: "0.75rem",
                    }}
                  >
                    3
                  </span>
                  Start Using Components
                </h2>
                <p
                  style={{
                    color: "var(--atomix-text-secondary)",
                    marginBottom: "1rem",
                    lineHeight: "1.6",
                  }}
                >
                  Import and use Atomix components in your React application:
                </p>
                {renderCodeBlock(
                  `import { Button, Card, Badge } from '@shohojdhara/atomix';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <Card style={{ padding: '1.5rem', maxWidth: '400px' }}>
        <h2>Welcome to Atomix!</h2>
        <p>You're now ready to build amazing UIs.</p>
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
          <Button>Primary Button</Button>
          <Button variant="outline">Secondary</Button>
          <Badge>New</Badge>
        </div>
      </Card>
    </div>
  );
}

export default App;`,
                  "tsx",
                  "quickstart-example",
                  "App.tsx"
                )}
              </section>

              {/* Example Components */}
              <section style={{ marginBottom: "3rem" }}>
                <h2 style={{ marginBottom: "1rem" }}>Popular Components</h2>
                <p
                  style={{
                    color: "var(--atomix-text-secondary)",
                    marginBottom: "1.5rem",
                    lineHeight: "1.6",
                  }}
                >
                  Here are some of the most commonly used Atomix components:
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "1rem",
                  }}
                >
                  {[
                    {
                      name: "Button",
                      description: "Interactive button with multiple variants",
                    },
                    {
                      name: "Card",
                      description: "Flexible container for content",
                    },
                    {
                      name: "Input",
                      description: "Text input with validation support",
                    },
                    { name: "Badge", description: "Small status indicators" },
                    {
                      name: "Modal",
                      description: "Dialog overlays for important content",
                    },
                    {
                      name: "Avatar",
                      description: "User profile images with fallbacks",
                    },
                  ].map((component, index) => (
                    <Card key={index} className="p-4">
                      <h3 style={{ marginBottom: "0.5rem", fontSize: "1rem" }}>
                        {component.name}
                      </h3>
                      <p
                        style={{
                          color: "var(--atomix-text-secondary)",
                          fontSize: "0.875rem",
                          margin: 0,
                          lineHeight: "1.5",
                        }}
                      >
                        {component.description}
                      </p>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Next Steps */}
              <section>
                <h2 style={{ marginBottom: "1rem" }}>What's Next?</h2>
                <p
                  style={{
                    color: "var(--atomix-text-secondary)",
                    marginBottom: "1.5rem",
                    lineHeight: "1.6",
                  }}
                >
                  Now that you have Atomix set up, explore these resources to
                  build amazing UIs:
                </p>
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <Button asChild>
                    <Link to="/docs/components/button">
                      <BookOpen size={16} style={{ marginRight: "0.5rem" }} />
                      Browse All Components
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/docs/theming">
                      <Palette size={16} style={{ marginRight: "0.5rem" }} />
                      Learn About Theming
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <a
                      href="https://github.com/shohojdhara/atomix"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink
                        size={16}
                        style={{ marginRight: "0.5rem" }}
                      />
                      View Examples
                    </a>
                  </Button>
                </div>
              </section>
            </div>
          ),
        };

      case "theming":
        return {
          title: "Theming",
          description: "Customize the look and feel of your components",
          content: (
            <div className="theming-content">
              {/* Overview */}
              <section style={{ marginBottom: "3rem" }}>
                <div
                  style={{
                    backgroundColor: "var(--atomix-bg-secondary)",
                    borderRadius: "8px",
                    padding: "2rem",
                    textAlign: "center",
                    marginBottom: "2rem",
                  }}
                >
                  <Palette
                    size={48}
                    style={{
                      color: "var(--atomix-primary)",
                      marginBottom: "1rem",
                    }}
                  />
                  <h1 style={{ marginBottom: "1rem" }}>Theming System</h1>
                  <p
                    style={{
                      color: "var(--atomix-text-secondary)",
                      fontSize: "1.125rem",
                      margin: 0,
                    }}
                  >
                    Customize Atomix components to match your brand and design
                    system.
                  </p>
                </div>
              </section>

              {/* CSS Custom Properties */}
              <section style={{ marginBottom: "3rem" }}>
                <h2 style={{ marginBottom: "1rem" }}>CSS Custom Properties</h2>
                <p
                  style={{
                    color: "var(--atomix-text-secondary)",
                    marginBottom: "1.5rem",
                    lineHeight: "1.6",
                  }}
                >
                  Atomix uses CSS custom properties (CSS variables) for theming.
                  You can override these variables to customize the appearance
                  of all components:
                </p>

                {renderCodeBlock(
                  `:root {
  /* Primary Colors */
  --atomix-primary: #0066cc;
  --atomix-primary-hover: #0052a3;
  --atomix-primary-light: #e6f2ff;

  /* Background Colors */
  --atomix-bg-primary: #ffffff;
  --atomix-bg-secondary: #f8f9fa;
  --atomix-bg-tertiary: #e9ecef;

  /* Text Colors */
  --atomix-text-primary: #212529;
  --atomix-text-secondary: #6c757d;
  --atomix-text-muted: #adb5bd;

  /* Border Colors */
  --atomix-border: #dee2e6;
  --atomix-border-light: #f1f3f4;
  --atomix-border-dark: #ced4da;

  /* Status Colors */
  --atomix-success: #28a745;
  --atomix-warning: #ffc107;
  --atomix-error: #dc3545;
  --atomix-info: #17a2b8;
}`,
                  "css",
                  "css-variables",
                  "styles.css"
                )}
              </section>

              {/* Dark Mode */}
              <section style={{ marginBottom: "3rem" }}>
                <h2 style={{ marginBottom: "1rem" }}>Dark Mode</h2>
                <p
                  style={{
                    color: "var(--atomix-text-secondary)",
                    marginBottom: "1.5rem",
                    lineHeight: "1.6",
                  }}
                >
                  Implement dark mode by overriding CSS variables for the dark
                  theme:
                </p>

                {renderCodeBlock(
                  `[data-theme="dark"] {
  --atomix-bg-primary: #1a1a1a;
  --atomix-bg-secondary: #2d2d2d;
  --atomix-bg-tertiary: #404040;

  --atomix-text-primary: #ffffff;
  --atomix-text-secondary: #b3b3b3;
  --atomix-text-muted: #808080;

  --atomix-border: #404040;
  --atomix-border-light: #2d2d2d;
  --atomix-border-dark: #535353;
}`,
                  "css",
                  "dark-mode",
                  "styles.css"
                )}

                <p
                  style={{
                    color: "var(--atomix-text-secondary)",
                    marginTop: "1rem",
                    lineHeight: "1.6",
                  }}
                >
                  Then toggle the theme by setting the data attribute on the
                  document element:
                </p>

                {renderCodeBlock(
                  `// Toggle to dark mode
document.documentElement.setAttribute('data-theme', 'dark');

// Toggle to light mode
document.documentElement.setAttribute('data-theme', 'light');`,
                  "tsx",
                  "theme-toggle",
                  "ThemeToggle.tsx"
                )}
              </section>

              {/* Component Customization */}
              <section style={{ marginBottom: "3rem" }}>
                <h2 style={{ marginBottom: "1rem" }}>
                  Component Customization
                </h2>
                <p
                  style={{
                    color: "var(--atomix-text-secondary)",
                    marginBottom: "1.5rem",
                    lineHeight: "1.6",
                  }}
                >
                  You can also customize individual components by overriding
                  their specific CSS variables:
                </p>

                {renderCodeBlock(
                  `/* Customize all buttons */
.atomix-button {
  --button-border-radius: 8px;
  --button-font-weight: 600;
  --button-transition: all 0.2s ease;
}

/* Customize primary buttons only */
.atomix-button--primary {
  --button-bg: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --button-border: none;
}

/* Customize cards */
.atomix-card {
  --card-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  --card-border-radius: 12px;
}`,
                  "css",
                  "component-custom",
                  "custom-components.css"
                )}
              </section>

              {/* Best Practices */}
              <section>
                <h2 style={{ marginBottom: "1rem" }}>Best Practices</h2>
                <div style={{ display: "grid", gap: "1rem" }}>
                  {[
                    {
                      title: "Use CSS Custom Properties",
                      description:
                        "Always use CSS variables instead of hardcoded values for maintainable themes.",
                    },
                    {
                      title: "Test Accessibility",
                      description:
                        "Ensure sufficient color contrast ratios (4.5:1 minimum) when customizing colors.",
                    },
                    {
                      title: "Organize Your Styles",
                      description:
                        "Keep theme-related CSS in separate files for better organization.",
                    },
                    {
                      title: "Document Your Theme",
                      description:
                        "Create a style guide documenting your custom theme variables and usage.",
                    },
                  ].map((tip, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.75rem",
                        padding: "1rem",
                        backgroundColor: "var(--atomix-bg-secondary)",
                        borderRadius: "8px",
                      }}
                    >
                      <Lightbulb
                        size={20}
                        style={{
                          color: "var(--atomix-info)",
                          marginTop: "0.125rem",
                        }}
                      />
                      <div>
                        <h3
                          style={{
                            margin: "0 0 0.25rem 0",
                            fontSize: "0.925rem",
                          }}
                        >
                          {tip.title}
                        </h3>
                        <p
                          style={{
                            margin: 0,
                            color: "var(--atomix-text-secondary)",
                            fontSize: "0.875rem",
                          }}
                        >
                          {tip.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          ),
        };

      default:
        return {
          title: "Getting Started",
          description: "Learn how to use Atomix",
          content: (
            <div className="getting-started-content">
              <h1>Getting Started</h1>
              <p>Welcome to Atomix documentation!</p>
            </div>
          ),
        };
    }
  };

  const pageContent = getPageContent();

  return (
    <>
      <Helmet>
        <title>{pageContent.title} - Atomix Documentation</title>
        <meta name="description" content={pageContent.description} />
      </Helmet>

      <div className="getting-started-page">{pageContent.content}</div>
    </>
  );
};

export default GettingStartedPage;
