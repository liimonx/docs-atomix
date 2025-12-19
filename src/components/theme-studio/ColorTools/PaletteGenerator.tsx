import { FC, useState } from 'react';
import { Input, Button } from '@shohojdhara/atomix';
import { lighten, darken, generateColorScale } from '@/utils/colorUtils';
import styles from './PaletteGenerator.module.scss';

// Default color constants
const DEFAULT_PRIMARY_COLOR = '#8b5cf6'; // Purple primary color

export const PaletteGenerator: FC = () => {
  const [baseColor, setBaseColor] = useState(DEFAULT_PRIMARY_COLOR);
  const [scale, setScale] = useState<string[]>([]);
  const [tints, setTints] = useState<string[]>([]);
  const [shades, setShades] = useState<string[]>([]);

  const handleGenerate = () => {
    // Generate color scale using existing utility (keeps HSL-based scale for better results)
    const newScale = generateColorScale(baseColor, 10);
    
    // Use colorUtils lighten/darken for tints and shades (HSL-based for better color results)
    const newTints: string[] = [];
    const newShades: string[] = [];
    
    // Generate tints (lighter) - using percentage-based lightening
    for (let i = 1; i <= 5; i++) {
      const amount = i * 15; // 15%, 30%, 45%, 60%, 75% lighter
      newTints.push(lighten(baseColor, amount));
    }
    
    // Generate shades (darker) - using percentage-based darkening
    for (let i = 1; i <= 5; i++) {
      const amount = i * 15; // 15%, 30%, 45%, 60%, 75% darker
      newShades.push(darken(baseColor, amount));
    }
    
    setScale(newScale);
    setTints(newTints);
    setShades(newShades);
  };

  return (
    <div className={styles.paletteGenerator}>
      <div className={styles.paletteGenerator__input}>
        <label className={styles.paletteGenerator__label}>Base Color</label>
        <div className={styles.paletteGenerator__colorRow}>
          <input
            type="color"
            value={baseColor}
            onChange={(e) => setBaseColor(e.target.value)}
            className={styles.paletteGenerator__colorPicker}
          />
          <Input
            type="text"
            value={baseColor}
            onChange={(e) => setBaseColor(e.target.value)}
            className={styles.paletteGenerator__textInput}
          />
          <Button variant="primary" size="sm" onClick={handleGenerate}>
            Generate
          </Button>
        </div>
      </div>

      {scale.length > 0 && (
        <>
          <div className={styles.paletteGenerator__section}>
            <h4 className={styles.paletteGenerator__sectionTitle}>Color Scale</h4>
            <div className={styles.paletteGenerator__swatches}>
              {scale.map((color, index) => (
                <div key={index} className={styles.paletteGenerator__swatch}>
                  <div
                    className={styles.paletteGenerator__swatchColor}
                    style={{ backgroundColor: color }}
                  />
                  <span className={styles.paletteGenerator__swatchValue}>{color}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.paletteGenerator__section}>
            <h4 className={styles.paletteGenerator__sectionTitle}>Tints (Lighter)</h4>
            <div className={styles.paletteGenerator__swatches}>
              {tints.map((color, index) => (
                <div key={index} className={styles.paletteGenerator__swatch}>
                  <div
                    className={styles.paletteGenerator__swatchColor}
                    style={{ backgroundColor: color }}
                  />
                  <span className={styles.paletteGenerator__swatchValue}>{color}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.paletteGenerator__section}>
            <h4 className={styles.paletteGenerator__sectionTitle}>Shades (Darker)</h4>
            <div className={styles.paletteGenerator__swatches}>
              {shades.map((color, index) => (
                <div key={index} className={styles.paletteGenerator__swatch}>
                  <div
                    className={styles.paletteGenerator__swatchColor}
                    style={{ backgroundColor: color }}
                  />
                  <span className={styles.paletteGenerator__swatchValue}>{color}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

