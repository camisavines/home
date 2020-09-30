import React from 'react';
// import "./project-component.css";

class ProjectComponent extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="col-xs-12 col-mg-6 col-lg-4">
                <div className="project">
                    <h4>{this.props.title}</h4>
                    <a href={this.props.link} target="_blank">Visit</a>
                </div>
            </div>


        //     <div className="news-post">
        //     <img className="pb-3" src={p.image}/>
        //     <h3>{p.title}</h3>
        //     <p>{p.date}</p>
        //     <p>{p.description}</p>
        //     <a href={p.link} target="_blank">Visit</a>

        // </div>

            // <div className="col-xs-12 col-mg-6 col-lg-4 project-outer">
            //     <div className="project">
            //         <h4>{this.props.title}</h4>
            //         <p>{this.props.link}</p>
            //     </div>
            // </div>
        )
    }
}



export default ProjectComponent;