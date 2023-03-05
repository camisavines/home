import React from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../data/routes";
import "../css/navbar.css";

const Navbar = ({ theme, setTheme }) => {
  const themeHandler = (color) => {
    localStorage.setItem("theme-color", color);
    setTheme(color);
  };

  return (
    <>
      <nav
        className={`navbar ${
          theme === "light"
            ? "navbar-light theme-light"
            : "navbar-dark theme-dark"
        }`}
      >
        <div className="nav-wrapper container" style={{ border: "none" }}>
          <Link to={ROUTES.HOME}>
            <span className="brand-logo">Camisa Vines</span>
          </Link>

          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to={ROUTES.ABOUT}>About</Link>
            </li>
            <li><a href="#" onClick={() => {themeHandler(theme === "light" ? "dark": "light")}}><i className="material-icons">{theme === "light"? "light_mode" : "dark_mode"}</i></a></li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <Link to={ROUTES.ABOUT}>About</Link>
        </li>
      </ul>
    </>
    // <nav className={`navbar navbar-expand-lg py-4 ${theme === 'light' ? 'navbar-light theme-light' : 'navbar-dark theme-dark'}`}>
    //     <div className="container">

    //     <Link className="navbar-brand" to={ROUTES.HOME}>Camisa Vines</Link>
    //     <button className="navbar-toggler btn" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //         <i className="material-icons">menu</i>
    //     </button>

    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //         <ul className="navbar-nav mr-auto">
    //             <li className="nav-item">
    //                 <Link className="nav-link" to={ROUTES.RESUME}>Resume</Link>
    //             </li>
    //             <li className="nav-item">
    //                 <Link className="nav-link" to={ROUTES.PORTFOLIO}>Projects</Link>
    //             </li>
    //             <li className="nav-item">
    //                 <Link className="nav-link" to={ROUTES.NEWS}>News</Link>
    //             </li>
    //             <li className="nav-item">
    //                 <Link className="nav-link" to={ROUTES.ABOUT}>About</Link>
    //             </li>
    //         </ul>

    //         <div className="form-inline">
    //             <div className="theme-changer light mr-2" onClick={() => {themeHandler('light')}}></div>
    //             <div className="theme-changer dark mr-2" onClick={() => {themeHandler('dark')}}></div>
    //         </div>
    //     </div>
    //     </div>
    // </nav>
  );
};

export default Navbar;
