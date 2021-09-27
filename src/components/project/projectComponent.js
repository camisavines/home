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
        <section>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-xs-12 col-md-6 px-5">
                        <h3>{title}</h3>
                        <h5>{description}</h5>
                        <p>
                            {link ? <a href={link}>View Project</a> : null}
                            {link2 ? <span><span style={separator}>|</span><a href={link2}>{link2text}</a></span> : null}
                        </p>
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <img src={imageURL} width="100%" alt="hero" />
                    </div>
                </div>
            </div>
        </section>
    )

}

export default ProjectComponent;