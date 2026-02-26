// Loading State for Dynamic Documentation Routes
// =============================================================================

"use client";

import { Card, Row, GridCol } from "@shohojdhara/atomix";
import { motion } from "framer-motion";

export default function DynamicDocsLoading() {
  return (
    <div className="container u-py-12 u-py-md-16">
      <Row justifyContent="center">
        <GridCol xs={12} md={10} lg={9}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Header Skeleton */}
            <div className="u-mb-10">
              <div className="u-h-12 u-w-75 u-w-md-50 u-body-bg-subtle u-rounded-lg u-animate-pulse u-mb-4" />
              <div className="u-h-6 u-w-100 u-w-md-75 u-body-bg-subtle u-rounded-md u-animate-pulse u-opacity-70" />
            </div>

            {/* Content Skeleton */}
            <Card
              glass
              className="u-p-6 u-p-md-10 u-border u-border-glass u-rounded-3xl u-shadow-lg"
            >
              {/* Paragraph 1 */}
              <div className="u-mb-10">
                <div className="u-h-8 u-w-40 u-body-bg-subtle u-rounded-md u-animate-pulse u-mb-5" />
                <div className="u-flex u-flex-column u-gap-3">
                  <div className="u-h-4 u-w-100 u-body-bg-subtle u-rounded-sm u-animate-pulse u-opacity-60" />
                  <div className="u-h-4 u-w-100 u-body-bg-subtle u-rounded-sm u-animate-pulse u-opacity-60" />
                  <div className="u-h-4 u-w-75 u-body-bg-subtle u-rounded-sm u-animate-pulse u-opacity-60" />
                </div>
              </div>

              {/* Paragraph 2 */}
              <div className="u-mb-10">
                <div className="u-h-8 u-w-25 u-body-bg-subtle u-rounded-md u-animate-pulse u-mb-5" />
                <div className="u-flex u-flex-column u-gap-3">
                  <div className="u-h-4 u-w-100 u-body-bg-subtle u-rounded-sm u-animate-pulse u-opacity-60" />
                  <div className="u-h-4 u-w-100 u-body-bg-subtle u-rounded-sm u-animate-pulse u-opacity-60" />
                  <div className="u-h-4 u-w-90 u-body-bg-subtle u-rounded-sm u-animate-pulse u-opacity-60" />
                </div>
              </div>

              {/* Code Block Skeleton */}
              <div className="u-mb-6">
                <div className="u-h-72 u-w-100 u-body-bg-subtle u-rounded-xl u-animate-pulse u-opacity-80" />
              </div>
            </Card>
          </motion.div>
        </GridCol>
      </Row>
    </div>
  );
}
