import { FC, useState } from 'react';
import { Input, Badge } from '@shohojdhara/atomix';
import { getContrastRatio } from '@/utils/colorUtils';
import styles from './ContrastChecker.module.scss';

// Default color constants
const DEFAULT_FOREGROUND_COLOR = '#000000'; // Black
const DEFAULT_BACKGROUND_COLOR = '#ffffff'; // White

export const ContrastChecker: FC = () => {
  const [foreground, setForeground] = useState(DEFAULT_FOREGROUND_COLOR);
  const [background, setBackground] = useState(DEFAULT_BACKGROUND_COLOR);

  // Calculate contrast ratio using theme library
  const ratio = getContrastRatio(foreground, background);
  const roundedRatio = Math.round(ratio * 100) / 100;
  
  // WCAG compliance levels
  const aaNormal = ratio >= 4.5;
  const aaLarge = ratio >= 3;
  const aaaNormal = ratio >= 7;
  const aaaLarge = ratio >= 4.5;
  
  let level: 'AAA' | 'AA' | 'FAIL' = 'FAIL';
  if (aaaNormal || aaaLarge) {
    level = 'AAA';
  } else if (aaNormal || aaLarge) {
    level = 'AA';
  }
  
  const result = {
    ratio: roundedRatio,
    aa: {
      normal: aaNormal,
      large: aaLarge,
    },
    aaa: {
      normal: aaaNormal,
      large: aaaLarge,
    },
    level,
  };

  return (
    <div className={styles.contrastChecker}>
      <div className={styles.contrastChecker__inputs}>
        <div className={styles.contrastChecker__inputGroup}>
          <label className={styles.contrastChecker__label}>Foreground</label>
          <div className={styles.contrastChecker__colorRow}>
            <input
              type="color"
              value={foreground}
              onChange={(e) => setForeground(e.target.value)}
              className={styles.contrastChecker__colorPicker}
            />
            <Input
              type="text"
              value={foreground}
              onChange={(e) => setForeground(e.target.value)}
              className={styles.contrastChecker__textInput}
            />
          </div>
        </div>

        <div className={styles.contrastChecker__inputGroup}>
          <label className={styles.contrastChecker__label}>Background</label>
          <div className={styles.contrastChecker__colorRow}>
            <input
              type="color"
              value={background}
              onChange={(e) => setBackground(e.target.value)}
              className={styles.contrastChecker__colorPicker}
            />
            <Input
              type="text"
              value={background}
              onChange={(e) => setBackground(e.target.value)}
              className={styles.contrastChecker__textInput}
            />
          </div>
        </div>
      </div>

      <div className={styles.contrastChecker__preview}>
        <div
          className={styles.contrastChecker__sample}
          style={{
            color: foreground,
            backgroundColor: background,
          }}
        >
          Sample text with this contrast ratio
        </div>
      </div>

      <div className={styles.contrastChecker__results}>
        <div className={styles.contrastChecker__ratio}>
          <span className={styles.contrastChecker__ratioLabel}>Contrast Ratio</span>
          <span className={styles.contrastChecker__ratioValue}>{result.ratio}:1</span>
        </div>

        <div className={styles.contrastChecker__compliance}>
          <div className={styles.contrastChecker__level}>
            <Badge
              variant={result.level === 'FAIL' ? 'error' : result.level === 'AAA' ? 'success' : 'warning'}
              size="sm"
              label={result.level}
            />
          </div>

          <div className={styles.contrastChecker__checks}>
            <div className={styles.contrastChecker__check}>
              <span>AA Normal Text:</span>
              <Badge
                variant={result.aa.normal ? 'success' : 'error'}
                size="sm"
                label={result.aa.normal ? 'Pass' : 'Fail'}
              />
            </div>
            <div className={styles.contrastChecker__check}>
              <span>AA Large Text:</span>
              <Badge
                variant={result.aa.large ? 'success' : 'error'}
                size="sm"
                label={result.aa.large ? 'Pass' : 'Fail'}
              />
            </div>
            <div className={styles.contrastChecker__check}>
              <span>AAA Normal Text:</span>
              <Badge
                variant={result.aaa.normal ? 'success' : 'error'}
                size="sm"
                label={result.aaa.normal ? 'Pass' : 'Fail'}
              />
            </div>
            <div className={styles.contrastChecker__check}>
              <span>AAA Large Text:</span>
              <Badge
                variant={result.aaa.large ? 'success' : 'error'}
                size="sm"
                label={result.aaa.large ? 'Pass' : 'Fail'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

