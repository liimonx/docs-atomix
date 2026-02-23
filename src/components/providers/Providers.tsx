"use client";

import { ThemeProvider } from "@shohojdhara/atomix";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
