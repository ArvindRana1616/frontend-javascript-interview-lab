import "./async-await.css";

export default function AsyncAwaitPage() {
  return (
    <div className="async-await-page">
      <div className="page-header">
        <span className="page-badge">Advanced JavaScript</span>

        <h1>JavaScript Async / Await</h1>

        <p>
          Async and await make asynchronous JavaScript code easier to read
          and understand.
        </p>
      </div>

      <div className="async-await-grid">

        {/* Card 1 */}
       {/* Card 1 */}
<section className="async-await-card">
  <div className="card-header">
    <span className="card-number">01</span>
    <h2>Async / Await</h2>
  </div>

  <p className="card-description">
    async and await make asynchronous code easier to read and handle.
    An async function returns a Promise, while await gets the result of that Promise.
  </p>

  <div className="code-box">
    <div className="code-header">JavaScript</div>

    <pre>
      <code>{`async function getUserData() {
  try {
    const result = await Promise.resolve("User data received");

    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
}

getUserData().then((result) => {
  console.log(result);
});`}</code>
    </pre>
  </div>

  <div className="output-box">
    <strong>Output:</strong> User data received
  </div>
</section>

      </div>
    </div>
  );
}