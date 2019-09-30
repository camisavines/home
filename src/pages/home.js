import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import WebProject from "../components/webProject";
import "../styles/home.css";

import fw from "../photos/fw.png";

function Home() {
    return (

        <div>

            <div className="justify-center text-center full" id="home">
                <div className="container">
                    <h1>CAMISA VINES</h1>
                    <h3>DEVELOPER + DESIGNER</h3>
                </div>
            </div>

            <div className="justify-center container-fluid">
                <div className="row text-center">
                    <div className="col-4 home-link"><Link to="/portfolio">PROJECTS</Link></div>
                    <div className="col-4 home-link"><Link to="/resume">RESUME</Link></div>
                    <div className="col-4 home-link"><Link to="/news">NEWS</Link></div>
                </div>
            </div>

            <div className="justify-center container-fluid">
                <div className="row text-center">
                    {/* <WebProject name="Future Wonder Website" link="https://www.futurewonder.com/" width="3" image={fw}/> */}
                    {/* Add a few projects here */}
                </div>
            </div>

            <div className="justify-center container-fluid">
                <div className="row text-center">
                    <div className="col-4 home-link"><a href="https://github.com/camisavines" target="_blank">GITHUB</a></div>
                    <div className="col-4 home-link"><Link to="/contact">CONTACT</Link></div>
                    <div className="col-4 home-link"><a href="https://www.linkedin.com/in/camisa-vines-1b8060115/" target="blank">LINKEDIN</a></div>
                </div>
            </div>

        </div>

    )
}

export default Home;