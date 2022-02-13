import React, { useState } from "react";
import "./../FoodContainer/FoodContainer.css";
import FoodItemDetails from "./FoodItemDetails";
const FoodItem = ({ food, hideFoodItem, setShowingDetails }) => {
  const [showFullDetails, setShowFullDetails] = useState(false);
  return (
    <>
      {showFullDetails && (
        <FoodItemDetails
          food={food}
          setShowFullDetails={(state) => setShowFullDetails(state)}
          setShowingDetails={setShowingDetails}
        />
      )}
      {!hideFoodItem && (
        <div
          className="foodItem"
          onClick={() => {
            setShowFullDetails(!showFullDetails);
            setShowingDetails(showFullDetails);
          }}
        >
          <span>{food[1].name}</span>
          <br />
          <span>{food[1].calories}</span>
        </div>
      )}
    </>
  );
};

export default FoodItem;
