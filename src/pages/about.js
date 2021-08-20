import React from 'react';

// import Hero from "../components/hero/hero";
import * as CAMISA from "../data/camisa";
import '../css/about.css';

class About extends React.Component {
    constructor(props) {
        super(props);

        this.interests = CAMISA.INTERESTS.map(i =>
            <div className="chip">{i}</div>
        )

        this.music = CAMISA.MUSIC.map(m =>
            <div className="col s6 m3">
                <div className="music-cover" style={{backgroundImage: `url(${m.img})`}}></div>
                <h6>{m.artist} x {m.album}</h6>
                <p><small>{m.more}</small></p>
            </div>
        )

        this.movies = CAMISA.MOVIES.map(m =>
            <div className="col s6 m3">
                <div className="movie-cover" style={{backgroundImage: `url(${m.img})`}}></div>
                <h6>{m.title}</h6>
                <p><small>{m.info}</small></p>
            </div>  
        )

        this.hobbies = CAMISA.HOBBIES.map(h => 
            <div className="chip">{h}</div>)
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <h1>More About Me</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12 m6">
                        <div className="hero-image"></div>
                    </div>

                    <div className="col s12 m6">
                        {/* <h3>Hello, again!</h3> */}
                        <p>I am a highly capable and innovative young professional with an exemplary academic report, and a passion for continuous learning and development.</p>
                        <p> I am have the ability to work well both independently and part of a team. Although still an undergraduate student, I have internship experience as a frontend web developer and software engineer. I am proficienct in many programming languages and platforms and am confident in my ability to succeed in roles similar to these.</p>
                        <p>Most recently, I've worked as a Frontend Development Intern at IBM. This experience was transformative and helped me gain clarity about the corporate work environment and skills needed to thrive in a full stack development position.</p>
                    </div>
                </div>


                <section>
                    <div className="row">
                        <div className="col s12 m6 blue" style={{height: "50vh"}}>
                            <h3><span className="material-icons">school</span> Education</h3>
                            <p>Indiana University-Bloomington</p>
                            <p>Majoring in Computer Science with a specialization in Software Engineering. Minors in Business and Math</p>
                        </div>

                        <div className="col s12 m6 green" style={{height: "50vh"}}>
                            <h3><span className="material-icons">interests</span> Interests</h3>
                            {this.interests}
                        </div>

                        <div className="col s12 m6 red" style={{height: "50vh"}}>                        
                            <h3><span className="material-icons">pets</span> Hobbies</h3>
                            {this.hobbies}
                        </div>

                        <div className="col s12 m6 yellow" style={{height: "50vh"}}>
                            <h3><span className="material-icons">priority_high</span> Fun Fact</h3>
                            <p>My first name translates to 'shirt' in 4 languages-- spelled and pronounced exactly the same.</p>
                        </div>
                    </div>
                </section>

               


                <section>
                    <h2><span className="material-icons">library_music</span> Music I Like</h2>
                    <div className="row">{this.music}</div>
                </section>


                <section>
                    <h2><span className="material-icons">movie</span> Movies I Like</h2>
                    <div className="row">{this.movies}</div>
                </section>



            </div>
        )
    }

}

export default About;