import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


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
      <Router>
      <div className="row nav-container container">
        <div className="col s1 left">
          <Link to={ROUTES.HOME}>
            <img src={theme === 'light' ? logo_light: logo_dark} height="50vh" className="center" />
          </Link>
        </div>
        {/* empty div for spacing */}
        <div className="col s5"></div>

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


        <Route path={ROUTES.HOME} exact component={Home} />
        <Route path={ROUTES.ABOUT} component={About} />
        {/* <Route path={ROUTES.RESUME} component={Resume} /> */}
        {/* <Route path={ROUTES.NEWS} component={News} /> */}


      <div className="row nav-container container">
        <div className="col s1 left">
          <Link to={ROUTES.HOME}>
            <img src={theme === 'light' ? logo_light: logo_dark} height="30vh" className="center" />
          </Link>
        </div>

        {/* empty div for spacing */}
        <div className="col s11">
          <p className="right">
            <span><a href="https://www.linkedin.com/in/camisavines/">LinkedIn</a></span>
            <span style={{marginLeft: "20px"}}><a href="https://github.com/camisavines">Github</a></span>
            {/* <span style={{marginLeft: "20px"}}>Instagram</span> */}
          </p>
        </div>

      </div>
      </Router>
    </div>
  );
}

export default App;
