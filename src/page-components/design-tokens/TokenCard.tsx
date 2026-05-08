"use client";

import React, { useState } from "react";
import { Button, Icon, Badge } from "@shohojdhara/atomix";
import { DesignToken } from "@/data/design-tokens";
import useCopyToClipboard from "@/hooks/useCopyToClipboard";
import styles from "./TokenCard.module.scss";

interface TokenCardProps {
  token: DesignToken;
  preview?: React.ReactNode;
}

const TokenCard: React.FC<TokenCardProps> = ({ token, preview }) => {
  const [, copy] = useCopyToClipboard();
  const [showCheck, setShowCheck] = useState(false);

  const handleCopy = () => {
    const valueToCopy = token.cssVariable || token.value;
    copy(valueToCopy).then((success) => {
      if (success) {
        setShowCheck(true);
        setTimeout(() => setShowCheck(false), 2000);
      }
    });
  };

  const isGradient = token.category === "gradient" || token.value.includes("gradient");
  const isColorValue = token.value.startsWith("#") || token.value.startsWith("rgb");
  
  const colorValue = isGradient
    ? token.value
    : isColorValue
    ? token.value
    : token.cssVariable || token.value;

  return (
    <div className={styles.tokenCard}>
      {/* Decorative glow behind the card on hover */}
      <div 
        className={styles.tokenCard__glow} 
        style={{ 
          background: isGradient ? 'var(--atomix-primary)' : (isColorValue ? colorValue : 'var(--atomix-primary)') 
        }} 
      />

      {preview && (
        <div className={styles.tokenCard__preview}>
          {preview}
        </div>
      )}

      <div className={styles.tokenCard__content}>
        <div className={styles.tokenCard__header}>
          {isColorValue && !preview && (
            <div
              className={styles.tokenCard__swatch}
              style={{ background: colorValue }}
            />
          )}
          <div className={styles.tokenCard__titleGroup}>
            <h3 className={styles.tokenCard__name}>{token.name}</h3>
            <span className={styles.tokenCard__value}>{token.value}</span>
          </div>
        </div>

        <p className={styles.tokenCard__description}>{token.description}</p>

        {token.usage && token.usage.length > 0 && (
          <div className={styles.tokenCard__usage}>
            {token.usage.map((u) => (
              <Badge 
                key={u} 
                variant="secondary" 
                size="sm" 
                label={u} 
                className={styles.tokenCard__badge} 
              />
            ))}
          </div>
        )}

        <div className={styles.tokenCard__footer}>
          <code 
            className={styles.tokenCard__variable} 
            onClick={handleCopy}
            title="Click to copy variable"
          >
            {showCheck ? 'Copied!' : (token.cssVariable || 'N/A')}
          </code>
          <Button
            variant={showCheck ? "success" : "primary"}
            size="sm"
            className={styles.tokenCard__copyBtn}
            iconOnly
            onClick={handleCopy}
            icon={
              <Icon
                name={showCheck ? "Check" : "Copy"}
                weight="bold"
                size={14}
              />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default TokenCard;
