"use client";

import "./json.css";

export default function JSONPage() {
  function convertToJSON() {
    const user = {
      name: "Arvind",
      role: "Frontend Developer",
    };

    const jsonData = JSON.stringify(user);

    console.log(jsonData);
  }

  function convertToObject() {
    const jsonData = '{"name":"Arvind","role":"Frontend Developer"}';

    const user = JSON.parse(jsonData);

    console.log(user);
  }

  return (
    <div className="json-page">
      <div className="page-header">
        <span className="page-badge">JavaScript Concepts</span>

        <h1>JavaScript JSON</h1>

        <p>
          JSON is commonly used to send and receive data between frontend
          and backend.
        </p>
      </div>

      <div className="json-grid">
        <section className="json-card">
          <div className="card-header">
            <span className="card-number">01</span>

            <h2>JSON Parse & Stringify</h2>
          </div>

          <p className="card-description">
            JSON.stringify() converts a JavaScript object into a JSON string,
            while JSON.parse() converts a JSON string back into a JavaScript
            object.
          </p>

          <div className="json-buttons">
            <button onClick={convertToJSON}>
              Object → JSON
            </button>

            <button onClick={convertToObject}>
              JSON → Object
            </button>
          </div>

          <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
              <code>{`// Object → JSON
const user = {
  name: "Arvind",
  role: "Frontend Developer"
};

const jsonData = JSON.stringify(user);

console.log(jsonData);


// JSON → Object
const jsonData = '{"name":"Arvind","role":"Frontend Developer"}';

const user = JSON.parse(jsonData);

console.log(user);`}</code>
            </pre>
          </div>

          <div className="output-box">
            <strong>Output:</strong>
            <br />
            JSON.stringify() → Object becomes JSON string
            <br />
            JSON.parse() → JSON string becomes Object
          </div>
        </section>
      </div>
    </div>
  );
}