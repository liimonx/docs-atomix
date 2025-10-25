import React, { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import {
  Card,
  Button,
  Input,
  Select,
  Hero,
  GridCol,
  Row,
  Block,
  Dropdown
} from "@shohojdhara/atomix";
import { designTokens, DesignToken } from "../data/design-tokens";
import useCopyToClipboard from "../hooks/useCopyToClipboard";
import { useLocation } from "react-router-dom";

const DesignTokensPage: React.FC = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [isCopied, copy] = useCopyToClipboard();
  const [copiedTokenName, setCopiedTokenName] = useState<string | null>(null);

  // Extract category from URL
  const getCategoryFromUrl = () => {
    const pathParts = location.pathname.split('/');
    const category = pathParts[pathParts.length - 1];
    
    // Check if it's a valid category
    const validCategory = designTokens.find(tokenCategory => tokenCategory.id === category);
    return validCategory ? category : 'all';
  };

  const selectedCategory = getCategoryFromUrl();

  const handleCopy = (token: DesignToken) => {
    copy(token.value).then((success) => {
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
    ...designTokens.map(tokenCategory => ({
      value: tokenCategory.id,
      label: tokenCategory.title
    }))
  ];

  const renderTokenPreview = (token: DesignToken) => {
    switch (token.category) {
      case "brand":
      case "semantic":
      case "neutral":
        return (
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "8px",
              backgroundColor: token.value,
              border: "1px solid var(--atomix-brand-border-subtle)",
              marginRight: "1rem",
            }}
          />
        );
      case "spacing":
        return (
          <div
            style={{
              width: token.value.includes('rem') ? token.value : 'auto',
              height: "20px",
              backgroundColor: "var(--atomix-brand-bg-subtle)",
              borderRadius: "4px",
              marginRight: "1rem",
              minWidth: token.value.includes('rem') ? '0' : token.value,
              padding: token.value.includes('rem') ? '0' : '5px',
              display: 'flex',
              alignItems: 'center',
              fontSize: '10px'
            }}
          >
            {!token.value.includes('rem') && token.value}
          </div>
        );
      case "shadow":
        return (
          <div
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: "var(--atomix-bg-brand-subtle)",
              border: "1px solid var(--atomix-brand-border-subtle)",
              borderRadius: "8px",
              boxShadow: token.value,
              marginRight: "1rem",
            }}
          />
        );
      case "border-radius":
        return (
          <div
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: "var(--atomix-brand-bg-subtle)",
              border: `2px solid var(--atomix-brand-border-subtle)`,
              borderRadius: token.value.includes('rem') ? token.value : '0',
              marginRight: "1rem",
            }}
          />
        );
      default:
        return (
          <div
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: "var(--atomix-brand-subtle)",
              border: "1px solid var(--atomix-brand-subtle)",
              borderRadius: "8px",
              marginRight: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "12px",
              fontFamily: "var(--atomix-font-family-mono)",
            }}
          >
            {token.category.slice(0, 2).toUpperCase()}
          </div>
        );
    }
  };

  return (
    <>
      <Helmet>
        <title>Design Tokens - Atomix Design System</title>
        <meta
          name="description"
          content="Complete reference for all Atomix design tokens including colors, spacing, typography, and more."
        />
      </Helmet>

      <Hero
        title="Design Tokens"
        text="The design system's visual language, expressed through code"
        alignment="center"
        actions={
          <Row style={{width: 400}}>
            <GridCol md={8}>
              <Input
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
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  window.location.hash = `/docs/design-tokens/${e.target.value}`
                }
                options={categories}
              />
            </GridCol>
          </Row>
        }
        backgroundImageSrc="https://images.unsplash.com/photo-1760976180663-946ff68fa64c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1034"
      />

      <Block className="tokens-display">
        <div style={{ marginTop: "2rem" }}>
          {Object.entries(groupedTokens).map(([category, tokens]) => (
            <div key={category} style={{ marginBottom: "3rem" }}>
              <h2
                style={{
                  marginBottom: "1.5rem",
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  textTransform: "capitalize",
                }}
              >
                {category}
              </h2>

              <Row>
                {tokens.map((token: DesignToken) => (
                  <GridCol key={token.name} sm={6} lg={3} className="u-mb-4">
                    <Card className="p-6 border border-solid rounded-lg">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "1rem",
                        }}
                      >
                        {renderTokenPreview(token)}
                        <div style={{ marginLeft: "1rem" }}>
                          <h3
                            style={{
                              margin: 0,
                              fontSize: "1rem",
                              fontWeight: "600",
                            }}
                          >
                            {token.name}
                          </h3>
                          <p className="u-m-0 u-fs-sm u-text-secondary-emphasis">
                            {token.description}
                          </p>
                        </div>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        <code
                          style={{
                            flex: 1,
                            padding: "0.5rem",
                            backgroundColor: "var(--atomix-bg-secondary)",
                            borderRadius: "4px",
                            fontSize: "0.875rem",
                            fontFamily: "var(--atomix-font-family-mono)",
                            color: "var(--atomix-text-primary-emphasis)",
                          }}
                        >
                          {token.value}
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
                    </Card>
                  </GridCol>
                ))}
              </Row>
            </div>
          ))}
        </div>
      </Block>
    </>
  );
};

export default DesignTokensPage;