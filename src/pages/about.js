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

                <h1 className='py-5'>About Me</h1>
                <div style={{fontSize: "16pt"}}>
                    <p>Hey, again! I'm Camisa Vines - a developer from the corn haven of Indiana, USA, currently based in Austin, Texas. I am a recent college gradute. I studied Computer Science with a minor is Business at Indiana University-Bloomington.</p>
                    <p>
                        Although very early in my career, I am a highly capable and innovative young professional with an exemplary academic report, and a passion for continuous learning and development.
                        I am have the ability to work well both independently and part of a team with internship experience as a frontend developer and software engineer. I am proficienct in many programming languages, platforms and tools.
                        Most recently, I've worked as a Frontend Development Intern at IBM.
                    </p>

                    <p>
                        I love contributing and collaborating within the tech community, especially alongside other young people of color. 
                        For as long as I can remember, I’ve always loved traveling and learning about different cultures, countries, and places. 
                        Working people all over the world has instilled in me a burning desire to advocate and create spaces for those underserved and underrepresented in this industry.
                        And I look forward to continuing this journey.
                    </p>

                    <p>
                        When I'm not coding, you can find me streaming new movies and tv series, listening to music, traveling, cooking, or hanging with friends and family.
                    </p>

    
                    <p>But, enough with the formalities...</p>
                </div>
                


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