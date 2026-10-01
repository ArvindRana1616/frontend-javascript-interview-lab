import "./error-handling.css";

export default function ErrorHandlingPage() {
  return (
    <div className="error-handling-page">
      <div className="page-header">
        <span className="page-badge">Advanced JavaScript</span>

        <h1>JavaScript Error Handling</h1>

        <p>
          Error handling helps us safely handle problems that can occur while
          JavaScript code is running.
        </p>
      </div>

      <div className="error-handling-grid">

        {/* Card 1 */}
        <section className="error-handling-card">
          <div className="card-header">
            <span className="card-number">01</span>
            <h2>try / catch / finally</h2>
          </div>

          <p className="card-description">
            try contains the code that may fail, catch handles the error,
            and finally runs whether an error occurs or not.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
              <code>{`try {
  const result = JSON.parse("Invalid JSON");

  console.log(result);
} catch (error) {
  console.log("Something went wrong");
} finally {
  console.log("Process completed");
}`}</code>
            </pre>
          </div>

          <div className="output-box">
            <strong>Output:</strong>
            <br />
            Something went wrong
            <br />
            Process completed
          </div>
        </section>

      </div>
    </div>
  );
}