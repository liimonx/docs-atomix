"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";
import { Spinner, AtomixLogo } from "@shohojdhara/atomix";
import styles from "./PageLoader.module.scss";

interface PageLoaderProps {
  /** Optional message to display under the loader */
  message?: string;
  /** Whether to show the logo */
  showLogo?: boolean;
}

export const PageLoader: FC<PageLoaderProps> = ({
  message = "Loading components...",
  showLogo = true,
}) => {
  return (
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        className={styles.content}
      >
        {showLogo && (
          <motion.div
            animate={{
              opacity: [0.5, 1, 0.5],
              filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className={styles.logoWrapper}
          >
            <AtomixLogo width={64} height={64} className={styles.logo} />
          </motion.div>
        )}

        <div className={styles.visuals}>
          <Spinner size="lg" variant="primary" />
        </div>

        {message && (
          <motion.p
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={styles.message}
          >
            {message}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};
