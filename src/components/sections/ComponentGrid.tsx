'use client';

import React from 'react';
import { Card, Icon, Button, Badge, Container, Row, GridCol, SectionIntro } from '@shohojdhara/atomix';
import { useRouter } from 'next/navigation';
import { componentMetadata } from '@/data/components';

export const ComponentGrid: React.FC = () => {
  const router = useRouter();

  // Get a sample of components for the grid
  const featuredComponents = componentMetadata.slice(0, 6);

  const getStatusVariant = (status: string): "primary" | "secondary" | "success" | "warning" | "info" | "danger" => {
    switch (status.toLowerCase()) {
      case 'stable':
        return 'success';
      case 'beta':
        return 'warning';
      case 'deprecated':
        return 'danger';
      default:
        return 'secondary';
    }
  };

  return (
    <section className="u-py-16">
      <Container>
        <SectionIntro
          title="Featured Components"
          text="Explore our collection of professionally designed UI components"
          className="u-text-center u-mb-12"
        />

        <Row className="u-gap-6">
          {featuredComponents.map((component) => (
            <GridCol key={component.id} xs={12} md={6} lg={4}>
              <Card
                className="u-h-100 u-p-6 u-transition-all u-cursor-pointer"
                style={{ transition: 'all 0.2s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = 'var(--atomix-shadow-md)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
                onClick={() => router.push(`/docs/components/${component.id}`)}
              >
                <div>
                  <div className="u-mb-4">
                    <h3 className="u-fs-lg u-fw-semibold u-mb-2 u-color-text-primary">{component.name}</h3>
                  </div>
                  
                  <p className="u-text-secondary-emphasis u-mb-4 u-line-height-normal">
                    {component.description}
                  </p>
                  
                  <div className="u-d-flex u-justify-content-between u-align-items-center">
                    <span className="u-fs-sm u-text-secondary-emphasis u-fw-medium">
                      {component.category}
                    </span>
                    
                    <Badge
                      label={component.status}
                      variant={getStatusVariant(component.status)}
                      size="sm"
                    />
                  </div>
                </div>
              </Card>
            </GridCol>
          ))}
        </Row>

        <div className="u-text-center u-mt-8">
          <Button
            variant="primary"
            onClick={() => router.push('/docs/components/overview')}
            icon={<Icon name="ArrowRight" size="sm" />}
            iconPosition="right"
          >
            View all components
          </Button>
        </div>
      </Container>
    </section>
  );
};