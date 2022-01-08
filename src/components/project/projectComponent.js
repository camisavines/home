import React from 'react';


const ProjectComponent = ({imageURL, title, description, link, link2, link2text}) => {
    const separator = {
        marginLeft: "1rem",
        marginRight: "1rem"
    }

    return (
        <div className="col-sm-12 col-lg-6 mb-4">
            <div className="p-5 h-100">
                <div className="pb-3 text-center">
                    <img src={imageURL} width="75%" alt="projectURL" />
                </div>
                <h4>{title}</h4>
                <p style={{fontSize: "10pt"}}>{description}</p>
                <p>
                    <small>
                        {link ? <a href={link}>View Project</a> : null}
                        {link2 ? <span><span style={separator}>|</span><a href={link2}>{link2text}</a></span> : null}
                    </small>
                </p>
            </div>
        </div>
    )

}

export default ProjectComponent;