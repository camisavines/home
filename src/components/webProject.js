import React from 'react';
import "../styles/portfolio.css";

class WebProject extends React.Component {
    constructor(props){
        super(props);
        this.width = `col-12 col-sm-6 col-md-${this.props.width} project-container`
        this.style = {
            backgroundImage: `url(${this.props.image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center top",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            height: "100px",
            marginBottom: "30px",
            borderRadius: "5px",
            fontWeight: "bold"
        }
    }

    
    render() {
        return (
            <div className={this.width}>
                <a href={this.props.link} target="_blank">
                    <div style={this.style}>
                        <div className="project px-3"><h3>{this.props.name}</h3></div>
                    </div>
                </a>
            </div>
        )
    }
}

export default WebProject;