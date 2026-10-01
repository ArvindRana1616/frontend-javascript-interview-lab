
import "./variables.css";

export default function VariablesPage() {
  // LET
  let name = "Arvind";
  name = "Rahul";

  // CONST
  const age = 38;

  // VAR
  var city = "Delhi";
  city = "Noida";

  return (
    <div className="variables-page">
      {/* Page Header */}
      <header className="page-header">
        <span className="page-badge">JavaScript Basics</span>

        <h1>JavaScript Variables</h1>

        <p>
          Variables are used to store data in JavaScript.
          JavaScript provides three ways to declare variables:
          <strong> let</strong>, <strong>const</strong>, and <strong>var</strong>.
        </p>
      </header>

      {/* Variable Cards */}
      <div className="variables-grid">

        {/* LET */}
        <section className="variable-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">LET</span>
              <h2>let</h2>
            </div>

            <span className="card-number">01</span>
          </div>

          <p className="card-description">
            Use <strong>let</strong> when the value of a variable can
            be changed later.
          </p>

          <div className="code-box">
            <div className="code-header">
              <span>JavaScript</span>
            </div>

            <pre>
              <code>{`let name = "Arvind";
name = "Rahul";

console.log(name);`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>
            <strong>{name}</strong>
          </div>
        </section>

        {/* CONST */}
        <section className="variable-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">CONST</span>
              <h2>const</h2>
            </div>

            <span className="card-number">02</span>
          </div>

          <p className="card-description">
            Use <strong>const</strong> when the variable should not
            be reassigned.
          </p>

          <div className="code-box">
            <div className="code-header">
              <span>JavaScript</span>
            </div>

            <pre>
              <code>{`const age = 38;

console.log(age);`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>
            <strong>{age}</strong>
          </div>
        </section>

        {/* VAR */}
        <section className="variable-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">VAR</span>
              <h2>var</h2>
            </div>

            <span className="card-number">03</span>
          </div>

          <p className="card-description">
            <strong>var</strong> is the older way of declaring
            variables in JavaScript.
          </p>

          <div className="code-box">
            <div className="code-header">
              <span>JavaScript</span>
            </div>

            <pre>
              <code>{`var city = "Delhi";
city = "Noida";

console.log(city);`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>
            <strong>{city}</strong>
          </div>
        </section>

      </div>
    </div>
  );
}