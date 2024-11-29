import React from "react";
import card from "/images/illustration-thank-you.svg";

export default function ThankYouCard() {
  return (
    <main className="card thank">
      <img src={card} alt="" />
      <p className="result">You selected out of 5</p>

      <div className="text">
        <h2>Thank you!</h2>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </main>
  );
}
