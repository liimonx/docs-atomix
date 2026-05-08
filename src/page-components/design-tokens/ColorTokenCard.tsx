"use client";

import React, { useState } from "react";
import { Button, Icon } from "@shohojdhara/atomix";
import { DesignToken } from "@/data/design-tokens";
import useCopyToClipboard from "@/hooks/useCopyToClipboard";
import styles from "./ColorTokenCard.module.scss";

interface ColorTokenCardProps {
  token: DesignToken;
}

const ColorTokenCard: React.FC<ColorTokenCardProps> = ({ token }) => {
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
  const colorValue = isGradient
    ? token.value
    : token.value.startsWith("#") || token.value.startsWith("rgb")
    ? token.value
    : token.cssVariable || token.value;

  return (
    <div className={styles.colorTokenCard}>
      {/* Decorative glow behind the card on hover */}
      <div 
        className={styles.colorTokenCard__glow} 
        style={{ background: isGradient ? 'var(--atomix-primary)' : colorValue }} 
      />

      <div className={styles.colorTokenCard__header}>
        <div
          className={styles.colorTokenCard__swatch}
          style={{ background: colorValue }}
        />
        <div className={styles.colorTokenCard__titleGroup}>
          <h3 className={styles.colorTokenCard__name}>{token.name}</h3>
          <span className={styles.colorTokenCard__value}>{token.value}</span>
        </div>
      </div>

      <p className={styles.colorTokenCard__description}>{token.description}</p>

      <div className={styles.colorTokenCard__variableWrapper}>
        <code 
          className={styles.colorTokenCard__variable} 
          onClick={handleCopy}
          title="Click to copy variable"
        >
          {showCheck ? 'Copied!' : (token.cssVariable || 'N/A')}
        </code>
        <Button
          variant={showCheck ? "success" : "primary"}
          size="sm"
          className={styles.colorTokenCard__copyBtn}
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
  );
};

export default ColorTokenCard;
