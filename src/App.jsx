import { useState } from "react";
import star from "/images/icon-star.svg";

function App() {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <main className="card">
      <div className="icon">
        <img src={star} />
      </div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <ol>
        {numbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ol>

      <button type="submit">Submit</button>
    </main>
  );
}

export default App;
// You selected out of 5 Thank you! We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
