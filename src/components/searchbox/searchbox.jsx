import React from "react";
import "./saeachbox.css";

const SearchBox = ({placeholder, handlechange }) => {
  return (
    <input
    type="search"
    className='search'
    placeholder={placeholder}
    onChange={handlechange}
  />

  );
};

export default SearchBox;
