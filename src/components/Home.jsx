import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <h1>Home Page</h1>
        <Link to='/search'>
            <button>Search</button>
        </Link> 
        <Link to='/history'>
            <button>History</button>
        </Link> 
    </div>
  )};

export default Home;
