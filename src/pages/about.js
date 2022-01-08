import React from 'react';

import * as CAMISA from "../data/camisa";
import '../css/about.css';
import camisa from "../photos/camisa_pic.JPG"
import dogs from "../photos/fun/dogs.JPG";

const About = () => {
    return (
        <>
        <div className="container">
            <h1 className='py-5'>About Me</h1>
            <div className="w-75" style={{fontSize: "12pt"}}>
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
                <p>When I'm not coding, you can find me streaming new movies and tv series, listening to music, traveling, cooking, or hanging with friends and family.</p>


                <p>But, enough with the formalities...</p>
            </div>
        </div>


        <div className='container-fluid my-5 p-5 text-center'>
            <hr/>
            {/* <h2>More Stuff</h2> */}
            <hr/>
        </div>

        <div className='container'>
            <div className='row'>
                {/* Column 1 */}
                <div className='col-md-6'>

                    {/* Interest */}
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">Interests</h3>
                            <p class="card-text">
                                {CAMISA.INTERESTS.map(i =>
                                <div className="badge badge-primary m-1 p-2">{i}</div>
                                )}
                            </p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">Fun Fact</h3>
                            <p class="card-text">
                                My first name translates to 'shirt' in 4 languages-- spelled and pronounced exactly the same.
                            </p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">Top 5 on my Travel Bucket List</h3>
                            <p class="card-text">
                                <ol>
                                    <li>São Paulo, Brazil</li>
                                    <li>Montego Bay, Jamaica</li>
                                    <li>London, England</li>
                                    <li>Los Angeles, California</li>
                                    <li>Tokyo, Japan</li>
                                </ol>
                            </p>
                        </div>
                    </div>

                </div>



                {/* Column 2 */}
                <div className='col-md-6'>
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">Hobbies</h3>
                            <p class="card-text">
                                {CAMISA.HOBBIES.map(i =>
                                <div className="badge badge-primary m-1 p-2">{i}</div>
                                )}
                            </p>
                        </div>
                    </div>

                    <div class="card mb-4">
                        <div class="card-body">
                            <h3 class="card-title">My doggies</h3>
                            <img src={dogs} width="100%"/>

                            <p class="card-text mt-3 mb-0 text-muted">
                                <small>
                                    FAQ: "What kind of dog is that?" <br/>
                                    Answer: "American Rottweiler and Cane Corso"
                                </small>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>



        <div className='container'>
            <div className='my-5'>
                <h3>Music I Like</h3>
                <p>Just so you know, this short list changes every week...</p>
                <div className="row">
                    {CAMISA.MUSIC.map(m =>
                        <div className="col-6 col-sm-3 col-md-2">
                            <div className="music-cover" style={{backgroundImage: `url(${m.img})`}}></div>
                            <h6>{m.artist} x {m.album}</h6>
                            <p style={{lineHeight: "1"}}><small>{m.more}</small></p>
                        </div>
                    )}
                </div>
            </div>


            <div className='my-5'>
                <h3>Movies I Like</h3>
                <p>Also changes very often...</p>
                <div className="row">
                    {CAMISA.MOVIES.map(m =>
                        <div className="col-6 col-sm-3 col-md-2">
                            <div className="movie-cover" style={{backgroundImage: `url(${m.img})`}}></div>
                            <h6>{m.title}</h6>
                            <p style={{lineHeight: "1"}}><small>{m.info}</small></p>
                        </div>  
                    )}
                </div>
            </div>

        </div>
            

        </>
    )
}

export default About;