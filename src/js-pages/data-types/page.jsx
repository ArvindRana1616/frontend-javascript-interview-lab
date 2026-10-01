import "./data-types.css";

export default function DataTypesPage() {
  // JavaScript Data
  const userName = "Arvind";
  const age = 38;
  const isDeveloper = true;

  let address;
  const emptyValue = null;

  const bigNumber = 12345678901234567890n;

  const user = {
    name: "Arvind",
    city: "Delhi",
  };

  return (
    <div className="data-types-page">

      {/* Page Header */}
      <header className="page-header">
        <span className="page-badge">JavaScript Basics</span>

        <h1>JavaScript Data Types</h1>

        <p>
          Data types define what kind of value a variable can store in
          JavaScript. JavaScript has primitive and non-primitive data types.
        </p>
      </header>

      {/* Data Type Cards */}
      <div className="data-types-grid">

        {/* STRING */}
        <section className="data-type-card">
          <div className="card-header">
            <div>
              <span className="type-badge">PRIMITIVE</span>
              <h2>String</h2>
            </div>

            <span className="card-number">01</span>
          </div>

          <p className="card-description">
            A string is used to store text or a sequence of characters.
          </p>

          <div className="code-box">
            <div className="code-header">
              <span>JavaScript</span>
            </div>

            <pre>
              <code>{`const userName = "Arvind";

console.log(userName);`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>
            <strong>{userName}</strong>
          </div>
        </section>

        {/* NUMBER */}
        <section className="data-type-card">
          <div className="card-header">
            <div>
              <span className="type-badge">PRIMITIVE</span>
              <h2>Number</h2>
            </div>

            <span className="card-number">02</span>
          </div>

          <p className="card-description">
            Number is used for both integer and decimal values.
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

        {/* BOOLEAN */}
        <section className="data-type-card">
          <div className="card-header">
            <div>
              <span className="type-badge">PRIMITIVE</span>
              <h2>Boolean</h2>
            </div>

            <span className="card-number">03</span>
          </div>

          <p className="card-description">
            Boolean represents one of two values: true or false.
          </p>

          <div className="code-box">
            <div className="code-header">
              <span>JavaScript</span>
            </div>

            <pre>
              <code>{`const isDeveloper = true;

console.log(isDeveloper);`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>
            <strong>{String(isDeveloper)}</strong>
          </div>
        </section>

        {/* UNDEFINED */}
        <section className="data-type-card">
          <div className="card-header">
            <div>
              <span className="type-badge">PRIMITIVE</span>
              <h2>Undefined</h2>
            </div>

            <span className="card-number">04</span>
          </div>

          <p className="card-description">
            A variable is undefined when it has been declared but has
            not been assigned a value.
          </p>

          <div className="code-box">
            <div className="code-header">
              <span>JavaScript</span>
            </div>

            <pre>
              <code>{`let address;

console.log(address);`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>
            <strong>{String(address)}</strong>
          </div>
        </section>

        {/* NULL */}
        <section className="data-type-card">
          <div className="card-header">
            <div>
              <span className="type-badge">PRIMITIVE</span>
              <h2>Null</h2>
            </div>

            <span className="card-number">05</span>
          </div>

          <p className="card-description">
            Null represents an intentional empty or missing value.
          </p>

          <div className="code-box">
            <div className="code-header">
              <span>JavaScript</span>
            </div>

            <pre>
              <code>{`const emptyValue = null;

console.log(emptyValue);`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>
            <strong>{String(emptyValue)}</strong>
          </div>
        </section>

        {/* BIGINT */}
        <section className="data-type-card">
          <div className="card-header">
            <div>
              <span className="type-badge">PRIMITIVE</span>
              <h2>BigInt</h2>
            </div>

            <span className="card-number">06</span>
          </div>

          <p className="card-description">
            BigInt is used to work with very large integer values.
          </p>

          <div className="code-box">
            <div className="code-header">
              <span>JavaScript</span>
            </div>

            <pre>
              <code>{`const bigNumber = 12345678901234567890n;

console.log(bigNumber);`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>
            <strong>{String(bigNumber)}</strong>
          </div>
        </section>

        {/* SYMBOL */}
        <section className="data-type-card">
          <div className="card-header">
            <div>
              <span className="type-badge">PRIMITIVE</span>
              <h2>Symbol</h2>
            </div>

            <span className="card-number">07</span>
          </div>

          <p className="card-description">
            Symbol creates a unique value that can be used as an
            object property key.
          </p>

          <div className="code-box">
            <div className="code-header">
              <span>JavaScript</span>
            </div>

            <pre>
              <code>{`const id = Symbol("id");

console.log(id);`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>
            <strong>Symbol(id)</strong>
          </div>
        </section>

        {/* OBJECT */}
        <section className="data-type-card">
          <div className="card-header">
            <div>
              <span className="type-badge non-primitive">
                NON-PRIMITIVE
              </span>

              <h2>Object</h2>
            </div>

            <span className="card-number">08</span>
          </div>

          <p className="card-description">
            An object stores data in key-value pairs.
          </p>

          <div className="code-box">
            <div className="code-header">
              <span>JavaScript</span>
            </div>

            <pre>
              <code>{`const user = {
  name: "Arvind",
  city: "Delhi"
};

console.log(user.name);`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>
            <strong>{user.name}</strong>
          </div>
        </section>

      </div>
    </div>
  );
}