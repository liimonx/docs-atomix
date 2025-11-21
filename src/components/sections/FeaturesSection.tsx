import React from 'react';
import { Card, Icon } from '@shohojdhara/atomix';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: "Accessible by Default",
      description: "All components follow WCAG 2.1 AA guidelines with full keyboard navigation and screen reader support.",
      icon: "Wheelchair",
      color: "blue"
    },
    {
      title: "Fully Customizable",
      description: "Easily theme and customize components using CSS custom properties and comprehensive styling options.",
      icon: "Palette",
      color: "purple"
    },
    {
      title: "TypeScript Support",
      description: "First-class TypeScript support with comprehensive type definitions for all components and props.",
      icon: "FileCode",
      color: "teal"
    },
    {
      title: "Responsive Design",
      description: "Mobile-first responsive components that work beautifully on all device sizes.",
      icon: "DeviceMobile",
      color: "green"
    },
    {
      title: "Performance Optimized",
      description: "Lightweight components with minimal bundle impact and efficient rendering strategies.",
      icon: "Lightning",
      color: "orange"
    },
    {
      title: "Developer Experience",
      description: "Comprehensive documentation, clear APIs, and consistent design patterns for rapid development.",
      icon: "Code",
      color: "red"
    }
  ];

  return (
    <section className="features-section">
      <div className="section-header">
        <h2>Why Choose Atomix</h2>
        <p>Built for modern web applications with developers and designers in mind</p>
      </div>

      <div className="features-grid">
        {features.map((feature, index) => (
          <Card key={index} className={`feature-card feature-card-${feature.color}`}>
            <div className="feature-icon-wrapper">
              <Icon 
                name={feature.icon as any} 
                size="lg" 
                className="feature-icon"
              />
            </div>
            <div className="feature-content">
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};