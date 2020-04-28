import React, { Component } from 'react';
import './Detail.css';

export default function Detail(props) {
    let { id,
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
    } = props.card;

    function onAddMyCard(e) {
        e.preventDefault();
        props.addToMyCard(props.card);
    }
    return (
        <>
            <div className="contentDetail">
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
                            <div className="col s12 buttonAdd">
                                <a class="waves-effect waves-light btn" onClick={onAddMyCard}>
                                    <i class="material-icons right">
                                        add
                                    </i>
                                    add MyCard
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}