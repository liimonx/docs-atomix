"use client";

import { memo, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationData } from "@/data/navigation";
import { Icon, SideMenu as AtomixSideMenu } from "@shohojdhara/atomix";

interface DocumentationSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const DocumentationSidebar = memo(function DocumentationSidebar({
  isOpen,
  onClose,
}: DocumentationSidebarProps) {
  const pathname = usePathname();

  const menuItems = useMemo(
    () =>
      navigationData.map((section) => ({
        title: section.title,
        items: section.items.map((item: any) => {
          const isActive = pathname === item.path;
          return {
            id: item.id,
            title: item.title,
            href: item.path,
            icon: <Icon name={item.icon as any} size="sm" />,
            active: isActive,
            linkComponent: Link as any,
            "aria-current": isActive ? "page" : undefined,
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
    <>
      <div className="u-w-72 u-relative">
        <AtomixSideMenu
          glass={{
            style: {
              position: "fixed",
              top: "65px",
              height: "calc(100vh - 65px)",
              left: "0",
              overflowY: "auto",
              zIndex: 999,
            },
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
          linkComponent={Link as any}
          isOpen={isOpen}
        >
          {null}
        </AtomixSideMenu>
      </div>
    </>
  );
});

export { DocumentationSidebar };
