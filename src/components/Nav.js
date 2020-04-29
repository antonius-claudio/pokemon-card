import React, { useState, useEffect } from 'react';
import './Nav.css';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCards } from '../store/actions/cardsActions';


export default function Nav(props) {

    let [search, setSearch] = useState('');
    let [filterCards, filterSetCards , filterLoading, filterError] = useFetch(`https://api.pokemontcg.io/v1/cards?name=${search}`);
    
    function onChangeSearch(e) {
        e.preventDefault();
        setSearch(e.target.value);
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCards(filterCards.cards));
    }, [filterCards])

    return (
        <>
            <nav>
                <div class="nav-wrapper">
                <Link to='/' class="brand-logo">Pokemon Card</Link>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li>
                        <div href="#" className="search">
                            <i class="material-icons left">search</i>
                            <input type="text" onChange={onChangeSearch} value={search} />
                        </div>
                    </li>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/mycard'>MyCard</Link></li>
                </ul>
                </div>
            </nav>
        </>
    )
}