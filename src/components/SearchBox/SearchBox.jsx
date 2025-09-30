import React from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import { UI_CONSTANTS, A11Y_LABELS } from "../../constants";
import "./SearchBox.css";

/**
 * SearchBox Component
 * Provides a search input with clear functionality
 *
 * @param {Object} props
 * @param {string} props.searchQuery - Current search query
 * @param {Function} props.onSearchChange - Handler for search input changes
 * @param {Function} props.onClear - Handler for clearing search
 * @param {string} props.placeholder - Input placeholder text
 * @param {boolean} props.autoFocus - Whether to auto-focus the input
 */
const SearchBox = ({
  searchQuery,
  onSearchChange,
  onClear,
  placeholder = UI_CONSTANTS.SEARCH_PLACEHOLDER,
  autoFocus = true,
}) => {
  const handleInputChange = (event) => {
    onSearchChange(event.target.value);
  };

  const handleClear = () => {
    onClear();
  };

  const hasQuery = searchQuery && searchQuery.trim().length > 0;

  return (
    <div className="search-box">
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="search-input"
        autoFocus={autoFocus}
        aria-label={A11Y_LABELS.SEARCH_INPUT}
      />
      {hasQuery && (
        <button
          className="clear-icon"
          onClick={handleClear}
          type="button"
          aria-label={A11Y_LABELS.CLEAR_SEARCH}
          title={A11Y_LABELS.CLEAR_SEARCH}
        >
          <RiCloseCircleFill />
        </button>
      )}
    </div>
  );
};

export default SearchBox;
