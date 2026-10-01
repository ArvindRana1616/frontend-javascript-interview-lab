import "./fetch.css";

export default function FetchPage() {
  return (
    <div className="fetch-page">
      <div className="page-header">
        <span className="page-badge">Advanced JavaScript</span>

        <h1>JavaScript Fetch</h1>

        <p>
          Fetch is used to request data from an API and handle the response
          asynchronously.
        </p>
      </div>

      <div className="fetch-grid">

        {/* Card 1 */}
        <section className="fetch-card">
          <div className="card-header">
            <span className="card-number">01</span>
            <h2>Fetch API Data</h2>
          </div>

          <p className="card-description">
            fetch() sends a request to an API, response.json() converts the
            response into JavaScript data, and try/catch handles errors.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
              <code>{`async function getUsers() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getUsers();`}</code>
            </pre>
          </div>

          <div className="output-box">
            <strong>Output:</strong> User data received from API
          </div>
        </section>

      </div>
    </div>
  );
}