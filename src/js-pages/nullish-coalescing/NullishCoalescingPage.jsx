"use client";

import { useState } from "react";
import "./nullish-coalescing.css";

export default function NullishCoalescingPage() {
  const [output, setOutput] = useState("");

  function runCode() {
    const userName = null;
    const userAge = 0;
    const userCity = undefined;

    const name = userName ?? "Guest";
    const age = userAge ?? 18;
    const city = userCity ?? "Delhi";

    setOutput(
      `Name: ${name}\nAge: ${age}\nCity: ${city}`
    );
  }

  return (
    <main className="concept-page">
      <div className="concept-header">
        <h1>Nullish Coalescing</h1>

        <p>
          The nullish coalescing operator provides a default value when a
          value is null or undefined.
        </p>
      </div>

      <div className="concept-card">
        <div className="card-section">
          <h2>Example</h2>

          <pre>
            <code>{`const userName = null;
const userAge = 0;
const userCity = undefined;

const name = userName ?? "Guest";
const age = userAge ?? 18;
const city = userCity ?? "Delhi";`}</code>
          </pre>
        </div>

        <div className="card-section">
          <h2>Run JavaScript</h2>

          <button onClick={runCode}>Run Code</button>

          <div className="output-box">
            <strong>Output:</strong>

            <pre>
              {output || "Click Run Code to see the output."}
            </pre>
          </div>
        </div>
      </div>
    </main>
  );
}