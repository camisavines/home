import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/home";
import * as ROUTES from "./constant/routes";

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
  
  // const themeHandler = () => {
  //   if (theme === 'light') { 
  //     localStorage.setItem('theme-color', 'dark');
  //     setTheme('dark'); 
  //   } else { 
  //     localStorage.setItem('theme-color', 'light');
  //     setTheme('light'); 
  //   }
  // }


  return (
    <div className={`app-router theme-${theme}`}>
      <Router>
        <Routes>

          <Route path={ROUTES.HOME} exact element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
