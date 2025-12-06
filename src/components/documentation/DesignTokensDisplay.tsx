import { FC } from "react";

import { Card, Badge } from '@shohojdhara/atomix';
import type { ComponentDocumentation } from '@/types/index';
import styles from './DesignTokensDisplay.module.scss';

export interface DesignTokensDisplayProps {
  component: ComponentDocumentation;
}

export const DesignTokensDisplay: FC<DesignTokensDisplayProps> = ({ component }) => {
  const designTokens = component.designTokens;

  if (!designTokens || designTokens.length === 0) {
    return (
      <div className={styles.designTokensDisplay__empty}>
        <p>No design tokens information available for this component.</p>
      </div>
    );
  }

  return (
    <div className={styles.designTokensDisplay}>
      <section className={styles.designTokensDisplay__overview}>
        <h2 className={styles.designTokensDisplay__title}>Design Tokens</h2>
        <p className={styles.designTokensDisplay__description}>
          This component uses the following design tokens from the Atomix Design System.
        </p>
      </section>

      <div className={styles.designTokensDisplay__grid} role="list" aria-label="Design tokens">
        {designTokens.map((token, index) => (
          <Card 
            key={index} 
            className={styles.designTokensDisplay__tokenCard}
            aria-labelledby={`token-${index}-name`}
          >
            <div className={styles.designTokensDisplay__tokenHeader}>
              <h3 
                id={`token-${index}-name`}
                className={styles.designTokensDisplay__tokenName}
              >
                {token.name}
              </h3>
              <Badge variant="secondary" size="sm" label={token.category} />
            </div>
            
            <div 
              className={styles.designTokensDisplay__preview}
              aria-label={`${token.name} preview`}
            >
              {token.type === 'color' && (
                <div 
                  className={styles.designTokensDisplay__colorPreview}
                  style={{ backgroundColor: token.value }}
                  aria-label={`Color preview: ${token.value}`}
                  role="img"
                />
              )}
              
              {token.type === 'spacing' && (
                <div className={styles.designTokensDisplay__spacingPreview}>
                  <div 
                    className={styles.designTokensDisplay__spacingBox}
                    style={{ width: token.value, height: token.value }}
                  />
                </div>
              )}
              
              {token.type === 'typography' && (
                <div 
                  className={styles.designTokensDisplay__typographyPreview}
                  style={{ 
                    fontFamily: token.fontFamily,
                    fontSize: token.fontSize,
                    fontWeight: token.fontWeight
                  }}
                >
                  Aa
                </div>
              )}
            </div>
            
            <div className={styles.designTokensDisplay__details}>
              <div className={styles.designTokensDisplay__value}>
                <label 
                  className={styles.designTokensDisplay__label}
                  htmlFor={`token-${index}-value`}
                >
                  Value:
                </label>
                <code 
                  id={`token-${index}-value`}
                  className={styles.designTokensDisplay__code}
                >
                  {token.value}
                </code>
              </div>
              
              {token.description && (
                <p 
                  className={styles.designTokensDisplay__tokenDescription}
                  aria-describedby={`token-${index}-name`}
                >
                  {token.description}
                </p>
              )}
              
              {token.cssVariable && (
                <div className={styles.designTokensDisplay__css}>
                  <label 
                    className={styles.designTokensDisplay__label}
                    htmlFor={`token-${index}-css`}
                  >
                    CSS Variable:
                  </label>
                  <code 
                    id={`token-${index}-css`}
                    className={styles.designTokensDisplay__code}
                  >
                    {token.cssVariable}
                  </code>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>

      <section className={styles.designTokensDisplay__themingGuide}>
        <h2 className={styles.designTokensDisplay__themingTitle}>Theming</h2>
        <p className={styles.designTokensDisplay__themingText}>
          This component supports all Atomix themes including light, dark, and high-contrast modes. 
          The design tokens will automatically adapt to the selected theme.
        </p>
      </section>
    </div>
  );
};