import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Card from './components/Card';
import styles from 'styled-components';

const App = () => {
  
  const [person, setPerson] = useState([]);

  const fetchUser = props => {
    axios.get('https://swapi.co/api/people/')
    .then(res => {
      console.log(res);
      return setPerson(res.data.results);
    })
    .catch(err => {
      return `Error: ${err}`;
    })
  };
  useEffect(fetchUser, []);

  const Container = styles.div`
  margin: 0 auto;
  width: 1000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  `;

  const Headline = styles.div`
  width: 100%;
  text-align: center;
  `;

  return (
    <Container className="App">
      <Headline>
      <h1 className="Header">React Wars</h1>
      </Headline>
      {person.map((value, index) => {
        return <Card name={value.name} gender={value.gender} birth={value.birth_year} hair={value.hair_color} eyes={value.eye_color} height={value.height} mass={value.mass} key={index}/>
      })}
    </Container>
  );
}

export default App;
