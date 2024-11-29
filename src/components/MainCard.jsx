import { useState } from "react";
import star from "/images/icon-star.svg";

export default function MainCard() {
  const [selected, setSelected] = useState(null);
  const numbers = [1, 2, 3, 4, 5];

  const handleSelect = (number) => {
    setSelected(number);
  };

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
          <li
            className={selected === number ? "selected" : ""}
            key={number}
            onClick={() => handleSelect(number)}
          >
            {number}
          </li>
        ))}
      </ol>

      <button type="submit">Submit</button>
    </main>
  );
}
