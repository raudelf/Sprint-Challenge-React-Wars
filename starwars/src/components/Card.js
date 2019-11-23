import React from 'react';
import styles from 'styled-components';

const PersonCard = styles.div`
width: 450px;
margin: 10px;
padding: 10px
background-color: white;
display: flex;
flex-direction: column;
border-radius: 5px;
`;

const Name = styles.div`
width: 100%;
text-align: center;
`;

const List = styles.ul`
width: 100%;
display: flex;
flex-direction: column;
list-style-type: none;
align-items: center;
justify-content: center;
`;

const Item = styles.li`
width: 100%;
text-align: left;
`;
const Card = props => {
    return (
        <PersonCard className='person-card'>
        <Name>
        <h1>{props.name}</h1>
        <h3>Born: {props.birth}</h3>
        </Name>
        <List>
            <Item><strong>Gender:</strong> {props.gender}</Item>
            <Item><strong>Hair Color:</strong> {props.hair}</Item>
            <Item><strong>Eye Color:</strong> {props.eyes}</Item>
            <Item><strong>Height:</strong> {props.height}</Item>
            <Item><strong>Mass:</strong> {props.mass}</Item>
        </List>

        </PersonCard>
    )
}

export default Card;