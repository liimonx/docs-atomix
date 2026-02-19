"use client";

import { useState, useMemo, useCallback, ChangeEvent, FC } from "react";
import Link from "next/link";
import {
  Card,
  Input,
  Badge,
  Icon,
  Button,
  Hero,
  Block,
  Grid,
  GridCol,
  Callout,
} from "@shohojdhara/atomix";

import { navigationData } from "@/data/navigation";
import styles from "@/styles/PageHero.module.scss";

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
  isNew?: boolean;
  isUpdated?: boolean;
}

type ViewMode = "grid" | "list";
type FilterCategory = "all" | "components";

const ComponentsOverviewPage: FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [filterCategory, setFilterCategory] = useState<FilterCategory>("all");

  // Get all component items from navigation data (only components section)
  const allComponents = useMemo(() => {
    const components: ComponentItem[] = [];

    navigationData.forEach((section) => {
      if (section.id === "components") {
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

    // Sort components by priority (add priority property to NavigationItem interface)
    return components.sort(
      (a, b) => ((a as any).priority || 999) - ((b as any).priority || 999),
    );
  }, []);

  // Filter components based on search query and category
  const filteredComponents = useMemo(() => {
    let filtered = allComponents;

    // Filter by category
    if (filterCategory !== "all") {
      filtered = filtered.filter(
        (component) => component.sectionId === filterCategory,
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((component) => {
        const searchableText = [
          component.title,
          component.description,
          component.section,
          ...(component.searchTerms || []),
        ]
          .join(" ")
          .toLowerCase();

        return searchableText.includes(query);
      });
    }

    return filtered;
  }, [allComponents, searchQuery, filterCategory]);

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

  // Category filter options
  const categoryOptions = useMemo(
    () => [
      { id: "all", label: "All", count: allComponents.length },
      {
        id: "components",
        label: "Components",
        count: allComponents.filter((c) => c.sectionId === "components").length,
      },
    ],
    [allComponents],
  );

  // Memoized handler for search input change
  const handleSearchChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  }, []);

  // Memoized handler for view mode change
  const handleViewModeChange = useCallback((mode: ViewMode) => {
    setViewMode(mode);
  }, []);

  // Memoized handler for filter category change
  const handleFilterCategoryChange = useCallback((category: FilterCategory) => {
    setFilterCategory(category);
  }, []);

  return (
    <>
      <Hero
        title="Components"
        text="A comprehensive collection of modern, accessible, and customizable React components built with TypeScript and optimized for performance."
        className={styles.pageHero}
        alignment="center"
        showOverlay={false}
        videoBackground="https://cdn.pixabay.com/video/2018/09/16/18249-290359989_large.mp4"
        videoOptions={
          {
            autoplay: true,
            loop: true,
            muted: true,
            preload: "auto",
          } as any
        }
        backgroundImageSrc="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2728"
        contentWidth="1200px"
        children={
          <>
            {/* Stats Cards */}
            <Grid className="u-mb-6">
              <GridCol md={3} sm={6} className="u-mb-3 u-mb-md-0">
                <Card
                  glass={{
                    displacementScale: 80,
                    blurAmount: 0.8,
                    padding: "24px",
                  }}
                  elevation="lg"
                  variant="primary"
                  className="u-h-100"
                  title={allComponents.length.toString()}
                  text="Total Components"
                  header={
                    <div className="u-flex u-align-items-center u-justify-center u-w-100">
                      <div
                        className="u-flex u-align-items-center u-justify-center"
                        style={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "8px",
                          backdropFilter:
                            "blur(5px) saturate(300%) contrast(45%) brightness(130%)",
                        }}
                      >
                        <Icon
                          name="GridFour"
                          size={24}
                          className="u-text-brand-emphasis"
                        />
                      </div>
                    </div>
                  }
                />
              </GridCol>
              <GridCol md={3} sm={6} className="u-mb-3 u-mb-md-0">
                <Card
                  glass={{
                    displacementScale: 80,
                    blurAmount: 0.8,
                    padding: "24px",
                  }}
                  elevation="lg"
                  variant="success"
                  className="u-h-100"
                  header={
                    <div className="u-flex u-align-items-center u-justify-center u-w-100">
                      <div
                        className="u-flex u-align-items-center u-justify-center"
                        style={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "12px",
                          backdropFilter:
                            "blur(5px) saturate(300%) contrast(45%) brightness(130%)",
                        }}
                      >
                        <Icon
                          name="CheckCircle"
                          size={24}
                          className="u-text-success-emphasis"
                        />
                      </div>
                    </div>
                  }
                  title="100%"
                  text="Accessible"
                />
              </GridCol>
              <GridCol md={3} sm={6} className="u-mb-3 u-mb-md-0">
                <Card
                  glass={{
                    displacementScale: 80,
                    blurAmount: 0.8,
                    padding: "24px",
                  }}
                  elevation="lg"
                  variant="info"
                  className="u-text-center u-h-100"
                  header={
                    <div className="u-flex u-align-items-center u-justify-center u-w-100">
                      <div
                        className="u-flex u-align-items-center u-justify-center"
                        style={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "8px",
                          backdropFilter:
                            "blur(5px) saturate(300%) contrast(45%) brightness(130%)",
                        }}
                      >
                        <Icon
                          name="Shield"
                          size={24}
                          className="u-text-info-emphasis"
                        />
                      </div>
                    </div>
                  }
                  title="TypeScript"
                  text="Full Support"
                />
              </GridCol>
              <GridCol md={3} sm={6}>
                <Card
                  elevation="lg"
                  variant="warning"
                  glass={{
                    displacementScale: 80,
                    blurAmount: 0.8,
                    padding: "24px",
                  }}
                  className="u-h-100"
                  header={
                    <div className="u-flex u-align-items-center u-justify-center u-w-100">
                      <div
                        className="u-flex u-align-items-center u-justify-center"
                        style={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "8px",
                          backdropFilter:
                            "blur(5px) saturate(300%) contrast(45%) brightness(130%)",
                        }}
                      >
                        <Icon
                          name="Lightning"
                          size={24}
                          className="u-text-warning-emphasis"
                        />
                      </div>
                    </div>
                  }
                  title="React 18"
                  text="Optimized"
                />
              </GridCol>
            </Grid>

            {/* Search and Filter Section */}
            <Card
              elevation="lg"
              glass={{
                blurAmount: 1.2,
                padding: "24px",
                mode: "shader",
                displacementScale: 205,
              }}
            >
              {/* Search and View Controls */}
              <Grid className="u-align-items-center u-justify-between u-mb-4">
                <GridCol md={7} sm={12} className="u-mb-3 u-mb-md-0">
                  <div className="u-relative u-w-100">
                    <Input
                      variant="dark"
                      type="search"
                      placeholder="Search components..."
                      value={searchQuery}
                      onChange={handleSearchChange}
                      style={{
                        background:
                          "rgba(var(--atomix-dark-rgb), 0.4) !important",
                        paddingLeft: "48px",
                        fontSize: "15px",
                      }}
                    />
                    <div
                      className="u-absolute"
                      style={{
                        top: "50%",
                        left: "16px",
                        transform: "translateY(-50%)",
                        pointerEvents: "none",
                      }}
                    >
                      <Icon
                        name="MagnifyingGlass"
                        size={20}
                        className="u-text-secondary-emphasis"
                      />
                    </div>
                  </div>
                </GridCol>
                <GridCol md={4} sm={12}>
                  <div className="u-flex u-justify-end u-gap-2">
                    <Button
                      variant={
                        viewMode === "grid" ? "primary" : "outline-error "
                      }
                      size="sm"
                      onClick={() => handleViewModeChange("grid")}
                      aria-label="Grid view"
                      className="u-flex u-align-items-center u-gap-2"
                    >
                      <Icon name="GridFour" size={18} />
                      <span>Grid</span>
                    </Button>
                    <Button
                      variant={
                        viewMode === "list" ? "primary" : "outline-error"
                      }
                      size="sm"
                      onClick={() => handleViewModeChange("list")}
                      aria-label="List view"
                      className="u-flex u-align-items-center u-gap-2"
                    >
                      <Icon name="ListBullets" size={18} />
                      <span>List</span>
                    </Button>
                  </div>
                </GridCol>
              </Grid>

              {/* Category Filters */}
              <div className="u-flex u-flex-wrap u-gap-2 u-pt-4 u-border-t u-border-brand-subtle">
                {categoryOptions.map((option) => (
                  <Button
                    key={option.id}
                    variant={
                      filterCategory === option.id
                        ? "primary"
                        : "outline-primary"
                    }
                    size="sm"
                    onClick={() =>
                      handleFilterCategoryChange(option.id as FilterCategory)
                    }
                  >
                    <div className="u-flex u-align-items-center u-gap-2">
                      <span>{option.label}</span>
                      <Badge
                        label={option.count.toString()}
                        variant={
                          filterCategory === option.id ? "error" : "primary"
                        }
                        size="sm"
                      >
                        {option.count}
                      </Badge>
                    </div>
                  </Button>
                ))}
              </div>
            </Card>
          </>
        }
      />

      <Block spacing="sm">
        {(searchQuery || filterCategory !== "all") && (
          <Callout variant="info" className="u-mb-6">
            <p className="u-mb-0">
              Showing <strong>{filteredComponents.length}</strong> of{" "}
              <strong>{allComponents.length}</strong> items
              {searchQuery && ` matching "${searchQuery}"`}
              {filterCategory !== "all" &&
                ` in ${
                  categoryOptions.find((c) => c.id === filterCategory)?.label
                }`}
            </p>
          </Callout>
        )}

        {/* Components Grid/List */}
        <div className="u-mb-2xl">
          {Object.keys(groupedComponents).length === 0 ? (
            <Card
              header={
                <Icon
                  name="MagnifyingGlass"
                  size={48}
                  className="u-mb-4 u-text-secondary-emphasis"
                />
              }
              children={
                <>
                  <h3 className="u-text-2xl u-font-bold u-mb-3">
                    No items found
                  </h3>
                  <p className="u-text-secondary-emphasis u-mb-6">
                    No items match your search "{searchQuery}". Try a different
                    search term or filter.
                  </p>
                </>
              }
            ></Card>
          ) : (
            Object.entries(groupedComponents).map(([section, components]) => (
              <div key={section} className="u-mt-4">
                <div
                  className="u-flex u-align-items-center u-gap-2 u-justify-between u-pb-3 u-border-b"
                  style={{ borderBottomWidth: "2px" }}
                >
                  <h2 className="u-text-xl u-font-semibold">{section}</h2>
                  <Badge
                    label={`${components.length} items`}
                    variant="secondary"
                  >
                    {components.length} items
                  </Badge>
                </div>

                {viewMode === "list" ? (
                  <Grid>
                    {components.map((component) => (
                      <GridCol key={component.id} xs={12} className="u-mt-4">
                        <Link
                          href={component.path}
                          className="u-text-decoration-none u-color-inherit u-block u-h-100"
                        >
                          <Card
                            row
                            icon={<Icon name={component.icon as any} />}
                            title={component.title}
                            text={component.description}
                            header={
                              <>
                                {component.badge && (
                                  <Badge
                                    label={component.badge.text}
                                    variant={component.badge.variant as any}
                                    size="sm"
                                    className="u-ml-2"
                                  >
                                    {component.badge.text}
                                  </Badge>
                                )}
                                {(component.isNew || component.isUpdated) && (
                                  <Badge
                                    label={component.isNew ? "New" : "Updated"}
                                    variant={
                                      component.isNew ? "success" : "warning"
                                    }
                                    size="sm"
                                    className="u-ml-2"
                                  >
                                    <Icon
                                      name={
                                        component.isNew
                                          ? "Sparkle"
                                          : "ArrowCounterClockwise"
                                      }
                                      size={12}
                                    />
                                    {component.isNew ? "New" : "Updated"}
                                  </Badge>
                                )}
                              </>
                            }
                          />
                        </Link>
                      </GridCol>
                    ))}
                  </Grid>
                ) : (
                  <Grid>
                    {components.map((component) => (
                      <GridCol
                        key={component.id}
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3}
                        className="u-mt-4"
                      >
                        <Link
                          href={component.path}
                          className="u-text-decoration-none u-h-100"
                        >
                          <Card
                            className="u-h-100"
                            icon={<Icon name={component.icon as any} />}
                            title={component.title}
                            text={component.description}
                          >
                            {(component.badge ||
                              component.isNew ||
                              component.isUpdated) && (
                              <div className="u-mt-3">
                                {component.badge && (
                                  <Badge
                                    label={component.badge.text}
                                    variant={component.badge.variant as any}
                                    size="sm"
                                    className="u-mr-2"
                                  >
                                    {component.badge.text}
                                  </Badge>
                                )}
                                {component.isNew && (
                                  <Badge
                                    label="New"
                                    variant="success"
                                    size="sm"
                                  >
                                    <Icon name="Sparkle" size={12} />
                                    New
                                  </Badge>
                                )}
                                {component.isUpdated && (
                                  <Badge
                                    label="Updated"
                                    variant="warning"
                                    size="sm"
                                  >
                                    <Icon
                                      name="ArrowCounterClockwise"
                                      size={12}
                                    />
                                    Updated
                                  </Badge>
                                )}
                              </div>
                            )}
                          </Card>
                        </Link>
                      </GridCol>
                    ))}
                  </Grid>
                )}
              </div>
            ))
          )}
        </div>
      </Block>
    </>
  );
};

export default ComponentsOverviewPage;
