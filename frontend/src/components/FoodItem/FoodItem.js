import React from 'react';
import './../FoodContainer/FoodContainer.css'
const FoodItem = ({ food }) => {
  return <div className='foodItem'>
    <span>{food[1].name}</span><br />
    <span>{food[1].calories}</span>
    <span>Sossy</span>
    <span>Test pipeline 12:23</span>
  </div>;
};

export default FoodItem;
