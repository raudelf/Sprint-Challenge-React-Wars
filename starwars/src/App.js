import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  
  const [person, setPerson] = useState([]);

  const fetchUser = props => {
    axios.get('https://swapi.co/api/people/')
    .then(res => {
      console.log(res);
      return setPerson(res);
    })
    .catch(err => {
      return `Error: ${err}`;
    })
  };

  
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    </div>
  );
}

export default App;
