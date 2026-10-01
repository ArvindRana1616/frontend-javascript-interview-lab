import "./template-literals.css";

export default function TemplateLiteralsPage() {
  // 01 Basic Template Literal
  const name = "Arvind";
  const greeting = `Hello ${name}`;

  // 02 Multiple Variables
  const firstName = "Arvind";
  const role = "Frontend Developer";

  const introduction = `My name is ${firstName} and I am a ${role}.`;

  // 03 Expressions
  const price = 500;
  const quantity = 3;

  const totalPrice = `Total: ₹${price * quantity}`;

  // 04 Function Call
  function getUserName() {
    return "Arvind";
  }

  const functionMessage = `Welcome, ${getUserName()}!`;

  // 05 Ternary with Template Literal
  const isLoggedIn = true;

  const loginMessage = `Status: ${
    isLoggedIn ? "Logged In" : "Logged Out"
  }`;

  // 06 Multi-line String
  const address = `Arvind Rana
Delhi, India
Frontend Developer`;

  // 07 Object Properties
  const user = {
    name: "Arvind",
    city: "Delhi",
    role: "Frontend Developer",
  };

  const userInfo = `${user.name} — ${user.role} — ${user.city}`;

  // 08 Dynamic Class Name
  const isActive = true;

  const buttonClass = `btn ${isActive ? "active" : "inactive"}`;

  // 09 Dynamic Message
  const cartItems = 4;

  const cartMessage = `You have ${cartItems} ${
    cartItems === 1 ? "item" : "items"
  } in your cart.`;

  // 10 Template Literal with Array Method
  const skills = ["HTML", "CSS", "JavaScript", "React"];

  const skillsMessage = `Skills: ${skills.join(", ")}`;

  return (
    <div className="template-literals-page">

      <header className="page-header">
        <span className="page-badge">Modern JavaScript</span>

        <h1>JavaScript Template Literals</h1>

        <p>
          Template literals use backticks to create strings and allow
          us to insert variables, expressions, function results and
          dynamic values directly inside a string.
        </p>
      </header>

      <div className="template-literals-grid">

        {/* 01 Basic Template Literal */}
        <article className="template-literals-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">Syntax</span>
              <h2>Basic Template Literal</h2>
            </div>

            <span className="card-number">01</span>
          </div>

          <p className="card-description">
            Template literals use backticks instead of single or
            double quotes.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
              <code>{`const name = "Arvind";

const greeting = \`Hello \${name}\`;`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>
            <strong>{greeting}</strong>
          </div>
        </article>

        {/* 02 Multiple Variables */}
        <article className="template-literals-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">Variables</span>
              <h2>Multiple Variables</h2>
            </div>

            <span className="card-number">02</span>
          </div>

          <p className="card-description">
            Multiple variables can be inserted into the same
            template literal.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
              <code>{`const firstName = "Arvind";
const role = "Frontend Developer";

const introduction =
  \`My name is \${firstName}
  and I am a \${role}.\`;`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>
            <strong>{introduction}</strong>
          </div>
        </article>

        {/* 03 Expressions */}
        <article className="template-literals-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">Expression</span>
              <h2>Expressions Inside</h2>
            </div>

            <span className="card-number">03</span>
          </div>

          <p className="card-description">
            JavaScript expressions can be written directly inside
            <strong> ${"{}"} </strong> and their result is inserted
            into the string.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
              <code>{`const price = 500;
const quantity = 3;

const totalPrice =
  \`Total: ₹\${price * quantity}\`;`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>
            <strong>{totalPrice}</strong>
          </div>
        </article>

        {/* 04 Function Call */}
        <article className="template-literals-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">Function</span>
              <h2>Function Call</h2>
            </div>

            <span className="card-number">04</span>
          </div>

          <p className="card-description">
            A function can be called directly inside a template
            literal.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
              <code>{`function getUserName() {
  return "Arvind";
}

const message =
  \`Welcome, \${getUserName()}!\`;`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>
            <strong>{functionMessage}</strong>
          </div>
        </article>

        {/* 05 Ternary */}
        <article className="template-literals-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">Ternary</span>
              <h2>Ternary Expression</h2>
            </div>

            <span className="card-number">05</span>
          </div>

          <p className="card-description">
            A ternary operator can be used inside a template literal
            to create dynamic text.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
              <code>{`const isLoggedIn = true;

const message =
  \`Status: \${
    isLoggedIn
      ? "Logged In"
      : "Logged Out"
  }\`;`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>
            <strong>{loginMessage}</strong>
          </div>
        </article>

        {/* 06 Multi-line */}
        <article className="template-literals-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">Multi-line</span>
              <h2>Multi-line String</h2>
            </div>

            <span className="card-number">06</span>
          </div>

          <p className="card-description">
            Template literals allow strings to span multiple lines
            without using <strong>\n</strong>.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
              <code>{`const address = \`Arvind Rana
Delhi, India
Frontend Developer\`;`}</code>
            </pre>
          </div>

          <div className="output-box output-column">
            <span>Output</span>

            <strong>
              {address.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </strong>
          </div>
        </article>

        {/* 07 Object Properties */}
        <article className="template-literals-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">Object</span>
              <h2>Object Properties</h2>
            </div>

            <span className="card-number">07</span>
          </div>

          <p className="card-description">
            Object properties can be accessed directly inside
            template literals.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
              <code>{`const user = {
  name: "Arvind",
  city: "Delhi",
  role: "Frontend Developer"
};

const userInfo =
  \`\${user.name} —
  \${user.role} —
  \${user.city}\`;`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>
            <strong>{userInfo}</strong>
          </div>
        </article>

        {/* 08 Dynamic Class */}
        <article className="template-literals-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">Dynamic</span>
              <h2>Dynamic Class Name</h2>
            </div>

            <span className="card-number">08</span>
          </div>

          <p className="card-description">
            Template literals are commonly used in frontend
            development to create dynamic class names.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript / React</div>

            <pre>
              <code>{`const isActive = true;

const buttonClass =
  \`btn \${isActive
    ? "active"
    : "inactive"}\`;`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>
            <strong>{buttonClass}</strong>
          </div>
        </article>

        {/* 09 Dynamic Message */}
        <article className="template-literals-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">Dynamic UI</span>
              <h2>Dynamic Message</h2>
            </div>

            <span className="card-number">09</span>
          </div>

          <p className="card-description">
            We can combine variables and conditions to create
            dynamic user-facing messages.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
              <code>{`const cartItems = 4;

const message =
  \`You have \${cartItems}
  \${cartItems === 1
    ? "item"
    : "items"} in your cart.\`;`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>
            <strong>{cartMessage}</strong>
          </div>
        </article>

        {/* 10 Array Method */}
        <article className="template-literals-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">Array</span>
              <h2>Template Literal with Array</h2>
            </div>

            <span className="card-number">10</span>
          </div>

          <p className="card-description">
            Array methods can also be used inside template literals
            to generate dynamic strings.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
              <code>{`const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React"
];

const message =
  \`Skills: \${skills.join(", ")}\`;`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>
            <strong>{skillsMessage}</strong>
          </div>
        </article>

      </div>
    </div>
  );
}