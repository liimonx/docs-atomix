import { FC, useState } from 'react';
import { Input, Button } from '@shohojdhara/atomix';
import {
  getComplementary,
  getAnalogous,
  getTriadic,
  getTetradic,
} from '@/utils/colorUtils';
import styles from './ColorHarmonies.module.scss';

export const ColorHarmonies: FC = () => {
  const [baseColor, setBaseColor] = useState('#8b5cf6');
  const [complementary, setComplementary] = useState<string>('');
  const [analogous, setAnalogous] = useState<string[]>([]);
  const [triadic, setTriadic] = useState<string[]>([]);
  const [tetradic, setTetradic] = useState<string[]>([]);

  const handleGenerate = () => {
    setComplementary(getComplementary(baseColor));
    setAnalogous(getAnalogous(baseColor, 5));
    setTriadic(getTriadic(baseColor));
    setTetradic(getTetradic(baseColor));
  };

  return (
    <div className={styles.colorHarmonies}>
      <div className={styles.colorHarmonies__input}>
        <label className={styles.colorHarmonies__label}>Base Color</label>
        <div className={styles.colorHarmonies__colorRow}>
          <input
            type="color"
            value={baseColor}
            onChange={(e) => setBaseColor(e.target.value)}
            className={styles.colorHarmonies__colorPicker}
          />
          <Input
            type="text"
            value={baseColor}
            onChange={(e) => setBaseColor(e.target.value)}
            className={styles.colorHarmonies__textInput}
          />
          <Button variant="primary" size="sm" onClick={handleGenerate}>
            Generate
          </Button>
        </div>
      </div>

      {complementary && (
        <>
          <div className={styles.colorHarmonies__section}>
            <h4 className={styles.colorHarmonies__sectionTitle}>Complementary</h4>
            <div className={styles.colorHarmonies__swatches}>
              <div className={styles.colorHarmonies__swatch}>
                <div
                  className={styles.colorHarmonies__swatchColor}
                  style={{ backgroundColor: baseColor }}
                />
                <span className={styles.colorHarmonies__swatchValue}>{baseColor}</span>
              </div>
              <div className={styles.colorHarmonies__swatch}>
                <div
                  className={styles.colorHarmonies__swatchColor}
                  style={{ backgroundColor: complementary }}
                />
                <span className={styles.colorHarmonies__swatchValue}>{complementary}</span>
              </div>
            </div>
          </div>

          <div className={styles.colorHarmonies__section}>
            <h4 className={styles.colorHarmonies__sectionTitle}>Analogous</h4>
            <div className={styles.colorHarmonies__swatches}>
              {analogous.map((color, index) => (
                <div key={index} className={styles.colorHarmonies__swatch}>
                  <div
                    className={styles.colorHarmonies__swatchColor}
                    style={{ backgroundColor: color }}
                  />
                  <span className={styles.colorHarmonies__swatchValue}>{color}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.colorHarmonies__section}>
            <h4 className={styles.colorHarmonies__sectionTitle}>Triadic</h4>
            <div className={styles.colorHarmonies__swatches}>
              {triadic.map((color, index) => (
                <div key={index} className={styles.colorHarmonies__swatch}>
                  <div
                    className={styles.colorHarmonies__swatchColor}
                    style={{ backgroundColor: color }}
                  />
                  <span className={styles.colorHarmonies__swatchValue}>{color}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.colorHarmonies__section}>
            <h4 className={styles.colorHarmonies__sectionTitle}>Tetradic</h4>
            <div className={styles.colorHarmonies__swatches}>
              {tetradic.map((color, index) => (
                <div key={index} className={styles.colorHarmonies__swatch}>
                  <div
                    className={styles.colorHarmonies__swatchColor}
                    style={{ backgroundColor: color }}
                  />
                  <span className={styles.colorHarmonies__swatchValue}>{color}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

