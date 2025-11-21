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
import styles from './ComponentsIndexPage.module.scss';

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

      <Block className={styles.componentsIndexPage}>
        {/* Stats Cards */}
        <Row className="u-mb-8">
          <GridCol md={3} sm={6}>
            <Card className={`${styles.componentsIndexPage__statCard} u-p-6 u-text-center`}>
              <div className={styles.componentsIndexPage__statIcon}>
                <GridIcon size={32} className="u-text-primary" />
              </div>
              <h3 className={styles.componentsIndexPage__statValue}>{allComponents.length}</h3>
              <p className={styles.componentsIndexPage__statLabel}>Total Items</p>
            </Card>
          </GridCol>
          <GridCol md={3} sm={6}>
            <Card className={`${styles.componentsIndexPage__statCard} u-p-6 u-text-center`}>
              <div className={styles.componentsIndexPage__statIcon}>
                <CheckCircle size={32} className="u-text-success" />
              </div>
              <h3 className={styles.componentsIndexPage__statValue}>100%</h3>
              <p className={styles.componentsIndexPage__statLabel}>Accessible</p>
            </Card>
          </GridCol>
          <GridCol md={3} sm={6}>
            <Card className={`${styles.componentsIndexPage__statCard} u-p-6 u-text-center`}>
              <div className={styles.componentsIndexPage__statIcon}>
                <Shield size={32} className="u-text-info" />
              </div>
              <h3 className={styles.componentsIndexPage__statValue}>TypeScript</h3>
              <p className={styles.componentsIndexPage__statLabel}>Full Support</p>
            </Card>
          </GridCol>
          <GridCol md={3} sm={6}>
            <Card className={`${styles.componentsIndexPage__statCard} u-p-6 u-text-center`}>
              <div className={styles.componentsIndexPage__statIcon}>
                <Zap size={32} className="u-text-warning" />
              </div>
              <h3 className={styles.componentsIndexPage__statValue}>React 18</h3>
              <p className={styles.componentsIndexPage__statLabel}>Optimized</p>
            </Card>
          </GridCol>
        </Row>

        {/* Search and Filters */}
        <Card className="u-p-6 u-mb-6">
          <Row className="u-align-items-center">
            <GridCol md={6}>
              <div className={styles.componentsIndexPage__searchContainer}>
                <Search size={20} className={styles.componentsIndexPage__searchIcon} />
                <Input
                  type="search"
                  placeholder="Search components, tokens, guides..."
                  value={searchQuery}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                  className={styles.componentsIndexPage__searchInput}
                />
              </div>
            </GridCol>
            <GridCol md={6}>
              <div className={styles.componentsIndexPage__controls}>
                <div className={styles.componentsIndexPage__viewToggle}>
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
          <div className={styles.componentsIndexPage__filters}>
            {categoryOptions.map((option) => (
              <Button
                key={option.id}
                variant={filterCategory === option.id ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setFilterCategory(option.id as FilterCategory)}
                className={styles.componentsIndexPage__filterButton}
              >
                {option.label}
                <Badge 
                  label={option.count.toString()}
                  variant="secondary" 
                  size="sm" 
                  className={styles.componentsIndexPage__filterBadge}
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
        <section className={styles.componentsIndexPage__grid}>
          {Object.keys(groupedComponents).length === 0 ? (
            <Card className={`${styles.componentsIndexPage__emptyState} u-p-8 u-text-center`}>
              <Search size={48} className="u-mb-4 u-text-secondary" />
              <h3>No items found</h3>
              <p className={styles.componentsIndexPage__emptyText}>
                No items match your search "{searchQuery}". Try a different search term or filter.
              </p>
              <div className={styles.componentsIndexPage__emptyActions}>
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
              <div key={section} className={styles.componentsIndexPage__categorySection}>
                <div className={styles.componentsIndexPage__categoryHeader}>
                  <h2 className={styles.componentsIndexPage__categoryTitle}>
                    {section}
                  </h2>
                  <Badge label={`${components.length} items`} variant="secondary">{components.length} items</Badge>
                </div>
                
                <div className={`${styles.componentsIndexPage__categoryGrid} ${viewMode === 'list' ? styles['componentsIndexPage__categoryGrid--list'] : ''}`}>
                  {components.map((component) => (
                    <Link
                      key={component.id}
                      href={component.path}
                      className={styles.componentsIndexPage__componentLink}
                    >
                      <Card className={`${styles.componentsIndexPage__componentCard} ${viewMode === 'list' ? styles['componentsIndexPage__componentCard--list'] : ''}`}>
                        <div className={styles.componentsIndexPage__iconContainer}>
                          <Icon
                            name={component.icon as any}
                            size="lg"
                          />
                        </div>
                        
                        <div className={styles.componentsIndexPage__componentContent}>
                          <div className={styles.componentsIndexPage__componentHeader}>
                            <h3 className={styles.componentsIndexPage__componentTitle}>
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
                          
                          <p className={styles.componentsIndexPage__componentDescription}>
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