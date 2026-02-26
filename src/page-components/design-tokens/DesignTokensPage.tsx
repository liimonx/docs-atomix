"use client";

import { useState, useMemo, FC } from "react";
import { usePathname } from "next/navigation";
import {
  Button,
  Hero,
  GridCol,
  Grid,
  Block,
  Card,
  Badge,
  Breadcrumb,
  Icon,
} from "@shohojdhara/atomix";
import { designTokens, DesignToken } from "@/data/design-tokens";
import useCopyToClipboard from "@/hooks/useCopyToClipboard";

// Helper function to get CSS variable name from token
const getCSSVariable = (token: DesignToken): string | null => {
  return token.cssVariable || null;
};

// Helper function to extract spacing value from strings like "0.25rem (4px)"
const extractSpacingValue = (value: string): string => {
  const remMatch = value.match(/([\d.]+rem)/);
  if (remMatch) return remMatch[1];
  const pxMatch = value.match(/([\d.]+px)/);
  if (pxMatch) return pxMatch[1];
  return value;
};

// Helper function to extract border-radius value
const extractRadiusValue = (value: string): string => {
  if (value === "0") return "0";
  if (value === "9999px") return "9999px";
  const match = value.match(/([\d.]+(?:rem|px))/);
  return match ? match[1] : "0";
};

// Helper function to extract font-size value
const extractFontSizeValue = (value: string): string => {
  const remMatch = value.match(/([\d.]+rem)/);
  if (remMatch) return remMatch[1];
  const pxMatch = value.match(/([\d.]+px)/);
  if (pxMatch) return pxMatch[1];
  return value;
};

const DesignTokensPage: FC = () => {
  const pathname = usePathname();
  const [searchQuery] = useState("");
  const [isCopied, copy] = useCopyToClipboard();
  const [copiedTokenName, setCopiedTokenName] = useState<string | null>(null);

  const getCategoryFromUrl = () => {
    const pathParts = pathname.split("/");
    const category = pathParts[pathParts.length - 1];
    if (category === "all") return "all";
    const validCategory = designTokens.find((tc) => tc.id === category);
    return validCategory ? category : "all";
  };

  const selectedCategory = getCategoryFromUrl();

  const isColorToken = (token: DesignToken): boolean => {
    return (
      [
        "brand",
        "semantic",
        "neutral",
        "primary-scale",
        "red-scale",
        "green-scale",
        "blue-scale",
        "yellow-scale",
        "text",
        "background",
        "border",
        "hover",
      ].includes(token.category) ||
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
      if (category) tokens = [...category.tokens];
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
      if (!groups[token.category]) groups[token.category] = [];
      groups[token.category].push(token);
    });
    return groups;
  }, [filteredTokens]);

  const getPageTitle = () => {
    if (selectedCategory === "all") return "All Design Tokens";
    const category = designTokens.find((cat) => cat.id === selectedCategory);
    return category ? `${category.title} Tokens` : "Design Tokens";
  };

  const renderTokenPreview = (token: DesignToken) => {
    const cssVar = getCSSVariable(token);
    const isGradient =
      token.category === "gradient" || token.value.includes("gradient");

    if (isColorToken(token) || isGradient) {
      const colorValue = isGradient
        ? token.value
        : token.value.startsWith("#") || token.value.startsWith("rgb")
        ? token.value
        : cssVar || token.value;

      return (
        <div
          className="u-w-100 u-h-100 u-relative u-overflow-hidden"
          style={{ background: colorValue }}
        >
          {/* Subtle noise overlay */}
          <div
            className="u-absolute u-inset-0 u-opacity-10 u-mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          <div
            className="u-absolute u-inset-0 u-opacity-0 u-hover-opacity-100 u-transition-all u-flex u-items-center u-justify-center"
            style={{
              backdropFilter: "blur(2px)",
              backgroundColor: "rgba(0,0,0,0.05)",
              cursor: "pointer",
            }}
          ></div>
        </div>
      );
    }

    switch (token.category) {
      case "spacing": {
        const spacingValue = cssVar || extractSpacingValue(token.value);
        return (
          <div className="u-w-100 u-h-100 u-relative u-flex u-items-center u-justify-center u-bg-surface-subtle u-overflow-hidden">
            <div
              className="u-absolute u-inset-0 u-opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, var(--atomix-primary) 1px, transparent 0)",
                backgroundSize: "16px 16px",
              }}
            ></div>
            <div className="u-relative u-flex u-items-center u-justify-center">
              <div
                className="u-absolute u-border u-border-dashed u-border-primary u-opacity-50 u-rounded-sm"
                style={{ width: spacingValue, height: spacingValue }}
              ></div>
              <div
                className="u-bg-primary-subtle u-border u-border-primary u-text-primary u-flex u-items-center u-justify-center u-rounded-sm u-shadow-primary-glow"
                style={{
                  width: spacingValue,
                  height: spacingValue,
                  minWidth: "8px",
                  minHeight: "8px",
                }}
              ></div>
            </div>
          </div>
        );
      }
      case "shadow":
        return (
          <Card>
            <div className="u-absolute u-top-0 u-w-100 u-h-16 u-bg-primary u-opacity-5 u-blur-xl"></div>
            <div
              className={`u-w-20 u-h-20 u-bg-surface u-rounded-xl u-flex u-items-center u-justify-center u-border u-border-glass u-transition-all ${
                token.value === "none" ? "u-border-dashed" : ""
              }`}
              style={{
                boxShadow:
                  cssVar || (token.value === "none" ? "none" : token.value),
              }}
            >
              {token.value === "none" ? (
                <Icon
                  name="Prohibit"
                  size={24}
                  className="u-text-secondary u-opacity-50"
                />
              ) : (
                <Icon
                  name="Package"
                  size={24}
                  className="u-text-primary u-opacity-80"
                />
              )}
            </div>
          </Card>
        );
      case "border-radius": {
        const radiusValue = cssVar || extractRadiusValue(token.value);
        return (
          <div className="u-w-100 u-h-100 u-relative u-flex u-items-center u-justify-center u-bg-surface-subtle u-overflow-hidden">
            <div
              className="u-w-24 u-h-24 u-bg-surface u-border-2 u-border-primary u-relative u-transition-all"
              style={{ borderRadius: radiusValue }}
            >
              <div
                className="u-absolute u-top-0 u-start-0 u-w-4 u-h-4 u-translate-x-n2 u-translate-y-n2 u-opacity-50"
                style={{
                  borderTop: "2px solid var(--atomix-primary)",
                  borderLeft: "2px solid var(--atomix-primary)",
                }}
              ></div>
            </div>
          </div>
        );
      }
      case "font-family": {
        const fontFamilyValue = cssVar || token.value;
        return (
          <div className="u-w-100 u-h-100 u-relative u-flex u-flex-column u-items-center u-justify-center u-bg-surface-subtle u-gap-2 u-p-4">
            <div
              style={{ fontFamily: fontFamilyValue }}
              className="u-fs-5xl u-font-black u-text-primary-emphasis u-leading-none"
            >
              Aa
            </div>
            <div
              style={{ fontFamily: fontFamilyValue }}
              className="u-fs-sm u-text-secondary-emphasis u-text-center"
            >
              The quick brown fox
            </div>
          </div>
        );
      }
      case "font-size": {
        const fontSizeValue = cssVar || extractFontSizeValue(token.value);
        return (
          <div className="u-w-100 u-h-100 u-relative u-flex u-items-center u-justify-center u-bg-surface-subtle u-overflow-hidden">
            <div className="u-flex u-items-end u-gap-3 u-border-b u-border-dashed u-border-glass u-pb-2">
              <span className="u-text-secondary u-fs-xs u-opacity-50">a</span>
              <span
                className="u-text-primary-emphasis u-leading-none u-font-medium u-whitespace-nowrap"
                style={{ fontSize: fontSizeValue }}
              >
                Aa
              </span>
            </div>
          </div>
        );
      }
      case "font-weight": {
        const weightMatch = token.value.match(/(\d+)/);
        const weightValue =
          cssVar || (weightMatch ? weightMatch[1] : token.value);
        return (
          <div className="u-w-100 u-h-100 u-relative u-flex u-flex-column u-items-center u-justify-center u-bg-surface-subtle u-overflow-hidden">
            <div
              className="u-fs-4xl u-text-primary-emphasis u-leading-none"
              style={{ fontWeight: weightValue }}
            >
              Aa
            </div>
            <div className="u-fs-xs u-text-secondary-emphasis u-mt-2 u-font-mono u-opacity-70">
              {weightValue}
            </div>
          </div>
        );
      }
      case "line-height": {
        const lineHeightValue = cssVar || token.value;
        return (
          <div className="u-w-100 u-h-100 u-relative u-flex u-items-center u-justify-center u-bg-surface-subtle u-p-8">
            <div className="u-w-100 u-flex u-flex-column">
              <div
                className="u-w-100 u-h-2 u-bg-primary u-opacity-20 u-rounded-full"
                style={{ marginBottom: `calc(${lineHeightValue}em - 0.5em)` }}
              ></div>
              <div
                className="u-w-75 u-h-2 u-bg-primary u-opacity-40 u-rounded-full"
                style={{ marginBottom: `calc(${lineHeightValue}em - 0.5em)` }}
              ></div>
              <div className="u-w-50 u-h-2 u-bg-primary u-opacity-60 u-rounded-full"></div>
            </div>
          </div>
        );
      }
      case "form": {
        const formColorValue = cssVar || token.value;
        return (
          <div
            className="u-w-100 u-h-100 u-relative u-flex u-items-center u-justify-center u-overflow-hidden"
            style={{ backgroundColor: formColorValue }}
          >
            <div
              className="u-absolute u-inset-0 u-opacity-5 u-mix-blend-overlay"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              }}
            />
            <div className="u-w-75 u-flex u-flex-column u-gap-3 u-z-1 u-border u-border-glass u-p-3 u-rounded-xl u-bg-surface-subtle u-shadow-sm">
              <div className="u-w-100 u-h-3 u-bg-primary u-opacity-80 u-rounded-full"></div>
              <div className="u-w-50 u-h-3 u-bg-secondary u-opacity-50 u-rounded-full"></div>
            </div>
          </div>
        );
      }
      case "z-index": {
        const zIndexMatch = token.value.match(/(\d+)/);
        const zIndexValue = zIndexMatch ? zIndexMatch[1] : token.value;
        return (
          <div className="u-w-100 u-h-100 u-relative u-flex u-items-center u-justify-center u-bg-surface-subtle u-overflow-hidden">
            <div className="u-relative u-w-24 u-h-24">
              <div className="u-absolute u-inset-0 u-bg-surface u-border u-border-glass u-rounded-xl u-shadow-sm u-translate-x-4 u-translate-y-4 u-flex u-items-end u-justify-end u-p-2 u-opacity-50">
                <span className="u-fs-xxs u-text-secondary u-font-mono">
                  z: 0
                </span>
              </div>
              <div className="u-absolute u-inset-0 u-bg-surface u-border u-border-glass u-rounded-xl u-shadow-sm u-translate-x-2 u-translate-y-2 u-flex u-items-end u-justify-end u-p-2 u-opacity-70">
                <span className="u-fs-xxs u-text-secondary u-font-mono">
                  z: 1
                </span>
              </div>
              <div className="u-absolute u-inset-0 u-bg-primary-subtle u-text-primary u-border u-border-primary u-rounded-xl u-shadow-lg u-flex u-items-center u-justify-center u-z-1 u-transition-transform u-hover-translate-x-n1 u-hover-translate-y-n1">
                <span className="u-fs-sm u-font-black u-font-mono">
                  {zIndexValue}
                </span>
              </div>
            </div>
          </div>
        );
      }
      case "breakpoint": {
        const breakpointValue = cssVar || token.value;
        return (
          <div className="u-w-100 u-h-100 u-relative u-flex u-items-center u-justify-center u-bg-surface-subtle u-overflow-hidden u-p-4">
            <div
              className="u-w-100 u-h-100 u-opacity-30 u-relative u-flex u-items-center u-justify-center"
              style={{
                borderLeft: "2px solid var(--atomix-primary)",
                borderRight: "2px solid var(--atomix-primary)",
              }}
            >
              <div className="u-absolute u-w-100 u-h-px u-bg-primary u-opacity-50"></div>
              <div className="u-bg-surface u-px-3 u-py-1 u-rounded-full u-border u-border-primary u-text-primary u-fs-xs u-font-mono u-font-bold u-z-1">
                {breakpointValue}
              </div>
            </div>
          </div>
        );
      }
      case "transition": {
        return (
          <div className="u-w-100 u-h-100 u-relative u-flex u-items-center u-justify-center u-bg-surface-subtle u-overflow-hidden">
            <div className="u-absolute u-w-100 u-h-100 u-flex u-items-center u-justify-center">
              <div className="u-w-12 u-h-12 u-bg-primary-subtle u-border u-border-primary u-text-primary u-rounded-xl u-flex u-items-center u-justify-center u-shadow-primary-glow u-animate-bounce">
                <Icon name="ArrowsLeftRight" size={20} weight="duotone" />
              </div>
            </div>
          </div>
        );
      }
      case "letter-spacing": {
        const letterSpacingValue = cssVar || token.value;
        return (
          <div className="u-w-100 u-h-100 u-relative u-flex u-items-center u-justify-center u-bg-surface-subtle u-overflow-hidden">
            <span
              className="u-fs-xl u-text-primary-emphasis u-font-bold"
              style={{ letterSpacing: letterSpacingValue }}
            >
              SPACE
            </span>
          </div>
        );
      }
      default:
        if (token.category === "opacity" || token.name.includes("opacity")) {
          return (
            <div
              className="u-w-100 u-h-100 u-relative u-flex u-items-center u-justify-center u-bg-surface-subtle"
              style={{
                backgroundImage:
                  "linear-gradient(45deg, var(--atomix-primary-border-subtle) 25%, transparent 25%), linear-gradient(-45deg, var(--atomix-primary-border-subtle) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, var(--atomix-primary-border-subtle) 75%), linear-gradient(-45deg, transparent 75%, var(--atomix-primary-border-subtle) 75%)",
                backgroundSize: "10px 10px",
                backgroundPosition: "0 0, 0 5px, 5px -5px, -5px 0px",
              }}
            >
              <div
                className="u-w-20 u-h-20 u-bg-primary u-rounded-xl"
                style={{ opacity: cssVar || token.value }}
              ></div>
            </div>
          );
        }
        return (
          <div className="u-w-100 u-h-100 u-relative u-flex u-items-center u-justify-center u-bg-surface-subtle u-p-6">
            <div className="u-w-100 u-h-100 u-border u-border-dashed u-border-glass u-rounded-xl u-flex u-items-center u-justify-center">
              <span className="u-fs-lg u-font-bold u-text-primary-emphasis u-opacity-30">
                {token.category.slice(0, 2).toUpperCase()}
              </span>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      <Hero
        title={<></>}
        alignment="left"
        className="u-bg-surface-subtle u-border-b u-border-glass u-relative u-overflow-hidden"
      >
        {/* Ambient background glow for Hero */}
        <div className="u-absolute u-top-0 u-start-50 u-translate-x-n50 u-w-100 u-h-100 u-max-w-4xl u-bg-primary u-opacity-5 u-blur-3xl u-rounded-circle u-pointer-events-none"></div>

        <Hero.Subtitle>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              {
                label: "Design Tokens",
                href: "/docs/design-tokens",
                active: true,
              },
            ]}
            className="u-relative u-z-1"
          />
        </Hero.Subtitle>
        <Hero.Content className="u-w-100 u-max-w-4xl u-relative u-z-1">
          <Hero.Title className="u-fs-5xl u-font-black u-tracking-tighter">
            {getPageTitle()}
          </Hero.Title>
          <Hero.Text className="u-fs-xl u-text-secondary u-leading-relaxed">
            {selectedCategory === "all"
              ? "A complete showcase of all variables, sizes, and colors that power the Atomix design system."
              : "Explore the precise CSS variables mapped to this category to build pixel-perfect UIs."}
          </Hero.Text>
        </Hero.Content>
      </Hero>

      <Block spacing="lg">
        {/* Stats Section */}
        {selectedCategory === "all" && (
          <div className="u-mb-12">
            <Grid>
              <GridCol md={4} sm={6}>
                <Card className="u-p-8 u-text-center u-h-100 u-rounded-3xl u-border u-border-glass u-shadow-sm u-transition-transform u-hover-translate-y-n1">
                  <div className="u-text-5xl u-font-black u-mb-3 u-text-primary u-tracking-tighter u-drop-shadow-sm">
                    {filteredTokens.length}
                  </div>
                  <p className="u-text-secondary-emphasis u-mb-0 u-text-lg u-font-medium">
                    Total Tokens
                  </p>
                </Card>
              </GridCol>
              <GridCol md={4} sm={6}>
                <Card className="u-p-8 u-text-center u-h-100 u-rounded-3xl u-border u-border-glass u-shadow-sm u-transition-transform u-hover-translate-y-n1">
                  <div className="u-text-5xl u-font-black u-mb-3 u-text-primary u-tracking-tighter u-drop-shadow-sm">
                    {Object.keys(groupedTokens).length}
                  </div>
                  <p className="u-text-secondary-emphasis u-mb-0 u-text-lg u-font-medium">
                    Categories
                  </p>
                </Card>
              </GridCol>
              <GridCol md={4} sm={6}>
                <Card className="u-p-8 u-text-center u-h-100 u-rounded-3xl u-border u-border-glass u-shadow-sm u-transition-transform u-hover-translate-y-n1">
                  <div className="u-text-5xl u-font-black u-mb-3 u-text-primary u-tracking-tighter u-drop-shadow-sm">
                    {designTokens.length}
                  </div>
                  <p className="u-text-secondary-emphasis u-mb-0 u-text-lg u-font-medium">
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
            <div key={category} className="u-mb-16">
              <div className="u-flex u-items-center u-justify-between u-mb-8 u-border-b u-border-glass u-pb-4">
                <div>
                  <h2 className="u-fs-3xl u-font-black u-tracking-tight u-mb-2">
                    {categoryTitle}
                  </h2>
                  <p className="u-text-secondary u-fs-lg u-m-0">
                    {categoryDescription}
                  </p>
                </div>
                <Badge
                  variant="primary"
                  size="md"
                  label={`${tokens.length} ${
                    tokens.length === 1 ? "token" : "tokens"
                  }`}
                  className="u-rounded-full u-px-4 u-py-2 u-fs-sm u-font-bold u-shadow-primary-glow"
                />
              </div>

              <Grid>
                {tokens.map((token: DesignToken) => (
                  <GridCol
                    key={token.name}
                    sm={6}
                    lg={4}
                    xl={3}
                    className="u-mb-6"
                  >
                    <Card size="sm" appearance="outlined" className="u-p-1">
                      {/* Preview Section */}
                      <div className="u-h-40 u-w-100 u-relative u-flex u-items-center u-justify-center u-overflow-hidden">
                        {renderTokenPreview(token)}
                      </div>

                      {/* Token Info Section */}
                      <div className="u-flex u-flex-column u-flex-grow-1 u-mt-3">
                        <div className="u-flex u-items-start u-justify-between u-gap-2">
                          <h3 className="u-fs-lg u-font-bold u-text-primary-emphasis u-m-0 u-tracking-tight u-word-break-all">
                            {token.name}
                          </h3>
                        </div>

                        <p className="u-fs-sm u-text-secondary u-mb-6 u-flex-grow-1 u-leading-relaxed">
                          {/* {token.description} */}
                        </p>

                        {/* Value and Copy Section */}
                        <div className="u-ab u-flex u-items-center u-justify-between u-gap-3 u-mt-auto u-bg-primary-subtle u-p-1 u-rounded-xl u-border u-border-glass">
                          <code className="u-fs-xs u-font-mono u-text-primary-emphasis u-truncate u-px-2">
                            {getCSSVariable(token) || token.value}
                          </code>
                          <Button
                            variant={
                              isCopied && copiedTokenName === token.name
                                ? "success"
                                : "primary"
                            }
                            size="sm"
                            className="u-flex-shrink-0 u-rounded-lg u-shadow-sm"
                            onClick={() => handleCopy(token)}
                            icon={
                              <Icon
                                name={
                                  isCopied && copiedTokenName === token.name
                                    ? "CheckCircle"
                                    : "Copy"
                                }
                                weight="duotone"
                              />
                            }
                            iconOnly
                          ></Button>
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
