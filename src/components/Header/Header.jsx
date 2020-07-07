import React from 'react';
import './header.scss';

const Header = () => {
    return (
        <header className="d-flex justify-content-between">
            <h1 className="header__title">Kiwi Flights</h1>
            <nav>
                <a href="#">search</a>
            </nav>
        </header>
    )
}

export default Header;