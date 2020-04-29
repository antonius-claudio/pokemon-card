import React, { useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import {Card} from '../components'
import { useSelector, useDispatch } from 'react-redux';
import { setCards } from '../store/actions/cardsActions';

export default function Home(props) {

    let [fetchCards, setFetchCards, loading, error] = useFetch(`https://api.pokemontcg.io/v1/cards`);
    const dispatch = useDispatch();
    const cards = useSelector(state => state.cards);

    useEffect(() => {
        console.log('masuk use effect')
        dispatch(setCards(fetchCards.cards));
    }, [])

    return (
        <>
            <div className="row">
                {JSON.stringify(cards)}
                {/* {props.loading && <h5>wait a sec...</h5>}
                {props.cards.cards && <Card cards={props.cards.cards}/>} */}
            </div>
        </>
    )
}