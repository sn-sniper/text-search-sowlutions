import React from "react";
import { UI_CONSTANTS } from "../../constants";
import ArticleCard from "../ArticleCard";
import NoResults from "../NoResults";
import "./SearchResults.css";

/**
 * SearchResults Component
 * Displays search results or no results message
 *
 * @param {Object} props
 * @param {Array} props.articles - Array of filtered articles
 * @param {string} props.searchQuery - Current search query
 * @param {boolean} props.isLoading - Loading state
 */
const SearchResults = ({ articles, searchQuery, isLoading = false }) => {
  if (isLoading) {
    return (
      <div className="search-results">
        <div className="loading-state">
          <p>Searching...</p>
        </div>
      </div>
    );
  }

  if (!articles || articles.length === 0) {
    return <NoResults searchQuery={searchQuery} />;
  }

  const resultsCount = articles.length;
  const countText =
    resultsCount === 1
      ? UI_CONSTANTS.RESULTS_COUNT_SINGULAR
      : UI_CONSTANTS.RESULTS_COUNT_PLURAL;

  return (
    <div className="search-results">
      <header className="results-header">
        <p className="results-header__count">
          {resultsCount} {countText}
        </p>
      </header>

      <div className="articles-list" role="list">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
            searchQuery={searchQuery}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
