"use client";

import { FC } from "react";
import Link from "next/link";
import { Icon, Card } from "@shohojdhara/atomix";
import type { SearchResult } from "../../types";
import styles from "./SearchResultItem.module.scss";

export interface SearchResultItemProps {
  result: SearchResult;
  onClick?: () => void;
}

export const SearchResultItem: FC<SearchResultItemProps> = ({
  result,
  onClick,
}) => {
  const getIconName = (category: string) => {
    switch (category) {
      case "component":
        return "Component";
      case "guide":
        return "BookOpen";
      case "token":
        return "Palette";
      case "layout":
        return "Layout";
      default:
        return "FileText";
    }
  };

  return (
    <Link
      href={result.path}
      onClick={onClick}
      className={styles.searchResultItem__link}
    >
      <Card title={result.title} text={result.description}></Card>
    </Link>
  );
};
