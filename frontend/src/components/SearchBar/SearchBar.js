import React from "react";
import "./SearchBar.css";
const SearchBar = () => {
  return (
    <div className="container">
      <span>Search your food</span>
      <input
        className="searchBarStyle"
        type="text"
        placeholder="Text here..."
      />
    </div>
  );
};

export default SearchBar;
