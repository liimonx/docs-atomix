'use client';

import React, { useState, useMemo, ChangeEvent } from 'react';
import Link from 'next/link';
import {
  Card,
  Input,
  Badge,
  Icon,
  Button,
  Hero,
  Block,
  Row,
  GridCol,
  Callout
} from '@shohojdhara/atomix';
import { 
  Search, 
  Grid as GridIcon, 
  List,
  CheckCircle,
  Zap,
  Shield,
  Sparkles
} from 'lucide-react';
import { navigationData } from '@/data/navigation';

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

type ViewMode = 'grid' | 'list';
type FilterCategory = 'all' | 'components' | 'design-tokens' | 'styles' | 'layouts' | 'guides';

const ComponentsIndexPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [filterCategory, setFilterCategory] = useState<FilterCategory>('all');

  // Get all component items from navigation data
  const allComponents = useMemo(() => {
    const components: ComponentItem[] = [];
    
    navigationData.forEach((section) => {
      if (section.id !== 'getting-started') {
        section.items.forEach((item) => {
          components.push({
            ...item,
            description: item.description || '',
            icon: item.icon || 'Info',
            section: section.title,
            sectionId: section.id
          });
        });
      }
    });
    
    return components;
  }, []);

  // Filter components based on search query and category
  const filteredComponents = useMemo(() => {
    let filtered = allComponents;

    // Filter by category
    if (filterCategory !== 'all') {
      filtered = filtered.filter(component => 
        component.sectionId === filterCategory
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
          ...(component.searchTerms || [])
        ].join(' ').toLowerCase();
        
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
  const categoryOptions = [
    { id: 'all', label: 'All', count: allComponents.length },
    { id: 'components', label: 'Components', count: allComponents.filter(c => c.sectionId === 'components').length },
    { id: 'design-tokens', label: 'Design Tokens', count: allComponents.filter(c => c.sectionId === 'design-tokens').length },
    { id: 'styles', label: 'Styles', count: allComponents.filter(c => c.sectionId === 'styles').length },
    { id: 'layouts', label: 'Layouts', count: allComponents.filter(c => c.sectionId === 'layouts').length },
    { id: 'guides', label: 'Guides', count: allComponents.filter(c => c.sectionId === 'guides').length },
  ];

  return (
    <>

      <Hero
        glass={{
          displacementScale: 30,
          blurAmount: 5,
          elasticity: 0,
          enableLiquidBlur: true,
          padding: "20px",
          cornerRadius: 30,
        } as any}
        className="u-pt-32 u-pb-16"
        title="📚 Component Library"
        text="A comprehensive collection of modern, accessible, and customizable React components"
        alignment="center"
        backgroundImageSrc="https://images.unsplash.com/photo-1682100615316-e152a40b5793?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2728"
      />

      <Block className="u-pb-2xl">
        {/* Stats Cards */}
        <Row className="u-mb-8">
          <GridCol md={3} sm={6}>
            <Card className="u-p-6 u-text-center u-transition-fast u-border u-border-subtle" 
              style={{ 
                transition: 'var(--atomix-transition-fast)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = 'var(--atomix-shadow-lg)';
                e.currentTarget.style.borderColor = 'var(--atomix-color-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.boxShadow = '';
                e.currentTarget.style.borderColor = '';
              }}
            >
              <div className="u-d-flex u-justify-content-center u-mb-4">
                <GridIcon size={32} className="u-text-primary" />
              </div>
              <h3 className="u-fs-2xl u-fw-bold u-mb-1">{allComponents.length}</h3>
              <p className="u-fs-sm u-text-secondary-emphasis u-m-0">Total Items</p>
            </Card>
          </GridCol>
          <GridCol md={3} sm={6}>
            <Card className="u-p-6 u-text-center u-transition-fast u-border u-border-subtle"
              style={{ 
                transition: 'var(--atomix-transition-fast)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = 'var(--atomix-shadow-lg)';
                e.currentTarget.style.borderColor = 'var(--atomix-color-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.boxShadow = '';
                e.currentTarget.style.borderColor = '';
              }}
            >
              <div className="u-d-flex u-justify-content-center u-mb-4">
                <CheckCircle size={32} className="u-text-success" />
              </div>
              <h3 className="u-fs-2xl u-fw-bold u-mb-1">100%</h3>
              <p className="u-fs-sm u-text-secondary-emphasis u-m-0">Accessible</p>
            </Card>
          </GridCol>
          <GridCol md={3} sm={6}>
            <Card className="u-p-6 u-text-center u-transition-fast u-border u-border-subtle"
              style={{ 
                transition: 'var(--atomix-transition-fast)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = 'var(--atomix-shadow-lg)';
                e.currentTarget.style.borderColor = 'var(--atomix-color-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.boxShadow = '';
                e.currentTarget.style.borderColor = '';
              }}
            >
              <div className="u-d-flex u-justify-content-center u-mb-4">
                <Shield size={32} className="u-text-info" />
              </div>
              <h3 className="u-fs-2xl u-fw-bold u-mb-1">TypeScript</h3>
              <p className="u-fs-sm u-text-secondary-emphasis u-m-0">Full Support</p>
            </Card>
          </GridCol>
          <GridCol md={3} sm={6}>
            <Card className="u-p-6 u-text-center u-transition-fast u-border u-border-subtle"
              style={{ 
                transition: 'var(--atomix-transition-fast)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = 'var(--atomix-shadow-lg)';
                e.currentTarget.style.borderColor = 'var(--atomix-color-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = '';
                e.currentTarget.style.boxShadow = '';
                e.currentTarget.style.borderColor = '';
              }}
            >
              <div className="u-d-flex u-justify-content-center u-mb-4">
                <Zap size={32} className="u-text-warning" />
              </div>
              <h3 className="u-fs-2xl u-fw-bold u-mb-1">React 18</h3>
              <p className="u-fs-sm u-text-secondary-emphasis u-m-0">Optimized</p>
            </Card>
          </GridCol>
        </Row>

        {/* Search and Filters */}
        <Card className="u-p-6 u-mb-6">
          <Row className="u-align-items-center">
            <GridCol md={6}>
              <div className="u-relative u-w-100">
                <Search size={20} className="u-absolute" style={{ left: 'var(--atomix-spacing-md)', top: '50%', transform: 'translateY(-50%)', color: 'var(--atomix-color-text-tertiary)', pointerEvents: 'none' }} />
                <Input
                  type="search"
                  placeholder="Search components, tokens, guides..."
                  value={searchQuery}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                  className="u-w-100"
                  style={{ paddingLeft: 'calc(var(--atomix-spacing-md) + 24px)' }}
                />
              </div>
            </GridCol>
            <GridCol md={6}>
              <div className="u-d-flex u-justify-content-end u-gap-4">
                <div className="u-d-flex u-gap-2">
                  <Button
                    variant={viewMode === 'grid' ? 'primary' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    aria-label="Grid view"
                  >
                    <GridIcon size={16} />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'primary' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    aria-label="List view"
                  >
                    <List size={16} />
                  </Button>
                </div>
              </div>
            </GridCol>
          </Row>

          {/* Category Filters */}
          <div className="u-d-flex u-flex-wrap u-gap-2 u-mt-4 u-pt-4 u-border-t u-border-subtle">
            {categoryOptions.map((option) => (
              <Button
                key={option.id}
                variant={filterCategory === option.id ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setFilterCategory(option.id as FilterCategory)}
                className="u-d-flex u-align-items-center u-gap-2"
              >
                {option.label}
                <Badge 
                  label={option.count.toString()}
                  variant="secondary" 
                  size="sm"
                >
                  {option.count}
                </Badge>
              </Button>
            ))}
          </div>
        </Card>

        {/* Results Info */}
        {(searchQuery || filterCategory !== 'all') && (
          <Callout variant="info" className="u-mb-6">
            <p className="u-mb-0">
              Showing <strong>{filteredComponents.length}</strong> of <strong>{allComponents.length}</strong> items
              {searchQuery && ` matching "${searchQuery}"`}
              {filterCategory !== 'all' && ` in ${categoryOptions.find(c => c.id === filterCategory)?.label}`}
            </p>
          </Callout>
        )}

        {/* Components Grid/List */}
        <section className="u-mb-2xl">
          {Object.keys(groupedComponents).length === 0 ? (
            <Card className="u-p-8 u-text-center">
              <Search size={48} className="u-mb-4 u-text-secondary-emphasis" />
              <h3 className="u-fs-2xl u-fw-bold u-mb-3">No items found</h3>
              <p className="u-text-secondary-emphasis u-mb-6">
                No items match your search "{searchQuery}". Try a different search term or filter.
              </p>
              <div className="u-d-flex u-justify-content-center u-gap-2 u-flex-wrap">
                <Button variant="outline" onClick={() => setSearchQuery('')}>
                  Clear search
                </Button>
                <Button variant="outline" onClick={() => setFilterCategory('all')}>
                  Reset filters
                </Button>
              </div>
            </Card>
          ) : (
            Object.entries(groupedComponents).map(([section, components]) => (
              <div key={section} className="u-mb-2xl">
                <div className="u-d-flex u-align-items-center u-justify-content-between u-mb-4 u-pb-3 u-border-b" style={{ borderBottomWidth: '2px' }}>
                  <h2 className="u-fs-xl u-fw-semibold u-m-0">
                    {section}
                  </h2>
                  <Badge label={`${components.length} items`} variant="secondary">{components.length} items</Badge>
                </div>
                
                <div 
                  className="u-d-grid u-gap-lg"
                  style={{ 
                    gridTemplateColumns: viewMode === 'list' ? '1fr' : 'repeat(auto-fill, minmax(300px, 1fr))'
                  }}
                >
                  {components.map((component) => (
                    <Link
                      key={component.id}
                      href={component.path}
                      className="u-text-decoration-none u-color-inherit u-d-block u-h-100"
                    >
                      <Card 
                        className={`u-p-4 u-cursor-pointer u-h-100 u-transition-fast u-border u-border-subtle ${viewMode === 'list' ? 'u-d-flex u-flex-direction-row u-align-items-center' : 'u-d-flex u-flex-direction-column'}`}
                        style={{ 
                          transition: 'var(--atomix-transition-fast)',
                          gap: 'var(--atomix-spacing-md)'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-4px)';
                          e.currentTarget.style.boxShadow = 'var(--atomix-shadow-lg)';
                          e.currentTarget.style.borderColor = 'var(--atomix-color-primary)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = '';
                          e.currentTarget.style.boxShadow = '';
                          e.currentTarget.style.borderColor = '';
                        }}
                      >
                        <div 
                          className="u-d-flex u-align-items-center u-justify-content-center u-bg-secondary u-br-md u-text-primary u-flex-shrink-0"
                          style={{ 
                            width: '48px', 
                            height: '48px',
                            marginBottom: viewMode === 'list' ? '0' : 'var(--atomix-spacing-md)'
                          }}
                        >
                          <Icon
                            name={component.icon as any}
                            size="lg"
                          />
                        </div>
                        
                        <div className="u-flex-grow-1 u-d-flex u-flex-direction-column u-gap-2">
                          <div className="u-d-flex u-align-items-center u-gap-2 u-flex-wrap">
                            <h3 className="u-fs-lg u-fw-semibold u-m-0">
                              {component.title}
                            </h3>
                            {component.badge && (
                              <Badge
                                label={component.badge.text}
                                variant={component.badge.variant as any}
                                size="sm"
                              >
                                {component.badge.text}
                              </Badge>
                            )}
                            {component.isNew && (
                              <Badge label="New" variant="success" size="sm">
                                <Sparkles size={12} />
                                New
                              </Badge>
                            )}
                          </div>
                          
                          <p className="u-fs-sm u-text-secondary-emphasis u-m-0" style={{ lineHeight: 'var(--atomix-line-height-relaxed)' }}>
                            {component.description}
                          </p>
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            ))
          )}
        </section>
      </Block>
    </>
  );
};

export default ComponentsIndexPage;