'use client';

import React, { createContext, useContext, useEffect, useState, FC } from "react";
import { usePathname } from "next/navigation";
import PageLoader from "@/components/ui/PageLoader";

const LoadingContext = createContext<{
  loading: boolean;
  setLoading: (isLoading: boolean) => void;
}>({ loading: false, setLoading: () => {} });

export const PageLoaderProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timer);
  }, [pathname]); // Only depend on pathname - mounted guard prevents initial execution

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      <PageLoader loading={loading} />
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
