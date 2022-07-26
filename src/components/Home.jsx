import React from "react";
import '../styles/Home.css'
import { Link } from "react-router-dom";
import MyButton from "./MyButton";


const Home = ({ apiData }) => {
    let errorMessage = 'No Data Yet!'
    const data = apiData.hits;
    const iteratedData = data ? data.map((i, keys) => {
        return (
            <div key={keys} className="result-container">
               <p><span className='result-title'>Author:</span> {i.author}</p>
               <p><span className='result-title'>Title:</span> {i.title}</p>
                <a href={i.url} rel="noreferrer" target="_blank" className='result-title'>Reference Link</a>
            </div>
        );
    }) : errorMessage;
  return (
    <div>
      <h1>Home Page</h1>
      <div className="container"> 
        <div>
            <Link to='/search'>
                <MyButton>Search</MyButton>
            </Link>
        </div>
        <div>
            <Link to='/history'>
                <MyButton>History</MyButton>
            </Link>
        </div>
      </div>
      <h3>Search Results</h3>
      {iteratedData}
    </div>
  );
};

export default Home;
