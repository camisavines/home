import React from 'react';

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
                        <h4>About Me</h4>
                        <h4>Resume</h4>
                        <h4>News</h4>
                    </div>
                </div>




                <p>Copyright © 2021 Camisa Vines, All Rights Reserved</p>
            </div>
        </div>
    </>
    )
}

export default Footer;