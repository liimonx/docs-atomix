'use client';

import React from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  // Create a url string from pathname and searchParams
  const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={url}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{
          duration: 0.32,
          ease: "easeInOut"
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};