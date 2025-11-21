'use client';

import React from 'react';
import { 
  Button, 
  Icon, 
  Accordion 
} from '@shohojdhara/atomix';
import { navigationData } from '@/data/navigation';
import { useRouter } from 'next/navigation';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isOpen,
  onClose
}) => {
  const router = useRouter();

  if (!isOpen) {
    return null;
  }

  const handleNavigation = (path: string) => {
    router.push(path);
    onClose();
  };

  const accordionItems = navigationData.map(section => ({
    title: section.title,
    content: (
      <ul className="mobile-nav-list">
        {section.items.map(item => (
          <li key={item.path} className="mobile-nav-item">
            <Button
              variant="ghost"
              className="mobile-nav-link"
              onClick={() => handleNavigation(item.path)}
              fullWidth
            >
              <span className="mobile-nav-text">{item.title}</span>
              {item.badge && (
                <span className={`badge badge-${item.badge.variant}`}>
                  {item.badge.text}
                </span>
              )}
            </Button>
          </li>
        ))}
      </ul>
    )
  }));

  return (
    <div className="mobile-navigation-overlay">
      <div className="mobile-navigation">
        <div className="mobile-nav-header">
          <h2>Documentation</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            aria-label="Close navigation"
          >
            <Icon name="X" size="sm" />
          </Button>
        </div>
        
        <div className="mobile-nav-content">
          <div className="mobile-accordion">
            {accordionItems.map((item, index) => (
              <Accordion
                key={index}
                title={item.title}
                className="mobile-accordion-item"
              >
                {item.content}
              </Accordion>
            ))}
          </div>
        </div>
      </div>
      
      <div 
        className="mobile-nav-backdrop" 
        onClick={onClose}
        aria-hidden="true"
      />
    </div>
  );
};