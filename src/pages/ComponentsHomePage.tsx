import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Zap, 
  Shield, 
  Eye, 
  Grid, 
  Filter,
  BookOpen,
  Download,
  Star,
  Clock,
  TrendingUp
} from 'lucide-react';
import { Button, Card, Badge } from '@shohojdhara/atomix';

import { componentMetadata } from '../data/components';
import { navigationItems } from '../data/navigation';

const ComponentsHomePage: React.FC = () => {
  // Get component categories
  const categories = Array.from(new Set(componentMetadata.map(c => c.category)));
  
  // Get featured components (stable status)
  const featuredComponents = componentMetadata
    .filter(c => c.status === 'stable')
    .slice(0, 6);
    
  // Get recently updated components
  const recentComponents = [...componentMetadata]
    .sort((a, b) => b.version.localeCompare(a.version))
    .slice(0, 6);

  return (
    <div className="components-home-page">
      <Helmet>
        <title>Components - Atomix Documentation</title>
        <meta name="description" content="Browse all Atomix UI components with live examples, API documentation, and usage guidelines." />
      </Helmet>

      {/* Hero Section */}
      <section className="hero-section u-text-center u-py-12 u-mb-12">
        <div className="container">
          <h1 className="u-mb-4">Atomix Components</h1>
          <p className="u-text-muted u-mb-6 u-mx-auto" style={{ maxWidth: '600px' }}>
            A comprehensive library of accessible, responsive UI components built with React and TypeScript.
          </p>
          
          <div className="u-d-flex u-justify-content-center u-gap-3 u-flex-wrap">
            <Button size="lg">
              <BookOpen size={20} className="u-mr-2" />
              Browse Components
            </Button>
            <Button variant="outline" size="lg">
              <Download size={20} className="u-mr-2" />
              Installation Guide
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section u-mb-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 u-gap-6">
            <Card className="u-text-center">
              <div className="u-d-flex u-justify-content-center u-mb-3">
                <Grid size={32} className="text-primary" />
              </div>
              <h3 className="u-mb-2">{componentMetadata.length}+</h3>
              <p className="u-text-muted">Components</p>
            </Card>
            
            <Card className="u-text-center">
              <div className="u-d-flex u-justify-content-center u-mb-3">
                <Shield size={32} className="text-success" />
              </div>
              <h3 className="u-mb-2">
                {componentMetadata.filter(c => c.status === 'stable').length}+
              </h3>
              <p className="u-text-muted">Stable Components</p>
            </Card>
            
            <Card className="u-text-center">
              <div className="u-d-flex u-justify-content-center u-mb-3">
                <Eye size={32} className="text-info" />
              </div>
              <h3 className="u-mb-2">100%</h3>
              <p className="u-text-muted">Accessibility</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section u-mb-12">
        <div className="container">
          <div className="u-d-flex u-align-items-center u-justify-content-between u-mb-6">
            <h2 className="u-mb-0">Browse by Category</h2>
            <Link to="/components/all" className="u-text-decoration-none">
              View All
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 u-gap-6">
            {categories.map((category, index) => {
              const categoryComponents = componentMetadata.filter(c => c.category === category);
              const iconMap: Record<string, React.ReactNode> = {
                'Actions': <Zap size={20} />,
                'Indicators': <TrendingUp size={20} />,
                'Layout': <Grid size={20} />,
                'display': <Eye size={20} />
              };
              
              return (
                <Card key={index} className="hover-card">
                  <Link 
                    to={`/components/category/${category.toLowerCase()}`} 
                    className="u-text-decoration-none"
                  >
                    <div className="u-d-flex u-align-items-center u-mb-3">
                      <div className="u-mr-3 text-primary">
                        {iconMap[category] || <Filter size={20} />}
                      </div>
                      <h3 className="u-mb-0">{category}</h3>
                    </div>
                    <p className="u-text-muted u-mb-3">
                      {categoryComponents.length} components
                    </p>
                    <div className="u-d-flex u-flex-wrap u-gap-2">
                      {categoryComponents.slice(0, 3).map((component, idx) => (
                        <Badge key={idx} variant="outline" size="sm">
                          {component.name}
                        </Badge>
                      ))}
                      {categoryComponents.length > 3 && (
                        <Badge variant="outline" size="sm">
                          +{categoryComponents.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Components */}
      <section className="featured-section u-mb-12">
        <div className="container">
          <div className="u-d-flex u-align-items-center u-justify-content-between u-mb-6">
            <h2 className="u-mb-0">Featured Components</h2>
            <Link to="/components" className="u-text-decoration-none">
              View All
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 u-gap-6">
            {featuredComponents.map((component, index) => (
              <Card key={index} className="hover-card">
                <Link 
                  to={`/components/${component.id}`} 
                  className="u-text-decoration-none"
                >
                  <div className="u-d-flex u-align-items-center u-justify-content-between u-mb-3">
                    <h3 className="u-mb-0">{component.name}</h3>
                    <Badge variant="success" size="sm">
                      {component.status}
                    </Badge>
                  </div>
                  <p className="u-text-muted u-mb-4">
                    {component.description}
                  </p>
                  <div className="u-d-flex u-align-items-center u-justify-content-between">
                    <Badge variant="secondary" size="sm">
                      v{component.version}
                    </Badge>
                    <span className="u-text-muted">
                      {component.category}
                    </span>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recently Updated */}
      <section className="recent-section u-mb-12">
        <div className="container">
          <div className="u-d-flex u-align-items-center u-justify-content-between u-mb-6">
            <h2 className="u-mb-0">Recently Updated</h2>
            <Link to="/components" className="u-text-decoration-none">
              View All
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 u-gap-6">
            {recentComponents.map((component, index) => (
              <Card key={index} className="hover-card">
                <Link 
                  to={`/components/${component.id}`} 
                  className="u-text-decoration-none"
                >
                  <div className="u-d-flex u-align-items-center u-mb-3">
                    <Clock size={16} className="u-mr-2 text-muted" />
                    <h3 className="u-mb-0">{component.name}</h3>
                  </div>
                  <p className="u-text-muted u-mb-4">
                    {component.description}
                  </p>
                  <div className="u-d-flex u-align-items-center u-justify-content-between">
                    <Badge variant="secondary" size="sm">
                      v{component.version}
                    </Badge>
                    <div className="u-d-flex u-align-items-center">
                      <Star size={14} className="u-mr-1 text-warning" />
                      <span className="u-text-muted">Stable</span>
                    </div>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComponentsHomePage;