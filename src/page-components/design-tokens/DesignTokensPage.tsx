"use client";

import { useState, useMemo, FC } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  Button,
  Input,
  Select,
  Hero,
  GridCol,
  Grid,
  Block,
  Card,
  Badge,
  SectionIntro,
} from "@shohojdhara/atomix";
import { designTokens, DesignToken } from "@/data/design-tokens";
import useCopyToClipboard from "@/hooks/useCopyToClipboard";
import styles from "@/styles/PageHero.module.scss";
import componentStyles from "./DesignTokensPage.module.scss";

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

const DesignTokensPage: FC = () => {
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
      (tokenCategory) => tokenCategory.id === category,
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
      token.category === "red-scale" ||
      token.category === "green-scale" ||
      token.category === "blue-scale" ||
      token.category === "yellow-scale" ||
      token.category === "text" ||
      token.category === "background" ||
      token.category === "border" ||
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
          token.category.toLowerCase().includes(query),
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
        token.value === "#fff" ||
        token.value === "#f9fafb" ||
        token.value === "#f3f4f6" ||
        token.value.toLowerCase().includes("white") ||
        cssVar?.includes("primary-bg-subtle") ||
        cssVar?.includes("secondary-bg-subtle") ||
        cssVar?.includes("tertiary-bg-subtle") ||
        cssVar?.includes("light-bg-subtle");

      return (
        <div
          className={`${componentStyles.designTokensPage__colorPreview} ${
            needsBorder
              ? componentStyles["designTokensPage__colorPreview--needsBorder"]
              : ""
          }`}
          style={{ background: colorValue }}
        >
          <div
            className={componentStyles.designTokensPage__colorPreviewGradient}
          />
          <div className={componentStyles.designTokensPage__colorPreviewBadge}>
            <span
              className={`${
                componentStyles.designTokensPage__colorPreviewText
              } ${
                needsBorder
                  ? componentStyles["designTokensPage__colorPreviewText--dark"]
                  : componentStyles["designTokensPage__colorPreviewText--light"]
              }`}
            >
              PREVIEW
            </span>
          </div>
        </div>
      );
    }

    switch (token.category) {
      case "spacing": {
        const spacingValue = cssVar || extractSpacingValue(token.value);
        return (
          <div className={componentStyles.designTokensPage__spacingPreview}>
            <div
              className={componentStyles.designTokensPage__spacingBox}
              style={{
                width: spacingValue,
                height: spacingValue,
              }}
            />
            <div className={componentStyles.designTokensPage__spacingDashed} />
          </div>
        );
      }
      case "shadow":
        return (
          <div
            className={`${componentStyles.designTokensPage__shadowPreview} ${
              token.value === "none"
                ? componentStyles["designTokensPage__shadowPreview--none"]
                : ""
            }`}
            style={{
              boxShadow:
                cssVar || (token.value === "none" ? "none" : token.value),
            }}
          >
            <div className={componentStyles.designTokensPage__shadowGradient} />
            {token.value === "none" && (
              <span className={componentStyles.designTokensPage__shadowText}>
                No shadow
              </span>
            )}
            {token.value !== "none" && (
              <div className={componentStyles.designTokensPage__shadowCard}>
                CARD
              </div>
            )}
          </div>
        );
      case "border-radius": {
        const radiusValue = cssVar || extractRadiusValue(token.value);
        return (
          <div className={componentStyles.designTokensPage__radiusPreview}>
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`${componentStyles.designTokensPage__radiusBox} ${
                  i === 1
                    ? componentStyles["designTokensPage__radiusBox--none"]
                    : ""
                }`}
                style={{
                  borderRadius: i === 1 ? "0" : radiusValue,
                }}
              >
                {i === 1 && "0"}
                {i === 2 && "SM"}
                {i === 3 && "MD"}
                {i === 4 && "LG"}
              </div>
            ))}
          </div>
        );
      }
      case "font-family": {
        const fontFamilyValue = cssVar || token.value;
        return (
          <div className={componentStyles.designTokensPage__typographyPreview}>
            <span
              className={componentStyles.designTokensPage__typographyLarge}
              style={{
                fontFamily: fontFamilyValue,
                fontSize: "24px",
              }}
            >
              Aa
            </span>
            <span
              className={componentStyles.designTokensPage__typographySmall}
              style={{
                fontFamily: fontFamilyValue,
              }}
            >
              The quick brown fox
            </span>
          </div>
        );
      }
      case "font-size": {
        const fontSizeValue = cssVar || extractFontSizeValue(token.value);
        return (
          <div className={componentStyles.designTokensPage__fontSizePreview}>
            <span
              className={componentStyles.designTokensPage__fontSizeText}
              style={{
                fontSize: fontSizeValue,
              }}
            >
              Sample Text
            </span>
            <div className={componentStyles.designTokensPage__fontSizeLabels}>
              <span className={componentStyles.designTokensPage__fontSizeLabel}>
                Small
              </span>
              <span className={componentStyles.designTokensPage__fontSizeLabel}>
                Medium
              </span>
              <span className={componentStyles.designTokensPage__fontSizeLabel}>
                Large
              </span>
            </div>
          </div>
        );
      }
      case "font-weight": {
        // Extract numeric weight value
        const weightMatch = token.value.match(/(\d+)/);
        const weightValue =
          cssVar || (weightMatch ? weightMatch[1] : token.value);
        return (
          <div className={componentStyles.designTokensPage__fontWeightPreview}>
            <span
              className={componentStyles.designTokensPage__fontWeightLarge}
              style={{
                fontWeight: weightValue,
              }}
            >
              Weight
            </span>
            <span
              className={componentStyles.designTokensPage__fontWeightSmall}
              style={{
                fontWeight: weightValue,
              }}
            >
              {token.name}: {token.value}
            </span>
          </div>
        );
      }
      case "line-height": {
        const lineHeightValue = cssVar || token.value;
        return (
          <div className={componentStyles.designTokensPage__lineHeightPreview}>
            <div
              className={componentStyles.designTokensPage__lineHeightText}
              style={{
                lineHeight: lineHeightValue,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        );
      }
      case "form": {
        // Form tokens are colors, so show as color preview
        const formColorValue = cssVar || token.value;
        const needsBorder =
          token.value === "#ffffff" ||
          token.value === "#fff" ||
          token.value === "#f9fafb" ||
          token.value === "#f3f4f6" ||
          token.value.toLowerCase().includes("white") ||
          cssVar?.includes("primary-bg-subtle") ||
          cssVar?.includes("secondary-bg-subtle") ||
          cssVar?.includes("tertiary-bg-subtle") ||
          cssVar?.includes("light-bg-subtle");
        return (
          <div
            className={`${componentStyles.designTokensPage__formPreview} ${
              needsBorder
                ? componentStyles["designTokensPage__formPreview--needsBorder"]
                : ""
            }`}
            style={{
              backgroundColor: formColorValue,
            }}
          >
            <div className={componentStyles.designTokensPage__formBars}>
              <div
                className={`${componentStyles.designTokensPage__formBar} ${componentStyles["designTokensPage__formBar--primary"]}`}
              />
              <div
                className={`${componentStyles.designTokensPage__formBar} ${componentStyles["designTokensPage__formBar--secondary"]}`}
              />
              <div
                className={`${componentStyles.designTokensPage__formBar} ${componentStyles["designTokensPage__formBar--tertiary"]}`}
              />
            </div>
          </div>
        );
      }
      case "z-index": {
        // Extract numeric z-index value
        const zIndexMatch = token.value.match(/(\d+)/);
        const zIndexValue = zIndexMatch ? zIndexMatch[1] : token.value;
        const zIndex = cssVar || zIndexValue;
        return (
          <div className={componentStyles.designTokensPage__zIndexPreview}>
            <div
              className={componentStyles.designTokensPage__zIndexLayer}
              style={{
                zIndex:
                  typeof zIndex === "string" && zIndex.startsWith("var(")
                    ? zIndex
                    : parseInt(zIndex as string) || 0,
              }}
            >
              Layer: {zIndexValue}
            </div>
            <div className={componentStyles.designTokensPage__zIndexBase}>
              Base
            </div>
          </div>
        );
      }
      case "breakpoint": {
        // Extract breakpoint value
        const breakpointValue = cssVar || token.value;
        return (
          <div className={componentStyles.designTokensPage__breakpointPreview}>
            <div className={componentStyles.designTokensPage__breakpointBox}>
              {breakpointValue === "0" ? "Mobile" : breakpointValue}
            </div>
            <span className={componentStyles.designTokensPage__breakpointLabel}>
              {token.name}
            </span>
          </div>
        );
      }
      case "transition": {
        const transitionValue = cssVar || token.value;
        return (
          <div className={componentStyles.designTokensPage__transitionPreview}>
            <div
              className={componentStyles.designTokensPage__transitionBox}
              style={{
                transition: transitionValue,
              }}
            />
            <div className={componentStyles.designTokensPage__transitionLabel}>
              {token.name}
            </div>
          </div>
        );
      }
      case "letter-spacing": {
        const letterSpacingValue = cssVar || token.value;
        return (
          <div
            className={componentStyles.designTokensPage__letterSpacingPreview}
          >
            <span
              className={componentStyles.designTokensPage__letterSpacingLarge}
              style={{
                letterSpacing: letterSpacingValue,
              }}
            >
              Aa
            </span>
            <span
              className={componentStyles.designTokensPage__letterSpacingSmall}
              style={{
                letterSpacing: letterSpacingValue,
              }}
            >
              {token.name}
            </span>
          </div>
        );
      }
      default:
        return (
          <div className={componentStyles.designTokensPage__defaultPreview}>
            <span className={componentStyles.designTokensPage__defaultText}>
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
        className={styles.pageHero}
        actions={
          <Grid className="u-mt-8">
            <GridCol md={8}>
              <Input
                glass
                type="search"
                placeholder="Search tokens by name, description, or value..."
                value={searchQuery}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSearchQuery(e.target.value)
                }
                className="u-w-100"
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
                glass
              />
            </GridCol>
          </Grid>
        }
      />

      <Block spacing="lg">
        {/* Stats Section */}
        {selectedCategory === "all" && (
          <div className="u-mb-8">
            <Grid>
              <GridCol md={4} sm={6}>
                <Card className="u-p-6 u-text-center u-h-100">
                  <div className="u-text-4xl u-font-bold u-mb-2 u-text-primary-emphasis">
                    {filteredTokens.length}
                  </div>
                  <p className="u-text-secondary-emphasis u-mb-0 u-text-lg">
                    Total Tokens
                  </p>
                </Card>
              </GridCol>
              <GridCol md={4} sm={6}>
                <Card className="u-p-6 u-text-center u-h-100">
                  <div className="u-text-4xl u-font-bold u-mb-2 u-text-primary-emphasis">
                    {Object.keys(groupedTokens).length}
                  </div>
                  <p className="u-text-secondary-emphasis u-mb-0 u-text-lg">
                    Categories
                  </p>
                </Card>
              </GridCol>
              <GridCol md={4} sm={6}>
                <Card className="u-p-6 u-text-center u-h-100">
                  <div className="u-text-4xl u-font-bold u-mb-2 u-text-primary-emphasis">
                    {designTokens.length}
                  </div>
                  <p className="u-text-secondary-emphasis u-mb-0 u-text-lg">
                    Token Groups
                  </p>
                </Card>
              </GridCol>
            </Grid>
          </div>
        )}

        {Object.entries(groupedTokens).map(([category, tokens]) => {
          const categoryInfo = designTokens.find(
            (cat) =>
              cat.id === category ||
              cat.title.toLowerCase() === category.toLowerCase(),
          );
          const categoryTitle = categoryInfo?.title || category;
          const categoryDescription = categoryInfo?.description || "";

          return (
            <div key={category} className="u-mb-12">
              <div className="u-flex u-items-center u-justify-between u-mb-6">
                <SectionIntro
                  title={categoryTitle}
                  text={categoryDescription}
                  alignment="left"
                />
                <Badge
                  variant="primary"
                  size="md"
                  label={`${tokens.length} ${
                    tokens.length === 1 ? "token" : "tokens"
                  }`}
                />
              </div>

              <Grid>
                {tokens.map((token: DesignToken) => (
                  <GridCol
                    key={token.name}
                    sm={6}
                    lg={4}
                    xl={3}
                    className="u-mb-4"
                  >
                    <Card className="u-h-100 u-transition-fast u-hover-transform-up u-overflow-hidden">
                      {/* Preview Section */}
                      <div
                        className={`${
                          componentStyles.designTokensPage__preview
                        } ${
                          isColorToken(token) || token.category === "gradient"
                            ? componentStyles[
                                "designTokensPage__preview--color"
                              ]
                            : componentStyles[
                                "designTokensPage__preview--nonColor"
                              ]
                        }`}
                      >
                        {renderTokenPreview(token)}
                      </div>

                      {/* Token Info Section */}
                      <div
                        className={`${componentStyles.designTokensPage__info} u-p-4`}
                      >
                        <div className="u-flex u-items-center u-justify-between u-mb-2">
                          <h3
                            className={`${componentStyles.designTokensPage__tokenName} u-m-0`}
                          >
                            {token.name}
                          </h3>
                          <Badge
                            variant="secondary"
                            size="sm"
                            label={token.category}
                          />
                        </div>

                        <p
                          className={`${componentStyles.designTokensPage__tokenDescription} u-mb-4`}
                        >
                          {token.description}
                        </p>

                        {/* Value and Copy Section */}
                        <div
                          className={
                            componentStyles.designTokensPage__valueSection
                          }
                        >
                          <code
                            className={
                              componentStyles.designTokensPage__valueCode
                            }
                            title={getCSSVariable(token) || token.value}
                          >
                            {getCSSVariable(token) || token.value}
                          </code>
                          <Button
                            variant={
                              isCopied && copiedTokenName === token.name
                                ? "success"
                                : "primary"
                            }
                            size="sm"
                            onClick={() => handleCopy(token)}
                          >
                            {isCopied && copiedTokenName === token.name
                              ? "Copied"
                              : "Copy"}
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </GridCol>
                ))}
              </Grid>
            </div>
          );
        })}
      </Block>
    </>
  );
};

export default DesignTokensPage;
