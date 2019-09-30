import React from 'react';
import { BrowserRouter as Link } from "react-router-dom";
import "../styles/index.css";
import 'bootstrap';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark">
          <Link to="/home" className="navbar-brand">Camisa Vines</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse pb-8" id="navbarsExample03">
              <ul className="navbar-nav mr-auto">
                  <li className="nav-item"><Link to="/resume" className="nav-link">Resume</Link></li>
                  <li className="nav-item"><Link to="/portfolio" className="nav-link">Portfolio</Link></li>
                  <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
            </ul>
          </div>
        </nav>
    )
}

export default Navbar;
