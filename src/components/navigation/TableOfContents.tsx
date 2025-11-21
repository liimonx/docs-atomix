'use client';

import React, { useState, useEffect } from 'react';

import { Icon } from '@shohojdhara/atomix';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  items?: TocItem[];
  contentSelector?: string;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ 
  items,
  contentSelector = '.component-content'
}) => {
  const [tocItems, setTocItems] = useState<TocItem[]>(items || []);
  const [activeId, setActiveId] = useState<string>('');

  // If no items provided, try to extract from content
  useEffect(() => {
    if (!items) {
      const contentElement = document.querySelector(contentSelector);
      if (contentElement) {
        const headings = contentElement.querySelectorAll('h1, h2, h3, h4, h5, h6');
        const extractedItems: TocItem[] = Array.from(headings).map(heading => ({
          id: heading.id || `heading-${Math.random().toString(36).substr(2, 9)}`,
          text: heading.textContent || '',
          level: parseInt(heading.tagName.charAt(1))
        }));
        setTocItems(extractedItems);
      }
    }
  }, [items, contentSelector]);

  // Track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0% -80% 0%' }
    );

    tocItems.forEach(item => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [tocItems]);

  if (tocItems.length === 0) {
    return null;
  }

  return (
    <nav className="table-of-contents" aria-label="Table of contents">
      <h3 className="toc-title">
        <Icon name="List" size="sm" />
        On this page
      </h3>
      
      <ul className="toc-list">
        {tocItems.map((item) => {
          const isActive = item.id === activeId;
          
          return (
            <li 
              key={item.id} 
              className={`toc-item level-${item.level}`}
            >
              <a
                href={`#${item.id}`}
                className={`toc-link ${isActive ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(item.id);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                    window.history.pushState(null, '', `#${item.id}`);
                  }
                }}
              >
                {item.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};