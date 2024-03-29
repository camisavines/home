import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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

  // useEffect(() => {
  //   const currentThemeColor = localStorage.getItem('theme-color');
  //   if (currentThemeColor === 'light') {
  //     setTheme('light');
  //   } else {
  //     setTheme('dark');
  //   }
  // }, []);

  return (
    <Router className={`app-router theme-${theme}`}>
      <Navbar setTheme={setTheme} theme={theme} />

      <div className={`container-fluid ${theme === 'light' ? "theme-light" : "theme-dark"}`}>
        <Routes>

          <Route exact path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.RESUME} element={<Resume />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.NEWS} element={<News />} />
          <Route path={ROUTES.PORTFOLIO} element={<Portfolio />} />

        </Routes>
      </div>
      
      <Footer theme={theme} />
    </Router>
  );
}

export default App;
