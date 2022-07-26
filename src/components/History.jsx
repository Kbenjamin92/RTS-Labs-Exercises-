import React from "react";
import { Link } from 'react-router-dom';

const History = () => {
  return (
    <div>
      <h1>History Page</h1>
      <Link to='/'>
        <button>Home</button>
      </Link> 
      <Link to='/search'>
        <button>Search</button>
      </Link> 
    </div>
  )};

export default History;
