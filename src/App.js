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
  
  const home = () => (<div><Link to="/pages/home">TO HOME</Link></div>)
  const port = () => (<div><Link to="/pages/portfolio">TO PORTFOLIO</Link></div>)



  return (
    <Router>
      {/* <Navbar /> */}

      <Switch>
        <Route exact path="/pages/home" render={home} />
        <Route exact path="/pages/portfolio" render={port} />
        {/* <Route route="/resume/" component={Resume} />
        <Route path="/contact/" component={Contact} />
        <Route path="/news/" component={News} /> */}
      </Switch>
      


      {/* <Route path="/" exact component={Home} />
      <Route path="/portfolio/" component={Portfolio} />
      <Route route="/resume/" component={Resume} />
      <Route path="/contact/" component={Contact} />
      <Route path="/news/" component={News} /> */}


    </Router>
    
  );
}

export default App;
