"use client";

import { memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationData } from "@/data/navigation";
import { Icon } from "@shohojdhara/atomix";

interface DocumentationSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const DocumentationSidebar = memo(function DocumentationSidebar({
  isOpen,
  onClose,
}: DocumentationSidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="u-fixed u-inset-0 u-bg-black-50 u-z-40 u-lg-none u-backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          u-bg-surface-dark u-border-right u-border-color-border-dark u-flex-column
          u-width-64 u-h-100 u-sticky u-top-65px
          u-overflow-y-auto u-pb-10
          u-transition-transform u-duration-300 u-ease-in-out u-z-50
          u-lg-flex
          u-fixed u-lg-static u-inset-y-0 u-left-0 u-top-0
          u-lg-translate-x-0
          ${isOpen ? "u-translate-x-0" : "u-translate-x-n100"}
        `}
        style={{
            height: 'calc(100vh - 65px)',
            top: '65px'
        }}
      >
        <div className="u-p-4 u-flex u-flex-column u-gap-4">
          {navigationData.map((section) => (
            <div key={section.id}>
              <h3 className="u-px-3 u-text-xs u-font-bold u-color-text-secondary u-uppercase u-tracking-wider u-mb-2">
                {section.title}
              </h3>
              <ul className="u-flex u-flex-column u-gap-1 u-list-style-none u-m-0 u-p-0">
                {section.items.map((item) => {
                  const isActive = pathname === item.path;
                  return (
                    <li key={item.id}>
                      <Link
                        href={item.path}
                        className={`
                          u-flex u-align-items-center u-gap-3 u-px-3 u-py-2 u-rounded-md u-text-sm u-transition-colors u-text-decoration-none
                          ${isActive
                            ? "u-bg-primary-10 u-color-primary u-font-medium u-border-left-2 u-border-color-primary"
                            : "u-color-text-muted hover:u-bg-surface-hover hover:u-color-white"
                          }
                        `}
                        onClick={onClose}
                      >
                        <div className="u-text-lg u-line-height-1">
                           <Icon name={item.icon as any} size="sm" />
                        </div>
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
});

export { DocumentationSidebar };
