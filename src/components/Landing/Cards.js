import React from "react";
import "./Cards.css";
import Card from "./CardItem.js";
function Cards() {
  return (
    <div className="cards__container">
      <div className="cards__wrapper">
        <div className="cards__info">
          <h5>Why Use Memoriae</h5>
          <h2>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Laudantium, aperiam omnis?
          </h2>
        </div>

        <div className="cards__contents">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Cards;
