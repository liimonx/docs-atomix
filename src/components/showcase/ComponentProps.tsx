import React from 'react';
import { Card, Text, Table, Badge } from '../../components/mock-atomix';
import { ComponentProp } from '../../data/components';

interface ComponentPropsProps {
  props: ComponentProp[];
}

export const ComponentProps: React.FC<ComponentPropsProps> = ({ props }) => {
  if (!props || props.length === 0) {
    return null;
  }

  return (
    <Card>
      <Card.Header>
        <Text size="lg" weight="semibold">Props</Text>
      </Card.Header>
      <Card.Body>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Type</Table.HeaderCell>
              <Table.HeaderCell>Default</Table.HeaderCell>
              <Table.HeaderCell>Required</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {props.map((prop) => (
              <Table.Row key={prop.name}>
                <Table.Cell>
                  <Text weight="medium" family="mono">
                    {prop.name}
                  </Text>
                </Table.Cell>
                <Table.Cell>
                  <Text family="mono" size="sm">
                    {prop.type}
                  </Text>
                </Table.Cell>
                <Table.Cell>
                  {prop.defaultValue ? (
                    <Text family="mono" size="sm">
                      {prop.defaultValue}
                    </Text>
                  ) : (
                    <Text color="muted" size="sm">
                      —
                    </Text>
                  )}
                </Table.Cell>
                <Table.Cell>
                  <Badge
                    variant={prop.required ? 'error' : 'success'}
                    size="sm"
                  >
                    {prop.required ? 'Required' : 'Optional'}
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  <Text size="sm">{prop.description}</Text>
                  {prop.options && (
                    <Text size="xs" color="muted">
                      Options: {prop.options.join(', ')}
                    </Text>
                  )}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Card.Body>
    </Card>
  );
};