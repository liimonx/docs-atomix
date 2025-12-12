"use client";

import { useMemo } from "react";
import {
  Hero,
  SectionIntro,
  Card,
  GridCol,
  Block,
  Grid,
  DataTable,
} from "@shohojdhara/atomix";
import { GlassProps } from "@/types/atomix-components";
import { getTokensByCategory } from "@/data/design-tokens";
import heroStyles from '@/styles/PageHero.module.scss';
import styles from './DesignTokensGridPage.module.scss';

const DesignTokensGridPage = () => {
  // Get breakpoints tokens from design tokens
  const breakpointsCategory = useMemo(() => getTokensByCategory('breakpoints'), []);
  const breakpointsTokens = useMemo(() => breakpointsCategory?.tokens || [], [breakpointsCategory]);

  // Get spacing tokens for grid gutters (commonly used spacing values)
  const spacingCategory = useMemo(() => getTokensByCategory('spacing'), []);
  const gutterSpacingTokens = useMemo(() => {
    if (!spacingCategory) return [];
    // Filter for commonly used gutter spacing values
    const gutterSpacings = ['2', '3', '4', '6', '8'];
    return spacingCategory.tokens.filter(token => 
      gutterSpacings.some(spacing => token.name.includes(`Spacing ${spacing}`) && !token.name.includes('PX'))
    );
  }, [spacingCategory]);

  // Format breakpoint data for DataTable
  const breakpointTableData = useMemo(() => {
    return breakpointsTokens.map(token => ({
      key: token.cssVariable?.replace('var(--', '').replace(')', '') || token.name.toLowerCase().replace(/\s+/g, '-'),
      value: token.value,
      description: token.description,
      cssVariable: token.cssVariable || '',
      render: (value: string) => <code>{value}</code>,
    }));
  }, [breakpointsTokens]);

  // Format spacing data for DataTable
  const spacingTableData = useMemo(() => {
    return gutterSpacingTokens.map(token => {
      // Extract pixel value from description if available
      const pixelMatch = token.description.match(/\((\d+px)\)/);
      const pixelValue = pixelMatch ? pixelMatch[1] : '';
      const displayValue = pixelValue ? `${token.value} (${pixelValue})` : token.value;
      
      return {
        key: token.cssVariable?.replace('var(--', '').replace(')', '') || token.name.toLowerCase().replace(/\s+/g, '-'),
        value: displayValue,
        description: token.description,
        cssVariable: token.cssVariable || '',
        render: (value: string) => <code>{value}</code>,
      };
    });
  }, [gutterSpacingTokens]);

  return (
    <>
      <Hero
        glass={
          {
            displacementScale: 30,
            blurAmount: 5,
            elasticity: 0,
            padding: "20px",
            cornerRadius: 30,
          } as GlassProps
        }
        className={heroStyles.pageHero}
        backgroundImageSrc="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2728"
        title="Grid System"
        text="Responsive grid design tokens for flexible layouts"
        alignment="center"
        actions={
          <div className={styles.designTokensGridPage__heroActions}>
            <button className={styles.designTokensGridPage__heroButton}>
              Grid Tokens
            </button>
            <button className={`${styles.designTokensGridPage__heroButton} ${styles['designTokensGridPage__heroButton--secondary']}`}>
              Layout Patterns
            </button>
          </div>
        }
      />

      <Block spacing="sm" container={{type: 'fluid'}}>
        <SectionIntro
          title="Grid System Design Tokens"
          text={`Atomix uses a flexible 12-column grid system with responsive breakpoints and customizable gutters. The grid system is built on ${breakpointsTokens.length} breakpoint tokens and ${gutterSpacingTokens.length} spacing tokens that provide the foundation for creating consistent, responsive layouts across your application.`}
          className="u-text-center"
        />

        <Grid>
          <GridCol lg={6}>
            <Card 
              variant="success"
              className={styles.designTokensGridPage__card}
            >
              <h3 className={`${styles.designTokensGridPage__sectionHeading} ${styles['designTokensGridPage__sectionHeading--success']}`}>
                Grid Breakpoints
              </h3>
              <p className="u-mb-4">
                The grid system uses the following breakpoints for responsive
                design:
              </p>

              <div className={styles.designTokensGridPage__dataTable}>
                <DataTable
                  data={breakpointTableData}
                  columns={[
                    { key: "key", title: "Token Name" },
                    { key: "value", title: "Value" },
                    { key: "description", title: "Description" },
                  ]}
                  striped
                  bordered
                  dense
                />
              </div>
            </Card>
          </GridCol>
          <GridCol lg={6}>
            <Card 
              variant="warning"
              className={styles.designTokensGridPage__card}
            >
              <h3 className={`${styles.designTokensGridPage__sectionHeading} ${styles['designTokensGridPage__sectionHeading--warning']}`}>
                Grid Gutters
              </h3>
              <p className="u-mb-4">Gutters define the spacing between columns:</p>

              <div className={styles.designTokensGridPage__dataTable}>
                <DataTable
                  data={spacingTableData}
                  columns={[
                    { key: "key", title: "Token Name" },
                    { key: "value", title: "Value" },
                    { key: "description", title: "Description" },
                  ]}
                  striped
                  bordered
                  dense
                />
              </div>
            </Card>
          </GridCol>
        </Grid>


        <Grid className="u-mt-4">
          <GridCol md={12}>
            <Card 
              variant="error"
              className={styles.designTokensGridPage__card}
            >
              <h3 className={`${styles.designTokensGridPage__sectionHeading} ${styles['designTokensGridPage__sectionHeading--error']}`}>
                Visual Example
              </h3>
              <p className="u-mb-4">
                Here's a live example of the 12-column grid system:
              </p>

              <div className={styles.designTokensGridPage__visualExample}>
                <div className={styles.designTokensGridPage__visualExampleOverlay} />
                <Grid>
                  {[...Array(12)].map((_, i) => (
                    <GridCol key={i} xs={1}>
                      <div className={styles.designTokensGridPage__gridColumn}>
                        {i + 1}
                      </div>
                    </GridCol>
                  ))}
                </Grid>

                <Grid className="u-mt-3">
                  <GridCol xs={6}>
                    <div className={`${styles.designTokensGridPage__gridColumn} ${styles['designTokensGridPage__gridColumn--large']}`}>
                      6 columns
                    </div>
                  </GridCol>
                  <GridCol xs={6}>
                    <div className={`${styles.designTokensGridPage__gridColumn} ${styles['designTokensGridPage__gridColumn--large']}`}>
                      6 columns
                    </div>
                  </GridCol>
                </Grid>

                <Grid className="u-mt-3">
                  <GridCol xs={4}>
                    <div className={`${styles.designTokensGridPage__gridColumn} ${styles['designTokensGridPage__gridColumn--large']}`}>
                      4 columns
                    </div>
                  </GridCol>
                  <GridCol xs={4}>
                    <div className={`${styles.designTokensGridPage__gridColumn} ${styles['designTokensGridPage__gridColumn--large']}`}>
                      4 columns
                    </div>
                  </GridCol>
                  <GridCol xs={4}>
                    <div className={`${styles.designTokensGridPage__gridColumn} ${styles['designTokensGridPage__gridColumn--large']}`}>
                      4 columns
                    </div>
                  </GridCol>
                </Grid>
              </div>
            </Card>
          </GridCol>
        </Grid>
      </Block>
    </>
  );
};

export default DesignTokensGridPage;