"use client";

import { useState } from "react";
import "./default-parameters.css";

export default function DefaultParametersPage() {
  const [output, setOutput] = useState("");

  function runCode() {
    function greet(name = "Guest") {
      return `Hello, ${name}!`;
    }

    const result1 = greet("Arvind");
    const result2 = greet();

    setOutput(`${result1}\n${result2}`);
  }

  return (
    <main className="concept-page">
      <div className="concept-header">
        <h1>Default Parameters</h1>
        <p>
          Default parameters allow us to give a default value to a function
          parameter when no value is passed.
        </p>
      </div>

      <div className="concept-card">
        <div className="card-section">
          <h2>Example</h2>

          <pre>
            <code>{`function greet(name = "Guest") {
  return \`Hello, \${name}!\`;
}

greet("Arvind");
greet();`}</code>
          </pre>
        </div>

        <div className="card-section">
          <h2>Run JavaScript</h2>

          <button onClick={runCode}>Run Code</button>

          <div className="output-box">
            <strong>Output:</strong>
            <pre>{output || "Click Run Code to see the output."}</pre>
          </div>
        </div>
      </div>
    </main>
  );
}