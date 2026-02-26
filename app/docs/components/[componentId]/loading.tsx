"use client";

import { Card } from "@shohojdhara/atomix";
import { motion } from "framer-motion";

export default function ComponentLoading() {
  return (
    <div className="u-w-100 u-py-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Card
          glass
          className="u-p-6 u-p-md-10 u-border u-border-glass u-rounded-3xl u-shadow-lg"
        >
          <div className="u-flex u-flex-column u-gap-10">
            {/* Component Title Skeleton */}
            <div className="u-flex u-flex-column u-flex-md-row u-gap-4 u-items-md-center u-justify-between u-border-b u-border-glass u-pb-6">
              <div className="u-flex u-flex-column u-gap-3 u-w-100 u-w-md-50">
                <div className="u-h-10 u-w-75 u-bg-surface-subtle u-rounded-lg u-animate-pulse" />
                <div className="u-h-4 u-w-100 u-bg-surface-subtle u-rounded-sm u-animate-pulse u-opacity-60" />
              </div>
              <div className="u-h-10 u-w-25 u-bg-surface-subtle u-rounded-lg u-animate-pulse u-self-start u-self-md-center" />
            </div>

            {/* Playground Skeleton */}
            <div className="u-w-100 u-h-72 u-bg-surface-subtle u-rounded-2xl u-animate-pulse u-opacity-80" />

            {/* Props Table Skeleton */}
            <div className="u-w-100">
              <div className="u-h-6 u-w-25 u-bg-surface-subtle u-rounded-md u-animate-pulse u-mb-5" />
              <div className="u-flex u-flex-column u-gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="u-h-12 u-w-100 u-bg-surface-subtle u-rounded-lg u-animate-pulse u-opacity-40"
                  />
                ))}
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
