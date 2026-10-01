import "./functions.css";

export default function FunctionsPage() {
  // 01 Function Declaration
  function greet() {
    return "Hello Arvind";
  }

  // 02 Parameters & Arguments
  function addNumbers(a, b) {
    return a + b;
  }

  const additionResult = addNumbers(10, 20);

  // 03 Return Value
  function multiply(a, b) {
    return a * b;
  }

  const multiplicationResult = multiply(5, 4);

  // 04 Default Parameter
  function welcomeUser(name = "Guest") {
    return `Welcome, ${name}`;
  }

  const defaultUser = welcomeUser();
  const loggedInUser = welcomeUser("Arvind");

  // 05 Function Expression
  const subtract = function (a, b) {
    return a - b;
  };

  const subtractionResult = subtract(20, 8);

  // 06 Arrow Function
  const square = (number) => {
    return number * number;
  };

  const squareResult = square(6);

  // 07 Short Arrow Function
  const double = (number) => number * 2;

  const doubleResult = double(10);

  // 08 Callback Function
  function calculate(a, b, operation) {
    return operation(a, b);
  }

  const callbackResult = calculate(10, 5, (x, y) => x + y);

  return (
    <div className="functions-page">

      {/* Page Header */}
      <header className="page-header">
        <span className="page-badge">JavaScript Basics</span>

        <h1>JavaScript Functions</h1>

        <p>
          Functions are reusable blocks of code that perform a specific
          task. They are one of the most important concepts in JavaScript
          and frontend development.
        </p>
      </header>

      {/* Functions Grid */}
      <div className="functions-grid">

        {/* 01 Function Declaration */}
        <section className="function-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">FUNCTION</span>
              <h2>Function Declaration</h2>
            </div>

            <span className="card-number">01</span>
          </div>

          <p className="card-description">
            A function declaration defines a reusable block of code.
          </p>

          <div className="code-box">
            <div className="code-header">
              <span>JavaScript</span>
            </div>

            <pre>
              <code>{`function greet() {
  return "Hello Arvind";
}

console.log(greet());`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>
            <strong>{greet()}</strong>
          </div>
        </section>

        {/* 02 Parameters & Arguments */}
        <section className="function-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">PARAMETERS</span>
              <h2>Parameters & Arguments</h2>
            </div>

            <span className="card-number">02</span>
          </div>

          <p className="card-description">
            Parameters receive values inside a function. The actual values
            passed to the function are called arguments.
          </p>

          <div className="code-box">
            <div className="code-header">
              <span>JavaScript</span>
            </div>

            <pre>
              <code>{`function addNumbers(a, b) {
  return a + b;
}

addNumbers(10, 20);`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>
            <strong>{additionResult}</strong>
          </div>
        </section>

        {/* 03 Return */}
        <section className="function-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">RETURN</span>
              <h2>Return Value</h2>
            </div>

            <span className="card-number">03</span>
          </div>

          <p className="card-description">
            The <strong>return</strong> statement sends a value back from
            the function.
          </p>

          <div className="code-box">
            <div className="code-header">
              <span>JavaScript</span>
            </div>

            <pre>
              <code>{`function multiply(a, b) {
  return a * b;
}

const result = multiply(5, 4);

console.log(result);`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>
            <strong>{multiplicationResult}</strong>
          </div>
        </section>

        {/* 04 Default Parameter */}
        <section className="function-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">DEFAULT</span>
              <h2>Default Parameters</h2>
            </div>

            <span className="card-number">04</span>
          </div>

          <p className="card-description">
            A default parameter provides a fallback value when no argument
            is passed.
          </p>

          <div className="code-box">
            <div className="code-header">
              <span>JavaScript</span>
            </div>

            <pre>
              <code>{`function welcomeUser(name = "Guest") {
  return \`Welcome, \${name}\`;
}

welcomeUser();
welcomeUser("Arvind");`}</code>
            </pre>
          </div>

          <div className="output-box output-column">
            <span>Output</span>
            <strong>{defaultUser}</strong>
            <strong>{loggedInUser}</strong>
          </div>
        </section>

        {/* 05 Function Expression */}
        <section className="function-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">EXPRESSION</span>
              <h2>Function Expression</h2>
            </div>

            <span className="card-number">05</span>
          </div>

          <p className="card-description">
            A function can be stored inside a variable. This is called a
            function expression.
          </p>

          <div className="code-box">
            <div className="code-header">
              <span>JavaScript</span>
            </div>

            <pre>
              <code>{`const subtract = function (a, b) {
  return a - b;
};

subtract(20, 8);`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>
            <strong>{subtractionResult}</strong>
          </div>
        </section>

        {/* 06 Arrow Function */}
        <section className="function-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">ARROW</span>
              <h2>Arrow Function</h2>
            </div>

            <span className="card-number">06</span>
          </div>

          <p className="card-description">
            Arrow functions provide a shorter syntax for writing functions.
          </p>

          <div className="code-box">
            <div className="code-header">
              <span>JavaScript</span>
            </div>

            <pre>
              <code>{`const square = (number) => {
  return number * number;
};

square(6);`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>
            <strong>{squareResult}</strong>
          </div>
        </section>

        {/* 07 Short Arrow Function */}
        <section className="function-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">SHORT ARROW</span>
              <h2>Implicit Return</h2>
            </div>

            <span className="card-number">07</span>
          </div>

          <p className="card-description">
            When an arrow function has only one expression, the return
            statement can be written implicitly.
          </p>

          <div className="code-box">
            <div className="code-header">
              <span>JavaScript</span>
            </div>

            <pre>
              <code>{`const double = (number) => number * 2;

console.log(double(10));`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>
            <strong>{doubleResult}</strong>
          </div>
        </section>

        {/* 08 Callback */}
        <section className="function-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">CALLBACK</span>
              <h2>Callback Function</h2>
            </div>

            <span className="card-number">08</span>
          </div>

          <p className="card-description">
            A callback is a function passed as an argument to another
            function.
          </p>

          <div className="code-box">
            <div className="code-header">
              <span>JavaScript</span>
            </div>

            <pre>
              <code>{`function calculate(a, b, operation) {
  return operation(a, b);
}

calculate(10, 5, (x, y) => x + y);`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>
            <strong>{callbackResult}</strong>
          </div>
        </section>

      </div>
    </div>
  );
}