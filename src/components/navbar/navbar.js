import React from 'react';
import logo00 from "../../photos/00-Logo.png";
import "./navbar.css";

class Navbar extends React.Component {
    constructor(props) {super(props);}

    render() {
    return (
    <>
        <div className="row navbar">
            <div className="col-xs-1 col-md-1">
                <img src={logo00} />
            </div>

            {/* <div className="col-xs-2 col-md-1 offset-md-8">
                <img src={logo00} />
            </div>
            <div className="col-xs-2 col-md-1">
                <img src={logo00} />
            </div>
            <div className="col-xs-2 col-md-1">
                <img src={logo00} />
            </div> */}
        </div>
        
    
    </>
    )
    }
}

export default Navbar;