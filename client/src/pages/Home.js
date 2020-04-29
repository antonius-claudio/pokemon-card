import React from 'react';
import {Card} from '../components'
export default function Home(props) {
    // // let [cards, setCards, loading, error] = useFetch(`https://api.pokemontcg.io/v1/cards`);
    // function setToCards(resultFind) {
    //     setCards(resultFind);
    // }
    return (
        <>
            <div className="row">
                {props.loading && <h5>wait a sec...</h5>}
                {props.cards.cards && <Card cards={props.cards.cards}/>}
            </div>
        </>
    )
}