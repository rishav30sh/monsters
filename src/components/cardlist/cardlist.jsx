import React from "react";
import "./cardlist.css";
import Card from "../card/card";

const CardList = ({ list }) => {
  return (
    <div className="card-list">
      {list.map((temp, key) => (
        <Card key={key} prop={{name:temp.name, email:temp.email, key:key}} />
      ))}
    </div>
  );
};

export default CardList;
