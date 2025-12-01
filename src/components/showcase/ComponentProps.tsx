import React from "react";
import { Card, Badge, DataTable } from "@shohojdhara/atomix";

interface PropDefinition {
  name: string;
  type: string;
  required: boolean;
  defaultValue?: string;
  description: string;
  examples?: string[];
  deprecated?: boolean;
  since?: string;
}

interface ComponentPropsProps {
  props: PropDefinition[];
}

export const ComponentProps: React.FC<ComponentPropsProps> = ({ props }) => {
  return (
    <Card
      children={
        <div className="u-p-6">
          <h3 className="u-fs-xl u-fw-bold u-mb-4">Props</h3>
          <DataTable
            data={props}
            bordered
            striped
            dense
            columns={[
              {
                key: "name",
                title: "Name",
                render: (_value: unknown, prop: PropDefinition) => (
                  <code className="u-fs-sm u-text-error-emphasis">
                    {prop.name}
                  </code>
                ),
              },
              {
                key: "type",
                title: "Type",
                render: (_value: unknown, prop: PropDefinition) => (
                  <code className="u-fs-sm u-text-error-emphasis">
                    {prop.type}
                  </code>
                ),
              },
              {
                key: "required",
                title: "Required",
                render: (_value: unknown, prop: PropDefinition) =>
                  prop.required ? (
                    <Badge label="Required" variant="success" size="sm">
                      Required
                    </Badge>
                  ) : (
                    <Badge label="Optional" variant="secondary" size="sm">
                      Optional
                    </Badge>
                  ),
              },
              {
                key: "defaultValue",
                title: "Default",
                render: (_value: unknown, prop: PropDefinition) =>
                  prop.defaultValue ? (
                    <code className="u-fs-sm u-text-error-emphasis">
                      {prop.defaultValue}
                    </code>
                  ) : (
                    <span className="u-text-muted">-</span>
                  ),
              },
              {
                key: "description",
                title: "Description",
                render: (_value: unknown, prop: PropDefinition) => (
                  <p className="u-m-0 u-mb-2">{prop.description}</p>
                ),
              },
              {
                key: "examples",
                title: "Examples",
                render: (_value: unknown, prop: PropDefinition) =>
                  prop.examples && prop.examples.length > 0 ? (
                    <ul className="u-list-unstyled u-mb-0 c-data-table__cell c-data-table__cell--body">
                      {prop.examples.map((example, idx) => (
                        <li
                          key={idx}
                          className="c-data-table__cell c-data-table__cell--body"
                        >
                          <code>{example}</code>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <span className="u-text-muted">-</span>
                  ),
              },
              {
                key: "deprecated",
                title: "Deprecated",
                render: (_value: unknown, prop: PropDefinition) =>
                  prop.deprecated ? (
                    <Badge label="Deprecated" variant="warning" size="sm">
                      Deprecated
                    </Badge>
                  ) : (
                    <span className="u-text-muted">-</span>
                  ),
              },
              {
                key: "since",
                title: "Since",
                render: (_value: unknown, prop: PropDefinition) =>
                  prop.since ? (
                    <span className="u-text-muted">{prop.since}</span>
                  ) : (
                    <span className="u-text-muted">-</span>
                  ),
              },
            ]}
          />
        </div>
      }
    />
  );
};
