import React from 'react';
import WebProject from "../components/webProject";
import GraphicDesign from "../components/designProject";
import projects from "../components/projects";

import futurewonder from "../photos/fw-1.png";
import sbcs from "../photos/sbcs_logo.png"
import luma from "../photos/luma.png";
import karyosoft from "../photos/karyosoft.png";
import rentlab from "../photos/rentlab.png";
import iu from "../photos/iu.jpg";
import givegrove from "../photos/givegrove.png";
import bgc from "../photos/bgc.png"

import "../styles/portfolio.css";

function Portfolio() {

  
    const displayProject = projects.map( project => 
        project.link ? <WebProject name={project.title} link={project.link} width={project.width} image={project.image}/> : <GraphicDesign name={project.title} height={project.height}/>
    );


    return (
        <div className="py-5 containers">

            {/* PROJECTS */}
            <h2>Projects</h2>
            <div className="justify-center flex items-center row pb-5">
                {displayProject}
            </div>



            {/* COMPANIES */}
            <h2>Companies I've Worked With</h2>
            <div className="justtify-center flex item-center container-fluid row">
                <div className="col-6 col-md-3 company-image"><img src={sbcs} alt="company"/></div>
                <div className="col-6 col-md-3 company-image"><img src={luma} alt="company"/></div>
                <div className="col-6 col-md-3 company-image"><img src={futurewonder} alt="company"/></div>
                <div className="col-6 col-md-3 company-image"><img src={givegrove} alt="company"/></div>
                <div className="col-6 col-md-3 company-image"><img src={bgc} alt="company"/></div>
                <div className="col-6 col-md-3 company-image"><img src={karyosoft} alt="company"/></div>
                <div className="col-6 col-md-3 company-image"><img src={rentlab} alt="company"/></div>
                <div className="col-6 col-md-3 company-image"><img src={iu} alt="company"/></div>
            </div>

        </div>
    )
}

export default Portfolio;