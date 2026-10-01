"use client";

import "./event-handling.css";

export default function EventHandlingPage() {
  function handleButtonClick(event) {
    console.log("Button clicked:", event.target.textContent);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted");
  }

  function handleParentClick() {
    console.log("Parent clicked");
  }

  function handleChildClick(event) {
    event.stopPropagation();
    console.log("Button clicked - bubbling stopped");
  }

  function handleListClick(event) {
    if (event.target.tagName === "BUTTON") {
      console.log("Event Delegation:", event.target.textContent);
    }
  }

  return (
    <div className="event-handling-page">
      <div className="page-header">
        <span className="page-badge">JavaScript Concepts</span>

        <h1>JavaScript Event Handling</h1>

        <p>
          Events allow JavaScript and React to respond to user actions such as
          clicks, typing, and form submission.
        </p>
      </div>

      <div className="event-handling-grid">
        <section className="event-handling-card">
          <div className="card-header">
            <span className="card-number">01</span>
            <h2>Event Handling</h2>
          </div>

          <p className="card-description">
            This example covers event handlers, the event object,
            preventDefault(), event bubbling, stopPropagation(), and event
            delegation.
          </p>

          {/* Click Event */}
          <div className="example-section">
            <h3>1. Click Event & Event Object</h3>

            <button onClick={handleButtonClick}>
              Click Me
            </button>
          </div>

          {/* Form Submit */}
          <div className="example-section">
            <h3>2. preventDefault()</h3>

            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Enter your name" />

              <button type="submit">
                Submit
              </button>
            </form>
          </div>

          {/* Event Bubbling */}
          <div className="example-section">
            <h3>3. Event Bubbling</h3>

            <div
              className="parent-box"
              onClick={handleParentClick}
            >
              <p>Parent</p>

              <button onClick={handleChildClick}>
                Click Child
              </button>
            </div>
          </div>

          {/* Event Delegation */}
          <div className="example-section">
            <h3>4. Event Delegation</h3>

            <div
              className="button-list"
              onClick={handleListClick}
            >
              <button>Button 1</button>
              <button>Button 2</button>
              <button>Button 3</button>
            </div>
          </div>

          <div className="code-box">
            <div className="code-header">React JSX</div>

            <pre>
              <code>{`function handleButtonClick(event) {
  console.log(event.target.textContent);
}

function handleSubmit(event) {
  event.preventDefault();
  console.log("Form submitted");
}

function handleChildClick(event) {
  event.stopPropagation();
}

function handleListClick(event) {
  if (event.target.tagName === "BUTTON") {
    console.log(event.target.textContent);
  }
}`}</code>
            </pre>
          </div>

          <div className="output-box">
            <strong>Output:</strong>
            <br />
            Button click, form submit, event bubbling, and event delegation
            are handled using React events.
          </div>
        </section>
      </div>
    </div>
  );
}