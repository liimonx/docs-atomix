import { Icon, Input } from '@shohojdhara/atomix';
import { useSearch } from '../../hooks/useSearch';
import { SearchResultItem } from './SearchResultItem';
import { Dropdown } from '@shohojdhara/atomix';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function GlobalSearch() {
  const {
    searchQuery,
    setSearchQuery,
    searchResults,
    clearSearch
  } = useSearch();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery.length > 0 && searchResults.length > 0) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [searchQuery, searchResults]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      clearSearch();
      setIsOpen(false);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % searchResults.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + searchResults.length) % searchResults.length);
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      const result = searchResults[selectedIndex];
      if (result) {
        navigate(result.path);
        setIsOpen(false);
      }
    }
  };

  return (
    <div className="u-position-relative" onKeyDown={handleKeyDown} style={{ width: '300px' }}>
      <Dropdown
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        className="u-w-100"
        menu={
          <div className="u-w-100">
            {searchResults.length > 0 ? (
              <ul>
                {searchResults.map((result, index) => (
                  <SearchResultItem
                    key={result.id}
                    result={result}
                    isSelected={index === selectedIndex}
                    onClick={() => {
                      navigate(result.path);
                      setIsOpen(false);
                    }}
                    onMouseEnter={() => setSelectedIndex(index)}
                  />
                ))}
              </ul>
            ) : (
              <div className="p-4 text-center text-gray-500">
                No results found.
              </div>
            )}
          </div>
        }
      >
        <div className="u-position-relative u-w-100">
          <Input
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search..."
            glass
            variant="info"
          />
          <div className="u-position-absolute u-w-100 u-bottom-0 u-right-0 u-d-flex u-align-items-center u-pr-3">
            {searchQuery && (
              <button onClick={clearSearch} className="u-text-secondary u-hover:u-text-secondary-emphasis">
                <Icon name="X" size="sm" />
              </button>
            )}
          </div>
        </div>
      </Dropdown>
    </div>
  );
}
