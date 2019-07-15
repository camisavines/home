import React from 'react';

class GraphicDesign extends React.Component {
    constructor(props){
        super(props);
        this.style = {
            backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(${this.props.image})`,
            height: "200px"
        }
        this.color = {
            color: "blue"
        }
    }
    
    
    render() {
        return (
            <div className="col-sm-6 col-lg-4 text-center">

                <div className="project" data-toggle="modal" data-target="#exampleModalCenter" style={this.style}>
                    <h3 style={this.color}>{this.props.name}</h3>
                </div>

                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <img src={this.props.image}/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default GraphicDesign;