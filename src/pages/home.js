import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from "../data/routes"

import Hero from "../components/hero/hero";
import ProjectComponent from "../components/project/projectComponent";

import companies from "../data/companies";
import projects from "../data/project";
import '../css/home.css';

// Toggle theme colors: https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.companyPosts = companies.map(c =>
            <div className="col-6 col-sm-4 col-lg-3 my-4">
                <img src={c.image} alt={c.name} width={c.size} />
            </div>
        )

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
            <div className="hero">
                <h1>Hey, what's up?</h1>
                <h2>I'm Camisa. <br/> Software Developer and Student.</h2>
                <div className="image"></div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <Link to={ROUTES.ABOUT} >
                    <p>More About Me  <span style={{verticalAlign: "middle", fontSize: "1.25rem"}} className="material-icons">arrow_forward</span></p>
                </Link>
            </div>


            <section>
                <h2>What I've worked on</h2>
                <div className="row center">
                    {this.projectPosts}
                </div>
            </section>

            {/* <section>
                <h2>Let's Connect!</h2>
                <div className="row">
                    <div className="col s12 m6">

                    </div>
                </div>
            </section> */}
        </div>
        )
    }
}

export default Home;