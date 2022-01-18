import React from 'react';

import ProjectComponent from "../components/project/projectComponent";
import projects from "../data/project";
import bdb from "../photos/projects/blackdatabase.png";
import bfa from "../photos/projects/BFA.png";


const Portfolio = () => {
    return (
      <>
        <div className="container">
            <h1 className="py-5">Projects</h1>

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


        <section>
            <div className="container">
                <div className="row">
                    {projects.map(p =>
                        <ProjectComponent 
                            imageURL={p.img} 
                            alt={p.alt} 
                            title={p.title} 
                            description={p.description} 
                            link={p.link}
                            link2={p.link2}
                            link2text={p.link2Text}
                        />
                    )}
                </div>
            </div>
        </section>


        <div className="container">
            <div className="row align-items-center p-5">
                <div className="col-xs-12 text-center">
                    {/* <h5 className='mx-5'>Coming Soon</h5> */}
                    <img src={bfa} width="75%" alt="hero" />
                </div>

                <div className="col-xs-12 p-5">
                    <h3>Black Female Auteurs</h3>
                    <p>One of my senior projects was in a class that studied Black female auteurs. For my final project, I wrote a blog and published a site containing independent research on the topic.</p>
                </div>
            </div>
        </div>

      </>
    )
}

export default Portfolio;