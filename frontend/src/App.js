import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    getNames();
  }, []);

  const getNames = async () => {
    const response = await axios.get("/names");
    console.log(response);
    setUserName(response.data);
  };
  return (
    <>
      <h1>My Website</h1>
      <h3>My name is {userName}</h3>
      <h3>That's 9 fights in a row</h3>
      <h3>My name is Leon Edwards</h3>
    </>
  );
}

export default App;
