import "./objects.css";

export default function ObjectsPage() {
  // 01 Create an Object
  const user = {
    name: "Arvind",
    age: 38,
    city: "Delhi",
  };

  // 02 Properties & Values
  const product = {
    name: "Laptop",
    price: 55000,
    category: "Electronics",
  };

  // 03 Dot Notation
  const employee = {
    name: "Arvind",
    role: "Frontend Developer",
  };

  const employeeName = employee.name;
  const employeeRole = employee.role;

  // 04 Bracket Notation
  const profile = {
    name: "Arvind",
    city: "Delhi",
  };

  const propertyName = "city";
  const profileCity = profile[propertyName];

  // 05 Update Property
  const account = {
    name: "Arvind",
    city: "Delhi",
  };

  account.city = "Noida";

  // 06 Add New Property
  const customer = {
    name: "Arvind",
    email: "arvind@example.com",
  };

  customer.phone = "9876543210";

  // 07 Delete Property
  const student = {
    name: "Rahul",
    age: 20,
    city: "Delhi",
  };

  delete student.city;

  // 08 Nested Object
  const userProfile = {
    name: "Arvind",
    address: {
      city: "Delhi",
      country: "India",
    },
  };

  const userCity = userProfile.address.city;
  const country = userProfile.address.country;

  // 09 Object Method
  const person = {
    name: "Arvind",

    greet() {
      return `Hello, ${this.name}`;
    },
  };

  const greeting = person.greet();

  // 10 Object with Multiple Data Types
  const developer = {
    name: "Arvind",
    age: 38,
    isDeveloper: true,
    skills: ["HTML", "CSS", "JavaScript", "React"],
    address: {
      city: "Delhi",
    },
  };

  return (
    <div className="objects-page">

      <header className="page-header">
        <span className="page-badge">JavaScript Basics</span>

        <h1>JavaScript Objects</h1>

        <p>
          Objects are used to store related data and functionality
          using key-value pairs. They are heavily used in frontend
          development, APIs, React applications, and real-world data.
        </p>
      </header>

      <div className="objects-grid">

        {/* 01 Create Object */}
        <article className="object-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">Object</span>
              <h2>Create an Object</h2>
            </div>

            <span className="card-number">01</span>
          </div>

          <p className="card-description">
            An object stores related information using
            <strong> key-value pairs</strong>.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
              <code>{`const user = {
  name: "Arvind",
  age: 38,
  city: "Delhi"
};`}</code>
            </pre>
          </div>

          <div className="output-box output-column">
            <span>Output</span>

            <strong>
              {user.name}, {user.age}, {user.city}
            </strong>
          </div>
        </article>

        {/* 02 Properties & Values */}
        <article className="object-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">Key / Value</span>
              <h2>Properties & Values</h2>
            </div>

            <span className="card-number">02</span>
          </div>

          <p className="card-description">
            Each property has a key and a value. Values can be
            strings, numbers, booleans, arrays, objects, and more.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
              <code>{`const product = {
  name: "Laptop",
  price: 55000,
  category: "Electronics"
};`}</code>
            </pre>
          </div>

          <div className="output-box output-column">
            <span>Output</span>

            <strong>
              {product.name} — ₹{product.price}
            </strong>
          </div>
        </article>

        {/* 03 Dot Notation */}
        <article className="object-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">Dot Notation</span>
              <h2>Access Properties</h2>
            </div>

            <span className="card-number">03</span>
          </div>

          <p className="card-description">
            Dot notation is the most common way to access an
            object's property.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
              <code>{`const employee = {
  name: "Arvind",
  role: "Frontend Developer"
};

employee.name;
employee.role;`}</code>
            </pre>
          </div>

          <div className="output-box output-column">
            <span>Output</span>

            <strong>
              {employeeName} — {employeeRole}
            </strong>
          </div>
        </article>

        {/* 04 Bracket Notation */}
        <article className="object-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">Bracket Notation</span>
              <h2>Dynamic Property Access</h2>
            </div>

            <span className="card-number">04</span>
          </div>

          <p className="card-description">
            Bracket notation is useful when the property name is
            stored inside a variable or is dynamic.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
              <code>{`const profile = {
  name: "Arvind",
  city: "Delhi"
};

const propertyName = "city";

profile[propertyName];`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>

            <strong>{profileCity}</strong>
          </div>
        </article>

        {/* 05 Update */}
        <article className="object-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">Update</span>
              <h2>Update a Property</h2>
            </div>

            <span className="card-number">05</span>
          </div>

          <p className="card-description">
            An existing property can be changed by assigning a new
            value to it.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
              <code>{`const account = {
  name: "Arvind",
  city: "Delhi"
};

account.city = "Noida";`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>

            <strong>{account.city}</strong>
          </div>
        </article>

        {/* 06 Add Property */}
        <article className="object-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">Add Property</span>
              <h2>Add a New Property</h2>
            </div>

            <span className="card-number">06</span>
          </div>

          <p className="card-description">
            A new property can be added simply by assigning a value
            to a new key.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
              <code>{`const customer = {
  name: "Arvind",
  email: "arvind@example.com"
};

customer.phone = "9876543210";`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>

            <strong>{customer.phone}</strong>
          </div>
        </article>

        {/* 07 Delete */}
        <article className="object-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">delete</span>
              <h2>Delete a Property</h2>
            </div>

            <span className="card-number">07</span>
          </div>

          <p className="card-description">
            The <strong>delete</strong> operator removes a property
            from an object.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
              <code>{`const student = {
  name: "Rahul",
  age: 20,
  city: "Delhi"
};

delete student.city;`}</code>
            </pre>
          </div>

          <div className="output-box output-column">
            <span>Output</span>

            <strong>
              {student.name}, {student.age}
            </strong>
          </div>
        </article>

        {/* 08 Nested Object */}
        <article className="object-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">Nested Object</span>
              <h2>Object Inside Object</h2>
            </div>

            <span className="card-number">08</span>
          </div>

          <p className="card-description">
            Objects can contain other objects. This is very common
            in API responses and React applications.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
              <code>{`const userProfile = {
  name: "Arvind",
  address: {
    city: "Delhi",
    country: "India"
  }
};

userProfile.address.city;`}</code>
            </pre>
          </div>

          <div className="output-box output-column">
            <span>Output</span>

            <strong>
              {userCity}, {country}
            </strong>
          </div>
        </article>

        {/* 09 Object Method */}
        <article className="object-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">Method</span>
              <h2>Object Method</h2>
            </div>

            <span className="card-number">09</span>
          </div>

          <p className="card-description">
            A function stored inside an object is called a
            <strong> method</strong>.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
              <code>{`const person = {
  name: "Arvind",

  greet() {
    return \`Hello, \${this.name}\`;
  }
};

person.greet();`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>

            <strong>{greeting}</strong>
          </div>
        </article>

        {/* 10 Real Object */}
        <article className="object-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">Real Example</span>
              <h2>Object with Different Data</h2>
            </div>

            <span className="card-number">10</span>
          </div>

          <p className="card-description">
            Real-world objects can contain different types of data,
            including arrays and nested objects.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
              <code>{`const developer = {
  name: "Arvind",
  age: 38,
  isDeveloper: true,
  skills: ["HTML", "CSS", "JavaScript", "React"],
  address: {
    city: "Delhi"
  }
};`}</code>
            </pre>
          </div>

          <div className="output-box output-column">
            <span>Output</span>

            <strong>
              {developer.name} — {developer.skills.join(", ")}
            </strong>
          </div>
        </article>

      </div>
    </div>
  );
}