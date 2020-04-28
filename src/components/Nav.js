import React, { useState } from 'react';
import './Nav.css';
// import useInput from '../hooks/useInput';
import useFetch from '../hooks/useFetch';

export default function Nav(props) {

    // const { data: search, onChange: onChangeSearch, onReset: onResetSearch} = useInput('');
    
    let [search, setSearch] = useState('');
    let [filterCards, filterSetCards , filterLoading, filterError] = useFetch(`https://api.pokemontcg.io/v1/cards?name=${search}`);
    
    function onChangeSearch(e) {
        e.preventDefault();
        setSearch(e.target.value);
        // console.log(JSON.stringify(filterCards))
        if(search !== ''){
            props.setToCards(filterCards);
        }
    }

    return (
        <>
            <nav>
                <div class="nav-wrapper">
                <a href="#" class="brand-logo">Pokemon Card</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li>
                        <div href="#" className="search">
                            <i class="material-icons left">search</i>
                            <input type="text" onChange={onChangeSearch} value={search} />
                        </div>
                    </li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">MyCard</a></li>
                </ul>
                </div>
            </nav>
        </>
    )
}