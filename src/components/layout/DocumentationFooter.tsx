import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Button, Icon, Footer, FooterLink, FooterSection } from '@shohojdhara/atomix';
  import { ArrowUp } from 'lucide-react';

export const DocumentationFooter: React.FC = () => {
  const location = useLocation();

  return (
    <footer className="documentation-footer u-py-4 u-bg-secondary-subtle">
      <Container className="u-d-flex u-flex-wrap u-justify-content-between u-align-items-center">
        <div className="u-mb-2 u-mb-md-0">
          <Footer className="u-d-flex u-flex-column u-flex-md-row">
            <FooterSection className="u-mb-2 u-mb-md-0">
              <FooterLink href="https://github.com/shohojdhara/atomix" external>
                GitHub
              </FooterLink>
              <FooterLink href="https://npmjs.com/package/@shohojdhara/atomix" external>
                NPM
              </FooterLink>
            </FooterSection>
            <FooterSection>
              <FooterLink LinkComponent={Link} href="/components">
                Components
              </FooterLink>
              <FooterLink LinkComponent={Link} href="/tokens">
                Design Tokens
              </FooterLink>
              <FooterLink LinkComponent={Link} href="/getting-started">
                Getting Started
              </FooterLink>
            </FooterSection>
          </Footer>
        </div>
        <div>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Icon name="ArrowUp" className="u-me-1" />
            Back to Top
          </Button>
        </div>
      </Container>
    </footer>
  );
};