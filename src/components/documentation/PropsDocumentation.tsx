import { FC } from "react";
import { useState } from "react";
import { DataTable, Badge, Icon, Input, Card } from "@shohojdhara/atomix";
import type { ComponentDocumentation } from "@/types/index";

interface PropsDocumentationProps {
  component: ComponentDocumentation;
}

export const PropsDocumentation: FC<PropsDocumentationProps> = ({
  component,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  if (!component.props || component.props.length === 0) {
    return (
      <Card className="u-p-6 u-text-center">
        <p className="u-text-secondary-emphasis">
          No props documentation available for this component.
        </p>
      </Card>
    );
  }

  // Filter props based on search term
  const filteredProps = component.props.filter(
    (prop) =>
      prop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prop.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prop.type.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Define table columns
  const columns = [
    {
      key: "name",
      title: "Name",
      header: "Name",
      accessor: "name",
      render: (prop: any) => (
        <div className="u-flex u-align-items-center u-gap-2 u-flex-wrap">
          <code className="u-text-sm u-bg-tertiary u-p-1 u-br-sm">
            {prop.name}
          </code>
          {prop.required && (
            <Badge variant="error" size="sm" label="Required" />
          )}
          {prop.deprecated && (
            <Badge variant="warning" size="sm" label="Deprecated" />
          )}
        </div>
      ),
    },
    {
      key: "type",
      title: "Type",
      header: "Type",
      accessor: "type",
      render: (prop: any) => (
        <code className="u-text-sm u-bg-tertiary u-p-1 u-br-sm u-text-primary">
          {prop.type}
        </code>
      ),
    },
    {
      key: "defaultValue",
      title: "Default",
      header: "Default",
      accessor: "defaultValue",
      render: (prop: any) =>
        prop.defaultValue ? (
          <code className="u-text-sm u-bg-tertiary u-p-1 u-br-sm">
            {prop.defaultValue}
          </code>
        ) : (
          <span className="u-text-secondary-emphasis">-</span>
        ),
    },
    {
      key: "description",
      title: "Description",
      header: "Description",
      accessor: "description",
      render: (prop: any) => (
        <div>
          <p className="u-m-0 u-mb-2">{prop.description}</p>
          {prop.deprecated && prop.deprecationMessage && (
            <div className="u-flex u-align-items-center u-gap-2 u-mt-2">
              <Icon name="Warning" size="sm" className="u-text-warning" />
              <span className="u-text-sm u-text-secondary-emphasis">
                {prop.deprecationMessage}
              </span>
            </div>
          )}
        </div>
      ),
    },
  ];

  return (
    <div className="u-mb-6">
      <div className="u-flex u-align-items-center u-justify-between u-flex-wrap u-gap-4 u-mb-6">
        <h2 className="u-text-2xl u-font-bold u-m-0">{component.name} Props</h2>
        <div
          className="u-flex u-gap-2"
          style={{ minWidth: "250px", flex: "1 1 auto", maxWidth: "400px" }}
        >
          <Input
            type="text"
            placeholder="Search props..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="u-w-100"
          />
        </div>
      </div>

      <div className="u-overflow-x-auto">
        <DataTable data={filteredProps} columns={columns} />
      </div>

      {/* Methods and Events sections can be added when the component interface supports them */}
    </div>
  );
};
