import "./destructuring.css";

export default function DestructuringPage() {
  // 01 Array Destructuring
  const colors = ["Red", "Green", "Blue"];

  const [firstColor, secondColor, thirdColor] = colors;

  // 02 Skip Array Items
  const numbers = [10, 20, 30];

  const [firstNumber, , thirdNumber] = numbers;

  // 03 Default Values
  const skills = ["HTML"];

  const [primarySkill, secondarySkill = "CSS"] = skills;

  // 04 Rest in Array Destructuring
  const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
  ];

  const [html, css, ...otherTechnologies] = technologies;

  // 05 Object Destructuring
  const user = {
    name: "Arvind",
    age: 38,
    city: "Delhi",
  };

  const { name, age, city } = user;

  // 06 Rename Object Property
  const employee = {
    name: "Arvind",
    role: "Frontend Developer",
  };

  const {
    name: employeeName,
    role: employeeRole,
  } = employee;

  // 07 Default Object Value
  const profile = {
    name: "Arvind",
  };

  const {
    name: profileName,
    city: profileCity = "Delhi",
  } = profile;

  // 08 Nested Object Destructuring
  const customer = {
    name: "Arvind",
    address: {
      city: "Delhi",
      country: "India",
    },
  };

  const {
    address: { city: customerCity, country },
  } = customer;

  // 09 Function Parameter Destructuring
  const getUserName = ({ name }) => {
    return name;
  };

  const functionUser = {
    name: "Rahul",
    age: 30,
  };

  const functionResult = getUserName(functionUser);

  // 10 React-style Props Destructuring
  const product = {
    title: "Laptop",
    price: 55000,
  };

  const ProductCard = ({ title, price }) => {
    return `${title} — ₹${price}`;
  };

  const productResult = ProductCard(product);

  return (
    <div className="destructuring-page">

      <header className="page-header">
        <span className="page-badge">Modern JavaScript</span>

        <h1>JavaScript Destructuring</h1>

        <p>
          Destructuring allows us to extract values from arrays and
          objects and store them directly into variables. It is
          widely used in modern JavaScript and React development.
        </p>
      </header>

      <div className="destructuring-grid">

        {/* 01 Array Destructuring */}
        <article className="destructuring-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">Array</span>
              <h2>Array Destructuring</h2>
            </div>

            <span className="card-number">01</span>
          </div>

          <p className="card-description">
            Array destructuring allows us to extract array values
            directly into variables.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
              <code>{`const colors = ["Red", "Green", "Blue"];

const [first, second, third] = colors;`}</code>
            </pre>
          </div>

          <div className="output-box output-column">
            <span>Output</span>

            <strong>
              {firstColor}, {secondColor}, {thirdColor}
            </strong>
          </div>
        </article>

        {/* 02 Skip Items */}
        <article className="destructuring-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">Array</span>
              <h2>Skip Array Items</h2>
            </div>

            <span className="card-number">02</span>
          </div>

          <p className="card-description">
            Empty positions can be used when we want to skip
            specific array values.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
              <code>{`const numbers = [10, 20, 30];

const [first, , third] = numbers;`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>

            <strong>
              {firstNumber}, {thirdNumber}
            </strong>
          </div>
        </article>

        {/* 03 Default Values */}
        <article className="destructuring-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">Default</span>
              <h2>Default Values</h2>
            </div>

            <span className="card-number">03</span>
          </div>

          <p className="card-description">
            A default value is used when the array does not provide
            a value at that position.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
              <code>{`const skills = ["HTML"];

const [primary, secondary = "CSS"] = skills;`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>

            <strong>
              {primarySkill}, {secondarySkill}
            </strong>
          </div>
        </article>

        {/* 04 Rest */}
        <article className="destructuring-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">Rest</span>
              <h2>Rest in Array Destructuring</h2>
            </div>

            <span className="card-number">04</span>
          </div>

          <p className="card-description">
            The <strong>rest operator</strong> collects the remaining
            array values into another array.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
              <code>{`const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "React"
];

const [html, css, ...others] = technologies;`}</code>
            </pre>
          </div>

          <div className="output-box output-column">
            <span>Output</span>

            <strong>
              First: {html}, {css}
              <br />
              Others: {otherTechnologies.join(", ")}
            </strong>
          </div>
        </article>

        {/* 05 Object Destructuring */}
        <article className="destructuring-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">Object</span>
              <h2>Object Destructuring</h2>
            </div>

            <span className="card-number">05</span>
          </div>

          <p className="card-description">
            Object destructuring extracts object properties directly
            into variables using their property names.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
              <code>{`const user = {
  name: "Arvind",
  age: 38,
  city: "Delhi"
};

const { name, age, city } = user;`}</code>
            </pre>
          </div>

          <div className="output-box output-column">
            <span>Output</span>

            <strong>
              {name}, {age}, {city}
            </strong>
          </div>
        </article>

        {/* 06 Rename */}
        <article className="destructuring-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">Rename</span>
              <h2>Rename Properties</h2>
            </div>

            <span className="card-number">06</span>
          </div>

          <p className="card-description">
            We can rename a destructured property when the original
            property name conflicts with another variable.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
              <code>{`const employee = {
  name: "Arvind",
  role: "Frontend Developer"
};

const {
  name: employeeName,
  role: employeeRole
} = employee;`}</code>
            </pre>
          </div>

          <div className="output-box output-column">
            <span>Output</span>

            <strong>
              {employeeName}
              <br />
              {employeeRole}
            </strong>
          </div>
        </article>

        {/* 07 Default Object Value */}
        <article className="destructuring-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">Default</span>
              <h2>Default Object Value</h2>
            </div>

            <span className="card-number">07</span>
          </div>

          <p className="card-description">
            We can provide a fallback value when an object property
            is <strong>undefined</strong>.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
              <code>{`const profile = {
  name: "Arvind"
};

const {
  name,
  city = "Delhi"
} = profile;`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>

            <strong>
              {profileName}, {profileCity}
            </strong>
          </div>
        </article>

        {/* 08 Nested */}
        <article className="destructuring-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">Nested</span>
              <h2>Nested Destructuring</h2>
            </div>

            <span className="card-number">08</span>
          </div>

          <p className="card-description">
            Nested destructuring allows us to extract values from
            objects inside another object.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
              <code>{`const customer = {
  name: "Arvind",
  address: {
    city: "Delhi",
    country: "India"
  }
};

const {
  address: { city, country }
} = customer;`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>

            <strong>
              {customerCity}, {country}
            </strong>
          </div>
        </article>

        {/* 09 Function Parameter */}
        <article className="destructuring-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">Function</span>
              <h2>Function Parameter Destructuring</h2>
            </div>

            <span className="card-number">09</span>
          </div>

          <p className="card-description">
            Object destructuring can be used directly inside a
            function parameter.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
              <code>{`const getUserName = ({ name }) => {
  return name;
};

const user = {
  name: "Rahul",
  age: 30
};

getUserName(user);`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>

            <strong>{functionResult}</strong>
          </div>
        </article>

        {/* 10 React Props */}
        <article className="destructuring-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">React</span>
              <h2>React Props Destructuring</h2>
            </div>

            <span className="card-number">10</span>
          </div>

          <p className="card-description">
            React components commonly destructure props directly
            inside the function parameter.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript / React</div>

            <pre>
              <code>{`const ProductCard = ({ title, price }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>₹{price}</p>
    </div>
  );
};`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>

            <strong>{productResult}</strong>
          </div>
        </article>

      </div>
    </div>
  );
}