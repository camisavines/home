import React from "react";
import { Link } from "react-router-dom";
import * as Routes from "../../constant/routes"

import "./header.css";
import camisa from "../../photos/headshot.jpg";

const Header = () => {
  return (
    <div className="header-container">
      <div style={{display: "flex", alignItems: "center", fontSize: "1.3rem"}}>
        {/* <span className="material-symbols-outlined" style={{ marginRight: "0.5rem"}}>home</span> */}
        <span><Link to={Routes.HOME} className="header-title">Camisa Vines</Link></span>
      </div>
      <div
        style={{
          backgroundImage: `url(${camisa})`,
          height: "3rem",
          width: "3rem",
          borderRadius: "50%",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </div>
  );
};

export { Header };
