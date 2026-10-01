"use client";

import { useState } from "react";
import "./optional-chaining.css";

export default function OptionalChainingPage() {
  const [output, setOutput] = useState("");

  function runCode() {
    const user = {
      name: "Arvind",
      address: {
        city: "Delhi",
      },
    };

    const name = user?.name;
    const city = user?.address?.city;
    const phone = user?.contact?.phone;

    setOutput(
      `Name: ${name}\nCity: ${city}\nPhone: ${phone}`
    );
  }

  return (
    <main className="concept-page">
      <div className="concept-header">
        <h1>Optional Chaining</h1>

        <p>
          Optional chaining allows us to safely access nested properties
          without getting an error when a value does not exist.
        </p>
      </div>

      <div className="concept-card">
        <div className="card-section">
          <h2>Example</h2>

          <pre>
            <code>{`const user = {
  name: "Arvind",
  address: {
    city: "Delhi",
  },
};

user?.name;
user?.address?.city;
user?.contact?.phone;`}</code>
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