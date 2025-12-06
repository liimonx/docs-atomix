"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import PageLoader from "@/components/ui/PageLoader";

const LoadingContext = createContext<{
  loading: boolean;
  setLoading: (_loading: boolean) => void;
}>({ loading: false, setLoading: () => {} });

export const PageLoaderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      <PageLoader loading={loading} />
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
