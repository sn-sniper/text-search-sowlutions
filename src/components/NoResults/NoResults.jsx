import React from "react";
import { UI_CONSTANTS } from "../../constants";
import "./NoResults.css";

/**
 * NoResults Component
 * Displays a message when no search results are found
 *
 * @param {Object} props
 * @param {string} props.searchQuery - Current search query
 */
const NoResults = ({ searchQuery }) => {
  return (
    <div className="no-results">
      <div className="no-results__content">
        <h3 className="no-results__title">
          {searchQuery
            ? `${UI_CONSTANTS.NO_RESULTS_TITLE} matching "${searchQuery}"`
            : UI_CONSTANTS.NO_RESULTS_TITLE}
        </h3>
        <p className="no-results__subtitle">
          {UI_CONSTANTS.NO_RESULTS_SUBTITLE}
        </p>
      </div>
    </div>
  );
};

export default NoResults;
