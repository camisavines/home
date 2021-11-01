import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from "../data/routes"
import ProjectComponent from "../components/project/projectComponent";
import bdb from "../photos/projects/blackdatabase.png";
import projects from "../data/project";
import timeline from '../data/timeline';
import '../css/home.css';
import '../css/timeline.css';
import { SKILLS } from '../data/camisa';


import dogs from "../photos/fun/dogs.JPG"
import insta from "../photos/fun/insta.PNG";
import insta3 from "../photos/fun/insta3.jpg";
import kualoa from "../photos/fun/kualoa.JPG";
import me from "../photos/fun/me.JPG";
import sunset from "../photos/fun/sunset.JPG";
import turtle from "../photos/fun/turtle.jpg";
import train from "../photos/fun/train.jpg";


class Home extends React.Component {
    constructor(props) {
        super(props);
        window.scrollTo(0,0);

        this.projectPosts = projects.map(p =>
            <ProjectComponent 
                imageURL={p.img} 
                alt={p.alt} 
                title={p.title} 
                description={p.description} 
                link={p.link}
                link2={p.link2}
                link2text={p.link2Text}
            />
        )

        this.time = timeline.map(t => 
            <div className={`tl-item ${t.item_classes}`}>
                <div className={`tl-dot ${t.bar_color}`}></div>
                <div className="tl-content" style={{paddingBottom: "6rem"}}>
                    <h6 className="text-muted" style={{marginTop: "0rem"}}>{t.date}</h6>
                    <h3>{t.title}</h3>
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <p>{t.content}</p>
                            <div className="tl-date text-muted mt-1">{t.subtexts.map(t => { return <>{t}<br/></>})}</div>
                        </div>

                        <div className="col-sm-12 col-md-6">
                            <img src={t.image} width="100%" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }



    render() {
        return (
        <>
            <section className="home-hero">
                <div className="container">
                    <h1>Hi, I'm Camisa</h1>
                    <h4>Student and Software Developer</h4>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="timeline">
                                {this.time}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2 className="my-5">Projects</h2>

                    <div className="row align-items-center p-5">
                        <div className="col-xs-12 text-center">
                            <img src={bdb} width="75%" alt="hero" />
                        </div>

                        <div className="col-xs-12 p-5">
                            <h3>Black Database</h3>
                            <p>I am currently working on a web application that displays a personally curated database containing accomplishments made by extraordinary, black individuals with a focus around tech and black culture. The app will be able to filter through items and give more information about each person, place, or category. Eventually, I'd like to include the accomplishments of all people of color represented in America today.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        {this.projectPosts}
                    </div>
                </div>
            </section>

            <section>
                <div className="container" style={{marginTop: "5rem", marginBottom: "15rem"}}>
                    <h2 className="my-5">Skills</h2>

                    <div className="row my-5">
                        {SKILLS.map((s) => (
                            <div className="col-6 col-md-4 col-lg-3">
                                - {s}
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section>
                <div className="container">
                        <h2 className="my-5">More About Me</h2>
                    <div className="row pb-5">
                        <div className="col-sm-12 col-md-4">
                            <img src={me} width="100%"  />
                        </div>
                        <div className="col-sm-12 col-md-8">
                            <p>5 things to know:</p>
                            <ol style={{lineHeight:"1.75em"}}>
                                <li>I am a kid at heart</li>
                                <li>I have two big and beautiful dogs.</li>
                                <li>When I'm not in school, I'm typically hanging out with my friends or streaming a new show or movie.</li>
                                <li>In my freetime, I enjoy traveling, trying new foods, movies, music and art.</li>
                                <li>Recently, I've scratched Hawai'i off of my travel bucket list and I'm already thinking about my next big adventure.</li>
                            </ol>
                            <p>Too see even more about me (and pictures of my dogs), vist my <Link to={ROUTES.ABOUT}>about</Link> page.</p>
                            
                        </div>
                    </div>
                </div>
            </section>

        </>
        )
    }
}

export default Home;