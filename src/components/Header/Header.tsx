import React from 'react';

import avatar from '../../img/avatar.jpg';
import './Header.scss';
const Header = () => {
    return (
        <header className="header _container">
            <div className="header__search">
                <svg width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.16666 6.22411c0-2.79315 2.24019-5.05745 5.00362-5.05745 1.32704 0 2.59973.53283 3.53809 1.48129.93833.94846 1.46553 2.23484 1.46553 3.57616 0 2.79316-2.2402 5.05749-5.00362 5.05749-2.76343 0-5.00362-2.26433-5.00362-5.05749Zm9.92444 4.07419 1.4902 1.2029h.0259c.3015.3048.3015.7988 0 1.1036-.3015.3047-.7903.3047-1.0918 0l-1.2367-1.4174c-.1169-.1177-.1826-.2777-.1826-.4445 0-.1669.0657-.3268.1826-.4446.2255-.2239.5869-.2239.8124 0Z" fill="#490057" opacity=".8" /></svg>
                <input type="text" placeholder='Search' className="header__input" />
            </div>
            <div className="header__profile">
                <div className="header__user-info">
                    <div className="header__user-name">Charles Deo</div>
                    <button className="header__log">Log out</button>
                </div>

                <div className="header__avatart">
                    <img src={avatar} alt="" />
                </div>

            </div>
        </header>


    )
}
export default Header;