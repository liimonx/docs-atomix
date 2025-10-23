import React from 'react';
import { Card, Text, Box, Stack } from '../../components/mock-atomix';

interface ComponentShowcaseProps {
  component: React.ReactNode;
  title?: string;
  description?: string;
}

export const ComponentShowcase: React.FC<ComponentShowcaseProps> = ({
  component,
  title,
  description
}) => {
  return (
    <Card>
      {title && (
        <Card.Header>
          <Text size="lg" weight="semibold">{title}</Text>
          {description && (
            <Text size="sm" color="muted">{description}</Text>
          )}
        </Card.Header>
      )}
      <Card.Body>
        <Box
          style={{
            padding: '2rem',
            border: '1px solid var(--atomix-border-color)',
            borderRadius: 'var(--atomix-border-radius)',
            backgroundColor: 'var(--atomix-background)'
          }}
        >
          {component}
        </Box>
      </Card.Body>
    </Card>
  );
};