import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './pages/home';
import About from "./pages/about";
import Footer from './components/footer/footer';

// import Resume from './pages/resume';
// import Portfolio from './pages/portfolio';
// import News from './pages/news';


function App() {
  return (
    <Router>

      <Route path="/home" exact component={Home} />
      <Route path="/about" component={About} />


      {/* <Route path="/resume" component={Resume} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/news" component={News} /> */}

      <Footer />
    </Router>
  );
}

export default App;
