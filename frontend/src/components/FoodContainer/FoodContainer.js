import React from 'react';
import FoodItem from '../FoodItem/FoodItem';
import './FoodContainer.css'

const FoodContainer = ({food}) => {
  return <div className='foodContainer'>
    {Object.entries(food)?.map((item, i) => (
      <FoodItem food={item} />
    ))}

  </div>;
};

export default FoodContainer;
