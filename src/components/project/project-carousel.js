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
                            <h2 style={{fontSize: "3em", color: "white"}}>{p.title}</h2>
                            <p style={{fontSize: "14pt", color: "white"}}>{p.description}</p>
                            <a href={p.link} target="_blank">Visit</a>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            }
        </Carousel>
            
    )
}



export default ProjectCarousel;