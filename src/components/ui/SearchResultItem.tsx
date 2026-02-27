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
  itemId?: string;
}

export const SearchResultItem: FC<SearchResultItemProps> = ({
  result,
  onClick,
  isSelected = false,
  itemId,
}) => {
  return (
    <li role="option" aria-selected={isSelected} id={itemId}>
      <Link
        href={result.path}
        onClick={onClick}
        className={`${styles.searchResultItem__link} ${isSelected ? styles.searchResultItem__linkSelected : ""}`}
        aria-current={isSelected ? "page" : undefined}
      >
        <Card title={result.title} text={result.description}></Card>
      </Link>
    </li>
  );
};
