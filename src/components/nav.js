import React from 'react';
import "../styles/index.css";

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark">
            <a className="navbar-brand" href="/">Camisa Vines</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

                <div className="collapse navbar-collapse pb-8" id="navbarsExample03">
                    <ul className="navbar-nav mr-auto">
                        {/* <li className="nav-item"><a className="nav-link" href="/about/">About</a></li> */}
                        <li className="nav-item"><a className="nav-link" href="/portfolio">Portfolio</a></li>
                        <li className="nav-item"><a className="nav-link" href="/resume">Resume</a></li>
                        {/* <li className="nav-item"><a className="nav-link" href="/contact/">Contact</a></li> */}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;