"use client";

import { FC } from "react";
import {
    Hero,
    SectionIntro,
    Card,
    GridCol,
    Row,
    Block,
    Callout,
} from "@shohojdhara/atomix";
import Link from "next/link";
// Import from local atomix source
import { ThemeInspector } from "@shohojdhara/atomix";
import { createTheme } from "@shohojdhara/atomix";
import styles from "@/styles/PageHero.module.scss";

const DevtoolsInspectorExamplePage: FC = () => {
    // Create a sample theme with various properties for inspection
    const sampleTheme = createTheme({
        name: "Sample Theme",
        description: "A demonstration theme for the inspector",
        author: "Atomix Team",
        version: "1.0.0",
        status: "stable",
        tags: ["demo", "documentation", "example"],
        palette: {
            primary: { main: "#7AFFD7", contrastText: "#000000" },
            secondary: { main: "#FF5733", contrastText: "#FFFFFF" },
            success: { main: "#4CAF50", contrastText: "#FFFFFF" },
            warning: { main: "#FF9800", contrastText: "#000000" },
            error: { main: "#F44336", contrastText: "#FFFFFF" },
            info: { main: "#2196F3", contrastText: "#FFFFFF" },
        },
    });

    return (
        <div>
            <Hero
                className={styles.pageHero}
                backgroundImageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2728"
                title="Theme Inspector"
                subtitle="Inspect, validate, and debug your themes"
                text="Use the ThemeInspector component to analyze theme structure, validate properties, view generated CSS variables, and identify issues."
                alignment="center"
            />

            <Block className="u-pt-8 u-pb-4">
                <SectionIntro
                    title="Interactive Theme Inspector"
                    text="The ThemeInspector provides comprehensive theme analysis with validation, CSS variable generation, and structure inspection. Try it below with a sample theme."
                />

                {/* Quick Tips */}
                <Row className="u-mt-6">
                    <GridCol md={12}>
                        <Card className="u-p-5">
                            <h2 className="u-fs-xl u-fw-bold u-mb-3">Quick Tips</h2>
                            <div className="u-grid u-gap-3">
                                <Callout variant="info">
                                    <p className="u-fs-sm u-m-0">
                                        <strong>📊 Overview Tab:</strong> View theme metadata, statistics, and quick information about your theme including palette colors, typography variants, and custom properties.
                                    </p>
                                </Callout>
                                <Callout variant="success">
                                    <p className="u-fs-sm u-m-0">
                                        <strong>✅ Validation Tab:</strong> Automatically validates your theme for errors, warnings, and accessibility issues. Check contrast ratios and required properties.
                                    </p>
                                </Callout>
                                <Callout variant="warning">
                                    <p className="u-fs-sm u-m-0">
                                        <strong>💻 CSS Variables Tab:</strong> See the generated CSS custom properties for your theme. Copy them directly to use in your stylesheets.
                                    </p>
                                </Callout>
                            </div>
                        </Card>
                    </GridCol>
                </Row>

                {/* Features */}
                <Row className="u-mt-6">
                    <GridCol md={4}>
                        <Card className="u-p-4 u-h-100">
                            <h3 className="u-fs-lg u-fw-bold u-mb-2">🔍 Deep Inspection</h3>
                            <p className="u-fs-sm u-text-secondary-emphasis u-m-0">
                                Explore every aspect of your theme with detailed property inspection, type information, and value visualization.
                            </p>
                        </Card>
                    </GridCol>
                    <GridCol md={4}>
                        <Card className="u-p-4 u-h-100">
                            <h3 className="u-fs-lg u-fw-bold u-mb-2">✅ Validation</h3>
                            <p className="u-fs-sm u-text-secondary-emphasis u-m-0">
                                Automatic validation catches errors, warnings, and accessibility issues before they reach production.
                            </p>
                        </Card>
                    </GridCol>
                    <GridCol md={4}>
                        <Card className="u-p-4 u-h-100">
                            <h3 className="u-fs-lg u-fw-bold u-mb-2">📋 CSS Generation</h3>
                            <p className="u-fs-sm u-text-secondary-emphasis u-m-0">
                                View and copy generated CSS custom properties ready to use in your stylesheets.
                            </p>
                        </Card>
                    </GridCol>
                </Row>
            </Block>

            {/* Inspector Component */}
            <Block className="u-pt-4 u-pb-6">
                <Row>
                    <GridCol md={12}>
                        <Card className="u-p-6">
                            <h2 className="u-fs-2xl u-fw-bold u-mb-4">
                                Try the Inspector
                            </h2>
                            <p className="u-text-secondary-emphasis u-mb-6">
                                Explore the sample theme below using the inspector tabs. Click through Overview, Validation, CSS Variables, and Structure to see different aspects of the theme.
                            </p>

                            {/* The actual ThemeInspector component */}
                            <ThemeInspector
                                theme={sampleTheme}
                                showValidation={true}
                                showCSSVariables={true}
                                showStructure={true}
                            />
                        </Card>
                    </GridCol>
                </Row>
            </Block>

            {/* Use Cases */}
            <Block className="u-pt-6 u-pb-6">
                <Row>
                    <GridCol md={12}>
                        <Card className="u-p-6">
                            <h2 className="u-fs-2xl u-fw-bold u-mb-4">Common Use Cases</h2>

                            <div className="u-mb-4">
                                <h3 className="u-fs-lg u-fw-semibold u-mb-2">
                                    1. Theme Development
                                </h3>
                                <p className="u-fs-sm u-text-secondary-emphasis">
                                    Use the inspector during theme creation to validate properties, check accessibility, and ensure all required values are present.
                                </p>
                            </div>

                            <div className="u-mb-4">
                                <h3 className="u-fs-lg u-fw-semibold u-mb-2">
                                    2. Debugging Issues
                                </h3>
                                <p className="u-fs-sm u-text-secondary-emphasis">
                                    When themes don't work as expected, use the inspector to identify missing properties, invalid values, or type mismatches.
                                </p>
                            </div>

                            <div className="u-mb-4">
                                <h3 className="u-fs-lg u-fw-semibold u-mb-2">
                                    3. CSS Variable Generation
                                </h3>
                                <p className="u-fs-sm u-text-secondary-emphasis">
                                    Generate and copy CSS custom properties to use in your stylesheets, ensuring consistency between JS and CSS.
                                </p>
                            </div>

                            <div>
                                <h3 className="u-fs-lg u-fw-semibold u-mb-2">
                                    4. Accessibility Audits
                                </h3>
                                <p className="u-fs-sm u-text-secondary-emphasis">
                                    Check color contrast ratios and identify potential accessibility issues before deployment.
                                </p>
                            </div>
                        </Card>
                    </GridCol>
                </Row>
            </Block>

            {/* Documentation Links */}
            <Block className="u-pt-6 u-pb-8">
                <Row>
                    <GridCol md={12}>
                        <Card className="u-p-6">
                            <h2 className="u-fs-2xl u-fw-bold u-mb-4">Learn More</h2>
                            <p className="u-text-secondary-emphasis u-mb-4">
                                Explore the devtools documentation:
                            </p>
                            <div className="u-grid u-gap-3">
                                <Link
                                    href="/docs/guides/devtools/inspector"
                                    className="u-text-primary u-fw-medium"
                                >
                                    → Inspector Documentation - Complete API reference and usage guide
                                </Link>
                                <Link
                                    href="/docs/guides/devtools"
                                    className="u-text-primary u-fw-medium"
                                >
                                    → Devtools Overview - All development tools
                                </Link>
                                <Link
                                    href="/docs/guides/devtools/live-editor-example"
                                    className="u-text-primary u-fw-medium"
                                >
                                    ✨ Try Live Editor - Edit themes in real-time
                                </Link>
                                <Link
                                    href="/docs/guides/devtools/preview-example"
                                    className="u-text-primary u-fw-medium"
                                >
                                    ✨ Try Preview - Preview themes with sample components
                                </Link>
                                <Link
                                    href="/docs/guides/devtools/comparator-example"
                                    className="u-text-primary u-fw-medium"
                                >
                                    ✨ Try Comparator - Compare theme versions
                                </Link>
                            </div>
                        </Card>
                    </GridCol>
                </Row>
            </Block>
        </div>
    );
};

DevtoolsInspectorExamplePage.displayName = "DevtoolsInspectorExamplePage";

export default DevtoolsInspectorExamplePage;
