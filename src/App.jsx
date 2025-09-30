import { Layout, SearchBox, SearchResults } from "./components";
import { articles } from "./data/articles";
import { useSearch } from "./hooks";
import "./App.css";


function App() {
  const {
    searchQuery,
    filteredArticles,
    handleSearchChange,
    handleClearSearch,
  } = useSearch(articles);

  return (
    <Layout>
      <header className="app-header">
        <h1 className="app-header__title">Article Search</h1>
        <p className="app-header__subtitle">
          Search through our collection of tech articles
        </p>
      </header>

      <main className="app-main">
        <SearchBox
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          onClear={handleClearSearch}
        />

        <SearchResults articles={filteredArticles} searchQuery={searchQuery} />
      </main>
    </Layout>
  );
}

export default App;
