import React from "react";
import "./../FoodContainer/FoodContainer.css";
const FoodItem = ({ food }) => {
  return (
    <div className="foodItem">
      <span>{food[1].name}</span>
      <br />
      <span>
        {food[1].calories} per {food[1].serving + "g" ?? "serving"}
      </span>
    </div>
  );
};

export default FoodItem;
