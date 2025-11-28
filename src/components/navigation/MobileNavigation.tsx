'use client';

import React from 'react';
import { 
  Button, 
  Icon, 
  Accordion,
  Badge
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

  const getBadgeVariant = (
    variant: string
  ):
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "info"
    | "danger" => {
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

  const accordionItems = navigationData.map(section => ({
    title: section.title,
    content: (
      <ul className="u-list-style-none u-m-0 u-p-0">
        {section.items.map(item => (
          <li key={item.path} className="u-mb-2">
            <Button
              variant="ghost"
              className="u-w-100 u-justify-content-start"
              onClick={() => handleNavigation(item.path)}
              fullWidth
            >
              <span className="u-flex-grow-1 u-text-start">{item.title}</span>
              {item.badge && (
                <Badge
                  label={item.badge.text}
                  variant={getBadgeVariant(item.badge.variant) as any}
                  size="sm"
                />
              )}
            </Button>
          </li>
        ))}
      </ul>
    )
  }));

  return (
    <div className="u-position-fixed u-top-0 u-start-0 u-w-100 u-h-100 u-z-index-1000">
      <div className="u-position-absolute u-top-0 u-start-0 u-w-100 u-h-100 u-bg-primary u-p-4 u-overflow-y-auto" style={{ maxWidth: '320px', boxShadow: '2px 0 8px rgba(0,0,0,0.1)' }}>
        <div className="u-d-flex u-justify-content-between u-align-items-center u-mb-4">
          <h2 className="u-fs-xl u-fw-semibold u-m-0">Documentation</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            aria-label="Close navigation"
          >
            <Icon name="X" size="sm" />
          </Button>
        </div>
        
        <div>
          {accordionItems.map((item, index) => (
            <Accordion
              key={index}
              title={item.title}
            >
              {item.content}
            </Accordion>
          ))}
        </div>
      </div>
      
      <div 
        className="u-position-absolute u-top-0 u-start-0 u-w-100 u-h-100 u-bg-black u-opacity-50" 
        onClick={onClose}
        aria-hidden="true"
        style={{ marginLeft: '320px' }}
      />
    </div>
  );
};