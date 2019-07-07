import appLogo from "../assets/logos/logo.svg"
import React from 'react';
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header className="app__header">
            <Link to="/">
                <img alt="app-logo" src={appLogo}></img>
            </Link>
            <div className="app__header__line">
            </div>
        </header>
    );
}

export default Header