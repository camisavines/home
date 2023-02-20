import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import { Home, Projects } from "./pages";
import { Layout, Navbar, Header } from "./components";
import * as ROUTES from "./constant/routes";
import "./theme.scss";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("theme-color");
    if (currentThemeColor === "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, []);

  return (
    <div className={`app-router theme-${theme}`}>
      <Router>
        <div className="row">
        
          <div className="col m3 l2" style={{ padding: "0" }}>
            <Navbar setTheme={setTheme} theme={theme} />
          </div>

          <div className="col s12 m9 l10" style={{ padding: "0" }}>
            <Header />
            <div style={{ padding: "0 2rem"}}>


            <Routes>
              <Route path={ROUTES.HOME} exact element={<Home />} />
              <Route path={ROUTES.PROJECTS} element={<Projects />} />
            </Routes>
            </div>
          </div>
        
        </div>
      </Router>
    </div>
  );
}

export default App;
