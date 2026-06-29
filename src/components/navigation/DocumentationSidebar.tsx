"use client";

import { memo, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationData } from "@/data/navigation";
import { Icon, SideMenu as AtomixSideMenu } from "@shohojdhara/atomix";
import type { PhosphorIconsType } from "@shohojdhara/atomix";

interface DocumentationSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SIDEMENU_GLASS_STYLE = {
  position: "fixed" as const,
  top: "var(--navbar-height)",
  height: "calc(100vh - var(--navbar-height))",
  left: "0",
  overflowY: "auto" as const,
  zIndex: 1080,
};

const DocumentationSidebar = memo(function DocumentationSidebar({
  isOpen,
  onClose,
}: DocumentationSidebarProps) {
  const pathname = usePathname();

  const menuItems = useMemo(
    () =>
      navigationData.map((section) => ({
        title: section.title,
        items: section.items.map((item) => {
          const isActive = pathname === item.path;
          return {
            id: item.id,
            title: item.title,
            href: item.path,
            icon: <Icon name={item.icon as PhosphorIconsType} size="sm" />,
            active: isActive,
            linkComponent: Link,
            "aria-current": isActive ? ("page" as const) : undefined,
            onClick: () => {
              onClose();
            },
          };
        }),
        isOpen: false,
      })),
    [pathname, onClose],
  );

  return (
    <div className="u-w-72 u-relative">
      <AtomixSideMenu
        glass={{
          style: SIDEMENU_GLASS_STYLE,
          elasticity: 0,
          borderRadius: 0,
          displacementScale: 50,
          withLiquidBlur: false,
          withBorder: false,
          mode: "shader",
          shaderVariant: "noise",
          blurAmount: 10,
        }}
        title={<></>}
        menuItems={menuItems}
        linkComponent={Link}
        isOpen={isOpen}
      >
        {null}
      </AtomixSideMenu>
    </div>
  );
});

export { DocumentationSidebar };
