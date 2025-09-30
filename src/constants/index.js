/**
 * Application constants and configuration values
 */

// Search configuration
export const SEARCH_CONFIG = {
  DEBOUNCE_DELAY: 300,
  MIN_SEARCH_LENGTH: 1,
  MAX_RESULTS: 100,
  HIGHLIGHT_CLASS: "highlight",
};

// UI constants
export const UI_CONSTANTS = {
  SEARCH_PLACEHOLDER: "Search articles, authors, or categories...",
  NO_RESULTS_TITLE: "No articles found",
  NO_RESULTS_SUBTITLE: "Try searching for different terms.",
  RESULTS_COUNT_SINGULAR: "article found",
  RESULTS_COUNT_PLURAL: "articles found",
};

// Article categories
export const ARTICLE_CATEGORIES = {
  WEB_DEVELOPMENT: "Web Development",
  BACKEND_DEVELOPMENT: "Backend Development",
  PROGRAMMING: "Programming",
  WEB_DESIGN: "Web Design",
  DATA_SCIENCE: "Data Science",
  DEVOPS: "DevOps",
  DATABASE: "Database",
  SECURITY: "Security",
  CLOUD_COMPUTING: "Cloud Computing",
  AI_ETHICS: "AI Ethics",
  MOBILE_DEVELOPMENT: "Mobile Development",
};

// Date formatting options
export const DATE_FORMAT_OPTIONS = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

// Accessibility labels
export const A11Y_LABELS = {
  CLEAR_SEARCH: "Clear search",
  SEARCH_INPUT: "Search articles",
  ARTICLE_AUTHOR: "Article author",
  ARTICLE_DATE: "Publication date",
  ARTICLE_CATEGORY: "Article category",
};
