'use client';

import { FC } from 'react';
import Link from 'next/link';
import { Button, Icon, Card } from '@shohojdhara/atomix';
import CallToActionSection from '@/components/sections/CallToActionSection';

const CallToActionSectionDocumentation: FC = () => {
  return (
    <div className="u-p-6">
      <div className="u-container u-mx-auto u-px-4">
        <div className="u-mb-8">
          <nav className="u-d-flex u-align-items-center u-mb-4 u-fs-sm">
            <Link href="/docs" className="u-text-primary u-text-decoration-none">
              Documentation
            </Link>
            <Icon name="CaretRight" size={14} className="u-mx-2 u-text-secondary-emphasis" />
            <Link href="/docs/components" className="u-text-primary u-text-decoration-none">
              Components
            </Link>
            <Icon name="CaretRight" size={14} className="u-mx-2 u-text-secondary-emphasis" />
            <span className="u-text-secondary-emphasis">Call to Action Section</span>
          </nav>
          
          <h1 className="u-fs-4xl u-fw-bold u-mb-4">Call to Action Section</h1>
          <p className="u-text-secondary-emphasis u-mb-6">
            A component for creating prominent call-to-action sections using the River component.
          </p>
        </div>

        <div className="u-mb-8">
          <h2 className="u-fs-2xl u-fw-bold u-mb-4">Basic Usage</h2>
          <div className="u-mb-6">
            <CallToActionSection
              title="Ready to get started?"
              text="Join thousands of developers who are already building stunning interfaces with Atomix."
              primaryAction={
                <Button variant="primary">
                  Get Started
                  <Icon name="ArrowRight" size={16} className="u-ms-2" />
                </Button>
              }
              secondaryAction={
                <Button variant="secondary">
                  View Documentation
                </Button>
              }
            />
          </div>
        </div>

        <div className="u-mb-8">
          <h2 className="u-fs-2xl u-fw-bold u-mb-4">Installation CTA</h2>
          <div className="u-mb-6">
            <CallToActionSection
              title="Install Atomix"
              text="Get access to 40+ components, comprehensive layouts, design tokens, and advanced effects."
              primaryAction={
                <Card className="u-bg-tertiary-subtle u-br-md u-p-4 u-mb-4">
                  <code className="u-text-primary-emphasis u-fs-sm" style={{ fontFamily: 'var(--atomix-font-family-mono)' }}>
                    npm install @shohojdhara/atomix
                  </code>
                </Card>
              }
              secondaryAction={
                <Button 
                  variant="primary"
                  href="/docs/getting-started/installation"
                  as={Link}
                >
                  View Installation Guide
                  <Icon name="ArrowRight" size={16} className="u-ms-2" />
                </Button>
              }
            />
          </div>
        </div>

        <div className="u-mb-8">
          <h2 className="u-fs-2xl u-fw-bold u-mb-4">Props</h2>
          <Card className="u-p-0 u-overflow-hidden">
            <div className="u-overflow-x-auto">
              <table className="u-w-100" style={{ borderCollapse: 'collapse' }}>
                <thead className="u-bg-tertiary">
                  <tr>
                    <th className="u-p-3 u-text-left u-fs-sm u-fw-semibold u-border-b u-border-subtle">Prop</th>
                    <th className="u-p-3 u-text-left u-fs-sm u-fw-semibold u-border-b u-border-subtle">Type</th>
                    <th className="u-p-3 u-text-left u-fs-sm u-fw-semibold u-border-b u-border-subtle">Default</th>
                    <th className="u-p-3 u-text-left u-fs-sm u-fw-semibold u-border-b u-border-subtle">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="u-border-b u-border-subtle">
                    <td className="u-p-3">
                      <code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">title</code>
                    </td>
                    <td className="u-p-3 u-text-secondary-emphasis">ReactNode</td>
                    <td className="u-p-3 u-text-secondary-emphasis">-</td>
                    <td className="u-p-3 u-text-secondary-emphasis">The section title</td>
                  </tr>
                  <tr className="u-border-b u-border-subtle">
                    <td className="u-p-3">
                      <code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">text</code>
                    </td>
                    <td className="u-p-3 u-text-secondary-emphasis">string | string[]</td>
                    <td className="u-p-3 u-text-secondary-emphasis">-</td>
                    <td className="u-p-3 u-text-secondary-emphasis">The section text content</td>
                  </tr>
                  <tr className="u-border-b u-border-subtle">
                    <td className="u-p-3">
                      <code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">primaryAction</code>
                    </td>
                    <td className="u-p-3 u-text-secondary-emphasis">ReactNode</td>
                    <td className="u-p-3 u-text-secondary-emphasis">-</td>
                    <td className="u-p-3 u-text-secondary-emphasis">Primary action element (button, link, etc.)</td>
                  </tr>
                  <tr className="u-border-b u-border-subtle">
                    <td className="u-p-3">
                      <code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">secondaryAction</code>
                    </td>
                    <td className="u-p-3 u-text-secondary-emphasis">ReactNode</td>
                    <td className="u-p-3 u-text-secondary-emphasis">-</td>
                    <td className="u-p-3 u-text-secondary-emphasis">Secondary action element (button, link, etc.)</td>
                  </tr>
                  <tr>
                    <td className="u-p-3">
                      <code className="u-fs-sm u-bg-tertiary u-p-1 u-br-sm">center</code>
                    </td>
                    <td className="u-p-3 u-text-secondary-emphasis">boolean</td>
                    <td className="u-p-3 u-text-secondary-emphasis">true</td>
                    <td className="u-p-3 u-text-secondary-emphasis">Whether to center the content</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        <div className="u-mb-8">
          <h2 className="u-fs-2xl u-fw-bold u-mb-4">Implementation</h2>
          <p className="u-text-secondary-emphasis">
            The CallToActionSection component is a wrapper around the River component,
            providing a consistent way to create call-to-action sections across the site.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CallToActionSectionDocumentation;