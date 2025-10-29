export type NavigationBadge = {
  text: string;
  variant: 'new' | 'beta' | 'updated' | 'deprecated' | 'secondary';
};
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, Icon, Badge } from '@shohojdhara/atomix';
import { navigationData } from '../../data/navigation';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const getBadgeVariant = (
  variant: string
): "primary" | "secondary" | "success" | "danger" | "warning" | "info" => {
  switch (variant) {
    case "new":
      return "success";
    case "beta":
      return "warning";
    case "updated":
      return "info";
    case "deprecated":
      return "danger";
    default:
      return "secondary";
  }
};

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isOpen,
  onClose
}) => {
  const location = useLocation();

  if (!isOpen) return null;

  return (
    <div className="mobile-navigation-overlay" onClick={onClose}>
      <div className="mobile-navigation" onClick={(e) => e.stopPropagation()}>
        <div className="mobile-nav-header u-d-flex u-align-items-center u-justify-content-between u-p-3 u-border-bottom">
          <h2 className="mobile-nav-title u-mb-0">Documentation</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            aria-label="Close navigation"
          >
            <Icon name="X" size="lg" />
          </Button>
        </div>

        <nav className="mobile-nav-content u-p-2">
          {navigationData.map((section) => (
            <div key={section.id} className="mobile-nav-section u-mb-4">
              <h3 className="section-title u-px-2 u-py-1 u-fs-sm u-fw-semibold u-text-uppercase u-text-body-secondary">
                {section.title}
              </h3>
              <div className="u-list-group">
                {section.items.map((item) => (
                  <Link
                    key={item.id}
                    to={item.path}
                    className={`mobile-nav-link u-list-group-item u-d-flex u-align-items-center u-gap-2 u-text-decoration-none ${
                      location.pathname === item.path ? 'u-bg-primary-subtle u-text-primary-emphasis' : ''
                    }`}
                    onClick={onClose}
                  >
                    {item.icon && <Icon name={item.icon as any} size="sm" />}
                    <span className="u-flex-grow-1">{item.title}</span>
                    {item.badge && (
                      <Badge 
                        variant={getBadgeVariant(item.badge.variant) as any} 
                        size="sm" 
                        label={item.badge.text}
                      />
                    )}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>

        <div className="mobile-nav-footer u-p-3 u-border-top u-text-center">
          <Link 
            to="/" 
            className="mobile-home-link u-d-flex u-align-items-center u-justify-content-center u-gap-2 u-text-decoration-none"
            onClick={onClose}
          >
            <Icon name="House" size="sm" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};