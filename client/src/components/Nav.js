import React, { useState } from 'react';
import './Nav.css';
// import useInput from '../hooks/useInput';
import useFetch from '../hooks/useFetch';
import {Link} from 'react-router-dom';

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
                <Link to='/' class="brand-logo">Pokemon Card</Link>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li>
                        <div href="#" className="search">
                            <i class="material-icons left">search</i>
                            <input type="text" onChange={onChangeSearch} value={search} />
                        </div>
                    </li>
                    {/* <li><a href="#">Home</a></li> */}
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/mycard'>MyCard</Link></li>
                </ul>
                </div>
            </nav>
        </>
    )
}