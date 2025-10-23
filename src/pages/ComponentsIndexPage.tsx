import React, { useState, useMemo, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Card,
  Input,
  Badge,
  Icon,
  Button,
  Hero,
  GridCol,
  Row,
  Block,
} from "@shohojdhara/atomix";
import { navigationData } from "../data/navigation";

interface ComponentItem {
  id: string;
  title: string;
  description: string;
  path: string;
  icon: string;
  badge?: {
    text: string;
    variant: string;
  };
  searchTerms?: string[];
  section: string;
  sectionId: string;
}

const ComponentsIndexPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Get all component items from navigation data
  const allComponents = useMemo(() => {
    const components: ComponentItem[] = [];

    navigationData.forEach((section) => {
      if (section.id !== "getting-started") {
        section.items.forEach((item) => {
          components.push({
            ...item,
            description: item.description || "",
            icon: item.icon || "Info",
            section: section.title,
            sectionId: section.id,
          });
        });
      }
    });

    return components;
  }, []);

  // Filter components based on search query
  const filteredComponents = useMemo(() => {
    if (!searchQuery.trim()) {
      return allComponents;
    }

    const query = searchQuery.toLowerCase();
    return allComponents.filter((component) => {
      const searchableText = [
        component.title,
        component.description,
        ...(component.searchTerms || []),
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(query);
    });
  }, [allComponents, searchQuery]);

  // Group components by category
  const groupedComponents = useMemo(() => {
    const groups: Record<string, ComponentItem[]> = {};

    filteredComponents.forEach((component) => {
      if (!groups[component.section]) {
        groups[component.section] = [];
      }
      groups[component.section].push(component);
    });

    return groups;
  }, [filteredComponents]);

  return (
    <>
      <Helmet>
        <title>Components - Atomix Design System</title>
        <meta
          name="description"
          content="Explore the complete collection of Atomix components. Modern, accessible, and customizable React components."
        />
      </Helmet>

      <Hero
        title="Components"
        text="A comprehensive collection of modern, accessible React components"
        actions={
          <Input
            type="search"
            placeholder="Search components..."
            value={searchQuery}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSearchQuery(e.target.value)
            }
          />
        }
        alignment="center"
        backgroundImageSrc="https://images.unsplash.com/photo-1760976180663-946ff68fa64c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1034"
      ></Hero>

      {/* Components Grid */}
      <Block className="components-grid">
        {Object.keys(groupedComponents).length === 0 ? (
          <div className="u-text-center u-p-12">
            <Icon name="MagnifyingGlass" size="xl" className="u-mb-4" />
            <h3>No components found</h3>
            <p className="u-text-secondary-emphasis u-mb-6">
              No components match "{searchQuery}". Try a different search term.
            </p>
            <Button variant="outline" onClick={() => setSearchQuery("")}>
              Clear search
            </Button>
          </div>
        ) : (
          Object.entries(groupedComponents).map(([section, components]) => (
            <div key={section} className="u-mb-12">
              <h2 className="u-mb-6 u-fs-xl u-fw-600">{section}</h2>

              <Row>
                {components.map((component) => (
                  <GridCol
                    key={component.id}
                    sm={6}
                    md={4}
                    lg={3}
                    className="u-mb-6"
                  >
                    <Link to={component.path} className="u-link-none">
                      <Card className="u-p-6 u-cursor-pointer u-h-100 u-bg-primary-subtle">
                        <div className="u-mb-4">
                          <Icon name={component.icon as any} size="lg" />
                        </div>

                        <div className="u-d-flex u-align-items-center u-gap-2 u-mb-2">
                          <h3 className="u-fs-lg u-fw-600 u-m-0 u-text-primary-emphasis">
                            {component.title}
                          </h3>
                          {component.badge && (
                            <Badge
                              label={component.badge.text}
                              variant={component.badge.variant as any}
                              size="sm"
                              className="u-ms-2"
                            />
                          )}
                        </div>

                        <p className="u-fs-sm u-text-secondary-emphasis u-m-0 u-lh-lg">
                          {component.description}
                        </p>
                      </Card>
                    </Link>
                  </GridCol>
                ))}
              </Row>
            </div>
          ))
        )}
      </Block>

      {/* Stats Section */}
      <Block className="stats-section" spacing="xl" background="secondary">
        <Row justifyContent="around" className="u-text-center">
          <GridCol xs="auto">
            <h3 className="u-fs-2xl u-fw-bold u-m-0">{allComponents.length}</h3>
            <p className="u-text-secondary-emphasis u-m-0">Components</p>
          </GridCol>
          <GridCol xs="auto">
            <h3 className="u-fs-2xl u-fw-bold u-m-0">100%</h3>
            <p className="u-text-secondary-emphasis u-m-0">Accessible</p>
          </GridCol>
          <GridCol xs="auto">
            <h3 className="u-fs-2xl u-fw-bold u-m-0">TypeScript</h3>
            <p className="u-text-secondary-emphasis u-m-0">Support</p>
          </GridCol>
        </Row>
      </Block>
    </>
  );
};

export default ComponentsIndexPage;
