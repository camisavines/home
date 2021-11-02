import React from 'react';

import * as CAMISA from "../data/camisa";
import '../css/about.css';
import camisa from "../photos/camisa_pic.JPG"

class About extends React.Component {
    constructor(props) {
        super(props);
        window.scrollTo(0,0);

        this.interests = CAMISA.INTERESTS.map(i =>
            <div className="badge mr-1">- {i}</div>
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
            <div className="badge mr-1">- {h}</div>
        )
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center align-items-center d-flex" style={{height: "80vh"}}>
                    <div className="col-md-6 justify-content-center align-items-center d-flex">
                        <div className="w-75" style={{
                            backgroundImage: `url(${camisa})`, 
                            backgroundRepeat: "no-repeat", 
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            borderRadius: "50%", 
                            paddingTop: "75%"}}>
                        </div>
                        {/* <img src={camisa} /> */}
                    </div>

                    <div className="col-md-6">
                        <h3>Hello, again!</h3>                        
                        <p>I am a highly capable and innovative young professional with an exemplary academic report, and a passion for continuous learning and development.</p>
                        <p> I am have the ability to work well both independently and part of a team. Although still an undergraduate student, I have internship experience as a frontend web developer and software engineer. I am proficienct in many programming languages and platforms and am confident in my ability to succeed in roles similar to these.</p>
                        <p>Most recently, I've worked as a Frontend Development Intern at IBM. This experience was transformative and helped me gain clarity about the corporate work environment and skills needed to thrive in a full stack development position.</p> 
                       
                    </div>
                </div>

                <section>
                    <h5>But, enough with the boring stuff...</h5>
                </section>


                <section>
                    <div className="row">

                        <div className="col-md-4 about ab2">
                            <h3><span className="material-icons">interests</span> Interests</h3>
                            {this.interests}
                        </div>

                        <div className="col-md-4 about ab3">                        
                            <h3><span className="material-icons">pets</span> Hobbies</h3>
                            {this.hobbies}
                        </div>

                        <div className="col-md-4 about ab4">
                            <h3><span className="material-icons">priority_high</span> Fun Fact</h3>
                            <p>My first name translates to 'shirt' in 4 languages-- spelled and pronounced exactly the same.</p>
                        </div>
                    </div>
                </section>


                <section>
                    <h2><span className="material-icons" style={{fontSize: "30pt", verticalAlign: "baseline"}}>library_music</span> Music I Like</h2>
                    <div className="row">{this.music}</div>
                </section>


                <section>
                    <h2><span className="material-icons" style={{fontSize: "30pt", verticalAlign: "baseline"}}>movie</span> Movies I Like</h2>
                    <div className="row">{this.movies}</div>
                </section>

            </div>
        )
    }

}

export default About;