"use client";

import { FC } from "react";
import { Card, Icon } from "@shohojdhara/atomix";
import Link from "next/link";
import { findNavigationItem } from "@/data/navigation";

interface ComponentRelatedProps {
  relatedComponents: string[];
}

export const ComponentRelated: FC<ComponentRelatedProps> = ({
  relatedComponents,
}) => {
  if (!relatedComponents || relatedComponents.length === 0) {
    return null;
  }

  return (
    <Card className="u-mt-8">
      <div className="u-p-4 u-border-b u-border-subtle">
        <h3 className="u-fs-lg u-fw-semibold u-m-0">Related Components</h3>
      </div>
      <div className="u-p-4">
        <div className="u-flex u-flex-column u-gap-2">
          {(relatedComponents || []).map((componentName) => {
            const navItem = findNavigationItem(componentName.toLowerCase());
            if (!navItem) return null;

            return (
              <Link
                key={componentName}
                href={navItem.path}
                className="u-text-decoration-none u-flex u-align-items-center u-gap-2 u-p-2 u-br-sm u-transition-all u-hover-bg-secondary-subtle"
              >
                <Icon
                  name="ArrowRight"
                  size="sm"
                  className="u-text-secondary"
                />
                <span className="u-text-primary u-fw-medium">
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
