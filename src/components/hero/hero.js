import React from 'react';
import logo00 from "../../photos/00-Logo.png";
import camisa from "../../photos/camisa.jpg";
import "./hero.css";

function Hero() {
    return (
        <div className="row hero-container">
            <div className="col-xs-12 col-lg-6 hero-content">
                <h1>Camisa Vines</h1>
                <h2>Innovator + Developer + Designer + Engineer + Student + Leader + Female &#127752; &#128187;</h2>
                <button type="button" className="btn">View Resume</button>
            </div>

            {/* Image within this div */}
            <div className="ccol-xs-12 col-lg-6 hero-image"></div>
        </div>
    )
}

export default Hero;