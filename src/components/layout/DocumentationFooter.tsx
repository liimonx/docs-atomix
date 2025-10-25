import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Icon } from '@shohojdhara/atomix';

export const DocumentationFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Product',
      links: [
        { label: 'Components', href: '/components' },
        { label: 'Design Tokens', href: '/design-tokens' },
        { label: 'Examples', href: '/examples' },
        { label: 'Getting Started', href: '/getting-started' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'GitHub', href: 'https://github.com/shohojdhara/atomix', external: true },
        { label: 'NPM Package', href: 'https://www.npmjs.com/package/@shohojdhara/atomix', external: true },
        { label: 'Storybook', href: 'https://atomix-storybook.netlify.app', external: true },
        { label: 'Changelog', href: '/changelog' }
      ]
    },
    {
      title: 'Community',
      links: [
        { label: 'Contributing', href: '/contributing' },
        { label: 'Discord', href: 'https://discord.gg/atomix', external: true },
        { label: 'Twitter', href: 'https://twitter.com/atomixdesign', external: true },
        { label: 'Email', href: 'mailto:hello@atomix.design', external: true }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'License', href: '/license' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' }
      ]
    }
  ];

  return (
    <footer className="atomix-docs-footer" role="contentinfo">
      <Container type="xl" className="u-py-12 u-px-6">
        <div className="footer-content u-mb-12">
          <div className="footer-brand">
            <Icon name="Atom" size="lg" />
            <h3 className="u-fs-lg u-fw-bold u-my-2">Atomix Design System</h3>
            <p className="u-fs-sm u-text-secondary-emphasis u-my-3">
              A comprehensive React component library built with accessibility and developer experience in mind.
            </p>
            <div className="footer-social u-mt-4">
              <a href="https://github.com/shohojdhara/atomix" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm">
                  <Icon name="GithubLogo" size="sm" />
                </Button>
              </a>
              <a href="https://twitter.com/atomixdesign" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm">
                  <Icon name="X" size="sm" />
                </Button>
              </a>
              <a href="https://discord.gg/atomix" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm">
                  <Icon name="DiscordLogo" size="sm" />
                </Button>
              </a>
            </div>
          </div>

          <div className="footer-links">
            {footerLinks.map((section) => (
              <div key={section.title} className="footer-section">
                <h4 className="u-fs-md u-fw-semibold u-mb-3">
                  {section.title}
                </h4>
                <nav className="section-links" aria-label={`${section.title} links`}>
                  {section.links.map((link) => (
                    <Link
                      key={link.label}
                      to={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="footer-link"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom u-pt-12">
          <p className="u-fs-sm u-text-secondary-emphasis u-m-0">
            © {currentYear} Atomix Design System. All rights reserved.
          </p>
          <p className="u-fs-sm u-text-secondary-emphasis u-m-0">
            Built with ❤️ using Atomix components
          </p>
        </div>
      </Container>
    </footer>
  );
}