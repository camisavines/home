import React from 'react';

import logo00 from "../../photos/00-Logo.png";
import './about.css';

function About() {
    return (
        <>
        <div className="row about-container">
            <div className="container">
                <img src={logo00} style={{height: "20%"}}/>
                

                <h2>About Me</h2>
                <p className="bigger-p">Computer Science student at Indiana University-Bloomington <br/> Specializing in Software Engineering with minors in Business and Math.</p>
            <p className="bigger-p">Jobs that interest me are Technology Consultant, Data Analyst, and Software Engineer.</p>
            <p className="bigger-p">I am a highly capable and innovative young professional with an exemplary academic report, and a passion for continuous learning and development. I am have the ability to work well both independently and part of a team. I am always willing to address challenging and unfamiliar tasks.
                                    Although I am only a third year, undergraduate student, I have internship experience as a frontend web developer and software engineer. I am proficienct in many programming languages and platforms and am confident in my ability to succeed in roles similar to these.</p>
            </div>
        </div>
        </>
    )
}

export default About;