import React, { useEffect, useState } from 'react';
import './Detail.css';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setMyCards } from '../store/actions/myCardsActions';
import { getCardsById } from '../store/actions/cardsActions';
import { Link } from 'react-router-dom';
// import 'materialize-css';
// import { Toast } from 'react-materialize';

export default function Detail(props) {
    let {id} = useParams();
    const myCards = useSelector(state => state.myCardsReducer);
    const cards = useSelector(state => state.cardsReducer);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getCardsById(id));
    }, [])

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
    } = {...cards.selected.selected};
    // let [ message, setMessage ] = useState(null);

    function check() {
        return myCards.myCards.find(myCard => myCard.id === id) ? false : true;
    }

    function onAddMyCard(e) {
        e.preventDefault();
        if (!myCards.myCards.find(myCard => myCard.id === cards.selected.selected.id)) {
            dispatch(setMyCards(myCards.myCards.concat(cards.selected.selected)));
        } else {
            console.log('Card already owned!')
            // setMessage('Card already owned!');
        }
    }
    return (
        <>
        {/* {JSON.stringify(cards.selected.selected)} */}
            <div className="contentDetail">
            {/* {message && <Toast options={{html: message}}>{message}</Toast>} */}
                {cards.selected.selected && 
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
                                {check() && 
                                    <div className="col s3 buttonAdd">
                                        <a  class="waves-effect waves-light btn" onClick={onAddMyCard}>
                                            <i class="material-icons right">
                                                add
                                            </i>
                                            add MyCard
                                        </a>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    </>
                }
            </div>
        </>
    )
}