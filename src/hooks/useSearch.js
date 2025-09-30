import { useState, useMemo, useCallback } from "react";
import { searchArticles } from "../utils/searchUtils";

/**
 * Custom hook for managing search functionality
 * @param {Array} articles - Array of articles to search through
 * @returns {Object} Search state and handlers
 */
export const useSearch = (articles) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Memoize filtered results to avoid unnecessary recalculations
  const filteredArticles = useMemo(() => {
    return searchArticles(articles, searchQuery);
  }, [articles, searchQuery]);

  // Memoized search handler
  const handleSearchChange = useCallback((query) => {
    setSearchQuery(query);
  }, []);

  // Memoized clear handler
  const handleClearSearch = useCallback(() => {
    setSearchQuery("");
  }, []);

  return {
    searchQuery,
    filteredArticles,
    handleSearchChange,
    handleClearSearch,
    hasResults: filteredArticles.length > 0,
    hasQuery: searchQuery.trim().length > 0,
  };
};
