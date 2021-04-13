import React from 'react';
import { Link } from "react-router-dom";

import * as ROUTES from "../../data/routes";
import "./hero.css";

function Hero() {
    return (
        <div className="hero-container row">

            <div className="col-xs-12 col-sm-6">
                <h1>Camisa Vines</h1>
                <h2>Innovator + Developer + Designer + Engineer + Leader + Female &#127752; &#128187;</h2>
                <p className="btn">
                    <Link to={ROUTES.RESUME}>View Resume</Link>
                </p>
            </div>

            {/* Image within this div */}
            <div className="col-xs-12 col-sm-6">
                <div className="hero-image"></div>
            </div>

        </div>
    )
}

export default Hero;