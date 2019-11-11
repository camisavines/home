import React from 'react';
import "../styles/portfolio.css";

class WebProject extends React.Component {
    constructor(props){
        super(props);

    }

    
    render() {
        return (
            <div className="col-sm-6" style={{marginBottom: "20px"}}>
                <div className="card bg-dark text-white">
                    <iframe src={this.props.link} scrolling="no" height="350px"></iframe>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.name}</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default WebProject;