import React from 'react';

import companies from '../js/companies';
import ProjectCarousel from '../components/project/project-carousel';


const COMPANIES = companies.map(c =>
  <div className="col-4 col-md-3 mb-3 pb-3 text-center company">
    <img src={c.image} alt={c.name} width={c.size} />
  </div>
);


function Portfolio() {
    return (
        <div className="py-5 containers">
            <h2>Projects</h2>
            <ProjectCarousel /> 


            <h2 className="mt-5">Companies I've Worked With</h2>
            <div className="justtify-center flex item-center container-fluid row"> {COMPANIES} </div>
        </div>
    )
}

export default Portfolio;