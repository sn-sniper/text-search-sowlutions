import React from "react";
import { highlightText, formatDate } from "../../utils/searchUtils";
import { A11Y_LABELS } from "../../constants";
import "./ArticleCard.css";

/**
 * ArticleCard Component
 * Displays an individual article with highlighted search terms
 *
 * @param {Object} props
 * @param {Object} props.article - Article object
 * @param {string} props.searchQuery - Current search query for highlighting
 */
const ArticleCard = ({ article, searchQuery }) => {
  const { title, content, author, date, category } = article;

  const highlightedTitle = highlightText(title, searchQuery);
  const highlightedContent = highlightText(content, searchQuery);
  const formattedDate = formatDate(date);

  return (
    <article className="article-card" role="listitem">
      <header>
        <h2
          className="article-title"
          dangerouslySetInnerHTML={{
            __html: highlightedTitle,
          }}
        />
      </header>

      <div className="article-meta">
        <span className="article-meta__item">
          <span className="article-meta__icon" aria-hidden="true">
            👤
          </span>
          <span aria-label={A11Y_LABELS.ARTICLE_AUTHOR}>By {author}</span>
        </span>

        <span className="article-meta__item">
          <span className="article-meta__icon" aria-hidden="true">
            📅
          </span>
          <time dateTime={date} aria-label={A11Y_LABELS.ARTICLE_DATE}>
            {formattedDate}
          </time>
        </span>

        <span
          className="article-meta__category"
          aria-label={A11Y_LABELS.ARTICLE_CATEGORY}
        >
          {category}
        </span>
      </div>

      <div className="article-content">
        <p
          dangerouslySetInnerHTML={{
            __html: highlightedContent,
          }}
        />
      </div>
    </article>
  );
};

export default ArticleCard;
