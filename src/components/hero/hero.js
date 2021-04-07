import React from 'react';
import "./hero.css";

function Hero() {
    return (
        <div className="row hero-container">
            <div className="col-xs-12 col-md-6">
                <h1>Camisa Vines</h1>
                <h2>Innovator + Developer + Designer + Engineer + Student + Leader + Female &#127752; &#128187;</h2>
                <button type="button" className="btn">View Resume</button>
            </div>

            {/* Image within this div */}
            <div className="ccol-xs-12 col-md-6 hero-image"></div>
        </div>
    )
}

export default Hero;