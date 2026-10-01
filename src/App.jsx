import { useState } from "react";


function App() {
  const [activePage, setActivePage] = useState("variables");

  const renderPage = () => {
    switch (activePage) {
      case "variables":
        return <VariablesPage />;

      default:
        return <VariablesPage />;
    }
  };

  return (
    <div className="app">

      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <h2>JS Lab</h2>
          <span>JavaScript Coding</span>
        </div>

        <nav className="sidebar-nav">
          <button
            className={activePage === "variables" ? "active" : ""}
            onClick={() => setActivePage("variables")}
          >
            Variables
          </button>

          <button
            className={activePage === "data-types" ? "active" : ""}
            onClick={() => setActivePage("data-types")}
          >
            Data Types
          </button>

          <button
            className={activePage === "operators" ? "active" : ""}
            onClick={() => setActivePage("operators")}
          >
            Operators
          </button>

          <button
            className={activePage === "conditions" ? "active" : ""}
            onClick={() => setActivePage("conditions")}
          >
            Conditions
          </button>

          <button
            className={activePage === "functions" ? "active" : ""}
            onClick={() => setActivePage("functions")}
          >
            Functions
          </button>

          <button
            className={activePage === "arrays" ? "active" : ""}
            onClick={() => setActivePage("arrays")}
          >
            Arrays
          </button>

          <button
            className={activePage === "objects" ? "active" : ""}
            onClick={() => setActivePage("objects")}
          >
            Objects
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {renderPage()}
      </main>

    </div>
  );
}

export default App;