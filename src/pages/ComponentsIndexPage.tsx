import React, { useState, useMemo, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Card,
  Input,
  Badge,
  Icon,
  Button,
  Hero
} from '@shohojdhara/atomix';
import { navigationData } from '../data/navigation';

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
  const [searchQuery, setSearchQuery] = useState('');

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
        ...(component.searchTerms || [])
      ].join(' ').toLowerCase();
      
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
        glass={{
          displacementScale: 30,
          blurAmount: 5,
          elasticity: 0,
          enableLiquidBlur: true,
          padding: "20px",
          cornerRadius: 30,
        } as any}
        className="u-pt-32 u-pb-16"
        title="Components"
        text="A comprehensive collection of modern, accessible React components"
        alignment="center"
        backgroundImageSrc="https://images.unsplash.com/photo-1682100615316-e152a40b5793?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2728"
      />

      <div className="components-index-page" style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        {/* Search */}
        <section style={{ marginBottom: '3rem' }}>
          <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <Input
              type="search"
              placeholder="Search components..."
              value={searchQuery}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
            />
          </div>
        </section>

        {/* Components Grid */}
        <section className="components-grid">
          {Object.keys(groupedComponents).length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem' }}>
              <Icon name="MagnifyingGlass" size="xl" className="u-mb-4" />
              <h3>No components found</h3>
              <p style={{ color: 'var(--atomix-text-secondary)', marginBottom: '1.5rem' }}>
                No components match "{searchQuery}". Try a different search term.
              </p>
              <Button variant="outline" onClick={() => setSearchQuery('')}>
                Clear search
              </Button>
            </div>
          ) : (
            Object.entries(groupedComponents).map(([section, components]) => (
              <div key={section} style={{ marginBottom: '3rem' }}>
                 <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: '600' }}>
                  {section}
                </h2>
                
                <div style={{ 
                   display: 'grid', 
                   gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
                   gap: '1.5rem' 
                 }}>
                  {components.map((component) => (
                    <Link
                      key={component.id}
                      to={component.path}
                      className="no-underline"
                    >
                      <Card className="u-p-6 u-cursor-pointer u-h-100">
                        <div style={{ marginBottom: '1rem' }}>
                          <Icon
                            name={component.icon as any}
                            size="lg"
                          />
                        </div>
                        
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                          <h3 style={{ fontSize: '1.125rem', fontWeight: '600', margin: 0 }}>
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
                        
                        <p style={{
                          fontSize: '0.875rem',
                          color: 'var(--atomix-text-secondary)',
                          margin: 0,
                          lineHeight: '1.5'
                        }}>
                          {component.description}
                        </p>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            ))
          )}
        </section>

        {/* Stats Section */}
        <section className="stats-section" style={{ padding: '3rem 0', backgroundColor: 'var(--atomix-bg-secondary)', marginTop: '3rem' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>{allComponents.length}</h3>
                <p style={{ color: 'var(--atomix-text-secondary)', margin: 0 }}>Components</p>
              </div>
              <div>
                <h3 style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>100%</h3>
                <p style={{ color: 'var(--atomix-text-secondary)', margin: 0 }}>Accessible</p>
              </div>
              <div>
                <h3 style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>TypeScript</h3>
                <p style={{ color: 'var(--atomix-text-secondary)', margin: 0 }}>Support</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ComponentsIndexPage;