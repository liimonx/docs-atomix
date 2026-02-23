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
      <div className="u-w-60 u-relative">
        <AtomixSideMenu
          className="u-fixed u-w-60 u-top-0 u-start-0 u-z-modal u-overflow-y-auto"
          title={
            <Link href="/">
              <div className="u-flex u-items-center u-gap-3">
                <div className="u-flex u-items-center u-justify-center u-bg-brand-subtle u-rounded-sm u-p-3">
                  <span className="u-text-brand-emphasis u-fs-xs .material-symbols-outlined">
                    atm
                  </span>
                </div>
                <div className="u-flex u-flex-column">
                  <p className="u-text-primary-emphasis u-fs-lg u-font-bold u-leading-none">
                    Atomix
                  </p>
                  <p className="u-text-primary-emphasis u-fs-xs u-font-medium u-mt-1">
                    v2.0.4
                  </p>
                </div>
              </div>
            </Link>
          }
          menuItems={menuItems}
          LinkComponent={Link as any}
          isOpen={false}
        >
          {null}
        </AtomixSideMenu>
      </div>
    </>
  );
});

export { DocumentationSidebar };
