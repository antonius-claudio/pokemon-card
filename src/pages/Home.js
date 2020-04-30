import React, { useEffect } from 'react';
import { Card } from '../components'
import { useDispatch, useSelector } from 'react-redux';
import { getCards } from '../store/actions/cardsActions';

export default function Home(props) {

    // const dispatch = useDispatch();
    const cards = useSelector(state => state.cardsReducer)

    // useEffect(() => {
    //     dispatch(getCards());
    // }, [])

    return (
        <>
            <div className="row">
                {cards.cards.length === 0 && <h5>wait a sec...</h5>}
                {cards.cards.length != 0 && <Card/>}
            </div>
        </>
    )
}