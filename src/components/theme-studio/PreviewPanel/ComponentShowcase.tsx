import { FC } from 'react';
import {
  Card,
  Button,
  Badge,
  Input,
} from '@shohojdhara/atomix';
import { useThemeStudioStore } from '@/stores/themeStudioStore';
import styles from './ComponentShowcase.module.scss';

export const ComponentShowcase: FC = () => {
  const { activeMode, lightTokens, darkTokens } = useThemeStudioStore();
  const currentTokens = activeMode === 'light' ? lightTokens : darkTokens;

  return (
    <div className={styles.componentShowcase}>
      <Card className={styles.componentShowcase__card}>
        <h3 style={{ color: 'var(--atomix-heading-color)', marginTop: 0 }}>
          Theme Preview
        </h3>
        <p style={{ color: 'var(--atomix-body-color)' }}>
          This is a preview of your custom theme. All components will use these
          colors and typography settings.
        </p>

        <div className={styles.componentShowcase__section}>
          <h4 style={{ color: 'var(--atomix-heading-color)' }}>Badges</h4>
          <div className={styles.componentShowcase__row}>
            <Badge variant="primary" label="Primary" />
            <Badge variant="secondary" label="Secondary" />
            <Badge variant="success" label="Success" />
            <Badge variant="error" label="Error" />
            <Badge variant="warning" label="Warning" />
            <Badge variant="info" label="Info" />
          </div>
        </div>

        <div className={styles.componentShowcase__section}>
          <h4 style={{ color: 'var(--atomix-heading-color)' }}>Buttons</h4>
          <div className={styles.componentShowcase__row}>
            <Button variant="primary" size="sm">
              Primary Button
            </Button>
            <Button variant="secondary" size="sm">
              Secondary Button
            </Button>
            <Button variant="outline-primary" size="sm">
              Outline Button
            </Button>
            <Button variant="success" size="sm">
              Success Button
            </Button>
            <Button variant="error" size="sm">
              Error Button
            </Button>
          </div>
        </div>

        <div className={styles.componentShowcase__section}>
          <h4 style={{ color: 'var(--atomix-heading-color)' }}>Inputs</h4>
          <div className={styles.componentShowcase__column}>
            <Input type="text" placeholder="Sample input field" />
            <Input type="text" placeholder="Another input field" />
          </div>
        </div>

        <div className={styles.componentShowcase__section}>
          <h4 style={{ color: 'var(--atomix-heading-color)' }}>
            Typography Sample
          </h4>
          <p style={{ color: 'var(--atomix-body-color)' }}>
            This is body text using your configured typography settings. The
            font family is{' '}
            <code style={{ color: 'var(--atomix-primary)' }}>
              {currentTokens['--atomix-body-font-family'] || 'default'}
            </code>{' '}
            and the base font size is{' '}
            <code style={{ color: 'var(--atomix-primary)' }}>
              {currentTokens['--atomix-body-font-size'] || '1rem'}
            </code>
            .
          </p>
          <p style={{ color: 'var(--atomix-secondary-text-emphasis)' }}>
            This is secondary text using the secondary text color.
          </p>
          <div className={styles.componentShowcase__typography}>
            <h1 style={{ color: 'var(--atomix-heading-color)', margin: '0.5rem 0' }}>
              Heading 1
            </h1>
            <h2 style={{ color: 'var(--atomix-heading-color)', margin: '0.5rem 0' }}>
              Heading 2
            </h2>
            <h3 style={{ color: 'var(--atomix-heading-color)', margin: '0.5rem 0' }}>
              Heading 3
            </h3>
          </div>
        </div>

        <div className={styles.componentShowcase__section}>
          <h4 style={{ color: 'var(--atomix-heading-color)' }}>
            Background Samples
          </h4>
          <div className={styles.componentShowcase__row}>
            <div
              className={styles.componentShowcase__colorSample}
              style={{
                backgroundColor: 'var(--atomix-primary-bg-subtle)',
                color: 'var(--atomix-primary-text-emphasis)',
                border: '1px solid var(--atomix-primary-border-subtle)',
              }}
            >
              Primary Background
            </div>
            <div
              className={styles.componentShowcase__colorSample}
              style={{
                backgroundColor: 'var(--atomix-success-bg-subtle)',
                color: 'var(--atomix-success-text-emphasis)',
                border: '1px solid var(--atomix-success-border-subtle)',
              }}
            >
              Success Background
            </div>
            <div
              className={styles.componentShowcase__colorSample}
              style={{
                backgroundColor: 'var(--atomix-error-bg-subtle)',
                color: 'var(--atomix-error-text-emphasis)',
                border: '1px solid var(--atomix-error-border-subtle)',
              }}
            >
              Error Background
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

