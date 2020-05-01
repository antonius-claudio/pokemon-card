import React from 'react';
import { MyCardDetail } from '../components';
import { useSelector } from 'react-redux';

export default function MyCard(props) {
    const myCards = useSelector(state => state.myCardsReducer);

    return (
        <>
            <h3 data-testid="contentMyCard">My Card</h3>
            <hr/>
            {myCards.myCards.length===0 && <h5>Empty Bag</h5>}
            {/* <MyCardDetail myCards={myCards}/> */}
            <MyCardDetail/>
        </>
    )
}