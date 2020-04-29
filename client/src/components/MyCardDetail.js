import React from 'react';
import './Card.css';

export default function MyCardDetail(props) {
    return (
        <>
            {props.myCards.myCards.map((card) => (
                <div className="col s12 m12 l6 thumbnail animated slideInUp">
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
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}