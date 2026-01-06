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
import { ThemeComparator } from "@shohojdhara/atomix";
import { createTheme } from "@shohojdhara/atomix";
import styles from "@/styles/PageHero.module.scss";

const DevtoolsComparatorExamplePage: FC = () => {
    // Create two theme versions for comparison
    const themeV1 = createTheme({
        name: "My Theme",
        version: "1.0.0",
        description: "Original theme version",
        palette: {
            primary: { main: "#2196F3" },
            secondary: { main: "#FF5722" },
            success: { main: "#4CAF50" },
        },
    });

    const themeV2 = createTheme({
        name: "My Theme",
        version: "2.0.0",
        description: "Updated theme with new colors",
        palette: {
            primary: { main: "#7AFFD7" }, // Changed
            secondary: { main: "#FF5722" }, // Same
            success: { main: "#66BB6A" }, // Changed
            warning: { main: "#FF9800" }, // Added
        },
    });

    return (
        <div>
            <Hero
                className={styles.pageHero}
                backgroundImageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2728"
                title="Theme Comparator"
                subtitle="Compare theme versions side-by-side"
                text="Use the ThemeComparator component to identify differences between theme versions, track changes, and document breaking changes."
                alignment="center"
            />

            <Block className="u-pt-8 u-pb-4">
                <SectionIntro
                    title="Interactive Theme Comparator"
                    text="The ThemeComparator highlights differences between two themes, showing what's been added, removed, or changed. Perfect for version control and migration planning."
                />

                {/* Quick Tips */}
                <Row className="u-mt-6">
                    <GridCol md={12}>
                        <Card className="u-p-5">
                            <h2 className="u-fs-xl u-fw-bold u-mb-3">Quick Tips</h2>
                            <div className="u-grid u-gap-3">
                                <Callout variant="info">
                                    <p className="u-fs-sm u-m-0">
                                        <strong>📊 Statistics Dashboard:</strong> See at a glance how many properties were added, removed, or changed between versions.
                                    </p>
                                </Callout>
                                <Callout variant="success">
                                    <p className="u-fs-sm u-m-0">
                                        <strong>✅ Added Properties:</strong> Green badges indicate new properties added in the second theme version.
                                    </p>
                                </Callout>
                                <Callout variant="warning">
                                    <p className="u-fs-sm u-m-0">
                                        <strong>🔄 Changed Properties:</strong> Orange badges show properties that exist in both but have different values.
                                    </p>
                                </Callout>
                                <Callout variant="error">
                                    <p className="u-fs-sm u-m-0">
                                        <strong>❌ Removed Properties:</strong> Red badges highlight properties that were removed - potential breaking changes!
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
                            <h3 className="u-fs-lg u-fw-bold u-mb-2">🔍 Deep Comparison</h3>
                            <p className="u-fs-sm u-text-secondary-emphasis u-m-0">
                                Recursively compares all theme properties, including nested objects and arrays.
                            </p>
                        </Card>
                    </GridCol>
                    <GridCol md={4}>
                        <Card className="u-p-4 u-h-100">
                            <h3 className="u-fs-lg u-fw-bold u-mb-2">📈 Statistics</h3>
                            <p className="u-fs-sm u-text-secondary-emphasis u-m-0">
                                Visual dashboard showing total differences and breakdown by type (added, removed, changed).
                            </p>
                        </Card>
                    </GridCol>
                    <GridCol md={4}>
                        <Card className="u-p-4 u-h-100">
                            <h3 className="u-fs-lg u-fw-bold u-mb-2">🎯 Side-by-Side</h3>
                            <p className="u-fs-sm u-text-secondary-emphasis u-m-0">
                                View old and new values side-by-side for easy comparison and review.
                            </p>
                        </Card>
                    </GridCol>
                </Row>
            </Block>

            {/* Comparator Component */}
            <Block className="u-pt-4 u-pb-6">
                <Row>
                    <GridCol md={12}>
                        <Card className="u-p-6">
                            <h2 className="u-fs-2xl u-fw-bold u-mb-4">
                                Compare Theme Versions
                            </h2>
                            <p className="u-text-secondary-emphasis u-mb-6">
                                Below is a comparison between version 1.0.0 and 2.0.0 of a sample theme. Notice the color changes and the new warning color added in v2.
                            </p>

                            {/* The actual ThemeComparator component */}
                            <ThemeComparator
                                themeA={themeV1}
                                themeB={themeV2}
                                showOnlyDifferences={false}
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
                                    1. Version Control
                                </h3>
                                <p className="u-fs-sm u-text-secondary-emphasis">
                                    Compare theme versions before releasing updates. Identify all changes and ensure they're intentional.
                                </p>
                            </div>

                            <div className="u-mb-4">
                                <h3 className="u-fs-lg u-fw-semibold u-mb-2">
                                    2. Migration Planning
                                </h3>
                                <p className="u-fs-sm u-text-secondary-emphasis">
                                    When upgrading themes, use the comparator to identify breaking changes and plan migration steps.
                                </p>
                            </div>

                            <div className="u-mb-4">
                                <h3 className="u-fs-lg u-fw-semibold u-mb-2">
                                    3. Documentation
                                </h3>
                                <p className="u-fs-sm u-text-secondary-emphasis">
                                    Generate changelogs by documenting differences between theme versions for release notes.
                                </p>
                            </div>

                            <div>
                                <h3 className="u-fs-lg u-fw-semibold u-mb-2">
                                    4. Code Review
                                </h3>
                                <p className="u-fs-sm u-text-secondary-emphasis">
                                    Review theme changes during pull requests to ensure quality and consistency.
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
                                    href="/docs/guides/devtools/comparator"
                                    className="u-text-primary u-fw-medium"
                                >
                                    → Comparator Documentation - Complete API reference and usage guide
                                </Link>
                                <Link
                                    href="/docs/guides/devtools"
                                    className="u-text-primary u-fw-medium"
                                >
                                    → Devtools Overview - All development tools
                                </Link>
                                <Link
                                    href="/docs/guides/devtools/inspector-example"
                                    className="u-text-primary u-fw-medium"
                                >
                                    ✨ Try Inspector - Validate and debug themes
                                </Link>
                                <Link
                                    href="/docs/guides/devtools/preview-example"
                                    className="u-text-primary u-fw-medium"
                                >
                                    ✨ Try Preview - Preview themes with sample components
                                </Link>
                                <Link
                                    href="/docs/guides/devtools/live-editor-example"
                                    className="u-text-primary u-fw-medium"
                                >
                                    ✨ Try Live Editor - Edit themes in real-time
                                </Link>
                            </div>
                        </Card>
                    </GridCol>
                </Row>
            </Block>
        </div>
    );
};

DevtoolsComparatorExamplePage.displayName = "DevtoolsComparatorExamplePage";

export default DevtoolsComparatorExamplePage;
