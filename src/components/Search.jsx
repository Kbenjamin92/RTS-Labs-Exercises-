import React, { useState } from "react";
import '../styles/Search.css'
import { Link } from "react-router-dom";
import MyButton from "./MyButton";

const Search = ({ handleSearch, searchMessage }) => {
  const [userInput, setUserInput] = useState("");
  return (
    <div>
      <h1>Search Page</h1>
      <form>
        <input
          type='text'
          id='search'
          placeholder='Search...'
          onChange={(e) => setUserInput(e.target.value)}
          className="search-form"
        />
        <MyButton onClick={(e) => handleSearch(e, userInput)}>Search</MyButton>
      </form>
    <div className="container">
      <div>
        <Link to='/'>
          <MyButton>Home</MyButton>
        </Link>
      </div>
      <div> 
        <Link to='/history'>
          <MyButton>History</MyButton>
        </Link>
      </div>
    </div>
      
      <h2>{searchMessage}</h2>
    </div>
  );
};

export default Search;
