'use client';

import React from 'react';
import { Card } from '@shohojdhara/atomix';
import Link from 'next/link';
import { findNavigationItem } from '@/data/navigation';

interface ComponentRelatedProps {
  relatedComponents: string[];
}

export const ComponentRelated: React.FC<ComponentRelatedProps> = ({ relatedComponents }) => {
  if (!relatedComponents || relatedComponents.length === 0) {
    return null;
  }

  return (
    <Card>
      <div className="card-header">
        <h3 className="u-mb-0">Related Components</h3>
      </div>
      <div className="card-body">
        <div className="u-d-flex u-flex-column u-gap-2">
          {relatedComponents.map((componentName) => {
            const navItem = findNavigationItem(componentName.toLowerCase());
            if (!navItem) return null;

            return (
              <Link
                key={componentName}
                href={navItem.path}
                className="u-text-decoration-none"
              >
                <span className="u-text-primary u-hover-text-decoration-underline">
                  {navItem.title}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </Card>
  );
};
