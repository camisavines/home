import React from "react";
import { Link } from 'react-router-dom';

import * as ROUTES from '../data/routes';
import '../css/navbar.css';

const Navbar = ({ theme, setTheme }) => {

    const themeHandler = (color) => {
        localStorage.setItem('theme-color', color);
        setTheme(color);
    }

    return (
        <nav className={`navbar navbar-expand-lg py-4 ${theme === 'light' ? 'navbar-light bg-light' : 'navbar-dark bg-dark'}`}>
            <div className="container">

            <Link className="navbar-brand" to={ROUTES.HOME}>Camisa Vines</Link>
            <button className="navbar-toggler btn" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="material-icons">menu</i>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to={ROUTES.RESUME}>Resume</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={ROUTES.POTFOLIO}>Projects</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link" to={ROUTES.NEWS}>News</Link>
                    </li> */}
                    <li className="nav-item">
                        <Link className="nav-link" to={ROUTES.ABOUT}>About</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link" to={ROUTES.USES}>Uses</Link>
                    </li> */}
                </ul>

                <div className="form-inline">
                    <div className="theme-changer light mr-2" onClick={() => {themeHandler('light')}}></div>
                    <div className="theme-changer dark mr-2" onClick={() => {themeHandler('dark')}}></div>
                </div>
            </div>
            </div>
        </nav>
    )
}

export default Navbar