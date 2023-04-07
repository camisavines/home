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
            {/* <li>
              <Link to={ROUTES.ABOUT}>About</Link>
            </li> */}
            <li>
              <Link to={ROUTES.PORTFOLIO}>Projects</Link>
            </li>
            <li>
              <Link to={ROUTES.RESUME}>Resume</Link>
            </li>
            <li>
              <Link to={ROUTES.NEWS}>News</Link>
            </li>
            <li>
              <Link to="https://camiseta.launchcart.store/" target={"_blank"}>Store</Link>
            </li>
            
            <li>
              <a
                onClick={() => {
                  themeHandler(theme === "light" ? "dark" : "light");
                }}
              >
                <i className="material-icons">
                  {theme === "light" ? "light_mode" : "dark_mode"}
                </i>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <a
            onClick={() => {
              themeHandler(theme === "light" ? "dark" : "light");
            }}
          >
            <i className="material-icons">
              {theme === "light" ? "light_mode" : "dark_mode"}
            </i>
          </a>
        </li>
        {/* <li>
          <Link to={ROUTES.ABOUT}>About</Link>
        </li> */}
        <li>
          <Link to={ROUTES.PORTFOLIO}>Projects</Link>
        </li>
        <li>
          <Link to={ROUTES.RESUME}>Resume</Link>
        </li>
        <li>
          <Link to={ROUTES.NEWS}>News</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
