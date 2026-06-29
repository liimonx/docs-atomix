"use client";

import { FC } from "react";
import Link from "next/link";
import { Card } from "@shohojdhara/atomix";
import type { SearchResult } from "../../types";
import styles from "./SearchResultItem.module.scss";

export interface SearchResultItemProps {
  result: SearchResult;
  onClick?: () => void;
  isSelected?: boolean;
}

export const SearchResultItem: FC<SearchResultItemProps> = ({
  result,
  onClick,
  isSelected = false,
}) => {
  return (
    <Link
      href={result.path}
      onClick={onClick}
      className={`${styles.searchResultItem__link} ${isSelected ? styles["searchResultItem__link--selected"] : ""}`}
      role="option"
      aria-selected={isSelected}
    >
      <Card title={result.title} text={result.description}></Card>
    </Link>
  );
};
