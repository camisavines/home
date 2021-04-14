import React from 'react';
import { Link } from "react-router-dom";

import * as ROUTES from "../../data/routes";
import logo00 from "../../photos/00-Logo.png";
import './navbar.css';

// Toggle theme colors: https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/

class Navbar extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
                <img src={logo00} width="30" height="30" className="d-inline-block align-top" alt="" />
            </a>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to={ROUTES.HOME} className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={ROUTES.ABOUT} className="nav-link">About</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link to={ROUTES.RESUME} className="nav-link">Resume</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={ROUTES.NEWS} className="nav-link">News</Link>
                    </li> */}
                </ul>
            </div>

        </nav>
        </>
        )
    }

}

export default Navbar