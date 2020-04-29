import React, { useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import {Card} from '../components'
import { useDispatch } from 'react-redux';
import { setCards } from '../store/actions/cardsActions';

export default function Home(props) {

    let [fetchCards, setFetchCards, loading, error] = useFetch(`https://api.pokemontcg.io/v1/cards`);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCards(fetchCards.cards));
    }, [fetchCards])

    return (
        <>
            <div className="row">
                {loading && <h5>wait a sec...</h5>}
                {!loading && <Card/>}
            </div>
        </>
    )
}