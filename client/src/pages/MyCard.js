import React from 'react';
import Card from '../components/Card';

export default function MyCard(props) {
    return (
        <>
            <h1>My Card</h1>
            {props.myCards && <Card cards={props.myCards}/>}
        </>
    )
}