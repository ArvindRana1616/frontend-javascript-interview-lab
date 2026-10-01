import "./spread-rest.css";

export default function SpreadRestPage() {
  // 01 Spread with Arrays
  const frontendSkills = ["HTML", "CSS"];
  const updatedSkills = [...frontendSkills, "JavaScript", "React"];

  // 02 Copy an Array
  const originalArray = ["HTML", "CSS", "JavaScript"];
  const copiedArray = [...originalArray];

  // 03 Merge Arrays
  const basicSkills = ["HTML", "CSS"];
  const advancedSkills = ["JavaScript", "React"];

  const allSkills = [...basicSkills, ...advancedSkills];

  // 04 Add Items with Spread
  const oldSkills = ["HTML", "CSS"];
  const newSkills = ["JavaScript", ...oldSkills, "React"];

  // 05 Spread with Objects
  const user = {
    name: "Arvind",
    city: "Delhi",
  };

  const updatedUser = {
    ...user,
    role: "Frontend Developer",
  };

  // 06 Update Object Property
  const profile = {
    name: "Arvind",
    city: "Delhi",
    role: "Developer",
  };

  const updatedProfile = {
    ...profile,
    city: "Noida",
  };

  // 07 Rest Parameters
  function addNumbers(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
  }

  const total = addNumbers(10, 20, 30, 40);

  // 08 Rest with Destructuring
  const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
  ];

  const [firstTechnology, ...remainingTechnologies] = technologies;

  // 09 Rest with Object Destructuring
  const employee = {
    name: "Arvind",
    role: "Frontend Developer",
    experience: "8+ Years",
  };

  const {
    name: employeeName,
    ...employeeDetails
  } = employee;

  // 10 Spread vs Rest
  const numbers = [1, 2, 3];

  const spreadNumbers = [...numbers];

  function showNumbers(first, ...restNumbers) {
    return `First: ${first} | Rest: ${restNumbers.join(", ")}`;
  }

  const restResult = showNumbers(10, 20, 30, 40);

  return (
    <div className="spread-rest-page">

      <header className="page-header">
        <span className="page-badge">Modern JavaScript</span>

        <h1>JavaScript Spread & Rest</h1>

        <p>
          Spread and Rest use the same <strong>...</strong> syntax,
          but their purpose is different. Spread expands values,
          while Rest collects multiple values into a single variable.
        </p>
      </header>

      <div className="spread-rest-grid">

        {/* 01 Spread with Arrays */}
        <article className="spread-rest-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">Spread</span>
              <h2>Spread with Arrays</h2>
            </div>
            <span className="card-number">01</span>
          </div>

          <p className="card-description">
            Spread expands an array and allows us to add its
            individual values into another array.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>
            <pre>
              <code>{`const frontendSkills = ["HTML", "CSS"];

const updatedSkills = [
  ...frontendSkills,
  "JavaScript",
  "React"
];`}</code>
            </pre>
          </div>

          <div className="output-box output-column">
            <span>Output</span>
            <strong>{updatedSkills.join(", ")}</strong>
          </div>
        </article>

        {/* 02 Copy Array */}
        <article className="spread-rest-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">Spread</span>
              <h2>Copy an Array</h2>
            </div>
            <span className="card-number">02</span>
          </div>

          <p className="card-description">
            Spread creates a new array with the same values instead
            of directly referencing the original array.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>
            <pre>
              <code>{`const originalArray = [
  "HTML",
  "CSS",
  "JavaScript"
];

const copiedArray = [...originalArray];`}</code>
            </pre>
          </div>

          <div className="output-box output-column">
            <span>Output</span>
            <strong>
              Original: {originalArray.join(", ")}
              <br />
              Copy: {copiedArray.join(", ")}
            </strong>
          </div>
        </article>

        {/* 03 Merge Arrays */}
        <article className="spread-rest-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">Spread</span>
              <h2>Merge Arrays</h2>
            </div>
            <span className="card-number">03</span>
          </div>

          <p className="card-description">
            Multiple arrays can be combined easily using the
            spread operator.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>
            <pre>
              <code>{`const basicSkills = ["HTML", "CSS"];
const advancedSkills = ["JavaScript", "React"];

const allSkills = [
  ...basicSkills,
  ...advancedSkills
];`}</code>
            </pre>
          </div>

          <div className="output-box output-column">
            <span>Output</span>
            <strong>{allSkills.join(", ")}</strong>
          </div>
        </article>

        {/* 04 Add Items */}
        <article className="spread-rest-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">Spread</span>
              <h2>Add Items with Spread</h2>
            </div>
            <span className="card-number">04</span>
          </div>

          <p className="card-description">
            Spread lets us insert new values before, after, or
            between existing array values.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>
            <pre>
              <code>{`const oldSkills = ["HTML", "CSS"];

const newSkills = [
  "JavaScript",
  ...oldSkills,
  "React"
];`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>
            <strong>{newSkills.join(", ")}</strong>
          </div>
        </article>

        {/* 05 Object Spread */}
        <article className="spread-rest-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">Object</span>
              <h2>Spread with Objects</h2>
            </div>
            <span className="card-number">05</span>
          </div>

          <p className="card-description">
            Object spread copies properties from one object into
            another object.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>
            <pre>
              <code>{`const user = {
  name: "Arvind",
  city: "Delhi"
};

const updatedUser = {
  ...user,
  role: "Frontend Developer"
};`}</code>
            </pre>
          </div>

          <div className="output-box output-column">
            <span>Output</span>
            <strong>
              {updatedUser.name}
              <br />
              {updatedUser.city}
              <br />
              {updatedUser.role}
            </strong>
          </div>
        </article>

        {/* 06 Update Object */}
        <article className="spread-rest-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">Object</span>
              <h2>Update Object Property</h2>
            </div>
            <span className="card-number">06</span>
          </div>

          <p className="card-description">
            Later properties override earlier properties with the
            same name. This is commonly used for immutable updates.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>
            <pre>
              <code>{`const profile = {
  name: "Arvind",
  city: "Delhi",
  role: "Developer"
};

const updatedProfile = {
  ...profile,
  city: "Noida"
};`}</code>
            </pre>
          </div>

          <div className="output-box output-column">
            <span>Output</span>
            <strong>
              {updatedProfile.name} — {updatedProfile.city}
              <br />
              {updatedProfile.role}
            </strong>
          </div>
        </article>

        {/* 07 Rest Parameters */}
        <article className="spread-rest-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">Rest</span>
              <h2>Rest Parameters</h2>
            </div>
            <span className="card-number">07</span>
          </div>

          <p className="card-description">
            Rest parameters collect multiple function arguments
            into a single array.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>
            <pre>
              <code>{`function addNumbers(...numbers) {
  return numbers.reduce(
    (total, number) => total + number,
    0
  );
}

addNumbers(10, 20, 30, 40);`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>
            <strong>{total}</strong>
          </div>
        </article>

        {/* 08 Rest Array Destructuring */}
        <article className="spread-rest-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">Rest</span>
              <h2>Rest with Destructuring</h2>
            </div>
            <span className="card-number">08</span>
          </div>

          <p className="card-description">
            Rest can collect all remaining array values after
            extracting the first value.
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

const [
  firstTechnology,
  ...remainingTechnologies
] = technologies;`}</code>
            </pre>
          </div>

          <div className="output-box output-column">
            <span>Output</span>
            <strong>
              First: {firstTechnology}
              <br />
              Remaining: {remainingTechnologies.join(", ")}
            </strong>
          </div>
        </article>

        {/* 09 Rest Object */}
        <article className="spread-rest-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">Rest</span>
              <h2>Rest with Object Destructuring</h2>
            </div>
            <span className="card-number">09</span>
          </div>

          <p className="card-description">
            Object rest collects all remaining properties that were
            not destructured.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>
            <pre>
              <code>{`const employee = {
  name: "Arvind",
  role: "Frontend Developer",
  experience: "8+ Years"
};

const {
  name,
  ...employeeDetails
} = employee;`}</code>
            </pre>
          </div>

          <div className="output-box output-column">
            <span>Output</span>
            <strong>
              Name: {employeeName}
              <br />
              Role: {employeeDetails.role}
              <br />
              Experience: {employeeDetails.experience}
            </strong>
          </div>
        </article>

        {/* 10 Spread vs Rest */}
        <article className="spread-rest-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">Interview</span>
              <h2>Spread vs Rest</h2>
            </div>
            <span className="card-number">10</span>
          </div>

          <p className="card-description">
            Both use <strong>...</strong>, but Spread expands
            values while Rest collects values.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>
            <pre>
              <code>{`// Spread → expands
const numbers = [1, 2, 3];
const copy = [...numbers];

// Rest → collects
function showNumbers(first, ...restNumbers) {
  return restNumbers;
}`}</code>
            </pre>
          </div>

          <div className="output-box output-column">
            <span>Output</span>
            <strong>
              Spread: [{spreadNumbers.join(", ")}]
              <br />
              {restResult}
            </strong>
          </div>
        </article>

      </div>
    </div>
  );
}