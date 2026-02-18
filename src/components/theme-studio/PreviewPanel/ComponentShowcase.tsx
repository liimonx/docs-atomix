'use client';

import { FC, useMemo, useState, useEffect } from 'react';
import {
  Card,
  Button,
  Badge,
  Input,
  Tabs,
  Textarea,
  Select,
  Toggle,
  Spinner,
  Progress,
  Callout,
  Breadcrumb,
  Pagination,
  Steps,
  Avatar,
  Rating,
  Accordion,
  Row,
  GridCol,
  AtomixGlass,
  Icon,
} from '@shohojdhara/atomix';
import { useThemeStudioStore } from '@/stores/themeStudioStore';
import styles from './ComponentShowcase.module.scss';

export const ComponentShowcase: FC = () => {
  const { activeMode, lightTokens, darkTokens } = useThemeStudioStore();
  const currentTokens = activeMode === 'light' ? lightTokens : darkTokens;
  const [componentSearch, setComponentSearch] = useState('');
  const [mounted, setMounted] = useState(false);
  const [toggleChecked, setToggleChecked] = useState(false);

  // Ensure component only renders Rating on client to avoid hydration mismatches
  useEffect(() => {
    setMounted(true);
  }, []);

  // Filter tab items based on search
  const filteredTabItems = useMemo(() => {
    const allTabs = [
      {
        id: 'overview',
        label: 'Overview',
        content: (
          <div className={styles.componentShowcase__content}>
        <div className={styles.componentShowcase__section}>
              <h4 style={{ color: 'var(--atomix-heading-color)' }}>Typography</h4>
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
                <p style={{ color: 'var(--atomix-body-color)' }}>
                  This is body text using your configured typography settings. The
                  font family is{' '}
                  <code style={{ color: 'var(--atomix-primary)' }}>
                    {currentTokens['--atomix-body-font-family'] || 'default'}
                  </code>
                  .
                </p>
                <p style={{ color: 'var(--atomix-secondary-text-emphasis)' }}>
                  This is secondary text using the secondary text color.
                </p>
          </div>
        </div>

        <div className={styles.componentShowcase__section}>
              <h4 style={{ color: 'var(--atomix-heading-color)' }}>Color Swatches</h4>
              <Row>
                <GridCol md={4}>
            <div
              className={styles.componentShowcase__colorSample}
              style={{
                backgroundColor: 'var(--atomix-primary-bg-subtle)',
                color: 'var(--atomix-primary-text-emphasis)',
                border: '1px solid var(--atomix-primary-border-subtle)',
              }}
            >
                    Primary
            </div>
                </GridCol>
                <GridCol md={4}>
            <div
              className={styles.componentShowcase__colorSample}
              style={{
                backgroundColor: 'var(--atomix-success-bg-subtle)',
                color: 'var(--atomix-success-text-emphasis)',
                border: '1px solid var(--atomix-success-border-subtle)',
              }}
            >
                    Success
            </div>
                </GridCol>
                <GridCol md={4}>
            <div
              className={styles.componentShowcase__colorSample}
              style={{
                backgroundColor: 'var(--atomix-error-bg-subtle)',
                color: 'var(--atomix-error-text-emphasis)',
                border: '1px solid var(--atomix-error-border-subtle)',
              }}
            >
                    Error
                  </div>
                </GridCol>
              </Row>
            </div>

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
                <Button variant="primary" size="sm">Primary</Button>
                <Button variant="secondary" size="sm">Secondary</Button>
                <Button variant="success" size="sm">Success</Button>
                <Button variant="error" size="sm">Error</Button>
                <Button variant="outline-primary" size="sm">Outline</Button>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 'forms',
        label: 'Forms',
        content: (
          <div className={styles.componentShowcase__content}>
            <div className={styles.componentShowcase__section}>
              <h4 style={{ color: 'var(--atomix-heading-color)' }}>Input</h4>
              <div className={styles.componentShowcase__column}>
                <Input type="text" placeholder="Default input" />
                <Input type="text" placeholder="Disabled input" disabled />
                <Input type="email" placeholder="Email input" />
              </div>
            </div>

            <div className={styles.componentShowcase__section}>
              <h4 style={{ color: 'var(--atomix-heading-color)' }}>Textarea</h4>
              <Textarea placeholder="Enter your message here..." rows={4} />
            </div>

            <div className={styles.componentShowcase__section}>
              <h4 style={{ color: 'var(--atomix-heading-color)' }}>Select</h4>
              <Select
                options={[
                  { value: 'option1', label: 'Option 1' },
                  { value: 'option2', label: 'Option 2' },
                  { value: 'option3', label: 'Option 3' },
                ]}
                placeholder="Select an option"
              />
            </div>

            <div className={styles.componentShowcase__section}>
              <h4 style={{ color: 'var(--atomix-heading-color)' }}>Toggle</h4>
              <Toggle
                checked={toggleChecked}
                onChange={(checked) => setToggleChecked(checked)}
              />
              <span style={{ marginLeft: '0.5rem', color: 'var(--atomix-body-color)' }}>
                Enable feature
              </span>
            </div>
          </div>
        ),
      },
      {
        id: 'feedback',
        label: 'Feedback',
        content: (
          <div className={styles.componentShowcase__content}>
            <div className={styles.componentShowcase__section}>
              <h4 style={{ color: 'var(--atomix-heading-color)' }}>Spinner</h4>
              <div className={styles.componentShowcase__row}>
                <Spinner size="sm" />
                <Spinner size="md" />
                <Spinner size="lg" />
              </div>
            </div>

            <div className={styles.componentShowcase__section}>
              <h4 style={{ color: 'var(--atomix-heading-color)' }}>Progress</h4>
              <Progress value={30} variant="primary" />
              <Progress value={60} variant="success" className="u-mt-2" />
              <Progress value={90} variant="error" className="u-mt-2" />
            </div>

            <div className={styles.componentShowcase__section}>
              <h4 style={{ color: 'var(--atomix-heading-color)' }}>Callout</h4>
              <Callout variant="info" title="Information">
                This is an informational callout message.
              </Callout>
              <Callout variant="success" title="Success" className="u-mt-2">
                Operation completed successfully!
              </Callout>
              <Callout variant="warning" title="Warning" className="u-mt-2">
                Please review before proceeding.
              </Callout>
              <Callout variant="error" title="Error" className="u-mt-2">
                An error occurred during processing.
              </Callout>
            </div>
          </div>
        ),
      },
      {
        id: 'navigation',
        label: 'Navigation',
        content: (
          <div className={styles.componentShowcase__content}>
            <div className={styles.componentShowcase__section}>
              <h4 style={{ color: 'var(--atomix-heading-color)' }}>Breadcrumb</h4>
              <Breadcrumb
                items={[
                  { label: 'Home', href: '#' },
                  { label: 'Components', href: '#' },
                  { label: 'Theme Studio', href: '#' },
                ]}
              />
            </div>

            <div className={styles.componentShowcase__section}>
              <h4 style={{ color: 'var(--atomix-heading-color)' }}>Pagination</h4>
              <Pagination
                currentPage={2}
                totalPages={5}
                onPageChange={() => {}}
              />
            </div>

            <div className={styles.componentShowcase__section}>
              <h4 style={{ color: 'var(--atomix-heading-color)' }}>Steps</h4>
              <Steps
                items={[
                  { number: 1, text: 'Step 1' },
                  { number: 2, text: 'Step 2' },
                  { number: 3, text: 'Step 3' },
                ]}
                activeIndex={1}
              />
            </div>
          </div>
        ),
      },
      {
        id: 'data-display',
        label: 'Data Display',
        content: (
          <div className={styles.componentShowcase__content}>
            <div className={styles.componentShowcase__section}>
              <h4 style={{ color: 'var(--atomix-heading-color)' }}>Avatar</h4>
              <div className={styles.componentShowcase__row}>
                <Avatar initials="JD" size="sm" />
                <Avatar initials="JS" size="md" />
                <Avatar initials="BJ" size="lg" />
              </div>
            </div>

            <div className={styles.componentShowcase__section}>
              <h4 style={{ color: 'var(--atomix-heading-color)' }}>Rating</h4>
              {mounted ? (
                <Rating value={3.5} maxValue={5} readOnly />
              ) : (
                <div style={{ height: '24px', display: 'flex', alignItems: 'center', color: 'var(--atomix-secondary-text-emphasis)' }}>
                  Loading...
                </div>
              )}
            </div>

            <div className={styles.componentShowcase__section}>
              <h4 style={{ color: 'var(--atomix-heading-color)' }}>Card</h4>
              <Row>
                <GridCol md={6}>
                  <Card>
                    <h5 style={{ color: 'var(--atomix-heading-color)', marginTop: 0 }}>
                      Card Title
                    </h5>
                    <p style={{ color: 'var(--atomix-body-color)' }}>
                      This is a card component with themed colors and spacing.
                    </p>
                  </Card>
                </GridCol>
                <GridCol md={6}>
                  <Card>
                    <h5 style={{ color: 'var(--atomix-heading-color)', marginTop: 0 }}>
                      Another Card
                    </h5>
                    <p style={{ color: 'var(--atomix-body-color)' }}>
                      Cards adapt to your theme colors.
                    </p>
                  </Card>
                </GridCol>
              </Row>
            </div>
          </div>
        ),
      },
      {
        id: 'overlays',
        label: 'Overlays',
        content: (
          <div className={styles.componentShowcase__content}>
            <div className={styles.componentShowcase__section}>
              <h4 style={{ color: 'var(--atomix-heading-color)' }}>Accordion</h4>
              <Accordion title="Accordion Item 1" defaultOpen>
                <p style={{ color: 'var(--atomix-body-color)' }}>
                  This is the content of the first accordion item.
                </p>
              </Accordion>
              <Accordion title="Accordion Item 2" className="u-mt-2">
                <p style={{ color: 'var(--atomix-body-color)' }}>
                  This is the content of the second accordion item.
                </p>
              </Accordion>
            </div>
          </div>
        ),
      },
      {
        id: 'effects',
        label: 'Effects',
        content: (
          <div className={styles.componentShowcase__content}>
            <div className={styles.componentShowcase__section}>
              <h4 style={{ color: 'var(--atomix-heading-color)' }}>AtomixGlass</h4>
              <p style={{ color: 'var(--atomix-body-color)', marginBottom: '1rem' }}>
                Glass morphism effects with liquid distortion
              </p>
              <Row>
                <GridCol md={6}>
                  <AtomixGlass
                    displacementScale={20}
                    blurAmount={3}
                    elasticity={0.3}
                    padding="20px"
                    cornerRadius={16}
                  >
                    <div style={{ padding: '1.5rem' }}>
                      <h5 style={{ color: 'var(--atomix-heading-color)', marginTop: 0 }}>
                        Standard Mode
                      </h5>
                      <p style={{ color: 'var(--atomix-body-color)', marginBottom: 0 }}>
                        Hover to see liquid distortion effect
                      </p>
                    </div>
                  </AtomixGlass>
                </GridCol>
                <GridCol md={6}>
                  <AtomixGlass
                    displacementScale={30}
                    blurAmount={5}
                    elasticity={0.5}
                    padding="20px"
                    cornerRadius={16}
                  >
                    <div style={{ padding: '1.5rem' }}>
                      <h5 style={{ color: 'var(--atomix-heading-color)', marginTop: 0 }}>
                        Enhanced Effect
                      </h5>
                      <p style={{ color: 'var(--atomix-body-color)', marginBottom: 0 }}>
                        Stronger distortion and elasticity
                      </p>
                    </div>
                  </AtomixGlass>
                </GridCol>
              </Row>
            </div>
          </div>
        ),
      },
    ];

    // Filter by search query only
    if (componentSearch.trim()) {
      const searchLower = componentSearch.toLowerCase();
      return allTabs.filter(tab => {
        // Only search by label since tab.content is a React JSX element
        // which cannot be meaningfully stringified for search
        const labelMatch = tab.label.toLowerCase().includes(searchLower);
        return labelMatch;
      });
    }

    return allTabs;
  }, [currentTokens, componentSearch, mounted, toggleChecked]);

  const clearSearch = () => {
    setComponentSearch('');
  };

  return (
    <div className={styles.componentShowcase}>
      <Card className={styles.componentShowcase__card}>
        <div className={styles.componentShowcase__header}>
          <div>
            <h3 style={{ color: 'var(--atomix-heading-color)', marginTop: 0 }}>
              Component Preview
            </h3>
            <p style={{ color: 'var(--atomix-body-color)', marginBottom: '1.5rem' }}>
              See how your theme looks across all Atomix components in real-time.
            </p>
          </div>
          
          {/* Component Search */}
          <div className={styles.componentShowcase__filter}>
            <div className={styles.componentShowcase__searchWrapper}>
              <Icon name="MagnifyingGlass" size={18} className={styles.componentShowcase__searchIcon} aria-hidden="true" />
              <Input
                type="search"
                placeholder="Search components..."
                value={componentSearch}
                onChange={(e) => setComponentSearch(e.target.value)}
                className={styles.componentShowcase__searchInput}
                aria-label="Search components in preview"
              />
              {componentSearch && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearSearch}
                  className={styles.componentShowcase__clearFilter}
                  aria-label="Clear search"
                >
                  <Icon name="X" size={16} aria-hidden="true" />
                </Button>
              )}
            </div>
          </div>
        </div>
        
        {filteredTabItems.length > 0 ? (
          <Tabs items={filteredTabItems} />
        ) : (
          <div className={styles.componentShowcase__noResults}>
            <p>No components found matching your search.</p>
            <Button variant="outline-secondary" size="sm" onClick={clearSearch}>
              Clear search
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
};

