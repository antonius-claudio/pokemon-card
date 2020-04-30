import React from 'react';
import './Card.css';
import { useDispatch } from 'react-redux';
import { removeMyCardsById } from '../store/actions/myCardsActions';
import { useSelector } from 'react-redux';

export default function MyCardDetail(props) {
    const dispatch = useDispatch();
    let myCards = useSelector(state => state.myCardsReducer.myCards);
    
    function removeMyCard(id) {
        console.log('remove', id)
        dispatch(removeMyCardsById(id));
        console.log('daataa', JSON.stringify(myCards))
    }

    return (
        <>
            {myCards && myCards.map((card) => (
                <div key={card.id} className="col s12 m12 l6 thumbnail animated slideInUp">
                    <div className="contentCard">
                        <div className="imageCard">
                            <img src={card.imageUrl} alt={card.imageUrl} />
                        </div>
                        <div className="descCard">
                            <h5>{card.name}</h5>
                            <hr></hr>
                            {card.nationalPokedexNumber && <p>Pokedex Number: {card.nationalPokedexNumber}</p>}
                            {card.types && <p>Types: {card.types}</p>}
                            {card.supertype && <p>Supertype: {card.supertype}</p>}
                            {card.subtype && <p>Subtype: {card.subtype}</p>}
                            {card.evolvesFrom && <p>Evolves From: {card.evolvesFrom}</p>}
                            {card.hp && <p>HP: {card.hp}</p>}
                            {card.rarity && <p>Rarity: {card.rarity}</p>}
                            {card.text && <p>Desc: {card.text}</p>}
                            <p>
                                <div onClick={()=>{removeMyCard(card.id)}} value={card.id}>
                                    <a class="waves-effect waves-light btn">
                                        <i class="material-icons right">
                                            delete
                                        </i>
                                        Delete
                                    </a>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}