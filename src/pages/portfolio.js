import React from 'react';

import companies from '../js/portfolio_content';
import ProjectComponent from '../components/project/project-component';


const projects = [
    { title: "Future Wonder Website", link: "https://www.futurewonder.com/" },
    // { title: "Who Are We?", link: "https://camisavines.github.io/digital-art-project2/"},
    { title: "JR Cuisine Website", link: "https://jr-cuisine.com/" },
]


const PROJECTS = projects.map(p => 
    <ProjectComponent title={p.title} link ={p.link} />
);

const COMPANIES = companies.map(c =>
    <div className="col-4 col-md-3 mb-3 pb-3 text-center company"><img src={c.image} alt={c.name} width={c.size} /></div>
);

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