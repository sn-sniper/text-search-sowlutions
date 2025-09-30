import React from "react";
import "./Layout.css";

/**
 * Layout Component
 * Provides the main layout structure for the application
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child components
 */
const Layout = ({ children }) => {
  return (
    <div className="app">
      <div className="container">{children}</div>
    </div>
  );
};

export default Layout;
