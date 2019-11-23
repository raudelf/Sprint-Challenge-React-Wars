import React from 'react';

const Card = props => {
    return (
        <div classname='person-card'>
        <h1>{props.name}</h1>
        <h3>Gender: {props.gender} Born: {props.birth} </h3>
        <h3>From {props.homeworld}</h3>
        <ul>
            <li>Hair Color: {props.hair}</li>
            <li>Eye Color: {props.eyes}</li>
            <li>Height: {props.height}</li>
            <li>Mass: {props.mass}</li>
        </ul>

        </div>
    )
}

export default Card;