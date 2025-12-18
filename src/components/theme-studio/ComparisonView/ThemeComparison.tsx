import { FC, useState } from 'react';
import { Card, Button, Callout } from '@shohojdhara/atomix';
import { useThemeStudioStore } from '@/stores/themeStudioStore';
import { DiffViewer } from './DiffViewer';
import styles from './ThemeComparison.module.scss';

export const ThemeComparison: FC = () => {
  const {
    comparisonMode,
    comparisonTheme,
    lightTokens,
    darkTokens,
    activeMode,
    setComparisonMode,
    setComparisonTheme,
  } = useThemeStudioStore();
  const [error, setError] = useState<string | null>(null);

  const currentTokens = activeMode === 'light' ? lightTokens : darkTokens;

  if (!comparisonMode) {
    return (
      <Card className={styles.themeComparison}>
        <div className={styles.themeComparison__empty}>
          <h3>Theme Comparison</h3>
          <p>Load a theme to compare with your current theme.</p>
          {error && (
            <Callout
              variant="error"
              title="Error"
              onClose={() => setError(null)}
              className={styles.themeComparison__error}
            >
              {error}
            </Callout>
          )}
          <Button
            variant="primary"
            onClick={() => {
              // Trigger file input
              const input = document.createElement('input');
              input.type = 'file';
              input.accept = '.json';
              input.onchange = (e) => {
                const file = (e.target as HTMLInputElement).files?.[0];
                if (!file) return;

                const reader = new FileReader();
                reader.onload = (event) => {
                  try {
                    const data = JSON.parse(event.target?.result as string);
                    setComparisonTheme({
                      light: data.light || {},
                      dark: data.dark || {},
                    });
                    setComparisonMode(true);
                    setError(null);
                  } catch (error) {
                    setError('Error parsing theme file. Please ensure it is valid JSON.');
                  }
                };
                reader.onerror = () => {
                  setError('Error reading file. Please try again.');
                };
                reader.readAsText(file);
              };
              input.click();
            }}
          >
            Load Theme to Compare
          </Button>
        </div>
      </Card>
    );
  }

  const comparisonTokens = activeMode === 'light'
    ? comparisonTheme?.light || {}
    : comparisonTheme?.dark || {};

  return (
    <div className={styles.themeComparison}>
      <div className={styles.themeComparison__header}>
        <h3>Theme Comparison</h3>
        <Button variant="outline-secondary" size="sm" onClick={() => setComparisonMode(false)}>
          Close Comparison
        </Button>
      </div>
      <DiffViewer current={currentTokens} comparison={comparisonTokens} />
    </div>
  );
};

