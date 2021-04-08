import React from 'react';
import { Link } from "react-router-dom";
import * as ROUTES from "../../data/routes";

import logo00 from "../../photos/00-Logo.png";
import './footer.css';

function Footer() {
    return (
    <>
        <div className="footer-container">
            <div className="container">

                <div className="row">
                    <div className="col-xs-6 logo-container">
                        <img src={logo00} />
                    </div>

                    <div className="col-xs-6 link-container">
                        <h4><Link to={ROUTES.ABOUT}>About Me</Link></h4>
                        <h4><Link to={ROUTES.RESUME}>Resume</Link></h4>
                        <h4><Link to={ROUTES.NEWS}>News</Link></h4>
                    </div>
                </div>


                <p style={{marginTop: "4vh"}}>Copyright © 2021 Camisa Vines, All Rights Reserved</p>
            </div>
        </div>
    </>
    )
}

export default Footer;