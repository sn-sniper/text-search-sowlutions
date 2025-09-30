import { SEARCH_CONFIG } from "../constants";

/**
 * Search articles based on query string
 * @param {Array} articles - Array of article objects
 * @param {string} query - Search query string
 * @returns {Array} Filtered array of articles
 */
export const searchArticles = (articles, query) => {
  // Validate inputs
  if (!Array.isArray(articles)) {
    console.warn("searchArticles: articles parameter must be an array");
    return [];
  }

  if (!query || typeof query !== "string" || query.trim() === "") {
    return articles;
  }

  const searchTerm = query.toLowerCase().trim();

  // Return early if search term is too short
  if (searchTerm.length < SEARCH_CONFIG.MIN_SEARCH_LENGTH) {
    return articles;
  }

  try {
    return articles
      .filter((article) => {
        // Ensure article has required properties
        if (!article || typeof article !== "object") {
          return false;
        }

        const searchableFields = [
          article.title,
          article.content,
          article.author,
          article.category,
        ];

        return searchableFields.some(
          (field) =>
            field &&
            typeof field === "string" &&
            field.toLowerCase().includes(searchTerm)
        );
      })
      .slice(0, SEARCH_CONFIG.MAX_RESULTS);
  } catch (error) {
    console.error("Error filtering articles:", error);
    return articles;
  }
};

/**
 * Highlight search terms in text with HTML markup
 * @param {string} text - Text to highlight
 * @param {string} query - Search query to highlight
 * @returns {string} Text with highlighted search terms
 */
export const highlightText = (text, query) => {
  // Validate inputs
  if (!text || typeof text !== "string") {
    return text || "";
  }

  if (!query || typeof query !== "string" || query.trim() === "") {
    return text;
  }

  const searchTerm = query.trim();

  if (searchTerm.length < SEARCH_CONFIG.MIN_SEARCH_LENGTH) {
    return text;
  }

  try {
    const regex = new RegExp(`(${escapeRegExp(searchTerm)})`, "gi");
    return text.replace(
      regex,
      `<mark class="${SEARCH_CONFIG.HIGHLIGHT_CLASS}">$1</mark>`
    );
  } catch (error) {
    console.error("Error highlighting text:", error);
    return text;
  }
};

/**
 * Escape special regex characters in a string
 * @param {string} string - String to escape
 * @returns {string} Escaped string
 */
const escapeRegExp = (string) => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

/**
 * Format date for display
 * @param {string|Date} date - Date to format
 * @param {Object} options - Intl.DateTimeFormat options
 * @returns {string} Formatted date string
 */
export const formatDate = (date, options = {}) => {
  try {
    const dateObj = typeof date === "string" ? new Date(date) : date;

    if (!(dateObj instanceof Date) || isNaN(dateObj)) {
      return "Invalid date";
    }

    return dateObj.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
      ...options,
    });
  } catch (error) {
    console.error("Error formatting date:", error);
    return "Invalid date";
  }
};
