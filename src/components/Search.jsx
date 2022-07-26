import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Search = ({ handleSearch }) => {
  const [userInput, setUserInput] = useState('');
  
  return (
    <div>
    <h1>Search Page</h1>
      <form>
        <input 
            type='text' 
            id='search'
            placeholder="Search..."  
            onChange={(e) => setUserInput(e.target.value)}
            />
          <button onClick={(e) => handleSearch(e, userInput)}>Search</button>
      </form>

      <Link to='/'>
        <button>Home</button>
      </Link> 
      <Link to='/history'>
        <button>History</button>
      </Link> 
    </div>
  )};

export default Search;