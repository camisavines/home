import React from 'react';

import Hero from "../components/hero/hero";
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
            <section className="project-height">
                <div className="container">
                    <div className="row project-text">
                        
                        <div className="col-md-6">
                            <img src={p.img} alt={p.alt} width="100%" />
                        </div>

                        <div className="col-md-6 ">
                            <div>

                            <h2>{p.title}</h2>
                            <p>{p.description} {p.link2 ? <a href={p.link2}>{p.link2Text}</a> : <></>}
                            </p>

                            {p.link ? <p><a href={p.link}>See Project</a></p>
                            : <></>}
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        )
    }



    render() {
        return (
        <>
        <div className="container">
            <div className="hero">
                <h1>Hey, what's up?</h1>
                <h2>I'm Camisa. Software Developer and Student.</h2>
            </div>

            
        </div>
        {/* <div className="home-container">
            <Hero showSeparator={true}/>

            {this.projectPosts}

            <section>
                <div className="container">
                    <h2>Companies I've worked with</h2>
                    <div className="row">
                        {this.companyPosts}
                    </div>
                </div>
            </section>


        </div> */}
        </>
        )
    }
}

export default Home;