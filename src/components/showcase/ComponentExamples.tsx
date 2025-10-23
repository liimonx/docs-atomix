import React from 'react';
import { Card, Text, Code, Box, Stack, Tabs, Tab } from '../../components/mock-atomix';
import { ComponentExample } from '../../data/components';

interface ComponentExamplesProps {
  examples: ComponentExample[];
}

export const ComponentExamples: React.FC<ComponentExamplesProps> = ({ examples }) => {
  if (!examples || examples.length === 0) {
    return null;
  }

  return (
    <Card>
      <Card.Header>
        <Text size="lg" weight="semibold">Examples</Text>
      </Card.Header>
      <Card.Body>
        <Stack gap="lg">
          {examples.map((example, index) => (
            <Box key={index}>
              <Text size="md" weight="medium" mb="sm">
                {example.title}
              </Text>
              <Text size="sm" color="muted" mb="md">
                {example.description}
              </Text>
              
              <Tabs defaultValue="preview">
                <Tab.List>
                  <Tab value="preview">Preview</Tab>
                  <Tab value="code">Code</Tab>
                </Tab.List>
                
                <Tab.Panels>
                  <Tab.Panel value="preview">
                    <Box
                      style={{
                        padding: '2rem',
                        border: '1px solid var(--atomix-border-color)',
                        borderRadius: 'var(--atomix-border-radius)',
                        backgroundColor: 'var(--atomix-background)',
                        marginTop: '1rem'
                      }}
                    >
                      {example.preview}
                    </Box>
                  </Tab.Panel>
                  <Tab.Panel value="code">
                    <Code block style={{ marginTop: '1rem' }}>
                      {example.code}
                    </Code>
                  </Tab.Panel>
                </Tab.Panels>
              </Tabs>
            </Box>
          ))}
        </Stack>
      </Card.Body>
    </Card>
  );
};