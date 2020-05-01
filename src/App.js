import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import $ from 'jquery';

import Home from './pages/home';
import Resume from './pages/resume';
import Portfolio from './pages/portfolio';
import News from './pages/news';
import './App.css';
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

		  		        <a href="#" className="img logo rounded-circle mb-5" style={{backgroundImage: `url(${"data:image/jpeg;base64,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"})`}}></a>

                  {/* <h4 className="text-center text-white mb-5">Camisa Vines</h4> */}
	                    <ul className="list-unstyled components mb-5">


                        <li><Link to="">Home</Link></li>

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
                              <li><a href="https://www.linkedin.com/in/camisa-vines-1b8060115/" target="_blank">LinkedIn</a></li>
                            </ul>
                        </li>

                      </ul>

                      

                      <div class="footer"> <p>Sidebar adapted from <a href="https://colorlib.com" target="_blank">Colorlib.com</a></p> </div>
	                </div>
    	        </nav>



                {/* Page Content */}


                <div id="content" className="p-4 p-md-5">
                  <nav className="navbar navbar-expand-lg navbar-light bg-light">
                      <div className="container-fluid">

                          <button type="button" id="sidebarCollapse" className="btn btn-primary" onClick={sidebarToggle}>
                              <i className="material-icons">menu</i>
                          </button>

                          {/* <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                              <i className="material-icons">menu</i>
                          </button>

                          <div className="collapse navbar-collapse" id="navbarSupportedContent">
                              <ul className="nav navbar-nav ml-auto">
                                  <li className="nav-item active">
                                      <a className="nav-link" href="#">Home</a>
                                  </li>
                                  <li className="nav-item">
                                      <a className="nav-link" href="#">About</a>
                                  </li>
                                  <li className="nav-item">
                                      <a className="nav-link" href="#">Portfolio</a>
                                  </li>
                                  <li className="nav-item">
                                      <a className="nav-link" href="#">Contact</a>
                                  </li>
                              </ul>
                          </div> */}  

                      </div>
                  </nav>

                  <Route path="/" exact component={Home} />
                  <Route path="/resume" component={Resume} />
                  <Route path="/portfolio" component={Portfolio} />
                  <Route path="/news" component={News} />


                </div>
            </div>

    </Router>
  );
}

export default App;
