import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  if (items.length === 0) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="breadcrumb-nav u-mb-4">
      <ol className="breadcrumb-list u-d-flex u-align-items-center u-mb-0 u-p-0 u-list-unstyled">
        {items.map((item, index) => (
          <li 
            key={index} 
            className="breadcrumb-item u-d-flex u-align-items-center"
          >
            {index > 0 && (
              <ChevronRight size={16} className="u-mx-2 u-text-muted" />
            )}
            
            {item.path ? (
              <Link 
                to={item.path} 
                className="breadcrumb-link u-text-decoration-none u-text-secondary"
              >
                {item.label}
              </Link>
            ) : (
              <span className="breadcrumb-current u-text-muted">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};