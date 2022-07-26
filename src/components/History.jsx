import React from "react";
import { Link } from "react-router-dom";

const History = ({ searchHistory }) => {
  let UIMessage = 'No Search Data Yet!'
  const history = searchHistory ? searchHistory.map((item, keys) => {
    return (
      <div key={keys}>
        <p>{item}</p>
      </div>
    )
  }) : UIMessage;
  return (
    <div>
      <h1>History Page</h1>
      <Link to='/'>
        <button>Home</button>
      </Link>
      <Link to='/search'>
        <button>Search</button>
      </Link>
    <h3>Below are your previous searches.</h3>
    {history}
    </div>
  );
};

export default History;
