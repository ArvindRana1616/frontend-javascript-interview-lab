"use client";

import "./closures.css";

export default function ClosuresPage() {
  function createCounter() {
    let count = 0;

    return function () {
      count++;

      console.log("Count:", count);
    };
  }

  const counter = createCounter();

  return (
    <div className="closures-page">
      <div className="page-header">
        <span className="page-badge">JavaScript Concepts</span>

        <h1>JavaScript Closures</h1>

        <p>
          A closure allows an inner function to remember variables from its
          outer function.
        </p>
      </div>

      <div className="closures-grid">
        <section className="closures-card">
          <div className="card-header">
            <span className="card-number">01</span>

            <h2>Basic Closure</h2>
          </div>

          <p className="card-description">
            The inner function remembers the count variable even after the
            outer function has finished.
          </p>

          <div className="closure-demo">
            <button onClick={counter}>
              Increase Count
            </button>
          </div>

          <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
              <code>{`function createCounter() {
  let count = 0;

  return function () {
    count++;

    console.log("Count:", count);
  };
}

const counter = createCounter();

counter(); // 1
counter(); // 2
counter(); // 3`}</code>
            </pre>
          </div>

          <div className="output-box">
            <strong>Output:</strong>
            <br />
            Count: 1
            <br />
            Count: 2
            <br />
            Count: 3
          </div>
        </section>
      </div>
    </div>
  );
}