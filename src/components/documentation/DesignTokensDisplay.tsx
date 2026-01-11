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

  // Group tokens by type for better organization
  const groupedTokens = designTokens.reduce((acc, token) => {
    if (!acc[token.type]) {
      acc[token.type] = [];
    }
    acc[token.type].push(token);
    return acc;
  }, {} as Record<string, typeof designTokens>);

  return (
    <div className={styles.designTokensDisplay}>
      <section className={styles.designTokensDisplay__overview}>
        <h2 className={styles.designTokensDisplay__title}>Design Tokens</h2>
        <p className={styles.designTokensDisplay__description}>
          This component uses the following design tokens from the Atomix Design System.
        </p>
      </section>

      {groupedTokens.color && (
        <section className={styles.designTokensDisplay__section}>
          <h3 className={styles.designTokensDisplay__sectionTitle}>Color Tokens</h3>
          <div className={styles.designTokensDisplay__colorGrid} role="list" aria-label="Color tokens">
            {groupedTokens.color.map((token, index) => (
              <div 
                key={`color-${index}`} 
                className={styles.designTokensDisplay__colorCard}
                tabIndex={0}
                aria-label={`${token.name}: ${token.value}`}
                onClick={() => navigator.clipboard.writeText(token.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    navigator.clipboard.writeText(token.value);
                  }
                }}
                title="Click to copy color value"
              >
                <div 
                  className={styles.designTokensDisplay__colorSwatch}
                  style={{ backgroundColor: token.value }}
                  aria-label={`Color preview: ${token.value}`}
                  role="img"
                >
                  <div className={styles.designTokensDisplay__colorOverlay}></div>
                </div>
                <div className={styles.designTokensDisplay__colorInfo}>
                  <div className={styles.designTokensDisplay__colorName}>{token.name}</div>
                  <div className={styles.designTokensDisplay__colorValue}>{token.value}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {(groupedTokens.spacing || groupedTokens.typography) && (
        <div className={styles.designTokensDisplay__grid} role="list" aria-label="Design tokens">
          {[...(groupedTokens.spacing || []), ...(groupedTokens.typography || [])].map((token, index) => (
            <Card 
              key={`other-${index}`} 
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
      )}

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