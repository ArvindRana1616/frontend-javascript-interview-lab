"use client"

import { useState } from "react";
import Link from "next/link";
import "./Sidebar.css";


export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <button
      className="menu-button"
      onClick={() => setIsOpen(true)}
    >
      ☰
    </button>

    <aside className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>
      <button
  className="close-button"
  onClick={() => setIsOpen(false)}
>
  ✕
</button>
      <h2 className="sidebar-title">JS Code Lab</h2>

      <nav>
        <div className="sidebar-section">
          <h4>JavaScript Basics</h4>

          <ul>
            <li>
              <Link href="/variables">Variables</Link>
            </li>
            <li>
              <Link href="/datatype">Data Types</Link>
            </li>
            <li>
              <Link href="/operators">Operators</Link>
            </li>
            <li>
              <Link href="/conditions">Conditions</Link>
            </li>
            <li>
              <Link href="/functions">Functions</Link>
            </li>
          </ul>
        </div>

        <div className="sidebar-section">
          <h4>Arrays & Objects</h4>

          <ul>
            <li>
              <Link href="/arrays">Arrays</Link>
            </li>
            <li>
              <Link href="/objects">Objects</Link>
            </li>
            <li>
              <Link href="/array-methods">Array Methods</Link>
            </li>
          </ul>
        </div>

        <div className="sidebar-section">
          <h4>Modern JavaScript</h4>

          <ul>
            <li>
              <Link href="/destructuring">Destructuring</Link>
            </li>
            <li>
              <Link href="/spread-rest">Spread & Rest</Link>
            </li>
            <li>
              <Link href="/template-literals">Template Literals</Link>
            </li>
            <li>
              <Link href="/javascript-essentials">JavaScript Essentials</Link>
            </li>
          </ul>
        </div>

        <div className="sidebar-section">
          <h4>Advanced</h4>

          <ul>
            <li>
              <Link href="/promises">Promises</Link>
            </li>
            <li>
              <Link href="/async-await">Async / Await</Link>
            </li>
            <li>
              <Link href="/fetch">Fetch</Link>
            </li>
            <li>
              <Link href="/error-handling">Error Handling</Link>
            </li>
          </ul>
        </div>

        <div className="sidebar-section">
          <h4>JavaScript Concepts</h4>

          <ul>
            <li>
              <Link href="/event-handling">Event Handling</Link>
            </li>
            <li>
              <Link href="/dom-manipulation">DOM Manipulation</Link>
            </li>
            <li>
              <Link href="/json">Json</Link>
            </li>
            <li>
              <Link href="/closures">Closures</Link>
            </li>
            <li>
              <Link href="/debounce">Debounce</Link>
            </li>
            <li>
              <Link href="/default-parameters">Default Parameter</Link>
            </li>
            <li>
              <Link href="/optional-chaining">Optional Chaining</Link>
            </li>
            <li>
              <Link href="/naullish-coalescing">Nullish-Coalescing</Link>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
    {isOpen && (
  <div
    className="sidebar-overlay"
    onClick={() => setIsOpen(false)}
  />
)}
    </>
  );
}