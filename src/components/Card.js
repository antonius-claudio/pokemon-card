import React from 'react';
import './Card.css';

class Card extends React.Component {
    render() {
        return (
            <>
                {this.props.cards.map((card) => (
                    <div key={card.id} className="col s12 m12 l6 thumbnail animated slideInUp">
                        <div className="contentCard">
                            <div className="imageCard">
                                <img src={card.imageUrl} alt={card.imageUrl}/>
                            </div>
                            <div className="descCard">
                                <h5>{card.name}</h5>
                                <hr></hr>
                                <p>Pokedex Number: {card.nationalPokedexNumber ? card.nationalPokedexNumber : "none"}</p>
                                <p>Types: {card.types ? card.types : "none"}</p>
                                <p className="desc">Desc: {card.text ? card.text : "none"}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </>
        )
    }
}

export default Card;