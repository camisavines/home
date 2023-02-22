import React, { useState } from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../../constant/routes";
import "./navbar.css";

const Navbar = ({ theme, setTheme }) => {
  const [currentPage, setCurrentPage] = useState("Home");
  const themeHandler = (color) => {
    localStorage.setItem("theme-color", color);
    setTheme(color);
  };

  return (
    <div className="navbar-container">
      <div className="themes">
        <div
          className="theme-changer light mr-2"
          onClick={() => {
            themeHandler("light");
          }}
        ></div>
        <div
          className="theme-changer dark mr-2"
          onClick={() => {
            themeHandler("dark");
          }}
        ></div>
      </div>

      {/* Listen Now */}
      <div
        style={{
          background: "rgba(70,70,70,0.2)",
          padding: "0.5rem",
          borderRadius: ".25rem",
          marginBottom: "2rem",
        }}
      >
        {currentPage}
      </div>

      {/* Section 1 */}
      <div className="nav-section">
        <p className="nav-section-header">Library</p>
        <ul>
          <Link to={ROUTES.HOME}>
            <li onClick={() => setCurrentPage("Home")}>
              <span className="material-symbols-outlined">home</span>
              Home
            </li>
          </Link>
          {/* <Link to={ROUTES.HOME}>
            <li onClick={() => setCurrentPage("Recently Added")}>
              <span className="material-symbols-outlined">headphones</span>
              Recently Added
            </li>
          </Link> */}
        </ul>
      </div>

      <div className="nav-section">
        <p className="nav-section-header">Playlists</p>
        <ul>
          <Link to={ROUTES.PROJECTS}>
            <li onClick={() => setCurrentPage("Projects")}>
              <span className="material-symbols-outlined">star</span>
              Projects
            </li>
          </Link>
          <Link to={ROUTES.RESUME}>
            <li onClick={() => setCurrentPage("Resume")}>
              <span className="material-symbols-outlined">menu</span>
              Resume
            </li>
          </Link>
          {/* <Link to={ROUTES.NEWS}>
            <li onClick={() => setCurrentPage("News")}>
              <span className="material-symbols-outlined">newspaper</span>
              News
            </li>
          </Link> */}
          
          {/* <Link to={ROUTES.ABOUT}>
            <li onClick={() => setCurrentPage("About")}>
              <span className="material-symbols-outlined">menu</span>
              About
            </li>
          </Link> */}

          {/* <Link to={ROUTES.JOURNEY}>
            <li onClick={() => setCurrentPage("My Journey")}>
              <span className="material-symbols-outlined">flight</span>
              My journey
            </li>
          </Link> */}
        </ul>
      </div>
    </div>
  );
};

export { Navbar };
