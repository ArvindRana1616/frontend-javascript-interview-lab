import "./promises.css";

export default function PromisesPage() {
  return (
    <div className="promises-page">
      <div className="page-header">
        <span className="page-badge">Advanced JavaScript</span>

        <h1>JavaScript Promises</h1>

        <p>
          Promises are used to handle asynchronous operations and their
          future results.
        </p>
      </div>

      <div className="promises-grid">

        {/* Card 1 */}
        <section className="promise-card">
          <div className="card-header">
            <span className="card-number">01</span>
            <h2>What is a Promise?</h2>
          </div>

          <p className="card-description">
            A Promise represents the future result of an asynchronous
            operation.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
              <code>{`const myPromise = new Promise((resolve, reject) => {
  resolve("Data received");
});`}</code>
            </pre>
          </div>

          <div className="output-box">
            <strong>Result:</strong> Promise fulfilled
          </div>
        </section>

        {/* Card 2 */}
        <section className="promise-card">
          <div className="card-header">
            <span className="card-number">02</span>
            <h2>Promise States</h2>
          </div>

          <p className="card-description">
            A Promise has three states: pending, fulfilled, and rejected.
          </p>

          <div className="code-box">
            <div className="code-header">States</div>

            <pre>
              <code>{`Pending   → Waiting
Fulfilled → Success
Rejected  → Failure`}</code>
            </pre>
          </div>

          <div className="output-box">
            <strong>Final states:</strong> Fulfilled or Rejected
          </div>
        </section>

        {/* Card 3 */}
        <section className="promise-card">
          <div className="card-header">
            <span className="card-number">03</span>
            <h2>Resolve and Reject</h2>
          </div>

          <p className="card-description">
            resolve() represents success, while reject() represents failure.
          </p>

          <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
              <code>{`const uploadFile = new Promise((resolve, reject) => {
                    const success = true;

                    if (success) {
                        resolve("File uploaded");
                    } else {
                        reject("Upload failed");
                    }
                    });`}
             </code>
            </pre>
          </div>

          <div className="output-box">
            <strong>Success:</strong> File uploaded
          </div>
        </section>

        {/* Card 4 */}
        <section className="promise-card">
        <div className="card-header">
            <span className="card-number">04</span>
            <h2>.then() - Handle Success</h2>
        </div>

        <p className="card-description">
            The .then() method runs when a Promise is successfully fulfilled.
        </p>

        <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
            <code>{`const myPromise = new Promise((resolve) => {
        resolve("Data received");
        });

        myPromise.then((result) => {
        console.log(result);
        });`}</code>
            </pre>
        </div>

        <div className="output-box">
            <strong>Output:</strong> Data received
        </div>
        </section>

        {/* Card 5 */}
        <section className="promise-card">
        <div className="card-header">
            <span className="card-number">05</span>
            <h2>.catch() - Handle Failure</h2>
        </div>

        <p className="card-description">
            The .catch() method runs when a Promise is rejected.
        </p>

        <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
            <code>{`const myPromise = new Promise((resolve, reject) => {
        reject("Something went wrong");
        });

        myPromise.catch((error) => {
        console.log(error);
        });`}</code>
            </pre>
        </div>

        <div className="output-box">
            <strong>Output:</strong> Something went wrong
        </div>
        </section>

        {/* Card 6 */}
        <section className="promise-card">
        <div className="card-header">
            <span className="card-number">06</span>
            <h2>.finally() - Runs in Both Cases</h2>
        </div>

        <p className="card-description">
            The .finally() method runs after a Promise is completed, whether it
            succeeds or fails.
        </p>

        <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
            <code>{`const myPromise = new Promise((resolve, reject) => {
        resolve("Data received");
        });

        myPromise
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            console.log("Process completed");
        });`}</code>
            </pre>
        </div>

        <div className="output-box">
            <strong>Output:</strong> Process completed
        </div>
        </section>

        {/* Card 7 */}
        <section className="promise-card">
        <div className="card-header">
            <span className="card-number">07</span>
            <h2>Promise Chaining</h2>
        </div>

        <p className="card-description">
            Promise chaining allows us to run multiple asynchronous steps one after another.
        </p>

        <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
            <code>{`Promise.resolve("User found")
        .then((result) => {
            console.log(result);
            return "Profile loaded";
        })
        .then((result) => {
            console.log(result);
            return "Dashboard loaded";
        })
        .then((result) => {
            console.log(result);
        });`}</code>
            </pre>
        </div>

        <div className="output-box">
            <strong>Output:</strong>
            <br />
            User found
            <br />
            Profile loaded
            <br />
            Dashboard loaded
        </div>
        </section>
        {/* Card 8 */}
        <section className="promise-card">
        <div className="card-header">
            <span className="card-number">08</span>
            <h2>return in Promise Chain</h2>
        </div>

        <p className="card-description">
            The return statement passes the result from one .then() to the next .then().
        </p>

        <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
            <code>{`Promise.resolve("User data")
        .then((result) => {
            return result + " received";
        })
        .then((result) => {
            console.log(result);
        });`}</code>
            </pre>
        </div>

        <div className="output-box">
            <strong>Output:</strong> User data received
        </div>
        </section>
        {/* Card 9 */}
        <section className="promise-card">
        <div className="card-header">
            <span className="card-number">09</span>
            <h2>Promise.all()</h2>
        </div>

        <p className="card-description">
            Promise.all() waits for all Promises to complete. If all succeed, it
            returns all results together.
        </p>

        <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
            <code>{`const userPromise = Promise.resolve("User data");
        const productPromise = Promise.resolve("Product data");

        Promise.all([userPromise, productPromise])
        .then((results) => {
            console.log(results);
        });`}</code>
            </pre>
        </div>

        <div className="output-box">
            <strong>Output:</strong>
            <br />
            ["User data", "Product data"]
        </div>
        </section>
        {/* Card 10 */}
        <section className="promise-card">
        <div className="card-header">
            <span className="card-number">10</span>
            <h2>Promise.allSettled()</h2>
        </div>

        <p className="card-description">
            Promise.allSettled() waits for all Promises and returns the result of
            every Promise, whether it succeeds or fails.
        </p>

        <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
            <code>{`const userPromise = Promise.resolve("User data");
        const productPromise = Promise.reject("Product failed");

        Promise.allSettled([userPromise, productPromise])
        .then((results) => {
            console.log(results);
        });`}</code>
            </pre>
        </div>

        <div className="output-box">
            <strong>Output:</strong>
            <br />
            User data → fulfilled
            <br />
            Product failed → rejected
        </div>
        </section>
        {/* Card 11 */}
        <section className="promise-card">
        <div className="card-header">
            <span className="card-number">11</span>
            <h2>Promise.race()</h2>
        </div>

        <p className="card-description">
            Promise.race() returns the result of the first Promise that settles,
            whether it succeeds or fails.
        </p>

        <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
            <code>{`const firstPromise = new Promise((resolve) => {
        setTimeout(() => resolve("First completed"), 1000);
        });

        const secondPromise = new Promise((resolve) => {
        setTimeout(() => resolve("Second completed"), 2000);
        });

        Promise.race([firstPromise, secondPromise])
        .then((result) => {
            console.log(result);
        });`}</code>
            </pre>
        </div>

        <div className="output-box">
            <strong>Output:</strong> First completed
        </div>
        </section>
        {/* Card 12 */}
        <section className="promise-card">
        <div className="card-header">
            <span className="card-number">12</span>
            <h2>Promise.any()</h2>
        </div>

        <p className="card-description">
            Promise.any() returns the first successfully fulfilled Promise. It ignores
            rejected Promises until a successful result is found.
        </p>

        <div className="code-box">
            <div className="code-header">JavaScript</div>

            <pre>
            <code>{`const firstPromise = Promise.reject("Server 1 failed");
        const secondPromise = Promise.resolve("Server 2 success");
        const thirdPromise = Promise.resolve("Server 3 success");

        Promise.any([firstPromise, secondPromise, thirdPromise])
        .then((result) => {
            console.log(result);
        });`}</code>
            </pre>
        </div>

        <div className="output-box">
            <strong>Output:</strong> Server 2 success
        </div>
        </section>

      </div>
    </div>
  );
}