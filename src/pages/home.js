import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from "../data/routes"
import ProjectComponent from "../components/project/projectComponent";
import bdb from "../photos/projects/blackdatabase.png";
import projects from "../data/project";
import timeline from '../data/timeline';
import '../css/home.css';
import '../css/timeline.css';


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
            <div className={`timeline-container ${t.position}`}>
                <div className="date">{t.date}</div>
                    <i className="icon material-icons">{t.icon}</i>
                    {/* <i className="icon fa fa-home"></i> */}

                    <div className="content">
                        <h2>{t.title}</h2>
                        <p>{t.content}</p>
                    </div>
            </div>
        )
    }



    render() {
        return (
        <>
        <div className="home-hero">
            <div className="w-75">
                <h1>Hi, I'm Camisa</h1>
                <h4>Student and Software Developer</h4>
            </div>
        </div>

        <div className="my-5 container">
            <div class="timeline">
                {this.time}
            </div>
        </div>

        <section>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-xs-12 col-md-6 px-5">
                        <h2>Something I'm working on . . .</h2>
                        <h3>Black Database</h3>
                        <h5>I am currently working on a web application that displays a personally curated database containing accomplishments made by extraordinary, black individuals with a focus around tech and black culture. The app will be able to filter through items and give more information about each person, place, or category. Eventually, I'd like to include the accomplishments of all people of color represented in America today.</h5>
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <img src={bdb} width="100%" alt="hero" />
                    </div>
                </div>
            </div>
        </section>

        <hr class="hr-text" data-content="Past Projects" />
        {this.projectPosts}



        <section>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-xs-12 col-md-6 px-5">
                        <h2>More About Me</h2>
                        <p>I am a kid at heart. I have two big and beautiful dogs. When I'm not in school, I'm typically hanging out with my friends or streaming a new show or movie. In my freetime, I enjoy traveling, trying new foods, movies, music and art. Recently, I've scratched Hawai'i off of my travel bucket list and I hope to get through my entire list one day.</p>

                        <Link to={ROUTES.ABOUT}>
                            <p>More About Me  <span style={{verticalAlign: "middle", fontSize: "1.25rem"}} className="material-icons">arrow_forward</span></p>
                        </Link>
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <div className="row collage">
                            <div className="col s12 m6 l4">
                                <img src={dogs} alt="dogs" />
                                <img src={insta} alt="insta" />
                                <img src={sunset} alt="sunset"/>
                            </div>
                            <div className="col s12 m6 l4">
                                <img src={insta3} alt="insta2" />
                                <img src={me} alt="me" />
                                <img src={turtle} alt="turtle" />
                            </div>
                            <div className="col s12 m6 l4">
                                <img src={train} alt="train" />
                                <img src={kualoa} alt="kualoa" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        </>
        )
    }
}

export default Home;