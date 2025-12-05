"use client";

import React from "react";

interface PageLoaderProps {
  loading: boolean;
}

const PageLoader: React.FC<PageLoaderProps> = ({ loading }) => {
  if (!loading) return null;

  return (
    <>
      <div className="page-loader-bar">
        <div className="page-loader-progress" />
      </div>
      <div className="page-loader-overlay">
        <div className="page-loader-spinner" />
      </div>
    </>
  );
};

export default PageLoader;
