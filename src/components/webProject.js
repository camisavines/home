import React from 'react';

class WebProject extends React.Component {
    constructor(props){
        super(props);
        this.style = {
            backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(${this.props.image})`,
            height: "200px"
        }
        this.color = {
            color: "orangered"
        }
    }

    
    render() {
        return (
            <div className="col-sm-6 col-lg-3 text-center">
                <a href={this.props.website}>
                    <div style={this.style} className="project">
                        <h3 style={this.color}>{this.props.name}</h3>
                    </div>
                </a>
            </div>
        )
    }
}

export default WebProject;