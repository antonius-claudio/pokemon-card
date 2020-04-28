import React from 'react';
import './Nav.css';

export default function Nav(props) {
    return (
        <>
            <nav>
                <div class="nav-wrapper">
                <a href="#" class="brand-logo">Pokemon Card</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    {/* <li><a href="sass.html"><i class="material-icons left">search</i><input></input></a></li> */}
                    <li><a href="#">Home</a></li>
                    <li><a href="#">MyCard</a></li>
                </ul>
                </div>
            </nav>
        </>
    )
}