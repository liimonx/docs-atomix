'use client';

import React from 'react';
import { AppLayout } from '@/components/layout/AppLayout';

// Memoize the layout to prevent re-renders on navigation
const DocsLayout = React.memo(function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppLayout>{children}</AppLayout>;
});

export default DocsLayout;

