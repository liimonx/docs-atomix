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
    <div className="relative w-full max-w-md" onKeyDown={handleKeyDown}>
      <Dropdown
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        menu={
          <div className="w-full">
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
        <div className="relative">
          <Input
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="w-full"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            {searchQuery && (
              <button onClick={clearSearch} className="text-gray-500 hover:text-gray-700">
                <Icon name="X" className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
      </Dropdown>
    </div>
  );
}
