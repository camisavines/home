
import React from 'react';
// import WebProject from "../components/webProject";
// import GraphicDesign from "../components/designProject";
// import projects from "../components/projects";

import futurewonder from "../photos/fw-1.png";
import sbcs from "../photos/sbcs_logo.png"
import luma from "../photos/luma.png";
import karyosoft from "../photos/karyosoft.png";
import rentlab from "../photos/rentlab.png";
import iu from "../photos/iu.jpg";
import givegrove from "../photos/givegrove.png";
import bgc from "../photos/bgc.png"

// import "../styles/portfolio.css";

const projects = [
    { title: "Future Wonder Website", link: "https://www.futurewonder.com/" },
    { title: "JR Cuisine Website", link: "https://jr-cuisine.com/" }
]


const companies = [
    { name: "sbcs", image: sbcs, size: "90%" },
    { name: "luma", image: luma, size: "65%" },
    { name: "karyosoft", image: karyosoft, size: "90%" },
    { name: "rentlab", image: rentlab, size: "70%" },
    { name: "bgc", image: bgc, size: "70%" },
    { name: "futurwonder", image: futurewonder, size: "70%" },
    { name: "iu", image: iu, size: "40%" },
    { name: "givegrove", image: givegrove, size: "90%" },
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

            <h2>Companies I've Worked With</h2>
            <div className="justtify-center flex item-center container-fluid row"> {COMPANIES} </div>
        </div>
    )
}

export default Portfolio;