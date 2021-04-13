import React from 'react';

import Hero from "../components/hero/hero";
import logo00 from "../photos/00-Logo.png";
import '../css/home.css';

// Toggle theme colors: https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/

class About extends React.Component {
    constructor(props) {super(props);}

    render() {
        return (
        <>
        <Hero />
        <div className="separator reverse"></div>


        <div className="container">
            <div className="row">
            
                {/* Image within this div */}
                <div className="col-xs-12 col-sm-6">
                    <div className="hero-image"></div>
                </div>

                <div className="col-xs-12 col-sm-6">
                    <h2>Bio</h2>
                    <p></p>
                    
                    <h2>School</h2>
                    <p>Indiana University-Bloomington</p>

                    <h2>Major / Minors</h2>
                    <p>Computer Science BS / Business + Math</p>

                    <h2>Fun Fact</h2>
                    <p>My first name translates to 'shirt' in 4 languages-- spelled and pronounced exactly the same.</p>
                </div>
                
            </div>
        </div>

        <div className="row">
            <div className="container">
                <h2>Interests</h2>
            </div>
        </div>
        
        <div className="row">
            <div className="container">
                <h2>Hobbies</h2>
            </div>
        </div>

        <div className="row">
            <div className="container">
                <h2> &#127925; &#127911; Music I Like</h2>
            </div>
        </div>

        <div className="row">
            <div className="container">
                <h2>Art I Like</h2>
            </div>
        </div>
        

   
        </>
        )
    }

}

export default About;