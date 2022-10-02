import React, { useState } from "react";
import "./../FoodContainer/FoodContainer.css";
import FoodItemDetails from "./FoodItemDetails";
const FoodItem = ({ food, hideFoodItem, setShowingDetails }) => {
  console.log(food);
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
          data-testid="showHideButton"
          className="foodItem"
          onClick={() => {
            setShowFullDetails(!showFullDetails);
            setShowingDetails(showFullDetails);
          }}
        >
          <span>{food[1].name}</span>
          <br />
          <span>
            {food[1].calories} per serving of{" "}
            {food[1].serving + "g" ?? "serving"}
          </span>
        </div>
      )}
    </>
  );
};

export default FoodItem;
