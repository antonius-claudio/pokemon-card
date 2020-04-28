import React from 'react';
import './Nav.css';

export default function Nav(props) {
    return (
        <>
            <nav>
                <div class="nav-wrapper">
                <a href="#" class="brand-logo">Pokemon Card</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">MyCard</a></li>
                </ul>
                </div>
            </nav>
        </>
    )
}

// class Nav extends React.Component {
//     render() {
//         return (
//             <>
//                 <nav>
//                     <div class="nav-wrapper">
//                     <a href="#" class="brand-logo">Pokemon Card</a>
//                     <ul id="nav-mobile" class="right hide-on-med-and-down">
//                         <li><a href="#">Home</a></li>
//                         <li><a href="#">MyCard</a></li>
//                     </ul>
//                     </div>
//                 </nav>
//             </>
//         )
//     }
// }

// export default Nav;