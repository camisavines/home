import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from "../data/routes"
import ProjectComponent from "../components/project/projectComponent";
import bdb from "../photos/projects/blackdatabase.png";
import projects from "../data/project";
import '../css/home.css';

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
        window.scrollTo(0,0)


        this.projectPosts = projects.map(p =>
            <div className="col s12 l6">
                <ProjectComponent 
                    imageURL={p.img} 
                    alt={p.alt} 
                    title={p.title} 
                    description={p.description} 
                    link={p.link}
                    link2={p.link2}
                    link2text={p.link2Text}
                />
            </div>
        )
    }



    render() {
        return (
        <div className="container">
            <div className="row hero">
                <h1>Hey! I'm Camisa. <br/> Student and Software Developer.</h1>
                <div className="image"></div>

                <p>My journey in Computer Science started in 2016. I joined a 10-week program with South Bend Code School designed to teach web development to middle school and high school students. Shortly after my completion in the program, at age 16, I recieved my first internship offer as a Web Development Intern for a small company out of Notre Dame, IN. Continuing to practice and development tech skills in high school, I decided to major in Computer Science at Indiana University-Bloomington where I will gradute from in Spring 2022.</p>
                <p>In college, I had more exposure to the tech industry through research, independent study, and other internships. I worked as a Tech Consulting Intern with Future Wonder which provided me my first industry level project and experience.</p>
                <p>Most recently, I have worked as a Software Developer Intern at IBM. And upon gradutation, I hope to continue my career as a Full Stack Developer.</p>
            </div>


            <section>
                <h2>Something I'm working on . . .</h2>
                <img src={bdb} width="100%" alt="hero" />
                <h3>Black Database</h3>
                <h5>I am currently working on a web application that displays a personally curated database containing accomplishments made by extraordinary, black individuals with a focus around tech and black culture. The app will be able to filter through items and give more information about each person, place, or category. Eventually, I'd like to include the accomplishments of all people of color represented in America today.</h5>
            </section>


            <section>
                <h2>Past Projects</h2>
                <div className="row center">
                    {this.projectPosts}
                </div>
            </section>


            <section>
                <h2>More About Me</h2>
                <p>I am a kid at heart. I have two big and beautiful dogs. When I'm not in school, I'm typically hanging out with my friends or streaming a new show or movie. In my freetime, I enjoy traveling, trying new foods, movies, music and art. Recently, I've scratched Hawai'i off of my travel bucket list and I hope to get through my entire list one day.</p>
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

                <Link to={ROUTES.ABOUT}>
                    <p>More About Me  <span style={{verticalAlign: "middle", fontSize: "1.25rem"}} className="material-icons">arrow_forward</span></p>
                </Link>
            </section>

            <section>
                <h2>Thanks for visiting!</h2>
                <p>Let's stay connected on social media. Feel free to reach out with any questions!</p>
            </section>
        </div>
        )
    }
}

export default Home;