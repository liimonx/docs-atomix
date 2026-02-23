"use client";

import { FC } from "react";
import {
  Hero,
  SectionIntro,
  Card,
  GridCol,
  Row,
  Block,
  Badge,
} from "@shohojdhara/atomix";
import { GlassProps } from "@/types/atomix-components";
import styles from "@/styles/PageHero.module.scss";

const ResourcesChangelogPage: FC = () => {
  return (
    <div>
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
        className={styles.pageHero}
        backgroundImageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2728"
        title="Changelog"
        text="Release notes and version history"
        alignment="center"
      />

      <Block className="u-pt-8 u-pb-8">
        <SectionIntro
          title="Version History"
          text="Track the evolution of Atomix Design System with detailed release notes, new features, improvements, and bug fixes."
        />

        <Row className="u-mt-8">
          <GridCol md={12}>
            <Card className="u-p-6">
              <div className="u-flex u-items-center u-gap-3 u-mb-4">
                <h3 className="u-text-xl u-font-bold u-m-0">v2.1.0</h3>
                <Badge variant="success" label="Latest" />
                <span className="u-text-secondary-emphasis u-text-sm">
                  November 11, 2025
                </span>
              </div>

              <h4 className="u-text-lg u-font-semibold u-mt-4 u-mb-3">
                ✨ New Features
              </h4>
              <ul className="u-list-none u-p-0 u-m-0 u-flex u-flex-column u-gap-2">
                <li className="u-text-secondary-emphasis">
                  <strong className="u-text-primary">
                    AtomixGlass Component:
                  </strong>{" "}
                  Advanced glass morphism effects with WebGL shader support
                </li>
                <li className="u-text-secondary-emphasis">
                  <strong className="u-text-primary">Dark Mode Support:</strong>{" "}
                  Built-in dark mode with automatic theme switching
                </li>
                <li className="u-text-secondary-emphasis">
                  <strong className="u-text-primary">New Components:</strong>{" "}
                  Added PhotoViewer, VideoPlayer, and River components
                </li>
                <li className="u-text-secondary-emphasis">
                  <strong className="u-text-primary">Design Tokens:</strong>{" "}
                  Comprehensive design token system for colors, spacing, and
                  typography
                </li>
              </ul>

              <h4 className="u-text-lg u-font-semibold u-mt-4 u-mb-3">
                🚀 Improvements
              </h4>
              <ul className="u-list-none u-p-0 u-m-0 u-flex u-flex-column u-gap-2">
                <li className="u-text-secondary-emphasis">
                  Enhanced accessibility across all components
                </li>
                <li className="u-text-secondary-emphasis">
                  Improved performance for grid and masonry layouts
                </li>
                <li className="u-text-secondary-emphasis">
                  Better TypeScript support with comprehensive type definitions
                </li>
                <li className="u-text-secondary-emphasis">
                  Updated documentation with interactive examples
                </li>
              </ul>

              <h4 className="u-text-lg u-font-semibold u-mt-4 u-mb-3">
                🐛 Bug Fixes
              </h4>
              <ul className="u-list-none u-p-0 u-m-0 u-flex u-flex-column u-gap-2">
                <li className="u-text-secondary-emphasis">
                  Fixed modal backdrop click handling on mobile devices
                </li>
                <li className="u-text-secondary-emphasis">
                  Resolved tooltip positioning issues in scrollable containers
                </li>
                <li className="u-text-secondary-emphasis">
                  Fixed form validation state styling inconsistencies
                </li>
              </ul>
            </Card>
          </GridCol>
        </Row>

        <Row className="u-mt-4">
          <GridCol md={12}>
            <Card className="u-p-6">
              <div className="u-flex u-items-center u-gap-3 u-mb-4">
                <h3 className="u-text-xl u-font-bold u-m-0">v2.0.0</h3>
                <Badge variant="primary" label="Major Release" />
                <span className="u-text-secondary-emphasis u-text-sm">
                  October 1, 2025
                </span>
              </div>

              <h4 className="u-text-lg u-font-semibold u-mt-4 u-mb-3">
                🎉 Major Changes
              </h4>
              <ul className="u-list-none u-p-0 u-m-0 u-flex u-flex-column u-gap-2">
                <li className="u-text-secondary-emphasis">
                  <strong className="u-text-primary">Complete Redesign:</strong>{" "}
                  New visual language with modern aesthetics
                </li>
                <li className="u-text-secondary-emphasis">
                  <strong className="u-text-primary">
                    Component Library Overhaul:
                  </strong>{" "}
                  Rebuilt all components from the ground up
                </li>
                <li className="u-text-secondary-emphasis">
                  <strong className="u-text-primary">
                    ITCSS Architecture:
                  </strong>{" "}
                  Adopted ITCSS for better CSS organization
                </li>
                <li className="u-text-secondary-emphasis">
                  <strong className="u-text-primary">React 18 Support:</strong>{" "}
                  Full compatibility with React 18 features
                </li>
              </ul>

              <h4 className="u-text-lg u-font-semibold u-mt-4 u-mb-3">
                ⚠️ Breaking Changes
              </h4>
              <ul className="u-list-none u-p-0 u-m-0 u-flex u-flex-column u-gap-2">
                <li className="u-text-secondary-emphasis">
                  Renamed several component props for consistency
                </li>
                <li className="u-text-secondary-emphasis">
                  Updated color token naming convention
                </li>
                <li className="u-text-secondary-emphasis">
                  Changed default spacing scale
                </li>
                <li className="u-text-secondary-emphasis">
                  Removed deprecated utility classes
                </li>
              </ul>

              <h4 className="u-text-lg u-font-semibold u-mt-4 u-mb-3">
                📚 Documentation
              </h4>
              <ul className="u-list-none u-p-0 u-m-0 u-flex u-flex-column u-gap-2">
                <li className="u-text-secondary-emphasis">
                  New documentation site with improved navigation
                </li>
                <li className="u-text-secondary-emphasis">
                  Added migration guide from v1.x
                </li>
                <li className="u-text-secondary-emphasis">
                  Interactive component playground
                </li>
              </ul>
            </Card>
          </GridCol>
        </Row>

        <Row className="u-mt-4">
          <GridCol md={12}>
            <Card className="u-p-6">
              <div className="u-flex u-items-center u-gap-3 u-mb-4">
                <h3 className="u-text-xl u-font-bold u-m-0">v1.8.5</h3>
                <span className="u-text-secondary-emphasis u-text-sm">
                  August 15, 2025
                </span>
              </div>

              <h4 className="u-text-lg u-font-semibold u-mt-4 u-mb-3">
                🐛 Bug Fixes
              </h4>
              <ul className="u-list-none u-p-0 u-m-0 u-flex u-flex-column u-gap-2">
                <li className="u-text-secondary-emphasis">
                  Fixed dropdown menu positioning in RTL layouts
                </li>
                <li className="u-text-secondary-emphasis">
                  Resolved date picker calendar navigation issues
                </li>
                <li className="u-text-secondary-emphasis">
                  Fixed accordion animation glitches on Safari
                </li>
              </ul>

              <h4 className="u-text-lg u-font-semibold u-mt-4 u-mb-3">
                🚀 Improvements
              </h4>
              <ul className="u-list-none u-p-0 u-m-0 u-flex u-flex-column u-gap-2">
                <li className="u-text-secondary-emphasis">
                  Optimized bundle size (reduced by 15%)
                </li>
                <li className="u-text-secondary-emphasis">
                  Improved tree-shaking support
                </li>
                <li className="u-text-secondary-emphasis">
                  Enhanced SSR compatibility
                </li>
              </ul>
            </Card>
          </GridCol>
        </Row>

        <Row className="u-mt-4">
          <GridCol md={12}>
            <Card className="u-p-6">
              <div className="u-flex u-items-center u-gap-3 u-mb-4">
                <h3 className="u-text-xl u-font-bold u-m-0">v1.8.0</h3>
                <span className="u-text-secondary-emphasis u-text-sm">
                  July 1, 2025
                </span>
              </div>

              <h4 className="u-text-lg u-font-semibold u-mt-4 u-mb-3">
                ✨ New Features
              </h4>
              <ul className="u-list-none u-p-0 u-m-0 u-flex u-flex-column u-gap-2">
                <li className="u-text-secondary-emphasis">
                  <strong className="u-text-primary">
                    DataTable Component:
                  </strong>{" "}
                  Advanced table with sorting, filtering, and pagination
                </li>
                <li className="u-text-secondary-emphasis">
                  <strong className="u-text-primary">Chart Component:</strong>{" "}
                  Integrated charting library with multiple chart types
                </li>
                <li className="u-text-secondary-emphasis">
                  <strong className="u-text-primary">Upload Component:</strong>{" "}
                  Drag-and-drop file upload with preview
                </li>
              </ul>

              <h4 className="u-text-lg u-font-semibold u-mt-4 u-mb-3">
                🚀 Improvements
              </h4>
              <ul className="u-list-none u-p-0 u-m-0 u-flex u-flex-column u-gap-2">
                <li className="u-text-secondary-emphasis">
                  Added keyboard navigation to all interactive components
                </li>
                <li className="u-text-secondary-emphasis">
                  Improved screen reader support
                </li>
                <li className="u-text-secondary-emphasis">
                  Enhanced mobile touch interactions
                </li>
              </ul>
            </Card>
          </GridCol>
        </Row>

        <Row className="u-mt-4">
          <GridCol md={12}>
            <Card className="u-p-6">
              <div className="u-flex u-items-center u-gap-3 u-mb-4">
                <h3 className="u-text-xl u-font-bold u-m-0">v1.7.0</h3>
                <span className="u-text-secondary-emphasis u-text-sm">
                  May 15, 2025
                </span>
              </div>

              <h4 className="u-text-lg u-font-semibold u-mt-4 u-mb-3">
                ✨ New Features
              </h4>
              <ul className="u-list-none u-p-0 u-m-0 u-flex u-flex-column u-gap-2">
                <li className="u-text-secondary-emphasis">
                  <strong className="u-text-primary">
                    Masonry Grid Layout:
                  </strong>{" "}
                  Pinterest-style dynamic grid system
                </li>
                <li className="u-text-secondary-emphasis">
                  <strong className="u-text-primary">
                    Testimonial Component:
                  </strong>{" "}
                  Customer testimonial display with multiple layouts
                </li>
                <li className="u-text-secondary-emphasis">
                  <strong className="u-text-primary">Rating Component:</strong>{" "}
                  Star rating with half-star support
                </li>
              </ul>

              <h4 className="u-text-lg u-font-semibold u-mt-4 u-mb-3">
                🐛 Bug Fixes
              </h4>
              <ul className="u-list-none u-p-0 u-m-0 u-flex u-flex-column u-gap-2">
                <li className="u-text-secondary-emphasis">
                  Fixed modal scroll lock on iOS
                </li>
                <li className="u-text-secondary-emphasis">
                  Resolved tab component focus management
                </li>
                <li className="u-text-secondary-emphasis">
                  Fixed form input autofill styling
                </li>
              </ul>
            </Card>
          </GridCol>
        </Row>

        <Row className="u-mt-4">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h3 className="u-text-xl u-font-bold u-mb-3">Earlier Versions</h3>
              <p className="u-text-secondary-emphasis u-mt-3">
                For release notes from earlier versions (v1.0.0 - v1.6.x),
                please visit our{" "}
                <a
                  href="https://github.com/shohojdhara/atomix/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="u-text-primary u-text-decoration-none"
                >
                  GitHub Releases page
                </a>
                .
              </p>
            </Card>
          </GridCol>
        </Row>

        <Row className="u-mt-4">
          <GridCol md={12}>
            <Card className="u-p-6">
              <h3 className="u-text-xl u-font-bold u-mb-4">Version Support</h3>

              <div className="u-mt-4 u-overflow-x-auto">
                <table
                  className="u-w-100"
                  style={{ borderCollapse: "collapse" }}
                >
                  <thead>
                    <tr
                      className="u-border-b"
                      style={{ borderBottomWidth: "2px" }}
                    >
                      <th className="u-p-3 u-text-left u-text-sm u-font-semibold">
                        Version
                      </th>
                      <th className="u-p-3 u-text-left u-text-sm u-font-semibold">
                        Status
                      </th>
                      <th className="u-p-3 u-text-left u-text-sm u-font-semibold">
                        Support Until
                      </th>
                      <th className="u-p-3 u-text-left u-text-sm u-font-semibold">
                        Notes
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="u-border-b u-border-subtle">
                      <td className="u-p-3">v2.x</td>
                      <td className="u-p-3">
                        <Badge variant="success" label="Active" />
                      </td>
                      <td className="u-p-3 u-text-secondary-emphasis">
                        Current
                      </td>
                      <td className="u-p-3 u-text-secondary-emphasis">
                        Latest stable release
                      </td>
                    </tr>
                    <tr className="u-border-b u-border-subtle">
                      <td className="u-p-3">v1.8.x</td>
                      <td className="u-p-3">
                        <Badge variant="warning" label="Maintenance" />
                      </td>
                      <td className="u-p-3 u-text-secondary-emphasis">
                        June 2026
                      </td>
                      <td className="u-p-3 u-text-secondary-emphasis">
                        Security fixes only
                      </td>
                    </tr>
                    <tr>
                      <td className="u-p-3">v1.7.x and earlier</td>
                      <td className="u-p-3">
                        <Badge variant="error" label="Unsupported" />
                      </td>
                      <td className="u-p-3 u-text-secondary-emphasis">-</td>
                      <td className="u-p-3 u-text-secondary-emphasis">
                        Please upgrade to v2.x
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </GridCol>
        </Row>
      </Block>
    </div>
  );
};

ResourcesChangelogPage.displayName = "ResourcesChangelogPage";

export default ResourcesChangelogPage;
