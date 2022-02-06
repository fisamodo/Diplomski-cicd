import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from './NavBar/Navbar';
import "./../App.css";
import FoodContainer from './FoodContainer/FoodContainer';


const AppContainer = () => {
  const [food, setFood] = useState([]);

  useEffect(() => {
    getFood();
  }, []);

  const getFood = async () => {
    const response = await axios.get("/names");
    console.log(response);
    setFood(response.data);
  };
  return <div className="containerStyle">
      <Navbar />
      <FoodContainer food={food} />    
  </div>;
};

export default AppContainer;
