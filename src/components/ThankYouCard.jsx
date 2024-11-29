import card from "/images/illustration-thank-you.svg";
import { AppContext } from "../Context/AppContext";
import { useContext } from "react";

export default function ThankYouCard() {
  const { selected } = useContext(AppContext);

  return (
    <main className="card thank">
      <img src={card} alt="" />
      <p className="result">You selected {selected} out of 5</p>

      <div className="text">
        <h1>Thank you!</h1>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </main>
  );
}
