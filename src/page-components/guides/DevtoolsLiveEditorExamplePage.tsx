"use client";

import { FC, useState } from "react";
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
// Import from local atomix source using relative path from src/page-components/guides
import { ThemeLiveEditor } from "@shohojdhara/atomix";
import { createTheme } from "@shohojdhara/atomix";
import styles from "@/styles/PageHero.module.scss";

const DevtoolsLiveEditorExamplePage: FC = () => {
    // Create an initial theme for the editor
    const [theme, setTheme] = useState(() =>
        createTheme({
            name: "My Custom Theme",
            palette: {
                primary: { main: "#7AFFD7" },
                secondary: { main: "#FF5733" },
                success: { main: "#4CAF50" },
                warning: { main: "#FF9800" },
                error: { main: "#F44336" },
                info: { main: "#2196F3" },
            },
        })
    );

    const handleThemeChange = (newTheme: any) => {
        setTheme(newTheme);
        console.log("Theme updated:", newTheme);
    };

    return (
        <div>
            <Hero
                className={styles.pageHero}
                backgroundImageSrc="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2728"
                title="Live Theme Editor"
                subtitle="Professional theme creation and customization tool"
                text="Create, customize, and export themes in real-time using the Atomix ThemeLiveEditor component. A production-ready theme editor for developers and designers."
                alignment="center"
            />

            <Block className="u-pt-8 u-pb-4">
                <SectionIntro
                    title="Interactive Theme Editor"
                    text="Use the ThemeLiveEditor component from Atomix devtools to create and customize themes. All changes are applied in real-time, and you can export your theme for use in production."
                />

                {/* Quick Tips */}
                <Row className="u-mt-6">
                    <GridCol md={12}>
                        <Card className="u-p-5">
                            <h2 className="u-fs-xl u-fw-bold u-mb-3">Quick Tips</h2>
                            <div className="u-grid u-gap-3">
                                <Callout variant="info">
                                    <p className="u-fs-sm u-m-0">
                                        <strong>💡 Visual & JSON Editing:</strong> Switch between visual controls and JSON editor for maximum flexibility. The visual editor is great for quick adjustments, while JSON mode gives you full control.
                                    </p>
                                </Callout>
                                <Callout variant="success">
                                    <p className="u-fs-sm u-m-0">
                                        <strong>⚡ Real-Time Preview:</strong> See your changes instantly! Every modification is reflected immediately in the preview, making it easy to experiment and iterate.
                                    </p>
                                </Callout>
                                <Callout variant="warning">
                                    <p className="u-fs-sm u-m-0">
                                        <strong>💾 Export Your Work:</strong> Use the export button to download your customized theme as JSON. You can then import it into your projects using the theme configuration.
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
                            <h3 className="u-fs-lg u-fw-bold u-mb-2">🎨 Visual Editor</h3>
                            <p className="u-fs-sm u-text-secondary-emphasis u-m-0">
                                Edit theme properties with intuitive color pickers, font selectors, and size inputs. Perfect for quick adjustments.
                            </p>
                        </Card>
                    </GridCol>
                    <GridCol md={4}>
                        <Card className="u-p-4 u-h-100">
                            <h3 className="u-fs-lg u-fw-bold u-mb-2">📝 JSON Editor</h3>
                            <p className="u-fs-sm u-text-secondary-emphasis u-m-0">
                                Advanced editing with syntax highlighting, auto-completion, and real-time validation. Full control over your theme.
                            </p>
                        </Card>
                    </GridCol>
                    <GridCol md={4}>
                        <Card className="u-p-4 u-h-100">
                            <h3 className="u-fs-lg u-fw-bold u-mb-2">💾 Export & Share</h3>
                            <p className="u-fs-sm u-text-secondary-emphasis u-m-0">
                                Download your theme as JSON or copy to clipboard. Share with your team or integrate into your projects.
                            </p>
                        </Card>
                    </GridCol>
                </Row>
            </Block>

            {/* Live Editor Component */}
            <Block className="u-pt-4 u-pb-6">
                <Row>
                    <GridCol md={12}>
                        <Card className="u-p-6">
                            <h2 className="u-fs-2xl u-fw-bold u-mb-4">
                                Try the Live Editor
                            </h2>
                            <p className="u-text-secondary-emphasis u-mb-6">
                                Start editing the theme below. Your changes will be reflected in
                                real-time. Use the visual editor for quick adjustments or switch
                                to JSON mode for advanced customization.
                            </p>

                            {/* The actual ThemeLiveEditor component */}
                            <ThemeLiveEditor
                                initialTheme={theme}
                                onChange={handleThemeChange}
                            />
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
                                Explore the devtools documentation to learn more about theme
                                development:
                            </p>
                            <div className="u-grid u-gap-3">
                                <Link
                                    href="/docs/guides/devtools"
                                    className="u-text-primary u-fw-medium"
                                >
                                    → Devtools Overview - Complete guide to all development tools
                                </Link>
                                <Link
                                    href="/docs/guides/devtools/live-editor"
                                    className="u-text-primary u-fw-medium"
                                >
                                    → Live Editor Documentation - API reference and advanced usage
                                </Link>
                                <Link
                                    href="/docs/guides/devtools/inspector"
                                    className="u-text-primary u-fw-medium"
                                >
                                    → Theme Inspector - Validate and debug your themes
                                </Link>
                                <Link
                                    href="/docs/guides/devtools/preview"
                                    className="u-text-primary u-fw-medium"
                                >
                                    → Theme Preview - Test themes with sample components
                                </Link>
                                <Link
                                    href="/docs/guides/theming"
                                    className="u-text-primary u-fw-medium"
                                >
                                    → Theming Guide - Complete theming documentation
                                </Link>
                            </div>
                        </Card>
                    </GridCol>
                </Row>
            </Block>
        </div>
    );
};

DevtoolsLiveEditorExamplePage.displayName = "DevtoolsLiveEditorExamplePage";

export default DevtoolsLiveEditorExamplePage;
