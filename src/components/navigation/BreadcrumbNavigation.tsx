'use client';

import React from 'react';
import { Breadcrumb, Icon } from '@shohojdhara/atomix';
import { navigationData } from '@/data/navigation';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

export const BreadcrumbNavigation: React.FC = () => {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';
  
  // Find the current navigation item
  const currentItem = navigationData
    .flatMap(section => section.items)
    .find(item => item.path === pathname);

  // Build breadcrumb items
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Home', path: '/' },
  ];

  if (currentItem) {
    // Find the section this item belongs to
    const section = navigationData.find(sec => 
      sec.items.some(item => item.path === currentItem.path)
    );
    
    if (section) {
      breadcrumbItems.push({ 
        label: section.title, 
        path: section.items[0]?.path 
      });
    }
    
    breadcrumbItems.push({ 
      label: currentItem.title 
    });
  } else {
    // Fallback for unknown paths
    const pathParts = pathname.split('/').filter(Boolean);
    pathParts.forEach((part, index) => {
      const path = '/' + pathParts.slice(0, index + 1).join('/');
      breadcrumbItems.push({ 
        label: part.charAt(0).toUpperCase() + part.slice(1),
        path: index < pathParts.length - 1 ? path : undefined
      });
    });
  }

  return (
    <div className="breadcrumb-navigation">
      <Breadcrumb
        items={breadcrumbItems.map((item, index) => ({
          label: item.label,
          href: item.path,
          current: index === breadcrumbItems.length - 1
        }))}
        divider={<Icon name="CaretRight" size="sm" />}
      />
    </div>
  );
};