import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import $ from 'jquery';

import Home from './pages/home';
import Resume from './pages/resume';
import Portfolio from './pages/portfolio';
import News from './pages/news';

import camisa from './photos/camisa.jpg';
import './css/sidebar.css';
import './css/custom.css';



function App() {

  function sidebarToggle() {
    $('#sidebar, #content').toggleClass('active');
  }


  return (
    <Router>

        <div className="wrapper d-flex align-items-stretch">
          <nav id="sidebar">
            <div className="p-4 pt-5">

                  <a href="camisavines.github.io/home" className="img logo rounded-circle mb-5" style={{backgroundImage: `url(${camisa}`}} />

                  {/* <h4 className="text-center text-white mb-5">Camisa Vines</h4> */}
	                    <ul className="list-unstyled components mb-5">

                        <li><Link to="/home">Home</Link></li>

                        <li>
                          <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pages</a>
                          <ul className="collapse list-unstyled" id="pageSubmenu">
                              <li> <Link to="/resume">Resume</Link> </li>
                              <li> <Link to="/portfolio">Portfolio</Link> </li>
                              <li> <Link to="/news">News</Link> </li>
                          </ul>
                        </li>

                        <li> 
                          <a href="#contactSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Contact</a>
                            <ul className="collapse list-unstyled" id="contactSubmenu">
                              <li><a href="https://github.com/camisavines/" target="_blank">Github</a></li>
                              <li><a href="https://github.iu.edu/cdvines" target="_blank">Github IU</a></li>
                              <li><a href="https://www.linkedin.com/in/camisa-vines-1b8060115/" target="_blank">LinkedIn</a></li>
                            </ul>
                        </li>

                      </ul>

                      <div class="footer"> <p>Sidebar adapted from <a href="https://colorlib.com" target="_blank">Colorlib.com</a></p> </div>
	                </div>
    	        </nav>



                {/* Page Content */}


                <div id="content" className="p-4 p-md-5">
                  <button type="button" id="sidebarCollapse" className="btn btn-primary" onClick={sidebarToggle}>
                    <i className="material-icons">menu</i>
                  </button>


                  <Route path="/home" exact component={Home} />
                  <Route path="/resume" component={Resume} />
                  <Route path="/portfolio" component={Portfolio} />
                  <Route path="/news" component={News} />


                </div>
            </div>

    </Router>
  );
}

export default App;
