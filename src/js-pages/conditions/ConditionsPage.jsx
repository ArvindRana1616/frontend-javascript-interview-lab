import "./conditions.css";

export default function ConditionsPage() {
  // if
  const age = 25;

  // if / else
  const isLoggedIn = true;

  // if / else if / else
  const marks = 78;

  // Multiple conditions
  const userAge = 25;
  const hasId = true;

  // Nested condition
  const user = {
    isLoggedIn: true,
    isAdmin: true,
  };

  // Ternary
  const score = 65;

  // Switch
  const day = "Monday";

  let dayMessage;

  switch (day) {
    case "Monday":
      dayMessage = "Start of the week";
      break;

    case "Friday":
      dayMessage = "Weekend is near";
      break;

    case "Sunday":
      dayMessage = "It's a holiday";
      break;

    default:
      dayMessage = "Regular day";
  }

  // if
  let ageMessage = "";

  if (age >= 18) {
    ageMessage = "You are an adult";
  }

  // if / else
  let loginMessage = "";

  if (isLoggedIn) {
    loginMessage = "Welcome back!";
  } else {
    loginMessage = "Please login first";
  }

  // if / else if / else
  let grade = "";

  if (marks >= 90) {
    grade = "A+";
  } else if (marks >= 80) {
    grade = "A";
  } else if (marks >= 70) {
    grade = "B";
  } else if (marks >= 60) {
    grade = "C";
  } else {
    grade = "Fail";
  }

  // Multiple conditions
  let entryMessage = "";

  if (userAge >= 18 && hasId) {
    entryMessage = "Entry allowed";
  } else {
    entryMessage = "Entry not allowed";
  }

  // Nested condition
  let adminMessage = "";

  if (user.isLoggedIn) {
    if (user.isAdmin) {
      adminMessage = "Welcome Admin";
    } else {
      adminMessage = "Welcome User";
    }
  } else {
    adminMessage = "Please login";
  }

  // Ternary
  const result = score >= 50 ? "Pass" : "Fail";

  return (
    <div className="conditions-page">

      {/* Page Header */}
      <header className="page-header">
        <span className="page-badge">JavaScript Basics</span>

        <h1>JavaScript Conditions</h1>

        <p>
          Conditions allow JavaScript to make decisions based on
          whether an expression is true or false.
        </p>
      </header>

      {/* Conditions Grid */}
      <div className="conditions-grid">

        {/* 01 if */}
        <section className="condition-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">IF</span>
              <h2>if Statement</h2>
            </div>

            <span className="card-number">01</span>
          </div>

          <p className="card-description">
            The <strong>if</strong> statement runs code when a condition
            is true.
          </p>

          <div className="code-box">
            <div className="code-header">
              <span>JavaScript</span>
            </div>

            <pre>
              <code>{`const age = 25;

if (age >= 18) {
  console.log("You are an adult");
}`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>
            <strong>{ageMessage}</strong>
          </div>
        </section>

        {/* 02 if else */}
        <section className="condition-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">IF / ELSE</span>
              <h2>if / else</h2>
            </div>

            <span className="card-number">02</span>
          </div>

          <p className="card-description">
            Use <strong>else</strong> when you want another block to run
            if the condition is false.
          </p>

          <div className="code-box">
            <div className="code-header">
              <span>JavaScript</span>
            </div>

            <pre>
              <code>{`const isLoggedIn = true;

if (isLoggedIn) {
  console.log("Welcome back!");
} else {
  console.log("Please login first");
}`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>
            <strong>{loginMessage}</strong>
          </div>
        </section>

        {/* 03 else if */}
        <section className="condition-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">ELSE IF</span>
              <h2>if / else if / else</h2>
            </div>

            <span className="card-number">03</span>
          </div>

          <p className="card-description">
            Use <strong>else if</strong> when you need to check multiple
            conditions.
          </p>

          <div className="code-box">
            <div className="code-header">
              <span>JavaScript</span>
            </div>

            <pre>
              <code>{`const marks = 78;

if (marks >= 90) {
  grade = "A+";
} else if (marks >= 80) {
  grade = "A";
} else if (marks >= 70) {
  grade = "B";
} else {
  grade = "Fail";
}`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>
            <strong>{grade}</strong>
          </div>
        </section>

        {/* 04 Multiple Conditions */}
        <section className="condition-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">LOGICAL</span>
              <h2>Multiple Conditions</h2>
            </div>

            <span className="card-number">04</span>
          </div>

          <p className="card-description">
            Multiple conditions can be combined using logical operators
            like <strong>&&</strong> and <strong>||</strong>.
          </p>

          <div className="code-box">
            <div className="code-header">
              <span>JavaScript</span>
            </div>

            <pre>
              <code>{`const age = 25;
const hasId = true;

if (age >= 18 && hasId) {
  console.log("Entry allowed");
} else {
  console.log("Entry not allowed");
}`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>
            <strong>{entryMessage}</strong>
          </div>
        </section>

        {/* 05 Nested Condition */}
        <section className="condition-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">NESTED</span>
              <h2>Nested Conditions</h2>
            </div>

            <span className="card-number">05</span>
          </div>

          <p className="card-description">
            A condition can be placed inside another condition.
          </p>

          <div className="code-box">
            <div className="code-header">
              <span>JavaScript</span>
            </div>

            <pre>
              <code>{`if (user.isLoggedIn) {
  if (user.isAdmin) {
    console.log("Welcome Admin");
  } else {
    console.log("Welcome User");
  }
} else {
  console.log("Please login");
}`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>
            <strong>{adminMessage}</strong>
          </div>
        </section>

        {/* 06 Ternary */}
        <section className="condition-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">TERNARY</span>
              <h2>Ternary Condition</h2>
            </div>

            <span className="card-number">06</span>
          </div>

          <p className="card-description">
            The ternary operator is useful for simple true/false
            conditions.
          </p>

          <div className="code-box">
            <div className="code-header">
              <span>JavaScript</span>
            </div>

            <pre>
              <code>{`const score = 65;

const result =
  score >= 50 ? "Pass" : "Fail";

console.log(result);`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>
            <strong>{result}</strong>
          </div>
        </section>

        {/* 07 Switch */}
        <section className="condition-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">SWITCH</span>
              <h2>Switch Statement</h2>
            </div>

            <span className="card-number">07</span>
          </div>

          <p className="card-description">
            The <strong>switch</strong> statement is useful when one value
            needs to be compared against multiple possible values.
          </p>

          <div className="code-box">
            <div className="code-header">
              <span>JavaScript</span>
            </div>

            <pre>
              <code>{`const day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;

  case "Friday":
    console.log("Weekend is near");
    break;

  default:
    console.log("Regular day");
}`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>
            <strong>{dayMessage}</strong>
          </div>
        </section>

      </div>
    </div>
  );
}