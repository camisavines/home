import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import $ from 'jquery';

import Home from './pages/home';
import Resume from './pages/resume';
import Portfolio from './pages/portfolio';
import News from './pages/news';

import camisa from './photos/camisa.jpg';
// import './css/sidebar.css';
// import './css/custom.css';



function App() {

  function sidebarToggle() {
    $('#sidebar, #content').toggleClass('active');
  }


  return (
    <Router>

      <Route path="/home" exact component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/news" component={News} />

    </Router>
  );
}

export default App;
