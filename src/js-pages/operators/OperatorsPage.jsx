import "./operators.css";

export default function OperatorsPage() {
  // Arithmetic
  const a = 10;
  const b = 3;

  const addition = a + b;
  const subtraction = a - b;
  const multiplication = a * b;
  const division = a / b;
  const remainder = a % b;
  const power = a ** b;

  // Assignment
  let score = 10;
  score += 5;

  // Comparison
  const looseEqual = 10 == "10";
  const strictEqual = 10 === "10";
  const greaterThan = 10 > 5;
  const lessThanOrEqual = 10 <= 10;

  // Logical
  const age = 25;
  const hasId = true;

  const canEnter = age >= 18 && hasId;
  const isAllowed = age < 18 || hasId;
  const isNotAllowed = !hasId;

  // Increment / Decrement
  let count = 5;
  count++;
  const incrementResult = count;

  count--;
  const decrementResult = count;

  // Ternary
  const userAge = 20;
  const status = userAge >= 18 ? "Adult" : "Minor";

  // Nullish Coalescing
  const username = null;
  const displayName = username ?? "Guest";

  // Optional Chaining
  const user = {
    name: "Arvind",
  };

  const userName = user.name;
  const userCity = user.address?.city;

  return (
    <div className="operators-page">

      {/* Page Header */}
      <header className="page-header">
        <span className="page-badge">JavaScript Basics</span>

        <h1>JavaScript Operators</h1>

        <p>
          Operators are symbols used to perform calculations, assign values,
          compare values, and work with conditions in JavaScript.
        </p>
      </header>

      {/* Operators Grid */}
      <div className="operators-grid">

        {/* 01 Arithmetic */}
        <section className="operator-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">ARITHMETIC</span>
              <h2>Arithmetic Operators</h2>
            </div>

            <span className="card-number">01</span>
          </div>

          <p className="card-description">
            Arithmetic operators are used to perform mathematical calculations.
          </p>

          <div className="operator-list">
            <span>+</span>
            <span>-</span>
            <span>*</span>
            <span>/</span>
            <span>%</span>
            <span>**</span>
          </div>

          <div className="code-box">
            <div className="code-header">
              <span>JavaScript</span>
            </div>

            <pre>
              <code>{`const a = 10;
const b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>

            <strong>
              {addition}, {subtraction}, {multiplication},{" "}
              {division.toFixed(2)}, {remainder}, {power}
            </strong>
          </div>
        </section>

        {/* 02 Assignment */}
        <section className="operator-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">ASSIGNMENT</span>
              <h2>Assignment Operators</h2>
            </div>

            <span className="card-number">02</span>
          </div>

          <p className="card-description">
            Assignment operators are used to assign or update values.
          </p>

          <div className="operator-list">
            <span>=</span>
            <span>+=</span>
            <span>-=</span>
            <span>*=</span>
            <span>/=</span>
            <span>%=</span>
          </div>

          <div className="code-box">
            <div className="code-header">
              <span>JavaScript</span>
            </div>

            <pre>
              <code>{`let score = 10;

score += 5;

console.log(score);`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>
            <strong>{score}</strong>
          </div>
        </section>

        {/* 03 Comparison */}
        <section className="operator-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">COMPARISON</span>
              <h2>Comparison Operators</h2>
            </div>

            <span className="card-number">03</span>
          </div>

          <p className="card-description">
            Comparison operators compare two values and return true or false.
          </p>

          <div className="operator-list">
            <span>==</span>
            <span>===</span>
            <span>!=</span>
            <span>!==</span>
            <span>&gt;</span>
            <span>&lt;</span>
            <span>&gt;=</span>
            <span>&lt;=</span>
          </div>

          <div className="code-box">
            <div className="code-header">
              <span>JavaScript</span>
            </div>

            <pre>
              <code>{`console.log(10 == "10");
console.log(10 === "10");
console.log(10 > 5);
console.log(10 <= 10);`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>

            <strong>
              {String(looseEqual)}, {String(strictEqual)},{" "}
              {String(greaterThan)}, {String(lessThanOrEqual)}
            </strong>
          </div>
        </section>

        {/* 04 Logical */}
        <section className="operator-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">LOGICAL</span>
              <h2>Logical Operators</h2>
            </div>

            <span className="card-number">04</span>
          </div>

          <p className="card-description">
            Logical operators are used to combine or reverse conditions.
          </p>

          <div className="operator-list">
            <span>&&</span>
            <span>||</span>
            <span>!</span>
          </div>

          <div className="code-box">
            <div className="code-header">
              <span>JavaScript</span>
            </div>

            <pre>
              <code>{`const age = 25;
const hasId = true;

console.log(age >= 18 && hasId);
console.log(age < 18 || hasId);
console.log(!hasId);`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>

            <strong>
              {String(canEnter)}, {String(isAllowed)},{" "}
              {String(isNotAllowed)}
            </strong>
          </div>
        </section>

        {/* 05 Increment / Decrement */}
        <section className="operator-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">INCREMENT</span>
              <h2>Increment / Decrement</h2>
            </div>

            <span className="card-number">05</span>
          </div>

          <p className="card-description">
            These operators increase or decrease a value by one.
          </p>

          <div className="operator-list">
            <span>++</span>
            <span>--</span>
          </div>

          <div className="code-box">
            <div className="code-header">
              <span>JavaScript</span>
            </div>

            <pre>
              <code>{`let count = 5;

count++;
console.log(count);

count--;
console.log(count);`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>

            <strong>
              {incrementResult}, {decrementResult}
            </strong>
          </div>
        </section>

        {/* 06 Ternary */}
        <section className="operator-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">TERNARY</span>
              <h2>Ternary Operator</h2>
            </div>

            <span className="card-number">06</span>
          </div>

          <p className="card-description">
            The ternary operator is a short way to write a simple condition.
          </p>

          <div className="operator-list">
            <span>?</span>
            <span>:</span>
          </div>

          <div className="code-box">
            <div className="code-header">
              <span>JavaScript</span>
            </div>

            <pre>
              <code>{`const age = 20;

const status =
  age >= 18 ? "Adult" : "Minor";

console.log(status);`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>
            <strong>{status}</strong>
          </div>
        </section>

        {/* 07 Nullish */}
        <section className="operator-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">NULLISH</span>
              <h2>Nullish Coalescing</h2>
            </div>

            <span className="card-number">07</span>
          </div>

          <p className="card-description">
            The nullish coalescing operator provides a fallback when the
            value is null or undefined.
          </p>

          <div className="operator-list">
            <span>??</span>
          </div>

          <div className="code-box">
            <div className="code-header">
              <span>JavaScript</span>
            </div>

            <pre>
              <code>{`const username = null;

const name =
  username ?? "Guest";

console.log(name);`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>
            <strong>{displayName}</strong>
          </div>
        </section>

        {/* 08 Optional Chaining */}
        <section className="operator-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">OPTIONAL</span>
              <h2>Optional Chaining</h2>
            </div>

            <span className="card-number">08</span>
          </div>

          <p className="card-description">
            Optional chaining safely accesses nested properties without
            throwing an error when a property does not exist.
          </p>

          <div className="operator-list">
            <span>?.</span>
          </div>

          <div className="code-box">
            <div className="code-header">
              <span>JavaScript</span>
            </div>

            <pre>
              <code>{`const user = {
  name: "Arvind"
};

console.log(user.name);
console.log(user.address?.city);`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>

            <strong>
              {userName}, {String(userCity)}
            </strong>
          </div>
        </section>

      </div>
    </div>
  );
}