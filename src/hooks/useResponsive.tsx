'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface ResponsiveContextType {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  width: number;
}

const ResponsiveContext = createContext<ResponsiveContextType | undefined>(undefined);

export const ResponsiveProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const [width, setWidth] = useState(1024);
  const [mounted, setMounted] = useState(false);

  const checkResponsive = () => {
    if (typeof window === 'undefined') return;
    const currentWidth = window.innerWidth;
    setWidth(currentWidth);
    setIsMobile(currentWidth < 768);
    setIsTablet(currentWidth >= 768 && currentWidth < 1024);
    setIsDesktop(currentWidth >= 1024);
  };

  useEffect(() => {
    setMounted(true);
    checkResponsive();
    window.addEventListener('resize', checkResponsive);
    return () => window.removeEventListener('resize', checkResponsive);
  }, []);

  // During SSR or before mounting, provide default values
  if (!mounted) {
    return (
      <ResponsiveContext.Provider value={{ isMobile: false, isTablet: false, isDesktop: true, width: 1024 }}>
        {children}
      </ResponsiveContext.Provider>
    );
  }

  return (
    <ResponsiveContext.Provider value={{ isMobile, isTablet, isDesktop, width }}>
      {children}
    </ResponsiveContext.Provider>
  );
};

export const useResponsive = () => {
  const context = useContext(ResponsiveContext);
  if (context === undefined) {
    throw new Error('useResponsive must be used within a ResponsiveProvider');
  }
  return context;
};