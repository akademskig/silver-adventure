import appLogo from "../assets/logo.svg"
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="app__header">
            <img alt="app-logo" src={appLogo}></img>
            <div className="app__header__line">
            </div>
        </header>
    );
}

export default Header