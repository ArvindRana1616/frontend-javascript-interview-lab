import "./arrays.css";

export default function ArraysPage() {
  // 01 Create an Array
  const fruits = ["Apple", "Banana", "Mango", "Orange"];

  // 02 Access Array Items
  const firstFruit = fruits[0];
  const secondFruit = fruits[1];

  // 03 Update an Array Item
  const vegetables = ["Potato", "Tomato", "Carrot"];
  vegetables[1] = "Onion";

  // 04 Array Length
  const colors = ["Red", "Green", "Blue", "Yellow"];
  const colorCount = colors.length;

  // 05 push()
  const pushExample = ["HTML", "CSS"];
  pushExample.push("JavaScript");

  // 06 pop()
  const popExample = ["HTML", "CSS", "JavaScript"];
  const removedItem = popExample.pop();

  // 07 shift()
  const shiftExample = ["HTML", "CSS", "JavaScript"];
  const firstRemovedItem = shiftExample.shift();

  // 08 unshift()
  const unshiftExample = ["CSS", "JavaScript"];
  unshiftExample.unshift("HTML");

  // 09 slice()
  const allLanguages = ["HTML", "CSS", "JavaScript", "React"];
  const selectedLanguages = allLanguages.slice(1, 3);

  // 10 splice()
  const skills = ["HTML", "CSS", "JavaScript", "React"];
  skills.splice(2, 1, "TypeScript");

  return (
    <div className="arrays-page">
      <header className="page-header">
        <span className="page-badge">JavaScript Basics</span>

        <h1>JavaScript Arrays</h1>

        <p>
          Arrays are used to store multiple values in a single variable.
          They are heavily used in frontend development for handling lists,
          products, users, menus, and other collections of data.
        </p>
      </header>

      <div className="arrays-grid">

        {/* 01 Create Array */}
        <article className="array-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">Array</span>
              <h2>Create an Array</h2>
            </div>

            <span className="card-number">01</span>
          </div>

          <p className="card-description">
            An array can store multiple values inside a single variable.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
              <code>{`const fruits = ["Apple", "Banana", "Mango", "Orange"];`}</code>
            </pre>
          </div>

          <div className="output-box output-column">
            <span>Output</span>
            <strong>{fruits.join(", ")}</strong>
          </div>
        </article>

        {/* 02 Indexing */}
        <article className="array-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">Index</span>
              <h2>Access Array Items</h2>
            </div>

            <span className="card-number">02</span>
          </div>

          <p className="card-description">
            Array indexes start from <strong>0</strong>. The first item is
            at index 0, the second at index 1, and so on.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
              <code>{`const fruits = ["Apple", "Banana", "Mango"];

fruits[0];
fruits[1];`}</code>
            </pre>
          </div>

          <div className="output-box output-column">
            <span>Output</span>

            <strong>
              {firstFruit}, {secondFruit}
            </strong>
          </div>
        </article>

        {/* 03 Update */}
        <article className="array-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">Update</span>
              <h2>Update an Array Item</h2>
            </div>

            <span className="card-number">03</span>
          </div>

          <p className="card-description">
            We can update an existing item by using its array index.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
              <code>{`const vegetables = ["Potato", "Tomato", "Carrot"];

vegetables[1] = "Onion";`}</code>
            </pre>
          </div>

          <div className="output-box output-column">
            <span>Output</span>

            <strong>{vegetables.join(", ")}</strong>
          </div>
        </article>

        {/* 04 Length */}
        <article className="array-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">length</span>
              <h2>Array Length</h2>
            </div>

            <span className="card-number">04</span>
          </div>

          <p className="card-description">
            The <strong>length</strong> property tells us how many items
            are present in an array.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
              <code>{`const colors = ["Red", "Green", "Blue", "Yellow"];

colors.length;`}</code>
            </pre>
          </div>

          <div className="output-box">
            <span>Output</span>

            <strong>{colorCount}</strong>
          </div>
        </article>

        {/* 05 Push */}
        <article className="array-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">push()</span>
              <h2>Add at the End</h2>
            </div>

            <span className="card-number">05</span>
          </div>

          <p className="card-description">
            <strong>push()</strong> adds one or more items to the end
            of an array.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
              <code>{`const skills = ["HTML", "CSS"];

skills.push("JavaScript");`}</code>
            </pre>
          </div>

          <div className="output-box output-column">
            <span>Output</span>

            <strong>{pushExample.join(", ")}</strong>
          </div>
        </article>

        {/* 06 Pop */}
        <article className="array-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">pop()</span>
              <h2>Remove from the End</h2>
            </div>

            <span className="card-number">06</span>
          </div>

          <p className="card-description">
            <strong>pop()</strong> removes the last item from an array
            and returns the removed value.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
              <code>{`const skills = ["HTML", "CSS", "JavaScript"];

const removedItem = skills.pop();`}</code>
            </pre>
          </div>

          <div className="output-box output-column">
            <span>Output</span>

            <strong>
              Removed: {removedItem} | Remaining: {popExample.join(", ")}
            </strong>
          </div>
        </article>

        {/* 07 Shift */}
        <article className="array-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">shift()</span>
              <h2>Remove from the Beginning</h2>
            </div>

            <span className="card-number">07</span>
          </div>

          <p className="card-description">
            <strong>shift()</strong> removes the first item from an
            array and returns that item.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
              <code>{`const skills = ["HTML", "CSS", "JavaScript"];

const removedItem = skills.shift();`}</code>
            </pre>
          </div>

          <div className="output-box output-column">
            <span>Output</span>

            <strong>
              Removed: {firstRemovedItem} | Remaining:{" "}
              {shiftExample.join(", ")}
            </strong>
          </div>
        </article>

        {/* 08 Unshift */}
        <article className="array-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">unshift()</span>
              <h2>Add at the Beginning</h2>
            </div>

            <span className="card-number">08</span>
          </div>

          <p className="card-description">
            <strong>unshift()</strong> adds one or more items to the
            beginning of an array.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
              <code>{`const skills = ["CSS", "JavaScript"];

skills.unshift("HTML");`}</code>
            </pre>
          </div>

          <div className="output-box output-column">
            <span>Output</span>

            <strong>{unshiftExample.join(", ")}</strong>
          </div>
        </article>

        {/* 09 Slice */}
        <article className="array-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">slice()</span>
              <h2>Get a Part of an Array</h2>
            </div>

            <span className="card-number">09</span>
          </div>

          <p className="card-description">
            <strong>slice()</strong> creates a new array from a selected
            portion without changing the original array.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
              <code>{`const languages = [
  "HTML",
  "CSS",
  "JavaScript",
  "React"
];

languages.slice(1, 3);`}</code>
            </pre>
          </div>

          <div className="output-box output-column">
            <span>Output</span>

            <strong>{selectedLanguages.join(", ")}</strong>
          </div>
        </article>

        {/* 10 Splice */}
        <article className="array-card">
          <div className="card-header">
            <div>
              <span className="keyword-badge">splice()</span>
              <h2>Add / Remove / Replace</h2>
            </div>

            <span className="card-number">10</span>
          </div>

          <p className="card-description">
            <strong>splice()</strong> can add, remove, or replace items
            directly inside the original array.
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

skills.splice(2, 1, "TypeScript");`}</code>
            </pre>
          </div>

          <div className="output-box output-column">
            <span>Output</span>

            <strong>{skills.join(", ")}</strong>
          </div>
        </article>

      </div>
    </div>
  );
}