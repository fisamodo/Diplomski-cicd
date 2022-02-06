import React from 'react';
import './../FoodContainer/FoodContainer.css'
const FoodItem = ({ food }) => {
  let item = "SUssy"
  return <div className='foodItem'>
    <span>{food[1].name}</span><br />
    <span>{food[1].calories}</span>
    <span>Test pipeline</span>
  </div>;
};

export default FoodItem;
