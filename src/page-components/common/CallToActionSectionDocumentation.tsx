'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@shohojdhara/atomix';
import { Icon } from '@shohojdhara/atomix';
import CallToActionSection from '@/components/sections/CallToActionSection';

const CallToActionSectionDocumentation: React.FC = () => {
  return (
    <div className="u-p-6">
      <div className="container">
        <div className="u-mb-8">
          <nav className="u-d-flex u-align-items-center u-mb-4 u-text-sm">
            <Link href="/docs" className="u-text-primary u-text-decoration-none">
              Documentation
            </Link>
            <Icon name="CaretRight" size={14} className="u-mx-2 u-text-muted" />
            <Link href="/docs/components" className="u-text-primary u-text-decoration-none">
              Components
            </Link>
            <Icon name="CaretRight" size={14} className="u-mx-2 u-text-muted" />
            <span className="u-text-muted">Call to Action Section</span>
          </nav>
          
          <h1 className="u-mb-4">Call to Action Section</h1>
          <p className="u-text-muted u-mb-6">
            A component for creating prominent call-to-action sections using the River component.
          </p>
        </div>

        <div className="u-mb-8">
          <h2 className="u-mb-4">Basic Usage</h2>
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
          <h2 className="u-mb-4">Installation CTA</h2>
          <div className="u-mb-6">
            <CallToActionSection
              title="Install Atomix"
              text="Get access to 40+ components, comprehensive layouts, design tokens, and advanced effects."
              primaryAction={
                <div className="u-bg-tertiary-subtle u-rounded u-p-4 u-mb-4 u-font-mono u-fs-sm">
                  <code className="u-text-primary-emphasis">
                    npm install @shohojdhara/atomix
                  </code>
                </div>
              }
              secondaryAction={
                <Link href="/docs/getting-started/installation">
                  <Button  variant="primary">
                    View Installation Guide
                    <Icon name="ArrowRight" size={16} className="u-ms-2" />
                  </Button>
                </Link>
              }
            />
          </div>
        </div>

        <div className="u-mb-8">
          <h2 className="u-mb-4">Props</h2>
          <div className="card">
            <div className="table-responsive">
              <table className="table u-mb-0">
                <thead>
                  <tr>
                    <th>Prop</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>title</code>
                    </td>
                    <td>ReactNode</td>
                    <td>-</td>
                    <td>The section title</td>
                  </tr>
                  <tr>
                    <td>
                      <code>text</code>
                    </td>
                    <td>string | string[]</td>
                    <td>-</td>
                    <td>The section text content</td>
                  </tr>
                  <tr>
                    <td>
                      <code>primaryAction</code>
                    </td>
                    <td>ReactNode</td>
                    <td>-</td>
                    <td>Primary action element (button, link, etc.)</td>
                  </tr>
                  <tr>
                    <td>
                      <code>secondaryAction</code>
                    </td>
                    <td>ReactNode</td>
                    <td>-</td>
                    <td>Secondary action element (button, link, etc.)</td>
                  </tr>
                  <tr>
                    <td>
                      <code>center</code>
                    </td>
                    <td>boolean</td>
                    <td>true</td>
                    <td>Whether to center the content</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="u-mb-8">
          <h2 className="u-mb-4">Implementation</h2>
          <p>
            The CallToActionSection component is a wrapper around the River component,
            providing a consistent way to create call-to-action sections across the site.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CallToActionSectionDocumentation;