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
        className="u-pt-32 u-pb-16"
        backgroundImageSrc="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2728"
        title="Grid System"
        text="Responsive grid design tokens for flexible layouts"
        alignment="center"
        actions={
          <div style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            padding: '20px'
          }}>
            <button style={{
              background: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
              border: 'none',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(124, 58, 237, 0.3)'
            }}>
              Grid Tokens
            </button>
            <button style={{
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(124, 58, 237, 0.3)',
              color: '#4c1d95',
              padding: '10px 20px',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
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
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(34, 197, 94, 0.2)',
                borderRadius: 'var(--atomix-border-radius-xl)',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 4px 24px rgba(34, 197, 94, 0.08)',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, var(--atomix-success), var(--atomix-success-hover))',
              }} />
              <h3 style={{
                background: 'linear-gradient(135deg, var(--atomix-success), var(--atomix-success-hover))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: 'var(--atomix-font-weight-bold)',
                fontSize: 'var(--atomix-font-size-2xl)',
                marginBottom: 'var(--atomix-spacing-2)'
              }}>Grid Breakpoints</h3>
              <p>
                The grid system uses the following breakpoints for responsive
                design:
              </p>

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
                style={{
                  borderRadius: 'var(--atomix-border-radius-lg)',
                  overflow: 'hidden',
                  border: '1px solid var(--atomix-primary-border-subtle)'
                }}
              />
            </Card>
          </GridCol>
          <GridCol lg={6}>
            <Card 
              variant="warning"
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(234, 179, 8, 0.2)',
                borderRadius: 'var(--atomix-border-radius-xl)',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 4px 24px rgba(234, 179, 8, 0.08)',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, var(--atomix-warning), var(--atomix-warning-hover))',
              }} />
              <h3 style={{
                background: 'linear-gradient(135deg, var(--atomix-warning), var(--atomix-warning-hover))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: 'var(--atomix-font-weight-bold)',
                fontSize: 'var(--atomix-font-size-2xl)',
                marginBottom: 'var(--atomix-spacing-2)'
              }}>Grid Gutters</h3>
              <p>Gutters define the spacing between columns:</p>

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
                style={{
                  borderRadius: 'var(--atomix-border-radius-lg)',
                  overflow: 'hidden',
                  border: '1px solid var(--atomix-primary-border-subtle)'
                }}
              />
            </Card>
          </GridCol>
        </Grid>


        <Grid className="u-mt-4">
          <GridCol md={12}>
            <Card 
              className="" 
              variant="error"
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(239, 68, 68, 0.2)',
                borderRadius: 'var(--atomix-border-radius-xl)',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 4px 24px rgba(239, 68, 68, 0.08)',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, var(--atomix-error), var(--atomix-error-hover))',
              }} />
              <h3 style={{
                background: 'linear-gradient(135deg, var(--atomix-error), var(--atomix-error-hover))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: 'var(--atomix-font-weight-bold)',
                fontSize: 'var(--atomix-font-size-2xl)',
                marginBottom: 'var(--atomix-spacing-2)'
              }}>Visual Example</h3>
              <p className="u-mb-4">
                Here's a live example of the 12-column grid system:
              </p>

              <div
                style={{
                  border: "1px solid var(--atomix-primary-border-subtle)",
                  padding: "var(--atomix-spacing-4)",
                  borderRadius: "var(--atomix-border-radius-lg)",
                  background: 'var(--atomix-secondary-gradient)',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: 'inset 0 2px 8px rgba(124, 58, 237, 0.05)'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `repeating-linear-gradient(
                    90deg,
                    transparent,
                    transparent 8.33%,
                    rgba(124, 58, 237, 0.1) 8.33%,
                    rgba(124, 58, 237, 0.1) 16.66%
                  )`,
                  pointerEvents: 'none'
                }} />
                <Grid>
                  {[...Array(12)].map((_, i) => (
                    <GridCol key={i} xs={1}>
                      <div
                        style={{
                          background: "var(--atomix-brand-bg-subtle)",
                          padding: "var(--atomix-spacing-2)",
                          textAlign: "center",
                          borderRadius: "var(--atomix-border-radius-md)",
                          fontSize: "var(--atomix-font-size-sm)",
                          fontWeight: 'var(--atomix-font-weight-semibold)',
                          color: 'var(--atomix-primary)',
                          border: '1px solid rgba(124, 58, 237, 0.2)',
                          boxShadow: '0 2px 8px rgba(124, 58, 237, 0.1)',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        {i + 1}
                      </div>
                    </GridCol>
                  ))}
                </Grid>

                <Grid className="u-mt-3">
                  <GridCol xs={6}>
                    <div
                      style={{
                        background: "var(--atomix-brand-bg-subtle)",
                        padding: "var(--atomix-spacing-4)",
                        textAlign: "center",
                        borderRadius: "var(--atomix-border-radius-md)",
                        fontWeight: 'var(--atomix-font-weight-semibold)',
                        color: 'var(--atomix-primary)',
                        border: '1px solid rgba(124, 58, 237, 0.2)',
                        boxShadow: '0 4px 12px rgba(124, 58, 237, 0.15)',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      6 columns
                    </div>
                  </GridCol>
                  <GridCol xs={6}>
                    <div
                      style={{
                        background: "var(--atomix-brand-bg-subtle)",
                        padding: "var(--atomix-spacing-4)",
                        textAlign: "center",
                        borderRadius: "var(--atomix-border-radius-md)",
                        fontWeight: 'var(--atomix-font-weight-semibold)',
                        color: 'var(--atomix-primary)',
                        border: '1px solid rgba(124, 58, 237, 0.2)',
                        boxShadow: '0 4px 12px rgba(124, 58, 237, 0.15)',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      6 columns
                    </div>
                  </GridCol>
                </Grid>

                <Grid className="u-mt-3">
                  <GridCol xs={4}>
                    <div
                      style={{
                        background: "var(--atomix-brand-bg-subtle)",
                        padding: "var(--atomix-spacing-4)",
                        textAlign: "center",
                        borderRadius: "var(--atomix-border-radius-md)",
                        fontWeight: 'var(--atomix-font-weight-semibold)',
                        color: 'var(--atomix-primary)',
                        border: '1px solid rgba(124, 58, 237, 0.2)',
                        boxShadow: '0 4px 12px rgba(124, 58, 237, 0.15)',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      4 columns
                    </div>
                  </GridCol>
                  <GridCol xs={4}>
                    <div
                      style={{
                        background: "var(--atomix-brand-bg-subtle)",
                        padding: "var(--atomix-spacing-4)",
                        textAlign: "center",
                        borderRadius: "var(--atomix-border-radius-md)",
                        fontWeight: 'var(--atomix-font-weight-semibold)',
                        color: 'var(--atomix-primary)',
                        border: '1px solid rgba(124, 58, 237, 0.2)',
                        boxShadow: '0 4px 12px rgba(124, 58, 237, 0.15)',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      4 columns
                    </div>
                  </GridCol>
                  <GridCol xs={4}>
                    <div
                      style={{
                        background: "var(--atomix-brand-bg-subtle)",
                        padding: "var(--atomix-spacing-4)",
                        textAlign: "center",
                        borderRadius: "var(--atomix-border-radius-md)",
                        fontWeight: 'var(--atomix-font-weight-semibold)',
                        color: 'var(--atomix-primary)',
                        border: '1px solid rgba(124, 58, 237, 0.2)',
                        boxShadow: '0 4px 12px rgba(124, 58, 237, 0.15)',
                        transition: 'all 0.2s ease'
                      }}
                    >
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