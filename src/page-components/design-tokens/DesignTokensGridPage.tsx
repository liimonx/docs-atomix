"use client";

import React from "react";
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
      />

      <Block spacing="sm">
        <SectionIntro
          title="Grid System Design Tokens"
          text="Atomix uses a flexible 12-column grid system with responsive breakpoints and customizable gutters. These design tokens provide the foundation for creating consistent, responsive layouts across your application."
        />

        <Grid>
          <GridCol lg={6}>
            <Card variant="success">
              <h3>Grid Breakpoints</h3>
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
              />
            </Card>
          </GridCol>
          <GridCol lg={6}>
            <Card variant="warning">
              <h3>Grid Gutters</h3>
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
              />
            </Card>
          </GridCol>
        </Grid>


        <Grid className="u-mt-4">
          <GridCol md={12}>
            <Card className="" variant="error">
              <h3>Visual Example</h3>
              <p className="u-mb-4">
                Here's a live example of the 12-column grid system:
              </p>

              <div
                style={{
                  border: "1px solid var(--atomix-border)",
                  padding: "16px",
                  borderRadius: "8px",
                }}
              >
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
