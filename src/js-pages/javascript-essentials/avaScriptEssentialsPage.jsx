"use client";

import { useState } from "react";
import "./javascript-essentials.css";

export default function JavaScriptEssentialsPage() {
  const [outputs, setOutputs] = useState({
    shorthand: "",
    computed: "",
    forOf: "",
    set: "",
    map: "",
  });

  function runShorthand() {
    const name = "Arvind";
    const city = "Delhi";

    const user = {
      name,
      city,
    };

    setOutputs((prev) => ({
      ...prev,
      shorthand: `Name: ${user.name}\nCity: ${user.city}`,
    }));
  }

  function runComputed() {
    const property = "email";

    const user = {
      name: "Arvind",
      [property]: "arvind@example.com",
    };

    setOutputs((prev) => ({
      ...prev,
      computed: `Name: ${user.name}\nEmail: ${user.email}`,
    }));
  }

  function runForOf() {
    const skills = ["HTML", "CSS", "JavaScript", "React"];

    let result = "";

    for (const skill of skills) {
      result += `${skill}\n`;
    }

    setOutputs((prev) => ({
      ...prev,
      forOf: result,
    }));
  }

  function runSet() {
    const numbers = [10, 20, 20, 30, 30, 40];

    const uniqueNumbers = new Set(numbers);

    setOutputs((prev) => ({
      ...prev,
      set: `Original: ${numbers.join(", ")}\nUnique: ${[
        ...uniqueNumbers,
      ].join(", ")}`,
    }));
  }

  function runMap() {
    const userMap = new Map();

    userMap.set("name", "Arvind");
    userMap.set("role", "Frontend Developer");

    setOutputs((prev) => ({
      ...prev,
      map: `Name: ${userMap.get("name")}\nRole: ${userMap.get("role")}`,
    }));
  }

  return (
    <div className="concept-page">
      <div className="concept-header">
        <h1>JavaScript Essentials</h1>

        <p>
          Important JavaScript features commonly used in frontend development
          and interviews.
        </p>
      </div>

      {/* Object Property Shorthand */}
      <section className="essential-card">
        <h2>1. Object Property Shorthand</h2>

        <p>
          When the variable name and object property name are the same,
          we can write the property only once.
        </p>

        <pre>
          <code>{`const name = "Arvind";
const city = "Delhi";

const user = {
  name,
  city,
};`}</code>
        </pre>

        <button onClick={runShorthand}>Run Code</button>

        <div className="output-box">
          <strong>Output:</strong>
          <pre>
            {outputs.shorthand || "Click Run Code to see the output."}
          </pre>
        </div>
      </section>

      {/* Computed Property Names */}
      <section className="essential-card">
        <h2>2. Computed Property Names</h2>

        <p>
          Computed property names allow us to create an object property
          dynamically using a variable.
        </p>

        <pre>
          <code>{`const property = "email";

const user = {
  name: "Arvind",
  [property]: "arvind@example.com",
};`}</code>
        </pre>

        <button onClick={runComputed}>Run Code</button>

        <div className="output-box">
          <strong>Output:</strong>
          <pre>
            {outputs.computed || "Click Run Code to see the output."}
          </pre>
        </div>
      </section>

      {/* for...of */}
      <section className="essential-card">
        <h2>3. for...of</h2>

        <p>
          The for...of loop is used to directly get values from an iterable
          such as an array.
        </p>

        <pre>
          <code>{`const skills = ["HTML", "CSS", "JavaScript", "React"];

for (const skill of skills) {
  console.log(skill);
}`}</code>
        </pre>

        <button onClick={runForOf}>Run Code</button>

        <div className="output-box">
          <strong>Output:</strong>
          <pre>
            {outputs.forOf || "Click Run Code to see the output."}
          </pre>
        </div>
      </section>

      {/* Set */}
      <section className="essential-card">
        <h2>4. Set</h2>

        <p>
          A Set stores unique values and automatically removes duplicates.
        </p>

        <pre>
          <code>{`const numbers = [10, 20, 20, 30, 30, 40];

const uniqueNumbers = new Set(numbers);`}</code>
        </pre>

        <button onClick={runSet}>Run Code</button>

        <div className="output-box">
          <strong>Output:</strong>
          <pre>
            {outputs.set || "Click Run Code to see the output."}
          </pre>
        </div>
      </section>

      {/* Map */}
      <section className="essential-card">
        <h2>5. Map</h2>

        <p>
          A Map stores data in key-value pairs and allows keys of different
          types.
        </p>

        <pre>
          <code>{`const userMap = new Map();

userMap.set("name", "Arvind");
userMap.set("role", "Frontend Developer");`}</code>
        </pre>

        <button onClick={runMap}>Run Code</button>

        <div className="output-box">
          <strong>Output:</strong>
          <pre>
            {outputs.map || "Click Run Code to see the output."}
          </pre>
        </div>
      </section>
    </div>
  );
}