"use client";

import { ThemeProvider } from "@shohojdhara/atomix";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider storageKey="atomix-color-mode" dataAttribute="data-atomix-color-mode">
      {children}
    </ThemeProvider>
  );
}
