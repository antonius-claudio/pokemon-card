import React from 'react';
import './Detail.css';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { useSelector, useDispatch } from 'react-redux';
import { setMyCards } from '../store/actions/myCardsActions';
import { Link } from 'react-router-dom';

export default function Detail(props) {
    let {id} = useParams();
    let [ card, setCard, loading, error ] = useFetch(`https://api.pokemontcg.io/v1/cards/${id}`);
    const myCards = useSelector(state => state.myCardsReducer);
    const dispatch = useDispatch();
    console.log('isi card', card)
    console.log('isi mycards', myCards)
    let {
        name, 
        imageUrlHiRes, 
        nationalPokedexNumber,
        types,
        supertype,
        subtype,
        rarity,
        hp,
        attacks,
        text
    } = {...card.card};

    function onAddMyCard(e) {
        e.preventDefault();
        if (!myCards.myCards.find(myCard => myCard.id === card.card.id)) {
            dispatch(setMyCards(myCards.myCards.concat(card.card)))
        } else {
            console.log('Card already owned!')
        }
    }
    return (
        <>
            <div className="contentDetail">
                {loading && <h3>Wait a sec ...</h3>}
                {card && 
                    <>
                    <div className="titleDetail">
                        <h3>{name}</h3>
                    </div>
                    <hr></hr>
                    <div className="bodyDetail">
                        <div className="leftDetail">
                            <img src={imageUrlHiRes} alt={name} className="responsive-img"></img>
                        </div>
                        <div className="rightDetail">
                            <div className="row">
                                {nationalPokedexNumber && 
                                    <>
                                        <div className="col s3">
                                            Pokedex Number:
                                        </div>
                                        <div className="col s9">
                                            {nationalPokedexNumber}
                                        </div>
                                    </>
                                }
                                {types && 
                                    <>
                                        <div className="col s3">
                                                Types:
                                        </div>
                                        <div className="col s9">
                                            {types}
                                        </div>
                                    </>
                                }
                                {supertype && 
                                    <>
                                        <div className="col s3">
                                            Supertype:
                                        </div>
                                        <div className="col s9">
                                            {supertype}
                                        </div>
                                    </>
                                }
                                {subtype && 
                                    <>
                                        <div className="col s3">
                                            Subtype:
                                        </div>
                                        <div className="col s9">
                                            {subtype}
                                        </div>
                                    </>
                                }
                                {rarity && 
                                    <>
                                        <div className="col s3">
                                            Rarity:
                                        </div>
                                        <div className="col s9">
                                            {rarity}
                                        </div>
                                    </>
                                }
                                {hp && 
                                    <>
                                        <div className="col s3">
                                            HP:
                                        </div>
                                        <div className="col s9">
                                            {hp}
                                        </div>
                                    </>
                                }
                                {attacks && 
                                    <>
                                        <div className="col s3">
                                            Attacks:
                                        </div>
                                        <div className="col s9">
                                            <span>
                                                <ol>
                                                    {attacks.map((attack,index) => (
                                                        <li key={index}>
                                                            {attack.name}
                                                        </li>
                                                    ))}
                                                </ol>
                                            </span>
                                        </div>
                                    </>
                                }
                                {text && 
                                    <>
                                        <div className="col s3">
                                            Desc:
                                        </div>
                                        <div className="col s9">
                                            {text}
                                        </div>
                                    </>
                                }
                                <div className="col s3 offset-s6 buttonAdd">
                                    <Link to="/" class="waves-effect waves-light btn">
                                        <i class="material-icons right">
                                            arrow_back
                                        </i>
                                        Back
                                    </Link>
                                </div>
                                <div className="col s3 buttonAdd">
                                    <a  class="waves-effect waves-light btn" onClick={onAddMyCard}>
                                        <i class="material-icons right">
                                            add
                                        </i>
                                        add MyCard
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    </>
                }
            </div>
        </>
    )
}