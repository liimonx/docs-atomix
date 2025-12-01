"use client";

import React from "react";
import { Footer, FooterSection, FooterLink } from "@shohojdhara/atomix";
import toast from "react-hot-toast";

export const DocumentationFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (email: string) => {
    // Simulate newsletter subscription
    toast.success(`Thanks for subscribing with ${email}!`);
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Footer
      brand="Atomix Design System"
      brandDescription="A comprehensive design system for building modern, accessible, and performant web applications with React and vanilla JavaScript."
      copyright={`© ${currentYear} Atomix Design System. Built with ❤️ by the Shohojdhara.`}
      layout="columns"
      variant="primary"
      showNewsletter={false}
      newsletterTitle="Stay Updated"
      newsletterDescription="Get the latest updates, releases, and tips delivered to your inbox."
      newsletterPlaceholder="Enter your email address"
      newsletterButtonText="Subscribe"
      onNewsletterSubmit={handleNewsletterSubmit}
      showBackToTop={true}
      backToTopText="Back to Top"
      onBackToTop={handleBackToTop}
      showDivider={true}
      socialLinks={[
        {
          platform: "github",
          url: "https://github.com/shohojdhara/atomix",
          label: "GitHub",
        },
        {
          platform: "twitter",
          url: "https://twitter.com/atomix",
          label: "Twitter",
        },
        {
          platform: "discord",
          url: "https://discord.gg/atomix",
          label: "Discord",
        },
        {
          platform: "github",
          url: "https://www.npmjs.com/package/@shohojdhara/atomix",
          label: "NPM",
        },
      ]}

    >
      <FooterSection title="Getting Started">
        <FooterLink href="/docs/introduction">Introduction</FooterLink>
        <FooterLink href="/docs/getting-started/installation">
          Installation
        </FooterLink>
        <FooterLink href="/docs/getting-started/quick-start">
          Quick Start
        </FooterLink>
        <FooterLink href="/docs/guides/theming">Theming Guide</FooterLink>
      </FooterSection>

      <FooterSection title="Documentation">
        <FooterLink href="/docs/components/overview">Components</FooterLink>
        <FooterLink href="/docs/design-tokens">Design Tokens</FooterLink>
        <FooterLink href="/docs/styles">Styles System</FooterLink>
        <FooterLink href="/docs/layouts">Layouts</FooterLink>
      </FooterSection>

      <FooterSection title="Resources">
        <FooterLink href="https://github.com/shohojdhara/atomix" external>
          GitHub Repository
        </FooterLink>
        <FooterLink
          href="https://www.npmjs.com/package/@shohojdhara/atomix"
          external
        >
          NPM Package
        </FooterLink>
        <FooterLink href="https://atomix-storybook.netlify.app" external>
          Storybook
        </FooterLink>
        <FooterLink href="/docs/api/react">API Reference</FooterLink>
      </FooterSection>

      <FooterSection title="Community">
        <FooterLink href="/docs/resources/contributing">
          Contributing
        </FooterLink>
        <FooterLink href="/docs/resources/roadmap">Roadmap</FooterLink>
        <FooterLink href="/docs/resources/changelog">Changelog</FooterLink>
        <FooterLink
          href="https://github.com/shohojdhara/atomix/issues"
          external
        >
          Report Issue
        </FooterLink>
      </FooterSection>
    </Footer>
  );
};
