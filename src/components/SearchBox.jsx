import { RiCloseCircleFill } from "react-icons/ri";

const SearchBox = ({
  searchQuery,
  onSearchChange,
  placeholder = "Search articles...",
}) => {
  const handleClear = () => {
    onSearchChange("");
  };

  return (
    <div className="search-box">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder={placeholder}
        className="search-input"
        autoFocus
      />
      {searchQuery && (
        <button 
          className="clear-icon"
          onClick={handleClear}
          type="button"
          aria-label="Clear search"
        >
          <RiCloseCircleFill />
        </button>
      )}
    </div>
  );
};

export default SearchBox;
