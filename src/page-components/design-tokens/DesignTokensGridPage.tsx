"use client";

import { useMemo, useState } from "react";
import {
  Hero,
  SectionIntro,
  Card,
  GridCol,
  Block,
  Grid,
  DataTable,
  Button,
  Icon,
  Badge,
} from "@shohojdhara/atomix";
import { getTokensByCategory, DesignToken } from "@/data/design-tokens";
import useCopyToClipboard from "@/hooks/useCopyToClipboard";

const DesignTokensGridPage = () => {
  const [isCopied, copy] = useCopyToClipboard();
  const [copiedTokenName, setCopiedTokenName] = useState<string | null>(null);

  // Get breakpoints tokens from design tokens
  const breakpointsCategory = useMemo(
    () => getTokensByCategory("breakpoints"),
    [],
  );
  const breakpointsTokens = useMemo(
    () => breakpointsCategory?.tokens || [],
    [breakpointsCategory],
  );

  // Get spacing tokens for grid gutters (commonly used spacing values)
  const spacingCategory = useMemo(() => getTokensByCategory("spacing"), []);
  const gutterSpacingTokens = useMemo(() => {
    if (!spacingCategory) return [];
    // Filter for commonly used gutter spacing values
    const gutterSpacings = ["2", "3", "4", "6", "8"];
    return spacingCategory.tokens.filter((token) =>
      gutterSpacings.some(
        (spacing) =>
          token.name.includes(`Spacing ${spacing}`) &&
          !token.name.includes("PX"),
      ),
    );
  }, [spacingCategory]);

  const handleCopy = (token: DesignToken) => {
    const cssVar = token.cssVariable || token.value;
    copy(cssVar).then((success) => {
      if (success) {
        setCopiedTokenName(token.name);
        setTimeout(() => setCopiedTokenName(null), 2000);
      }
    });
  };

  // Format breakpoint data for DataTable
  const breakpointTableData = useMemo(() => {
    return breakpointsTokens.map((token) => ({
      key: token.name,
      value: token.value,
      description: token.description,
      cssVariable: token.cssVariable || "",
    }));
  }, [breakpointsTokens]);

  // Format spacing data for DataTable
  const spacingTableData = useMemo(() => {
    return gutterSpacingTokens.map((token) => {
      // Extract pixel value from description if available
      const pixelMatch = token.description.match(/\((\d+px)\)/);
      const pixelValue = pixelMatch ? pixelMatch[1] : "";
      const displayValue = pixelValue
        ? `${token.value} (${pixelValue})`
        : token.value;

      return {
        key: token.name,
        value: displayValue,
        description: token.description,
        cssVariable: token.cssVariable || "",
      };
    });
  }, [gutterSpacingTokens]);

  return (
    <>
      <Hero
        title={<></>}
        alignment="left"
        className=" u-relative u-overflow-hidden"
      >
        {/* Ambient background glow for Hero */}
        <div className="u-absolute u-top-0 u-start-50 u-translate-x-n50 u-w-100 u-h-100 u-max-w-4xl u-bg-primary u-opacity-5 u-blur-3xl u-rounded-circle u-pointer-events-none"></div>

        <Hero.Content className="u-w-100 u-max-w-4xl u-relative u-z-1">
          <Badge
            variant="primary"
            label="Design System"
            className="u-mb-4 u-rounded-full u-px-3 u-py-1 u-font-bold u-tracking-wider"
          />
          <Hero.Title className="u-fs-5xl u-font-black u-tracking-tighter">
            Grid & Breakpoints
          </Hero.Title>
          <Hero.Text className="u-fs-xl u-text-secondary-emphasis u-leading-relaxed">
            Responsive design tokens that power Atomix's 12-column grid system,
            ensuring consistency across all device sizes.
          </Hero.Text>
          <div className="u-flex u-gap-3 u-mt-8">
            <Button
              variant="primary"
              size="lg"
              className="u-rounded-2xl u-shadow-primary-glow"
              icon={<Icon name="Hash" weight="bold" />}
            >
              Grid Tokens
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="u-rounded-2xl  u-bg-glass"
              icon={<Icon name="Layout" weight="bold" />}
              glass
            >
              Layout Patterns
            </Button>
          </div>
        </Hero.Content>
      </Hero>

      <Block spacing="xl" className="u-pt-12">
        <div className="u-mb-16">
          <SectionIntro
            title="Foundation of Layout"
            text={`Atomix uses a flexible 12-column grid system with ${breakpointsTokens.length} responsive breakpoints and ${gutterSpacingTokens.length} primary gutter options. This system allows you to build complex, responsive layouts with minimal effort while maintaining visual rhythm.`}
            className="u-text-center u-max-w-3xl u-mx-auto"
          />
        </div>

        <Grid>
          <GridCol lg={6}>
            <Card
              glass={true}
              className="u-h-100 u-rounded-3xl u-border  u-overflow-hidden u-flex u-flex-column"
            >
              <div className="u-p-8 u-pb-0">
                <div className="u-flex u-items-center u-gap-3 u-mb-2">
                  <div className="u-w-10 u-h-10 u-bg-success-subtle u-text-success u-rounded-xl u-flex u-items-center u-justify-center">
                    <Icon name="Devices" size={24} weight="duotone" />
                  </div>
                  <h3 className="u-fs-2xl u-font-black u-tracking-tight u-m-0">
                    Responsive Breakpoints
                  </h3>
                </div>
                <p className="u-text-secondary-emphasis u-mb-8">
                  Control your layout transitions with standardized screen
                  widths.
                </p>
              </div>

              <div className="u-flex-grow-1 u-px-2 u-pb-2">
                <div className="u-rounded-2xl u-border  u-overflow-hidden">
                  <DataTable
                    data={breakpointTableData}
                    columns={[
                      {
                        key: "key",
                        title: "Token Name",
                        render: (value: string) => (
                          <span className="u-font-bold u-text-primary-emphasis">
                            {value}
                          </span>
                        ),
                      },
                      {
                        key: "value",
                        title: "Value",
                        render: (value: string) => (
                          <code className="u-fs-xs u-px-2 u-py-1 u-rounded-md">
                            {value}
                          </code>
                        ),
                      },
                      {
                        key: "cssVariable",
                        title: "Variable",
                        render: (value: string, row: { key: string }) => (
                          <div className="u-flex u-items-center u-justify-between u-gap-2">
                            <code className="u-fs-xs u-text-secondary-emphasis u-truncate u-max-w-32">
                              {value}
                            </code>
                            <Button
                              variant={
                                isCopied && copiedTokenName === row.key
                                  ? "success"
                                  : "primary"
                              }
                              size="sm"
                              className="u-rounded-lg"
                              icon={
                                <Icon
                                  name={
                                    isCopied && copiedTokenName === row.key
                                      ? "Check"
                                      : "Copy"
                                  }
                                />
                              }
                              iconOnly
                              onClick={() => {
                                const token = breakpointsTokens.find(
                                  (t) => t.name === row.key,
                                );
                                if (token) handleCopy(token);
                              }}
                            />
                          </div>
                        ),
                      },
                    ]}
                    className="u-m-0"
                  />
                </div>
              </div>
            </Card>
          </GridCol>

          <GridCol lg={6}>
            <Card
              glass={true}
              className="u-h-100 u-rounded-3xl u-border  u-overflow-hidden u-flex u-flex-column"
            >
              <div className="u-p-8 u-pb-0">
                <div className="u-flex u-items-center u-gap-3 u-mb-2">
                  <div className="u-w-10 u-h-10 u-bg-warning-subtle u-text-warning u-rounded-xl u-flex u-items-center u-justify-center">
                    <Icon name="ArrowsHorizontal" size={24} weight="duotone" />
                  </div>
                  <h3 className="u-fs-2xl u-font-black u-tracking-tight u-m-0">
                    Grid Gutters
                  </h3>
                </div>
                <p className="u-text-secondary-emphasis u-mb-8">
                  Defining the white space between columns for structured
                  rhythm.
                </p>
              </div>

              <div className="u-flex-grow-1 u-px-2 u-pb-2">
                <div className="u-rounded-2xl u-border  u-overflow-hidden">
                  <DataTable
                    data={spacingTableData}
                    columns={[
                      {
                        key: "key",
                        title: "Token Name",
                        render: (value: string) => (
                          <span className="u-font-bold u-text-primary-emphasis">
                            {value}
                          </span>
                        ),
                      },
                      {
                        key: "value",
                        title: "Value",
                        render: (value: string) => (
                          <code className="u-fs-xs u-px-2 u-py-1 u-rounded-md">
                            {value}
                          </code>
                        ),
                      },
                      {
                        key: "cssVariable",
                        title: "Variable",
                        render: (value: string, row: { key: string }) => (
                          <div className="u-flex u-items-center u-justify-between u-gap-2">
                            <code className="u-fs-xs u-text-secondary-emphasis u-truncate u-max-w-32">
                              {value}
                            </code>
                            <Button
                              variant={
                                isCopied && copiedTokenName === row.key
                                  ? "success"
                                  : "primary"
                              }
                              size="sm"
                              className="u-rounded-lg"
                              icon={
                                <Icon
                                  name={
                                    isCopied && copiedTokenName === row.key
                                      ? "Check"
                                      : "Copy"
                                  }
                                />
                              }
                              iconOnly
                              onClick={() => {
                                const token = gutterSpacingTokens.find(
                                  (t) => t.name === row.key,
                                );
                                if (token) handleCopy(token);
                              }}
                            />
                          </div>
                        ),
                      },
                    ]}
                    className="u-m-0"
                  />
                </div>
              </div>
            </Card>
          </GridCol>
        </Grid>

        <div className="u-mt-16">
          <Card
            glass={true}
            variant="primary"
            className="u-rounded-3xl u-border  u-p-0 u-overflow-hidden"
          >
            <div className="u-p-8 u-border-b ">
              <div className="u-flex u-items-center u-justify-between u-flex-wrap u-gap-4">
                <div>
                  <h3 className="u-fs-2xl u-font-black u-tracking-tight u-mb-1">
                    Visual Interactive Grid
                  </h3>
                  <p className="u-text-secondary-emphasis u-m-0">
                    Preview how 12-column layouts respond and utilize gutters.
                  </p>
                </div>
                <div className="u-flex u-gap-2">
                  <Badge variant="success" label="12 Columns" />
                  <Badge variant="primary" label="Fluid Gutters" />
                </div>
              </div>
            </div>

            <div className="u-p-8 u-bg-surface u-relative u-overflow-hidden">
              {/* Decorative grid background */}
              <div
                className="u-absolute u-inset-0 u-opacity-5 u-pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(var(--atomix-primary) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              ></div>

              <div className="u-relative u-z-1">
                {/* 12 Columns Row */}
                <div className="u-mb-8">
                  <div className="u-flex u-items-center u-gap-2 u-mb-3 u-opacity-50">
                    <Icon name="GridNine" size={16} />
                    <span className="u-fs-xs u-font-bold u-uppercase u-tracking-widest">
                      Standard Grid (1x12)
                    </span>
                  </div>
                  <Grid>
                    {[...Array(12)].map((_, i) => (
                      <GridCol key={i} xs={1}>
                        <div className="u-h-12 u-bg-primary-subtle u-border u-border-primary u-text-primary u-flex u-items-center u-justify-center u-rounded-xl u-font-mono u-font-bold u-fs-xs u-shadow-sm u-transition-all u-hover-scale-105">
                          {i + 1}
                        </div>
                      </GridCol>
                    ))}
                  </Grid>
                </div>

                {/* 6+6 Columns Row */}
                <div className="u-mb-8">
                  <div className="u-flex u-items-center u-gap-2 u-mb-3 u-opacity-50">
                    <Icon name="Columns" size={16} />
                    <span className="u-fs-xs u-font-bold u-uppercase u-tracking-widest">
                      Balanced Split (6+6)
                    </span>
                  </div>
                  <Grid>
                    <GridCol xs={6}>
                      <div className="u-h-24 u-bg-glass u-border  u-text-primary u-flex u-items-center u-justify-center u-rounded-2xl u-font-bold u-shadow-lg u-transition-all u-hover-translate-y-n1">
                        6 columns
                      </div>
                    </GridCol>
                    <GridCol xs={6}>
                      <div className="u-h-24 u-bg-glass u-border  u-text-primary u-flex u-items-center u-justify-center u-rounded-2xl u-font-bold u-shadow-lg u-transition-all u-hover-translate-y-n1">
                        6 columns
                      </div>
                    </GridCol>
                  </Grid>
                </div>

                {/* 4+4+4 Columns Row */}
                <div>
                  <div className="u-flex u-items-center u-gap-2 u-mb-3 u-opacity-50">
                    <Icon name="Rows" size={16} />
                    <span className="u-fs-xs u-font-bold u-uppercase u-tracking-widest">
                      Tertiary Division (4+4+4)
                    </span>
                  </div>
                  <Grid>
                    {[...Array(3)].map((_, i) => (
                      <GridCol key={i} xs={4}>
                        <div className="u-h-20 u-border u-border-dashed u-border-primary u-text-primary u-flex u-items-center u-justify-center u-rounded-2xl u-font-bold u-opacity-80 u-transition-all u-hover-opacity-100">
                          4 columns
                        </div>
                      </GridCol>
                    ))}
                  </Grid>
                </div>
              </div>
            </div>

            <div className="u-p-6 u-bg-primary-subtle u-text-center u-border-t ">
              <p className="u-fs-sm u-text-primary-emphasis u-m-0 u-font-medium">
                Tip: Use{" "}
                <code className="u-bg-surface u-px-2 u-py-0.5 u-rounded u-mx-1 u-border ">
                  .u-gap-&#123;0-90&#125;
                </code>{" "}
                to customize gutter spacing dynamically.
              </p>
            </div>
          </Card>
        </div>
      </Block>
    </>
  );
};

export default DesignTokensGridPage;
