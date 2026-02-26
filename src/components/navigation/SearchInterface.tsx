"use client";

import { useState, useCallback, useEffect, FC } from "react";
import { Modal, Input, Icon, Button, List } from "@shohojdhara/atomix";
import { useSearch } from "@/hooks/useSearch";
import { useRouter } from "next/navigation";

export const SearchInterface: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [mounted, setMounted] = useState(false);
  const { searchResults } = useSearch();
  const router = useRouter();

  // Handle keyboard shortcuts
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
      } else if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    },
    [isOpen],
  );

  useEffect(() => {
    setMounted(true);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleResultClick = (path: string) => {
    router.push(path);
    setIsOpen(false);
    setSearchTerm("");
  };

  const filteredResults = searchTerm
    ? searchResults.filter(
        (result) =>
          result.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (result.description &&
            result.description
              .toLowerCase()
              .includes(searchTerm.toLowerCase())),
      )
    : [];

  // Avoid rendering button during SSR to prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <>
      <Button
        variant="outline-secondary"
        size="sm"
        onClick={() => setIsOpen(true)}
        className="search-trigger"
        aria-label="Search documentation (Ctrl+K)"
        glass={false}
      >
        <Icon name="MagnifyingGlass" size="sm" />
        <span className="search-placeholder">Search...</span>
        <span className="search-shortcut">⌘K</span>
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          setSearchTerm("");
        }}
        size="lg"
        className="search-modal"
        glass={false}
      >
        <div className="search-interface">
          <div className="search-header">
            <Icon name="MagnifyingGlass" size="sm" className="search-icon" />
            <Input
              placeholder="Search documentation..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              autoFocus
              className="search-input"
              aria-label="Search documentation"
              glass={{
                blurAmount: 5,
                borderRadius: 30,
                elasticity: 0,
              }}
              style={{
                paddingLeft: "40px",
              }}
            />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setIsOpen(false);
                setSearchTerm("");
              }}
              aria-label="Close search"
            >
              <Icon name="X" size="sm" />
            </Button>
          </div>

          <div className="search-content">
            {searchTerm ? (
              filteredResults.length > 0 ? (
                <List
                  items={filteredResults.map((result) => (
                    <div
                      key={result.path}
                      className="search-result-item"
                      onClick={() => handleResultClick(result.path)}
                    >
                      <div className="result-header">
                        <h4 className="result-title">{result.title}</h4>
                        <span className="result-category">
                          {result.category}
                        </span>
                      </div>
                      {result.description && (
                        <p className="result-description">
                          {result.description}
                        </p>
                      )}
                    </div>
                  ))}
                  className="search-results"
                />
              ) : (
                <div className="search-empty">
                  <Icon name="MagnifyingGlass" size="lg" />
                  <p>No results found for "{searchTerm}"</p>
                  <p className="search-suggestion">
                    Try different search terms
                  </p>
                </div>
              )
            ) : (
              <div className="search-help">
                <h3>Search Documentation</h3>
                <p>
                  Enter a query to search across all components, design tokens,
                  and documentation.
                </p>
                <div className="search-tips">
                  <h4>Search Tips</h4>
                  <ul>
                    <li>
                      Use specific terms like "button", "color", or "grid"
                    </li>
                    <li>Try component names like "Accordion" or "DataTable"</li>
                    <li>Search for properties like "variant" or "size"</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};
