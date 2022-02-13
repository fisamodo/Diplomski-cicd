import React, { useState } from "react";
import FoodItem from "../FoodItem/FoodItem";
import "./FoodContainer.css";

const FoodContainer = ({ food }) => {
  const [showingDetails, setShowingDetails] = useState();
  return (
    <div className="foodContainer">
      {Object.entries(food)?.map((item, i) => (
        <FoodItem
          food={item}
          hideFoodItem={showingDetails}
          setShowingDetails={(state) => setShowingDetails(state)}
        />
      ))}
    </div>
  );
};

export default FoodContainer;
