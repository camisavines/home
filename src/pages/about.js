import React from 'react';

import Hero from "../components/hero/hero";
import * as CAMISA from "../data/camisa";
import '../css/about.css';

class About extends React.Component {
    constructor(props) {
        super(props);

        this.interests = CAMISA.INTERESTS.map(i =>
            <div className="col-6 col-sm-3 col-md-2" style={{padding: "15px"}}>
                <h6>{i}</h6>
            </div>
        )

        this.music = CAMISA.MUSIC.map(m =>
            <div className="col-6 col-md-3">
                <div className="music-cover" style={{backgroundImage: `url(${m.img})`}}></div>
                <h6>{m.artist} x {m.album}</h6>
                <p><small>{m.more}</small></p>
            </div>
        )

        this.movies = CAMISA.MOVIES.map(m =>
            <div className="col-6 col-md-3">
                <div className="movie-cover" style={{backgroundImage: `url(${m.img})`}}></div>
                <h6>{m.title}</h6>
                <p><small>{m.info}</small></p>
            </div>  
        )
    }

    render() {
        return (
        <>
        <Hero />
        <div className="separator reverse"></div>


        <div className="container" style={{marginBottom: "5vh"}}>
            <div className="row">
            
                {/* Image within this div */}
                <div className="col-xs-12 col-sm-6">
                    <div className="hero-image"></div>
                </div>

                <div className="col-xs-12 col-sm-6">
                    <h2><span role="img" aria-labelledby="hero emojis">&#128142;</span> Bio</h2>
                    <p>
                        I am a highly capable and innovative young professional with an exemplary academic report, and a passion for continuous learning and development.                     
                    </p>
                    <p> I am have the ability to work well both independently and part of a team. Although still an undergraduate student, I have internship experience as a frontend web developer and software engineer. I am proficienct in many programming languages and platforms and am confident in my ability to succeed in roles similar to these.</p>
                    
                    <h2><span role="img" aria-labelledby="hero emojis">&#128218;</span> Education</h2>
                    <p>Indiana University-Bloomington</p>
                    <p>Majoring in Computer Science with a specialization in Software Engineering. Minors in Business and Math</p>

                    <h2><span role="img" aria-labelledby="hero emojis">&#128085;</span> Fun Fact</h2>
                    <p>My first name translates to 'shirt' in 4 languages-- spelled and pronounced exactly the same.</p>
                </div>
                
            </div>
        </div>


        <section style={{backgroundColor: "#ccc"}}>
            <div className="container">
                <h2>
                    <span role="img" aria-labelledby="hero emojis">&#128301;</span> Interests
                </h2>
                <div className="row">{this.interests}</div>
            </div>
        </section>

        <section>
            <div className="container">
                <h2> 
                    <span role="img" aria-labelledby="hero emojis">&#127911;</span> Music I Like
                </h2>
                <div className="row">{this.music}</div>
            </div>
        </section>

        <section>
            <div className="container">
                <h2>
                    <span role="img" aria-labelledby="hero emojis">&#127916;</span> Movies I Like
                </h2>
                <div className="row">{this.movies}</div>
            </div>
        </section>


        

   
        </>
        )
    }

}

export default About;