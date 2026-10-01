"use client";

import { useRef, useState } from "react";
import "./debounce.css";

export default function DebouncePage() {
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState(
    "Start typing to see debounce in action."
  );

  const timer = useRef(null);

  function handleSearch(value) {
    setSearch(value);

    clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      if (value.trim() === "") {
        setMessage("Waiting for your search...");
        return;
      }

      setMessage(`API Call: Searching for "${value}"`);
    }, 500);
  }

  return (
    <div className="debounce-page">
      <div className="page-header">
        <span className="page-badge">JavaScript Concepts</span>

        <h1>JavaScript Debounce</h1>

        <p>
          Debounce waits until the user stops typing before running a
          function.
        </p>
      </div>

      <div className="debounce-grid">
        <section className="debounce-card">
          <div className="card-header">
            <span className="card-number">01</span>

            <h2>Search Box Debounce</h2>
          </div>

          <p className="card-description">
            This example waits 500ms after the user stops typing before
            running the search function.
          </p>

          <div className="debounce-demo">
            <label htmlFor="search">
              Search Users
            </label>

            <input
              id="search"
              type="text"
              value={search}
              onChange={(event) => handleSearch(event.target.value)}
              placeholder="Type something..."
            />

            <div className="search-output">
              {message}
            </div>
          </div>

          <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
              <code>{`const timer = useRef(null);

function handleSearch(value) {
  setSearch(value);

  clearTimeout(timer.current);

  timer.current = setTimeout(() => {
    console.log("API Call:", value);
  }, 500);
}`}</code>
            </pre>
          </div>

          <div className="output-box">
            <strong>How it works:</strong>
            <br />
            User types → timer resets → user stops typing → 500ms wait →
            search function runs
          </div>
        </section>
      </div>
    </div>
  );
}