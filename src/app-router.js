import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";


import Home from './pages/home';
import About from './pages/about';
import Resume from './pages/resume';
import News from './pages/news';

import * as ROUTES from "./data/routes";
import "./theme.scss";

import logo_light from "./photos/00-Logo.png";
import logo_dark from "./photos/01-Logo.png";


function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('theme-color');
    if (currentThemeColor === 'light') {
      setTheme('light');
    } else {
      setTheme('dark')
    }
  }, [])
  
  const themeHandler = () => {
    if (theme === 'light') { 
      localStorage.setItem('theme-color', 'dark');
      setTheme('dark'); 
    } else { 
      localStorage.setItem('theme-color', 'light');
      setTheme('light'); 
    }
  }

  return (
    <div className={`app-router theme-${theme}`}>
      <div className="row container" style={{paddingTop: "3vh", paddingBottom: "3vh"}}>
        <div className="col s6" style={{padding: "10px"}}>
          <img src={theme === 'light' ? logo_light: logo_dark} width="10%"/>
        </div>

        <div className="col s6">
          <div className="switch right">
            <label>
              Light
              <input type="checkbox" checked={theme === 'light' ? false : true} onChange={themeHandler}/>
              <span className="lever"></span>
              Dark
            </label>
          </div>
        </div>
      </div>


      <Router>
        <Route path={ROUTES.HOME} exact component={Home} />
        <Route path={ROUTES.ABOUT} component={About} />
        <Route path={ROUTES.RESUME} component={Resume} />
        <Route path={ROUTES.NEWS} component={News} />
      </Router>

      <div className="row container">
        <div className="col s6" style={{padding: "10px"}}>
          <img src={theme === 'light' ? logo_light: logo_dark} width="5%"/>
        </div>

        <div className="col s6" style={{padding: "10px"}}>
          {/* Links to github, linkedin and instagram */}
        </div>
      </div>
    </div>
  );
}

export default App;
