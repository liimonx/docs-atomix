"use client";

import { FC, useState, useCallback, useMemo, useEffect, useRef } from "react";
import {
  Hero,
  SectionIntro,
  Card,
  GridCol,
  Row,
  Block,
  Button,
  Input,
  Icon,
  Badge,
  Callout,
  MasonryGrid,
  MasonryGridItem,
} from "@shohojdhara/atomix";
import { EnhancedCodeBlock } from "@/components/showcase/EnhancedCodeBlock";
import {
  applyThemeToDocument,
  validateImportedTheme,
  downloadFile,
  detectTokenType,
  parseTokenValue,
} from "@/utils/themeTokenUtils";
import themeTokensData from "@/data/themeTokens.json";
import styles from "@/styles/PageHero.module.scss";

interface TokenMetadata {
  name: string;
  displayName: string;
  type: string;
  category: string;
}

interface ThemeTokensData {
  light: Record<string, string>;
  dark: Record<string, string>;
  metadata: {
    light: Array<{
      name: string;
      displayName: string;
      type: string;
      category: string;
    }>;
    dark: Array<{
      name: string;
      displayName: string;
      type: string;
      category: string;
    }>;
    categories: Array<{ id: string; title: string; description: string }>;
  };
}

const ThemeStudioPage: FC = () => {
  const tokensData = themeTokensData as ThemeTokensData;
  const { lightTokens, darkTokens, activeMode, setTheme } =
    useThemeStudioStore();

  // State
  const [lightThemeTokens, setLightThemeTokens] = useState<
    Record<string, string>
  >(tokensData.light);
  const [darkThemeTokens, setDarkThemeTokens] = useState<
    Record<string, string>
  >(tokensData.dark);
  const [activeMode, setActiveMode] = useState<"light" | "dark">("light");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"editor" | "preview" | "export">(
    "editor"
  );
  const [copied, setCopied] = useState<string | null>(null);
  const [collapsedCategories, setCollapsedCategories] = useState<Set<string>>(
    new Set()
  );
  const fileInputRef = useRef<HTMLInputElement>(null);
  const applyTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Get current tokens based on active mode
  const currentTokens = useMemo(
    () => (activeMode === "light" ? lightThemeTokens : darkThemeTokens),
    [activeMode, lightThemeTokens, darkThemeTokens]
  );

  // Get metadata for current mode
  const currentMetadata = useMemo(
    () =>
      activeMode === "light"
        ? tokensData.metadata.light
        : tokensData.metadata.dark,
    [activeMode, tokensData]
  );

  // Filter tokens by category and search
  const filteredTokens = useMemo(() => {
    let filtered = currentMetadata;

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(
        (token) => token.category === selectedCategory
      );
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (token) =>
          token.name.toLowerCase().includes(query) ||
          token.displayName.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [currentMetadata, selectedCategory, searchQuery]);

  // Group tokens by category
  const tokensByCategory = useMemo(() => {
    const grouped: Record<string, TokenMetadata[]> = {};
    filteredTokens.forEach((token) => {
      if (!grouped[token.category]) {
        grouped[token.category] = [];
      }
      grouped[token.category].push(token);
    });
    return grouped;
  }, [filteredTokens]);

  // Apply theme to document with debounce
  useEffect(() => {
    // Skip if tokens are empty (not initialized yet)
    if (Object.keys(lightTokens).length === 0 && Object.keys(darkTokens).length === 0) {
      return;
    }

    if (applyTimerRef.current) {
      clearTimeout(applyTimerRef.current);
    }

    applyTimerRef.current = setTimeout(() => {
      const tokens =
        activeMode === "light" ? lightThemeTokens : darkThemeTokens;
      applyThemeToDocument(tokens, activeMode);
    }, 300);

    return () => {
      if (applyTimerRef.current) {
        clearTimeout(applyTimerRef.current);
      }
    };
  }, [lightThemeTokens, darkThemeTokens, activeMode]);

  // Update token value
  const updateToken = useCallback(
    (tokenName: string, value: string) => {
      const parsedValue = parseTokenValue(value, detectTokenType(value));

      if (activeMode === "light") {
        setLightThemeTokens((prev) => ({
          ...prev,
          [tokenName]: parsedValue,
        }));
      } else {
        setDarkThemeTokens((prev) => ({
          ...prev,
          [tokenName]: parsedValue,
        }));
      }
    },
    [activeMode]
  );

  // Toggle category collapse
  const toggleCategory = useCallback((categoryId: string) => {
    setCollapsedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(categoryId)) {
        next.delete(categoryId);
      } else {
        next.add(categoryId);
      }
      return next;
    });
  }, []);

  // Handle export
  const handleExport = useCallback(
    (format: "json" | "css" | "scss") => {
      let content = "";
      let filename = "";
      let mimeType = "";

      switch (format) {
        case "json":
          content = exportAsJSON(lightThemeTokens, darkThemeTokens);
          filename = "theme.json";
          mimeType = "application/json";
          break;
        case "css":
          content = exportAsCSS(lightThemeTokens, darkThemeTokens);
          filename = "theme.css";
          mimeType = "text/css";
          break;
        case "scss":
          content = exportAsSCSS(lightThemeTokens, darkThemeTokens);
          filename = "theme.scss";
          mimeType = "text/scss";
          break;
      }

      downloadFile(content, filename, mimeType);
      setCopied(format);
      setTimeout(() => setCopied(null), 2000);
    },
    [lightThemeTokens, darkThemeTokens]
  );

  // Handle import
  const handleImport = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const content = e.target?.result as string;
          const data = JSON.parse(content);

          const validation = validateImportedTheme(data);
          if (!validation.valid) {
            alert(`Invalid theme file: ${validation.error}`);
            return;
          }

          setLightThemeTokens(data.light);
          setDarkThemeTokens(data.dark);
          alert("Theme imported successfully!");
        } catch (error) {
          alert("Error parsing theme file. Please ensure it is valid JSON.");
        }
      };
      reader.readAsText(file);

      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    },
    []
  );

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        const data = JSON.parse(content);

    switch (tokenType) {
      case "color":
        return (
          <div className="u-d-flex u-gap-2 u-align-items-center">
            <div className="u-relative">
              <input
                type="color"
                value={value.startsWith("#") ? value : "#000000"}
                onChange={(e) => updateToken(token.name, e.target.value)}
                className="u-w-14 u-h-14 u-border u-border-subtle u-br-md u-cursor-pointer u-shadow-sm"
                title={value}
                style={{
                  appearance: "none",
                  WebkitAppearance: "none",
                  MozAppearance: "none",
                }}
              />
            </div>
            <Input
              type="text"
              value={value}
              onChange={(e) => updateToken(token.name, e.target.value)}
              placeholder="#000000"
              className="u-flex-grow-1 u-fs-sm"
              style={{ fontFamily: "var(--atomix-font-family-mono)" }}
            />
          </div>
        );
      case "number":
        // Extract number and unit
        const numberMatch = value.match(
          /^(-?\d+(?:\.\d+)?)(rem|px|em|%|s|ms)?$/
        );
        if (numberMatch) {
          const numValue = numberMatch[1];
          const unit = numberMatch[2] || "rem";
          return (
            <div className="u-d-flex u-gap-2 u-align-items-center">
              <Input
                type="number"
                value={numValue}
                onChange={(e) =>
                  updateToken(token.name, `${e.target.value}${unit}`)
                }
                step="0.1"
                className="u-flex-grow-1 u-fs-sm"
                style={{ fontFamily: "var(--atomix-font-family-mono)" }}
              />
              <select
                value={unit}
                onChange={(e) =>
                  updateToken(token.name, `${numValue}${e.target.value}`)
                }
                className="u-px-3 u-py-2 u-border u-border-subtle u-br-md u-bg-surface u-fs-sm u-cursor-pointer"
                style={{ minWidth: "70px" }}
              >
                <option value="rem">rem</option>
                <option value="px">px</option>
                <option value="em">em</option>
                <option value="%">%</option>
                <option value="s">s</option>
                <option value="ms">ms</option>
              </select>
            </div>
          );
        }
        return (
          <Input
            type="text"
            value={value}
            onChange={(e) => updateToken(token.name, e.target.value)}
            className="u-w-100 u-fs-sm"
            style={{ fontFamily: "var(--atomix-font-family-mono)" }}
          />
        );

      case "gradient":
      case "shadow":
      case "text":
        return (
          <textarea
            value={value}
            onChange={(e) => updateToken(token.name, e.target.value)}
            rows={3}
            className="u-w-100 u-p-3 u-border u-border-subtle u-br-md u-resize-vertical u-fs-sm u-bg-surface"
            style={{
              fontFamily: "var(--atomix-font-family-mono)",
              lineHeight: "1.5",
            }}
            placeholder="Enter value..."
          />
        );
        alert("Theme imported successfully!");
      } catch (error) {
        alert("Error parsing theme file. Please ensure it is valid JSON.");
      }
    };
    reader.readAsText(file);

      default:
        return (
          <Input
            type="text"
            value={value}
            onChange={(e) => updateToken(token.name, e.target.value)}
            className="u-w-100 u-fs-sm"
            style={{ fontFamily: "var(--atomix-font-family-mono)" }}
          />
        );
    }
  };

  // Get export code
  const getExportCode = useCallback(
    (format: "json" | "css" | "scss") => {
      switch (format) {
        case "json":
          return exportAsJSON(lightThemeTokens, darkThemeTokens);
        case "css":
          return exportAsCSS(lightThemeTokens, darkThemeTokens);
        case "scss":
          return exportAsSCSS(lightThemeTokens, darkThemeTokens);
      }
    },
    [lightThemeTokens, darkThemeTokens]
  );

  return (
    <div>
      <Hero
        className={styles.pageHero}
        backgroundImageSrc="https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2728"
        title="Theme Studio"
        subtitle="Create and customize themes interactively with real-time preview"
        text="Customize every design token from your Atomix design system. Switch between light and dark modes, preview changes in real-time, and export your theme for use in your application."
        alignment="center"
      />

      <Block className="u-pt-8 u-pb-8">
        <SectionIntro
          title="Interactive Theme Builder"
          text="Customize every design token from your Atomix design system. Switch between light and dark modes, preview changes in real-time, and export your theme for use in your application."
        />

        {/* Mode Toggle and Controls */}
        <Row className="u-mt-6">
          <GridCol md={12}>
            <Card className="u-p-4">
              <div className="u-d-flex u-align-items-center u-justify-content-between u-flex-wrap u-gap-3">
                <div className="u-d-flex u-align-items-center u-gap-3">
                  <Button
                    variant={
                      activeMode === "light" ? "primary" : "outline-secondary"
                    }
                    size="sm"
                    onClick={() => setActiveMode("light")}
                    className="u-d-flex u-align-items-center u-gap-2"
                  >
                    <Icon name="Sun" size={16} />
                    Light Mode
                  </Button>
                  <Button
                    variant={
                      activeMode === "dark" ? "primary" : "outline-secondary"
                    }
                    size="sm"
                    onClick={() => setActiveMode("dark")}
                    className="u-d-flex u-align-items-center u-gap-2"
                  >
                    <Icon name="Moon" size={16} />
                    Dark Mode
                  </Button>
                </div>
                <div className="u-d-flex u-align-items-center u-gap-2">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".json"
                    onChange={handleImport}
                    style={{ display: "none" }}
                  />
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={() => fileInputRef.current?.click()}
                    className="u-d-flex u-align-items-center u-gap-2"
                  >
                    <Icon name="Upload" size={16} />
                    Import
                  </Button>
                </div>
              </div>
            </Card>
          </GridCol>
        </Row>

        {/* Tabs */}
        <Row className="u-mt-4">
          <GridCol md={12}>
            <Card className="u-p-0 u-overflow-hidden">
              <div className="u-d-flex u-border-b u-border-subtle">
                {(["editor", "preview", "export"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`u-px-4 u-py-3 u-fs-sm u-fw-medium u-border-0 u-bg-transparent u-cursor-pointer u-transition-fast ${
                      activeTab === tab
                        ? "u-text-primary-emphasis u-border-b-2 u-border-primary"
                        : "u-text-secondary-emphasis u-hover-text-primary-emphasis"
                    }`}
                    style={{
                      textTransform: "capitalize",
                      borderBottom:
                        activeTab === tab
                          ? "2px solid var(--atomix-primary)"
                          : "none",
                    }}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="u-p-6">
                {/* Editor Tab */}
                {activeTab === "editor" && (
                  <div>
                    {/* Search and Category Filter */}
                    <Card className="u-p-4 u-mb-4">
                      <Row>
                        <GridCol md={8}>
                          <div className="u-d-flex u-align-items-center u-gap-2">
                            <Icon
                              name="MagnifyingGlass"
                              size={20}
                              className="u-text-secondary-emphasis"
                            />
                            <Input
                              type="text"
                              placeholder="Search tokens by name or display name..."
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              className="u-flex-grow-1"
                            />
                          </div>
                        </GridCol>
                        <GridCol md={4}>
                          <div className="u-d-flex u-align-items-center u-gap-2">
                            <Icon
                              name="Funnel"
                              size={20}
                              className="u-text-secondary-emphasis"
                            />
                            <select
                              value={selectedCategory || ""}
                              onChange={(e) =>
                                setSelectedCategory(e.target.value || null)
                              }
                              className="u-flex-grow-1 u-px-3 u-py-2 u-border u-border-subtle u-br-md u-bg-surface u-fs-sm"
                            >
                              <option value="">All Categories</option>
                              {tokensData.metadata.categories.map((cat) => (
                                <option key={cat.id} value={cat.id}>
                                  {cat.title}
                                </option>
                              ))}
                            </select>
                          </div>
                        </GridCol>
                      </Row>
                      {(searchQuery || selectedCategory) && (
                        <div className="u-d-flex u-align-items-center u-gap-2 u-mt-3 u-pt-3 u-border-top u-border-subtle">
                          <Badge
                            variant="info"
                            size="sm"
                            label={`${filteredTokens.length} token${
                              filteredTokens.length !== 1 ? "s" : ""
                            } found`}
                          />
                          <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={() => {
                              setSearchQuery("");
                              setSelectedCategory(null);
                            }}
                            className="u-d-flex u-align-items-center u-gap-2"
                          >
                            <Icon name="X" size={14} />
                            Clear filters
                          </Button>
                        </div>
                      )}
                    </Card>

                    {/* Token Editor */}
                    {Object.keys(tokensByCategory).length === 0 ? (
                      <Card className="u-p-6 u-text-center">
                        <Icon
                          name="MagnifyingGlass"
                          size={48}
                          className="u-text-secondary-emphasis u-mb-3"
                        />
                        <h3 className="u-fs-lg u-fw-semibold u-mb-2">
                          No tokens found
                        </h3>
                        <p className="u-text-secondary-emphasis u-m-0">
                          Try adjusting your search or filter criteria
                        </p>
                      </Card>
                    ) : (
                      <MasonryGrid columns={4} gap={16} {...({} as any)}>
                        {Object.entries(tokensByCategory).map(
                          ([categoryId, tokens]) => {
                            const category =
                              tokensData.metadata.categories.find(
                                (c) => c.id === categoryId
                              );
                            const isCollapsed =
                              collapsedCategories.has(categoryId);

                            return (
                              <MasonryGridItem key={categoryId}>
                                <Card className="u-p-0 u-overflow-hidden u-h-100 u-d-flex u-flex-column">
                                  <button
                                    onClick={() => toggleCategory(categoryId)}
                                    className="u-w-100 u-d-flex u-align-items-center u-justify-content-between u-p-4 u-border-0 u-bg-transparent u-cursor-pointer u-text-left u-hover-bg-secondary-subtle u-transition-fast"
                                  >
                                    <div className="u-flex-grow-1">
                                      <div className="u-d-flex u-align-items-center u-gap-2 u-mb-1">
                                        <h3 className="u-fs-md u-fw-semibold u-m-0">
                                          {category?.title || categoryId}
                                        </h3>
                                        <Badge
                                          variant="secondary"
                                          size="sm"
                                          label={String(tokens.length)}
                                        />
                                      </div>
                                      {category?.description && (
                                        <p className="u-fs-xs u-text-secondary-emphasis u-m-0 u-line-height-relaxed">
                                          {category.description}
                                        </p>
                                      )}
                                    </div>
                                    <Icon
                                      name="CaretRight"
                                      size={20}
                                      className="u-text-secondary-emphasis u-flex-shrink-0"
                                      style={{
                                        transform: isCollapsed
                                          ? "rotate(0deg)"
                                          : "rotate(90deg)",
                                        transition: "transform 0.2s ease",
                                      }}
                                    />
                                  </button>

                                  {!isCollapsed && (
                                    <div
                                      className="u-px-4 u-pb-4 u-flex-grow-1 u-overflow-y-auto"
                                      style={{ maxHeight: "600px" }}
                                    >
                                      <div className="u-d-flex u-flex-column u-gap-4">
                                        {tokens.map((token, index) => (
                                          <div
                                            key={token.name}
                                            className="u-d-flex u-flex-column u-gap-2 u-pb-3"
                                            style={{
                                              borderBottom:
                                                index < tokens.length - 1
                                                  ? "1px solid var(--atomix-border-subtle)"
                                                  : "none",
                                            }}
                                          >
                                            <div className="u-d-flex u-align-items-center u-justify-content-between u-gap-2">
                                              <label className="u-fs-sm u-fw-semibold u-d-block u-text-primary-emphasis">
                                                {token.displayName}
                                              </label>
                                              <Badge
                                                variant="secondary"
                                                size="sm"
                                                label={token.type}
                                              />
                                            </div>
                                            <div
                                              className="u-fs-xs u-text-secondary-emphasis u-mb-2 u-p-2 u-bg-tertiary-subtle u-br-sm"
                                              style={{
                                                fontFamily:
                                                  "var(--atomix-font-family-mono)",
                                                wordBreak: "break-all",
                                              }}
                                              title={token.name}
                                            >
                                              {token.name}
                                            </div>
                                            {renderTokenInput(
                                              token,
                                              currentTokens[token.name] || ""
                                            )}
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </Card>
                              </MasonryGridItem>
                            );
                          }
                        )}
                      </MasonryGrid>
                    )}
                  </div>
                )}

                {/* Preview Tab */}
                {activeTab === "preview" && (
                  <div>
                    <h3 className="u-fs-lg u-fw-semibold u-mb-4">
                      Live Preview
                    </h3>
                    <div
                      className="u-p-6 u-br-lg"
                      style={{
                        backgroundColor: "var(--atomix-body-bg)",
                        minHeight: "400px",
                      }}
                    >
                      <Card
                        className="u-p-6"
                        style={{
                          backgroundColor: "var(--atomix-secondary-bg-subtle)",
                        }}
                      >
                        <h3
                          style={{
                            color: "var(--atomix-heading-color)",
                            marginTop: 0,
                          }}
                        >
                          Theme Preview
                        </h3>
                        <p style={{ color: "var(--atomix-body-color)" }}>
                          This is a preview of your custom theme. All components
                          will use these colors and typography settings.
                        </p>

                        <div className="u-d-flex u-gap-2 u-flex-wrap u-mt-4">
                          <Badge variant="primary" label="Primary" />
                          <Badge variant="secondary" label="Secondary" />
                          <Badge variant="success" label="Success" />
                          <Badge variant="error" label="Error" />
                          <Badge variant="warning" label="Warning" />
                          <Badge variant="info" label="Info" />
                        </div>

                        <div className="u-d-flex u-gap-2 u-mt-4 u-flex-wrap">
                          <Button variant="primary" size="sm">
                            Primary Button
                          </Button>
                          <Button variant="secondary" size="sm">
                            Secondary Button
                          </Button>
                          <Button variant="outline-primary" size="sm">
                            Outline Button
                          </Button>
                          <Button variant="success" size="sm">
                            Success Button
                          </Button>
                          <Button variant="error" size="sm">
                            Error Button
                          </Button>
                        </div>

                        <div className="u-mt-4">
                          <Input
                            type="text"
                            placeholder="Sample input field"
                            className="u-w-100 u-mb-2"
                          />
                          <Input
                            type="text"
                            placeholder="Another input field"
                            className="u-w-100"
                          />
                        </div>

                        <div className="u-mt-4">
                          <h4 style={{ color: "var(--atomix-heading-color)" }}>
                            Typography Sample
                          </h4>
                          <p style={{ color: "var(--atomix-body-color)" }}>
                            This is body text using your configured typography
                            settings. The font family is{" "}
                            <code style={{ color: "var(--atomix-primary)" }}>
                              {currentTokens["--atomix-body-font-family"] ||
                                "default"}
                            </code>{" "}
                            and the base font size is{" "}
                            <code style={{ color: "var(--atomix-primary)" }}>
                              {currentTokens["--atomix-body-font-size"] ||
                                "1rem"}
                            </code>
                            .
                          </p>
                          <p
                            style={{
                              color: "var(--atomix-secondary-text-emphasis)",
                            }}
                          >
                            This is secondary text using the secondary text
                            color.
                          </p>
                          <div className="u-mt-3">
                            <h1
                              style={{
                                color: "var(--atomix-heading-color)",
                                margin: "0.5rem 0",
                              }}
                            >
                              Heading 1
                            </h1>
                            <h2
                              style={{
                                color: "var(--atomix-heading-color)",
                                margin: "0.5rem 0",
                              }}
                            >
                              Heading 2
                            </h2>
                            <h3
                              style={{
                                color: "var(--atomix-heading-color)",
                                margin: "0.5rem 0",
                              }}
                            >
                              Heading 3
                            </h3>
                          </div>
                        </div>

                        <div className="u-mt-4">
                          <h4 style={{ color: "var(--atomix-heading-color)" }}>
                            Background Samples
                          </h4>
                          <div className="u-d-flex u-gap-2 u-flex-wrap">
                            <div
                              className="u-p-3 u-br-md"
                              style={{
                                backgroundColor:
                                  "var(--atomix-primary-bg-subtle)",
                                color: "var(--atomix-primary-text-emphasis)",
                                border:
                                  "1px solid var(--atomix-primary-border-subtle)",
                              }}
                            >
                              Primary Background
                            </div>
                            <div
                              className="u-p-3 u-br-md"
                              style={{
                                backgroundColor:
                                  "var(--atomix-success-bg-subtle)",
                                color: "var(--atomix-success-text-emphasis)",
                                border:
                                  "1px solid var(--atomix-success-border-subtle)",
                              }}
                            >
                              Success Background
                            </div>
                            <div
                              className="u-p-3 u-br-md"
                              style={{
                                backgroundColor:
                                  "var(--atomix-error-bg-subtle)",
                                color: "var(--atomix-error-text-emphasis)",
                                border:
                                  "1px solid var(--atomix-error-border-subtle)",
                              }}
                            >
                              Error Background
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                )}

                {/* Export Tab */}
                {activeTab === "export" && (
                  <div>
                    <h3 className="u-fs-lg u-fw-semibold u-mb-4">
                      Export Theme
                    </h3>
                    <p className="u-text-secondary-emphasis u-mb-4">
                      Export your custom theme in various formats for use in
                      your application.
                    </p>

                    <div className="u-d-flex u-gap-2 u-mb-6 u-flex-wrap">
                      <Button
                        variant="primary"
                        size="md"
                        onClick={() => handleExport("json")}
                        className="u-d-flex u-align-items-center u-gap-2"
                      >
                        <Icon
                          name={copied === "json" ? "CheckCircle" : "Download"}
                          size={16}
                        />
                        {copied === "json" ? "Exported!" : "Export JSON"}
                      </Button>
                      <Button
                        variant="primary"
                        size="md"
                        onClick={() => handleExport("css")}
                        className="u-d-flex u-align-items-center u-gap-2"
                      >
                        <Icon
                          name={copied === "css" ? "CheckCircle" : "Download"}
                          size={16}
                        />
                        {copied === "css" ? "Exported!" : "Export CSS"}
                      </Button>
                      <Button
                        variant="primary"
                        size="md"
                        onClick={() => handleExport("scss")}
                        className="u-d-flex u-align-items-center u-gap-2"
                      >
                        <Icon
                          name={copied === "scss" ? "CheckCircle" : "Download"}
                          size={16}
                        />
                        {copied === "scss" ? "Exported!" : "Export SCSS"}
                      </Button>
                    </div>

                    <Row>
                      <GridCol md={6}>
                        <div className="u-d-flex u-align-items-center u-justify-content-between u-mb-3">
                          <h4 className="u-fs-md u-fw-semibold u-m-0">
                            JSON Format
                          </h4>
                          <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={() => {
                              navigator.clipboard.writeText(
                                getExportCode("json")
                              );
                              setCopied("json-code");
                              setTimeout(() => setCopied(null), 2000);
                            }}
                            className="u-d-flex u-align-items-center u-gap-2"
                          >
                            <Icon
                              name={
                                copied === "json-code" ? "CheckCircle" : "Copy"
                              }
                              size={16}
                            />
                            {copied === "json-code" ? "Copied!" : "Copy"}
                          </Button>
                        </div>
                        <EnhancedCodeBlock
                          code={getExportCode("json")}
                          language="json"
                          showLineNumbers={true}
                        />
                      </GridCol>

                      <GridCol md={6}>
                        <div className="u-d-flex u-align-items-center u-justify-content-between u-mb-3">
                          <h4 className="u-fs-md u-fw-semibold u-m-0">
                            CSS Format
                          </h4>
                          <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={() => {
                              navigator.clipboard.writeText(
                                getExportCode("css")
                              );
                              setCopied("css-code");
                              setTimeout(() => setCopied(null), 2000);
                            }}
                            className="u-d-flex u-align-items-center u-gap-2"
                          >
                            <Icon
                              name={
                                copied === "css-code" ? "CheckCircle" : "Copy"
                              }
                              size={16}
                            />
                            {copied === "css-code" ? "Copied!" : "Copy"}
                          </Button>
                        </div>
                        <EnhancedCodeBlock
                          code={getExportCode("css")}
                          language="css"
                          showLineNumbers={true}
                        />
                      </GridCol>
                    </Row>

                    <Row className="u-mt-4">
                      <GridCol md={12}>
                        <div className="u-d-flex u-align-items-center u-justify-content-between u-mb-3">
                          <h4 className="u-fs-md u-fw-semibold u-m-0">
                            SCSS Format
                          </h4>
                          <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={() => {
                              navigator.clipboard.writeText(
                                getExportCode("scss")
                              );
                              setCopied("scss-code");
                              setTimeout(() => setCopied(null), 2000);
                            }}
                            className="u-d-flex u-align-items-center u-gap-2"
                          >
                            <Icon
                              name={
                                copied === "scss-code" ? "CheckCircle" : "Copy"
                              }
                              size={16}
                            />
                            {copied === "scss-code" ? "Copied!" : "Copy"}
                          </Button>
                        </div>
                        <EnhancedCodeBlock
                          code={getExportCode("scss")}
                          language="scss"
                          showLineNumbers={true}
                        />
                      </GridCol>
                    </Row>

                    <Callout variant="info" className="u-mt-4">
                      <h4 className="u-fs-sm u-fw-semibold u-mb-2">
                        Usage Instructions
                      </h4>
                      <ol
                        className="u-fs-sm u-m-0"
                        style={{ paddingLeft: "1.5rem" }}
                      >
                        <li className="u-mb-2">
                          <strong>JSON Format:</strong> Use this format to
                          import themes back into the Theme Studio or for
                          programmatic theme management.
                        </li>
                        <li className="u-mb-2">
                          <strong>CSS Format:</strong> Copy and paste this into
                          your stylesheet or import it as a CSS file in your
                          application.
                        </li>
                        <li className="u-mb-2">
                          <strong>SCSS Format:</strong> Use this format if
                          you're working with SCSS/Sass in your project. Import
                          the map and use the tokens in your styles.
                        </li>
                      </ol>
                    </Callout>
                  </div>
                )}
              </div>
            </Card>
          </GridCol>
        </Row>
      </Block>
    </div>
  );
};

ThemeStudioPage.displayName = "ThemeStudioPage";

export default ThemeStudioPage;
