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

                <p>Copyright © 2021 Camisa Vines, All Rights Reserved</p>
            </div>
        </div>
    </>
    )
}

export default Footer;