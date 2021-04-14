import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from './components/navbar/navbar';
import Home from './pages/home';
import About from './pages/about';
import Footer from './components/footer/footer';

import * as ROUTES from "./data/routes";

import Resume from './pages/resume';
import News from './pages/news';


function App() {
  return (
    <Router>
      <Navbar />

      <Route path={ROUTES.HOME} exact component={Home} />
      <Route path={ROUTES.ABOUT} component={About} />


      <Route path={ROUTES.RESUME} component={Resume} />
      <Route path={ROUTES.NEWS} component={News} />

      <Footer />
    </Router>
  );
}

export default App;
