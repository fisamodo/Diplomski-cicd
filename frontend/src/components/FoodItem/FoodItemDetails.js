import React from "react";
import "./../FoodContainer/FoodContainer.css";

const FoodItemDetails = ({ food, setShowFullDetails, setShowingDetails }) => {
  return (
    <div className="foodItemDetails">
      <div className="label">
        <span>{food[1].name}</span>
        <br />
        <span>{food[1].calories}</span>
        <br />
        <br />
        <span>Carbohydrates</span>
        <br />
        <span>Sugar: {food[1].nutrients.carbohydrates.sugar}</span>
        <br />
        <span>Total: {food[1].nutrients.carbohydrates.total}</span>
        <br />
        <br />
        <span>Cholesterol: {food[1].nutrients.cholesterol}</span>
        <br />
        <br />

        <span>Dietary Fibre: {food[1].nutrients.dietaryFibre}</span>
        <br />
        <br />

        <span>Saturated fat: {food[1].nutrients.fat.saturated}</span>
        <br />
        <span>Total fat: {food[1].nutrients.fat.total}</span>
        <br />
        <br />

        <span>Iron: {food[1].nutrients.iron}</span>
        <br />
        <br />

        <span>Potassium: {food[1].nutrients.potassium}</span>
        <br />
        <br />

        <span>Protein: {food[1].nutrients.protein}</span>
        <br />
        <br />

        <span>Sodium: {food[1].nutrients.sodium}</span>
        <br />
        <br />

        <span>Serving: {food[1].serving}</span>
        <br />
        <span>Unit: {food[1].unit}</span>
        <br />

        <button
          onClick={() => {
            setShowFullDetails(false);
            setShowingDetails(false);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default FoodItemDetails;
