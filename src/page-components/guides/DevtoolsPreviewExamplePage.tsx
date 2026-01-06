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
    Button,
} from "@shohojdhara/atomix";
import Link from "next/link";
// Import from local atomix source
import { ThemePreview } from "@shohojdhara/atomix";
import { createTheme } from "@shohojdhara/atomix";
import styles from "@/styles/PageHero.module.scss";

const DevtoolsPreviewExamplePage: FC = () => {
    // Create a customizable theme
    const [primaryColor, setPrimaryColor] = useState("#7AFFD7");
    const [secondaryColor, setSecondaryColor] = useState("#FF5733");
    const [showDetails, setShowDetails] = useState(true);
    const [showPalette, setShowPalette] = useState(true);
    const [showTypography, setShowTypography] = useState(true);
    const [showSpacing, setShowSpacing] = useState(false);

    const previewTheme = createTheme({
        name: "Preview Theme",
        description: "Customizable theme for preview demonstration",
        palette: {
            primary: { main: primaryColor },
            secondary: { main: secondaryColor },
        },
    });

    return (
        <div>
            <Hero
                className={styles.pageHero}
                backgroundImageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2728"
                title="Theme Preview"
                subtitle="Visualize your theme with live components"
                text="Use the ThemePreview component to see how your theme looks with color palettes, typography samples, and real components."
                alignment="center"
            />

            <Block className="u-pt-8 u-pb-4">
                <SectionIntro
                    title="Interactive Theme Preview"
                    text="The ThemePreview component provides a visual representation of your theme with sample components. Customize the colors below and see changes in real-time."
                />

                {/* Quick Tips */}
                <Row className="u-mt-6">
                    <GridCol md={12}>
                        <Card className="u-p-5">
                            <h2 className="u-fs-xl u-fw-bold u-mb-3">Quick Tips</h2>
                            <div className="u-grid u-gap-3">
                                <Callout variant="info">
                                    <p className="u-fs-sm u-m-0">
                                        <strong>🎨 Color Palette:</strong> View all theme colors with swatches and hex values. Perfect for design reviews and documentation.
                                    </p>
                                </Callout>
                                <Callout variant="success">
                                    <p className="u-fs-sm u-m-0">
                                        <strong>📝 Typography:</strong> See how your font choices look with actual text samples at different sizes and weights.
                                    </p>
                                </Callout>
                                <Callout variant="warning">
                                    <p className="u-fs-sm u-m-0">
                                        <strong>🧩 Sample Components:</strong> Preview buttons, cards, and other components styled with your theme.
                                    </p>
                                </Callout>
                            </div>
                        </Card>
                    </GridCol>
                </Row>

                {/* Color Controls */}
                <Row className="u-mt-6">
                    <GridCol md={12}>
                        <Card className="u-p-5">
                            <h2 className="u-fs-xl u-fw-bold u-mb-4">Customize Colors</h2>
                            <Row>
                                <GridCol md={6}>
                                    <div className="u-mb-3">
                                        <label className="u-fw-semibold u-mb-2 u-d-block">
                                            Primary Color
                                        </label>
                                        <div className="u-flex u-gap-2 u-align-items-center">
                                            <input
                                                type="color"
                                                value={primaryColor}
                                                onChange={(e) => setPrimaryColor(e.target.value)}
                                                style={{ width: "60px", height: "40px" }}
                                            />
                                            <input
                                                type="text"
                                                value={primaryColor}
                                                onChange={(e) => setPrimaryColor(e.target.value)}
                                                className="u-flex-1"
                                                style={{ padding: "8px", border: "1px solid #ddd", borderRadius: "4px" }}
                                            />
                                        </div>
                                    </div>
                                </GridCol>
                                <GridCol md={6}>
                                    <div className="u-mb-3">
                                        <label className="u-fw-semibold u-mb-2 u-d-block">
                                            Secondary Color
                                        </label>
                                        <div className="u-flex u-gap-2 u-align-items-center">
                                            <input
                                                type="color"
                                                value={secondaryColor}
                                                onChange={(e) => setSecondaryColor(e.target.value)}
                                                style={{ width: "60px", height: "40px" }}
                                            />
                                            <input
                                                type="text"
                                                value={secondaryColor}
                                                onChange={(e) => setSecondaryColor(e.target.value)}
                                                className="u-flex-1"
                                                style={{ padding: "8px", border: "1px solid #ddd", borderRadius: "4px" }}
                                            />
                                        </div>
                                    </div>
                                </GridCol>
                            </Row>

                            <h3 className="u-fs-lg u-fw-semibold u-mb-3 u-mt-4">
                                Preview Options
                            </h3>
                            <div className="u-flex u-gap-3 u-flex-wrap">
                                <Button
                                    variant={showDetails ? "primary" : "outline"}
                                    onClick={() => setShowDetails(!showDetails)}
                                    size="sm"
                                >
                                    {showDetails ? "Hide" : "Show"} Details
                                </Button>
                                <Button
                                    variant={showPalette ? "primary" : "outline"}
                                    onClick={() => setShowPalette(!showPalette)}
                                    size="sm"
                                >
                                    {showPalette ? "Hide" : "Show"} Palette
                                </Button>
                                <Button
                                    variant={showTypography ? "primary" : "outline"}
                                    onClick={() => setShowTypography(!showTypography)}
                                    size="sm"
                                >
                                    {showTypography ? "Hide" : "Show"} Typography
                                </Button>
                                <Button
                                    variant={showSpacing ? "primary" : "outline"}
                                    onClick={() => setShowSpacing(!showSpacing)}
                                    size="sm"
                                >
                                    {showSpacing ? "Hide" : "Show"} Spacing
                                </Button>
                            </div>
                        </Card>
                    </GridCol>
                </Row>
            </Block>

            {/* Preview Component */}
            <Block className="u-pt-4 u-pb-6">
                <Row>
                    <GridCol md={12}>
                        <Card className="u-p-6">
                            <h2 className="u-fs-2xl u-fw-bold u-mb-4">
                                Live Preview
                            </h2>
                            <p className="u-text-secondary-emphasis u-mb-6">
                                Adjust the colors above and toggle preview sections to see how your theme looks with different components.
                            </p>

                            {/* The actual ThemePreview component */}
                            <ThemePreview
                                theme={previewTheme}
                                showDetails={showDetails}
                                showPalette={showPalette}
                                showTypography={showTypography}
                                showSpacing={showSpacing}
                            >
                                {/* Custom components */}
                                <div style={{ marginTop: "24px" }}>
                                    <h4>Custom Components</h4>
                                    <p>You can add your own components here to test with the theme.</p>
                                </div>
                            </ThemePreview>
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
                                    href="/docs/guides/devtools/preview"
                                    className="u-text-primary u-fw-medium"
                                >
                                    → Preview Documentation - Complete API reference and usage guide
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
                                    href="/docs/guides/devtools/live-editor-example"
                                    className="u-text-primary u-fw-medium"
                                >
                                    ✨ Try Live Editor - Edit themes in real-time
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

DevtoolsPreviewExamplePage.displayName = "DevtoolsPreviewExamplePage";

export default DevtoolsPreviewExamplePage;
