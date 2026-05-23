"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import { Breadcrumb, Icon } from "@shohojdhara/atomix";
import { navigationData } from "@/data/navigation";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

export const BreadcrumbNavigation: FC = () => {
  const pathname = usePathname();

  // Find the current navigation item and its section in a single pass
  let currentItem;
  let section;

  for (const sec of navigationData) {
    const item = sec.items.find((i) => i.path === pathname);
    if (item) {
      currentItem = item;
      section = sec;
      break;
    }
  }

  // Build breadcrumb items
  const breadcrumbItems: BreadcrumbItem[] = [{ label: "Home", path: "/" }];

  if (currentItem) {
    if (section) {
      breadcrumbItems.push({
        label: section.title,
        path: section.items[0]?.path,
      });
    }

    breadcrumbItems.push({
      label: currentItem.title,
    });
  } else {
    // Fallback for unknown paths
    const pathParts = pathname.split("/").filter(Boolean);
    pathParts.forEach((part, index) => {
      const path = "/" + pathParts.slice(0, index + 1).join("/");
      breadcrumbItems.push({
        label: part.charAt(0).toUpperCase() + part.slice(1),
        path: index < pathParts.length - 1 ? path : undefined,
      });
    });
  }

  return (
    <Breadcrumb
      items={breadcrumbItems.map((item, index) => ({
        label: item.label,
        href: item.path,
        current: index === breadcrumbItems.length - 1,
      }))}
      linkComponent={Link}
      divider={<Icon name="CaretRight" size="sm" />}
    />
  );
};
