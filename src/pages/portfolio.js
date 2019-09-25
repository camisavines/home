import React from 'react';
import WebProject from "../components/webProject";
import GraphicDesign from "../components/designProject";
import projects from "../components/projects";

import futurewonder from "../photos/fw.png";
import sbcs from "../photos/sbcs_logo.png"
import luma from "../photos/luma.png";
import karyosoft from "../photos/karyosoft.png";
import rentlab from "../photos/rentlab.webp";
import iu from "../photos/iu.jpeg";

import "../styles/portfolio.css";

function Portfolio() {

  
    const displayProject = projects.map( project => 
        project.link ? <WebProject name={project.title} link={project.link} width={project.width} image={project.image}/> : <GraphicDesign name={project.title} height={project.height}/>
    );


    return (
        <div className="py-5 container">

            {/* PROJECTS */}
            <h2 className="text-white">Projects</h2>
            <div className="justify-center flex items-center row pb-5">
                {displayProject}
            </div>



            {/* COMPANIES */}
            <h2 className="text-white">Companies</h2>
            <div className="justtify-center flex item-center container-fluid row">
                <div className="col-6 col-md-4 company-image"><img src={sbcs}/></div>
                <div className="col-6 col-md-4 company-image"><img src={luma}/></div>
                <div className="col-6 col-md-4 company-image"><img src={futurewonder}/></div>
                <div className="col-6 col-md-4 company-image"><img src={karyosoft}/></div>
                <div className="col-6 col-md-4 company-image"><img src={rentlab}/></div>
                <div className="col-6 col-md-4 company-image"><img src={iu}/></div>
            </div>

        </div>
    )
}

export default Portfolio;