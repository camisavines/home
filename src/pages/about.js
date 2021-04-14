import React from 'react';

import Hero from "../components/hero/hero";
// import logo00 from "../photos/00-Logo.png";
import '../css/about.css';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.interests = [["Tech Consulting"]]
    }

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
                    <p>
                        I am a highly capable and innovative young professional with an exemplary academic report, and a passion for continuous learning and development.                     
                    </p>
                    <p> I am have the ability to work well both independently and part of a team. Although still an undergraduate student, I have internship experience as a frontend web developer and software engineer. I am proficienct in many programming languages and platforms and am confident in my ability to succeed in roles similar to these.</p>
                    
                    <h2>Education</h2>
                    <p>Indiana University-Bloomington</p>
                    <p>Majoring in Computer Science with a specialization in Software Engineering. Minors in Business and Math</p>

                    <h2>Fun Fact</h2>
                    <p>My first name translates to 'shirt' in 4 languages-- spelled and pronounced exactly the same.</p>
                </div>
                
            </div>
        </div>


        <section>
            <div className="container">
                <h2>Interests</h2>
                <div className="row">
                    <div className="col-6 col-sm-3">Tech Consulting</div>
                    <div className="col-6 col-sm-3">Tech Consulting</div>
                    <div className="col-6 col-sm-3">Tech Consulting</div>
                    <div className="col-6 col-sm-3">Tech Consulting</div>
                </div>
            </div>
        </section>
        

        <section>
            <div className="container">
                <h2>Hobbies</h2>
                <div className="row">
                    <div className="col-6 col-sm-3">Tech Consulting</div>
                    <div className="col-6 col-sm-3">Tech Consulting</div>
                    <div className="col-6 col-sm-3">Tech Consulting</div>
                    <div className="col-6 col-sm-3">Tech Consulting</div>
                </div>
            </div>
        </section>


        <section>
            <div className="container">
                <h2>Art I Like</h2>
            </div>
        </section>


        <section>
            <div className="container">
                <h2> <span role="img" aria-labelledby="hero emojis">&#127925; &#127911;</span> Music I Like</h2>
            </div>
        </section>
        

   
        </>
        )
    }

}

export default About;