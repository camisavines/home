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
              <span class="material-symbols-outlined">home</span>
              Home
            </li>
          </Link>
          <li>My journey</li>
          <li>Recently Added</li>
        </ul>
      </div>

      <div className="nav-section">
        <p className="nav-section-header">Playlists</p>
        <ul>
          <Link to={ROUTES.PROJECTS}>
            <li onClick={() => setCurrentPage("Projects")}>
              <span class="material-symbols-outlined">star</span>
              Projects
            </li>
          </Link>
          <Link to={ROUTES.RESUME}>
            <li onClick={() => setCurrentPage("Resume")}>
              <span class="material-symbols-outlined">menu</span>
              Resume
            </li>
          </Link>
          <li>News</li>
          <li>About</li>
          <li>My music</li>
        </ul>
      </div>
    </div>
  );
};

export { Navbar };
