import React from "react";
import { Link } from "react-router-dom";

const Home = ({ apiData }) => {
    let errorMessage = 'No Data Yet!'
    const data = apiData.hits;
    const iteratedData = data ? data.map((i, keys) => {
        return (
            <div key={keys}>
               <p><span>Author:</span> {i.author}</p>
               <p><span>Title:</span> {i.title}</p>
                <a href={i.url} rel="noreferrer" target="_blank">Reference Link</a>
            </div>
        );
    }) : errorMessage;
  return (
    <div>
      <h1>Home Page</h1>
      <Link to='/search'>
        <button>Search</button>
      </Link>
      <Link to='/history'>
        <button>History</button>
      </Link>
      <h3>Search Results</h3>
      {iteratedData}
    </div>
  );
};

export default Home;
