import React from 'react';


const ProjectComponent = ({imageURL, title, description, link, link2, link2text}) => {
    const imageStyle = {
        backgroundImage: `url('${imageURL}')`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "40vh"
    }

    const separator = {
        marginLeft: "1rem",
        marginRight: "1rem"
    }

    return (
        <div className="project card">
            <div className="card-content">
                <div class="card-image waves-effect waves-block waves-light">
                    <div className="activator" style={imageStyle}></div>
                </div>

                <span className="card-title activator grey-text text-darken-4">{title}<i className="material-icons right">more_vert</i></span>
                <p>
                    {link ? <a href={link}>View Project</a> : null} 
                    {link2 ? <span><span style={separator}>|</span><a href={link2}>{link2text}</a></span> : null}
                </p>
            </div>

            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">{title}<i class="material-icons right">close</i></span>
                <p>{description}</p>
            </div>
        </div>
    )

}

export default ProjectComponent;