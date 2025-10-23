import React from 'react';
import { Card, Text, List, Badge, Box, Stack } from '../../components/mock-atomix';
import { AccessibilityInfo } from '../../data/components';

interface ComponentAccessibilityProps {
  accessibility: AccessibilityInfo;
}

export const ComponentAccessibility: React.FC<ComponentAccessibilityProps> = ({ accessibility }) => {
  return (
    <Card>
      <Card.Header>
        <Text size="lg" weight="semibold">Accessibility</Text>
        <Badge variant="success" size="sm">
          WCAG 2.1 AA
        </Badge>
      </Card.Header>
      <Card.Body>
        <Stack gap="lg">
          {accessibility.screenReaderSupport && (
            <Box>
              <Text weight="medium" mb="sm">
                Screen Reader Support
              </Text>
              <Text color="success">
                ✓ Fully supported with proper announcements
              </Text>
            </Box>
          )}

          {accessibility.keyboardSupport.length > 0 && (
            <Box>
              <Text weight="medium" mb="sm">
                Keyboard Support
              </Text>
              <List>
                {accessibility.keyboardSupport.map((support, index) => (
                  <List.Item key={index}>{support}</List.Item>
                ))}
              </List>
            </Box>
          )}

          {accessibility.ariaAttributes.length > 0 && (
            <Box>
              <Text weight="medium" mb="sm">
                ARIA Attributes
              </Text>
              <List>
                {accessibility.ariaAttributes.map((attr, index) => (
                  <List.Item key={index}>{attr}</List.Item>
                ))}
              </List>
            </Box>
          )}

          {accessibility.focusManagement.length > 0 && (
            <Box>
              <Text weight="medium" mb="sm">
                Focus Management
              </Text>
              <List>
                {accessibility.focusManagement.map((management, index) => (
                  <List.Item key={index}>{management}</List.Item>
                ))}
              </List>
            </Box>
          )}
        </Stack>
      </Card.Body>
    </Card>
  );
};