import React from 'react';
import { Card, Text, Link, Stack } from '../../components/mock-atomix';
import { findNavigationItem } from '../../data/navigation';

interface ComponentRelatedProps {
  related: string[];
}

export const ComponentRelated: React.FC<ComponentRelatedProps> = ({ related }) => {
  if (!related || related.length === 0) {
    return null;
  }

  return (
    <Card>
      <Card.Header>
        <Text size="lg" weight="semibold">Related Components</Text>
      </Card.Header>
      <Card.Body>
        <Stack gap="sm">
          {related.map((componentName) => {
            const navItem = findNavigationItem(componentName.toLowerCase());
            if (!navItem) return null;

            return (
              <Link
                key={componentName}
                to={navItem.path}
                style={{ display: 'block' }}
              >
                <Text color="primary" hover>
                  {navItem.title}
                </Text>
              </Link>
            );
          })}
        </Stack>
      </Card.Body>
    </Card>
  );
};