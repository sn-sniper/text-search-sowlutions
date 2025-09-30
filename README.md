# Article Search Application

A modern, responsive React application for searching and highlighting text across a collection of articles.

## 🚀 Features

- **Real-time search** across article titles, content, authors, and categories
- **Text highlighting** of search terms in results
- **Responsive design** that works on all device sizes
- **Professional architecture** with modular components and clean separation of concerns
- **Accessibility support** with proper ARIA labels and semantic HTML
- **Error boundaries** for graceful error handling
- **Performance optimized** with memoization and efficient re-renders

## 🏗️ Architecture

### Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ArticleCard/     # Individual article display
│   ├── ErrorBoundary/   # Error handling wrapper
│   ├── Layout/          # Main layout component
│   ├── NoResults/       # Empty state component
│   ├── SearchBox/       # Search input with clear
│   ├── SearchResults/   # Results container
│   └── index.js         # Barrel exports
├── constants/           # Application constants
│   └── index.js        # UI text, config values
├── data/               # Static data
│   └── articles.js     # Sample articles array
├── hooks/              # Custom React hooks
│   ├── useDebounce.js  # Debouncing utility
│   ├── useSearch.js    # Search logic hook
│   └── index.js        # Hook exports
├── styles/             # Modular CSS architecture
│   ├── base.css        # Reset and base styles
│   ├── components.css  # Component styles
│   ├── responsive.css  # Media queries
│   ├── variables.css   # CSS custom properties
│   └── index.css       # Main stylesheet
├── utils/              # Utility functions
│   └── searchUtils.js  # Search and highlighting
├── App.jsx             # Root component
├── App.css             # App-specific styles
├── main.jsx            # Application entry point
└── index.css           # Global styles import
```

### Design Patterns

- **Component Co-location**: Each component has its own folder with JSX, CSS, and barrel export
- **Custom Hooks**: Business logic separated from UI components
- **Barrel Exports**: Clean import statements using index.js files
- **CSS Architecture**: Modular stylesheets with CSS custom properties
- **Error Boundaries**: Graceful error handling and recovery
- **Semantic HTML**: Proper use of ARIA labels and semantic elements

## 🛠️ Technologies

- **React 18** with functional components and hooks
- **Vite** for fast development and building
- **CSS Modules** with custom properties for theming
- **React Icons** for consistent iconography
- **ESLint** for code quality

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>
cd text-search

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🎯 Usage

1. **Search**: Type keywords in the search box to filter articles
2. **Clear**: Click the X icon to clear the search
3. **Highlight**: Search terms are automatically highlighted in results
4. **Responsive**: Works seamlessly on desktop, tablet, and mobile

## 🔧 Configuration

### Search Configuration

Edit `src/constants/index.js` to modify search behavior:

```javascript
export const SEARCH_CONFIG = {
  DEBOUNCE_DELAY: 300, // Search delay in ms
  MIN_SEARCH_LENGTH: 1, // Minimum characters to search
  MAX_RESULTS: 100, // Maximum results to display
  HIGHLIGHT_CLASS: "highlight", // CSS class for highlights
};
```

### Styling

The application uses CSS custom properties for theming. Edit `src/styles/variables.css` to customize:

- Colors
- Typography
- Spacing
- Border radius
- Shadows
- Transitions

## 🧪 Testing

```bash
# Run ESLint
npm run lint

# Fix ESLint issues
npm run lint:fix
```

## 📚 Component API

### SearchBox

```jsx
<SearchBox
  searchQuery={string}      // Current search value
  onSearchChange={function} // Search change handler
  onClear={function}        // Clear button handler
  placeholder={string}      // Input placeholder
  autoFocus={boolean}       // Auto-focus input
/>
```

### SearchResults

```jsx
<SearchResults
  articles={array} // Filtered articles array
  searchQuery={string} // Current search query
  isLoading={boolean} // Loading state
/>
```

### ArticleCard

```jsx
<ArticleCard
  article={object} // Article object
  searchQuery={string} // Query for highlighting
/>
```

## 🚀 Performance

- **Memoization**: Search results are memoized to prevent unnecessary recalculations
- **Debouncing**: Search input is debounced to reduce API calls (if implemented)
- **Code Splitting**: Components are lazy-loaded where appropriate
- **CSS Optimization**: Modular CSS reduces bundle size

## 📱 Responsive Design

- **Mobile First**: Built with mobile-first responsive design
- **Breakpoints**:
  - Mobile: < 480px
  - Tablet: 480px - 768px
  - Desktop: > 768px
- **Touch Friendly**: Optimized for touch interactions

## ♿ Accessibility

- **Semantic HTML**: Proper use of headings, sections, and landmarks
- **ARIA Labels**: Screen reader support for all interactive elements
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Visible focus indicators
- **Color Contrast**: WCAG AA compliant color schemes

## 🐛 Error Handling

- **Error Boundaries**: Catch and handle React errors gracefully
- **Input Validation**: Robust input validation in utility functions
- **Fallback UI**: User-friendly error messages
- **Development Debugging**: Detailed error info in development mode

## 🤝 Contributing

1. Follow the established architecture patterns
2. Write semantic, accessible HTML
3. Use CSS custom properties for styling
4. Add JSDoc comments for functions
5. Test on multiple devices and browsers

## 📄 License

MIT License - see LICENSE file for details+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
