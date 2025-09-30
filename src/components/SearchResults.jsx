import React from "react";
import { highlightText } from "../utils/searchUtils";

const SearchResults = ({ articles, searchQuery }) => {
  if (articles.length === 0) {
    return (
      <div className="no-results">
        <p>No articles found matching "{searchQuery}"</p>
        <p>Try searching for different terms.</p>
      </div>
    );
  }

  return (
    <div className="search-results">
      <div className="results-header">
        <p>
          {articles.length} article{articles.length !== 1 ? "s" : ""} found
        </p>
      </div>
      <div className="articles-list">
        {articles.map((article) => (
          <div key={article.id} className="article-card">
            <h2
              className="article-title"
              dangerouslySetInnerHTML={{
                __html: highlightText(article.title, searchQuery),
              }}
            />

            <div className="article-meta">
              <span className="author">By {article.author}</span>
              <span className="date">
                {new Date(article.date).toLocaleDateString()}
              </span>
              <span className="category">{article.category}</span>
            </div>

            <p
              className="article-content"
              dangerouslySetInnerHTML={{
                __html: highlightText(article.content, searchQuery),
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
