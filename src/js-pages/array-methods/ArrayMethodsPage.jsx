import "./array-methods.css";

export default function ArrayMethodsPage() {
  // 01 forEach()
  const skills = ["HTML", "CSS", "JavaScript"];

  const forEachResult = [];

  skills.forEach((skill) => {
    forEachResult.push(skill);
  });

  // 02 map()
  const numbers = [1, 2, 3, 4];

  const doubledNumbers = numbers.map((number) => {
    return number * 2;
  });

  // 03 filter()
  const ages = [15, 22, 17, 30, 12];

  const adultAges = ages.filter((age) => {
    return age >= 18;
  });

  // 04 find()
  const users = [
    { id: 1, name: "Arvind" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Amit" },
  ];

  const foundUser = users.find((user) => {
    return user.id === 2;
  });

  // 05 findIndex()
  const products = [
    { id: 101, name: "Laptop" },
    { id: 102, name: "Mobile" },
    { id: 103, name: "Tablet" },
  ];

  const productIndex = products.findIndex((product) => {
    return product.id === 102;
  });

  // 06 some()
  const marks = [45, 62, 38, 80];

  const hasHighScore = marks.some((mark) => {
    return mark >= 80;
  });

  // 07 every()
  const scores = [75, 82, 91, 68];

  const allPassed = scores.every((score) => {
    return score >= 40;
  });

  // 08 includes()
  const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
  ];

  const hasReact = technologies.includes("React");

  // 09 reduce()
  const prices = [100, 200, 300, 400];

  const totalPrice = prices.reduce((total, price) => {
    return total + price;
  }, 0);

  // 10 sort()
  const names = ["Rahul", "Arvind", "Amit", "Vikas"];

  const sortedNames = [...names].sort();

  return (
    <div className="array-methods-page">

      <header className="page-header">
        <span className="page-badge">Arrays & Objects</span>

        <h1>JavaScript Array Methods</h1>

        <p>
          Array methods are built-in JavaScript functions used to
          search, transform, filter, check, calculate, and organize
          array data. They are heavily used in frontend development
          and React applications.
        </p>
      </header>

      <div className="array-methods-grid">

        {/* 01 forEach */}
        <article className="array-method-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">forEach()</span>
              <h2>Loop Through an Array</h2>
            </div>

            <span className="card-number">01</span>
          </div>

          <p className="card-description">
            <strong>forEach()</strong> runs a function once for
            every item in an array. It is mainly used when we want
            to perform an action for each item.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
              <code>{`const skills = ["HTML", "CSS", "JavaScript"];

skills.forEach((skill) => {
  console.log(skill);
});`}</code>
            </pre>
          </div>

          <div className="output-box output-column">
            <span>Output</span>

            <strong>
              {forEachResult.join(" → ")}
            </strong>
          </div>
        </article>

        {/* 02 map */}
        <article className="array-method-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">map()</span>
              <h2>Create a New Array</h2>
            </div>

            <span className="card-number">02</span>
          </div>

          <p className="card-description">
            <strong>map()</strong> creates a new array by transforming
            every item of the original array.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
              <code>{`const numbers = [1, 2, 3, 4];

const doubledNumbers = numbers.map((number) => {
  return number * 2;
});`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>

            <strong>
              {doubledNumbers.join(", ")}
            </strong>
          </div>
        </article>

        {/* 03 filter */}
        <article className="array-method-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">filter()</span>
              <h2>Filter Items</h2>
            </div>

            <span className="card-number">03</span>
          </div>

          <p className="card-description">
            <strong>filter()</strong> creates a new array containing
            only the items that satisfy a condition.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
              <code>{`const ages = [15, 22, 17, 30, 12];

const adultAges = ages.filter((age) => {
  return age >= 18;
});`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>

            <strong>
              {adultAges.join(", ")}
            </strong>
          </div>
        </article>

        {/* 04 find */}
        <article className="array-method-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">find()</span>
              <h2>Find One Item</h2>
            </div>

            <span className="card-number">04</span>
          </div>

          <p className="card-description">
            <strong>find()</strong> returns the first array item
            that matches the condition.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
              <code>{`const users = [
  { id: 1, name: "Arvind" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Amit" }
];

const user = users.find((user) => {
  return user.id === 2;
});`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>

            <strong>
              {foundUser.name}
            </strong>
          </div>
        </article>

        {/* 05 findIndex */}
        <article className="array-method-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">findIndex()</span>
              <h2>Find Item Index</h2>
            </div>

            <span className="card-number">05</span>
          </div>

          <p className="card-description">
            <strong>findIndex()</strong> returns the index of the
            first item that matches the condition.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
              <code>{`const products = [
  { id: 101, name: "Laptop" },
  { id: 102, name: "Mobile" },
  { id: 103, name: "Tablet" }
];

const index = products.findIndex((product) => {
  return product.id === 102;
});`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>

            <strong>
              Index: {productIndex}
            </strong>
          </div>
        </article>

        {/* 06 some */}
        <article className="array-method-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">some()</span>
              <h2>Check At Least One</h2>
            </div>

            <span className="card-number">06</span>
          </div>

          <p className="card-description">
            <strong>some()</strong> returns true if at least one
            array item satisfies the condition.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
              <code>{`const marks = [45, 62, 38, 80];

const hasHighScore = marks.some((mark) => {
  return mark >= 80;
});`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>

            <strong>
              {String(hasHighScore)}
            </strong>
          </div>
        </article>

        {/* 07 every */}
        <article className="array-method-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">every()</span>
              <h2>Check All Items</h2>
            </div>

            <span className="card-number">07</span>
          </div>

          <p className="card-description">
            <strong>every()</strong> returns true only when all
            array items satisfy the condition.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
              <code>{`const scores = [75, 82, 91, 68];

const allPassed = scores.every((score) => {
  return score >= 40;
});`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>

            <strong>
              {String(allPassed)}
            </strong>
          </div>
        </article>

        {/* 08 includes */}
        <article className="array-method-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">includes()</span>
              <h2>Check if Value Exists</h2>
            </div>

            <span className="card-number">08</span>
          </div>

          <p className="card-description">
            <strong>includes()</strong> checks whether an array
            contains a specific value.
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

technologies.includes("React");`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>

            <strong>
              {String(hasReact)}
            </strong>
          </div>
        </article>

        {/* 09 reduce */}
        <article className="array-method-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">reduce()</span>
              <h2>Calculate a Single Value</h2>
            </div>

            <span className="card-number">09</span>
          </div>

          <p className="card-description">
            <strong>reduce()</strong> processes all array items and
            produces a single final value such as a total, count,
            or calculated result.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
              <code>{`const prices = [100, 200, 300, 400];

const totalPrice = prices.reduce(
  (total, price) => {
    return total + price;
  },
  0
);`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>

            <strong>
              ₹{totalPrice}
            </strong>
          </div>
        </article>

        {/* 10 sort */}
        <article className="array-method-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">sort()</span>
              <h2>Sort an Array</h2>
            </div>

            <span className="card-number">10</span>
          </div>

          <p className="card-description">
            <strong>sort()</strong> arranges array items according
            to a sorting rule. For primitive values like strings,
            the default sorting is alphabetical.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
              <code>{`const names = [
  "Rahul",
  "Arvind",
  "Amit",
  "Vikas"
];

const sortedNames = [...names].sort();`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>

            <strong>
              {sortedNames.join(", ")}
            </strong>
          </div>
        </article>

      </div>
    </div>
  );
}