import React from 'react';
import { Link } from "react-router-dom";

import * as ROUTES from "../../data/routes";

import logo01_small from "../../photos/01-Logo small.png";
import "./navbar.css";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
    return (
    <>
        <div className="row navbar">
            <Link to={ROUTES.HOME}>
                <img src={logo01_small} alt="" style={{height: "100%"}}/>
            </Link>

            {/* Maybe add buttons for change color theme */}
        </div>
    </>
    )
    }
}

export default Navbar;