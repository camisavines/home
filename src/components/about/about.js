import React from 'react';
import { Link } from "react-router-dom";

import * as ROUTES from "../../data/routes";

import logo00 from "../../photos/00-Logo.png";
import './about.css';

function AboutComponent() {
    return (
        <>
        <div className="about-container">
            <div className="container">

                <h2>About Me</h2>

                <p>
                    Computer Science student at Indiana University-Bloomington 
                    <br/> Specializing in Software Engineering with minors in Business and Math.
                </p>

                <p>
                    Jobs that interest me are Technology Consultant, Data Analyst, and Software Engineer.
                </p>
                
                <p>
                    I am a highly capable and innovative young professional with an exemplary academic report, and a passion for continuous learning and development. I am have the ability to work well both independently and part of a team. I am always willing to address challenging and unfamiliar tasks.
                    Although I am only a third year, undergraduate student, I have internship experience as a frontend web developer and software engineer. I am proficienct in many programming languages and platforms and am confident in my ability to succeed in roles similar to these.
                </p>

                <p type="button" className="btn"><Link to={ROUTES.ABOUT}>More About Me</Link></p>
                
            </div>
        </div>
        </>
    )
}

export default AboutComponent;