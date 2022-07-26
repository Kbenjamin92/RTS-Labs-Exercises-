import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { Routes, Route} from 'react-router-dom';
import Search from './components/Search';
import History from './components/History';
import Home from './components/Home';

const App = () => {
  const [apiData, setApiData] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);

  const getApiData = async (searchTerm) => {
    let url = `https://hn.algolia.com/api/v1/search?query=${searchTerm}`
    try {
      const req = await axios.get(url);
      const res = await req;
      setApiData(res);
    } catch (err) {console.log(err);}
  }

  const handleSearch = (e, term) => {
    e.preventDefault();
    getApiData(term);
    setSearchHistory(prevState => [term, ...prevState])
    console.log(apiData);
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/search' element={<Search handleSearch={handleSearch} />} />
        <Route path='/history' element={<History searchHistory={searchHistory} />} />
      </Routes>

    </div>
  );
}

export default App;
