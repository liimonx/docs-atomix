"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Dropdown, Input, Button } from "@shohojdhara/atomix";
import { useSearch } from "../../hooks/useSearch";
import { SearchResultItem } from "./SearchResultItem";
import { SearchResult as TypedSearchResult } from "../../types";
import styles from "./GlobalSearch.module.scss";

export function GlobalSearch() {
  const { searchQuery, setSearchQuery, searchResults, clearSearch } =
    useSearch();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setTimeout(() => setMounted(true), 0);
  }, []);

  const mappedSearchResults: TypedSearchResult[] = searchResults.map(
    (result) => ({
      id: result.id,
      title: result.title,
      description: result.description,
      path: result.path,
      category: result.category as "component" | "page" | "section",
      breadcrumbs: [result.category],
    }),
  );

  useEffect(() => {
    if (searchQuery.length > 0 && mappedSearchResults.length > 0) {
      setTimeout(() => setIsOpen(true), 0);
    } else {
      setTimeout(() => {
        setIsOpen(false);
        setSelectedIndex(-1);
      }, 0);
    }
  }, [searchQuery, mappedSearchResults]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") {
      clearSearch();
      setIsOpen(false);
      setSelectedIndex(-1);
      inputRef.current?.blur();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (mappedSearchResults.length > 0) {
        setSelectedIndex((prev) => (prev + 1) % mappedSearchResults.length);
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (mappedSearchResults.length > 0) {
        setSelectedIndex(
          (prev) =>
            (prev - 1 + mappedSearchResults.length) %
            mappedSearchResults.length,
        );
      }
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      const result = mappedSearchResults[selectedIndex];
      if (result) {
        router.push(result.path);
        setIsOpen(false);
        clearSearch();
        setSelectedIndex(-1);
        inputRef.current?.blur();
      }
    }
  };

  if (!mounted) {
    return (
      <div
        className={styles.searchPlaceholder}
        aria-hidden="true"
        role="presentation"
      />
    );
  }

  return (
    <div className="u-relative" onKeyDown={handleKeyDown}>
      <Dropdown
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        className="u-w-100"
        menu={
          <div className="u-w-100">
            {mappedSearchResults.length > 0 ? (
              <ul className="u-list-none u-m-0 u-ps-1" role="listbox">
                {mappedSearchResults.map((result, index) => (
                  <SearchResultItem
                    key={result.id}
                    result={result}
                    isSelected={index === selectedIndex}
                    onClick={() => {
                      router.push(result.path);
                      setIsOpen(false);
                      clearSearch();
                      setSelectedIndex(-1);
                      inputRef.current?.blur();
                    }}
                  />
                ))}
              </ul>
            ) : searchQuery.length > 0 ? (
              <div className="u-p-4 u-text-center u-text-secondary-emphasis">
                No results found.
              </div>
            ) : (
              <div className="u-p-4 u-text-center u-text-secondary-emphasis">
                Start typing to search...
              </div>
            )}
          </div>
        }
      >
        <div className="u-relative u-w-100 u-pe-4 u-border-e">
          <Input
            ref={inputRef}
            className="u-px-4 u-py-2 u-ps-10"
            type="text"
            placeholder="Search documentation..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search documentation"
            aria-autocomplete="list"
            aria-controls={isOpen ? "global-search-results" : undefined}
            aria-expanded={isOpen}
          />
          <div className="u-absolute u-top-0 u-start-0 u-pt-1 u-ps-1">
            {searchQuery ? (
              <Button
                onClick={() => {
                  clearSearch();
                  inputRef.current?.focus();
                }}
                aria-label="Clear search"
                iconOnly
                variant="link"
                iconName="X"
                iconSize="sm"
                size="sm"
              />
            ) : (
              <Button
                onClick={() => inputRef.current?.focus()}
                aria-label="Search"
                iconOnly
                variant="link"
                size="sm"
                iconName="MagnifyingGlass"
                iconSize="sm"
              />
            )}
          </div>
        </div>
      </Dropdown>
    </div>
  );
}
