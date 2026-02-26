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
    [pathname, onClose, isOpen],
  );

  return (
    <>
      <div className="u-w-72 u-relative">
        <AtomixSideMenu
          className="u-fixed u-w-60 u-top-5 u-hv-100 u-start-0 u-z-modal u-overflow-y-auto"
          title={<></>}
          menuItems={menuItems}
          LinkComponent={Link as any}
          isOpen={isOpen}
        >
          {null}
        </AtomixSideMenu>
      </div>
    </>
  );
});

export { DocumentationSidebar };
