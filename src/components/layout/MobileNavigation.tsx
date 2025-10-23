import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, Icon, Badge } from '@shohojdhara/atomix';
import { navigationData } from '../../data/navigation';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isOpen,
  onClose
}) => {
  const location = useLocation();

  if (!isOpen) return null;

  return (
    <div className="mobile-navigation-overlay" onClick={onClose}>
      <div className="mobile-navigation" onClick={(e) => e.stopPropagation()}>
        <div className="mobile-nav-header">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            aria-label="Close navigation"
          >
            <Icon name="X" size="lg" />
          </Button>
          <h2 className="mobile-nav-title">Menu</h2>
        </div>

        <nav className="mobile-nav-content">
          {navigationData.map((section) => (
            <div key={section.title} className="mobile-nav-section">
              <h3 className="section-title">{section.title}</h3>
              {section.items.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`mobile-nav-link ${
                    location.pathname === item.path ? 'active' : ''
                  }`}
                  onClick={onClose}
                >
                  {item.icon && <Icon name={item.icon} size="sm" />}
                  <span>{item.title}</span>
                  {item.badge && (
                    <Badge variant={item.badge.variant} size="sm">
                      {item.badge.text}
                    </Badge>
                  )}
                </Link>
              ))}
            </div>
          ))}
        </nav>

        <div className="mobile-nav-footer">
          <Link to="/" className="mobile-home-link" onClick={onClose}>
            <Icon name="Home" size="sm" />
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};