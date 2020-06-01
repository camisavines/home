import React from 'react';

import companies from '../js/portfolio_content';

const projects = [
    { title: "Future Wonder Website", link: "https://www.futurewonder.com/" },
    { title: "JR Cuisine Website", link: "https://jr-cuisine.com/" },
    { title: "Personal Webpage", link: "https://camisavines.github.io/home/" }
]



const PROJECTS = projects.map(p =>
    <div className="col-xs-12 col-mg-6 col-lg-4 project-outer">
        <div className="project">
            <h4>{p.title}</h4>
            <p>{p.link}</p>
        </div>
    </div>
)

const COMPANIES = companies.map(c =>
    <div className="col-6 col-md-3 mb-3 text-center company"><img src={c.image} alt={c.name} width={c.size} /></div>
)

function Portfolio() {
    return (
        <div className="py-5 containers">
            <h2>Projects</h2>
            <div className="justify-center flex items-center row pb-5"> {PROJECTS} </div>


            <h2 className="mt-5">Companies I've Worked With</h2>
            <div className="justtify-center flex item-center container-fluid row"> {COMPANIES} </div>
        </div>
    )
}

export default Portfolio;