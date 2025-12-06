"use client";


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

const DesignTokensGridPage = () => {
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

      <Block spacing="sm">
        <SectionIntro
          title="Grid System Design Tokens"
          text="Atomix uses a flexible 12-column grid system with responsive breakpoints and customizable gutters. These design tokens provide the foundation for creating consistent, responsive layouts across your application."
          className="u-text-center"
        />

        <Grid>
          <GridCol lg={6}>
            <Card 
              variant="success"
              style={{
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(16, 185, 129, 0.2)',
                borderRadius: '12px',
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #10b981, #34d399)',
              }} />
              <h3 style={{
                background: 'linear-gradient(90deg, #10b981, #047857)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: '700',
                fontSize: '1.5rem'
              }}>Grid Breakpoints</h3>
              <p>
                The grid system uses the following breakpoints for responsive
                design:
              </p>

              <DataTable
                data={[
                  {
                    key: "grid-breakpoint-xs",
                    value: "0px",
                    description: "Extra Small",
                    render: (value: string) => <code>{value}</code>,
                  },
                  {
                    key: "grid-breakpoint-sm",
                    value: "576px",
                    description: "Small",
                    render: (value: string) => <code>{value}</code>,
                  },
                  {
                    key: "grid-breakpoint-md",
                    value: "768px",
                    description: "Medium",
                    render: (value: string) => <code>{value}</code>,
                  },
                  {
                    key: "grid-breakpoint-lg",
                    value: "992px",
                    description: "Large",
                    render: (value: string) => <code>{value}</code>,
                  },
                  {
                    key: "grid-breakpoint-xl",
                    value: "1200px",
                    description: "Extra Large",
                    render: (value: string) => <code>{value}</code>,
                  },
                  {
                    key: "grid-breakpoint-xxl",
                    value: "1400px",
                    description: "Extra Extra Large",
                    render: (value: string) => <code>{value}</code>,
                  },
                  {
                    key: "grid-breakpoint-xxxl",
                    value: "1600px",
                    description: "Extra Extra Extra Large",
                    render: (value: string) => <code>{value}</code>,
                  },
                ]}
                columns={[
                  { key: "key", title: "Key" },
                  { key: "value", title: "Value" },
                  { key: "description", title: "Description" },
                ]}
                striped
                bordered
                dense
                style={{
                  borderRadius: '8px',
                  overflow: 'hidden'
                }}
              />
            </Card>
          </GridCol>
          <GridCol lg={6}>
            <Card 
              variant="warning"
              style={{
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(245, 158, 11, 0.2)',
                borderRadius: '12px',
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #f59e0b, #fbbf24)',
              }} />
              <h3 style={{
                background: 'linear-gradient(90deg, #f59e0b, #92400e)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: '700',
                fontSize: '1.5rem'
              }}>Grid Gutters</h3>
              <p>Gutters define the spacing between columns:</p>

              <DataTable
                data={[
                  {
                    key: "grid-gutter-xs",
                    value: "8px",
                    description: "Extra Small",
                    render: (value: string) => <code>{value}</code>,
                  },
                  {
                    key: "grid-gutter-sm",
                    value: "12px",
                    description: "Small",
                    render: (value: string) => <code>{value}</code>,
                  },
                  {
                    key: "grid-gutter-md",
                    value: "16px",
                    description: "Medium",
                    render: (value: string) => <code>{value}</code>,
                  },
                  {
                    key: "grid-gutter-lg",
                    value: "24px",
                    description: "Large",
                    render: (value: string) => <code>{value}</code>,
                  },
                  {
                    key: "grid-gutter-xl",
                    value: "32px",
                    description: "Extra Large",
                    render: (value: string) => <code>{value}</code>,
                  },
                  {
                    key: "grid-gutter-xxl",
                    value: "40px",
                    description: "Extra Extra Large",
                    render: (value: string) => <code>{value}</code>,
                  },
                  {
                    key: "grid-gutter-xxxl",
                    value: "48px",
                    description: "Extra Extra Extra Large",
                    render: (value: string) => <code>{value}</code>,
                  },
                ]}
                columns={[
                  { key: "key", title: "Key" },
                  { key: "value", title: "Value" },
                  { key: "description", title: "Description" },
                ]}
                striped
                bordered
                dense
                style={{
                  borderRadius: '8px',
                  overflow: 'hidden'
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
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(239, 68, 68, 0.2)',
                borderRadius: '12px',
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #ef4444, #f87171)',
              }} />
              <h3 style={{
                background: 'linear-gradient(90deg, #ef4444, #b91c1c)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: '700',
                fontSize: '1.5rem'
              }}>Visual Example</h3>
              <p className="u-mb-4">
                Here's a live example of the 12-column grid system:
              </p>

              <div
                style={{
                  border: "1px solid var(--atomix-border)",
                  padding: "16px",
                  borderRadius: "8px",
                  background: 'linear-gradient(135deg, #f3f4f6, #e5e7eb)',
                  position: 'relative',
                  overflow: 'hidden'
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
                          padding: "8px",
                          textAlign: "center",
                          borderRadius: "4px",
                          fontSize: "12px",
                          fontWeight: 'bold',
                          color: '#7c3aed',
                          border: '1px solid rgba(124, 58, 237, 0.3)',
                          boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
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
                        padding: "16px",
                        textAlign: "center",
                        borderRadius: "4px",
                        fontWeight: 'bold',
                        color: '#7c3aed',
                        border: '1px solid rgba(124, 58, 237, 0.3)',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.05)'
                      }}
                    >
                      6 columns
                    </div>
                  </GridCol>
                  <GridCol xs={6}>
                    <div
                      style={{
                        background: "var(--atomix-brand-bg-subtle)",
                        padding: "16px",
                        textAlign: "center",
                        borderRadius: "4px",
                        fontWeight: 'bold',
                        color: '#7c3aed',
                        border: '1px solid rgba(124, 58, 237, 0.3)',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.05)'
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
                        padding: "16px",
                        textAlign: "center",
                        borderRadius: "4px",
                        fontWeight: 'bold',
                        color: '#7c3aed',
                        border: '1px solid rgba(124, 58, 237, 0.3)',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.05)'
                      }}
                    >
                      4 columns
                    </div>
                  </GridCol>
                  <GridCol xs={4}>
                    <div
                      style={{
                        background: "var(--atomix-brand-bg-subtle)",
                        padding: "16px",
                        textAlign: "center",
                        borderRadius: "4px",
                        fontWeight: 'bold',
                        color: '#7c3aed',
                        border: '1px solid rgba(124, 58, 237, 0.3)',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.05)'
                      }}
                    >
                      4 columns
                    </div>
                  </GridCol>
                  <GridCol xs={4}>
                    <div
                      style={{
                        background: "var(--atomix-brand-bg-subtle)",
                        padding: "16px",
                        textAlign: "center",
                        borderRadius: "4px",
                        fontWeight: 'bold',
                        color: '#7c3aed',
                        border: '1px solid rgba(124, 58, 237, 0.3)',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.05)'
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