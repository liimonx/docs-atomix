"use client";

import React, { useState, useMemo } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  Card,
  Button,
  Input,
  Select,
  Hero,
  GridCol,
  Grid,
  Block,
} from "@shohojdhara/atomix";
import { designTokens, DesignToken } from "@/data/design-tokens";
import useCopyToClipboard from "@/hooks/useCopyToClipboard";
import { GlassProps } from "@/types/atomix-components";

// Helper function to get CSS variable name from token
const getCSSVariable = (token: DesignToken): string | null => {
  return token.cssVariable || null;
};

// Helper function to extract spacing value from strings like "0.25rem (4px)"
const extractSpacingValue = (value: string): string => {
  // Extract "0.25rem" from "0.25rem (4px)" or return value as-is
  const remMatch = value.match(/([\d.]+rem)/);
  if (remMatch) return remMatch[1];

  // Try to extract px value if no rem found
  const pxMatch = value.match(/([\d.]+px)/);
  if (pxMatch) return pxMatch[1];

  return value;
};

// Helper function to extract border-radius value
const extractRadiusValue = (value: string): string => {
  // Handle special cases
  if (value === "0") return "0";
  if (value === "9999px") return "9999px";

  // Extract rem/px value
  const match = value.match(/([\d.]+(?:rem|px))/);
  return match ? match[1] : "0";
};

// Helper function to extract font-size value
const extractFontSizeValue = (value: string): string => {
  // Extract "0.75rem" from "0.75rem (12px)" or return value as-is
  const remMatch = value.match(/([\d.]+rem)/);
  if (remMatch) return remMatch[1];

  // Try to extract px value if no rem found
  const pxMatch = value.match(/([\d.]+px)/);
  if (pxMatch) return pxMatch[1];

  return value;
};

const DesignTokensPage: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState("");
  const [isCopied, copy] = useCopyToClipboard();
  const [copiedTokenName, setCopiedTokenName] = useState<string | null>(null);

  // Extract category from URL
  const getCategoryFromUrl = () => {
    const pathParts = pathname.split("/");
    const category = pathParts[pathParts.length - 1];

    // Handle "all" explicitly
    if (category === "all") {
      return "all";
    }

    // Check if it's a valid category
    const validCategory = designTokens.find(
      (tokenCategory) => tokenCategory.id === category
    );
    return validCategory ? category : "all";
  };

  const selectedCategory = getCategoryFromUrl();

  // Check if token is a color token
  const isColorToken = (token: DesignToken): boolean => {
    return (
      token.category === "brand" ||
      token.category === "semantic" ||
      token.category === "neutral" ||
      token.category === "primary-scale" ||
      token.category === "text" ||
      token.category === "background" ||
      token.category === "hover" ||
      token.value.startsWith("#") ||
      token.value.startsWith("rgb") ||
      token.value.startsWith("rgba")
    );
  };

  const handleCopy = (token: DesignToken) => {
    const cssVar = getCSSVariable(token);
    const valueToCopy = cssVar || token.value;
    copy(valueToCopy).then((success) => {
      if (success) {
        setCopiedTokenName(token.name);
        setTimeout(() => setCopiedTokenName(null), 2000);
      }
    });
  };

  const filteredTokens = useMemo(() => {
    let tokens: DesignToken[] = [];

    if (selectedCategory !== "all") {
      const category = designTokens.find((cat) => cat.id === selectedCategory);
      if (category) {
        tokens = [...category.tokens];
      }
    } else {
      tokens = designTokens.flatMap((category) => category.tokens);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      tokens = tokens.filter(
        (token) =>
          token.name.toLowerCase().includes(query) ||
          token.description.toLowerCase().includes(query) ||
          token.value.toLowerCase().includes(query) ||
          token.category.toLowerCase().includes(query)
      );
    }

    return tokens;
  }, [searchQuery, selectedCategory]);

  const groupedTokens = useMemo(() => {
    const groups: Record<string, DesignToken[]> = {};
    filteredTokens.forEach((token) => {
      if (!groups[token.category]) {
        groups[token.category] = [];
      }
      groups[token.category].push(token);
    });
    return groups;
  }, [filteredTokens]);

  const categories = [
    { value: "all", label: "All Tokens" },
    ...designTokens.map((tokenCategory) => ({
      value: tokenCategory.id,
      label: tokenCategory.title,
    })),
  ];

  // Get page title based on selected category
  const getPageTitle = () => {
    if (selectedCategory === "all") {
      return "All Design Tokens";
    }
    const category = designTokens.find((cat) => cat.id === selectedCategory);
    return category ? `${category.title} Tokens` : "Design Tokens";
  };

  const renderTokenPreview = (token: DesignToken) => {
    const cssVar = getCSSVariable(token);

    // Check if token is a gradient
    const isGradient =
      token.category === "gradient" || token.value.includes("gradient");

    // Handle colors and gradients
    if (isColorToken(token) || isGradient) {
      // For colors, prefer actual hex/rgb value, fallback to CSS variable
      let colorValue: string;
      if (isGradient) {
        colorValue = token.value;
      } else if (token.value.startsWith("#") || token.value.startsWith("rgb")) {
        colorValue = token.value;
      } else if (cssVar) {
        // Use CSS variable directly
        colorValue = cssVar;
      } else {
        colorValue = token.value;
      }

      // Determine if we need a border for light colors
      const needsBorder = 
        token.value === "#ffffff" ||
        token.value === "#f9fafb" ||
        token.value === "#f3f4f6" ||
        token.value.toLowerCase().includes("white") ||
        cssVar?.includes("primary-bg-subtle") ||
        cssVar?.includes("secondary-bg-subtle") ||
        cssVar?.includes("tertiary-bg-subtle");

      return (
        <div
          style={{
            width: "100%",
            height: "100%",
            minHeight: "160px",
            background: colorValue,
            border: needsBorder ? "1px solid var(--atomix-primary-border-subtle)" : "none",
          }}
        />
      );
    }

    switch (token.category) {
      case "spacing": {
        const spacingValue = cssVar || extractSpacingValue(token.value);
        return (
          <div
            style={{
              width: "100%",
              height: "100%",
              minHeight: "160px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: spacingValue,
                height: spacingValue,
                minWidth: "24px",
                minHeight: "24px",
                maxWidth: "80px",
                maxHeight: "80px",
                backgroundColor: "var(--atomix-brand-bg-subtle)",
                borderRadius: "var(--atomix-border-radius-sm)",
                border: "2px solid var(--atomix-primary-border-subtle)",
              }}
            />
          </div>
        );
      }
      case "shadow":
        return (
          <div
            style={{
              width: "100%",
              height: "100%",
              minHeight: "160px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "var(--atomix-secondary-bg-subtle)",
              borderRadius: "var(--atomix-border-radius-md)",
              boxShadow: cssVar || (token.value === "none" ? "none" : token.value),
              border: token.value === "none"
                ? "2px dashed var(--atomix-primary-border-subtle)"
                : "1px solid var(--atomix-primary-border-subtle)",
            }}
          >
            {token.value === "none" && (
              <span style={{ 
                color: "var(--atomix-primary-text-tertiary)",
                fontSize: "var(--atomix-font-size-sm)",
                fontWeight: "var(--atomix-font-weight-medium)",
              }}>
                No shadow
              </span>
            )}
          </div>
        );
      case "border-radius": {
        const radiusValue = cssVar || extractRadiusValue(token.value);
        return (
          <div
            style={{
              width: "100%",
              height: "100%",
              minHeight: "160px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "var(--atomix-brand-bg-subtle)",
              borderRadius: radiusValue,
              border: "2px solid var(--atomix-primary-border-subtle)",
            }}
          />
        );
      }
      case "font-family": {
        const fontFamilyValue = cssVar || token.value;
        return (
          <div
            style={{
              width: "100%",
              height: "100%",
              minHeight: "160px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "var(--atomix-secondary-bg-subtle)",
              borderRadius: "var(--atomix-border-radius-md)",
            }}
          >
            <span
              style={{
                fontFamily: fontFamilyValue,
                fontSize: "var(--atomix-font-size-2xl)",
                color: "var(--atomix-primary-text-emphasis)",
                fontWeight: "var(--atomix-font-weight-semibold)",
                lineHeight: "1",
              }}
            >
              Aa
            </span>
          </div>
        );
      }
      case "font-size": {
        const fontSizeValue = cssVar || extractFontSizeValue(token.value);
        return (
          <div
            style={{
              width: "100%",
              height: "100%",
              minHeight: "160px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "var(--atomix-secondary-bg-subtle)",
              borderRadius: "var(--atomix-border-radius-md)",
            }}
          >
            <span
              style={{
                fontSize: fontSizeValue,
                color: "var(--atomix-primary-text-emphasis)",
                fontWeight: "var(--atomix-font-weight-semibold)",
                lineHeight: "1",
              }}
            >
              Aa
            </span>
          </div>
        );
      }
      case "font-weight": {
        // Extract numeric weight value
        const weightMatch = token.value.match(/(\d+)/);
        const weightValue = cssVar || (weightMatch ? weightMatch[1] : token.value);
        return (
          <div
            style={{
              width: "100%",
              height: "100%",
              minHeight: "160px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "var(--atomix-secondary-bg-subtle)",
              borderRadius: "var(--atomix-border-radius-md)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--atomix-font-family-base)",
                fontWeight: weightValue,
                fontSize: "var(--atomix-font-size-2xl)",
                color: "var(--atomix-primary-text-emphasis)",
                lineHeight: "1",
              }}
            >
              Aa
            </span>
          </div>
        );
      }
      case "line-height": {
        const lineHeightValue = cssVar || token.value;
        return (
          <div
            style={{
              width: "100%",
              height: "100%",
              minHeight: "160px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "var(--atomix-secondary-bg-subtle)",
              borderRadius: "var(--atomix-border-radius-md)",
              padding: "var(--atomix-spacing-4)",
            }}
          >
            <div
              style={{
                lineHeight: lineHeightValue,
                fontSize: "var(--atomix-font-size-base)",
                color: "var(--atomix-primary-text-emphasis)",
                textAlign: "center",
                fontWeight: "var(--atomix-font-weight-medium)",
              }}
            >
              Aa Bb Cc
              <br />
              Dd Ee Ff
            </div>
          </div>
        );
      }
      case "form": {
        // Form tokens are colors, so show as color preview
        const formColorValue = cssVar || token.value;
        const needsBorder = 
          token.value === "#ffffff" ||
          token.value === "#f9fafb" ||
          token.value === "#f3f4f6" ||
          token.value.toLowerCase().includes("white") ||
          cssVar?.includes("primary-bg-subtle") ||
          cssVar?.includes("secondary-bg-subtle") ||
          cssVar?.includes("tertiary-bg-subtle");
        return (
          <div
            style={{
              width: "100%",
              height: "100%",
              minHeight: "160px",
              backgroundColor: formColorValue,
              border: needsBorder ? "1px solid var(--atomix-primary-border-subtle)" : "none",
            }}
          />
        );
      }
      case "z-index": {
        // Extract numeric z-index value
        const zIndexMatch = token.value.match(/(\d+)/);
        const zIndexValue = zIndexMatch ? zIndexMatch[1] : token.value;
        const zIndex = cssVar || zIndexValue;
        return (
          <div
            style={{
              width: "100%",
              height: "100%",
              minHeight: "160px",
              position: "relative",
              backgroundColor: "var(--atomix-secondary-bg-subtle)",
              borderRadius: "var(--atomix-border-radius-md)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "70%",
                height: "70%",
                backgroundColor: "var(--atomix-brand-bg-subtle)",
                borderRadius: "var(--atomix-border-radius-sm)",
                border: "2px solid var(--atomix-primary-border-subtle)",
                zIndex: typeof zIndex === "string" && zIndex.startsWith("var(") ? zIndex : parseInt(zIndex as string) || 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "var(--atomix-font-size-sm)",
                fontWeight: "var(--atomix-font-weight-semibold)",
                color: "var(--atomix-primary-text-emphasis)",
              }}
            >
              z: {zIndexValue}
            </div>
          </div>
        );
      }
      default:
        return (
          <div
            style={{
              width: "100%",
              height: "100%",
              minHeight: "160px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "var(--atomix-secondary-bg-subtle)",
              borderRadius: "var(--atomix-border-radius-md)",
            }}
          >
            <span style={{ 
              fontSize: "var(--atomix-font-size-lg)",
              fontWeight: "var(--atomix-font-weight-semibold)",
              color: "var(--atomix-primary-text-emphasis)",
            }}>
              {token.category.slice(0, 2).toUpperCase()}
            </span>
          </div>
        );
    }
  };

  return (
    <>
      <Hero
        title={getPageTitle()}
        text={
          selectedCategory === "all"
            ? "Browse all design tokens from every category in one place"
            : "The design system's visual language, expressed through code"
        }
        alignment="center"
        glass={
          {
            displacementScale: 30,
            blurAmount: 5,
            elasticity: 0,
            padding: "20px",
            cornerRadius: 30,
          } as GlassProps
        }
        className="u-pt-32 u-pb-16"
        actions={
          <Grid className="u-mt-8">
            <GridCol md={8}>
              <Input
                glass={{
                  elasticity: 0,
                }}
                type="search"
                placeholder="Search tokens..."
                value={searchQuery}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSearchQuery(e.target.value)
                }
              />
            </GridCol>
            <GridCol md={4}>
              <Select
                className="u-w-100"
                value={selectedCategory}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  router.push(`/docs/design-tokens/${e.target.value}`);
                }}
                options={categories}
              />
            </GridCol>
          </Grid>
        }
        backgroundImageSrc="https://images.unsplash.com/photo-1760976180663-946ff68fa64c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1034"
      />

      <Block className="u-mt-8">
        {Object.entries(groupedTokens).map(([category, tokens]) => (
          <div key={category} className="u-mb-8">
            <h2 className="u-fs-lg u-fw-semibold u-mb-2">{category}</h2>

            <Grid>
              {tokens.map((token: DesignToken) => (
                <GridCol
                  key={token.name}
                  sm={6}
                  lg={4}
                  xl={3}
                  className="u-mb-4"
                >
                  <Card className="u-p-0 u-border u-border-solid u-rounded-lg u-h-100 u-overflow-hidden">
                    <div className="u-d-flex u-flex-direction-column">
                      {/* Preview Section */}
                      <div
                        style={{
                          minHeight: "160px",
                          padding: 0,
                          backgroundColor: isColorToken(token) || token.category === "gradient"
                            ? "transparent"
                            : "var(--atomix-secondary-bg-subtle)",
                          borderBottom: "1px solid var(--atomix-primary-border-subtle)",
                          overflow: "hidden",
                          position: "relative",
                        }}
                      >
                        {renderTokenPreview(token)}
                      </div>

                      {/* Token Info Section */}
                      <div className="u-flex-grow-1 u-p-4">
                        {isColorToken(token) && (
                          <div
                            style={{
                              width: "100%",
                              height: "48px",
                              marginBottom: "var(--atomix-spacing-3)",
                              backgroundColor: getCSSVariable(token) || token.value,
                              borderRadius: "var(--atomix-border-radius-sm)",
                              border: "1px solid var(--atomix-primary-border-subtle)",
                            }}
                          />
                        )}
                        <h3 
                          className="u-fs-base u-fw-semibold"
                          style={{
                            marginTop: 0,
                            marginBottom: "var(--atomix-spacing-2)",
                            color: "var(--atomix-primary-text-emphasis)",
                          }}
                        >
                          {token.name}
                        </h3>
                        <p
                          className="u-m-0 u-fs-sm u-mb-4"
                          style={{
                            color: "var(--atomix-primary-text-secondary)",
                            lineHeight: "var(--atomix-line-height-relaxed)",
                            marginBottom: "var(--atomix-spacing-4)",
                          }}
                        >
                          {token.description}
                        </p>

                        {/* Value and Copy Section */}
                        <div 
                          className="u-d-flex u-align-items-center u-justify-content-between"
                          style={{
                            gap: "var(--atomix-spacing-2)",
                          }}
                        >
                          <code
                            className="u-fs-xs u-flex-grow-1"
                            style={{
                              padding: "var(--atomix-spacing-2) var(--atomix-spacing-3)",
                              backgroundColor: "var(--atomix-primary-bg-subtle)",
                              borderRadius: "var(--atomix-border-radius-sm)",
                              border: "1px solid var(--atomix-primary-border-subtle)",
                              wordBreak: "break-all",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              display: "block",
                              color: "var(--atomix-primary-text-emphasis)",
                              fontFamily: "var(--atomix-font-family-mono)",
                            }}
                            title={getCSSVariable(token) || token.value}
                          >
                            {getCSSVariable(token) || token.value}
                          </code>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleCopy(token)}
                          >
                            {isCopied && copiedTokenName === token.name
                              ? "Copied!"
                              : "Copy"}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </GridCol>
              ))}
            </Grid>
          </div>
        ))}
      </Block>
    </>
  );
};

export default DesignTokensPage;
