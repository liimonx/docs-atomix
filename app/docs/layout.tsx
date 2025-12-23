'use client';

import { memo, useContext } from 'react';
import { AppLayout } from '@/components/layout/AppLayout';
import { SidebarToggle } from '@/components/navigation/SidebarToggle';
import { usePathname } from 'next/navigation';

// Create a context to share sidebar state
const SidebarContext = require('react').createContext<{
  isOpen: boolean;
  toggle: () => void;
} | null>(null);

// Provider component for sidebar state
export function SidebarProvider({ children }: { children: React.ReactNode }) {
  // We'll need to implement sidebar state management here
  // For now, we'll just pass through the children
  return children;
}

// Consumer hook for sidebar state
export function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
}

// Memoize the layout to prevent re-renders on navigation
const DocsLayout = memo(function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppLayout>
      {children}
      {/* We'll implement the toggle properly in the AppLayout component */}
    </AppLayout>
  );
});

export default DocsLayout;