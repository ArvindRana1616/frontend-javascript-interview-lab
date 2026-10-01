"use client";

import "./dom-manipulation.css";

export default function DOMManipulationPage() {
  function changeText() {
    const title = document.querySelector("#dom-title");

    title.textContent = "DOM Text Updated";
  }

  function toggleClass() {
    const title = document.querySelector("#dom-title");

    title.classList.toggle("active");
  }

  function addElement() {
    const list = document.querySelector("#task-list");

    const item = document.createElement("li");

    item.textContent = "New Task";

    list.appendChild(item);
  }

  function removeElement() {
    const list = document.querySelector("#task-list");

    const lastItem = list.lastElementChild;

    if (lastItem) {
      lastItem.remove();
    }
  }

  return (
    <div className="dom-manipulation-page">
      <div className="page-header">
        <span className="page-badge">DOM</span>

        <h1>DOM Manipulation</h1>

        <p>
          JavaScript can select, update, create, and remove HTML elements
          dynamically.
        </p>
      </div>

      <div className="dom-manipulation-grid">
        <section className="dom-manipulation-card">
          <div className="card-header">
            <span className="card-number">01</span>

            <h2>DOM Manipulation</h2>
          </div>

          <p className="card-description">
            This practical example demonstrates how JavaScript can manipulate
            HTML elements using DOM methods.
          </p>

          {/* Live Demo */}
          <div className="dom-demo">
            <h3 id="dom-title">JavaScript DOM Demo</h3>

            <p>
              Click the buttons to see DOM manipulation in action.
            </p>

            <div className="dom-buttons">
              <button onClick={changeText}>
                Change Text
              </button>

              <button onClick={toggleClass}>
                Toggle Class
              </button>

              <button onClick={addElement}>
                Add Element
              </button>

              <button onClick={removeElement}>
                Remove Element
              </button>
            </div>

            <ul id="task-list">
              <li>Learn DOM</li>
            </ul>
          </div>

          {/* JavaScript Code */}
          <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
              <code>{`// Select element
const title = document.querySelector("#dom-title");

// Change text
title.textContent = "DOM Text Updated";

// Add / Remove class
title.classList.toggle("active");

// Create element
const item = document.createElement("li");

item.textContent = "New Task";

// Add element
list.appendChild(item);

// Remove element
item.remove();`}</code>
            </pre>
          </div>

          <div className="output-box">
            <strong>DOM Methods:</strong>
            <br />
            querySelector() → textContent → classList → createElement() →
            appendChild() → remove()
          </div>
        </section>
      </div>
    </div>
  );
}