import star from "/images/icon-star.svg";
import { AppContext } from "../Context/AppContext";
import { useContext } from "react";

export default function MainCard() {
  const { selected, setSelected } = useContext(AppContext);
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
          <li
            className={selected === number ? "selected" : ""}
            key={number}
            onClick={() => setSelected(number)}
          >
            {number}
          </li>
        ))}
      </ol>

      <button type="submit">Submit</button>
    </main>
  );
}
