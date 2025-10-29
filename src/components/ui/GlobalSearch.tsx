import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Dropdown, Input, Icon, Button } from "@shohojdhara/atomix";
import { useSearch } from "../../hooks/useSearch";
import { SearchResultItem } from "./SearchResultItem";
import { SearchResult as TypedSearchResult } from "../../types";

export function GlobalSearch() {
  const { searchQuery, setSearchQuery, searchResults, clearSearch } =
    useSearch();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  // Map the search results to match the expected type
  const mappedSearchResults: TypedSearchResult[] = searchResults.map(
    (result) => ({
      id: result.id,
      title: result.title,
      description: result.description,
      path: result.path,
      category: result.category as "component" | "page" | "section",
      breadcrumbs: [result.category],
    })
  );

  useEffect(() => {
    if (searchQuery.length > 0 && mappedSearchResults.length > 0) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
      setSelectedIndex(-1);
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
            (prev - 1 + mappedSearchResults.length) % mappedSearchResults.length
        );
      }
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      const result = mappedSearchResults[selectedIndex];
      if (result) {
        navigate(result.path);
        setIsOpen(false);
        clearSearch();
        setSelectedIndex(-1);
        inputRef.current?.blur();
      }
    }
  };

  const handleFocus = () => {
    if (searchQuery.length > 0 && mappedSearchResults.length > 0) {
      setIsOpen(true);
    }
  };

  const handleBlur = (e: React.FocusEvent) => {
    // Delay closing to allow clicking on results
    setTimeout(() => {
      setIsOpen(false);
      setSelectedIndex(-1);
    }, 150);
  };

  return (
    <div
      className="u-position-relative header-search-wrapper"
      onKeyDown={handleKeyDown}
    >
      <Dropdown
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        className="u-w-100"
        menu={
          <div className="u-w-100">
            {mappedSearchResults.length > 0 ? (
              <ul className="u-list-style-none u-m-0 u-p-0">
                {mappedSearchResults.map((result, index) => (
                  <SearchResultItem
                    key={result.id}
                    result={result}
                    onClick={() => {
                      navigate(result.path);
                      setIsOpen(false);
                      clearSearch();
                      setSelectedIndex(-1);
                      inputRef.current?.blur();
                    }}
                  />
                ))}
              </ul>
            ) : searchQuery.length > 0 ? (
              <div className="p-4 text-center text-gray-500">
                No results found.
              </div>
            ) : (
              <div className="p-4 text-center text-gray-500">
                Start typing to search...
              </div>
            )}
          </div>
        }
      >
        <div className="u-position-relative u-w-100">
          <Input
            glass={{
              elasticity: 0,
            }}
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="u-w-100"
          />
          <div className="u-position-absolute u-top-0 u-end-0 u-pt-1 u-pe-1">
            {searchQuery ? (
              <Button
                onClick={() => {
                  clearSearch();
                  inputRef.current?.focus();
                }}
                aria-label="Clear search"
                iconOnly
                rounded
                variant="ghost"
                icon={<Icon name="X" />}
                size='sm'
              />
            ) : (
              <Button
                onClick={() => {
                  clearSearch();
                  inputRef.current?.focus();
                }}
                aria-label="Search"
                iconOnly
                rounded
                variant="ghost"
                size='sm'
                icon={<Icon name="MagnifyingGlass" />}
              />
            )}
          </div>
        </div>
      </Dropdown>
    </div>
  );
}
