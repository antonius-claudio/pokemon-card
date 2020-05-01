import React, { useState, useEffect } from 'react';
import './Nav.css';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCardsByName } from '../store/actions/cardsActions';

export default function Nav(props) {

    let [search, setSearch] = useState('');
    let [redir, setRedir] = useState(false);

    function onChangeSearch(e) {
        e.preventDefault();
        setSearch(e.target.value);
        setRedir(true);
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCardsByName(search));
    }, [search])

    return (
        <>
            {redir && <Redirect to='/'/>}
            <nav>
                <div className="nav-wrapper">
                <Link to='/' className="brand-logo">Pokemon Card</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <div href="#" className="search">
                            <i className="material-icons left">search</i>
                            <input type="text" onChange={onChangeSearch} value={search} />
                        </div>
                    </li>
                    <li><Link to='/' data-testid="home-page-btn">Home</Link></li>
                    <li><Link to='/mycard'  data-testid="mycard-page-btn">MyCard</Link></li>
                </ul>
                </div>
            </nav>
        </>
    )
}