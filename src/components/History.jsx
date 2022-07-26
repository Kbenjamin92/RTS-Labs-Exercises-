import React from "react";
import { Link } from "react-router-dom";
import MyButton from "./MyButton";

const History = ({ searchHistory }) => {
  const history = searchHistory.map((item, keys) => {
    return (
      <div key={keys}>
        <p>{item}</p>
      </div>
    );
  });
  return (
    <div>
      <h1>History Page</h1>
      <div className="container">
        <div>
          <Link to='/'>
            <MyButton>Home</MyButton>
          </Link>
        </div>
        <div>
          <Link to='/search'>
            <MyButton>Search</MyButton>
          </Link>
        </div>
      </div>
      
    <h3>Below are your previous searches.</h3>
    {history}
    </div>
  );
};

export default History;
