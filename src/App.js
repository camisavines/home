import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Navbar from "./components/nav";
import Home from "./pages/home";
import Resume from "./pages/resume";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import News from "./pages/news";
import "./styles/index.css";
import 'bootstrap';

function App() {

  return (
    <Router>
      <Navbar />

      <Route path="/" exact component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/resume" component={Resume} />
      <Route path="/contact" component={Contact} />
      <Route path="/news" component={News} />

    </Router>
    
  );
}

export default App;
