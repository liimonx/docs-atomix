import { FC, useState } from 'react';
import { Card, Icon } from '@shohojdhara/atomix';
import styles from './ColorPaletteDisplay.module.scss';

interface ColorToken {
  name: string;
  value: string;
  category: string;
  description?: string;
}

interface ColorPaletteDisplayProps {
  colorTokens: ColorToken[];
  title?: string;
  description?: string;
}

export const ColorPaletteDisplay: FC<ColorPaletteDisplayProps> = ({ 
  colorTokens, 
  title = 'Color Palette',
  description = 'Our curated collection of design system colors'
}) => {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const handleCopy = (value: string, name: string) => {
    navigator.clipboard.writeText(value);
    setCopiedColor(name);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  // Group colors by category
  const groupedColors = colorTokens.reduce((acc, token) => {
    if (!acc[token.category]) {
      acc[token.category] = [];
    }
    acc[token.category].push(token);
    return acc;
  }, {} as Record<string, ColorToken[]>);

  return (
    <div className={styles.colorPaletteDisplay}>
      <header className={styles.colorPaletteDisplay__header}>
        <h2 className={styles.colorPaletteDisplay__title}>{title}</h2>
        <p className={styles.colorPaletteDisplay__description}>{description}</p>
      </header>

      {Object.entries(groupedColors).map(([category, tokens]) => (
        <section 
          key={category} 
          className={styles.colorPaletteDisplay__section}
        >
          <h3 className={styles.colorPaletteDisplay__categoryTitle}>
            {category.charAt(0).toUpperCase() + category.slice(1)} Colors
          </h3>
          
          <div className={styles.colorPaletteDisplay__grid}>
            {tokens.map((token, index) => (
              <div 
                key={`${token.name}-${index}`} 
                className={styles.colorPaletteDisplay__card}
                onClick={() => handleCopy(token.value, token.name)}
                aria-label={`${token.name}: ${token.value}`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleCopy(token.value, token.name);
                  }
                }}
              >
                <div 
                  className={styles.colorPaletteDisplay__swatch}
                  style={{ backgroundColor: token.value }}
                >
                  <div className={styles.colorPaletteDisplay__overlay}></div>
                  {copiedColor === token.name && (
                    <div className={styles.colorPaletteDisplay__checkmark}>
                      <Icon name="Check" size={16} />
                    </div>
                  )}
                </div>
                <div className={styles.colorPaletteDisplay__info}>
                  <div className={styles.colorPaletteDisplay__name}>{token.name}</div>
                  <div className={styles.colorPaletteDisplay__value}>{token.value}</div>
                  {token.description && (
                    <div className={styles.colorPaletteDisplay__description}>
                      {token.description}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      <footer className={styles.colorPaletteDisplay__footer}>
        <Card className={styles.colorPaletteDisplay__usageCard}>
          <h4 className={styles.colorPaletteDisplay__usageTitle}>Usage Guidelines</h4>
          <ul className={styles.colorPaletteDisplay__usageList}>
            <li>Primary colors for main brand elements and CTAs</li>
            <li>Secondary colors for supporting elements and accents</li>
            <li>Semantic colors for status indicators (success, warning, error, info)</li>
            <li>Ensure proper contrast ratios for accessibility</li>
          </ul>
        </Card>
      </footer>
    </div>
  );
};