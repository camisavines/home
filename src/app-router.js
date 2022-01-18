import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";


import Home from './pages/home';
import Resume from './pages/resume';
import About from './pages/about';
import News from './pages/news';
import Portfolio from './pages/portfolio';
import Navbar from './components/navbar';
import Footer from './components/footer';
import * as ROUTES from "./data/routes";

import "./css/index.css";
import "./theme.scss";


const App = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('theme-color');
    if (currentThemeColor === 'light') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);
  

  return (
      <Router className={`app-router theme-${theme}`}>
        <Navbar setTheme={setTheme} theme={theme} />

        <div className={`container-fluid ${theme === 'light' ? "bg-light" : "bg-dark"}`}>
          <Route exact path={ROUTES.HOME} component={Home}/>
          <Route path={ROUTES.RESUME} component={Resume} />
          <Route path={ROUTES.ABOUT} component={About} />
          <Route path={ROUTES.NEWS} component={News} />
          <Route path={ROUTES.POTFOLIO} component={Portfolio} />
      
        </div>
      
        <Footer />
    </Router>
  );
}

export default App;
