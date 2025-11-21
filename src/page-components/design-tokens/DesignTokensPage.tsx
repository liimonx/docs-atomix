'use client';

import React, { useState, useMemo } from "react";
import {
  Card,
  Button,
  Input,
  Select,
  Hero,
  GridCol,
  Row,
  Block,

} from "@shohojdhara/atomix";
import { designTokens, DesignToken } from "@/data/design-tokens";
import useCopyToClipboard from "@/hooks/useCopyToClipboard";
// Avoid next/navigation hook to prevent context issues in SSR error boundaries
import { GlassProps } from "@/types/atomix-components";
import styles from "./DesignTokensPage.module.scss";

const DesignTokensPage: React.FC = () => {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/docs/design-tokens/all';
  const [searchQuery, setSearchQuery] = useState("");
  const [isCopied, copy] = useCopyToClipboard();
  const [copiedTokenName, setCopiedTokenName] = useState<string | null>(null);

  // Extract category from URL
  const getCategoryFromUrl = () => {
    const pathParts = pathname.split('/');
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
            className={`${styles.tokenPreview} ${styles['tokenPreview--color']}`}
            style={{ '--token-color': token.value } as React.CSSProperties}
          />
        );
      case "spacing": {
        const hasRem = token.value.includes('rem');
        return (
          <div
            className={`${styles.tokenPreview} ${styles['tokenPreview--spacing']} ${hasRem ? styles['tokenPreview--spacingHasRem'] : styles['tokenPreview--spacingNoRem']}`}
            style={{ '--spacing-value': hasRem ? token.value : token.value } as React.CSSProperties}
          >
            {!hasRem && token.value}
          </div>
        );
      }
      case "shadow":
        return (
          <div
            className={`${styles.tokenPreview} ${styles['tokenPreview--shadow']}`}
            style={{ '--shadow-value': token.value } as React.CSSProperties}
          />
        );
      case "border-radius":
        return (
          <div
            className={`${styles.tokenPreview} ${styles['tokenPreview--borderRadius']}`}
            style={{ '--radius-value': token.value.includes('rem') ? token.value : '0' } as React.CSSProperties}
          />
        );
      default:
        return (
          <div className={`${styles.tokenPreview} ${styles['tokenPreview--default']}`}>
            {token.category.slice(0, 2).toUpperCase()}
          </div>
        );
    }
  };

  return (
    <>

      <Hero
        title="Design Tokens"
        text="The design system's visual language, expressed through code"
        alignment="center"
        glass={{
          displacementScale: 30,
          blurAmount: 5,
          elasticity: 0,
          padding: "20px",
          cornerRadius: 30,
        } as GlassProps}
        className="u-pt-32 u-pb-16"
        actions={
          <Row className={styles.heroActions}>
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
                  if (typeof window !== 'undefined') {
                    window.location.hash = `/docs/design-tokens/${e.target.value}`;
                  }
                }}
                options={categories}
              />
            </GridCol>
          </Row>
        }
        backgroundImageSrc="https://images.unsplash.com/photo-1760976180663-946ff68fa64c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1034"
      />

      <Block className={styles.tokensDisplay}>
        {Object.entries(groupedTokens).map(([category, tokens]) => (
          <div key={category} className={styles.tokenCategory}>
            <h2 className={styles.tokenCategory__title}>
              {category}
            </h2>

            <Row>
              {tokens.map((token: DesignToken) => (
                <GridCol key={token.name} sm={6} lg={3} className="u-mb-4">
                  <Card className="p-6 border border-solid rounded-lg">
                    <div className={styles.tokenCard}>
                      {renderTokenPreview(token)}
                      <div className={styles.tokenCard__info}>
                        <h3 className={styles.tokenCard__name}>
                          {token.name}
                        </h3>
                        <p className="u-m-0 u-fs-sm u-text-secondary-emphasis">
                          {token.description}
                        </p>
                      </div>
                    </div>

                    <div className={styles.tokenCard__actions}>
                      <code className={styles.tokenCard__code}>
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
      </Block>
    </>
  );
};

export default DesignTokensPage;