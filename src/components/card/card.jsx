import React from "react";
import "./card.css";

const Card = ({ prop }) => {
  return (
    <div className="card">

      <img
        alt="loading..."
        src={`https://robohash.org/${prop.key}?set=set2&size=180x180`}
      />
      <h1>{prop.name}</h1>
      <h5>{prop.email}</h5>
    </div>
  );
};

export default Card;
