import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import projects from '../../js/project';





function ProjectCarousel() {
    return (

        <Carousel>
            {
                projects.map(p =>
                    <Carousel.Item>
                        <img className="d-block w-100" src={p.img} alt={p.alt} />

                        <Carousel.Caption>
                            <div className="py-3 px-5 mb-3" style={{background: "#1d1919", width: "100%", border: "3px solid #f8b739"}}>
                                <h2 style={{fontSize: "2em", color: "#f8b739", textDecoration: "underline"}}>{p.title}</h2>
                                <p style={{fontSize: "10pt", color: "white", lineHeight: "12pt"}}>{p.description}</p>
                                <a href={p.link} target="_blank">Visit</a>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            }
        </Carousel>
            
    )
}



export default ProjectCarousel;